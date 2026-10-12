import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { ToolCard } from '@/components/tool-card'
import { ToolLogo } from '@/components/tool-logo'
import { TOOLS, getRelatedTools, getToolBySlug } from '@/lib/tools'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) return {}
  return {
    title: `${tool.name}（${tool.company}）`,
    description: tool.summary.join(' '),
  }
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) notFound()

  const related = getRelatedTools(tool)
  const meta = [
    { label: '開発元', value: tool.company },
    { label: '拠点', value: tool.country },
    { label: '料金', value: tool.pricing },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/tools"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        ツール一覧へ戻る
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
        <article>
          <header className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <ToolLogo tool={tool} className="size-16 rounded-2xl p-3.5" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{tool.name}</h1>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="カテゴリ">
                {tool.categories.map((category) => (
                  <li
                    key={category}
                    className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <section aria-labelledby="summary-heading" className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h2 id="summary-heading" className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              3行でわかる {tool.name}
            </h2>
            <ol className="mt-4 flex flex-col gap-3">
              {tool.summary.map((line, index) => (
                <li key={line} className="flex gap-4 text-pretty leading-relaxed">
                  <span className="font-mono text-sm text-muted-foreground">{`0${index + 1}`}</span>
                  {line}
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="about-heading" className="mt-10">
            <h2 id="about-heading" className="text-lg font-semibold">
              概要
            </h2>
            <p className="mt-3 text-pretty leading-loose text-muted-foreground">{tool.description}</p>
          </section>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-lg font-semibold">
                主な機能
              </h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="usecases-heading">
              <h2 id="usecases-heading" className="text-lg font-semibold">
                おすすめの活用シーン
              </h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                {tool.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6">
            <dl className="flex flex-col divide-y divide-border">
              {meta.map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3 first:pt-0">
                  <dt className="text-sm text-muted-foreground">{item.label}</dt>
                  <dd className="text-sm font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={tool.website}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex h-11 items-center justify-center gap-2 rounded-lg bg-brand text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              公式サイトを見る
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-20 border-t border-border pt-10">
          <h2 id="related-heading" className="text-lg font-semibold">
            関連するツール
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedTool) => (
              <ToolCard key={relatedTool.slug} tool={relatedTool} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
