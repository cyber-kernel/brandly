"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Globe, ShieldCheck, AlertCircle } from "lucide-react"

export default function DomainPage() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Domain Setup</h1>
        <p className="text-muted-foreground">Manage how customers access your website.</p>
      </div>

      <div className="grid gap-6">
        {/* Subdomain Card */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Free Subdomain</CardTitle>
                <CardDescription>Your website is instantly available at this address.</CardDescription>
              </div>
              <Badge variant="secondary">Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="flex-1 max-w-sm relative">
                  <Input defaultValue="blue-heaven-salon" className="pr-20" />
                  <span className="absolute right-3 top-2.5 text-muted-foreground text-sm">.brandly.site</span>
               </div>
               <Button variant="outline">Update</Button>
            </div>
            <p className="text-xs text-muted-foreground">You can change this anytime. Note: Old links will stop working.</p>
          </CardContent>
          <CardFooter className="bg-muted/30 border-t p-4">
            <a href="https://blue-heaven-salon.brandly.site" target="_blank" rel="noreferrer" className="text-primary text-sm font-medium hover:underline flex items-center">
              Visit Site <Globe className="ml-1 h-3 w-3" />
            </a>
          </CardFooter>
        </Card>

        {/* Custom Domain Card */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Custom Domain</CardTitle>
                <CardDescription>Connect your own domain (e.g. www.yourbusiness.com).</CardDescription>
              </div>
              <Badge variant="outline" className="border-primary text-primary">Pro Feature</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="domain">Enter Domain</Label>
              <div className="flex gap-2">
                <Input id="domain" placeholder="yourbusiness.com" className="max-w-sm" />
                <Button>Connect Domain</Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                DNS Instructions
              </h4>
              <p className="text-sm text-muted-foreground">Add these records to your domain provider (GoDaddy, Namecheap, etc.) to point your domain to Brandly.</p>

              <div className="rounded-lg border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-2 font-medium">Type</th>
                      <th className="text-left p-2 font-medium">Host</th>
                      <th className="text-left p-2 font-medium">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2 font-mono">A</td>
                      <td className="p-2 font-mono">@</td>
                      <td className="p-2 font-mono">76.76.21.21</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-mono">CNAME</td>
                      <td className="p-2 font-mono">www</td>
                      <td className="p-2 font-mono">cname.brandly.site</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-amber-50 border-t border-amber-100 p-4">
            <p className="text-amber-800 text-xs flex items-center gap-2">
              <AlertCircle className="h-3 w-3" />
              Upgrade to the <strong>₹49 Pro Plan</strong> to enable custom domain connection.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
