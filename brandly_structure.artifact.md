# Brandly Customer Dashboard Architecture

This document explains the structure and optimization of the **Brandly** Customer Dashboard.

## Project Vision
Brandly is designed for small business owners who need a fast, professional digital presence without technical complexity. The dashboard focuses on:
1. **Visibility:** Analytics showing value (Visits, WhatsApp clicks).
2. **Control:** Form-based website editing (No drag-and-drop complexity).
3. **Simplicity:** Clear subscription and domain management.

## Technical Structure

### 1. Unified Next.js Project
- The project has been consolidated from a multi-framework template into a **Pure Next.js 15 (App Router)** project.
- **Root Directory:** Contains all source code (`src/`), configuration (`next.config.ts`, `tailwind.config.ts`), and assets (`public/`).
- **Optimization:** Uses **Turbopack** for ultra-fast development and **Static Generation** where possible for production.

### 2. Route Organization (`src/app/`)
The routes are organized logically for the customer journey:
- `(auth)/`: Rebranded login, sign-up, and password recovery pages.
- `(dashboard)/`: The main authenticated workspace.
    - `/dashboard`: **Analytics Overview**. Key performance indicators (KPIs) like site visits and lead generation.
    - `/website`: **Website Builder**. The core tool where users edit their business data (Logo, Colors, Services, Media).
    - `/templates`: **Template Gallery**. A visual selector for website designs.
    - `/domain`: **Domain Management**. Setup for subdomains (`.brandly.site`) and custom domains.
    - `/billing`: **Subscription Management**. Clean UI for ₹9 (Starter) and ₹49 (Pro) plans.
    - `/contact`: **Support Center**. Direct channels for WhatsApp and Email help.

### 3. Component Architecture (`src/components/`)
- **`app-sidebar.tsx`**: Completely restructured for business management rather than generic data demos.
- **`ui/`**: Reusable primitives from **shadcn/ui v3**, ensuring a consistent and accessible interface.
- **`logo.tsx`**: The brand identity core.

## Optimization & Scalability
- **Performance:** Leveraging Next.js App Router's built-in SEO and performance features.
- **Scalability:** The `/website` builder uses a modular UI. Adding new fields or sections is as simple as adding a form component.
- **SEO Friendly:** Global metadata and OpenGraph tags are configured in the root layout and landing pages.
- **Future Proof:** The UI is completely separated from the backend. You can easily integrate your API using `fetch` or `Server Actions` in the `src/app` route handlers.

## Next Steps for Developers
- **Backend Integration:** Connect the forms in `/website` to your API.
- **Site Generation:** Trigger a static build of the customer's template when they hit "Publish" in the `/website` page.
- **Subdomain Routing:** Implement middleware or a proxy to route `user.brandly.site` to their generated static content.

---
**Brandly** - *Building the future of small business digitalization.*
