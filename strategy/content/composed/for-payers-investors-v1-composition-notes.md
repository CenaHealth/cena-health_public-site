# /for-payers-investors — Composition v1 — Notes

**Surface:** `/for-payers-investors` · **Source draft:** [drafts/for-payers-investors-draft-v1.md](../drafts/for-payers-investors-draft-v1.md) · **Source brief:** [for-payers-investors.md](../for-payers-investors.md) · **Output:** [composed/for-payers-investors-v1.html](for-payers-investors-v1.html) · **Status:** Composition v1 — awaiting Aaron-gate composition pass · **Date:** 2026-06-11 · **Composer:** Haven-UI Design System (absorbing Haven Visual Designer + Typography Craft lenses internally)

Anchors: [Phase 2 IA v2 §5 For payers+investors block](../../phase-2-information-architecture.md) · [voice.md §1+§2](../../../brand/voice.md) · [haven-primitive-codification.md](../../../../../.claude/rules/haven-primitive-codification.md) · [haven-ui CLAUDE.md Pattern-Library-First Rule](../../../../haven-ui/CLAUDE.md) · [Lab/cena-health-brand/specs/haven-directive-styling.md](../../../../cena-health-brand/specs/haven-directive-styling.md) · [cap-honest-gate-ledger.md](../cap-honest-gate-ledger.md) Hotspot 2

---

## At a glance

- **Output type:** Self-contained HTML file (~245 lines body + ~310 lines `<style>`). Renders directly in a browser; no build step.
- **PL primitives used:** 7 (all from haven-ui's **Document District**) + 2 composition-layer extensions (value-list styling, form-scaffold styling).
- **Codification gaps surfaced:** 1 — the **strong-lead-bullet value-list** pattern (Section 2) is a candidate for codification on second consumer; currently composition-only per generative-determinism 3-use rule.
- **Document-shell register holds.** The document-district family scales cleanly from /about's single-paragraph-per-section structure to /for-payers-investors' richer structural needs: multi-paragraph hero, bulleted value-list, multi-paragraph brownfield section, form scaffold. The register proves durable across both pages; public-shell sibling codification defers until homepage composition surfaces evidence for a third use.

---

## PL primitive mapping (per-section)

| Section | Primitive(s) | components.css source | Rationale |
|---|---|---|---|
| **Outer container** | `document-shell` | `:12801–12806` | Single-column, 52rem measure, `mx-auto`. Public-site pages read as documents, not app screens — matches the brief's "structural, declarative, quiet" register exactly. |
| **Section 1 — Hero** | `document-masthead` + `document-title` + `document-lead` + `document-prose` | `:12809–12885` | Masthead primitive carries the sand-200 bottom border anchoring the H1 + lead as one bound unit. Section 1 is richer than /about's hero: H1 + 3-paragraph problem-statement narrative + closing line. `document-title` is Lora 27.65px medium (heading-01 register). Lead + prose use the same measure (68ch) but split the initial orientation (lead = larger body-01 with looser leading; opening paragraphs = body-02); the three-paragraph structure lets the problem-statement narrative breathe. All honest-future-tense per Cap-Honest. |
| **Section 2 — Value** | `document-section` + `document-section-title` + `document-prose` + **value-list** (composition) | `:12855–12885` | Section primitive owns the mt-12 rhythm. Section-title is Lora 23.04px medium (heading-02). Prose intro paragraph + bulleted value-list. **The value-list is a composition-layer extension:** `<ul>` with strong-lead bullets (each item opens with strong text naming the primitive, followed by its vision framing). Candidate for codification on second consumer per generative-determinism 3-use rule — if /for-providers-partners or homepage uses the same strong-lead-bullet pattern, promotion to PL + components.css lands then. v1: composition-only styling. |
| **Section 3 — Brownfield** | `document-section` + `document-section-title` + `document-prose` (multiple) | `:12855–12885` | Section primitive owns the mt-12 rhythm between sections. Four paragraphs total: frame-setter (four canonical shapes) + recognition statement (HONEST-TODAY) + consolidation intent (HONEST-FUTURE-TENSE) + "what stays yours" boundary (HONEST-TODAY). The bifurcation discipline (Cap-Honest Hotspot 2) is **visible in paragraph structure, not in visual markup** — per brief composition-note: "typographic separation between recognition and intent paragraphs is left to the page implementer." Composition holds it as two visually-equal prose paragraphs (indices 2 + 3) so the page implementer can introduce subtle visual separation (lighter color, italic, left-rule, etc.) without changing the HTML. |
| **Section 4 — Build** | `document-section` + `document-section-title` + `document-prose` | same as above | Three paragraphs: pre-seed + one-pilot + category-ambition (tight but dense, every sentence earns its place per draft notes). The honest-without-defensive register holds; pre-seed framing is HONEST-TODAY; agents-first thesis named structurally as the company operating posture. |
| **Section 5 — Contact** | `document-section` + `document-section-title` + `document-prose` + **form-scaffold** (composition) | `:12855–12885` | Closing CTA + form. **Form-scaffold is a composition-layer extension:** light 4-field structure (name / role / organization / problem-scope). v1 is a static HTML scaffold — actual Calendly integration + form backend wiring is downstream Phase 3+ work. Styling: focus states with teal outline, submit button uses teal-700 primary fill. |

**Total primitives used: 7** (`document-shell`, `document-masthead`, `document-title`, `document-lead`, `document-section`, `document-section-title`, `document-prose`) **+ 2 composition additions** (value-list styling, form-scaffold styling).

**Pattern-Library-First verdict:** zero primitives invented for primary structure; the value-list and form-scaffold are composition-layer styling extensions that are candidates for promotion when a second consumer surfaces (per generative-determinism 3-use rule). **PASS.**

---

## Brand fidelity check (Haven Visual Designer lens)

Per-section how the brand-canon applied + any taste calls.

### Color (Cena Color System v2 — sand canonical, warm-ground-cool-figure)

- **Page surface:** `--color-sand-50` (#f8f4ec) — Cena's warm-off-white ground. Pure white is the explicit anti-pattern; pure white is not present anywhere on the page.
- **H1 (`document-title`):** `--color-sand-900` (#25211d) — warm-dark Lora authority, not teal-ink. Per HVD canon: H1 + H2 read as display-register; teal-ink is too cold for display on warm serif typeface; sand-900 carries the warmth. Lora at this register requires optical tightening: `-0.005em` letter-spacing applied (same as /about).
- **H2 (`document-section-title`):** `--color-sand-800` (#3f3934) — one step quieter than the H1, holding the visual hierarchy through weight + color shift (not just size). Optical tightening: `-0.003em` letter-spacing (same as /about).
- **Body (`document-prose`, `document-lead`):** `--color-sand-700` (#5a544e) — reading-comfort body color. Three-step ladder (sand-900 → sand-800 → sand-700) for the visual hierarchy.
- **Border (`document-masthead` bottom rule):** `--color-sand-200` (#cfcac2) — warm structural rule, not cool gray. Only structural rule on the page; carries the masthead-as-unit signal without saturation.
- **Form elements:** borders use `--color-border-default` (sand-300); focus outline uses teal-700 with soft shadow for accessibility + warmth; submit button uses teal-700 primary fill (interactive element per brand discipline).
- **Teal:** intentionally minimal (only in form focus states + submit button). Teal-700 is reserved for "user commitments that change state" per Cena brand canon — form submission is the only interactive commitment on the page.

### Typography hierarchy (accumulation, not just size)

Per HVD principle *"at least two properties change per level: font family + size, weight + color, color + spacing"*:

| Level | Family | Size | Weight | Color | Measure | Letter-spacing |
|---|---|---|---|---|---|---|
| H1 | Lora | 27.65px (heading-01) | 500 | sand-900 | implicit (52rem container) | -0.005em |
| H2 | Lora | 23.04px (heading-02) | 500 | sand-800 | implicit (52rem container) | -0.003em |
| Lead (hero subhead) | Source Sans 3 | 19.2px (body-01) | 400 | sand-700 | 68ch | none |
| Body prose | Source Sans 3 | 16px (body-02) | 400 | sand-700 | 68ch | none |
| Value-list item strong | Source Sans 3 | 16px (body-02) | 600 | sand-900 | 68ch | none |

Four properties change between H1 → H2 (size + color + letter-spacing + visual weight via Lora rendering). Three change H2 → lead (family + size + color). Two change lead → body (size + letter-spacing [implicit removal]). Two change body → value-list strong (weight + color). The hierarchy accumulates cleanly across all levels; no level is single-property.

### Spacing philosophy (generous, exposes warm ground)

- **Outer padding:** `py-10 px-5` mobile (40px / 20px) → `py-14 px-8` desktop (56px / 32px). Same as /about.
- **Section rhythm:** `mt-12` between sections (48px) — generous; quiet rhythm that exposes warm ground.
- **Within sections:** `mb-4` after section title (16px) — title and prose feel as one unit.
- **Within prose:** `p + p { mt-4 }` (16px) — paragraph rhythm. Section 1 (hero) uses this to separate the three problem-statement paragraphs; Section 3 (brownfield) uses this to separate the four paragraphs (recognition + intent + boundary).
- **Value-list spacing:** `li { margin-bottom: calc(var(--spacing) * 3) }` (12px) — tighter than paragraph rhythm to keep the four value primitives as a cohesive unit, less separation between item-to-item than between major sections.
- **Form spacing:** `gap: calc(var(--spacing) * 4)` (16px) between fields — matches the prose paragraph rhythm.

The warmth comes from the ground showing through the generous spacing. Tight spacing hides it; this composition is deliberately loose, matching /about's spatial generosity.

### Surface treatment

- **No cards, no panels, no decoration.** The page reads as quiet structural fact. Surface treatment is the page's restraint.
- **No background tint, no gradient, no hero image.** The composition is deliberately minimal — only the masthead border-bottom provides visual structure, same as /about.
- **No ambient blobs.** The haven-ui app shells (cc-*, patient) carry warm ambient gradient blobs; this public-site surface omits them per the /about composition's "no ambient blobs" discipline. Marketing surfaces benefit from the quieter approach; app shells use them for warmth context.

### "Grew, not built" diagnostic

The HVD essence test: *"if an artifact feels 'correct but cold,' the fix is more warm ground, more spatial generosity, or better integration — not more teal."*

The composition leans into all three positive moves: warm ground (sand-50, not pure white) + spatial generosity (mt-12 sections, 68ch measure, loose inter-paragraph spacing) + integration (Lora + Source Sans 3 + sand ladder all live in the system; nothing imported from elsewhere). Teal is deliberately minimal. Should pass the "grew not built" read.

---

## Typography spec

### Face stack

- **Display + section titles:** `'Lora', ui-serif, Georgia, 'Times New Roman', serif` (font-serif token). Lora weight 500 for H1 + H2.
- **Body + UI + form labels:** `'Source Sans 3', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif` (font-sans token). Regular weight 400; form labels use weight 500 for hierarchy.
- **Mono:** not used on this page.

Both display + body link from Google Fonts CDN with `<link rel="preconnect">` per haven-ui canonical pattern.

### Modular scale (minor-third 1.2, verified)

- **heading-01:** 27.65px / 1.2 line-height (the H1, "What healthcare loses...")
- **heading-02:** 23.04px / 1.25 line-height (each section H2)
- **body-01:** 19.2px / 1.55 line-height — bumped to 1.55 in the lead for reading comfort (hero subhead requires extra breathing room for the three-paragraph narrative)
- **body-02:** 16px / 1.65 line-height — bumped to 1.65 in `.document-prose` for reading-comfort on long-form prose

The vertical rhythm follows components.css's existing values. No new scale stops introduced.

### OpenType features enabled (body-wide)

- `"kern" 1` — kerning always on (Lora and Source Sans 3 both ship rich kerning tables)
- `"liga" 1` — standard ligatures (fi / fl / ffi / ffl)
- `"calt" 1` — contextual alternates (Source Sans 3 uses this for some letter transitions)
- `"ss03" 1` — Source Sans 3 stylistic set 03 (single-story `g`) — matches haven-ui canonical config

The set mirrors `apps/patient/index.html` per Lab/haven-ui/CLAUDE.md "Brand fonts per app" canon.

### Reading-comfort measure

- **Lead:** 68ch max-inline-size — same as /about.
- **Body prose:** 68ch max-inline-size — same as /about.
- **Value-list items:** 68ch max-inline-size (inherit from parent prose).
- **Form labels + fields:** full container width, constrained by section container.
- **Section titles + H1:** no max-inline-size constraint — they're short enough that wrapping won't happen.
- **Container:** 52rem max-width (`document-shell` canonical) — at typical body-02 sizing this lands ~75ch worst-case but the 68ch on prose elements binds first.

Measure stays in the "comfortable reading" 45–75ch band per typography-craft canon.

### Typographic correctness (pre-pass before Typography Review gates)

- ✅ **Curly quotes** — all instances use `&ldquo;` / `&rdquo;` and `&lsquo;` / `&rsquo;`, not straight quotes.
- ✅ **Curly apostrophes** — *that's / it's / you've / we're / aren't / what's / don't / Cena's / you're / don't* all use `&rsquo;`, not straight apostrophes.
- ✅ **Em-dashes (—)** — all instances use `&mdash;`, e.g., *"sign of clinical change that would normally surface at the next appointment — now six months out"* and *"a Section 1115 Medicaid demonstration waiver"* (Medicaid is a proper noun; the waiver is the structure).
- ✅ **No ellipses** — none in the copy.
- ✅ **No double-spaces** — single-spaced throughout.
- ✅ **Periods on declaratives preserved:** The H1 *"What healthcare loses when the gap between visits stays opaque."* carries the period per voice-mechanic discipline.

### Numeric figures

- No numeric content on this page. `tnum` would not earn its keep; not enabled.

---

## Codification gaps surfaced

**1 gap identified (not blocking; candidate for future promotion per generative-determinism):**

### Strong-lead-bullet value-list pattern (Section 2)

**What it is:** An unordered list where each item opens with bolded text (the primitive name) followed by its vision-framing text. Example:

```html
<li><strong>Between-visit intelligence.</strong> The care team sees adherence patterns...</li>
```

**Why it's a candidate:** The four-bullet structure with strong-lead pattern is a likely candidate to recur in other page contexts (homepage value callouts, /for-providers-partners section, etc.). It's a composition-level styling decision today; if a second consumer uses the same shape, promotion to PL (as a `document-list-strong-lead` or similar) + components.css would be appropriate.

**Current state:** Pure composition-layer styling (inline `<style>` block in this HTML). No PL fragment, no components.css class, not in COMPONENT-INDEX.md. **The 3-use rule per generative-determinism.md applies:** codify on the second consumer, not speculatively.

**Promotion readiness:** All pieces are in place to codify this cleanly (CSS exists; HTML structure is semantic; no complex interactions). When a second consumer surfaces, promotion is mechanical: extract `.value-list` + `.value-list li` + `.value-list strong` styling to PL fragment + components.css row + COMPONENT-INDEX row. No blockers.

---

## Composition open questions

### Q1 — Document-shell register on three-section brownfield: does it hold?

The Section 3 brownfield-consolidation section spans four paragraphs with the Cap-Honest bifurcation visible in paragraph structure (recognition statement + consolidation intent split across two paragraphs). **My read:** the document-prose rhythm (mt-4 between paragraphs) holds the bifurcation clearly without needing visual markup. The paragraph structure IS the bifurcation's visibility. **Confirmation needed:** does the visual split read cleanly on mobile (375px) and desktop (wider)? The composition uses semantic structure; visual emphasis (if any) is downstream.

### Q2 — Form-scaffold as composition-only, no backend: does it read as a real form?

The form is a static HTML scaffold with no backend wiring or Calendly integration — both are downstream Phase 3+ work. The form visually signals "we're expecting structured input" and has a real focus/submit interaction story. **My read:** it reads as a genuine form, not a placeholder. **Confirmation needed:** Aaron-gate confirms whether this composition-first approach works, or whether the contact section should shift to a simpler text-only CTA pending backend wiring.

### Q3 — Five sections inside document-shell: does the container strain?

The document-shell was designed for 5 sections on /about (each 1 paragraph); /for-payers-investors uses the same shell for 5 sections with more variation in richness (hero multi-paragraph, value-list, brownfield 4-paragraph, form). **My read:** the register holds cleanly. The generous mt-12 rhythm between sections accommodates the richer internal structure. **Verification:** visual review at mobile + desktop to confirm no awkward overflow or spacing interactions.

---

## What the composition validates

Per Phase 2 IA v2's framing of /for-payers-investors as the second Phase 3 composition (following /about):

- ✅ **Pattern-Library-First holds at composition scale.** All 7 primary primitives exist in haven-ui's PL; zero invented at the composition layer (value-list + form-scaffold are composition-layer styling, not new primitives, and are candidates for codification on second use).
- ✅ **The document-district register scales to richer structural needs.** Single-paragraph-per-section (/about) → multi-paragraph sections, bulleted lists, forms (this page). The register accommodates without modification; the primitive set is sufficient.
- ✅ **Brand canon transfers cleanly to a CI-forward messaging page.** Sand color ladder + Lora-commands + Source-Sans-works + warm-ground discipline all hold on the payers/investors surface exactly as cleanly as on the /about surface.
- ✅ **Typography craft and Cap-Honest discipline survive composition.** The draft's honest-future-tense calibration on every Cena-as-subject sentence (per Cap-Honest gate ledger Hotspot 2) lands verbatim in the composed HTML — composition did not relitigate any copy choices.
- ⚠️ **Open question:** Does the document-shell register suffice for the homepage? The homepage will add a cross-track selector + category framing at the top, which may require a different shell structure (see below).

**Surfaced concern (not a blocker):** The homepage + /for-providers-partners track landing will have substantially different structural needs (hero might be different topology, track-selector chrome, different CTA strategy). **Expected next-pipeline-pass work:** surface evidence from homepage + /for-providers-partners compositions to determine whether a `public-shell` or `marketing-shell` primitive sibling of `document-shell` is warranted. Per generative-determinism's 3-use rule, do NOT codify speculatively — let the third page composition surface the actual shape, then promote.

---

## Aaron-gate resolutions 2026-06-11

### Inherited from brief (Aaron-gate batch 1 + 2, form-craft resolution deferred)

- ✅ **Hero direction** — inherited from Homepage Direction A (category-claim-first, per Aaron's confirmation on cross-landing cohesion).
- ✅ **Where-Cena-is section** — locked to named (Vanessa as CEO) per /about naming, cross-page cohesion holds.
- ✅ **Section 3 (brownfield) length** — locked to 400–500 words per launch shape (450w in final composition).
- **Contact CTA** — form-gated calendar (voice owner rec) vs. calendar-direct (warmer). Aaron confirms or overrides at Aaron-gate composition pass.

### Composition-layer decisions (Haven-UI DS lead picks)

- ✅ **No ambient blobs.** Quiet structural surface; no decoration. Matches /about's discipline.
- ✅ **Letter-spacing micro-adjusts held as composition taste.** `-0.005em` on H1, `-0.003em` on H2, same as /about. Promotion to Haven canon deferred until a future composition corroborates.
- ✅ **Value-list as composition-layer styling.** Strong-lead-bullet pattern is composition-only; candidate for codification on second consumer per generative-determinism 3-use rule.
- ✅ **Form-scaffold as composition-only scaffold.** Static HTML; Calendly integration + backend wiring downstream. Aaron-gate confirms whether this approach works.

---

## Aaron-gate resolutions 2026-06-11

Two composition open questions resolved at Composition picks.

- ✅ **Form scaffold — LOCKED to ship visible static form.** 4-field form (name / role / organization / one-sentence problem scope) + submit button rendered in HTML. Backend wiring + Calendly integration deferred to Phase 3+. Aaron sees rendered form shape in preview.
- ✅ **Brownfield section bifurcation — LOCKED to structural paragraph breaks only.** HONEST-TODAY recognition + HONEST-FUTURE-TENSE intent + HONEST-TODAY boundaries land as four discrete paragraphs; bifurcation visible in prose itself. Quiet-Comp: structure carries the meaning. Visual emphasis treatments (italic, lighter color, left-rule) not added.

**Composition validates the document-district register at a second page** (richer structural shape than /about). The public-shell primitive sibling remains deferred per generative-determinism 3-use rule — needs evidence from a third composition (homepage or /for-providers-partners).

---

## What's next

1. **Continue per IA v2 §5 sequence:** `/for-providers-partners` draft + composition next (Cap-Honest pressure HIGH — 9-step UConn pilot bifurcation render is the load-bearing voice mechanic; HDG sign-offs inline; item #1 outstanding-partner-input may surface UConn-naming upgrade).
2. **Homepage composition** (track-selector + category framing; cross-track register).
3. **Public-shell primitive codification** — defer until track-landings + homepage compose; surface evidence first, then promote per generative-determinism 3-use rule.

---

## Sign-off

- [x] Aaron-gate composition pass (form-scaffold + brownfield visual separation locked 2026-06-11)
- [x] Phase 3 pipeline-validation gate (composition validates document-district register holds at two pages; ready for third page evidence)
