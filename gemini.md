# SS-Cables-Portfolio Codebase Guidelines

This document outlines the core architectural, coding, SEO, and CMS optimization patterns observed in this Next.js project. Use these guidelines to maintain consistency in future development and to prevent breaking changes or errors.

## 1. Project Structure & Global Configuration

- **Next.js App Router:** The project utilizes the Next.js App Router (`app/` directory). All routing and page definitions reside here.
- **Global Typography (next/font/google):** All fonts (e.g., Geist, Geist Mono, IBM Plex Sans) are initialized centrally in `app/layout.tsx` and injected as CSS variables into the HTML root element. **Never import webfonts or external font links directly in components**; always utilize the established CSS variables.
- **Strict Typing:** The project is fully written in TypeScript. Maintain strict typing. Ensure `eslint.config.mjs` and `tsconfig.json` configurations are respected.

## 2. Component Architecture & Coding Style

- **Component Encapsulation:** Break down complex UI sections into smaller, internal sub-components within the same file (e.g., `SectionHeader` and `IndustryCard` in `industrieswecater.tsx`, or `SlideHeading` and `SlideIndicators` in `hero.tsx`). This keeps the main default export clean and readable.
- **Client vs. Server Components:** 
  - Use `export default async function Page()` in Next.js app router pages (like `app/page.tsx`) to handle server-side rendering (SSR) and data fetching.
  - Use the `'use client';` directive at the top of component files (inside `app/Components/`) whenever interactivity, React hooks (`useState`, `useEffect`), or animation libraries (`framer-motion`) are required.
- **Styling:** Use Tailwind CSS for all styling. Rely heavily on responsive prefixes (`sm:`, `md:`, `lg:`) to build mobile-first designs. Example: `text-[28px] sm:text-[40px] lg:text-[60px]`.
- **Animations:** Use `framer-motion` for smooth, modern UI transitions. Define `Variants` explicitly and use properties like `whileInView`, `viewport={{ once: true }}`, and `staggerChildren` to create scroll-triggered entry animations.
- **Brand Colors:** Use exact brand hex codes where applicable (e.g., `bg-[#14B927]`, `text-[#14B927]`).

## 3. CMS Architecture (Sanity Integration)

- **Schema Definition Isolation:** Sanity schemas are strictly isolated in `sanity/schemaTypes`. When creating a new section, define the document type (`defineType`) and fields (`defineField`) with descriptive previews. Always include an `isActive` boolean field defaulting to `true`.
- **API Fetching & GROQ Patterns:** All data fetching logic is stored in `sanity/lib/api/` (e.g., `sanity/lib/api/landingPage/industries.ts`). 
  - Define your GROQ projection `fields` separately to maintain clean queries.
  - Export dedicated functions for fetching active entries (e.g., `*[_type == "industriesSection" && isActive == true][0]{...fields}`).
- **Type Exports:** Explicitly define and export TypeScript interfaces/types from your UI components (e.g., `export interface HeroProps`). This allows the Sanity data-fetchers to import and use the exact same types, ensuring type safety between the CMS and the UI.
- **Fallback Data Pattern:** When fetching data from the CMS, always define a robust set of fallback/default data in the page component. 
  - Example: Retrieve CMS data `const sanityData = await getActiveIndustriesSection().catch(() => null);`
  - Merge it with default static data: `heading: sanityData?.heading || defaultData.heading`.
  - This prevents the UI from breaking or appearing empty if the CMS fetch fails or content hasn't been authored.
- **Decoupling Data from UI:** Do not put data fetching logic inside the UI components themselves. UI components (in `app/Components/`) should be pure functional components that strictly receive data via props.

## 4. SEO & Accessibility (A11y) Optimization

- **Global Metadata:** SEO metadata is defined centrally via the Next.js `Metadata` API in `layout.tsx` (`export const metadata: Metadata = {...}`). 
- **Semantic HTML:** Always use proper HTML5 semantic tags. Use `<main>` for the page wrapper, `<section>` for distinct functional blocks, and maintain a strict heading hierarchy (`<h1>` for heroes, `<h2>` for section titles, `<h3>` for cards).
- **Server-Side Rendering (SSR):** Because `page.tsx` is a Server Component, all static textual content and fallback data is rendered on the server. This is critical for search engine crawlers to index the content immediately.
- **ARIA Attributes:** Implement explicit ARIA attributes on interactive and complex elements. 
  - Examples seen in `hero.tsx`: `aria-labelledby="hero-heading"`, `aria-hidden="true"` on decorative backgrounds, `role="tablist"`, and `role="tab"`.
- **Image Optimization:** Continue passing direct URLs to background images or use Next.js `<Image />` tags where appropriate, ensuring descriptive `alt` text is available.
- **Layout Shift Prevention:** Use minimum heights (`min-h-screen`, `min-h-[85vh]`) and relative/absolute positioning carefully to prevent Cumulative Layout Shift (CLS), which impacts SEO performance scores.
