# Phase 2 HDG Review Packet — Cena Health Public Site

**Status:** Awaiting Aaron review · routing to Vanessa Sena on Aaron's release · **Date:** 2026-06-07 · **Phase 2, Substep 3 of 4**

Healthcare Data Governance review of every HIPAA / PHI / BAA / encryption / data-flow claim the locked IA proposes to ship on the Cena Health public site. Built against [phase-2-information-architecture.md](phase-2-information-architecture.md) (commit `2e11709`), the [Phase 1 positioning brief](phase-1-positioning-brief.md) Tech Accuracy guardrails, and the technical ground truth in [`ava.md`](../../../Knowledge/Areas/Meta/Entities/cena-health/ava.md) and [`patient-app.md`](../../../Knowledge/Areas/Meta/Entities/cena-health/patient-app.md).

Output is dual-register: §§1–2 are Vanessa-facing (bounded ask, outcome-framed, no internals); §§3–10 are Aaron-facing technical review.

---

## 1. Executive frame (Vanessa-facing)

We're shipping a public site that says things about Cena's data-handling posture out loud — HIPAA, BAAs, PHI custody, audit trails. Each of those is a claim a partner's legal-compliance reader will hold us to, so we're vetting every one before it ships.

I've reviewed the full draft against what's defensible *today* at Cena's pilots-planning stage. Most of it lands with hedging; a handful of claims need your explicit yes/no before they go public — they touch partner-relationship territory only you own (what UConn has cleared, what we can say about BAAs across partners, whether we name our cloud vendor publicly).

**What I need from you:** §2 below is a 9-item checklist. Each row has a claim, where it ships, my recommended phrasing, and a one-line decision field. Approve / edit / block per row. Total read: under 5 minutes. Reply in-thread or call — your call.

**What ships if all 9 land approved:** a public site that says we built Cena to operate inside the rules partner institutions already follow, without claiming a posture we can't substantiate today.

**What ships if any of the 9 land blocked:** the surface holding that claim either gets the hedged-down phrasing or is held back until the underlying fact resolves. None of the 9 are launch-blockers in isolation.

---

## 2. Sign-off list

Nine claims need your explicit decision. Decision field per row: **APPROVE** / **EDIT** (with your suggested phrasing) / **BLOCK** (don't ship this claim publicly) / **CALL** (talk it through).

| # | Claim | Where it ships | Recommended phrasing | Your call |
|---|---|---|---|---|
| 1 | The pilot-reference language ("a live academic-medical-center HIV-nutrition program runs on this blueprint today") | `/reference-program` headline + homepage proof strip | Use generic-AMC language at launch; upgrade to "UConn Health's" only after you confirm UConn comms has cleared the named reference | |
| 2 | "BAA-ready" as a public posture claim | Homepage proof strip · `/how-the-substrate-works` security section · `/for-clinical-leaders` proof | Ship as architectural claim — *"BAA-ready architecture"* (about how Cena is built). Do NOT ship "BAAs in place" anywhere (that's partner-by-partner and changes per deal) | |
| 3 | Naming our cloud / vendor stack publicly (Google Cloud, Vertex AI, etc.) | `/how-the-substrate-works/integration` sub-page · NDA-room landing teaser | My recommendation: **don't name vendors publicly**; mention "HIPAA-eligible cloud infrastructure with executed BAAs across the vendor stack" and route specifics to NDA room. Reason: HITRUST-aligned health systems want it; sovereignty-sensitive payers don't; naming raises questions we don't need at recognition stage. Your call. | |
| 4 | Partner-clinician accountability framing | `/how-the-substrate-works/provenance-and-accountability` · `/for-clinical-leaders` thesis · `About` page | Ship as: *"During pilots, partner-institution clinicians retain clinical accountability for every recommendation Cena's substrate generates. Cena's role is the audit-grade trail that makes that accountability defensible."* This is the model you've been holding the line on internally; this is its public form. | |
| 5 | NDA-gated documentation room — what's in vs. out of the public-facing teaser | `/how-the-substrate-works` hub CTA · NDA-room landing page | Public teaser names *categories* of what's in the room (architecture diagrams, security control matrices, BAA template, vendor stack disclosures, audit-log schema). Does NOT show the artifacts themselves. Room access requires: name, role, partner-org, BAA-counsel contact. | |
| 6 | Sample audit trail — synthetic-data discipline | `/how-the-substrate-works/sample-audit-trail` | Page must carry a top-of-page label: *"All sample data on this page is synthetic. No patient referent, no partner referent."* Every annotation field must be reviewable as accurate-to-what-the-system-actually-does. | |
| 7 | "Tenant-isolated" / "per-program data partition" claim | `/how-the-substrate-works` security section · Hard-claim Appendix C #3 | Ship as: *"Each partner program runs in its own data partition; each role on a care team sees what their job requires, enforced by the system."* Verifiable in [`ava.md`](../../../Knowledge/Areas/Meta/Entities/cena-health/ava.md) vendor-independence + role-scoped-PHI architecture. Safe. | |
| 8 | FHIR / Epic integration language | `/how-the-substrate-works/integration` sub-page · `/for-clinical-leaders` how-it-works cards | Ship as: *"Built to connect to the systems partners already run — FHIR endpoints, file drops, API conventions partners specify."* Do NOT claim "Epic-certified," "approved Epic partner," or "live Athena API" without primary-source verification (per the Accenture-app-flagged claim 2026-05-26). | |
| 9 | Forward-looking-disclosure preference | `/proof` empty-slot framing · NDA-room landing | When does Cena upgrade public framing from "BAA-architected" to "BAAs in place across N partners"? My recommendation: hold "BAA-architected" public until at least 2 BAAs are executed; first BAA gets named only with partner comms clearance. Your call on whether 2 is the right threshold. | |

**Reply shape that lands fastest for you:** row-by-row, one line per. *"1 approve. 2 approve. 3 call. 4 approve with edit: [...]"* etc. Or grab Aaron synchronously and walk it. If you call, his copy of the packet is open.

---

## 3. Per-surface review

This section and below: technical review for Aaron. Each HIPAA-adjacent surface gets a claim-by-claim verdict.

Verdict vocabulary:
- **SAFE** — claim is defensible today; ship as worded
- **HEDGE** — claim is directionally true; ship only with the specified hedging
- **MUST-NOT-SAY** — claim cannot ship publicly until an underlying fact changes (BAA executed, certification earned, partner cleared, etc.)
- **BLOCK** — claim is wrong, misleading, or carries unacceptable regulatory-teardown risk; do not ship

### 3.1 `/how-the-substrate-works` hub — `#security` section

The hub's section 6 (per IA §4) covers: BAA-ready, encryption-at-rest/in-transit, access-control model, audit-log retention.

| Proposed claim | Verdict | Recommended phrasing |
|---|---|---|
| "HIPAA-compliant" as feature claim | **MUST-NOT-SAY** | See §5 — HIPAA is not a certification a vendor earns; it's a regulatory regime applied to specific roles (covered entity, business associate). Use *"architected for HIPAA-regulated workflows"* or *"built against the requirements partner institutions must meet under HIPAA"* instead. |
| "BAA-ready" architecture | **SAFE** (architectural claim) | *"BAA-ready architecture — Cena is built to operate as a business associate when a partner contracts us to handle PHI on their behalf. BAAs are executed partner-by-partner."* The second sentence prevents the implication of a universal posture. |
| Encryption at rest | **SAFE with hedge** | *"Patient data is encrypted at rest using industry-standard methods aligned with HIPAA Security Rule expectations."* Don't claim specific cipher / key-length specifics on the public surface; defer to NDA room. Avoid "military-grade" or marketing-cipher language. |
| Encryption in transit | **SAFE with hedge** | *"All data in transit between Cena's substrate and partner systems is encrypted via TLS."* Same discipline — specifics defer to NDA room. |
| "Audit log retention" | **HEDGE** | Ship as: *"Audit events are captured automatically and retained per the partner program's contractual retention requirements."* Avoid naming a specific retention period publicly (varies per partner contract, per state, per data class). |
| "Data residency in US" | **HEDGE** | Ship only if verifiable across the *full* vendor stack today. Per the 2026-04-29 HDG dispatch on the Dieckhaus kickoff: UConn BAA §13 offshore-PHI ban constrains the vendor stack materially. If any LLM/inference vendor processes outside US, this claim is false. **Action for Aaron:** verify with Andrey that US-only data residency holds end-to-end across Anthropic, vector store, embedding service, any other inference path, before this claim ships. |
| Tenant isolation / per-program partition | **SAFE** | Sign-off list #7. Verifiable against `ava.md` architectural stance. |
| Role-scoped PHI filter | **SAFE** | Appendix C #3 from Phase 1 brief lands cleanly: *"Each role on a care team sees what their job requires — no more, by enforcement, not by policy."* |

### 3.2 `/how-the-substrate-works/provenance-and-accountability` sub-page

This is the page legal-compliance reader closes after reading and replies to champion *"this looks defensible."* Every claim here gets the heaviest scrutiny.

| Proposed claim | Verdict | Recommended phrasing |
|---|---|---|
| Accountability model | **SAFE** (sign-off list #4) | See §2 row 4. The partner-clinician-retains-accountability framing is the line you've held internally; this is its public form. Critical that it does not slip into "Cena's clinical staff approve recommendations" — that implies a posture Cena does not hold during pilots. |
| "IRB-scope" claims | **HEDGE** | The IA's section 6 mentions provenance for IRB. Safe to say: *"Provenance artifacts are designed to satisfy IRB documentation requirements for research-adjacent use of the substrate."* Do NOT claim "IRB-approved" or "IRB-reviewed" anywhere — IRB approval attaches to *protocols*, not to Cena as a vendor, and the UConn HIV-nutrition protocol is still being drafted by the PI per the 2026-04-29 dispatch. |
| BAA coverage | See sign-off list #2 | Architectural claim safe; partner-specific claim not safe. |
| Audit-log automatic capture | **SAFE** | Appendix C #1 lands cleanly: *"Every patient record opened, edited, or acted on leaves a trail — automatically, by the system, not by a clinician remembering to log it."* |
| Append-only / immutable schema | **SAFE with hedge** | Appendix C #2: *"Records can be added, never altered. Every agent message carries a cryptographic seal — so the question 'was this changed?' is answerable, not asserted."* Verify the cryptographic-seal claim against current implementation — if not yet shipped in Spark, downgrade to *"…carries a verification hash"* or defer to NDA room. **Action for Aaron:** confirm with Andrey whether the SHA-256 message-hash chain is implemented today or aspirational. |
| Custodial framing | **SAFE — and load-bearing** | This is the framing the HDG expert has been holding the line on since 2026-04-28 (Vanessa AVA Briefing review). Public surface MUST read custodial, not proprietary: *"Cena holds PHI on behalf of the partner institution"* — NOT *"Cena owns patient records"* — NOT *"records belong to Cena."* The Ch.2 Briefing claims the prior dispatch flagged ("the knowledge, the memory, and the workflows belong to Cena") cannot appear in this public form. |
| Five-categories blocking | **SAFE** | Appendix C #4: *"Five categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training."* Verify the five categories are documented and the enforcement is in the code today; if directional, hedge to *"categories of clinical action."* |

### 3.3 `/how-the-substrate-works/sample-audit-trail` artifact page

This page has the highest fidelity demand: it's the page the IRB liaison reads.

| Proposed claim | Verdict | Recommended phrasing |
|---|---|---|
| Synthetic data top-of-page label | **REQUIRED** | Sign-off list #6. Page must open with *"All sample data on this page is synthetic. Field structure, annotations, and audit-event taxonomy reflect Cena's actual implementation; specific values are fabricated."* |
| Per-field "what this satisfies" annotations | **SAFE with discipline** | Each annotation must say what the field is + what regulatory or contractual purpose it serves (IRB requirement / BAA log requirement / VBC reporting requirement / clinical-decision-support audit requirement, per IA §8). Each "satisfies" claim must be defensible — do NOT annotate *"satisfies HIPAA Security Rule"* without citing the specific 45 CFR section. |
| Peer-reviewed-literature citations in sample recommendation | **HEDGE** | Sample recommendation should cite real, current, primary-source nutrition literature (not invented). Annotate as *"sample citation pattern; actual recommendations cite the literature current at the time of generation."* |
| Vendor-independent model architecture citation | **SAFE** | Per `ava.md` vendor-independence stance, the reasoning-step annotation should reference *"the model architecture in use at the time of generation"* without naming a specific vendor. Honors the strategic stance and avoids dating the page. |
| Outcome capture + re-assessment trigger | **SAFE** | Defensible architectural claim. Verify the methodology annotations match what's actually instrumented. |
| Clinician role naming | **CRITICAL — anonymize** | Sample trail must reference clinician *role* (e.g., "RD," "CC," "attending physician") — never a specific name, even a fake one. A fake name in a sample audit trail creates a defamation-adjacent surface and reads as low-discipline to legal reviewers. |

### 3.4 `/how-the-substrate-works/integration` sub-page

| Proposed claim | Verdict | Recommended phrasing |
|---|---|---|
| FHIR endpoint integration | **SAFE** | *"Built to connect to FHIR endpoints partners expose."* Generic; verifiable; non-vendor-specific. |
| Epic / Cerner / Athena named integrations | **MUST-NOT-SAY** (sign-off list #8) | The Accenture-app flag from 2026-05-26 surfaces here: do NOT claim "approved Epic partner" or "live Athena API" without primary-source verification of certification status. If a partner uses one of these EHRs, the integration claim attaches to *the partner's deployment*, not to Cena as a certified vendor. |
| Data-flow architecture diagram | **SAFE with hedge** | Diagram (partner-system → ingestion → reasoning → recommendation-with-citation → audit-trail-write) is architecturally accurate per IA §4. Do NOT label specific cloud-vendor boxes in the diagram unless sign-off list #3 lands as APPROVE. Use generic labels ("hosting environment," "reasoning service," "audit store"). |
| Vendor-stack disclosure | See sign-off list #3 | Cross-cutting decision. |
| "Does not require EHR switch" non-scope | **SAFE** | IA §4 hub section 7: explicit non-scope band. Defensible and unknown-unknown-disarming. |

### 3.5 NDA-gated documentation room landing

The public-facing teaser is what's visible without NDA; the room contents are what's visible after.

| Proposed claim | Verdict | Recommended phrasing |
|---|---|---|
| What's *in* the room (categories) | **SAFE** | Public teaser can list categories: *"Architecture diagrams · Security control matrices · BAA template · Vendor stack with executed-BAA disclosure · Audit-log schema · Incident-response procedures · Sample provenance artifacts."* These are *categories*, not specifics. |
| Vendor-stack specifics | **SAFE — in the room** | Inside the NDA room, vendor specifics (Google Cloud, Vertex AI, Anthropic, etc.) are appropriate. Outside, defer per sign-off list #3. |
| Room access requirements | **SAFE** | Form: name, role, partner-org, BAA-counsel contact. The partner-org + BAA-counsel fields are the meaningful gate; name + role are baseline. |
| Public claim that "Cena has signed NDAs with multiple partners" | **MUST-NOT-SAY** | Avoid claiming volume/scale of NDAs publicly — same shape as the BAA-in-place trap. The room *exists*; that's the only claim that ships. |

---

## 4. Cross-cutting claims

Claims that recur across surfaces. Each gets a single verdict that applies everywhere it appears.

| Claim | Verifiable today? | Verdict | Public-safe phrasing |
|---|---|---|---|
| HIPAA-compliant | No — not a thing | **MUST-NOT-SAY** | See §5. |
| BAA-ready | Yes (architectural) | **SAFE** | *"BAA-ready architecture; BAAs executed partner-by-partner."* |
| BAA in place | Partner-specific | **MUST-NOT-SAY** as universal | Only with explicit partner-comms clearance for that specific BAA. |
| Encryption at rest | Yes (directional) | **SAFE with hedge** | *"Encrypted at rest using methods aligned with HIPAA Security Rule expectations."* No specific cipher claims publicly. |
| Encryption in transit | Yes | **SAFE** | *"TLS for all data in transit."* |
| Tenant-isolated | Yes per `ava.md` | **SAFE** | *"Each partner program runs in its own data partition."* |
| Role-scoped PHI filter | Yes per `ava.md` | **SAFE** | *"Each role sees what their job requires — by enforcement, not by policy."* |
| Audit events automatic | Yes | **SAFE** | Appendix C #1 phrasing lands. |
| Immutable append-only schema | **VERIFY — Aaron action** | **SAFE if confirmed** | Appendix C #2 lands if cryptographic-seal is current; hedge to *"verification hash"* if not. |
| SHA-256 message hash chain | **VERIFY — Aaron action** | Pending | Confirm with Andrey before ship. |
| US-only data residency | **VERIFY — Aaron action** | Pending | Confirm end-to-end vendor stack; UConn BAA §13 offshore-ban is the constraint. |
| Epic / Athena / Cerner certified | Almost certainly no | **MUST-NOT-SAY** | Per Accenture-app flag 2026-05-26. |
| HITRUST-certified | No (pre-revenue stage) | **MUST-NOT-SAY** | Aspirational at best; certification is months of work + cost. |
| SOC 2 Type II | No | **MUST-NOT-SAY** | Same — defer until earned. |
| FDA-cleared / clinically validated | No | **MUST-NOT-SAY** | Per Phase 1 brief Tech Accuracy + §3.4 of the same. |
| Production / production-ready | No (pilots-planning stage) | **MUST-NOT-SAY** | Per `project_cena_stage` memory; per Phase 1 brief; use "first workflow live" or "pilot-stage" instead. |
| Multi-vendor model routing as live | No (vendor-independence is architectural intent, not yet operationally exercised) | **HEDGE** | *"Architected for vendor independence — the model layer is swappable by design."* Do NOT claim live multi-vendor routing today. |

---

## 5. The "noun-phrase HIPAA" prohibition

**"HIPAA-compliant" is not a thing a vendor's product is.** HIPAA is a regulatory regime that applies to specific roles — covered entities and their business associates — and to specific data flows. A vendor is "HIPAA-compliant" only in the sense that it can operate inside the rules when a covered entity engages it under a BAA. Slapping "HIPAA-compliant" on a marketing page is read by legal reviewers as either marketing shorthand (best case) or as a misunderstanding of the regime (worst case). The Phase 1 Tech Accuracy "must-not-say" list flagged this; this section is its operational form.

**Canonical safe alternatives** (use these instead, everywhere "HIPAA-compliant" might be tempting):

- *"Architected for HIPAA-regulated workflows"* — about Cena's build, not a posture claim
- *"Built against the requirements partner institutions must meet under HIPAA"* — frames Cena as serving partners' regulatory obligations, not claiming its own
- *"Cena operates as a business associate under HIPAA when contracted to handle PHI on a partner's behalf"* — names the actual regulatory relationship
- *"BAA-ready architecture"* — the architectural claim (cross-ref §2 row 2)

**Why this matters for Vanessa specifically:** her stated standard is *"make sure they can't reverse-engineer"* — defensible precision. "HIPAA-compliant" is exactly the kind of imprecise marketing claim that a sophisticated legal reviewer will mark down for, and a less-sophisticated one will fixate on (asking "where's your HIPAA certification?" — there is no such thing, and the question reveals the reader's understanding rather than ours). The hedged phrasings above survive both readers.

---

## 6. The BAA discipline

**Architectural BAA-ready** ≠ **BAA in place with a specific partner**. Conflating the two is the most common HIPAA-marketing slip and the easiest one for a partner-legal reader to catch.

**Where "BAA-ready" can appear publicly:**

- Homepage proof strip
- `/how-the-substrate-works` security section
- `/for-clinical-leaders` thesis section
- NDA-room landing teaser

**Where "BAA in place" cannot appear publicly without explicit partner-comms clearance:**

- Anywhere naming a specific partner ("BAA with UConn") — even when true
- Anywhere implying a scale of BAAs ("BAAs with multiple academic medical centers")
- Anywhere implying universality of coverage ("all our partner relationships operate under executed BAAs")

**Why:** BAAs are partner-by-partner instruments under 45 CFR 164.504(e). Each is negotiated, executed, and bounded individually. A claim of universal coverage is unverifiable by a reader and creates an asymmetry that becomes uncomfortable when a partner finds out a different partner's BAA terms differ from theirs. A claim with a specific partner attached creates a comms-side exposure that bypasses Vanessa's standing role as the partner-relationship owner.

**The forward-looking question** (sign-off list #9): when does the public framing upgrade from "BAA-architected" to "BAAs in place across N partners"? My recommendation is two-stage:

1. First milestone: 2+ executed BAAs → upgrade to *"Cena operates under executed BAAs with partner institutions"* (still no count, no names)
2. Second milestone: 3+ executed BAAs + at least one partner cleared for naming → upgrade to *"Cena operates under executed BAAs with partner institutions including [Named Partner]"*

The two-stage shape mirrors the IA's reference-program pattern (generic-AMC at launch, named upgrade post-comms-clearance). It also gives Vanessa a clean lever to use the upgrade as a comms moment.

---

## 7. The vendor-stack disclosure question

**The question:** does the public site say *"built on Google Cloud / uses Vertex AI for X / deploys Anthropic models for Y"*?

**Trade-offs:**

- **For naming vendors:** HITRUST-aligned health systems (and their CIOs) look for it; it signals seriousness about infrastructure choices; it answers a question they'd otherwise ask in vendor onboarding; it matches the "infrastructure-not-food-vendor" positioning (real infrastructure has named vendors underneath it); aligns with Bloomberg/FactSet pattern from Pattern Scout (Phase 1 Appendix A).
- **Against naming vendors:** sovereignty-sensitive payers and public-system buyers (CMS, Medicaid programs, certain state-system partners) read named cloud vendors as a lock-in signal or as an attack surface; it dates the page (vendor stack will change); it pre-answers a question better answered in the NDA room where the partner can react to a full disclosure including BAAs-in-place-with-each-vendor; the vendor-independence stance (`project_ava_vendor_independence`) is undercut visually by naming the current model vendor on the public surface.

**My recommendation as HDG expert:** **do not name vendors on the public surface.** Reasoning:

1. The cost (sovereignty-sensitive reads + vendor-independence visual undercut) is higher than the benefit (HITRUST-CIO signal) at Cena's pilots-planning stage. The HITRUST-CIO comes via partner-warm-intro and lands in the NDA room within one click of the public hub.
2. The NDA-room teaser can name the *category* ("HIPAA-eligible cloud infrastructure with executed BAAs across the vendor stack") without naming the vendors. Categories satisfy the seriousness-signal; specifics satisfy the partner-vetting need.
3. Vendor-independence is core positioning (per `ava.md`). Naming the current vendor on the public site reads as commitment, even when paragraphs nearby say "swappable by design." Architecture readers trust nouns more than adjectives.

**Routing to Aaron + Vanessa:** this is sign-off list #3. My read is the default; her call may differ based on a partner conversation I'm not in.

---

## 8. Future watchlist for citation spec (Substep 4)

The following claims from this packet should trigger citation-spec hotspots when copy is written for Substep 4. Each is a primary-source claim that requires dated citation per [`verify-time-sensitive-claims.md`](../../../.claude/rules/verify-time-sensitive-claims.md).

- **Encryption-at-rest method claim** — when the IA's security section is written, the specific encryption claim needs a verifiable internal-source pointer (the Cena security control matrix in the NDA room is the primary; the public claim is a paraphrase).
- **TLS-in-transit claim** — same shape; defer specifics to NDA room.
- **Audit-log automatic capture** — verify against current Spark / Ava implementation before ship; if Spark is on a pre-AI-layer build per `patient-app.md`, the audit-log claim may need to be hedged to "designed-in" rather than "live."
- **Immutable append-only schema + cryptographic seal** — Andrey-verification required (see §4).
- **Five-categories-blocked claim** — verify the five categories are documented in code, not aspirational.
- **Tenant isolation per-program** — verify against `ava.md` and against Spark's current deployment shape.
- **Role-scoped PHI filter** — same.
- **FHIR endpoint integration** — verify a working integration exists in at least one partner deployment; if Spark's MVP doesn't include FHIR integration yet (per `patient-app.md` "Patient noai 0514" archive-IA build), hedge to "designed for."
- **US-only data residency** — Andrey-verification required across all inference vendors.

The Substep 4 citation spec should treat *every* claim in §§3-4 marked **SAFE** or **HEDGE** as a citation hotspot. **MUST-NOT-SAY** claims don't get cited; they get cut.

---

## 9. Open questions for Vanessa (separate from §2 decision-list)

Judgment calls only Vanessa can make, surfaced for her awareness but not requiring point-in-time decisions. These are the calls that may emerge during her review of §2 or in a follow-up.

- **UConn-specific BAA framing.** When (and if) UConn's BAA is executed and comms-cleared for naming, what does the public surface say? Vanessa owns the partner-relationship side of that conversation; HDG owns the legal-framing side; Plain Language owns the copy side. Trigger condition: UConn comms greenlights the named reference (sign-off list #1).
- **Other-partner posture.** When Cena adds a second pilot partner (Vanderbilt, Cedars, HHC — whichever lands next), does the public site reflect *"now operating across multiple partner institutions"* or hold to single-pilot framing until the new partner clears comms? My recommendation: same shape as UConn — generic until cleared.
- **Vendor-stack public-disclosure preference over time.** If a HITRUST-CIO conversation reveals vendor-naming is actively blocking a deal, the §7 default may need revisiting. Vanessa's partner-conversation read is the data point I don't have.
- **Audit-log retention period publication.** If a partner contract demands a specific public-stated retention period, the §3.1 hedge ("per partner contract") needs revisiting. Right now I'm protecting against the trap of stating a number that some partner contract later requires different.
- **Incident-response disclosure.** When the first incident-class event occurs (and one will), what does the public surface say, when, in whose voice? Not a launch-blocker; flagged for later authoring of an incident-comms playbook. HDG expert + Channel Partnerships + Plain Language are the right authoring team when that lands.

None of the above blocks Phase 2 ship. All are tracked for the surface that resolves them.

---

## 10. Maintenance discipline

This packet refreshes when:

- **A new pilot is signed** — re-review sign-off list rows 1, 2, 9; consider §6 milestone trigger
- **A BAA status changes** (executed, terminated, amended) — re-review sign-off list row 2 and §6 thresholds
- **Vendor-stack shifts** (new model vendor, new cloud provider, new inference path) — re-review sign-off list row 3 and §3.1 data-residency hedge; verify §7 stance still holds
- **HIPAA rule updates** (45 CFR 164, Security Rule amendments, etc.) — full §4 cross-cutting-claims sweep
- **A regulatory event** (OCR enforcement action against a comparable vendor, new HHS guidance on AI in clinical decision support, state-law variance affecting CT/NY/CA where Cena operates) — surface in next /meta sweep, route to HDG for evaluation
- **A live incident or near-miss** — incident-response disclosure question (§9) becomes load-bearing
- **Aaron or Vanessa flag a claim that crept into copy without HDG review** — patch the gap, run the missing-claim through this packet's verdict framework

Maintenance owner: HDG expert (this profile). Routing trigger: any of the above events → re-dispatch HDG via `/route Healthcare Data Governance` against the Cena Health public site context. The expert's retro log (`Knowledge/Projects/Cena Health/experts/healthcare-data-governance.md`) captures each refresh as a dated entry.

**Source-of-truth pointers for the next refresh:**

- Technical ground truth: [`Knowledge/Areas/Meta/Entities/cena-health/ava.md`](../../../Knowledge/Areas/Meta/Entities/cena-health/ava.md) · [`patient-app.md`](../../../Knowledge/Areas/Meta/Entities/cena-health/patient-app.md)
- Regulatory primary sources: 45 CFR 164.514 (de-identification) · 45 CFR 164.504(e) (BAAs) · 45 CFR 164.514(e) (DUAs) · 45 CFR 46 (Common Rule) — refresh in `Stack Overflowed/Projects/Cena Health/current-facts.md` before any contract-language draft cycle
- Internal prior art: HDG retro log entries 2026-04-28 (Vanessa AVA Briefing chapters 1+2) and 2026-04-29 (Dieckhaus kickoff) — both surface BAA-specific constraints (UConn BAA §13 offshore-PHI ban; breach-notice timing) that anchor several verdicts here
