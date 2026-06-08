# Citation Discipline Spec — Cena Health Public Site

**Status:** Phase 2 Substep 4 · **Date:** 2026-06-07 · **Anchor:** [`.claude/rules/verify-time-sensitive-claims.md`](../../../.claude/rules/verify-time-sensitive-claims.md)

This spec governs every quantitative, statutory, and attribution claim on `cenahealth.com`. It is the **pre-ship gate** that Substep 5 (content plan) verifies per page and that Phase 3 (implementation) enforces at build-time. Citations are not a presentation layer; they are a copy precondition.

**Companion docs:** [Phase 1 positioning brief](phase-1-positioning-brief.md) · [Phase 2 IA spec](phase-2-information-architecture.md) · [`brand/voice.md`](../brand/voice.md) (Substep 2 refresh).

---

## 1. Discipline statement

Every claim on the site that ties to a statute, regulation, rate, study, market condition, partner, or Cena-architectural fact must carry a primary-source citation with a retrieval-date stamp and a re-check cadence. Model recall and WebFetch summaries do not satisfy the bar. A claim without a primary source either gets a citation, gets re-cast as a structural statement that needs no citation, or is removed.

The discipline instantiates [`.claude/rules/verify-time-sensitive-claims.md`](../../../.claude/rules/verify-time-sensitive-claims.md) for the site context. The vault rule exists because of a named failure: **Probatem, April 2026** — a deliverable cited Virginia's small-estate threshold as $50k; the current value was $75k (changed earlier in 2026, after the model's training cutoff); the domain expert caught it live in the meeting. Neither Aaron nor the drafting agent flagged it. The same failure shape kills credibility on a healthcare site faster than on a probate brief: a clinical champion who finds one outdated statistic in our Proof strip reads the rest of the site as "they don't check their work."

This spec is the structural block on that failure mode for `cenahealth.com`.

---

## 2. What counts as a primary source

Source-hierarchy by claim type. A claim ships only if its source matches the row for its claim-type — or the claim is re-cast or removed.

| Claim type | Primary source | Acceptable | Not acceptable |
|---|---|---|---|
| **Clinical outcomes** (readmissions, ED visits, HbA1c, adherence, mortality, length-of-stay) | Peer-reviewed literature: PubMed-indexed journal article with named authors, journal name, year, DOI | Cochrane systematic reviews; AHRQ-published meta-analyses; NIH-funded RCT publications | News summaries; vendor white papers; trade-press articles; ModernHealthcare / Becker's restatements; WebFetch summaries of any of the above |
| **Statutory / regulatory** (HIPAA provisions, BAA requirements, Section 1115 waiver rules, state code) | The statute or regulation itself: federal register, CFR section, state code citation with section number | Agency primary publications (CMS, HHS, OCR guidance documents with publication date) | Law-firm blog posts; news summaries; "what HIPAA says" articles |
| **Market / industry** (program prevalence, payer mix, food-as-medicine market size, VBC adoption rates) | Primary government data: CDC, CMS, BLS, HRSA, NIH; peer-reviewed health-services research | Reports from named research bodies (Commonwealth Fund, Kaiser Family Foundation, RAND) when methodology is published | Vendor-funded "industry reports"; LinkedIn posts; podcast claims; Statista summaries of unstated sources |
| **Cena-specific architecture** (Ava substrate properties, audit-trail mechanics, integration posture, BAA-ready status) | Vault canon docs in `Knowledge/Areas/Meta/Entities/cena-health/` with dated commit reference; engineering attestation from named Cena team member with date | Cena spec docs in `Lab/cena-health-spark/` or `Lab/haven-ui/` with dated commit reference | Aspirational descriptions of capabilities not yet shipped; properties of `CenaHealth/ava` archive that don't apply to current OpenClaw realization |
| **Partner-specific** (pilot reference, partner-attested outcomes, named-partner co-announcement language) | Partner-attested + dated written confirmation from partner contact (email, signed document, partner-published artifact). For Cena's current AMC pilot reference: the generic-AMC framing requires no partner sign-off; the UConn-named upgrade requires Vanessa's confirmation Vanessa has comms clearance from UConn | Partner's own published material with explicit permission to cite | Aaron's read of "what Vanessa said in passing"; un-confirmed pilot outcomes; UConn-named language before comms clears |

**The PubMed-DOI bar for clinical outcomes is non-negotiable.** Cena's whole credibility motion runs through legal/compliance and clinical-champion readers; both vet citations against this bar reflexively. A trade-press citation in our Proof strip is a credibility liability, not a credibility asset.

---

## 3. Claim-hotspot inventory

Mapped from the Phase 2 IA spec (§12 + per-page treatments in §4). Every hotspot below is a place a citation must land before the page ships.

| Surface | Claim hotspot | Required citation type |
|---|---|---|
| Homepage hero | None — hero forbidden patterns (Phase 1 Appendix B) bar quantitative claims here | n/a (structural copy only) |
| Homepage proof strip | Peer-reviewed nutrition-outcomes citations (food-as-medicine intervention literature) | Clinical outcomes |
| Homepage proof strip | "Live AMC HIV-nutrition pilot reference" | Partner-specific (generic-AMC OK pre-clearance; named UConn requires partner-attested) |
| Homepage proof strip | "BAA-ready" | Cena-specific architecture + HDG sign-off |
| Homepage substrate diagram | Architectural claims (data-in → reasoning → recommendation → audit-trail) | Cena-specific architecture |
| `/for-clinical-leaders` audit-trail primitive | "Every clinical action carries its trail" + specifics from Phase 1 Appendix C | Cena-specific architecture |
| `/for-clinical-leaders` objection band | "Preserves clinical authority" — accountability-model claims | Cena-specific architecture + clinical-accountability-model citation (`project_cena_accountability_model` memory; partner-clinician retention) |
| `/for-program-economics` thesis section | "Substrate vs. half-FTE-of-spreadsheet-assembly" — system-economics claim | Cena-specific architecture (no dollar figures or % savings unless primary-source-cited) |
| `/for-program-economics` VBC reporting | Any rate / cadence / payer-mix claim | Market / industry + Cena-specific |
| `/your-program-on-cena` matrix | What we replace / leave / connect — architectural claims | Cena-specific architecture |
| `/your-program-on-cena` consolidation patterns | HRSA / Robin Hood / state DPH grant references; Section 1115 waiver references | Statutory / regulatory |
| `/how-the-substrate-works` (hub) | Integration posture (FHIR endpoints, API conventions); reasoning architecture; provenance properties | Cena-specific architecture |
| `/how-the-substrate-works/security` | HIPAA, BAA, encryption-at-rest/in-transit, access-control-model claims | Statutory / regulatory + **HDG handoff required** (see §8) |
| `/sample-audit-trail` annotations | Each annotation claims a regulatory or clinical-decision-support requirement | Statutory / regulatory (per annotation: cite the IRB / BAA / VBC reporting / CDS requirement satisfied) |
| `/sample-audit-trail` recommendation lit-citations | Peer-reviewed-literature citations in the synthetic sample | Clinical outcomes (the sample recommendation must cite real peer-reviewed literature even though the patient case is synthetic — citations carry the substrate's posture) |
| `/reference-program` patient-journey | Architectural claims about what substrate does at each step | Cena-specific architecture |
| `/reference-program` reporting-cadence table | Any cadence / report-type / consumer claim | Cena-specific + partner-specific (cadence the AMC pilot actually produces) |
| `/for-comms` co-announcement examples | Partner-name-safe phrasing | Partner-specific (Vanessa's named pre-clearance for generic-AMC language; UConn-named requires upgrade) |
| `/proof` (collection) | Empty at launch — no claims | n/a |
| `/proof/[partner-slug]` (leaf, when filled) | All outcome claims, every clinical statistic, every dollar figure | Clinical outcomes + partner-specific (full primary-source bar) |
| `/about` | Three-person team; agents-first thesis; accountability model | Cena-specific architecture (entity docs) |

---

## 4. Explicitly off-limits — claims that cannot ship without re-citation

The following claims appear in the legacy [`brand/voice.md`](../brand/voice.md) "Financial Positioning" section and in `strategy/CLAUDE.md`'s "Proof Point Library." All are off-limits for any public-facing surface until a primary source is established per §2.

**Stale clinical-outcomes claims (require peer-reviewed literature):**

- "30% reduction in hospitalizations" / "30% readmission reduction"
- "25% fewer ER visits" / "25% ED visit reduction"
- "1.8% HbA1c reduction"
- "85% adherence rate"
- "40% higher adherence (cultural relevance)"

**Stale financial / market claims (require primary government data or named methodology):**

- "$17B in preventable costs"
- "$200 PMPM"
- "$3,200 annual savings per patient"
- "36% gross margins (→45% at scale)"
- "60-90 day implementation"
- "$1.2M-$3M Series A target" — also a fundraising-language landmine; not for the public site at all

**Stale category / differentiator claims:**

- "Only integrated MTM + clinical + behavioral + tech platform" — superlative requires market-survey citation OR re-cast as structural claim
- Any "X% reduction in Y" or "$N savings" construction without dated primary source

**The Substep 2 voice.md FULL refresh removes these from voice.md.** This spec's job is the parallel block: even if a draft pulls one of these numbers from the legacy doc, the pre-ship gate (§7) blocks it. The numbers do not get to travel through one more draft cycle.

**Per Phase 1 Appendix B (re-stated here as a citation-side rule):** these claims also cannot appear in the hero of any page regardless of citation status. The forbidden-hero-patterns rule and this spec compose — a peer-reviewed-cited 30% readmission reduction is a valid claim for the Proof strip and a forbidden claim for the hero.

---

## 5. Citation format

### Inline citation pattern

Numeric superscript footnote with click-to-jump to the page's References section. Format:

```
…peer-reviewed nutrition interventions reduce 30-day readmissions
in patients with diabetes by a clinically meaningful margin.[^1]
```

Inline citation marker: bracketed superscript. Phase 3 design-system styles the marker; this spec governs the marker's presence + the referent's content.

### References section (per page, bottom of page)

Each page carries its own References section. Format per entry:

```
[^1] Author A, Author B, Author C. "Article title." *Journal Name*
     YYYY;Volume(Issue):pages. DOI: 10.xxxx/xxxxx.
     Retrieved: YYYY-MM-DD. Re-check cadence: on-study-supersession.
```

Five fields are load-bearing:

1. **Citation content** — author / title / journal / year / DOI per source type
2. **Retrieval date** — `Retrieved: YYYY-MM-DD` — the date a Cena reviewer last verified the source resolves and says what we say it says
3. **Re-check cadence** — `annual` | `on-statute-update` | `on-study-supersession` | `on-partner-comms-shift` | `on-architecture-change`
4. **Inline marker** — the `[^N]` link in the body copy
5. **Source-type tag (machine-readable, not rendered)** — `clinical-outcomes` | `statutory` | `market` | `cena-architecture` | `partner-attested` — drives §6 maintenance pipeline

For Cena-specific architecture citations:

```
[^2] Cena Health platform architecture. Internal reference:
     Knowledge/Areas/Meta/Entities/cena-health/ava.md
     (vault commit abc1234, 2026-06-07).
     Retrieved: 2026-06-07. Re-check cadence: on-architecture-change.
```

For partner-attested citations:

```
[^3] Partner-attested. Source: written confirmation from
     [partner contact name + role], [date].
     Retrieved: YYYY-MM-DD. Re-check cadence: on-partner-comms-shift.
```

**The design system styles citation rendering.** This spec governs the citation's **content** — what gets cited, by whom, when verified — not the visual treatment. Phase 3 owns the typography, the marker positioning, the references-section layout. Substep 5 owns per-page citation drafts. This spec owns the contract that gates both.

---

## 6. Citation maintenance discipline

A site that cites well at launch but lets citations rot in production has merely deferred the failure. Citations are facts about state-of-world that drift; the discipline maintains them.

### Re-check cadences (what each tag means)

- **`annual`** — re-verify on calendar cadence; default for stable market data and unchanged-but-aging studies
- **`on-statute-update`** — re-verify when the cited statute is amended; the maintenance burden lives on the agent doing the re-check (sub up against state-code / CFR / federal register update streams)
- **`on-study-supersession`** — re-verify when a newer peer-reviewed study with overlapping scope publishes; clinical-outcomes citations especially
- **`on-partner-comms-shift`** — re-verify when partner contact changes, when partner publishes new public-facing language, or when partner attestation expires
- **`on-architecture-change`** — re-verify when the underlying Cena entity doc gets a substantive update; the cited commit-hash gives a falsifiable check

### Maintenance as a view-block pattern

Citations are a strong candidate for the [`.claude/rules/views.md`](../../../.claude/rules/views.md) primitive. Each citation's "is this still current" check is exactly the kind of falsifiable derivable that views were built to detect:

- **Source** — the cited primary source (URL, statute section, vault entity doc + commit)
- **Recipe** — the re-check cadence + the verification action
- **Rendered-at** — the retrieval-date stamp

When a citation's source hash (or partner-attestation date, or statute version) drifts, the view goes stale and a re-check fires. **Phase 3 implementation should consider modeling the per-page References sections as view-block instances.** This spec does not mandate that implementation path; it names the orientation so the maintenance discipline isn't built as a separate ad-hoc system that re-implements what views already does.

### Maintenance triggers

- **Scheduled** — annual re-check pass on all `annual`-cadence citations; mid-year scan on `on-statute-update` citations whose source statutes are in active legislative cycles
- **Event-driven** — Substep 5 (or its post-launch successor) maintains a "citation watchlist" for `on-study-supersession` and `on-partner-comms-shift` cadences
- **Pre-deploy** — every page deploy re-runs the §7 gate; any stale citation blocks the deploy

### Maintenance ownership

Cena does not have a dedicated content-ops person. Maintenance is shared:

- **Aaron** — final approval on partner-attested citations and on UConn-named upgrades
- **Vanessa** — partner comms; HDG handoff for HIPAA / regulatory updates (per §8)
- **The Cena Health entity-doc maintainers** — keep Cena-architecture citations current as the vault canon shifts
- **Future Healthcare Data Governance expert** — runs the regulatory re-check pass

Until the future-HDG expert exists, the regulatory re-check is Aaron-driven against the §8 handoff sequence.

---

## 7. The pre-ship gate

Every page must pass the following checklist before publishing. Substep 5 (content plan) embeds this checklist per page; Phase 3 (implementation) enforces it at build-time as a copy gate.

- [ ] **Every quantitative claim has an inline citation marker** — grep the page source for digits + percent / dollar / numeric phrasing; every match resolves to a `[^N]` marker or gets re-cast
- [ ] **Every citation marker resolves to a References entry** — no orphan markers, no orphan references
- [ ] **Every References entry meets §2's source-hierarchy bar** for its claim type
- [ ] **Every References entry has a `Retrieved: YYYY-MM-DD` stamp** within the last 90 days for `on-*` cadences, within the last 365 days for `annual`
- [ ] **Every References entry has a re-check cadence** from §6's vocabulary
- [ ] **Every claim in the page survives the Phase 1 brief's Tech Accuracy must-not-say list** — HIPAA-as-noun-phrase, "fully compliant," "HIPAA-certified," undated "FDA-cleared," any superlative without market-survey citation
- [ ] **Every claim survives the Phase 1 Appendix B forbidden-hero-patterns list** if it appears in a hero region
- [ ] **HIPAA / PHI / BAA / encryption claims have HDG sign-off** per §8 (this gate cannot self-satisfy)
- [ ] **Partner-named claims have partner-attested confirmation** dated within the last 12 months
- [ ] **No claim from §4's off-limits list appears anywhere** unless it has been re-cited per §2 and re-cast per Appendix B

A page that fails any item gets blocked. Failure is named in the build-time output with the page + the failing item; the fix is a copy revision, not a gate bypass.

---

## 8. Healthcare Data Governance (HDG) handoff sequence

For HIPAA / PHI / BAA / encryption / access-control / audit-log-retention claims, this spec routes to a separate review path. The citation discipline does not displace HDG review; it gates copy until HDG signs off.

**Triggering surfaces (per IA §4):**

- `/how-the-substrate-works` (hub) security section
- `/how-the-substrate-works/security` (if split as own sub-page) — per IA Substep 3 scoping preview
- `/how-the-substrate-works/provenance-and-accountability`
- `/sample-audit-trail` annotations claiming regulatory satisfaction
- NDA-gated documentation room landing page
- Any page that says "BAA-ready" — including homepage proof strip

**Handoff sequence:**

1. Substep 5 (content plan) drafts the page's HIPAA / PHI / regulatory claims with `[HDG-PENDING]` markers in place of citations
2. The page draft routes to the future Healthcare Data Governance expert (proposal landing as part of Phase 2 Substep 3) for review of:
   - Claim accuracy against current HIPAA / HITECH / OCR guidance
   - Claim phrasing for liability surface (no HIPAA-as-noun-phrase; no "certified"; no "fully compliant")
   - Sign-off on every regulatory citation per §2's statutory source-hierarchy
3. HDG expert's recommendations route to **Vanessa** for clinical-leadership sign-off
4. Vanessa's sign-off routes to **Aaron** for routing decision — ship as-cleared, return for revision, or escalate to outside counsel (the Phase 1 Contrarian-rejected path that opens back up if claims are load-bearing enough)
5. Only after Aaron's routing decision do `[HDG-PENDING]` markers convert to live citations
6. Each HDG-cleared citation carries a `Retrieved: YYYY-MM-DD` stamp from Vanessa's sign-off date, not from the original draft date
7. Re-check cadence for HDG-cleared citations is `on-statute-update` (always) and `annual` (additionally); re-check re-routes through the full HDG sequence

**This spec does not write HDG; it routes to HDG.** Substep 3 of Phase 2 owns the HDG handoff design proper — including whether the expert is built before launch or whether Vanessa + outside-counsel covers the gap. The citation spec's contribution is to ensure no HIPAA-adjacent copy ships without that route being walked.

---

## 9. Worked examples

### (a) Clinical-outcomes claim — peer-reviewed citation

**In the page (`/for-clinical-leaders` thesis section):**

> Peer-reviewed evidence supports clinically meaningful improvements in 30-day all-cause readmission rates for adults with chronic disease who received structured medically-tailored meal interventions during transitions of care.[^1]

**References entry (page footer):**

```
[^1] Berkowitz SA, Terranova J, Hill C, Ajayi T, Linsky T, Tishler LW,
     DeWalt DA. "Meal Delivery Programs Reduce The Use Of Costly
     Health Care In Dually Eligible Medicare And Medicaid Beneficiaries."
     *Health Affairs* 2018;37(4):535-542. DOI: 10.1377/hlthaff.2017.0999.
     Retrieved: 2026-06-07. Re-check cadence: on-study-supersession.
```

**Maintenance recipe:** Quarterly PubMed alert on "medically tailored meals" + "readmission" topic; on hit, review for supersession scope; if newer RCT with larger sample publishes, evaluate replacement; if cited paper is meta-analyzed-into-Cochrane, upgrade to Cochrane citation.

**Note on the example:** the cited paper above is illustrative of the *format* the discipline produces; Substep 5 must verify the cited paper exists, says what we say it says, and is the best available source before this exact citation lands. The spec does not pre-approve any specific clinical-outcomes claim — it governs how Substep 5 cites the ones it chooses.

### (b) Cena-specific architecture claim — vault-entity citation

**In the page (`/how-the-substrate-works` reasoning section):**

> The substrate's reasoning architecture is model-agnostic by design: memory, tools, and context are Cena-owned; the underlying model is swappable without re-engineering the surfaces or breaking the audit trail.[^2]

**References entry:**

```
[^2] Cena Health platform architecture: vendor-independence stance.
     Source: Knowledge/Areas/Meta/Entities/cena-health/ava.md
     (vault commit 3d3e562, 2026-06-07).
     Retrieved: 2026-06-07. Re-check cadence: on-architecture-change.
```

**Maintenance recipe:** When `Knowledge/Areas/Meta/Entities/cena-health/ava.md` commits a substantive update (not formatting), re-read the cited stance to confirm the public claim still matches the canon doc. If the canon has shifted, the page copy revises; if the canon has clarified the same stance, only the commit hash and retrieval date update.

### (c) Partner-pilot claim — partner-attested citation

**In the page (homepage proof strip + `/reference-program` frame):**

> A live academic-medical-center HIV-nutrition program runs on this substrate today.[^3]

**References entry (pre-UConn-clearance, generic-AMC form):**

```
[^3] Cena Health partner pilot reference. Partner-attested via Cena
     clinical leadership (Vanessa Sena, CEO), 2026-06-07.
     Generic AMC reference per partner-comms posture pending
     UConn-named clearance.
     Retrieved: 2026-06-07. Re-check cadence: on-partner-comms-shift.
```

**Maintenance recipe:** When Vanessa secures UConn comms clearance, the citation upgrades to UConn-named (the IA spec §7 calls this the "strict-superset edit" — page copy gets the org-name swap; the citation updates partner contact + attestation date). Until then, the generic-AMC form holds, and the citation's `on-partner-comms-shift` cadence fires the day clearance lands.

---

## 10. Failure modes the spec catches

Each failure mode names a real shape from the Phase 1 brief, the vault's memory, or the source-incident lineage. The right column names which spec mechanism blocks it.

| Failure mode | What it looks like | Mechanism that catches it |
|---|---|---|
| **WebFetch-summary-as-source** | A draft cites "ModernHealthcare reported a 30% readmission reduction" with a link to the trade article rather than the underlying study | §2's source-hierarchy explicitly excludes trade-press; per [`feedback_primary_source_values`](../../../Knowledge/Areas/Meta/MEMORY.md) memory ("don't trust WebFetch summaries"). §7 pre-ship gate rejects |
| **Outdated stat surviving ad-hoc edits** | A 2018 readmissions stat cited in a 2026 page; underlying study superseded by a 2024 RCT that found smaller effect | §6's `on-study-supersession` cadence + the Retrieved-date stamp + view-block treatment; quarterly PubMed alert as maintenance trigger. The Probatem-April-2026 failure shape (small-estate threshold drifted unnoticed) is exactly this one |
| **Plausible-but-uncited number** | A draft includes "60-90 day implementation" because it reads as the right shape, no source asked or recorded | §7 pre-ship gate's "every quantitative claim has inline citation" check. §4's explicit off-limits list names "60-90 day implementation" as one of the legacy stale numbers, blocking the easy copy-from-voice.md path |
| **HIPAA-as-noun-phrase** | Copy that says "HIPAA-compliant infrastructure" or "fully HIPAA-certified" (HIPAA is not a certification; "compliance" is a posture, not a property) | §7 gate's Tech Accuracy must-not-say check + §8 HDG handoff sequence (the language itself fails HDG review before claim accuracy is even evaluated) |
| **Partner-name claim outpacing comms clearance** | Copy that names "UConn Health" before Vanessa has confirmed UConn comms clearance for that exact phrasing | §2's partner-specific source-hierarchy requires partner-attested + dated written confirmation; §7 gate's partner-named-claims check; §6's `on-partner-comms-shift` cadence. The IA spec's generic-AMC default + strict-superset-upgrade pattern means there's always a citation-clean fallback while clearance is pending |
| **Aspirational architecture claim** | Copy that describes Ava's capabilities as if they ship today when the live build is the older Spark archive-IA per [`patient-app.md`](../../../Knowledge/Areas/Meta/Entities/cena-health/patient-app.md) | §2's Cena-architecture source requires vault canon docs with dated commit reference; the canon docs distinguish current-state from intent. §7 gate enforces |
| **Superlative without market survey** | "The only integrated MTM + clinical + behavioral + tech platform" with no market-survey citation | §2's market-claims source-hierarchy requires primary government data or peer-reviewed health-services research; §4's off-limits list names this exact claim |

The discipline is structural, not heroic — the gate runs on every page, every deploy. Self-report on whether a claim was verified is weak ([`triage-first.md`](../../../.claude/rules/triage-first.md)'s honest-limit shape); the gate is the falsifiable check.

---

## 11. Relationship to other Phase 2 substeps

- **Substep 2 (voice.md FULL refresh)** removes the §4 off-limits claims from voice.md and rewrites the "Financial Positioning" section to align with this spec's source-hierarchy. After Substep 2 lands, voice.md will not contain any quantitative claim that this spec would reject — the two substeps eliminate one path the legacy stale claims could travel through.
- **Substep 3 (Healthcare Data Governance handoff)** owns the §8 sequence proper, including whether the HDG expert is built before launch and how Vanessa-as-clinical-lead and outside-counsel cover the gap until then.
- **Substep 5 (content plan)** consumes this spec per page: every section brief lists the page's claim hotspots (§3), the citations Substep 5 will pull, and the page's pre-ship checklist (§7) status.
- **Phase 3 (implementation)** enforces the §7 gate at build-time as a copy gate and considers §6's view-block orientation for the maintenance pipeline.
