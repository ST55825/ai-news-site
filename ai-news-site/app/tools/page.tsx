import type { Metadata } from 'next'
import { ToolExplorer } from '@/components/tool-explorer'
import { CATEGORIES, type Category } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'AIツールデータベース',
  description: 'ニュースで取り上げた海外の最新AIツールを、カテゴリやキーワードで検索できるデータベース。',
}

type Props = { searchParams: Promise<{ q?: string; category?: string }> }

export default async function ToolsPage({ searchParams }: Props) {
  const { q = '', category } = await searchParams
  const initialCategory = CATEGORIES.includes(category as Category) ? (category as Category) : undefined

  return (
    <main>
      <ToolExplorer
        key={`${q}-${initialCategory ?? 'all'}`}
        initialQuery={q}
        initialCategory={initialCategory}
      />
    </main>
  )
}
