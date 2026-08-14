import { Metadata } from 'next'
import { HeroSection } from './components/hero-section'
import { LogoCarousel } from './components/logo-carousel'
import { StatsSection } from './components/stats-section'
import { CTASection } from './components/cta-section'
import { TestimonialsSection } from './components/testimonials-section'

export const metadata: Metadata = {
  title: 'Brandly | Professional Websites for Small Businesses',
  description: 'Create a stunning 5-6 page website for your business for just ₹9/month. No coding required.',
}

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <LogoCarousel />
      <StatsSection />
      <div className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Built for growth, designed for results.</h2>
          <p className="text-lg text-muted-foreground">
            We understand that as a small business owner, your time is valuable.
            That's why we built Brandly—the fastest way to get your business online
            without the high cost or complexity of traditional website builders.
          </p>
        </div>
      </div>
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
