# Public site v2 — Design spec

**Surface:** 4-page public site composition iteration · **Status:** v2 design pass · **Date:** 2026-06-12 · **Designers (co-working):** Haven Visual Designer (taste lead) + Haven-UI Design System (PL composition lens)

**Anchors:** [v1 composed HTMLs + composition notes](.) · [drafts](../drafts/) · [voice.md](../../../brand/voice.md) · [Phase 2 IA v2](../../phase-2-information-architecture.md) · [Cap-Honest gate ledger](../../cap-honest-gate-ledger.md) · [haven-ui COMPONENT-INDEX](../../../../haven-ui/packages/design-system/pattern-library/COMPONENT-INDEX.md) · [haven-primitive-codification.md](../../../../../.claude/rules/haven-primitive-codification.md) · [generative-determinism.md](../../../../../.claude/rules/generative-determinism.md) · [feedback_visual_design_workflow memory]

---

## 1. Diagnosis — why v1 reads as boring

The v1 composition is not wrong. Every primitive is canonically applied; every Cap-Honest verdict is preserved; the haven Document District register reads cleanly. The pages render quietly, in brand, defensibly.

They also read flat. Four observations name the failure mode:

- **One shape, four times.** All four pages open with the same structural beat — `document-masthead` (H1 + lead) above a `document-section`-stack of prose blocks. The hero of `/about` and the hero of `/for-providers-partners` are structurally identical: same masthead frame, same Lora 27.65px title, same body-01 lead one line below it. A visitor moving between pages has nothing to feel except *"another Cena document, similar to the last one."* Per-page identity has not been authored.
- **No typographic dynamics inside the body.** Within each page, the only typographic register-shifts are H1 → H2 → body. There is no eyebrow, no subsection title, no pull-quote, no compressed-measure aside, no left-rule annotation. The 16px body prose runs straight through 200 to 1,000 words at one register. The 68ch measure is set once and never broken. The eye has nothing to grab.
- **The 52rem column is the entire page.** Every section is bounded by the same outer container. No section opens up to wider measure for a structural display element; no section narrows to a 45ch reflective inset. Spatial composition is a single rhythm: 48px gap between sections, every section the same width.
- **No surface differentiation across audiences.** The homepage (Job 1: exist + route) and `/for-providers-partners` (Job 2: show a 9-step bifurcation table) live on the same outer shell. The structural-look at first glance is the same. The track-selector cards on the homepage and the bifurcation table on /for-providers-partners are both *visible*, but neither one carries the *page's identity at a structural-look level* before copy is read.

The fix is not decoration. Per [feedback_visual_design_workflow] memory + Cena brand canon: AI composition fails for restraint-defined brands because models trained on maximalism overshoot. Visual interest emerges from **structural-typographic-spatial choices** the v1 didn't reach for, not from adding chrome.

What v2 does:

- Opens each page with a **different structural beat** — eyebrow + H1 (homepage); eyebrow + H1 + lead-prose-stack (P+I); eyebrow + H1 + lead + lead-tagline (P+P); H1 + structural compression with no lead (about).
- Authors **per-page identity through measure + rhythm** — homepage has wider hero room to breathe; P+I uses two-column composition in the brownfield section; P+P breaks out to wider measure for the bifurcation table; /about runs tighter and quieter than the others.
- Reaches for **the haven primitives v1 missed** — `document-eyebrow` for uppercase sand-600 section-introducing labels, `document-subsection-title` for the brand's quiet sub-grouping register, structural `aside` treatment for sidebar-density commentary on P+I, left-rule annotations sparingly to mark structural pivots.
- Adds the **shared site shell** (top nav + footer) that gives the visitor a felt sense of moving inside a site, not opening four standalone documents.

The brand canon holds. No color additions, no decoration, no imagery. Visual interest comes from typographic variation, spatial rhythm, structural composition, and per-page identity through structural-only choices.

---

## 2. The cross-page story

The 4 pages tell one story across 4 surfaces. The visitor lands somewhere; they read; they move to another surface; the next surface tells them something the first one didn't.

The story arc, structurally:

1. **Homepage — recognition.** "There is a category. It is named. There are two doors. Which one are you?" The visitor sees the category claim, recognizes which audience they are, picks a door.
2. **/for-payers-investors — the case for the category.** "Healthcare is losing something measurable. Here is what we're building to close it. We respect what you've already built." The visitor reads the value frame, the brownfield section calms the displacement fear, the team frame anchors credibility, the contact opens.
3. **/for-providers-partners — proof through structure.** "Here is what your program looks like running on Cena. Here is the honest bifurcation: what we handle today, what we're building. Your clinical authority stays yours." The visitor reads the model, sees the 9-step bifurcation table as the page's structural payoff, reads the clinical-authority defense, contacts.
4. **/about — the quiet underwrite.** "We are three people, pre-seed, one pilot in. The thesis is agents-first. Partner clinicians retain clinical authority. Here is what we are building." The visitor confirms the team behind the substrate is small and serious. No CTA; the page is footer-only.

What each page's first 5 seconds communicates **at the structural-look level**, before copy is read:

- **Homepage** — a wide, generous, almost-empty surface with a serif title at top, two visible doors below, and air. The page reads as *intentionally not asking for more than this read*. Architectural calm.
- **/for-payers-investors** — a denser, more substantive page. The hero is a 3-paragraph prose stack (not a tagline) signalling "this surface carries argument, not just orientation." The brownfield section has structural compression (two-column) signalling "we are organizing recognition + assurance side-by-side."
- **/for-providers-partners** — visible structural payoff. The bifurcation table dominates the middle of the page; everything else orients to it. The page reads as *"we have built the structure that lets you see the honest state."*
- **/about** — markedly smaller, quieter, narrower than the others. The hero is the page's largest visual moment and it is restrained. The page closes faster. Reads as *"we are not trying to convince you on this surface; we are simply naming what is."*

How navigation carries the story:

- **The top nav is the felt continuity.** Same nav on all 4 pages; the visitor sees they are inside a small structured site, not browsing standalone files.
- **The current page is named in the nav** — current-page sand-900 + underline, others sand-700. Visitor always knows where they are.
- **The footer carries the cross-pointer** — "about" + named-contact link + Cena mark — so any page can route to /about (which is footer-only per IA) and any page can route to contact even when contact CTA isn't the page's primary CTA.
- **Inline links connect the pages** — homepage track-cards link to P+I and P+P; the about-scent paragraph on the homepage links to /about; the bifurcation framing on /for-providers-partners is implicitly recognisable to a reader who came from the homepage's "for providers + partners" framing.

---

## 3. Per-page visual character

Each page has a distinct visual identity. Same brand. Same primitives. Different structural composition.

### 3.1 Homepage — *the recognition surface*

**Identity:** Wide, generous, deliberately under-filled. Reads as architectural calm — a small set of structural moves, well-spaced, no scrolling expected for a desktop visitor to see the whole point.

**Hero shape:** `document-eyebrow` + `document-title` + spare `document-lead`. The eyebrow ("Cena Health · Clinical Intelligence Infrastructure") opens the page with a quiet uppercase sand-600 register-setting label *before* the H1. The H1 sits below it with extra space-after, weighted by the air around it rather than chrome. The lead is one sentence.

**Per-section variety:**

- **Hero** — outer measure 48rem (narrower than the v1 52rem to push the title to the foreground); space above is generous (mt-16 on desktop) so the eyebrow + H1 + lead become the visitor's first focus.
- **Problem section** — single short paragraph at the 60ch measure (tighter than 68ch); reads as a compressed observational fact. Same `document-prose` primitive, narrower measure.
- **Track selector** — the page's structural moment. Two cards in symmetric grid; each card carries an eyebrow ("FOR PAYERS + INVESTORS") + a Lora 600 16px short title + framing sentence + arrow link. **The cards step OUT of the 48rem content column to a wider 56rem container** — they breathe sideways into more horizontal room than the prose above them. This is the structural lift v1 lacked: the track-selector is the page's primary CTA, so it earns more horizontal room than running prose. (Pulled back to 48rem on tablet; stacks on mobile.)
- **About scent** — one paragraph at body measure; inline "About →" link.
- **Contact** — short one-paragraph framing; calendar + direct-contact link.

**Spacing rhythm:** Generous from the start — the hero gets visible top-room; gap between sections is mt-16 instead of v1's mt-12; the track-selector cards get vertical-air both before and after to mark them as the page's structural payoff.

**Type registers used:**

- `document-eyebrow` (NEW vs v1) — uppercase Source Sans 3, sand-600, 12px, letter-spacing 0.08em, weight 600
- `document-title` — Lora 27.65px, sand-900, weight 500
- `document-lead` — Source Sans 3 19.2px, sand-700, weight 400, measure 60ch (tighter than v1's 68ch)
- `document-prose` — body
- Track-card eyebrow — Source Sans 3 11px, uppercase, sand-600, letter-spacing 0.1em
- Track-card title — Lora 16px, sand-900, weight 600
- Track-card framing — Source Sans 3 16px, sand-700

### 3.2 /for-payers-investors — *the value-frame document*

**Identity:** A denser, more substantive surface than the homepage. Reads as *"this carries argument."* The hero is multi-paragraph; the page has structural depth.

**Hero shape:** `document-eyebrow` ("For payers + investors") + `document-title` + a 3-paragraph `document-lead`-style prose stack. The 3-paragraph hero IS the page's structural lift: the v1 hero put the same content into a stacked prose-in-the-lead-slot pattern, but v2 makes it deliberate by adding the eyebrow above it and pulling the first paragraph forward as a slightly larger register (body-01) before paragraphs 2 + 3 drop to body-02. The visitor reads three deliberate beats: gap-recognition / cost-naming / Cena-being-built-to-close.

**Per-section variety:**

- **Hero** — 3-paragraph deliberate stack with typographic descent (body-01 → body-02 → body-02-emphasis). The closing sentence ("Cena is being built to close it.") is its own paragraph, set tighter against the preceding paragraph so it reads as the lead's payoff.
- **Value section** — kept as bulleted list per draft, but the bullets get **left-rule structural treatment**: a 2px sand-300 left rule on the list runs the full vertical height of the value bullets, making the four primitives read as an annotated structural set rather than a loose list. The strong-lead headings on each bullet keep the existing draft mechanics; the left rule is the structural addition. The closing sentence after the list ("The substrate is designed so the care team's existing program keeps running…") is set as a quiet `document-subsection-title`-style register (sand-700, italic — wait, NOT italic, italic is decorative; instead, set as a slightly tighter paragraph in tracked normal weight) below the list with a small left-rule extension marker, so the visitor reads it as the synthesis of the four primitives.
- **Brownfield section — two-column composition.** This is the page's structural lift. The four brownfield-shape examples ("grant-funded clinic, sponsored pilot, Section 1115 waiver, hospital-foundation community kitchen") move into a **left-column 1/3 + right-column 2/3 structural composition** on desktop. Left column: an `document-eyebrow` ("THE FOUR SHAPES") + a compressed list of the four shapes (one per line, weight 500). Right column: the section's substantive paragraphs (the consolidation framing, the "what stays yours" paragraph). The two columns sit side-by-side with a sand-200 vertical-rule between them. On mobile, columns stack. This composition is the page's biggest swing and earns it because the brownfield section is the page's primary risk-lowering work; reading recognition (left) + assurance (right) side-by-side reinforces the bifurcation discipline.
- **Where Cena is** — single column, but the three paragraphs each open with `document-subsection-title`-register sand-700 in-line eyebrow labels ("PRE-SEED.", "WHAT WE'RE BUILDING.", "OUR TEAM."). Reads as a compressed structural three-beat.
- **Contact** — kept as the v1 form scaffold; minor type adjustments to match the rest of the page.

**Spacing rhythm:** Tight then generous. Hero is tight (paragraphs stacked closely to read as one deliberate beat); section gaps are mt-14 (between hero and value), mt-16 (around brownfield section — generous because the column composition needs air around it), mt-14 (around where-Cena-is), mt-14 (around contact).

**Type registers used:**

- `document-eyebrow`
- `document-title`
- `document-lead` (body-01 first paragraph) → `document-prose` (body-02 paragraphs 2 + 3)
- `document-prose` body with left-rule treatment on the value list
- `document-subsection-title` for the "PRE-SEED. / WHAT WE'RE BUILDING. / OUR TEAM." in-line eyebrows in the where-Cena-is section
- Sand-200 vertical rule between brownfield columns

### 3.3 /for-providers-partners — *the structural-proof document*

**Identity:** A page that visibly carries structure. The bifurcation table is the page's center of gravity and everything orients to it. Reads as *"the structure on this page is itself the argument."*

**Hero shape:** `document-eyebrow` ("For providers + partners") + `document-title` + `document-lead`. The hero is the simpler of the four pages — the H1 and lead are short, structurally calm — because the page's structural payoff comes later in the bifurcation table. The hero gets out of the way fast.

**Per-section variety:**

- **Hero** — eyebrow + H1 + one-sentence lead. Tight.
- **Problem section** — kept as v1 multi-paragraph prose, but the closing italic-quote sentence ("I know this protocol works. I need to show it.") gets **pull-quote treatment**: pulled into its own indented paragraph at a slightly larger Lora 19.2px sand-900 weight 400 (italic remains, the italic is editorial not decorative — Lora supports italic as a register the brand voice canon recognizes), set against a sand-200 left-rule. This is the page's first structural lift before the table. The quote is a program director's voice, and pulling it out structurally marks it as the page's pivot from problem to solution.
- **How the program runs section** — the three "Your program prescribes / Cena is being built to capture / Your clinicians keep their authority" paragraphs get **three vertically-stacked numbered structural cards** — each card has a sand-200 left rule, a Source Sans 3 12px sand-600 eyebrow ("ONE.", "TWO.", "THREE."), the existing strong-lead paragraph, and tight spacing. This is the page's second structural lift: the "how it runs" three-beat is the substantive model, and giving each beat its own structural container (without chrome — just the left rule + numbered eyebrow) makes the model's three steps scannable and serious.
- **Reference program / bifurcation table** — this is the page's center of gravity and gets the **biggest structural-room lift on the page**. The section title gets a `document-eyebrow` ("REFERENCE PROGRAM") above the H2. The table itself **breaks out of the 52rem document column to 60rem** on desktop (with the rest of the page staying at 52rem) so the four-column table has room to breathe — 10% / 25% / 32.5% / 32.5% becomes readable rather than cramped. The today/design-intent column headers move from the hidden v1 treatment to **visible uppercase sand-600 12px eyebrow labels at the top of the table** so the visitor sees the bifurcation structure before reading the first row. Row treatment improves: sand-200 top rules between rows, sand-700 step labels in Lora 14px italic at left, the "today" column body in sand-700 with a sand-300 small left-rule marker (so the visitor reads each "today" cell as anchored to today's reality), and the "design intent" column in sand-700 *without* the left-rule marker (so the visitor reads each design-intent cell as a forward statement floating free). This bifurcation-visibility-through-typography is the page's primary visual innovation.
- **Clinical authority section** — kept as 3-paragraph prose with strong-lead bullets; spacing tightened so it reads as the bifurcation table's quiet structural complement (the table was the proof; this section is the assurance).
- **Contact** — kept simple per v1.

**Spacing rhythm:** Build to the table. Hero is tight; problem section is moderate; how-it-runs cards have generous internal padding to mark their structural weight; bifurcation table gets the biggest top-margin and bottom-margin on the page (mt-20, mb-20 on desktop) so it feels architecturally weighted. Clinical authority + contact close at moderate rhythm.

**Type registers used:**

- `document-eyebrow` (twice — hero + REFERENCE PROGRAM)
- `document-title`
- `document-lead`
- `document-prose`
- Pull-quote register (Lora 19.2px italic, sand-900, weight 400, indented with sand-200 left rule) for the program director's voice
- Numbered structural cards with left-rule + eyebrow for the three-beat how-it-runs section
- Bifurcation table — typography-driven bifurcation with Lora step labels + uppercase column eyebrows + asymmetric left-rule treatment per column
- Mobile bifurcation table degrades to v1's stacked-block treatment (this is acceptable per project notes)

### 3.4 /about — *the quiet exposition*

**Identity:** Markedly smaller, narrower, quieter than the other three. The page is structurally restrained on purpose. Reads as *"we are not trying to convince you on this surface."*

**Hero shape:** `document-title` alone (NO eyebrow, NO lead-paragraph). The title is "What Cena is." with the period. Below the title, the v1 subhead becomes a single quiet `document-lead`-sized paragraph but at body-02 (16px), not body-01 (19.2px) — the lead register drops because /about's job is exposition, not invitation. **The hero is the page's largest visual moment, and it is restrained.** This is the structural inversion that gives /about per-page identity: where the others built up to a payoff, /about gives the payoff at the top and lets the rest of the page run quietly below.

**Per-section variety:**

- **Hero** — H1 + tight one-sentence sub-paragraph (body-02 weight 400 sand-700, period after each clause). No eyebrow. No big lead.
- **The thesis section** — kept as v1; quiet single paragraph.
- **Three people section** — kept as v1's period-separated form. **Visual improvement:** the section H2 ("Three people.") and the names line get more vertical air around them than v1; the names line is set at body-01 (19.2px) sand-900 weight 400 so it reads as the page's structural fact, not as ordinary body. This is the page's structural pivot — the three names get visual weight through measure-shift, not through chrome.
- **Accountability section** — kept as v1.
- **What we're building section** — kept as v1; quiet single paragraph.

**Outer measure:** **/about uses 44rem outer measure** (narrower than the other three pages' 48rem/52rem). This is the structural-character signal: the page is smaller. The visitor moving from the homepage (48rem) or P+I (52rem with brownfield two-column) to /about feels the page contract around them. Quiet exposition has narrower walls.

**Spacing rhythm:** Calm + tight. Sections are mt-12 (matching v1). The page closes faster than the others.

**Type registers used:**

- `document-title` (alone — no eyebrow above it)
- `document-prose` body-02 (no body-01 lead register on this page)
- Names-line body-01 sand-900 weight 400 (the only register-shift on the page beyond title + body)

---

## 4. Site shell — nav + footer

The site shell is the felt continuity that v1 lacked. Same shell on all 4 pages. Inlined into each HTML file so each file stays self-contained.

### 4.1 Top nav

**Composition:** A quiet horizontal bar at the top of each page. NOT a sticky/fixed bar (the page is short enough that scroll-with-content reads warmer + more brand-restrained than sticky chrome). Three structural elements, left to right:

- **Cena mark (left)** — wordmark "Cena Health" in Lora 16px weight 500 sand-900. Acts as the homepage link. No icon, no logomark — the wordmark itself is the mark per brand canon.
- **Nav links (right)** — three links: "For payers + investors" / "For providers + partners" / "About". Each link in Source Sans 3 14px weight 500 sand-700; current-page link gets sand-900 + a 2px sand-900 bottom-border that sits exactly at the link's baseline. The current-page treatment is the visitor's wayfinding signal — they always know where they are.

**Vertical separation:** The nav has a `border-bottom: 1px solid sand-200` (matching the `document-masthead` bottom-border treatment v1 already used) — making the nav-as-pre-page-header read structurally consistent with the document district treatment below.

**Spacing:** nav-internal padding is 16px top / 16px bottom on mobile, 20px / 20px on desktop. Outer padding matches the document-shell padding (5px mobile / 8px desktop scaled) so the nav links + Cena mark visually align with the body content below.

**Mobile:** Below 640px, nav links collapse to a single right-aligned "Menu" hamburger button — *no*, that's app-shell pattern; this is a content site. Cleaner: on mobile, nav links stay visible but compress to short forms ("Payers", "Providers", "About") at 13px. The Cena mark stays full at the left.

### 4.2 Footer

**Composition:** A quiet horizontal bar at the bottom of each page. Three structural elements, left to right:

- **About link (left)** — "About →" in Source Sans 3 14px weight 500 teal-700 underlined (matches /about-link treatment v1 used in body). On /about itself, this is hidden — the visitor is already there.
- **Direct contact link (center-or-secondary)** — "vanessa@cenahealth.com" in Source Sans 3 13px weight 400 sand-600 (quiet text-link register; no decoration, no underline).
- **Cena mark (right)** — same wordmark from the nav, in the same Lora 16px weight 500 sand-900 register — visual bookend to the top nav.

**Vertical separation:** `border-top: 1px solid sand-200` matching the nav-bottom treatment. The shell visually frames the page top + bottom.

**Spacing:** footer-internal padding 24px top / 24px bottom on mobile, 32px / 32px on desktop.

**Mobile:** stacks vertically — about link on top, contact in middle, mark at the bottom. Each row centered.

### 4.3 Inline shell implementation

Each HTML file inlines the nav HTML at the top of `<body>` (before `<main>`) and the footer HTML at the bottom (after `</main>`). Each HTML file inlines the shell CSS in its `<style>` block. The current-page nav-link state is hardcoded per file (the homepage's nav highlights the Cena mark by NOT applying current-page treatment to any of the three links; the three landing pages highlight their respective nav-links). This is the v2 inline-shell pattern — each file is fully self-contained, the constraint is preserved, and the cross-page navigation works because the visitor moves between locally-served HTML files via relative-path hrefs (`./homepage-v2.html`, `./for-payers-investors-v2.html`, etc., all in the same directory).

This is **NOT codified as a haven primitive yet** — see §5 below on codification gaps. The site-shell as a haven primitive earns its place if the public site grows beyond 4 pages OR a second consumer (e.g., a documentation site) needs the same shell.

---

## 5. PL primitive inventory

### 5.1 Primitives used per page (canonical reuse from haven-ui)

The v2 uses every primitive v1 used plus three new primitives the v1 missed:

| Primitive | components.css source | v1 used | v2 used | Notes |
|---|---|---|---|---|
| `document-shell` | :12801 | ✓ all 4 | ✓ all 4 | Outer measure varies per page (44/48/52rem) — composition-layer parameterization |
| `document-masthead` | :12809 | ✓ all 4 | ✓ all 4 | Same as v1 |
| `document-title` | :12815 | ✓ all 4 | ✓ all 4 | Same as v1 |
| `document-lead` | :12848 | ✓ all 4 | ✓ 3 of 4 | /about's hero replaces lead-register with quiet body-02 paragraph |
| `document-section` | :12855 | ✓ all 4 | ✓ all 4 | Same as v1 |
| `document-section-title` | :12862 | ✓ all 4 | ✓ all 4 | Same as v1 |
| `document-prose` | :12879 | ✓ all 4 | ✓ all 4 | Same as v1; measure varies in some sections |
| **`document-eyebrow`** | :12818 (PL canon) | ✗ | **✓ 3 of 4** | NEW USE — quiet uppercase sand-600 register-setting label above titles |
| **`document-subsection-title`** | :12870 (PL canon) | ✗ | **✓ P+I** | NEW USE — quiet sub-grouping register in where-Cena-is in-line eyebrows |
| **`document-section-intro`** | :12867 (PL canon) | ✗ | (potential) | Reserved; not used in v2 unless a section needs explicit intro register |

### 5.2 Composition extensions (composition-layer, NOT codified)

| Composition class | Where | Why v2 reaches for it |
|---|---|---|
| `.site-nav` + `.site-nav-mark` + `.site-nav-links` + `.site-nav-link.is-current` | All 4 pages | Shared top nav. Composition-layer for v2; codification candidate (see §5.3) |
| `.site-footer` + `.site-footer-link` + `.site-footer-contact` + `.site-footer-mark` | All 4 pages | Shared footer. Composition-layer for v2; codification candidate (see §5.3) |
| `.track-selector` + `.track-card` + (revised v2 treatment) | Homepage | Carried from v1; revised typographic treatment (eyebrows above titles, wider outer measure) |
| `.value-list-rule` (left-rule treatment) | P+I value section | Composition-layer; carries `value-list` from v1 |
| `.brownfield-split-grid` + `.brownfield-split-left` + `.brownfield-split-right` | P+I brownfield | Two-column structural composition. First instance — composition-layer hold |
| `.where-cena-eyebrow` | P+I where-Cena-is | In-line `document-subsection-title`-register eyebrows |
| `.problem-pullquote` | P+P problem section | Pull-quote treatment for program director voice |
| `.how-it-runs-card` + `.how-it-runs-eyebrow` | P+P how-it-runs | Numbered structural cards with left rule + eyebrow |
| `.bifurcation-table-v2` | P+P bifurcation table | Revised typographic treatment carrying v1's `.bifurcation-table` structure (with visible column eyebrows, asymmetric left-rule per column, expanded outer measure) |
| `.about-names-line` | /about three-people section | Body-01 sand-900 weight 400 register for the names line |

### 5.3 Codification gaps (per haven-primitive-codification 5-place check + generative-determinism 3-use)

Three composition-layer extensions in v2 are **codification candidates** but do not trigger codification yet:

- **Site-shell (nav + footer).** First instance of a shared public-site shell. Per generative-determinism's 3-use rule, the first occurrence is composition-layer; if a second consumer needs the same shell (a documentation site, a partner-specific landing page, a future Phase 3+ marketing surface), surface for codification then. Recommended candidate name: `public-shell-nav` + `public-shell-footer`. The 5-place check would need: PL HTML fragment, COMPONENT-INDEX row, brand spec entry (visually-weighted because of the wordmark register), consumer-surface references in any future templates, render verification.
- **Two-column brownfield-split.** First instance of a left-narrow / right-wide two-column structural composition on a public surface. The haven-ui canon has `layout-two-pane` (1400px / 420px rail + main) but that's app-shell scope, not document-class scope. The brownfield-split is a document-district two-column composition. If a second page needs side-by-side recognition + assurance, surface for codification. Candidate name: `document-split-column` or `document-aside-grid`.
- **Bifurcation table.** Revised v2 treatment carries v1's table; the v1 composition was already first-instance. v2 adds visible column eyebrows + asymmetric left-rule treatment per column. Per generative-determinism, this is still composition-layer (one consumer). The bifurcation table is genuinely specific to this one page's job; codification would be premature.

**Aaron-gate consideration:** if the public site is going to be the canonical public surface for Cena (the 4 pages launch + grow), the site-shell is the strongest codification candidate of the three. **Surfacing for Aaron** — does it earn promotion to a haven primitive in the next slice, or wait for a second consumer?

### 5.4 Primitives v2 specifically did NOT reach for (and why)

The COMPONENT-INDEX has many primitives v2 could have reached for that would have been wrong:

- `card` family — would add chrome the brand canon resists. The track-selector cards (homepage) are the one exception, and they were already established in v1.
- `alert-info`/`alert-warning`/`alert-success`/`alert-error` — would add color saturation. The brand reserves the alert family for severity registers; the public site has no severity content.
- `badge` family — would add chrome that reads as procurement/marketing register.
- `ai-insight-badge` — would announce a feature instead of letting content speak.
- `cta-button` (decorative variants) — kept the v1 minimal `.cta-button` for the contact CTA but did not add additional button registers.
- `stat-card` / `card-stat` — would add quantitative claim territory v1 deliberately avoided per voice.md §5.
- `info-panel` — pre-built explanatory card pattern; v2 prefers structural composition over pre-fab containers.
- `pull-quote` (note: not a registered primitive — pull-quote is a composition-layer treatment in v2's P+P page; if a second surface needs it, it's a codification candidate).

The discipline: every primitive reached-for in v2 must earn its place against the brand restraint canon. Adding chrome to feel "less boring" is the exact failure mode the brand was designed to resist.

---

## 6. Cross-page Cap-Honest discipline

Every Cena-as-subject sentence preserved verbatim from v1 (which preserves verbatim from the drafts which Aaron has gated). The visual treatment does not change tense calibration:

- **Homepage** — Cap-Honest LOW pressure. No substrate-mechanic claims. Visual treatment does not introduce any present-tense substrate claim. ✓
- **/for-payers-investors** — Cap-Honest HIGH on the brownfield section (HONEST-TODAY recognition + HONEST-FUTURE-TENSE consolidation). The brownfield-split two-column treatment preserves the bifurcation: left column carries recognition (the four canonical shapes — HONEST-TODAY), right column carries the substantive consolidation paragraphs (HONEST-FUTURE-TENSE on every Cena-as-subject sentence). The structural composition reinforces the discipline rather than weakening it. ✓
- **/for-providers-partners** — Cap-Honest HIGHEST pressure (the 9-step bifurcation table). The revised v2 bifurcation table treatment **strengthens** the discipline by making the today/design-intent split visible as typography (visible column eyebrows, asymmetric left-rule per column). A skim-reader sees "today" anchored as today + "design intent" floating as forward without reading a word. The visual treatment makes the bifurcation **harder to miss**, not easier. The pull-quote treatment on the program director's voice ("I know this protocol works. I need to show it.") is editorial-italic; it does not imply deployment. ✓
- **/about** — Cap-Honest discipline preserved verbatim per the locked Aaron-gate batch 2. /about's reduced size + tighter outer measure does not change any sentence; visual contraction reinforces quiet exposition, the page's job. ✓

**Visual treatments that could imply deployed substrate but specifically do NOT:** no "demo video" framing anywhere; no "see it in action" buttons; no before/after animations; no animated counters or "live" data widgets; no testimonial carousels. The visual treatment respects the substrate's non-deployed reality. ✓

**The bifurcation table on /for-providers-partners is the page's voice innovation per the task brief** — v2 does NOT weaken it. v2 strengthens it through visible-bifurcation typography. ✓

---

## 7. Open questions for Aaron-gate

Three genuine design taste calls where Aaron should specifically read+confirm. Each is opinionated; each has a fallback if Aaron's read is different.

### Q1 — Homepage: track-selector breakout to wider measure

**The call:** On desktop, the track-selector cards step out of the 48rem hero-and-prose column to a 56rem container, giving the cards more horizontal room than the running prose above them. This is the homepage's biggest structural swing.

**Why:** the track-selector is the page's primary CTA per brief §5. v1 kept it inside the same 52rem column as everything else and the cards read as another section. v2's breakout gives the cards structural weight at a glance — the visitor scrolls past the problem paragraph and the cards open up to the side, signalling "the page wants you to focus here."

**The fallback:** if the breakout reads as "the cards are escaping the page's structure" rather than "the cards are the page's structural payoff," collapse the cards back to the 48rem column and rely on vertical air alone (mt-16, mb-16) to mark them as the CTA. Cleaner; less ambitious; less differentiated.

**My pick:** breakout. The risk is small — the cards are inside the document-shell's outer page padding, just at a wider inner measure. Worth the structural lift.

### Q2 — /for-payers-investors: brownfield two-column

**The call:** The brownfield section breaks the running single-column composition into a left-narrow (1/3) + right-wide (2/3) two-column layout on desktop. Left: "THE FOUR SHAPES" eyebrow + four canonical brownfield shapes as a short compressed list. Right: the substantive consolidation paragraphs ("what stays yours", etc.).

**Why:** the brownfield section is the page's primary risk-lowering work, and reading recognition (left) + assurance (right) side-by-side reinforces the bifurcation discipline (HONEST-TODAY recognition + HONEST-FUTURE-TENSE consolidation). This is the page's structural identity move — without it, the page is "a longer prose document" instead of "a value-frame document with deliberate structure."

**The fallback:** keep single-column. The structural compression in the value section (left-rule treatment) + the in-line eyebrows in where-Cena-is would still differentiate the page from the others, just less ambitiously. Mobile already stacks the columns; the desktop two-column is the differentiation move.

**My pick:** two-column. The Cap-Honest discipline is reinforced, not weakened, by the visual structure.

### Q3 — /about: hero contraction (no eyebrow, no big lead)

**The call:** /about's hero is structurally inverted from the other three pages: NO `document-eyebrow` above the H1, NO body-01 `document-lead` register below it. Just "What Cena is." (H1) + a single quiet body-02 sub-paragraph.

**Why:** /about's job is exposition, not invitation. The other three pages BUILD UP to a structural payoff (track-selector on the homepage; brownfield section on P+I; bifurcation table on P+P). /about gives its payoff at the top (the H1 IS the payoff — "What Cena is.") and lets the rest of the page run quietly below. The structural inversion is what gives /about its per-page identity. Without it, /about is "another smaller page like the others," and the homepage's hero (which IS a register-setting hero) loses its distinctive treatment.

**The fallback:** add an eyebrow ("About Cena Health") and a body-01 lead — match the other pages' hero pattern. /about would read as consistent with the others at the cost of distinct character. Less differentiated; safer.

**My pick:** contraction. The IA already names /about as footer-only (no CTA, no main-nav landing slot beyond the wordmark + footer About link); the visual contraction matches its IA role.

---

## 8. Mobile responsive

The v2 mobile treatment preserves v1's mobile compromises and adds:

- Top nav links compress to short forms ("Payers", "Providers", "About") below 640px; Cena mark stays full-width left.
- Footer stacks vertically below 640px (about / contact / mark in three rows, each centered).
- Homepage track-selector stacks (matches v1).
- /for-payers-investors brownfield two-column collapses to single-column stacked (left column appears first as a compressed list, right column flows below) below 768px.
- /for-providers-partners how-it-runs cards stay vertically stacked (they already are); bifurcation table degrades to v1's stacked-block treatment below 768px (already established as acceptable per project notes).
- /about's narrower outer measure (44rem) becomes the same outer measure as the other pages on mobile (everything is full-width below 640px anyway).

Mobile polish beyond this is Phase 3++ work per project notes.

---

## 9. What v2 does NOT change

Verbatim from drafts (per project lockpoints):

- Every copy string. v2 is a composition pass, not a content pass.
- Every Cap-Honest verdict. The tense calibrations are preserved exactly.
- The IA structure (5 sections on homepage, 5 sections on P+I, 6 sections on P+P, 5 sections on /about).
- The bifurcation table's content (9 steps, today/design-intent split, partner-clinician retain authority framing).
- The voice posture (Quiet-Comp, Partner-First, Cap-Honest, etc.).

What v2 changes:

- Per-page visual identity at the structural-look level.
- Typographic variation within each page (eyebrows, subsection titles, pull-quote, structural cards, visible column eyebrows).
- Per-page outer-measure rhythm (44rem / 48rem / 52rem with selective breakouts).
- Cross-page navigation via shared site shell (top nav + footer).
- Spacing rhythm per page.

---

## 10. The single biggest design swing across the pages

If forced to name one move that does the most work to push past the v1 boring-output failure: **the structural-character-per-page rhythm**. Each of the 4 pages opens with a structurally different beat (eyebrow + H1 + spare lead on the homepage; eyebrow + H1 + 3-paragraph lead-stack on P+I; eyebrow + H1 + short lead on P+P; H1 alone on /about), uses a different inner outer-measure (with one breakout per page that goes WIDER for the page's payoff element), and closes with a different structural identity (track-selector breakout on homepage; brownfield two-column on P+I; bifurcation table breakout on P+P; quiet exposition close on /about).

That's not one CSS technique; it's a per-page treatment philosophy. The visitor moving between pages feels the structural-character-shift even when the brand palette is unchanging. That's the "boring AF" failure mode's structural inverse: differentiation through architecture, not decoration.

---

## Sign-off

This is the design spec. The 4 v2 HTML files implement it. Each file is self-contained, inlines the site shell, references the haven-ui PL canon by source-line citation, and preserves the v1 Cap-Honest discipline verbatim.

**Files landed:**

- `v2-design-spec.md` (this file)
- `homepage-v2.html`
- `for-payers-investors-v2.html`
- `for-providers-partners-v2.html`
- `about-v2.html`

**For Aaron-gate:** three open questions in §7. Otherwise the v2 is opinionated and ready for browser review.
