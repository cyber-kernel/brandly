"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Receipt } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "₹9",
    description: "Ideal for small shops and new businesses.",
    features: [
      "Customized 5-6 Page Website",
      "Free .brandly.site Subdomain",
      "WhatsApp & Call Buttons",
      "Photo Gallery",
      "Brandly Ads & Branding"
    ],
    buttonText: "Current Plan",
    current: true,
  },
  {
    name: "Professional",
    price: "₹49",
    description: "For businesses that want a premium identity.",
    features: [
      "Everything in Starter",
      "Connect Your Own Domain",
      "No Ads / No Branding",
      "Premium Design Support",
      "Priority Support"
    ],
    buttonText: "Upgrade Now",
    current: false,
    popular: true,
  }
]

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Plans & Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and payments.</p>
      </div>

      {/* Subscription Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs">Current Plan</CardDescription>
            <CardTitle className="text-lg">Starter (Free Trial)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Expires in 12 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-xs">Billing Cycle</CardDescription>
            <CardTitle className="text-lg">Monthly</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Next billing: Sept 01, 2026</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.popular ? "border-primary shadow-md" : ""}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </div>
                {plan.popular && <Badge>Highly Recommended</Badge>}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
               </div>
               <ul className="space-y-3">
                 {plan.features.map((feature) => (
                   <li key={feature} className="flex items-center gap-2 text-sm">
                     <Check className="h-4 w-4 text-green-600" />
                     {feature}
                   </li>
                 ))}
               </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={plan.current ? "outline" : "default"}
                className="w-full"
                disabled={plan.current}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Payment History Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Payment History
          </CardTitle>
          <CardDescription>View and download your invoices.</CardDescription>
        </CardHeader>
        <CardContent>
           <div className="text-center py-10 text-muted-foreground">
             <CreditCard className="h-10 w-10 mx-auto mb-4 opacity-20" />
             <p className="text-sm">No payment history available yet.</p>
           </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center pb-12">
        <p className="text-muted-foreground text-sm">
          Need a custom plan or have questions? {" "}
          <a href="/contact" className="text-primary font-medium hover:underline">Contact our support team</a>
        </p>
      </div>
    </div>
  )
}
