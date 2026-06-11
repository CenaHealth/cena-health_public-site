# Strategy Directory Rules

**Status:** Reconciled 2026-06-11 against the [Phase 1 brief Amendment 2026-06-11](phase-1-positioning-brief.md), the [Phase 2 IA v2](phase-2-information-architecture.md), and the [voice.md](../brand/voice.md) refresh. **Supersedes** the prior version's category name ("Healthcare Infrastructure for Prescription-Based Nutrition Care"), source-of-truth designation (target-audiences.md as authoritative), and Proof Point Library (uncited stale numbers explicitly forbidden by voice.md §5).

## Purpose of This Directory

The `/strategy/` directory contains the public site's positioning brief, IA, content plan, citation discipline, and related strategic artifacts. This is where the canonical site shape and the per-surface content briefs live.

## Source of Truth Documents (canonical, in priority order)

1. **[phase-1-positioning-brief.md](phase-1-positioning-brief.md)** — positioning verdict, the C-017 category anchor, the 2026-06-11 amendment (CI-forward, two-track, informational-only), open questions, forbidden hero patterns. **Read the Amendment 2026-06-11 block first** when starting any new content draft. The Phase 1 brief is the upstream anchor for everything in this directory.
2. **[phase-2-information-architecture.md](phase-2-information-architecture.md)** — v2 site shape (3 pages + about), per-page IA, two-track posture, cut-list with rationale, voice handoff. Names what the site *is*; the brief names what the site *does*.
3. **[../brand/voice.md](../brand/voice.md)** — voice contract owned by the [Cena Public Site Copywriter](../experts/cena-public-site-copywriter.md) expert. §1 principles, §2 per-surface guidance, §4 forbidden phrasings, §5 site-wide forbidden patterns, §9 CTA voice patterns, §10 citation discipline.
4. **[citation-discipline-spec.md](citation-discipline-spec.md)** — per-claim citation requirements + `[VERIFY]` workflow. Every quantitative claim ($X / Y% / outcome figures / deadlines / peer-reviewed-literature) lives or dies here.

## Working subordinate documents (re-grounded against the v2 IA; check before relying)

- **[phase-2-content-plan-index.md](phase-2-content-plan-index.md)** — per-page content briefs. **The 2026-06-07 version was written against the 10-page IA; most briefs collapse against the new 3-pages-plus-about shape.** Re-anchor before per-page content drafts proceed. Briefs for cut surfaces (`/for-comms`, `/sample-audit-trail`, `/your-program-on-cena` standalone, sub-pages under substrate hub) move to Phase 3+ vision material, not launch deliverables.
- **[phase-2-hdg-review-packet.md](phase-2-hdg-review-packet.md)** — Healthcare Data Governance review packet. The HIPAA/PHI/BAA framing discipline holds substantively for pitch decks + partner contracts; the audit-trail-bearing surfaces that triggered some packet sections are mostly cut from launch. The packet's framing is reference, not a launch gate.
- **[phase-3a-primitive-audit.md](phase-3a-primitive-audit.md)** — visual primitives reuse vs. gap inventory; scoped to 10 surfaces in 2026-06-07 version. Narrower audit needed against the new 3-pages-plus-about shape.
- **[outstanding-partner-input.md](outstanding-partner-input.md)** — UConn comms hinge + other partner-side inputs in flight; the site's reference-program inline section depends on Vanessa's UConn comms read.
- **[target-audiences.md](target-audiences.md)** — pre-amendment shape: 3 health system maturity levels + secondary segments. **The two-track amendment compresses this** into Payers+Investors / Providers+Partners (see Phase 1 brief Amendment + Phase 2 IA §4). Treat target-audiences.md as **historical reference + raw-material source** for problem framing and language samples, not as the authoritative audience map. Revision pending.

## Positioning (canonical)

**Category:** "Clinical Intelligence Infrastructure for Food-as-Medicine" — anchor C-017, owned by [Knowledge/Projects/Cena Health/Knowledge Migration/c-017-canonical-positioning.md](../../../Knowledge/Projects/Cena Health/Knowledge Migration/c-017-canonical-positioning.md). Ambitiously held; pre-seed positioning is allowed to name the category it will own (Aaron 2026-06-07 Q4 + 2026-06-11 reaffirmation).

**Audience-segmented emphasis** (per amendment):

- **Payers + Investors track** leads on *clinical intelligence* — the insights and interventions gained between visits that reduce ED visits and hospital utilization. "Infrastructure" reads as nebulous to this audience per Vanessa.
- **Providers + Partners track** leads on the *turnkey program* + referral-and-data-back. "The infrastructure your nutrition program runs on" lands literally here as direct value.

**Cena is not:** meal delivery; care coordination platform; food vendor; a substrate that exists publicly today.

**Cena is being built to be:** the clinical intelligence layer underneath food-as-medicine programs partners already run — capturing the data the care team needs between visits, supporting accountable-clinician decisions, generating defensible provenance for the program's regulatory and reimbursement requirements.

**Competitive positioning (informational adoption of NourishedRX site shape; positioning differentiation against them):**

- vs. meal/kit vendors (ModifyHealth, CookUnity, Functional Formularies): Cena is *underneath* the program, the program is not the meal.
- vs. program-wrapping-food platforms (NourishedRx): Cena is the substrate the *partner's* program runs on; the meals are downstream of the intelligence, not the product.
- vs. consultancies generating provenance manually: Cena's category is on-demand provenance at higher fidelity, structurally — not a fidelity upgrade, a category difference.

## Proof points and quantitative claims

**The Proof Point Library that previously lived in this file has been removed.** Every claim it contained (30% readmission reduction, 25% ED visit reduction, 85% adherence rate, 1.8% HbA1c reduction, $3,200 savings per patient, 36% gross margins, 60-90 day implementation, 40% higher adherence, etc.) is explicitly listed as a forbidden stale legacy claim in [voice.md §5](../brand/voice.md). None survive without primary-source citation per the citation discipline.

**The working discipline:**

- **Every quantitative claim** ($X / Y% / outcome figure / deadline / peer-reviewed-literature reference) carries primary-source citation per [verify-time-sensitive-claims.md](../../../.claude/rules/verify-time-sensitive-claims.md) and [citation-discipline-spec.md](citation-discipline-spec.md).
- **During drafting:** tag any unverified claim inline with `[VERIFY]`. No draft ships with unresolved `[VERIFY]` tags.
- **"I don't know yet"** or simple omission beats a plausible-sounding substitute number. Voice never invents metrics ([voice.md §1 Audit-Grade-By-Default + §10](../brand/voice.md)).
- **Substrate-mechanic claims** (audit-trail per recommendation, second-system clinical check, every record opened, every agent action) carry an additional gate: per the [Capability-Honest principle](../experts/cena-public-site-copywriter.md) of the Cena Public Site Copywriter, vivid present-tense substrate claims are forbidden because Cena's substrate does not exist publicly today (AVA in vault + intent; sunsetting OpenClaw "Ava"; UConn pilot patient deployment via Spark+Athena Health). Vision specificity in honest future-tense is allowed and encouraged.

## Working with Strategy Documents

### When developing messaging or content

1. **Start with track:** which of the two tracks (Payers+Investors / Providers+Partners) is the surface for? Track determines register first; role refines second.
2. **Match to the site's three jobs** (per Phase 2 IA §1):
    - Job 1: Tell people Cena exists
    - Job 2: Show what Cena is solving
    - Job 3: Offer contact opportunities
   Every section earns its place against one of these.
3. **Lead on problems Cena will solve + value Cena is being built to provide** — not on substrate-mechanic differentiation that implies a deployed posture Cena does not yet have (Aaron 2026-06-11).
4. **Apply voice** per [voice.md](../brand/voice.md) — voice owner is [Cena Public Site Copywriter](../experts/cena-public-site-copywriter.md); the principle ledger (Cap-Honest, Translate-Anchor, Track-Calibrated, Partner-First, Specific-Primitive, Quiet-Comp, Cite-Or-Cut) is the calibration layer.
5. **Support quantitative claims with primary-source citation** per the citation discipline above.
6. **CTA per page-relevance, not global pattern** (Aaron 2026-06-11). Where contact is the page's Job 3, the CTA is direct contact (Calendly, named line, or light form per role-workflow).

### When making positioning calls

- C-017 is the anchor. Public-site copy translates the anchor's "infrastructure" lead per Translate-Anchor when the audience is Payers+Investors (Vanessa: infrastructure reads nebulous).
- Substrate-mechanic differentiation is **not** the site's positioning lever — the substrate isn't deployed publicly, and a marketing site claiming substrate-as-running gets caught by the Capability-Honest gate.
- Category ambition is allowed (we're pre-seed; positioning is allowed to name the category we will own). Deployment claims are not.

## Quality Standards

Before finalizing any strategy document:

- [ ] Anchored to the Phase 1 brief (canonical) + Phase 2 IA v2 + voice.md, in that priority order
- [ ] Tied to one of the two tracks (Payers+Investors / Providers+Partners) or explicitly cross-track
- [ ] Every quantitative claim cited or tagged `[VERIFY]`
- [ ] Every substrate-mechanic claim either honest future-tense or escalated to [Cena Technical Accuracy](../../../Knowledge/Projects/Cena Health/experts/cena-technical-accuracy.md) before drafting
- [ ] No forbidden patterns from voice.md §4 hygiene watchlist or §5 site-wide forbidden patterns
- [ ] Consistent with voice owner's principle ledger (Cap-Honest outranks Specific-Primitive when in conflict)
- [ ] CTA per page-relevance, not global same-CTA pattern

## Strategic Questions to Always Ask

1. **Which track is this for?** Payers+Investors / Providers+Partners / cross-track.
2. **Which of the site's three jobs does this serve?** Exist / Show what we solve / Offer contact.
3. **What's the reader losing without us solving this?** (Problem framing for Job 2.)
4. **What is Cena being built to provide?** (Vision-specific, honest future-tense.)
5. **What proof is cited?** Primary source per citation discipline, or `[VERIFY]` tagged.
6. **What's the contact path here?** Page-relevant CTA, not global pattern.
7. **What forbidden patterns might this hit?** Voice.md §4–§5 + Cap-Honest prohibitions.
8. **What objection might this raise?** Especially for skeptical-reading vetters within each track (legal-compliance, IRB liaison, exec sponsor on the Providers side; investor diligence on the Payers side).

## Cross-references

- **[Phase 1 positioning brief (amended)](phase-1-positioning-brief.md)** — upstream anchor
- **[Phase 2 IA v2](phase-2-information-architecture.md)** — site shape
- **[../brand/voice.md](../brand/voice.md)** — voice contract
- **[citation-discipline-spec.md](citation-discipline-spec.md)** — quantitative claim discipline
- **[../experts/cena-public-site-copywriter.md](../experts/cena-public-site-copywriter.md)** — voice owner expert
- **[Cena Technical Accuracy](../../../Knowledge/Projects/Cena Health/experts/cena-technical-accuracy.md)** — substrate-mechanic claim verification (escalation gate)
- **[Healthcare Data Governance](../../../Knowledge/Projects/Cena Health/experts/healthcare-data-governance.md)** — HIPAA/PHI/BAA escalation
- **[C-017 canonical positioning](../../../Knowledge/Projects/Cena Health/Knowledge Migration/c-017-canonical-positioning.md)** — category anchor source-of-truth

## Documents flagged for revision (not yet done)

- **[target-audiences.md](target-audiences.md)** — pre-amendment 3-maturity-level shape compressed to two-track posture. Treat as historical reference; revision pending.
- **[../research/investor-partner-sitemap.md](../research/investor-partner-sitemap.md)** — pre-amendment sitemap; Phase 2 IA v2 supersedes for site structure.
- **[../research/core-competencies.md](../research/core-competencies.md)** — likely carries pre-amendment differentiator framing + uncited proof points; review against voice.md §5 forbidden patterns before reuse.

_Reconciled 2026-06-11 — supersedes prior version's category, source-of-truth, and proof-point-library content._
