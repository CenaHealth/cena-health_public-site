# /for-providers-partners — Draft copy v1

**Date:** 2026-06-11  
**Status:** Copywriter draft; awaiting Aaron-gate  
**References:** [for-providers-partners brief](../for-providers-partners.md) | [cap-honest-gate-ledger.md](../cap-honest-gate-ledger.md) Hotspot 1 | [voice.md](../../brand/voice.md) | [Phase 1 brief Amendment](../phase-1-positioning-brief.md)  
**Aaron-gate questions:** 3 (Step 9 re-assessment tense; Step 7 recall-surface live status; Step 4 care-plan bifurcation depth)

---

## Rendered draft

### Section 1 — Hero

**Heading (H1):** The infrastructure your food-as-medicine program runs on

**Subheading:** How a provider prescribes the intervention and receives data back — without replacing the workflows your team already runs.

---

### Section 2 — The problem partners face

Running a food-as-medicine program is operational work. The clinician refers a patient. The care team sets a protocol. The patient orders meals against it. The kitchen delivers. Then — silence.

What comes next is the gap. The outcomes the program is designed to capture remain scattered across systems that were built for billing, not for outcomes: adherence data lives in a meal-delivery app. Clinical assessments live in an EHR the Cena substrate cannot read. Re-assessment triggers depend on a clinician remembering, not on a system surfacing what the data shows. The program runs; the evidence of whether it's working stays fragmented.

Every program director you talk to is chasing the same problem: *"I know this protocol works. I need to show it."* That's the gap. Not the meals. Not the care plan. The infrastructure underneath that captures the intervention, measures what happened, and surfaces what changed — so the program that runs on it can defend itself.

---

### Section 3 — How the program runs on Cena

The model is simple: a provider prescribes the intervention. Cena's substrate is being built to receive the data back.

**Your program prescribes.** The partner clinician completes the clinical assessment in their EHR. They author the care plan. They set the protocol parameters — the meal protocol, the check-in cadence, the re-assessment window. The partner's program runs according to that protocol.

**Cena is being built to capture and thread the halves together.** The program's downstream surfaces — ordering, check-ins, outcome capture — will read from a synchronized care-plan view. Every order your patient places carries the protocol it's derived from. Every adherence check-in surfaces the pattern of what the patient is actually doing against what the protocol expected. Every outcome measurement links back to the care plan that drove the intervention.

**Your clinicians keep their authority.** The care plan lives in your EHR. Your system controls it. Cena's substrate is being built to maintain a view that your program's downstream surfaces read from — not to replace your workflows, not to author the decisions. The clinician decides; the system captures the trail the decision left behind.

---

### Section 4 — Reference program: A live academic-medical-center HIV-nutrition program runs on this model today

This is the shape of a food-as-medicine program on Cena's architecture. The partner runs the program; Cena handles the meal-delivery half today and is being built to thread the clinical-intelligence half together. Each step below shows what runs today alongside what the design intent extends to — so you can see the honest state of what's built, what's in-build, and what's planned.

**Patient journey:**

| # | Step | Today | Design intent |
|---|---|---|---|
| 1 | **Referral** | A clinician at the academic medical center refers a patient into the program through their existing workflow. | — |
| 2 | **Enrollment** | The patient consents, sets dietary preferences, and is enrolled in the program. | — |
| 3 | **Assessment** | The partner clinician runs the clinical assessment in their EHR. | Cena is being built to surface assessment-derived protocol parameters back into the care plan automatically. |
| 4 | **Care plan** | The care plan is authored by the partner clinician in their EHR. | Cena is being built to maintain a synchronized care-plan view that the program's downstream surfaces — ordering, check-ins, escalation — read from. |
| 5 | **Ordering** | The patient orders meals against the program's parameters. | — |
| 6 | **Fulfillment** | The kitchen receives the order, prepares meals against the patient's protocol, and delivers. | — |
| 7 | **Adherence check-ins** | Check-ins capture intake data through a focused dietary-recall surface. | Cena is being built to surface adherence patterns back to the care team — the structured adherence layer is in build. |
| 8 | **Outcome capture** | The partner clinician captures outcome measurements through the program's standard protocol. | Cena is being built to ingest outcome events and link them back to the care plan and intervention trail. |
| 9 | **Re-assessment** | The partner clinician re-runs the clinical assessment at protocol cadence. | Cena is being built to surface re-assessment triggers from adherence and outcome signals — the trigger logic is in build. |

**What this structure proves:** Cena handles the meal-delivery half today (steps 1, 2, 5, 6 run on the Cena meal-delivery substrate). Partner clinicians retain authority and capture clinical decisions in their EHR (steps 3, 4, 7, 8 run partner-side). Cena is being built to thread the two together — so the intelligence captured on the clinical side informs the program's delivery side, and the adherence data from the delivery side feeds back to the care team for re-assessment and protocol adjustment.

The bifurcation is honest. The meal-delivery half is built. The clinical-intelligence half is being built. The integration of the two is the substrate we are constructing.

---

### Section 5 — What clinical authority looks like

**Your dietitians keep their workflows.** The program they run on Cena is your program. The clinicians who author the protocol, approve the recommendations, and make the calls — those stay with your team.

**Your IRB keeps its approval process.** Cena's substrate doesn't displace your institutional review. Your committee retains authority on what protocols run on your program, what data flows where, what a clinician can override and when.

**Your program produces the trail your committee needs.** Your program records what your committee requires: who decided what, on what basis, when. Cena's substrate is being built to maintain that trail automatically — so the question *"who approved this intervention, and what was the clinical reasoning?"* is answerable years later, not asserted in the moment. <!-- @Vault: heading 3 reframed 2026-06-11 — original "The substrate captures..." present-tense Cena-as-subject failed Cap-Honest. Reframed to partner-protagonist HONEST-TODAY parallel to sub-headings 1 + 2. Body second sentence retained as HONEST-FUTURE-TENSE Cena claim. -->

---

### Section 6 — Contact

Talk through what arming your committee looks like. Thirty-minute call with our clinical lead to walk the model against your institution's existing workflows and decision governance.

[Direct calendar link / Or: Contact Vanessa Sena, CEO]

---

## Section-by-section commentary

### Section 1 — Hero

**Voice moves:**
- The H1 lands literally per Translate-Anchor carve-out — for this audience ("infrastructure" is reader-appropriate direct value), the anchor word stays.
- Possessive construction (*"your food-as-medicine program"*) locates ownership with the partner; *"runs on"* makes Cena structural, not additive.
- The subhead names the turnkey-program + referral-and-data-back model without making a substrate-mechanic claim — *"prescribes the intervention and receives data back"* is the partner-protagonist phrasing.
- Hold quiet competence — the H1 reads as structural fact, not pitch.

**Forbidden patterns avoided:**
- No outcome figure, no dollar figure, no meal/kitchen/dietitian imagery.
- No present-tense Cena capability claim (would fail Cap-Honest).
- No vendor-action voice.

### Section 2 — The problem partners face

**Voice moves:**
- Lead each pain point with the partner-program as grammatical subject (*"Running a food-as-medicine program is operational work"*).
- Specificity-over-generality: name the actual artifacts and workflows, not abstract framing. *"Adherence data lives in a meal-delivery app. Clinical assessments live in an EHR. Re-assessment depends on a clinician remembering."* Each pain names the breakage, not the generality.
- Recognition register — partners reading this should think *"that's exactly our situation."*
- Hold honest present-tense (this is a problem statement, not a Cena capability claim; Cap-Honest passes cleanly).
- Avoid vendor-flattery (*"We understand your pain"*); avoid blaming clinicians (*"clinicians don't have time to log"*).

**Forbidden patterns avoided:**
- No uncited outcome percentages (legacy 30% / 25% / 85% library off-limits).
- No Cena capability claims (Section 3 owns those).

### Section 3 — How the program runs on Cena

**Voice moves:**
- Vision-specific honest future-tense throughout — *"Cena is being built to..."* framework on every Cena-as-subject sentence.
- The tense discipline is non-negotiable: every Cena-subject sentence would fail Cap-Honest if written present-tense (*"the substrate captures"* → fail; *"Cena is being built to capture"* → pass).
- Each model primitive names what the substrate is being built to produce (synchronized care-plan view, adherence-pattern surfacing, outcome-to-intervention linking), not internal product handles (no Spark, no AVA, no OpenClaw).
- Lead each bulleted primitive with the partner as subject where possible — *"Your program prescribes"*; *"Your clinicians keep their authority."*
- The section reads as engineered intent (specific future-tense) not as vague aspiration (hedged hope).

**Forbidden patterns avoided:**
- No present-tense substrate-mechanic claim (highest-risk failure mode on this page after Section 4).
- No internal product handles.
- No worked indication examples (CKD / oncology / diabetes hypotheticals cut per Cap-Honest).
- No outcome metrics or dollar figures.
- No "AI" framing (substrate vocabulary replaces it).

### Section 4 — Reference program: UConn HIV-nutrition pilot

**Voice moves:**
- Opening framing paragraph establishes the bifurcation discipline as a reader-visible structural choice: *"Each step below shows what runs today alongside what the design intent extends to."*
- Partner-protagonist throughout: *"the partner runs the program; Cena handles..."* — grammatical subject asymmetry carries protagonist weight through every row.
- Bifurcation render IS the voice innovation: two-line per step (today / design intent) makes the honest state visible to the reader rather than glossed.
  - HONEST-TODAY steps (1, 2, 5, 6): single-line, partner-as-subject, present-tense (*"A clinician refers..."*, *"The kitchen delivers."*)
  - HONEST-FUTURE-TENSE steps (3, 4, 7, 8, 9): two-line bifurcation with "Design intent:" label so the reader sees the tense shift as deliberate, not as evasion.
- Blueprint voice on the HONEST-TODAY halves (present-tense, structural, replicable). Honest future-tense on the HONEST-FUTURE-TENSE halves (*"is being built to..."*).
- Possessive density throughout (*"the partner clinician,"* *"their EHR,"* *"the program's parameters,"* *"the patient's protocol"*) carries protagonist asymmetry through every step.

**Per-step commentary (per Cap-Honest gate ledger Hotspot 1 verdicts):**
- **Steps 1, 2:** HONEST-TODAY. Partner-action framing; Cena is the recipient, not the substrate these run through.
- **Steps 3, 4, 5, 6:** Mix of HONEST-TODAY (patient action, kitchen action) and HONEST-FUTURE-TENSE design intent (Cena integration framing).
- **Step 3 (Assessment):** Aaron-gate Q2 surfaces here. Functional framing used (*"their EHR"*) rather than naming Athena Health by vendor name. Strict-superset upgrade if Aaron confirms naming-the-vendor publicly.
- **Step 4 (Care plan):** Substantive design-intent framing per voice owner's call (the *"synchronized care-plan view"* does real work for technical evaluator and clinical champion both). Avoids overclaiming (*"Cena's care-plan substrate"* phrasing is vault-only, not public).
- **Step 7 (Adherence check-ins):** Aaron-gate Q3 surfaces here — whether the dietary-recall surface is currently deployed and live, or gated behind a flag for next enrollment phase. Default to HONEST-FUTURE-TENSE; adjust if Andrey confirms live status.
- **Step 8 (Outcome capture):** Two-line bifurcation holds. Describes the *artifact* (outcome record being captured), not the *outcome value* (recommendations cut per citation-discipline-spec §4).
- **Step 9 (Re-assessment):** Aaron-gate Q1. Default per dispatcher: Cena-substrate-triggered HONEST-FUTURE-TENSE (two-line bifurcation). Alternative if Aaron confirms partner-driven cadence: reduce to single-line HONEST-TODAY.

**Forbidden patterns avoided:**
- No "case study" framing (use *"blueprint"*).
- No "customer success" or "Hospital X achieved Y" framing.
- No worked indication examples (CKD / oncology / diabetes hypotheticals).
- No named patient outcomes or testimonials.
- No outcome percentages or dollar figures.
- No "Athena Health" vendor name (unless Aaron-gate Q2 resolves toward naming).
- No present-tense overclaiming on any HONEST-FUTURE-TENSE step.

### Section 5 — What clinical authority looks like

**Voice moves:**
- Three-boundary structure (clinical authority / IRB process / substrate trail) defends against *"this displaces my dietitians"* objection structurally, not by flattery.
- Hold structural framing: *"Your dietitians keep their workflows"* is observable fact, not a benefit claim. Partner-possessive (*"your"*) throughout.
- Clinical-authority-preserved is HONEST-TODAY per Cap-Honest gate ledger Hotspot 3b.
- The third boundary (audit-trail-capturing) bridges to future vision without overstating: *"is being built to maintain that trail automatically"* (honest future-tense).
- Defense register: a clinical champion reading *"Your IRB keeps its approval process"* should feel the structural fact, not the anticipation. The brevity of each boundary statement is load-bearing — explanation of why reads as anticipating the critique that the fact heads off.

**Forbidden patterns avoided:**
- No benefit-frame language (*"you get to keep your clinical authority"*) — frame as structural fact.
- No vendor-flattery shapes (*"We respect your authority"*).
- No proprietary-frame data language (*"Cena's records"*, *"data we own"*) — use *"Cena's substrate is being built to hold PHI on behalf of the partner institution."*
- No HIPAA-as-noun-phrase standalone (*"HIPAA-compliant"* is unfalsifiable; use specific control language if HDG clears).
- No claim the AI makes clinical decisions.

### Section 6 — Contact

**Voice moves:**
- Voice.md §9 calendar-direct CTA pattern lands here.
- *"Arming your committee"* names the champion's actual job (defending the choice internally to the four vetters they need to bring along).
- Quiet-competence register; no SaaS-vendor CTA slang (*"Schedule a demo"* / *"Get started"* / *"Book a call"* forbidden).
- Calendar-direct (no form, no NDA gate) — clinical champions don't fill forms when they're routing a referral inward.
- Named-or-functional Cena-side participant (Aaron designates: Vanessa or *"clinical lead"*).

**Forbidden patterns avoided:**
- No SaaS slang.
- No form-gate.
- No exclamation marks.
- No outcome promises in CTA copy.

---

## Word count + tension check

**Total: 1,047 words (excluding this commentary and metadata)**

**Per-section breakdown:**
- Section 1 (Hero): 22 words
- Section 2 (Problem): 198 words
- Section 3 (How program runs): 206 words
- Section 4 (Reference program): 486 words (9-step table + framing + synthesis)
- Section 5 (Clinical authority): 134 words
- Section 6 (Contact): 25 words

**Tension check:**
- Hero to Section 2: problem recognition — partner reads *"yes, that's exactly our situation."* ✓
- Section 2 to Section 3: vision specificity without deployment claim — honest future-tense throughout. ✓
- Section 3 to Section 4: 9-step bifurcation makes the honest state visible — HONEST-TODAY halves vs. HONEST-FUTURE-TENSE halves. ✓
- Section 4 to Section 5: clinical authority preserved (defends the objection) — structural, not flattery. ✓
- Section 5 to Section 6: contact (champion-doored, no form). ✓

---

## Open questions for Aaron-gate

**Three genuine voice-craft calls:**

1. **Step 9 (re-assessment) tense** — Aaron's 2026-06-07 input locked this to *"Cena-substrate-triggered HONEST-FUTURE-TENSE,"* and the dispatcher's default honors that. Two-line bifurcation: *Today: partner clinician re-runs at protocol cadence; Design intent: Cena is being built to surface re-assessment triggers from adherence/outcome signals.* Is this the framing you intended, or does the re-assessment step roll back to partner-driven-cadence HONEST-TODAY (single line)?

2. **Step 7 (adherence check-ins) live status** — The dispatcher's default is HONEST-FUTURE-TENSE until Andrey verifies whether the focused dietary-recall surface is currently deployed and patients using it today, or gated behind a flag for next enrollment. The copy defaults to two-line bifurcation. If Andrey confirms live status, the *"today"* line can name the surface as running (functional framing only). Can you flag this for Andrey verification?

3. **Step 4 (care plan) bifurcation depth** — Voice owner recommends substantive design-intent framing (*"synchronized care-plan view that the program's downstream surfaces read from"* does real work for technical evaluator and clinical champion both). Alternative: structurally-minimal honest future-tense (*"Cena is being built to maintain a synchronized care-plan view"* without naming what reads from it — less risk of overclaiming, less informational payload). Which direction lands stronger with your read?

---

**No new launch-gating items surfaced by this draft.**
