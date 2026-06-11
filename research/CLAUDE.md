# Research Directory Rules

> **Reconciliation pending (2026-06-11).** This CLAUDE.md was authored against the pre-amendment single-funnel framing and references load-bearing patterns the 2026-06-11 amendment + Phase 2 IA v2 supersede — specifically: "Audience-first navigation - User chooses path based on role/maturity" (compressed to two-track posture), "Outcome-driven sections - Every section title should hint at benefit" (collides with voice.md §4 — no "benefit" in partner-frame), "Proof-heavy - Metrics, case studies, testimonials at every level" (collides with voice.md §5 forbidden patterns — no testimonial carousel, no case-study-with-named-patient-outcomes), and the 7-competency list (likely needs reconcile against C-017 anchor + Capability-Honest discipline). Until reconciled, defer to the canonical sources for any decision the patterns below would inform:
>
> - **Audience model:** [strategy/phase-1-positioning-brief.md](../strategy/phase-1-positioning-brief.md) Amendment block + [strategy/phase-2-information-architecture.md](../strategy/phase-2-information-architecture.md) §4
> - **Site structure:** [Phase 2 IA v2](../strategy/phase-2-information-architecture.md)
> - **Voice + forbidden patterns:** [brand/voice.md](../brand/voice.md)
> - **Quantitative claim discipline:** [strategy/citation-discipline-spec.md](../strategy/citation-discipline-spec.md) + [verify-time-sensitive-claims.md](../../../.claude/rules/verify-time-sensitive-claims.md)
>
> The research material itself (competitor intelligence, market sizing inputs, raw findings) remains useful as raw input; the directory rules below are partial drift.

## Purpose of This Directory

The `/research/` directory contains market research, competitive intelligence, sitemaps, and strategic planning documents. When working in this directory, focus on **analysis, discovery, and strategic thinking** - not implementation.

## Working with Research Documents

### When Analyzing Competitors

Reference: [competitors.md](competitors.md), [competitor-sitemaps.md](competitor-sitemaps.md)

**Key Questions to Answer:**
1. What do they position as? (vendor, platform, service?)
2. What outcomes do they claim?
3. What's their primary audience?
4. What gaps exist in their offering vs. CenaHealth?
5. How do they structure their messaging?

**Output Format:**
- Comparison tables (CenaHealth vs. Competitor)
- Gap analysis (what they miss that we solve)
- Messaging opportunities (how we differentiate)
- Proof point needs (what data would strengthen our position)

### When Creating Sitemaps

Reference: [investor-partner-sitemap.md](investor-partner-sitemap.md), [generalized-sitemap.md](generalized-sitemap.md), [multi-site-architecture.md](multi-site-architecture.md)

**Sitemap Structure Principles:**
1. **Audience-first navigation** - User chooses path based on role/maturity
2. **Outcome-driven sections** - Every section title should hint at benefit
3. **Progressive disclosure** - Essential info first, depth on click
4. **Conversion-optimized** - Clear CTAs throughout
5. **Proof-heavy** - Metrics, case studies, testimonials at every level

**Required Elements:**
- Clear section hierarchy (H1 > H2 > H3)
- CTAs at section endings
- Cross-links to related content
- Download opportunities for gated content
- Conversion tracking points

**Sitemap Template Structure:**
```markdown
## Section Name
**Primary Message:** One-sentence value prop

### Key Elements:
- Core content points
- Proof points (metrics, case studies)
- Visual elements needed
- Interactive components

**CTA:** Specific next action →
```

### When Researching Core Competencies

Reference: [core-competencies.md](core-competencies.md)

**Our 7 Strategic Advantages:**
1. Integrated Nutrition-First Care Delivery
2. Tech-Enabled Value-Based Care Infrastructure
3. Turnkey Implementation for Hospitals & MCOs
4. Culturally Grounded Culinary + Clinical Expertise
5. Deep Partnerships Across Hospitals, Academia & Community
6. Data-Driven Outcomes Aligned to CMS & VBC Metrics
7. Operational Excellence in Meal Distribution & Logistics

**When writing copy, always:**
- Reference specific competencies by name
- Tie features back to these advantages
- Use competencies to structure "Why Us" sections
- Connect competencies to target audience pain points

### Research Documentation Standards

#### File Naming
- Use kebab-case: `competitor-analysis.md`
- Be descriptive: `hospital-partner-objections.md` not `objections.md`
- Date-stamp findings: `market-sizing-2025-01.md`

#### Document Structure
```markdown
# Document Title

## Purpose
One paragraph explaining why this research exists

## Key Findings
Bullet list of top 3-5 takeaways

## Detailed Analysis
Sections with headers

## Implications for CenaHealth
- How does this inform strategy?
- What messaging opportunities?
- What proof points do we need?
- What content should we create?

## Sources
Links, interviews, reports referenced

## Last Updated
YYYY-MM-DD
```

#### Markdown Formatting
- Use tables for comparisons
- Use callout blocks for key insights
- Link to related research docs
- Include inline citations [source]

## Research Priorities

### Market Research Needs
- [ ] Health system RFP language analysis (what do hospitals ask for?)
- [ ] Payer contract requirements (what metrics matter?)
- [ ] Patient journey mapping (enrollment through completion)
- [ ] Competitive pricing benchmarking
- [ ] Market sizing by segment (Medicaid, Medicare Advantage, Commercial)

### Competitive Intelligence Needs
- [ ] Full competitor website audits with screenshots
- [ ] Messaging matrix (CenaHealth vs. top 5 competitors)
- [ ] Feature comparison tables
- [ ] Pricing model comparisons
- [ ] Customer testimonial analysis (what do buyers value?)

### Content Research Needs
- [ ] SEO keyword research (what do hospitals search for?)
- [ ] Healthcare decision-maker interview insights
- [ ] Objection handling research (common concerns and responses)
- [ ] Case study development (Hartford, UConn, Kaiser stories)
- [ ] Proof point library (every claim with supporting data)

## Research Output Formats

### Competitive Analysis Template
```markdown
# Competitor Name

## Overview
- **Positioning:** How they describe themselves
- **Target Audience:** Who they serve
- **Business Model:** How they make money

## Strengths
What they do well

## Weaknesses
What they miss / where they fall short

## Differentiation Opportunities
How CenaHealth wins against them

## Messaging Implications
What we should emphasize based on their gaps
```

### Market Sizing Template
```markdown
# Market Segment: [Name]

## Total Addressable Market (TAM)
- Population size
- Eligibility criteria
- Revenue potential

## Serviceable Addressable Market (SAM)
- Geographic constraints
- Partnership requirements
- Realistic capture

## Serviceable Obtainable Market (SOM)
- Year 1 target
- 3-year projection
- Assumptions

## Key Assumptions
What we're betting on
```

### Sitemap Section Template
```markdown
## [Section Number]. [Section Name]
**Section Focus:** [One-sentence purpose]

### Subsections:

#### [Subsection Number] [Subsection Name]
- Content point 1
- Content point 2
- Content point 3

**Visual Elements:**
- Charts, graphics, screenshots needed

**Proof Points:**
- Metrics, testimonials, logos

**CTA:** [Specific action] →
```

## Collaboration with Other Directories

### Research → Strategy
Findings from research should inform:
- Audience segmentation refinement
- Messaging framework development
- Content strategy priorities

### Research → Brand
Competitive analysis should inform:
- Voice differentiation
- Visual identity direction
- Brand positioning

### Research → Copy/Content (future)
Research outputs become:
- Source material for website copy
- Proof points for case studies
- Data for infographics and reports

## Quality Standards for Research

### Data Must Be:
- **Specific:** "30% reduction" not "significant improvement"
- **Sourced:** Include where data came from
- **Dated:** Note when data was collected
- **Contextualized:** Compared to what? Over what timeframe?

### Analysis Must Be:
- **Actionable:** So what? What do we do with this?
- **Relevant:** Tied to our strategic priorities
- **Objective:** Acknowledge both strengths and weaknesses
- **Connected:** How does this relate to other findings?

### Outputs Must Be:
- **Scannable:** Headers, bullets, tables
- **Reusable:** Structured for easy reference in other contexts
- **Maintained:** Updated when new info emerges
- **Linked:** Connected to related research and strategy docs

## Research Questions to Always Ask

When analyzing anything:

1. **Who cares?** Which audience segment is this relevant to?
2. **Why now?** What makes this timely or urgent?
3. **Compared to what?** What's the baseline or alternative?
4. **So what?** What's the implication for CenaHealth?
5. **What proof?** What evidence supports or contradicts this?
6. **What action?** What should we do with this information?

## Research Ethics

When researching competitors:
- ✅ Analyze public information (websites, press, filings)
- ✅ Talk to customers and prospects
- ✅ Attend conferences and webinars
- ✅ Read published reports and studies

- ❌ Misrepresent yourself to gain access
- ❌ Violate NDAs or confidential agreements
- ❌ Access non-public systems
- ❌ Make unsubstantiated claims about competitors
