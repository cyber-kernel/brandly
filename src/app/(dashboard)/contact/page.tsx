"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Phone } from "lucide-react"

export default function ContactSupportPage() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Contact Support</h1>
        <p className="text-muted-foreground">We&apos;re here to help you grow your business.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
         <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-green-100 rounded-full text-green-600">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Chat on WhatsApp</CardTitle>
                <CardDescription>Instant help for your website.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Start Chat</Button>
            </CardContent>
         </Card>

         <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Email Support</CardTitle>
                <CardDescription>Get technical assistance.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Send Email</Button>
            </CardContent>
         </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>Describe your issue and we will get back to you within 24 hours.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="grid gap-2">
             <Label htmlFor="subject">Subject</Label>
             <Input id="subject" placeholder="What do you need help with?" />
           </div>
           <div className="grid gap-2">
             <Label htmlFor="message">Message</Label>
             <Textarea id="message" placeholder="Provide details about your request..." className="min-h-[150px]" />
           </div>
           <Button className="w-full">Send Message</Button>
        </CardContent>
      </Card>
    </div>
  )
}
