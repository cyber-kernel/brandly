"use client"

import { ArrowRight, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className='py-16 lg:py-24 bg-muted/80'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='space-y-8'>
            {/* Badge and Stats */}
            <div className='flex flex-col items-center gap-4'>
              <Badge variant='outline' className='flex items-center gap-2 border-primary/50 text-primary bg-primary/5'>
                <TrendingUp className='size-3' />
                Business Growth Suite
              </Badge>

              <div className='text-muted-foreground flex items-center gap-4 text-sm'>
                <span className='flex items-center gap-1'>
                  <div className='size-2 rounded-full bg-green-500' />
                  Trusted by 500+ Shops
                </span>
                <Separator orientation='vertical' className='!h-4' />
                <span>24/7 Digital Presence</span>
              </div>
            </div>

            {/* Main Content */}
            <div className='space-y-6'>
              <h2 className='text-4xl font-bold tracking-tight text-balance sm:text-5xl'>
                Ready to take your business to the
                <span className='relative mx-2 inline-block'>
                  <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                    next level?
                  </span>
                  <div className='absolute start-0 -bottom-2 h-1 w-full bg-gradient-to-r from-primary/30 to-secondary/30' />
                </span>
              </h2>

              <p className='text-muted-foreground mx-auto max-w-2xl text-balance lg:text-xl'>
                Don&apos;t let your competitors take your customers. Build your professional
                website today for the price of a cup of tea.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col justify-center gap-4 sm:flex-row sm:gap-6'>
              <Button size='lg' className='cursor-pointer px-8 py-6 text-lg font-medium' asChild>
                <Link href="/auth/sign-up">
                  Start Your ₹9 Journey
                  <ArrowRight className='ms-2 size-5' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' className='cursor-pointer px-8 py-6 text-lg font-medium group' asChild>
                <Link href="/landing/contact">
                   Talk to an Expert
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className='text-muted-foreground flex flex-wrap items-center justify-center gap-6 text-sm'>
              <div className='flex items-center gap-2'>
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span>Cancel Anytime</span>
              </div>
              <div className='flex items-center gap-2'>
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span>Secure Payments</span>
              </div>
              <div className='flex items-center gap-2'>
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span>Instant Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
