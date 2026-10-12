import { ArticleFeed } from '@/components/article-feed'
import { NewsSidebar } from '@/components/news-sidebar'
import { ToolExplorer } from '@/components/tool-explorer'
import { getFeedArticles, toIsoDate } from '@/lib/news'

export default function Page() {
  const articles = getFeedArticles()
  const latestNews = articles.find((article) => article.type === 'news')

  return (
    <main>
      {latestNews && (
        <div className="border-b border-border">
          <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-hidden px-4 py-2.5 text-xs sm:px-6">
            <span className="flex shrink-0 items-center gap-2 font-mono font-bold text-brand">
              <span className="relative flex size-1.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
              </span>
              LIVE
            </span>
            <time dateTime={toIsoDate(latestNews.publishedAt)} className="shrink-0 font-mono text-muted-foreground">
              {latestNews.publishedAt} 更新
            </time>
            <p className="truncate text-muted-foreground">{latestNews.title}</p>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <ArticleFeed articles={articles} />
        <NewsSidebar />
      </div>

      <section id="database" aria-labelledby="database-heading" className="scroll-mt-20 border-t border-border bg-[oklch(0.2_0.004_260)]">
        <ToolExplorer variant="embedded" />
      </section>
    </main>
  )
}
