import { ChartAreaInteractive } from "./components/chart-area-interactive"
import { SectionCards } from "./components/section-cards"
import { Button } from "@/components/ui/button"
import { Globe, ArrowUpRight } from "lucide-react"

export default function Page() {
  return (
    <>
      {/* Page Title and Description */}
      <div className="px-4 lg:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
            <p className="text-muted-foreground">Track your website performance and customer interactions.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://yourbusiness.brandly.site" target="_blank" rel="noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                View Website
                <ArrowUpRight className="ml-2 h-3 w-3" />
              </a>
            </Button>
            <Button size="sm">
              Edit Site
            </Button>
          </div>
        </div>
      </div>

      <div className="@container/main px-4 lg:px-6 space-y-6">
        <SectionCards />
        <div className="grid gap-6 lg:grid-cols-2">
          <ChartAreaInteractive />
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">New WhatsApp Click</span>
                    <span className="text-xs text-muted-foreground">Customer from New Delhi</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{i * 2} hours ago</span>
                </div>
              ))}
            </div>
            <Button variant="link" className="mt-4 p-0 h-auto">View all activity</Button>
          </div>
        </div>
      </div>
    </>
  )
}
