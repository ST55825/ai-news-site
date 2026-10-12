export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© 2026 Global AI Trends — 海外AIニュース & ツールデータベース</p>
        <p>
          ロゴ提供:{' '}
          <a
            href="https://thesvg.org"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            theSVG
          </a>
          。各ロゴは各社の商標です。
        </p>
      </div>
    </footer>
  )
}
