import { Link, NavLink } from "react-router-dom"
import { Code2, Gamepad2, Home, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { siteConfig } from "@/config"

const navItems = [
  { to: "/", label: "ホーム", icon: Home },
  { to: "/ff14", label: "FF14", icon: Gamepad2 },
  { to: "/developer", label: "Developer", icon: Code2 },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold tracking-tight">
          {siteConfig.name}
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )
              }
            >
              <Icon className="size-4" />
              <span className="hidden sm:inline">{label}</span>
            </NavLink>
          ))}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="テーマを切り替える"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </nav>
      </div>
    </header>
  )
}
