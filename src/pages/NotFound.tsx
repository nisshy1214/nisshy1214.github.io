import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-muted-foreground">404</p>
      <h1 className="mt-4 text-2xl font-semibold">ページが見つかりません</h1>
      <p className="mt-2 text-muted-foreground">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link to="/" className={cn(buttonVariants(), "mt-6")}>
        ホームに戻る
      </Link>
    </div>
  )
}
