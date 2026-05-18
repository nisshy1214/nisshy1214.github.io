// =============================================================================
// サイトの表示内容はこのファイルだけ編集すれば変更できます。
// 配列を空にしてもビルドが通るよう、各データに型を付けています。
// 空にしたセクション（経歴・プロジェクトなど）はページ上で非表示になります。
// =============================================================================

// --- 型定義（通常は編集不要） -------------------------------------------------
interface SiteConfig {
  name: string
  description: string
  social: {
    github: string
  }
}

interface HomeContent {
  greeting: string
  name: string
  role: string
  intro: string
  facts: { label: string; value: string }[]
}

interface FF14Content {
  intro: string
  character: {
    name: string
    dataCenter: string
    server: string
    race: string
    grandCompany: string
  }
  // role は Tank / Healer / DPS のいずれかを指定すると色分けされます。
  jobs: { name: string; role: string }[]
  progress: { label: string; value: string }[]
  favorites: string[]
}

interface DeveloperContent {
  intro: string
  bio: string
  skills: { category: string; items: string[] }[]
  experiences: { period: string; title: string; description: string }[]
  projects: { name: string; description: string; url: string }[]
}

// --- サイト共通 --------------------------------------------------------------
export const siteConfig: SiteConfig = {
  name: "Natsuno Nisshy",
  description: "Natsuno Nisshy の自己紹介サイト",
  social: {
    github: "https://github.com/nisshy1214",
  },
}

// --- ホーム ( / ) -----------------------------------------------------------
export const homeContent: HomeContent = {
  greeting: "はじめまして 👋",
  name: "Nisshy",
  role: "Web engineer",
  intro: "",
  facts: [
    { label: "Live in", value: "Tokyo" },
    { label: "職業", value: "Software Engineer" },
    { label: "趣味", value: "Gaming (FF14, Overwatch)" },
  ],
}

// --- FF14 ( /ff14 ) ---------------------------------------------------------
export const ff14Content: FF14Content = {
  intro: "FF14 Profile",
  character: {
    name: "Natsuno Nisshy",
    dataCenter: "Gaia",
    server: "Fenrir",
    race: "ヒューラン(ミッドランダー)",
    grandCompany: "国家団",
  },
  jobs: [{ name: "学者", role: "Healer" }],
  progress: [{ label: "メインクエスト", value: "Patch7.5 前半クリア済み" }],
  favorites: ["零式攻略", "マウント周回", "クリスタルコンフリクト"],
}

// --- 開発者 ( /developer ) --------------------------------------------------
export const developerContent: DeveloperContent = {
  intro: "ソフトウェア開発者としてのプロフィールです。",
  bio: "ソフトウェアエンジニア",
  skills: [
    { category: "フロントエンド", items: ["React", "TypeScript", "HTML / CSS"] },
    { category: "バックエンド", items: ["Ruby", "Golang"] },
  ],
  experiences: [],
  projects: [],
}
