# Outstanding Partner-Input Requirements — Public Site

**Status:** Living doc · **Date:** 2026-06-08 · **Owner:** Aaron

Tracker for items that require explicit input from a partner (Vanessa for clinical/comms; Andrey for technical; outside counsel for legal) **before the site or specific claims ship publicly**.

**Discipline (per Aaron, 2026-06-08):** Cena proceeds-as-approved for design + build progress. Site cannot launch until these items resolve. No FYI / questions-we-can-answer-ourselves on this list — only genuine partner-input-required items live here.

**Don't lose these.** Per Aaron's HDG-packet annotation: *"i want to move forward but i don't want to lose these needs which will have to remain outstanding for the moment."*

---

## Pre-launch required (4 items)

| # | Item | Surface(s) affected | Partner | What's required | Status / Last touched |
|---|---|---|---|---|---|
| 1 | UConn-named pilot reference upgrade | `/reference-program` headline · homepage proof strip · `/proof` first slot | Vanessa Sena (→ UConn comms) | UConn red-line response to Vanessa's previously-sent red-line, confirming Cena may use UConn name publicly | **In flight.** Vanessa 2026-06-07: *"UConn said it shouldn't be a problem, but they haven't responded to my red line yet. Let's wait a few more days for them to confirm."* Cena default: ship generic-AMC reference; upgrade to UConn-named is a strict-superset edit when clearance lands. |
| 2 | US-only data residency claim verification (end-to-end across vendor stack) | `/how-the-substrate-works` `#security` section · `/how-the-substrate-works/integration` | Andrey | Confirm US-only data residency holds end-to-end across Anthropic, vector store, embedding service, any other inference path. Per UConn BAA §13 offshore-PHI ban this is also partner-contractual. | **Open.** Last raised 2026-04-29 HDG dispatch on Dieckhaus kickoff. Default: claim does NOT ship until Andrey confirms. Hedged alternative for site: *"BAA-eligible cloud infrastructure"* + defer specifics to NDA room. |
| 3 | SHA-256 message-hash chain currency | `/how-the-substrate-works/provenance-and-accountability` · `/sample-audit-trail` annotations · Phase 1 Appendix C #2 | Andrey | Confirm SHA-256 message-hash chain is implemented in Spark today vs. aspirational. | **Open.** Default if aspirational: downgrade Appendix C #2 to *"…carries a verification hash"* or defer to NDA room. Cena does not ship a claim Andrey would not stand behind under technical-evaluator scrutiny. |
| 4 | Five-categories-blocked-in-code currency | `/how-the-substrate-works` non-scope band · Phase 1 Appendix C #4 | Andrey | Confirm the five categories of clinical action requiring named-approver are documented and enforced in code today. | **Open.** Default if directional: hedge Appendix C #4 to *"categories of clinical action are blocked at the system level"* (drop the "five" if not enumerated in code). |

---

## How this list resolves

Each item resolves when one of three things happens:

1. **Partner input lands** → item closes; the relevant claim moves to "ship" status with citation per [`citation-discipline-spec.md`](citation-discipline-spec.md) §2 (partner-attested for #1; Cena-architecture for #2-4)
2. **Cena rewrites the claim** to not need the input → item closes; the hedged-down phrasing already specified in HDG packet §3 / §4 ships instead
3. **Cena removes the claim** → item closes; the surface goes without the claim entirely

**Items do not silently age off this list.** If a row's "Last touched" date is more than 14 days old, it's a sign the request needs a re-poke or the claim should be rewritten.

---

## What's NOT on this list (and why)

Per Aaron's "require" filter — these were considered for the list and excluded because Cena can self-decide:

- **BAA-ready architectural claim** — HDG recommended phrasing is safe as an architectural claim; "BAAs in place" partner-specific claim doesn't ship.
- **Vendor-stack public naming** (Google Cloud / Vertex AI / Anthropic) — Aaron-decidable; HDG recommended NOT naming publicly; route specifics to NDA room.
- **Partner-clinician accountability framing** — HDG recommended phrasing matches what Cena has been holding internally; ship as-is.
- **NDA-room teaser content** — operational call; HDG recommended categories-not-artifacts; ship as-is.
- **Sample audit trail synthetic-data discipline** — operational; ship per HDG recommendation.
- **Tenant-isolation claim** — verifiable against `ava.md`; ship per HDG recommendation.
- **FHIR/Epic integration generic language** — HDG recommended phrasing is safe; the specific "Epic-certified" / "approved Epic partner" / "live Athena API" claims do NOT ship (those would belong on this list if Cena wanted them).
- **Forward-looking BAA-disclosure threshold** — Aaron-decidable; HDG recommended hold "BAA-architected" until 2 BAAs execute; ship that posture, revisit at 2.

---

## Cross-references

- [HDG review packet](phase-2-hdg-review-packet.md) — original review document; §2 sign-off list maps to this tracker
- [Citation discipline spec](citation-discipline-spec.md) — §8 HDG handoff sequence is where these items rejoin the pipeline when they resolve
- [Phase 1 positioning brief](phase-1-positioning-brief.md) — Tech Accuracy must-not-say list is the upstream gate that produces these items
- [Phase 2 IA spec](phase-2-information-architecture.md) — names the surfaces affected by each item

---

## Maintenance

- **Update when:** partner input arrives (close + log); claim is rewritten (close + cross-reference the new phrasing); a new HDG-style review surfaces additional items requiring partner input.
- **Don't add:** items where Cena can self-decide (those belong in the relevant project doc, not here).
- **Aaron-review trigger:** when adding a new item to this list — Aaron sees + confirms it genuinely needs partner input before launch.

_Established 2026-06-08 from HDG review packet absorption._
