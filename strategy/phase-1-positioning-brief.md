# Cena Health Public Site — Phase 1 Positioning Brief

**Status:** Aaron-gated 2026-06-07 · **Amended:** 2026-06-11 (see Amendment block below) · **Date:** 2026-06-07 · **Scope:** Strategy brief only (no IA, no wireframes, no HTML this pass)

**Team:** Demand-Generation Strategist (lead) · Pattern Scout · Cena Technical Accuracy · Plain Language Positioning · Contrarian. Synthesized from 5-expert Phase 1 Workflow (`wf_fad100aa-c73`). Plan: [`~/.claude/plans/cena-public-site-restrategy.md`](../../../../.claude/plans/cena-public-site-restrategy.md).

---

## Amendment — 2026-06-11 Tech Talk (Aaron · Vanessa · Andrey)

Filed via `/intake-meeting`. Re-anchors the site's **lead emphasis and structure** per Vanessa's direction. It **does not overturn the C-017 canonical headline** — "Clinical Intelligence Infrastructure for Food-as-Medicine", owned by [`c-017-canonical-positioning.md`](../../../Knowledge/Projects/Cena%20Health/Knowledge%20Migration/c-017-canonical-positioning.md) — it refines how that positioning is *deployed* on the public site. Three changes; everything below this block reads under them.

1. **Lead with "clinical intelligence," not "infrastructure."** Vanessa: "infrastructure" is too nebulous for payers/investors; the resonant hook is the *intelligence gained between visits* — preventative, actionable interventions that reduce ED visits and hospital utilization. Keep programmatic/infrastructure capability **visible as substance** (the unique "providers prescribe interventions and receive data back" offering), not as the lead term. CI already leads the canonical headline — this sharpens the emphasis, it does not reverse the claim.
2. **Two audience tracks, explicitly segmented.** The site splits at the top level into two messaging tracks:
   - **Payers + Investors** — insights and intelligence (the CI value proposition; ED/utilization reduction; the data gained between visits).
   - **Providers + Partners** — the turnkey program + referral process (how a provider prescribes the intervention and receives data back).
   This refines §2's single-funnel framing: the five decision-roles now nest under the two tracks — clinical champion / technical evaluator / legal-compliance / comms → **Providers+Partners**; exec sponsor / financial steward (+ investor) → **Payers+Investors**.
3. **Informational, not transactional.** The site explicitly excludes transactional features — no food ordering, no dietitian-appointment scheduling. Model reference: **NourishedRX's site shape** (structure-as-model). Note the distinction from §3: NourishedRx remains the *primary competitive shadow* to defend against on positioning; emulate its informational-site **structure**, do not adopt its **positioning**.

**Downstream inheritance (separate down-scoping pass, NOT done in this intake):** Phase 2 IA ([`phase-2-information-architecture.md`](phase-2-information-architecture.md)), the content plan, and Phase 3a primitive audit all derive from this brief and must be re-grounded against this amendment — particularly the two-track split and the informational-only scope. Aaron's framing: the prior content pass ran "too big / too future / agentic"; this amendment brings the site back to **what enables sales conversations immediately**. That re-scoping of Phase 2/3 is follow-on work for Aaron to direct.

---

## 1. Positioning verdict

Cena Health is **the clinical intelligence infrastructure that food-as-medicine programs run on** — built for academic medical centers, health systems, and payer-aligned programs that operate their own nutrition interventions and need an auditable, defensible substrate underneath them. The site frames Cena as the layer *underneath* the program, not a vendor that replaces it; the meals are downstream of the intelligence, not the product. **Anchor: C-017 — "Clinical Intelligence Infrastructure for Food-as-Medicine."**

Frame is **proof-led, thesis-framed**: a generically-referenced academic-medical-center HIV-nutrition pilot grounds the claim; the C-017 category claim explains why the proof matters. Niche wedge (food-as-medicine indication) on the site; class wedge held in reserve for Aaron's LinkedIn and investor channels.

## 2. Primary audience + decision-role map

B2B2C partner buying committees. The clinical champion is the only role that *seeks* Cena; the other four *vet* what the champion brought them. Site does both jobs: pull the champion in, arm the champion to defend the choice internally.

> **Per Amendment 2026-06-11:** these five roles now nest under two top-level site tracks — clinical champion / technical evaluator / legal-compliance / comms → **Providers+Partners** (turnkey program + referral); exec sponsor / financial steward / investor → **Payers+Investors** (clinical-intelligence insights). The role-level JTBD below holds within each track.

- **Clinical champion** — CMO, Program Director, principal investigator. Question: *"Will this work for my patient population, and does it preserve my clinical authority?"* Lands first, scanning for clinician-accountability signals and outcomes that survive IRB/quality review.
- **Technical evaluator** — IT/Informatics, FHIR/Epic integration owner. Question: *"Can this integrate without breaking my stack, and what's the data/PHI flow?"* Arrives deep-linked by the champion; wants integration surface, data-handling posture, BAA path.
- **Legal / compliance** — General Counsel, IRB liaison, privacy officer. Question: *"Where's the risk surface — accountability model, PHI custody, regulatory posture?"* Never champions, only stops. Site's job: do not raise a flag — calm, factual, citable.
- **Exec sponsor / financial steward** — VP Population Health, value-based-contract CFO, payer medical director. Question: *"Does this map to a contract I can fund?"* Wants the economic frame and proof the program is real, not pilot-bounded.
- **Comms / external affairs** — fires for academic partners and reputationally-sensitive systems. Question: *"Can I co-announce this without exposure?"* Wants quiet competence, not splash.

## 3. Competitive positioning matrix

Three axes organize the 23-org field (10 deep-read in this pass):

| Axis | Saturated | White space |
|---|---|---|
| **Who pays / who's addressed** | Consumer-primary (ModifyHealth, Functional Formularies) | Partner-primary infrastructure |
| **What the org IS** | Food/meals as product (CookUnity, N4L); program-wrapping-food (NourishedRx) | Clinical intelligence substrate, meals downstream |
| **Outcome unit** | Per-meal/per-member; per-program clinical | Per-system economic + auditable provenance as first-class output |

**Cena's unowned position:** partner-primary × infrastructure-not-food × per-system outcome × *clinical intelligence as the unit of value, with provenance as a first-class output*. Structurally unclaimed in the sample.

**Dangerous shadow: NourishedRx** (primary) — already owns "platform + network + clinical care model" language and leads with system-level economics. A partner reading both cold defaults to "Cena is a smaller, less-proven NourishedRx." Defensive moves codified in §6. **ModifyHealth** (secondary) — any meal/kitchen/dietitian image in the first viewport collapses the infrastructure positioning into "another medically-tailored meal company."

## 4. Site's job-to-be-done per role

What the site must accomplish on first visit, per role — the seed of Phase 2's use-case grid.

- **Clinical champion** — establish "infrastructure not delivery, partner-enabling not partner-displacing" in the first 300 pixels; show one concrete primitive of the substrate (recommend: the audit trail) made visible; give the champion language they can repeat to their CFO without translation.
- **Technical evaluator** — deep-link target: integration posture, data-handling architecture, gateway/vendor-independence framing as *architectural intent*, BAA/security documentation path. Defer Ava-naming; describe the substrate, not the platform brand.
- **Legal / compliance** — citation-disciplined "How the substrate works" surface with sample provenance trail; partner-clinician-accountability model named explicitly; no HIPAA-as-noun-phrase claims; every claim primary-source-cited and dated.
- **Exec sponsor** — economic frame with category-difference (on-demand provenance vs. consultancy fidelity) made legible; brownfield-buyer language ("consolidation onto Cena's infrastructure") rather than greenfield pitch.
- **Comms / external affairs** — quiet-competence aesthetic; no splash; co-announcement-safe language patterns visible in the site's own voice.

## 5. Strategic-bet verdicts

- **Agentic Discoverability Bet — DEFER** (reversal of Demand-Gen's "absorb into site" recommendation). Contrarian's objection landed: a pre-revenue 3-person startup taking on load-bearing maintenance of auditable public artifacts in Phase 1 is the over-build that kills early-stage cycles. No agentic-discovery channel drives partner traffic to Cena today. Ship the site with manual citation discipline; revisit the bet's cheap version (Schema.org, structured fact set) as a Phase 3 add-on when partner volume justifies the maintenance commitment. **Caveat:** if Aaron's LinkedIn class-wedge channel starts generating agent-mediated inbound within 90 days, reopen.
- **On-Demand Provenance framing — YES, surface it, don't lead with it.** Load-bearing for the legal/compliance vetter and the financial steward simultaneously; differentiates Cena from both adjacent categories (meal vendors and consultancies). Dedicated section tied to a concrete artifact (a sample provenance trail from the pilot). **Not the hero** — the page the IRB liaison gets sent to.

## 6. Contrarian-absorbed list

**Absorbed (materially shaped the brief):**

- **"Infrastructure claim with N=1 customer reads as pre-revenue startup overreach."** Absorbed by: holding class-wedge in reserve for non-site channels; framing as "first workflow live, architecture proven, expanding" rather than "production platform"; forbidding hero patterns that imply scale we don't have.
- **"Brownfield buyer is the unknown-unknown."** Absorbed by: explicit brownfield-language requirement in §4 exec-sponsor JTBD; flagged for Phase 2 IA as a required surface ("what running your existing program on Cena looks like").
- **"NourishedRx-shadow defense is currently aspirational — needs forbidden-patterns list."** Absorbed by codified forbidden patterns: no outcome percentage in hero, no dollar figure in hero, no "X% reduction in Y" headline construction, no meal/kit/dietitian/kitchen imagery in first viewport, no use of "benefit" in partner-frame copy.

**Considered and rejected:**

- **"Invert to clinician-led primary audience."** Rejected for Phase 1 because Cena's actual partner-acquisition motion runs through warm intros to clinical leaders inside institutional buying committees, not clinician-viral channels. Worth revisiting if Vanessa's stakeholder map shows clinician-pull dominating committee-push.
- **"Publish the Ava model card / clinical-decision spec (Anthropic pattern)."** Rejected for Phase 1 — regulatory teardown risk at this stage outweighs the trust-artifact upside; reverse to NDA-gated white-glove governance walkthroughs (Epic/Cerner pattern) for partner deep-dives. Revisit when Cena has clinical-governance counsel under retainer.

## 7. Open questions for Aaron-gate

> **Aaron-gate resolutions, 2026-06-07:** Q1 in-progress (Slack to Vanessa sent). Q2 resolved (both headlines deploy, audience-dependent — see below). Q3 resolved (scoped stale-references cleanup landed; full refresh remains Phase 2 prerequisite). Q4 resolved (category-naming risk accepted; proceed with C-017 public claim).

1. **UConn-comms hinge.** Entire frame depends on the AMC pilot being referenceable concretely enough to carry "proof" weight. Can Vanessa get a read on UConn comms timeline before Phase 2 starts? If the generic reference is blocked >6 months, frame degrades to thesis-led-with-deferred-proof and channel sequencing shifts (LinkedIn becomes channel 1, site channel 2).
   - **Status 2026-06-07:** Aaron sent the bounded-ask Slack to Vanessa. Awaiting reply. Phase 2 IA can proceed against the generic-AMC assumption; UConn-named upgrade is a strict-superset edit if/when comms clears.
2. **Headline pick.** Plain Language surfaced two finalists. **Per Amendment 2026-06-11:** both finalists below lead on "infrastructure" — revisit toward a **clinical-intelligence-forward** construction for the Payers+Investors track (Vanessa: "infrastructure" reads as nebulous to that audience). H1/H4 may still fit the Providers+Partners track where "the infrastructure your program runs on" is the literal value. Per-track headline assignment is now a two-track decision, owned by the Phase 2 IA re-grounding pass.
   - **H1:** "The clinical infrastructure your nutrition program runs on" — partner-enabling bet; champion-pulls-org-in.
   - **H4:** "Run your food-as-medicine program on infrastructure that holds up to audit" — provenance-as-posture bet; arm-the-champion.
   - **Aaron's call 2026-06-07:** *both land, audience-dependent.* H4 fits the **business person trying to improve something without in-house staff** (≈ exec sponsor / financial steward — economic + audit frame). H1 fits the **nutrition champion making good on a program-plan dream** (≈ clinical champion — partner-enabling substrate). Both decision-roles are already in §2's map.
   - **Phase 2 IA implication:** deploy both at different surfaces calibrated to inbound role. Homepage hero either picks the dominant inbound (likely champion-led per Demand-Gen's read) or composes a third synthesis. IA pass owns the per-surface headline assignment.
3. **Voice.md refresh.** Existing [`Lab/cena-health-public-site/brand/voice.md`](../brand/voice.md) carries stale artifacts (VozCare naming, "Gentle Strength" aesthetic, uncited outcome statistics: $17B preventable costs / 30% hospitalization reduction / 25% ER reduction / $200 PMPM / $1.2M–$3M Series A). Per Tech Accuracy these cannot ship without primary-source citation. Approve voice.md refresh as a Phase 2 prerequisite, or defer and forbid the stale numbers in the meantime?
   - **Aaron's call 2026-06-07:** approved scoped stale-brand-references cleanup (Cena Color v2 / Lora+Source-Sans-3 / no VozCare / no AVA-voice-assistant / no Gentle Strength / no stale tech stack / generic-AMC partner rule). **Landed 2026-06-07** in commit `3d3e562`. Uncited financial figures kept with explicit Phase-2-citation-required flag; full refresh against this brief is a Phase 2 prerequisite.
4. **Category-naming risk tolerance.** Publishing "Clinical Intelligence Infrastructure for Food-as-Medicine" as a public category claim invites well-capitalized competitors (Foodsmart, NourishedRx, even non-FAM healthcare-AI players) to read the playbook and execute faster. Is Cena ready for what happens if a Series-C-funded competitor adopts this positioning within 90 days?
   - **Aaron's call 2026-06-07:** risk accepted. "Fake it 'til you make it — not ready yet but we can get there together." Proceed with C-017 as the public category claim; Phase 2 voice work leans into it confidently rather than hedging.

## 8. Phase 2 scoping preview (gated on Aaron approval)

- **Voice.md refresh** against C-017 + Cena v2 brand canon + Tech Accuracy's must-not-say list + internal-vocab landmines from Plain Language. Prerequisite for any site copy.
- **Information architecture** — site map honoring the champion-pulls / four-vetters-defend asymmetry; deep-link targets per decision-role; brownfield-buyer "consolidation" surface; provenance-trail artifact page; partner-protagonist reference-program blueprint (Notion-templates pattern, not a case study).
- **Citation-discipline spec** — every claim primary-source-cited and dated per `verify-time-sensitive-claims.md`; mechanism for citation maintenance as canon shifts.
- **Healthcare Data Governance review handoff** — Phase 2 cannot ship copy carrying HIPAA/PHI/encryption/BAA language without HDG sign-off; route to Vanessa.
- **Content plan** — section-by-section copy briefs against the IA, gated through a 4-expert panel (Plain Language, Tech Accuracy, Healthcare Data Governance, Brand Voice) before any draft ships to Aaron.

---

## Appendix A — Adjacent-industry pattern moves (Pattern Scout, distilled)

Five patterns surfaced; brief uses three. Full reasoning in workflow transcript.

- **Twilio / Plaid** — partner-protagonist case studies (the partner is the hero, Cena is the substrate). Adopted for Phase 2 reference-program design.
- **Notion / Lattice** — templates-as-proof-of-shape; publish a "reference clinical program" blueprint as imagination-tax reducer. Adopted for Phase 2.
- **Bloomberg / FactSet** — embedded-infrastructure positioning (Cena's intelligence lives *in* the partner's existing systems, not in a separate portal). Adopted for technical-evaluator surfacing.
- **Stripe Atlas / Docs** — docs-as-product surface. *Deferred* per Contrarian's operational-commitment objection; revisit if agentic-discoverability reopens.
- **Anthropic / OpenAI model cards** — auditable spec as marketing artifact. *Rejected for Phase 1* per Contrarian's regulatory-teardown objection.

## Appendix B — Forbidden hero patterns (codified)

To prevent collapse into the NourishedRx shadow:

- No outcome percentage in hero.
- No dollar figure in hero.
- No "X% reduction in Y" headline construction.
- No meal / kit / dietitian / kitchen image anywhere in the first viewport.
- No use of "benefit" in any partner-frame context. Reserve "program" for partner-owned programs.

## Appendix C — Hard-claim translations (Plain Language, for use in IA)

The audit/provenance stack translated for champion-readable copy:

- "Every patient record opened, edited, or acted on leaves a trail — automatically, by the system, not by a clinician remembering to log it."
- "Records can be added, never altered. Every agent message carries a cryptographic seal — so the question 'was this changed?' is answerable, not asserted."
- "Each partner program runs in its own data partition. Each role on a care team sees what their job requires — no more, by enforcement, not by policy."
- "Agents propose. Accountable humans approve. Five categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training."
- "Every agent action shows its work — what it concluded, how sure it was, and what a second system checked against it before the work moved forward."

Pick one for the hero ("audit trail" recommended); let a deeper "How the substrate works" surface carry the rest.
