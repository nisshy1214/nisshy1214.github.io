import { Briefcase, Code2, ExternalLink, FolderGit2, Wrench } from "lucide-react"
import { developerContent, siteConfig } from "@/config"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { GithubIcon } from "@/components/GithubIcon"
import { cn } from "@/lib/utils"

export default function Developer() {
  const { intro, bio, skills, experiences, projects } = developerContent

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="flex flex-col items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
          <Code2 className="size-8" />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          開発者プロフィール
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">{intro}</p>
      </header>

      {/* 自己紹介 */}
      <Card className="mt-10">
        <CardContent className="pt-6">
          <p className="leading-relaxed text-muted-foreground">{bio}</p>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "mt-4"
            )}
          >
            <GithubIcon />
            GitHub を見る
          </a>
        </CardContent>
      </Card>

      {/* スキル */}
      {skills.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Wrench className="size-5 text-primary" />
            スキル
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {skills.map((group) => (
              <Card key={group.category}>
                <CardHeader>
                  <CardTitle className="text-base">{group.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* 経歴 */}
      {experiences.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Briefcase className="size-5 text-primary" />
            経歴
          </h2>
          <div className="ml-1 space-y-5 border-l pl-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[1.9rem] top-1 size-3 rounded-full border-2 border-background bg-primary" />
                <p className="text-xs font-medium text-muted-foreground">
                  {exp.period}
                </p>
                <p className="font-semibold">{exp.title}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* プロジェクト */}
      {projects.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <FolderGit2 className="size-5 text-primary" />
            プロジェクト
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <CardTitle className="text-base">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="size-4" />
                      リンク
                    </a>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
