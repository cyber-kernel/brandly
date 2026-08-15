# Brandly

Brandly is a SaaS platform for small businesses to create fast, professional websites using curated templates. The product is intentionally focused on a simple static website workflow rather than a general-purpose website builder.

This repository currently contains the core Next.js frontend foundation for the public Brandly marketing website and dashboard experience. The backend, database, template generator, deployment system, and customer website build pipeline are planned for the next implementation stages.

## Product overview

Brandly is designed around three clear surfaces:

1. Public marketing website
   - landing pages
   - pricing and plans
   - templates and features
   - blog and content marketing
   - authentication pages

2. Customer dashboard
   - website management
   - template selection
   - content editing
   - domain and billing setup
   - analytics and leads

3. Customer-generated websites
   - static, template-based business websites
   - fast loading and SEO-friendly
   - served through a CDN/object-storage model

These are intentionally separate concerns and should stay distinct in code, routing, and architecture.

## Brandly mission

Brandly helps local and small businesses launch a credible online presence quickly and affordably without needing a developer. The aim is to provide a professional website that is simple to customize, easy to manage, and cheap to host.

## Non-goals for the MVP

The platform is not intended to support:

- arbitrary HTML/CSS editing
- drag-and-drop page builders
- full blog CMS for customer websites
- e-commerce
- memberships
- booking systems
- user-generated content systems

These can become future services or leads for a separate web development business, but they are not core Brandly features.

## Core architecture

### Public website

The public marketing website should remain the acquisition and education surface for Brandly itself.

Relevant areas include:

- home
- features
- templates
- pricing
- services
- about
- contact
- blog
- blog article pages
- login/signup

### Customer dashboard

After authentication, customers access the dashboard. The dashboard is where they:

- manage website status
- preview or publish their site
- edit supported content
- choose templates
- connect domain
- review leads and analytics
- manage billing and plan access

### Generated customer websites

The final customer-facing site is a static website built from:

- template code
- template metadata/schema
- customer content/data
- theme and configuration

This output should be served from a CDN/object-storage setup rather than a live database-backed application.

## Preferred technical stack

### Frontend

- Next.js
- TypeScript
- React
- Tailwind CSS
- shadcn/ui
- Lucide icons

### Backend

- FastAPI
- Python
- SQLAlchemy

### Database

- PostgreSQL

### Storage and deployment

- object storage such as S3-compatible storage or Cloudflare R2
- CDN/static hosting

## High-level design principles

1. Keep platform, template, and customer data separate.
2. Prefer static generated websites over runtime database-driven rendering.
3. Use a shared PostgreSQL database with proper tenant-aware authorization.
4. Use a modular monolith rather than a distributed system for the MVP.
5. Enforce feature access through backend entitlements, not frontend checks.
6. Avoid hardcoded pricing, plan access, or business rules.
7. Preserve the public Brandly website and customer dashboard as separate experience layers.

## Template and website generation model

Template code and customer data should be combined at build time to generate a static website. The final site should not depend on live PostgreSQL lookups for normal page rendering.

Conceptually:

Template + Customer Data -> Build -> Static Site -> CDN

The template system should support:

- multiple template variants
- template metadata
- supported pages
- supported sections
- schema-driven editing
- versioning

## Important build-time experiment

Before implementing the full deployment system, validate how Next.js handles imported JSON in a production build.

A minimal experiment should confirm:

- imported JSON is embedded during build
- changing the JSON without rebuilding does not update the production output
- rebuilding does update the static output

This verifies the intended build-time data model and helps avoid incorrect assumptions.

## Database and multi-tenancy

Brandly should use a shared PostgreSQL database, not a per-customer database.

Expected entities include:

- users
- websites
- templates
- template_versions
- website_content
- media
- domains
- subscriptions
- payments
- forms
- leads
- reviews
- deployments
- notifications
- blog_posts
- blog_categories

Customer ownership and authorization must always be enforced on the backend.

## Authentication and authorization

Brandly should use secure and established auth patterns.

Required capabilities include:

- signup
- login
- logout
- session handling
- secure password handling
- password reset if implemented
- email verification if implemented
- authorization
- roles

The frontend must never be the source of truth for what a customer is allowed to do.

## Billing and entitlements

Brandly initially fits a simple two-plan model:

- Starter: ₹9/month
- Business: ₹49/month (first month at ₹9)

Pricing and access rules should be configuration-driven, not hardcoded in code. Billing status and premium feature access must be enforced server-side.

Entitlements may include:

- custom domains
- ad removal
- SEO features
- analytics
- lead tools
- premium sections
- extra website functionality

## Website editor expectations

The website editor is the central customer feature. It should allow controlled customization without exposing raw code editing.

Customers should modify:

- business name
- logo
- hero text
- contact information
- services
- testimonials
- images
- navigation order
- theme colors and typography
- supported sections

The editor should be schema-driven and not require custom hardcoded logic for every template.

## Dashboard information architecture

The customer dashboard should follow a clear structure:

- Overview
  - Dashboard
  - Analytics
  - Activity
- Website
  - Edit Website
  - Templates
  - Pages
  - Media Library
  - Forms
- Business
  - Business Profile
  - Domain
  - SEO
  - Leads
  - Reviews
- Marketing
  - Promotions
  - Social Sharing
  - QR Code
- Growth
  - Insights
  - Conversion Tracking
  - Search Performance
- Finance
  - Plans & Billing
  - Payment History
  - Invoices
- Account
  - Team Members
  - Notifications
  - Security
  - Settings
- Support
  - Help Center
  - Support Tickets

Some areas can be premium/locked initially.

## Public blog architecture

The Brandly blog is not the same thing as customer websites.

The blog supports:

- SEO
- content marketing
- organic acquisition
- lead generation
- educational content

It may eventually support:

- categories
- tags
- author metadata
- featured images
- sitemap support
- metadata and canonical tags

## MVP priority

### Phase 1

- public marketing website
- public blog
- auth
- dashboard shell
- database foundation
- customer/business profile
- template system
- website data model

### Phase 2

- template selection
- website editor
- pages
- media
- preview
- publish
- static generation
- Brandly subdomain

### Phase 3

- custom domains
- forms
- leads
- analytics
- SEO
- billing

### Phase 4

- reviews
- promotions
- social sharing
- QR code
- insights
- conversion tracking
- search performance
- team members

### Phase 5

- AI features
- advanced marketing services
- advanced analytics
- custom development lead generation

## Project conventions

- Reuse existing components before creating new ones.
- Follow the current route structure and app conventions in this repo.
- Do not duplicate existing public pages or dashboard sections.
- Favor a simple and maintainable architecture over complex infrastructure.
- Keep the feature set scoped to Brandly’s niche.

## Implementation expectations

When implementing new work:

- inspect the existing project first
- avoid unnecessary rewrites
- keep changes focused
- preserve public-vs-dashboard-vs-generated-site separation
- validate behavior with the smallest relevant checks
- document important architecture decisions

## Final principle

Brandly should remain a simple, clean, modular product:

Public marketing website + customer dashboard + template-based static website generator

The platform manages the customer. The template defines the design. The customer data defines the content. The build system produces a fast static website.
