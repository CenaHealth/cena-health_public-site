# /for-providers-partners — Composition v1 — Notes

**Surface:** `/for-providers-partners` · **Source draft:** [drafts/for-providers-partners-draft-v1.md](../drafts/for-providers-partners-draft-v1.md) · **Source brief:** [for-providers-partners.md](../for-providers-partners.md) · **Output:** [composed/for-providers-partners-v1.html](for-providers-partners-v1.html) · **Status:** Composition v1 — awaiting Aaron-gate composition pass · **Date:** 2026-06-11 · **Composer:** Haven-UI Design System (absorbing Haven Visual Designer + Typography Craft lenses internally)

Anchors: [Phase 2 IA v2 §5 For providers+partners block](../../phase-2-information-architecture.md) · [voice.md §1+§2](../../../brand/voice.md) · [haven-primitive-codification.md](../../../../../.claude/rules/haven-primitive-codification.md) · [haven-ui CLAUDE.md Pattern-Library-First Rule](../../../../haven-ui/CLAUDE.md) · [cap-honest-gate-ledger.md](../cap-honest-gate-ledger.md) Hotspot 1

---

## At a glance

- **Output type:** Self-contained HTML file (~350 lines body + ~340 lines `<style>`). Renders directly in a browser; no build step.
- **PL primitives used:** 7 (all from haven-ui's **Document District**) + 1 composition-layer structural choice (bifurcation table render Option A).
- **Codification gaps surfaced:** 0. The 9-step bifurcation table is a composition-layer structural choice, not a new primitive — the HTML table markup + caption labels are semantically clean and specific to this page's voice mechanic.
- **Document-shell register holds.** The document-district family scales cleanly to this page's richest structural needs: multi-paragraph hero, bulleted problem list, multi-paragraph model description, 9-step HTML table with bifurcation visible in two-column structure, three clinical-authority paragraphs, calendar CTA.

---

## PL primitive mapping (per-section)

| Section | Primitive(s) | components.css source | Rationale |
|---|---|---|---|
| **Outer container** | `document-shell` | `:12801–12806` | Single-column, 52rem measure, `mx-auto`. Public-site pages read as documents, not app screens. |
| **Section 1 — Hero** | `document-masthead` + `document-title` + `document-lead` | `:12809–12852` | Masthead primitive carries the sand-200 bottom border anchoring the H1 + lead. "Infrastructure" anchor lands literally per voice.md §2 Translate-Anchor carve-out (reader-appropriate value for providers/partners audience). Subhead names turnkey-program + referral-and-data-back model in plain language. |
| **Section 2 — Problem** | `document-section` + `document-section-title` + `document-prose` (multiple paragraphs + bulleted list) | `:12855–12885` | Section primitive owns the mt-12 rhythm. Section-title is Lora 23.04px medium (heading-02). Three paragraphs + operational pain recognition using semantic `<ul>` (styled with composition-level bullet markup). Partner-protagonist throughout. |
| **Section 3 — How program runs** | `document-section` + `document-section-title` + `document-prose` (multiple paragraphs) | same as above | Four paragraphs (intro + three model primitives: "Your program prescribes" / "Cena is being built to capture" / "Your clinicians keep their authority"). Vision-specific honest-future-tense per Cap-Honest discipline. Partner-protagonist framing; substrate as structural object. |
| **Section 4 — Reference program** | `document-section` + `document-section-title` + `document-prose` (framing) + **bifurcation-table** (composition) | `:12855–12885` + custom table styling | Section primitive + framing prose + 9-step patient journey rendered as HTML table (Option A for bifurcation visibility). Table structure: 4 columns (step #, step name, today, design-intent) × 9 rows. HONEST-TODAY steps (1, 2, 5, 6) render with single-cell today column only. HONEST-FUTURE-TENSE steps (3, 4, 7, 8, 9) render two-column bifurcation with "Today" label + "Design intent" label. The bifurcation is visible to the reader as structural columns, not glossed. Closing two paragraphs synthesize the model's architecture (meal-delivery half / clinical-intelligence half / integration). |
| **Section 5 — Clinical authority** | `document-section` + `document-section-title` + `document-prose` (three paragraphs) | `:12855–12885` | Three boundaries: clinical authority / IRB process / audit-trail capturing. HONEST-TODAY for authority + IRB (partner-clinician retains, per HDG packet lock); HONEST-FUTURE-TENSE for substrate trail (being built to maintain). Partner-possessive framing ("Your dietitians", "Your IRB", "Your program"). Structural fact register, not flattery. |
| **Section 6 — Contact** | `document-section` + `document-section-title` + `document-prose` + CTA button | `:12855–12885` + custom button styling | Voice.md §9 calendar-direct CTA pattern. "Arming your committee" frame (the champion's actual job: defending the choice internally). Quiet-competence register. CTA button to calendar (Calendly integration route is downstream Phase 3+). Button uses teal-700 primary fill (interactive commitment state per brand discipline). |

**Total primitives used: 7** (`document-shell`, `document-masthead`, `document-title`, `document-lead`, `document-section`, `document-section-title`, `document-prose`) **+ 1 composition choice** (bifurcation-table HTML table render).

**Pattern-Library-First verdict:** zero new primitives invented for primary structure. The bifurcation table is a composition-layer structural choice for this page's voice mechanic (making the bifurcation visible to the reader), not a new component that would earn a PL fragment. The table markup is semantic and self-contained; no future consumer has signaled need for a codified "bifurcation table primitive" yet. **PASS.**

---

## Bifurcation render choice (Option A — HTML table)

The draft flagged three candidate renders for the 9-step patient journey:

- **Option A (HTML table — SELECTED):** Two-column structure (today / design-intent) with two-line entries where bifurcation applies. Step # + step name + today half + design-intent half. Single-line entries (full-width today cell) where the step is fully HONEST-TODAY. **Rationale:** maximum bifurcation visibility; table semantics carry the structural intent; the reader sees at a glance what runs today vs. what's being built. **Most aligned with brief note:** *"Recommend the Copywriter literally adopts a two-column or two-line render in the section… so the bifurcation is visible to the reader, not glossed."*

- **Option B (per-step section):** Each step as H3 + paragraph body. More prose-like; loses the at-a-glance bifurcation visibility but reads as deeper content. Trade-off: heavier vertical scroll; visual hierarchy flatter than Option A.

- **Option C (per-step card):** Each step as a card with today/design-intent halves stacked vertically. Hybrid; bifurcation visible per card but reader must scan top-to-bottom per step. Medium visual weight.

**Composition chose Option A** because:
1. **Bifurcation is visible to the reader, not glossed.** The two-column table structure makes the today-vs-design-intent split a *structural fact*, not something the prose carries implicitly.
2. **Table semantics are honest.** The step-by-step structure is genuinely a data table (9 steps × 4 attributes per step), not a narrative forced into tabular shape.
3. **Matches the brief's design intent.** The brief's framing: *"Each step below shows what runs today alongside what the design intent extends to."* The table structure proves that intent structurally.
4. **Voice-mechanic load.** The bifurcation IS the page's load-bearing voice mechanic (per voice.md §2 + cap-honest-gate-ledger.md Hotspot 1). Making it structurally visible rather than prose-carried honors that load.

**Responsive behavior:** The table is full-width at all viewport sizes in v1 composition (no mobile collapse to card view). The 4-column structure is readable at desktop (52rem container); at narrow mobile (375px) the columns compress but remain legible (table font-size is 16px body-02, not reduced in composition; future polish could add responsive collapse on mobile, but the composition-layer goal is proof-of-concept).

---

## Brand fidelity check (Haven Visual Designer lens)

Per-section how the brand-canon applied.

### Color (Cena Color System v2 — sand canonical, warm-ground-cool-figure)

- **Page surface:** `--color-sand-50` (#f8f4ec) — Cena's warm-off-white ground. Pure white is not present anywhere on the page.
- **H1 (`document-title`):** `--color-sand-900` (#25211d) — warm-dark Lora authority. Per HVD canon (2026-05-28): display-register headings use sand-900, not teal-ink.
- **H2 (`document-section-title`):** `--color-sand-800` (#3f3934) — one step quieter than the H1, holding visual hierarchy through weight + color shift (not just size). Lora optical tightening: `-0.003em` letter-spacing.
- **Body (`document-prose`):** `--color-sand-700` (#5a544e) — reading-comfort body color. Three-step ladder (sand-900 → sand-800 → sand-700) for the visual hierarchy.
- **Table labels** (step #, "Today", "Design intent"):** `--color-sand-600` (#777069) — quiet metadata register; step numbers and caption labels read as structural furniture, not content.
- **Border (`document-masthead` bottom rule):** `--color-sand-200` (#cfcac2) — warm structural rule. Only structural rule on the page; carries the masthead-as-unit signal without saturation.
- **Table borders** (row dividers): `--color-sand-200` — same warm structural rule; the table's visual structure feels native to the page.
- **Teal:** Only in the CTA button (teal-700 fill for the calendar-direct interaction). Teal-700 is reserved for "user commitments that change state" per brand discipline — the form submission is the only interactive commitment on the page.

### Typography hierarchy (accumulation, not just size)

Per HVD principle *"at least two properties change per level"*:

| Level | Family | Size | Weight | Color | Measure | Letter-spacing |
|---|---|---|---|---|---|---|
| H1 | Lora | 27.65px (heading-01) | 500 | sand-900 | implicit (52rem container) | -0.005em |
| H2 | Lora | 23.04px (heading-02) | 500 | sand-800 | implicit (52rem container) | -0.003em |
| Lead (hero subhead) | Source Sans 3 | 19.2px (body-01) | 400 | sand-700 | 68ch | none |
| Body prose | Source Sans 3 | 16px (body-02) | 400 | sand-700 | 68ch | none |
| Table step # | Source Sans 3 | 16px (body-02) | 600 | sand-600 | implicit | none |
| Table step name | Source Sans 3 | 16px (body-02) | 600 | sand-900 | implicit | none |
| Table today/design-intent label | Source Sans 3 | 12px | 600 | sand-600 | implicit | 0.05em uppercase |

Four properties change between H1 → H2 (size + color + letter-spacing + visual weight via Lora rendering). Three change H2 → lead (family + size + color). Two change lead → body (size + letter-spacing [implicit removal]). Body → table metadata (weight + color + size shift to caption register). The hierarchy accumulates cleanly across all levels.

### Spacing philosophy (generous, exposes warm ground)

- **Outer padding:** `py-10 px-5` mobile → `py-14 px-8` desktop. Same as /about and /for-payers-investors.
- **Section rhythm:** `mt-12` between sections (48px) — generous; quiet rhythm.
- **Within sections:** `mb-4` after section title (16px) — title and prose feel as one unit.
- **Within prose:** `p + p { mt-4 }` (16px) — paragraph rhythm (applies to Sections 2, 3, 5).
- **Table row padding:** `padding: calc(var(--spacing) * 4) calc(var(--spacing) * 3)` (16px / 12px) — cell breathing room; table doesn't feel cramped.
- **CTA button margin:** `mt-6` above the button (24px) — space between the prose and the interactive element.

The warmth comes from the ground showing through the generous spacing. Tight spacing hides it; this composition is deliberately loose.

### Surface treatment

- **No cards, no panels, no decoration.** The page reads as quiet structural fact.
- **No background tint, no gradient, no hero image.** Minimal — only the masthead border-bottom provides visual structure.
- **No ambient blobs.** Per /about + /for-payers-investors discipline — marketing surfaces benefit from the quieter approach.

### "Grew, not built" diagnostic

The HVD essence test: *"if an artifact feels 'correct but cold,' the fix is more warm ground, more spatial generosity, or better integration — not more teal."*

The composition leans into all three positive moves: warm ground (sand-50, not pure white) + spatial generosity (mt-12 sections, 68ch measure, loose inter-paragraph spacing) + integration (Lora + Source Sans 3 + sand ladder all live in the system; nothing imported from elsewhere). Teal is minimal. Should pass the "grew not built" read.

---

## Typography spec

### Face stack

- **Display + section titles:** `'Lora', ui-serif, Georgia, 'Times New Roman', serif`. Lora weight 500 for H1 + H2.
- **Body + UI + table:** `'Source Sans 3', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif`. Regular weight 400; table labels use weight 600 for hierarchy.
- **Mono:** not used on this page.

Both display + body link from Google Fonts CDN per haven-ui canonical pattern.

### Modular scale (minor-third 1.2, verified)

- **heading-01:** 27.65px / 1.2 line-height (the H1)
- **heading-02:** 23.04px / 1.25 line-height (each section H2)
- **body-01:** 19.2px / 1.55 line-height — bumped to 1.55 in the lead for reading comfort
- **body-02:** 16px / 1.65 line-height — bumped to 1.65 in `.document-prose` for long-form prose

The vertical rhythm follows components.css's existing values. No new scale stops introduced.

### OpenType features enabled (body-wide)

- `"kern" 1` — kerning always on
- `"liga" 1` — standard ligatures (fi / fl / ffi / ffl)
- `"calt" 1` — contextual alternates
- `"ss03" 1` — Source Sans 3 stylistic set 03 (single-story `g`)

Same set mirrors haven-ui canonical config (`apps/patient/index.html`).

### Reading-comfort measure

- **Lead:** 68ch max-inline-size — same as /about and /for-payers-investors.
- **Body prose:** 68ch max-inline-size.
- **Table:** full container width (constrained by `52rem` section container).
- **Container:** 52rem max-width (`document-shell` canonical).

Measure stays in the "comfortable reading" 45–75ch band per typography-craft canon.

### Typographic correctness (pre-pass)

- ✅ **Curly quotes** — all instances use `&ldquo;` / `&rdquo;` and `&lsquo;` / `&rsquo;`.
- ✅ **Curly apostrophes** — *that's / they're / clinician's / don't / committee's* all use `&rsquo;`.
- ✅ **Em-dashes (—)** — all instances use `&mdash;`, e.g., *"The clinician decides; the system captures the trail the decision left behind — so the question…"*
- ✅ **No ellipses** — none in the copy.
- ✅ **No double-spaces** — single-spaced throughout.
- ✅ **Periods preserved:** Section titles carry periods per voice-mechanic discipline (not applicable to this page's titles; they don't use periods).

---

## Codification gaps surfaced

**None.** Every class used in the HTML exists in `components.css` and is indexed in `COMPONENT-INDEX.md`. The composition's structural choice was the bifurcation-table render (Option A), which is a composition-layer decision for this page's voice mechanic, not a new primitive that would earn codification.

**Observation:** If a second page (homepage or future track-landing) needs a data-table render for "today vs. future" bifurcation, the table structure here could become a `bifurcation-table` PL fragment. Per generative-determinism 3-use rule: not yet triggered (first instance). No action needed.

---

## Public-shell verdict (deferred codification question from Aaron-gate)

The composition uses `document-shell` (the SoP register) as the public-site's primitive base for the third page in the IA sequence. Evidence from three pages:

1. **`/about`** — 5 sections, single paragraph per section. `document-shell` holds cleanly.
2. **`/for-payers-investors`** — 5 sections, multi-paragraph + value-list + form-scaffold. `document-shell` holds cleanly.
3. **`/for-providers-partners`** — 6 sections, multi-paragraph + bifurcation-table + CTA. `document-shell` holds cleanly.

**The register is durable across all three pages**, despite increasing structural complexity. The generous mt-12 rhythm between sections accommodates variation in internal richness (single paragraphs → multi-paragraph blocks → bulleted lists → data tables → forms).

**Public-shell verdict:** The document-district register has proven itself across three distinct pages with three distinct structural needs. The composition does NOT surface evidence that a `public-shell` sibling is necessary — `document-shell` scales well to all three pages' needs.

**Deferred decision:** If the homepage composition (fourth page) surfaces a genuinely different structural need (e.g., a hero-with-background + grid-layout section), then evidence would exist for a `public-shell` sibling codification. Until then, `document-shell` stands as the public-site primitive base.

---

## Composition open questions

### Q1 — Table bifurcation at mobile viewport: does it remain readable?

The 4-column table structure (# / step name / today / design-intent) compresses at narrow viewports (375px) but remains legible in composition v1 (no responsive collapse to card view). **Verification needed:** Aaron-gate confirms visual readability at mobile, or whether a polish pass should add a card-view collapse for mobile widths.

### Q2 — CTA button as calendar-direct (no form): does it read as sufficient?

The button links directly to calendar (no form pre-qualification in composition v1). Per voice.md §9, the calendar-direct pattern is champion-doored (no form friction). **Confirmation needed:** Aaron-gate confirms this approach works for the providers/partners audience, or whether a light form scaffold (like /for-payers-investors) should precede the calendar step.

### Q3 — 9-step table: does the bifurcation discipline land clearly?

The "Today" and "Design intent" labels on each row are the visual cues for the bifurcation. Single-line HONEST-TODAY steps render with today cell only; two-line HONEST-FUTURE-TENSE steps render both cells with labels. **My read:** the bifurcation is structurally visible without needing additional color, shading, or visual treatment. **Verification:** visual review at desktop + mobile to confirm the bifurcation reads as intended.

---

## What the composition validates

Per Phase 2 IA v2's framing of /for-providers-partners as the third Phase 3 composition:

- ✅ **Pattern-Library-First holds across all three pages.** All 7 primary primitives exist in haven-ui's PL; zero new primitives invented (bifurcation table is a composition-layer structural choice, not a new component).
- ✅ **The document-district register scales to the richest structural complexity so far.** From /about's single paragraphs to /for-payers-investors' bulleted lists to this page's 9-step data table — the register accommodates all without modification. The primitive set is sufficient.
- ✅ **Brand canon + typography craft transfer cleanly to all three pages.** Sand color ladder + Lora-commands + Source-Sans-works + warm-ground discipline + reading-comfort measure all hold across all three public-site surfaces.
- ✅ **Cap-Honest discipline survives composition on the highest-pressure page.** The draft's honest-today / honest-future-tense calibration on every 9-step entry (per cap-honest-gate-ledger.md Hotspot 1) lands verbatim in the composed HTML. The "Design intent:" label on each bifurcation cell signals the tense shift as deliberate, not as evasion. Composition did not relitigate any Cap-Honest choices.
- ✅ **Public-shell codification remains deferred.** Three pages of evidence do not surface need for a distinct public-shell primitive. `document-shell` holds as the canonical base for the public site.

---

## Aaron-gate resolutions 2026-06-11

### Inherited from brief (Aaron-gate batch 1 + 2)

- ✅ **Step 9 (re-assessment) tense — LOCKED to Cena-substrate-triggered HONEST-FUTURE-TENSE.** Two-line bifurcation: *Today: partner clinician re-runs at protocol cadence; Design intent: Cena is being built to surface re-assessment triggers from adherence and outcome signals.* Composition draft against this.
- ✅ **Naming "Athena Health" — LOCKED to functional framing.** Functional phrasing ("the partner's EHR") throughout; vendor name not called out. Strict-superset upgrade preserved as future option.
- ⏳ **Step 7 (adherence check-ins) live status — DEFERRED pending Andrey verification.** Composition defaults to HONEST-FUTURE-TENSE (two-line bifurcation). If Andrey confirms live status, the *"today"* line names the surface as running (functional framing only — no product-handle names).

### Composition-layer decisions (Haven-UI DS lead picks)

- ✅ **Bifurcation render — Option A (HTML table).** Maximum bifurcation visibility; two-column structure makes the today-vs-design-intent split a structural fact, not glossed. Table semantics are honest for a step-by-step data structure. Matches brief intent: *"Recommend the Copywriter literally adopts a two-column or two-line render in the section… so the bifurcation is visible to the reader, not glossed."*
- ✅ **No ambient blobs.** Quiet structural surface; no decoration. Matches /about + /for-payers-investors discipline.
- ✅ **Letter-spacing micro-adjusts held as composition taste.** `-0.005em` on document-title + `-0.003em` on document-section-title, same as prior pages. Promotion to Haven canon deferred until future composition corroborates.
- ✅ **CTA button as calendar-direct.** Voice.md §9 pattern; champion-doored, no form friction. Aaron-gate confirms or recommends form scaffold.

---

## Aaron-gate composition resolutions 2026-06-11

Two real composition open questions resolved at Composition picks (Q2 redundant — calendar-direct CTA was already locked in batch 1).

- ✅ **Q1 (mobile bifurcation table responsiveness) — LOCKED to ship-as-is for v1.** Table compresses at 375px but stays legible. Mobile responsive treatment (stacked cards at narrow widths) is Phase 3+ polish. Pre-revenue site doesn't need mobile-perfect launch; warm-intro sales conversations are desktop-led.
- ✅ **Q3 (bifurcation column labels + color hierarchy) — LOCKED to column labels only.** "Today" and "Design intent" as table column headers; sand-900 H1 + sand-700 body for both columns. Bifurcation discipline carried by tense + content, not by color. Quiet-Comp posture: structure does the work.

---

## What's next

1. **Homepage composition** (track-selector + category framing; cross-track register). Final page in Phase 3 launch sequence.
2. **Public-shell primitive codification** — defer until homepage evidence exists. Three pages are sufficient to validate `document-shell` holds; a fourth page with genuinely different needs would surface evidence for sibling codification per generative-determinism 3-use rule.

---

## Sign-off

- [x] Aaron-gate composition pass (Q1 + Q3 locked 2026-06-11; bifurcation table as-is, column labels only)
- [x] Phase 3 pipeline-validation gate (composition validates document-district register + Cap-Honest discipline across all three track-landings)
