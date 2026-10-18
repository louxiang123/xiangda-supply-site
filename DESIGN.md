---
version: alpha
name: "Xiangda Supply — American B2B Premium"
description: "Daylight B2B system for the Xiangda Supply Chain site: crisp off-white paper, pure white objects, one deep navy for arrival and departure, and champagne gold held in two registers — fill and ink."
colors:
  bg: "#F6F5F0"
  bg-alt: "#FBFAF6"
  bg-raised: "#ECEBE4"
  surface: "#FFFFFF"
  surface-hover: "#F8F6F0"
  surface-scrim: "rgba(255, 255, 255, 0.94)"
  navy: "#152A46"
  navy-lift: "#1B3455"
  gold: "#C9A96A"
  gold-hover: "#D9BD83"
  gold-pressed: "#B8965A"
  gold-deep: "#7C5E27"
  gold-veil: "rgba(201, 169, 106, 0.10)"
  gold-veil-navy: "rgba(201, 169, 106, 0.12)"
  text-primary: "#101A26"
  text-secondary: "#3E4A5A"
  text-muted: "#5B6775"
  text-on-navy: "#F4F1E8"
  text-on-navy-soft: "#C3CDDA"
  text-on-navy-muted: "#94A3B8"
  text-on-gold: "#14243B"
  border-hairline: "rgba(21, 42, 70, 0.12)"
  border-soft: "rgba(21, 42, 70, 0.07)"
  border-strong: "rgba(21, 42, 70, 0.22)"
  border-input: "#7E8896"
  border-navy-hairline: "rgba(201, 169, 106, 0.22)"
  border-navy-soft: "rgba(244, 241, 232, 0.10)"
  border-navy-strong: "rgba(201, 169, 106, 0.42)"
  focus-ring: "#7C5E27"
  focus-ring-navy: "#E4CC96"
  success: "#1F7A4D"
  warn: "#8A5A12"
  danger: "#B3261E"
typography:
  display:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 76px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  blog-title:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  numeral:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  lead:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  body:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  reading:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0em"
  data:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  small:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.005em"
  label:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.01em"
  eyebrow:
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.10em"
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  pill: 999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
  section-desktop: 128px
  section-tablet: 96px
  section-phone: 64px
  container-max: 1200px
  gutter-desktop: 40px
  gutter-tablet: 32px
  gutter-phone: 20px
components:
  header-bar:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-navy}"
    height: 76px
  header-bar-scrolled:
    backgroundColor: "{colors.surface-scrim}"
    textColor: "{colors.text-primary}"
  nav-link:
    textColor: "{colors.text-on-navy-soft}"
    typography: "{typography.label}"
    height: 44px
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.text-on-gold}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 16px
    height: 52px
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
  button-primary-active:
    backgroundColor: "{colors.gold-pressed}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 16px
    height: 52px
  eyebrow-chip:
    backgroundColor: "{colors.gold-veil-navy}"
    textColor: "{colors.text-on-navy-soft}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 10px
  stat-item:
    textColor: "{colors.text-on-navy}"
    typography: "{typography.numeral}"
  card-category:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: 24px
  card-category-hover:
    backgroundColor: "{colors.surface-hover}"
  chip-pill:
    backgroundColor: "{colors.gold-veil}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 6px
  region-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: 32px
  compare-column:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.text-on-navy}"
    rounded: "{rounded.sm}"
    padding: 32px
  process-step:
    textColor: "{colors.text-muted}"
    padding: 24px
  trust-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 14px
  faq-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: 20px
  form-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: 48px
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 16px
    height: 52px
  textarea-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 16px
    height: 160px
  progress-rail:
    backgroundColor: "{colors.gold-deep}"
    height: 2px
  footer-column:
    textColor: "{colors.text-on-navy-muted}"
    typography: "{typography.small}"
    padding: 16px
  snapshot-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
  snapshot-archive-row:
    textColor: "{colors.text-secondary}"
    typography: "{typography.data}"
  snapshot-review-badge:
    backgroundColor: "{colors.gold-veil}"
    textColor: "{colors.gold-deep}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 10px
  order-table:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
  order-table-head:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-muted}"
    typography: "{typography.eyebrow}"
  standards-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: 24px
  blog-header:
    backgroundColor: "{colors.surface-scrim}"
    textColor: "{colors.text-primary}"
    height: 76px
  blog-page-hero:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.text-on-navy}"
  blog-article:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text-secondary}"
    width: 760px
  blog-quote-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: 32px
  blog-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: 24px
  blog-tag:
    backgroundColor: "{colors.gold-veil}"
    textColor: "{colors.gold-deep}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 6px
  blog-footer:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.text-on-navy-soft}"
---

## Overview

Xiangda Supply is a sourcing partner, not a marketplace, and the page should read that way: like the front page of a well-run American importer's catalog. Daylight first — paper, white objects, a single deep navy for arrival and departure, and one champagne thread. The buyer is a US or European importer or brand owner deciding, in seconds, whether a Chinese partner is serious. Light-dominant interfaces read as transparent and operable; dark ones read as theatrical. The previous edition was too theatrical.

Five colours are fixed: `{colors.bg}`, `{colors.surface}`, `{colors.navy}`, `{colors.gold}`, and `{colors.text-primary}`. Every other token is derived from them, and each derivation has a job: `{colors.text-secondary}` carries reading copy, `{colors.text-muted}` carries metadata, `{colors.border-hairline}` draws structure on paper, `{colors.gold-deep}` lets gold speak at small sizes without failing contrast. Pure black appears nowhere. Pure white appears only as an object — a card, a panel, a menu sheet — never as a full-bleed ground, so every white rectangle is something the eye can pick up.

Fourteen blocks now run beneath the header, arranged as a single argument: arrival (hero), proof (data strip, supplier snapshot), inventory (categories), geography (regions), method (advantages, comparison, process, first order), assurance (standards, trust, FAQ), and invitation (inquiry, footer). Each block re-establishes one primary element — a headline, a numeral, a navied column — and demotes everything else. Section grounds move between three paper tones rather than between two worlds.

Four principles govern every decision below. Light is the default; navy is punctuation, spent on exactly two full-bleed site blocks — the homepage hero and the footer. Gold has two registers — a fill register and an ink register — and never both at once in the same element. Depth comes from paper and slate, never from black. And nothing moves unless the movement confirms state, shows progress, or reorients the viewer in space; the motion system is unchanged from the dark edition.

The blog is part of the same document, not a second brand: `/blog` and the five articles share this token set through a self-contained `blog.css`, keep Inter and the two gold registers, and use navy only as an article header and footer ground. The editorial column is the one place where the page narrows to a 760px measure instead of the 1200px container.

## Colors

The palette is three paper tones and one white object tone, crossed with one navy and one accent in two registers. Neutrals occupy roughly 85% of any viewport, navy 10–15%, gold under 5%, and semantic colours appear only inside form feedback.

### Surface tiers

| Token | Value | Group | Role |
| --- | --- | --- | --- |
| `{colors.bg}` | #F6F5F0 | Light | Base paper; snapshot, regions, comparison, first order, trust, FAQ |
| `{colors.bg-alt}` | #FBFAF6 | Light | First light band; data strip, process, standards |
| `{colors.bg-raised}` | #ECEBE4 | Light | Second band; category bed, advantage grid, inquiry bed |
| `{colors.surface}` | #FFFFFF | Light | Cards, snapshot panel, tables, FAQ items, form panel, menu sheet, blog cards |
| `{colors.surface-hover}` | #F8F6F0 | Light | Hovered card body, table head and table row hover, snapshot verification column |
| `{colors.navy}` | #152A46 | Navy | Hero, footer, blog page hero; the "With Xiangda" column |
| `{colors.navy-lift}` | #1B3455 | Navy | Hover and lift inside navy only; blog page hero mesh |

Section tone alternates in this exact order so no two adjacent blocks share a ground: hero `{colors.navy}` → data strip `{colors.bg-alt}` → snapshot `{colors.bg}` → categories `{colors.bg-raised}` → regions `{colors.bg}` → advantages `{colors.bg-raised}` → comparison `{colors.bg}` → process `{colors.bg-alt}` → first order `{colors.bg}` → standards `{colors.bg-alt}` → trust `{colors.bg}` → FAQ `{colors.bg-alt}` → inquiry `{colors.bg-raised}` → footer `{colors.navy}`. The paper steps are two to four luminance points, so they register as a change of air. The two navy cuts on the homepage are deliberately large; they are the page's only strong tonal events, which is what keeps the light middle from feeling like a template. The blog's navy page hero is an article header, not a third full-bleed content block, and `/blog` uses the same alternation from that header into a `{colors.bg}` reading ground.

### Gold, and only gold

`{colors.gold}` remains the only accent, but it now works in two registers, and confusing them is the one colour error that will break this system.

| Register | Token | Permitted use |
| --- | --- | --- |
| Fill | `{colors.gold}` | Primary button and floating CTA fills, the H1 phrase on navy, the active process dot, gold hairlines and marks inside navy blocks, gold text on navy |
| Ink | `{colors.gold-deep}` | Any gold text or mark on a light ground: required asterisks, FAQ icons, region indexes, process "gives" lines, the 2px progress and process lines, the 64px trust mark |
| Interaction | `{colors.gold-hover}`, `{colors.gold-pressed}` | Primary button fill only, never at rest |

The rule behind the table is optical, not stylistic: `{colors.gold}` measures 2.0:1 on paper, so it may never carry text or a meaningful mark on a light ground; `{colors.gold-deep}` measures 2.4:1 on `{colors.navy}`, so it may never appear there. Gold in the fill register is limited to two notes per viewport. In the hero that budget is spent on the H1 phrase and the primary button — the eyebrow chip uses `{colors.gold-veil-navy}` with `{colors.text-on-navy-soft}` text, so the badge reads gold-adjacent without becoming a third note. Everywhere else gold appears once: a rail, a numeral, or a hover state.

The content batch keeps that budget. On the homepage, the snapshot's verification numerals and the first-order MOQ column are ink-register `{colors.gold-deep}`; the standards cards stay neutral and spend no gold at all, and only the pill CTAs remain fills. On the blog, `{colors.gold-deep}` carries inline links, list markers, tag text, and the "Supply" half of the wordmark once the header is white, while `{colors.gold}` is confined to the pill buttons in the header and the quote panel. No new colour was introduced for either addition.

There is no second highlight, no secondary brand hue, and no gradient built from gold. `{colors.gold-veil}` and `{colors.gold-veil-navy}` are the only tints, and they are backgrounds for chips, never for body copy.

### Text and contrast

| Pair | Ratio | Use |
| --- | --- | --- |
| `{colors.text-primary}` on `{colors.bg}` | 16.1:1 | Headlines, card titles, numerics |
| `{colors.text-primary}` on `{colors.surface}` | 17.5:1 | Card and form text |
| `{colors.text-secondary}` on `{colors.bg}` | 8.3:1 | Lead paragraphs, descriptions |
| `{colors.text-muted}` on `{colors.bg}` | 5.3:1 | Meta lines, captions, placeholders |
| `{colors.text-muted}` on `{colors.bg-raised}` | 4.8:1 | Meta inside the darkest paper band |
| `{colors.text-muted}` on `{colors.surface}` | 5.8:1 | Helper text inside white panels |
| `{colors.text-on-navy}` on `{colors.navy}` | 12.8:1 | Hero H1, footer headings |
| `{colors.text-on-navy-soft}` on `{colors.navy}` | 9.0:1 | Hero paragraph, comparison rows |
| `{colors.text-on-navy-muted}` on `{colors.navy}` | 5.6:1 | Footer legal, hero stat labels |
| `{colors.text-on-gold}` on `{colors.gold}` | 7.2:1 | Button label |
| `{colors.gold-deep}` on `{colors.bg}` | 5.5:1 | Gold small text on paper |
| `{colors.gold}` on `{colors.navy}` | 6.7:1 | Gold small text on navy |
| `{colors.border-input}` on `{colors.surface}` | 3.6:1 | Field boundary |

Normal text never falls below 4.5:1 and large text never below 3:1; this is a gate, not a target. `{colors.text-muted}` is the floor — nothing dimmer is used for text at any size. Body copy is never placed on a gold fill, and gold fills carry `{colors.text-on-gold}` only. In the comparison block, white-on-navy body rows use `{colors.text-on-navy-soft}` at 9.0:1, not pure white.

### Hairlines, veils, and feedback

On light grounds, structure is drawn with ink at low alpha so every rule shares the text's temperature: `{colors.border-hairline}` (navy 12%) is the default 1px edge for cards, panels, and section seams; `{colors.border-soft}` (7%) draws internal dividers between columns and rows; `{colors.border-strong}` (22%) marks hover and open states. Solid neutral-grey borders are never used; they read as dirt against warm paper. Form fields use `{colors.border-input}` (#7E8896) because an interactive boundary needs 3:1, which a decorative hairline cannot provide.

Inside navy blocks the logic inverts to gold: `{colors.border-navy-hairline}` (gold 22%) draws card edges, the footer seam, and the comparison column's ring; `{colors.border-navy-soft}` (ivory 10%) draws internal dividers; `{colors.border-navy-strong}` (gold 42%) marks emphasis and hover. Solid dark borders never appear on navy.

`{colors.success}`, `{colors.warn}`, and `{colors.danger}` appear only beneath form fields after validation, always paired with a text message and a 1.6px monoline icon so colour is never the only signal. Focus is drawn as a 2px outline at 2px offset — `{colors.focus-ring}` (#7C5E27) on light grounds, `{colors.focus-ring-navy}` (#E4CC96) inside navy blocks. Focus is never `{colors.gold}`: at 2.0:1 on paper it would be an invisible keyboard affordance.

## Typography

### One face, three weights

The display voice moves from Playfair Display to Inter, and Playfair is retired from every role — the H1, the section headlines, the card titles, the numerals, and the footer signature. A single serif line inside an otherwise all-sans page reads as a leftover from the dark edition rather than a signature, and US B2B convention is sans-led at every level. Inter carries display and headline at 600, titles and numerals at 600, reading copy at 400, and controls at 500. That is three weights total; there is no 700 and no fourth step. No italic is used anywhere: the loaded Inter set has no italic cut, synthetic obliques are forbidden, and the hero cadence and footer signature are therefore set upright.

The font link loads Inter 400/500/600. 600 is the heaviest available weight, so "heavy" in this system means 600 set large and tight, not 700; do not write a 700 weight into CSS that the browser would have to fake. The fallback chain stays `'Helvetica Neue', Arial, sans-serif`, so a blocked webfont still yields a coherent page rather than a system-ui heading.

### Scale and tracking

| Token | Size | Weight | Line height | Tracking | Role |
| --- | --- | --- | --- | --- | --- |
| `{typography.display}` | 76px | 600 | 1.04 | -0.03em | Hero H1 |
| `{typography.blog-title}` | 52px | 600 | 1.1 | -0.03em | Blog article H1 (fluid floor 30.4px) |
| `{typography.headline}` | 44px | 600 | 1.1 | -0.025em | Section H2 |
| `{typography.title}` | 24px | 600 | 1.3 | -0.015em | Card and region titles, data values |
| `{typography.numeral}` | 64px | 600 | 1.0 | -0.03em | Stats, 01–04, step numbers |
| `{typography.lead}` | 19px | 400 | 1.55 | 0 | Hero paragraph |
| `{typography.body}` | 16px | 400 | 1.65 | 0 | Descriptions, form values |
| `{typography.reading}` | 16px | 400 | 1.75 | 0 | Blog article paragraphs |
| `{typography.data}` | 15px | 400 | 1.5 | 0 | Snapshot archive values, first-order and blog table cells |
| `{typography.small}` | 14px | 400 | 1.5 | 0.005em | Helper text, legal |
| `{typography.label}` | 14px | 500 | 1.2 | 0.01em | Nav, buttons, field labels |
| `{typography.eyebrow}` | 11px | 600 | 1.4 | 0.10em | Caps badge, MOQ lines, stat labels |

Every string above 32px carries negative tracking; every all-caps string carries positive tracking at 0.10em, the upper bound where 11px Inter caps stay legible without scattering. The display ceiling drops from 84px to 76px, headline from 48px to 44px, and title from 26px to 24px, because Inter runs wider than Playfair at the same size: at the old values the H1's third line would wrap into a fourth and the three-column card title would break after two words. Numerals use tabular figures so the count-up animation never shifts column width.

The content batch adds two text steps and one editorial display size without adding a fourth weight: `{typography.data}` at 15px carries every archive value and table cell so the first-order table can hold three columns at 1920 and still scroll at 375; `{typography.reading}` at 16px/1.75 is the blog's long-form body — the one place leading exceeds the 1.65 body token, because a 760px measure of 16px copy needs the extra air. The standard cards set their names at 20px/600 and the hub cards their titles at 22px/600; both are local sizes between `{typography.title}` and `{typography.body}`, not new scale steps. Numeric strings in the snapshot steps and the MOQ column keep tabular figures, so the `01`–`04` counter and the MOQ values align down their column without a monospace face.

### Which face carries which string

| String | Face | Token |
| --- | --- | --- |
| "Your Jinhua Sourcing Partner for Premium B2B Supply" | Inter 600 | `{typography.display}` |
| Section H2s, including "Trusted by Buyers from 30+ Countries. Backed by Jinhua's Manufacturing Excellence." | Inter 600 | `{typography.headline}` |
| Category names, e.g. "Drinkware & Thermoses" | Inter 600 | `{typography.title}` |
| "1,000+", "7", "15+", "100%" | Inter 600 tabular | `{typography.numeral}` |
| "01"–"04" and process numerals | Inter 600 tabular | `{typography.numeral}` |
| "One Partner, Endless Possibilities" in the footer | Inter 600, upright, 20px | `{typography.title}` |
| Hero supporting paragraph | Inter 400 | `{typography.lead}` |
| Category descriptions, advantage body, region body | Inter 400 | `{typography.body}` |
| Nav links, buttons, field labels | Inter 500 | `{typography.label}` |
| "Jinhua, Zhejiang · 100% Free Sourcing Service", MOQ · cluster lines, stat labels, trust badges | Inter 600 | `{typography.eyebrow}` |
| Snapshot archive keys ("YEARS SOURCING"), "Category / Typical MOQ / Checks before it ships", blog eyebrows | Inter 600, caps | `{typography.eyebrow}` |
| Snapshot values, MOQ values, table cells | Inter 400, 15px; MOQ and steps at 600 | `{typography.data}` |
| Standard names ("Factory audit before deposit") | Inter 600, 20px | `{typography.title}` |
| Blog hub card titles | Inter 600, 22px | `{typography.title}` |
| Blog H1 | Inter 600, `clamp(1.9rem, 4.2vw, 3.25rem)`, -0.03em | `{typography.blog-title}` |

Inside the H1, "Premium B2B Supply" is set in `{colors.gold}` and the rest in `{colors.text-on-navy}`; both are solid fills, never gradient text. The closing sentence of the hero paragraph, "One partner, endless possibilities.", breaks to its own line in upright Inter 500 at the lead size in `{colors.gold}` (6.7:1 on navy) — a cadence break, not a new claim. The footer signature is upright Inter 600 at 20px in `{colors.gold}`, set with 0.01em tracking; it is the footer's only accent.

### Fluid display sizes

The display token is the desktop ceiling, not a fixed value. The hero H1 is rendered as a fluid expression that resolves to 76px at 1440px and above, ~54px at 1024px, and 40px at 375px, using a single `clamp(2.5rem, 5.3vw, 4.75rem)`. The headline token follows the same pattern: `clamp(1.75rem, 3.1vw, 2.75rem)`, ceiling 44px and floor 28px. The blog H1 is the third fluid expression, `clamp(1.9rem, 4.2vw, 3.25rem)` — a 52px ceiling and a 30.4px floor — so a long article title never needs a smaller hard-coded size at 375. Every smaller level is set at its token value and reflows by column width instead.

### Measure and rhythm

Lead paragraphs cap at 58 characters per line, body copy at 68, and no paragraph is ever justified. Headlines cap at 16–22 characters per line on desktop so they break into two or three deliberate lines rather than one long ribbon. Space above a heading is always at least twice the space below it, so headings bind to their own content.

The blog article is the deliberate exception to the container: it sets a 760px measure inside the same 1200px container, which holds `{typography.reading}` at roughly 68–72 characters per line. Article H2s run 44px above and 16px below at 24px/600 with -0.015em tracking, so section breaks bind downward; paragraphs carry 16px between them. That vertical rhythm is set once in `blog.css` and never overridden per article.

## Layout

### Container, grid, and rhythm

One container: 1200px maximum with `{spacing.gutter-desktop}` inline padding, `{spacing.gutter-tablet}` below 1024px, `{spacing.gutter-phone}` below 640px. The desktop grid is 12 columns with a 24px gutter, tablet is 8 columns, and mobile is a single column with 20px margins. Sections use `{spacing.section-desktop}` vertical padding, stepping to `{spacing.section-tablet}` and `{spacing.section-phone}`; the hero is the only block allowed to run taller than its padding. None of this changes in the re-skin.

The header is sticky at 76px and the hero is pulled up beneath it: `margin-top: -76px` with `min-height: 100vh`, so the opening screen still measures exactly one viewport while the transparent bar floats on the navy field instead of sitting above it as a light strip. The document carries `scroll-padding-top: 76px` (64px below 1024px), which is what keeps an in-page anchor such as `#first-order` or `#profile` clear of the bar. Only the hero takes the negative offset; every later block begins after the header's flow position, so no other section needs a compensating margin.

Vertical rhythm is deliberately uneven. The data strip is a compressed 88px band directly under the hero, the snapshot panel is a tall two-column object, the category bed is slow and tall, the advantage grid breathes at 128px, the first-order table is the densest band on the page, standards is a low even row that acts as a breather before trust, and the trust band is tight and centred. Uniform section gaps would flatten the page into a template; varying them is how the document acquires chapters.

### Block map

| Block | Desktop composition | Surface |
| --- | --- | --- |
| Header | 12 columns: wordmark, nav centred, CTA right; sticky over the hero | Transparent over the hero; `{colors.surface-scrim}` once scrolled |
| Hero | H1 spans columns 1–10; paragraph offset to 7–12; stats pinned to the base; pulled up under the bar | `{colors.navy}` |
| Data strip | Four equal cells, hairline top and bottom | `{colors.bg-alt}` |
| Supplier Snapshot | One white panel: seven-row archive left, verification column right | `{colors.bg}` |
| Categories | Three asymmetric bands, 7/5, 5/4/3, 7/5 | `{colors.bg-raised}` |
| Regions | Full-bleed horizontal rail with a timeline spine | `{colors.bg}` |
| Advantages | 2 × 2 grid, hairline top on each cell | `{colors.bg-raised}` |
| Comparison | Two equal columns, 32px gap, "With Xiangda" navied | `{colors.bg}` |
| Process | Five steps on a horizontal rail, alternating above and below | `{colors.bg-alt}` |
| First order | White table card, three columns, container width, horizontal scroll on mobile | `{colors.bg}` |
| Standards | Four white, hairline-bordered cards across the container | `{colors.bg-alt}` |
| Trust band | Centred headline, five badges wrapping beneath | `{colors.bg}` |
| FAQ | Two columns of four disclosure cards | `{colors.bg-alt}` |
| Inquiry | Single 960px panel, two-column field grid | `{colors.bg-raised}` |
| Footer | Four columns at 4/2/3/3, hairline top, legal row | `{colors.navy}` |

No two adjacent blocks share a ground, and the sequence listed here is the only permitted order: a new block is inserted by choosing the paper tone its neighbours are not using, never by repeating one. The header row is chrome, not one of the fourteen body blocks.

### Blog layout

`/blog` and the five article pages load a self-contained `blog.css` that re-declares this exact token set, so the pages read as the same document rather than a themed add-on. The hub opens with `.b-page-hero` on `{colors.navy}`, then a two-column `.hub-grid` of white cards at `{rounded.sm}` and `--elev-1`; each card lifts 3px, moves its edge to `{colors.border-strong}`, and takes `--elev-2` on hover. Articles open with the same navy page hero, then a single `{components.blog-article}` column at 760px — H2 sections, prose, an order table where the piece needs one, and a white quote panel that closes the read with the gold CTA. Both page types end on a single-row navy footer.

The hub grid is two columns above 768px and one below; the article measure is 760px on desktop and the full width minus 20px gutters at 375, with the table inside it scrolling horizontally rather than squeezing its columns. The blog brings the sitemap to nine URLs — `/`, `/products`, `/about`, `/blog`, and five articles — without adding a template, font, or colour.

### Adjacent pages

`/about` no longer carries a map placeholder. That block is now a 2 × 2 grid of data cards: 1.26M registered entities, 230+ countries, 2h to Ningbo-Zhoushan, and 5 clusters. The cards keep the page's existing inline styles rather than entering the component set, so they inherit that page's surface and depth treatment; only the 2 × 2 arrangement and the four figures are new. They are documentation for the homepage's claims, not a new visual language.

`/products` adds one freshness line above its hero content: "CATALOG UPDATED OCTOBER 18, 2026" at 0.78rem, white at 72%, 0.05em tracking, uppercase. It is set as a meta line, not a headline, so the hero H1 stays the only display object on that page.

### The category composition

A uniform 3 × 3 grid would make seven very different products look interchangeable. Instead the section is a bed of three horizontal bands on the same 12-column lattice, each band with its own internal ratio, so the eye moves left-to-right but never lands on a repeated rhythm.

Band one pairs a featured card with a counterweight. **Drinkware & Thermoses** takes 7 columns and the section's largest image at a 4:3 crop, set left at full bleed inside the card, text column right at 40% width, 40px padding; it is the largest object on the page after the H1 and it carries the full description without truncation. **Off-Road Motorcycles** takes the remaining 5 columns as a vertical card — image above, text below — sized to its shorter copy and its distinctive MOQ 1+, which reads as a deliberate outlier rather than a gap.

Band two is the varied row: **Jewelry & Accessories** at 5 columns, **Apparel & Socks** at 4, **Toys & Stationery** at 3. Descending widths create the bento tension the brief asks for while all three stay square-imaged and equally scannable. Band three resolves the rhythm by inverting it: **Home & Hardware** at 7 columns with the image on the right, **Bags & Luggage** at 5 with the image on the left, so the section closes on a mirror rather than a repeat.

The stacked cards are flex columns: image wrapper grows, text block holds its natural height, `object-fit: cover` absorbs the difference. The three horizontal cards (Drinkware, Home & Hardware, Bags & Luggage) use a two-track row instead, with the image track growing and the text track at 40%. Descriptions are never clamped — the copy is final and must remain legible at every width.

### Responsive behaviour

| Tier | Grid | Key changes |
| --- | --- | --- |
| ≥1440px | 12 columns, 1200px container | Design reference width; all asymmetric ratios as specified |
| 1200–1439px | 12 columns | Same ratios, gutters compress to 32px, display type clamps down |
| 768–1199px | 8 columns | Category bands become: featured full width, then two-up pairs; snapshot panel stacks to one column; standards wrap to two per row; process rail turns vertical at 1023px; marquee becomes a slow scroll rail |
| <768px | 1 column, 20px margins | Everything stacks; header collapses to hamburger; stat row becomes a 2 × 2 block; first-order table scrolls inside its card; blog hub becomes one column; footer to two columns |
| ≤375px | 1 column | Single column throughout, hero type at its 40px floor, 44px minimum targets, no horizontal scroll outside the table scroller |

Specific rules: the header keeps `{components.header-bar}` height on desktop and steps to 64px below 1024px with a 48 × 48 menu control, which now opens a white sheet instead of a black one. The hero's negative pull-up follows that height, and `scroll-padding-top` drops from 76px to 64px with it. The hero drops its offset paragraph to full width below 1024px and its two CTAs become full-width stacked buttons below 640px. The data strip goes 4 → 2 × 2 → 1 with the vertical dividers turning horizontal. The category bed becomes featured-full, then two-up, then one-up, preserving DOM order and image aspect ratios so nothing shifts on load. The region rail becomes a native scroll-snap strip below 1024px and a vertical timeline below 768px. The process rail rotates to a left-edge spine with all five steps to the right. The inquiry panel loses its two-column field grid below 768px and its 40px padding below 640px.

The content batch adds three responsive rules of its own. The snapshot panel keeps its two columns on desktop and stacks archive above verification below 1024px, with the verification column losing its left border and gaining a top one. The standards grid goes four → two → one without changing card padding. The first-order table keeps three columns at every width and lets `.order-table-wrap` scroll horizontally at 375, with the MOQ column set `nowrap` so a value never breaks mid-string. `.order-table-wrap` is the one element allowed to scroll sideways; the document-level `clip` is not applied to it.

Every interactive element is at least 44 × 44 CSS pixels: nav links sit in `{components.nav-link}` at 44px height, buttons are 52px, fields are 52px tall, the hamburger and marquee pause control are 48 × 48, and footer links occupy a 44px row. `overflow-x: clip` on the document prevents any rail or oversized numeral from creating a horizontal scrollbar at 375px.

## Elevation & Depth

### Layered surfaces

On paper, depth is tonal and almost silent. Each light block is composed of four layers: the base tone token, one very low-contrast navy radial mesh at no more than 6% opacity, a 1px `{colors.border-hairline}` where a seam is needed, and the content. The mesh uses one large radial at 85% 0% and a second at 8% 100%, so the page feels lit from the upper right rather than tinted. It is fixed per section, never animated on light blocks.

The 4% film grain is removed site-wide. It was a dark-ground device that gave the ink surfaces paper tooth; on warm off-white the identical tile reads as dirty screen and fights the crispness the palette is built on. Navy blocks get their texture from the photograph, a `{colors.navy-lift}` mesh at up to 26%, and one `{colors.gold}` glow at no more than 10% placed on the text-free side — hero upper right, footer lower left. Where there is no photograph, as in the blog page hero, the mesh alone carries the surface at its full 26%; no glow is added there, because the article header should stay quieter than the homepage hero.

The hero photo is retained as a depth layer, not a subject: `brightness(.62) saturate(.85)` at 45% opacity, under a curtain that now runs from `{colors.navy}` at 32% to transparent at 100% along 110°. The curtain is the same device as before, recoloured; it is what keeps the H1 legible without a plate behind the type.

### Shadows and lift

Depth comes from tone first and shadow second, and the shadows are navy, never black:

- `--elev-1`: 0 1px 2px rgba(21, 42, 70, 0.06), 0 10px 24px -18px rgba(21, 42, 70, 0.18) — resting white objects
- `--elev-2`: 0 18px 36px -22px rgba(21, 42, 70, 0.24), 0 2px 6px -2px rgba(21, 42, 70, 0.06) — hovered cards and the navied comparison column
- `--elev-3`: 0 32px 64px -32px rgba(21, 42, 70, 0.30) — the inquiry panel and the open mobile menu
- `--elev-inset`: inset 0 1px 0 rgba(255, 255, 255, 0.90) — top highlight on white panels
- `--glow-gold`: 0 0 140px rgba(201, 169, 106, 0.14) — navy anchors only

A resting white card now carries `--elev-1` in addition to its hairline. On a dark ground, tone alone separated a card; on paper, a white card on an off-white band needs the faintest shadow to sit on the page, and 6% navy does that without the grey halo a black-alpha shadow leaves. Nothing on a navy ground casts a shadow.

The batch extends the same rule to every new object. The first-order table card, the four standards cards, the quote panel, and the hub cards all rest at `--elev-1`; only the hub cards rise to `--elev-2` with a 3px lift on hover. The table and the standards deliberately do not move — a data table that floats under the pointer reads as clickable, and a standards row that lifts reads as four products. The snapshot panel is flatter still: a tone step from `{colors.bg}` to white and its internal rules carry the separation.

### Motion tokens

| Token | Value | Use |
| --- | --- | --- |
| `--motion-instant` | 90ms | Press feedback, image zoom start |
| `--motion-quick` | 150ms | Hover, focus, state confirmation |
| `--motion-lift` | 280ms | Card lift and tilt return |
| `--motion-reveal` | 780ms | Section reveals |
| `--motion-ambient` | 52s | Region marquee cycle |
| `--stagger` | 70ms | Per-item reveal offset (60–90ms band) |
| `--ease-standard` | cubic-bezier(0.2, 0, 0, 1) | Colour, opacity, small transforms |
| `--ease-reveal` | cubic-bezier(0.16, 0.84, 0.28, 1) | Rise-and-fade reveals |
| `--parallax-max` | 12px | Foreground pointer parallax ceiling |
| `--tilt-max` | 4deg | Card tilt ceiling |

Every duration and curve is unchanged from the dark edition. Curves handle opacity and colour; position and scale use the same standard curve but longer durations, so nothing feels springy or bouncy on a page selling reliability. No animation exceeds 500ms except the reveals, the marquee, and the count-up, all of which are staged or ambient.

### Scroll choreography

Reveals run once per element through an IntersectionObserver at 0.18 threshold with a -8% bottom margin. The pattern is opacity 0 → 1 with translateY 28px → 0 at `--motion-reveal`, staggered 70ms per sibling and never restarted on re-entry. Reveal groups are: hero children (staged on load rather than scroll), the four stats, each category band, the five regions, the four advantage items, the five process steps, the five trust badges, and the form rows.

The count-up animates any numeric stat on first entry: values interpolate from zero over 1.4s with an ease-out quartic curve, formatted through `Intl.NumberFormat` so "1,000+" keeps its comma, while suffixes and units (+, %, "Days") render immediately so the number never shifts layout. The scroll-progress hairline is a 2px `{colors.gold-deep}` bar fixed to the top edge, scaled on the X axis from document scroll progress inside a rAF-throttled handler with `will-change: transform`. The process rail uses the same technique on the section itself: the `{colors.gold-deep}` fill's scale grows from 0 to 1 as the section crosses from 80% to 40% of the viewport, and each step's dot and numeral activate as the fill passes them.

### Pointer choreography

Cards lift 6px and tilt up to `--tilt-max` on both axes, driven by pointer position written into two custom properties and applied as a single 3D transform with `transform-style: preserve-3d`; the return to rest eases over `--motion-lift`. The entry shine sweep is now a 4.5% navy wash rather than the old 9% ivory one — a white sheen is invisible on a white card, and a gold sheen would spend accent budget on an effect. Category images scale to 1.05 over 600ms with `object-fit: cover` and a fixed aspect ratio, so the crop never jumps. The blog hub cards are the one exception to the 6px lift: they rise 3px with no tilt, because a list of five articles is navigation rather than merchandise.

The hero carries two parallax layers. The background mesh translates up to 40px across the hero's scroll range; the foreground type block translates up to `--parallax-max` with pointer movement, damped and clamped, only on devices matching `(hover: hover) and (pointer: fine)` and only at 1024px and above. Neither layer moves on touch, and neither is required to read the content.

The region marquee duplicates its track and translates by -50% at `--motion-ambient` on a linear loop. It pauses on hover, on focus within, when scrolled out of view, and via a 48 × 48 pause control pinned to the rail's trailing edge with `aria-pressed` state — looping content needs an explicit stop, not just a hover hint.

### Reduced motion

Under `prefers-reduced-motion: reduce`, every translate, scale, rotate, tilt, parallax, and marquee transform is removed at the source: reveals resolve immediately to their final state, the count-up prints its final value, the process rail renders fully filled with all steps active, the marquee becomes a static scroll-snap rail, and the progress hairline remains as a scroll indicator without animation. Opacity crossfades at 150ms are retained because they carry state without moving anything. Motion is never the only signal: hover also changes surface tone and border, and the active process step also changes numeral colour and text weight.

## Shapes

### Radii

Four radii, each with one job: `{rounded.xs}` on form fields and select controls, `{rounded.sm}` on cards, region panels, comparison columns, FAQ items, standards cards, and hub cards, `{rounded.md}` on the inquiry panel, mobile menu, snapshot panel, table cards, and quote panel, and `{rounded.pill}` on the primary button, ghost button, eyebrow chip, chip pills, trust badges, and the `{components.snapshot-review-badge}` capsule. Everything else is square. The near-square architecture with a single soft, pill-shaped gesture is unchanged; it now reads as American corporate rather than European editorial, which is the point.

The blog uses the same four values with no additions: 760px columns and full-width rules stay square, content cards take `{rounded.sm}`, the article table and quote panel take `{rounded.md}`, and only tags and buttons are pills. A new object inherits a radius by its role — container, content card, or control — never by its size.

### Image geometry

Product photography arrives at 640 × 640 and is never stretched. The featured card uses a 4:3 crop, standard cards a 1:1 crop, the motorcycles card a 4:3 crop, all via `aspect-ratio` plus `object-fit: cover` so space is reserved before load and nothing shifts. Every image sits under a 1px `{colors.border-soft}` inner edge. The featured card carries a bottom scrim from transparent to `{colors.navy}` at 40% for tonal weight only; no text overlays the photograph in this edition, so the scrim never has to carry legibility.

### Lines, dots, and icons

Lines are always 1px except the 2px progress fill, the 2px process fill, and the 2px focus outline. Dots are 10px on the process rail, 6px in the region spine, and 6px before the eyebrow badge text. Icons are monoline SVG at 1.6px stroke in a 24px box, drawn with `currentColor`, with round caps and no filled shapes — used for the hamburger, the select chevron, the pause control, the comparison marks, and validation marks. No emoji, no icon font, and no illustration.

## Components

### Header

The header has two colour states tied to the existing `.scrolled` hook. At the top of the page it is `{components.header-bar}`: fully transparent over the navy hero, no fill and no blur, wordmark in `{colors.text-on-navy}` with "Supply" in `{colors.gold}`, nav links in `{colors.text-on-navy-soft}` and the CTA in the gold pill. This keeps the hero one uninterrupted navy field and avoids a third dark bar across the light page. While transparent, the bar relies on a 120px `linear-gradient(to bottom, rgba(21, 42, 70, 0.72), transparent)` veil painted by the hero beneath it, so a highlight in the photograph can never lift the nav's ground out of AA.

After 24px of scroll it becomes `{components.header-bar-scrolled}`: `{colors.surface-scrim}` with `backdrop-filter: blur(18px) saturate(120%)`, a `{colors.border-hairline}` bottom edge that fades from zero alpha, wordmark in `{colors.text-primary}` with "Supply" in `{colors.gold-deep}`, and nav links in `{colors.text-secondary}`. "Supply" must darken in this state — `{colors.gold}` on white is 2.0:1 and would fail as large text. Nav hover moves to `{colors.text-primary}` with a 1px `{colors.gold-deep}` underline at 6px offset. Focus-visible uses `{colors.focus-ring-navy}` while the bar is transparent over the hero and `{colors.focus-ring}` once it is white, so the ring always sits on a ground it can be seen against.

Below 1024px the bar drops to 64px, navigation collapses into a 48 × 48 hamburger, and the menu opens as a `{colors.surface}` sheet at `{rounded.md}` top corners with `--elev-3`, a `{colors.border-hairline}` ring, ink links at 44px row height, and a matching close control. The backdrop behind the sheet is a `{colors.navy}` wash at 55%, not black.

The backdrop element (`.nav-backdrop`) is a sibling of the header, never a child of it. A `backdrop-filter` on the frosted header establishes a containing block for fixed-position descendants, so a backdrop nested inside the bar is sized to the bar rather than to the viewport — the scrim then covers 76px instead of the screen, and no z-index can correct it. Keeping the backdrop outside the header, immediately before it in the DOM, is the fix; no z-index adjustment is required once the scrim is no longer a descendant of a filtered element.

### Hero

The hero's ground is `{colors.navy}` with the `{colors.navy-lift}` mesh and one 10% gold glow bleeding in from the right edge. It is pulled up under the sticky bar with `margin-top: -76px` and set to `min-height: 100vh`, so the transparent header floats inside the navy field and the opening screen still measures exactly one viewport. The bar's 120px gradient veil is painted by the hero beneath it, which keeps the nav legible without turning the top of the page into a separate scrim band. On load the content stages in three beats 120ms apart: eyebrow chip, then headline, then paragraph, buttons, and stats.

The eyebrow chip is `{components.eyebrow-chip}` with a 6px `{colors.gold}` dot before the text. The H1 spans columns 1–10 at `{typography.display}`, breaks to three lines, and holds "Premium B2B Supply" in `{colors.gold}`. The supporting paragraph is deliberately offset to columns 7–12 at `{typography.lead}` in `{colors.text-on-navy-soft}`, maximum 58 characters per line; its `<strong>` uses `{colors.text-on-navy}` at 500. Below it sit the primary button "Start Your Sourcing Request" and the ghost button "Explore Categories" — transparent fill, 1px `{colors.border-navy-hairline}` ring that turns `{colors.border-navy-strong}` with a 6% ivory wash on hover — both 52px tall with a 24px gap. Ghost focus uses `{colors.focus-ring-navy}`.

### Stat row

Four stats sit on the hero's baseline behind a `{colors.border-navy-soft}` top rule, divided by 1px vertical rules of the same token. Values use `{typography.numeral}` in `{colors.text-on-navy}` with the suffix ("+", "%") in `{colors.gold}`; labels use `{typography.eyebrow}` in `{colors.text-on-navy-muted}`. On mobile the row becomes 2 × 2 with horizontal dividers, and the numerals clamp to 48px. Count-up runs on first view; the reduced-motion path prints final values.

### Data strip

A compressed band on `{colors.bg-alt}` with `{colors.border-hairline}` top and bottom and four cells divided by `{colors.border-soft}`. Each cell is two lines: the figure or place ("40,000+", "Jinhua", "7 Days", "Ningbo") in `{typography.title}` at `{colors.text-primary}`, and the qualifier ("Products Accessible", "Strategic Location", "Average Sourcing Cycle", "Primary Export Port") in `{typography.eyebrow}` at `{colors.text-muted}`. The "+" after 40,000 is `{colors.gold-deep}`, not `{colors.gold}`. The strip never becomes four cards — it stays a single horizontal rule of information, and it has no hover or focus states.

### Supplier Snapshot

`.section-snapshot` (`id="profile"`) is the first white object on paper and the block that answers "who is this supplier" before the catalogue. It holds a single `{components.snapshot-panel}` with the archive on the left and the verification column on the right.

Left, `.snapshot-dl` is seven archive rows in dt/dd form — `.sn-row` wrapping `.sn-key` and `.sn-val` — not a bulleted list. Keys are 11px/600 at 0.10em tracking, uppercase, in `{colors.text-muted}`; values are 15px in `{colors.text-secondary}`. Each row is divided by a 1px `{colors.border-soft}` rule that stops inside the panel padding. The keys are labels rather than headings, which is why they never take `{colors.text-primary}`.

Right, `.snapshot-dd` sits on `{colors.surface-hover}` behind a 1px `{colors.border-soft}` left border and carries "How to verify us" as a four-step ordered list, `.sn-steps`. Its numbers are generated by a CSS counter as `01`–`04` and set 13px/600 in `{colors.gold-deep}` with tabular figures, so the sequence aligns even though there is no monospace face. The column closes with `.sn-reviewed`, a capsule at `{components.snapshot-review-badge}`: `{colors.gold-veil}` fill, a `{colors.border-hairline}` ring, and `{colors.gold-deep}` text at 11px/600/0.10em uppercase. It is a badge, not a link, and has no hover state.

The panel is a document surface, not a selectable card: no hover, no lift, no tilt. Its depth is the tone step from `{colors.bg}` to `{colors.surface}`, which is also why it can hold a seven-row archive without competing with the category cards below it.

### Category cards

`{components.card-category}` is a flex column on `{colors.surface}` with a 1px `{colors.border-hairline}` edge, `{rounded.sm}`, `--elev-1`, and 24px padding. Anatomy, in order: image, title at `{typography.title}` in `{colors.text-primary}`, chip row at `{components.chip-pill}`, description at `{typography.body}` in `{colors.text-secondary}`. The featured card uses the same fill with 40px padding and its text column at 40% of the card width.

Hover is a compound state: surface moves to `{colors.surface-hover}`, border to `{colors.border-strong}`, shadow to `--elev-2`, the card lifts 6px and tilts up to 4°, the navy shine sweep crosses once, and the image scales to 1.05. On press the tilt flattens and the lift reduces to 2px. Focus-visible mirrors hover with the 2px `{colors.focus-ring}` outline instead of the tilt, so keyboard users get the same affordance without motion.

Chips carry `{colors.gold-veil}` fill, a `{colors.border-hairline}` ring, and `{typography.eyebrow}` text in `{colors.text-secondary}`. On card hover the chip ring moves to `{colors.border-strong}`; the chip never changes its own fill and never takes gold text.

### Region rail

Five panels on `{colors.bg}` with `{colors.surface}` fills, `{colors.border-hairline}` edges, `{rounded.sm}`, `--elev-1`, 32px padding, and a fixed 520 × 300 card size inside a full-bleed rail. A 1px `{colors.border-hairline}` spine runs behind the rail at the vertical centre with a 6px `{colors.gold}` node at each panel's leading edge, ringed in 4px `{colors.bg}` so it punches through the panel border. Each panel carries a two-digit index in `{typography.eyebrow}` at `{colors.gold-deep}`, the region name in `{typography.title}` at `{colors.text-primary}`, and its description in `{typography.body}` at `{colors.text-secondary}`, capped at 34 characters per line.

Panels are not links, so they have no hover fill. The rail pauses on hover and focus-within, which is the only interactive feedback in the block. The 48 × 48 pause control rests on a `{colors.border-hairline}` ring with `{colors.text-muted}` glyph, hovers to `{colors.border-strong}` and `{colors.text-primary}`, and focuses with `{colors.focus-ring}`.

The rail scrolls as a marquee on desktop (pause on hover, focus, off-screen, or via the control) and becomes a native scroll-snap strip on tablet. Below 768px it rotates to a vertical timeline: spine on the left at 1px, nodes at 6px, panels stacked full width.

### Advantage list

A 2 × 2 grid of cells with `{colors.border-hairline}` top rules and no card fills, so the paper tone shows through and the four items feel like entries in a ledger. Each cell opens with its numeral — "01" through "04" — at `{typography.numeral}` in `{colors.gold-deep}` at 58% opacity, set above the title with 16px of air. The title uses `{typography.title}` in `{colors.text-primary}`, the body `{typography.body}` at `{colors.text-secondary}` capped at 46 characters per line.

Hovering a cell raises the numeral to full opacity and darkens its top rule from `{colors.border-hairline}` to `{colors.border-strong}`; nothing moves. The numeral is decorative — the order is also carried by DOM order — so the resting 58% is a watermark, not unreadable text, and it resolves to a 5.5:1 bronze on hover.

### Comparison

The block sits on `{colors.bg}` and sets two equal columns 32px apart. "Sourcing on your own" is the quiet column: transparent fill, 1px `{colors.border-hairline}` ring, `{colors.text-muted}` heading and rows, and `{colors.danger}` monoline crosses at 16px. "With Xiangda" is the homepage's single premium object and its only navy surface outside the header and footer: `{components.compare-column}` — solid `{colors.navy}`, 1px `{colors.border-navy-strong}` ring, `{rounded.sm}`, `--elev-2`, heading in `{colors.text-on-navy}`, rows in `{colors.text-on-navy-soft}` at 9.0:1, and `{colors.gold}` check marks at 6.7:1.

The navy column has no hover state; its emphasis is static and should not animate when the pointer crosses it. If it ever gains a link, the link uses `{colors.gold}` with a 1px gold underline and the column lifts to `{colors.navy-lift}`. Neither column is focusable today; if a control is added, focus uses `{colors.focus-ring-navy}` inside the navy column and `{colors.focus-ring}` in the quiet one. Restraint is the point: one navied object on the homepage outside the header and footer, never two.

### Process rail

Five steps share one horizontal rail: a 1px `{colors.border-hairline}` line at the vertical centre with a 2px `{colors.gold-deep}` fill growing left to right, and 10px step dots at each station. The fill is `{colors.gold-deep}`, not `{colors.gold}`: a 2px champagne line on paper measures 2.0:1 and disappears; bronze measures 5.5:1 and reads as a drawn line. Steps alternate above and below the line to break the row rhythm. Each step carries its number at `{typography.numeral}` as a watermark at 22% opacity in `{colors.gold-deep}`, the step title at `{typography.title}`, the support line at `{typography.small}` in `{colors.text-muted}` capped at 30 characters, and the "gives" line at 12px in `{colors.gold-deep}` with a matching check icon.

Dots rest as `{colors.bg}` fill with a 1px `{colors.gold-deep}` ring, so they punch a hole in the rail. As the fill passes a dot, the dot fills `{colors.gold}` and keeps its bronze ring, gains a 4px `rgba(201, 169, 106, 0.16)` halo, the numeral rises to full opacity, and the title shifts to `{colors.text-primary}` — four signals, so reduced-motion users lose nothing.

Below 1024px the rail rotates to a vertical spine on the left with all five steps stacked to the right; the fill becomes vertical and drives the same activation states, and the dot ring must remain `{colors.gold-deep}` so the inactive rail still reads on paper.

### First order table

`.section-firstorder` (`id="first-order"`) answers the MOQ question with a table rather than another card grid. The card `.order-table-wrap` is `{colors.surface}` with a 1px `{colors.border-hairline}` edge, `{rounded.md}`, `--elev-1`, and `overflow-x: auto`; that scroll belongs to the card, so the page itself never moves sideways at 375.

`{components.order-table}` runs three columns — Category, Typical MOQ, Checks before it ships. The header row is `{components.order-table-head}`: `{colors.surface-hover}` fill, 11px/600/0.10em uppercase in `{colors.text-muted}`. Body cells are 15px in `{colors.text-secondary}`; the first column alone shifts to `{colors.text-primary}` at 500, because it names the row. `.ot-moq` is `{colors.gold-deep}` at 600 with tabular figures and `white-space: nowrap`, and its selector is written `.order-table td.ot-moq` so it outranks the base cell colour instead of silently losing specificity. Rows hover to `{colors.surface-hover}` with no lift, separated by 1px `{colors.border-soft}` rules. Beneath the card, `.order-note` sets the caveat at 14px in `{colors.text-muted}` — one note, never a second table.

The table never becomes cards. A fourth column would make the wrapper scroll, not restructure the data into definition lists at mobile; the MOQ column keeps its nowrap at every width so a value never breaks mid-string.

### Standards

`.section-standards` is four white cards in `.std-grid`, each at `{components.standards-card}`: `{rounded.sm}`, 1px `{colors.border-hairline}`, `--elev-1`. `.std-name` is 20px/600 in `{colors.text-primary}` and the description 14px in `{colors.text-secondary}`. Hover moves the edge to `{colors.border-strong}` and the shadow to `--elev-2`, but the card does not lift — the row must stay level and read as a checklist rather than four clickable products.

There is no numeral, no icon, and no CTA in this block. Its job is to state the standard plainly, so the only marks are the four hairline edges and the one-line names; anything more would compete with the trust band immediately below.

### Trust band

A centred headline at `{typography.headline}` capped at 20 characters per line, split tonally: "Trusted by Buyers from 30+ Countries." in `{colors.text-primary}`, "Backed by Jinhua's Manufacturing Excellence." in `{colors.text-muted}`. A 64px × 1px `{colors.gold-deep}` hairline sits above it as a section mark. The five badges below use `{components.trust-badge}` — `{colors.surface}` fills with `{colors.border-hairline}` rings and `{typography.eyebrow}` text in `{colors.text-secondary}` — wrapping to a 3 + 2 arrangement on tablet and 2 + 2 + 1 on mobile, with a 12px gap and 16px row gap. Badges are static labels: no hover, no focus, no cursor change.

### FAQ

Four disclosure cards in two columns on `{colors.bg-alt}`, each `{components.faq-item}`: `{colors.surface}` fill, 1px `{colors.border-hairline}` ring, `{rounded.sm}`, `--elev-1`. The summary title is `{colors.text-primary}` at 18px/600, the body `{colors.text-secondary}` at 15px, and the plus icon `{colors.gold-deep}` at 16px. Hover darkens the ring to `{colors.border-strong}` and lifts the shadow to `--elev-2`; the open state uses `{colors.border-strong}` and rotates the icon 45° into a minus, keeping it `{colors.gold-deep}` — an open state must not turn the icon `{colors.gold}`, which would drop it to 2.0:1 on white.

The summary is focusable: 2px `{colors.focus-ring}` outline at 2px offset, with no background change, so the ring is the only new mark. Card padding stays 20px/24px; the icon never animates its colour, only its rotation.

### Inquiry form

The invitation sits on a `{colors.bg-raised}` bed in a single 960px `{components.form-panel}`: `{colors.surface}`, `{rounded.md}`, 1px `{colors.border-hairline}`, `--elev-3`, `--elev-inset` on the top edge, 48px padding, and a 7% gold glow behind the upper-left corner. Fields sit on a two-column grid with a 24px gap, collapsing to one column below 768px, and the textarea spans both columns at `{components.textarea-field}` height.

Labels are `{typography.label}` in `{colors.text-secondary}` above each field, with required asterisks in `{colors.gold-deep}`. Controls use `{components.input-field}` as paper wells on `{colors.bg}` set into the white panel, with `{colors.border-input}` boundaries (3.3:1 against the well, 3.6:1 against the panel) and 16px inline padding; the select keeps a custom 1.6px chevron stroked in `#5B6775` with `appearance: none`. Placeholders use `{colors.text-muted}` at 5.3:1, not a lighter grey.

Field states: hover moves the boundary to `{colors.text-muted}` (#5B6775); focus draws a 2px `{colors.focus-ring}` outline at 2px offset and sets the boundary to `{colors.gold-deep}`; invalid fields shift the boundary to `{colors.danger}` and print a `{typography.small}` message with an icon; valid fields show a `{colors.success}` mark. A field is never styled with `{colors.gold}` borders — 2.0:1 on white would make the focused field the least visible one on the panel.

The "Submit Sourcing Request" button uses `{components.button-primary}`, right-aligned, 240px minimum width, and steps to full width below 640px. It rests at `{colors.gold}` with a `{colors.text-on-gold}` label, hovers to `{colors.gold-hover}`, presses to `{colors.gold-pressed}` with a 1px translate, focuses with a 2px `{colors.focus-ring}` ring on the white gap outside the fill, and disables to a `{colors.bg-raised}` fill with `{colors.text-muted}` label and no shadow. It never animates its width.

### Footer

Four columns on `{colors.navy}` behind a `{colors.border-navy-hairline}` top rule and a 7% gold glow at the lower left. Column one carries the wordmark in `{colors.text-on-navy}` with "Supply" in `{colors.gold}`, the brand blurb at `{typography.small}` in `{colors.text-on-navy-muted}` (5.6:1), and the signature "One Partner, Endless Possibilities" at 20px/600 upright in `{colors.gold}` — the footer's only accent. Columns two and three carry category and company links at `{typography.label}` in `{colors.text-on-navy-soft}`, 44px row height, hovering to `{colors.text-on-navy}` with a `{colors.gold}` underline. Column four carries "Jinhua, Zhejiang, China · Export Port: Ningbo" at `{typography.small}` in `{colors.text-on-navy-muted}`.

The legal row sits below a `{colors.border-navy-soft}` divider at `{typography.small}` in `{colors.text-on-navy-muted}`: "© 2026 Jinhua Xiangda Supply Chain Management Co., Ltd. · Serving 30+ Countries". Links focus with `{colors.focus-ring-navy}` at 2px offset; body text and links in the footer never use `{colors.text-on-navy}` for long copy, only for headings and hover. On mobile the columns go 2 × 2, then single, with the signature moving above the links.

### Blog subsystem

`/blog` and the five article pages are a sub-system of this document, not a second theme. Their stylesheet re-declares the same tokens, and the only structural difference is the 760px reading measure.

**Blog header.** `.b-header` is permanently in the frosted state — `{components.blog-header}` with `{colors.surface-scrim}`, `backdrop-filter: blur(18px) saturate(120%)`, and a `{colors.border-hairline}` bottom edge — because these pages have no navy hero directly behind the bar and therefore no transparent state to fall out of. Height is 76px, 64px below 1024px. The wordmark sets ink with "Supply" in `{colors.gold-deep}`; nav links use `{colors.text-secondary}`, hover to `{colors.text-primary}` with a 1px `{colors.gold-deep}` underline at 6px offset; the CTA is the gold pill at `{components.button-primary}`. Focus is `{colors.focus-ring}` everywhere in this bar, since the ground is never navy.

**Page hero.** `.b-page-hero` is a navy article header, not a third full-bleed content block: `{components.blog-page-hero}` on `{colors.navy}` with the `{colors.navy-lift}` mesh at 26%. Its eyebrow is 11px/600 at 0.10em in `{colors.text-on-navy-muted}`, preceded by a short `{colors.border-navy-hairline}` rule, so the label reads as a filed category rather than a badge. The H1 is `{typography.blog-title}` at `clamp(1.9rem, 4.2vw, 3.25rem)`, 600, -0.03em, in `{colors.text-on-navy}`. `.b-meta` below it is 13px in `{colors.text-on-navy-muted}` for date and reading time; it never takes gold, which is reserved for the rule and the CTA.

**Article.** `.b-article` is 760px wide. H2s are 24px/600 with -0.015em tracking in `{colors.text-primary}`, preceded by 44px of space and followed by 16px, so sections bind downward. Paragraphs use `{typography.reading}` at 16px/1.75 in `{colors.text-secondary}`. List markers are `{colors.gold-deep}`; inline links are `{colors.gold-deep}` with a 30% gold underline. A table inside an article reuses the first-order treatment exactly — white card, `{colors.border-hairline}`, `{rounded.md}`, `--elev-1`, `{colors.surface-hover}` header row — so a data table never looks like a different site.

**Quote panel.** `.b-quote-panel` closes an article as `{components.blog-quote-panel}`: `{colors.surface}`, `{rounded.md}`, `--elev-1`, 32px padding, a short line of invitation, and one gold pill at `{components.button-primary}`. It is the only filled gold object inside the article column; the header's pill sits outside the reading measure.

**Hub.** `.hub-grid` sets two columns of `{components.blog-card}` — `{colors.surface}`, `{rounded.sm}`, 1px `{colors.border-hairline}`, `--elev-1`. On hover the card moves its edge to `{colors.border-strong}`, takes `--elev-2`, and lifts 3px; it does not tilt, because a list of five articles is navigation rather than merchandise. `.b-tag` is a `{colors.gold-veil}` capsule with `{colors.gold-deep}` text at `{typography.eyebrow}`; the card title is 22px/600 in `{colors.text-primary}`. The grid is two-up above 768px and one-up below.

**Blog footer.** `.b-footer` is `{components.blog-footer}` on `{colors.navy}` behind a `{colors.border-navy-hairline}` top edge, in a single row: wordmark, links at `{typography.label}` in `{colors.text-on-navy-soft}`, and copyright at `{typography.small}` in `{colors.text-on-navy-muted}`. It is deliberately shorter than the homepage footer — one line of information, no column grid, no second gold accent.

**Mobile navigation.** The blog header uses the same 48 × 48 hamburger and the same white sheet over the navy 55% backdrop as the homepage. `.nav-backdrop` must remain a sibling of the header for the reason stated in the header section: the bar's `backdrop-filter` would otherwise become the containing block for the fixed scrim and clip it to 76px.

## Do's and Don'ts

- Do keep light as the default state of the page; navy belongs to exactly two full-bleed blocks, one comparison column, and the blog's article header band.
- Do let one element lead each region — the H1 in the hero, the featured card in the categories, the navied column in the comparison — and demote everything around it.
- Do pick the right gold register: `{colors.gold}` for fills and navy grounds, `{colors.gold-deep}` for any text or mark on paper.
- Do keep solid gold to two notes per viewport; gold-deep micro-accents are the thread, not the notes.
- Do keep copy exactly as supplied; never add statistics, claims, or section headlines that were not provided.
- Do hold normal text at 4.5:1 or better, UI boundaries at 3:1, and every target at 44 × 44 CSS pixels.
- Do alternate paper tones in the documented order and vary vertical padding between blocks.
- Do keep the category bed asymmetric at every breakpoint, reflowing ratios rather than flattening to a uniform grid.
- Do give every transform-based effect a reduced-motion path and an additional static state signal.
- Don't use pure #000000 anywhere, and don't use #FFFFFF as a full-bleed background — white belongs to objects.
- Don't use indigo, violet, teal, or any purple-to-blue "trust" gradient; the palette is paper, navy, and champagne.
- Don't put `{colors.gold}` text on a light ground; it measures 2.0:1 and fails every size.
- Don't put `{colors.gold-deep}` on navy; it measures 2.4:1 and disappears.
- Don't use emoji, filled icon sets, or decorative blob and wave SVGs.
- Don't use black-alpha shadows; every shadow is navy-tinted and soft.
- Don't use gradient text, metallic sheens on type, or gold as a background for body copy.
- Don't restore the film grain; paper is clean and navy is carried by the photograph and mesh.
- Don't exceed 68 characters per line or justify any paragraph.
- Don't let the marquee, parallax, or tilt run without a pause or a static alternative.
- Don't add a second accent colour for links, tags, or form states; links are ink with a gold-deep underline on paper and ivory with a gold underline on navy.
- Do keep the homepage at fourteen body blocks in the documented order and pick each new ground from the tone its neighbours are not using.
- Do put every small gold mark on paper in `{colors.gold-deep}` — snapshot counters, the MOQ column, blog list markers, inline links, and tags — and keep `{colors.gold}` for fills and navy grounds.
- Do route any new data table through the first-order pattern: white card, hairline, `{rounded.md}`, `--elev-1`, `{colors.surface-hover}` header, horizontal scroll on the wrapper.
- Do set `scroll-padding-top` on `html` to the live header height whenever a sticky bar covers in-page anchors.
- Don't place `.nav-backdrop` inside the header. `backdrop-filter` establishes a containing block for fixed descendants, so the scrim shrinks to the bar; the backdrop is a sibling, immediately before the header.
- Don't lift the first-order table or the standards cards on hover; only the hub cards take a 3px rise.
- Don't add a third navy full-bleed block; the blog page hero is an article header inside the editorial flow, not another chapter of the homepage argument.
- Don't give the blog its own fonts, radii, or accent — `blog.css` re-declares these tokens and adds no new value.

### Re-skin changelog (from the ink-black specification)

Everything below is a colour, texture, or typographic delta against the previous "ink black + champagne gold" document. Layout, grid, section order, copy, motion tokens, and the reduced-motion behaviour are untouched and are not listed.

| # | Area | Was (ink-black) | Is (American B2B Premium) |
| --- | --- | --- | --- |
| 1 | Page ground | #0B0D10 ink ladder (#10131A, #14171E) | #F6F5F0 paper ladder (#FBFAF6, #ECEBE4); the ladder now climbs toward light |
| 2 | Object surface | #1A1D23 / hover #20242B | #FFFFFF / hover #F8F6F0 |
| 3 | Dark blocks | every block dark, no true contrast | exactly two: hero and footer, both #152A46; comparison column is the third navy object and the only one on paper |
| 4 | Body text | ivory #F5F1E8 / #C9C4B7 / #918B7F on dark | #101A26 / #3E4A5A / #5B6775 on light; new on-navy trio #F4F1E8 / #C3CDDA / #94A3B8 |
| 5 | Header | sticky ink scrim rgba(11,13,16,.72) everywhere | transparent over the hero, then `{colors.surface-scrim}` white with ink text once `.scrolled` |
| 6 | Gold | one value #C9A96A used for text on dark and fills | `{colors.gold}` fills and navy-ground text; new `{colors.gold-deep}` #7C5E27 for light-ground text and marks; `gold-dim` #8F7748 retired |
| 7 | Gold budget | two notes/viewport, solid gold for button, progress, process fill, H1 phrase | two fill-register notes/viewport; progress and process fills move to gold-deep; H1 phrase stays gold on navy |
| 8 | Light hairlines | gold at 15 / 30 / 42% on dark | navy at 12 / 22% on paper (`border-hairline`, `border-strong`); gold at 22 / 42% inside navy only |
| 9 | Field boundary | rgba(245,241,232,.42) on dark | solid #7E8896 at 3.6:1 on white; hover #5B6775; focus #7C5E27 |
| 10 | Focus ring | 2px gold everywhere | 2px #7C5E27 on light, #E4CC96 on navy; gold is never the ring |
| 11 | Shadows | black-alpha 0.85 / 0.90, no resting shadow | navy-alpha 0.18–0.30; new `--elev-1` resting shadow on white objects; `--elev-inset` top highlight |
| 12 | Texture | 4% film grain over the whole page + gold glows | grain removed site-wide; light blocks get a ≤6% navy radial mesh; navy keeps a navy-lift mesh and one ≤10% gold glow |
| 13 | Hero photo | `brightness(.55) saturate(.8)` at 45%, ink curtain | `brightness(.62) saturate(.85)` at 45%, navy curtain #152A46 → transparent |
| 14 | Comparison | "With Xiangda" dark surface + gold ring | solid #152A46 navy, ivory text, gold checks, navy-tinted shadow |
| 15 | Card hover | surface-hover + gold ring + ivory shine sweep | surface-hover + navy ring + 4.5% navy sheen; same lift, tilt, zoom, timing |
| 16 | Display face | Playfair Display 500/600 for H1, H2, titles, numerals, signature | Inter 600 for all of them; Playfair retired; no italics anywhere |
| 17 | Display sizes | 84 / 48 / 26 / 64 px | 76 / 44 / 24 / 64 px, so Inter keeps the same line counts |
| 18 | Eyebrow tracking | 0.18em | 0.10em (caps stay legible at 11px, per craft ceiling) |
| 19 | Semantic colours | #7FB98A / #E0A96B / #D97A6C tuned for dark | #1F7A4D / #8A5A12 / #B3261E tuned for 5:1+ on white |
| 20 | Selection | gold 28% with ivory text | gold 24% with ink text |

Token mapping for the implementation pass: `--ink` → `{colors.text-primary}`, `--ink-2` → `{colors.text-secondary}`, `--ink-3` → `{colors.text-muted}`, `--hairline` → `{colors.border-hairline}`, `--soft` → `{colors.border-soft}`, `--strong` → `{colors.border-strong}`, `--input` → `{colors.border-input}`, `--scrim` → `{colors.surface-scrim}`, `--gold-dim` → `{colors.gold-deep}`. New tokens to add: `--navy`, `--navy-lift`, `--on-navy`, `--on-navy-soft`, `--on-navy-muted`, `--focus-navy`, `--elev-1`. The `body::after` grain block is deleted; the `.mesh` and `.glow-hero` gradients are re-authored with the navy values above.

### Content batch (Phase 2) changelog

Documentation sync against the implemented content batch. No colour, font, radius, or spacing value changed; the homepage gained three blocks, the blog subsystem was added, and two layout mechanisms were recorded.

| # | Area | Was | Is |
| --- | --- | --- | --- |
| 1 | Homepage block count | 12 blocks (header plus 11 body blocks) | 14 body blocks under the header, adding Supplier Snapshot, First Order, and Standards |
| 2 | Block order and grounds | hero navy → data `bg-alt` → categories `bg` → regions `bg-raised` → advantages `bg` → comparison `bg-alt` → process `bg` → trust `bg-alt` → FAQ `bg` → inquiry `bg-raised` → footer navy | hero navy → data `bg-alt` → snapshot `bg` → categories `bg-raised` → regions `bg` → advantages `bg-raised` → comparison `bg` → process `bg-alt` → first order `bg` → standards `bg-alt` → trust `bg` → FAQ `bg-alt` → inquiry `bg-raised` → footer navy; no two neighbours share a tone |
| 3 | Supplier Snapshot | none | `.section-snapshot` `id="profile"`; white `.snapshot-panel` split into archive and verification columns, seven-row `.snapshot-dl` (`11px/600/0.10em` keys in `ink-3`, `15px` values in `ink-2`, `soft` rules), `.snapshot-dd` on `surface-hover` with a `soft` left border, four-step `.sn-steps` counter in `gold-deep`, `.sn-reviewed` gold-veil capsule |
| 4 | First Order | none | `.section-firstorder` `id="first-order"`; white `.order-table-wrap` (hairline, `r-md`, `elev-1`, `overflow-x: auto`), `.order-table` with three columns, `surface-hover` header at `11px/600/0.10em` `ink-3`, `15px` cells, `td.ot-moq` in `gold-deep` 600 tabular nowrap, row hover, `.order-note` at `14px` `ink-3` |
| 5 | Standards | none | `.section-standards`; four `.std-card` in `.std-grid` (hairline, `r-sm`, `elev-1`), hover to `strong` edge and `elev-2` with no lift; `.std-name` 20px/600 `ink`, description `14px` `ink-2` |
| 6 | Blog subsystem | none | `/blog` plus five articles; `blog.css` self-contained on the same token set; hub, article, quote panel, blog header and blog footer |
| 7 | Blog header | n/a | `.b-header` always frosted: `surface-scrim`, blur, hairline bottom, 76px / 64px mobile; ink wordmark with `gold-deep` "Supply", `ink-2` nav hovering to ink with a `gold-deep` underline, gold pill CTA |
| 8 | Blog page hero | n/a | `.b-page-hero` on navy with a `navy-lift` 26% mesh; eyebrow `11px/600/0.10em` `on-navy-muted` behind a gold hairline; H1 `clamp(1.9rem, 4.2vw, 3.25rem)` 600 -0.03em `on-navy`; `.b-meta` `13px` `on-navy-muted` |
| 9 | Blog article | n/a | `.b-article` at 760px; H2 24px/600 -0.015em ink with 44px above; body `16px/1.75` `ink-2`; `gold-deep` list markers; inline links `gold-deep` with a 30% gold underline; tables reuse the first-order card |
| 10 | Quote panel and hub | n/a | `.b-quote-panel` white `r-md` `elev-1` 32px padding with a gold pill; `.hub-grid` two columns of `.b-card` (`r-sm`, `elev-1`, hover `strong` + `elev-2` + 3px lift) with `.b-tag` gold-veil capsules and 22px/600 titles |
| 11 | Blog footer | n/a | navy with a `navy-hairline` top edge, single row: wordmark, `on-navy-soft` links, `on-navy-muted` copyright |
| 12 | Header / hero overlap | hero began below a 76px bar; `min-height` was viewport minus header, capped at 860px | hero pulled up with `margin-top: -76px` and `min-height: 100vh`, so the transparent bar floats on the navy field and the opening screen stays exactly one viewport |
| 13 | Anchor offset | in-page anchors could land under the sticky bar | `html { scroll-padding-top: 76px }`, dropping to 64px below 1024px |
| 14 | Mobile menu backdrop | backdrop could be nested in the header and clipped | `.nav-backdrop` is a sibling before the header; `backdrop-filter` on the bar creates a containing block for fixed descendants, which was the root cause of the 76px scrim |
| 15 | `/about` | map placeholder | placeholder removed; 2 × 2 data cards (1.26M registered entities, 230+ countries, 2h to Ningbo-Zhoushan, 5 clusters) on the page's existing inline styles |
| 16 | `/products` | hero had no freshness mark | "CATALOG UPDATED OCTOBER 18, 2026" at `0.78rem`, white 72%, 0.05em tracking, uppercase |
| 17 | Sitemap | 4 URLs | 9 URLs: `/`, `/products`, `/about`, `/blog`, and five article pages |
| 18 | Tokens | no data, reading, or blog tokens | `{typography.data}`, `{typography.reading}`, `{typography.blog-title}`, and component groups for snapshot, order table, standards, blog header, page hero, article, quote panel, card, tag, and footer; no new colour |

The batch adds no colour: `{colors.gold}` still appears only as fill and on navy, `{colors.gold-deep}` only on paper, and the navy full-bleed budget is still the homepage hero and the footer.
