# / (Homepage) — Composition v1 — Notes

**Surface:** `/` (homepage) · **Source draft:** [drafts/homepage-draft-v1.md](../drafts/homepage-draft-v1.md) · **Output:** [composed/homepage-v1.html](homepage-v1.html) · **Status:** Composition v1 — awaiting Aaron-gate + Typography Review · **Date:** 2026-06-11 · **Composer:** Haven-UI Design System (absorbing Haven Visual Designer + Typography Craft lenses internally)

Anchors: [Phase 2 IA v2 §5 Homepage block](../../phase-2-information-architecture.md) · [voice.md §1+§2](../../../brand/voice.md) · [haven-primitive-codification.md](../../../../../.claude/rules/haven-primitive-codification.md) · [haven-ui CLAUDE.md Pattern-Library-First Rule](../../../../haven-ui/CLAUDE.md) · [Lab/cena-health-brand/specs/haven-directive-styling.md](../../../../cena-health-brand/specs/haven-directive-styling.md)

---

## At a glance

- **Output type:** Self-contained HTML file (~220 lines body + ~320 lines `<style>`). Renders directly in a browser; no build step.
- **PL primitives used:** 7 + 1 composition extension — document-shell family (all from haven-ui canon) + **track-selector grid** (composition-layer treatment for the primary CTA).
- **Codification gaps surfaced:** 0 on core primitives. **1 composition extension requires verdict** (see below — track-selector cards).
- **End-to-end pipeline validation:** ✅ Third page validates the document-shell register. First page to test a primary-CTA structural element (track-selector). **Verdict required:** does this evidence justify public-shell codification per generative-determinism's 3-use rule?

---

## PL primitive mapping (per-section)

The composition uses Haven's **Document District** family + a composition-layer track-selector treatment. The mapping below shows the canonical class + how it lands per section.

| Section | Primitive(s) | components.css source | Usage |
|---|---|---|---|
| **Outer container** | `document-shell` | `:12801–12806` | Single-column, 52rem measure, `mx-auto`. Same quiet structural register as /about and the track-landing pages. |
| **Section 1 — Hero** | `document-masthead` + `document-title` + `document-lead` | `:12809–12852` | Masthead anchors the H1 + lead as one unit. `document-title` Lora 27.65px. `document-lead` carries the inline link to #tracks anchor. |
| **Section 2 — Problem** | `document-section` + `document-section-title` + `document-prose` | `:12855–12885` | Section heading + problem paragraph. Same rhythm as /about and track-landings. |
| **Section 3 — Two-track entry** | `document-section` + `document-section-title` + **`.track-selector` grid + `.track-card` cards** | `:12855–12876` + **composition** | **LOAD-BEARING STRUCTURAL ELEMENT.** The track-selector is the homepage's primary navigational CTA per brief §5. Rendered as Option A (side-by-side cards on desktop, stacked on mobile). Each card: track title (Lora 600) + framing sentence + arrow link. |
| **Section 4 — About scent** | `document-section` + `document-section-title` + `document-prose` | `:12855–12885` | One paragraph with inline /about link. Same primitives as prior pages. |
| **Section 5 — Contact** | `document-section` + `document-section-title` + `document-prose` | `:12855–12885` | Contact copy + two CTA links (Calendly + direct email). Same prose primitives. |

**Total core primitives: 7.** (`document-shell`, `document-masthead`, `document-title`, `document-lead`, `document-section`, `document-section-title`, `document-prose`)

**Composition extension: 1** — `.track-selector` grid container + `.track-card` card styling (Section 3). See verdict below.

---

## Brand fidelity check (Haven Visual Designer lens)

Per-section how the brand-canon applied + composition taste calls.

### Color (Cena Color System v2 — sand canonical, warm-ground-cool-figure)

- **Page surface:** `--color-sand-50` (#f8f4ec) — warm-off-white ground.
- **H1 (`document-title`):** `--color-sand-900` (#25211d) — warm-dark Lora authority, per HVD canon.
- **H2 (`document-section-title`):** `--color-sand-800` (#3f3934) — one step quieter, visual hierarchy through color.
- **Body (`document-prose`, `document-lead`):** `--color-sand-700` (#5a544e) — reading-comfort body color.
- **Track card background:** `--color-sand-100` (#e4ddf7) — subtle visual lift; card reads as a distinct surface without saturation.
- **Track card border:** `--color-sand-300` (#bbb6ad) — warm structural rule, quiet emphasis.
- **Interactive links:** `--color-teal-700` (#1e5149) — reserved for user commitments + wayfinding. Inline anchor in lead, track card links, about link, contact CTA links.
- **Teal is reserved for interactive only.** Not present in static text; respects brand reserved-color discipline.

### Typography hierarchy

| Level | Family | Size | Weight | Color | Measure |
|---|---|---|---|---|---|
| H1 | Lora | 27.65px (heading-01) | 500 | sand-900 | implicit (52rem container) |
| H2 | Lora | 23.04px (heading-02) | 500 | sand-800 | implicit (52rem container) |
| Track title | Lora | 16px (body-02) | **600** | sand-900 | implicit (card width) |
| Lead (subhead) | Source Sans 3 | 19.2px (body-01) | 400 | sand-700 | 68ch |
| Body | Source Sans 3 | 16px (body-02) | 400 | sand-700 | 68ch |
| Track description | Source Sans 3 | 16px (body-02) | 400 | sand-700 | implicit (card width) |

The track-card-title uses Lora 600 weight (heavier than standard body) to signal structural importance within the card, while keeping the size at body-02. This is a composition taste call — the track card is the primary CTA, so the title gets extra weight. **Open question for Aaron:** does the Lora 600 read as appropriate visual hierarchy, or does it feel heavier than the page's overall register?

### Spacing philosophy (generous, exposes warm ground)

- **Outer padding:** `py-10 px-5` mobile (40px / 20px) → `py-14 px-8` desktop (56px / 32px).
- **Section rhythm:** `mt-12` between sections (48px) — loose, quiet rhythm.
- **Track-selector grid:** `gap-6` mobile (24px) → `gap-8` desktop (32px); symmetric spacing.
- **Track card internal padding:** `p-6` (24px) — breathing room inside each card. Links sit at the bottom with `mt-3` (12px) to hold the card's vertical anchor.
- **Within prose:** paragraph spacing `mt-4` (16px).

The generous outer padding + track-card padding combine to expose the warm sand-50 ground, per Cena's design principle: *"spacing is a warmth tool."*

### "Grew, not built" diagnostic

The page reads as quiet structural fact (hero + problem + routing + scent + contact) with the track-selector cards as the visible load-bearing element. No decoration, no ambient blobs, no imagery. The cards read as architectural (quiet border + sand-100 background) rather than "polished." The page should pass the "grew not built" read: warm ground, generous space, no teal saturation, Lora authority on headings + track titles.

---

## Typography spec

### Face stack
- **Display + titles:** `'Lora', ui-serif, Georgia, 'Times New Roman', serif` (font-serif token). Lora weight 500 for headings; weight 600 for track-card-title.
- **Body + UI:** `'Source Sans 3', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif` (font-sans token). Regular weight 400.

Both link from Google Fonts CDN per haven-ui canonical pattern.

### Modular scale (minor-third 1.2, verified)
- **heading-01:** 27.65px / 1.2 line-height (H1, *"Clinical intelligence infrastructure..."*)
- **heading-02:** 23.04px / 1.25 line-height (section H2 headings)
- **track-title:** 16px / 1.4 line-height — body-02 size, raised weight (600) + tighter line-height for card-context readability
- **body-01:** 19.2px / 1.55 line-height (lead/subhead)
- **body-02:** 16px / 1.5 (body) → 1.65 (in `.document-prose` for reading-comfort)

### OpenType features enabled (body-wide)
- `"kern" 1` — kerning always on
- `"liga" 1` — standard ligatures (fi / fl / ffi / ffl)
- `"calt" 1` — contextual alternates
- `"ss03" 1` — Source Sans 3 single-story `g`

Mirrors haven-ui canonical config.

### Reading-comfort measure
- **Lead:** 68ch max-inline-size — matches `document-lead` canonical.
- **Body prose:** 68ch max-inline-size — matches `document-prose` canonical.
- **Track cards:** no max-inline-size constraint; cards are layout-bounded at the grid width.

---

## Composition-layer extension: track-selector cards

The track-selector is the **primary navigational CTA** of the homepage per brief §5 Must-do. This is the page's most structural composition decision.

### Structure (Option A chosen — recommended)

**Option A: Side-by-side cards** (recommended, chosen for this composition)
- Grid layout: 1 column mobile, 2 columns desktop (via CSS media query)
- Each card: subtle sand-300 border, sand-100 background, 6px border-radius
- Internal padding: 24px (p-6)
- Card content: track title (Lora 600) + framing sentence + arrow link
- **Mobile:** stacks vertically, full-width cards, gap-6 (24px between cards)
- **Desktop:** side-by-side, gap-8 (32px between cards)

This option reads as the track-selector's architectural intent (two paths, equally weighted, clear routing signals) while staying quiet (no heavy chrome, sand-neutral palette).

### Why Option A over B and C

- **Option B (text-link blocks, no card chrome)** — quieter, but risks the track-selector not reading as the page's primary CTA. The cards read visually as "these are the main moves."
- **Option C (inline text-link list)** — quietest, but even riskier for CTA prominence. Reads like secondary navigation.
- **Option A (cards)** — balances architectural clarity (the cards are the CTA) with restraint (quiet colors, subtle border, no heavy fill). Per brief, the track-selector IS the primary CTA; visual cards reinforce that role.

### Composition classes used

```css
.track-selector           /* grid container; gap varies by viewport */
.track-card              /* flex container for card content */
.track-card-title        /* Lora 600 — visual emphasis within the card */
.track-card-description  /* body-02; prose-comfort line-height */
.track-card-link         /* teal-700; includes ::after arrow */
```

These classes are **composition-layer only** — they do not exist in haven-ui's components.css. All other primitives (document-shell, document-section, document-prose) are canonical reuse.

---

## Codification verdict (per haven-primitive-codification.md 3-use rule)

The track-selector cards represent a **primary-CTA structural element** for the homepage. This is the **first page** where a track-selector pair appears.

**Verdict:** track-selector does **not** trigger codification NOW. The 3-use rule says:
- First occurrence: composition-layer treatment is acceptable
- Second occurrence (if another page uses a similar track-selector pair): surface evidence
- Third occurrence: codify

**However,** the composition notes surface that:
1. A `public-shell` or `marketing-shell` primitive (sibling of `document-shell`) may emerge from the track-landings compositions if they have similar structural needs
2. The track-selector grid may become a recurring structure on the public site (future pages for comms, sector-specific routing, etc.)

**Path forward:**
- This composition stands at composition-layer (no codification yet)
- Track the track-selector usage across the track-landings (`/for-payers-investors`, `/for-providers-partners`) during their composition
- If a second page needs a similar track-selector or multi-item grid CTA, surface it for codification per generative-determinism's 3-use trigger

---

## Document-shell register holds on the public site

**Validation point:** The document-shell primitive successfully carries across four pages now:
1. `/about` — document-heavy, quiet structural, no CTAs ✅
2. `/for-payers-investors` — value-frame surface, narrative prose ✅
3. `/for-providers-partners` — bifurcation table, workflow-heavy ✅
4. `/` (homepage) — navigation + routing, primary CTA ✅

The register holds cleanly. The homepage's track-selector CTA is an extension (composition layer), not a break in the primitive.

---

## Open questions (composition taste calls)

### Q1 — Track-card-title weight (Lora 600 in body-02 size)

The track-card-title uses Lora 600 weight to signal structural importance within the card (the title is the primary read inside each card). This is heavier than standard body-02 Lora (500 weight).

**My pick:** Lora 600 is right. The track is the primary CTA; the title should read with authority. But **surfacing for Aaron-gate** — does the heavier weight read as appropriate emphasis, or does it feel like it breaks the page's overall quiet register?

### Q2 — Card background color (sand-100)

The track cards use sand-100 background (#e4ddf7) to give the cards a visual lift without saturation. This is a composition taste call — the cards are the primary CTA, so they should read as distinct surfaces.

**My pick:** sand-100 is right. The cards read as action-able surfaces (distinct from body text) while staying in the warm palette. **Confirm or override at Aaron-gate.**

### Q3 — Inline links (teal-700 with underline)

Inline links (hero subhead, about link, contact CTAs) use teal-700 color + underline. This is the only place teal appears on the page (apart from `:focus-visible`).

**My pick:** teal for links is correct per brand reserved-color discipline. **Confirm or override at Aaron-gate.**

---

## Composition validates the public-site pipeline for structural CTA

Per IA v2 §5's framing of the homepage as the structural-CTA test:

- ✅ **Pattern-Library-First holds.** All 7 core primitives are canonical; 1 composition extension (track-selector) introduced at composition layer per generative-determinism's shape-trigger.
- ✅ **Document-district register scales.** The same primitives that emit SoPs, /about, and track-landings cleanly emit a homepage with a primary-CTA structural element.
- ✅ **Brand canon transfers.** Sand color ladder + Lora authority + Source Sans 3 + teal reserved discipline all hold on the homepage.
- ✅ **Cap-Honest discipline survives.** Every Cena-as-subject claim in the hero + problem + track framings lands in honest tense (present for problem statement, future-tense for Cena-being-built).
- ⚠️ **Track-selector CTA structure is novel.** This is the first page to render a primary-CTA as a grid of cards. Verdict required on codification path: composition-layer hold vs. public-shell promotion pending second consumer evidence.

---

## Aaron-gate resolutions

**Aaron-gate resolutions 2026-06-11:**

- ✅ **Q1 + Q2 + Q3 (track-card visual treatment) — LOCKED to ship as composed.** Sand-100 card background + sand-300 border + Lora 600 body-02 track-card titles + teal-700 underlined arrow links. Track cards read as primary CTA with quiet visual emphasis. Alternative shapes (no background; subtle hover state) preserved as future iteration paths if v1 reads thin.

---

## What's next

The homepage composition closes the Phase 3 public-site pipeline validation. The track-selector cards are the evidence point for any future public-shell codification decision — if a second page (future /for-comms, /for-investors-specifically, or other site expansion) uses a similar multi-item CTA grid, that's the trigger to surface public-shell as a sibling of document-shell per generative-determinism.

---

## Public-shell verdict

**PRELIMINARY:** The document-shell register holds across all four pages (about + payers/investors + providers/partners + homepage). The homepage introduces a primary-CTA structural element (track-selector cards) at the composition layer, not as a new primitive.

**Verdict:** document-shell registers hold for the launch public site. **No public-shell codification needed at this moment.** Track the track-selector usage across future pages; promote to public-shell if a second page uses similar multi-item CTA grid per generative-determinism's 3-use rule.

**Evidence trail:** three pages held document-shell, fourth page (homepage) stretched it with a composition-layer extension (not a break). The register is durable; extension is within expected composition latitude.

---

## Sign-off

- [x] Aaron-gate composition pass (Q1 + Q2 + Q3 locked at composition picks)
- [x] Public-shell codification verdict (deferred pending second page evidence per generative-determinism 3-use rule)
- [x] Public-site pipeline validation gate (homepage closes the gate; document-shell holds across 4 pages)
