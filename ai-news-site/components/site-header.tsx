'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { href: '/', label: 'ホーム（ニュース）' },
  { href: '/tools', label: 'AIツールデータベース' },
  { href: '/popular', label: '人気記事' },
  { href: '/categories', label: 'カテゴリ' },
]

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/' || pathname.startsWith('/articles')
  return pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Global AI Trends ホーム">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-lg bg-brand font-mono text-[11px] font-bold tracking-tighter text-brand-foreground"
          >
            GAT
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight">Global AI Trends</span>
            <span className="mt-1 hidden font-mono text-[10px] text-muted-foreground sm:block">
              海外AIニュース & ツールDB
            </span>
          </span>
        </Link>

        <nav aria-label="メインメニュー" className="hidden flex-1 lg:block">
          <NavLinks pathname={pathname} />
        </nav>

        <form action="/tools" role="search" className="relative ml-auto w-full max-w-[16rem]">
          <label htmlFor="header-search" className="sr-only">
            AIツールを検索
          </label>
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="header-search"
            name="q"
            type="search"
            placeholder="ツールを検索"
            autoComplete="off"
            className="h-9 w-full rounded-lg border border-input bg-card pr-3 pl-9 text-sm placeholder:text-muted-foreground focus-visible:border-brand/50 focus-visible:ring-4 focus-visible:ring-brand/15 focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
        </form>
      </div>

      <nav aria-label="メインメニュー（モバイル）" className="border-t border-border lg:hidden">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 [scrollbar-width:none] sm:px-6">
          <NavLinks pathname={pathname} />
        </div>
      </nav>
    </header>
  )
}

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <ul className="flex items-center gap-1">
      {NAV_ITEMS.map((item) => {
        const active = isActivePath(pathname, item.href)
        return (
          <li key={item.href} className="shrink-0">
            <Link
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'relative flex h-11 items-center px-3 text-sm font-medium transition-colors lg:h-16',
                active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
              {active && (
                <span aria-hidden="true" className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand" />
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
