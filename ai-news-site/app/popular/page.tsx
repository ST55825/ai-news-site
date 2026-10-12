import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'lucide-react'
import { NewsMeta } from '@/components/news-meta'
import { NewsSidebar } from '@/components/news-sidebar'
import { formatViews, getPopularArticles } from '@/lib/news'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: '人気記事ランキング',
  description: '海外AIツールに関するニュースのうち、よく読まれている記事のランキング。',
}

export default function PopularPage() {
  const articles = getPopularArticles()

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-mono text-xs tracking-[0.2em] text-brand">RANKING</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">人気記事ランキング</h1>
      <p className="mt-3 text-sm text-muted-foreground">直近でよく読まれている海外AIツール紹介・AIニュースです。</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <ol className="flex flex-col gap-4">
          {articles.map((article, index) => (
            <li key={article.id}>
              <article className="group relative flex gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-white/20 sm:gap-5">
                <span
                  className={cn(
                    'w-8 shrink-0 pt-1 text-center font-mono text-2xl font-bold',
                    index < 3 ? 'text-brand' : 'text-muted-foreground',
                  )}
                >
                  {index + 1}
                </span>
                <div className="relative hidden aspect-[16/10] w-44 shrink-0 overflow-hidden rounded-xl sm:block">
                  <Image
                    src={article.image || '/placeholder.svg'}
                    alt={article.imageAlt}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <NewsMeta article={article} />
                  <h2 className="text-pretty text-base font-bold leading-snug group-hover:text-brand">
                    <Link href={`/articles/${article.id}`} className="after:absolute after:inset-0">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{article.description}</p>
                  <span className="mt-auto flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <Eye className="size-3.5" aria-hidden="true" />
                    {formatViews(article.views)} views
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ol>
        <NewsSidebar />
      </div>
    </main>
  )
}
