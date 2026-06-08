# Content Brief: How the substrate works (hub)

**Path:** `/how-the-substrate-works` · **Status:** Awaiting Aaron-gate · **Date:** 2026-06-08 · **Phase 2, Substep 5**

Section-by-section copy brief for the How the substrate works hub page. Anchored to [Phase 2 IA spec](../phase-2-information-architecture.md) §4 (hub 8-section sequence) + §3 (hub headline) + §5 (label hygiene) + §9 (hub CTA), [voice.md](../../brand/voice.md) §2 (substrate hub register) + §3 (headline pattern) + §4 (forbidden phrasings) + §6 (wayfinding) + §9 (NDA-gated documentation room CTA) + §10 (claim-citation reflex) + §11 (internal-vocab translation), [citation discipline](../citation-discipline-spec.md) §3 hub claim hotspots + §8 HDG handoff sequence, [HDG packet](../phase-2-hdg-review-packet.md) §§3.1 + 3.4 + 3.5 + 4 + 5 + 6 + 7 recommended phrasings (CEILING for HIPAA-adjacent copy), and [outstanding-partner-input.md](../outstanding-partner-input.md) items #2 (US-only residency), #3 (SHA-256 hash chain), #4 (five-categories-blocked).

---

## At a glance

- **Purpose:** Serve technical evaluator + legal/compliance simultaneously without collapsing into developer-portal feel (loses legal) or security-marketing feel (loses technical). Hub is the navigation spine for three sub-pages (`/integration`, `/provenance-and-accountability`, `/sample-audit-trail`) and the canonical surface for the NDA-gated documentation room CTA.
- **Primary audience:** Technical evaluator + legal/compliance (co-primary). Voice register must hold both reading paths without favoring either; anchor links serve both.
- **Headline:** *"What the substrate does — and what it doesn't."* Locked verbatim per IA §3 + voice.md §2 hub treatment. The em-dash structure is load-bearing — it surfaces non-scope alongside scope, disarming the unknown-unknown read without requiring the visitor to scroll for it.
- **Voice register:** Factual, evaluator-respecting. Reads as documentation, not pitch. No marketing inflection. Sentences match evaluator-speak, not B2B-marketing. Per voice.md §2 substrate hub block.
- **CTA architecture:** *"Request the security packet"* → NDA-gated documentation room. Form: name, role, partner-org, BAA-counsel contact. Per IA §9 row 5 + voice.md §9 "NDA-gated documentation room." Section-8 placement (after role-targeted summaries); also reachable from sticky sub-nav. Single primary CTA; no inline-banner repeat.
- **HIPAA-adjacent:** **YES.** This is the densest HIPAA-adjacent surface on the public site. HDG packet phrasings in §§3.1 + 4 + 5 + 6 are the CEILING on every HIPAA / BAA / encryption / access-control / audit-log / vendor / data-residency claim that ships. No copy on this page exceeds HDG recommended phrasing without a separate review pass.
- **Launch-gating partner-input dependencies:** Three of four outstanding items hit this page — Item #2 (US-only data residency, §6 security band), Item #3 (SHA-256 message-hash chain, §5 provenance band), Item #4 (five-categories-blocked in code, §7 non-scope band). Item #1 (UConn-named upgrade) does not directly touch this page (lives on `/reference-program` + homepage proof strip) but is cross-linked from Section 5 provenance band when the upgrade lands.
- **Length:** 2,000-3,500 words. Densest hub page; goes longer than typical because it does the work of three sub-pages' setup + non-scope disarm + dual-audience role-targeted close.

---

## Section briefs

### Section 1: Hero + sticky sub-nav (What the substrate is)

**Heading:** *"What the substrate does — and what it doesn't."* (Locked verbatim per IA §3 + voice.md §2.) H1.
**Position:** Section 1, hub spine per IA §4. Sticky sub-nav with 8 anchors must be visible at top: `#what-it-is`, `#data-flow`, `#integration`, `#reasoning`, `#provenance`, `#security`, `#scope`, `#summaries`.
**Length / shape:** H1 (locked) + 3-sentence framing in evaluator language (per IA §4 hub section 1 spec) + sub-nav. ~60-80 words for the framing. No hero CTA (CTA is in §8 + reachable via sub-nav).

**What this section must do:**
- Lead with H1 verbatim. The em-dash structure does load-bearing work — it tells the visitor on first read that the page will name boundaries, not just claims.
- 3-sentence framing names: (a) what the substrate is in evaluator language ("clinical intelligence infrastructure that runs underneath partner programs"), (b) what it produces (audit-grade trail per clinical action), (c) the dual-audience invitation (technical and legal-compliance reading paths both serve here).
- Sticky sub-nav with 8 anchors visible at top of viewport. Anchor names match IA §4 hub section anchors verbatim.
- Use voice.md §2 "Do" exemplar mechanics: *"The substrate writes one audit-trail entry per clinical action. It does not displace your clinicians, own your patient relationship, or require an EHR switch."* Pairing what-it-does with what-it-doesn't is the page's whole voice contract.
- Front-load load-bearing noun ("substrate," "audit-grade trail," "non-scope band") per voice.md §3 inheritance rule.

**What this section must not do:**
- Use any superlative or adjective-stack ("powerful, enterprise-grade, secure, scalable architecture purpose-built for healthcare") — voice.md §2 explicit Don't.
- Open with marketing prose ("Welcome to the future of clinical intelligence…") — collapses evaluator register on first sentence.
- Use developer-portal slang ("just plug in," "out of the box," "drop-in," "built for developers") — voice.md §2 substrate hub explicit forbidden.
- Use security-marketing register ("bank-grade encryption," "military-grade security," "fortress-class infrastructure") — voice.md §2 substrate hub explicit forbidden.
- Acronym-stack without first-use expansion. First mention of **FHIR**, **BAA**, **PHI**, **CDS**, **IRB** must expand: *"FHIR (Fast Healthcare Interoperability Resources)"*, *"BAA (Business Associate Agreement)"*, *"PHI (patient health information)"*, *"CDS (clinical decision support)"*, *"IRB (Institutional Review Board)"*. Per voice.md §11 internal-vocab translation reference.
- Cite vendors by name (Google Cloud, Vertex AI, Anthropic) — HDG packet §7 recommendation + sign-off list row 3 default: vendors-not-named publicly; route specifics to NDA room.

**Required claims:**
- "Clinical intelligence infrastructure" (C-017 category anchor). **Citation source:** Positioning language per citation spec §3 (no citation required; structural copy).
- "The substrate writes one audit-trail entry per clinical action." **Citation source:** Cena-architecture canon — Appendix C #1 primitive (Phase 1 brief). Cross-link to `#data-flow` (Section 2) + `/how-the-substrate-works/sample-audit-trail`.
- Non-scope preview: "does not displace your clinicians, own your patient relationship, or require an EHR switch." **Citation source:** Cross-link to `#scope` (Section 7) — load-bearing non-scope band.

**Required proof / artifacts:**
- Sticky sub-nav with 8 anchors as the structural proof — the visitor sees scope laid out before any prose lands.

**Voice cues:**
- The 3-sentence framing is the dual-audience test: a CIO read should land "infrastructure I can vet" and a General Counsel read should land "boundaries I can defend." If either read fails, rewrite.
- Em-dash structure in H1 is not punctuation flourish — it's IA. Keep it.

**Forbidden phrasings (this section):**
- "powerful" / "enterprise-grade" / "secure" / "scalable" / "purpose-built" / "next-generation" / "transformative" / "revolutionary" / "just plug in" / "out of the box" / "bank-grade" / "military-grade" / "fortress" / "HIPAA-compliant" (standalone) / "HIPAA-certified" / "fully compliant" / "AI-powered" / "intelligent automation" — per voice.md §2 + §4 + HDG §5.

**Lens-specific notes:**
- PLP: First-use acronym expansion is non-negotiable on this surface. Technical evaluators tolerate acronym-density; legal/compliance readers do not, and this is co-primary territory.
- HDG: Section 1's non-scope preview borrows from §7 non-scope band; reproducing partial non-scope here is OK because §7 carries the full enumeration with HDG-cleared phrasings.
- BV: Documentation-register on first sentence. If the reader could mistake the opening prose for a SaaS landing page, the voice missed.

---

### Section 2: Data flow diagram (page spine)

**Heading:** *"Data flow."* H2; anchor `#data-flow` per IA §4 hub section 2.
**Position:** Section 2, page spine per IA §4. This is the structural primitive of the page — the visual the visitor returns to.
**Length / shape:** 1 architectural diagram (5-stage horizontal flow: **partner-system → ingestion → reasoning → recommendation-with-citation → audit-trail-write**) + ~120-180 words of accompanying prose. Prose names each stage in one sentence; diagram does the structural work.

**What this section must do:**
- Render the 5-stage flow as the visual spine of the page. Each stage clickable / linkable to the relevant sub-section (#integration, #reasoning, #provenance, #security) where applicable.
- One-sentence-per-stage prose: name what enters, what the substrate does, what artifact lands.
- Use generic labels for any cloud/vendor box in the diagram — *"hosting environment," "reasoning service," "audit store"* — per HDG packet §3.4 explicit recommendation. Vendor specifics defer to NDA room.
- Use voice.md §2 substrate hub register: factual, evaluator-respecting; the diagram does the work; voice gets out of the way.
- Cross-reference: "Each stage links to its own section below; the NDA-room documentation includes the architectural-specifics version of this diagram with vendor-stack labels."

**What this section must not do:**
- Label specific cloud-vendor boxes in the diagram (Google Cloud, Vertex AI, Anthropic) — HDG sign-off list row 3 default: do not name vendors publicly; sign-off list row 5 confirms specifics go in NDA room.
- Use sequence-diagram visual language that implies linear migration — coexistence is the architectural truth (the partner system runs alongside, not before-or-after).
- Overload the diagram with detail; the public version is intentionally less detailed than the NDA-room version. The visitor's job here is "I can see the shape"; specifics live in the room.
- Describe ingestion as "we suck up all your data" or any framing that reads as PHI-vacuuming. Ingestion is bounded by what the partner system exposes (FHIR endpoints / file drops / API conventions partners specify), per HDG §3.1 + §3.4.
- Use "magic," "auto-magic," "intelligent ingestion," "smart pipelines" — voice.md §4 forbidden vendor-flattery.

**Required claims:**
- "Data flows from partner systems through Cena's substrate via FHIR (Fast Healthcare Interoperability Resources) endpoints, file drops, or API conventions partners specify." **Citation source:** Cena-architecture canon per citation spec §2 row "Cena-specific architecture." Cross-link to `#integration` + `/integration` sub-page.
- "Each clinical action produced by the substrate carries a recommendation with citation and writes one audit-trail entry." **Citation source:** Cena-architecture canon — Appendix C #1 primitive. Cross-link to `#provenance` + `/provenance-and-accountability` + `/sample-audit-trail`.

**Required proof / artifacts:**
- The 5-stage data-flow diagram itself is the proof artifact for this section. Phase 3 build delivers the visual; this brief specifies the labels and the non-vendor-naming discipline.
- Anchor links from each diagram stage to the relevant in-page section: stage 1 (partner-system) → `#integration`; stage 2 (ingestion) → `#integration`; stage 3 (reasoning) → `#reasoning`; stage 4 (recommendation-with-citation) → `#provenance`; stage 5 (audit-trail-write) → `#provenance` + `/sample-audit-trail`.

**Voice cues:**
- The diagram is the page's structural argument. Prose voices the legend; voice does not narrate what the diagram already shows. If the prose says "as you can see in the diagram," cut it (voice.md §2 substrate hub Don't — *"As you can see, our audit trails provide unprecedented transparency"* equivalent).
- Specificity over generality: name the artifact (the audit-trail entry, the recommendation-with-citation pair), not the abstraction (the auditability layer).

**Forbidden phrasings (this section):**
- "magic" / "auto-magic" / "intelligent ingestion" / "smart pipelines" / "seamless integration" / "end-to-end" (vendor-marketing register) / "powerful pipelines" / "we suck up your data" / "we ingest everything" / "as you can see" / "unprecedented transparency."

**Lens-specific notes:**
- HDG: Generic labels in diagram per §3.4 recommendation. Vendor-stack specifics route to NDA room.
- CTA: Verify the 5-stage flow matches current Spark + substrate-architecture canon before publish. If ingestion or audit-trail-write are pre-AI-layer-only in current Spark (per `patient-app.md` archive-IA build), hedge prose to "designed-for" where the live implementation diverges. Flag for CTA review.
- BV: Diagram-with-light-prose is the canonical voice shape for this page's load-bearing visual; resist the temptation to over-narrate.

---

### Section 3: Integration posture

**Heading:** *"Integration posture."* H2; anchor `#integration` per IA §4 hub section 3.
**Position:** Section 3, hub spine per IA §4. Cross-links to `/integration` sub-page (technical-evaluator deep-link).
**Length / shape:** ~250-350 words. 1 short intro paragraph + a two-column or two-band structure: **"What the substrate expects"** | **"What the substrate does NOT require."**

**What this section must do:**
- Name what the substrate *expects* from partner systems in concrete primitives: FHIR (Fast Healthcare Interoperability Resources) endpoints partners expose, file drops partners specify, API conventions partners run. Per HDG §3.4 + sign-off list row 8 recommended phrasing.
- Name what the substrate does *not* require, explicitly: does not require an EHR switch; does not require partners to adopt new clinical workflows; does not require specific cloud vendor on the partner side; does not require partners to migrate existing data warehouses. The "does not" list is load-bearing for unknown-unknown defense at this section's altitude (precursor to the bigger §7 non-scope band).
- Use voice.md §2 substrate hub register: *"Built to connect to FHIR endpoints partners expose."* Generic, verifiable, non-vendor-specific per HDG §3.4 explicit recommendation.
- Cross-link to `/integration` sub-page for technical-evaluator deep-dive (specific endpoints, architectural detail, NDA-room teaser for vendor-stack specifics).
- First use of FHIR expands to *"FHIR (Fast Healthcare Interoperability Resources)"*; subsequent uses are bare acronym. Per voice.md §11.

**What this section must not do:**
- Claim "Epic-certified," "approved Epic partner," "live Athena API," "Cerner-validated" — HDG sign-off list row 8 + §3.4 MUST-NOT-SAY. The Accenture-app flag from 2026-05-26 applies here directly.
- Claim "HITRUST-aligned," "SOC 2 Type II," "HITRUST-certified" — HDG §4 MUST-NOT-SAY (pre-revenue stage; certifications aspirational at best). The NDA room teaser may reference *categories* of forthcoming security artifacts; the hub does not.
- Name cloud vendors (Google Cloud, Vertex AI, etc.) — HDG sign-off list row 3 default: vendors-not-named publicly.
- Use vendor-portal language ("integration partners," "ecosystem partners," "certified integrations") — collapses substrate register.
- Promise "seamless," "frictionless," "out-of-the-box" integration — adjective claims that collapse evaluator credibility.

**Required claims:**
- "Built to connect to the systems partners already run — FHIR endpoints, file drops, API conventions partners specify." **Citation source:** Cena-architecture canon per citation spec §2 row "Cena-specific architecture." HDG sign-off list row 8 approved phrasing.
- "Does not require an EHR switch." **Citation source:** Cross-link to `#scope` (§7 non-scope band) — HDG §3.4 SAFE per non-scope-band approval.
- Routing to NDA-room for vendor-stack specifics. **Citation source:** Cross-link to §8 CTA (Section 8) + NDA-room landing per HDG packet §3.5.

**Required proof / artifacts:**
- Two-band visual structure (Expects | Does Not Require). The visual signals the boundary discipline without prose having to claim it.
- Cross-link to `/integration` sub-page for technical-evaluator deep-link.
- Mention of NDA-room availability for vendor-stack specifics (without listing them here).

**Voice cues:**
- "Built to connect to what you already run" carries partner-protagonist register on a technical-evaluator-primary surface — preserve it. The partner system is the protagonist; Cena connects to it.
- Specificity over generality: name "FHIR endpoints" and "file drops" by name, not "modern integration patterns" or "industry-standard interfaces."

**Forbidden phrasings (this section):**
- "Epic-certified" / "approved Epic partner" / "Athena-certified" / "Cerner-validated" / "HITRUST-certified" / "SOC 2 Type II" / "industry-leading integration" / "seamless integration" / "frictionless onboarding" / "out-of-the-box connector" / "integration partner" / "ecosystem partner" / "drop-in API" — per HDG §3.4 + §4 + voice.md §4.

**Lens-specific notes:**
- HDG: Per HDG §3.4 + sign-off list row 8, all integration claims are SAFE only at the generic-language altitude. Named-EHR-integration claims (Epic / Athena / Cerner / etc.) are MUST-NOT-SAY without primary-source verification + partner-deployment attribution.
- CTA: Verify FHIR-endpoint claim against current Spark deployment shape. Per HDG packet §8 future watchlist, "FHIR endpoint integration" needs Cena-architecture verification before ship; if Spark MVP doesn't include live FHIR integration, hedge to "designed-for."
- PLP: Acronym expansion floor — FHIR on first use minimum; consider expanding EHR (Electronic Health Record) on first use for legal/compliance reader who may not carry the term reflexively.

---

### Section 4: Reasoning architecture

**Heading:** *"Reasoning architecture."* H2; anchor `#reasoning` per IA §4 hub section 4.
**Position:** Section 4, hub spine per IA §4.
**Length / shape:** ~200-280 words. 1-2 paragraphs.

**What this section must do:**
- Describe the reasoning architecture WITHOUT vendor lock-in. Per IA §4 hub section 4 + Ava vendor-independence stance (`project_ava_vendor_independence` memory; substrate-architecture canon).
- Frame model-independence as architectural intent, not as a feature claim: *"The substrate's reasoning architecture is model-agnostic by design: memory, tools, and context are Cena-owned; the underlying model is swappable without re-engineering the surfaces or breaking the audit trail."* Use voice.md §10 + citation spec §9(b) worked-example phrasing.
- Name what's Cena-owned: memory, tools, context. Name what's swappable: the underlying model.
- Reference the audit-trail integrity claim — model swap does not break provenance (cross-link to `#provenance`).
- Use HDG §3.3 recommended phrasing for vendor-independent-model-architecture citations in sample audit trail; same discipline applies here.

**What this section must not do:**
- Name model vendors (Anthropic, OpenAI, Google) — HDG sign-off list row 3 default + §7. Naming the current model vendor on the public surface reads as commitment even when paragraphs nearby say "swappable by design" (HDG §7 explicit). Architecture readers trust nouns more than adjectives.
- Claim live multi-vendor routing today — HDG §4 cross-cutting "Multi-vendor model routing as live: HEDGE." Phrase as architectural intent, not operational reality.
- Use "AI" as standalone subject ("AI processes the data," "AI makes the recommendation") — collapses peer-evaluator register. Say "the substrate" or "the reasoning service" or "the substrate's reasoning step."
- Use "agentic," "autonomous AI," "self-improving model," "next-generation AI" — vendor-marketing register that triggers technical-evaluator and legal-compliance discount reflexes simultaneously.
- Describe the model layer in ways that invite the regulatory-teardown risk Phase 1 Contrarian rejected (model-card publication path). Reasoning architecture stays at the architectural-intent altitude; model-specific specs route to NDA room.

**Required claims:**
- "The substrate's reasoning architecture is model-agnostic by design: memory, tools, and context are Cena-owned; the underlying model is swappable without re-engineering the surfaces or breaking the audit trail." **Citation source:** Cena-architecture canon — vault-entity reference per citation spec §2(b) worked example. Vendor-independence stance per `project_ava_vendor_independence`.
- "Audit-trail integrity holds across model swap." **Citation source:** Substrate-architecture canon + cross-link to `#provenance`.
- Model-specific specifications and the model-evaluation criteria route to NDA room. **Citation source:** Cross-link to §8 CTA + HDG packet §3.5 (NDA room contents).

**Required proof / artifacts:**
- No diagram in this section (the §2 data-flow diagram does the architectural visual work). 1-2 paragraphs of dense prose.
- Cross-link to `#provenance` (audit-trail integrity).
- Cross-link to §8 CTA (NDA room for model-specific details).

**Voice cues:**
- Architectural-intent voice: this is the section where vendor-independence has to read as architectural fact, not aspirational hedge. Per voice.md §2 substrate hub: *"factual, evaluator-respecting; no marketing inflection."* If the paragraph reads as "we're not locked in (we promise)," rewrite to structural fact.
- Quiet competence: name what's owned vs. what's swappable. Let the architecture speak; voice does not need to defend the choice.

**Forbidden phrasings (this section):**
- "Anthropic" / "OpenAI" / "Vertex AI" / "Google AI" / "Claude" / "GPT" (any vendor or model brand) / "agentic" / "autonomous AI" / "self-improving model" / "next-generation AI" / "AI does the diagnosis" / "AI processes" (standalone subject) / "powerful AI" / "advanced reasoning" / "cutting-edge model" / "state-of-the-art."

**Lens-specific notes:**
- HDG: Vendor-not-named is the §7 default. Cross-cutting claim §4 "Multi-vendor model routing as live: HEDGE" applies — phrase as architectural intent, not operational reality.
- CTA: Verify vendor-independence claim against `ava.md` and current Spark + substrate canon. The architectural intent is documented; the live operational reality of "model swap without re-engineering" may not be exercised today. HDG §4 marks this HEDGE for that reason. Hedge prose to "architected for" / "by design" where the operational claim would overreach.
- BV: This is the section the technical evaluator will quote back to their CIO. Specificity is the credibility — name what's owned, name what's swappable; don't hand-wave.

---

### Section 5: Provenance and audit trail

**Heading:** *"Provenance and audit trail."* H2; anchor `#provenance` per IA §4 hub section 5.
**Position:** Section 5, hub spine per IA §4. Cross-links to `/provenance-and-accountability` sub-page + `/sample-audit-trail` artifact page.
**Length / shape:** ~300-400 words. 2-3 paragraphs + bulleted list of what gets logged.

**What this section must do:**
- Name what gets logged automatically per clinical action: input data sources (with timestamps + source-system attribution), reasoning step (with model-architecture citation, vendor-independent), recommendation (with peer-reviewed-literature citations), accountable-clinician approval (with timestamp + role, not name), downstream outcome capture, re-assessment trigger. Per IA §8 sample-audit-trail spec — the hub names the categories; the sample page shows the artifact.
- Use Appendix C #1 phrasing: *"Every patient record opened, edited, or acted on leaves a trail — automatically, by the system, not by a clinician remembering to log it."* Per Phase 1 brief Appendix C.
- Name queryable + exportable as architectural properties without specifying retention period (per HDG §3.1 + sign-off list row 5: retention is per-partner-contract; the hub does not publish a fixed number).
- Custodial framing: *"Cena holds PHI (patient health information) on behalf of the partner institution"* — NOT *"Cena owns patient records."* Per HDG §3.2 SAFE — and load-bearing recommended phrasing. First use of PHI expands per voice.md §11.
- Hash-chain integrity (Appendix C #2) framed at architectural-pattern altitude only at the hub. The cryptographic-seal claim itself routes to the sub-page (`/provenance-and-accountability`) + outstanding-partner-input item #3 (SHA-256 verification with Andrey). The hub mentions integrity-by-cryptographic-pattern without specifying SHA-256 algorithmic detail.
- Cross-link to `/sample-audit-trail` for the annotated artifact view and `/provenance-and-accountability` for the legal-compliance deep-dive.

**What this section must not do:**
- Specify a fixed audit-log retention period publicly — HDG §3.1 HEDGE: ship as *"Audit events are captured automatically and retained per the partner program's contractual retention requirements."* Retention varies per partner, per state, per data class.
- Claim "blockchain," "immutable ledger," "tamper-proof" — voice.md §4 forbidden vendor-marketing register; HDG §3.2 cross-cutting cryptographic-seal is HEDGE pending Andrey verification of SHA-256 implementation status.
- Specify SHA-256 algorithm by name at the hub — per outstanding-partner-input item #3, this is HEDGED pending Andrey confirmation. Hub references "cryptographic verification" or "verification hash" at the architectural-pattern altitude; the algorithm name routes to the sub-page if it lands at all (per outstanding-partner-input.md default: ship hedged version if aspirational).
- Use "provenance trail" — voice.md §4 explicit translation. The artifact is the "audit trail" (partner-facing); "provenance" is reserved for the sub-page name and IRB-targeted framing.
- Claim "IRB-approved" or "IRB-reviewed" anywhere — HDG §3.2 MUST-NOT-SAY (IRB approval attaches to protocols, not to Cena as a vendor). Use HDG-recommended *"Provenance artifacts are designed to satisfy IRB documentation requirements for research-adjacent use of the substrate."*

**Required claims:**
- "Every patient record opened, edited, or acted on leaves a trail — automatically, by the system, not by a clinician remembering to log it." **Citation source:** Appendix C #1 primitive — Cena-architecture canon per citation spec §2(b). Cross-link to `/sample-audit-trail`.
- "Records can be added, never altered." **Citation source:** Appendix C #2 architectural claim. **Launch-gating partner-input #3 — SHA-256 hash-chain currency** — hedged default ships now at architectural-pattern altitude (verification-hash claim without algorithm name); upgrade to specific-algorithm naming gated on Andrey verification per outstanding-partner-input.md item #3.
- "Cena holds PHI on behalf of the partner institution." **Citation source:** Custodial framing per HDG §3.2 SAFE — and load-bearing recommended phrasing. Non-negotiable per HDG.
- "Provenance artifacts are designed to satisfy IRB documentation requirements for research-adjacent use of the substrate." **Citation source:** HDG §3.2 HEDGE recommended phrasing. Cross-link to `/provenance-and-accountability`.
- Audit events retained per partner contractual retention requirements. **Citation source:** HDG §3.1 HEDGE recommended phrasing.

**Required proof / artifacts:**
- Bulleted list of what gets logged (one line per category: input data sources / reasoning step / recommendation / clinician approval / outcome capture / re-assessment trigger). Visual signals categorical coverage without overwhelming the reader.
- Cross-link to `/sample-audit-trail` (the annotated artifact page — single-click destination).
- Cross-link to `/provenance-and-accountability` (the legal-compliance deep-link sub-page).

**Voice cues:**
- Custodial-not-proprietary framing is the line HDG has been holding internally; this is its public form. *"Cena holds PHI on behalf of the partner institution"* — every word matters. Do not slip to "Cena's records" or "records belong to Cena." Per HDG §3.2 explicit.
- Bulleted-list-of-categories does the categorical-coverage work; voice doesn't have to claim "comprehensive" — the list shows it.

**Forbidden phrasings (this section):**
- "provenance trail" (use "audit trail") / "Cena owns patient records" / "records belong to Cena" / "Cena's records" / "blockchain" / "immutable ledger" / "tamper-proof" / "IRB-approved" / "IRB-reviewed" / "IRB-certified" / "30-day retention" / "365-day retention" (any specific period) / "comprehensive audit" / "complete provenance" / "full transparency" — per HDG §3.1 + §3.2 + voice.md §4.

**Lens-specific notes:**
- HDG (primary): Section §5 is HIPAA-adjacent at the highest density. Custodial framing per §3.2 is non-negotiable. Retention-period publication per §3.1 is HEDGE-only — never a specific number. IRB-approval claim per §3.2 is MUST-NOT-SAY.
- HDG: Cryptographic-seal claim per §3.2 + outstanding-partner-input.md item #3 — HEDGED default at hub altitude. The hub does not name SHA-256 by algorithm; that level of specificity routes to the sub-page and is gated on Andrey verification.
- CTA: Verify Appendix C #1 "automatic audit-trail capture" against current Spark implementation per HDG packet §8 future watchlist. If pre-AI-layer build of Spark, hedge to "designed-in." Flag for CTA review.
- PLP: First use of PHI expands to *"PHI (patient health information)"* per voice.md §11.

---

### Section 6: Data handling + security posture

**Heading:** *"Data handling and security posture."* H2; anchor `#security` per IA §4 hub section 6.
**Position:** Section 6, hub spine per IA §4. The densest HIPAA-adjacent block on the page.
**Length / shape:** ~350-450 words. 1 intro paragraph + structured table or band layout for the per-claim recommended-phrasing list.

**What this section must do:**
- Use the HDG-recommended phrasings from packet §3.1 verbatim or near-verbatim for every claim that lands. This section is the HDG-ceiling test — if any sentence here exceeds HDG recommended phrasing, the section is wrong.
- Name "BAA-architected" as the architectural claim. Per HDG §2 sign-off list row 2 + §3.1 + §6 explicit: *"BAA-ready architecture — Cena is built to operate as a business associate when a partner contracts us to handle PHI on their behalf. BAAs are executed partner-by-partner."* The second sentence prevents the universal-posture implication. First use of BAA expands to *"BAA (Business Associate Agreement)"* per voice.md §11. **NOT "BAA-ready" alone**; the architectural-claim framing is HDG-ceiling.
- Encryption at rest, recommended phrasing: *"Patient data is encrypted at rest using industry-standard methods aligned with HIPAA Security Rule expectations."* No cipher-specifics publicly per HDG §3.1.
- Encryption in transit: *"All data in transit between Cena's substrate and partner systems is encrypted via TLS (Transport Layer Security)."* Per HDG §3.1 SAFE. First use of TLS expands per voice.md §11.
- Access-control model: *"Each role on a care team sees what their job requires — by enforcement, not by policy."* Per HDG §3.1 SAFE + Appendix C #3.
- Tenant isolation: *"Each partner program runs in its own data partition."* Per HDG §3.1 SAFE + sign-off list row 7 verifiable against `ava.md`.
- Audit-log retention: *"Audit events are captured automatically and retained per the partner program's contractual retention requirements."* Per HDG §3.1 HEDGE — no specific period publicly.
- **US-only data residency**, hedged default per outstanding-partner-input.md item #2: *"BAA-eligible cloud infrastructure with executed BAAs across the vendor stack."* No US-only-residency claim ships until Andrey confirms end-to-end across full vendor stack. Per HDG §3.1 + outstanding-partner-input.md item #2.
- Route all vendor-stack specifics to NDA room. Per HDG §7 + sign-off list row 3 default: vendors-not-named publicly.
- Use HIPAA only as regulatory-context adjective, never as standalone certification claim. Per HDG §5 the noun-phrase-HIPAA prohibition. First use of HIPAA expands to *"HIPAA (Health Insurance Portability and Accountability Act)"* per voice.md §11.

**What this section must not do:**
- Claim "HIPAA-compliant" / "HIPAA-certified" / "fully HIPAA-compliant" / "we meet HIPAA requirements" — HDG §5 MUST-NOT-SAY noun-phrase-HIPAA prohibition. Use *"architected for HIPAA-regulated workflows"* or *"Cena operates as a business associate under HIPAA when contracted to handle PHI on a partner's behalf."*
- Claim "BAA in place" (partner-specific or universal) — HDG §6 MUST-NOT-SAY without explicit partner-comms clearance. The hub uses "BAA-architected"; partner-specific BAA references do not ship without comms clearance.
- Specify cipher / key-length / cryptographic-algorithm specifics for encryption claims — HDG §3.1 explicit. Defer to NDA room. No "AES-256," no "RSA-4096," no "elliptic-curve," no "FIPS-validated."
- Claim "bank-grade encryption," "military-grade security," "fortress-class infrastructure" — voice.md §2 substrate hub forbidden.
- Claim specific retention period publicly (e.g., "7-year retention," "indefinite retention") — HDG §3.1 HEDGE.
- Claim "HITRUST-certified" or "SOC 2 Type II" — HDG §4 MUST-NOT-SAY (pre-revenue stage).
- Claim "US-only data residency" or "all data stays in the US" before Andrey verifies end-to-end across the vendor stack — outstanding-partner-input.md item #2 explicit: claim does NOT ship until verification; hedged alternative ships.
- Name cloud vendors (Google Cloud, Anthropic, Vertex AI, etc.) — HDG §7 default + sign-off list row 3.

**Required claims:**
- "BAA-architected" / "BAA-ready architecture" with the universal-posture-prevention follow-up sentence. **Citation source:** HDG §3.1 + §6 + sign-off list row 2 recommended phrasing. Cena-architecture canon.
- "Encrypted at rest using industry-standard methods aligned with HIPAA Security Rule expectations." **Citation source:** HDG §3.1 SAFE-with-hedge recommended phrasing.
- "TLS for all data in transit between Cena's substrate and partner systems." **Citation source:** HDG §3.1 + §4 cross-cutting SAFE.
- "Each role sees what their job requires — by enforcement, not by policy." **Citation source:** Appendix C #3 + HDG §3.1 SAFE.
- "Each partner program runs in its own data partition." **Citation source:** HDG §3.1 + §4 cross-cutting SAFE — verifiable against `ava.md`.
- "Audit events are captured automatically and retained per the partner program's contractual retention requirements." **Citation source:** HDG §3.1 HEDGE recommended phrasing.
- "BAA-eligible cloud infrastructure with executed BAAs across the vendor stack." **Citation source:** HDG §3.1 + outstanding-partner-input.md item #2 hedged default. **Launch-gating partner-input #2 — US-only data residency** — hedged default ships now; upgrade to "data resides exclusively in US-based BAA-eligible infrastructure" (or similar verifiable phrasing) gated on Andrey verification of end-to-end vendor stack including all inference paths.

**Required proof / artifacts:**
- Structured table or two-column band: claim category | public-safe phrasing | NDA-room availability. Visual signals "the boundary is named, the specifics are available behind NDA."
- Cross-link to §8 CTA (NDA-room "Request the security packet").
- No diagram in this section.

**Voice cues:**
- This section is the HDG-ceiling test. Every sentence's load-bearing claim must match HDG recommended phrasing or be safely below it. The legal-compliance reader has a reflex for noun-phrase-HIPAA; if it triggers here, the reader marks the rest of the site down.
- Naming what's HEDGED openly ("retained per partner contractual requirements") is more credible than asserting a specific number that any partner's contract may later require different. Per HDG §6 + §3.1 reasoning.
- Architecture-claim register: this section reads as RFP-response prose to the legal-compliance reader. Quiet, factual, specific where specifics earn their place; deferred-to-NDA-room where specifics carry partner-exposure risk.

**Forbidden phrasings (this section):**
- "HIPAA-compliant" / "HIPAA-certified" / "fully HIPAA-compliant" / "BAA in place" (universal or partner-specific without comms clearance) / "bank-grade" / "military-grade" / "fortress" / "AES-256" / "RSA-4096" / "FIPS-validated" / "256-bit encryption" / "HITRUST-certified" / "SOC 2 Type II" / "ISO 27001" / "PCI-DSS" / "GDPR-compliant" / "US-only data residency" (until Andrey verifies) / specific retention period claims / specific cloud-vendor names — per HDG §3.1 + §4 + §5 + §6 + §7 + outstanding-partner-input.md items #2 + #3.

**Lens-specific notes:**
- HDG (primary, highest density): Every claim in this section maps to HDG §3.1 or §4 cross-cutting. Recommended phrasings are the CEILING. The hub is the HDG-ceiling test for the whole site.
- CTA: Verify "BAA-architected" + encryption + tenant-isolation + role-scoped claims against `ava.md` + current Spark deployment shape before publish. HDG §4 marks these SAFE (architectural); CTA verifies operational reality matches architectural intent.
- PLP: First use of HIPAA, BAA, PHI, TLS expand per voice.md §11. The acronym density is high; expansion floor is non-negotiable for legal/compliance reader.
- BV: Documentation-register on every sentence. Marketing inflection on a security section is the credibility-fatal slip the HDG packet was built to block.

---

### Section 7: What the substrate does NOT do (non-scope band)

**Heading:** *"What the substrate does not do."* H2; anchor `#scope` per IA §4 hub section 7. Load-bearing for unknown-unknown defense per IA §4 explicit.
**Position:** Section 7, hub spine per IA §4. This is the section the page is built around — the H1's em-dash structure points here.
**Length / shape:** ~250-350 words. 1 short intro paragraph + 4-6 explicit non-scope band items (parallel-structure cards or band layout).

**What this section must do:**
- Open with intent statement: *"Naming what the substrate does not do is part of the contract. Each boundary below is enforced by architecture, not by policy or training."* Tie non-scope to architectural enforcement.
- Enumerate non-scope items explicitly. Per IA §4 hub section 7 + Phase 1 Appendix C #4 + HDG §3.1 + §3.2 SAFE non-scope phrasings:
  1. **Does not displace partner clinicians.** *"Partner-institution clinicians retain clinical accountability for every recommendation Cena's substrate generates. Cena's role is the audit-grade trail that makes that accountability defensible."* Per HDG sign-off list row 4 recommended phrasing.
  2. **Does not own the patient relationship.** *"The partner program owns the patient relationship. Cena holds PHI on behalf of the partner institution; the substrate captures the trail."* Per HDG §3.2 SAFE custodial framing.
  3. **Does not require an EHR switch.** *"Built to connect to the EHRs partners already run. No migration, no switching cost, no replacement workflow."* Per HDG §3.4 SAFE non-scope.
  4. **Does not make unilateral clinical decisions.** *"Categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training."* Per HDG §3.2 SAFE + Appendix C #4. **Launch-gating partner-input #4** — hedged default ships now (categories-of-clinical-action without enumeration); upgrade to specific-five-categories enumeration gated on Andrey verification per outstanding-partner-input.md item #4. If Andrey confirms specific-five enumeration, copy upgrades to *"Five categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training."* No other copy changes when upgrade lands.
  5. **Does not displace dietitian or care-team workflows.** *"Partner-side staff keep their workflows. The substrate writes the audit trail their work produces; no displacement, no re-training."*
  6. **Does not claim regulatory certifications it has not earned.** *"Cena is not HIPAA-certified (no such certification exists), HITRUST-certified, or SOC 2 Type II. Cena is architected for HIPAA-regulated workflows; certifications are pursued as partner-volume warrants."* Per HDG §5 + §4 cross-cutting MUST-NOT-SAY discipline made explicit as a non-scope claim. This last item is the most credibility-positive single statement on the page — naming what Cena doesn't claim is what makes the rest of what Cena does claim believable.
- Use voice.md §2 substrate hub "Do" exemplar mechanics: pairing scope with non-scope is the page's whole voice contract; this section is where the contract pays off.
- Frame each non-scope item as a boundary, not a hedge or apology. *"Cena does not displace clinicians"* is structural; *"Don't worry, clinicians are still important"* is defensive.

**What this section must not do:**
- Hedge the non-scope items with "currently" or "yet" — the boundaries are architectural, not roadmap items. (Exception: item #6 may use "as partner-volume warrants" for certifications because those are explicitly roadmap-shaped.)
- Use "we don't replace clinicians" / "we don't take over" / "rest assured" — defensive register that signals exactly the anxiety the section disarms. Voice.md §6 forbidden register pattern.
- Frame non-scope as gaps or limitations to be apologized for. The page's whole voice contract is "naming non-scope is part of what makes the scope believable." (See HDG §3.2 custodial framing for the equivalent posture at the provenance section.)
- Enumerate specific clinical-action categories beyond what Andrey has verified is code-enforced. Per outstanding-partner-input.md item #4: hedged default is "categories of clinical action"; specific-five enumeration is gated on confirmation.
- Use the word "boundary" more than once or twice in the section — risk of repetition fatigue. Use "non-scope," "what's not included," "what Cena does not do."

**Required claims:**
- "Partner-institution clinicians retain clinical accountability." **Citation source:** HDG sign-off list row 4 + §3.2 SAFE — non-negotiable framing per HDG. Cena accountability model.
- "Cena holds PHI on behalf of the partner institution." **Citation source:** HDG §3.2 SAFE custodial framing — load-bearing.
- "Does not require an EHR switch." **Citation source:** HDG §3.4 SAFE non-scope.
- "Categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training." **Citation source:** Appendix C #4 + HDG §3.2 SAFE. **Launch-gating partner-input #4 — five-categories-blocked in code** — hedged default ships now (no enumeration of the five); upgrade to specific-five enumeration gated on Andrey verification per outstanding-partner-input.md item #4.
- "Cena is not HIPAA-certified, HITRUST-certified, or SOC 2 Type II." **Citation source:** HDG §4 + §5 MUST-NOT-SAY discipline made explicit. Self-attesting and credibility-positive.

**Required proof / artifacts:**
- Parallel-structure cards or band layout for the 6 non-scope items. Visual signals categorical coverage; structure does the work.
- Cross-link to `/provenance-and-accountability` (accountability model deep-dive).
- Cross-link to `/integration` (no-EHR-switch deep-dive).

**Voice cues:**
- Non-scope-as-credibility-asset is the section's whole voice contract. Item #6 (no false certifications claimed) is the page's strongest credibility move — name HIPAA-noun-phrase as a thing Cena does not claim, and the rest of what Cena does claim becomes believable. Per HDG §5 + §6.
- Structural-fact framing, not defensive-reassurance. *"Cena does not displace clinicians"* is structural; *"Don't worry, your role is still valued"* is defensive and signals exactly the displacement anxiety.

**Forbidden phrasings (this section):**
- "rest assured" / "don't worry" / "still valued" / "human in the loop" / "human-centered AI" / "AI augments your team" / "currently does not" (hedges architectural boundary as roadmap) / "yet to be implemented" / "not at this time" / "limitation" / "gap" / "shortcoming" — per voice.md §6 + HDG.

**Lens-specific notes:**
- HDG (primary): This section's recommended phrasings come directly from HDG packet §3.1 + §3.2 SAFE block; do not exceed.
- HDG: Five-categories-blocked phrasing per outstanding-partner-input.md item #4 hedged default. Verify with Andrey before specific-five enumeration ships.
- CTA: Verify each non-scope claim against current Spark + substrate canon. The architectural framing applies even where operational reality is still maturing; ensure the claim is defensible against technical-evaluator scrutiny.
- BV: This is the credibility-load-bearing section. Item #6 is the page's strongest single credibility move; protect it from defensive softening.

---

### Section 8: Role-targeted summaries — For technical evaluators / For legal-compliance

**Heading:** *"For technical evaluators"* + *"For legal-compliance"* (two parallel H2s or two anchored sub-sections). Anchors `#evaluator-summary` + `#legal-summary` per IA §4 hub section 8.
**Position:** Section 8, hub spine per IA §4. Final substantive section before the CTA + wayfinding band.
**Length / shape:** Two parallel sub-sections, ~100-150 words each. Each closes with a next-step CTA.

**What this section must do:**
- **For technical evaluators sub-section:** Recap the substrate's evaluation surfaces in technical-evaluator language. Mention: integration posture (FHIR endpoints / file drops / APIs), reasoning architecture (vendor-independent, model-swappable), security posture (encrypted at rest + in transit, role-scoped access, tenant-isolated per partner). Close with: *"The security packet — NDA-gated documentation room — carries the architectural specifics, BAA template, vendor stack with executed-BAA disclosure, and audit-log schema."* Single primary CTA (the §8 CTA in IA §9 row 5). Cross-link to `/integration` sub-page for the technical-evaluator deep-link.
- **For legal-compliance sub-section:** Recap the substrate's accountability surfaces in legal-compliance language. Mention: partner-clinician accountability framing (architectural, not policy), custodial PHI framing (Cena holds on behalf of partner), provenance + audit trail (queryable + exportable), non-scope band (clinician + patient-relationship + EHR + clinical-action boundaries). Close with: *"The security packet carries the BAA template, breach-notification posture, and the artifacts the IRB liaison's reading path will land on."* Single primary CTA (same §8 CTA). Cross-link to `/provenance-and-accountability` sub-page for the legal-compliance deep-link + `/sample-audit-trail` for the artifact destination.
- Parallel-structure cards or two-column band layout per IA §5 scannability primitives. Both sub-sections visible without scroll.
- Voice register stays consistent across both — documentation-not-pitch, factual, evaluator-respecting. The two sub-sections differ in *vocabulary* (technical-evaluator vs. legal-compliance), not in posture.

**What this section must not do:**
- Use different posture across the two sub-sections — both are quiet documentation register. Do not soften legal-compliance ("you'll feel confident your team is protected") or harden technical-evaluator ("blazing-fast performance, unmatched architecture").
- Promise outcomes ("you'll achieve X% reduction in compliance overhead") — voice.md §5 + citation spec §4 stale-claim ban.
- Use "decision-maker" / "stakeholder" / "buying committee" / "evaluation team" — voice.md §4 forbidden internal deal-role vocabulary. Use role-titles only.
- Duplicate the CTA — a single primary CTA per IA §9; the role-targeted summaries route to the same CTA with slightly different framing context.
- Use marketing-CTA register ("Discover what's possible," "Unlock the security packet," "Get the full story") — voice.md §9 NDA-gated documentation room canonical phrasing is HDG-cleared and ships verbatim.

**Required claims:**
- Technical-evaluator summary: integration + reasoning + security claims (all already cited in §§3-6; this section is recap, not new claim). **Citation source:** Cross-references to §§3, 4, 6 already-cited claims.
- Legal-compliance summary: accountability + custodial + provenance + non-scope claims (all already cited in §§5, 7; recap). **Citation source:** Cross-references to §§5, 7 already-cited claims.
- "The security packet — NDA-gated documentation room — carries [categories]." **Citation source:** HDG §3.5 + sign-off list row 5 categories-only-public discipline.

**Required proof / artifacts:**
- Two parallel sub-sections, visually balanced (no implication that one audience matters more).
- Each closes with the same canonical CTA (§8 below).
- Cross-links: `/integration` (technical-evaluator deep-link), `/provenance-and-accountability` (legal-compliance deep-link), `/sample-audit-trail` (legal-compliance artifact destination).

**Voice cues:**
- Parallel-but-not-identical voice across the two sub-sections. Technical-evaluator vocabulary: "endpoints," "tenant-isolated," "vendor-independent," "schema," "BAA template," "vendor-stack disclosure." Legal-compliance vocabulary: "accountability," "custodial," "audit-grade trail," "exportable provenance record," "BAA template," "breach-notification posture." The shared term ("BAA template") signals both audiences land on the same artifact.
- Quiet competence register: both sub-sections close with the same CTA, framed in the audience's vocabulary. The CTA does the same job; the framing meets the audience where they are.

**Forbidden phrasings (this section):**
- "decision-maker" / "stakeholder" / "evaluation team" / "buying committee" / "discover what's possible" / "unlock" / "get the full story" / "blazing-fast" / "unmatched" / "you'll feel confident" / "rest assured" / "industry-leading" / "best-in-class" — per voice.md §4 + §9.

**Lens-specific notes:**
- BV: Parallel-but-not-identical is the register test. If the two sub-sections feel like the same paragraph re-typed, the audience-vocabulary distinction is missing; if they feel like two different pages, the shared voice contract is breaking.
- PLP: First-use acronym expansion floor still applies even at this recap altitude — BAA, FHIR, PHI, IRB, etc. (per voice.md §11). If acronyms were already expanded on first use earlier on page, bare-acronym is fine here.
- HDG: NDA-room CTA phrasing per HDG §3.5 categories-only-public discipline. Both summaries' CTAs route to the same NDA-room landing.
- CTA: Verify both sub-section claim summaries match what's cited in §§3-7. This section recaps; it does not introduce new claims that haven't passed the earlier HDG-ceiling test.

---

### Section 9: CTA — Request the security packet (NDA-gated documentation room)

**Heading:** No H2. CTA copy IS the heading-equivalent.
**Position:** Section 8 of canonical template per IA §4 hub section CTA + §9 row 5. Single primary CTA after role-targeted summaries.
**Length / shape:** 1-line CTA + form fields list + NDA-room landing link. No surrounding marketing prose.

**Canonical CTA copy** (per IA §9 + voice.md §9 "NDA-gated documentation room"):
> *"Request the security packet — NDA-gated documentation room with architecture diagrams, security control matrices, BAA template, vendor stack disclosures, audit-log schema, and sample provenance artifacts."*

**Form fields** (per IA §9 row 5 + HDG §3.5 sign-off list row 5):
- Name
- Role
- Partner-org
- BAA-counsel contact

**What this section must do:**
- Use the canonical CTA verbatim or near-verbatim per IA §9 row 5 + voice.md §9.
- List categories of what's in the room (architecture diagrams, security control matrices, BAA template, vendor stack disclosures, audit-log schema, sample provenance artifacts) per HDG §3.5 sign-off list row 5 categories-only-public discipline.
- Form gate: name, role, partner-org, BAA-counsel contact. Partner-org + BAA-counsel are the meaningful gate; name + role are baseline (per HDG §3.5).
- "Security packet" is procurement-language the technical evaluator and BAA-counsel both recognize. Per voice.md §9 explicit.
- The NDA gate is named, not hidden; signals Cena treats partner-org confidentiality as the norm. Per voice.md §9.
- Position as single primary CTA. Also reachable from sticky sub-nav.

**What this section must not do:**
- Use SaaS-vendor CTA register: "Schedule a demo," "Request a demo," "Get started," "Book a call," "See it in action," "Talk to sales" — voice.md §9 + BV findings.
- Show the artifacts themselves (architecture diagram with vendor-stack labels, BAA template, audit-log schema) on the public surface — HDG §3.5 + sign-off list row 5 categories-only-public.
- Claim "Cena has signed NDAs with multiple partners" — HDG §3.5 MUST-NOT-SAY (same shape as BAA-in-place trap).
- Skip the partner-org + BAA-counsel fields — those are the meaningful gate. Without them, the form does not earn its place.
- Use exclamation marks or imperatives ("Get the packet now!" / "Don't miss out!") — voice.md §1 quiet-competence principle.

**Required claims:**
- "NDA-gated documentation room with [categories]." **Citation source:** HDG §3.5 + sign-off list row 5 categories-only-public phrasing.
- Form fields gate access. **Citation source:** Cena-architecture canon + HDG §3.5 row 3.

**Required proof / artifacts:**
- Form embed (name + role + partner-org + BAA-counsel-contact fields). No fields beyond these (per HDG §3.5 "meaningful gate is partner-org + BAA-counsel").
- Routing to NDA-room landing page upon form submission.

**Voice cues:**
- "Security packet" is the procurement-recognized term; voice does not reinvent it as "compliance bundle" or "documentation set."
- Naming the NDA gate (rather than hiding it) signals Cena treats partner confidentiality as norm — voice.md §9.
- Single primary CTA; no inline-banner repeat. The CTA architecture per IA §9 is consistent across the page.

**Forbidden phrasings (this section):**
- "Schedule a demo" / "Request a demo" / "Get started" / "Book a call" / "See it in action" / "Talk to sales" / "Contact sales" / "Let's chat" / "Ready to transform" / "Get the full story" / "Unlock the packet" / "Discover what's inside" — voice.md §9 + BV findings.

**Lens-specific notes:**
- HDG: Canonical CTA phrasing per HDG §3.5 + sign-off list row 5. The categories list is HDG-approved; do not add categories beyond what HDG signs off (no "incident-response playbook" without HDG explicit approval, etc.).
- CTA: Verify the NDA-room landing page is built and routing works before publish.
- BV: "Security packet" register; do not soften to "documentation overview" or "info pack."

---

### Section 10: Wayfinding band — "See Cena from another angle"

**Heading:** *"See Cena from another angle."* H2 or quiet section divider per voice.md §6 canonical pattern phrase.
**Position:** Final section on page, after CTA. Pattern per IA §4 (per Aaron Q4 resolution) + voice.md §6.
**Length / shape:** 5-line pattern block. Each line: *"If you're [role-action] → [surface]."*

**Per voice.md §6 per-surface calibration for `/how-the-substrate-works`:** The hub is not itself a targeted-per-role landing in the same sense as `/for-clinical-leaders` — it's the technical-evaluator + legal-compliance co-primary hub. So the wayfinding band routes outward to the other targeted landings + reference program. All five canonical patterns may land here.

**Canonical patterns (per voice.md §6):**
- *"If you're translating this internally → For clinical leaders."*
- *"If you're scoping the contract → For program economics."*
- *"If you're checking a quote → For comms."*
- *"If you're looking for a working example → Reference program."*
- *"If you're vetting your existing program's fit → Your program on Cena."*

**What this section must do:**
- Use voice.md §6 canonical pattern phrase: *"See Cena from another angle."*
- Verb-first role-actions; arrow (→) does navigational work; voice does not narrate the click.
- 5-line pattern band — include all five canonical patterns since this is the cross-cutting hub rather than a single-role landing.
- Per-surface calibration call: should this hub include *"If you're vetting data architecture → How the substrate works"* (which is the page the reader is on)? No — omit; voice.md §6 calibration omits the self-link.

**What this section must not do:**
- Use "click here" / "learn more" / "explore" / "discover" — voice.md §6 explicit forbidden.
- Include the *"If you're vetting data architecture →"* deep-link (the reader is on the page).
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
- Cross-cutting-hub calibration justifies the full 5-line band; the targeted-role landings can omit the link to their own surface, but this hub is the cross-cutting one.

**Forbidden phrasings (this section):**
- "click here" / "learn more" / "explore" / "discover" / "related pages" / "you might also like" / "check out" / "see more" — voice.md §6.

**Lens-specific notes:**
- BV: Cross-cutting-hub calibration call — include all 5 canonical patterns. The hub is the navigation spine for the substrate-works deep-dives; the wayfinding band is the navigation spine for the rest of the site.

---

## Cross-section concerns

- **HDG packet phrasings are the CEILING site-wide on this page.** Every sentence in §§3.1, 3.2, 3.4, 3.5, 4, 5, 6 of the HDG packet has a recommended phrasing; this brief inherits those phrasings as the ceiling. No copy on the hub exceeds HDG recommended phrasing without a separate review pass. This is the strictest discipline on the page and the most load-bearing.
- **Documentation-register, not pitch-register, holds across every section.** The §2 substrate hub voice.md block is the canonical statement: *"factual, evaluator-respecting; no marketing inflection; reads as documentation, not pitch."* If any sentence reads as B2B-marketing inflection, it does not belong here. The reader test: would a CIO read this and think "infrastructure documentation written by someone who's evaluated dozens of vendor docs" or "marketing site that mentions encryption"?
- **First-use acronym expansion is non-negotiable.** FHIR, BAA, PHI, HIPAA, TLS, EHR, IRB, CDS, CMIO — every acronym used on the page expands on first use per voice.md §11. The technical-evaluator audience tolerates acronym-density; the legal-compliance audience does not, and they're co-primary here. Expansion is a courtesy that costs nothing and signals the page was authored with both readers in mind.
- **Vendor-not-named is the discipline.** Google Cloud, Vertex AI, Anthropic, OpenAI, Claude, GPT — none ship on the public hub. HDG §7 + sign-off list row 3 default holds. Vendor-stack specifics route to the NDA room. This applies across §§2, 3, 4, 6.
- **The H1's em-dash structure is the page's whole voice contract.** "*What the substrate does — and what it doesn't.*" The page must deliver on both halves. §§2-6 do the *does* work; §7 (non-scope band) does the *doesn't* work and is load-bearing for unknown-unknown defense.
- **Three of four outstanding partner-input items hit this page.** Item #2 (US-only data residency) → §6 hedged default. Item #3 (SHA-256 hash chain) → §5 hedged default (architectural-pattern altitude only at hub). Item #4 (five-categories-blocked enumeration) → §7 hedged default. Each ships with the hedged version now; strict-superset upgrades land when partner verification arrives per outstanding-partner-input.md §"How this list resolves."
- **No outcome percentages, dollar figures, or X%-reduction-in-Y constructions anywhere on this page** per voice.md §5 + citation spec §4. The legacy stale claims (30% readmissions / 1.8% HbA1c / 85% adherence / $3,200 savings) are explicitly off-limits per citation spec §4 + voice.md §5.
- **Forbidden-phrasings watchlist density on this page is the highest on the site.** "HIPAA-compliant" / "bank-grade encryption" / "powerful enterprise-grade architecture" / "next-generation AI" / "blockchain" / "tamper-proof" / "Epic-certified" / "HITRUST-certified" / "SOC 2" / "production-ready" — every one is a vendor-marketing tell that the technical-evaluator or legal-compliance reader has learned to discount.
- **Section ordering hard-locked by IA §4 hub spec.** Hero+sub-nav (§1) → Data flow (§2) → Integration posture (§3) → Reasoning architecture (§4) → Provenance + audit trail (§5) → Data handling + security posture (§6) → Non-scope band (§7) → Role-targeted summaries (§8) → CTA (§9) → Wayfinding band (§10). Do not reorder.
- **Cross-link discipline.** Hub references three sub-pages: `/integration` (technical-evaluator deep-link), `/provenance-and-accountability` (legal-compliance deep-link), `/sample-audit-trail` (artifact page). Each hub section that overlaps a sub-page domain cross-links explicitly. The hub does not duplicate sub-page depth; it sets up the sub-page deep-dive.
- **Voice register asymmetry from siblings.** This hub is documentation-not-pitch register. `/for-clinical-leaders` is peer-to-peer-clinician (warmer, possessive-dense). `/for-program-economics` is defensible-spend register (audit-as-bridge concept). `/for-comms` is translated-useful register (named-contact-shaped). The hub's register is the coldest of the targeted landings — by design.
- **Dense page, dense reading.** This page goes longer (2,000-3,500 words) than typical because it serves co-primary audiences and sets up three sub-pages. The sub-nav at top is structural relief for scan-readers; the parallel-structure sections (§§3, 6, 7, 8) carry the scannability primitives per IA §5.

---

## Citation hotspots

Per citation discipline spec §3 (Claim-hotspot inventory) + §8 (HDG handoff sequence) + §10 (claim-citation reflex):

- **Section 1: H1 + 3-sentence framing.** Category anchor C-017 ("clinical intelligence infrastructure"). Non-scope preview ("does not displace clinicians, own patient relationship, require an EHR switch"). Citation source: Positioning language (no citation required for category anchor) + cross-link to `#scope` (§7) for non-scope claims.
- **Section 2: Data flow diagram + prose.** "FHIR endpoints, file drops, API conventions partners specify" + "Each clinical action produced by the substrate carries a recommendation with citation and writes one audit-trail entry." Citation source: Cena-architecture canon — Appendix C #1 primitive per citation spec §2(b) worked example. Cross-link to `#integration` + `/integration` + `#provenance` + `/sample-audit-trail`.
- **Section 3: Integration posture.** "Built to connect to FHIR endpoints partners expose." Citation source: Cena-architecture canon + HDG sign-off list row 8 approved phrasing. Flag for CTA review on whether FHIR-endpoint integration is live in current Spark deployment.
- **Section 4: Reasoning architecture.** "Model-agnostic by design: memory, tools, and context are Cena-owned; the underlying model is swappable." Citation source: Vault-entity reference per citation spec §2(b) worked example — `ava.md` vendor-independence stance.
- **Section 5: Provenance + audit trail.** Multiple claims — Appendix C #1 (automatic audit trail), Appendix C #2 (cryptographic verification / hash chain), custodial PHI framing, IRB-documentation framing. Citation sources: Cena-architecture canon + HDG §3.2 SAFE recommended phrasings. **Launch-gating partner-input #3 (SHA-256 hash chain)** — hedged default at hub altitude.
- **Section 6: Data handling + security posture.** Densest HIPAA-adjacent block. BAA-architected, encryption-at-rest, encryption-in-transit, role-scoped access, tenant isolation, audit-log retention, BAA-eligible cloud infrastructure. Citation sources: HDG §3.1 SAFE + HEDGE recommended phrasings + cross-cutting §4 + outstanding-partner-input.md item #2 hedged default. **HDG handoff sequence (citation spec §8) applies to every claim in this section** — recommended phrasings are CEILING. **Launch-gating partner-input #2 (US-only data residency)** — hedged default at hub altitude.
- **Section 7: Non-scope band.** Six non-scope claims. Citation sources: HDG sign-off list row 4 (partner-clinician accountability) + HDG §3.2 SAFE (custodial PHI) + HDG §3.4 SAFE (no EHR switch) + Appendix C #4 (clinical-action categories blocked) + HDG §4 + §5 cross-cutting MUST-NOT-SAY (certifications not claimed). **Launch-gating partner-input #4 (five-categories-blocked enumeration)** — hedged default at hub altitude.
- **Section 8: Role-targeted summaries.** Recap claims from §§3-7; no new citation hotspots. NDA-room categories phrasing per HDG §3.5.
- **Section 9: CTA.** NDA-gated documentation room categories list. Citation source: HDG §3.5 sign-off list row 5 categories-only-public phrasing.

**Legacy stale claims watchlist** (per citation spec §4): 30% readmissions, 1.8% HbA1c, 85% adherence, $3,200 savings, $17B preventable costs, "60-90 day implementation," "36% gross margins," "$200 PMPM" — explicitly off-limits. Watch for legacy strategy/CLAUDE.md proof-point-library leakage; ignore that file's "Proof Point Library" section per citation spec §4.

**HDG handoff sequence (citation spec §8) applies in full to §§5, 6, 7.** Every HIPAA / PHI / BAA / encryption / access-control / audit-log / non-scope-architectural claim on this page routes through HDG-recommended phrasing as ceiling. Per the 2026-06-08 status update at top of HDG packet, the packet was not routed to Vanessa for sign-off; the recommended phrasings are the proceed-as-approved default for design + build. Launch gates on the 4 outstanding-partner-input items in addition.

---

## Outstanding partner-input touchpoints

Per [outstanding-partner-input.md](../outstanding-partner-input.md), three of four launch-gating items touch this page:

**Item #2 — US-only data residency claim verification** (Andrey / end-to-end vendor-stack verification):
- **Touchpoint:** Section 6 (Data handling + security posture).
- **Hedged default that ships now:** *"BAA-eligible cloud infrastructure with executed BAAs across the vendor stack."* Per HDG §3.1 + outstanding-partner-input.md item #2 hedged default. No US-only-residency claim ships until Andrey confirms end-to-end across full vendor stack including all inference paths (Anthropic, vector store, embedding service, etc.).
- **Upgraded version that ships when input lands:** *"Data resides exclusively in US-based BAA-eligible infrastructure across the full vendor stack."* (Or similar verifiable phrasing.) Strict-superset edit per outstanding-partner-input.md §"How this list resolves."
- **UConn BAA §13 implication:** UConn BAA carries an offshore-PHI ban per HDG packet §3.1 + 2026-04-29 Dieckhaus kickoff dispatch reference. If US-only residency cannot be claimed, the UConn partnership may be contractually constrained even if the partner-comms-clearance arrives.

**Item #3 — SHA-256 message-hash chain currency** (Andrey / implementation-vs-aspirational confirmation):
- **Touchpoint:** Section 5 (Provenance + audit trail) — architectural-pattern altitude only at hub.
- **Hedged default that ships now:** Architectural-pattern reference to "cryptographic verification" or "verification hash" without specifying SHA-256 algorithm. Hub does not name the algorithm; algorithmic specifics route to the `/provenance-and-accountability` sub-page (where the claim may also be hedged per outstanding-partner-input.md item #3).
- **Upgraded version that ships when input lands:** If Andrey confirms SHA-256 implementation, the architectural-pattern claim upgrades. The hub may name the cryptographic pattern more specifically; the sub-page may name the algorithm. If Andrey confirms aspirational-only, the verification-hash framing holds at the architectural-pattern altitude with no algorithm name.
- **Cross-link** from Section 5 to `/provenance-and-accountability` sub-page (where the deeper hedge/upgrade lives).

**Item #4 — Five-categories-blocked-in-code currency** (Andrey / clinical-safety scope confirmation):
- **Touchpoint:** Section 7 (non-scope band, item #4).
- **Hedged default that ships now:** *"Categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training."* No enumeration of the five categories. Per HDG §3.2 SAFE + outstanding-partner-input.md item #4 hedged default.
- **Upgraded version that ships when input lands:** *"Five categories of clinical action are blocked at the system level without a named approver — enforced in code, not in training."* If Andrey confirms specific-five enumeration AND the categories are publicly nameable, the section may enumerate. Otherwise the upgrade is the single word "Five" landing in front of "categories."
- **Edge case:** If Andrey confirms code-enforced blocking but the specific category list is partner-sensitive (e.g., depends on partner-program scope), the hub stays at "categories of clinical action"; specific enumeration may stay in NDA room.

**Item #1 (UConn-named pilot reference upgrade)** does not directly touch this page — UConn-named upgrade lives on `/reference-program` headline + homepage proof strip per outstanding-partner-input.md item #1. The hub may cross-link to `/reference-program` (e.g., from §5 provenance-and-accountability context, or §10 wayfinding band) where the UConn-named upgrade landing applies; the hub itself does not name UConn directly.

---

## Expert conflicts resolved

**Honest disclosure:** No literal 2+ expert review-pass conflicts existed in this synthesis run — this brief was authored directly against the canonical specs (IA, voice.md, citation discipline, HDG packet). The following items reflect *anticipated* cross-lens decisions and brief-internal calls that needed resolution:

- **Section 5 (provenance) vs. Section 7 (non-scope) — where does "Cena does not own the patient relationship" land?** Both sections legitimately carry custodial framing. **Resolution:** Section 5 establishes custodial framing as architectural fact (*"Cena holds PHI on behalf of the partner institution"*); Section 7 re-states it as a non-scope claim (*"The partner program owns the patient relationship"*). The two framings are complementary, not duplicative — §5 is what Cena does (custodial holding); §7 is what Cena does not do (own the relationship). Both ship; phrasings are calibrated to context.
- **Section 6 vs. Section 5 — where does the cryptographic-seal / hash-chain claim live?** Appendix C #2 is a provenance claim AND a security claim. **Resolution:** §5 (provenance) carries the architectural-pattern reference at hub altitude per outstanding-partner-input.md item #3 hedged default. §6 (security) does not duplicate; security focuses on encryption-at-rest / in-transit / access control / tenant isolation / audit retention / BAA-architected. Cross-references between §5 and §6 in the prose where the integrity-via-cryptographic-pattern claim intersects encryption discipline.
- **Section 4 (reasoning) — should it mention that the underlying model is currently Anthropic's Claude?** HDG §7 explicit recommendation: do not name vendors publicly. **Resolution:** Section 4 holds architectural-intent framing (*"model-agnostic by design: memory, tools, and context are Cena-owned; the underlying model is swappable"*). No vendor named on the public hub. Vendor specifics route to NDA room per HDG §3.5 + sign-off list row 5.
- **Section 7 (non-scope item #4) — should the brief recommend authoring the hedged-vs-upgraded variant inline, or wait for Andrey verification?** Per outstanding-partner-input.md item #4 + HDG §3.2 SAFE: hedged default is "categories of clinical action are blocked at the system level"; specific-five enumeration is the strict-superset upgrade. **Resolution:** Hedged default ships now per outstanding-partner-input.md discipline. The brief specifies the hedged copy explicitly so Phase 3 build implements it directly; the upgrade is a one-word edit (insert "Five") when Andrey verifies enumeration is publicly safe.
- **Section 8 (role-targeted summaries) — visual treatment for parallel sub-sections?** Two parallel H2s, two-column band, or two stacked sub-sections? **Resolution:** Writer's call in Phase 3 visual design. The voice contract is parallel-but-not-identical; the visual treatment must signal parallel-importance to both audiences (no implied hierarchy). HVD review at Phase 3 owns the visual call.
- **Section 9 (CTA) categories list — should it include "incident-response procedures"?** HDG packet §3.5 lists *"Architecture diagrams · Security control matrices · BAA template · Vendor stack with executed-BAA disclosure · Audit-log schema · Incident-response procedures · Sample provenance artifacts."* This brief's §9 categories list omits "incident-response procedures" because HDG §9 open question on "Incident-response disclosure" flags it for separate authoring. **Resolution:** Omit "incident-response procedures" from the public categories list at launch; it stays in the NDA room contents but is not advertised publicly until HDG + Channel Partnerships + Plain Language author the incident-comms playbook per HDG §9 open question #5.

---

## Open questions for Aaron-gate

1. **Section 4 (Reasoning architecture) — does the page name "model-agnostic by design" without any vendor cross-reference, or include a parenthetical noting that the NDA room contains vendor-specific details?** Recommendation: include the cross-reference at the end of the section ("Model-specific specifications and the model-evaluation criteria route to the NDA room"). Confirm — or override if the bare architectural-intent claim is the cleaner read.

2. **Section 6 (Security) — visual treatment for the per-claim recommended-phrasing list?** Table (claim category | public phrasing | NDA-room availability), two-column band, or simple paragraph prose with embedded list? Recommendation: structured table or band layout — visually signals the boundary discipline. Confirm visual treatment direction or punt to Phase 3 HVD.

3. **Section 7 (non-scope band) item #6 — name HIPAA-noun-phrase prohibition explicitly?** Recommendation: yes. *"Cena is not HIPAA-certified (no such certification exists), HITRUST-certified, or SOC 2 Type II."* The parenthetical "(no such certification exists)" is the page's strongest single credibility move per HDG §5. Confirm — or override if the bare statement reads better without the parenthetical.

4. **Section 8 (role-targeted summaries) ordering — technical-evaluators left, legal-compliance right? Or alphabetical?** Recommendation: technical-evaluators first (matches IA §4 hub section 8 anchor order: `#evaluator-summary` before `#legal-summary`). Confirm.

5. **Section 10 (wayfinding band) — include all 5 canonical patterns or only 4?** Voice.md §6 lists 5 canonical patterns; this hub is the cross-cutting evaluation-spine, not a targeted-role landing, so all 5 may apply. Recommendation: include all 5. Confirm — or override if any role-action doesn't fit the cross-cutting-hub context.

6. **Three outstanding partner-input items (#2, #3, #4) — ship the hedged defaults now, or hold the page from launch until at least one resolves?** Recommendation per outstanding-partner-input.md discipline + Aaron's 2026-06-07 framing ("i want to move forward but i don't want to lose these needs"): ship hedged defaults; launch-gate the site (not the design + build); upgrade to strict-superset versions when partner input lands. Confirm the launch-gating approach (page ships hedged; full launch gated on partner-input resolution).

---

## Sign-off

- [ ] Plain Language Positioning
- [ ] Cena Technical Accuracy
- [ ] Healthcare Data Governance
- [ ] Brand Voice Reviewer
- [ ] Aaron-gate
