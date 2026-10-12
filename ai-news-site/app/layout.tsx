import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const notoJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-jp',
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: 'Global AI Trends — 海外AIニュース & ツールデータベース',
    template: '%s | Global AI Trends',
  },
  description:
    '画像生成・文章作成・デザイン・業務効率化など、海外の最新AIツールを日本語でわかりやすく紹介するデータベースサイト。',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-dark-32x32.png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1c1d20',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`dark ${geist.variable} ${geistMono.variable} ${notoJp.variable} bg-background`}
    >
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
