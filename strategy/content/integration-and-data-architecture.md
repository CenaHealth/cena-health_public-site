# Content Brief: Integration & data architecture

**Path:** `/how-the-substrate-works/integration` · **Status:** Awaiting Aaron-gate · **Date:** 2026-06-08 · **Phase 2, Substep 5**

Section-by-section copy brief for the Integration & data architecture sub-page — the technical evaluator's deep-link from the How the substrate works hub. Anchored to [Phase 2 IA spec](../phase-2-information-architecture.md) §4 (sub-page treatment + hub canonical template) + §2 (decision-role surface map: technical evaluator first surface) + §3 (sub-page headline) + §5 (label hygiene) + §9 (CTA architecture), [voice.md](../brand/voice.md) §2 (substrate hub sub-pages voice register) + §3 (sub-page headline pattern) + §4 (forbidden phrasings) + §6 (wayfinding band) + §9 (NDA-gated documentation room CTA) + §10 (claim-citation reflex) + §11 (internal-vocab translation), [citation discipline](../citation-discipline-spec.md) §3 hub claim hotspots + §8 HDG handoff sequence, [HDG packet](../phase-2-hdg-review-packet.md) §3.4 integration sub-page review + §3.1 security + §3.5 NDA-room teaser + §4 cross-cutting + §5 noun-phrase-HIPAA prohibition + §7 vendor-stack disclosure recommendation, and [outstanding-partner-input.md](../outstanding-partner-input.md) item #2 (US-only residency — directly affects this page).

---

## At a glance

- **Purpose:** Serve the technical evaluator (single primary role) as the deep-link surface from the substrate hub. The page is what a CMIO / IT/Informatics / FHIR-integration-owner reader gets sent to by a champion who needs them to vet *"can this connect to what we already run, without a stack change?"* The page indexes the hub's Section 3 (Integration posture) — same architectural truth, focused depth.
- **Primary audience:** Technical evaluator (single role per IA §2). But copy still has to land for a manager-tier reader (CMIO, VP IT) who isn't day-to-day deep in FHIR — acronyms expand on first use; integration primitives are named in concrete terms; security-marketing register stays off.
- **Headline:** *"Built to connect to what you already run."* Locked verbatim per IA §3 + voice.md §3 sub-page headline pattern. Speaks to the technical evaluator's first question. Partner-protagonist frame on a technical-evaluator surface — the partner's systems are the subject of every sentence about integration.
- **Voice register:** Factual, evaluator-respecting, documentation-not-pitch per voice.md §2 substrate hub sub-pages. Reads as RFP response or integration partner documentation, not as marketing site. The acronym density is high (FHIR / HL7 / API / EHR / TLS / BAA / PHI / HIPAA) — first-use expansion is non-negotiable so the manager-tier reader does not bounce.
- **CTA architecture:** *"Request the security packet"* → NDA-gated documentation room, same CTA shape as the hub per IA §9 row 5 + voice.md §9. Sub-page reuses the hub's primary CTA so the technical evaluator who deep-lands here reaches the same NDA-room with the same form fields (name, role, partner-org, BAA-counsel contact). Cross-link back to the hub for legal-compliance routing.
- **HIPAA-adjacent:** **YES** — HDG packet phrasings as ceiling per the data residency claim (item #2), the security cross-link to the hub's §6 security band, and the integration-posture claim itself. HDG packet §3.4 is the canonical recommended-phrasing source for this page; §3.1 carries over for any security-adjacent claim that intersects.
- **Launch-gating partner-input:** **Item #2 (US-only data residency) directly affects this page.** Hedged default ships now (*"BAA-eligible cloud infrastructure"*); upgrade gated on Andrey end-to-end vendor-stack verification per outstanding-partner-input.md item #2.
- **Vendor stack NOT named:** Per HDG §7 + sign-off list row 3 default — Google Cloud / Vertex AI / Anthropic / specific cloud-vendor or model-vendor names do not ship on this public sub-page. Specifics route to NDA room. The architectural-intent frame holds; vendor names belong behind NDA.
- **Specific named-EHR claims do NOT ship:** Per Phase 1 brief must-not-say + HDG §3.4 + sign-off list row 8 — *"Epic-certified," "approved Epic partner," "live Athena API," "Cerner-validated"* are MUST-NOT-SAY at launch. Generic FHIR + file-drops + API conventions is the safe altitude. The page describes the substrate's integration *posture* against any EHR; named-EHR-deployment claims attach to specific partner deployments, not to Cena as a certified vendor.
- **Length:** 1,500-2,500 words. Technical sub-page — precise over expansive. Deeper than the hub's Section 3 (which is ~250-350 words), but does not duplicate the hub's other sections; cross-links instead.

---

## Section briefs

### Section 1: Hero (What this page is for)

**Heading:** *"Built to connect to what you already run."* (Locked verbatim per IA §3 + voice.md §3 sub-page headline pattern.) H1.
**Position:** Section 1, sub-page spine per IA §4 canonical template + hub-aware customization.
**Length / shape:** H1 (locked) + 2-3 sentence framing in technical-evaluator language. ~50-80 words. No hero CTA (CTA in §8; also reachable from breadcrumbs / hub link).

**What this section must do:**
- Lead with H1 verbatim. The partner-possessive *"what you already run"* is the page's whole voice contract — the partner's systems are the subject. Cena connects to them; not the other way around.
- 2-3 sentence framing names: (a) what the substrate expects from partner systems (FHIR endpoints, file drops, API conventions partners specify) in concrete primitives, (b) what it does NOT require (EHR switch, custom middleware, proprietary connectors), (c) the page's role as the technical-evaluator deep-dive against the hub.
- Use voice.md §2 substrate hub sub-pages Do exemplar: *"Built to connect to FHIR endpoints partners expose."* Generic, verifiable, non-vendor-specific per HDG §3.4 + sign-off list row 8 approved phrasing.
- Breadcrumb at top: *"How the substrate works › Integration & data architecture"* — orients the deep-landed visitor.
- First use of FHIR expands to *"FHIR (Fast Healthcare Interoperability Resources)"* per voice.md §11. EHR expands to *"EHR (Electronic Health Record)"* on first use for manager-tier reader. HL7 expands to *"HL7 (Health Level Seven)"* if mentioned.

**What this section must not do:**
- Use any superlative / adjective-stack: *"powerful integration platform," "enterprise-grade connectors," "next-generation interoperability," "industry-leading integration architecture"* — voice.md §2 substrate hub explicit Don't.
- Open with marketing prose: *"In today's complex healthcare landscape, integration is harder than ever…"* — collapses evaluator register on the first sentence. The reader is here because the champion sent them; they don't need to be persuaded that integration matters.
- Use developer-portal slang: *"just plug in," "out of the box," "drop-in integration," "built for developers," "API-first," "modern integration patterns"* — voice.md §2 substrate hub explicit forbidden.
- Cite vendors by name (Google Cloud, Vertex AI, Anthropic, Epic, Athena, Cerner) — HDG §7 + sign-off list row 3 default. Specific-EHR named claims fall under HDG §3.4 + sign-off list row 8 MUST-NOT-SAY.
- Use the word *"seamless"* — voice.md §4 explicit forbidden (says nothing; reads as defensive).

**Required claims:**
- "Built to connect to FHIR endpoints partners expose, file drops partners specify, API conventions partners run." **Citation source:** Cena-architecture canon per citation spec §2 row "Cena-specific architecture" + HDG §3.4 + sign-off list row 8 approved phrasing.
- "Does not require an EHR switch." **Citation source:** Cross-link to hub `#scope` (Section 7 non-scope band) — HDG §3.4 SAFE non-scope.

**Required proof / artifacts:**
- Breadcrumb (*"How the substrate works › Integration & data architecture"*) — orients deep-landed visitor.
- The H1 itself is the page's structural argument: the partner's systems are the protagonist.

**Voice cues:**
- Partner-possessive register on a technical surface — *"what you already run"* is the same partner-protagonist principle as the hub, applied to the technical-evaluator's question. Preserve the possessive in subsequent prose: *"the EHRs you already run," "the systems your team already owns," "the data warehouse your reporting already lives in."*
- Specificity over generality per voice.md §1: name FHIR, file drops, API conventions by name; do not paraphrase to "modern integration patterns."

**Forbidden phrasings (this section):**
- "powerful integration platform" / "enterprise-grade connectors" / "next-generation interoperability" / "industry-leading integration architecture" / "in today's complex healthcare landscape" / "just plug in" / "out of the box" / "drop-in integration" / "API-first" / "modern integration patterns" / "seamless" / "frictionless" / "best-in-class integration" — per voice.md §2 + §4 + HDG §3.4.

**Lens-specific notes:**
- PLP: First-use acronym expansion (FHIR, EHR; HL7 if used) — non-negotiable for manager-tier reader who reaches this page via a champion forward.
- HDG: H1 is positioning copy, no citation required. The integration-primitives claim in the framing routes to §2 below for full development; this section sets up the page.
- CTA (technical accuracy): No technical claim that exceeds the hub's Section 3 generic-language altitude lands here. Specific-EHR / specific-vendor / specific-protocol claims route to NDA room.
- BV: Documentation-register from sentence one. A CIO read should land "infrastructure I can vet"; if the open reads as B2B marketing, the voice missed.

---

### Section 2: Integration overview — what the substrate expects vs. does NOT require

**Heading:** *"What the substrate expects, and what it doesn't require."* H2; anchor `#expects-and-doesnt`.
**Position:** Section 2, sub-page spine per IA §4 hub-aware customization. Indexed deeper than hub Section 3 (which is two-band overview); this section makes the two-band claim load-bearing for the page.
**Length / shape:** ~300-400 words. 1 short intro paragraph + two-column or two-band structure: **"What the substrate expects"** | **"What the substrate does NOT require."** Each side carries 4-5 explicit items.

**What this section must do:**

- Name what the substrate *expects* from partner systems in concrete primitives:
  1. **FHIR endpoints partners expose** — read/write access to the FHIR resources the partner's EHR makes available, scoped to the program's clinical context.
  2. **File drops partners specify** — secure file-transfer (SFTP / partner-specified protocol) for batch data the partner program needs to share or receive (referrals, outcome reports, grant-cadence submissions).
  3. **API conventions partners run** — REST / JSON / partner-specified API patterns for integrations the partner has already standardized on (data warehouse pulls, reporting-cadence submissions).
  4. **Authentication conventions partners enforce** — OAuth 2.0 / SAML / partner-specified identity-federation patterns. Cena meets the partner's identity-provider posture; does not require partner to adopt Cena's.
  5. **Reporting cadences partners specify** — daily / weekly / monthly / quarterly artifact emission per partner's grant / waiver / VBC contract.

- Name what the substrate does *NOT* require, explicitly:
  1. **No EHR switch.** Cena connects to the EHR the partner already runs; does not require migration to a Cena-owned EHR or to a different vendor's EHR.
  2. **No custom middleware on the partner side.** Cena does not require the partner to stand up a custom integration broker, ESB (Enterprise Service Bus), or proprietary integration engine.
  3. **No proprietary connectors.** Cena does not require the partner to license, install, or maintain a Cena-specific connector at the EHR layer.
  4. **No clinical workflow displacement.** Cena does not require partner clinical staff to adopt new workflows in the EHR; the substrate operates underneath the EHR's existing workflow patterns.
  5. **No data warehouse migration.** Cena connects to the data warehouse the partner already runs; does not require migration to a Cena-owned warehouse.

- Use voice.md §2 substrate hub sub-pages register: factual, evaluator-respecting, documentation-not-pitch.
- First use of API expands to *"API (Application Programming Interface)"* per voice.md §11 floor. SFTP expands to *"SFTP (Secure File Transfer Protocol)"* if used. ESB expands to *"ESB (Enterprise Service Bus)"* if used.
- Reference HL7 FHIR R4 (the version standard the substrate targets) once in this section — HL7 standards reference per Phase 1 brief Tech Accuracy + citation spec §3 hotspot.
- Cross-link to hub `#scope` (Section 7 non-scope band) for the broader non-scope frame.

**What this section must not do:**
- Claim "Epic-certified," "approved Epic partner," "live Athena API," "Cerner-validated," "MEDITECH-integrated," "Allscripts-certified" — HDG sign-off list row 8 + §3.4 MUST-NOT-SAY. The Accenture-app flag from 2026-05-26 applies here directly.
- Claim "HITRUST-aligned," "SOC 2 Type II," "HITRUST-certified" — HDG §4 cross-cutting MUST-NOT-SAY (pre-revenue stage; certifications aspirational at best).
- Name cloud vendors (Google Cloud, Vertex AI, etc.) — HDG sign-off list row 3 default + §7 explicit.
- Use vendor-portal language: *"integration partners," "ecosystem partners," "certified integrations," "verified partners," "marketplace connectors"* — collapses substrate register into SaaS-vendor framing.
- Promise *"seamless," "frictionless," "out-of-the-box"* integration — adjective claims that collapse evaluator credibility.
- Use the construction *"X% faster integration"* or *"60-90 day implementation"* — Phase 1 brief Appendix B + citation spec §4 stale claim explicit off-limits.

**Required claims:**
- "Built to connect to FHIR endpoints partners expose, file drops partners specify, and API conventions partners run." **Citation source:** Cena-architecture canon per citation spec §2(b) + HDG §3.4 + sign-off list row 8 approved phrasing.
- "Does not require an EHR switch, custom middleware, proprietary connectors, clinical workflow displacement, or data warehouse migration." **Citation source:** Cross-link to hub `#scope` + HDG §3.4 SAFE non-scope.
- HL7 FHIR R4 standards reference. **Citation source:** HL7 International (publicly-available standards body) — primary-source citation per citation spec §2 row "Statutory / regulatory" or "Cena-specific architecture" (HL7 publishes the FHIR R4 standard; Cena's claim is that it builds against it). Format per citation spec §5: *"HL7 FHIR R4 standard (HL7 International). Retrieved: YYYY-MM-DD. Re-check cadence: on-standard-supersession."*

**Required proof / artifacts:**
- Two-band visual structure (Expects | Does Not Require) — same primitive as hub §3 but with 5 items per side (vs. hub's 2-3). Visual signals the boundary discipline; structure does the work.
- HL7 FHIR R4 reference (one inline mention; full citation in References).
- Cross-link to hub `#scope` (Section 7 non-scope band) for the broader non-scope frame.

**Voice cues:**
- The two-band structure carries the page's whole voice contract — naming what's expected alongside what's not required is the IA-level voice mechanic that holds the substrate frame.
- Specificity over generality: each item names a concrete primitive, not an abstract framing. *"FHIR endpoints partners expose"* lands; *"flexible integration options"* does not.

**Forbidden phrasings (this section):**
- "Epic-certified" / "approved Epic partner" / "Athena-certified" / "Cerner-validated" / "MEDITECH-integrated" / "Allscripts-certified" / "HITRUST-certified" / "SOC 2 Type II" / "industry-leading integration" / "seamless integration" / "frictionless onboarding" / "out-of-the-box connector" / "integration partner" / "ecosystem partner" / "drop-in API" / "marketplace connector" / "X% faster integration" / "60-90 day implementation" — per HDG §3.4 + §4 + voice.md §4 + citation spec §4.

**Lens-specific notes:**
- HDG (primary): Per HDG §3.4 + sign-off list row 8, all integration claims are SAFE only at the generic-language altitude. Named-EHR claims (Epic / Athena / Cerner / etc.) are MUST-NOT-SAY without primary-source certification verification + partner-deployment attribution. **The named-EHR integration claim attaches to the partner's deployment of that EHR; Cena's claim is that the substrate is built to connect to the FHIR endpoints the partner's EHR exposes — which is true regardless of which EHR vendor the partner runs.**
- CTA: Verify FHIR-endpoint claim against current Spark deployment shape per HDG packet §8 future watchlist. If Spark MVP doesn't include live FHIR integration today, hedge the FHIR-endpoint claim to *"designed to connect to FHIR endpoints partners expose"* — architectural-intent altitude, not operational-reality claim. Flag for CTA review.
- PLP: Acronym expansion floor — FHIR, EHR, API on first use; HL7, SFTP, ESB if used. Acronym density is high; expansion is non-negotiable for the manager-tier reader.
- BV: The two-band structure is the page's structural argument. The visual carries the boundary discipline; voice does not have to claim "we're flexible."

---

### Section 3: Data flow (deeper than hub version)

**Heading:** *"How data flows."* H2; anchor `#data-flow`.
**Position:** Section 3, sub-page spine per IA §4 hub-aware customization. Indexes the hub's Section 2 (5-stage data-flow diagram); this section adds technical-evaluator-relevant depth on each stage.
**Length / shape:** ~350-450 words. 1 architectural diagram (same 5-stage horizontal flow as the hub — **partner-system → ingestion → reasoning → recommendation-with-citation → audit-trail-write** — but with technical-evaluator-relevant annotations per stage) + ~200-300 words of accompanying prose. The diagram does the visual work; prose adds the stage-by-stage technical detail the hub omits.

**What this section must do:**
- Render the same 5-stage flow as the hub but with technical-evaluator-relevant per-stage annotations:
  1. **Partner system → Cena ingestion.** Annotation: integration mechanism (FHIR endpoint pull / file drop write / API request), authentication (OAuth 2.0 / SAML / partner-specified), data scope (program-scoped, not all-of-EHR).
  2. **Ingestion → reasoning service.** Annotation: encrypted in transit (TLS); tenant-isolated per partner program (no cross-tenant data exposure); role-scoped (only the data the role needs to act on).
  3. **Reasoning service → recommendation generation.** Annotation: model-architecture cited per recommendation; vendor-independent by design (model is swappable without re-engineering surfaces or breaking audit trail) — cross-link to hub `#reasoning` (Section 4).
  4. **Recommendation → accountable-clinician approval.** Annotation: partner-institution clinicians retain clinical accountability; the substrate proposes, the named clinician approves. Cross-link to `/provenance-and-accountability`.
  5. **Audit-trail write.** Annotation: input data sources logged with timestamps + source-system attribution; reasoning step logged with model-architecture citation; recommendation logged with peer-reviewed-literature citation; clinician approval logged with timestamp + role (not name); outcome capture logged with measurement timestamp + methodology. Cross-link to `/sample-audit-trail`.
- Use generic labels for cloud/vendor boxes in the diagram — *"hosting environment," "reasoning service," "audit store"* — per HDG §3.4 explicit recommendation. Vendor specifics defer to NDA room.
- One-paragraph closer: *"The NDA-room documentation includes the architectural-specifics version of this diagram with vendor-stack labels, the per-stage protocol detail, and the BAA-eligible vendor disclosure."* Per HDG §3.5 NDA-room teaser discipline.
- First use of TLS expands to *"TLS (Transport Layer Security)"* per voice.md §11. OAuth and SAML stay as common technical-evaluator vocabulary; no expansion needed.

**What this section must not do:**
- Label specific cloud-vendor boxes in the diagram (Google Cloud, Vertex AI, Anthropic) — HDG sign-off list row 3 default + §7 explicit.
- Use sequence-diagram visual language that implies linear migration — coexistence is the architectural truth (the partner system runs alongside, not before-or-after).
- Overload the diagram with detail; the public-sub-page version is intentionally less detailed than the NDA-room version. The visitor's job here is "I can see the shape and the per-stage technical posture"; specifics live in the room.
- Describe ingestion as "we suck up all your data" or *"comprehensive data acquisition"* — ingestion is bounded by what the partner system exposes (FHIR endpoints / file drops / API conventions partners specify), per HDG §3.1 + §3.4. Boundary discipline matters here as much as on the hub.
- Use *"magic," "auto-magic," "intelligent ingestion," "smart pipelines"* — voice.md §4 forbidden vendor-flattery.
- Specify cipher / key-length / FIPS-certification specifics for the TLS or encryption claim — HDG §3.1 + sign-off list row 5 categories-only-public discipline. The diagram annotation says "encrypted in transit (TLS)"; specifics route to NDA room.

**Required claims:**
- "Data flows from partner systems through Cena's substrate via FHIR endpoints, file drops, or API conventions partners specify." **Citation source:** Cena-architecture canon per citation spec §2(b) worked example. Cross-link to §2 (Integration overview).
- "Encrypted in transit (TLS) between partner systems and Cena's substrate." **Citation source:** HDG §3.1 SAFE recommended phrasing.
- "Tenant-isolated per partner program; role-scoped per care-team role." **Citation source:** HDG §3.1 + §4 cross-cutting SAFE — verifiable against `ava.md`.
- "Model architecture cited per recommendation; vendor-independent by design." **Citation source:** Cross-link to hub `#reasoning` (Section 4) + citation spec §9(b) worked-example architectural claim.
- "Partner-institution clinicians retain clinical accountability; the substrate proposes, the named clinician approves." **Citation source:** HDG sign-off list row 4 + §3.2 SAFE — non-negotiable accountability framing.
- "Each clinical action writes one audit-trail entry." **Citation source:** Phase 1 brief Appendix C #1 primitive — Cena-architecture canon per citation spec §2(b).

**Required proof / artifacts:**
- The 5-stage data-flow diagram (same shape as hub Section 2 but with technical-evaluator-relevant per-stage annotations) — primary visual on the page.
- Anchor links from each diagram stage to the relevant in-page section or cross-page destination (stage 1+2 → §2 Integration overview; stage 3 → hub `#reasoning`; stage 4 → `/provenance-and-accountability`; stage 5 → `/sample-audit-trail` + hub `#provenance`).
- One-paragraph NDA-room teaser at the end of the section, per HDG §3.5 discipline.

**Voice cues:**
- The diagram is the page's structural argument; prose voices the legend without narrating what the diagram shows. If prose says "as you can see in the diagram," cut.
- Per-stage annotations are RFP-response-shaped: dense, specific, factual. The technical evaluator's reflex is to scan annotations for missing posture (encryption, isolation, auth) — give them what they need; deliberately route specifics to NDA room.

**Forbidden phrasings (this section):**
- "magic" / "auto-magic" / "intelligent ingestion" / "smart pipelines" / "comprehensive data acquisition" / "we suck up your data" / "we ingest everything" / "as you can see" / "unprecedented transparency" / "AES-256" / "RSA-4096" / "FIPS-validated" / "256-bit encryption" / "military-grade" / "bank-grade" / "fortress" — per HDG §3.1 + voice.md §4.

**Lens-specific notes:**
- HDG: Generic labels in diagram per §3.4 recommendation. Vendor-stack specifics route to NDA room. Encryption-cipher specifics route to NDA room per §3.1.
- CTA: Verify the 5-stage flow matches current Spark + substrate-architecture canon before publish. If ingestion or audit-trail-write are pre-AI-layer-only in current Spark (per `patient-app.md` archive-IA build), hedge per-stage prose to "designed-for" where the live implementation diverges. Flag for CTA review.
- BV: Per-stage annotations are dense by design — this is the technical-evaluator deep-link, and the reader expects depth they did not get on the hub. The hub's data-flow section is the overview; this section is the depth.

---

### Section 4: Specific integration patterns

**Heading:** *"How Cena connects, in detail."* H2; anchor `#patterns`.
**Position:** Section 4, sub-page spine per IA §4 hub-aware customization. The technical-evaluator's "show me what this actually looks like" section.
**Length / shape:** ~300-400 words. 3 parallel-structure sub-sections, one per integration pattern.

**What this section must do:**
- Three parallel sub-sections, each ~80-120 words, each naming the integration pattern, the partner-side input/output, and the substrate-side behavior:

  1. **FHIR R4 endpoint integration.**
     - **Pattern:** Cena's substrate consumes the FHIR R4 endpoints the partner's EHR exposes (Patient, Encounter, Observation, MedicationRequest, Condition, etc.), scoped to the program's clinical context.
     - **Partner side:** Partner-IT controls scope, authentication, and rate-limiting; Cena meets the partner's FHIR endpoint posture.
     - **Substrate side:** Cena pulls scoped FHIR resources, writes the substrate's reasoning + audit trail, and exposes outputs (recommendations, audit records, outcome captures) back to the partner via FHIR write where partner-side permits, or via file drops where FHIR write is not exposed.
     - **No claim** about specific EHR vendor certification — the pattern works against any FHIR R4-compliant endpoint regardless of EHR vendor.

  2. **File drop / secure file transfer.**
     - **Pattern:** Secure file transfer (SFTP / partner-specified protocol) for batch data the partner program needs to share or receive — referrals, outcome reports, grant-cadence submissions, VBC reporting templates.
     - **Partner side:** Partner specifies the protocol, the directory structure, the encryption requirements at rest, and the rotation cadence.
     - **Substrate side:** Cena writes / reads file drops on the partner's specified schedule; data is encrypted at rest in the partner-specified storage; audit-trail entries log every read/write.

  3. **Partner data warehouse connection.**
     - **Pattern:** Direct connection to the partner's existing data warehouse for reporting-cadence pulls or pushes — daily / weekly / monthly / quarterly artifacts the partner's reporting team consumes.
     - **Partner side:** Partner-IT specifies the warehouse vendor (Snowflake / BigQuery / Redshift / on-prem / partner-specified) and the connection posture (read-only access, scoped views, partner-side credentials).
     - **Substrate side:** Cena meets the partner's warehouse-vendor connection requirements; queries are scoped to the program's data context; pulls/pushes are logged in the audit trail.
     - **No claim** about specific warehouse vendor certification — the pattern works against any standard SQL-warehouse with a partner-controlled connection posture.

- Each sub-section uses voice.md §2 substrate hub sub-pages register: factual, evaluator-respecting, partner-protagonist frame.
- Cross-link to §8 CTA (NDA-room) for per-pattern protocol-detail specifics that don't ship publicly (specific FHIR resource scopes Cena consumes, specific SFTP protocol versions Cena supports, specific data warehouse vendors Cena has been deployed against).

**What this section must not do:**
- Name specific EHR vendors as "supported" or "certified" — *"works with Epic," "Cerner-supported," "Athena-tested"* are MUST-NOT-SAY per HDG §3.4 + sign-off list row 8.
- Name specific data warehouse vendors as "supported" or "certified" — *"Snowflake-certified partner," "BigQuery-validated"* are MUST-NOT-SAY (same shape as the EHR claim).
- Name specific cloud vendors anywhere in the patterns (Google Cloud, AWS, Azure on Cena's side; *"AWS-hosted partner warehouse,"* *"Azure-native integration"* on the partner's side) — HDG §7 + sign-off list row 3 default. Name the *pattern* and what the substrate does against it; the vendor names belong in the NDA room.
- Use *"out-of-the-box," "drop-in," "plug-and-play," "ready-to-deploy connector," "marketplace integration"* — voice.md §2 + §4 forbidden.
- Use *"comprehensive integration matrix"* or any list-of-named-EHRs / list-of-named-warehouses — the temptation to enumerate vendor compatibility is the failure mode HDG §3.4 + sign-off list row 8 is built to block.
- Claim a specific integration is "live in production at [partner]" — partner-deployment-specific claims attach to the partner's deployment, not to Cena as a vendor. The page describes the pattern; specific live deployments route to the NDA room and require partner-comms clearance.

**Required claims:**
- "FHIR R4 endpoint integration: Cena's substrate consumes the FHIR R4 endpoints the partner's EHR exposes, scoped to the program's clinical context." **Citation source:** HL7 FHIR R4 standard + Cena-architecture canon. Cross-reference to §2 HL7 citation.
- "File drop / secure file transfer: SFTP or partner-specified protocol for batch data." **Citation source:** Cena-architecture canon per citation spec §2(b).
- "Partner data warehouse connection: direct connection to the partner's existing data warehouse for reporting-cadence pulls or pushes." **Citation source:** Cena-architecture canon per citation spec §2(b).

**Required proof / artifacts:**
- Three parallel-structure sub-sections — visual signals categorical coverage without naming specific vendors.
- Cross-link to §8 CTA (NDA-room) for per-pattern protocol-detail specifics.

**Voice cues:**
- Partner-protagonist frame holds across all three patterns: *"the partner specifies," "the partner controls," "Cena meets."* This is the voice mechanic that keeps the page from collapsing into vendor-portal register.
- Each pattern's third bullet ("no claim about specific [vendor] certification") is the page's load-bearing discipline made explicit. The technical-evaluator reader who sees this discipline will read the rest of the page as defensible.
- RFP-response register: dense, specific, factual. The reader is here because they need to answer their internal IT review's questions; give them what they need.

**Forbidden phrasings (this section):**
- "works with Epic" / "Cerner-supported" / "Athena-tested" / "MEDITECH-integrated" / "Allscripts-certified" / "Snowflake-certified partner" / "BigQuery-validated" / "AWS-hosted" / "Azure-native" / "out-of-the-box" / "drop-in" / "plug-and-play" / "ready-to-deploy connector" / "marketplace integration" / "comprehensive integration matrix" / "supported EHRs include" / "validated against" / "live in production at [partner]" — per HDG §3.4 + §7 + sign-off list row 8.

**Lens-specific notes:**
- HDG (primary): Per HDG §3.4 + sign-off list row 8 + §7 — all named-vendor claims are MUST-NOT-SAY. The pattern-level framing (FHIR R4, file drops, partner data warehouse) is the safe altitude.
- CTA: Verify each pattern is implemented in current Spark + substrate canon. If FHIR R4 endpoint integration is not yet live in any partner deployment, hedge the pattern claim to "designed-for"; if file drop / partner warehouse patterns are aspirational vs. live, hedge accordingly. Per HDG packet §8 future watchlist.
- PLP: SFTP first-use expansion if used in body prose; FHIR / EHR continue from §1 expansions.
- BV: Three-parallel-pattern structure is the page's structural argument at this section. Voice does not have to claim "we support multiple integration patterns" — the structure shows it.

---

### Section 5: Reasoning architecture summary

**Heading:** *"How the substrate reasons."* H2; anchor `#reasoning-summary`.
**Position:** Section 5, sub-page spine per IA §4 hub-aware customization. Indexes the hub's Section 4 (Reasoning architecture); this sub-page version is a focused summary that the technical-evaluator reader needs at the data-architecture altitude.
**Length / shape:** ~150-220 words. 1-2 paragraphs. Shorter than the hub's reasoning section (which is ~200-280 words) because this is the integration-page summary; the hub carries the canonical treatment.

**What this section must do:**
- Restate the vendor-independence stance at the integration-page altitude: *"The substrate's reasoning architecture is model-agnostic by design: memory, tools, and context are Cena-owned; the underlying model is swappable without re-engineering the integration surfaces or breaking the audit trail."* Same architectural-intent framing as the hub but oriented toward what the technical-evaluator cares about — integration durability across model swaps.
- Name what's Cena-owned (memory, tools, context) vs. swappable (the underlying model).
- Audit-trail integrity holds across model swap — cross-link to hub `#provenance` + `/provenance-and-accountability` sub-page.
- Cross-link to hub Section 4 (`#reasoning`) for the full architectural treatment.
- Route model-specific specifications + model-evaluation criteria to NDA room per HDG §3.5.

**What this section must not do:**
- Name model vendors (Anthropic, OpenAI, Google, Claude, GPT) — HDG sign-off list row 3 default + §7 explicit.
- Claim live multi-vendor model routing today — HDG §4 cross-cutting "Multi-vendor model routing as live: HEDGE." Phrase as architectural intent, not operational reality.
- Use "AI" as standalone subject ("AI processes the data," "AI makes the recommendation") — voice.md §4 + §2 forbidden. Use "the substrate" or "the reasoning service."
- Use *"agentic," "autonomous AI," "self-improving model," "next-generation AI"* — vendor-marketing register that triggers technical-evaluator discount reflex.
- Duplicate the hub Section 4 treatment — this sub-page summary references the hub for the full treatment.

**Required claims:**
- "Model-agnostic by design: memory, tools, and context are Cena-owned; the underlying model is swappable without re-engineering the integration surfaces or breaking the audit trail." **Citation source:** Vault-entity reference per citation spec §2(b) worked example — `ava.md` vendor-independence stance.
- "Audit-trail integrity holds across model swap." **Citation source:** Substrate-architecture canon + cross-link to `#provenance`.
- Model-specific specifications route to NDA room. **Citation source:** Cross-link to §8 CTA + HDG packet §3.5 (NDA room contents).

**Required proof / artifacts:**
- No diagram (the §3 data-flow diagram does the architectural visual work).
- Cross-link to hub Section 4 (`#reasoning`) for full treatment.
- Cross-link to `/provenance-and-accountability` (audit-trail integrity across model swap).

**Voice cues:**
- Architectural-intent voice: vendor-independence reads as architectural fact, not aspirational hedge. If the paragraph reads as "we're not locked in (we promise)," rewrite to structural fact.
- Integration-page summary register: this is the cross-reference, not the canonical treatment. Keep brief; let the hub carry the depth.

**Forbidden phrasings (this section):**
- "Anthropic" / "OpenAI" / "Vertex AI" / "Google AI" / "Claude" / "GPT" (any vendor or model brand) / "agentic" / "autonomous AI" / "self-improving model" / "next-generation AI" / "AI does the diagnosis" / "AI processes" (standalone subject) / "powerful AI" / "advanced reasoning" / "cutting-edge model" / "state-of-the-art" — per HDG §7 + voice.md §4.

**Lens-specific notes:**
- HDG: Vendor-not-named is the §7 default. Cross-cutting claim §4 "Multi-vendor model routing as live: HEDGE" applies — phrase as architectural intent.
- CTA: Verify vendor-independence claim against `ava.md` + current Spark canon. The architectural intent is documented; live operational reality of "model swap without re-engineering" may not be exercised today. Hedge prose to "architected for" / "by design" where the operational claim would overreach.
- BV: This is the technical-evaluator's quote-back-to-the-CIO section, sub-page version. The hub does the heavy lift; this section confirms the architectural truth holds at the integration-page altitude.

---

### Section 6: Security posture (cross-link, not duplicate)

**Heading:** *"Security posture."* H2; anchor `#security-summary`.
**Position:** Section 6, sub-page spine per IA §4 hub-aware customization. **Cross-links to the hub's Section 6 (Data handling + security posture); does NOT duplicate it.**
**Length / shape:** ~150-220 words. 1 short paragraph + bulleted summary + cross-link to hub.

**What this section must do:**
- Open with cross-link framing: *"Cena's security posture is treated in full on the [How the substrate works hub, Section 6](../how-the-substrate-works/#security). This section summarizes the integration-relevant posture; the hub carries the full claim set."*
- Name the integration-relevant security primitives in 4-5 short bullets, each cross-linking back to the hub's §6 for the full HDG-recommended phrasing:
  1. **BAA-architected** — Cena is built to operate as a business associate when a partner contracts us to handle PHI on their behalf. BAAs are executed partner-by-partner. *(Cross-link: hub §6.)* First use of BAA expands to *"BAA (Business Associate Agreement)"* per voice.md §11 floor.
  2. **Encrypted in transit (TLS)** between partner systems and Cena's substrate. Encrypted at rest using industry-standard methods aligned with HIPAA Security Rule expectations. Specifics defer to NDA room. *(Cross-link: hub §6.)*
  3. **Tenant-isolated per partner program; role-scoped per care-team role.** Each partner program runs in its own data partition; each role on a care team sees what their job requires — by enforcement, not by policy. *(Cross-link: hub §6.)*
  4. **Audit events automatic** — every clinical action writes an audit-trail entry. Retained per the partner program's contractual retention requirements. *(Cross-link: hub §6 + `/sample-audit-trail`.)*
  5. **BAA-eligible cloud infrastructure with executed BAAs across the vendor stack.** Vendor-stack specifics route to NDA room. *(Cross-link: hub §6 + §8 NDA-room CTA.)* — **Launch-gating partner-input #2 (US-only data residency)** — hedged default ships now per outstanding-partner-input.md item #2; upgrade to "data resides exclusively in US-based BAA-eligible infrastructure" gated on Andrey end-to-end vendor-stack verification.
- First use of HIPAA expands to *"HIPAA (Health Insurance Portability and Accountability Act)"* per voice.md §11 floor. First use of PHI expands to *"PHI (patient health information)"* per voice.md §11.
- Close with cross-link to hub §6 for full claim set + per-claim HDG-recommended phrasings.

**What this section must not do:**
- Duplicate the hub's §6 in full — this is a summary section cross-linking back. Per define-once.md applied at the doc-class layer: hub §6 is canonical; this section references.
- Claim "HIPAA-compliant" / "HIPAA-certified" — HDG §5 MUST-NOT-SAY noun-phrase-HIPAA prohibition.
- Claim "BAA in place" (universal or partner-specific) — HDG §6 MUST-NOT-SAY without explicit partner-comms clearance.
- Specify cipher / key-length / cryptographic-algorithm specifics — HDG §3.1 explicit. Defer to NDA room. No *"AES-256," "RSA-4096," "elliptic-curve," "FIPS-validated."*
- Claim *"US-only data residency"* before Andrey verifies end-to-end across the vendor stack — outstanding-partner-input.md item #2 explicit: claim does NOT ship until verification.
- Use *"bank-grade encryption," "military-grade security," "fortress-class infrastructure"* — voice.md §2 + §4 forbidden.
- Name cloud vendors — HDG §7 default + sign-off list row 3.

**Required claims:**
- "BAA-architected; BAAs executed partner-by-partner." **Citation source:** HDG §3.1 + §6 + sign-off list row 2 recommended phrasing. Cena-architecture canon.
- "Encrypted in transit (TLS); encrypted at rest using industry-standard methods aligned with HIPAA Security Rule expectations." **Citation source:** HDG §3.1 SAFE-with-hedge recommended phrasing.
- "Tenant-isolated per partner program; role-scoped per care-team role." **Citation source:** HDG §3.1 + §4 cross-cutting SAFE — verifiable against `ava.md`.
- "Audit events captured automatically; retained per the partner program's contractual retention requirements." **Citation source:** HDG §3.1 HEDGE recommended phrasing.
- "BAA-eligible cloud infrastructure with executed BAAs across the vendor stack." **Citation source:** HDG §3.1 + outstanding-partner-input.md item #2 hedged default. **Launch-gating partner-input #2 (US-only data residency)** — hedged default at this sub-page altitude; upgrade gated on Andrey verification.

**Required proof / artifacts:**
- Bulleted summary of 4-5 integration-relevant security primitives.
- Cross-link to hub §6 (full claim set) at section open and section close.
- Cross-link to §8 CTA (NDA room for specifics).

**Voice cues:**
- Summary-cross-link register: this section's voice contract is *"the hub carries the canonical treatment; here's what's integration-relevant; the rest lives in the hub."* If the section feels like it should be longer, it should be a hub edit, not an integration-page expansion.
- Naming what's HEDGED openly is more credible than asserting a specific number any partner contract may later require different — same discipline as the hub.

**Forbidden phrasings (this section):**
- "HIPAA-compliant" / "HIPAA-certified" / "fully HIPAA-compliant" / "BAA in place" / "bank-grade" / "military-grade" / "fortress" / "AES-256" / "RSA-4096" / "FIPS-validated" / "256-bit encryption" / "HITRUST-certified" / "SOC 2 Type II" / "ISO 27001" / "PCI-DSS" / "GDPR-compliant" / "US-only data residency" (until Andrey verifies) / specific retention period claims / specific cloud-vendor names — per HDG §3.1 + §4 + §5 + §6 + §7 + outstanding-partner-input.md item #2.

**Lens-specific notes:**
- HDG (primary): This is a summary-cross-link section. Recommended phrasings come from the hub §6 (which itself comes from HDG §3.1). Do not exceed.
- HDG: Item #2 (US-only data residency) hedged default ships at this altitude — same hedge as the hub.
- CTA: Verify the integration-relevant security claims are operationally true. Hedge to "designed-in" where live implementation diverges.
- PLP: BAA, HIPAA, PHI, TLS first-use expansion per voice.md §11.

---

### Section 7: What this page does not cover (non-scope sub-band)

**Heading:** *"What this page does not cover."* H2; anchor `#non-scope-summary`.
**Position:** Section 7, sub-page spine per IA §4 hub-aware customization. Sub-page non-scope band — references the hub's full non-scope band rather than duplicating.
**Length / shape:** ~150-200 words. 1 short intro paragraph + 4 explicit non-scope items.

**What this section must do:**
- Open with framing: *"Naming what this page does not cover is part of the contract. The substrate has a broader non-scope band treated in full on the [How the substrate works hub, Section 7](../how-the-substrate-works/#scope); this section names what is specifically out of scope for the integration-and-data-architecture view."*
- Enumerate page-level non-scope items, each architecturally-grounded:
  1. **No specific EHR vendor certifications claimed.** Cena does not claim "Epic-certified," "approved Epic partner," "Cerner-validated," "Athena-tested," or any specific-EHR-vendor certification. The substrate's integration posture is built against FHIR R4 and partner-specified API conventions; specific EHR-deployment-attached claims route to the partner deployment, not to Cena as a vendor.
  2. **No model-vendor disclosed publicly.** The reasoning architecture is vendor-independent by design; the underlying model vendor is not named on the public surface. Model-specific specifications route to the NDA room. *(Cross-link: §5 + hub §4.)*
  3. **No partner data warehouse vendor lock-in.** Cena meets the partner's warehouse-vendor connection requirements; does not require migration to a specific warehouse vendor. *(Cross-link: §4 pattern 3.)*
  4. **No regulatory certifications claimed publicly.** Cena is not HIPAA-certified (no such certification exists), HITRUST-certified, or SOC 2 Type II. Cena is architected for HIPAA-regulated workflows; certifications are pursued as partner-volume warrants. *(Cross-link: hub §7 item #6 + HDG §5.)*
- Use voice.md §2 substrate hub sub-pages register: factual, evaluator-respecting; framing each non-scope item as a boundary, not a hedge or apology.
- Cross-link to hub §7 (full 6-item non-scope band) for the broader treatment.

**What this section must not do:**
- Duplicate hub §7 in full — this is a page-level non-scope summary cross-linking back. The hub carries the 6-item canonical band; this section names what's integration-page-specific.
- Hedge non-scope items with "currently" or "yet" — the boundaries are architectural, not roadmap. (Exception: item #4 may use "as partner-volume warrants" for certifications, matching hub §7 item #6.)
- Use *"we don't claim," "we won't pretend," "rest assured"* — defensive register that signals exactly the anxiety the section disarms. Voice.md §6 forbidden register.
- Frame non-scope as gaps or limitations to be apologized for. The voice contract is "naming non-scope is part of what makes scope believable" — same discipline as the hub.

**Required claims:**
- "No specific EHR vendor certifications claimed; integration posture built against FHIR R4 and partner-specified API conventions." **Citation source:** Cross-link to §4 pattern 1 + HDG §3.4 + sign-off list row 8.
- "Reasoning architecture vendor-independent by design; model vendor not named publicly." **Citation source:** Cross-link to §5 + hub §4 + HDG §7.
- "No partner data warehouse vendor lock-in." **Citation source:** Cross-link to §4 pattern 3.
- "Cena is not HIPAA-certified, HITRUST-certified, or SOC 2 Type II." **Citation source:** HDG §4 + §5 MUST-NOT-SAY discipline made explicit. Same self-attesting and credibility-positive move as the hub §7 item #6.

**Required proof / artifacts:**
- Parallel-structure cards or band layout for the 4 non-scope items.
- Cross-link to hub §7 for full 6-item non-scope band.

**Voice cues:**
- Non-scope-as-credibility-asset register, same as the hub. Item #4 (no false certifications claimed) is the credibility-load-bearing single statement at the page-level altitude — name HIPAA-noun-phrase as a thing Cena does not claim, and the rest of what Cena does claim becomes believable. Per HDG §5 + §6.
- Structural-fact framing, not defensive-reassurance. *"No specific EHR vendor certifications claimed"* is structural; *"Don't worry, we're working on certifications"* is defensive and signals exactly the certification anxiety.

**Forbidden phrasings (this section):**
- "we don't claim" / "we won't pretend" / "rest assured" / "still valued" / "human-centered AI" / "currently does not" (hedges architectural boundary as roadmap) / "yet to be implemented" / "not at this time" / "limitation" / "gap" / "shortcoming" / "coming soon" — per voice.md §6 + HDG.

**Lens-specific notes:**
- HDG (primary): This section's recommended phrasings come from HDG §3.4 + §4 + §5 + §7. Do not exceed.
- HDG: Item #4 (no certifications claimed) per HDG §5 + §4 cross-cutting MUST-NOT-SAY discipline. Non-negotiable framing.
- CTA: Verify each non-scope claim against current Spark + substrate canon. The architectural framing applies even where operational reality is still maturing.
- BV: Section is shorter than hub §7 by design — sub-page summary cross-linking back. Resist the temptation to expand.

---

### Section 8: CTA — Request the security packet (NDA-gated documentation room)

**Heading:** No H2. CTA copy IS the heading-equivalent.
**Position:** Section 8 of canonical template per IA §4 hub-aware customization + §9 row 5. Single primary CTA, same as hub.
**Length / shape:** 1-line CTA + form fields list + NDA-room landing link. No surrounding marketing prose.

**Canonical CTA copy** (per IA §9 + voice.md §9 "NDA-gated documentation room"):
> *"Request the security packet — NDA-gated documentation room with architecture diagrams, security control matrices, BAA template, vendor stack disclosures, audit-log schema, integration architecture detail, and sample provenance artifacts."*

The phrase *"integration architecture detail"* is added at this sub-page CTA (vs. the hub CTA) to signal the integration-specific NDA-room contents for the technical-evaluator deep-landed visitor.

**Form fields** (per IA §9 row 5 + HDG §3.5):
- Name
- Role
- Partner-org
- BAA-counsel contact

**What this section must do:**
- Use the canonical CTA verbatim or near-verbatim per IA §9 row 5 + voice.md §9.
- List categories of what's in the room per HDG §3.5 sign-off list row 5 categories-only-public discipline. Add "integration architecture detail" to the sub-page-specific category list (vs. hub).
- Form gate: name, role, partner-org, BAA-counsel contact. Same as hub — partner-org + BAA-counsel are the meaningful gate.
- "Security packet" is procurement-language the technical evaluator and BAA-counsel both recognize. Per voice.md §9 explicit.
- The NDA gate is named, not hidden; signals Cena treats partner-org confidentiality as the norm. Per voice.md §9.
- Position as single primary CTA.

**What this section must not do:**
- Use SaaS-vendor CTA register: *"Schedule a demo," "Request a demo," "Get started," "Book a call," "See it in action," "Talk to sales"* — voice.md §9 + BV findings.
- Show the artifacts themselves (architecture diagram with vendor-stack labels, BAA template, audit-log schema, integration architecture detail) on the public surface — HDG §3.5 + sign-off list row 5 categories-only-public.
- Claim "Cena has signed NDAs with multiple partners" — HDG §3.5 MUST-NOT-SAY.
- Skip the partner-org + BAA-counsel fields — meaningful gate.
- Use exclamation marks or imperatives — voice.md §1 quiet-competence principle.

**Required claims:**
- "NDA-gated documentation room with [categories including integration architecture detail]." **Citation source:** HDG §3.5 + sign-off list row 5 categories-only-public phrasing.
- Form fields gate access. **Citation source:** Cena-architecture canon + HDG §3.5 row 3.

**Required proof / artifacts:**
- Form embed (name + role + partner-org + BAA-counsel-contact fields). No fields beyond these per HDG §3.5.
- Routing to NDA-room landing page upon form submission.

**Voice cues:**
- "Security packet" is the procurement-recognized term; voice does not reinvent it.
- Naming the NDA gate (rather than hiding it) signals Cena treats partner confidentiality as norm — voice.md §9.
- Single primary CTA on the sub-page; matches hub CTA shape.

**Forbidden phrasings (this section):**
- "Schedule a demo" / "Request a demo" / "Get started" / "Book a call" / "See it in action" / "Talk to sales" / "Contact sales" / "Let's chat" / "Ready to transform" / "Get the full story" / "Unlock the packet" / "Discover what's inside" — voice.md §9 + BV findings.

**Lens-specific notes:**
- HDG: Canonical CTA phrasing per HDG §3.5 + sign-off list row 5. The categories list adds *"integration architecture detail"* at this sub-page; confirm with HDG that the addition is approved (this brief proposes the addition; HDG sign-off list row 5 names the canonical hub categories — the integration-page addition is a sub-page-specific extension).
- CTA: Verify the NDA-room landing page is built and routing works before publish.
- BV: "Security packet" register; do not soften to "documentation overview" or "info pack."

---

### Section 9: Wayfinding band — "See Cena from another angle"

**Heading:** *"See Cena from another angle."* H2 or quiet section divider per voice.md §6 canonical pattern phrase.
**Position:** Final section on page, after CTA. Pattern per IA §4 (per Aaron Q4 resolution) + voice.md §6.
**Length / shape:** 5-line pattern block. Each line: *"If you're [role-action] → [surface]."*

**Per voice.md §6 per-surface calibration for `/how-the-substrate-works/integration`:** This is the technical-evaluator deep-link sub-page; wayfinding band routes outward to other targeted landings + reference program. Omits self-link (the reader is on the integration sub-page).

**Canonical patterns (per voice.md §6):**
- *"If you're translating this internally → For clinical leaders."*
- *"If you're scoping the contract → For program economics."*
- *"If you're reviewing for compliance → How the substrate works."* (hub — the legal-compliance side of the same hub the reader deep-landed from)
- *"If you're checking a quote → For comms."*
- *"If you're looking for a working example → Reference program."*

**What this section must do:**
- Use voice.md §6 canonical pattern phrase: *"See Cena from another angle."*
- Verb-first role-actions; arrow (→) does navigational work; voice does not narrate the click.
- 5-line pattern band. The "If you're reviewing for compliance" link routes to the hub (`/how-the-substrate-works`) because the legal-compliance reading path lives at the hub's `#provenance` section + the `/provenance-and-accountability` sub-page. The technical-evaluator sub-page does not include a "vetting data architecture" self-link (the reader is on the sub-page).

**What this section must not do:**
- Use *"click here" / "learn more" / "explore" / "discover"* — voice.md §6 explicit forbidden.
- Include the *"If you're vetting data architecture → Integration"* self-link (the reader is on this page).
- Use exclamation marks or imperatives.
- Frame as "Related pages" or "You might also like" — vendor-CMS register.

**Required claims:**
- None. Wayfinding band carries no positioning claims; pure navigation per voice.md §6.

**Required proof / artifacts:**
- Links to:
  - `/for-clinical-leaders` ("If you're translating this internally")
  - `/for-program-economics` ("If you're scoping the contract")
  - `/how-the-substrate-works` ("If you're reviewing for compliance")
  - `/for-comms` ("If you're checking a quote")
  - `/reference-program` ("If you're looking for a working example")

**Voice cues:**
- Wayfinding band voice is invitational, not directive per voice.md §6. The arrow does the work; voice names the reader's job.
- Sub-page calibration: omit the self-link; the legal-compliance routing goes to the hub (which serves the legal-compliance reader's reading path).

**Forbidden phrasings (this section):**
- "click here" / "learn more" / "explore" / "discover" / "related pages" / "you might also like" / "check out" / "see more" — voice.md §6.

**Lens-specific notes:**
- BV: Sub-page wayfinding band omits self-link per voice.md §6 calibration. Confirm with brief lead whether the *"reviewing for compliance"* link routes to the hub (recommended) or to `/provenance-and-accountability` (sub-page direct). Recommendation: hub — gives the legal-compliance reader the broader landing.

---

## Cross-section concerns

- **HDG packet phrasings are the CEILING on this page.** Every sentence in HDG packet §3.4 (integration sub-page review) + §3.1 (security overlap) + §3.5 (NDA-room teaser) + §4 (cross-cutting claims) + §5 (noun-phrase-HIPAA) + §7 (vendor-stack disclosure) has a recommended phrasing; this brief inherits those as the ceiling. No copy on the page exceeds HDG recommended phrasing without a separate review pass.
- **Documentation-register, not pitch-register, holds across every section.** The voice.md §2 substrate hub sub-pages block is canonical: *"factual, evaluator-respecting; no marketing inflection; reads as documentation, not pitch."* The reader test: would a CMIO or VP IT read this and think "RFP response written by someone who's been through dozens of vendor RFPs" or "marketing site that mentions FHIR"?
- **First-use acronym expansion is non-negotiable.** FHIR, EHR, API, TLS, BAA, PHI, HIPAA, HL7, SFTP (if used), OAuth (common technical vocabulary; expansion optional but recommended for manager-tier reader), SAML (same). The technical-evaluator audience tolerates acronym-density; the manager-tier reader (CMIO, VP IT) who isn't day-to-day deep does not, and they may be in the reading path. Expansion is courtesy that costs nothing.
- **Vendor-not-named is the discipline.** Google Cloud, Vertex AI, Anthropic, OpenAI, Claude, GPT, AWS, Azure — none ship on the public sub-page. HDG §7 + sign-off list row 3 default holds. Vendor-stack specifics route to the NDA room. **Specific EHR-vendor names (Epic, Cerner, Athena, MEDITECH, Allscripts) and specific data warehouse names (Snowflake, BigQuery, Redshift) also do not ship.** The page describes the *pattern* and *posture*; vendor specifics belong behind NDA or attach to the partner's deployment.
- **Specific named-EHR certification claims do NOT ship.** Per Phase 1 brief must-not-say + HDG §3.4 + sign-off list row 8: "Epic-certified," "approved Epic partner," "live Athena API," "Cerner-validated" are MUST-NOT-SAY at launch. The Accenture-app flag from 2026-05-26 applies. Generic FHIR R4 + file drops + API conventions is the safe altitude.
- **Item #2 (US-only data residency) directly affects this page.** Hedged default at §6: *"BAA-eligible cloud infrastructure with executed BAAs across the vendor stack."* No US-only-residency claim ships until Andrey confirms end-to-end across full vendor stack including all inference paths.
- **The H1's partner-possessive structure is the page's voice contract.** *"Built to connect to what you already run."* The partner is the protagonist; the partner's systems are the subject. Every sentence about integration must hold this frame. Sentences that center Cena as the protagonist ("our integration platform connects to your EHR") collapse the positioning.
- **No outcome percentages, dollar figures, or X%-reduction-in-Y constructions anywhere on this page** per voice.md §5 + citation spec §4. Legacy stale claims (30% readmissions / 1.8% HbA1c / 85% adherence / $3,200 savings / "60-90 day implementation") are explicitly off-limits.
- **Forbidden-phrasings watchlist density is high but lower than hub §6.** This sub-page concentrates on integration-specific vendor-name failure shapes; security-specific failure shapes (HIPAA-compliant / bank-grade encryption / etc.) appear at the §6 summary level only, cross-linking to hub for full treatment.
- **Section ordering hard-locked by IA §4 hub-aware customization.** Hero (§1) → Integration overview expects-and-doesnt (§2) → Data flow deeper (§3) → Specific integration patterns (§4) → Reasoning architecture summary (§5) → Security posture cross-link (§6) → Non-scope sub-band (§7) → CTA (§8) → Wayfinding band (§9). Do not reorder.
- **Cross-link discipline: hub is canonical; sub-page references.** The integration sub-page cross-links to the hub's §6 (security) and §7 (non-scope band) rather than duplicating. Per [`define-once.md`](../../../.claude/rules/define-once.md) applied at the doc-class layer — the hub holds canonical depth on shared topics; the sub-page adds integration-specific depth on the technical-evaluator's lane.
- **Voice register asymmetry from siblings.** This sub-page is documentation-not-pitch register, partner-possessive frame, technical-evaluator-vocabulary-tuned. The hub is the cross-cutting evaluation-spine (technical-evaluator + legal-compliance co-primary); this sub-page is the technical-evaluator-primary deep-link. The voice is the same documentation register at a different audience-tuning.
- **Manager-tier reader is in the reading path.** Acronym expansion floor + integration-primitives in concrete terms (not abstract framings) + security-marketing register off = the page lands for a CIO / VP IT reader who got forwarded the link, even if they're not day-to-day deep in FHIR.

---

## Citation hotspots

Per citation discipline spec §3 (Claim-hotspot inventory) + §8 (HDG handoff sequence) + §10 (claim-citation reflex):

- **Section 1: H1 + 2-3 sentence framing.** Sub-page-headline locked; positioning copy carries no quantitative citation. Cross-link to hub `#scope` for non-scope claims.
- **Section 2: Integration overview (expects | does NOT require).** "FHIR R4" reference is a primary-source citation candidate — HL7 International publishes the FHIR R4 standard. Citation source: HL7 FHIR R4 standard per citation spec §2 row "Statutory / regulatory" or "Cena-specific architecture" depending on framing. Format per citation spec §5. Cena-architecture claims for what the substrate connects to: vault-entity reference per citation spec §2(b) worked example.
- **Section 3: Data flow deeper.** Per-stage claims: FHIR/file-drop/API integration mechanism (Cena-architecture canon); encrypted in transit TLS (HDG §3.1 SAFE); tenant-isolation + role-scoping (HDG §3.1 SAFE — verifiable against `ava.md`); accountable-clinician approval (HDG sign-off list row 4); audit-trail entry per clinical action (Appendix C #1, Cena-architecture canon). Citation sources: Cena-architecture canon + HDG packet SAFE/HEDGE phrasings.
- **Section 4: Specific integration patterns.** FHIR R4 + SFTP + partner data warehouse connection claims: Cena-architecture canon per citation spec §2(b). HL7 FHIR R4 standard reference (same as §2). No quantitative claims; structural-architectural framing throughout.
- **Section 5: Reasoning architecture summary.** Vendor-independence stance: vault-entity reference per citation spec §2(b) worked example — `ava.md` vendor-independence stance.
- **Section 6: Security posture (cross-link).** All claims here are cross-references to hub §6 (which itself cites HDG §3.1 SAFE/HEDGE recommended phrasings). The sub-page does not introduce new citations; it summarizes and references. **Launch-gating partner-input #2 (US-only data residency)** — hedged default at this sub-page altitude per outstanding-partner-input.md item #2.
- **Section 7: Non-scope sub-band.** Sub-page-specific non-scope claims (no EHR vendor certifications / no model vendor named / no data warehouse vendor lock-in / no regulatory certifications claimed). Citation sources: HDG §3.4 + §4 + §5 + §7 + sign-off list row 8 MUST-NOT-SAY discipline made explicit + cross-link to hub §7.
- **Section 8: CTA.** NDA-gated documentation room categories list. Citation source: HDG §3.5 sign-off list row 5 categories-only-public phrasing. The page adds *"integration architecture detail"* to the sub-page category list; confirm with HDG sign-off list row 5 whether the addition is approved (this brief proposes it).

**Legacy stale claims watchlist** (per citation spec §4): 30% readmissions, 1.8% HbA1c, 85% adherence, $3,200 savings, "60-90 day implementation," "36% gross margins," "$200 PMPM" — explicitly off-limits. Watch for legacy `strategy/CLAUDE.md` proof-point-library leakage; ignore that file's "Proof Point Library" section per citation spec §4.

**HDG handoff sequence (citation spec §8) applies to §§2, 3, 6, 7.** Every HIPAA / PHI / BAA / encryption / access-control / audit-log / non-scope-architectural claim on this page routes through HDG-recommended phrasing as ceiling. Per the 2026-06-08 status update at the top of the HDG packet, the packet was not routed to Vanessa for sign-off; the recommended phrasings are the proceed-as-approved default for design + build. Launch gates on outstanding-partner-input.md item #2 (US-only data residency).

---

## Outstanding partner-input touchpoints

Per [outstanding-partner-input.md](../outstanding-partner-input.md), **one of four launch-gating items directly touches this page**:

**Item #2 — US-only data residency claim verification** (Andrey / end-to-end vendor-stack verification):

- **Touchpoint:** Section 6 (Security posture cross-link), bullet 5 — "BAA-eligible cloud infrastructure with executed BAAs across the vendor stack."
- **Hedged default that ships now:** *"BAA-eligible cloud infrastructure with executed BAAs across the vendor stack."* Per HDG §3.1 + outstanding-partner-input.md item #2 hedged default. No US-only-residency claim ships until Andrey confirms end-to-end across full vendor stack including all inference paths (model vendor, vector store, embedding service, etc.).
- **Upgraded version that ships when input lands:** *"Data resides exclusively in US-based BAA-eligible infrastructure across the full vendor stack."* (Or similar verifiable phrasing.) Strict-superset edit per outstanding-partner-input.md §"How this list resolves."
- **UConn BAA §13 implication:** UConn BAA carries an offshore-PHI ban per HDG packet §3.1 + 2026-04-29 Dieckhaus kickoff dispatch reference. If US-only residency cannot be claimed, the UConn partnership may be contractually constrained even if partner-comms-clearance arrives.

**Items #1 (UConn-named pilot reference), #3 (SHA-256 hash chain), #4 (five-categories-blocked)** do not directly touch this page:
- Item #1 (UConn-named) lives on `/reference-program` headline + homepage proof strip; the integration sub-page does not name UConn directly.
- Item #3 (SHA-256) lives on the hub `#provenance` band + `/provenance-and-accountability` sub-page; the integration sub-page references audit-trail entries (via cross-link to `/sample-audit-trail`) without naming the cryptographic algorithm.
- Item #4 (five-categories-blocked) lives on the hub `#scope` non-scope band; the integration sub-page's §7 non-scope sub-band cross-links to the hub but does not re-state the five-categories claim.

---

## Expert conflicts resolved

**Honest disclosure:** No literal 2+ expert review-pass conflicts existed in this synthesis run — this brief was authored directly against the canonical specs (IA, voice.md, citation discipline, HDG packet, Phase 1 brief). The following items reflect *anticipated* cross-lens decisions and brief-internal calls that needed resolution:

- **Section 2 (Integration overview) vs. Section 4 (Specific integration patterns) — what's the right altitude split between the two?** Both legitimately cover integration mechanisms. **Resolution:** Section 2 is the boundary-discipline view (what's expected vs. what's not required, in 4-5 items per side); Section 4 is the per-pattern depth (FHIR R4 + file drop + partner warehouse connection, ~80-120 words per pattern with partner-side / substrate-side breakdown). The two sections complement: §2 carries the boundary; §4 carries the implementation pattern depth. Both ship; no duplication.
- **Section 6 (Security posture) — duplicate hub §6 or cross-link?** Per define-once.md applied at the doc-class layer: the hub carries canonical depth on shared topics; the sub-page references. **Resolution:** Cross-link. The sub-page §6 is a summary-cross-link section ~150-220 words, naming the integration-relevant security primitives with cross-links back to the hub §6 for full HDG-recommended phrasings. The hub holds the canonical claim set; the sub-page does not duplicate.
- **Section 7 (Non-scope sub-band) — duplicate hub §7 or cross-link?** Same pattern as §6. **Resolution:** Sub-page non-scope sub-band is page-level (4 items oriented to the integration sub-page reader: no EHR vendor certifications / no model vendor named / no warehouse vendor lock-in / no regulatory certifications claimed). Hub §7 has 6 items including broader scope-of-substrate claims (clinician displacement, patient relationship ownership, etc.) that the integration page references rather than re-states.
- **Section 4 (Specific integration patterns) — name HL7 FHIR R4 specifically or hedge to "FHIR"?** HDG §3.4 + sign-off list row 8 approves generic FHIR-endpoint language. The R4 specification adds technical precision but doesn't change the safety posture. **Resolution:** Name HL7 FHIR R4 explicitly in §2 and §4. The R4 specification is publicly-resolvable, the citation is clean (HL7 International publishes the standard), and the technical-evaluator reader will know what R4 means without expansion. The "version" reference adds credibility without exceeding HDG-cleared altitude.
- **Section 8 (CTA) — add "integration architecture detail" to the NDA-room categories list?** HDG packet §3.5 sign-off list row 5 lists canonical hub categories: *"Architecture diagrams · Security control matrices · BAA template · Vendor stack with executed-BAA disclosure · Audit-log schema · Sample provenance artifacts."* The sub-page is the technical-evaluator deep-link, and "integration architecture detail" is a sub-page-specific category extension. **Resolution:** Propose the addition in this brief; flag for HDG sign-off list row 5 confirmation that the sub-page extension is approved. If HDG holds the row-5 categories as canonical-and-complete, the sub-page CTA reuses the hub list verbatim. Brief recommends the addition because the technical-evaluator deep-landed visitor expects the NDA-room to carry integration-architecture detail; signaling the category-coverage is the credibility move.
- **Section 5 (Reasoning architecture summary) — duplicate or summarize the hub §4?** Same define-once.md pattern as §6 and §7. **Resolution:** Summarize and cross-link. Sub-page §5 is ~150-220 words (vs. hub §4's ~200-280 words), oriented to the technical-evaluator's integration-durability question — model swap does not break audit-trail integrity or break integration surfaces. Hub §4 holds the canonical architectural-intent treatment.

---

## Open questions for Aaron-gate

1. **Section 2 (Integration overview) — name HL7 FHIR R4 explicitly, or hedge to "FHIR"?** Recommendation: name R4 explicitly (citation-clean per HL7 International; technical precision without exceeding HDG-cleared altitude). Confirm — or override if the bare "FHIR" reference reads cleaner without version specificity.

2. **Section 4 (Specific integration patterns) — the partner data warehouse pattern's third bullet ("Partner-IT specifies the warehouse vendor (Snowflake / BigQuery / Redshift / on-prem / partner-specified)"). Naming the warehouse vendors as *examples partners might run* rather than as Cena-validated integrations is the boundary discipline.** Recommendation: name the vendors in the partner-side bullet only, as *examples of what the partner might run*, with no Cena-side claim attached. The partner-protagonist frame makes this safe — the partner runs the warehouse vendor; Cena meets it. Confirm — or override if the listing reads as Cena-side validation despite the partner-protagonist framing.

3. **Section 6 (Security posture) — visual treatment for the 5-bullet integration-relevant security summary?** Bulleted list with cross-link annotations? Two-column band? Recommendation: bulleted list with inline cross-links to hub §6 sections. The summary-cross-link character of the section calls for prose-with-list rather than table-band. Punt visual treatment to Phase 3 HVD if more weight is needed.

4. **Section 7 (Non-scope sub-band) — item #2 ("No model-vendor disclosed publicly") — phrase as *"The reasoning architecture is vendor-independent by design; the underlying model vendor is not named on the public surface"* or as *"Cena does not name the underlying model vendor on the public site"*?** Recommendation: first phrasing (architectural-intent register, partner-protagonist frame). Confirm.

5. **Section 8 (CTA) — propose adding "integration architecture detail" to the NDA-room categories list?** Recommendation: yes. The sub-page is the technical-evaluator deep-link; signaling integration-architecture coverage in the NDA-room is the credibility move. The addition is a sub-page-specific extension to HDG packet §3.5 sign-off list row 5. If HDG holds the row-5 categories as canonical-and-complete, the sub-page CTA reuses the hub list verbatim without the addition.

6. **Section 9 (wayfinding band) — *"If you're reviewing for compliance"* routes to the hub (`/how-the-substrate-works`) rather than to `/provenance-and-accountability` (sub-page direct).** Recommendation: hub — gives the legal-compliance reader the broader landing. Confirm.

7. **Outstanding partner-input item #2 (US-only data residency) — ship the hedged default now, or hold the page from launch until verification lands?** Recommendation per outstanding-partner-input.md discipline + Aaron's 2026-06-07 framing: ship hedged default; launch-gate the site (not the design + build); upgrade to strict-superset version when Andrey's verification lands. Confirm the launch-gating approach (page ships hedged; full launch gated on partner-input resolution).

8. **Length target (1,500-2,500 words) — too tight or about right given the page's technical-evaluator-deep-link role + manager-tier-reader accessibility floor?** Recommendation: the draft target lands in the middle of the range (~2,000 words). Tighter than hub (2,000-3,500), looser than other sub-pages (assumed 1,200-1,800). Confirm — or override if 1,500-2,500 is the wrong shape for the page.

---

## Sign-off

- [ ] Plain Language Positioning
- [ ] Cena Technical Accuracy
- [ ] Healthcare Data Governance
- [ ] Brand Voice Reviewer
- [ ] Aaron-gate
