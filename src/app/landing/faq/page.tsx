import { Metadata } from 'next'
import { FaqSection } from '../components/faq-section'
import { CTASection } from '../components/cta-section'

export const metadata: Metadata = {
  title: 'Brandly FAQ | Everything You Need to Know',
  description: 'Got questions? We have answers. Learn more about our ₹9 plans, custom domains, and how we help your business grow.',
}

export default function FAQPage() {
  return (
    <>
      <div className="pt-20 bg-primary/5 text-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Common Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our platform, templates, and support.
          </p>
        </div>
      </div>
      <FaqSection />
      <CTASection />
    </>
  )
}
