# Cena Health Voice Guide

_Source of truth for voice on the Cena Health public site and every authored artifact downstream of it._

_Anchored to the Phase 1 positioning brief (`../strategy/phase-1-positioning-brief.md`) and the Phase 2 IA spec (`../strategy/phase-2-information-architecture.md`). When this file contradicts an earlier draft, this file wins; when it contradicts the positioning brief or IA spec, the brief / IA spec wins and this file is updated to match._

---

## 1. Voice core principles

Five principles. They compose; they are not ranked. Every sentence on a Cena surface earns its place against all five.

- **Credible before charismatic.**
  - Sentences read as defensible first, persuasive second. A skeptical legal-compliance vetter and an enthusiastic clinical champion should both finish a paragraph nodding.
  - Persuasion that does not survive a cited objection is decoration. Strip it.
  - The brand canon's "credible before charismatic" line is load-bearing — voice does not soften it.

- **Substrate, not vendor.**
  - Cena is the layer *underneath* the partner's program. Copy makes the partner the protagonist and Cena the infrastructure they ran their program on.
  - Sentences that pull Cena into the foreground ("our platform delivers…") collapse the positioning. Sentences that put the partner there ("the program your partners already run…") hold it.
  - The category anchor — **Clinical Intelligence Infrastructure for Food-as-Medicine (C-017)** — is the public claim. Voice leans into it confidently, never hedges.

- **Specificity over generality.**
  - Concrete primitives beat abstract framings. *"Audit trail per recommendation"* beats *"comprehensive provenance solution."*
  - When making a claim about what the substrate does, name the artifact it produces or the field it writes. When making a claim about what it doesn't do, name the boundary explicitly.
  - Inherits brand-brief Design Principle "Specificity Over Generality."

- **Quiet competence.**
  - Voice does not shout. No exclamation marks in body. No "transformative," no "revolutionary," no "game-changing," no superlatives that compete against a category claim already doing the work.
  - The reader's reaction should be *"these people know what they're doing"* — earned through what is said, not how loudly.
  - Inherits brand-brief Design Principle "Infrastructure Humility."

- **Audit-grade by default.**
  - Every quantitative claim carries a primary-source citation per `verify-time-sensitive-claims.md` and per the Phase 2 citation spec (sibling deliverable).
  - Unverifiable claims do not ship. *"I don't know yet"* or simple omission beats a plausible-sounding number.
  - Voice never invents metrics; if the data is not yet citable, the sentence finds a different way to make its point or is cut.

---

## 2. Per-surface voice guidance

Each surface in the IA spec has a voice register calibrated to its primary decision-role. Same five principles; different posture per audience.

### Homepage (`/`)

- **Audience:** Clinical champion primary; all five decision-roles must not fail on cold landing.
- **Register:** Partner-enabling invitation. Confident, structural, unhurried.
- **Headline (HX-1, confirmed):** *"Clinical intelligence infrastructure for food-as-medicine. Built for the programs your partners already run."*
- **Voice mechanics in the headline:**
  - First sentence states the category (C-017) — fights NourishedRx shadow head-on by naming the category before competitor framing can occupy the read.
  - Second sentence does partner-enabling work without "benefit" (forbidden) and without naming meals/kits/dietitians (forbidden in first viewport). "The programs your partners already run" surfaces the brownfield reality without using the word.
- **Do:** *"Cena runs underneath what you've built, not instead of it."*
- **Don't:** *"Transform your food-as-medicine program with Cena's revolutionary AI platform."*
- **Per-surface taboos:** no hero CTA button (see §8 reservation mitigation); no meal/kit/dietitian/kitchen imagery in first viewport; no outcome percentage or dollar figure in hero copy.

### For clinical leaders (`/for-clinical-leaders`)

- **Audience:** Clinical champion (CMO, Program Director, PI). Single role.
- **Register:** Peer-to-peer, clinician-respecting. Speaks to *"will this preserve my clinical authority?"* before *"what does it do?"*
- **Headline (H1):** *"The clinical infrastructure your nutrition program runs on."*
- **Voice mechanics:** Partner-enabling frame; "your nutrition program" centers the champion as protagonist; "runs on" makes Cena structural rather than additive.
- **Do:** *"Your dietitians keep their workflows. Your IRB keeps its approval process. The substrate captures the trail so your committee has what it needs."*
- **Don't:** *"Our AI augments your clinical team to drive better outcomes."* (vendor framing; "drive outcomes" is content-free)
- **Per-surface taboos:** no language that implies Cena replaces or displaces clinicians; no "AI does the diagnosis"; no patient-outcome storytelling.

### For program economics (`/for-program-economics`)

- **Audience:** Exec sponsor / financial steward (VP Population Health, VBC CFO, payer medical director).
- **Register:** Defensible-spend register. Economic frame; audit as bridge concept earning both financial-steward and comms-vetter reads.
- **Headline (H4):** *"Run your food-as-medicine program on infrastructure that holds up to audit."*
- **Voice mechanics:** "Run your … program" preserves partner ownership; "infrastructure that holds up to audit" is the differentiating frame — financial stewards read "defensible spend," compliance reads "citable on co-announcement."
- **Do:** *"Per-program economics, not per-patient pricing. The substrate produces what your VBC reporting requires — automatically, by the system."*
- **Don't:** *"At only $X PMPM, Cena delivers Y% ROI within Z months."* (forbidden patterns; per-patient pricing is the delivery-vendor tell)
- **Per-surface taboos:** no per-patient pricing; no "ROI calculator"; no testimonial carousel; no SaaS pricing-tier table.

### Your program on Cena (`/your-program-on-cena`)

- **Audience:** Exec sponsor primary; clinical champion secondary; comms tertiary.
- **Register:** Recognition-statement. The brownfield buyer's first read must be *"they see what we actually run."*
- **Headline:** *"Cena runs underneath what you've built, not instead of it."*
- **Voice mechanics:** Names the four canonical brownfield shapes (grant-funded clinic, sponsored pilot, Section 1115 waiver, hospital-foundation garden) in the subhead so the reader recognizes themselves in the first 200 words.
- **Do:** *"Most partners we talk to already run something. Cena runs underneath what you've built, not instead of it."*
- **Don't:** *"Migrate from your legacy program to Cena's modern platform."* (greenfield framing; "migrate" implies displacement)
- **Per-surface taboos:** no "modernize," "transform," "migrate," "upgrade from" — all imply displacement, all collapse the brownfield posture; never list Cena's modules before listing the partner's surfaces.

### For comms / external affairs (`/for-comms`)

- **Audience:** Partner-org comms, marketing, PR.
- **Register:** Translated, useful, named-contact-shaped. Voice should read as *"a real person at Cena will pick up the phone about a quote."*
- **Headline:** *"Cena, translated for your announcement."*
- **Voice mechanics:** "Translated for your announcement" names the comms peer's actual job. The page's promise is co-announcement safety, brand-asset access, and a named contact — not marketing collateral.
- **Do:** *"Three co-announcement snippets you can mirror. Brand assets at the bottom. Direct line to Vanessa Sena if you need a quote checked."*
- **Don't:** *"Download our complete media kit and brand guidelines package."* (vendor-portal register; not what the comms peer is asking for)
- **Per-surface taboos:** no marketing-collateral framing; no "media kit" language; no form-gated assets (comms peers don't fill forms when checking a quote).

### How the substrate works hub + sub-pages (`/how-the-substrate-works`, `/integration`, `/provenance-and-accountability`)

- **Audience:** Technical evaluator + legal/compliance (co-primary).
- **Register:** Factual, evaluator-respecting. No marketing inflection. Reads as documentation, not pitch.
- **Hub headline:** *"What the substrate does — and what it doesn't."*
- **Voice mechanics:** Naming non-scope alongside scope is load-bearing — disarms the unknown-unknown read without requiring the visitor to scroll.
- **Do:** *"The substrate writes one audit-trail entry per clinical action. It does not displace your clinicians, own your patient relationship, or require an EHR switch."*
- **Don't:** *"Powerful, enterprise-grade, secure, scalable architecture purpose-built for healthcare."* (adjective stack signals nothing; reads as defensive)
- **Per-surface taboos:** no developer-portal slang ("just plug in," "out of the box"); no security-marketing register ("bank-grade encryption" — say what's actually true: "AES-256 at rest, TLS 1.3 in transit, with primary-source citation"); no acronym-stacking without expansion on first use.

### Sample audit trail (`/how-the-substrate-works/sample-audit-trail`)

- **Audience:** IRB liaison; legal/compliance.
- **Register:** Artifact voice — voice almost disappears. The page is the artifact; copy is annotation.
- **Headline:** *"What an audit-ready record looks like."*
- **Voice mechanics:** Annotations explain what each field is and what it satisfies (IRB requirement / BAA log requirement / VBC reporting requirement). The artifact does the work; voice gets out of the way.
- **Do:** *"This timestamp satisfies the BAA access-log retention requirement. This citation satisfies clinical-decision-support documentation."*
- **Don't:** *"As you can see, our audit trails provide unprecedented transparency for compliance teams."* (meta-narration on what the reader is seeing; the reader sees it)
- **Per-surface taboos:** no CTAs (per IA §9); no marketing voice on the artifact page itself; no calls-to-action embedded as inline links.

### Reference program (`/reference-program`)

- **Audience:** All four vetting roles eventually land here.
- **Register:** Blueprint voice — present-tense, structural, replicable. "This is the shape of an indication program on Cena" rather than "this is what happened with one customer."
- **Headline:** *"A live academic-medical-center HIV-nutrition program runs on this blueprint today. The blueprint generalizes; the program is one instance."*
- **Voice mechanics:** Frame-setter doubles as headline. UConn-name upgrade is a strict-superset edit when Vanessa clears comms.
- **Do:** *"The program produces this report at this cadence. The blueprint applies; your indication's version of each swim-lane changes here, here, and here."*
- **Don't:** *"Our customer UConn Health achieved 30% improvement in patient outcomes."* (customer/vendor framing; named-patient-outcome storytelling; uncited figure)
- **Per-surface taboos:** the word *"case study"* (use *"blueprint"*); *"our customer X"* (use *"the live program"*); named patient outcomes (defer to `/proof` slots).

### Proof (`/proof`)

- **Audience:** All roles, substantiation stage.
- **Register:** Empty-slot-as-rigor. Voice signals *"we know what counts as proof; we publish it when it clears."*
- **Headline:** *"Partner-protagonist proof. The partner is the hero; Cena is the substrate they ran their program on."*
- **Voice mechanics:** Empty slots are themselves the proof. Voice describes the shape of proof Cena commits to publishing without overpromising on the slot.
- **Do:** *"Value-based-contract-aligned outcomes study — publishes when partner clears."*
- **Don't:** Filling an empty slot with a hedged metric to make the page feel full.
- **Per-surface taboos:** no CTAs; no "case study" framing; no carousel.

### About (footer)

- **Audience:** All roles, recognition stage.
- **Register:** Structural. What Cena is, not who we are. Quiet.
- **Headline:** *"What Cena is."*
- **Voice mechanics:** No team grid, no leadership theater, no mission statement. Names the agents-first thesis structurally; names the accountability model; names the governance posture. One page.
- **Do:** *"Cena is a three-person company built on the thesis that agents are primary brainpower. Partner-institution clinicians retain clinical accountability; Cena's substrate captures the decision trail."*
- **Don't:** *"Founded by visionary leaders passionate about transforming healthcare…"*
- **Per-surface taboos:** no leadership photo grid; no "passion" / "mission" / "vision" framing; no founder-origin-story prose.

### Per-contact landing template (`/for-[contact-or-org-slug]` — Phase 3+)

- **Audience:** A specific named contact or partner-org (e.g., Dave at a specific health system; UConn Health as an org).
- **Register:** Researched, alignment-named, never presumptuous. Voice should read as *"we paid attention to your specific work before reaching out."*
- See §7 for the full template voice contract.

---

## 3. Headline patterns

These are the headlines IA §3 locked. They are also the canonical voice exemplars — the mechanics that make each one work are the mechanics every subsequent headline on the site inherits.

- **HX-1 (Homepage):** *"Clinical intelligence infrastructure for food-as-medicine. Built for the programs your partners already run."*
  - Two-sentence composition: category-claim + partner-enabling clarifier.
  - Sentence 1 names the category (defends against NourishedRx shadow by occupying the framing slot first).
  - Sentence 2 surfaces brownfield reality without the word "brownfield"; uses "your partners" to invoke partner-as-protagonist framing.

- **H1 (For clinical leaders):** *"The clinical infrastructure your nutrition program runs on."*
  - "Your nutrition program" — possessive locates the program with the partner.
  - "Runs on" — structural verb; Cena is what it runs on, not what it does.
  - "Clinical infrastructure" — clinical-champion-language; speaks to peer-to-peer register.

- **H4 (For program economics):** *"Run your food-as-medicine program on infrastructure that holds up to audit."*
  - Imperative verb addressed to the financial-steward reader.
  - "Holds up to audit" — bridge concept that earns financial-steward (defensible spend) and comms-vetter (citable) reads simultaneously.
  - "Your food-as-medicine program" — possessive again; brownfield-respecting.

- **Hub headline (How the substrate works):** *"What the substrate does — and what it doesn't."*
  - Verb-first; names non-scope alongside scope.
  - The em-dash structure is doing real work: it surfaces *"and what it doesn't"* as equally weighted, disarming the unknown-unknown read.

- **Sub-page headline pattern:** verb-first; one sentence; passes the *"could a competitor steal this and have it work as well?"* test.
  - *"Built to connect to what you already run."* — speaks to the technical evaluator's first question.
  - *"Every clinical action carries its trail."* — legal-compliance scan-mode payoff in one line.

**Inheritance rule for new headlines:** front-load load-bearing noun; verb-first when verb-first reads natural; partner-possessive when the surface speaks to a buying role; name non-scope alongside scope where unknown-unknown disarming is load-bearing.

---

## 4. Forbidden phrasings (label hygiene watchlist)

Internal vocabulary that leaks into public copy is the single most common drift mode. Watch list inherits IA §5 and extends with Phase 1 brief landmines.

| Internal vocab | Why forbidden | Public-safe alternative |
|---|---|---|
| Capability matrix | "Matrix" is procurement jargon to clinical readers | *Substrate capabilities* / *What the substrate does* |
| Patient app | Internal product handle; reads as consumer-app to partners | *Care interface* / *Patient-facing care interface* |
| Partner buying committee | Names the deal-shape, not the role-shape | *For partner organizations* (or address roles by name) |
| Clinical champion | Internal deal-role; the person doesn't think of themselves this way | *Clinical leaders* / *Program directors* / *CMOs* (role titles) |
| Exec sponsor | Same — deal-role, not role-title | *Program sponsors* / *VPs Population Health* (role titles) |
| Provenance trail | Procurement jargon for clinical readers; reads as software-feature | *Audit trail* / *Audit-ready record* |
| Brownfield consolidation | Internal deal-shape | *Your program on Cena* / *Running your existing program on Cena* |
| Reference-program blueprint | "Blueprint" is fine reader-facing; "reference-program" is internal | *Reference program* / *What a program on Cena looks like* |
| Strict-superset upgrade | Internal-only — never reader-facing | (no public equivalent) |
| Substrate (alone, as nav) | Reader-facing only in body + section headings | Use in body; never as standalone nav label |
| VozCare | Retired internal name; predates current brand | (never appears anywhere) |
| AVA / Ava voice assistant | Naming the platform invites the technical evaluator before the champion pulls them | *Cena's clinical intelligence platform* / *the substrate* |
| Voice assistant / chatbot | Patient surface is surface-primary, not chat-primary | *Care interface* / *patient-facing care interface* |
| Members | Reads as wellness brand or insurance company | *Patients* (matches partner vocabulary) |
| Customers | Vendor framing | *Partners* (institutional) / *patients* (individual) |
| Users | Consumer-product framing | *Patients* / *clinicians* / *program staff* (named by role) |
| Benefit / benefits (partner-frame) | Forbidden per Phase 1 Appendix B | State what the substrate does or produces; let the partner name the benefit |
| Transformative / revolutionary / game-changing / next-generation | Superlatives that compete with the C-017 category claim already doing the work | Cut entirely; let the noun do the work |
| Solutions | SaaS-vendor framing | *The substrate* / name the specific thing |
| Empower / empowering | Vendor-flattery framing | State the capability; let the reader name the agency |
| Seamless | Says nothing; reads as defensive | Cut; if "seamless" is true, name what makes it so |
| HIPAA-compliant (as standalone claim) | HIPAA is a regulatory framework, not a feature; "compliant" is unfalsifiable as written | *BAA-ready; audit logs retained per BAA standards; PHI handled per [specific control]* |
| Bank-grade security | Says nothing technically | Name the actual controls: encryption-at-rest standard, key-management posture, access-control model |

---

## 5. Site-wide forbidden patterns

Phase 1 Appendix B extends from hero to whole-site. These do not appear on any Cena public surface.

- **Outcome percentages in hero copy.** *"30% reduction in readmissions"* in a hero collapses Cena into the medically-tailored-meal vendor shadow.
- **Dollar figures in hero copy.** *"$3,200 per-patient savings"* triggers the per-patient-pricing read; per-patient pricing is the delivery-service tell.
- **"X% reduction in Y" headline construction.** Even in body, this construction is overused and reads as competing-on-metric rather than competing-on-category.
- **Meal / kit / recipe / dietitian / kitchen imagery anywhere.** Once any of these appear, the substrate frame dies. Includes stock food photography, recipes, dietitian portraits, kitchen scenes, plated-meal photos.
- **"Member" or "participant" language for end-users.** Patients are patients.
- **Case-study format with named patient outcomes** (even anonymized). Patient-outcome storytelling collapses into delivery-service shape. Reference programs are described by mechanics and artifacts.
- **Per-patient or per-meal pricing.** Per-program / per-system / per-contract economics only.
- **Testimonials carousel.** Partner reference is single, named, in place (the AMC pilot where it earns its keep). Never a rotating set.
- **Founder photo grid on About.** Quiet structural page; no team theater.
- **"Trusted by [logo wall]."** Cena does not have a logo wall yet, and when it does, the partner-protagonist pattern means individual partner pages, not a wall.
- **Aspirational copy in present tense.** Anything Cena does not yet do is described in honest future-tense or omitted. *"Cena's network of 400 clinics"* — not until 400 clinics exist.
- **Uncited metrics anywhere.** Every `$X` / `Y%` / outcome figure requires primary-source citation. (See §10.)
- **Stale legacy claims** from prior brand iterations: *"$17B preventable costs," "30% reduction in hospitalizations," "25% fewer ER visits," "85% adherence rate," "1.8% HbA1c reduction," "$3,200 annual savings per patient," "36% gross margins," "$200 PMPM," "$1.2M-$3M Series A,"* — none of these survive the refresh. They reappear only with primary-source citations that meet the citation spec.

---

## 6. Wayfinding-band voice pattern

Every targeted landing (`/for-clinical-leaders`, `/for-program-economics`, `/your-program-on-cena`, `/for-comms`, every future `/for-[slug]`) carries a "see Cena from another angle" wayfinding band. Aaron's Q4 resolution made this load-bearing: a forwarded link never strands the reader in a one-frame view.

- **Voice rule:** invitational, not directive. The band offers; it does not push.
- **Pattern phrase (canonical):** *"See Cena from another angle."*
- **Deep-link sentence patterns** (4-5 per band, calibrated per surface):
  - *"If you're translating this internally → for clinical leaders."*
  - *"If you're scoping the contract → for program economics."*
  - *"If you're reviewing for compliance → how the substrate works."*
  - *"If you're vetting data architecture → integration and data architecture."*
  - *"If you're checking a quote → for comms."*
  - *"If you're looking for a working example → reference program."*

- **Voice mechanics:**
  - "If you're [role-action] →" — names the reader's job, not Cena's offer.
  - Verb-first role-actions; never role-titles in the sentence (role-titles live in the surface headings).
  - No exclamation; no "click here"; no "learn more"; no "explore."
  - Arrow (→) does the navigational work; voice does not narrate the click.

- **Per-surface calibration:**
  - On `/for-clinical-leaders`, the band omits the "translating this internally" link (that's the surface the reader is on) and includes the four others.
  - On `/your-program-on-cena`, all five are typically included because the brownfield-buyer is the most likely surface for cross-role consultation.

---

## 7. Per-contact landing template voice

The `/for-[slug]` template is the IA §13 Phase 3+ capability. Voice contract for the template is authored here; per-contact fills happen when Cena uses the capability.

### What is authored once (the deterministic contract)

- **Headline pattern:** *"Cena, for [contact-name-or-org]."* No commas; no honorific; no "Dear."
- **Subhead pattern:** *"How the substrate maps to [their specific named program / initiative / focus]."*
- **Wayfinding band:** same five sentence patterns from §6.
- **Brand-fidelity guardrails:** Lora display / Source Sans 3 body; `--color-surface-page` background; same component library as the rest of the site.
- **Must-not-say guardrails for the template:**
  - Never invent a quote from the contact.
  - Never claim a relationship that does not exist ("our partner," "our customer" for someone who isn't).
  - Never name a Cena substrate capability that isn't real today (no aspirational present-tense).
  - Never include outcomes data the contact would not have agreed to publish.

### What is filled per contact (the generative fill)

- **Research-grounded context:** one paragraph naming Cena's read of the contact's specific work. Sources cited inline (their public talks, their published work, their organization's stated priorities). Voice rule: paraphrase, never quote without permission.
- **Named alignment:** 2-3 specific places Cena's substrate maps to their stated priorities. Each named alignment includes a deep-link into the relevant Cena surface (`/for-clinical-leaders`, `/how-the-substrate-works/provenance-and-accountability`, etc.).
- **Honest gap section** (optional but encouraged): one paragraph naming where Cena's substrate does *not* yet fit their work, and what would have to change for it to. Reads as competence; the contact's vetters will look for this section.
- **Named-contact CTA:** *"Direct line to [Aaron / Vanessa / whoever owns this conversation]."* Calendly or direct contact, never form-gated.

### Voice rule for the fill

- The fill is researched, not flattering. *"We've been following [contact]'s work on [specific topic]"* lands; *"We deeply admire [contact]'s incredible leadership"* does not.
- The contact is the protagonist of their own work; Cena is the substrate that might map to it. Same partner-protagonist principle as the rest of the site, applied at the individual level.
- The template makes the authoring agent's job clear: don't re-invent voice each time; fill the slots; check against the guardrails; ship.

---

## 8. Q1 reservation mitigation candidates

Aaron approved the homepage hero with no CTA but flagged unease he was *"struggling to name."* Working hypothesis: enterprise B2B visitors carry a learned expectation that hero CTA = *"this site wants me to engage"*; absence may register as *off* without a clear story for why.

Three concrete voice patterns that could rescue the absent-CTA risk. Each is honest about its trade-off.

### Candidate A — Low-key inline link in hero subhead

- **Example copy:** *"Clinical intelligence infrastructure for food-as-medicine. Built for the programs your partners already run — [or jump straight to the substrate diagram](#substrate-diagram)."*
- **Voice mechanics:** Inline link in the subhead, prefaced by *"— or"*. Signals optionality without reading as button-CTA. Routes recognition-stage reader to the section that does the most scent-of-the-substrate work.
- **Trade-off:** Mildest. Risk: still reads as "no CTA" to a reader scanning for a button.

### Candidate B — Below-fold prompt that signals options

- **Example copy** (immediately below hero, above proof strip): *"Five places to start, depending on what brought you here →"*
- **Voice mechanics:** Names the role-router cards (section 4) as the actual CTA. Acts as a visual handle ("there is a thing to do; it's just below") without committing to a button shape in the hero.
- **Trade-off:** Adds a structural element below the hero; voice writer's call whether it reads as elegant or as throat-clearing.

### Candidate C — Name the absence directly

- **Example copy** (small text below the hero, above the substrate diagram): *"We don't ask you to click — we ask you to read. The router below gets you to the right surface."*
- **Voice mechanics:** Names what's happening. Trusts the reader to recognize *"these people thought about the choice."* Inherits "credible before charismatic."
- **Trade-off:** Boldest. Risk: meta-commentary on the site reading as self-conscious. Reward: matches quiet-competence register if executed at the right scale.

### Voice writer's call

- Candidate A is the safest and most aligned with HX-1's tone. Recommend default.
- Candidate B is the structural fix; consider if Candidate A still feels thin after live testing.
- Candidate C is the boldest and most on-brand for "credible before charismatic" — surface as alternative to Aaron if a confident posture is the right read.
- Substep 2 ships with Candidate A in the default copy and Candidate C in a commented-out alternate; the final call lives with Aaron after Phase 3 implementation makes the difference visible.

---

## 9. CTA voice patterns

IA §9 names the CTA architecture; voice writes the language. One canonical example per CTA type.

### Calendar-direct, no form gate (champion-doored)

- **Used on:** `/for-clinical-leaders`.
- **Example:** *"Talk through what arming your committee looks like — 30-minute call with our clinical lead."*
- **Voice mechanics:** "Talk through" — peer-to-peer; "arming your committee" — names the champion's actual job; "30-minute call" — names the time commitment so the champion can choose; "our clinical lead" — names the role on Cena's side, signals the call won't be a sales rep.

### Form-gated calendar (financial-steward-doored)

- **Used on:** `/for-program-economics`.
- **Example:** *"Talk through the value-based-contract fit — 30-minute call with our clinical lead and economic model."*
- **Voice mechanics:** Same "talk through" register; "VBC fit" speaks to the financial steward's procurement language; the form is honest about what's gated (the economic model the call walks through).

### Working-session CTA, kept artifact

- **Used on:** `/your-program-on-cena`, `/reference-program`.
- **Example:** *"Map your existing program against Cena's substrate — 45-minute working session with our clinical and technical leads. No proposal, no pitch — a working artifact you keep regardless."*
- **Voice mechanics:** Names Cena's effort, not the partner's commitment. The kept-artifact line ("you keep regardless") is the disarmer. Inverts SaaS default ("schedule a demo!" → partner does the work) — Cena does the work; partner gets the artifact.

### NDA-gated documentation room (technical-evaluator + legal-compliance)

- **Used on:** `/how-the-substrate-works` hub.
- **Example:** *"Request the security packet — NDA-gated documentation room with integration architecture, data-handling controls, and BAA-ready legal package."*
- **Voice mechanics:** "Security packet" is procurement-language the technical evaluator and BAA counsel both recognize. The NDA gate is named, not hidden; signals Cena treats partner-org confidentiality as the norm.

### Named-contact CTA (comms-peer-doored)

- **Used on:** `/for-comms`, per-contact landings.
- **Example:** *"Direct line to Cena's announcement lead — Vanessa Sena, CEO."* (or whoever Aaron designates)
- **Voice mechanics:** Named human; named role; direct contact, not form. Comms peers don't fill forms when checking a quote.

### No-CTA pages (credibility surfaces)

- **Used on:** `/sample-audit-trail`, `/proof` collection.
- **Voice rule:** The CTA's voice is its absence. Do not insert a CTA "for completeness." The IRB liaison's action path is *"close tab, reply to champion."* Honoring that path means no button.

---

## 10. Claim-citation reflex

Voice never invents metrics. For any quantitative claim, the citation spec (sibling deliverable in this Phase 2 pass) is the gating discipline.

- **The reflex:** every `$X`, `Y%`, outcome figure, market-size claim, regulatory-deadline reference, peer-reviewed-literature claim requires primary-source citation per `verify-time-sensitive-claims.md`.
- **During drafting:** tag any unverified claim inline with `[VERIFY]`. No draft ships to Aaron with unresolved `[VERIFY]` tags.
- **The "I don't know" floor:** if a claim cannot be verified against a primary source, the sentence finds a different way to make its point or is cut. Plausible-sounding substitute numbers are forbidden.
- **For recurring claim families** (peer-reviewed nutrition outcomes citations; substrate architecture claims; BAA / encryption / access-control claims): maintain a project-level `current-facts.md` reference (per Substep 4) with dated primary-source citations, updated as canon shifts.
- **Stale legacy claims explicitly off-limits** (until re-cited): see §5 site-wide forbidden patterns. None of the legacy numbers survive without re-citation.

---

## 11. Internal-vocab translation reference

Working-level translations writers reach for on the fly. Mirrors §4 hygiene watchlist; this table is the short-form on-the-fly lookup.

| Working draft says | Public copy says |
|---|---|
| Capability matrix | Substrate capabilities |
| Patient app | Care interface |
| Brownfield buyer | Partner running an existing program |
| Greenfield buyer | Partner standing up a new program |
| Champion / sponsor / vetter | (name the role: CMO / VP Population Health / IRB liaison) |
| Provenance trail | Audit trail |
| Reference-program blueprint | Reference program |
| Strict-superset upgrade | (cut; internal-only) |
| AMC | Academic medical center |
| VBC | Value-based contract (on first mention; VBC after) |
| BAA | Business Associate Agreement (on first mention; BAA after) |
| CDS | Clinical decision support |
| PHI | Patient health information (on first mention; PHI after) |
| 1115 waiver | Section 1115 Medicaid demonstration waiver |
| Ava / Ava agent | The substrate / Cena's clinical intelligence platform |
| VozCare | (never appears) |
| Half-FTE of spreadsheets | The part-time analyst hours that currently assemble the reports manually |
| The pipeline | (cut; internal-only — name the specific output) |
| The Bet | (cut; internal-only) |

---

## 12. Maintenance note

This file updates when:

- The positioning brief (`../strategy/phase-1-positioning-brief.md`) substantively changes — voice anchors must follow.
- The IA spec (`../strategy/phase-2-information-architecture.md`) adds a surface — per-surface voice section in §2 must extend.
- The citation spec (sibling deliverable, this pass) is updated — §10 reference must follow.
- Brand canon (`Lab/cena-health-brand/BRAND.md`, `_brief/brand-brief.md`) shifts on design principles or color tokens that voice references — §1 principles must reconcile.
- An internal-vocab landmine surfaces in a public-facing artifact — §4 hygiene watchlist gains the row.
- A per-contact landing instance ships and surfaces voice patterns the template did not anticipate — §7 contract updates.
- Phase 3 implementation surfaces a CTA pattern not in §9 — table extends.

When this file updates, the Phase 1 brief and IA spec are checked for whether the voice change implies a brief / IA change. If yes, those documents update too; voice and IA stay reconciled.

_Last updated: 2026-06-07 (FULL refresh against Phase 1 positioning brief + Phase 2 IA spec per Aaron-gate; supersedes all prior voice.md content)._
