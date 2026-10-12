import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ToolLogo } from '@/components/tool-logo'
import type { Tool } from '@/lib/tools'

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-white/20 hover:bg-[oklch(0.27_0.004_260)]">
      <header className="flex items-start gap-3.5">
        <ToolLogo tool={tool} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold tracking-tight">{tool.name}</h3>
          <p className="truncate text-xs text-muted-foreground">{tool.company}</p>
        </div>
        <span className="shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {tool.pricing}
        </span>
      </header>

      <ul className="mt-5 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
        {tool.summary.map((line) => (
          <li key={line} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
            <span className="text-pretty">{line}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <ul className="flex flex-wrap gap-1.5" aria-label="カテゴリ">
          {tool.categories.map((category) => (
            <li
              key={category}
              className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground"
            >
              {category}
            </li>
          ))}
        </ul>

        <Link
          href={`/tools/${tool.slug}`}
          className="mt-4 flex h-10 items-center justify-between rounded-lg border border-border bg-background/40 px-3.5 text-sm font-medium transition-colors after:absolute after:inset-0 after:rounded-2xl group-hover:border-brand/40 group-hover:bg-brand group-hover:text-brand-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          詳細を見る
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          <span className="sr-only">{`: ${tool.name}`}</span>
        </Link>
      </div>
    </article>
  )
}
