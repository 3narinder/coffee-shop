# Common Grounds Web App Replication Guide

This guide records the visual system and component structure used to recreate
the Common Grounds reference in this Next.js app. Use it as a repeatable
workflow when building the remaining pages or applying the same approach to
another web app.

## Reference and project

- Live design reference: <https://common-grounds.framer.website/>
- Framer project: <https://framer.com/projects/Common-Grounds-copy--vOorj0GrqwhYX1avSUKY-2gCOH?node=augiA20Il>
- Framework: Next.js App Router, React, TypeScript, Tailwind CSS v4
- Shared layout: `app/layout.tsx`
- Global design system: `app/globals.css`

Inspect the reference at desktop and mobile widths before implementing a page.
Note the header/footer, spacing, type scale, colors, content order, and
interactive states (including the open navigation state). Treat the supplied
reference as the source for visual decisions rather than guessing from a
single screenshot.

## Design system

### Color tokens

Global colors are declared in the `@theme` block in `app/globals.css`. Use the
tokens instead of introducing one-off colors:

- Cream background: `cream` (`#f9efe5`)
- Deep cream: `cream-deep` (`#f1e2d0`)
- Green brand color: `green` (`#0e4a2b`)
- Deep green: `green-deep` (`#082f1b`)
- Soft green: `green-soft` (`#1c6b41`)
- Muted green: `green-muted` (`#5c8a70`)
- Ink: `ink` (`#17251d`)
- Warm accent: `accent` (`#a9762f`)

For a new project, first sample the primary, background, text, muted, and accent
colors from the design, then name and declare them centrally in `@theme`.

### Typography

The root layout loads Onest for body/UI text and Oswald for display headings.
Use `font-onest` and `font-oswald` so components share those configured fonts.
The stylesheet also defines reusable text utilities such as `heading-1`,
`heading-2`, `heading-3`, `body`, `body-small`, `eyebrow`, `price`, and
`button-label`.

Keep heading line-height proportional to font size. Avoid tiny fixed leading
values on large headings, which can cause overlap or clipped text.

### Shared layout classes

`site-container` provides a consistent responsive max-width and page gutter.
The other `site-*` rules in `app/globals.css` form the shared header, menu, and
footer system. Extend these shared rules for site-wide behavior; use Tailwind
utilities for component-specific layout and CSS Modules only when a component
needs styles that should not be global.

The shared shell is tuned across three layout ranges: compact phones (up to
640px), tablets (641–1023px), and wider laptop/desktop screens (1024px and
above). Header social icons are shown on large screens and compact phones, and
hidden on tablets where horizontal space is tighter. The footer uses two
columns below 1024px and three columns above it; the header and footer
containers have separate width rules so the header retains its edge alignment
while desktop footer content stays readable and centered.

## App structure

```text
app/
  layout.tsx                Root fonts, global CSS, shared header/footer
  globals.css               Theme tokens, typography, shared layout rules
  page.tsx                  Home page
  menu/page.tsx             Menu route
  about/page.tsx            About route
  contact/page.tsx          Contact route
  terms/page.tsx            Terms route
  privacy/page.tsx          Privacy route
  cookies/page.tsx          Cookie policy route
components/
  layout/
    BrandMark.tsx           Shared wordmark and tagline
    NavBar.tsx              Responsive sticky navigation and menu panel
    Footer.tsx               Shared site footer
```

Keep the root layout responsible for the elements shared by every route.
Implement route-specific sections in their own `app/<route>/page.tsx` files,
and extract repeated visual/content patterns to appropriately named
components. The `BrandMark` is shared by the header and footer so its styling
does not drift between placements.

## Header and navigation

- Keep the cream header sticky, the brand at the left, and the menu control at
  the right.
- The open menu is a full-width panel beneath the header. Main routes use
  numbered links; legal and visit details stay in a separate lower row.
- Use Next.js `Link` for internal routes, and standard anchors for `tel:`,
  `mailto:`, and external destinations.
- Keep the toggle keyboard-operable, give it an accessible label and
  `aria-expanded`, close it on Escape, and close it after selecting a route.
- Check the panel on narrow screens; stack its secondary information rather
  than forcing horizontal overflow.

## Footer

The footer uses the deep-green brand background and cream foreground. Its
responsive grid contains the shared wordmark and short description, social
links, internal navigation, and address/contact/hours. The legal links and
copyright are separated from that content by a top rule.

Use semantic `footer`, `nav`, `address`, headings, and lists. Give icon-only
social links accessible names. Verify that links point to real destinations
before replacing the reference URLs with production account URLs.

## Building the remaining pages

1. **Inventory the reference.** List each page and section in order. Record
   desktop/mobile differences, approximate section dimensions, image crops,
   and all button/link destinations.
2. **Establish the shared shell.** Keep the root layout and shared brand
   components consistent across routes; avoid copying header or footer markup
   into individual pages.
3. **Build the page outline.** Implement semantic sections in the same order
   as the reference, then tune their content width, spacing, colors, and
   typography with the shared tokens.
4. **Reuse patterns.** Extract repeated cards, section headings, buttons, or
   information rows into components once they have more than one use.
5. **Make every control work.** Use real internal routes, telephone/map links,
   and accessible labels/states. Do not leave decorative buttons without a
   destination or action.
6. **Check responsive behavior.** Validate at a narrow mobile width, tablet,
   and desktop. Look for overflow, awkward line breaks, compressed controls,
   and overly wide text.
7. **Compare and refine.** Capture the local page and the reference at matching
   widths, compare section geometry and hierarchy, and adjust the source styles
   rather than adding scattered overrides.
8. **Verify.** Run `npm run lint` and `npm run build`, then click through the
   navigation and footer routes in the browser.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Before shipping:

```bash
npm run lint
npm run build
```

Keep real content, image assets, metadata, and social account URLs aligned with
the business. The existing legal and secondary route files are starting points
and should be populated with approved content before launch.

## Home page content and motion

Business details, home-page copy, menu items, and testimonials live in
`constants/data.ts`; image paths remain in `constants/images.ts`. Shared
section spacing comes from `SectionLayout`, with custom spacing only for
intentional differences. Shared Framer Motion settings live in
`animations/transitions.ts` and `animations/variants.ts`. The initial split
shutter, in-view section reveals, floating beans, and gallery hover scale all
use those reusable settings and respect the reduced-motion preference.
