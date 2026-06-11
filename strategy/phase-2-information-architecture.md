# Phase 2 Information Architecture Spec — Cena Health Public Site

**Status:** Aaron-approved 2026-06-11. **Supersedes** the 2026-06-07 version (preserved in git history). The new shape derives from three sequential recalibrations on 2026-06-11:

1. **Phase 1 brief Amendment 2026-06-11** (Vanessa Tech Talk) — CI-forward emphasis, two audience tracks, informational-not-transactional. See [phase-1-positioning-brief.md](phase-1-positioning-brief.md) Amendment block.
2. **Aaron's three IA-shape decisions 2026-06-11** — adopt the two-track shape; sub-pages by reader-fit not page-count; CTAs by content-relevance not global pattern.
3. **Ava-doesn't-exist + pitch-deck-equivalent reframe 2026-06-11** — Cena's substrate exists in the vault + intent (AVA), in a sunsetting OpenClaw instance previously branded "Ava," and on UConn-pilot patient deployments via Spark+Athena Health (production-paired). Marketing content does not lead on substrate-mechanic differentiation that implies a deployed-substrate posture Cena does not yet hold. **The marketing site's purpose equals the pitch deck's** — tell people Cena exists, show what Cena is solving, offer contact opportunities. That's the floor.

**Date:** 2026-06-11.

**Anchor:** [Phase 1 brief](phase-1-positioning-brief.md) (amended). C-017 — *"Clinical Intelligence Infrastructure for Food-as-Medicine"* — as the canonical category claim, ambitiously held; pre-seed positioning is allowed to name the category it will own (Aaron 2026-06-07 Q4 + 2026-06-11 reaffirmation).

**Voice owner:** [Cena Public Site Copywriter](../experts/cena-public-site-copywriter.md). Principle ledger (Cap-Honest, Translate-Anchor, Track-Calibrated, Partner-First, Specific-Primitive, Quiet-Comp, Cite-Or-Cut) is the load-bearing discipline for every surface this IA names. Audit-trail / substrate-mechanic claim verification escalates to [Cena Technical Accuracy](../../../Knowledge/Projects/Cena Health/experts/cena-technical-accuracy.md) before voice polish runs on any capability copy.

---

## 1. Purpose

The marketing site's job, in Aaron's 2026-06-11 framing:

1. Tell people Cena exists.
2. Show what Cena is solving.
3. Offer contact opportunities.

Same purpose as the pitch deck; web-shaped. The site is not a buying-committee funnel, not an audit-trail-artifact destination, not a substrate-spec hub, not a sales-motion infrastructure for working-session offers Cena doesn't yet run. Every surface decision tests against these three jobs.

---

## 2. Site map

```
/                                  ← homepage (exist + frame what we solve + route to contact)
/for-payers-investors              ← CI-forward problem+value narrative + contact
/for-providers-partners            ← turnkey-program problem+value narrative + UConn pilot proof + contact
/about                             ← footer-only; quiet, structural, honest
```

**3 pages + about.** Per Aaron's 2026-06-11 call: 3-pages-plus-about as the floor; further sub-pages added only if a target reader's concern earns the surface, not by count.

**Two surfaces deliberately absent:**

- Site-wide search — corpus is small enough to scan; chrome without payoff.
- Public contact form (generic) — warm-intro motion + named CTAs; generic forms invite low-signal inbound that erodes quiet-competence.

---

## 3. What's cut from the prior IA (and why)

Explicit so future passes don't quietly drift back.

| Surface | Cut because |
|---|---|
| `/how-the-substrate-works` hub + `/integration` + `/provenance-and-accountability` sub-pages | Pitch-deck-equivalent site doesn't have a substrate hub; site purpose is exist+solve+contact, not technical-evaluator NDA-funnel. |
| `/sample-audit-trail` artifact page | A page showing an artifact a substrate produces — when Cena's substrate doesn't yet produce it for anyone — is exactly the Cap-Honest failure. |
| `/reference-program` standalone surface | UConn HIV-nutrition pilot is real and load-bearing; lives inline on `/for-providers-partners` as proof rather than its own surface. |
| `/your-program-on-cena` standalone surface | Brownfield-consolidation substance is one of the strongest risk-lowering reads for payers+investors; **substance folds into `/for-payers-investors` as a section**, not a surface. |
| `/for-comms` | No live partner co-announcing today; built for a future state. Revisit when UConn comms clears + there's something to co-announce. |
| `/proof` empty-slot collection + leaf template | Empty-slot-as-rigor is sophisticated pattern; pitch-deck-equivalent pre-revenue site doesn't earn it. |
| Per-contact landing template (`/for-[slug]`) | Phase 3+; capability slot intentionally not reserved at this stage. |
| Role-doored 5-card homepage router | Two-track replaces it. Roles nest under tracks per Phase 1 Amendment, not above. |
| Working-session-with-kept-artifact CTA architecture | Mature B2B sales-motion patterns for a 3-person pre-seed team. Replace with contact CTAs sized to actual partner-acquisition motion (warm intros + named contact paths). |
| NDA-gated security-packet documentation room | Earned when a partner organization is actively in technical due diligence; not a launch surface. |

The 2026-06-07 IA also held a `/proof/[partner-slug]` leaf template, a homepage substrate diagram with click-through hot-spots, and a "see Cena from another angle" wayfinding band on every targeted landing. All three are cut from launch — the substrate diagram because it implies "this is what runs in production" (Cena Technical Accuracy verdict, 2026-06-11), the leaf template because there are no proof artifacts yet, and the wayfinding band because the simpler 3-track shape doesn't need cross-target navigation chrome.

---

## 4. Two-track posture

Per Phase 1 Amendment, the two audience tracks ARE the segmentation, not a layer above a single funnel. Roles nest under tracks; track determines register first, role refines second.

### Payers + Investors

- **Primary register:** Clinical-intelligence-forward (per Vanessa: "infrastructure" reads as nebulous to this audience). Value frame: the intelligence gained *between visits* — preventative, actionable interventions that reduce ED visits and hospital utilization.
- **Roles nesting here:** exec sponsor / VP Population Health, VBC CFO, payer medical director, investor.
- **Content axis:** *what healthcare is losing without between-visit clinical intelligence* + *what Cena is being built to provide.*
- **Brownfield-consolidation substance** lives as a section here because it lowers perceived risk for this audience — payers and investors hear less greenfield-risk when the model layers under existing programs.

### Providers + Partners

- **Primary register:** Turnkey-program + referral-and-data-back. *"The infrastructure your nutrition program runs on"* lands literally here per Translate-Anchor's carve-out — for this audience the anchor word is reader-appropriate value, not nebulous framing.
- **Roles nesting here:** clinical champion (CMO / Program Director / PI), technical evaluator (IT/Informatics, FHIR/Epic integration owner), legal-compliance (General Counsel, IRB liaison, privacy officer), comms / external affairs.
- **Content axis:** *operational pain of running a food-as-medicine program without a substrate that captures intervention → outcome* + *how a provider prescribes the intervention and receives data back* + *UConn HIV-nutrition pilot as proof the model works.*

---

## 5. Per-page IA

### Canonical page template

Lightweight; each page customizes:

1. Hero (one-line problem framing + one-line clarifier; no hero-CTA button unless contact is the page's primary job)
2. Problem (one paragraph or short section; what's lost without solving it)
3. What Cena is being built to provide (vision-specific, honest future-tense per Cap-Honest)
4. Proof / risk-lowering material (per page — brownfield-section on payers+investors; UConn pilot inline on providers+partners)
5. Contact CTA (calendar-direct or named-contact-line, per page; not a global pattern per Aaron 2026-06-11)

### Homepage (`/`)

- **Purpose:** Job 1 (Cena exists). Frames Job 2 at category level. Routes to per-track Job 2 surfaces. Offers Job 3.
- **Section sequence:**
  1. Hero — C-017 anchor as the category Cena is being built to own. Subhead frames the bet without claiming deployment. Voice owner picks final wording per Translate-Anchor.
  2. The problem in one paragraph — what food-as-medicine programs and the payers backing them lose without between-visit clinical intelligence.
  3. Two-track entry — two prominent paths: *For payers + investors* / *For providers + partners.* Plain language naming what each track reads. The track-selector IS the homepage's primary navigational CTA.
  4. Quietly, Cena exists — one line on what the company is + what we're building + link to `/about`. No team grid, no leadership theater.
  5. Contact — one direct path. Voice owner picks Calendly-vs-named-contact-line per Cena Public Site Copywriter §9 CTA voice patterns.
- **Deliberately NOT here:** substrate diagram, audit-trail primitive, role-router 5-card pattern, working-session CTA, NDA-gated documentation room.

### Payers + Investors landing (`/for-payers-investors`)

- **Purpose:** Job 2 for the payer/investor audience. Closes with Job 3.
- **Section sequence:**
  1. Hero — CI-forward problem statement: what's lost when the gap between clinical visits stays opaque to the care team.
  2. The value Cena is being built to provide — substrate-as-vision (not substrate-as-deployed-posture). Concrete future-tense per Cap-Honest. Names value primitives (between-visit intelligence, preventative intervention, reduced ED/utilization, system-economic alignment with value-based contracts) without claiming what's running today.
  3. **Brownfield-consolidation as risk-lowering frame.** *"Cena runs underneath what you've built, not instead of it."* Names four canonical brownfield shapes (grant-funded clinic, sponsored pilot, Section 1115 waiver, hospital-foundation garden) so the reader recognizes themselves immediately. Substance from prior `/your-program-on-cena` spec; folds in here as a section.
  4. Where Cena is in its build — honest about pre-seed; honest about the live AMC pilot; ambitious about category. The "fake it 'til you make it" line Aaron approved for the public claim has its natural register here.
  5. Contact — voice owner's CTA pick per page goal. Form-gated calendar if the financial-steward workflow fits; otherwise calendar-direct.

### Providers + Partners landing (`/for-providers-partners`)

- **Purpose:** Job 2 for the provider/partner audience. UConn pilot as proof. Closes with Job 3.
- **Section sequence:**
  1. Hero — turnkey-program framing. *"The infrastructure your nutrition program runs on"* lands literally per Translate-Anchor carve-out.
  2. The problem partners face — operational pain of running a food-as-medicine program without a substrate that captures intervention → outcome → re-assessment.
  3. How the program runs on Cena — the prescribe-and-receive-data-back model in plain language. Vision specificity allowed; deployed-posture overclaim forbidden.
  4. **Reference program — UConn HIV-nutrition pilot, inline section.** Frame-setter doubles as section heading: *"A live academic-medical-center HIV-nutrition program runs on this model today."* Patient-journey shape (referral → enrollment → assessment → care plan → ordering → fulfillment → adherence check-ins → outcome capture → re-assessment), each step described against what's honest today vs honest design intent. Strict-superset edit when Vanessa's UConn comms clears (generic-AMC → UConn-named, no structural change). **Worked indication examples** (CKD / oncology / diabetes hypotheticals) cut per Cap-Honest — claims Cena can't substantiate.
  5. What clinical authority looks like — partner clinicians retain authority; the program preserves their workflows. Defensive read against the "this displaces my dietitians" objection.
  6. Contact — calendar-direct (Calendly or named lead); champion-doored, no form (champions don't fill forms).

### About (`/about`, footer-only)

- **Purpose:** Quiet recognition. Job 1 at lower pressure for the reader who clicks in.
- **Content:** What Cena is. 3-person team named functionally without leadership theater. Agents-first thesis named at stage-appropriate ambition. Accountability model (partner-clinician retains authority; Cena is the substrate being built to capture decision trails). What we're building — honest pre-seed framing.
- **Format:** Single page, ~250–350 words. No team grid; no leadership photo set; no mission-statement boilerplate.

---

## 6. CTA logic

Per Aaron's 2026-06-11 call: CTA choice follows page goals + content relevance. **No global same-CTA pattern imposed.**

- Where contact is the page's Job 3, the CTA is direct contact (Calendly, named line, or light form per role-workflow).
- Where a section is doing risk-lowering or scent work (e.g., brownfield section inside `/for-payers-investors`), CTA is contextual to the section, not a duplicate of the page's bottom contact path.
- Voice owner (Cena Public Site Copywriter) writes CTA copy per page, anchored to [voice.md](../brand/voice.md) §9 CTA voice patterns (which already encode calendar-direct / form-gated / named-contact distinctions).
- **No working-session-with-kept-artifact CTAs at launch** — that's mature B2B sales motion Cena doesn't yet run.
- **No NDA-gated security packet** at launch — earned when a partner organization is in active technical due diligence, surfaced through the warm-intro path, not advertised on the public site.

---

## 7. Site-wide forbidden patterns

Inherits Phase 1 brief Appendix B + voice.md §4 hygiene watchlist + §5 site-wide forbidden patterns. The Cap-Honest discipline this IA encodes extends them:

- All Phase 1 Appendix B forbidden hero patterns (outcome percentage in hero; dollar figure in hero; *"X% reduction in Y"* headline construction; meal/kit/dietitian/kitchen first-viewport imagery; "benefit" in partner-frame copy).
- All voice.md §5 site-wide patterns (member/participant language; case-study-with-named-patient-outcomes; per-patient pricing; testimonials carousel; aspirational present-tense; uncited metrics; stale legacy claims).
- **New Cap-Honest-derived prohibitions** (this IA, 2026-06-11):
    - No substrate-mechanic claim in present-tense ("the substrate writes," "every clinical action carries," "every patient record opened").
    - No audit-trail-as-deployed-feature framing.
    - No "every clinical action" universal-deployment claims.
    - No Cena-substrate-as-currently-running framing — the substrate exists in vault + intent + on UConn pilot via Spark+Athena pairing, not as a Cena-owned production audit layer.
- **Vision specificity in honest future-tense is allowed and encouraged** (Specific-Primitive serving Cap-Honest). Category positioning (C-017) is allowed to be ambitious because it's positioning, not deployment-claim.

---

## 8. Voice handoff

Voice on every surface this IA names is owned by [Cena Public Site Copywriter](../experts/cena-public-site-copywriter.md).

- **Translate-Anchor** governs where "infrastructure" / "substrate" lead. C-017 anchor canonical on About + section heads where it's load-bearing; translated for Payers+Investors lead copy; survives literally on Providers+Partners where it lands as direct value.
- **Track-Calibrated** picks register per landing.
- **Cap-Honest** outranks Specific-Primitive when a vivid present-tense primitive would overstate current capability.
- **Cite-Or-Cut** outranks Credible-First on quantitative claims.

Voice writer dispatches Cena Technical Accuracy as a hard gate before voice polish on any substrate-mechanic copy (per the Capability-claim-without-CTA-sign-off escalation criterion in the expert briefing).

---

## 9. Downstream-deliverable implications

The 2026-06-07 versions of these derived docs need re-grounding against this v2 IA. Listing so the chain stays visible:

- **[phase-2-content-plan-index.md](phase-2-content-plan-index.md)** — content briefs were written against the 10-page IA; most collapse against the new 3-page-plus-about shape. Index re-anchor before any per-page content draft proceeds. Briefs for cut surfaces (`/for-comms`, `/sample-audit-trail`, `/your-program-on-cena` standalone, sub-pages under substrate hub) become Phase 3+ vision material, not launch deliverables.
- **[phase-2-hdg-review-packet.md](phase-2-hdg-review-packet.md)** — HDG-approved framing on HIPAA/PHI/BAA discipline still holds substantively. The audit-trail-bearing surfaces that triggered some of the packet's claim-by-claim discipline are mostly cut from launch; HDG's discipline preserves for pitch decks + partner contracts but isn't load-bearing for this site's launch. The recommended packet amendment (production-deployment-vs-architecture row) surfaced by Cena Technical Accuracy 2026-06-11 is moot for this site — the launch surfaces don't make the substrate-mechanic claims that would trigger that discipline.
- **[phase-3a-primitive-audit.md](phase-3a-primitive-audit.md)** — primitive audit was scoped to 10 surfaces; the new shape needs a narrower primitive audit. Most haven-primitive-codification pressure releases (no audit-trail page → no audit-trail primitive needed).
- **[voice.md](../brand/voice.md)** — per-surface §2 guidance covers surfaces this IA cuts. Recommend marking those §2 subsections as *"Phase 3+ vision; not in scope at launch"* rather than cutting (they may matter later). Voice owner (Cena Public Site Copywriter) handles this calibration on next pass.
- **[strategy/CLAUDE.md](CLAUDE.md)** — carries pre-amendment positioning ("Healthcare Infrastructure for Prescription-Based Nutrition Care") + uncited proof-point library (30% readmission, $3,200 savings, 36% margins, etc.) that voice.md §5 explicitly forbids. Reconcile against the amendment as part of the voice.md refresh.
- **[Lab/cena-health-public-site/CLAUDE.md](../CLAUDE.md)** — references "Target Audiences" doc compressed by the two-track amendment; the amendment compression should land here as a CLAUDE.md update too.

---

## 10. Open work this IA does NOT close

- **UConn comms hinge** (Phase 1 Q1, in-flight per Vanessa's outreach). Strict-superset upgrade from generic-AMC to UConn-named survives as a no-structural-change edit.
- **Category-naming risk** (Phase 1 Q4, Aaron accepted) — C-017 stands as the public category claim.
- **First per-contact landing instance** — Phase 3+; capability slot intentionally not reserved at this stage.
- **Pitch-deck reconciliation pass** — Aaron's 2026-06-11 framing puts this site at parity with pitch-deck purpose. A subsequent pass should verify the messaging across both surfaces stays aligned (likely owned by [Deck Production](../../../Knowledge/Projects/Cena Health/experts/deck-production.md) + Cena Public Site Copywriter jointly).
- **Andrey-verification asks** — Aaron 2026-06-11 verdict was "assume yes" on Spark tenant-isolation + Athena Health production status. The site doesn't lean on those primitives anyway under this IA, so they're not load-bearing for the launch shape; they remain on the to-flag list for pitch-deck + partner-contract surfaces.

---

**End of v2 IA.** Subsequent revisions when:

- UConn comms clears (strict-superset edit on `/for-providers-partners` reference section)
- Downstream content plan or voice.md surfaces a pattern not anticipated here
- The brief's purpose changes again
- Cena's substrate-deployment reality changes materially (e.g., AVA-runtime primitives wire into a public-facing Cena surface, at which point substrate-mechanic content earns its place back)

_v2 — 2026-06-11. Supersedes 2026-06-07 v1._
