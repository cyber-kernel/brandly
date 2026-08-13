import type { Metadata } from 'next'
import { LandingPageContent } from './landing-page-content'

// Metadata for the landing page
export const metadata: Metadata = {
  title: 'Cyber Kernel - Modern Admin Dashboard Template',
  description: 'A powerful and clean admin dashboard template for modern web applications.',
  keywords: ['admin dashboard', 'react', 'nextjs', 'typescript', 'shadcn/ui', 'tailwind css'],
  openGraph: {
    title: 'Cyber Kernel - Modern Admin Dashboard Template',
    description: 'A powerful and clean admin dashboard template for modern web applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber Kernel - Modern Admin Dashboard Template',
    description: 'A powerful and clean admin dashboard template for modern web applications.',
  },
}

export default function LandingPage() {
  return <LandingPageContent />
}
