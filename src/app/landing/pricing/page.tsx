import { Metadata } from 'next'
import { PricingSection } from '../components/pricing-section'
import { CTASection } from '../components/cta-section'

export const metadata: Metadata = {
  title: 'Brandly Pricing | High Value at Minimal Cost',
  description: 'Simple, transparent pricing. Get started for ₹9/month and scale your business with professional tools.',
}

export default function PricingPage() {
  return (
    <>
      <div className="pt-20 bg-primary/5 text-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business stage. No hidden fees, just pure growth.
          </p>
        </div>
      </div>
      <PricingSection />
      <div className="py-20 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Why our prices are so low?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-bold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">We believe every small shop in India deserves a digital home. By keeping costs minimal, we help the neighborhood businesses compete with giants.</p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-bold mb-2">Efficiency</h3>
              <p className="text-muted-foreground">We use advanced automation to generate your site. This means we don't have to spend hours coding, allowing us to pass the savings to you.</p>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </>
  )
}
