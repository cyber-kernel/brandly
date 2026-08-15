"use client"

import React from 'react'
import { LandingNavbar } from './components/navbar'
import { LandingFooter } from './components/footer'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main>
        {children}
      </main>
      <LandingFooter />
    </div>
  )
}
