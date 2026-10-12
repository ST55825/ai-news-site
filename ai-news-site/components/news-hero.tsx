import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NewsMeta } from '@/components/news-meta'
import type { FeedArticle } from '@/lib/news'

export function NewsHero({ article }: { article: FeedArticle }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={article.image || '/placeholder.svg'}
          alt={article.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 860px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <span className="absolute top-4 left-4 rounded-md bg-brand px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-brand-foreground">
          TODAY&apos;S TOP
        </span>
      </div>

      <div className="relative -mt-16 flex flex-col gap-4 p-5 sm:p-7">
        <NewsMeta article={article} />
        <h2 className="text-balance text-xl font-bold leading-snug tracking-tight sm:text-3xl">
          <Link
            href={`/articles/${article.id}`}
            className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            {article.title}
          </Link>
        </h2>
        <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {article.summary.map((line) => (
            <li key={line} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-brand" />
              <span className="text-pretty">{line}</span>
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
          記事を読む
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  )
}
