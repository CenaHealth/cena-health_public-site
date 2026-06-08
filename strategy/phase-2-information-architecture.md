# Phase 2 Information Architecture Spec — Cena Health Public Site

**Status:** Awaiting Aaron-gate · **Date:** 2026-06-07 · **Phase 2, Substep 1 of 4**

Locks site map, decision-role surface assignments, per-page IA, and CTA architecture against the Phase 1 positioning brief. Aaron-gate required before Substeps 2-4 (voice.md FULL refresh, HDG handoff, citation spec) launch.

**Team:** Information Topology Designer (lead) · Content Design · Channel Partnerships → IA synthesizer. Workflow `wf_2801df58-803`. Plan: [`~/.claude/plans/cena-public-site-restrategy.md`](../../../../.claude/plans/cena-public-site-restrategy.md).

**Anchor:** [Phase 1 brief](phase-1-positioning-brief.md). Positioning anchor C-017 (*"Clinical Intelligence Infrastructure for Food-as-Medicine"*) is the locked frame; this spec translates it into surfaces.

---

## 1. Site map

Hub-and-spoke topology with **7 top-level surfaces** (revised post-Aaron-gate; original 5 plus `/your-program-on-cena` and `/for-comms` per Aaron's Q3 + Q4). Persistent primary nav across all pages.

```
Homepage
├── For clinical leaders            [H1-carrying — champion-doored deep-link]
├── For program economics           [H4-carrying — exec-sponsor-doored deep-link]
├── Your program on Cena            [brownfield-consolidation surface — own top-level URL per Aaron Q3]
├── For comms / external affairs    [explicit comms-doored surface per Aaron Q4]
├── How the substrate works         [shared technical evaluator + legal/compliance hub]
│   ├── Integration & data architecture     [technical evaluator deep-link]
│   ├── Provenance & accountability         [legal/compliance deep-link, IRB liaison destination]
│   └── Sample audit trail                  [artifact page — deep-linkable, no CTA]
├── Reference program               [partner-protagonist blueprint]
└── Proof                           [credibility surface — empty slot pattern at launch]
    └── /proof/[partner-slug]       [per-case-study leaf template, unfilled at launch]

Per-contact landing template (Phase 3+ capability per Aaron Q4 — see §13):
└── /for-[contact-or-org-slug]      [authored-per-contact; same wayfinding pattern as other targeted surfaces]

Footer utility:
└── About                           [single quiet page — what Cena is structurally]
```

**Two surfaces deliberately absent**: site-wide search (corpus < 20 pages, adds chrome without payoff) and public Contact form (warm-intro motion only; a form invites low-signal inbound that undermines quiet-competence). About lives only in the footer.

**Ten top-level URLs at launch** (was 8; added 2 per Aaron-gate Q3+Q4). Sub-pages bring total to 14. Per-contact landings (`/for-[slug]`) are template-shaped and authored as Cena uses the capability — not counted in launch URL count.

**Nav-scale tension flagged.** ITD's original constraint was "5 top-level surfaces; more starts to feel sectioned-SaaS." At 7 nav items, the IA tests that limit. Mitigation options for Substep 2 / Phase 3: (a) split primary nav into "for X" group (clinical leaders / program economics / your program / comms) + "core" group (substrate / reference / proof); (b) keep 7-item nav with visual grouping; (c) accept the tension. **Action:** flag for Aaron review during Substep 2 if voice + visual treatment cannot rescue the 7-item shape.

---

## 2. Decision-role surface map

| Decision-role | First surface (deep-link or homepage) | Read-next path | Stage at first surface |
|---|---|---|---|
| **Clinical champion** | Homepage hero → `For clinical leaders` | → `Reference program` → `How the substrate works / Provenance & accountability` (to arm internal defense) | Recognition |
| **Technical evaluator** | Deep-link → `How the substrate works / Integration & data architecture` | → `Sample audit trail` → NDA-gated security packet | Substantiation |
| **Legal / compliance** | Deep-link → `How the substrate works / Provenance & accountability` | → `Sample audit trail` (single read; replies to champion offline) | Substantiation |
| **Exec sponsor / financial steward** | Deep-link → `For program economics` | → `Your program on Cena` (brownfield section) → `Reference program` | Substantiation |
| **Comms / external affairs** | Homepage + `About` | → `Reference program` (proves co-announcement-safe pattern in our voice) | Recognition |

**Asymmetry honored.** Homepage is champion-shaped (hero invites, spoke labels are champion-questions). Every spoke is a *complete defensible URL* the champion forwards without curating a tour. Four of five roles have a single canonical first surface; the comms reader has two because comms reads positioning *and* organizational posture before forwarding to executive comms peers.

---

## 3. Headline assignment per surface

Aaron's Q2 resolution: H1 and H4 deploy at role-specific surfaces; homepage hero composes a synthesis.

| Surface | Headline | Why |
|---|---|---|
| **Homepage hero** | **HX-1 (recommended):** *"Clinical intelligence infrastructure for food-as-medicine. Built for the programs your partners already run."* | Leads with C-017 anchor (fights NourishedRx shadow head-on by naming category before competitor language can frame the read). Second sentence does partner-enabling work without "benefit" (forbidden) or delivery-primitive language (forbidden). Lands for champion (substrate, partner-enabling) and financial steward (infrastructure reads as defensible spend). Comms-safe. **HX-2 alternative:** *"The substrate your food-as-medicine program runs on. Audit-grade by design."* — tighter, more confident; "substrate" risks not self-defining for cold champion; choose if Aaron's posture is "lead with audit-grade" over "lead with partner-enabling invitation." |
| **For clinical leaders** | **H1:** *"The clinical infrastructure your nutrition program runs on."* | Champion-targeted; partner-enabling frame; speaks to "preserve my clinical authority" question from Phase 1 §2. Audit-trail-per-recommendation primitive (Appendix C #1) is the lead proof below the headline. |
| **For program economics** | **H4:** *"Run your food-as-medicine program on infrastructure that holds up to audit."* | Audit + economic frame for VBC CFO + population-health VP. "Audit" is the bridge word — earns financial-steward (defensible spend) and comms-vetter (citable on co-announcement) reads simultaneously. |
| **How the substrate works (hub)** | *"What the substrate does — and what it doesn't."* | Verb-first, names non-scope alongside scope. Disarms the unknown-unknown read without requiring the visitor to scroll for it. |
| **Integration & data architecture** (sub-page) | *"Built to connect to what you already run."* | Speaks to technical-evaluator's first question. |
| **Provenance & accountability** (sub-page) | *"Every clinical action carries its trail."* | Legal-compliance scan-mode payoff in one line. |
| **Sample audit trail** | *"What an audit-ready record looks like."* | Artifact-as-proof; no marketing voice on the artifact page itself. |
| **Your program on Cena** | *"Cena runs underneath what you've built, not instead of it."* | Brownfield recognition-statement. Names four canonical brownfield shapes in the subhead (grant-clinic, sponsored pilot, 1115 waiver, hospital-foundation garden) so reader sees themselves immediately. **Standalone page** (Aaron Q3 resolution); `/for-program-economics` carries teaser-only with link here. |
| **For comms / external affairs** | *"Cena, translated for your announcement."* | Comms-targeted; speaks to "can I co-announce this without exposure?" question (Phase 1 §2). **Subhead frames the offer:** "co-announcement-safe positioning, brand-asset access, a real partner contact at Cena for messaging questions." |
| **Reference program** | *"A live academic-medical-center HIV-nutrition program runs on this blueprint today. The blueprint generalizes; the program is one instance."* | Frame-setter doubles as headline. Defensible generic-AMC reference; strict-superset UConn upgrade requires only the org-name swap. |
| **Proof** | *"Partner-protagonist proof. The partner is the hero; Cena is the substrate they ran their program on."* | Twilio/Plaid pattern named; empty-slot-as-rigor positioning. |
| **About** | *"What Cena is."* (quiet, structural) | Single page; no team theater; no leadership grid. |

---

## 4. Page-by-page IA spec

### Canonical section template (applies to all content pages, with per-page customization)

1. Hero (one-line claim + one-line clarifier + ≤1 primary CTA; recognition-stage surfaces use no hero CTA)
2. Proof strip (third-party-resolvable signals: named pilot reference, BAA-ready, peer-reviewed nutrition outcomes citations)
3. Thesis section (3-4 sentences naming problem-frame and why substrate posture follows)
4. How-it-works block (3-4 parallel cards with front-loaded mechanic heading + one sentence + one artifact link)
5. Role-targeted block ("What this means for [role]" — arms champion to forward)
6. Proof artifact (inline or one click away; never "trust us we have this" without showing)
7. Objection-resolution band (2-3 short Q+A on highest-frequency vetting questions for primary role)
8. Next-step CTA band (primary + 1-2 lateral routes)

Homepage compresses 1-3 into denser hero composition; role-targeted surfaces move section 5 to position 2-3 because role-fit IS the load-bearing claim.

### Required surfaces — full treatment

#### Homepage (`/`)

- **Purpose:** Pull the clinical champion (dominant warm-intro inbound). Hold door open for vetters who land cold via forwarded link.
- **Audience:** Champion primary; all 5 roles must not fail on cold landing.
- **Section sequence:**
  1. Hero: HX-1 headline + clarifying subhead. **No hero CTA** (recognition stage — body link to brownfield surface inherits CTA load). *Flagged as open question for Aaron, §11.*
  2. Proof strip: live AMC HIV-nutrition pilot reference (generic); BAA-ready; peer-reviewed citations strip (post-Substep 4 citation spec).
  3. Substrate diagram with click-through hot-spots (data-in → reasoning → recommendation → audit trail). Visual + linguistic scent in one element; signals "infrastructure not service" without copy having to say it. **Caveat:** diagram must clear brand-fidelity bar or becomes credibility liability.
  4. Role-doored CTA band (5 cards): *"If you're evaluating clinical fit"* → `/for-clinical-leaders`; *"If you're vetting data architecture"* → `/how-the-substrate-works/integration`; *"If you're scoping the contract"* → `/for-program-economics`; *"If you're reviewing for compliance"* → `/how-the-substrate-works/provenance`; *"If you're translating this internally"* → `/reference-program`. Each card: one sentence of scent + deep-link.
  5. Audit-trail-per-recommendation primitive (Appendix C #1) as concrete proof.
  6. Reference-program teaser → `/reference-program`.
- **Deep-link anchors:** `#substrate-diagram`, `#role-router`, `#audit-primitive`, `#reference-teaser`.
- **CTAs:** No hero CTA. First CTA in section 4 (role-router cards). Lateral routes in section 6.

#### For clinical leaders (`/for-clinical-leaders`)

- **Purpose:** Champion's defensible URL. Arms champion to forward to four vetters with confidence.
- **Audience:** Clinical champion (primary); single role.
- **Headline:** H1.
- **Section sequence:** Hero (H1 + clarifier) → Thesis (clinical-authority-preserved) → How-it-works cards (audit trail per recommendation; second-system clinical check; outcome attribution; provenance for IRB) → "What this means for your committee" (named role-deep-links: IRB liaison → provenance sub-page; CMIO → integration sub-page; CFO → program economics; comms → reference program) → Reference-program inline link → Objection band (3 Q+A on "do I lose clinical authority," "what about my dietitians," "what changes for my patients") → CTA: *"Talk through what arming your committee looks like — 30-min call with our clinical lead"* (Calendly embed, no form gate — champions don't fill forms).
- **Deep-link anchors:** `#clinical-authority`, `#what-this-means-for-your-committee`, `#objections`.

#### For program economics (`/for-program-economics`)

- **Purpose:** Exec-sponsor / financial-steward surface. Brownfield-consolidation lives here as major section (see §6).
- **Audience:** Exec sponsor + financial steward primary; population-health VPs.
- **Headline:** H4.
- **Section sequence:** Hero (H4 + value-based-contract clarifier) → Proof strip (audit-grade for VBC reporting; BAA-ready; reference AMC pilot reporting cadence) → Thesis (system economics: substrate vs. half-FTE-of-spreadsheet-assembly) → **Brownfield-consolidation section** (full §6 treatment embedded here, not separate page) → How-it-works cards (per-program contract structure; reporting-cadence automation; outcome attribution for VBC; multi-site through-line) → Objection band (3 Q+A on "what does this cost," "what's the contract shape," "how does this satisfy our VBC reporting") → CTA: *"Talk through the value-based-contract fit — 30-min call with our clinical lead + economic model"* (form-gated calendar — financial stewards fill forms; it's their workflow).
- **Deep-link anchors:** `#system-economics`, `#brownfield-consolidation`, `#vbc-reporting`, `#contract-shape`.
- **Brownfield placement decision:** Consolidated into this surface rather than separate top-level spoke. *Cross-expert resolution, see §10.*

#### How the substrate works (`/how-the-substrate-works`) — hub + 3 sub-pages

- **Purpose:** Serve technical evaluator + legal/compliance simultaneously without collapsing into developer-portal feel (loses legal) or security-marketing feel (loses technical).
- **Audience:** Technical evaluator + legal/compliance (co-primary).
- **Headline:** *"What the substrate does — and what it doesn't."*
- **Hub section sequence (sticky sub-nav with 8 anchors visible):**
  1. What the substrate is (3-sentence framing in evaluator language)
  2. Data flow diagram (page spine): partner-system → ingestion → reasoning → recommendation-with-citation → audit-trail-write. Anchor: `#data-flow`.
  3. Integration posture: what substrate expects (FHIR endpoints / file drops / API conventions); what it does NOT require. Anchor: `#integration`. (Cross-links to sub-page.)
  4. Reasoning architecture: described without vendor lock-in per Ava vendor-independence stance. Anchor: `#reasoning`.
  5. Provenance + audit trail: what gets logged, queryable, exportable. Anchor: `#provenance`. (Cross-links to sub-page + sample audit trail.)
  6. Data handling + security posture: BAA-ready, encryption-at-rest/in-transit, access-control model, audit-log retention. Anchor: `#security`.
  7. **What the substrate does not do:** explicit non-scope band (does not displace partner clinicians; does not own patient relationship; does not require EHR switch). Anchor: `#scope`. Load-bearing for unknown-unknown defense.
  8. Role-targeted summaries: parallel "For technical evaluators" + "For legal-compliance" sub-sections with next-step CTAs. Anchors: `#evaluator-summary`, `#legal-summary`.
- **CTA (hub):** *"Request the security packet"* → NDA-gated documentation room (Epic/Cerner pattern). Form: name, role, partner-org, BAA-counsel contact.
- **Sub-pages:** `/integration` (technical-evaluator deep-link, same template as hub but indexed on integration); `/provenance-and-accountability` (legal-compliance deep-link, indexed on accountability); `/sample-audit-trail` (artifact page — see below).

#### Sample audit trail (`/how-the-substrate-works/sample-audit-trail`)

- **Purpose:** IRB liaison destination. The page legal/compliance reader closes after reading and replies to champion *"this looks defensible."*
- **Audience:** Legal/compliance + IRB liaisons.
- **Headline:** *"What an audit-ready record looks like."*
- **Content shape:** Annotated sample trail showing one clinical recommendation's full provenance — input data sources with timestamps, reasoning step with model-architecture citation, recommendation with peer-reviewed-literature citations, accountable-clinician approval timestamp, downstream outcome capture, re-assessment trigger. Annotations explain what each field is, what it satisfies (IRB requirement, BAA log requirement, VBC reporting requirement). Sample data fully synthetic — no patient referent, no partner referent.
- **CTAs:** **None.** Per *no-CTA-pages-as-credibility* pattern. Reader's action path is offline (close tab, reply to champion). Adding CTA reads as sales pressure on defensive reader.
- **Deep-link anchors:** `#input-data`, `#reasoning-step`, `#recommendation-citation`, `#clinician-approval`, `#outcome-capture`.

#### Your program on Cena (`/your-program-on-cena`)

- **Purpose:** Brownfield-consolidation standalone surface (was embedded section; promoted to top-level URL per Aaron Q3 resolution). Deep-linked from `/for-program-economics` (teaser), `/for-clinical-leaders` (cross-link), and `/for-comms` (co-announcement-fit framing).
- **Audience:** Exec sponsor primary; clinical champion secondary; comms tertiary.
- **Headline:** *"Cena runs underneath what you've built, not instead of it."*
- **Section sequence:** See full spec in §6.
- **Wayfinding band (per Aaron Q4):** every targeted landing surfaces "see Cena from another angle" — links to `/for-clinical-leaders` (clinical fit), `/for-program-economics` (economic fit), `/how-the-substrate-works` (under-the-hood), `/reference-program` (working example).

#### For comms / external affairs (`/for-comms`)

- **Purpose:** Explicit comms-targeted surface (added per Aaron Q4 resolution). When a partner's comms peer is forwarded a Cena link, they land on a page that frames Cena for *their* job: co-announcement safety, brand-asset access, a named contact for messaging questions.
- **Audience:** Comms / external affairs (primary); partner-org communications, marketing, PR.
- **Headline:** *"Cena, translated for your announcement."*
- **Section sequence:**
  1. Hero (headline + subhead framing the offer: co-announcement-safe positioning + brand assets + named contact)
  2. Co-announcement examples block: 3-4 example co-announcement snippets (joint press release intro, social-post pull quote, internal-memo paragraph) — partner sees the *shape* of what's safe to use
  3. Brand-assets section: logos, color refs, approved positioning language, do's-and-don'ts of how Cena is referenced (Cena is the *substrate*, partner is the *protagonist*)
  4. Pilot-reference language: exact phrasing Cena uses for the generic AMC pilot; tells comms peers what to mirror
  5. Named-contact CTA: *"Talk to our lead on this — Vanessa Sena, CEO"* (or whoever Aaron designates as the comms-conversation owner) — direct line, no form gate. Comms peers don't fill forms when checking a quote.
- **Wayfinding band (per Aaron Q4):** "see Cena from another angle" — links to `/for-clinical-leaders`, `/for-program-economics`, `/how-the-substrate-works`, `/reference-program`, `/proof`.
- **CTA:** *"Direct line to Cena's announcement lead"* — Calendly or direct contact, NOT a form.

#### Reference program (`/reference-program`)

- **Purpose:** Partner-protagonist blueprint. The page comms/external-affairs reader gets sent to. Generic-AMC reference defensible at launch; strict-superset UConn upgrade post-Vanessa-clearance.
- **Audience:** Four of five roles (every vetter eventually asks "show me this is real").
- **Headline:** Frame-setter doubles as headline.
- **Section sequence:** See full spec in §7.

#### Proof (`/proof`)

- **Purpose:** Credibility surface. Empty-slot-as-rigor pattern at launch.
- **Audience:** All roles, substantiation stage.
- **Headline:** *"Partner-protagonist proof."*
- **Content:** Shape-of-proof matrix listing what kind of proof artifact will publish when partners clear (value-based-contract-aligned outcomes study; IRB-reviewed adherence study; system-economic consolidation case; multi-site rollout case). Each slot empty at launch. Empty slots are themselves proof — they show readers Cena thinks rigorously about what counts as proof.
- **CTA:** **None.** Credibility surface, not conversion surface.
- **Leaf template:** Built but unfilled — `/proof/[partner-slug]`. Template sections: partner-protagonist frame (logo + leader quote + program name; Cena named once in byline) → clinical context (partner's attested words) → program shape (links to `/reference-program` with case-specific annotations) → outcomes (primary-source citations per Tech Accuracy discipline) → audit trail (one-screen embed → sample audit trail) → partner-leader closing testimonial → CTA: *"See how this maps to your indication"* → routes to `/reference-program` CTA.

### Secondary pages

- **About** (footer): Single quiet page. What Cena is structurally — agents-first thesis, 3-person team named functionally without leadership theater, accountability model (partner-clinician retains authority; Cena substrate captures decision trail), governance posture. No team grid. No mission-statement section.

---

## 5. Scannability + label hygiene rules

### Scannability primitives (adopt)

- **Heading + first-sentence pairs.** Heading carries claim; first sentence carries qualifier. Front-load load-bearing noun (*"Audit trail per recommendation"* not *"Our approach to audit trails"*).
- **Parallel-structure cards** for substrate mechanics, integrations, role-targeted blocks. 3-4 cards per row; never 9.
- **Inline proof-artifact thumbnails.** Embed thumbnail/preview that opens artifact rather than describing in prose.

### Anti-patterns (avoid site-wide)

- **Bullet soup** as section's whole payload (reads as slide deck dumped on page).
- **Tables for narrative content.** Reserve tables for genuine comparison.

### Label hygiene watchlist

Internal vocab landmines + public-safe alternatives. Highest-yield catches: "Capability matrix," "Patient app," "Provenance trail," "Brownfield consolidation."

| Internal vocab | Public-safe alternative |
|---|---|
| Capability matrix | *Substrate capabilities* / *What the substrate does* (cut "matrix" entirely) |
| Patient app | *Care interface* / *Patient-facing care interface* (never "the app") |
| Partner buying committee | *For partner organizations* (no committee framing) |
| Clinical champion / exec sponsor | *For clinical leaders* / *For program sponsors* (role-titles not deal-roles) |
| Provenance trail | *Audit trail* / *Audit-ready record* (provenance reads as procurement jargon to clinical readers) |
| Brownfield consolidation | *Your program on Cena* / *Running your existing program on Cena* |
| Reference-program blueprint | *Reference program* / *What a program on Cena looks like* |
| Strict-superset upgrade | (internal-only — never reader-facing) |
| Substrate | OK in body + section headings; never alone as nav item |

### Page-level forbidden patterns (extend Appendix B site-wide)

- **Meal/kit/recipe content anywhere.** Once it appears, substrate frame dies even if homepage holds. Includes stock food photography, recipes, dietitian portraits, kitchen scenes.
- **"Member" or "participant" language for end-users.** Patients are "patients" in clinical contexts (matches partner vocabulary) or referenced via partner's framing ("your patients"). Never "Cena's members."
- **Case-study format with named patient outcomes** (even anonymized). Patient-outcome storytelling collapses into delivery-service shape. Reference programs described by mechanics, not patient stories.
- **Per-patient or per-meal pricing.** Per-patient pricing is the delivery-service tell. Economics frame as value-based-contract / per-program, not per-unit.
- **Testimonials carousel.** Partner reference is single, named, in-place (the AMC pilot where it earns its keep), never a carousel.

---

## 6. Brownfield-consolidation surface spec

**Promoted to standalone top-level surface `/your-program-on-cena` per Aaron Q3 resolution** (was embedded section in `/for-program-economics`). `/for-program-economics` retains a brownfield-frame *teaser* section that links here for the full treatment. See §10 for original embed-vs-standalone reasoning + the Aaron-gate reversal.

- **Frame-setter (in-section above-fold):** *"Most partners we talk to already run something — a grant-funded clinic, a sponsored pilot, a Section 1115 waiver, a hospital-foundation garden. Cena runs underneath what you've built, not instead of it."* Names four canonical brownfield shapes by name so reader sees themselves immediately.
- **What-we-replace / what-we-leave / what-we-connect-to matrix.** Three-column visual primitive (table, not sequence diagram — sequence implies linear migration; table implies coexistence). *Replaced:* ad-hoc spreadsheets, manual audit-log assembly, non-interoperable referral tracking, hand-built outcome reports. *Left intact:* partner's clinical staff, dietitian network, food supplier contracts, clinic-side workflows, IRB-approved protocols. *Connected to:* EHR (FHIR endpoint), partner's existing reporting cadence, partner's grant/waiver reporting templates, partner's data warehouse. **Load-bearing visual; does more work than any copy on the page.** Reader sees "Left intact" column before "Replaced" column — by design.
- **Three consolidation patterns, each with 4-step playbook:**
  1. **Grant-program consolidation** (HRSA/Robin Hood/state DPH grant): how Cena becomes substrate that satisfies grant reporting automatically instead of by half-FTE.
  2. **Sponsored-pilot graduation** (running on Foodsmart/ModifyHealth/NourishedRx pilot): how Cena absorbs data trail when pilot ends and partner needs to keep work going.
  3. **Greenfield-adjacent expansion** (one clinic → system-wide): how Cena holds through-line so site 2 and 3 don't fragment into separate data shapes.
- **What stays the partner's.** Explicit one-section restatement of clinical authority + data custody + branding. Unknown-unknown-disarming. Frame as *boundaries*, not gains (no "benefit" per voice.md).
- **CTA:** *"Map your existing program against Cena's substrate — 45-minute working session with our clinical and technical leads. No proposal, no pitch — a working artifact you keep regardless."* High-commitment on Cena's side (45 min, two people); low-commitment on partner's (no proposal pressure). Deliverable they keep is the disarmer. Form: name, role, partner-org, one-sentence "what we run today."
- **Bait-and-switch defense:** Matrix structure. Page never lists Cena's modules; lists partner's surfaces and what happens to each. Cena disappears as *product* and appears as *infrastructure underneath partner's program*.

---

## 7. Partner-protagonist reference-program blueprint spec

`/reference-program`. Distinguished from case study by verb tense: case studies say *"here's what happened with X"*; blueprints say *"here's what the shape of an [indication] program on Cena looks like — your version maps to this."*

- **Frame-setter (doubles as headline):** *"A live academic-medical-center HIV-nutrition program runs on this blueprint today. The blueprint generalizes; the program is one instance."* When Vanessa clears UConn-named, only edit is upgrading "an academic-medical-center" → "UConn Health's." Rest of page stands.
- **Patient-journey timeline (primary visual primitive).** Horizontal swim-lane timeline: referral → enrollment → assessment → care plan → ordering → fulfillment → adherence check-ins → outcome capture → re-assessment. Each swim-lane shows: patient action, clinical staff action, Cena substrate action, **provenance artifact created**. Bottom swim-lane (provenance) makes page do double-duty for legal/compliance reader deep-linked from provenance-trail page.
- **Staffing model.** Org-chart-style diagram: roles partner staffs (clinical champion, program coordinator, dietitian, patient navigators); roles Cena substrate handles (audit-log assembly, adherence monitoring, outcome attribution, second-system clinical checks); roles shared (data review meetings, IRB reporting). Addresses *"but this is only HIV nutrition"* indirectly — staffing model is indication-agnostic; only clinical-protocol-specific roles change between indications.
- **Data flows + reporting cadence.** Single architecture diagram: EHR ↔ Cena substrate ↔ partner data warehouse ↔ grant/waiver reporting templates. Plus reporting-cadence table: what report goes out daily/weekly/monthly/quarterly, who consumes, what artifact generated. Cadence table is system-economics proof — reader sees program produces automatically what they currently produce by hand.
- **"How this maps to your indication" — three worked examples.** Three short sections (~150 words each): *"If your program is [diabetes / CKD / oncology nutrition], here's what changes in the blueprint."* For each: which swim-lane changes, which staffing role changes, which clinical-protocol checks change. Structural answer to *"but this is only HIV nutrition"* — demonstrates mapping on three other indications without claiming live programs in them.
- **CTA:** *"Walk through what your indication's version of this blueprint looks like — 60-minute session with our clinical lead. We'll mark up this page with your indication's specifics; you keep the marked-up version."* Same shape as brownfield CTA: high-effort artifact, no pressure.
- **Case-study-vs-blueprint distinction codified in copy:** page uses word *"blueprint"* in section headers; never *"case study."* Page never says *"our customer X achieved Y outcome"* — says *"the live program produces Y artifact at Z cadence."* Outcomes deferred to `/proof` slot when UConn comms clears.

---

## 8. Provenance-trail artifact page spec

`/how-the-substrate-works/sample-audit-trail`. See §4 for full page treatment.

- **Content structure (not specific data):** Annotated sample trail of one clinical recommendation's full provenance. Sections: input data sources (with timestamps + source-system attribution) → reasoning step (with model-architecture citation, vendor-independent per Ava stance) → recommendation (with peer-reviewed-literature citations satisfying clinical-decision-support framing) → accountable-clinician approval (with timestamp + clinician role, not name) → downstream outcome capture (with measurement timestamp + methodology) → re-assessment trigger (with criteria).
- **Annotations:** Explain what each field is + what it satisfies (IRB requirement / BAA log requirement / VBC reporting requirement / clinical-decision-support audit requirement).
- **Sample data:** Fully synthetic. No patient referent, no partner referent.
- **IRB-liaison reading path:** Liaison lands deep-linked from champion's email. Title + first paragraph establish "this is the page you were sent to" within 5 seconds. Sidebar shows: where you are in substrate hub, sibling sub-pages, sample trail anchors. Breadcrumbs (`How the substrate works › Provenance & accountability › Sample audit trail`) reinforce orientation without claiming visitor cares about hub structure. Liaison reads → closes tab → replies to champion *"this looks defensible."*
- **No CTAs.** Per *no-CTA-pages-as-credibility* pattern.

---

## 9. CTA architecture

**Principle:** map CTAs to decision-role × reading-stage. Recognition stage → in-line text link or no CTA. Substantiation → working-session offers with kept-artifact deliverables. Committal → calendar/form gated by role workflow norms.

| Surface | Primary CTA | Role × stage | Format |
|---|---|---|---|
| Homepage | None hero; section-4 role-router cards inherit CTA load | Champion × recognition | In-context routing, not buttons |
| For clinical leaders | *"Talk through what arming your committee looks like — 30-min call with our clinical lead"* | Champion × committal | Calendly embed, no form gate (champions don't fill forms) |
| For program economics | *"Talk through the value-based-contract fit — 30-min call with our clinical lead + economic model"* | Exec sponsor × committal | Form-gated calendar (financial stewards fill forms; it's their workflow) |
| Your program on Cena (in `/for-program-economics`) | *"Map your existing program — 45-min working session, deliverable you keep"* | Exec sponsor + champion × substantiation | Form: name, role, partner-org, one-sentence context |
| How the substrate works (hub + sub-pages) | *"Request the security packet"* → NDA-gated documentation room | Technical evaluator + legal/compliance × substantiation | Form: name, role, partner-org, BAA-counsel contact |
| Sample audit trail | **None** | Legal/compliance × substantiation | Per credibility-surface pattern |
| Reference program | *"Walk through your indication's version — 60-min session, marked-up blueprint you keep"* | All roles × substantiation | Same form shape as brownfield CTA |
| Proof (collection) | **None** | All roles × all stages | Per credibility-surface pattern |
| Proof leaf (per case study) | *"See how this maps to your indication"* → routes to `/reference-program` CTA | All roles × substantiation | In-context contextual button |
| About | None | All roles × recognition | Footer utility, not buying-relevant |

**Cross-cutting CTA discipline:**

- **High-effort-on-Cena's-side, low-pressure-on-partner-side.** Every "talk to us" CTA describes effort Cena commits (45-min session, marked-up artifact partner keeps, security packet documentation) — never commitment partner makes. Inverts SaaS default (*"schedule a demo!"* → partner does the work). Matches warm-intro reality of Cena's actual partner-acquisition motion.
- **Two surfaces have no CTA, and that's the point.** `/proof` collection and `/sample-audit-trail` are credibility surfaces. CTAs read as desperate (proof) or pushy (audit trail). Legal/compliance reader's path to action is *not* "click a button on provenance page" — it's *"close tab, reply to champion's email saying 'this looks defensible.'"* CTA architecture honors that path by being absent where presence would hurt.
- **NDA-gated documentation room for technical surfaces.** Public technical surface shows enough to make technical evaluator want the room; room itself gated behind NDA + partner-org confirmation. Structural answer to *"publish the model card"* — Contrarian rejected public-publication path; NDA-gated path is substitute that gives technical evaluator what they need without regulatory-teardown risk.
- **Same form shape across substantiation CTAs.** Brownfield + reference-program CTAs use same form (name, role, partner-org, one-sentence context). Small thing reads as competence: partner-evaluator visiting two surfaces in sequence not asked to re-explain. Implementation: single CTA-form component, parameterized by context-prompt.

---

## 10. Cross-expert resolutions

Three places the three experts diverged or made overlapping recommendations.

1. **Brownfield-consolidation placement.** Information Topology Designer proposed top-level spoke (`/your-program-on-cena`). Channel Partnerships proposed top-level surface treatment but embedded in `/for-program-economics` per Phase 1 §4 brownfield-buyer-as-exec-vetter framing. **Team resolution: embed in `/for-program-economics` as major section.** **Aaron-gate reversal (Q3, 2026-06-07): promoted to standalone top-level URL `/your-program-on-cena` per Aaron's framing "this allows us to lean in to multiple marketing angles."** Generalized: every distinct value-frame deserves its own defensible URL. `/for-program-economics` now carries a brownfield-teaser section with a primary link to the standalone surface.
2. **Homepage hero CTA.** Channel Partnerships flagged for explicit Aaron-decision: hero CTA or no hero CTA? Channel Partnerships read: no hero CTA — hero job is establish positioning per H1/H4 split; first CTA in section 4 (role-router cards) where recognition-stage reader has earned context to want next step. Information Topology Designer + Content Design implicit alignment: section-4 role-router cards do CTA work. **Resolution: no hero CTA. First CTA in section 4 role-router.** Surfacing as open question §11 for Aaron-gate confirmation.
3. **Proof collection surface.** Channel Partnerships specified `/proof` collection + per-case-study leaf template (empty at launch, ships built). Information Topology Designer's site map did not include `/proof` as top-level spoke — proof shape lived inside `/reference-program`. **Resolution: `/proof` as top-level spoke at launch.** Reasoning: separates *"this is what proof on Cena looks like (empty-slot-as-rigor)"* from *"this is the blueprint your program would follow."* Reference program is shape-of-engagement proof; `/proof` is outcomes-evidence proof. Two distinct proof modes; conflating into one page compromises both. Empty-slot pattern requires its own canonical surface to read as rigor rather than absence.

**Three places the three experts agreed in full** (recorded once per dispatch instruction):

- **Hub-and-spoke topology** over sectioned-SaaS / single-page / maturity-laddered alternatives.
- **No CTA on `/sample-audit-trail` and `/proof` collection** (credibility surfaces; CTAs hurt the read).
- **Verb-first / role-question section headings** over noun-first feature headings ("Run your existing program on this" routes brownfield-readers; "Audit trails" forces reader to imagine payoff).

---

## 11. Aaron-gate resolutions (2026-06-07)

> All four questions resolved. Substeps 2-4 unblocked. Q3 + Q4 produced structural changes to the spec (see §§1, 3, 4, 6, 13).

1. **Hero CTA absence — APPROVED with named reservation.** Aaron approved the team's recommendation (no hero CTA; role-router cards in section 4 carry first CTA) but flagged unease he was "struggling to name." Working hypothesis: enterprise B2B visitors carry a learned expectation that hero CTA = "this site wants me to engage"; absence may register as *off* without a clear story for why. Mitigation candidates for Substep 2 voice work: (a) a low-key inline link in hero copy ("or jump straight to the substrate diagram"); (b) a below-fold prompt that signals options without reading as CTA. **Action:** Substep 2 voice writer to consider mitigation; if absence still reads thin after voice pass, re-open as a structural call.
2. **HX-1 confirmed** as homepage hero: *"Clinical intelligence infrastructure for food-as-medicine. Built for the programs your partners already run."*
3. **Brownfield gets its own top-level URL — `/your-program-on-cena` becomes the primary surface for the brownfield-consolidation content.** Aaron's framing: *"this allows us to lean in to multiple marketing angles."* Generalized: every distinct value-frame deserves its own defensible URL. **Structural change:** §1 site map and §3 headline assignment updated; §4 now treats `/your-program-on-cena` as standalone page; §6 spec is the page spec for that URL; `/for-program-economics` retains a brownfield-frame *teaser* section with a primary CTA-link to `/your-program-on-cena`.
4. **Comms surface — EXPLICIT, and the question is bigger than implicit-vs-explicit.** Aaron's reframe: targeted-per-audience surfaces are the IA *principle*; per-individual landings (e.g. `/for-dave`) are the *aspiration*; every targeted landing must always surface contextual access back to broader-site vantage points. **Three structural changes:** (a) `/for-comms` added as explicit top-level surface (§§1, 3, 4); (b) new §13 captures per-contact landing as Phase 3+ capability the site IA accommodates; (c) every targeted landing surfaces a "see Cena from another angle" wayfinding band — Substep 2 voice work to write the pattern.

---

## 12. Phase 2 Substep 2-4 scoping preview

### Substep 2: voice.md FULL refresh

- Surface map now exists — voice.md refresh writes per-surface voice guidance (champion-doored vs. economic-vetter-doored vs. credibility-surface differ in posture)
- Hero candidates (HX-1, HX-2, H1, H4, page-specific headlines) are the load-bearing voice samples — refresh anchors voice rules to these
- Label hygiene watchlist (§5) becomes voice.md's *"forbidden phrasings"* section
- Page-level forbidden patterns (§5) extend Appendix B *"forbidden hero patterns"* site-wide
- Resolution of HX-1 vs. HX-2 (Aaron-gate Q2) determines whether voice posture is "partner-enabling invitation" or "audit-grade confidence" as dominant key

### Substep 3: Healthcare Data Governance (HDG) handoff to Vanessa

- HIPAA-adjacent surfaces named: `/how-the-substrate-works/provenance-and-accountability`, `/sample-audit-trail`, `/how-the-substrate-works` security section, NDA-gated documentation room landing
- Visual primitives requiring Haven Visual Designer (Phase 3): homepage substrate diagram (click-through hot-spots), brownfield three-column matrix (replaced/left/connected), reference-program patient-journey swim-lane timeline + staffing org-chart + data-flow + reporting-cadence table, sample audit trail annotation pattern
- Brand-fidelity gate especially load-bearing for substrate diagram (homepage) — diagram quality must clear bar or becomes credibility liability
- Empty-slot pattern on `/proof` requires HDG design — empty must read as rigorous not absent

### Substep 4: Citation spec

- Claim hotspots identified: homepage proof strip (peer-reviewed nutrition outcomes); `/for-clinical-leaders` audit-trail-per-recommendation primitive; `/for-program-economics` system-economics claims (substrate vs. half-FTE); `/reference-program` AMC pilot reporting cadence + outcome artifact descriptions; `/sample-audit-trail` peer-reviewed-literature citations in sample recommendation
- Tech Accuracy must-not-say list from Phase 1 brief becomes Substep 4's copy gate
- Stale legacy proof points (30% readmissions / $3,200 savings / 1.8% HbA1c / 85% adherence from `strategy/CLAUDE.md`) explicitly off-limits until primary-source citation
- HIPAA / PHI / regulatory language hedging (Channel Partnerships *Liability-aware framing guardrails*) requires HDG + counsel review path before any copy lands on `/how-the-substrate-works/security` or NDA-room landing

---

## 13. Per-contact landing capability (Phase 3+ requirement, per Aaron Q4)

Aaron's Q4 resolution reframed the comms surface question into a larger architectural commitment: **the site IA must accommodate per-audience and per-individual targeted landings** as a near-term aspiration, not a one-off shortcut. This section names the requirement; it does NOT build the capability in Phase 2.

### What this commits the site to

- **A per-contact landing template** at URL pattern `/for-[contact-or-org-slug]` (e.g. `/for-dave`, `/for-uconn-health`, `/for-hartford-healthcare`)
- Each template instance is **authored per contact** with custom context — Cena's read of how it fits into *their* specific processes, *their* program, *their* role
- Every per-contact landing carries the same wayfinding band as the other targeted surfaces ("see Cena from another angle") so a forwarded link never strands the reader in a one-frame view

### Why this is a generative-determinism shape

- **Contract** (deterministic, authored once): the landing-page template — section sequence, wayfinding band, brand-fidelity constraints, must-not-say list, citation-discipline
- **Fill** (generative, per-contact): the custom context Cena assembles for the specific contact / org — research on their existing program, mapping to Cena's substrate, named alignments to their stated priorities

This is `generative-determinism.md` applied to surfaces. Same pattern as the deck pipeline (contract = deck shape, fill = per-meeting content), but at the IA layer.

### Strategic-bet linkage

This re-touches the Agentic Discoverability Bet that Phase 1 deferred — *from the other side*. The Bet asked: *can Cena's surfaces be agent-discoverable?* The per-contact landing pattern asks: *can Cena agents generate and emit tailored surfaces for specific contacts?* Both are agent-mediated surface strategies; they compose (an agent-discoverable site that emits agent-generated per-contact landings is the eventual shape). Not building either in Phase 2; the IA must not preclude either.

### Honest limit

Aaron flagged the aspirational gap: *"obviously my claim is large and we don't hit that bar yet but that's the goal."* The capability requires (1) Cena research-and-emit agent infrastructure that doesn't yet exist publicly, (2) operational discipline to maintain per-contact landings as authoritative artifacts, (3) brand-fidelity automation. Phase 2 voice.md refresh writes the *template* voice for the pattern; first per-contact landing ships when Cena has the operational backing.

### Phase 2 implications

- Substep 2 voice.md FULL refresh writes per-contact landing template voice as part of its scope (treated as a target surface like `/for-comms`)
- Wayfinding-band pattern ("see Cena from another angle") authored once in Substep 2; every targeted landing inherits
- No per-contact landing instances built in Phase 2; capability slot is reserved in the IA

### Phase 3+ implications

- First per-contact landing instance ships when (a) operational backing is in place AND (b) a real contact / partner-org warrants the investment — likely Vanessa's or Aaron's lead-in for a specific partner conversation
- Cena research-and-emit agent capability is a separate effort; this IA spec only commits the *template slot*
