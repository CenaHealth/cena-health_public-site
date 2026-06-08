# Content Brief: Provenance & accountability

**Path:** `/how-the-substrate-works/provenance-and-accountability` · **Status:** Awaiting Aaron-gate · **Date:** 2026-06-08 · **Phase 2, Substep 5**

Section-by-section copy brief for the Provenance & accountability sub-page. This is the **legal/compliance deep-link from the hub** and the **IRB liaison's destination**. Anchored to [Phase 2 IA spec](../phase-2-information-architecture.md) §4 (sub-page treatment + §8 provenance-trail artifact-page spec for the artifact crosslink) + §3 (sub-page headline) + §5 (label hygiene) + §9 (NDA-gated CTA inheritance from hub), [voice.md](../../brand/voice.md) §2 (substrate hub register applies to sub-pages) + §3 (sub-page headline pattern) + §4 (forbidden phrasings) + §6 (wayfinding) + §9 (NDA-gated documentation room CTA) + §10 (claim-citation reflex), [citation discipline](../citation-discipline-spec.md) §3 provenance + sample-audit-trail claim hotspots + §8 HDG handoff sequence (MANDATORY), [HDG packet](../phase-2-hdg-review-packet.md) §§3.2 + 3.3 + 4 + 5 + 6 recommended phrasings (CEILING for every HIPAA-adjacent claim on this page), [Phase 1 brief](../phase-1-positioning-brief.md) Appendix C #1-5 hard-claim translations, and [outstanding-partner-input.md](../outstanding-partner-input.md) items #3 (SHA-256 hash chain) + #4 (five-categories-blocked).

---

## At a glance

- **Purpose:** Be the page legal/compliance + IRB-liaison readers close their browser tab on and reply to the clinical champion *"this looks defensible."* The hub orients; the sample audit trail proves; this page does the **architectural-claim work** in between — the substrate's accountability model, audit-trail-per-recommendation primitive, hash-chain integrity, five-category enforcement, second-system clinical check, partner-clinician-retains-accountability framing.
- **Primary audience:** Legal/compliance reader (general counsel, privacy officer) + IRB liaison. Single role grouping per dispatch. The reader arrives deep-linked from the clinical champion's forwarded email; orientation must be **instant**; the target read state within 60 seconds of landing is *"this looks defensible."*
- **Headline:** *"Every clinical action carries its trail."* Locked verbatim per IA §3 + voice.md §3 sub-page headline pattern. Verb-first; one sentence; legal-compliance scan-mode payoff in one line; passes voice.md §3 "could a competitor steal this and have it work as well?" test (the claim is architecturally distinctive, not generic).
- **Voice register:** Factual, evaluator-respecting; the calmest register on the site. Reads as **operational documentation written by counsel-adjacent engineering**, not as marketing. Per voice.md §2 hub block (which applies to sub-pages) + this page's specific tilt toward legal-compliance scan-mode. No marketing inflection, no superlatives, no defensive over-explanation. Every claim is short, declarative, and citation-tagged.
- **CTA architecture:** *"Request the security packet"* → NDA-gated documentation room (inherits from hub per IA §9 row 5 + voice.md §9). The form-shape is the same as the hub's: name, role, partner-org, BAA-counsel contact. Section 10 placement (single primary CTA, after the objection band). One CTA on the page; no inline-banner repeat. The artifact page (`/sample-audit-trail`) intentionally carries **no** CTA per IA §9 + voice.md §9; this page bridges the hub's NDA CTA to the artifact's no-CTA.
- **HIPAA-adjacent:** **YES — primary HIPAA-adjacent surface alongside the hub.** HDG packet phrasings in §§3.2 + 3.3 + 4 + 5 + 6 are the **CEILING** on every claim that ships. Every HIPAA / BAA / PHI / encryption / access-control / accountability / audit-trail / IRB / cryptographic-integrity / clinical-action-blocking claim survives HDG-recommended phrasing or does not ship. HDG handoff sequence per citation spec §8 is mandatory.
- **Accountability model is the load-bearing framing of the page.** Partner-institution clinician **retains** clinical authority and accountability; Cena's substrate captures the decision trail. This is the line the HDG expert has been holding internally since 2026-04-28 (Vanessa AVA Briefing review); this page is its public form. Per HDG packet sign-off list row 4 + §3.2 + `project_cena_accountability_model` memory. **Non-negotiable framing — does not slip into "Cena's clinical staff approve recommendations" or "Cena owns clinical accountability."**
- **Launch-gating partner-input dependencies:** Two of four outstanding items hit this page — Item #3 (SHA-256 message-hash chain, hash-chain integrity primitive section) and Item #4 (five-categories-blocked enumeration, five-category enforcement primitive section). Both ship hedged at launch per `outstanding-partner-input.md` discipline; both upgrade as strict-superset edits when Andrey verifies.
- **IRB-liaison-time-budget:** 60 seconds to *"this looks defensible."* The page must work for the scan-reader (lead claim above the fold + scannable section headings) AND the close-reader (each section earns its claim with structural specificity). This dual-reader test is the page's whole architecture.
- **Cross-links into the page:** From hub `#provenance` band → here; from `/for-clinical-leaders` (Phase 1 §4 legal-compliance JTBD + IA §4 objection band cross-links). Cross-links **out of** the page: to `/sample-audit-trail` (the artifact — most important cross-link); to hub `#security` section (encryption + access-control + retention discipline); to NDA-room landing (CTA).
- **Length:** 2,000-3,000 words. Load-bearing legal-compliance page; goes longer than typical because it carries five required claim primitives + accountability model + objection band + cross-link infrastructure to artifact page.

---

## Section briefs

### Section 1: Hero — orientation in five seconds

**Heading:** *"Every clinical action carries its trail."* (Locked verbatim per IA §3 + voice.md §3.) H1.
**Position:** Section 1, page spine. Sticky sub-nav with 7 anchors visible at top: `#what-provenance-means`, `#audit-trail-primitive`, `#accountability-model`, `#integrity`, `#categories`, `#second-system`, `#objections`.
**Length / shape:** H1 (locked) + ~50-70 word framing paragraph + sub-nav. No hero CTA (CTA in Section 10; reader's CTA path is the form-gated NDA room, deferred until after the architectural-claim work has been done).

**What this section must do:**
- Lead with H1 verbatim. Verb-first construction; "carries" is structural (the trail is intrinsic, not bolted-on); "its trail" makes the trail an inherent property of the action.
- 50-70 word framing names the page's job in legal/compliance language: (a) what provenance means here in operational terms (the audit-ready record per clinical action), (b) what accountability means here (partner-institution clinician retains; Cena substrate captures), (c) what the page will prove (five architectural primitives the reader can verify by reading the rest).
- Sticky sub-nav with 7 anchors so the scan-reader sees the page's shape before reading prose. Anchor names match in-page H2 anchors.
- Set the scan-mode payoff: a legal-compliance reader who scans only Section 1 + the H2s + the objection band should still close the tab with *"this looks defensible."* Section 1 has to earn that read by itself.
- Use voice.md §2 substrate hub register; legal-compliance variant means even quieter than the hub. No marketing inflection. *"Operational documentation written by counsel-adjacent engineering"* is the target register.

**What this section must not do:**
- Use any superlative or adjective-stack ("comprehensive, audit-grade, immutable, tamper-proof provenance system") — collapses the register on first sentence.
- Open with marketing prose ("Trust is the foundation of healthcare AI…") — fails the legal-compliance reader's discount-reflex immediately.
- Claim "HIPAA-compliant" or any noun-phrase HIPAA usage — HDG §5 explicit MUST-NOT-SAY. The page's first paragraph is the highest-frequency drift site for this trap.
- Use "trust," "transparency," "auditability" as standalone abstractions in the framing sentence — legal-compliance readers discount these as vendor-marketing. Say what the substrate **does** instead.
- Acronym-stack without first-use expansion. First mention of BAA (Business Associate Agreement), PHI (patient health information), IRB (Institutional Review Board), CDS (clinical decision support), CFR (Code of Federal Regulations) must expand. Per voice.md §11.
- Cross-reference the hash-chain or five-category claims in the hero — those land in their own sections with hedging discipline; the hero references only the audit-trail-per-clinical-action primitive as the headline-bearing claim.

**Required claims:**
- "Every clinical action carries its trail." (H1 headline.) **Citation source:** Cena-architecture canon — Appendix C #1 primitive (Phase 1 brief) per citation spec §3 row `/for-clinical-leaders` audit-trail primitive + §2(b) worked example. Cross-link to `#audit-trail-primitive` (Section 3).
- "Partner-institution clinicians retain clinical accountability; Cena's substrate captures the decision trail." (Framing paragraph.) **Citation source:** HDG packet §3.2 SAFE + sign-off list row 4 + `project_cena_accountability_model` memory. Cross-link to `#accountability-model` (Section 4).

**Required proof / artifacts:**
- Sticky sub-nav with 7 anchors as the structural proof — the scan-reader sees the page's shape before any prose lands.

**Voice cues:**
- The H1's verb-first structure is the page's whole voice contract — every section earns its claim by naming what the substrate **does**, not what it **is**. If a section's prose drifts into adjective-stacks ("comprehensive audit-grade tamper-proof…"), rewrite to verb-first ("writes one trail entry per action; records can be added, never altered…").
- The framing paragraph's job is to land *"this looks defensible"* on first read. If a legal-compliance reader could finish the paragraph and ask *"defensible against what?"*, the paragraph missed.

**Forbidden phrasings (this section):**
- "comprehensive provenance" / "audit-grade infrastructure" / "tamper-proof" / "immutable by design" (without specifying what makes it so) / "HIPAA-compliant" / "fully compliant" / "regulatory-grade" / "enterprise-grade" / "trust the system" / "auditability for the AI era" / "transparency at scale" / "blockchain-secured" — per HDG §5 + voice.md §4 + voice.md §2 forbidden patterns.

**Lens-specific notes:**
- **PLP:** First-use acronym expansion is non-negotiable. Legal-compliance readers do NOT carry technical acronym-density reflexively; expansion is a courtesy that signals the page was authored with their reading workflow in mind.
- **HDG:** Section 1 establishes the accountability-model framing in seed form (the framing paragraph's second clause); Section 4 carries the full enumeration with HDG-cleared phrasings. The seed-and-elaborate pattern is intentional.
- **BV:** Documentation-register on first sentence. The reader test: would a privacy officer who has read 50 vendor-security pages this year think *"this one is different — they actually wrote it like they understand what I'm reading for"* or would they default to discount-reflex on the first marketing-inflected sentence? If the latter, voice missed.

---

### Section 2: What provenance means here

**Heading:** *"What provenance means here."* H2; anchor `#what-provenance-means`.
**Position:** Section 2, page spine. Operational-definition section — gives the legal/compliance reader the page's working vocabulary in three sentences before any architectural claim lands.
**Length / shape:** ~120-160 words. 3-sentence operational definition + 1-2 short paragraphs giving the operational context.

**What this section must do:**
- Give a **3-sentence operational definition** of provenance in legal/compliance language. Sentence 1 names what provenance is at this substrate (the dated, sourced trail of every clinical action the substrate performs). Sentence 2 names what provenance is *for* on this substrate (the artifact a partner institution uses to satisfy IRB documentation, BAA log requirements, VBC reporting requirements, clinical-decision-support audit requirements). Sentence 3 names what provenance is **not** here (a marketing claim about "transparency"; a buzzword for "logs"; a feature of an AI model card).
- Use voice.md §11 internal-vocab translation: "provenance trail" is internal vocab; this page uses **"audit trail"** + **"audit-ready record"** as the public terms. The heading uses the term "provenance" because the legal/compliance reader searches for it; the body shifts to "audit trail" once the operational definition is laid down. This is the only place on the public site where "provenance" appears outside internal-vocabulary contexts.
- Name the four canonical regulatory frames the audit trail satisfies (per IA §8): IRB documentation requirements; BAA log requirements (45 CFR 164.504(e)); VBC reporting requirements; clinical-decision-support documentation requirements (FDA CDS guidance frame, without claiming FDA-clearance). Each frame should be referenced parenthetically on first use to ground the operational vocabulary.
- Briefly cite the regulatory framework references (45 CFR 164, IRB Common Rule under 45 CFR 46) so the legal-compliance reader can verify the page is grounded in the same code they read against.
- Cross-link to `/sample-audit-trail` once in this section: the operational definition has its artifact-side proof on the next page; the cross-link is a deferred-validation move (you can verify the claim against the artifact whenever you're ready).

**What this section must not do:**
- Claim "comprehensive provenance" or "full traceability" — vague generality that fails specificity-over-generality (voice.md §1).
- Claim "FDA-cleared" or "FDA-validated clinical decision support" — HDG §4 + Phase 1 Tech Accuracy MUST-NOT-SAY. The FDA CDS *frame* is referenced as a regulatory-citation context; the substrate is not claimed as FDA-cleared.
- Define provenance in vendor-marketing language ("a transformative approach to audit transparency"). The reader has read 50 of those; one more lands as discount-reflex.
- Use "blockchain," "distributed ledger," "tamper-proof" — voice.md §2 forbidden + HDG §3.2 architectural-pattern hedge. The substrate is not a blockchain; saying it is would be false, and saying it is *like* one would invite the regulatory-teardown risk Phase 1 Contrarian rejected.
- Conflate "audit trail" (the artifact the substrate produces per clinical action) with "audit log" (the underlying database log of all access events). The audit trail is a clinical artifact; the audit log is a security artifact. The hub's §6 security section covers the audit log; this page covers the audit trail.

**Required claims:**
- "Provenance here means the dated, sourced trail of every clinical action the substrate performs — the audit-ready record a partner institution uses to satisfy IRB documentation requirements (under 45 CFR 46), BAA log requirements (under 45 CFR 164.504(e)), value-based-contract reporting requirements, and clinical-decision-support documentation requirements." **Citation source:** Statutory citations to 45 CFR 46 + 45 CFR 164.504(e) per citation spec §2 row "Statutory / regulatory" + §3 sample-audit-trail annotation citation type. Cena-architecture canon per §2(b) for the substrate-produces-the-trail claim.
- "What we mean by audit trail throughout this page: the per-action artifact, not the underlying access log." **Citation source:** Operational vocabulary definition (no citation required; structural copy) + cross-reference to hub `#security` for access-log discipline.

**Required proof / artifacts:**
- Cross-link to `/sample-audit-trail` (deferred-validation move).
- Cross-link to hub `#security` for the audit-log discipline (which lives in security, not provenance).

**Voice cues:**
- 3-sentence operational definition is the page's working contract with the legal-compliance reader. Each sentence is short, declarative, citation-grounded. Vague phrasing here lets the rest of the page drift; tight phrasing here disciplines every section that follows.
- The "what provenance is **not**" sentence is the credibility move: legal-compliance readers respect a page that names what it isn't almost more than one that claims what it is.

**Forbidden phrasings (this section):**
- "comprehensive provenance" / "full traceability" / "FDA-cleared" / "FDA-validated CDS" / "blockchain-secured" / "distributed ledger" / "tamper-proof" / "transformative approach to audit transparency" / "AI-era audit trails" / "next-generation provenance" — per HDG §4 + §5 + voice.md §2 + §4.

**Lens-specific notes:**
- **PLP:** Section 2 is where the legal/compliance reader's working vocabulary lands. Acronym expansions for BAA, IRB, VBC, CDS, CFR (Code of Federal Regulations) must be in place. If the reader has to mentally translate any acronym on first encounter, the section missed.
- **HDG:** The regulatory-framework citations (45 CFR 46 + 45 CFR 164.504(e)) anchor the page in the legal-compliance reader's actual reference frame. These are not generic citations — they are the specific sections legal-compliance readers verify against. Per citation spec §2 row "Statutory / regulatory."
- **CTA:** No CTA claim or routing here; pure operational definition. The CTA's first foothold is Section 10.
- **BV:** Voice cue for this section — write it as if a privacy officer is going to read it across the table from you. The voice would not be marketing; it would be operational. Match that.

---

### Section 3: Audit trail per recommendation — the lead proof

**Heading:** *"Audit trail per recommendation."* H2; anchor `#audit-trail-primitive`.
**Position:** Section 3, page spine. **This is the lead architectural-proof claim of the page** — placed early because it's the most-cited primitive in the Phase 1 brief (Appendix C #1) and the clearest scan-mode payoff for the scan-reader.
**Length / shape:** ~200-300 words. 1 intro paragraph naming the primitive + 1 paragraph with the specifics + 1 cross-link paragraph to the artifact page.

**What this section must do:**
- Name the primitive in voice.md §1 specificity-over-generality language. The exemplar: *"Every patient record opened, edited, or acted on leaves a trail — automatically, by the system, not by a clinician remembering to log it."* (Phase 1 Appendix C #1 / HDG §3.2 SAFE.) Lead with this verbatim.
- Specify what the audit trail captures per clinical action: input data sources (with timestamps + source-system attribution), reasoning step (with model-architecture citation, vendor-independent), recommendation (with peer-reviewed-literature citations), accountable-clinician approval (with timestamp + clinician role), downstream outcome capture (with measurement timestamp + methodology), re-assessment trigger (with criteria). Use the same structure as IA §8 sample-audit-trail spec — the operational claim here matches the artifact on the next page.
- Frame the "by the system, not by a clinician remembering" line as the **operational accountability shift** — the substrate's job is to make the audit-ready record an intrinsic property of the action, not an after-the-fact compliance burden on the clinician. This is the partner-protagonist framing applied at the operational layer: the partner's clinicians keep their workflow; the substrate carries the documentation burden.
- Cross-link to `/sample-audit-trail` explicitly with the routing sentence: *"Every claim in this section is illustrated by a synthetic worked example on the sample audit trail page."* Per IA §4 sub-page sample-audit-trail cross-link.
- Reference the FDA Clinical Decision Support guidance frame as the regulatory-citation context for "every recommendation carries its lit citation" (without claiming FDA-clearance for Cena). FDA's CDS guidance (specifically the September 2022 final guidance on CDS software) names the documentation-of-citations criterion that recommendation-with-literature-citation satisfies.

**What this section must not do:**
- Claim "tamper-proof" — HDG §3.2 + voice.md §2 forbidden. The integrity claim lands in Section 5 with cryptographic-pattern hedging.
- Claim FDA-clearance — HDG §4 MUST-NOT-SAY. FDA's CDS guidance is referenced as a regulatory-citation context the audit trail satisfies for documentation purposes; the substrate is not claimed as FDA-cleared.
- Use "comprehensive," "full," "complete" as adjectives for the audit trail — voice.md §4 forbidden. Name what the trail captures specifically; let specificity carry credibility.
- Frame audit-trail-per-recommendation as "an AI safety feature" — collapses the substrate-vs-vendor positioning. The framing is **operational accountability**, not AI safety.
- Use "clinician burden reduction" as the framing — drifts into vendor-flattery register. The framing is "the substrate makes the documentation burden intrinsic to the action so the clinician's workflow stays clean."

**Required claims:**
- "Every patient record opened, edited, or acted on leaves a trail — automatically, by the system, not by a clinician remembering to log it." **Citation source:** Phase 1 Appendix C #1 hard-claim translation per citation spec §3 + Cena-architecture canon. HDG §3.2 SAFE.
- The 6-stage per-action capture structure (input data → reasoning step → recommendation with citation → clinician approval → outcome capture → re-assessment trigger). **Citation source:** Cena-architecture canon per citation spec §2(b) + IA §8 sample-audit-trail spec. Each field's "what it satisfies" annotation per HDG §3.3 + citation spec §3 row `/sample-audit-trail` annotations.
- "Each recommendation carries peer-reviewed-literature citations." **Citation source:** Cena-architecture canon (the substrate's citation-pattern is architectural) + cross-link to `/sample-audit-trail` for the worked-example annotation. Per HDG §3.3 SAFE-with-discipline + citation spec §3 row `/sample-audit-trail` recommendation lit-citations.

**Required proof / artifacts:**
- Cross-link to `/sample-audit-trail` (deferred validation; the artifact page proves what this section claims).
- The 6-stage capture structure as a structural list (visual primitive in Phase 3 build).
- Regulatory frame reference: 45 CFR 46 + 45 CFR 164.504(e) + FDA CDS final guidance (September 2022) as the documentation-criterion contexts.

**Voice cues:**
- "By the system, not by a clinician remembering to log it" is the most-load-bearing single line on the page for the legal-compliance reader. Preserve verbatim from Phase 1 Appendix C #1 — it earns its citation-density.
- The 6-stage structure list is the section's scannable spine. Each stage is 5-8 words; the list-shape is what carries the scan-reader past this section confidently.

**Forbidden phrasings (this section):**
- "tamper-proof" / "immutable by design" (without architectural specificity) / "FDA-cleared CDS" / "comprehensive audit trail" / "complete provenance" / "AI safety feature" / "clinician burden reduction" / "next-generation audit" / "blockchain-secured trail" — per HDG §3.2 + §4 + voice.md §4.

**Lens-specific notes:**
- **HDG:** Per HDG §3.2 SAFE recommended phrasing — Appendix C #1 lands cleanly. The 6-stage structure mirrors IA §8 sample-audit-trail spec exactly; consistency between this page and the artifact page is load-bearing.
- **CTA:** Verify the 6-stage capture structure against current Spark + substrate-architecture canon. Per HDG §8 future watchlist + outstanding-partner-input.md tracker — if Spark's current implementation captures fewer than 6 stages, hedge prose to "designed for" / "by architectural intent" for the stages not yet live. Flag for CTA review.
- **PLP:** First-use acronym expansion for FDA CDS (Clinical Decision Support) — legal-compliance readers tolerate FDA-as-bare-acronym but CDS less reliably.
- **BV:** This section is the page's lead architectural proof. Specificity is the credibility — name the 6 stages; name the citation pattern; name what regulatory frames the trail satisfies. Don't hand-wave.

---

### Section 4: Accountability model — partner-institution clinician retains

**Heading:** *"Accountability model: partner-institution clinician retains."* H2; anchor `#accountability-model`.
**Position:** Section 4, page spine. **Non-negotiable framing per dispatch + HDG packet sign-off list row 4 + `project_cena_accountability_model` memory.** This section is the line the HDG expert has been holding internally since 2026-04-28; this page is its public form.
**Length / shape:** ~200-280 words. 1 intro paragraph stating the model + 1 paragraph naming what Cena's substrate does + 1 paragraph naming what Cena's substrate does **not** do (the boundary).

**What this section must do:**
- State the accountability model verbatim per HDG sign-off list row 4: *"During pilots, partner-institution clinicians retain clinical accountability for every recommendation Cena's substrate generates. Cena's role is the audit-grade trail that makes that accountability defensible."* This is the page's most-load-bearing claim.
- Name what Cena's substrate **does** at the accountability layer: writes the audit-ready record per recommendation; surfaces the recommendation with citation; routes to the accountable clinician for approval; records the clinician's approval (or rejection or modification) with timestamp + clinician role; preserves the full trail across the recommendation's lifecycle.
- Name what Cena's substrate **does not** do — explicit boundary statement per HDG packet §3.2 critical phrasing. **Custodial framing only — no proprietary framing.** Use: *"Cena holds patient health information on behalf of the partner institution; the partner institution owns the patient relationship and the clinical authority over every recommendation."* Per HDG §3.2 — critical that this does NOT slip into "Cena's clinical staff approve recommendations" or "Cena owns patient records."
- Frame "during pilots" as the current operational reality — the accountability model evolves as Cena hires its own clinical staff (Soto, Morales, Director of Clinical Ops per `project_cena_accountability_model` memory, names confirmed with Vanessa). The page does **not** name the future Cena clinical staff publicly; the "during pilots" hedge handles the present-tense honesty.
- Reference the IRB documentation context — *"Provenance artifacts are designed to satisfy IRB documentation requirements for research-adjacent use of the substrate."* Per HDG §3.2 HEDGE recommended phrasing. Do NOT claim "IRB-approved" or "IRB-reviewed."

**What this section must not do:**
- Claim "Cena's clinical staff approve recommendations" — HDG §3.2 critical MUST-NOT-SAY. This implies a posture Cena does not hold during pilots.
- Claim "Cena owns patient records" or "records belong to Cena" or "the knowledge, the memory, and the workflows belong to Cena" — HDG §3.2 critical MUST-NOT-SAY. This was the framing flagged in the 2026-04-28 Vanessa AVA Briefing review; the Ch. 2 framing cannot appear in public form.
- Claim "IRB-approved," "IRB-reviewed," "IRB-cleared" — HDG §3.2 explicit. IRB approval attaches to *protocols*, not to Cena as a vendor.
- Imply Cena holds clinical authority during pilots — collapses the accountability framing and creates a regulatory-misrepresentation risk surface.
- Use "AI-assisted clinical decision-making" as a standalone frame — drifts into vendor positioning Cena does not claim. The framing is **substrate captures the trail; clinician makes the decision.**
- Promise "shared accountability" or "co-ownership of decisions" — vendor-flattery framing that obscures the actual model. The model is **clinician retains; substrate captures.**

**Required claims:**
- "During pilots, partner-institution clinicians retain clinical accountability for every recommendation Cena's substrate generates. Cena's role is the audit-grade trail that makes that accountability defensible." **Citation source:** HDG packet sign-off list row 4 + §3.2 SAFE + `project_cena_accountability_model` memory. The phrasing is the line Cena has been holding internally; this is its public form.
- "Cena holds patient health information on behalf of the partner institution; the partner institution owns the patient relationship and the clinical authority over every recommendation." **Citation source:** HDG §3.2 critical custodial-framing phrasing. The custodial-framing line is load-bearing.
- "Provenance artifacts are designed to satisfy IRB documentation requirements for research-adjacent use of the substrate." **Citation source:** HDG §3.2 HEDGE phrasing. Cross-reference to 45 CFR 46 for the IRB common-rule frame.

**Required proof / artifacts:**
- The three-paragraph structure (model statement + what substrate does + what substrate does not do) as the section's structural primitive — visually distinct in Phase 3 build (likely a quiet two-column or three-band layout, "what we do | what we don't").
- Cross-link to hub `#security` for the encryption + access-control discipline that makes the custodial holding operationally enforceable.

**Voice cues:**
- "Clinician retains; substrate captures" is the page's whole accountability voice contract. Every adjacent sentence in the section earns its place against that contract.
- The "during pilots" hedge is what makes the public framing honest about Cena's stage (`project_cena_stage` memory — pre-revenue, pilots-planning). Without the hedge, the framing would over-claim Cena's current operational posture.

**Forbidden phrasings (this section):**
- "Cena's clinical staff approve" / "Cena owns patient records" / "records belong to Cena" / "the knowledge belongs to Cena" / "Cena holds clinical authority" / "shared accountability" / "co-ownership of decisions" / "AI-assisted clinical decision-making" (standalone) / "IRB-approved" / "IRB-reviewed" / "IRB-cleared" / "regulatory-approved provenance" — per HDG §3.2 critical + §4 cross-cutting MUST-NOT-SAY.

**Lens-specific notes:**
- **HDG (primary):** This is the most-load-bearing section on the page for HDG ceiling discipline. Every sentence must survive HDG §3.2 + sign-off list row 4 recommended phrasings. The custodial-vs-proprietary distinction is the most-load-bearing single phrasing call on the entire public site for HIPAA-adjacency.
- **CTA:** Verify accountability-model phrasing against current Spark + substrate-architecture canon. The model is documented per `project_cena_accountability_model`; live operational reality during pilots matches the framing per HDG packet ground truth. No CTA flag here.
- **PLP:** Legal-compliance readers will hold this section to higher scrutiny than any other on the page. Specificity earns credibility; vagueness reads as evasion. Name the model in three short paragraphs; let the structure carry the credibility.
- **BV:** Quiet competence over confidence-theater. The accountability model is itself a load-bearing claim; voice does not need to defend it. State the model; name what the substrate does; name what it doesn't do; close.

---

### Section 5: Hash-chain integrity primitive (HEDGED)

**Heading:** *"Integrity: records can be added, never altered."* H2; anchor `#integrity`.
**Position:** Section 5, page spine. **PARTNER-INPUT-GATED per outstanding-partner-input.md item #3 (SHA-256 hash chain).** Hedged-default ships now; strict-superset upgrade lands when Andrey verifies SHA-256 implementation is current.
**Length / shape:** ~180-250 words. 1 paragraph naming the integrity primitive + 1 paragraph hedging at the verification-hash altitude + cross-link routing.

**What this section must do:**
- Lead with Phase 1 Appendix C #2 hard-claim translation: *"Records can be added, never altered."* Verb-first, structural, scannable.
- Hedge the cryptographic specifics per outstanding-partner-input.md item #3 and HDG packet §3.2 HEDGE recommended phrasing. **Hedged default:** *"Every agent message carries a verification hash — so the question 'was this changed?' is answerable, not asserted."* Per HDG §3.2 explicit hedged phrasing.
- Do **not** name SHA-256 by algorithm at the public-page altitude — this is the partner-input-gated specific. The hedged default uses "verification hash" without algorithmic specifics; the NDA-room documentation contains the algorithmic details.
- Frame "answerable, not asserted" as the load-bearing accountability-discipline distinction: the substrate does not **claim** integrity; the substrate **proves** integrity by making the question-of-change a verifiable check.
- Cross-link to `/sample-audit-trail` — the worked-example annotation shows what a verification-hash field looks like in practice (per IA §8 sample-audit-trail spec + HDG §3.3 vendor-independent-model-architecture-citation discipline).
- Reference the architectural pattern by class without naming the specific algorithm: cryptographic hash chain pattern, append-only data structure, signature-per-message pattern. Per HDG §3.2 — verify against current implementation; if not yet shipped in Spark per `patient-app.md` archive-IA build, the verification-hash framing holds without algorithmic upgrade.

**What this section must not do:**
- Name SHA-256 (or any specific algorithm) by name **until** Andrey confirms implementation. Per outstanding-partner-input.md item #3 + HDG §3.2 HEDGE.
- Claim "tamper-proof," "immutable by design" (without architectural specificity), "blockchain," "distributed ledger," "cryptographically guaranteed" — voice.md §2 forbidden + HDG §3.2 forbidden. The integrity claim hedges to verification-hash framing.
- Claim "every change is traceable" — passive-voice claim that obscures the architectural specifics. The framing is "records can be added, never altered; every action carries a verification hash."
- Conflate "integrity" (the per-message verification-hash pattern) with "audit trail" (the per-action artifact). Section 3 is the per-action artifact; this section is the per-message integrity pattern. Cross-reference to Section 3 but do not duplicate.
- Promise "zero-trust verification" or "blockchain-verified clinical records" — vendor-marketing register that triggers regulatory-teardown risk Phase 1 Contrarian rejected.

**Required claims:**
- "Records can be added, never altered." **Citation source:** Phase 1 Appendix C #2 hard-claim translation + HDG §3.2 SAFE. Cena-architecture canon per citation spec §2(b).
- "Every agent message carries a verification hash — so the question 'was this changed?' is answerable, not asserted." **Citation source:** HDG §3.2 HEDGE recommended phrasing + outstanding-partner-input.md item #3 hedged default. **Launch-gating partner-input.**
- Cross-link to `/sample-audit-trail` for the worked example. **Citation source:** Cross-link only; no new claim.

**Required proof / artifacts:**
- Cross-link to `/sample-audit-trail` worked example (a verification-hash field in the annotated sample).
- Cross-link to NDA-room CTA in Section 10 for algorithmic specifics.
- The "answerable, not asserted" phrasing as the section's voice-spine — it is the credibility move that distinguishes this page from the dozens of "tamper-proof audit trail" claims legal-compliance readers have discounted.

**Voice cues:**
- "Answerable, not asserted" is the page's most quotable single line for the credibility move. It earns its place in Section 5 because the partner-input hedge makes the algorithmic specifics inaccessible at the public-page altitude; the credibility has to land on the **framing**, not the **algorithm**.
- The hedging is itself a credibility move — legal-compliance readers respect a page that hedges on what it can't yet substantiate. Saying "verification hash" instead of "SHA-256 hash chain" reads as honesty, not weakness, to the right reader.

**Forbidden phrasings (this section):**
- "SHA-256" (until Andrey confirms) / "tamper-proof" / "blockchain-secured" / "distributed ledger" / "cryptographically guaranteed" / "immutable by design" (without specificity) / "zero-trust verification" / "blockchain-verified clinical records" / "every change is traceable" (passive) — per HDG §3.2 + voice.md §2 + outstanding-partner-input.md item #3.

**Lens-specific notes:**
- **HDG:** Hedged default per HDG §3.2 HEDGE. The verification-hash framing is the HDG-approved altitude for public-surface claims at outstanding-partner-input.md item #3's hedged state. Upgrade to SHA-256-named when Andrey verifies and confirms public-surface phrasing.
- **CTA:** Per HDG packet §8 future watchlist — verify the verification-hash pattern is implemented in current Spark vs. aspirational. If aspirational-only, the framing holds at "architected for" / "by design"; if implemented, the framing holds at "carries" (operational claim). Flag for CTA review against current implementation.
- **PLP:** No new acronyms; integrity-vocabulary is in the legal-compliance reader's existing reference frame.
- **BV:** The hedge is the voice move. Don't apologize for the hedge; don't over-explain it. State the hedged claim; let it land; cross-link to the artifact + NDA-room for the reader who wants more.

---

### Section 6: Five-category enforcement primitive (HEDGED)

**Heading:** *"Categories of clinical action are blocked at the system level."* H2; anchor `#categories`.
**Position:** Section 6, page spine. **PARTNER-INPUT-GATED per outstanding-partner-input.md item #4 (five-categories-blocked).** Hedged-default ships now (drop "Five" until Andrey verifies enumeration); strict-superset upgrade adds "Five" when Andrey confirms.
**Length / shape:** ~180-250 words. 1 paragraph naming the enforcement primitive + 1 paragraph naming the architectural pattern + cross-link routing.

**What this section must do:**
- Lead with Phase 1 Appendix C #4 hard-claim translation (hedged per outstanding-partner-input.md item #4): *"Categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training."* Per HDG §3.2 SAFE + outstanding-partner-input.md item #4 hedged default.
- Name the architectural pattern by class: **rule-based enforcement of named approval requirements**, applied at the substrate's recommendation-generation layer, **before** the recommendation reaches the partner-institution clinician. The accountable-clinician approval (per Section 4) is then the second checkpoint above the architectural enforcement.
- Frame the "enforced in code, not in training" line as the load-bearing safety-discipline distinction: the substrate does not rely on model behavior (which is probabilistic) to enforce the categories; the substrate uses deterministic code paths (which are verifiable). This is the substrate's structural separation of judgment (model) from enforcement (code).
- Cross-reference the accountability model in Section 4 — the enforced-in-code categories are the architectural floor; the accountable-clinician approval per Section 4 is the partner-institution-clinical-authority ceiling. Both stand together.
- Do **not** enumerate the five categories at the public-page altitude — this is the partner-input-gated specific per outstanding-partner-input.md item #4. The hedged default uses "categories of clinical action" without naming the five; the NDA-room documentation contains the enumeration if Andrey confirms it is publicly safe.

**What this section must not do:**
- Enumerate "five categories" by listing them, **until** Andrey verifies the enumeration is publicly safe. Per outstanding-partner-input.md item #4 + HDG §3.2 SAFE-with-verification.
- Use the literal word "Five" at the start of the claim **until** Andrey confirms the count + enumeration. The hedged default drops the count and uses "categories" plural.
- Claim "AI safety guardrails" — vendor-marketing register that triggers FDA-CDS regulatory-teardown risk. The framing is **deterministic code enforcement of named-approver requirements**, not "AI safety."
- Use "guardrails" as a standalone noun — drifts into vendor-vocabulary the legal-compliance reader has learned to discount.
- Promise "no AI hallucination in clinical decisions" — collapses the substrate-vs-vendor positioning + makes a claim about model behavior the substrate cannot guarantee at the model layer (it guarantees enforcement at the code layer; that is the substrate's discipline).
- Imply Cena's enforcement substitutes for clinical judgment — the architectural floor is below the partner-institution clinician's authority, not above it.

**Required claims:**
- "Categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training." **Citation source:** Phase 1 Appendix C #4 hard-claim translation + HDG §3.2 SAFE + outstanding-partner-input.md item #4 hedged default. **Launch-gating partner-input.**
- "Architecturally, this is deterministic rule-based enforcement applied at the recommendation-generation layer — the substrate's structural separation of judgment from enforcement." **Citation source:** Cena-architecture canon per citation spec §2(b). Architectural-pattern reference.
- Cross-reference to Section 4 (accountability model) — the code-enforced categories are the architectural floor; the accountable-clinician approval is the partner-institution-clinical-authority ceiling. **Citation source:** Cross-reference; no new claim.

**Required proof / artifacts:**
- Cross-link to `/sample-audit-trail` worked example (the "named approver" field in the annotated sample).
- Cross-link to NDA-room CTA in Section 10 for the enumerated category list (if Andrey confirms public safety; otherwise stays in NDA room only).
- Cross-reference to Section 4 (accountability model) — the two sections compose into the full architectural-floor + clinical-authority-ceiling discipline.

**Voice cues:**
- "Enforced in code, not in training" is the section's load-bearing voice move — distinguishes the substrate from probabilistic vendor frames. Preserve verbatim from Phase 1 Appendix C #4.
- The hedge on "five" vs. "categories" is honest about the launch-gating partner-input. Do not apologize for the hedge; the public-page altitude carries the framing claim, and the NDA-room documentation carries the enumeration if Andrey confirms.

**Forbidden phrasings (this section):**
- "Five categories" (until Andrey confirms enumeration is publicly safe) / "AI safety guardrails" / "guardrails" (standalone noun) / "no AI hallucination in clinical decisions" / "AI-safe by design" / "next-generation AI safety" / "Cena's clinical staff approve" (substituting Cena for partner) — per HDG §3.2 + outstanding-partner-input.md item #4 + voice.md §4.

**Lens-specific notes:**
- **HDG:** Hedged default per HDG §3.2 SAFE + outstanding-partner-input.md item #4 hedged default. The "categories of clinical action" altitude holds; upgrade to "Five categories" + enumeration when Andrey verifies. The HDG-cleared phrasing is the ceiling.
- **CTA:** Per HDG packet §8 future watchlist — verify the categories are documented in code today, not aspirational. The "enforced in code, not in training" claim is precisely the kind of architectural claim the technical-evaluator and legal-compliance reader will hold to high scrutiny. Flag for CTA review.
- **PLP:** No new acronyms; the legal-compliance reader recognizes "enforced in code" as the deterministic-pattern frame they trust over probabilistic-pattern frames.
- **BV:** The "enforced in code, not in training" distinction is the page's single sharpest credibility move for legal-compliance readers who carry an instinctive distrust of "AI safety" framings. Earn that move; don't drift it.

---

### Section 7: Second-system clinical check primitive

**Heading:** *"Second-system check: every recommendation shows its work."* H2; anchor `#second-system`.
**Position:** Section 7, page spine. Phase 1 Appendix C #5 hard-claim translation. **Not partner-input-gated** at this altitude; ships at full claim.
**Length / shape:** ~180-250 words. 1 paragraph naming the primitive + 1 paragraph naming the architectural pattern + cross-link routing.

**What this section must do:**
- Lead with Phase 1 Appendix C #5 hard-claim translation: *"Every agent action shows its work — what it concluded, how sure it was, and what a second system checked against it before the work moved forward."* Preserve verbatim.
- Name the three load-bearing per-action fields the second-system check captures: (a) the recommendation's conclusion, (b) the substrate's confidence in the conclusion (uncertainty quantification), (c) the second-system check's verdict (whether the second system concurs, dissents, or flags for human review).
- Frame the "second system" architecturally without naming the specific implementation — the substrate's reasoning step is checked by a structurally-independent verification step before the recommendation reaches the accountable clinician. This is the substrate's structural separation of generation from verification.
- Cross-link to `/sample-audit-trail` — the worked-example annotation shows what a second-system-check field looks like in practice (per IA §8 sample-audit-trail spec).
- Reference the regulatory frame the second-system pattern aligns to: FDA CDS guidance's "show your work" criterion + IRB documentation requirements for AI-augmented clinical decisions. Do **not** claim FDA-clearance; reference the regulatory-citation context as the frame the second-system check satisfies for documentation purposes.

**What this section must not do:**
- Claim "AI checks AI" — vendor-marketing register that triggers regulatory discount-reflex.
- Use "double-check," "validation layer," "redundancy" as standalone framings — voice.md §4 vendor-flattery register.
- Name the specific second-system implementation (different model vendor, different reasoning approach, etc.) — vendor-stack disclosure per HDG packet §7 default (vendors-not-named publicly).
- Claim "no AI hallucination" or "guaranteed accuracy" — collapses the substrate-vs-vendor positioning + makes a claim about model behavior the substrate cannot guarantee. The framing is **structural separation of generation from verification**; the second-system check is a process discipline, not a model-quality guarantee.
- Imply the second-system check substitutes for the partner-institution clinician's authority — per Section 4 accountability model.

**Required claims:**
- "Every agent action shows its work — what it concluded, how sure it was, and what a second system checked against it before the work moved forward." **Citation source:** Phase 1 Appendix C #5 hard-claim translation + Cena-architecture canon per citation spec §2(b). HDG-cleared at architectural-pattern altitude.
- The three-field per-action capture (conclusion + uncertainty quantification + second-system verdict). **Citation source:** Cena-architecture canon. Cross-link to `/sample-audit-trail` for worked-example annotation.
- Regulatory-citation context — FDA CDS guidance "show your work" criterion + IRB documentation requirements. **Citation source:** Cross-reference to citation spec §3 row `/sample-audit-trail` annotations + 45 CFR 46 (IRB common rule).

**Required proof / artifacts:**
- Cross-link to `/sample-audit-trail` worked example.
- The three-field per-action capture as a structural list (visual primitive in Phase 3 build).
- Cross-reference to Section 5 (integrity primitive) — the second-system check's verdict is itself captured under the integrity primitive's verification-hash discipline (every check carries a hash; the question "was this check changed?" is answerable, not asserted).

**Voice cues:**
- "Shows its work — what it concluded, how sure it was, and what a second system checked against it" is the section's load-bearing voice move. Preserve verbatim from Phase 1 Appendix C #5.
- The architectural-pattern framing (generation vs. verification as structurally separate) is the credibility move that distinguishes this from "AI safety guardrails" vendor-vocabulary.

**Forbidden phrasings (this section):**
- "AI checks AI" / "double-check by AI" / "validation layer" / "redundancy" (standalone) / "no AI hallucination" / "guaranteed accuracy" / "AI-safe by design" / "self-checking AI" / specific second-system vendor names — per HDG §4 + §7 + voice.md §4 + Phase 1 brief Tech Accuracy.

**Lens-specific notes:**
- **HDG:** Architectural-pattern altitude holds at full claim per Phase 1 Appendix C #5 + HDG §3.3 vendor-independent-model-architecture-citation discipline. Vendor-specific second-system implementation routes to NDA room.
- **CTA:** Verify the three-field capture against current Spark + substrate-architecture canon. Per HDG §8 future watchlist — confirm uncertainty-quantification + second-system-verdict are implemented vs. aspirational. Flag for CTA review.
- **PLP:** No new acronyms; the legal-compliance reader recognizes "show your work" as the documentation-discipline frame from clinical-decision-support and FDA CDS guidance.
- **BV:** The "shows its work" phrasing borrows from the long-standing convention in scientific publication and clinical documentation that explanation accompanies conclusion. Preserve the convention's voice; it earns credibility through familiarity.

---

### Section 8: Cross-link to /sample-audit-trail

**Heading:** *"See the audit trail in practice."* H2; anchor `#artifact`.
**Position:** Section 8, page spine. **Bridge section** — every architectural claim on this page is illustrated by the synthetic worked example on `/sample-audit-trail`. The IRB liaison's destination is the sample audit trail; this page's job is to set up that destination.
**Length / shape:** ~80-120 words. 1 short paragraph + 1 cross-link CTA-shaped sentence (but the CTA is a deferred-validation move, not a form-gated CTA — the form-gated CTA is in Section 10).

**What this section must do:**
- Frame the cross-link as the artifact-side proof of the architectural claims. The reader has just read 5 architectural-claim sections; this section says: *"Every claim above is illustrated, in synthetic form, on the sample audit trail page — input data sources, reasoning step, recommendation with citation, clinician approval, outcome capture, re-assessment trigger, verification hash, second-system check."*
- Name the artifact page's discipline as the validation move: **all sample data on the page is synthetic; field structure and audit-event taxonomy reflect the substrate's actual implementation; specific values are fabricated.** Per HDG packet §3.3 + IA §8 sample-audit-trail spec. This phrasing prevents the reader from misreading the artifact as a real-patient case.
- Cross-link to `/sample-audit-trail` explicitly. The cross-link sentence is the section's structural primitive.
- Use voice.md §9 no-CTA-pages-as-credibility discipline — the artifact page itself carries no CTA; the cross-link from this page is purely informational. The reader's action path from the artifact page is offline (close tab, reply to champion).
- Do not duplicate the artifact page's content here. The bridge is intentional; the depth lives on the next page.

**What this section must not do:**
- Render the sample audit trail inline on this page — collapses the artifact-page treatment + makes this page too long.
- Imply the sample is real — HDG §3.3 critical synthetic-data discipline + IA §8 explicit phrasing.
- Use marketing CTA language ("Click to explore our audit trail in action!") — voice.md §6 + §9 forbidden.
- Promise "interactive audit trail" or "live demo" — the artifact page is an annotated synthetic example, not an interactive tool.

**Required claims:**
- "Every architectural claim on this page is illustrated, in synthetic form, on the sample audit trail page." **Citation source:** Cross-reference to `/sample-audit-trail` + IA §8 sample-audit-trail spec.
- "All sample data on that page is synthetic; field structure and audit-event taxonomy reflect the substrate's actual implementation; specific values are fabricated." **Citation source:** HDG packet §3.3 + sign-off list row 6 (synthetic-data discipline). Cena-architecture canon.

**Required proof / artifacts:**
- Cross-link to `/sample-audit-trail`.

**Voice cues:**
- The bridge-shape is the voice move — the page does the architectural-claim work; the artifact page does the worked-example work. This section is the seam between them, named with structural honesty.
- Quiet competence: do not pitch the artifact page; name it; cross-link; close.

**Forbidden phrasings (this section):**
- "interactive audit trail" / "live demo" / "experience the audit trail" / "see it in action" / "explore our system" / "click to engage" — voice.md §6 + §9 forbidden CTA-marketing register.

**Lens-specific notes:**
- **HDG:** Per HDG §3.3 critical synthetic-data discipline + sign-off list row 6. The synthetic-data framing is non-negotiable; the legal-compliance reader will look for it before opening the artifact page.
- **CTA:** No CTA flag — this is a bridge section, not a CTA section.
- **BV:** Quiet, bridge-shaped; the section's voice job is to hand off to the next page cleanly.

---

### Section 9: Cross-link to hub /how-the-substrate-works/#security

**Heading:** *"Security posture — encryption, access control, retention."* H2; anchor `#security-crosslink`.
**Position:** Section 9, page spine. **Bridge section** — the encryption + access-control + audit-log-retention claims live on the hub (per IA §4 hub section 6 + HDG §3.1); this page's accountability framing depends on the security discipline being in place. Cross-link out to the hub for the operational specifics.
**Length / shape:** ~100-140 words. 1 short paragraph + cross-link routing.

**What this section must do:**
- Frame the relationship between this page's accountability discipline and the hub's security discipline: **provenance + accountability requires security as its operational floor.** The audit-ready record is only as defensible as the underlying encryption + access-control + retention discipline. The hub's `#security` section names the operational specifics; this section cross-links to it.
- Name the security categories briefly without restating the hub's content: encryption at rest, encryption in transit, role-scoped access control, tenant isolation per partner program, BAA-eligible cloud infrastructure, audit-log retention per partner contract.
- Use voice.md §1 specificity-over-generality + voice.md §2 hub register — name the categories specifically; cross-link to the hub for the per-claim recommended-phrasing detail.
- Cross-link explicitly to `/how-the-substrate-works/#security`. The cross-link is the section's structural primitive.

**What this section must not do:**
- Restate the hub's `#security` content — collapses define-once.md discipline + makes this page too long. The cross-link is the discipline.
- Claim "HIPAA-compliant" or any noun-phrase HIPAA usage — HDG §5 explicit MUST-NOT-SAY. The hub's `#security` section has the cleared phrasings; this section references them by cross-link, not by restating.
- Promise specific encryption ciphers, retention periods, or vendor-stack details — HDG §3.1 routes specifics to NDA room.
- Frame security as the load-bearing claim on this page — security is the operational floor under accountability; accountability is the page's load-bearing claim. The hierarchy is intentional.

**Required claims:**
- "Provenance and accountability depend on security as their operational floor. The hub's security section names the encryption-at-rest, encryption-in-transit, role-scoped access, tenant-isolation, BAA-eligible cloud infrastructure, and audit-log-retention specifics." **Citation source:** Cross-reference to `/how-the-substrate-works/#security` + HDG §3.1 SAFE + HEDGE recommended phrasings. No new claim originating on this section.

**Required proof / artifacts:**
- Cross-link to `/how-the-substrate-works/#security`.

**Voice cues:**
- Bridge-shape; cross-link does the navigational work. Voice does not narrate the click (per voice.md §6).
- Define-once discipline: this section is the canonical cross-link from accountability to security; the hub is canonical for the security specifics.

**Forbidden phrasings (this section):**
- "HIPAA-compliant" / "fully secure" / "enterprise-grade encryption" / "military-grade security" / "bank-level encryption" — voice.md §4 + HDG §5.

**Lens-specific notes:**
- **HDG:** Cross-link discipline keeps the HDG-cleared phrasings on the hub canonical; this page does not duplicate.
- **BV:** Short, bridge-shaped; the section is structural infrastructure, not a content section.

---

### Section 10: Objection band — IRB / BAA / CDS audit requirements

**Heading:** *"Objections."* H2; anchor `#objections`. Per IA canonical section template item 7.
**Position:** Section 10, page spine. The page's penultimate section, immediately before the CTA. The objection band is the IRB-liaison's last-look before the deferred-validation cross-link to the sample audit trail and the deferred CTA in Section 11.
**Length / shape:** ~350-450 words. 3 Q+A pairs in voice.md §2 substrate hub register.

**What this section must do:**
- Run **3 Q+A pairs** on the highest-frequency legal-compliance vetting questions. Per IA canonical section template item 7 + IA §4 "Objection-resolution band (2-3 short Q+A on highest-frequency vetting questions for primary role)." Three is the right count for legal-compliance scan-mode — fewer reads as ducking; more reads as defensive.
- **Q1: IRB documentation requirements.** Question: *"Are Cena's audit-ready records sufficient for IRB documentation of substrate-augmented clinical decisions?"* Answer (per HDG §3.2 HEDGE): *"The substrate's audit-ready records are designed to satisfy IRB documentation requirements for research-adjacent use of the substrate — the per-action capture (input data, reasoning step, recommendation with citation, accountable-clinician approval, outcome) maps to the documentation criteria under the IRB common rule (45 CFR 46). Cena is not IRB-approved; IRB approval attaches to the partner institution's specific protocol, with the substrate's audit-ready records supporting that approval."* Per HDG §3.2 explicit HEDGE + sign-off list row 4 + 45 CFR 46.
- **Q2: BAA requirements.** Question: *"How does Cena's substrate satisfy our BAA log-retention and breach-notification requirements?"* Answer (per HDG §3.1 + §6): *"Cena's substrate is architected to operate as a business associate under HIPAA when a partner institution contracts us to handle PHI on their behalf. The substrate captures audit events automatically and retains them per the partner program's contractual retention requirements. BAA-specific terms — log-retention duration, breach-notification timing, audit-access procedures — are negotiated partner-by-partner per 45 CFR 164.504(e); the NDA-gated documentation room contains the BAA template and the audit-log schema."* Per HDG §6 BAA discipline + 45 CFR 164.504(e).
- **Q3: Clinical Decision Support documentation requirements.** Question: *"How does Cena's substrate align with FDA Clinical Decision Support guidance for documentation?"* Answer (per HDG §3.3 + Phase 1 brief Tech Accuracy): *"FDA's September 2022 final guidance on Clinical Decision Support software names documentation criteria for the recommendation's basis (input data sources, evidence basis, confidence). Cena's audit-ready records capture each of these criteria per recommendation. Cena is not claimed as FDA-cleared CDS; the substrate's documentation pattern is designed to support partner-institution clinicians' independent clinical authority over each recommendation."* Per HDG §3.3 + Phase 1 brief Tech Accuracy must-not-say (no FDA-clearance claim) + FDA CDS final guidance reference.
- Use voice.md §2 substrate hub register — short, declarative, citation-grounded. Each answer is 50-80 words; longer answers drift into defensive over-explanation.
- Cross-link in answers (Q1 → `#accountability-model` + `/sample-audit-trail`; Q2 → hub `#security` + NDA-room CTA; Q3 → `/sample-audit-trail`).

**What this section must not do:**
- Claim "IRB-approved," "IRB-reviewed," "IRB-cleared" — HDG §3.2 explicit MUST-NOT-SAY.
- Claim "FDA-cleared CDS," "FDA-validated CDS" — HDG §4 + Phase 1 brief Tech Accuracy MUST-NOT-SAY.
- Claim "BAAs in place across all partner institutions" or any universality-of-BAA-coverage framing — HDG §6 explicit MUST-NOT-SAY.
- Use marketing-defensive register ("Rest assured…" / "Cena is committed to…" / "Our team works tirelessly to ensure…") — collapses the legal-compliance register on the most-scrutinized section of the page.
- Frame the answers as "trust us" — legal-compliance readers discount trust-claims; specificity-grounded answers earn the read.

**Required claims:**
- Q1 answer claims (IRB-documentation alignment + Cena-not-IRB-approved). **Citation source:** HDG §3.2 HEDGE + 45 CFR 46 (IRB common rule) per citation spec §2 row "Statutory / regulatory."
- Q2 answer claims (BAA-architected + per-partner retention + 45 CFR 164.504(e) frame). **Citation source:** HDG §6 BAA discipline + 45 CFR 164.504(e) per citation spec §2 row "Statutory / regulatory."
- Q3 answer claims (FDA CDS guidance alignment + Cena-not-FDA-cleared). **Citation source:** FDA CDS final guidance (September 2022) per citation spec §2 row "Statutory / regulatory" + HDG §3.3.

**Required proof / artifacts:**
- 3 Q+A pairs as the section's structural primitive (visual: parallel-structure cards or stacked bands in Phase 3 build).
- Cross-links in each answer to the relevant section anchor or sub-page.
- Citation markers `[^N]` for each statutory/regulatory citation per citation spec §5 inline citation pattern.

**Voice cues:**
- Q+A answers are the closest the page gets to vendor-pitch register; the section's voice contract is that each answer must read as a privacy officer's written response to a question, not a marketing brochure's. If any answer drifts to "Rest assured…" or "Our team is committed to…", rewrite to declarative + citation.
- "Cena is not [X]" is a credibility move per HDG §5. Naming what Cena is **not** (IRB-approved, FDA-cleared) reads as honesty; vendor-marketing instinct is to dodge these claims, and dodging is the failure mode the page must avoid.

**Forbidden phrasings (this section):**
- "IRB-approved" / "IRB-reviewed" / "IRB-cleared" / "FDA-cleared CDS" / "FDA-validated" / "BAAs in place across all partners" / "Rest assured" / "Cena is committed to" / "Our team works tirelessly" / "industry-leading compliance" / "best-in-class governance" — per HDG §3.2 + §4 + §6 + voice.md §4.

**Lens-specific notes:**
- **HDG (primary):** Every Q+A answer must survive HDG recommended phrasings as ceiling. Q1 = HDG §3.2 HEDGE; Q2 = HDG §6 BAA discipline; Q3 = HDG §3.3.
- **CTA:** Verify each answer's architectural claim against current Spark + substrate-architecture canon. Per HDG §8 future watchlist — confirm operational reality matches the architectural-pattern claims before ship. Flag for CTA review.
- **PLP:** First-use acronym expansion check — IRB, BAA, PHI, CDS, FDA, CFR all expand on first use across the section (most expand earlier in the page; reconfirm on a per-Q basis).
- **BV:** Q+A is the closest-to-marketing register on the page; voice discipline is highest-stakes here. Quiet competence; declarative + citation; no defensive over-explanation.

---

### Section 11: CTA — Request the security packet (NDA-gated)

**Heading:** *"Request the security packet."* H2; anchor `#cta`.
**Position:** Section 11, page spine. **Single primary CTA on the page.** Inherits from hub per IA §9 row 5 + voice.md §9 "NDA-gated documentation room." Form-shape per hub: name, role, partner-org, BAA-counsel contact.
**Length / shape:** ~80-120 words. 1 short framing paragraph + 1 form-introduction sentence.

**What this section must do:**
- Frame the CTA as the deferred-validation path: the architectural-claim work on this page is complete; the operational specifics (encryption ciphers, vendor stack, BAA template, audit-log schema, sample provenance artifacts, incident-response procedures route) live in the NDA-gated documentation room.
- Use voice.md §9 NDA-gated CTA example: *"Request the security packet — NDA-gated documentation room with integration architecture, data-handling controls, and BAA-ready legal package."* Adapt for the provenance-and-accountability page's deeper-than-hub legal-compliance read: *"The security packet's documentation room contains the BAA template, the audit-log schema, the encryption-and-access-control control matrix, and the synthetic provenance-artifact samples. Access requires name, role, partner-org, and BAA-counsel contact."*
- Name the form fields explicitly per IA §9 + HDG packet §3.5 sign-off list row 5 categories-only-public phrasing. The form-shape is the same as the hub's; consistency across substantiation CTAs reads as competence.
- Cross-link to the NDA-room landing page (the form itself).
- Use voice.md §9 CTA voice mechanics: "Security packet" is procurement-language the technical-evaluator and BAA counsel both recognize; the NDA gate is named, not hidden; signals Cena treats partner-org confidentiality as the norm.

**What this section must not do:**
- Use marketing-CTA register ("Schedule a demo!" / "Talk to sales!" / "Get started now!") — voice.md §9 forbidden + IA §9 high-effort-on-Cena's-side-low-pressure-on-partner-side discipline.
- Promise "instant access," "immediate download," "no friction" — vendor-marketing register that collapses the NDA-gated discipline.
- List the room's specific contents in too much detail — HDG §3.5 explicit: public teaser names categories, not artifacts.
- Promise "incident-response procedures" as a public-listed category — per HDG §9 open question #5 + how-the-substrate-works-hub.md brief §9 resolution: incident-comms playbook is deferred for separate authoring; the category is in the NDA room but not advertised publicly until that authoring lands.
- Use "exclusive access" or "premium documentation" — collapses the legal-compliance register + reads as paywall framing.

**Required claims:**
- "The security packet's documentation room contains the BAA template, the audit-log schema, the encryption-and-access-control control matrix, and synthetic provenance-artifact samples." **Citation source:** HDG §3.5 sign-off list row 5 categories-only-public phrasing.
- "Access requires name, role, partner-org, and BAA-counsel contact." **Citation source:** IA §9 row 5 + HDG §3.5 explicit form-shape.

**Required proof / artifacts:**
- Single primary CTA on the page (the form is the artifact).
- Form fields: name, role, partner-org, BAA-counsel contact.
- Cross-link to NDA-room landing page.

**Voice cues:**
- Procurement-language register: "security packet," "documentation room," "BAA-ready legal package." These read as competent to BAA-counsel and to general counsel; they signal the page was authored with the legal-compliance reader's workflow in mind.
- Single CTA discipline: no inline-banner repeat; no second CTA elsewhere on the page. The single CTA at Section 11 is the page's whole conversion architecture.

**Forbidden phrasings (this section):**
- "Schedule a demo" / "Talk to sales" / "Get started now" / "Instant access" / "Immediate download" / "No friction" / "Exclusive access" / "Premium documentation" / "Sign up today" / "Start your free trial" / "Talk to our sales team" — voice.md §9 + IA §9 forbidden CTA-marketing register.

**Lens-specific notes:**
- **HDG:** Per HDG §3.5 + sign-off list row 5 categories-only-public phrasing. The public teaser names categories; the room itself contains the artifacts. Omit "incident-response procedures" from the public categories list (per HDG §9 + hub brief resolution).
- **CTA:** Verify NDA-room infrastructure is in place before launch (Phase 3 build dependency). If NDA-room is not yet operational, the page may need a hedged-CTA temporary state (e.g., *"Request access to security documentation — contact via [direct line]"*) until the room ships. Flag for CTA review.
- **PLP:** First-use acronym expansion check — BAA expanded earlier in the page; should expand on first use in this section if not previously expanded.
- **BV:** The single-CTA discipline + procurement-language register is the page's whole closing voice. Earn it.

---

### Section 12: Wayfinding band — "See Cena from another angle"

**Heading:** *"See Cena from another angle."* H2 or quiet section divider per voice.md §6 canonical pattern phrase.
**Position:** Final section on page, after CTA. Pattern per IA §4 (per Aaron Q4 resolution) + voice.md §6.
**Length / shape:** 5-line pattern block. Each line: *"If you're [role-action] → [surface]."*

**Per voice.md §6 per-surface calibration for `/how-the-substrate-works/provenance-and-accountability`:** This is a sub-page of the substrate-works hub, not itself a targeted-per-role landing. The wayfinding band routes outward to the targeted landings + reference program. Omit the self-link (this page); omit the parent hub link (the reader just navigated here from there or will reach it via in-page cross-links). Include the four primary targeted-role landings + reference program.

**Canonical patterns (per voice.md §6):**
- *"If you're translating this internally → For clinical leaders."*
- *"If you're scoping the contract → For program economics."*
- *"If you're checking a quote → For comms."*
- *"If you're looking for a working example → Reference program."*
- *"If you're vetting your existing program's fit → Your program on Cena."*

**What this section must do:**
- Use voice.md §6 canonical pattern phrase: *"See Cena from another angle."*
- Verb-first role-actions; arrow (→) does navigational work; voice does not narrate the click.
- 5-line pattern band — include all 5 canonical patterns. Per voice.md §6 calibration, omit the *"If you're reviewing for compliance →"* deep-link to the parent hub (the reader is on the legal-compliance deep-link surface).

**What this section must not do:**
- Use "click here" / "learn more" / "explore" / "discover" — voice.md §6 explicit forbidden.
- Include a self-link or a parent-hub link.
- Use exclamation marks or imperatives.
- Frame as "Related pages" or "You might also like" — vendor-CMS register.

**Required claims:**
- None. Wayfinding band carries no positioning claims; pure navigation per voice.md §6.

**Required proof / artifacts:**
- Links to:
  - `/for-clinical-leaders` ("If you're translating this internally")
  - `/for-program-economics` ("If you're scoping the contract")
  - `/for-comms` ("If you're checking a quote")
  - `/reference-program` ("If you're looking for a working example")
  - `/your-program-on-cena` ("If you're vetting your existing program's fit")

**Voice cues:**
- Wayfinding band voice is invitational, not directive per voice.md §6. The arrow does the work; voice names the reader's job.
- Sub-page calibration justifies the 5-line band (no self-link; no parent-hub link).

**Forbidden phrasings (this section):**
- "click here" / "learn more" / "explore" / "discover" / "related pages" / "you might also like" / "check out" / "see more" — voice.md §6.

**Lens-specific notes:**
- **BV:** Sub-page calibration — omit self-link + parent-hub link. The 5 canonical patterns hold.

---

## Cross-section concerns

- **HDG packet phrasings are the CEILING site-wide on this page.** Every sentence in §§3.2, 3.3, 4, 5, 6 of the HDG packet has a recommended phrasing; this brief inherits those phrasings as the ceiling. No copy on this page exceeds HDG-recommended phrasing without a separate review pass. This is the strictest discipline on the page and the most load-bearing — co-primary HIPAA-adjacent surface alongside the hub.
- **The accountability model framing is the page's single most-load-bearing claim.** Partner-institution clinician retains clinical authority and accountability; Cena's substrate captures the decision trail. This framing must hold in every section that touches accountability (Sections 1, 4, 6, 7, 10). Drift to "Cena's clinical staff approve" or "Cena owns clinical accountability" is the failure mode the page exists to block.
- **Custodial-not-proprietary discipline on PHI framing.** Sections 2, 4, 9 each touch PHI custody. The custodial framing is the HDG-cleared phrasing (per §3.2): Cena holds PHI **on behalf of** the partner institution; the partner institution **owns** the patient relationship. The proprietary framing (Cena owns records / knowledge / memory) is the failure mode the page exists to block — HDG §3.2 critical.
- **The IRB-liaison's 60-second window is the page's whole reading-time budget.** Sections 1 (hero) + section H2s + Section 10 (objection band) are the scan-mode path. A scan-reader reading only those should still close the tab with *"this looks defensible."* Every section that doesn't appear on the scan-mode path (Sections 5, 6, 7, 8, 9) must still earn its place for the close-reader; but the page's structural priority is the scan-mode path.
- **First-use acronym expansion is non-negotiable.** BAA (Business Associate Agreement), PHI (patient health information), IRB (Institutional Review Board), CDS (Clinical Decision Support), CFR (Code of Federal Regulations), FDA (Food and Drug Administration), VBC (value-based contract) — every acronym used on the page expands on first use per voice.md §11. Legal-compliance readers do NOT carry technical acronym-density reflexively; expansion is a courtesy that signals the page was authored with their reading workflow in mind.
- **Vendor-not-named is the discipline.** Google Cloud, Vertex AI, Anthropic, OpenAI, Claude, GPT — none ship on the public sub-page. HDG §7 + sign-off list row 3 default holds. Vendor-stack specifics route to the NDA-gated documentation room.
- **Two of four outstanding partner-input items hit this page.** Item #3 (SHA-256 hash chain) → Section 5 hedged default (verification-hash framing, no SHA-256 named). Item #4 (five-categories-blocked enumeration) → Section 6 hedged default (drop "Five"; "categories of clinical action" plural). Each ships with the hedged version now; strict-superset upgrades land when partner verification arrives per outstanding-partner-input.md §"How this list resolves."
- **No outcome percentages, dollar figures, or X%-reduction-in-Y constructions anywhere on this page** per voice.md §5 + citation spec §4. Legacy stale claims (30% readmissions / 1.8% HbA1c / 85% adherence / $3,200 savings) are explicitly off-limits per citation spec §4.
- **Forbidden-phrasings watchlist density on this page rivals the hub.** "HIPAA-compliant" / "tamper-proof" / "blockchain-secured" / "FDA-cleared" / "IRB-approved" / "AI safety guardrails" / "next-generation provenance" / "comprehensive audit" / "transformative accountability" — every one is a vendor-marketing or regulatory-overreach tell that the legal-compliance reader will discount.
- **Section ordering hard-locked by dispatch + IA canonical template.** Hero (§1) → What provenance means (§2) → Audit-trail primitive (§3) → Accountability model (§4) → Integrity primitive HEDGED (§5) → Categories primitive HEDGED (§6) → Second-system primitive (§7) → Sample-audit-trail cross-link (§8) → Hub-security cross-link (§9) → Objection band (§10) → CTA (§11) → Wayfinding band (§12). Do not reorder.
- **Cross-link discipline.** This sub-page references three sibling surfaces: `/sample-audit-trail` (the artifact page; most-load-bearing cross-link), the hub `#security` band (encryption + access-control + retention), and the NDA-gated documentation room (CTA target). Each cross-link is intentional; this page does not duplicate the cross-linked surfaces' depth.
- **Voice register asymmetry from siblings.** This sub-page is the **calmest, most operational** register on the site — even calmer than the hub. Hub is documentation-not-pitch; this page is operational-documentation-written-by-counsel-adjacent-engineering. The legal-compliance reader's discount-reflex is the page's whole voice constraint.
- **The "Cena is not [X]" credibility moves.** Sections 4 (Cena not IRB-approved), 6 (Cena not FDA-cleared CDS), 10 (Q1 + Q3 explicit not-claims). Each is a deliberate credibility move per HDG §5. The page earns legal-compliance trust by naming what it is **not** alongside what it is.
- **Dense page, dense reading.** 2,000-3,000 words. The sticky sub-nav at top is structural relief for scan-readers; the parallel-structure sections (§§3-7) carry the scannability primitives per IA §5. The objection band (§10) is the close-reader's final substantiation check before the deferred-validation CTA.

---

## Citation hotspots

Per citation discipline spec §3 (Claim-hotspot inventory) + §8 (HDG handoff sequence — mandatory for this page) + §10 (claim-citation reflex):

- **Section 1: Hero + framing paragraph.** H1 ("Every clinical action carries its trail") + accountability-model seed framing. Citation source: Phase 1 Appendix C #1 + HDG packet sign-off list row 4. Cross-link to `#audit-trail-primitive` (§3) + `#accountability-model` (§4).
- **Section 2: What provenance means here.** Three-sentence operational definition. Citation sources: 45 CFR 46 (IRB common rule) + 45 CFR 164.504(e) (BAA log requirements) per citation spec §2 row "Statutory / regulatory." Cena-architecture canon for the substrate-produces-the-trail claim.
- **Section 3: Audit-trail primitive.** Phase 1 Appendix C #1 hard-claim translation. Citation sources: Cena-architecture canon per citation spec §2(b) worked example. The 6-stage capture structure mirrors IA §8 sample-audit-trail spec. FDA CDS final guidance (September 2022) as regulatory-citation context for recommendation-with-citation claim.
- **Section 4: Accountability model.** HDG packet sign-off list row 4 + §3.2 SAFE + critical custodial-framing phrasing. Citation sources: `project_cena_accountability_model` memory + Cena-architecture canon. **NON-NEGOTIABLE per dispatch:** partner-institution clinician retains; Cena substrate captures. Drift = HDG packet §3.2 explicit MUST-NOT-SAY violation.
- **Section 5: Integrity primitive (HEDGED).** Phase 1 Appendix C #2 hard-claim translation, hedged per outstanding-partner-input.md item #3. Citation sources: HDG §3.2 HEDGE recommended phrasing + outstanding-partner-input.md item #3 hedged default. **Launch-gating partner-input #3.** Verification-hash framing at hub + sub-page altitude until Andrey verifies SHA-256 implementation.
- **Section 6: Five-category enforcement primitive (HEDGED).** Phase 1 Appendix C #4 hard-claim translation, hedged per outstanding-partner-input.md item #4. Citation sources: HDG §3.2 SAFE + outstanding-partner-input.md item #4 hedged default. **Launch-gating partner-input #4.** "Categories of clinical action" plural at sub-page altitude until Andrey verifies enumeration is publicly safe.
- **Section 7: Second-system check primitive.** Phase 1 Appendix C #5 hard-claim translation. Citation sources: Cena-architecture canon per citation spec §2(b). FDA CDS final guidance "show your work" criterion + 45 CFR 46 (IRB common rule) as regulatory-citation contexts. NOT partner-input-gated; ships at full claim per HDG §3.3 vendor-independent-model-architecture-citation discipline.
- **Section 8: Sample-audit-trail cross-link.** Synthetic-data discipline per HDG §3.3 + sign-off list row 6. Citation source: Cross-reference to `/sample-audit-trail`.
- **Section 9: Hub-security cross-link.** Cross-reference only; no new claim originates on this section.
- **Section 10: Objection band — 3 Q+A pairs.**
  - Q1 (IRB documentation): 45 CFR 46 (IRB common rule) + HDG §3.2 HEDGE. Citation type: Statutory / regulatory.
  - Q2 (BAA requirements): 45 CFR 164.504(e) + HDG §6 BAA discipline. Citation type: Statutory / regulatory.
  - Q3 (FDA CDS): FDA Clinical Decision Support final guidance (September 2022) + HDG §3.3 + Phase 1 brief Tech Accuracy must-not-say. Citation type: Statutory / regulatory.
- **Section 11: CTA — Request the security packet.** HDG §3.5 sign-off list row 5 categories-only-public phrasing. NDA-room categories list per HDG §3.5. Citation source: Cross-reference to NDA-room landing page.

**Legacy stale claims watchlist** (per citation spec §4): 30% readmissions, 1.8% HbA1c, 85% adherence, $3,200 savings, $17B preventable costs, "60-90 day implementation," "36% gross margins," "$200 PMPM" — explicitly off-limits anywhere on this page. Watch for `strategy/CLAUDE.md` "Proof Point Library" leakage; ignore that file per citation spec §4.

**HDG handoff sequence (citation spec §8) applies in full to every section of this page.** Per the 2026-06-08 status update at top of HDG packet, the packet was not routed to Vanessa for sign-off; the recommended phrasings are the proceed-as-approved default for design + build. Launch gates on the 4 outstanding-partner-input items in addition; this page carries 2 of the 4 (items #3 + #4).

---

## Outstanding partner-input touchpoints

Per [outstanding-partner-input.md](../outstanding-partner-input.md), two of four launch-gating items touch this page:

**Item #3 — SHA-256 message-hash chain currency** (Andrey / implementation-vs-aspirational confirmation):
- **Touchpoint:** Section 5 (Hash-chain integrity primitive).
- **Hedged default that ships now:** *"Every agent message carries a verification hash — so the question 'was this changed?' is answerable, not asserted."* Per HDG §3.2 HEDGE + outstanding-partner-input.md item #3. Hub also carries the verification-hash framing at the architectural-pattern altitude; this sub-page hedges at the same altitude but goes deeper on the architectural-pattern explanation (cryptographic hash chain pattern, append-only data structure, signature-per-message pattern by **class**, not by specific algorithm).
- **Upgraded version that ships when input lands:** If Andrey confirms SHA-256 implementation AND confirms the algorithm name is publicly safe, the section may name SHA-256 (or whichever algorithm class is implemented). If Andrey confirms aspirational-only, the verification-hash framing holds at the architectural-pattern altitude with no algorithm name.
- **Cross-link** from Section 5 to `/sample-audit-trail` for the worked-example annotation; cross-link to NDA-room CTA in Section 11 for algorithmic specifics.

**Item #4 — Five-categories-blocked-in-code currency** (Andrey / clinical-safety scope confirmation):
- **Touchpoint:** Section 6 (Five-category enforcement primitive).
- **Hedged default that ships now:** *"Categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training."* Drop "Five" until Andrey confirms enumeration. Per HDG §3.2 SAFE + outstanding-partner-input.md item #4 hedged default. Hub also carries the hedged default in §7 non-scope band; this sub-page goes deeper on the architectural-pattern explanation (deterministic rule-based enforcement applied at the recommendation-generation layer; structural separation of judgment from enforcement).
- **Upgraded version that ships when input lands:** If Andrey confirms specific-five enumeration AND the categories are publicly nameable, the section may insert "Five" before "categories of clinical action" and (optionally) enumerate the categories in a sub-list. If the enumeration is partner-sensitive, the hedged default holds and the enumeration stays in the NDA-room documentation.
- **Cross-link** from Section 6 to `/sample-audit-trail` worked-example annotation (the "named approver" field) and to NDA-room CTA for the enumeration if Andrey confirms public safety.

**Items #1 (UConn-named pilot reference) and #2 (US-only data residency)** do not directly touch this page:
- Item #1 (UConn-named) lives on `/reference-program` headline + homepage proof strip; this page does not name UConn directly.
- Item #2 (US-only data residency) lives on the hub `#security` section per hub brief; this page's Section 9 cross-links to that hub section but does not restate the residency claim.

---

## Expert conflicts resolved

**Honest disclosure:** No literal 2+ expert review-pass conflicts existed in this synthesis run — this brief was authored directly against the canonical specs (IA, voice.md, citation discipline, HDG packet) per dispatch. The following items reflect *anticipated* cross-lens decisions and brief-internal calls that needed resolution:

- **Section 3 (Audit-trail primitive) vs. Section 4 (Accountability model) — where does the "by the system, not by a clinician remembering" framing live?** Both sections legitimately touch operational-accountability framing. **Resolution:** Section 3 carries the framing as a property of the audit-trail-per-recommendation primitive (the substrate makes the audit-ready record intrinsic; the clinician's workflow stays clean). Section 4 carries the framing as the architectural-floor under the accountability model (the substrate captures; the clinician retains). Both ship; the framings are complementary, not duplicative.
- **Section 5 (Integrity primitive) vs. hub §5 (Provenance + audit trail) — should this sub-page restate the hub's verification-hash framing, or cross-link only?** The hub carries the verification-hash framing at the architectural-pattern altitude; this sub-page goes deeper on the architectural-pattern explanation but stays hedged. **Resolution:** Section 5 on this page does NOT duplicate the hub's framing; it extends the framing with sub-page-altitude detail (cryptographic hash chain pattern by class, append-only data structure, signature-per-message pattern by class — without naming the specific algorithm). Cross-link from this sub-page back to the hub is implicit through the page navigation; explicit cross-link is in the NDA-room CTA routing.
- **Section 6 (Categories primitive) — where does the architectural-pattern explanation live, here or on the hub?** Hub's §7 (non-scope band) carries the hedged-default surface mention; this sub-page is the deeper architectural-pattern explanation. **Resolution:** Hub mentions the categories-blocked claim in the non-scope band at surface altitude; this sub-page goes deeper on the architectural pattern (deterministic rule-based enforcement; structural separation of judgment from enforcement). The two surfaces compose: hub mentions; sub-page explains.
- **Section 10 (Objection band) — should Q1 (IRB) include the explicit "Cena is not IRB-approved" disclaimer, or implicit through framing?** HDG §3.2 explicit MUST-NOT-SAY for IRB-approved claims; the disclaimer is required if the topic is raised. **Resolution:** Q1 answer includes the explicit disclaimer ("Cena is not IRB-approved; IRB approval attaches to the partner institution's specific protocol"). The explicit-not-claim is a credibility move per HDG §5.
- **Section 10 (Objection band) Q3 — should the answer reference FDA CDS guidance by date?** HDG §3.3 + citation spec §2 row "Statutory / regulatory" prefer dated regulatory citations for verifiability. **Resolution:** Q3 answer references "FDA's September 2022 final guidance on Clinical Decision Support software" — dated reference per citation spec discipline + verifiable for the legal-compliance reader.
- **Section 11 (CTA) — should the public categories list include "incident-response procedures"?** HDG §3.5 lists it; HDG §9 open question #5 + how-the-substrate-works-hub.md brief §9 resolution flags it for separate authoring (incident-comms playbook). **Resolution:** Omit "incident-response procedures" from the public categories list at launch. Consistent with hub brief.
- **Section 8 (sample-audit-trail cross-link) — should the brief recommend rendering a partial sample inline on this page?** Tempting from a scan-mode-payoff perspective (the IRB liaison reads the sample without needing to navigate). **Resolution:** No partial-sample inline render. The artifact page is the artifact; this page is the architectural-claim work. Mixing the two collapses the IA §4 + §8 separation. Cross-link is the discipline.

---

## Open questions for Aaron-gate

1. **Section 2 (What provenance means here) — should the operational definition explicitly contrast "audit trail" (per-action artifact) with "audit log" (per-access security log)?** Recommendation: yes. The legal-compliance reader's reference frame distinguishes these reflexively; collapsing them reads as imprecision. Confirm — or override if the contrast feels too in-the-weeds for the operational-definition section.

2. **Section 4 (Accountability model) — should the "during pilots" hedge be named explicitly, or held in the page's general framing without specific call-out?** Recommendation: name explicitly. The hedge is what makes the public framing honest about Cena's stage (pre-revenue, pilots-planning per `project_cena_stage`); without the hedge, the framing over-claims operational posture. Confirm — or override if "during pilots" reads as too stage-disclosive for the public surface.

3. **Section 5 (Integrity primitive — HEDGED) — should the brief recommend including a brief one-sentence forward-looking statement ("the architectural pattern is documented; algorithmic specifics route to the NDA room") OR omit forward-looking framing entirely?** Recommendation: include the one-sentence forward-looking statement — it routes the technical-evaluator + legal-compliance reader to the NDA room cleanly. Confirm — or override.

4. **Section 6 (Categories primitive — HEDGED) — should the brief recommend leaving a placeholder slot in the visual treatment where the enumeration would land if Andrey confirms?** Recommendation: yes. Phase 3 visual design can prepare a slot that fills (or stays empty) based on the partner-input resolution. Confirm — or override if the slot itself reads as a tell.

5. **Section 10 (Objection band) — three Q+A pairs the right count, or should it expand to four (adding a Q on PHI custody framing)?** Recommendation: three. PHI custody framing is covered in Section 4 (accountability model) + Section 9 (security cross-link); a fourth Q+A here would duplicate. Confirm — or override if PHI custody warrants its own Q+A in the objection band.

6. **Section 11 (CTA) — should the form-shape inherit from the hub exactly, or add a "specific provenance / audit-trail question" optional field?** Recommendation: inherit exactly. Same-form-shape across substantiation CTAs reads as competence per IA §9. Adding a unique field collapses the cross-surface form-shape consistency. Confirm — or override if the unique field would yield meaningfully better intake data for legal-compliance leads.

7. **Two outstanding partner-input items (#3 + #4) — ship the hedged defaults now, or hold the page from launch until at least one resolves?** Recommendation per outstanding-partner-input.md discipline + Aaron's 2026-06-07 framing: ship hedged defaults; launch-gate the site (not the design + build); upgrade to strict-superset versions when partner input lands. Confirm the launch-gating approach (page ships hedged; full site launch gated on partner-input resolution).

8. **Section ordering — Section 8 (sample-audit-trail cross-link) lands between Section 7 (second-system primitive) and Section 9 (hub-security cross-link). Should the artifact-page cross-link land earlier (right after Section 3 audit-trail primitive)?** Recommendation: keep current ordering. The sample-audit-trail cross-link earns its place after **all five** architectural-claim primitives are named, because the artifact page illustrates all five. An earlier cross-link would route the reader away before the architectural-claim work is complete. Confirm.

---

## Sign-off

- [ ] Plain Language Positioning
- [ ] Cena Technical Accuracy
- [ ] Healthcare Data Governance
- [ ] Brand Voice Reviewer
- [ ] Aaron-gate
