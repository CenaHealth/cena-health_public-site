# Cena Health Public Site — Project Rules

**Status:** Reconciled 2026-06-11 against the [Phase 1 brief Amendment 2026-06-11](strategy/phase-1-positioning-brief.md), the [Phase 2 IA v2](strategy/phase-2-information-architecture.md), and the [voice.md](brand/voice.md) refresh. Supersedes the prior version's "Healthcare infrastructure for prescription-based nutrition care" positioning frame, "investor and hospital partner acquisition" single-funnel framing, "target-audiences.md as source of truth" claim, and the proof-points-via-metrics-from-sitemap directive.

## Project Context

The Cena Health public site is in the **strategic planning and copywriting phase** for a public marketing/awareness surface. The site's job, per Aaron 2026-06-11, **equals the pitch deck's**: tell people Cena exists, show what Cena is solving, offer contact opportunities.

**Current phase:** strategy + IA + voice + content planning. Pre-development.

**Not yet:** building features, writing code, implementing technical solutions.

**Site shape (Phase 2 IA v2):** 3 pages + about. Homepage + `/for-payers-investors` + `/for-providers-partners` + `/about` footer-only. See [strategy/phase-2-information-architecture.md](strategy/phase-2-information-architecture.md) for the canonical IA.

## Brand Voice & Messaging

**Single source of truth:** [brand/voice.md](brand/voice.md).

**Voice owner:** [Cena Public Site Copywriter](experts/cena-public-site-copywriter.md) — project-tier expert; principle ledger (Cap-Honest, Translate-Anchor, Track-Calibrated, Partner-First, Specific-Primitive, Quiet-Comp, Cite-Or-Cut) is the calibration layer. Dispatch via `/route` or directly when copy decisions need calibration.

Core voice posture (full detail in voice.md):

- Credible before charismatic — strip persuasion that doesn't survive a cited objection
- Partner-protagonist — the partner is the hero; Cena is the substrate they ran their program on (where the word lands; translated for audiences where it reads nebulous)
- Specificity over generality — concrete primitives beat abstract framings
- Quiet competence — no superlatives; no exclamation marks in body
- Audit-grade by default — every quantitative claim primary-source-cited; voice never invents metrics

## Key Strategic References (priority order)

1. **[strategy/phase-1-positioning-brief.md](strategy/phase-1-positioning-brief.md)** — positioning verdict, C-017 category anchor, 2026-06-11 amendment (CI-forward, two-track, informational-only), open questions, forbidden hero patterns. **Read the Amendment 2026-06-11 block first** when starting any new content draft.
2. **[strategy/phase-2-information-architecture.md](strategy/phase-2-information-architecture.md)** — v2 site shape, per-page IA, two-track posture, cut-list with rationale.
3. **[brand/voice.md](brand/voice.md)** — voice contract.
4. **[strategy/citation-discipline-spec.md](strategy/citation-discipline-spec.md)** — quantitative claim discipline.
5. **[strategy/CLAUDE.md](strategy/CLAUDE.md)** — strategy-directory-local rules (reconciled 2026-06-11; canonical source-of-truth ordering for strategy work).

## Positioning Anchor

**Category:** "Clinical Intelligence Infrastructure for Food-as-Medicine" (C-017). Ambitiously held; pre-seed positioning is allowed to name the category Cena will own. Public claim accepted per Aaron 2026-06-07 Q4.

**Audience-segmented emphasis** (per amendment):

- **Payers + Investors** lead — clinical intelligence; insights gained between visits; ED/utilization reduction
- **Providers + Partners** lead — turnkey program + referral-and-data-back; the infrastructure your nutrition program runs on (where the anchor word lands as literal value)

**What Cena is being built to be:** the clinical intelligence layer underneath food-as-medicine programs partners already run.

**What Cena is not:** a food vendor; a meal-delivery service; a care-coordination platform that runs the partner's program instead of underneath it; a substrate that exists publicly today.

## Working Subordinate Documents

Pre-amendment shape; treat as historical reference until revised. Don't rely on them as authoritative for current shape.

- **[strategy/target-audiences.md](strategy/target-audiences.md)** — pre-amendment 3-maturity-level audience model. Two-track amendment compresses this. Useful as raw-material source for problem framing and language samples; not authoritative for audience map. Revision pending.
- **[research/investor-partner-sitemap.md](research/investor-partner-sitemap.md)** — superseded by [Phase 2 IA v2](strategy/phase-2-information-architecture.md) for site structure.
- **[research/generalized-sitemap.md](research/generalized-sitemap.md)** — pre-amendment; superseded as above.
- **[research/multi-site-architecture.md](research/multi-site-architecture.md)** — Phase 3+ vision; not load-bearing for launch.
- **[research/core-competencies.md](research/core-competencies.md)** — likely carries pre-amendment differentiator framing + uncited proof points. Review against voice.md §5 forbidden patterns before reuse.
- **[research/competitors.md](research/competitors.md)** + **[research/competitor-sitemaps.md](research/competitor-sitemaps.md)** — competitive intel still useful as raw input; competitive positioning framing in Phase 1 brief §3 supersedes any positioning conclusions in these docs.

## Content Development Guidelines

### When writing copy

1. **Start with track:** Payers+Investors / Providers+Partners / cross-track. Track determines register first; role refines second.
2. **Match to one of the site's three jobs:** exist / show what we solve / offer contact (Aaron 2026-06-11).
3. **Lead on problems Cena will solve + value Cena is being built to provide.** Do not lead on substrate-mechanic differentiation that implies a deployed-substrate posture Cena does not yet have.
4. **Apply voice** per [brand/voice.md](brand/voice.md). When in doubt, dispatch the Cena Public Site Copywriter expert via `/route`.
5. **Every quantitative claim** ($X / Y% / outcome figure / deadline / peer-reviewed-literature) tagged `[VERIFY]` in draft; resolved against primary source before ship. "I don't know yet" or omission beats a plausible substitute number.
6. **Substrate-mechanic claims** (audit-trail, clinical-decision-support, accountable-clinician approval, etc.) gate through [Cena Technical Accuracy](../../Knowledge/Projects/Cena Health/experts/cena-technical-accuracy.md) before voice polish. Vivid present-tense substrate claims are forbidden — Cena's substrate does not exist publicly today.
7. **Structure for scanning** — bullets, subheads, short paragraphs; per voice.md §1 Specificity-Over-Generality.
8. **CTA per page-relevance, not global pattern** (Aaron 2026-06-11).

### When making positioning calls

- C-017 anchor stands. Public-site copy translates the anchor's "infrastructure" lead per Translate-Anchor when the audience is Payers+Investors.
- Category ambition is allowed (pre-seed positioning may name the category it will own). Deployment claims are not.
- Substrate-mechanic content is not the site's positioning lever at launch.

### When doing research

1. **Look for problem-framing primary sources** — peer-reviewed nutrition outcomes literature, payer market data, regulatory deadlines. Citation discipline is non-negotiable.
2. **Identify gaps the C-017 category would solve** — what's lost when between-visit clinical intelligence isn't captured.
3. **Find language patterns** — how do partners and payers talk about these problems? Language samples for voice writer.
4. **Validate against the amendment** — does the research support the two-track positioning, or does it surface a finding that should re-open the amendment?

## File Organization

- **`/brand/`** — voice, visual identity, brand guidelines (canonical: voice.md)
- **`/strategy/`** — positioning brief, IA, content plan, citation discipline (canonical: see strategy/CLAUDE.md)
- **`/research/`** — market research, competitor analysis, sitemaps (mostly pre-amendment; review before reuse)
- **`/wireframes/`** — visual mockups (when authored against the v2 IA)
- **`/experts/`** — project-tier experts (currently: Cena Public Site Copywriter)
- **`/public/`** — (Future) actual site content when ready to build

## What NOT to Do

- ❌ Build/code without explicit direction (still in planning phase)
- ❌ Use generic healthcare platitudes ("transformative" / "revolutionary" / "game-changing" / "next-generation" / "seamless" / "empower" / "solutions" — all voice.md §4 forbidden)
- ❌ Use the stale proof-point library (30% readmission reduction, $3,200 savings, 36% margins, etc.) — explicitly forbidden by voice.md §5 until re-cited
- ❌ Imply Cena's substrate is deployed-as-running (Cap-Honest violation)
- ❌ Use single-funnel "buyer-journey" framing — two-track posture replaces it
- ❌ Use 3-maturity-level audience framing from target-audiences.md as authoritative — superseded by the amendment's two-track split
- ❌ Write long paragraphs in marketing copy — bullets and short sentences per voice.md
- ❌ Use emojis in professional copy (unless Aaron explicitly requests)
- ❌ Create generic "About Us" content — voice.md §2 About guidance is the canonical shape (quiet, structural, ~250-350 words, no team grid)
- ❌ Include outcome percentages, dollar figures, "X% reduction in Y" headlines, meal/kit/dietitian/kitchen imagery in first viewport, or "benefit" in partner-frame copy — all voice.md §5 site-wide forbidden patterns

## Proactive Behaviors

When asked for help with copy, IA, or strategy:

1. **Ask clarifying questions where the answer changes the recommendation:**
   - Which track is this for? (Payers+Investors / Providers+Partners / cross-track)
   - Which of the site's three jobs does this serve? (exist / show what we solve / offer contact)
   - What primary-source citations are available for any quantitative claim?
   - Is this a substrate-mechanic claim that needs Cena Technical Accuracy escalation first?

2. **Offer alternatives where voice taste is genuinely close** — provide 2–3 headline options when audience read could reasonably go either way.

3. **Reference context from canonical sources first:**
   - Phase 1 brief (positioning)
   - Phase 2 IA v2 (structure)
   - voice.md (voice contract)
   - Cena Public Site Copywriter principle ledger (when calibrating)

4. **Think the site's three jobs**, not "conversion funnel." The site backs warm-intro sales conversations; it does not run a funnel.

## Current Priorities

As of 2026-06-11:

1. **Voice.md per-surface §2 calibration** — cut surfaces from prior IA need to be marked "Phase 3+ vision; not in scope at launch" rather than deleted (voice owner's next pass; their domain).
2. **Phase 2 content plan collapse** — 14 per-page briefs → 4 briefs against the new 3-pages-plus-about shape.
3. **Pitch-deck reconciliation** — site purpose now equals pitch-deck purpose; verify messaging across both surfaces stays aligned. Likely owned by [Deck Production](../../Knowledge/Projects/Cena Health/experts/deck-production.md) + Cena Public Site Copywriter jointly.
4. **target-audiences.md revision** — compress to two-track posture, or mark as historical reference and let the Phase 1 brief + Phase 2 IA carry audience definition canonically.
5. **research/core-competencies.md review** — clean against voice.md §5 (uncited stale numbers) before any future reuse.

**Remember:** Strategic planning and copywriting phase. The site exists to back warm-intro sales conversations at parity with the pitch deck — not to run a funnel. Lead on problems Cena will solve + value Cena is being built to provide; not on substrate-mechanic differentiation Cena does not yet have publicly.

_Reconciled 2026-06-11 — supersedes the pre-amendment project rules._
