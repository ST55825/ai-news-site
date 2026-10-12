export const CATEGORIES = [
  '文章作成',
  '画像生成',
  '動画生成',
  'デザイン',
  '業務効率化',
  '音声・音楽',
  '開発',
] as const

export type Category = (typeof CATEGORIES)[number]

export type Pricing = '無料' | 'フリーミアム' | '有料'

export type Tool = {
  slug: string
  name: string
  company: string
  country: string
  logo: string
  website: string
  pricing: Pricing
  categories: Category[]
  summary: [string, string, string]
  description: string
  features: string[]
  useCases: string[]
}

const logo = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`

export const TOOLS: Tool[] = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    company: 'OpenAI',
    country: 'アメリカ',
    logo: logo('openai-chatgpt'),
    website: 'https://chatgpt.com',
    pricing: 'フリーミアム',
    categories: ['文章作成', '業務効率化'],
    summary: [
      '対話形式であらゆる質問に答える汎用AIアシスタント',
      '文章作成・要約・翻訳・コード生成まで幅広く対応',
      '画像理解や音声会話、Web検索にも対応したマルチモーダル',
    ],
    description:
      'ChatGPTはOpenAIが開発した対話型AIです。自然な会話を通じて、文章の下書き、アイデア出し、データ分析、プログラミング支援など多様なタスクをこなします。カスタムGPTを作成して業務に特化したアシスタントを構築することも可能です。',
    features: ['高度な推論モデル', 'カスタムGPTの作成', 'ファイル・画像の解析', '音声での自然な会話'],
    useCases: ['メール・企画書の下書き', 'リサーチと要約', 'プログラミングの相談'],
  },
  {
    slug: 'claude',
    name: 'Claude',
    company: 'Anthropic',
    country: 'アメリカ',
    logo: logo('claude'),
    website: 'https://claude.ai',
    pricing: 'フリーミアム',
    categories: ['文章作成', '開発'],
    summary: [
      '長文の読解と自然な日本語表現に定評のあるAIアシスタント',
      '大量のドキュメントを一度に読み込んで分析・要約が可能',
      'Artifacts機能でコードや資料をその場で生成・プレビュー',
    ],
    description:
      'ClaudeはAnthropicが開発するAIアシスタントで、安全性と有用性の両立を重視して設計されています。長いコンテキストを扱えるため、契約書や論文などの長文分析に強く、丁寧で読みやすい文章を生成します。',
    features: ['超長文コンテキスト対応', 'Artifactsによる即時プレビュー', 'プロジェクト単位のナレッジ管理', '高精度なコーディング支援'],
    useCases: ['長文ドキュメントの分析', '記事・レポートの執筆', 'アプリのプロトタイプ作成'],
  },
  {
    slug: 'gemini',
    name: 'Gemini',
    company: 'Google',
    country: 'アメリカ',
    logo: logo('gemini'),
    website: 'https://gemini.google.com',
    pricing: 'フリーミアム',
    categories: ['文章作成', '業務効率化'],
    summary: [
      'Googleが開発したマルチモーダル対応の生成AI',
      'Gmail・ドキュメント・ドライブなどGoogleサービスと連携',
      'テキスト・画像・動画・音声をまとめて理解できる',
    ],
    description:
      'GeminiはGoogle DeepMindが開発した生成AIモデルおよびアシスタントです。Google Workspaceとの深い連携により、メールの要約やドキュメント作成、スプレッドシート分析などを日常業務の中でシームレスに活用できます。',
    features: ['Google Workspace連携', 'Deep Researchによる調査', 'マルチモーダル理解', 'Gemsでカスタムアシスタント作成'],
    useCases: ['Gmailの要約と返信作成', '市場調査レポート', '画像を使った質問応答'],
  },
  {
    slug: 'perplexity',
    name: 'Perplexity',
    company: 'Perplexity AI',
    country: 'アメリカ',
    logo: logo('perplexity'),
    website: 'https://www.perplexity.ai',
    pricing: 'フリーミアム',
    categories: ['業務効率化', '文章作成'],
    summary: [
      'Web検索とAIを融合させた次世代の回答エンジン',
      'すべての回答に出典リンクが付き、情報の裏付けが簡単',
      'リアルタイムの最新ニュースや専門情報の調査に最適',
    ],
    description:
      'Perplexityは、質問に対してWeb上の情報を検索・統合し、出典付きで簡潔に回答するAI検索エンジンです。従来の検索のようにリンクを辿る手間を省き、信頼性の高い情報収集を効率化します。',
    features: ['出典付きの回答', 'Pro Searchによる深掘り調査', 'スペースでの情報整理', '複数AIモデルの切り替え'],
    useCases: ['競合・市場リサーチ', '最新ニュースの把握', '学術的な調べもの'],
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    company: 'Midjourney, Inc.',
    country: 'アメリカ',
    logo: logo('midjourney'),
    website: 'https://www.midjourney.com',
    pricing: '有料',
    categories: ['画像生成', 'デザイン'],
    summary: [
      '芸術性の高いビジュアルを生み出す画像生成AIの代表格',
      'テキストから写真風・イラスト・コンセプトアートを作成',
      'スタイル参照機能で世界観を統一したシリーズ制作も可能',
    ],
    description:
      'Midjourneyは、圧倒的な表現力と美しい質感で知られる画像生成AIです。プロンプトを入力するだけで、広告ビジュアルやコンセプトアート、ムードボードに使える高品質な画像を短時間で生成できます。',
    features: ['高い芸術性と質感表現', 'スタイル・キャラクター参照', 'Web上での編集機能', '動画生成への拡張'],
    useCases: ['広告・SNSビジュアル制作', 'ゲーム・映像のコンセプトアート', 'ブランドのムードボード'],
  },
  {
    slug: 'stable-diffusion',
    name: 'Stable Diffusion',
    company: 'Stability AI',
    country: 'イギリス',
    logo: logo('stability-stablediffusion'),
    website: 'https://stability.ai',
    pricing: '無料',
    categories: ['画像生成', '開発'],
    summary: [
      'オープンに公開された高性能な画像生成モデル',
      'ローカル環境でも動作し、自由にカスタマイズが可能',
      '追加学習で独自のスタイルや被写体を再現できる',
    ],
    description:
      'Stable DiffusionはStability AIが公開している画像生成モデルです。オープンなモデルのため、自社サービスへの組み込みや、LoRAなどによる追加学習で独自のビジュアル表現を実現できる柔軟性が魅力です。',
    features: ['オープンウェイトのモデル', 'ローカル実行に対応', 'LoRA・ControlNetでの拡張', '商用APIの提供'],
    useCases: ['自社プロダクトへの画像生成組み込み', '独自スタイルの学習', '大量の素材生成'],
  },
  {
    slug: 'ideogram',
    name: 'Ideogram',
    company: 'Ideogram AI',
    country: 'カナダ',
    logo: logo('ideogram'),
    website: 'https://ideogram.ai',
    pricing: 'フリーミアム',
    categories: ['画像生成', 'デザイン'],
    summary: [
      '画像内の文字表現に圧倒的な強みを持つ画像生成AI',
      'ロゴ・ポスター・タイポグラフィ作品の制作に最適',
      'マジックプロンプトで短い指示からでも高品質に生成',
    ],
    description:
      'Ideogramは、従来の画像生成AIが苦手としていた「画像内のテキスト」を正確に描写できる点で注目を集めています。ポスターやサムネイル、ロゴなど文字を含むデザインを素早く作成できます。',
    features: ['正確なテキスト描写', 'マジックプロンプト', 'キャンバスでの編集・拡張', 'スタイルの細かな指定'],
    useCases: ['イベントポスター制作', 'YouTubeサムネイル', 'ロゴのアイデア出し'],
  },
  {
    slug: 'krea',
    name: 'Krea',
    company: 'Krea AI',
    country: 'アメリカ',
    logo: logo('krea'),
    website: 'https://www.krea.ai',
    pricing: 'フリーミアム',
    categories: ['画像生成', '動画生成'],
    summary: [
      'リアルタイムで画像が変化するインタラクティブな生成AI',
      '描いたラフを即座に高品質なビジュアルへ変換',
      '画像の高解像度化や動画生成もひとつの画面で完結',
    ],
    description:
      'Kreaは、クリエイターのための直感的なAI生成プラットフォームです。リアルタイム生成により、ブラシで描いた形や構図をその場で確認しながらビジュアルを作り込めます。アップスケールや動画生成機能も充実しています。',
    features: ['リアルタイム生成', '高精度アップスケーラー', '複数モデルの統合', '動画生成機能'],
    useCases: ['ラフスケッチの清書', '画像の高解像度化', 'プロダクトビジュアルの検討'],
  },
  {
    slug: 'runway',
    name: 'Runway',
    company: 'Runway AI',
    country: 'アメリカ',
    logo: logo('runway'),
    website: 'https://runwayml.com',
    pricing: 'フリーミアム',
    categories: ['動画生成', 'デザイン'],
    summary: [
      '映像制作者のための本格的な動画生成AIプラットフォーム',
      'テキストや画像から高品質な映像クリップを生成',
      'カメラワークや動きを細かく制御できる編集ツール群',
    ],
    description:
      'Runwayは、映画やCM制作の現場でも利用される動画生成AIです。テキストや静止画からリアルな映像を生成できるほか、背景除去やモーション制御など、映像編集を効率化する多彩なAIツールを備えています。',
    features: ['テキスト／画像から動画生成', 'カメラモーション制御', '背景除去・インペイント', 'チームでの共同編集'],
    useCases: ['CM・MVのプリビズ', 'SNS向けショート動画', '映像素材の合成'],
  },
  {
    slug: 'pika',
    name: 'Pika',
    company: 'Pika Labs',
    country: 'アメリカ',
    logo: logo('pika'),
    website: 'https://pika.art',
    pricing: 'フリーミアム',
    categories: ['動画生成'],
    summary: [
      '誰でも手軽に使える遊び心のある動画生成AI',
      '画像や写真にユニークなエフェクトを加えて動画化',
      'SNSでシェアしやすい短尺コンテンツの制作に最適',
    ],
    description:
      'Pikaは、シンプルな操作で印象的な動画を作れる動画生成AIです。写真を溶かす、膨らませるといったユニークなエフェクトや、テキストからの動画生成で、SNS映えするコンテンツを素早く制作できます。',
    features: ['ワンクリックエフェクト', 'テキストから動画生成', '動画の一部置き換え', 'モバイルでの手軽な操作'],
    useCases: ['SNS投稿用ショート動画', '商品写真のアニメーション', 'ミーム動画の制作'],
  },
  {
    slug: 'figma',
    name: 'Figma AI',
    company: 'Figma',
    country: 'アメリカ',
    logo: logo('figma'),
    website: 'https://www.figma.com/ai',
    pricing: 'フリーミアム',
    categories: ['デザイン', '開発'],
    summary: [
      '定番デザインツールFigmaに統合されたAI機能群',
      'プロンプトからUIデザインやプロトタイプを自動生成',
      'レイヤー名の整理やテキスト生成など作業の手間を削減',
    ],
    description:
      'Figma AIは、コラボレーションデザインツールFigmaに組み込まれたAI機能です。デザインの初稿生成、画像の背景除去、ダミーテキストの作成、インタラクティブなプロトタイプ化など、デザイナーの作業を大幅に効率化します。',
    features: ['プロンプトからUI生成', 'Figma Makeでアプリ化', 'ビジュアル検索', 'レイヤーの自動リネーム'],
    useCases: ['ワイヤーフレームの作成', 'プロトタイプの高速検証', 'デザインシステムの整理'],
  },
  {
    slug: 'canva',
    name: 'Canva AI',
    company: 'Canva',
    country: 'オーストラリア',
    logo: logo('canva'),
    website: 'https://www.canva.com',
    pricing: 'フリーミアム',
    categories: ['デザイン', '画像生成'],
    summary: [
      'デザイン初心者でもプロ級の制作物が作れるAI搭載ツール',
      'マジック生成で画像・プレゼン資料・SNS投稿を自動作成',
      '豊富なテンプレートとAI編集機能で作業時間を大幅短縮',
    ],
    description:
      'Canvaは世界中で使われているオンラインデザインツールで、多彩なAI機能「Magic Studio」を搭載しています。テキストからの画像生成、背景除去、デザインのリサイズ、文章生成などをワンストップで行えます。',
    features: ['Magic Studio', 'マジック生成・消しゴム', 'ワンクリックリサイズ', 'ブランドキット管理'],
    useCases: ['SNS投稿画像', 'プレゼン資料', 'チラシ・バナー制作'],
  },
  {
    slug: 'framer',
    name: 'Framer',
    company: 'Framer B.V.',
    country: 'オランダ',
    logo: logo('framer'),
    website: 'https://www.framer.com',
    pricing: 'フリーミアム',
    categories: ['デザイン', '開発'],
    summary: [
      'AIでWebサイトをデザインから公開まで一気通貫で作成',
      'プロンプト入力だけでレスポンシブなサイトを自動生成',
      'ノーコードでアニメーションやCMSも自在に設定可能',
    ],
    description:
      'Framerは、デザインツールのような操作感でWebサイトを構築・公開できるノーコードプラットフォームです。AIによるサイト生成やコピー作成、翻訳機能を備え、ランディングページを短時間で立ち上げられます。',
    features: ['AIサイト生成', 'ノーコードアニメーション', '内蔵CMS', 'AI翻訳によるローカライズ'],
    useCases: ['ランディングページ制作', 'ポートフォリオサイト', 'スタートアップのコーポレートサイト'],
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    company: 'Notion Labs',
    country: 'アメリカ',
    logo: logo('notion'),
    website: 'https://www.notion.com/product/ai',
    pricing: '有料',
    categories: ['業務効率化', '文章作成'],
    summary: [
      'Notionのワークスペースに組み込まれたAIアシスタント',
      '社内ドキュメントを横断検索して必要な情報を即回答',
      '議事録の自動作成やタスク整理でチームの生産性を向上',
    ],
    description:
      'Notion AIは、ドキュメントやデータベースが集約されたNotion上で動作するAIです。ページの要約や文章作成だけでなく、SlackやGoogle Driveなど外部ツールも含めた横断検索や、会議の文字起こし・議事録作成を自動化します。',
    features: ['ワークスペース横断のAI検索', 'AIミーティングノート', '文章の要約・翻訳', 'データベースの自動入力'],
    useCases: ['議事録の自動作成', '社内ナレッジ検索', 'プロジェクト計画の作成'],
  },
  {
    slug: 'zapier',
    name: 'Zapier',
    company: 'Zapier',
    country: 'アメリカ',
    logo: logo('zapier'),
    website: 'https://zapier.com',
    pricing: 'フリーミアム',
    categories: ['業務効率化'],
    summary: [
      '7,000以上のアプリをつなぐ業務自動化プラットフォーム',
      'AIに自然言語で指示するだけでワークフローを構築',
      'AIエージェントが定型業務を24時間代行してくれる',
    ],
    description:
      'Zapierは、さまざまなWebサービス同士を連携させて業務を自動化するツールです。AI機能により、やりたいことを文章で伝えるだけで自動化フローを作成でき、AIエージェントによる業務代行も実現します。',
    features: ['7,000以上のアプリ連携', '自然言語でのフロー作成', 'AIエージェント', 'テーブル・インターフェース機能'],
    useCases: ['問い合わせの自動振り分け', 'CRMへのデータ自動入力', 'SNS投稿の自動化'],
  },
  {
    slug: 'grammarly',
    name: 'Grammarly',
    company: 'Grammarly',
    country: 'アメリカ',
    logo: logo('grammarly'),
    website: 'https://www.grammarly.com',
    pricing: 'フリーミアム',
    categories: ['文章作成', '業務効率化'],
    summary: [
      '英文の文法・スペル・トーンをリアルタイムで添削',
      'ブラウザやメール、各種アプリ上でそのまま利用できる',
      '生成AIで英文メールや資料の作成・書き換えも可能',
    ],
    description:
      'Grammarlyは、英語のライティングを支援するAIツールです。文法やスペルミスの修正に加え、文章のトーンや明瞭さを改善する提案を行います。海外とのやり取りが多いビジネスパーソンに欠かせない存在です。',
    features: ['リアルタイム文法チェック', 'トーン調整の提案', '生成AIによる文章作成', '多数のアプリに対応'],
    useCases: ['英文メールの添削', '英語論文・レポートの推敲', '海外向け資料の作成'],
  },
  {
    slug: 'deepl',
    name: 'DeepL',
    company: 'DeepL SE',
    country: 'ドイツ',
    logo: logo('deepl'),
    website: 'https://www.deepl.com',
    pricing: 'フリーミアム',
    categories: ['文章作成', '業務効率化'],
    summary: [
      '自然で高精度な翻訳品質に定評のあるAI翻訳サービス',
      'WordやPDFなどのファイルをレイアウトを保ったまま翻訳',
      'DeepL Writeで文章の推敲や言い換えにも対応',
    ],
    description:
      'DeepLはドイツ発のAI翻訳サービスで、文脈を汲み取った自然な訳文が高く評価されています。ドキュメント翻訳や用語集機能、文章校正ツールのDeepL Writeなど、ビジネスでの多言語コミュニケーションを支えます。',
    features: ['高精度なニューラル翻訳', 'ファイル丸ごと翻訳', '用語集の登録', 'DeepL Writeでの文章改善'],
    useCases: ['海外資料の読解', '契約書・マニュアルの翻訳', '多言語でのメール対応'],
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    company: 'ElevenLabs',
    country: 'アメリカ',
    logo: logo('elevenlabs'),
    website: 'https://elevenlabs.io',
    pricing: 'フリーミアム',
    categories: ['音声・音楽'],
    summary: [
      '人間と聞き分けられないほど自然な音声を生成するAI',
      '数分の録音から自分の声をクローンして読み上げが可能',
      '動画の多言語吹き替えや音声エージェント構築にも対応',
    ],
    description:
      'ElevenLabsは、感情豊かで自然な音声合成を実現するAI音声プラットフォームです。ナレーション制作、ボイスクローン、動画の自動吹き替え、会話型音声エージェントの構築など、音声に関するあらゆるニーズに応えます。',
    features: ['高品質な音声合成', 'ボイスクローン', 'AI吹き替え', '会話型AIエージェント'],
    useCases: ['動画ナレーション制作', 'オーディオブック', '多言語コンテンツ展開'],
  },
  {
    slug: 'suno',
    name: 'Suno',
    company: 'Suno, Inc.',
    country: 'アメリカ',
    logo: logo('suno'),
    website: 'https://suno.com',
    pricing: 'フリーミアム',
    categories: ['音声・音楽'],
    summary: [
      'テキストからボーカル入りの楽曲を丸ごと生成する音楽AI',
      'ジャンルや雰囲気を指定するだけでオリジナル曲が完成',
      '歌詞の自動生成や楽曲の延長・リミックスも可能',
    ],
    description:
      'Sunoは、誰でも簡単にオリジナル楽曲を制作できる音楽生成AIです。曲のテーマやジャンルを入力するだけで、歌詞・メロディ・ボーカル・伴奏がそろった完成度の高い楽曲を生成します。',
    features: ['ボーカル入り楽曲の生成', '歌詞の自動作成', '楽曲の延長・編集', 'ステム分離'],
    useCases: ['動画のBGM制作', 'オリジナルソング作成', 'ジングル・効果音制作'],
  },
  {
    slug: 'descript',
    name: 'Descript',
    company: 'Descript',
    country: 'アメリカ',
    logo: logo('descript'),
    website: 'https://www.descript.com',
    pricing: 'フリーミアム',
    categories: ['動画生成', '音声・音楽'],
    summary: [
      'テキストを編集する感覚で動画・音声を編集できるツール',
      '自動文字起こしからフィラー除去までAIがワンクリックで処理',
      'ポッドキャストやYouTube動画の制作効率を劇的に向上',
    ],
    description:
      'Descriptは、文字起こしされたテキストを編集するだけで動画や音声を編集できる革新的なツールです。「えー」「あの」などのフィラー除去、視線補正、AIボイスによる差し替えなど、制作を効率化する機能を豊富に搭載しています。',
    features: ['テキストベース編集', 'フィラーワード自動除去', 'スタジオサウンド補正', 'AIによるクリップ生成'],
    useCases: ['ポッドキャスト編集', 'ウェビナーの切り抜き', 'YouTube動画制作'],
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    company: 'Anysphere',
    country: 'アメリカ',
    logo: logo('cursor'),
    website: 'https://cursor.com',
    pricing: 'フリーミアム',
    categories: ['開発'],
    summary: [
      'AIネイティブに設計された次世代のコードエディタ',
      'コードベース全体を理解し、的確な補完と修正を提案',
      'エージェント機能で複数ファイルにまたがる実装を自動化',
    ],
    description:
      'Cursorは、VS Codeをベースに開発されたAIファーストのコードエディタです。プロジェクト全体の文脈を把握したコード補完、自然言語での編集指示、自律的に実装を進めるエージェントモードで、開発速度を大きく向上させます。',
    features: ['高精度なTab補完', 'エージェントモード', 'コードベース全体の検索', 'VS Code拡張機能に対応'],
    useCases: ['新機能の実装', 'リファクタリング', 'バグ調査と修正'],
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    company: 'GitHub',
    country: 'アメリカ',
    logo: logo('github-copilot'),
    website: 'https://github.com/features/copilot',
    pricing: 'フリーミアム',
    categories: ['開発', '業務効率化'],
    summary: [
      '世界中の開発者に使われるAIペアプログラマー',
      '主要なエディタやGitHub上でコード補完・チャットが可能',
      'Issueを割り当てるだけでプルリクエストを自動作成',
    ],
    description:
      'GitHub Copilotは、GitHubが提供するAIコーディングアシスタントです。エディタ内でのコード補完やチャットに加え、コーディングエージェントがIssueからプルリクエストを作成するなど、開発ワークフロー全体を支援します。',
    features: ['インラインのコード補完', 'Copilot Chat', 'コーディングエージェント', 'プルリクエストのレビュー'],
    useCases: ['日常的なコーディング', 'テストコードの生成', 'コードレビューの効率化'],
  },
  {
    slug: 'v0',
    name: 'v0',
    company: 'Vercel',
    country: 'アメリカ',
    logo: logo('v0'),
    website: 'https://v0.app',
    pricing: 'フリーミアム',
    categories: ['開発', 'デザイン'],
    summary: [
      'チャットで指示するだけでWebアプリを生成するAI',
      'React・Next.jsの本番品質なコードを自動で作成',
      'ワンクリックでVercelにデプロイし即座に公開できる',
    ],
    description:
      'v0はVercelが提供するAIアプリビルダーです。作りたいものを日本語で伝えるだけで、モダンなUIとコードを生成し、データベース連携やデプロイまでブラウザ上で完結できます。',
    features: ['プロンプトからアプリ生成', 'デザインモードでの微調整', 'GitHub連携', 'ワンクリックデプロイ'],
    useCases: ['プロトタイプ作成', '社内ツールの構築', 'ランディングページ制作'],
  },
  {
    slug: 'lovable',
    name: 'Lovable',
    company: 'Lovable',
    country: 'スウェーデン',
    logo: logo('lovable'),
    website: 'https://lovable.dev',
    pricing: 'フリーミアム',
    categories: ['開発', '業務効率化'],
    summary: [
      '会話するだけでフルスタックアプリを構築できるAI',
      'エンジニアでなくてもアイデアを素早く形にできる',
      'データベースや認証機能もまとめてセットアップ',
    ],
    description:
      'Lovableは、自然言語でのやり取りを通じてWebアプリケーションを構築できるAIツールです。フロントエンドからバックエンドまでをまとめて生成し、非エンジニアでもMVPを短期間で立ち上げられます。',
    features: ['自然言語でアプリ構築', 'バックエンド連携', 'ビジュアル編集', 'GitHubへの同期'],
    useCases: ['MVPの開発', '業務アプリの内製化', 'アイデアの検証'],
  },
]

export function getToolBySlug(slug: string) {
  return TOOLS.find((tool) => tool.slug === slug)
}

export function getRelatedTools(tool: Tool, limit = 3) {
  return TOOLS.filter(
    (other) =>
      other.slug !== tool.slug &&
      other.categories.some((category) => tool.categories.includes(category)),
  ).slice(0, limit)
}
