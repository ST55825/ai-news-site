import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TYPE_LABEL, toIsoDate, type Article } from '@/lib/news'

export function RegionBadge({ region, className }: { region: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex max-w-full items-center gap-1 rounded-md border border-brand/40 bg-brand/10 px-1.5 py-0.5 font-bold text-brand',
        className,
      )}
    >
      <MapPin className="size-3 shrink-0" aria-hidden="true" />
      <span className="sr-only">対象地域：</span>
      <span className="truncate">{region}</span>
    </span>
  )
}

export function NewsMeta({ article, className }: { article: Article; className?: string }) {
  const isNews = article.type === 'news'

  return (
    <div className={cn('flex flex-wrap items-center gap-2 text-xs', className)}>
      <span
        className={cn(
          'rounded-md px-1.5 py-0.5 font-bold',
          isNews ? 'bg-foreground text-background' : 'bg-secondary text-secondary-foreground',
        )}
      >
        {TYPE_LABEL[article.type]}
      </span>
      {isNews && article.targetRegion ? (
        <RegionBadge region={article.targetRegion} />
      ) : (
        <span className="rounded-md border border-border px-1.5 py-0.5 font-medium text-muted-foreground">
          {article.category}
        </span>
      )}
      <time dateTime={toIsoDate(article.publishedAt)} className="font-mono text-muted-foreground">
        {article.publishedAt}
      </time>
    </div>
  )
}
