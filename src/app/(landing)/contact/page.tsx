import { Metadata } from 'next'
import { ContactSection } from '../components/contact-section'

export const metadata: Metadata = {
  title: 'Contact Brandly | Get Your Business Online',
  description: 'Ready to grow? Contact our sales and support team. We help small businesses build their digital brand from scratch.',
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-20 bg-primary/5 text-center border-b">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">We&apos;re Here to Help</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need help setting up your site or have questions about our plans, our team is just a message away.
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  )
}
