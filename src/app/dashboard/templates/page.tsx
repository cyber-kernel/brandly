"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const templates = [
  {
    id: "restaurant",
    name: "Classic Diner",
    category: "Restaurant",
    image: "/templates/restaurant.png",
    popular: true,
  },
  {
    id: "salon",
    name: "Modern Glow",
    category: "Salon & Spa",
    image: "/templates/salon.png",
    popular: false,
  },
  {
    id: "gym",
    name: "Iron Core",
    category: "Gym & Fitness",
    image: "/templates/gym.png",
    popular: false,
  },
  {
    id: "portfolio",
    name: "Minimalist",
    category: "Portfolio",
    image: "/templates/portfolio.png",
    popular: false,
  },
  {
    id: "coaching",
    name: "EduPlus",
    category: "Coaching",
    image: "/templates/coaching.png",
    popular: false,
  },
  {
    id: "shop",
    name: "Retail Pro",
    category: "Local Shop",
    image: "/templates/shop.png",
    popular: false,
  },
]

export default function TemplatesPage() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Template Gallery</h1>
        <p className="text-muted-foreground">Choose a professional look for your business website.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden flex flex-col h-full group">
            <div className="aspect-video bg-muted relative flex items-center justify-center">
               <span className="text-muted-foreground text-sm">Preview Image</span>
               {template.popular && (
                 <Badge className="absolute top-2 right-2">Most Popular</Badge>
               )}
            </div>
            <CardHeader className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.category}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="border-t bg-muted/20 p-4 gap-2">
              <Button variant="outline" className="flex-1">Preview</Button>
              <Button className="flex-1">Select Template</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
