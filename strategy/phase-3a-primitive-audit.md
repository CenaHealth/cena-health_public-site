# Phase 3a Primitive Audit — Visual Primitives for Cena Public Site

**Status:** Awaiting Aaron-gate · **Date:** 2026-06-08 · **Phase 3a discovery**

Audit of existing haven-ui PL primitives + `components.css` semantic classes against the 4 load-bearing visual primitives named in the Phase 2 content briefs (`homepage.md`, `your-program-on-cena.md`, `reference-program.md`, `sample-audit-trail.md`). Per the pattern-library-first discipline (haven-ui `CLAUDE.md` "copy, don't generate") and the 5-place codification gate (`.claude/rules/haven-primitive-codification.md`), this audit identifies which primitives compose from existing PL parts vs. which require true new authoring before Phase 3a authoring slices can scope cleanly.

## Scope

In scope:

- **substrate-diagram** (homepage §3): click-through hot-spots, 4 nodes — data ingestion → clinical reasoning → recommendation with citation → audit-trail write.
- **brownfield-matrix** (`/your-program-on-cena` §2): 3-column TABLE — *Left intact / Replaced / Connected to*. Column-order is non-negotiable (left intact reads first per IA bait-and-switch defense).
- **patient-journey-timeline** (`/reference-program` §2): horizontal swim-lane timeline, 9 stages × 4 actor swim-lanes (patient / clinical staff / Cena substrate / provenance artifact).
- **audit-trail-annotation** (`/sample-audit-trail`): annotation pattern, each field paired with *what it IS* + *what regulatory requirement it SATISFIES*; appears six times (§§3–8 of that page).

Output target locked: `Lab/haven-ui/packages/design-system/pattern-library/pages/cena-public/<slug>.html`. React-port stack is NOT the production target this phase per `feedback_ownership_bar_over_language`.

This audit does NOT scope page-composition. Page composition happens after primitives land; the unlock map appears in §"Page-composition unlocks" below.

---

## Per-primitive audit

### 1. substrate-diagram (homepage §3)

**Content brief shape (from `homepage.md` §3):**

- One visual primitive (4 hot-spots) + a ≤12-word caption *"How the substrate works"* above the diagram + a ≤15-word hover caption per hot-spot.
- 4 nodes in left-to-right flow: *Data ingestion → Clinical reasoning → Recommendation with citation → Audit-trail write*.
- Each hot-spot click-throughs to a deep anchor on `/how-the-substrate-works` sub-pages.
- HDG row 3 constraint: NO vendor labels (Anthropic / Vertex / Google Cloud) anywhere in the rendering.
- Voice register: documentation, not marketing inflection; quiet-competence; substrate-not-vendor.

**Existing reuse:**

- **`.diagram-frame`** (`diagram-frame.html` + components.css §12315) — the SVG container with sand-grounded background and responsive `<500px` horizontal-scroll fallback (`.diagram-frame-wrap`). Direct fit for the four-node row.
- **`.diagram-box` + variants** (`diagram-box.html`, components.css §12385) — four labeled rectangles, one per node. The `.diagram-box--substrate` variant (teal-800 fill, white text) is the canonical "data-grounding" treatment matching IA's "this is where Cena's structural work lives" read. Cell labels (≤15 words) use `.diagram-box-label` + `.diagram-box-sublabel`.
- **`.diagram-arrow`** (components.css §12517) — connector lines between the four nodes; `.diagram-arrow--emphasis` for the canonical primary flow.
- **`.diagram-icon`** (components.css §12631) — Material-Symbols icon glyphs already register seven semantic mappings (`folder`, `public`, `smart_toy`, `comments`, etc.) — *but* haven-ui's broader icon canon is FontAwesome Pro v7 (per `project_haven_ui_icon_canon`). The substrate-diagram should use FA Pro icons inside `<i class="fa-solid fa-X"></i>` placed adjacent to or via diagram-box composition, NOT the experimental `.diagram-icon` Material map (which is the Layer-2 `diagram-graph.js` env helper's icon contract, not the cross-vault canon). Resolve: use FA Pro glyphs.
- **`.diagram-caption`** (components.css §12562) — Lora italic 12px caption for the *"How the substrate works"* line above the diagram.
- **`.diagram-graph` Layer-2 helper** (`diagram-graph.html`, with `src/scripts/env/diagram-graph.js`) — data-driven authoring via dagre layout for ≥4 element types. This is the right tool for substrate-diagram because the diagram has exactly the threshold shape: 4 nodes, directional flow, optional curved connectors. Hot-spot interactivity layers on top via vanilla JS per `JS owns debounce` haven-ui convention.

**True new primitives:**

- **`.diagram-hotspot`** + sibling `.diagram-hotspot-target` + `.diagram-hotspot-caption` — interactive click/hover affordance pattern over a `.diagram-box` group. The PL has no existing primitive for "hover or click reveals a caption + routes to an anchor URL." This is a new genuine primitive (not a composition) because it introduces three orthogonal concerns: (a) accessible hover-tooltip render (must compose with Preline `hs-tooltip` or hand-rolled keyboard-focus state per `foundations-palette-swatch`'s prior art), (b) click → routed anchor with full keyboard support, (c) visual affordance signaling interactivity (faint outline or cursor change without polluting the documentation register).
  - PL fragment: `pattern-library/components/diagram-hotspot.html`
  - components.css addition: `.diagram-hotspot`, `.diagram-hotspot:focus-visible`, `.diagram-hotspot-target` (the `<a>` wrapping a `.diagram-box`), `.diagram-hotspot-caption` (the popup register).
  - COMPONENT-INDEX row under "Document District" or new "Diagrams — Interactive" sub-section.
  - Brand spec entry: NEW section in `haven-directive-styling.md` or sibling spec naming the hotspot's visual treatment (faint border on focus-visible, caption pop-up styling vs. existing `.diagram-caption`).
  - Consumer-surface ref: registered in COMPONENT-INDEX + linked from the `cena-public/homepage.html` PL composition.
  - Render verification: a PL page demonstrating the hotspot pattern with at least one keyboard-focusable cell + screen-reader-readable caption.
- *Possibly* **`.cena-substrate-diagram`** — a composition-only "cena-public" sub-namespace class if the diagram needs page-specific layout (centered max-width 960px, vertical rhythm hooks). Composition-level, no codification gate required if no novel CSS; just a layout wrapper class declared inline.

**Recommended slice shape:** **Hybrid.**

- Tier-1 primitive authoring of `.diagram-hotspot` (full 5-place codification: PL fragment + components.css + COMPONENT-INDEX + brand spec entry + consumer-surface ref + render verification).
- Tier-2 composition for the homepage's actual `substrate-diagram` block using `.diagram-graph` (Layer-2 authoring) + `.diagram-hotspot` + FA Pro icons.

**Brand-fidelity considerations (Haven Visual Designer):**

- Confirm hotspot visual affordance — faint border on hover/focus, cursor change, but no marketing-inflection register (no animated pulse, no "click me" prompts).
- Confirm caption-on-hover register vs. the existing `.diagram-caption` italic Lora — Aaron's call: should hotspot captions render as Lora italic (consistent with the caption canon, brand voice consistency) or as Source Sans 3 (documentation register, lighter visual weight)?
- Confirm icon style per node — FA Pro `fa-solid` glyphs matching the documentation register; pick four icons that earn their place without slipping into vendor-flattery imagery (no "AI-brain" / "robot" icons; voice.md §4 forbidden).

---

### 2. brownfield-matrix (`/your-program-on-cena` §2)

**Content brief shape (from `your-program-on-cena.md` §2):**

- Three-column TABLE (not Venn, not sequence diagram, not split-screen — IA §6 explicit: TABLE because coexistence is the load-bearing claim).
- Column order LOCKED: *Left intact* (column 1) → *Replaced* (column 2) → *Connected to* (column 3). Left-to-right reading puts the reassurance first.
- Each cell is a noun phrase, 2–5 words, front-loaded with the load-bearing noun.
- Some cells (column-1 "IRB-approved protocols", column-3 "EHR (FHIR endpoint)") need to be inline-linkable to deep anchors on `/how-the-substrate-works`.
- Voice register: quiet, partner-possessive in column 1, neutral in columns 2 and 3; scan-able row-by-row.

**Existing reuse:**

- **`.data-table`** (`data-table.html`, components.css §1634) — the canonical haven-ui table primitive with `cell-primary` + numeric/centered variants. Direct fit for the three-column matrix because table is the load-bearing shape called out by IA §6.
- **`.cell-primary`** (components.css §1686) — first-column emphasis register; matches IA's "reader sees Left intact first" treatment.
- **Inline links inside table cells** — use `.text-link` (components.css `text-link.html`) for the column-3 EHR / column-1 IRB cells that route to `/how-the-substrate-works/integration` + `/provenance-and-accountability`.
- **`.section-title`** (`layout-section-title.html`) — for the quiet H2 above the matrix ("What changes, what stays, what connects" or near-variant per IA §6).
- **`.divider-spacious`** (`layout-divider.html`) — visual separation between matrix and the consolidation-patterns section that follows.

**True new primitives:**

- **None required for v1.** The brownfield-matrix is a pure composition of `.data-table` + `.cell-primary` + `.text-link` + table-header semantic markup.
- *Optional codification candidate, NOT required:* a `.brownfield-matrix` composition wrapper that pins the 3-column-with-column-1-emphasis treatment. Recommendation: **do NOT codify until a second instance surfaces** (per "Promote on second consumer" in `.claude/rules/expert-placement.md` and haven-ui CLAUDE.md's inline carve-out rule). Single-use compositions live inline in the PL page; promotion is earned on the next consumer.
- *Brand-spec consideration:* the column-1 emphasis (visually anchoring "Left intact" so the reader's eye lands there first) may need a subtle brand-spec entry IF the existing `.cell-primary` doesn't visually weight column 1 enough to do the bait-and-switch-defense work. **Recommendation: spike first with `.cell-primary` as-is; ask the Haven Visual Designer expert if column-1 visual weight needs a heavier treatment.**

**Recommended slice shape:** **Pure composition.**

- No new components.css classes.
- No PL fragment authoring (the composition lives inside `cena-public/your-program-on-cena.html`).
- No codification gate triggered.
- Tier-2 slice ceremony per haven-ui CLAUDE.md.

**Brand-fidelity considerations (Haven Visual Designer):**

- Confirm column-1 visual weight is sufficient — does `.cell-primary` (sand-700 weight bump) make "Left intact" read as primary on first scan? If not, an optional column-1 background-tint or border-emphasis variant could be authored as a small new class (`.data-table-col-emphasis` or similar) — but only if Haven Visual Designer confirms the gap.
- Confirm column-2 ("Replaced") visual treatment doesn't accidentally read as warning/error (e.g., red strikethrough). The brief says "what disappears" but doesn't want the disappearance read as a regrettable thing — replaced manual artifacts are improvements, not casualties.

---

### 3. patient-journey-timeline (`/reference-program` §2)

**Content brief shape (from `reference-program.md` §2):**

- Horizontal swim-lane timeline (NOT vertical bullets per IA §7 — vertical collapses the multi-actor structure).
- 9 stages on the x-axis (Referral → Enrollment → Assessment → Care plan → Ordering → Fulfillment → Adherence check-ins → Outcome capture → Re-assessment).
- 4 swim-lanes on the y-axis (Patient action / Clinical staff action / Cena substrate action / Provenance artifact created).
- The bottom (4th) provenance swim-lane is load-bearing for the legal/compliance reader's deep-link path; per-stage cells in this lane name an audit artifact + timestamp.
- Each stage's substrate-action cell needs verb-first language; clinical-staff cells use HDG row 4 partner-clinician phrasing; patient cells use role language not identity.
- Generic-AMC framing (UConn-named upgrade is strict-superset later).
- Voice register: artifact voice — annotations as documentation, no marketing inflection.

**Existing reuse:**

- **`.diagram-frame`** + **`.diagram-lane`** (`diagram-lane.html`) — `diagram-lane` is explicitly authored as the "swim lane" primitive ("A horizontal or vertical 'swim lane' — a labeled region grouping a set of boxes"). Direct fit: four `<g class="diagram-lane">` with tiny-caps Source Code Pro labels ("PATIENT", "CLINICAL STAFF", "CENA SUBSTRATE", "PROVENANCE ARTIFACT") + optional dashed boundaries.
- **`.diagram-box`** + variants (`diagram-box.html`) — per-stage cells inside each swim-lane. The substrate-action lane can use `.diagram-box--substrate` (teal-800) to visually distinguish that "this is where Cena's structural work happens." Provenance-lane cells could use `.diagram-box--milestone-done` (green-50 fill, green-500 stroke) to signal "artifact is created here" — *but* check brand spec; the green register may signal "outcome achieved" which collides with the artifact-voice constraint (artifact is *produced*, not outcomes *achieved*).
- **`.diagram-graph` Layer-2 helper** (`diagram-graph.html` + `src/scripts/env/diagram-graph.js`) — direct fit. 9 stages × 4 lanes = 36 cells + connectors is exactly the ≥4-element-types + DAG-shape threshold for choosing Layer 2 over Layer 1 hand-coordinate authoring. Data-driven authoring via JSON spec; dagre handles position computation; renders Layer 1 primitives.
- **`.diagram-arrow`** with `.diagram-arrow--muted` variant — connectors between stages within a lane (subtle horizontal flow).
- **`.diagram-caption`** — Lora italic caption above the visual ("How the live program runs, end-to-end" or near-variant).
- **`clinical-timeline.html` (`.timeline-list`, `.timeline-event`, etc.)** — this is the *vertical* patient timeline used in care-coordinator app detail pages. It is NOT the right primitive for the public-site horizontal swim-lane (the brief is explicit: horizontal, multi-actor). Listed here for completeness so the audit doesn't ambiguate — `clinical-timeline` stays in the haven-app surface; patient-journey-timeline is a different shape.

**True new primitives:**

- **None CSS-side required.** The full primitive set (`diagram-lane` + `diagram-box` + `diagram-arrow` + `diagram-caption` + `diagram-graph` Layer-2 helper) covers the horizontal-swim-lane shape directly. The provenance swim-lane is composition (apply an icon + cell label per stage); no new component class needed.
- *Possibly* one **new diagram-box variant for "provenance artifact"**: `.diagram-box--provenance`. The audit needs this only if (a) `.diagram-box--milestone-done` (green fill) reads as "outcome achieved" which collides with the brief's artifact-voice constraint, OR (b) the Haven Visual Designer wants a distinct register for provenance artifacts vs. milestones. **Recommendation: spike with `.diagram-box` default (sand-100, sand-300 border) for provenance cells first; the artifact-voice register favors the quiet default. Promote `.diagram-box--provenance` only if the Visual Designer expert wants brand differentiation.** If promoted, it's a Tier-1 new variant requiring full 5-place codification.
- A render-pipeline consideration: per `.diagram-graph` notes, mobile <500px stacks the rendering "from data" via the helper — but the HTML stack rendering is "not yet implemented in this Phase 1 ship and ships in a follow-up." For the public-site cena-public surface, this could be a real mobile gap. **Recommendation: flag for the Haven Visual Designer expert + haven-ui-team — does the mobile stack-from-data renderer ship as part of this Phase 3a slice, or does cena-public accept the `.diagram-frame-wrap` horizontal-scroll fallback at first launch?**

**Recommended slice shape:** **Mostly composition with one optional minor primitive.**

- Tier-2 composition slice for the actual timeline using `.diagram-graph` + existing swim-lane / box / arrow primitives.
- *Conditional* Tier-1 mini-slice for `.diagram-box--provenance` IF the Visual Designer wants a distinct register.
- Tier-2 mobile-rendering call: either ship horizontal-scroll fallback now (accept) or push for the Layer-2 stack-from-data renderer follow-up.

**Brand-fidelity considerations (Haven Visual Designer):**

- The four swim-lane labels' typographic register — `diagram-lane-label` uses Source Code Pro tiny-caps; confirm this reads as documentation, not as code-listing register.
- Color encoding per swim-lane — should each swim-lane have a subtle background tint (e.g., patient lane white, clinical lane sand-50, substrate lane sand-100 with the substrate-fill boxes inside, provenance lane darker sand-100 to anchor it visually as the audit-trail-substrate ground)? Or should all lanes share the same `diagram-frame` ground? HVD call.
- Per-stage provenance-cell visual treatment — default sand-100 vs. a `.diagram-box--provenance` variant (above).
- Mobile rendering — accept horizontal-scroll fallback now, or push for the stack-from-data follow-up?

---

### 4. audit-trail-annotation (`/sample-audit-trail`)

**Content brief shape (from `sample-audit-trail.md` Section 2 — the annotation contract):**

- Annotation pattern applied 6 times (§§3–8 of that page: Input data / Reasoning step / Recommendation / Clinician approval / Outcome capture / Re-assessment trigger).
- Each instance pairs: (a) **sample field display** — synthetic timestamp + value + source-system attribution + verification hash where relevant; (b) **annotation block** — 2-4 sentences answering *what this field IS* + *what this field SATISFIES* (with citation markers `[^N]`).
- Per-section structure: H2 heading + anchor + sample field block + annotation block.
- Voice register: artifact voice, voice almost disappears; documentation, not marketing.
- Top-of-page synthetic-data marker is a separate but related visual primitive (callout/banner treatment, required first content per HDG sign-off list row 6).
- HDG row 4 / row 3 / §3.3 constraints: clinician role only never name; no vendor-stack names; specific CFR sections cited inline where regulatory claim is made.

**Existing reuse:**

- **`.kv-table`** (`data-table-kv.html`) — exact fit for the *sample field display* portion. Key/value definition list: left column = field name (e.g., "Source system", "Ingest timestamp", "Verification hash"), right column = synthetic value. The kv-table primitive is precisely "key/value definition list" per COMPONENT-INDEX.
- **`.alert-info`** (`alert.html`) — the top-of-page synthetic-data marker. The brief specifies *"reads as documentation header, not 'important notice'"* — this is the existing `.alert-info` register exactly: a quiet informational note, no marketing inflection. The brief's call-out about visual treatment ("reads as documentation header weight, not 'warning banner'") aligns with `.alert-info`'s register.
- **`.section-title`** + **`.divider-spacious`** — H2 heading per trail section + visual separation between sections.
- **`.document-shell`** + **`.document-section`** + **`.document-section-title`** (`layout-document-shell.html`) — the *single-column 52rem readable measure* shell that the audit-trail page should compose in. This is the document-district shell sized exactly for the artifact-voice register; the sample-audit-trail page is in district. Each trail section (§§3-8) wraps in `.document-section` + `.document-section-title`.
- **Citation footnote markers `[^N]`** — these resolve at the References section per the existing citation-discipline-spec; no new primitive needed. Footnote rendering is a render-pipeline concern (markdown rehype plugin or pandoc footnote handling), not a new class.
- **`.text-link`** — inline cross-link from annotations to deep anchors on sibling sub-pages.
- **`.escalation`** (`doc-escalation.html`) and **`.review-marker`** (`doc-review-marker.html`) — NOT needed for this primitive (these are SoP-district primitives for routing rules and unresolved review prompts, not annotation patterns).

**True new primitives:**

- **`.audit-annotation`** wrapper + sibling `.audit-annotation-field` + `.audit-annotation-explanation` (with internal `.audit-annotation-is` + `.audit-annotation-satisfies` sub-elements) — a NEW dedicated primitive for the IS/SATISFIES annotation contract. The pattern appears 6 times on `/sample-audit-trail` and is the *load-bearing artifact* of the page. This earns codification because:
  - Per `.claude/rules/generative-determinism.md` shape trigger — a structurally recurring primitive (6 uses on one page) that fits the codify-at-creation discipline.
  - The IS/SATISFIES annotation contract IS the generative-determinism contract per `haven-primitive-codification.md` — the field shape is deterministic (key/value field display + 2-4 sentence annotation answering two specific questions); the fill is generative (synthetic content + regulatory citation).
  - Without codification, the annotation pattern lives as inline composition that the next consumer would have to rediscover from prose.
- Codification places for `.audit-annotation`:
  - PL fragment: `pattern-library/components/audit-annotation.html` with `@component-meta` header.
  - components.css addition: `.audit-annotation`, `.audit-annotation-field`, `.audit-annotation-explanation`, `.audit-annotation-is`, `.audit-annotation-satisfies`. (Composes inside `.document-section`.)
  - COMPONENT-INDEX row under "Document District" (sibling to `Diagram Figure`, `Glossary Pair`, `Review Marker`).
  - Brand spec entry in `haven-directive-styling.md`: an "Audit Annotation" section naming visual treatment — quiet documentation register, IS/SATISFIES layout (stacked or side-by-side per Haven Visual Designer call), color/typography decisions.
  - Consumer-surface refs: registered in COMPONENT-INDEX + linked from the `cena-public/sample-audit-trail.html` PL composition + flagged for the SoP-section authoring guide if the same IS/SATISFIES contract becomes relevant to clinical SoPs.
  - Render verification: a PL page demonstrating the primitive with synthetic field + annotation pair + footnote markers; verify the IS/SATISFIES rendering reads as documentation, not as a sales feature-list.
- **Optional**: `:::audit-annotation` markdown directive registration if the primitive will be authored from markdown source. Per `.claude/rules/markdown-directives.md`, adding a directive is a three-place change (brand spec + reference-docx generator + HTML handler). **Recommendation: defer directive registration to a separate slice; the v1 PL fragment ships as HTML and the markdown-authoring path earns its place when the audit-annotation pattern needs to flow through markdown source for SoPs.**

**Recommended slice shape:** **Hybrid leaning new-primitive.**

- Tier-1 primitive authoring of `.audit-annotation` (full 5-place codification gate).
- Tier-2 composition of the page-level surface using `.document-shell` + `.alert-info` (top marker) + `.audit-annotation` (×6) + `.kv-table` (within each audit-annotation field display) + `.text-link` + footnote-rendering pipeline support.

**Brand-fidelity considerations (Haven Visual Designer):**

- IS/SATISFIES layout — stacked (IS sentence, then SATISFIES sentence) vs. side-by-side (two columns). Stacked default reads as quieter documentation register; side-by-side reads as "table of comparisons" which leans toward feature-matrix register. HVD call.
- Typography for SATISFIES citations — when annotation says *"BAA log requirements per 45 CFR 164.504(e)"*, should "45 CFR 164.504(e)" render in mono (Source Code Pro) to signal "this is a regulatory citation"? Or stay in body type with the existing italic-on-statute treatment? HVD call.
- Synthetic-data marker visual weight — confirm `.alert-info` register reads correctly as "documentation header" not "warning banner." The marker is co-equal to the H1 in visibility per HDG sign-off list row 6; verify the existing `.alert-info` size + spacing achieves co-equal weight or needs a `.alert-info--header-weight` variant.

---

## Cross-primitive considerations

- **Document-district shell is the binding context.** All four primitives land on cena-public pages that compose inside `.document-shell` + `.document-section` (per the COMPONENT-INDEX Document District entry). The shell's 52rem readable measure is the consistent container; primitives compose inside it. This is the cross-cutting visual coherence anchor.
- **FontAwesome Pro v7 is canon for icons** (per `project_haven_ui_icon_canon`); use FA Pro inline (`<i class="fa-solid fa-X"></i>`), not the experimental `.diagram-icon` Material map. Cross-primitive: substrate-diagram needs 4 FA glyphs; patient-journey-timeline cells may want subtle FA glyphs in stage labels; audit-trail-annotation typically doesn't need icons.
- **Color tokens are inherited from Cena Color System v2** (per `project_haven_ui_brand_token_divergence`). The diagram primitives already speak in v2 tokens (`--color-sand-*`, `--color-teal-*`, `--color-diagram-substrate-bg`). No new color additions needed; verify against `_tokens/generated/palette.css` if any variant is authored.
- **Voice / register coherence across the 4 primitives.** All four are documentation-voice / artifact-voice register. None should slip into marketing inflection. Cross-primitive editorial review: confirm captions, hover labels, cell labels, and annotation prose share one quiet-competence voice that doesn't compete page-to-page (per `voice.md` §3 inheritance rule).
- **Cross-primitive new-class additions:** only TWO codification-gated new classes recommended in this audit — `.diagram-hotspot` (substrate-diagram) and `.audit-annotation` (sample-audit-trail). Both are Tier-1 primitive slices. The brownfield-matrix and patient-journey-timeline are pure-or-near-pure composition.
- **No new design-token additions required across the 4 primitives.** Existing `--color-sand-*`, `--color-teal-*`, `--color-diagram-*`, `--font-*`, `--radius-*`, `--stroke-diagram-*` tokens cover the visual surface.

---

## Sequencing recommendation

Ship order to minimize blocking dependencies and front-load the cross-primitive visual-language calls:

1. **patient-journey-timeline (Tier-2 composition, possibly with `.diagram-box--provenance` mini-Tier-1).** Ships first because:
   - It exercises the existing diagram primitives at the most complex scale (9 × 4 swim-lanes), surfacing any visual-language calls (lane backgrounds, provenance-cell register, mobile rendering) that propagate to substrate-diagram.
   - It's the largest visual artifact on the site and the most likely to drive cross-primitive HVD calls.
   - Composition-mostly: no codification debt unless `.diagram-box--provenance` is approved.
2. **substrate-diagram (Tier-1 `.diagram-hotspot` primitive + Tier-2 composition).** Ships second because:
   - The 4-node shape inherits visual-language calls from the timeline slice (icon style, caption register, mobile rendering).
   - The Tier-1 `.diagram-hotspot` primitive is the load-bearing new authoring on this primitive; codifying it is the gate.
3. **brownfield-matrix (Tier-2 pure composition).** Ships third because:
   - Pure composition; no codification gate.
   - Visual register inherits from patient-journey-timeline's table-vs-diagram-distinction calls (e.g., does the brownfield matrix sit in `.document-shell` like the timeline? Yes — confirm composition.).
4. **audit-trail-annotation (Tier-1 `.audit-annotation` primitive + Tier-2 composition).** Ships fourth because:
   - The IS/SATISFIES annotation contract is the most surface-novel pattern and earns full codification ceremony.
   - The 6× repetition on a single page concentrates render verification — easier to verify rendering across 6 instances at once.
   - This primitive's brand spec entry (new section in `haven-directive-styling.md`) is the most net-new brand authoring; sequencing it last lets the earlier slices establish visual coherence for HVD to reference.

The shape-trigger floor (per `.claude/rules/generative-determinism.md`) is honored: both Tier-1 primitives have recurrence evidence at the moment of codification (`.diagram-hotspot` will recur on `/how-the-substrate-works` hub page per IA §4; `.audit-annotation` recurs 6× on one page + is a candidate for future SoP authoring).

---

## Page-composition unlocks

Once the 4 primitives land (3 visual primitives + 1 annotation primitive), the 14 content briefs unlock for PL page composition as follows:

**Pages that can compose immediately after primitives land:**

- `homepage.md` — needs substrate-diagram (§3); all other sections compose from existing primitives (hero text, `.data-table`-shaped proof strip, `.card`-shaped role-router 5-card grid, `.alert-info` shape for audit-trail primitive section, `.text-link` cross-links). **Unlock: after substrate-diagram ships.**
- `your-program-on-cena.md` — needs brownfield-matrix (§2). All other sections (frame-setter, 3 consolidation patterns with playbooks, boundary section, CTA form, wayfinding band) compose from existing PL primitives. **Unlock: after brownfield-matrix ships.**
- `reference-program.md` — needs patient-journey-timeline (§2) + staffing-model diagram (§3) + data-flow architecture diagram (§4). The staffing-model diagram and data-flow diagram likely compose from existing diagram primitives (`.diagram-box` + `.diagram-arrow` + `.diagram-lane`) but warrant a small follow-up audit when this page composes. **Unlock: after patient-journey-timeline ships + small follow-up audit on staffing-model + data-flow diagrams.**
- `sample-audit-trail.md` — needs audit-trail-annotation primitive + the `.alert-info` synthetic-data marker. **Unlock: after audit-trail-annotation ships.**

**Pages that compose immediately with NO Phase-3a primitive blockers (the unblocked majority):**

- `for-clinical-leaders.md` — composition from existing primitives (hero text, prose sections, cross-links, wayfinding band).
- `for-comms.md` — composition from existing primitives.
- `for-program-economics.md` — composition from existing primitives; may want a small cadence-table composition that mirrors the reference-program cadence table (composition only, no new primitive).
- `how-the-substrate-works-hub.md` — composition; the hub is the parent of sample-audit-trail and inherits the substrate-diagram visual at a different altitude (likely reuses the substrate-diagram primitive in a hub-context size variant — composition, not new primitive).
- `integration-and-data-architecture.md` — composition; the data-flow architecture diagram pattern likely composes from existing `.diagram-box` + `.diagram-arrow` primitives (warrants small follow-up confirmation when composed).
- `provenance-and-accountability.md` — composition; this page is the legal/compliance reader's main deep-link surface and inherits voice + annotation patterns from sample-audit-trail.
- `proof.md` — composition; the empty-state-as-rigor framing composes from `.empty-state` (existing PL primitive).
- `about.md` — composition from existing primitives.
- `template-per-contact-landing.md` — composition; template page.
- `template-proof-leaf.md` — composition; template page.

**Pages that may surface secondary primitive needs during composition (warrants small follow-up audit each):**

- `reference-program.md` §3 staffing model diagram (org-chart shape) — may want a small `.diagram-org-cluster` composition or stay as `.diagram-box` + `.diagram-lane` composition.
- `reference-program.md` §4 data-flow architecture diagram (4-node connection topology) — likely composes from `.diagram-graph` Layer-2 helper.
- `for-program-economics.md` cadence-table-like compositions — composes from `.data-table`.

**Bottom line:** 4 Phase-3a primitive slices unlock all 14 pages for PL composition. 4 pages have direct primitive-blockers (homepage, your-program-on-cena, reference-program, sample-audit-trail); 10 pages compose immediately from existing primitives without Phase-3a blockers.

---

## Open questions for Aaron-gate

1. **`.diagram-box--provenance` mini-primitive: ship as part of patient-journey-timeline slice, or accept default `.diagram-box` for provenance cells?** Default-accept means timeline ships as pure composition. Mini-primitive ship adds one new variant + one row codification ceremony but gives the Visual Designer a distinct register for "this is the artifact substrate" vs. "this is a milestone outcome." **My reco:** accept default `.diagram-box` for v1; only ship the variant if HVD requests on review. Saves one codification ceremony; the default sand-100 register reads as documentation, which matches the artifact voice.
2. **Mobile rendering for patient-journey-timeline: accept `.diagram-frame-wrap` horizontal-scroll fallback at first launch, or push the `.diagram-graph` Layer-2 mobile stack-from-data renderer follow-up into Phase 3a scope?** Horizontal-scroll fallback is acceptable per the existing PL Phase-1 ship; the stack-from-data renderer is a follow-up the haven-ui team owns. **My reco:** accept horizontal-scroll for v1; track stack-from-data as a haven-ui follow-up slice not blocking Cena public site launch.
3. **`.audit-annotation` markdown-directive registration (`:::audit-annotation`): include in Phase 3a or defer?** Including registers the three-place change (brand spec + reference-docx generator + HTML handler). Deferring keeps the v1 primitive as HTML-only authoring; markdown-directive registration earns its place when the audit-annotation pattern needs to flow through markdown source for SoPs. **My reco:** defer; codify v1 as HTML PL fragment + components.css + COMPONENT-INDEX + brand spec + consumer-surface refs. Markdown-directive earns place on second consumer (SoP-authoring slice).

---

## Sign-off

- [ ] Aaron-gate (Phase 3a discovery review)
- [ ] Phase 3a authoring slice 1 scoped from this audit
