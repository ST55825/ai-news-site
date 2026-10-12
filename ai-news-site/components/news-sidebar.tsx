import Link from 'next/link'
import { ArrowUpRight, Mail, Rss, TrendingUp } from 'lucide-react'
import { ToolLogo } from '@/components/tool-logo'
import { getPopularArticles, getTrendingTools } from '@/lib/news'

const X_LOGO = 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/x/default.svg'

export function NewsSidebar({ showPopular = false }: { showPopular?: boolean }) {
  const trending = getTrendingTools()
  const popular = getPopularArticles().slice(0, 4)

  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start" aria-label="サイドバー">
      <section aria-labelledby="trending-heading" className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between">
          <h2 id="trending-heading" className="flex items-center gap-2 text-sm font-bold">
            <TrendingUp className="size-4 text-brand" aria-hidden="true" />
            今週の話題ツール Top5
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground">WEEKLY</span>
        </div>
        <ol className="mt-4 flex flex-col">
          {trending.map(({ tool, mentions }, index) => (
            <li key={tool.slug} className="border-t border-border first:border-t-0">
              <Link
                href={`/tools/${tool.slug}`}
                className="group flex items-center gap-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span
                  className={
                    index < 3
                      ? 'w-5 font-mono text-lg font-bold text-brand'
                      : 'w-5 font-mono text-lg font-bold text-muted-foreground'
                  }
                >
                  {index + 1}
                </span>
                <ToolLogo tool={tool} className="size-9 rounded-lg p-2" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold group-hover:text-brand">{tool.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{tool.categories[0]}</span>
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {mentions.toLocaleString('ja-JP')}
                  <span className="sr-only">件の言及</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <Link
          href="/tools"
          className="mt-2 flex h-9 items-center justify-center rounded-lg border border-border text-xs font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
        >
          データベースをすべて見る
        </Link>
      </section>

      {showPopular && (
        <section aria-labelledby="popular-heading" className="rounded-2xl border border-border bg-card p-5">
          <h2 id="popular-heading" className="text-sm font-bold">
            よく読まれている記事
          </h2>
          <ol className="mt-3 flex flex-col">
            {popular.map((article, index) => (
              <li key={article.id} className="border-t border-border first:border-t-0">
                <Link
                  href={`/articles/${article.id}`}
                  className="flex gap-3 py-3 text-sm leading-snug hover:text-brand"
                >
                  <span className="font-mono font-bold text-muted-foreground">{index + 1}</span>
                  <span className="line-clamp-2 text-pretty">{article.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section
        aria-labelledby="follow-heading"
        className="overflow-hidden rounded-2xl border border-border bg-card p-5"
      >
        <h2 id="follow-heading" className="text-sm font-bold">
          最新情報をフォロー
        </h2>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          海外AIの速報を毎日配信中。見逃したくない方はフォローしてください。
        </p>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex h-11 items-center gap-3 rounded-lg bg-foreground px-4 text-sm font-bold text-background transition-opacity hover:opacity-90"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={X_LOGO} alt="" width={16} height={16} className="size-4" />
          <span className="flex-1 truncate">Xでフォローする</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">（新しいタブで開きます）</span>
        </a>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <a
            href="#"
            className="flex h-10 items-center justify-center gap-2 rounded-lg border border-border text-xs font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            ニュースレター
          </a>
          <a
            href="#"
            className="flex h-10 items-center justify-center gap-2 rounded-lg border border-border text-xs font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
          >
            <Rss className="size-3.5" aria-hidden="true" />
            RSS
          </a>
        </div>
      </section>
    </aside>
  )
}
