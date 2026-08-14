"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Save, Globe, Eye } from "lucide-react"

export default function WebsiteBuilderPage() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Website Builder</h1>
          <p className="text-muted-foreground">Customize your business website details here.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Publish Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto lg:h-10">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>

        {/* Basic Info */}
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Business Details</CardTitle>
              <CardDescription>Tell us about your business.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Business Name</Label>
                <Input id="name" placeholder="e.g. Blue Heavens Salon" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input id="tagline" placeholder="e.g. Best haircuts in town" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="about">About Business</Label>
                <Textarea id="about" placeholder="Describe your business mission and history..." className="min-h-[100px]" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Design */}
        <TabsContent value="design">
          <Card>
            <CardHeader>
              <CardTitle>Branding & Colors</CardTitle>
              <CardDescription>Choose your logo and brand colors.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label>Business Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-lg border-2 border-dashed flex items-center justify-center text-muted-foreground text-xs text-center p-2">
                    Upload Logo
                  </div>
                  <Button variant="outline" size="sm">Select Image</Button>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4">
                <Label>Primary Brand Color</Label>
                <div className="flex flex-wrap gap-3">
                  {["#000000", "#2563eb", "#dc2626", "#16a34a", "#9333ea"].map((color) => (
                    <div
                      key={color}
                      className="h-10 w-10 rounded-full border cursor-pointer hover:scale-110 transition-transform shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <div className="h-10 w-10 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer">
                    +
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content */}
        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Services & Features</CardTitle>
              <CardDescription>List what you offer to your customers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 border rounded-lg space-y-3 relative">
                   <div className="grid gap-2">
                    <Label>Service {i} Name</Label>
                    <Input placeholder={`Service ${i} name`} />
                  </div>
                  <div className="grid gap-2">
                    <Label>Description</Label>
                    <Textarea placeholder="What does this service include?" />
                  </div>
                  <Button variant="ghost" size="sm" className="text-destructive absolute top-2 right-2">Remove</Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">Add Another Service</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact & Socials</CardTitle>
              <CardDescription>How can customers reach you?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 9876543210" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input id="whatsapp" placeholder="+91 9876543210" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Public Email</Label>
                <Input id="email" placeholder="contact@business.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Physical location of your business..." />
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="insta">Instagram URL</Label>
                  <Input id="insta" placeholder="instagram.com/yourhandle" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="fb">Facebook URL</Label>
                  <Input id="fb" placeholder="facebook.com/yourpage" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Media */}
        <TabsContent value="media">
          <Card>
            <CardHeader>
              <CardTitle>Photo Gallery</CardTitle>
              <CardDescription>Upload photos of your work, shop, or products.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg border-2 border-dashed flex items-center justify-center text-muted-foreground text-xs text-center p-4">
                    Photo {i}
                  </div>
                ))}
                <div className="aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="text-2xl font-bold">+</span>
                  <span className="text-xs">Add Media</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
