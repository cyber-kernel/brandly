import { Metadata } from 'next'
import { FeaturesSection } from '../components/features-section'
import { CTASection } from '../components/cta-section'

export const metadata: Metadata = {
  title: 'Brandly Features | Templates for Every Business',
  description: 'Explore our ready-made templates for restaurants, salons, gyms, and more. Optimized for local SEO and conversions.',
}

export default function FeaturesPage() {
  return (
    <>
      <div className="pt-20 bg-primary/5 text-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Powerful Features for Your Success</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to showcase your services and attract more customers in your local area.
          </p>
        </div>
      </div>
      <FeaturesSection />
      <CTASection />
    </>
  )
}
