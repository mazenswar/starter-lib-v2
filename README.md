# Binswar Starter

A Next.js starter template built for Binswar client projects. Duplicate it
for each new client, drop in their content, pick a theme, and ship.

### Workflow

- Phase 1 — Layout and copy. Drop in client content and placeholder images.
- Phase 2 — Design. Pick the theme, font pairing, shape, and spacing in `app/layout.js`, and the hero variant in `app/page.js`.
- Phase 3 — Delivery. Swap in real images, delete unused theme files, run the launch checklist, ship.

---

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Sass (SCSS), no CSS Modules
- **Images:** next/image — always, never bare img tag
- **Email:** Resend (contact form)
- **Hosting:** Vercel
- **Accessibility:** WCAG 2.1 AA — non-negotiable, built in from the start

---

## Accessibility Standard

**Accessibility is WCAG 2.1 AA. It is built in from the start of every
component, not added as a cleanup pass. No component is considered
complete until it meets this standard.**

### Rules that apply to every component

- Always use `next/image`, never a bare `img` tag
- Use `Link` from `next/link` for all internal navigation links
- Use bare `<a>` with `target="_blank"` and `rel="noopener noreferrer"`
  for external links. Include `aria-label` indicating it opens in a new tab
- Same-page fragment links (`#section-id`) and `mailto:` / `tel:` links use a bare `<a>`
- All images get `alt` text from props. Decorative images use `alt=""`
- All interactive elements have `:focus-visible` styles using `--focus-ring`
- All buttons and links meet the 44px minimum tap target via `--min-tap-target`.
  Standalone text links use the `tap-target-overlay` mixin, which enlarges the
  hit area without changing the layout
- Icon-only buttons must have `aria-label`
- Heading levels are logical and sequential — never skip from h1 to h3.
  Every page has exactly one h1 (visually hidden with `.sr-only` when the
  design has no visible page title)
- Disclosure elements use `aria-expanded`, `aria-haspopup`, `aria-controls`.
  FAQ accordions use native `details`/`summary`, which expose their state automatically
- Color contrast meets WCAG AA — 4.5:1 for normal text, 3:1 for large text
  and for focus indicators
- Semantic HTML throughout — nav, main, section, footer, article, aside, figure
- Skip navigation link present in root layout, targeting `#main-content`.
  Every page's `<main>` carries `id="main-content"`
- `lang` attribute on html element
- No positive tabindex values
- Error messages are associated with their fields via `aria-describedby`
- Loading and dynamic states are communicated via `aria-live` where needed
- Lists styled with `list-style: none` keep `role="list"` so Safari still announces them

---

## Theme System

The active color palette is a single constant at the top of `app/layout.js`:

```js
const theme = "sol";
```

It is applied as `data-theme` on the html element, and each file in
`styles/themes/` defines one `[data-theme="..."]` block of color tokens.

### Adding a new theme

1. Create a new SCSS file in `styles/themes/` — e.g. `styles/themes/ocean.scss` —
   containing a `[data-theme="ocean"] { ... }` block that sets the color tokens
   (copy an existing theme file as a starting point).
2. Import it in `styles/index.scss`:

   ```scss
   @use "./themes/ocean";
   ```

3. Change the theme constant in `app/layout.js` to the new name:

   ```js
   const theme = "ocean";
   ```

Check the new palette against the contrast rules above before shipping —
in particular `--color-muted` on `--color-surface`, `--brand-1` on
`--color-bg`, and `--brand-5` on `--brand-1` (button text).

### Available themes

`sol` (default), `warm`, `clean`, `bold`, `earth`, `minimal`, `fiery-ocean`,
`golden-peachy-glow`, `whispering-waves`, `cozy-cabin`, `obsidian-gold`,
`deep-violet`, `slate-mauve`.

- `sol` — light and warm: cream background, terracotta buttons, marigold surfaces, teal focus ring
- `slate-mauve` — dark: charcoal with a purple accent

`sol` and `slate-mauve` have been checked against every contrast pair the
components use. The others have not all been retuned yet — verify contrast
before delivering a project on one of them.

---

## Design System

### Attribute system

The html element in `app/layout.js` carries five static data attributes
that drive the visual system:

```jsx
<html
	lang="en"
	data-theme={theme} // color palette — styles/themes/
	data-font="editorial" // font pairing — styles/design/fonts.scss
	data-style="background-hero" // label for the hero variant in use (no CSS reads it)
	data-shape="round" // border radius scale — styles/design/shape.scss
	data-spacing="airy" // vertical rhythm — styles/design/spacing.scss
>
```

| Attribute      | Options                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------- |
| `data-font`    | editorial, friendly, clinical, expressive, modern, grounded                              |
| `data-style`   | split-contained, split-rectangular, full-bleed, asymmetric, centered, background-hero    |
| `data-shape`   | sharp, soft, round                                                                        |
| `data-spacing` | compact, balanced, airy                                                                   |

### Site styles

A site style pairs a hero variant with a shape and spacing. These are
recommended pairings — shape and spacing are set independently in `layout.js`.

| Style ID          | Hero component         | Label                   | Shape | Spacing  |
| ----------------- | ---------------------- | ----------------------- | ----- | -------- |
| split-contained   | `HeroSplitContained`   | Soft & Personal         | round | airy     |
| split-rectangular | `HeroSplitRectangular` | Clean & Balanced        | soft  | balanced |
| full-bleed        | `HeroFullBleed`        | Dramatic & Bold         | sharp | compact  |
| asymmetric        | `HeroAsymmetric`       | Structured & Modern     | sharp | balanced |
| centered          | `HeroCentered`         | Editorial & Open        | soft  | airy     |
| background-hero   | `HeroBackground`       | Immersive & Atmospheric | sharp | compact  |

To change style: import the matching hero component in `app/page.js`, then
update `data-style` (and optionally `data-shape` / `data-spacing`) in `layout.js`.

### Adding a new font pairing

1. Add a `[data-font="your-id"]` block in `styles/design/fonts.scss`
2. If using new fonts, add them to `config/fonts.js` and include their `.variable` in `fontClasses` in `layout.js`
3. Set `data-font="your-id"` in `layout.js`

### Font system

All fonts are loaded at build time in `layout.js`. Each font
has a unique CSS variable name — e.g. `--font-warm-body`. The
`data-font` attribute maps `--font-body` and `--font-heading` to the
correct variables via `styles/design/fonts.scss`. Theme SCSS files do
not set font variables — fonts are controlled exclusively by `data-font`.

---

## Style System

### Tokens (`_tokens.scss`)

All visual decisions are CSS custom properties. Themes override these:

```scss
--color-bg
--color-surface
--color-text
--color-muted
--color-border
--color-background-alt
--brand-1   // primary action — buttons, links
--brand-2   // secondary accent — hover states
--brand-3   // surface tint — card and section backgrounds
--brand-4   // border and divider color
--brand-5   // text on brand-1 — button labels, step numbers, badges
--accent-1  // focus ring color
--danger    // error text
```

Full token list includes typography scale, spacing scale, radii,
shadows, transitions, z-index scale, and accessibility tokens
(`--focus-ring`, `--focus-offset`, `--min-tap-target`).
See `_tokens.scss` for all values.

### Mixins (`_mixins.scss`)

```scss
@include respond(md)          // min-width breakpoint
@include sr-only              // visually hidden, screen reader accessible
@include focus-ring           // accessible focus outline
@include tap-target           // 44px minimum touch target
@include tap-target-overlay   // 44px hit area for text links, no layout change
@include flex-center          // centered flex
@include flex-column          // column flex
@include flex-row-between     // space-between flex
@include flex-wrap            // wrapping flex
@include truncate             // text overflow ellipsis
@include transition(base)     // token-based transition
@include absolute-fill        // position absolute inset 0
```

### Layout classes (`_layout.scss`)

```scss
.container                    // max-width centered wrapper
.block                        // section with vertical padding
.block__content               // content wrapper inside block
.blockTint                    // light surface background
.blockBrand                   // subtle brand tint background
.blockDark                    // dark brand background
.two-col                      // equal two column grid
.two-col-asymmetric           // 1.1fr / 0.9fr grid
.three-col                    // three column grid
.four-col                     // four column grid
.stack                        // vertical flex gap-6
.stack-sm                     // vertical flex gap-4
.stack-lg                     // vertical flex gap-10
.row                          // horizontal flex wrap
.row-between                  // space-between flex row
.col-3 through .col-12        // 12-column span helpers
.sr-only                      // visually hidden
```

### Global classes (`_globals.scss`)

```scss
.btnPrimary                   // filled brand button
.btnSecondary                 // outlined button
.btnGhost                     // transparent button
.link                         // inline text link
```

### Typography classes (`_typography.scss`)

```scss
.lead                         // large intro paragraph
.label                        // uppercase small label
.text-muted                   // muted color text
.text-center                  // centered text
.prose                        // readable max-width text block
```

---

## Component Structure

```
src/app/components/
├── nav/                     Nav.js + nav.scss
├── footer/                  Footer.js + footer.scss
├── illustrations/           decorative SVG components (AuditIcon, GeometricNetwork, FeatureIcon)
├── ui/                      Button, FadeUp, StaggerGrid, ChipNav
└── sections/
    ├── heroSplitContained/  HeroSplitContained.js + HeroSplitContained.scss
    ├── heroBackground/      HeroBackground.js + HeroBackground.scss
    ├── cardGrid/            CardGrid.js + cardgrid.scss
    └── ...
```

### Conventions

- **One component per folder.** Each component lives in its own camelCase
  folder with its JS file and its own SCSS file, imported at the top of the
  JS file.
- **One variant per component.** A layout variant is its own component in
  its own folder — `HeroSplitContained`, `HeroBackground`, `CTABannerDark`,
  and so on — never a `variant` prop or a switch inside one component. Each
  variant is fully self-contained: it shares no variant logic, and its SCSS
  holds every rule it needs. To change a layout, import a different component.
- **Content comes from props.** No component hardcodes visible text or
  images. Pages (and `layout.js`, for Nav and Footer) hold the content in a
  config object and spread it into the component: `<CardGrid {...cardGridConfig} />`.
- **Props are destructured in the function signature**, and each component
  only accepts the props it uses.
- **No inline styles.** All styling lives in the component's SCSS file. The
  one exception is FadeUp, which passes its per-instance animation delay to
  its SCSS as a `--fadeup-delay` custom property.
- **One default export per file.** Small helpers (icons, the Gallery lightbox)
  stay private to the file that uses them.
- **`"use client"` only when needed** — hooks, event handlers, or browser APIs.

---

## Components

All section components receive their content as props. The examples below
show the config object a page spreads into each one.

### Button (`/components/ui/Button.js`)

Unified button component handling all styles, links, and optional GTM tracking.
`variant` here is a class choice, not a layout variant, so Button stays one component.

```jsx
<Button
	text="Get in touch"
	href="/contact"
	variant="primary" // "primary" | "secondary" | "ghost"
	external={false} // true renders a bare <a> that opens in a new tab with aria-label
	trackEvent={{ event: "cta_click" }} // optional GTM push
	disabled={false}
	type="button" // used when no href
/>
```

---

### Nav (`/components/nav/Nav.js`)

Sticky header with mobile hamburger, desktop click dropdowns, and full
keyboard accessibility. Content is `navConfig` in `app/layout.js`.

```js
const navConfig = {
	logo: { src, alt, width, height },
	links: [
		{ label: "Services", href: "/services" },
		{
			label: "Work",
			items: [
				{ label: "Web Design", href: "/work/web" },
				{ label: "SEO", href: "/work/seo" },
			],
		},
	],
	cta: { text, href, variant, external },
	homeHref: "/",
};
```

Parent items with an `items` array are triggers only — they do not
navigate. Children are the links. ESC closes the menu and returns focus
to the burger button.

---

### Footer (`/components/footer/Footer.js`)

Three column footer with contact info, navigation, directory badges,
and social media icons. Content is `footerConfig` in `app/layout.js`.

```js
const footerConfig = {
	labels: { contact, navigate, badges, social }, // column headings
	contact: { phone, email, address, virtual }, // all optional
	navLinks: [{ label, href }],
	badges: [{ label, href, src }],
	social: [{ label, href, icon }], // icon: "instagram" | "linkedin" | "facebook"
	legalLinks: [{ label, href }],
	seoLine: "Optional SEO sentence", // or null
	copyright: { name, notice, creditText, creditHref }, // credit fields optional
};
```

---

### Hero variants (`/components/sections/hero*/`)

Homepage hero. One component per layout — import the one you want in
`app/page.js`.

- `HeroSplitContained` — circular portrait, copy left, warm and personal
- `HeroSplitRectangular` — vertical rectangular portrait, copy left, balanced
- `HeroFullBleed` — full viewport, image fills right half, dramatic
- `HeroAsymmetric` — landscape image left, tall copy right, geometric
- `HeroCentered` — copy centered above wide image, editorial
- `HeroBackground` — full width background image, text overlay, atmospheric

```js
const heroConfig = {
	eyebrow: "Optional label", // or omit
	heading: "Main heading",
	subheading: "Supporting text",
	cta: { text, href, variant },
	ctaSecondary: { text, href, variant }, // or omit
	image: { src, alt }, // alt: "" for decorative backgrounds
	caption: { name, title }, // SplitContained, SplitRectangular, Asymmetric only
};
```

**Image size guidelines:**

- Portrait (SplitContained, SplitRectangular) — 800x1000px minimum, 4:5 ratio, vertical
- Background (FullBleed, Background) — 1200x1600px minimum, strong subject center-top
- Landscape (Asymmetric, Centered) — 1800x960px minimum, 16:9 or wider, horizontal

---

### PageHero variants (`/components/sections/pageHero*/`)

Lightweight interior page hero for all non-home pages.

- `PageHeroLeft` — copy aligned left
- `PageHeroCentered` — copy centered

```js
const pageHeroConfig = {
	eyebrow: "Optional label",
	heading: "Page Title",
	subheading: "Brief description",
	image: { src, alt, width, height }, // optional
	illustration: <AuditIcon />, // optional decorative SVG, used when there is no image
};
```

---

### LogoBar (`/components/sections/logoBar/LogoBar.js`)

Wrapping row of logos for insurance providers, directory badges,
press mentions, or certifications.

```js
const logoBarConfig = {
	heading: "Accepting most major insurance", // optional
	logos: [
		{ src, alt, href: null, width: 120 },
		// href: null for display-only logos
		// external href uses bare a tag with aria-label
		// internal href uses Next Link
	],
};
```

---

### CardGrid (`/components/sections/cardGrid/CardGrid.js`)

Three column card grid with optional header and footer CTA.

```js
const cardGridConfig = {
	heading,
	subheading,
	cta: { text, href, variant }, // optional
	cards: [{ title, description, href, cta }],
};
```

---

### TwoColumn variants (`/components/sections/twoColumn*/`)

Two column section with copy and an image or list.

- `TwoColumnImageRight` — copy left, image right
- `TwoColumnImageLeft` — image left, copy right
- `TwoColumnText` — copy left, bulleted list right, no image

```js
const twoColumnConfig = {
	id: "approach", // used for the heading id and anchor
	eyebrow,
	heading,
	subheading,
	paragraphs: ["First paragraph", "Second paragraph"],
	list: ["Point one", "Point two"], // optional
	cta: { text, href, variant }, // optional
	image: { src, alt, width, height }, // ImageRight / ImageLeft only
};
```

---

### FeatureGrid variants (`/components/sections/featureGrid*/`)

- `FeatureGridAccent` — two-column cards with a brand accent bar
- `FeatureGridIcon` — open four-column layout led by icons
- `FeatureGridCard` — four-column bordered cards

```js
const featureGridConfig = {
	id: "features",
	heading,
	subheading,
	features: [{ id, title, description, icon }], // icon: design | search | accessibility | chart | settings | shield
	cta: { text, href, variant }, // optional
};
```

---

### Audience variants (`/components/sections/audience*/`)

"Who this is for" checklist section.

- `AudienceSplit` — heading left, checklist card right
- `AudienceTypographic` — large heading with a ruled list
- `AudienceCard` — checklist inside a single card

```js
const audienceConfig = {
	id: "audience",
	heading,
	body, // optional
	items: [{ id, text }],
	cta: { text, href, variant }, // optional
};
```

---

### Steps (`/components/sections/steps/Steps.js`)

Numbered process section. Used for explaining how therapy works,
onboarding steps, etc.

```js
const stepsConfig = {
	heading,
	subheading,
	steps: [{ id, title, description }],
	cta: { text, href, variant }, // optional
};
```

---

### FAQ (`/components/sections/faq/FAQ.js`)

Grouped accordion with optional search and sticky TOC sidebar.
Uses native HTML details/summary for accessibility.

```js
const faqConfig = {
	heading,
	subheading,
	contact: { text, href }, // optional internal link after the subheading
	searchable: true,
	searchLabel: "Search frequently asked questions", // screen reader label
	searchPlaceholder: "Search questions...",
	showToc: true,
	tocTitle: "On this page",
	noResultsText: "No results for",
	noResultsHint: "Try a different search term.",
	clearSearchText: "Clear search",
	groups: [
		{
			id,
			title,
			items: [{ id, q, a, tags }],
		},
	],
};
```

Answers in `a` support HTML strings. Tags are used for search matching.
Hash-based deep linking works out of the box.

---

### Testimonials variants (`/components/sections/testimonials*/`)

Client testimonials with star ratings.

- `TestimonialsGrid` — all testimonials equal size
- `TestimonialsFeatured` — first testimonial large, rest in a smaller grid

```js
const testimonialsConfig = {
	heading,
	subheading, // optional
	testimonials: [{ id, quote, name, title, rating }],
};
```

---

### CTABanner variants (`/components/sections/ctaBanner*/`)

Full width call to action section.

- `CTABannerBrand` — page background, text color headings
- `CTABannerDark` — dark brand background
- `CTABannerLight` — tinted brand background

```js
const ctaBannerConfig = {
	heading,
	subheading,
	cta: { text, href, variant },
	secondaryCta: { text, href, variant }, // optional
};
```

---

### Gallery variants (`/components/sections/gallery*/`)

- `GalleryGrid` — photo grid with optional filter tabs and a lightbox
- `GalleryBeforeAfter` — side-by-side before and after pairs

```js
const galleryGridConfig = {
	heading,
	subheading,
	filterable: true,
	columns: 3, // 2 | 3 | 4
	viewLabel: "View", // hover overlay text
	categories: [{ id, label }], // include { id: "all", label: "All" }
	images: [{ id, src, alt, category, width, height }],
};

const galleryBeforeAfterConfig = {
	heading,
	subheading,
	beforeLabel: "Before",
	afterLabel: "After",
	pairs: [
		{
			id,
			label,
			before: { src, alt, width, height },
			after: { src, alt, width, height },
		},
	],
};
```

---

### ContactForm (`/components/sections/contactForm/ContactForm.js`)

Two column form for **general, non-clinical questions**, sent by email via Resend.
The form is not HIPAA secure, so it shows a privacy notice and requires a
checkbox confirming the sender is not sharing protected health information
(PHI). The server action rejects submissions without it. Consultation
requests go to the secure client portal instead (see `clientPortal` below).

**Setup:**

1. Add `RESEND_API_KEY=your_key` to `.env.local`
2. Verify the site's domain in Resend — mail is sent from `noreply@<site domain>` to `site.email`

```js
const formConfig = {
	heading,
	subheading,
	privacyNotice: { title, text }, // shown above the fields
	acknowledgmentLabel, // required "no PHI" checkbox
	fields: {
		name: { label, placeholder },
		email: { label, placeholder },
		message: { label, placeholder },
	},
	errorMessages: { name, email, emailInvalid, message, acknowledgment },
	submitText,
	loadingText,
	requiredNote,
	successHeading,
	successMessage,
	resetText,
};
```

---

### BookingCTA (`/components/sections/bookingCTA/BookingCTA.js`)

Booking section for therapy practices. Links to EHR portal instead
of a contact form. HIPAA safe — no PHI collected on site.

```js
const bookingConfig = {
	heading,
	subheading,
	steps: [{ number, text }],
	cardLabel: "Free 30 minute consultation",
	cta: { text, href, variant, external: true },
	note: "Disclaimer text below button",
};
```

Update `cta.href` to the SimplePractice, Calendly, or EHR booking link.

---

### TherapistGrid (`/components/sections/therapistGrid/TherapistGrid.js`)

Clinician cards: photo (or an initials avatar when `photo` is null), name,
credentials, pronouns, title, availability, and the top three specialties.
The whole card links to `/therapists/[slug]`. With `filterable`, a
specialty dropdown filters the grid and a live region announces the count.
Used on `/therapists` (filterable, full team) and on the home page (first three, with a CTA).

```js
const therapistGridConfig = {
	id: "therapists",
	eyebrow, // optional
	heading,
	subheading,
	therapists, // from config/therapists.js
	filterable: true,
	filterLabel: "Filter by specialty",
	allLabel: "All specialties",
	resultsTemplate: "Showing {shown} of {total} therapists",
	acceptingLabel: "Accepting new clients",
	waitlistLabel: "Waitlist",
	specialtiesLabel: "Specialties", // screen reader label for the tag list
	profileLinkText: "View profile",
	cta: { text, href, variant }, // optional
};
```

---

### TherapistProfile (`/components/sections/therapistProfile/TherapistProfile.js`)

Individual clinician page: header with photo, name, pronouns, availability,
and booking CTA; bio, specialties, approaches, and populations in the main
column; session format, location, languages, and insurance in a sticky sidebar.
Rendered by `app/therapists/[slug]/page.js`, which passes one therapist's
fields plus `labels`, `backLink: { text, href }`, and `cta: { text, href }`.

---

### Pricing and add-on sections

- `PricingCard` — `{ id, eyebrow, heading, subheading, deliveryLabel, packages: [{ id, name, description, price, paymentStructure, delivery, inclusions }], cta }`
- `AddonsGrid` — `{ id, eyebrow, heading, subheading, addons: [{ id, name, description, price, compatibility }] }`
- `AuditCTA` — `{ id, eyebrow, heading, body, items: [{ id, text }], card: { label, price, description, cta } }`
- `OngoingSupport` — `{ id, eyebrow, heading, subheading, items: [{ id, text }], cta }`

---

### LegalDocument (`/components/sections/legalDocument/LegalDocument.js`)

Long-form policy page with a sticky table of contents. Used by
`/privacy-policy`, `/notice-of-privacy-practices`, and `/good-faith-estimate`,
each paired with `PageHeroLeft` for the h1. The content on those pages is
template language — have a healthcare attorney review it before launch.

```js
const documentConfig = {
	updatedLabel: "Last updated:",
	updated: "January 1, 2026",
	intro: ["Optional opening paragraphs"],
	tocTitle: "In this policy", // omit to hide the table of contents
	sections: [
		{
			id: "section-id",
			heading: "Section title",
			paragraphs: [],
			list: [], // optional bullets
			links: [{ text, href }], // optional external links
		},
	],
};
```

- **Privacy Policy** covers the website itself (contact form, cookies, analytics).
- **Notice of Privacy Practices** is the HIPAA notice for client health information.
- **Good Faith Estimate** is the No Surprises Act notice for self-pay clients.

---

### ChipNav (`/components/ui/chipNav/ChipNav.js`)

Sticky horizontal pill navigation for long single pages. Smooth
scrolls to sections accounting for sticky header offset.

```js
const chipNavConfig = {
	label: "Jump to section",
	chips: [{ id, label }],
};
```

Place immediately after the page hero. Section elements need matching `id` attributes.

---

## Therapist Data (`/config/therapists.js`)

One entry per clinician. The home page preview, `/therapists`, and every
`/therapists/[slug]` page read from this file, and `app/sitemap.js` lists
each profile. Profile pages are generated at build time from the slugs here;
any other slug returns a 404.

```js
{
	slug: "jane-doe", // URL: /therapists/jane-doe
	name, firstName, credentials, pronouns, title,
	photo: { src, alt, width, height }, // or null for an initials avatar
	acceptingClients: true, // false shows waitlist status
	bio: ["Paragraph one", "Paragraph two"],
	specialties: [], approaches: [], populations: [],
	languages: [], sessionFormats: ["In person", "Virtual"],
	location, insurance: [],
}
```

To add a clinician, add an entry and their photo to `/public`. To remove one, delete the entry.

---

## Metadata System

### Central config (`/config/site.js`)

Edit per project: site name, URL, contact info, branding, social,
business type, analytics IDs, OG image colors, and `clientPortal`.

`clientPortal` is the practice's secure EHR portal (e.g. a SimplePractice
`clientsecure.me` URL). Every "Request a consultation" button — nav, hero,
therapist profiles, banners, BookingCTA — links there and opens in a new tab.
Anything involving health information goes through the portal, never the
contact form.

### Metadata helper (`/config/metadata.js`)

```js
// In each page.js
export const metadata = generateMeta({
	title: "Page Title",
	description: "Page description for search engines.",
	path: "/page-path",
});
```

### Dynamic OG image (`/app/api/og/route.js`)

Generates 1200x630 branded OG images per page using logo from
`/public` and colors from `site.js`. No manual image creation needed.

---

## Analytics

1. Get GA4 Measurement ID from Google Analytics
2. Add to `config/site.js` under `analytics.ga4`
3. Deploy — scripts load automatically via `@next/third-parties`

For GTM use `analytics.gtm`. For Search Console verify via DNS TXT record.

---

## Environment Variables

Create `.env.local` in the project root. Never commit `.env.local`.

| Variable       | Required             | Description             |
| -------------- | -------------------- | ----------------------- |
| RESEND_API_KEY | If using ContactForm | API key from resend.com |

---

## Starting a New Project

1. Duplicate this repo and rename for the client
2. Update `config/site.js` — name, URL, contact, logo, analytics, client portal URL
3. Set the theme constant and data attributes in `app/layout.js`
4. Update `navConfig` and `footerConfig` in `app/layout.js`
5. Replace the clinicians in `config/therapists.js`
6. Pick a hero variant and update `heroConfig` in `app/page.js`
7. Update or replace section configs on each page
8. Add client images to `/public`
9. Add `RESEND_API_KEY` to `.env.local` if using ContactForm
10. Verify the site domain in Resend for the contact form
11. Update routes in `app/sitemap.js`

---

## Delivering a Project

When design is locked and content is final:

1. Confirm the theme constant and data attributes in `app/layout.js`
2. Delete unused theme files from `styles/themes/` and their `@use` lines in `styles/index.scss`
3. Delete unused variant component folders
4. Run the full launch checklist

---

## Launch Checklist

### Accessibility

- [ ] Run axe DevTools — fix all critical and serious violations
- [ ] Run Lighthouse accessibility audit — aim for 95+
- [ ] Check color contrast with WebAIM for all color combinations in the chosen theme
- [ ] Test full keyboard navigation manually — tab through every interactive element
- [ ] Test with screen reader (VoiceOver on Mac or NVDA on Windows)
- [ ] Verify skip navigation link works
- [ ] Check all form fields have associated labels
- [ ] Verify focus is managed correctly in all modals and dropdowns

### SEO and Metadata

- [ ] Verify page titles and descriptions on all pages
- [ ] Verify OG images render correctly at opengraph.xyz
- [ ] Confirm sitemap is accessible at /sitemap.xml
- [ ] Submit sitemap in Google Search Console
- [ ] Verify Google Analytics is receiving data
- [ ] Check canonical URLs are correct

### Performance

- [ ] Run Lighthouse performance audit — aim for 90+
- [ ] Verify all images use next/image with correct sizes prop
- [ ] Check no layout shift on load (CLS score)

### Functional

- [ ] Test contact form end to end in production
- [ ] Test all external links open in new tab
- [ ] Test booking CTA link goes to correct EHR portal
- [ ] Check all pages on mobile — iOS Safari and Android Chrome
- [ ] Verify nav mobile menu opens and closes correctly
- [ ] Test all dropdown menus keyboard accessible

### Before Going Live

- [ ] Remove any placeholder or test content
- [ ] Verify domain and DNS are configured correctly
- [ ] Confirm SSL certificate is active
- [ ] Set environment variables in Vercel dashboard

---

## Notes and Conventions

- All components are prop-driven. Pages hold section content; `layout.js`
  holds Nav and Footer content.
- Page-level styles use double underscore scoping: `.home__page`, `.about__page`
- Never edit component JSX or SCSS for content changes. All content
  customization goes in the config objects passed as props.
- `next/image` always. Never bare img tag.
- `Link` from next/link for internal links. Bare `a` for external.
- Accessibility is verified before any component is considered complete.
- The hero layout is chosen by which hero component `app/page.js` imports.
  `data-style` in `layout.js` labels that choice.
