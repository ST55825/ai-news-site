export interface Article {
  id: string
  type: 'tool' | 'news'
  title: string
  description: string
  publishedAt: string
  category: string
  targetRegion?: string
  pricingModel?: string
  summary: string[]
  content: {
    sectionTitle: string
    text: string
  }[]
  businessImpact: string[]
  disclaimer: string
  source?: {
    name: string
    publishedDate?: string
    url: string
  }
}

export const articles: Article[] = [
  // --- AIツール紹介 ---
  {
    id: 'framer-ai',
    type: 'tool',
    title: '【海外AI】Framer（フレーマー）のAI機能でサイトを制作・公開',
    description:
      'オランダ発のFramerは、指示文を入力するだけでAIがWebサイトのページ、デザイン、文章、動き、コードを作るサービスです。開発国、対象者、できること、競合との違いを紹介します。',
    publishedAt: '2026.10.11',
    category: '業務自動化（Webサイト制作）',
    pricingModel: '要確認（公式サイト参照）',
    summary: [
      'Framerは、オランダのアムステルダムに本社を置く企業が開発する、AIデザインエージェントと自由配置のキャンバスを備えたWebサイト制作サービス。',
      '指示文を入力すると、AIがページ、レイアウト、文章、画像、動き、部品、画面幅ごとの表示、コードをプロジェクト内に直接作成する。',
      'コンテンツ管理（CMS）、共同編集、アクセス解析、検索エンジン対策（SEO）、表示速度の改善、ホスティング機能を備える。',
    ],
    content: [
      {
        sectionTitle: '1. 開発元・開発国',
        text: '開発国はオランダ（アムステルダム本社）。2013年〜2014年創業で、元々はプロトタイプ用ツールから発展しWebサイト制作サービスへと進化を遂げました。',
      },
      {
        sectionTitle: '2. ターゲット層と利用メリット',
        text: 'デザイナー（Figmaに近い操作感）、スタートアップ（LPやマーケサイトの迅速展開）、フリーランス（ポートフォリオ作成）、エンジニア（ノーコードでの迅速公開）など幅広い層に活用されています。',
      },
      {
        sectionTitle: '3. 具体的にできる業務・機能',
        text: 'AIによるサイト新規作成（レイアウト・コピー・コンポーネント・コード一括生成）、自由配置キャンバス、CMS管理、多言語ローカライズ機能を搭載。2026年6月にはFramer 3.0が公開されています。',
      },
    ],
    businessImpact: [
      '制作期間の短縮：ランディングページを日単位から時間単位で公開可能。',
      '制作から公開までの一本化：デザイン・制作・ホスティング・SEO対策を同一サービスで完結。',
      'Webflowとの比較：高度なカスタムはWebflowが優れる一方、Framerは直感性と作業速度で高評価。',
    ],
    disclaimer:
      '料金や日本語対応状況、連携可能な外部サービスなどの最新情報は公式サイト（framer.com）をご確認ください。',
  },
  {
    id: 'elevenlabs-ai',
    type: 'tool',
    title: '【海外AI】ElevenLabs（イレブンラボ）の音声AIでできること',
    description:
      'ポーランド出身の創業者が設立したElevenLabsは、音声読み上げ、文字起こし、声のクローン、吹き替えを70以上の言語で提供する音声AIです。',
    publishedAt: '2026.10.11',
    category: '音声生成・業務自動化',
    pricingModel: '要確認（公式サイト参照）',
    summary: [
      '文章読み上げ、音声文字起こし、声のクローン、吹き替えを70以上の言語で提供する音声AIサービス。',
      'クリエイター向け「ElevenCreative」、企業向け「ElevenAgents」、開発者向け「ElevenAPI」の3窓口を展開。',
      '高い自然さと抑揚が評価される一方、長尺音声での品質安定性や料金体系が課題とされている。',
    ],
    content: [
      {
        sectionTitle: '1. 開発元・開発国',
        text: 'ポーランド出身の創業者が2022年に設立。ニューヨークを世界本社、ロンドンを欧州本社とし、ワルシャワに研究開発拠点を保持。',
      },
      {
        sectionTitle: '2. 対象者と用途',
        text: '動画・ナレーション制作を行うクリエイター、電話・チャット応対を自動化する企業、音声機能を組み込むエンジニアまで多岐にわたります。',
      },
      {
        sectionTitle: '3. 主な機能とアップデート',
        text: 'TTS（テキスト音声化）、STT（文字起こし）、ボイスクローニング、多言語吹き替えのほか、2025年には「Studio 3.0」やリアルタイム文字起こし機能等をリリース。',
      },
    ],
    businessImpact: [
      '制作現場：録音なしでテキストから自然なナレーションや吹き替えを即時作成。',
      '顧客対応：ElevenAgentsによる電話・チャット応対の自動化。',
      '開発効率：単一APIで音声生成から文字起こしまで統合管理が可能。',
    ],
    disclaimer: '料金プラン、無料枠、日本語対応品質の詳細は公式サイトをご確認ください。',
  },
  {
    id: 'jira-agentic-engineering',
    type: 'tool',
    title: '【海外AI】Jira（ジラ）でAIコーディングエージェントを計画・管理',
    description:
      'オーストラリア発のJiraは、課題管理やスプリント計画に使われるツール。2026年7月にAIコーディングエージェントを計画・実行・拡大する新機能が統合されました。',
    publishedAt: '2026.10.11',
    category: '業務自動化（開発・プロジェクト管理）',
    pricingModel: '要確認（公式サイト参照）',
    summary: [
      'Atlassianが提供するタスク、バグ、スプリント、ロードマップを1か所で管理するプロジェクト管理ツール。',
      '2026年7月に「Agentic engineering in Jira」をリリースし、AIコーディングエージェントの統合管理に対応。',
      'カスタマイズ性の高さと外部連携が強みだが、設定の複雑さや習得コストが課題として挙げられる。',
    ],
    content: [
      {
        sectionTitle: '1. 開発元・開発国',
        text: 'オーストラリア・シドニーにて2002年創業のAtlassianが手掛ける業界標準ツール。',
      },
      {
        sectionTitle: '2. 対象者',
        text: 'アジャイル開発を行うエンジニアチーム、大規模プロダクトマネージャー、AIエージェントの導入を進める開発組織。',
      },
      {
        sectionTitle: '3. 主な機能と新機能',
        text: 'カンバン/スクラムボード、アジャイルレポートに加え、あらゆるモデル・AIエージェントを1つのチームとして管理する「Agentic engineering」を導入。',
      },
    ],
    businessImpact: [
      '開発プロセスの進化：人間とAIエージェントの分担作業を同一ボード上で可視化・計画可能。',
      '大規模開発での信頼性：プロジェクト規模拡大時にも強固なワークフロー管理を提供。',
    ],
    disclaimer: '新機能の最新仕様や料金プランについては公式サイト（atlassian.com/jira）をご確認ください。',
  },

  // --- AIニュース ---
  {
    id: 'news-ai-agent-trust-drop',
    type: 'news',
    title: '【AIニュース】AIに本番変更を任せる企業が75%から56%に減少',
    description:
      '米国の調査で、AIエージェントに人の確認なしでシステムの本番変更を任せる企業が7月の75%から8月は56%に急減。背景には事前テスト通過後の不具合発生があります。',
    publishedAt: '2026.10.11',
    targetRegion: '米国',
    category: 'AIニュース',
    summary: [
      '米VentureBeatの調査で、AIエージェントによる本番システムの自動変更を許可（または予定）する企業が75%から56%に減少。',
      '事前テストを通過したAI機能が顧客向け不具合を起こした例は61%にのぼり、「人の承認を残す」企業が20%から42%へ増加。',
      '検証と本番反映の承認を分離し、人間を介在させる慎重な運用姿勢が強まっている。',
    ],
    content: [
      {
        sectionTitle: '1. 自律運用への慎重姿勢と「人の承認」の復活',
        text: 'VentureBeatの調査部門「VB Intelligence」によると、AIに事前テストのみで本番変更を許容する企業が激減。一方「人間の確認をプロセスに残す」企業は20%から42%へ増加しました。',
      },
      {
        sectionTitle: '2. 背景にある「事前テスト通過後の不具合」',
        text: '事前テストを実施する組織の61%で、テスト通過後のAI機能が本番環境で不具合を誘発。リアルタイム監視を構築できている企業は29%にとどまり、人間による監視が不可欠となっています。',
      },
      {
        sectionTitle: '3. 評価ツールへの投資と段階的な自動化',
        text: '完全自動化から一歩引き、OpenAI等の評価ツールを活用しながら、リスクに応じた段階的な自動化を進める手法が定着しつつあります。',
      },
    ],
    businessImpact: [
      'AI導入企業：自動テストと本番反映承認を切り分け、重要度に応じた人の承認フローを設計すべき。',
      '開発・運用チーム：出力のハルシネーション等はエラーログに現れにくいため、稼働後監視が重要課題に。',
      'ツール事業者：承認ワークフローや人の意思決定を支援する検証ツールの需要が向上。',
    ],
    disclaimer:
      '本調査は同メディアの自主参加パネル（140人）に基づく回答であり、市場全体を代表するものではない点にご留意ください。',
    source: {
      name: 'VentureBeat',
      publishedDate: '2026年10月8日',
      url: 'https://venturebeat.com/orchestration/the-share-of-enterprises-trusting-ai-agents-to-make-production-changes-on-their-own-has-fallen-from-75-to-56-vb-intelligence-finds',
    },
  },
  {
    id: 'news-openai-gpt6-intelligent-ui',
    type: 'news',
    title: '【AIニュース】ChatGPTにGPT-6導入、動的なUI操作機能が登場',
    description:
      'OpenAIがChatGPTに最新モデル「GPT-6」を順次展開。質問内容に応じてグラフやボタン、計算ツールなどを回答内にリアルタイム生成する「Intelligent UI」が追加されます。',
    publishedAt: '2026.10.11',
    targetRegion: '全世界',
    category: 'AIニュース',
    summary: [
      'OpenAIが、ChatGPTへ最新の「GPT-6」を全ユーザー対象に順次提供開始。',
      '回答画面に動的な図やボタン、計算ツールを自動生成する新機能「Intelligent UI」を実装。',
      '有料プランに加え、FreeプランおよびGoプランへも段階的に適用範囲を拡大。',
    ],
    content: [
      {
        sectionTitle: '1. 「GPT-6」の全ユーザー向け順次展開',
        text: 'OpenAIは毎週12億人が利用するChatGPT全体に対し、最新基盤モデル「GPT-6」のロールアウトを開始しました。',
      },
      {
        sectionTitle: '2. 回答を動的に変化させる「Intelligent UI」',
        text: 'テキスト回答のみならず、グラフやフォーム、計算器等をリアルタイムでUI生成。Web検索を伴う回答の開始速度も従来比平均44%向上しました。',
      },
      {
        sectionTitle: '3. プランごとの適用モデル',
        text: '有料プランには「GPT-6 Sol」、無料プランには「GPT-6 Luna」が適用され、Enterprise環境では管理者によるON/OFF切り替えが可能です。',
      },
    ],
    businessImpact: [
      '一般ユーザー：インタラクティブなUIを直接操作して計画や試算が対話上で完結。',
      '教育分野：条件を変えて結果を可視化する学習体験を提供。',
      'UI/UX設計：「AIがユーザーに応じた画面（UI）そのものを即座に生成する」時代への転換。',
    ],
    disclaimer: '順次展開のためアカウントにより適用時期が異なります。最新仕様は公式発表をご確認ください。',
    source: {
      name: 'OpenAI',
      publishedDate: '2026年10月7日',
      url: 'https://openai.com/ja-JP/index/gpt-6-for-everyone/',
    },
  },
  {
    id: 'news-openai-disrupts-influence-operations',
    type: 'news',
    title: '【AIニュース】OpenAIがロシア・イラン発の世論工作を阻止',
    description:
      'OpenAIが、実在メディアや現地調査機関を装って世論誘導を試みたロシア・イラン由来の工作活動を摘発し、アカウントを停止したと発表。',
    publishedAt: '2026.10.11',
    targetRegion: '全世界（ラテンアメリカ、米国、イラン等）',
    category: 'AIニュース',
    summary: [
      'ロシアおよびイランに由来するChatGPTアカウントを停止し、世論誘導工作を阻止。',
      '実在人物や架空の記者名義を使い、現地メディアへの寄稿や偽調査機関の運営を実施。',
      '影響度評価（1〜6段階）でロシア発の工作が過去最高となる「評価5」に達したと公表。',
    ],
    content: [
      {
        sectionTitle: '1. 偽の組織・人物を用いた工作活動',
        text: 'AIは完全自動生成ではなく、架空の記者や偽調査機関の下準備（論文・記事の推敲、依頼メール作成）の効率化ツールとして悪用されていました。',
      },
      {
        sectionTitle: '2. ロシア「ダーク・クラーク」とイラン「偽りの署名」',
        text: 'ロシア工作は無自覚な現地スタッフに偽論文を書かせファクトチェックを引き起こすほど影響（評価5）。イラン工作は7名の架空記者名で100本近い記事をオンラインメディアに紛れ込ませました（評価4）。',
      },
      {
        sectionTitle: '3. 実在メディアへの「紛れ込み」リスク',
        text: 'SNSの偽アカウント拡散以上に、審査を通過して実在メディアに掲載させる手口の方が影響力が大きいと分析されています。',
      },
    ],
    businessImpact: [
      'メディア・編集部：寄稿者の実在確認・経歴審査の厳格化が不可欠。',
      '企業・研究機関：委託先調査機関が偽装組織でないかのデューデリジェンスが必要。',
      'AI事業者：悪用事例の迅速な透明化と業界間連携が抑止力に。',
    ],
    disclaimer: '評価数値はOpenAI独自の基準に基づくものです。',
    source: {
      name: 'OpenAI',
      publishedDate: '2026年10月8日',
      url: 'https://openai.com/ja-JP/index/disrupting-ai-enabled-false-front-operations/',
    },
  },
  {
    id: 'news-anthropic-policy-and-economic-framework',
    type: 'news',
    title: '【AIニュース】Anthropicが先端AI規制と雇用対策の政策提言を発表',
    description:
      '米Anthropicが先端AIの危険性を抑える規制枠組みと、雇用・経済への影響に備える政策提言を公表。総額3億5,000万ドルの自社基金拠出も発表しました。',
    publishedAt: '2026.10.11',
    targetRegion: '米国（連邦・州政府）',
    category: 'AIニュース',
    summary: [
      'Anthropicが先端AIリスクと雇用影響に備える包括的政策提言「Policy on the AI Exponential」を発表。',
      '一定規模以上の開発企業に対し、安全性テストの公開や第三者評価を義務付け、危険なAIの公開停止権限を政府へ与えるよう提案。',
      '失業率に応じた経済対策を提言するとともに、研究基金などへ総額3億5,000万ドルの自社資金拠出を発表。',
    ],
    content: [
      {
        sectionTitle: '1. 先端AIの危険性に対する規制提案',
        text: '計算量10の25乗以上の大規模モデルを対象に、安全性テスト公開や防護体制を義務付け、違反時には世界の売上高に連動した罰金および政府による公開差し止め権限の創設を提言。',
      },
      {
        sectionTitle: '2. 州法と連邦法の関係性',
        text: 'カリフォルニア州等の先進的州法を評価し、連邦法が一律で各州の既存枠組みを打ち消すべきではないとの立場を表明。',
      },
      {
        sectionTitle: '3. 雇用影響対策と3億5,000万ドルの資金拠出',
        text: '失業率（5%、10%、未曾有の水準）に応じた再訓練補助や所得補償等の段階的対策を提言。さらに自ら研究基金等へ総額3億5,000万ドルを拠出します。',
      },
    ],
    businessImpact: [
      '大手AI開発企業：厳格な監査、リスク報告、セキュリティ要件への適合が求められる。',
      '人事・労務担当者：従業員の再教育や配置転換に対する政府優遇措置の活用が視野に。',
      '政策担当者：連邦法と各州法の兼ね合い、および過剰な規制リスクの抑制が論点。',
    ],
    disclaimer: '本提言はAnthropic社による自主提案であり、法制化が決定したものではありません。',
    source: {
      name: 'Anthropic',
      publishedDate: '2026年10月11日参照',
      url: 'https://www.anthropic.com/policy-on-the-ai-exponential',
    },
  },
]
