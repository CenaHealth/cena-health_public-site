# Cap-Honest Gate Ledger — Phase 3 Launch Briefs

**Date:** 2026-06-11
**Dispatch:** [Cena Technical Accuracy](../../../Knowledge/Projects/Cena Health/experts/cena-technical-accuracy.md) — second 2026-06-11 dispatch (first verified AVA-not-deployed-publicly + Spark+Athena pairing; this one verdicts the specific claims the launch briefs will need to make).
**Plan:** [`~/.claude/plans/cena-public-site-restrategy.md`](../../../.claude/plans/cena-public-site-restrategy.md)
**Gates:** [Cena Public Site Copywriter](../experts/cena-public-site-copywriter.md) brief authoring for the 4 launch surfaces (`/`, `/for-payers-investors`, `/for-providers-partners`, `/about`) per [Phase 2 IA v2](phase-2-information-architecture.md).
**Verdict vocabulary:** **HONEST-TODAY** (present-tense defensible) · **HONEST-FUTURE-TENSE** (intent+design real; posture not deployed; framed as "Cena is being built to..." / "the program is designed to...") · **CUT** (even honest future-tense overstates).

**Headline summary:** Of the 9 UConn-pilot patient-journey steps, 4 are HONEST-TODAY (the operational meal-delivery surface Spark covers), 4 are HONEST-FUTURE-TENSE (Cena substrate intent — assessment / care plan / adherence / outcome capture), 1 needs Aaron-gate (re-assessment, depending on what "re-" implies). Brownfield-consolidation framing survives as HONEST-FUTURE-TENSE only — the "Cena runs underneath" verb is forbidden in present tense. Agents-first + accountability + substrate-being-built each pass with calibrated tense.

---

## Hotspot 1 — UConn pilot patient-journey sequence (`/for-providers-partners` inline section)

**Source IA:** Phase 2 IA v2 §5 — *"A live academic-medical-center HIV-nutrition program runs on this model today."* Patient-journey shape: *referral → enrollment → assessment → care plan → ordering → fulfillment → adherence check-ins → outcome capture → re-assessment.*

**Verification basis:**
- Spark schema (`dataconnect/schema/schema.gql`) contains zero references to `audit_event`, `care_plan`, `adherence`, `outcome`, or `assessment` as substrate primitives. Athena Health integration is present (athena_id, OAuth callback URLs). The schema is shaped for meal-delivery + care-coordination, not protocol-adherence substrate.
- Spark patients app (`patients/src/app/`) carries routes for: `onboarding/{welcome,consent,preferences}`, `dashboard`, `meals`, `order`, `delivery`, `care-team/{messages,feedback}`, `profile`, `recall` (focused agent-led dietary recall surface).
- AVA-runtime substrate primitives (audit-trail / care-plan ontology / adherence detection / outcome capture) are **in vault + intent** (Knowledge/Projects/Cena Health/Apps/) but **not deployed on Spark** for the UConn pilot.
- UConn pilot's clinical substrate is **partner-clinician + Athena Health workflow**. Spark handles the food-delivery half; the clinical assessment / care-plan / adherence / outcome layers live with the partner.

### Per-step ledger

| # | Step | Verdict | Today-reality | Copy-direction hint | Partner-input dep |
|---|---|---|---|---|---|
| 1 | **Referral** | HONEST-TODAY | Partner clinician at UConn refers a patient into the food-as-medicine program through their existing intake workflow; referral identity surfaces in Spark via `athena_id` / EHR-mediated identifiers. Cena does not generate the referral; Cena receives it. | Present-tense, partner-protagonist: *"A UConn clinician refers a patient into the program through their existing workflow."* Cena is the recipient, not the substrate the referral runs through. | Vanessa confirmation that "UConn clinician" framing matches her comms language (generic-AMC default; UConn-named strict-superset upgrade per outstanding-partner-input #1). |
| 2 | **Enrollment** | HONEST-TODAY | Spark carries patient enrollment via `onboarding/{welcome,consent,preferences}` routes with `authGuard + patientAccessGuard + onboardingGuard`. Consent record is captured. | Present-tense, narrow: *"The patient consents, sets dietary preferences, and is enrolled in the program."* Don't name "Spark"; don't claim a substrate primitive. The enrollment surface IS Spark; that's fine to describe in functional terms. | None. |
| 3 | **Assessment** | HONEST-FUTURE-TENSE | The clinical assessment that scopes the patient's nutrition protocol lives with the **partner clinician**, captured in **Athena Health** (not Spark). Spark's `preferences` is a dietary-preference capture, NOT a clinical assessment. There is no `assessments` table, no instrument linking, no protocol-window math in Spark schema. | Honest future-tense for any Cena-substrate framing: *"Today, the partner clinician runs the clinical assessment in their EHR; Cena is being built to surface assessment-derived protocol parameters back into the care plan automatically."* OR: re-anchor the sentence on the partner — *"A UConn clinician completes the clinical assessment in Athena Health."* Don't claim Cena does the assessment. | Vanessa: does naming "Athena Health" by name in public copy land within UConn's comfort zone? Aaron's 2026-06-11 default was "assume yes" but copy-naming a partner-EHR vendor on the public site is a separate question. Aaron-gate. |
| 4 | **Care plan** | HONEST-FUTURE-TENSE | Spark schema has no `care_plan` entity (the 2026-04-29 dispatch on AVA noted `care_plans.MonitoringSchedule` as jsonb on the AVA side — that's **AVA in vault**, not Spark in production). The partner-clinician care plan lives in Athena Health; Spark consumes downstream meal-relevant parameters. | Honest future-tense: *"The care plan today is authored by the partner clinician in their EHR; Cena is being built to maintain a synchronized care-plan view that the program's downstream surfaces (ordering, check-ins, escalation) read from."* Avoid: *"Cena's care-plan substrate captures the partner's intervention."* — claims a substrate that's vault-only. | None for the framing as written; Andrey if Aaron wants a tighter line on what the synchronized view does today vs. is being built to do. |
| 5 | **Ordering** | HONEST-TODAY | Spark `order` route is built. Patients order against meal-plan parameters (`meals`, `order`, `delivery` routes). | Present-tense, narrow: *"The patient orders meals against the program's parameters."* Don't claim "Cena's care-plan substrate drives the order" — the care plan side is HONEST-FUTURE-TENSE; the order side is HONEST-TODAY. Use the partner-program voice: *"the program's parameters"* rather than implying a substrate connection that doesn't yet run end-to-end. | None. |
| 6 | **Fulfillment** | HONEST-TODAY | Spark `kitchens` app is production-ready (per Spark CLAUDE.md: *"Kitchens Angular app: fully complete (auth, meals, orders, packing slips, delivery route, settings)"*). Delivery is wired in patients app. | Present-tense, narrow: *"The kitchen receives the order, prepares meals against the patient's protocol, and delivers."* Quiet competence — fulfillment is the most-built surface; don't underclaim it, don't overclaim a "tracked-delivery" feature (that's still in spec per Spark CLAUDE.md). | None. |
| 7 | **Adherence check-ins** | HONEST-FUTURE-TENSE | Spark `recall` route is a *focused agent-led dietary-recall surface* (per `recall.routes.ts` + the `patients/src/app/recall/README.md` reference). Adherence-as-substrate-primitive does not exist — there is no `adherence` table, no missed-checkin classifier, no `AlertRouter` (the 2026-04-29 dispatch noted that's AVA-side). Dietary-recall captures intake data; "adherence check-ins" as a Cena-substrate claim overshoots. | Honest future-tense: *"Check-ins are designed to capture intake data and surface adherence patterns back to the care team; today this runs as a focused dietary-recall surface, with the structured adherence layer being built."* Avoid: *"Cena's adherence substrate flags drift automatically."* — claims unbuilt. | Andrey verification: is the recall surface currently deployed at UConn, or is it gated behind a flag for future enrollment? (Affects whether the "today" sentence can name it as running.) Aaron-gate. |
| 8 | **Outcome capture** | HONEST-FUTURE-TENSE | Outcome capture as a substrate primitive does not exist in Spark. The `care-team/feedback` route is a feedback channel, not an outcome-capture instrument. Outcomes for the UConn pilot are captured by **partner clinicians in Athena Health** per the standard protocol workflow. | Honest future-tense: *"Outcomes today are captured by the partner clinician in their EHR; Cena is being built to ingest outcome events and link them back to the care plan + intervention trail."* Or re-anchor on the partner: *"The partner clinician captures outcome measurements through the program's standard protocol."* Don't claim "Cena writes the outcome record." | None for the framing; Vanessa-confirm on whether mentioning what data Cena will eventually ingest invites questions about the BAA scope. |
| 9 | **Re-assessment** | **AARON-GATE** | If "re-assessment" means *the partner clinician re-running the clinical assessment at protocol cadence*, it's HONEST-TODAY (the partner does it; Cena receives downstream changes). If it means *Cena's substrate triggers re-assessment automatically based on adherence/outcome signals*, that's HONEST-FUTURE-TENSE (the trigger logic is AVA-side, not Spark-side). | Aaron call: which "re-assessment" is the IA pointing at? If partner-driven cadence → HONEST-TODAY, frame as partner action. If Cena-substrate-triggered → HONEST-FUTURE-TENSE, frame as design intent. | Aaron-gate — the IA shape isn't specific enough to verdict mechanically. |

### Cross-step pattern (Hotspot 1)

- **The journey today bifurcates by surface owner.** Steps 1, 2, 5, 6 run on Spark (meal-delivery half). Steps 3, 4, 7, 8 run with the partner clinician + Athena Health (clinical half). The "9-step Cena pipeline" framing is HONEST-FUTURE-TENSE — the integration of the two halves into one Cena-substrate pipeline is the thing being built, not the thing running today.
- **Copy-direction synthesis:** the section should make the partner-program/Cena-program bifurcation visible rather than glossed. The honest claim is *"Cena handles the meal-delivery half today; UConn clinicians retain authority and capture clinical decisions in Athena Health; Cena is being built to thread the two together."* That's a defensible read of pilot-stage capability and lets the substrate-substrate-substrate language stay HONEST-FUTURE-TENSE without losing the proof.
- **Don't name "Spark" publicly.** It's the internal monorepo name; partners don't know it; describing surfaces in functional terms (*"the patient ordering surface"*) reads cleaner. (Consistent with Phase 1 brief §4 technical-evaluator surfacing — *"Defer Ava-naming; describe the substrate, not the platform brand."* The same discipline applies to Spark.)
- **Don't name "Athena Health" without Vanessa-confirm.** Naming a partner EHR vendor on the public site is a partner-relationship choice, not a copy choice. Aaron-gate.

---

## Hotspot 2 — Brownfield-consolidation framing (`/for-payers-investors` brownfield section)

**Source IA:** Phase 2 IA v2 §5 — *"Cena runs underneath what you've built, not instead of it."* Four canonical brownfield shapes named: grant-funded clinic, sponsored pilot, Section 1115 waiver, hospital-foundation garden.

### Overall verdict

**HONEST-FUTURE-TENSE for the framing; CUT for any present-tense "Cena runs underneath" claim; HONEST-TODAY carve-outs exist for the problem description and the partner-pattern recognition.**

### Per-claim breakdown

- **"Cena runs underneath what you've built, not instead of it."** — **HONEST-FUTURE-TENSE.** No partner currently runs a program with Cena as the underlying clinical-intelligence layer. UConn is the live pilot; what Cena is doing today at UConn is the meal-delivery half + EHR-mediated identity handoffs, not the substrate-underneath-the-program posture. The framing is the *intent* — defensible as "what Cena is being built to be."
  - **Copy fix:** *"Cena is being built to run underneath what you've built, not instead of it."* OR re-anchor on the partner: *"Your program keeps running on the rails you built. Cena adds the clinical-intelligence layer you can't capture today."* (Honest future-tense, partner-protagonist.)
- **The four canonical brownfield shapes** (grant-funded clinic, sponsored pilot, Section 1115 waiver, hospital-foundation garden) — **HONEST-TODAY for the pattern recognition.** Cena is not claiming to run underneath any of these today; the claim is *"these are the shapes we recognize you're working with."* That's audience-research-grounded, not a deployment claim. Naming them so the reader recognizes themselves is HONEST-TODAY.
  - **Copy direction:** lead with the recognition, then make the Cena-claim honest future-tense. E.g., *"If your program is a grant-funded clinic, a sponsored pilot, a Section 1115 waiver experiment, or a hospital-foundation community kitchen, you know the gap: outcome data fragments across systems that weren't built to talk. Cena is being built to consolidate that layer underneath."*
- **"Substance from prior `/your-program-on-cena` spec; folds in here as a section."** — **survives the Cap-Honest gate with tense-calibration.** The substance was risk-lowering framing built on a deploy-state assumption (Cena is the platform partners consolidate onto). With honest future-tense, the substance still does its risk-lowering work because the *intent* is the risk-lowering frame for a brownfield buyer — *"we recognize what you've already invested; we don't ask you to throw it out."* That's a posture claim, not a deployment claim. HONEST-FUTURE-TENSE.

### What's HONEST-TODAY about brownfield-consolidation

- **The recognition that brownfield is the buyer.** Cena's partner-acquisition reality is brownfield (UConn has an existing HIV-nutrition program). Naming "we know you've built something; we're not asking you to throw it out" is HONEST-TODAY.
- **The problem description.** What payers/investors lose when fragmented brownfield programs can't surface their outcome data — that's a problem statement, not a deployment claim. HONEST-TODAY (and citation-discipline applies to any quantitative claim about ED utilization, readmission, etc., per Cite-Or-Cut).
- **The intent posture.** "We're being built for this kind of partner" is HONEST-TODAY *as a positioning claim* (pre-seed positioning is allowed per Aaron's calibration). What's forbidden is the *deployed-posture* claim that implies brownfield consolidation is currently a Cena product.

### What's CUT

- **Present-tense "Cena consolidates X under Y" claims.** No partner has consolidated under Cena today. Any sentence whose verb implies running consolidation today gets cut.
- **Implied partner-count language.** *"Our brownfield partners"* / *"partners running on Cena's consolidation layer"* / *"the programs we run underneath"* — all imply multiple deployed partners; cut.
- **Comparison-to-alternatives that imply Cena is the running alternative.** *"Unlike platforms that displace your program, Cena runs underneath it"* present-tense — cut. Future-tense version OK: *"Cena is being built to run underneath, not displace."*

---

## Hotspot 3 — Agents-first + accountability model + substrate-being-built (`/about`)

**Source IA:** Phase 2 IA v2 §5 (about page) — *"Agents-first thesis named at stage-appropriate ambition. Accountability model (partner-clinician retains authority; Cena is the substrate being built to capture decision trails)."*

### Per-claim verdicts

#### 3a. Agents-first thesis at "stage-appropriate ambition"

- **Verdict:** **HONEST-TODAY** for the thesis-as-thesis; **HONEST-FUTURE-TENSE** for any claim implying deployed agents-first operations at scale.
- **Reasoning:** Agents-first is an *organizational* thesis (per [project_cena_thesis] memory: *"agents-first businesses outperform; humans provide accountability and trust, not throughput"*) and that thesis is the company's actual operating posture today — a 3-person team running on agents as primary brainpower. As a thesis, naming it is HONEST-TODAY. What overshoots is any framing like "Cena's agents-first substrate runs partner clinical workflows today."
- **Landing direction for Copywriter:** present-tense for the thesis statement *about the company*; honest future-tense for any claim about agents *doing the clinical work*. E.g.: *"Cena is built agents-first — humans hold accountability and decisions; agents handle throughput. Internally, that's how we operate today. In the program, partner clinicians hold clinical authority; Cena's agents are being built to surface decision trails, signal patterns, and reduce the between-visit gap."*
- **"Stage-appropriate ambition" calibration:** pre-seed pre-revenue 3-person team. The about page is the *one* surface where naming the thesis at its actual ambition is appropriate (not the homepage hero, not the payers/investors track lead). Don't tone it down further; don't blow it up bigger.

#### 3b. Accountability model — "partner-clinician retains authority"

- **Verdict:** **HONEST-TODAY.**
- **Reasoning:** This is the operating reality of the UConn pilot (verified by the 2026-06-11 prior dispatch: *"partner-institution clinicians retain accountability"*) and the stated long-term model per [project_cena_accountability_model] memory: *"pilots: partner-institution clinicians retain accountability; evolving as Cena hires its own clinical staff."* It's a present-tense accountability claim about what authority structure governs current partner work. HONEST-TODAY.
- **Landing direction:** present-tense, declarative, quiet. *"Partner clinicians retain clinical authority on every program Cena supports. Cena's substrate doesn't make clinical decisions; it captures, surfaces, and trails the decisions clinicians make."*
- **Forward-evolution carve-out:** the evolving-as-Cena-hires-clinical-staff piece is HONEST-FUTURE-TENSE if it lands on the about page. Recommended: don't include it at launch. The simpler present-tense claim does the work; the evolution doesn't yet need public framing.

#### 3c. Substrate-being-built — "Cena is the substrate being built to capture decision trails"

- **Verdict:** **HONEST-FUTURE-TENSE** — exactly as the IA already frames it (*"is being built to capture"*). The tense is correctly calibrated in the source.
- **Reasoning:** The substrate is in vault + intent (AVA) and design-state (the 2026-04-28 + 2026-04-29 dispatches verified `BaseRepository` auto-audit, `audit_events` schema, immutable append-only, SHA-256 hashes — all built in the AVA codebase). It's NOT deployed publicly; the UConn pilot's audit mechanism is partner-EHR-mediated. So "being built to capture decision trails" is honest because (a) the *capture mechanism* genuinely exists in the AVA codebase and (b) the *deployed posture* doesn't.
- **Landing direction:** keep the IA's tense as-is. *"Cena is the substrate being built to capture decision trails."* If the Copywriter wants to sharpen, the carve-out is the *what* of the decision trails — naming the primitive (audit-trail per recommendation, immutable append-only event log, deterministic hash chain) is allowed in honest future-tense per Specific-Primitive serving Cap-Honest. E.g.: *"Cena is the substrate being built to capture every recommendation, every approval, every escalation as an append-only trail — so the question 'who decided what, and on what basis?' is answerable years from now, not asserted in the moment."*
- **What's forbidden:** any present-tense version. *"Cena captures every clinical action's decision trail"* → CUT. *"Every recommendation Cena makes carries an audit-trail entry"* → CUT (also overstates because "Cena makes recommendations" implies a deployed system that doesn't run publicly today).

### Synthesis for the about page

The IA's framing as written passes the Cap-Honest gate with the tense-calibrations above. The three claims compose into a defensible paragraph for the about page:

> *Cena is built agents-first — humans hold accountability and decisions; agents handle throughput. In the program, partner clinicians retain clinical authority on every patient. Cena is the substrate being built to capture decision trails — to make "who decided what, and on what basis?" answerable years later, not asserted in the moment. We're pre-seed, three people, and one live academic-medical-center pilot in.*

That's ~80 words against the IA's 250-350 budget — plenty of room left for the rest (functional team identification, what we're building, plus whatever Quiet-Comp shape the Copywriter chooses for the "Cena exists" frame).

---

## Cross-hotspot patterns

- **The bifurcation pattern is structural.** Across all three hotspots, the failure mode is the same: a claim that compresses "Cena meal-delivery + Cena clinical-intelligence" into one substrate is overstated, because the clinical-intelligence half lives in vault + intent (AVA) and the meal-delivery half lives in Spark + partner-EHR-mediated identity. Any sentence whose verb implies one Cena substrate doing both halves today is HONEST-FUTURE-TENSE. Sentences that respect the bifurcation can be HONEST-TODAY on either half.
- **Don't name the codebases publicly.** Spark, AVA, OpenClaw — all internal. Public copy uses functional descriptions (*"the patient ordering surface"*, *"the clinical-intelligence layer being built"*). Same discipline Phase 1 brief §4 established for AVA-naming applies to all internal repo names. This is partly a Cap-Honest concern (naming a system implies it exists as a productized thing) and partly a competitive-positioning concern (don't telegraph the internal architecture).
- **Don't name partner EHR vendors without Vanessa-confirm.** "Athena Health" surfaces naturally in any honest description of where the clinical-half lives today. Aaron's 2026-06-11 default was "assume yes" on tenant-isolation + Athena Health production status as *internal-flag* questions, but copy-naming a partner's EHR vendor on the public site is a different question with partner-comfort weight.
- **Partner-protagonist verb construction passes through Cap-Honest cleanly.** When the partner is the grammatical subject (*"A UConn clinician refers..."*, *"Your program keeps running..."*), the sentence carries no Cena-deployment claim and naturally lands present-tense without overshoot. When Cena is the subject (*"Cena captures..."*, *"Cena's substrate writes..."*), the present-tense almost always overshoots. Translation discipline: try the partner-as-subject rewrite first; if the sentence still wants Cena as subject, calibrate tense to HONEST-FUTURE-TENSE.
- **"Today vs. design intent" framing is the IA-named answer.** Phase 2 IA v2 §5 already prescribed *"each step described against what's honest today vs honest design intent"* for the UConn-pilot section. This ledger formalizes that two-column read for each step. Recommend the Copywriter literally adopts a two-column or two-line render in the section (or whatever Quiet-Comp shape lands honestly) so the bifurcation is visible to the reader, not glossed.
- **The 4 launch surfaces compose cleanly under these verdicts.** Homepage: stays at category level + two-track entry; doesn't carry substrate-mechanic claims; Cap-Honest gate fires lightly. Payers+Investors: brownfield-section HONEST-FUTURE-TENSE; CI value-frame HONEST-FUTURE-TENSE; the *"fake it 'til you make it"* Aaron line lands naturally here. Providers+Partners: UConn-pilot patient-journey carries the bifurcation discipline; the partner-program-protagonist voice keeps tense calibrated. About: passes as-IA-framed with the verdicts above.

---

## Aaron-gate questions

Three calls I can't verdict from the technical-accuracy lens:

1. **Step 9 (re-assessment) framing** — does the IA mean "partner-clinician re-runs assessment at protocol cadence" (HONEST-TODAY) or "Cena substrate triggers re-assessment from adherence/outcome signals" (HONEST-FUTURE-TENSE)? The shape of the answer changes the copy direction. Recommend a brief Aaron call (one sentence) before the Copywriter drafts the section.

2. **Naming "Athena Health" publicly** — surfaces naturally in any honest description of where the clinical-half of the UConn pilot lives today. Aaron's 2026-06-11 default was "assume yes" on Athena Health production status as an *internal-flag* question, but copy-naming a partner's EHR vendor on the public marketing site is a separate partner-relationship choice. Recommend Vanessa-confirm or Aaron-decide before the copy lands. (Fallback: describe in functional terms — *"the partner's EHR"* — which keeps the bifurcation visible without naming the vendor.)

3. **Whether the recall surface is currently live at UConn** — affects Step 7 (adherence check-ins) copy direction. If the dietary-recall surface is deployed and patients are using it today, the "today" half of the bifurcation can name a running surface. If it's gated behind a flag for the next enrollment phase, "today" reads differently. Andrey-verification flag (consistent with the existing outstanding-partner-input pattern, though this isn't currently on that list).

---

**End of ledger.** Per dispatch instructions: this ledger is the deliverable; no source files were edited. The Copywriter inherits this as the per-claim verdict trail for brief authoring against the 4 launch surfaces. Substantive disagreements with verdicts route back to this expert for re-verification.
