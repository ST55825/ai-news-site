import { articles, type Article } from '@/lib/articles'
import { TOOLS, type Tool } from '@/lib/tools'

export type { Article }

export type ArticleType = Article['type']

export type FeedArticle = Article & {
  image: string
  imageAlt: string
  views: number
}

export const TYPE_LABEL: Record<ArticleType, string> = {
  tool: 'AIツール',
  news: 'AIニュース',
}

const MEDIA: Record<string, Pick<FeedArticle, 'image' | 'imageAlt' | 'views'>> = {
  'news-openai-gpt6-intelligent-ui': {
    image: '/news/gpt6-intelligent-ui.png',
    imageAlt: 'チャット画面の中にグラフやスライダー、計算ツールが自動生成されていく様子',
    views: 61240,
  },
  'framer-ai': {
    image: '/news/image-typography.png',
    imageAlt: 'AIが生成したWebサイトのレイアウトとタイポグラフィ',
    views: 18930,
  },
  'news-ai-agent-trust-drop': {
    image: '/news/agent-automation.png',
    imageAlt: '光るノードと線で結ばれた、AIエージェントのワークフローの抽象図',
    views: 42810,
  },
  'elevenlabs-ai': {
    image: '/news/voice-ai.png',
    imageAlt: '暗い背景に浮かぶ音声波形',
    views: 22470,
  },
  'news-openai-disrupts-influence-operations': {
    image: '/news/influence-operations.png',
    imageAlt: '新聞の紙面と、架空の人物シルエットをつなぐネットワーク',
    views: 35160,
  },
  'jira-agentic-engineering': {
    image: '/news/coding-ai.png',
    imageAlt: 'コードエディタとAIエージェントのタスク管理画面',
    views: 14320,
  },
  'news-anthropic-policy-and-economic-framework': {
    image: '/news/ai-policy.png',
    imageAlt: '議事堂の柱の間に浮かぶ、光るニューラルネットワーク',
    views: 29780,
  },
}

const FEED: FeedArticle[] = Object.keys(MEDIA)
  .map((id) => {
    const article = articles.find((item) => item.id === id)
    return article ? { ...article, ...MEDIA[id] } : null
  })
  .filter((item): item is FeedArticle => item !== null)

export const TRENDING_TOOLS: { slug: string; mentions: number }[] = [
  { slug: 'chatgpt', mentions: 2840 },
  { slug: 'claude', mentions: 1960 },
  { slug: 'elevenlabs', mentions: 1420 },
  { slug: 'framer', mentions: 1180 },
  { slug: 'cursor', mentions: 1030 },
  { slug: 'perplexity', mentions: 980 },
  { slug: 'midjourney', mentions: 910 },
]

export function getFeedArticles() {
  return FEED
}

export function getArticleById(id: string) {
  return FEED.find((article) => article.id === id)
}

export function getPopularArticles() {
  return [...FEED].sort((a, b) => b.views - a.views)
}

export function getRelatedArticles(article: FeedArticle, limit = 2) {
  const sameType = FEED.filter((item) => item.id !== article.id && item.type === article.type)
  const others = FEED.filter((item) => item.id !== article.id && item.type !== article.type)
  return [...sameType, ...others].slice(0, limit)
}

export function getTrendingTools() {
  return TRENDING_TOOLS.map(({ slug, mentions }) => ({
    tool: TOOLS.find((tool) => tool.slug === slug),
    mentions,
  }))
    .filter((entry): entry is { tool: Tool; mentions: number } => Boolean(entry.tool))
    .slice(0, 5)
}

export function toIsoDate(publishedAt: string) {
  return publishedAt.replaceAll('.', '-')
}

export function formatViews(views: number) {
  return views >= 10000 ? `${(views / 10000).toFixed(1)}万` : views.toLocaleString('ja-JP')
}

export function splitImpact(line: string) {
  const index = line.indexOf('：')
  if (index === -1) return { label: null, text: line }
  return { label: line.slice(0, index), text: line.slice(index + 1) }
}
