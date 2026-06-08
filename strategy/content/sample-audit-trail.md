# Content Brief: Sample audit trail

**Path:** `/how-the-substrate-works/sample-audit-trail` · **Status:** Awaiting Aaron-gate · **Date:** 2026-06-08 · **Phase 2, Substep 5**

Section-by-section annotation-pattern brief for the Sample audit trail artifact page. Anchored to [Phase 2 IA spec](../phase-2-information-architecture.md) §8 (full artifact-page spec) + §4 (page treatment) + §3 (headline) + §9 (no-CTA credibility-surface pattern), [voice.md](../../brand/voice.md) §2 (sample audit trail register — artifact voice, voice almost disappears) + §9 (no-CTA pages) + §10 (claim-citation reflex) + §11 (internal-vocab translation), [citation discipline](../citation-discipline-spec.md) §3 (`/sample-audit-trail` annotation + recommendation-lit-citations rows) + §8 (HDG handoff sequence), [HDG packet](../phase-2-hdg-review-packet.md) §3.3 (sample-audit-trail recommended phrasings — CEILING) + §2 row 6 (synthetic-data discipline approved) + §6 (BAA discipline), and [outstanding-partner-input.md](../outstanding-partner-input.md) items #3 (SHA-256 hash chain) + #4 (five-categories-blocked).

---

## At a glance

- **Purpose:** Be the page the IRB liaison closes after reading and replies to the clinical champion *"this looks defensible."* This is the destination of a legal/compliance reading path that started on `/for-clinical-leaders` or `/how-the-substrate-works/provenance-and-accountability`. The reader's action path is offline — close tab, reply to champion. The page exists to make that reply credible.
- **Primary audience:** Legal/compliance + IRB liaisons. Single role. No co-primary audience splitting.
- **Headline:** *"What an audit-ready record looks like."* Locked verbatim per IA §3 + voice.md §2 sample audit trail block.
- **Voice register:** **Artifact voice — voice almost disappears.** The page IS the artifact; copy is annotation. Per voice.md §2 explicit. No marketing inflection; no meta-narration on what the reader is seeing.
- **No CTA on this page.** Per IA §9 credibility-surface pattern + voice.md §9 explicit prohibition + voice.md §2 per-surface taboos. The IRB liaison's path to action is *"close tab, reply to champion's email."* CTA reads as sales pressure on a defensive reader and undercuts the credibility the page is built to carry.
- **HIPAA-adjacent (highest fidelity demand):** **YES.** Per HDG packet §3.3 explicit — this page has the highest fidelity demand on the site. Every annotation must be reviewable as accurate-to-what-the-system-actually-does. HDG packet phrasings in §§3.3 + 3.2 + 5 + 6 are the CEILING.
- **Synthetic-data discipline (absolute):** Sample data is **FULLY SYNTHETIC**. No patient referent. No partner referent. Top-of-page synthetic-data marker is REQUIRED per HDG sign-off list row 6 + §3.3 explicit. The recommendation's peer-reviewed-literature citations are REAL (not invented) per citation spec §3 — the substrate's posture is carried by real citations even on synthetic content. The patient case is fully synthesized; the literature it cites is the discipline.
- **Vendor stack NOT named.** Per HDG sign-off list row 3 + §3.3 + §7 — model-architecture annotation references "the model architecture in use at the time of generation" without naming a specific vendor. Honors the vendor-independence strategic stance and avoids dating the page.
- **Clinician naming — role only, never name.** HDG §3.3 explicit CRITICAL discipline — even a fake name in a sample audit trail creates a defamation-adjacent surface and reads as low-discipline to legal reviewers. RD, CC, attending physician, registered dietitian, primary-care physician — role labels only.
- **Launch-gating partner-input dependencies:** Two of four items relevant here. Item #3 (SHA-256 hash chain — `/provenance-and-accountability` is the primary touchpoint; this page may reference the verification-pattern altitude in annotations but does not name the algorithm). Item #4 (five-categories-blocked — if a sample annotation references clinician-approval gate, hedged-categories phrasing applies). Items #1 (UConn-named) + #2 (US-only residency) do not touch this page directly.
- **Length:** **1,200-2,000 words for the brief itself.** The artifact page that gets built from this brief is shorter than other content pages because the *annotation pattern* is the load-bearing artifact, not prose volume. This brief specs the pattern; Phase 3 build emits the actual annotated trail using these conventions.
- **This brief is SHORTER than sibling briefs** by design. The sample trail's content is implementation-time work; this brief governs the *shape* of each annotation, what each annotation must say it satisfies, and the synthetic-data + vendor-independence + clinician-role discipline. The trail itself emits when Phase 3 build assembles real peer-reviewed citations + Cena-architecture-canonical field structure.

---

## Section briefs

### Section 0: Top-of-page synthetic-data marker

**Heading:** No H2. Marker IS the heading-equivalent.
**Position:** Above H1. First visible content on page after breadcrumbs.
**Length / shape:** 1-2 sentences, visually distinct (callout/banner treatment). Required first content per HDG sign-off list row 6.

**What this section must do:**
- Open with explicit synthetic-data label, verbatim per HDG sign-off list row 6 + §3.3 REQUIRED: *"All sample data on this page is synthetic. Field structure, annotations, and audit-event taxonomy reflect Cena's actual implementation; specific values are fabricated."*
- Visual treatment makes the synthetic-data status unmissable on first glance — IRB liaison who scrolls past the H1 cannot mistake fabricated values for real partner/patient data.
- Use voice.md §2 artifact voice — no marketing inflection. Reads as documentation header, not "important notice."

**What this section must not do:**
- Hedge the synthetic-data status ("most data on this page is synthetic" / "patient data is fictionalized" / "for illustrative purposes only" — any softening). Synthetic discipline is binary: all-or-nothing.
- Make the marker visually subordinate to the H1 (e.g., small italic caption). Marker is co-equal in visibility to the headline.
- Add explanatory paragraphs ("we use synthetic data because…"). Marker is the statement; rationale is unnecessary.

**Required claims:**
- "All sample data on this page is synthetic. Field structure, annotations, and audit-event taxonomy reflect Cena's actual implementation; specific values are fabricated." **Citation source:** HDG packet §3.3 + sign-off list row 6 REQUIRED phrasing. Cena-architecture canon.

**Required proof / artifacts:**
- Visually distinct marker block (callout / banner / labeled card). Phase 3 visual design owns the treatment; the marker's text content is canonical per HDG.

**Voice cues:**
- The marker is itself a credibility move. Naming "synthetic" first is what makes the rest of the page believable. Per HDG §3.3 + voice.md §1 "credible before charismatic."

**Forbidden phrasings (this section):**
- "for illustrative purposes only" / "mock data" / "dummy data" / "test data" / "example only" — soften the synthetic-data status and read as low-discipline.

**Lens-specific notes:**
- HDG (primary): Marker is non-negotiable per sign-off list row 6.
- BV: Marker visual treatment must read as documentation-header weight, not "warning banner" or "tip callout."

---

### Section 1: Hero (Title + reading-path orientation)

**Heading:** *"What an audit-ready record looks like."* Locked verbatim per IA §3 + voice.md §2.
**Position:** Below synthetic-data marker; above sample trail body.
**Length / shape:** H1 + 1-paragraph orientation prose (~60-100 words) + breadcrumbs + sidebar establishing position.

**What this section must do:**
- Lead with H1 verbatim. The headline's job is "this is the artifact you came to see"; no setup is needed.
- **Reading-path orientation within 5 seconds.** Per IA §8: title + first paragraph must establish "this is the page you were sent to" in 5 seconds. Orientation prose names: (a) the artifact is one synthetic recommendation's full provenance, (b) the annotations show what each field is and what regulatory or contractual purpose it satisfies, (c) the reading-path destinations (IRB documentation requirements / BAA log requirements / VBC reporting requirements / clinical decision support audit requirements).
- **Breadcrumbs:** *How the substrate works › Provenance & accountability › Sample audit trail.* Reinforces orientation without claiming the visitor cares about hub structure per IA §8.
- **Sidebar shows:** position in substrate hub, sibling sub-pages (`/integration`, `/provenance-and-accountability`), and sample-trail anchors (`#input-data`, `#reasoning-step`, `#recommendation-citation`, `#clinician-approval`, `#outcome-capture`, `#reassessment-trigger`).
- Use voice.md §2 artifact voice — annotation register; the trail is what does the work.

**What this section must not do:**
- Use meta-narration ("As you can see, this page shows…" / "Below is an example of…" / "This document demonstrates…") — voice.md §2 explicit Don't.
- Use marketing-page hero conventions (CTA button, lifestyle imagery, hero-prose paragraph claiming what the page achieves). The page is documentation; the hero is the artifact-header.
- Promise outcomes for the reader ("After reading this, you'll be confident…" / "Compliance teams find this useful…") — collapses artifact voice into pitch register.
- Use "comprehensive," "complete," "full transparency," "unprecedented" — voice.md §4 + §5 forbidden register.
- Introduce the artifact in marketing-voice. Voice almost disappears per voice.md §2.

**Required claims:**
- "One synthetic clinical recommendation, with full provenance — input through outcome." **Citation source:** Page structure per IA §8; no external citation required for structural claim.
- "Annotations explain what each field is and what regulatory or contractual purpose it serves." **Citation source:** IA §8 + HDG §3.3 SAFE-with-discipline annotation pattern.

**Required proof / artifacts:**
- Breadcrumbs at top: *How the substrate works › Provenance & accountability › Sample audit trail.*
- Sidebar: substrate-hub position + sibling sub-pages + per-section trail anchors.
- 5-second-orientation paragraph that lands the reading path.

**Voice cues:**
- The IRB liaison lands deep-linked from the champion's email. They need orientation in seconds; the headline + first paragraph + breadcrumbs do the orienting; the trail does the substantive work.
- Quiet-competence per voice.md §1 — no marketing inflection at any altitude on this page.

**Forbidden phrasings (this section):**
- "as you can see" / "below is an example of" / "demonstrates" / "showcases" / "for your review" / "we are pleased to share" / "comprehensive audit trail" / "complete provenance" / "full transparency" / "unprecedented" / "world-class" / "industry-leading" — per voice.md §2 + §4.

**Lens-specific notes:**
- PLP: Acronym-density on this page is high (IRB, BAA, VBC, CDS, PHI, FHIR, RD, CC) — first-use expansion per voice.md §11. Hero orientation paragraph is the first-use surface for IRB, BAA, VBC, CDS expansions; subsequent annotations use bare acronym.
- BV: 5-second-orientation test — IRB liaison reading the first paragraph aloud should know within one breath that this is the page they were sent to.

---

### Section 2: The annotation pattern (canonical specification)

This is the load-bearing section of the brief. **Each of the six trail sections (§§3-8) inherits this annotation pattern.** Phase 3 build emits each section using the conventions specified here.

**The annotation contract — every field annotation must answer two questions:**

1. **What this field IS** (the literal field content + its taxonomy position) — plain-language naming of the field, its source-system attribution where relevant, its temporal stamp where relevant, its data shape (timestamp / role label / citation reference / methodology marker / verification hash / etc.).
2. **What this field SATISFIES** (the regulatory, contractual, or clinical-decision-support requirement the field maps to) — explicit naming of which IRB requirement / BAA log requirement / VBC reporting requirement / clinical decision support audit requirement the field's presence satisfies.

**Plain-language vocabulary (per voice.md §1 + §11):**
- Speak to the IRB liaison and General Counsel reader simultaneously. No internal jargon, no marketing inflection, no "provenance trail" (use "audit trail" / "audit-ready record" per voice.md §4).
- First-use acronym expansion floor: IRB (Institutional Review Board), BAA (Business Associate Agreement), VBC (value-based contract), CDS (clinical decision support), PHI (patient health information), FHIR (Fast Healthcare Interoperability Resources), CC (care coordinator), RD (registered dietitian). After first expansion, bare acronyms acceptable.
- Annotations are short — typically 1-2 sentences each. The field is the artifact; the annotation is documentation, not prose.

**Annotation-claim discipline (per HDG §3.3 + citation spec §3):**
- Each "satisfies" claim must be defensible. **Do NOT annotate "satisfies HIPAA Security Rule" without citing the specific 45 CFR section.** Per HDG §3.3 explicit. Where a specific section is referenced, cite it (e.g., 45 CFR 164.312(b) for audit controls); where a more general regulatory-framework reference is appropriate, name the framework (e.g., "IRB documentation requirements per the partner program's IRB-approved protocol") without claiming Cena is itself IRB-approved per HDG §3.2 MUST-NOT-SAY.
- Each clinical-decision-support annotation must reference real peer-reviewed literature where the field is a citation (recommendation section). Per citation spec §3 row "/sample-audit-trail recommendation lit-citations." The sample patient is synthetic; the literature it cites is the discipline.

**Per-section structural shape:**
- Section heading: H2 + anchor (per IA §8 anchor list).
- Sample field display: visual representation of the field as it would appear in the actual audit-trail record (timestamp + value + source-system attribution + verification hash where relevant). Phase 3 owns the visual treatment; the brief specifies field shape only.
- Annotation block: 2-4 sentences of annotation. First sentence: what the field IS. Second-third sentences: what regulatory / contractual / CDS requirement the field SATISFIES + how. Optional fourth: cross-reference to the relevant Cena-architecture-canonical claim (e.g., "Appendix C #1 — Every clinical action carries its trail").
- Citation markers: Inline `[^N]` footnotes per citation spec §5 wherever annotation references a regulation, peer-reviewed literature, or Cena-architecture canon doc. References section at bottom of page collects entries.

---

### Section 3: Input data sources

**Heading:** *"Input data."* H2; anchor `#input-data` per IA §4.
**Position:** First trail section in the audit-record sequence.
**Length / shape:** 1 sample field block + annotation block (per pattern in §2 above).

**What this section must do:**
- Show synthetic input data record with: (a) source-system attribution (e.g., partner EHR FHIR endpoint reference; partner-supplied dietary intake form reference), (b) ingest timestamp (ISO-8601 format, synthetic value), (c) data-shape labels (lab values / dietary intake / clinical notes — whichever shape the synthetic case uses), (d) Patient case context: fully synthetic case attributes (synthetic age range, synthetic indication; NO partner-identifying or real-patient-identifying data).
- Annotation answers:
  - **What this field IS:** "Each input record carries source-system attribution and ingest timestamp. The substrate captures what data was available at the moment of reasoning, sourced from FHIR (Fast Healthcare Interoperability Resources) endpoints partners expose or file drops partners specify."
  - **What this field SATISFIES:** "BAA (Business Associate Agreement) log requirements — every access to PHI (patient health information) is captured with source, timestamp, and the access purpose tied to the downstream clinical action. IRB documentation requirements for traceable data lineage — every recommendation traces to the input data that produced it."
- Cross-reference: link to `/how-the-substrate-works/integration` for FHIR/file-drop integration deep-dive.

**What this section must not do:**
- Use real partner-system names (Epic / Cerner / Athena) — HDG sign-off list row 8 MUST-NOT-SAY without primary-source verification. Use "partner EHR FHIR endpoint" or generic "partner clinical system" instead.
- Show real patient identifiers, real partner identifiers, real geographic identifiers — synthetic discipline is absolute.
- Claim "BAA-compliant" or "HIPAA-compliant" — HDG §5 noun-phrase-HIPAA prohibition. Use "satisfies BAA log requirements" or "captured per BAA standards."
- Claim "satisfies HIPAA Security Rule" without citing the specific 45 CFR section. Per HDG §3.3 explicit.

**Required claims:**
- "Each input record carries source-system attribution and ingest timestamp." **Citation source:** Cena-architecture canon — Appendix C #1 primitive. Per citation spec §2(b) worked example.
- "BAA log requirements" satisfaction. **Citation source:** HDG packet §3.3 SAFE-with-discipline annotation pattern. Regulatory reference: 45 CFR 164.504(e) (BAA provisions) or 45 CFR 164.312(b) (audit controls) — specific section cited inline per HDG §3.3 discipline.
- "IRB documentation requirements for traceable data lineage" satisfaction. **Citation source:** HDG §3.2 HEDGE recommended phrasing — *"Provenance artifacts are designed to satisfy IRB documentation requirements for research-adjacent use of the substrate."* No claim that Cena is IRB-approved.

**Required proof / artifacts:**
- Sample field block visual (Phase 3 build).
- Annotation block: 2-3 sentences per pattern.
- Cross-link to `/how-the-substrate-works/integration`.

**Voice cues:**
- The field's source-system attribution is the credibility-load — show that ingest is bounded by what the partner exposes, not by Cena reaching into partner systems. Per HDG §3.4 + voice.md §2 substrate hub register.

**Forbidden phrasings (this section):**
- "Epic-integrated" / "Cerner-integrated" / "Athena-certified" / "HIPAA-compliant ingestion" / "comprehensive data capture" / "seamless integration" — per HDG §3.4 + voice.md §4.

**Lens-specific notes:**
- HDG: Annotation phrasing per §3.3 discipline. Specific CFR sections cited where regulatory claim is made; general framework references where appropriate.
- PLP: First use of FHIR, BAA, PHI expand on this page (typically here in §3 since it's the first trail section). Subsequent sections use bare acronyms.

---

### Section 4: Reasoning step

**Heading:** *"Reasoning step."* H2; anchor `#reasoning-step` per IA §4.
**Position:** Second trail section.
**Length / shape:** 1 sample field block + annotation block.

**What this section must do:**
- Show synthetic reasoning-step record with: (a) reasoning timestamp (ISO-8601, synthetic), (b) model-architecture citation referencing "the model architecture in use at the time of generation" — vendor-independent per HDG sign-off list row 3 + §3.3 SAFE + Ava vendor-independence stance (`project_ava_vendor_independence` memory), (c) reasoning-input summary (what data was considered), (d) reasoning-output summary (what recommendation was produced — links to §5 recommendation section), (e) verification-hash field per Appendix C #2 architectural pattern (hedged at the verification-hash-pattern altitude per outstanding-partner-input.md item #3).
- Annotation answers:
  - **What this field IS:** "Each reasoning step records the model architecture in use at the time of generation, the reasoning inputs considered, and the recommendation produced. Memory, tools, and context are Cena-owned; the underlying model is swappable without re-engineering the surfaces or breaking the audit trail."
  - **What this field SATISFIES:** "CDS (clinical decision support) audit requirements — the substrate produces a complete record of the reasoning that produced each recommendation, traceable to inputs and verifiable for downstream review. BAA log requirements — every reasoning event is captured with timestamp and architectural context. Re-evaluation supports — when the model architecture changes, the recorded model-context allows historical recommendations to be evaluated against the architecture that produced them."
- Cross-reference: `/how-the-substrate-works/provenance-and-accountability` (deeper reasoning-architecture context) + `/how-the-substrate-works#reasoning` (hub section).

**What this section must not do:**
- Name a specific model vendor (Anthropic / OpenAI / Google) or model name (Claude / GPT) — HDG sign-off list row 3 + §3.3 SAFE explicit + §7 vendor-not-named-publicly default.
- Specify the SHA-256 algorithm by name in the verification-hash field annotation — per outstanding-partner-input.md item #3, the hub + this page reference "verification hash" or "cryptographic verification pattern" without naming the algorithm until Andrey confirms current implementation. The `/provenance-and-accountability` sub-page may carry the deeper SHA-256-naming decision; this page stays at the verification-hash-pattern altitude.
- Claim live multi-vendor model routing — HDG §4 cross-cutting HEDGE. Phrase as architectural intent.
- Use "AI reasoning" / "intelligent reasoning" / "advanced AI processing" — voice.md §4 vendor-marketing register.
- Claim "FDA-cleared" or "clinically validated" CDS — HDG §4 MUST-NOT-SAY.

**Required claims:**
- "Each reasoning step records the model architecture in use at the time of generation." **Citation source:** Cena-architecture canon — vendor-independence stance per `project_ava_vendor_independence` memory + citation spec §2(b) worked example. HDG §3.3 SAFE recommended phrasing.
- "Memory, tools, and context are Cena-owned; the underlying model is swappable." **Citation source:** `Knowledge/Areas/Meta/Entities/cena-health/ava.md` vendor-independence stance per citation spec §2(b) worked example.
- "CDS audit requirements" satisfaction. **Citation source:** General regulatory-framework reference (clinical decision support audit requirements per the partner program's IRB-approved protocol + relevant CMS or partner contractual specifications). Per HDG §3.3 annotation discipline — no specific CFR section unless the program is operating under a CDS-specific regulation that names one.
- Verification-hash claim (hedged at pattern altitude). **Citation source:** Appendix C #2 architectural claim. **Launch-gating partner-input #3 — SHA-256 hash chain currency** — hedged default at this page's altitude (verification-hash without algorithm name); upgrade gated on Andrey verification.

**Required proof / artifacts:**
- Sample field block.
- Annotation block (3-4 sentences).
- Cross-link to `/how-the-substrate-works#reasoning` + `/how-the-substrate-works/provenance-and-accountability`.

**Voice cues:**
- The model-architecture citation is the page's strongest single architecture-vendor-independence demonstration — show that the audit trail captures architectural context without naming the vendor. The discipline IS the credibility move.

**Forbidden phrasings (this section):**
- "Anthropic" / "OpenAI" / "Vertex AI" / "Google AI" / "Claude" / "GPT" / "Claude reasoning" / "agentic reasoning" / "AI does the thinking" / "intelligent reasoning" / "SHA-256" (per outstanding-partner-input.md item #3 hedged default) / "advanced AI processing" / "next-generation reasoning" / "FDA-cleared CDS" / "clinically validated AI" — per HDG §3.3 + §4 + voice.md §4 + outstanding-partner-input.md item #3.

**Lens-specific notes:**
- HDG (primary): Per §3.3 SAFE — vendor-independent model-architecture citation honors the strategic stance and avoids dating the page. Per outstanding-partner-input.md item #3 — verification-hash at pattern altitude; no SHA-256 algorithm name.
- CTA: Verify the reasoning-step record structure against current Spark implementation. If the production substrate captures the field shape as specified, annotation ships; if the field structure is partial, hedge annotation to "designed-for" per HDG packet §8 future watchlist.
- PLP: First use of CDS expands here if not already expanded in hero orientation.

---

### Section 5: Recommendation (with peer-reviewed literature citations)

**Heading:** *"Recommendation."* H2; anchor `#recommendation-citation` per IA §4.
**Position:** Third trail section. **Highest-discipline section on the page** — the recommendation's peer-reviewed-literature citations carry the substrate's posture.
**Length / shape:** 1 sample field block (the synthetic recommendation text + inline literature citations) + annotation block.

**What this section must do:**
- Show synthetic recommendation text. Recommendation is fully fabricated for a synthetic patient case. The recommendation text itself MUST cite real peer-reviewed primary literature inline per citation spec §3 row "/sample-audit-trail recommendation lit-citations" + citation spec §2 row "Clinical outcomes" (PubMed-DOI bar non-negotiable).
- **Peer-reviewed-literature citations are REAL, not invented.** The sample patient is synthetic; the citations the synthetic recommendation references are real, retrievable, dated. Annotated as "sample citation pattern; actual recommendations cite the literature current at the time of generation" per HDG §3.3 HEDGE recommended phrasing.
- **Citations must meet citation spec §2 PubMed-DOI bar:** named authors, journal name, year, DOI. Per the citation spec §2 row "Clinical outcomes": PubMed-indexed journal article. No trade-press, no vendor white papers, no WebFetch summaries.
- **Use generic peer-reviewed literature in food-as-medicine / clinical-nutrition space**, NOT partner-specific or partner-attested literature. The citations carry the substrate's posture (it cites real, primary-source, retrievable literature) without anchoring to a specific partner case or claiming a partner-derived outcome.
- Annotation answers:
  - **What this field IS:** "Each recommendation cites the peer-reviewed literature that supports the clinical reasoning. Citations are inline at the moment of recommendation, retrievable via DOI, and dated at the point of generation."
  - **What this field SATISFIES:** "CDS (clinical decision support) documentation requirements — the substrate cites the primary literature that supports each recommendation, traceable for clinical-defensibility review. IRB documentation requirements — research-adjacent use of the substrate produces a literature-traceable record of clinical reasoning. Partner-program clinical-protocol alignment — recommendations cite literature that aligns with the partner's IRB-approved clinical protocol."
- Annotation notes per HDG §3.3 HEDGE: *"Sample citation pattern; actual recommendations cite the literature current at the time of generation."* — names that the synthetic page's citations are illustrative of the *pattern*; live recommendations cite the literature in use at the moment of generation.

**What this section must not do:**
- Invent peer-reviewed citations. The citations on the synthetic page must be real, current, primary-source nutrition literature (not invented, not paraphrased, not "based on"). Per HDG §3.3 HEDGE explicit + citation spec §2 PubMed-DOI bar.
- Cite trade-press, vendor white papers, or WebFetch-summary sources. Per citation spec §2 + memory `feedback_primary_source_values`.
- Cite stale legacy claims (30% readmissions / 1.8% HbA1c / 85% adherence) — per citation spec §4 explicitly off-limits.
- Cite partner-attested outcomes or partner-specific case data — partner referent is forbidden on this page per HDG §3.3 + sign-off list row 6 synthetic-data discipline. Citations are generic peer-reviewed literature; partner-attested citations belong on `/proof/[partner-slug]` leaves when those land.
- Annotate "satisfies HIPAA Security Rule" without specific 45 CFR section citation — HDG §3.3.
- Use "AI recommendation" or "AI prescribes" — voice.md §4 vendor-marketing register + clinical-authority-displacement reading.

**Required claims:**
- "Each recommendation cites the peer-reviewed literature that supports the clinical reasoning." **Citation source:** Cena-architecture canon + citation spec §3 row "/sample-audit-trail recommendation lit-citations" + HDG §3.3 HEDGE recommended phrasing.
- "Citations are inline at the moment of recommendation, retrievable via DOI, and dated at the point of generation." **Citation source:** Cena-architecture canon — Appendix C #1 primitive + citation spec §5 citation-format discipline.
- "CDS documentation requirements" + "IRB documentation requirements" satisfaction. **Citation source:** HDG §3.3 SAFE annotation pattern + HDG §3.2 HEDGE IRB-documentation framing.
- "Sample citation pattern; actual recommendations cite the literature current at the time of generation." **Citation source:** HDG §3.3 explicit HEDGE recommended phrasing.

**Required proof / artifacts:**
- Sample field block with synthetic recommendation text + 1-3 inline peer-reviewed citations (`[^N]` markers per citation spec §5).
- References section at bottom of page resolves each citation marker to a full citation entry per citation spec §5 format (author / title / journal / year / DOI / retrieval date / re-check cadence).
- Annotation block (3-4 sentences).
- Cross-link to `/how-the-substrate-works/provenance-and-accountability`.

**Voice cues:**
- This section is the page's strongest credibility move. Synthetic patient + real peer-reviewed citations + retrievable DOIs = "they take citation discipline seriously even on a sample page." Per voice.md §1 "audit-grade by default."
- Annotation register is documentation, not pitch. Naming the discipline ("sample citation pattern") is what makes the pattern believable.

**Forbidden phrasings (this section):**
- "AI recommends" / "AI prescribes" / "the algorithm decides" / "AI clinical decision" / "based on similar studies" (vague citation) / "30% reduction in readmissions" (uncited, stale) / "studies show" (vague) / "experts agree" (vague) / "according to research" (vague) / "comprehensive literature review" / "exhaustive citation" — per voice.md §4 + citation spec §4 + §10.

**Lens-specific notes:**
- HDG (primary, highest-discipline section): Per §3.3 HEDGE — citation pattern is the load-bearing move. Real citations + sample-citation-pattern annotation per HDG explicit. Verify each cited paper exists, says what we say it says, and is the best available source per citation spec §9(a) Substep 5 verification floor.
- CTA: Verify peer-reviewed citations meet citation spec §2 PubMed-DOI bar. Each cited paper requires: named authors, journal name, year, DOI, retrieval date within 90 days of publish, re-check cadence (`on-study-supersession`). Sample-page citations are subject to the same maintenance discipline as production citations.
- PLP: Cite generic food-as-medicine / clinical-nutrition literature — not partner-specific. Choose citations whose framing is broadly applicable, not anchored to a specific institution's pilot.
- BV: The sample-citation-pattern note ("actual recommendations cite the literature current at the time of generation") is the disarmer that makes the synthetic discipline credible. Don't soften it.

---

### Section 6: Accountable-clinician approval

**Heading:** *"Accountable-clinician approval."* H2; anchor `#clinician-approval` per IA §4.
**Position:** Fourth trail section. The handoff from substrate to human accountability — load-bearing for the accountability-model claim.
**Length / shape:** 1 sample field block + annotation block.

**What this section must do:**
- Show synthetic clinician-approval record with: (a) approval timestamp (ISO-8601, synthetic), (b) **clinician role only, never name** (e.g., "Registered Dietitian (RD)" or "Attending Physician" or "Care Coordinator (CC)") per HDG §3.3 CRITICAL discipline, (c) approval decision (approve / reject / modify-and-approve), (d) any conditions or modifications recorded, (e) verification-hash field linking the approval to the upstream reasoning record.
- Annotation answers:
  - **What this field IS:** "Each substrate-produced recommendation requires accountable-clinician approval before the action moves forward. The approval record captures the clinician's role, the decision, and any modifications, linked to the reasoning record that produced the recommendation."
  - **What this field SATISFIES:** "Partner-clinician accountability framing — partner-institution clinicians retain clinical accountability for every recommendation Cena's substrate generates. Cena's role is the audit-grade trail that makes that accountability defensible. BAA log requirements — every clinical action carries the approving clinician's role and the approval timestamp. Clinical decision support audit requirements — the substrate enforces that recommendations cannot move forward without named-approver action."
- Use HDG sign-off list row 4 SAFE recommended phrasing for the partner-clinician accountability framing: *"During pilots, partner-institution clinicians retain clinical accountability for every recommendation Cena's substrate generates. Cena's role is the audit-grade trail that makes that accountability defensible."*
- Hedged reference to the "categories blocked at system level" claim per outstanding-partner-input.md item #4: annotation may reference *"categories of clinical action that require named-approver action"* without enumerating the specific five categories until Andrey confirms enumeration is publicly safe.

**What this section must not do:**
- Use any clinician name, even a fake one. Per HDG §3.3 CRITICAL — fake names create a defamation-adjacent surface and read as low-discipline. Role labels only.
- Claim "Cena's clinical staff approve recommendations" — HDG §3.2 explicit MUST-NOT-SAY (implies a posture Cena does not hold during pilots).
- Specify the five categories by name unless Andrey verifies enumeration is publicly safe — outstanding-partner-input.md item #4 hedged default.
- Claim "physician-supervised AI" or "AI under medical oversight" — voice.md §4 vendor-marketing register. The substrate produces recommendations; accountable humans approve.
- Use "human-in-the-loop" — voice.md §6 (referenced via voice.md §2 Don't pattern) overused vendor-marketing register that signals exactly the displacement anxiety the framing disarms.

**Required claims:**
- "Partner-institution clinicians retain clinical accountability for every recommendation Cena's substrate generates." **Citation source:** HDG sign-off list row 4 SAFE — load-bearing recommended phrasing. Cena accountability model per `project_cena_accountability_model` memory.
- "Cena's role is the audit-grade trail that makes that accountability defensible." **Citation source:** HDG sign-off list row 4.
- "Categories of clinical action require named-approver action — enforced in code, not in training." **Citation source:** Appendix C #4 + HDG §3.2 SAFE. **Launch-gating partner-input #4 — five-categories-blocked enumeration** — hedged default at this page's altitude (no enumeration); upgrade gated on Andrey verification.
- Clinician role naming discipline. **Citation source:** HDG §3.3 CRITICAL annotation discipline.

**Required proof / artifacts:**
- Sample field block (with synthetic timestamp, role label only, decision, modifications, link to reasoning record).
- Annotation block (3-4 sentences).
- Cross-link to `/how-the-substrate-works/provenance-and-accountability` for the accountability-model deep-dive + `/how-the-substrate-works#scope` for the non-scope band.

**Voice cues:**
- The role-only-never-name discipline IS the credibility move. Show that even in a sample artifact, the substrate respects the regulatory-defensibility floor that production data must respect. Per HDG §3.3 CRITICAL.
- Quiet-competence per voice.md §1 — name the discipline; let the absence of the name make the point.

**Forbidden phrasings (this section):**
- Any specific name (real or fake) in the clinician field / "Cena's clinical team approves" / "Cena's clinicians approve" / "AI-supervised approval" / "physician-supervised AI" / "AI under medical oversight" / "human-in-the-loop" / "AI with human oversight" / "machine-learning-assisted approval" / Specific five-category enumeration without Andrey verification — per HDG §3.3 + §3.2 + voice.md §4 + voice.md §6 + outstanding-partner-input.md item #4.

**Lens-specific notes:**
- HDG (primary, CRITICAL discipline): Role-only-never-name per §3.3 explicit. Partner-clinician-accountability framing per sign-off list row 4 + §3.2 SAFE — this is the line HDG has held internally; this is its sample-artifact form.
- HDG: Per outstanding-partner-input.md item #4 — categories-of-clinical-action without enumeration; specific-five enumeration is the strict-superset upgrade when Andrey confirms.
- CTA: Verify the clinician-approval workflow against current Spark implementation. If the approval-gating-on-categories is in code but the specific five categories are not enumerable publicly, the hedged default holds.

---

### Section 7: Downstream outcome capture

**Heading:** *"Outcome capture."* H2; anchor `#outcome-capture` per IA §4.
**Position:** Fifth trail section.
**Length / shape:** 1 sample field block + annotation block.

**What this section must do:**
- Show synthetic outcome-capture record with: (a) measurement timestamp (ISO-8601, synthetic), (b) outcome metric type (e.g., adherence event, clinical measurement, patient-reported outcome — whichever the synthetic case calls for), (c) measurement methodology marker (named instrument / measurement protocol / patient-reported survey instrument), (d) data shape (numeric value / categorical / boolean — synthetic value), (e) link to the upstream recommendation record.
- Annotation answers:
  - **What this field IS:** "Outcome measurements are captured at the methodology and cadence specified by the partner's clinical protocol. Each measurement links to the upstream recommendation that produced the clinical action being measured."
  - **What this field SATISFIES:** "VBC (value-based contract) reporting requirements — the substrate produces outcome measurements traceable to the recommendations and clinical actions that preceded them, supporting value-based reporting cadences partner contracts specify. IRB documentation requirements — outcome data captured for research-adjacent use of the substrate carries methodology and cadence attribution. Partner-program reporting alignment — outcomes align to the partner's grant or waiver reporting templates."
- Cross-reference: `/for-program-economics` for VBC-reporting deep-dive + `/reference-program` for reporting-cadence-by-program-shape examples.

**What this section must not do:**
- Specify a specific outcome percentage / dollar figure (e.g., "30% adherence improvement," "$X cost savings") — per voice.md §5 + citation spec §4 explicit. The sample shows the *field shape* and the *measurement methodology pattern*, not the value claim.
- Cite stale legacy outcome claims (30% readmissions / 1.8% HbA1c / 85% adherence) — per citation spec §4 off-limits.
- Claim a specific outcome was measured "with Cena's substrate" outside of synthetic discipline — partner referent forbidden on this page.
- Use "industry-leading outcomes" / "transformative outcomes" / "unprecedented outcome capture" — voice.md §5 forbidden hero patterns extended site-wide.
- Promise outcomes in present-tense ("Cena delivers 30% improvement") — aspirational copy in present tense per voice.md §5.

**Required claims:**
- "Outcome measurements are captured at the methodology and cadence specified by the partner's clinical protocol." **Citation source:** Cena-architecture canon — substrate-architecture per `ava.md` + citation spec §2(b) worked example. HDG §3.3 SAFE annotation pattern.
- "Each measurement links to the upstream recommendation." **Citation source:** Appendix C #1 audit-trail primitive + Cena-architecture canon.
- "VBC reporting requirements" satisfaction. **Citation source:** General framework reference (value-based contract reporting requirements per the partner program's contractual specifications). Per HDG annotation discipline — no specific CFR section unless the program's VBC contract names one.

**Required proof / artifacts:**
- Sample field block (with synthetic timestamp, methodology marker, synthetic value, link to upstream recommendation).
- Annotation block (3 sentences).
- Cross-link to `/for-program-economics#vbc-reporting`.

**Voice cues:**
- The methodology marker is the credibility-load — show that outcome measurement is bounded by the partner's clinical protocol, not by Cena's marketing-defined outcome categories. Per HDG §3.3 SAFE + voice.md §1 credible-before-charismatic.

**Forbidden phrasings (this section):**
- Specific outcome percentages or dollar figures (any X% or $N) / "industry-leading outcomes" / "transformative outcomes" / "unprecedented outcome capture" / "comprehensive outcome tracking" / "Cena's outcomes" (vendor-frame) / "30% reduction" / "$3,200 savings" / "85% adherence" / "1.8% HbA1c" — per voice.md §5 + citation spec §4.

**Lens-specific notes:**
- HDG: Annotation phrasing per §3.3 SAFE — defensible architectural claim. Verify the methodology annotations match what's actually instrumented in current Spark deployment.
- BV: The sample-page outcome value is synthetic; the *methodology pattern* is what the legal-compliance reader is evaluating. Show the discipline.

---

### Section 8: Re-assessment trigger

**Heading:** *"Re-assessment trigger."* H2; anchor `#reassessment-trigger` per IA §4.
**Position:** Sixth trail section. Closes the loop on the recommendation's lifecycle.
**Length / shape:** 1 sample field block + annotation block.

**What this section must do:**
- Show synthetic re-assessment-trigger record with: (a) trigger timestamp (ISO-8601, synthetic), (b) trigger criteria (named criteria — e.g., "30-day outcome window elapsed" / "adherence threshold not met" / "follow-up appointment completed"), (c) trigger source (system-scheduled / clinician-initiated / patient-event-initiated), (d) link to the upstream outcome-capture record + the recommendation record.
- Annotation answers:
  - **What this field IS:** "Re-assessment triggers fire on named criteria — time-based windows, outcome thresholds, or clinical events specified by the partner's protocol. Each trigger links the lifecycle back to the originating recommendation and the outcome capture that preceded it."
  - **What this field SATISFIES:** "IRB documentation requirements — the substrate produces a complete recommendation-outcome-reassessment lifecycle record for research-adjacent use. CDS audit requirements — re-assessment criteria are auditable, not asserted. Partner-program protocol alignment — triggers match the cadence and criteria the partner's IRB-approved protocol specifies."

**What this section must not do:**
- Imply triggers fire automatically without protocol grounding ("AI continuously monitors and triggers") — voice.md §4 vendor-marketing register.
- Claim "real-time" or "continuous" re-assessment unless verifiable — likely overreach at Cena's current stage; phrase as "scheduled" or "criteria-based" instead.
- Use "smart triggers" / "intelligent re-assessment" / "AI-driven follow-up" — voice.md §4.

**Required claims:**
- "Re-assessment triggers fire on named criteria — time-based windows, outcome thresholds, or clinical events specified by the partner's protocol." **Citation source:** Cena-architecture canon + HDG §3.3 SAFE annotation pattern.
- "Each trigger links the lifecycle back to the originating recommendation." **Citation source:** Appendix C #1 audit-trail primitive.
- "IRB documentation requirements" + "CDS audit requirements" satisfaction. **Citation source:** HDG §3.3 SAFE + HDG §3.2 HEDGE IRB-documentation framing.

**Required proof / artifacts:**
- Sample field block (with synthetic timestamp, criteria, source, links to upstream records).
- Annotation block (3 sentences).
- Cross-link to `/how-the-substrate-works#data-flow` (the recommendation-outcome-reassessment lifecycle is visible in the hub data-flow diagram).

**Voice cues:**
- Closing the loop on the recommendation's lifecycle is the page's structural payoff — show that the audit record is *complete*, not partial. Per voice.md §2 artifact voice — the artifact does the work.

**Forbidden phrasings (this section):**
- "AI continuously monitors" / "smart triggers" / "intelligent re-assessment" / "AI-driven follow-up" / "real-time" / "continuous monitoring" (unless verifiable) / "automated decisioning" — per voice.md §4.

**Lens-specific notes:**
- HDG: Annotation phrasing per §3.3 SAFE. Verify trigger architecture against current Spark implementation.
- BV: The lifecycle-completeness is the credibility move. The IRB liaison closing this page sees a full record (input → reasoning → recommendation → approval → outcome → re-assessment) and replies to the champion "this looks defensible."

---

### Section 9: References (page footer)

**Heading:** *"References."* H2.
**Position:** Bottom of page.
**Length / shape:** Citation-discipline-spec §5 format. One entry per `[^N]` marker on the page.

**What this section must do:**
- Resolve every inline `[^N]` citation marker on the page to a full citation entry per citation spec §5 format: author / title / journal / year / DOI / `Retrieved: YYYY-MM-DD` / `Re-check cadence: <cadence>` per citation spec §6 vocabulary.
- For peer-reviewed-literature citations (in §5 recommendation): full PubMed-DOI bar per citation spec §2 row "Clinical outcomes" + citation spec §9(a) worked example.
- For Cena-architecture citations (vault-entity references for the substrate-architecture canon): full vault-entity format per citation spec §9(b) worked example (vault commit reference + retrieval date + `Re-check cadence: on-architecture-change`).
- For regulatory citations (CFR sections referenced in annotations): full statutory citation per citation spec §2 row "Statutory / regulatory" (federal register / CFR section with section number + `Re-check cadence: on-statute-update`).

**What this section must not do:**
- Have orphan markers (citations referenced in body without resolution in References) or orphan references (References entries without inline markers) — citation spec §7 pre-ship gate.
- Cite trade-press or vendor white papers — citation spec §2 source-hierarchy explicit.
- Cite undated sources — every entry requires `Retrieved: YYYY-MM-DD` per citation spec §5.
- Cite stale legacy claims — citation spec §4 explicit off-limits.

**Required claims:**
- All references meet citation spec §2 source-hierarchy bar for their claim type.
- All references carry `Retrieved: YYYY-MM-DD` + re-check cadence per citation spec §5.

**Required proof / artifacts:**
- References section at page footer.
- Each inline `[^N]` marker resolves.

**Voice cues:**
- References section is documentation, not prose. Citation-format discipline IS the credibility move. Per citation spec §5.

**Lens-specific notes:**
- CTA (primary): Pre-ship gate per citation spec §7 — every quantitative claim has inline citation marker, every marker resolves to References entry, every entry meets source-hierarchy bar, every entry has retrieval-date + re-check cadence. Fail-any → block.
- HDG: HIPAA / PHI / BAA / encryption claims have HDG sign-off per citation spec §8. Per the 2026-06-08 HDG packet status update, recommended phrasings are proceed-as-approved default for design + build; launch gates on the 4 outstanding-partner-input items.

---

## Cross-section concerns

- **Synthetic-data discipline is ABSOLUTE.** Every field on this page is fabricated for a synthetic patient case. No partner referent. No patient referent. Per HDG sign-off list row 6 + §3.3 explicit + Working assumptions. The top-of-page marker is required; every section inherits.
- **HDG packet phrasings are the CEILING.** Per HDG §3.3 explicit — this page has the highest fidelity demand on the site. Recommended phrasings in HDG §§3.3 + 3.2 + 5 + 6 are the ceiling. No annotation exceeds without separate HDG review pass.
- **Artifact voice — voice almost disappears.** Per voice.md §2 sample audit trail block. The trail IS the artifact; copy is annotation. Annotations are documentation register; no marketing inflection; no meta-narration ("As you can see…" / "Below demonstrates…").
- **No CTA anywhere on this page.** Per IA §9 credibility-surface pattern + voice.md §9 explicit prohibition + voice.md §2 sample audit trail per-surface taboos. The IRB liaison's path to action is *"close tab, reply to champion."* CTA reads as sales pressure on a defensive reader. Watch for: section-ending sentences that drift toward "request more information" / "schedule a consultation" / inline-banner CTAs / footer-CTAs / sidebar-CTAs — none belong on this page. **Flag if any section drifts toward CTA.**
- **Annotation contract — IS + SATISFIES.** Every field annotation answers two questions: what the field is (literal field content + taxonomy position) + what it satisfies (regulatory / contractual / CDS requirement). The annotation pattern (Section 2 of this brief) is the load-bearing contract.
- **Real peer-reviewed citations on synthetic content.** The recommendation section's literature citations are REAL (PubMed-DOI bar per citation spec §2), not invented, even though the patient case is synthetic. Citations carry the substrate's posture. Annotation note per HDG §3.3: *"Sample citation pattern; actual recommendations cite the literature current at the time of generation."*
- **Vendor stack NOT named.** Per HDG sign-off list row 3 + §3.3 + §7. Model-architecture citation in §4 references "the model architecture in use at the time of generation" — vendor-independent per Ava strategic stance.
- **Clinician role only, never name.** Per HDG §3.3 CRITICAL — even fake names create a defamation-adjacent surface. RD, CC, attending physician, registered dietitian — role labels only across §6.
- **Hedged annotations where partner-input is pending.** Section 4 (verification-hash without SHA-256 algorithm name) and Section 6 (categories-of-clinical-action without five-category enumeration) hedge per outstanding-partner-input.md items #3 + #4. Strict-superset upgrades land when Andrey verifies.
- **Per-annotation regulatory citation discipline.** Per HDG §3.3 explicit — do not annotate "satisfies HIPAA Security Rule" without citing the specific 45 CFR section. Specific sections cited inline where regulatory claim is made; general framework references where appropriate.
- **Page is SHORT by design.** The artifact does the work, not the prose. Total page length is materially shorter than `/how-the-substrate-works` hub (which is 2,000-3,500 words) — likely 800-1,400 words for the artifact page itself, since each section is a sample field block + 2-4 sentence annotation. This brief specifies the *pattern*; Phase 3 emits the trail using these conventions.
- **Section ordering hard-locked.** Synthetic-data marker (§0) → Hero (§1) → Input data (§3) → Reasoning step (§4) → Recommendation (§5) → Clinician approval (§6) → Outcome capture (§7) → Re-assessment trigger (§8) → References (§9). Sections §3-§8 follow the IA §8 anchor order. Do not reorder.

---

## Citation hotspots

Per citation discipline spec §3 (Claim-hotspot inventory) — `/sample-audit-trail` rows + §8 HDG handoff sequence + §10 claim-citation reflex:

- **Section 0: Synthetic-data marker.** Synthetic-discipline claim. Citation source: HDG sign-off list row 6 REQUIRED phrasing; no external citation required (canonical HDG phrasing is the source).
- **Section 1: Hero orientation paragraph.** Structural copy; no quantitative claims. No citation required.
- **Section 3: Input data sources.** FHIR endpoint / file-drop architectural claims + BAA log requirements satisfaction claim. Citation sources: Cena-architecture canon (Appendix C #1 + `ava.md` vendor-independence stance) + regulatory reference (45 CFR 164.504(e) BAA provisions OR 45 CFR 164.312(b) audit controls — specific section cited inline) + HDG §3.3 SAFE annotation pattern.
- **Section 4: Reasoning step.** Vendor-independent model-architecture citation + verification-hash pattern claim + CDS audit requirements satisfaction. Citation sources: `ava.md` vendor-independence stance per citation spec §2(b) worked example + Appendix C #2 architectural claim + HDG §3.3 SAFE recommended phrasing. **Launch-gating partner-input #3 — SHA-256 hash chain currency** — hedged default ships (verification-hash without algorithm name); upgrade gated on Andrey verification.
- **Section 5: Recommendation lit-citations.** **HIGHEST-DISCIPLINE SECTION.** Real peer-reviewed primary literature per citation spec §2 row "Clinical outcomes" PubMed-DOI bar. Sample citations meet the same source-hierarchy bar as production citations. Annotation note per HDG §3.3: *"Sample citation pattern; actual recommendations cite the literature current at the time of generation."*
- **Section 6: Clinician approval.** Partner-clinician accountability framing + categories-blocked-in-code claim. Citation sources: HDG sign-off list row 4 SAFE + Cena accountability model + Appendix C #4. **Launch-gating partner-input #4 — five-categories-blocked enumeration** — hedged default ships (categories-of-clinical-action without enumeration); upgrade gated on Andrey verification.
- **Section 7: Outcome capture.** Substrate-architecture methodology claim + VBC reporting satisfaction. Citation sources: Cena-architecture canon (`ava.md`) + general regulatory framework reference (VBC reporting requirements per partner contract).
- **Section 8: Re-assessment trigger.** Substrate-architecture trigger-criteria claim + IRB + CDS audit satisfaction. Citation sources: Appendix C #1 audit-trail primitive + HDG §3.3 SAFE + HDG §3.2 HEDGE IRB framing.
- **Section 9: References.** Citation-format discipline per citation spec §5 + §7 pre-ship gate.

**Legacy stale claims watchlist** (per citation spec §4): 30% readmissions, 1.8% HbA1c, 85% adherence, $3,200 savings — explicitly off-limits anywhere on this page, including the synthetic recommendation's outcome capture and the recommendation text itself. Watch for legacy strategy/CLAUDE.md proof-point-library leakage.

**HDG handoff sequence (citation spec §8) applies in full to every annotation on this page.** Per the 2026-06-08 HDG packet status update, recommended phrasings are proceed-as-approved default for design + build; launch gates on the 4 outstanding-partner-input items (items #3 + #4 touch this page).

---

## Outstanding partner-input touchpoints

Per [outstanding-partner-input.md](../outstanding-partner-input.md), two of four launch-gating items touch this page:

**Item #3 — SHA-256 message-hash chain currency** (Andrey / implementation-vs-aspirational confirmation):
- **Touchpoint:** Section 4 (Reasoning step) verification-hash field annotation.
- **Hedged default that ships now:** Annotation references "verification hash" or "cryptographic verification pattern" at the architectural-pattern altitude without naming the SHA-256 algorithm. The hub stays at the verification-hash-pattern altitude per the `/how-the-substrate-works` hub brief; this sample-trail page mirrors that altitude.
- **Upgraded version that ships when input lands:** If Andrey confirms SHA-256 implementation, the verification-hash field annotation may name the algorithm. If Andrey confirms aspirational-only, the verification-hash framing holds at the architectural-pattern altitude with no algorithm name. The `/provenance-and-accountability` sub-page carries the deeper hedge/upgrade decision.

**Item #4 — Five-categories-blocked-in-code currency** (Andrey / clinical-safety scope confirmation):
- **Touchpoint:** Section 6 (Clinician approval) annotation reference to categories-of-clinical-action.
- **Hedged default that ships now:** *"Categories of clinical action require named-approver action — enforced in code, not in training."* No enumeration of the five categories. Per HDG §3.2 SAFE + outstanding-partner-input.md item #4 hedged default.
- **Upgraded version that ships when input lands:** If Andrey confirms specific-five enumeration AND the categories are publicly nameable, the annotation may enumerate. If publicly partner-sensitive, the hedged default holds; specific enumeration stays in NDA room.

**Items #1 (UConn-named) + #2 (US-only residency)** do not directly touch this page. Item #1's UConn-named upgrade lives on `/reference-program` + homepage proof strip. Item #2's US-only residency claim lives on `/how-the-substrate-works/security`. Neither affects sample-trail annotations.

---

## Expert conflicts resolved

**Honest disclosure:** No literal 2+ expert review-pass conflicts existed in this synthesis run — this brief was authored directly against the canonical specs (IA §8, voice.md §2, citation discipline §3, HDG packet §3.3). The following items reflect *anticipated* cross-lens decisions and brief-internal calls that needed resolution:

- **Section 5 (recommendation citations) — real peer-reviewed literature on synthetic content?** HDG §3.3 HEDGE explicit: real, current, primary-source nutrition literature (not invented) + annotation noting "sample citation pattern." Citation spec §3 row "/sample-audit-trail recommendation lit-citations" confirms: "Clinical outcomes (the sample recommendation must cite real peer-reviewed literature even though the patient case is synthetic — citations carry the substrate's posture)." **Resolution:** Real peer-reviewed citations + sample-citation-pattern annotation note. The discipline IS the credibility move. Citations are generic food-as-medicine / clinical-nutrition literature, NOT partner-specific (partner referent forbidden per HDG sign-off list row 6).
- **Section 4 (reasoning step) — name model architecture or stay vendor-independent?** HDG §3.3 SAFE + §7 vendor-not-named-publicly default + Ava vendor-independence stance per `project_ava_vendor_independence` memory. **Resolution:** Vendor-independent reference — "the model architecture in use at the time of generation." No vendor name. Honors strategic stance + avoids dating the page.
- **Section 6 (clinician approval) — role only, or include a sample name (real or fake)?** HDG §3.3 CRITICAL explicit: clinician *role* only, never a specific name even fake. **Resolution:** Role-only — RD, CC, attending physician. The discipline at the sample-artifact altitude IS the credibility move.
- **Sections 5 + 7 — show synthetic outcome values, or describe pattern only?** HDG §3.3 SAFE + synthetic-data discipline + voice.md §5 forbidden outcome percentages. **Resolution:** Show field shape + measurement methodology marker; synthetic values may appear in the field block but no aggregate outcome percentage / dollar figure appears in annotations. The methodology pattern is what the legal-compliance reader is evaluating.
- **No-CTA discipline — does the wayfinding-band pattern from sibling pages apply here?** IA §9 explicit + voice.md §9 explicit: no CTA + no wayfinding-band CTA on credibility surfaces. Sibling targeted-landing surfaces carry wayfinding bands; this page does not. **Resolution:** No CTA. No wayfinding band. The IRB liaison's path to action is offline (close tab, reply to champion). Honoring that path means no button + no inline-link CTA + no wayfinding-band sales-y deep-link.
- **Page length — match `/how-the-substrate-works` hub (2,000-3,500 words) or shorter?** IA §8 explicit + voice.md §2 artifact-voice register + Specific notes in dispatch. **Resolution:** Page is SHORT by design — likely 800-1,400 words for the artifact itself. The pattern is the load-bearing artifact. This BRIEF is 1,200-2,000 words specifying the pattern; the page emits shorter. Voice contract: artifact does the work, prose gets out of the way.
- **Annotation reading-path for IRB liaison — sidebar or breadcrumbs?** IA §8 explicit: BOTH. Breadcrumbs (How the substrate works › Provenance & accountability › Sample audit trail) reinforce orientation; sidebar shows substrate-hub position + sibling sub-pages + sample-trail anchors. **Resolution:** Both ship — breadcrumbs at top of content area, sidebar adjacent to content. Phase 3 owns the visual treatment.

---

## Open questions for Aaron-gate

1. **Section 3 (Input data) — name a single example source-system shape (e.g., "partner EHR FHIR endpoint") or show 2-3 source-system shapes in the sample (FHIR + file drop + API)?** Recommendation: name one (likely FHIR endpoint, since it's the most common partner-system shape per HDG §3.4) and annotate the field shape as generalizable to file-drop / API-convention variants. Avoids overloading the sample with multiple variant shapes. Confirm — or override if multi-shape sample reads as more demonstrative of the substrate's flexibility.

2. **Section 5 (Recommendation) — how many peer-reviewed literature citations in the synthetic recommendation? One, two, or three?** Recommendation: 1-2 citations — enough to demonstrate the citation pattern without overloading the sample. The annotation explicitly notes "sample citation pattern; actual recommendations cite the literature current at the time of generation," so the count is about pattern demonstration, not exhaustiveness. Confirm — or override if 3+ citations read as more credibility-positive.

3. **Section 5 — specific peer-reviewed paper selection.** Recommendation: Substep 5 (or Phase 3 build) selects 1-2 generic food-as-medicine / clinical-nutrition citations that (a) meet PubMed-DOI bar per citation spec §2, (b) are NOT partner-specific (no UConn HIV-nutrition program citations even if available), (c) are NOT the cited "Berkowitz SA et al. 2018 *Health Affairs*" worked example from citation spec §9(a) (that example is illustrative for the spec, not for the sample page — pick distinct citations to avoid the "demo from the spec" read), (d) are not stale per citation spec §4 off-limits. Confirm citation-selection process — or override with specific paper recommendations.

4. **Section 6 (Clinician approval) — show a "modify-and-approve" decision in the sample, or just a clean "approve"?** Recommendation: show modify-and-approve. Demonstrates that the substrate captures clinician modifications, which is more credibility-positive than a plain approve. Per HDG §3.3 + accountability-model framing. Confirm — or override.

5. **Synthetic patient case context — what synthetic clinical indication?** Recommendation: pick an indication that is NOT the UConn HIV-nutrition pilot's clinical area (HIV-nutrition is partner-specific even at the indication level — using it on a synthetic-data page may read as ambiguously partner-adjacent). Pick a different food-as-medicine indication (e.g., diabetes nutrition, CKD nutrition, oncology nutrition — per IA §7 "three worked examples" framing) to keep synthetic-discipline crisp. Confirm indication direction — or override.

6. **Verification-hash field display in §4 — show a sample hash value (e.g., 64-char synthetic string) or just label the field?** Recommendation: show a synthetic hash value as a 64-char string-shape (visually communicates "this is a cryptographic verification field") without naming the SHA-256 algorithm in annotation. The visual shape signals the architectural pattern; the annotation stays at the verification-hash-pattern altitude per outstanding-partner-input.md item #3. Confirm — or override if no hash value shows (just field label) reads as cleaner.

7. **Visual treatment of synthetic-data marker (§0) — callout banner, labeled card, sticky-top label, or other?** Recommendation: punt to Phase 3 HVD. Per HDG sign-off list row 6, the *content* of the marker is canonical; the visual treatment must signal documentation-header weight (not warning-banner weight). Confirm visual direction or punt to Phase 3 HVD.

8. **Outstanding partner-input items #3 + #4 — ship hedged defaults now, or hold the page from launch until at least one resolves?** Recommendation per outstanding-partner-input.md discipline + Aaron's 2026-06-07 framing ("i want to move forward but i don't want to lose these needs"): ship hedged defaults; launch-gate the full site on partner-input resolution; upgrade to strict-superset versions when partner input lands. Confirm launch-gating approach (page ships hedged; full launch gated on partner-input resolution).

---

## Sign-off

- [ ] Plain Language Positioning
- [ ] Cena Technical Accuracy
- [ ] Healthcare Data Governance
- [ ] Brand Voice Reviewer
- [ ] Aaron-gate
