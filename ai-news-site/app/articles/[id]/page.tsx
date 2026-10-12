import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Eye, Info, Tag } from 'lucide-react'
import { NewsCard } from '@/components/news-card'
import { NewsMeta } from '@/components/news-meta'
import { NewsSidebar } from '@/components/news-sidebar'
import {
  formatViews,
  getArticleById,
  getFeedArticles,
  getRelatedArticles,
  splitImpact,
  TYPE_LABEL,
} from '@/lib/news'

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return getFeedArticles().map((article) => ({ id: article.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const article = getArticleById(id)
  if (!article) return {}
  return { title: article.title, description: article.description }
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params
  const article = getArticleById(id)
  if (!article) notFound()

  const related = getRelatedArticles(article)
  const isNews = article.type === 'news'

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        記事一覧へ戻る
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="flex flex-col gap-12">
          <article>
            <header className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <NewsMeta article={article} />
                <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <Eye className="size-3.5" aria-hidden="true" />
                  {formatViews(article.views)} views
                </span>
              </div>
              <h1 className="text-balance text-2xl font-bold leading-snug tracking-tight sm:text-4xl">
                {article.title}
              </h1>
              <p className="text-pretty text-base leading-[1.7] text-muted-foreground">{article.description}</p>
              {!isNews && (
                <dl className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Tag className="size-3.5 text-muted-foreground" aria-hidden="true" />
                    <dt className="text-muted-foreground">カテゴリ</dt>
                    <dd className="font-medium">{article.category}</dd>
                  </div>
                  {article.pricingModel && (
                    <div className="flex items-center gap-1.5">
                      <dt className="text-muted-foreground">料金</dt>
                      <dd className="font-medium">{article.pricingModel}</dd>
                    </div>
                  )}
                </dl>
              )}
            </header>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
              <Image
                src={article.image || '/placeholder.svg'}
                alt={article.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 860px, 100vw"
                className="object-cover"
              />
            </div>

            <section
              aria-labelledby="summary-heading"
              className="mt-8 rounded-2xl border border-brand/25 bg-brand/5 p-5 sm:p-6"
            >
              <h2 id="summary-heading" className="font-mono text-xs font-bold tracking-[0.2em] text-brand">
                3行でわかるこの{TYPE_LABEL[article.type]}
              </h2>
              <ol className="mt-3 flex flex-col gap-2 text-sm leading-relaxed sm:text-base">
                {article.summary.map((line, index) => (
                  <li key={line} className="flex gap-3">
                    <span className="font-mono font-bold text-brand">{index + 1}</span>
                    <span className="text-pretty">{line}</span>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-10">
              {article.content.map((section) => (
                <section key={section.sectionTitle} className="flex flex-col gap-3">
                  <h2 className="text-pretty text-lg font-bold tracking-tight sm:text-xl">{section.sectionTitle}</h2>
                  <p className="text-pretty text-base leading-[1.7] text-foreground/85 sm:text-[17px]">
                    {section.text}
                  </p>
                </section>
              ))}

              <section aria-labelledby="impact-heading" className="flex flex-col gap-4 border-t border-border pt-10">
                <h2 id="impact-heading" className="text-lg font-bold tracking-tight sm:text-xl">
                  ビジネスへの影響
                </h2>
                <dl className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
                  {article.businessImpact.map((line) => {
                    const { label, text } = splitImpact(line)
                    return (
                      <div key={line} className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-6">
                        {label && <dt className="shrink-0 text-sm font-bold text-brand sm:w-44">{label}</dt>}
                        <dd className="text-pretty text-sm leading-[1.7] text-foreground/85">{text}</dd>
                      </div>
                    )
                  })}
                </dl>
              </section>

              <aside
                role="note"
                aria-labelledby="disclaimer-heading"
                className="flex gap-3 rounded-xl border border-border bg-secondary/60 p-4 sm:p-5"
              >
                <Info className="mt-0.5 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div className="flex flex-col gap-1.5">
                  <h2 id="disclaimer-heading" className="text-sm font-bold">
                    ■ 注意点・信頼性情報
                  </h2>
                  <p className="text-pretty text-sm leading-[1.7] text-muted-foreground">{article.disclaimer}</p>
                </div>
              </aside>

              {isNews && article.source && (
                <a
                  href={article.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:p-5"
                >
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                      PRIMARY SOURCE
                    </span>
                    <span className="truncate text-base font-bold group-hover:text-brand">
                      {article.source.name}
                      {article.source.publishedDate && (
                        <span className="font-medium text-muted-foreground">
                          （{article.source.publishedDate}発表）
                        </span>
                      )}
                    </span>
                    <span className="truncate font-mono text-xs text-muted-foreground">
                      {new URL(article.source.url).hostname}
                    </span>
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                  <span className="sr-only">（一次情報ソースを新しいタブで開きます）</span>
                </a>
              )}
            </div>
          </article>

          <section aria-labelledby="more-heading">
            <h2 id="more-heading" className="mb-4 text-lg font-bold tracking-tight">
              あわせて読みたい
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {related.map((item) => (
                <NewsCard key={item.id} article={item} />
              ))}
            </div>
          </section>
        </div>

        <NewsSidebar showPopular />
      </div>
    </main>
  )
}
