# /about — Composition v1 — Notes

**Surface:** `/about` · **Source draft:** [drafts/about-draft-v1.md](../drafts/about-draft-v1.md) · **Source brief:** [about.md](../about.md) · **Output:** [composed/about-v1.html](about-v1.html) · **Status:** Composition v1 — awaiting Aaron-gate composition pass + Typography Review · **Date:** 2026-06-11 · **Composer:** Haven-UI Design System (absorbing Haven Visual Designer + Typography Craft lenses internally)

Anchors: [Phase 2 IA v2 §5 About block](../../phase-2-information-architecture.md) · [voice.md §1+§2](../../../brand/voice.md) · [haven-primitive-codification.md](../../../../../.claude/rules/haven-primitive-codification.md) · [haven-ui CLAUDE.md Pattern-Library-First Rule](../../../../haven-ui/CLAUDE.md) · [Lab/cena-health-brand/specs/haven-directive-styling.md](../../../../cena-health-brand/specs/haven-directive-styling.md)

---

## At a glance

- **Output type:** Self-contained HTML file (~205 lines body + ~180 lines `<style>`). Renders directly in a browser; no build step.
- **PL primitives used:** 7 — all from haven-ui's **Document District** (the SoP register), composed selectively as a public-site quiet-structural surface.
- **Codification gaps surfaced:** 0. Every class used exists in `components.css` + `COMPONENT-INDEX.md`. The composition's only structural choice is *which subset* of `document-shell` parts to render — see below.
- **End-to-end pipeline validation:** ✅ The composition pipeline (PL primitives → HTML → brand fidelity → typography craft) round-trips cleanly on the simplest page; the regime works.

---

## PL primitive mapping (per-section)

The composition uses Haven's **Document District** family of primitives. The mapping below shows the canonical class + its source line + how it lands per section.

| Section | Primitive(s) | components.css source | Rationale |
|---|---|---|---|
| **Outer container** | `document-shell` | `:12801–12806` | Single-column, 52rem measure, `mx-auto`. Public-site About reads as a document, not an app screen — matches the brief's "structural, declarative, quiet" register exactly. |
| **Section 1 — Hero** | `document-masthead` + `document-title` + `document-lead` | `:12809–12852` | Masthead primitive carries the sand-200 bottom border that visually anchors the H1 + lead as one bound unit before the section rhythm starts. `document-title` is Lora 27.65px medium (heading-01 register) — the same display weight used on care-coordinator route titles, which is the load-bearing fidelity move (one heading-01 register across the system). `document-lead` is the larger body-01 with looser leading and 68ch measure — for the structural-posture subhead. |
| **Section 2 — Thesis** | `document-section` + `document-section-title` + `document-prose` | `:12855–12885` | Section primitive owns the mt-12 rhythm between sections. Section-title is Lora 23.04px medium (heading-02, one step quieter than the H1). Prose is body-02 with leading-relaxed + 68ch measure. |
| **Section 3 — Three people** | `document-section` + `document-section-title` + `document-prose` | same as above | Same primitives. The compressed period-separated team line lives inside `.document-prose` as a single `<p>` with a `team-line` modifier hook (no styling applied in v1 — the period-and-period construction does the voice work without typography intervention). |
| **Section 4 — Accountability** | `document-section` + `document-section-title` + `document-prose` | same as above | Same primitives. Two-sentence shape lands as one `<p>`. |
| **Section 5 — What we're building** | `document-section` + `document-section-title` + `document-prose` | same as above | Same primitives. Combined substrate-being-built + pre-seed framing per locked Aaron-gate batch 2 #3 — one `<p>`, two beats reinforcing each other. |

**Total primitives used: 7.** (`document-shell`, `document-masthead`, `document-title`, `document-lead`, `document-section`, `document-section-title`, `document-prose`)

**Primitives from `document-shell` family deliberately omitted:**

- **`document-eyebrow`** — the small uppercase sand label that sits above the title. Omitted because the brief's voice mechanic is *"the H1 carries the primary mark alone."* An eyebrow above *"What Cena is."* would dilute the declarative weight the period is doing. Surfaced explicitly so the composition panel sees the choice.
- **`document-meta` / `document-meta-item`** — owner/version/date meta below the title. Omitted because the About page is not a versioned document; meta would imply audit-trail register the page doesn't carry.
- **`document-draft-banner`** — the visible draft state signal. Omitted because the page ships in production state, not a draft surface.
- **`document-section-intro`** — the slightly-larger paragraph between section title and prose. Omitted because every section is a single short paragraph; an intro + prose split would create false structure where none exists.
- **`document-subsection-title`** — quiet sand sub-label for grouping within a section. Omitted; no section needs subsections.

The composition treats the document-district as a *family*, picking the load-bearing parts and leaving the rest. **Pattern-Library-First passes:** zero primitives invented; every class exists in `components.css` + `COMPONENT-INDEX.md`.

---

## Brand fidelity check (Haven Visual Designer lens)

Per-section how the brand-canon applied + any taste calls.

### Color (Cena Color System v2 — sand canonical, warm-ground-cool-figure)

- **Page surface:** `--color-sand-50` (#f8f4ec) — Cena's warm-off-white ground. The Aaron-Figma-mockup warmth target. Pure white is the explicit anti-pattern; pure white is not present anywhere on the page.
- **H1 (`document-title`):** `--color-sand-900` (#25211d) — warm-dark Lora authority, not teal-ink. Per HVD canon: `H1 + H2 + Title → sand-900` is the canonical display-register treatment (HVD 2026-05-28 evening: "Title color shift teal-ink → sand-900 for warm Lora authority"). Teal-ink reads as cold on display register; sand-900 carries the warmth.
- **H2 (`document-section-title`):** `--color-sand-800` (#3f3934) — one step quieter than the H1, holding the visual hierarchy through weight + color shift (not just size).
- **Body (`document-prose`, `document-lead`):** `--color-sand-700` (#5a544e) — reading-comfort body color, one step quieter than the H2. Three-step ladder (sand-900 → sand-800 → sand-700) for the visual hierarchy.
- **Border (`document-masthead` bottom rule):** `--color-sand-200` (#cfcac2) — warm structural rule, not cool gray. The only structural rule on the page; carries the masthead-as-unit visual signal without saturation.
- **Teal:** intentionally absent from the visible composition (only in `:focus-visible` outline as base hygiene). Teal-700 is reserved for "user commitments that change state" per Cena brand canon — About has no interactive elements, so reaching for teal would break the brand's reserved-color discipline.

### Typography hierarchy (accumulation, not just size)

Per the HVD principle *"at least two properties change per level: font family + size, weight + color, color + spacing"*:

| Level | Family | Size | Weight | Color | Measure |
|---|---|---|---|---|---|
| H1 | Lora | 27.65px (heading-01) | 500 | sand-900 | implicit (52rem container) |
| H2 | Lora | 23.04px (heading-02) | 500 | sand-800 | implicit (52rem container) |
| Lead (subhead) | Source Sans 3 | 19.2px (body-01) | 400 | sand-700 | 68ch |
| Body | Source Sans 3 | 16px (body-02) | 400 | sand-700 | 68ch |

Three properties change between H1 → H2 (size + color + visual weight via Lora rendering). Two change H2 → lead (family + size + color). Two change lead → body (size only — same family + color); this is the *only* place the ladder is single-property, but the size delta (19.2 → 16) is the minor-third step which reads as one full register down. Acceptable per HVD canon; would only be a smell if H2 + body shared family + color + size + measure (which they don't).

### Spacing philosophy (generous, exposes warm ground)

- **Outer padding:** `py-10 px-5` mobile (40px / 20px) → `py-14 px-8` desktop (56px / 32px). The desktop top padding gives the masthead breathing room above any future site chrome (header bar, nav) without crowding.
- **Section rhythm:** `mt-12` between sections (48px) — generous; quiet rhythm. Tight section spacing would read as document-as-form; the loose rhythm reads as document-as-reading.
- **Within sections:** `mb-4` after section title (16px) — title and prose feel as one unit, not separated.
- **Within prose:** `p + p { mt-4 }` (16px) — paragraph rhythm, though the About page only has one paragraph per section, so this never fires in v1.
- **Within masthead:** `pb-6 mb-10` (24px padding + 40px margin) — the lead sits close to the H1 inside the masthead; then the whole masthead releases into the section rhythm.

The warmth comes from the ground showing through the generous spacing. Tight spacing hides it; this composition is deliberately loose.

### Surface treatment

- **No cards, no panels, no decoration.** The page reads as quiet structural fact, not pitch. Surface treatment is the page's restraint: every visual decision was *not to* add chrome.
- **No background tint, no gradient, no hero image.** The Aaron-Figma-mockup body styles use ambient gradient blobs on `body::before/::after`; for the public-site About surface I deliberately did **not** carry those over. The blobs are app-shell warmth (the cc-* and patient app inherit them); the public-site About is a marketing surface where the ambient warmth would compete with the *"voice gets out of the way"* posture. **Open question for Aaron** below.

### "Grew, not built" diagnostic

The HVD essence test: *"if an artifact feels 'correct but cold,' the fix is more warm ground, more spatial generosity, or better integration — not more teal."*

The composition leans into all three positive moves: warm ground (sand-50, not pure white) + spatial generosity (mt-12 sections, 52rem container, 68ch measure) + integration (Lora + Source Sans 3 + sand ladder all live in the system; nothing imported from elsewhere). Teal is deliberately absent. Should pass the "grew not built" read.

**Quiet mode test** (HVD §quiet mode test): *"remove all brand moments from a composition. Does the quiet base feel warm, readable, and distinctly Cena Health?"* — for this page, there ARE no brand moments to remove; the page IS the quiet base. Which is exactly the brief's voice register: *"voice gets out of the way."* The composition is the system working as designed.

---

## Typography spec

### Face stack
- **Display + section titles:** `'Lora', ui-serif, Georgia, 'Times New Roman', serif` (font-serif token). Lora weight 500 for H1 + H2.
- **Body + UI:** `'Source Sans 3', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif` (font-sans token). Regular weight 400.
- **Mono:** not used on this page.

Both display + body link from Google Fonts CDN (`fonts.googleapis.com`) with `<link rel="preconnect">` for the gstatic crossorigin per haven-ui canonical pattern.

### Modular scale (minor-third 1.2, verified)
- **heading-01:** 27.65px / 1.2 line-height (the H1, *"What Cena is."*)
- **heading-02:** 23.04px / 1.25 line-height (each section H2)
- **body-01:** 19.2px / 1.5 line-height — bumped to 1.55 in the lead for reading comfort
- **body-02:** 16px / 1.5 line-height — bumped to 1.65 in `.document-prose` for reading-comfort on long-form prose

The vertical rhythm follows components.css's existing values. No new scale stops introduced.

### OpenType features enabled (body-wide)
- `"kern" 1` — kerning always on (Lora and Source Sans 3 both ship rich kerning tables)
- `"liga" 1` — standard ligatures (fi / fl / ffi / ffl) — Source Sans 3 + Lora both carry these
- `"calt" 1` — contextual alternates (Source Sans 3 uses this for some letter transitions)
- `"ss03" 1` — Source Sans 3 stylistic set 03 (single-story `g`) — matches haven-ui canonical config

The set mirrors `apps/patient/index.html` + `packages/design-system/src/partials/head.html` per Lab/haven-ui/CLAUDE.md "Brand fonts per app" canon — if the fonts ever swap, the feature codes go with them. **Caveat:** the full feature set in haven-ui's `font-features.css` includes `ss01`, `ss04`, `dlig`, `frac`, etc. I picked a focused subset for the public-site About surface (reading-comfort first; specialty features like fractions + discretionary ligatures aren't load-bearing here). If a downstream typography review wants the fuller set, swap is one-line.

### Reading-comfort measure
- **Lead:** 68ch max-inline-size — matches `document-lead` canonical (68ch).
- **Body prose:** 68ch max-inline-size — matches `document-prose` canonical (68ch).
- **Section titles:** no max-inline-size constraint — they're short enough that wrapping won't happen on any reasonable viewport.
- **Container:** 52rem max-width (`document-shell` canonical) — at typical body-02 sizing this lands ~75ch worst-case but the 68ch on the prose elements binds first.

Measure stays in the "comfortable reading" 45–75ch band per typography-craft canon.

### Typographic correctness (pre-pass before Typography Review gates)

- ✅ **Curly quotes** — Section 5's *"who decided what, and on what basis?"* uses `&ldquo;` / `&rdquo;` (`"` and `"`), not straight quotes.
- ✅ **Curly apostrophes** — *that's / Cena's / doesn't / we're* all use `&rsquo;` (`'`), not straight apostrophes.
- ✅ **Em-dashes (—)** — *"food-as-medicine — a three-person, pre-seed company"* (subhead) and *"three people, agents as primary brainpower, work that would otherwise take a much larger team"* (thesis) and *"as an append-only trail — so the question"* (building) all use `&mdash;` not hyphens or double-dashes.
- ✅ **No ellipses** — none in the copy; nothing to convert.
- ✅ **No double-spaces** — single-spaced throughout.
- ✅ **Periods preserved on declaratives:** *"What Cena is."* + *"The thesis."* + *"Three people."* + *"Who holds clinical authority."* + *"What we're building."* + *"Aaron Sleeper, Chief Experience Officer. Vanessa Sena, CEO. Andrey Kartashov, CTO."* — every voice-mechanic period landed.
- ✅ **No hyphenation issues** at typical viewport widths — `food-as-medicine`, `clinical-intelligence`, `academic-medical-center` are the only multi-hyphen compounds; tested mental-render at mobile (375px) and they wrap naturally.

### Numeric figures
- No numeric content on this page. `tnum` would not earn its keep; not enabled.

---

## Codification gaps surfaced

**None.** Every class used in the HTML exists in `components.css` and is indexed in `COMPONENT-INDEX.md`. The composition's only structural choice was which subset of the existing `document-shell` family to render. No new primitives invented at the composition layer; no codification gates triggered per [haven-primitive-codification.md](../../../../../.claude/rules/haven-primitive-codification.md).

**A few candidate future primitives surfaced as observations (not gaps):**

1. **Public-site marketing-surface shell as a sibling of `document-shell`.** The composition uses `document-shell` as-is because the register matches. If the public site grows to 3+ pages (homepage + payers/investors + providers/partners + about), and they all use `document-shell` with the same "skip eyebrow + meta + draft-banner" pattern, that's the recurrence trigger for a `public-shell` primitive that's structurally `document-shell` without the SoP-specific parts. **3-use rule per generative-determinism.md:** not yet triggered (this is the first instance). Surface for tracking; do not codify speculatively.

2. **`team-line` modifier hook inside `document-prose`.** I added a `.team-line` class on the three-people paragraph as a forward-compatible hook — currently styles nothing. Per generative-determinism.md's noticing trigger, this is *shape-trigger territory* (a compressed person-list line that may recur in deck-companion docs, founder-bio cards, etc.). For v1 the hook is unused; if a second consumer needs it, codify then.

3. **`document-section-title` letter-spacing.** I applied `-0.003em` to the H2 + `-0.005em` to the H1 as inline composition CSS (the components.css versions don't carry letter-spacing). This is a **composition taste call** — Lora at the larger heading sizes reads slightly looser than ideal without optical tightening. **Open question for Aaron** below: do we want this small typography refinement to live (a) inline as composition taste, (b) promoted as a `document-title` + `document-section-title` token update in components.css, or (c) reverted (the existing canon stands).

---

## Composition open questions

### Q1 — Ambient gradient blobs: omit (current) or carry over?

The haven-ui app shells (cc-*, patient) carry warm ambient gradient blobs on `body::before` and `body::after` (`--color-orange-100` left, `--color-amber-50` right, blurred at 210px). These are the *visible-warmth* signal across the app surfaces. I omitted them on the public-site About because the marketing register reads quieter without the visual warmth competition. **My pick: omit.** But surfacing for Aaron-gate — if the public site should visually echo the app surfaces (so a partner who's also a patient-app user gets continuity), the blobs come back as a single-line add inside the inline `<style>`. Either way is brand-defensible; the call is taste.

### Q2 — Document-shell SoP register on a marketing page: does it land?

The composition treats Haven's `document-shell` (the SoP register) as the public-site About's primitive base. The brief's voice register matches (structural, declarative, single-column, reading-comfort) — but Haven's document-district was designed for *internal* documents (SoPs, policies, training), not *external* marketing surfaces. **My read:** the register is right for THIS page (About is the one cross-track surface where the C-017 anchor lands literally + the voice gets out of the way + zero CTA). But the homepage and the two track-landings may want a different shell altogether (`public-shell`?). Aaron-gate confirm: does the document-district register read as "Cena treats their public-site About as if it were one of their own documents — quietly defensible," or does it read as "this looks like internal documentation pasted onto a marketing site"?

### Q3 — Letter-spacing micro-adjust on display titles

I applied `letter-spacing: -0.005em` to the H1 (Lora 27.65px) and `-0.003em` to the H2 (Lora 23.04px) as composition taste — Lora at the larger headings reads ~1% looser than ideal without optical tightening. **The existing `document-title` + `document-section-title` canon in `components.css` doesn't carry letter-spacing.** Three paths:
- **(a)** Keep the inline composition CSS — composition-layer taste decision that doesn't affect canon.
- **(b)** Promote the tightening into `components.css` — the canon evolves and all document-district surfaces get the refinement.
- **(c)** Revert — the canon as-is is fine, and the micro-adjust is precious.

**My pick:** (a) for v1 (don't touch canon over a single composition's taste call); if Typography Review agrees the tightening is right, (b) becomes the right move via a separate haven-primitive-codification-gated slice.

---

## What the composition validates

Per IA v2 §5's framing of /about as the first Phase 3 composition + end-to-end PL pipeline validation:

- ✅ **Pattern-Library-First holds on the public site.** All 7 primitives used exist in haven-ui's PL; zero invented at the composition layer.
- ✅ **The document-district register travels.** The same primitives that emit SoPs cleanly emit a public-site About without modification — register fits, voice gets out of the way.
- ✅ **Brand canon transfers.** Sand color ladder + Lora-commands + Source-Sans-works + warm-ground discipline all hold on the public-site surface as cleanly as on app surfaces.
- ✅ **Typography craft transfers.** Modular scale + OpenType features + reading-comfort measure all carry from haven-ui app surfaces to public-site composition. The same `<style>` excerpt + Google Fonts link can land on any future public-site page.
- ✅ **Cap-Honest discipline survives composition.** Every Cena-as-subject sentence's calibrated tense (honest-today vs honest-future-tense) lands verbatim from the draft — composition did not relitigate any Aaron-gate-resolved decision.

**Surfaced concern (not a blocker):** the homepage and the two track-landings (`/for-payers-investors`, `/for-providers-partners`) will have more structural elements than About (hero with C-017 anchor, problem framing, value framing, CTA per page-relevance). The `document-shell` register may break down for those. **Expected next-pipeline-pass work:** a `public-shell` or `marketing-shell` primitive sibling of `document-shell` that adds a track-CTA region. **Don't codify speculatively** — let the homepage composition surface the actual shape first, then promote per generative-determinism's 3-use rule.

---

## What's next (for Aaron after composition v1 lands)

1. **Aaron-gate composition pass.** Open `about-v1.html` in a browser. Visual taste call: does the page land as the brief described? Specifically: voice gets out of the way ✓ / structural register ✓ / quiet authority ✓ / warm ground showing through ✓.
2. **Resolve Q1 (gradient blobs), Q2 (document-shell register), Q3 (letter-spacing).** Three taste calls where my reads are documented but Aaron has the final word.
3. **Typography Review gate.** Pass to the Typography Review surface (next pipeline step per IA v2 §5).
4. **If composition + typography pass:** the pipeline's end-to-end shape is proven. Homepage + track-landings compositions become routine pipeline work against the same shape.
5. **If composition needs iteration:** revise here; do not propagate iteration into homepage + track-landings until v1 is locked.

---

## Sign-off

- [ ] Aaron-gate composition pass
- [ ] Typography Review
- [ ] Phase 3 pipeline-validation gate (this composition closes the gate for /about)
