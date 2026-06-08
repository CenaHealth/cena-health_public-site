# Phase 2 Content Plan — Index

**Status:** Awaiting Aaron-gate · **Date:** 2026-06-08 · **Phase 2, Substep 5**

Per-page section-by-section copy briefs for all 14 surfaces in the Cena Health public site. Each brief synthesizes the 4-expert panel — Plain Language Positioning + Cena Technical Accuracy + Healthcare Data Governance + Brand Voice Reviewer — against the Phase 2 IA spec, voice.md, citation-discipline-spec.md, HDG packet, outstanding-partner-input tracker, and Phase 1 positioning brief.

Briefs are anchored to upstream specs by reference per [`define-once.md`](../../../.claude/rules/define-once.md) — they do not restate IA structural decisions, voice principles, or citation-source hierarchies. They specify per-section copy direction, claim-citation gates, and per-lens guardrails.

---

## How to read

Each brief follows the same structure:

- **At a glance** — purpose / audience / headline / voice register / CTA architecture / HIPAA-adjacency / launch-gating partner-input dependencies
- **Section briefs** — one per IA-named section, with: heading + position + length/shape + must-do + must-not + required-claims (with citation source) + required-proof + voice cues + forbidden phrasings + lens-specific notes
- **Cross-section concerns** — page-spanning issues
- **Citation hotspots** — every claim that needs primary-source citation per spec §3
- **Outstanding partner-input touchpoints** — which of the 4 launch-gating items each page intersects + hedged default + upgraded version
- **Expert conflicts resolved** — places where lenses disagreed + resolution rationale
- **Open questions for Aaron-gate** — structural calls that need Aaron's verdict
- **Sign-off** — 4 reviewer checkboxes + Aaron-gate

---

## Surfaces

### Required surfaces (full content pages)

| # | Surface | Brief | Audience | HIPAA-adjacent |
|---|---|---|---|---|
| 1 | Homepage | [`content/homepage.md`](content/homepage.md) | Clinical champion primary; all 5 roles must not fail on cold landing | No |
| 2 | For clinical leaders | [`content/for-clinical-leaders.md`](content/for-clinical-leaders.md) | Clinical champion (single role) | No |
| 3 | For program economics | [`content/for-program-economics.md`](content/for-program-economics.md) | Exec sponsor + financial steward primary; population-health VPs | No |
| 4 | Your program on Cena | [`content/your-program-on-cena.md`](content/your-program-on-cena.md) | Exec sponsor primary; clinical champion secondary; comms tertiary | No |
| 5 | For comms / external affairs | [`content/for-comms.md`](content/for-comms.md) | Comms / external affairs at partner org | No |
| 6 | How the substrate works (hub) | [`content/how-the-substrate-works-hub.md`](content/how-the-substrate-works-hub.md) | Technical evaluator + legal/compliance (co-primary) | **YES** |
| 7 | Integration & data architecture | [`content/integration-and-data-architecture.md`](content/integration-and-data-architecture.md) | Technical evaluator (single role) | **YES** |
| 8 | Provenance & accountability | [`content/provenance-and-accountability.md`](content/provenance-and-accountability.md) | Legal/compliance + IRB liaison | **YES** |
| 9 | Sample audit trail | [`content/sample-audit-trail.md`](content/sample-audit-trail.md) | Legal/compliance + IRB liaisons | **YES** |
| 10 | Reference program | [`content/reference-program.md`](content/reference-program.md) | Four of five roles | No |
| 11 | Proof (collection) | [`content/proof.md`](content/proof.md) | All roles, substantiation stage | No |
| 12 | About (footer) | [`content/about.md`](content/about.md) | All roles, recognition stage | No |

### Templates (shape only — not instance content)

| # | Template | Brief | Notes |
|---|---|---|---|
| 13 | Proof leaf | [`content/template-proof-leaf.md`](content/template-proof-leaf.md) | `/proof/[partner-slug]` — built but unfilled at launch; per IA §4 |
| 14 | Per-contact landing | [`content/template-per-contact-landing.md`](content/template-per-contact-landing.md) | `/for-[contact-or-org-slug]` — Phase 3+ capability per Aaron Q4 / IA §13 |

---

## Production notes

### Panel coverage

All 14 briefs synthesized via single-pass synthesizers with all 4 lenses (PLP / CTA / HDG / BV) applied internally. Each agent read the 6 canonical files and resolved cross-lens conflicts at synthesis time per the dispatch priority (CTA > HDG > BV > PLP).

Production note: the original 70-agent Workflow hit Anthropic-server 429 rate-limits on both runs (not Aaron's usage limit). Workflow run 1 produced partial output for homepage + for-clinical-leaders via BV-only synthesis; those 2 briefs were **regenerated 2026-06-08 afternoon** with the full 4-lens pattern after the rate-limit cause was identified. Pivot for briefs #3–14: direct Agent() dispatch in 3 batches of 4.

### Anchored to

- [Phase 1 positioning brief](phase-1-positioning-brief.md) — C-017 anchor, forbidden hero patterns, brownfield-buyer frame, Tech Accuracy must-not-say list, Appendix C architectural primitives
- [Phase 2 IA spec](phase-2-information-architecture.md) — site map, page section sequences, headline assignments, CTA architecture, brownfield + reference-program + provenance specs
- [voice.md](../brand/voice.md) — 5 core principles, per-surface voice register, forbidden phrasings, wayfinding band voice, Q1 hero CTA mitigation (Candidate A locked)
- [citation-discipline-spec.md](citation-discipline-spec.md) — claim-hotspot inventory, source hierarchy by claim type, OFF-LIMITS legacy claims, pre-ship gate
- [phase-2-hdg-review-packet.md](phase-2-hdg-review-packet.md) — HIPAA-adjacent recommended phrasings, vendor-stack disclosure rules, BAA-architected stance
- [outstanding-partner-input.md](outstanding-partner-input.md) — 4 launch-gating items: UConn-named upgrade, US-only residency, SHA-256 chain, five-categories-blocked-in-code

---

## What's next

1. **Aaron-gate on the content plan** — review each per-page brief; surface open questions on this index or in the briefs themselves; decisions absorbed back into briefs before Phase 3 launches
2. **Phase 3: implementation** — Haven Visual Designer + Haven-UI Design System + Typography Craft + Typography Review panel per page or per surface-cluster; brief in hand, implementation produces draft copy + visual primitives + section components
3. **Pre-launch partner-input resolution** — 4 launch-gating items in [outstanding-partner-input.md](outstanding-partner-input.md) gate launch (not Phase 3 work)

---

## Sign-off

- [ ] Aaron-gate (per-brief review)
- [ ] Phase 3 implementation pipeline staged
