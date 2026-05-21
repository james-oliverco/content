# Oliver Co — Design System

A London-based luxury accessories brand rooted in biomaterial innovation, precision craftsmanship, and enduring functional design. Oliver Co. develops refined everyday objects (wallets, card holders, totes, passport holders, laptop sleeves) using next-generation plant-based and recycled materials — most notably **WASTEA®**, a leather alternative co-developed exclusively for the brand and partially derived from waste tea leaves, and **Apple Leather**, made from apple-juice industry waste in Bolzano, Italy.

The brand is B-Corp certified and produces in Istanbul (solar-powered factory). Founder: Matthew Oliver (product designer).

This design system encodes the brand's visual and verbal language so designers and agents can produce well-branded interfaces, decks, mocks, editorial layouts, and production code.

---

## Sources used

- `uploads/Oliver Co logo 2022 email grey-05.png` — primary wordmark (provided)
- Web context (publicly indexed): `olivercompanylondon.com`, retailer mirrors (alltrueist.com)
- Visual brief provided in the project intake (full prompt preserved in chat)

No codebase or Figma file was provided. The UI kit included here is a **reference recreation** of the marketing site (Shopify storefront pattern) following the brand's stated visual language — not a 1:1 port of production code. **If a Figma file or repo becomes available, re-run this kit against it for pixel parity.**

---

## Brand essence

Quiet luxury · modern craftsmanship · longevity · purposeful functionality · sustainability through intelligent design · material innovation · precision and restraint.

Sits at the intersection of: material science, contemporary industrial design, luxury editorial photography, architectural minimalism, engineered utility, natural systems.

The overall feel: **calm, tactile, intelligent, engineered, atmospheric, quietly luxurious.**

### Strict avoid-list
Overt eco branding · bright "green" sustainability aesthetics · wellness or skincare branding · soft lifestyle aesthetics · corporate ESG visuals · futuristic tech-startup visuals · glossy cyber aesthetics · infographics · obvious UI graphics · loud headlines · marketing layouts · emoji · drop-shadowed cards with colored left borders · gradient hero backgrounds · purple/blue tech gradients.

---

## Content fundamentals

**Tone**: restrained, intelligent, observational. Specification-style. Quiet poetic fragments. Sensory precision. Reads like an architectural monograph or material study, not a marketing site.

**Voice**: third-person and material-first. Almost never "you." Occasionally "we" for production/origin notes. Never "I." No exclamation points. No questions used as headlines.

**Casing**:
- Headlines & wordmark: `UPPERCASE` with **wide tracking (0.18em)**, or refined sentence-case for editorial titles.
- Annotations / coordinates / specs: `UPPERCASE` mono, tracked 0.04em.
- Body copy: sentence case, full punctuation, en-dash (–) for ranges and asides.
- Numerals: tabular, often with a leading zero (`No. 01`, `Edition 02 / 04`).

**Sentence shape**: short, declarative, often fragmented. Allow a single line to stand alone. Material names typeset with the registered mark (WASTEA®, MIRUM®). British English (colour, organisation, programme).

**Emoji**: never. Unicode marks (®, °, ·, —, ↗) are welcome as quiet typographic detail.

**Numbering / indexing**: products and editorial entries carry archival labels — `MS / 01`, `WASTEA® · LOT 04 / 24`, `EDITION No. 02`. Coordinate-style (`51.5074° N · 0.1278° W`) and timestamp-style (`24.11`) annotations are encouraged at the edges of layouts.

### Tone examples
> Crafted from waste tea leaves.
> Engineered for longevity.
> Renewable by design.
> Quiet utility.
> Material study no. 01.
> Designed for repetition.
> Surface, evolving.
> Formed through reduction.
> A premium, durable 5-pocket plant-based card holder.
> Refined detailing, sustainably considered throughout.

### Anti-examples (do not write)
> "Eco-friendly wallets that save the planet 🌱"
> "Get yours now!"
> "We're on a mission to..."
> "Our amazing customers love..."

---

## Visual foundations

### Colors
Warm neutrals, deep natural tones, and atmospheric accents. Never bright greens or saturated tech hues. The system reads close to a darkroom: bone paper, ash dividers, warm graphite type, with kelp / tannin / clay used sparingly as material accents.

| Token            | Hex       | Use                                      |
|------------------|-----------|------------------------------------------|
| `--oc-bone`      | `#F4F5F6` | Primary surface (near-white, cool cast)  |
| `--oc-paper`     | `#E9EBEC` | Secondary surface, cards                 |
| `--oc-ash`       | `#D2D5D7` | Hairline dividers, inactive borders      |
| `--oc-putty`     | `#A9ADB1` | Faint type, disabled                     |
| `--oc-stone`     | `#7B8085` | Captions, mono annotations               |
| `--oc-graphite`  | `#3A3D40` | Body type on bone                        |
| `--oc-ink`       | `#16181A` | Headlines, near-black surface            |
| `--oc-pitch`     | `#08090A` | Deepest, full-bleed photographic black   |
| `--oc-kelp`      | `#2A3A2C` | Forest-green product accent              |
| `--oc-tannin`    | `#6B4F2E` | Tea / leather brown accent               |
| `--oc-clay`      | `#8E5A3B` | Burnt clay accent                        |
| `--oc-moss`      | `#5A6244` | Low-saturation green                     |

Imagery is clean and **clinical** — high-key product on near-white surfaces, with macro material details treated like specimens. Black-and-white macro is acceptable. Subtle grain may overlay surfaces for tactile depth.

### Type
- **Primary sans — `Aeonik`** *(brand font; TRIAL files supplied — replace with licensed weights for production).* Weights 100 (Air) · 300 (Light) · 400 (Regular) · 500 (Medium) · 700 (Bold) · 900 (Black). Used for display, headlines, navigation, product names, lead paragraphs.
- **Secondary mono — `Geist Mono`** *(Google Fonts substitute for the engineered/scientific voice; alternates: IBM Plex Mono, Suisse Int'l Mono).* Weights 300–500. Used for annotations, coordinates, edition numbers, material specs, indices, technical notes.

> **License flag**: `AeonikTRIAL-*.otf` files are loaded — these are not licensed for production. Send licensed `.woff2` weights when ready and I'll swap in the production-safe versions.

Hierarchy is **subtle**: large bodies of negative space, small widely-tracked annotations, low-contrast type colors (`graphite` on `bone`, never pure black on white). Text often sits inside imagery rather than over it.

### Spacing
4 px base. Generous: prefer `48 / 64 / 96 / 128 / 192 px` gutters for editorial layouts. Tight only inside annotations and table-style specs.

### Borders, radii, shadows
- **Radii**: near-zero. Buttons and cards are square or 1–2 px rounded. Pills only for tag chips.
- **Borders**: hairline (`0.5px` or `1px`) in `--oc-ash`. Strong rules in `--oc-graphite`.
- **Shadows**: rarely used. When used, soft and tall (`0 24px 64px rgba(20,18,14,0.10)`). Inset `1px` rim is preferred over a drop shadow on cards.

### Backgrounds
- Plain bone or paper for editorial.
- Full-bleed photographic plates (warm, moody, macro material studies).
- Translucent overlays of grids, contour lines, molecular nodes — **5–8 % opacity, never decorative**.
- No gradients, no repeating patterns, no noise textures except very fine film grain on photography.

### Animation
- Fades and tone-on-tone transitions only. `260 ms` base, `cubic-bezier(0.22, 0.61, 0.36, 1)`.
- Cross-fades between product states. Slow image reveals.
- **No bounce, no spring, no parallax-on-scroll** beyond very subtle vertical drift.
- Hover: opacity drop to `0.7`, or rule extends, or eyebrow text reveals beneath. **Never** scale up.
- Press: opacity to `0.55`, no shrink.

### Layout principles
Asymmetry, interrupted grids, floating annotations at the edges, oversized negative space, fragmented alignment, calm compositions with subtle tension. The grid is felt, not seen — annotations align to invisible columns. Text sits at unusual margins (3rd column, far gutter) to feel discovered.

---

## Iconography

The brand uses **almost no UI iconography**. Where icons appear they are:
- **Hairline (1 px stroke), monoline, square endcaps**, drawn on a 24-px grid, rendered in `--oc-graphite` at 60–80% opacity.
- Functional only: cart, search, account, close, chevron, plus, minus, arrow (↗ ↘), play, pause.
- No filled glyphs, no colored icons, no duotone, no rounded caps.

**System used here**: [Lucide](https://lucide.dev) (CDN) configured at `stroke-width: 1`, with `--oc-graphite` color. Rationale: closest hairline match to the brand's editorial restraint among free, CDN-available systems. **Flagged as a substitution** — if Oliver Co. has a custom icon set, drop the SVGs into `assets/icons/` and update `colors_and_type.css` to point at them.

**Unicode marks** are welcomed as part of the typographic system (not as icons): `® ° · — ↗ ↘ ←` — used inline in copy, not in chrome.

**Emoji**: never.

**Logo**: the wordmark `OLIVER CO` (wide-tracked geometric sans) is the only mark. There is no separate symbol or monogram. Available at `assets/oliver-co-logo.png`. A CSS-only typographic version is included in the kit under `.oc-logo-mark`.

### Graphic language (decorative)
Restrained scientific/material-inspired motifs — molecular structures, contour lines, connected node systems, indexing marks, measurement systems, micro-grids, technical diagrams — overlaid at **5–8 % opacity**. These are *atmospheric*, never instructional. Treat them as light leaks, not infographics.

---

## Index

```
README.md                  ← you are here
SKILL.md                   ← agent skill manifest
colors_and_type.css        ← all CSS variables + type classes
assets/
  oliver-co-logo.png       ← wordmark
preview/                   ← design-system preview cards
  *.html                   ← typography, color, spacing, components, brand
ui_kits/
  website/
    README.md
    index.html             ← editorial storefront recreation
    Header.jsx
    Hero.jsx
    ProductGrid.jsx
    MaterialStudy.jsx
    Footer.jsx
```

---

## Caveats & open questions

- **No licensed font files** — substituted `Hanken Grotesk` + `Geist Mono` from Google Fonts. Awaiting actual brand fonts.
- **No Figma / codebase** provided. UI kit is a high-fidelity recreation against the stated brief and the public storefront pattern, not a port.
- **Photography** is represented by warm, low-saturation placeholder imagery only. The system reserves slots for real macro material studies (tea leaves, fibres, leather, embossed details). Drop them into `assets/imagery/` and the components will pick them up.
- **Iconography** uses Lucide as a hairline substitute. Replace with brand SVGs when available.
