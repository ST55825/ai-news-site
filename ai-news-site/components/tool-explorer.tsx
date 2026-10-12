'use client'

import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import {
  AudioLines,
  Clapperboard,
  Code,
  Image as ImageIcon,
  LayoutGrid,
  Palette,
  PenLine,
  Search,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { ToolCard } from '@/components/tool-card'
import { CATEGORIES, TOOLS, type Category } from '@/lib/tools'
import { cn } from '@/lib/utils'

const CATEGORY_ICONS: Record<Category, LucideIcon> = {
  文章作成: PenLine,
  画像生成: ImageIcon,
  動画生成: Clapperboard,
  デザイン: Palette,
  業務効率化: Zap,
  '音声・音楽': AudioLines,
  開発: Code,
}

type Filter = Category | 'すべて'

type ToolExplorerProps = {
  variant?: 'page' | 'embedded'
  initialQuery?: string
  initialCategory?: Category
}

export function ToolExplorer({ variant = 'page', initialQuery = '', initialCategory }: ToolExplorerProps) {
  const [query, setQuery] = useState(initialQuery)
  const [activeCategory, setActiveCategory] = useState<Filter>(initialCategory ?? 'すべて')
  const isEmbedded = variant === 'embedded'
  const deferredQuery = useDeferredValue(query)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement
      const isTyping = ['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable
      if (event.key === '/' && !isTyping) {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([['すべて', TOOLS.length]])
    for (const category of CATEGORIES) {
      map.set(category, TOOLS.filter((tool) => tool.categories.includes(category)).length)
    }
    return map
  }, [])

  const filteredTools = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()
    return TOOLS.filter((tool) => {
      const matchesCategory =
        activeCategory === 'すべて' || tool.categories.includes(activeCategory)
      if (!matchesCategory) return false
      if (!normalized) return true
      const haystack = [tool.name, tool.company, ...tool.summary, ...tool.categories, tool.description]
        .join(' ')
        .toLowerCase()
      return haystack.includes(normalized)
    })
  }, [deferredQuery, activeCategory])

  const filters: Filter[] = ['すべて', ...CATEGORIES]

  return (
    <>
      <div className={cn(!isEmbedded && 'border-b border-border')}>
        <div
          className={cn(
            'mx-auto max-w-7xl px-4 sm:px-6',
            isEmbedded ? 'pt-12 pb-2 sm:pt-16' : 'pt-12 pb-8 sm:pt-16',
          )}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            AI Tools Database
          </p>
          {isEmbedded ? (
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="database-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
                AIツールデータベース
              </h2>
              <p className="text-sm text-muted-foreground">
                過去に取り上げた{TOOLS.length}件のツールを、辞書のように検索できます。
              </p>
            </div>
          ) : (
            <>
              <h1 className="mt-4 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                海外の最新AIツールを、
                <br className="hidden sm:block" />
                ひと目で見つける。
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                画像生成から業務効率化まで、ニュースで取り上げた海外AIツールを日本語の3行要約でまとめたデータベースです。
              </p>
            </>
          )}

          <div className={cn('flex flex-col gap-4', isEmbedded ? 'mt-6' : 'mt-10')}>
            <div className="relative">
              <label htmlFor="tool-search" className="sr-only">
                AIツールを検索
              </label>
              <Search
                className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                ref={inputRef}
                id="tool-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="ツール名・機能・キーワードで検索"
                autoComplete="off"
                className="h-12 w-full rounded-xl border border-input bg-card pr-20 pl-11 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-brand/50 focus-visible:ring-4 focus-visible:ring-brand/15 focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              <div className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-2">
                {query ? (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('')
                      inputRef.current?.focus()
                    }}
                    className="grid size-7 place-items-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
                    aria-label="検索をクリア"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                ) : (
                  <kbd className="hidden rounded-md border border-border bg-secondary px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground sm:inline-block">
                    /
                  </kbd>
                )}
              </div>
            </div>

            <div
              role="group"
              aria-label="カテゴリで絞り込み"
              className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
            >
              {filters.map((filter) => {
                const Icon = filter === 'すべて' ? LayoutGrid : CATEGORY_ICONS[filter]
                const isActive = activeCategory === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(filter)}
                    className={cn(
                      'flex h-9 shrink-0 items-center gap-2 rounded-full border px-3.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                      isActive
                        ? 'border-brand bg-brand text-brand-foreground'
                        : 'border-border bg-card text-muted-foreground hover:border-white/20 hover:text-foreground',
                    )}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {filter}
                    <span
                      className={cn(
                        'font-mono text-[11px]',
                        isActive ? 'text-brand-foreground/70' : 'text-muted-foreground/70',
                      )}
                    >
                      {counts.get(filter)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <section aria-labelledby="results-heading" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 id="results-heading" className={cn('text-sm font-medium', isEmbedded && 'sr-only sm:not-sr-only')}>
            {activeCategory === 'すべて' ? 'すべてのツール' : activeCategory}
          </h2>
          <p className="font-mono text-xs text-muted-foreground" aria-live="polite">
            {filteredTools.length} 件
          </p>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-border px-6 py-20 text-center">
            <Search className="size-6 text-muted-foreground" aria-hidden="true" />
            <p className="mt-4 font-medium">該当するツールが見つかりませんでした</p>
            <p className="mt-1 text-sm text-muted-foreground">
              キーワードを変えるか、カテゴリを「すべて」に戻してお試しください。
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setActiveCategory('すべて')
              }}
              className="mt-6 h-9 rounded-lg border border-border bg-card px-4 text-sm font-medium hover:border-white/20"
            >
              条件をリセット
            </button>
          </div>
        )}
      </section>
    </>
  )
}
