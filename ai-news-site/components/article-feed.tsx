'use client'

import { useState, type KeyboardEvent } from 'react'
import { NewsCard } from '@/components/news-card'
import { NewsHero } from '@/components/news-hero'
import { cn } from '@/lib/utils'
import type { ArticleType, FeedArticle } from '@/lib/news'

type Tab = 'all' | ArticleType

const TABS: { value: Tab; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'tool', label: 'AI Tools' },
  { value: 'news', label: 'AI News' },
]

const HEADINGS: Record<Tab, string> = {
  all: '最新の記事',
  tool: '注目のAIツール',
  news: '最新AIニュース',
}

export function ArticleFeed({ articles }: { articles: FeedArticle[] }) {
  const [tab, setTab] = useState<Tab>('all')

  const filtered = tab === 'all' ? articles : articles.filter((article) => article.type === tab)
  const [hero, ...rest] = filtered

  const countFor = (value: Tab) =>
    value === 'all' ? articles.length : articles.filter((article) => article.type === value).length

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    const index = TABS.findIndex((item) => item.value === tab)
    const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + TABS.length) % TABS.length
    setTab(TABS[next].value)
    document.getElementById(`feed-tab-${TABS[next].value}`)?.focus()
  }

  return (
    <div className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="記事の種類で絞り込む"
        onKeyDown={handleKeyDown}
        className="flex w-full items-center gap-1 rounded-xl border border-border bg-card p-1 sm:w-fit"
      >
        {TABS.map((item) => {
          const selected = item.value === tab
          return (
            <button
              key={item.value}
              id={`feed-tab-${item.value}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="feed-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(item.value)}
              className={cn(
                'flex h-9 flex-1 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:flex-none',
                selected
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              {item.label}
              <span
                className={cn(
                  'font-mono text-[11px]',
                  selected ? 'text-background/60' : 'text-muted-foreground/70',
                )}
              >
                {countFor(item.value)}
              </span>
            </button>
          )
        })}
      </div>

      <div id="feed-panel" role="tabpanel" aria-labelledby={`feed-tab-${tab}`} className="flex flex-col gap-12">
        {hero && <NewsHero key={hero.id} article={hero} />}

        {rest.length > 0 && (
          <section aria-labelledby="latest-heading">
            <div className="mb-5">
              <p className="font-mono text-[11px] tracking-[0.2em] text-brand">LATEST</p>
              <h2 id="latest-heading" className="mt-1 text-xl font-bold tracking-tight">
                {HEADINGS[tab]}
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {rest.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
