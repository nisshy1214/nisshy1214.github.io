import { Gamepad2, MapPin, ScrollText, Sparkles } from "lucide-react"
import { ff14Content } from "@/config"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const roleStyles: Record<string, string> = {
  Tank: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Healer:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  DPS: "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400",
}

export default function FF14() {
  const { intro, character, jobs, progress, favorites } = ff14Content

  const characterRows = [
    { label: "キャラクター名", value: character.name },
    { label: "データセンター", value: character.dataCenter },
    { label: "サーバー", value: character.server },
    { label: "種族", value: character.race },
    { label: "グランドカンパニー", value: character.grandCompany },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="flex flex-col items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
          <Gamepad2 className="size-8" />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          FF14 プロフィール
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">{intro}</p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* キャラクター情報 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="size-5 text-primary" />
              キャラクター情報
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="divide-y">
              {characterRows.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between gap-4 py-2.5 text-sm"
                >
                  <dt className="text-muted-foreground">{row.label}</dt>
                  <dd className="text-right font-medium">{row.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        {/* よく遊ぶジョブ */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" />
              よく遊ぶジョブ
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {jobs.map((job) => (
              <Badge
                key={job.name}
                variant="outline"
                className={roleStyles[job.role] ?? ""}
              >
                {job.name}
                <span className="ml-1.5 opacity-70">{job.role}</span>
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 進行度 */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ScrollText className="size-5 text-primary" />
            進行度
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-3 sm:grid-cols-2">
            {progress.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border bg-muted/40 p-3"
              >
                <dt className="text-xs text-muted-foreground">{item.label}</dt>
                <dd className="mt-0.5 font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>

      {/* 好きなコンテンツ */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>好きなコンテンツ</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 sm:grid-cols-2">
            {favorites.map((favorite) => (
              <li key={favorite} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                {favorite}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* スクリーンショット */}
      <section className="mt-6">
        <h2 className="mb-3 text-sm font-medium text-muted-foreground">
          スクリーンショット
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex aspect-video items-center justify-center rounded-lg border border-dashed text-xs text-muted-foreground"
            >
              画像 {n}（差し替えてください）
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
