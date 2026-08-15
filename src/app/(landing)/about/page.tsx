import { Metadata } from 'next'
import { AboutSection } from '../components/about-section'
import { TeamSection } from '../components/team-section'
import { CTASection } from '../components/cta-section'

export const metadata: Metadata = {
  title: 'About Brandly | Empowering Small Businesses',
  description: 'Learn about our journey to digitalize small businesses across the globe with affordable and fast web solutions.',
}

export default function AboutPage() {
  return (
    <>
      <div className="pt-20 bg-primary/5 text-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Empowering Local Businesses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Brandly was founded with a single goal: to make professional web presence accessible to every business owner, regardless of their budget.
          </p>
        </div>
      </div>
      <AboutSection />
      <TeamSection />
      <CTASection />
    </>
  )
}
