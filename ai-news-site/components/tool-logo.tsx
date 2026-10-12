import { cn } from '@/lib/utils'
import type { Tool } from '@/lib/tools'

export function ToolLogo({ tool, className }: { tool: Tool; className?: string }) {
  return (
    <span
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-xl bg-white p-2.5 ring-1 ring-white/10',
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tool.logo}
        alt={`${tool.name} ロゴ`}
        width={32}
        height={32}
        loading="lazy"
        className="size-full object-contain"
      />
    </span>
  )
}
