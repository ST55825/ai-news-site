import Image from 'next/image'
import Link from 'next/link'
import { NewsMeta } from '@/components/news-meta'
import type { FeedArticle } from '@/lib/news'

export function NewsCard({ article }: { article: FeedArticle }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-white/20">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={article.image || '/placeholder.svg'}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <NewsMeta article={article} />
        <h3 className="text-pretty text-base font-bold leading-snug tracking-tight">
          <Link
            href={`/articles/${article.id}`}
            className="after:absolute after:inset-0 group-hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            {article.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{article.description}</p>
      </div>
    </article>
  )
}
