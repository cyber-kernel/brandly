# AGENTS.md

This file contains the implementation guidelines for AI coding agents working on Brandly.

## Mission

Build Brandly as a focused SaaS platform for small businesses to create professional, static, template-based websites quickly and affordably.

Brandly is not a general-purpose website builder.

## Product boundaries

Do not implement or encourage:

- arbitrary HTML/CSS editing
- full drag-and-drop page builders
- blog CMS features for customer sites
- e-commerce functionality by default
- membership systems
- booking systems
- user-generated content workflows

The product’s goal is to help businesses launch a clean website quickly using a narrow and supported set of templates and sections.

## Architecture principles

1. Public website, customer dashboard, and generated websites are distinct concerns.
2. Public marketing pages belong to Brandly itself.
3. Customer dashboard features are authenticated and tenant-aware.
4. Generated customer websites are static artifacts built from template code plus business data.
5. A shared PostgreSQL database should be used instead of per-customer databases.
6. Backend authorization must enforce tenant isolation and ownership.
7. Billing and premium access are controlled by the backend, not the frontend.
8. Do not overengineer the MVP with distributed systems or unnecessary services.

## Core design model

Public website + customer dashboard + static website generator

This separation must remain clear in the codebase, routing, and feature design.

## Safety and security

- Use secure authentication and authorization patterns.
- Never trust client-side state for access control.
- Validate all inputs.
- Protect customer data with ownership and tenant checks.
- Verify payment webhooks and subscription status on the backend.
- Use secure handling for uploads and secrets.

## Dashboard expectations

The customer dashboard should maintain the established information architecture and remain focused on real business tasks:

- website status
- current plan
- current domain
- leads and analytics
- website health
- quick actions
- content editing
- business configuration

Keep the UI modern, professional, and minimal.

## Template and content model

Templates should use a schema-driven approach.

Each template should expose:

- metadata
- supported pages
- supported sections
- content schema
- design schema

The customer may edit supported fields only. They should not edit the underlying template code or React project source.

## Static-generation expectation

The generated customer website should be static wherever possible. Prefer:

Template + customer data -> build -> static output -> object storage/CDN

Do not assume static-generation behavior; validate it with actual build or runtime experiments when implementing the system.

## Blog architecture

The Brandly blog is part of the public marketing website, not the customer website system.

The blog may use a lightweight CMS or markdown-based content flow depending on the project status. Preserve existing blog behavior and avoid an unnecessary replacement.

## Billing, pricing, and entitlements

- Do not hardcode prices across the application.
- Price and plan logic should be config-driven.
- Restrict premium features centrally in the backend.
- The frontend may display locked features, but enforcement must occur on the server.

## UI and routing guidance

- Use shadcn/ui, Tailwind, and Lucide for consistent styling.
- Follow the existing project structure and current route patterns.
- Do not duplicate public routes or dashboard sections.
- Keep layouts responsive and accessible.

## Working rules for agents

### Before making a major change

Provide a brief summary containing:

- understanding of the goal
- proposed implementation
- files/modules affected
- database/API/frontend impacts
- risks and testing plan

### Small changes

Keep them narrow, focused, and consistent with existing patterns.

### When a design suggestion is poor

Do not blindly follow a feature request if it creates unnecessary complexity or breaks the architecture. Explain the simpler and safer alternative.

### Code quality bar

- use strong TypeScript types
- keep components reusable
- avoid duplicate logic
- avoid magic numbers and hardcoded business rules
- prefer maintainable patterns over clever abstractions

## MVP sequence

Work in this order:

1. public website and blog
2. auth
3. dashboard shell
4. database models
5. customer profile and business data
6. template system and schema
7. website editor
8. publish/static generation
9. subdomain support
10. domain and billing foundation

Only later should advanced features like reviews, SEO tooling, lead management, and premium features be added.

## Final guidance

The goal is to build a real, production-quality SaaS product that remains maintainable and simple.

Always ask:

Does this decision make Brandly simpler, safer, more maintainable, or more scalable?

If not, avoid it.
