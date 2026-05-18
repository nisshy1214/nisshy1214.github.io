# nisshy1214.github.io

React (Vite) + shadcn/ui で作った自己紹介 SPA サイト。

URL: https://nisshy1214.github.io/

## 技術スタック

- React 19 + TypeScript
- Vite
- React Router (BrowserRouter)
- Tailwind CSS v4 + shadcn/ui

## 開発

```bash
npm install      # 初回のみ
npm run dev      # 開発サーバー (http://localhost:5173)
npm run build    # 本番ビルド (dist/ に出力)
npm run preview  # ビルド結果をローカル確認
```

## deploy

`main` ブランチへ push すると GitHub Actions
(`.github/workflows/static.yml`) が自動でビルドし、GitHub Pages へ公開します。

## Memo

GitHub Pages は SPA のクライアントルーティングに非対応のため、
`/ff14` などへ直接アクセスした際は `public/404.html` が `index.html` へリダイレクトするようにした。
(ref: https://github.com/rafgraph/spa-github-pages)
