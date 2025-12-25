import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Master the Future of <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Agentic AI
              </span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              The premier learning management system for advanced AI development. 
              Track your progress, access exclusive content, and build the future.
            </p>
            <div className="space-x-4">
              <Link href="/signup">
                <Button size="lg" className="h-11 px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" size="lg" className="h-11 px-8">
                  View Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to master AI coding.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader>
                <CardTitle>Interactive Courses</CardTitle>
                <CardDescription>
                  Hands-on coding challenges and real-world projects.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Visualize your learning journey and extensive analytics.
                </CardDescription>
              </CardHeader>
            </Card>
             <Card className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Connect with other developers and AI experts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
