import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ToolLogo } from '@/components/tool-logo'
import { CATEGORIES, TOOLS } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'カテゴリ一覧',
  description: '画像生成・文章作成・デザイン・業務効率化など、カテゴリ別に海外AIツールとニュースを探せます。',
}

export default function CategoriesPage() {
  const categories = CATEGORIES.map((category) => {
    const tools = TOOLS.filter((tool) => tool.categories.includes(category))
    return { category, tools }
  })

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-mono text-xs tracking-[0.2em] text-brand">CATEGORIES</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">カテゴリから探す</h1>
      <p className="mt-3 text-sm text-muted-foreground">分野ごとにツールと最新ニュースをまとめています。</p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ category, tools }) => (
          <li key={category}>
            <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-white/20">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-bold">
                  <Link
                    href={`/tools?category=${encodeURIComponent(category)}`}
                    className="after:absolute after:inset-0 group-hover:text-brand"
                  >
                    {category}
                  </Link>
                </h2>
                <span className="font-mono text-xs text-muted-foreground">{tools.length} tools</span>
              </div>
              <div className="mt-4 flex -space-x-2">
                {tools.slice(0, 5).map((tool) => (
                  <ToolLogo key={tool.slug} tool={tool} className="size-9 rounded-lg p-2 ring-2 ring-card" />
                ))}
              </div>
              <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-brand">
                ツールを見る
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}
