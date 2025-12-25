import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AgentEdu
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/courses" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Courses
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
