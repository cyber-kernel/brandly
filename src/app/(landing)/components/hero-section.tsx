"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-16 sm:pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="outline" className="px-4 py-2 border-primary/50 text-primary bg-primary/5">
              <Star className="w-3 h-3 mr-2 fill-current" />
              Special Offer: 1 Month Free Trial
              <ArrowRight className="w-3 h-3 ml-2" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Get Your Business Online in
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}5 Minutes{" "}
            </span>
            for just ₹9.
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Professional 5-6 page websites designed specifically for restaurants, salons, and local shops.
            No developer needed. No complex builders. Just more customers.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-medium">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              No Hidden Costs
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              WhatsApp Integration
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              SEO Optimized
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base cursor-pointer px-8" asChild>
              <Link href="/auth/sign-up">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base cursor-pointer px-8" asChild>
              <Link href="/landing/features">
                Explore Templates
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Visual - Dashboard Preview */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="relative group">
            <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/20 rounded-full blur-3xl"></div>

            <div className="relative rounded-xl border bg-card shadow-2xl p-2 bg-muted/30">
               <div className="bg-background rounded-lg border shadow-inner overflow-hidden aspect-[16/10] flex items-center justify-center">
                  <div className="text-center p-8">
                     <p className="text-muted-foreground mb-4">A fast, sleek dashboard to manage your brand.</p>
                     <div className="w-48 h-8 bg-muted rounded animate-pulse mx-auto mb-2"></div>
                     <div className="w-64 h-8 bg-muted rounded animate-pulse mx-auto mb-2"></div>
                     <div className="w-40 h-8 bg-muted rounded animate-pulse mx-auto"></div>
                  </div>
               </div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
