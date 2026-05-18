import { Link } from "react-router-dom"
import { ArrowRight, Code2, Gamepad2 } from "lucide-react"
import { GithubIcon } from "@/components/GithubIcon"
import { homeContent, siteConfig } from "@/config"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const highlights = [
  {
    icon: Gamepad2,
    title: "FF14 プレイヤーとして",
    description: "ゲーム内のキャラクターや好きなコンテンツを紹介しています。",
    to: "/ff14",
  },
  {
    icon: Code2,
    title: "開発者として",
    description: "スキルや経歴、これまでに作ったものを紹介しています。",
    to: "/developer",
  },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* ヒーロー */}
      <section className="flex flex-col items-center py-16 text-center sm:py-24">
        <div className="flex size-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
          {siteConfig.name.charAt(0)}
        </div>
        <Badge variant="secondary" className="mt-6">
          {homeContent.greeting}
        </Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {homeContent.name}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{homeContent.role}</p>
        {homeContent.intro && (
          <p className="mt-6 max-w-xl text-pretty text-muted-foreground">
            {homeContent.intro}
          </p>
        )}
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "mt-6")}
        >
          <GithubIcon />
          GitHub
        </a>
      </section>

      {/* プロフィール概要 */}
      <section className="grid gap-4 sm:grid-cols-3">
        {homeContent.facts.map((fact) => (
          <Card key={fact.label}>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">{fact.label}</p>
              <p className="mt-1 font-medium">{fact.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* 各ページへの導線 */}
      <section className="grid gap-4 py-12 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, title, description, to }) => (
          <Link key={to} to={to} className="group">
            <Card className="h-full transition-colors hover:border-primary/40 hover:bg-accent/50">
              <CardHeader>
                <Icon className="size-8 text-primary" />
                <CardTitle className="mt-2">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  詳しく見る
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  )
}
