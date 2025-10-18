# Drexus Editorial Style Guide

This guide ensures consistent, authoritative content that speaks directly to our personas' needs
while maintaining our reputation for practical, proven expertise.

## 1. Audience Shorthand

Always write with a specific persona in mind:

- **P1 - Founder**: Non-technical founder, pre-PMF, resource-constrained
- **P2 - Ops**: Growth/Revenue Operations professional, metric-obsessed
- **P3 - Product**: Product Manager, feature velocity focused
- **P4 - Product-Lead**: VP/Head of Product, strategic horizon
- **P5 - CTO**: Technical leader, risk-aware, vendor evaluation

## 2. Voice & Tone

### Voice (Consistent Across All Content)

- **Authoritative**: We know what works because we've done it
- **Concise**: Every word earns its place
- **Friendly**: Professional but approachable, never condescending

### Tone (Contextual)

- **Pragmatic**: Focus on what's actionable today
- **Data-aware**: Support claims with specific examples
- **Empathetic**: "We've been there" founder-to-founder/peer-to-peer understanding

## 3. Style Rules

### Structure

- **Paragraphs**: 2-4 sentences maximum
- **Sentences**: Active voice, clear subject-verb-object
- **Lists**: Use numbered steps for processes, bullets for options
- **Headers**: Front-load with value (e.g., "Cut Sprint Planning by 50%" not "Sprint Planning Best
  Practices")

### Language Patterns

#### ❌ BANNED WORDS/PHRASES

- "world-class"
- "revolutionary"
- "10x overnight"
- "game-changing"
- "cutting-edge"
- "best-in-class"
- "transform your business"
- "unlock exponential growth"

#### ✅ PREFERRED ALTERNATIVES

- "practical" → Shows real-world applicability
- "defensible" → Built to last through challenges
- "repeatable" → Process, not luck
- "measurable" → Concrete outcomes
- "systematic" → Thoughtful approach
- "proven" → Backed by experience
- "sustainable" → Long-term thinking

### Measurable Claims

- **DO**: "In our experience, teams typically see 20-30% reduction in deployment friction"
- **DON'T**: "Reduce deployment friction by 10x!"
- **DO**: "Based on 50+ implementations, we've found..."
- **DON'T**: "Everyone knows that..."

### Call-to-Action Rules

- Always end with a **useful free resource** (tool, checklist, template)
- Never hard-sell services in content
- Link naturally to tools that solve the reader's immediate problem
- Frame as "next step" not "buy now"

## 4. Citation & Proof Patterns

### How to Reference Data

- **Observational**: "In our projects we typically see..."
- **Specific**: "Across 12 B2B SaaS implementations last quarter..."
- **Humble**: "While results vary, we've observed..."
- **Transparent**: "Based on our portfolio data (n=47 companies)..."

### Avoid

- Universal claims without citation
- "Studies show" without linking to the study
- Competitor comparisons
- Guarantees of specific outcomes

## 5. Component Usage Guidelines

### `<Callout>` - Definitions & Key Concepts

```mdx
<Callout type="info" title="What is Technical Debt?">
  Code or architectural decisions that speed delivery today but require refactoring later. Not
  inherently bad if managed strategically.
</Callout>
```

### `<Checklist>` - Actionable Steps

```mdx
<Checklist
  title="Pre-Sprint Checklist"
  items={[
    { text: "User stories have acceptance criteria", checked: true },
    { text: "Dependencies identified and communicated", checked: true },
    { text: "Team capacity confirmed", checked: false },
  ]}
/>
```

### `<DoDont>` - Clear Guardrails

```mdx
<DoDont
  dos={["Start with one team as proof of concept", "Measure baseline metrics first"]}
  donts={["Roll out to all teams simultaneously", "Skip the retrospective"]}
/>
```

### `<StatBlock>` - 1-3 Key Metrics

```mdx
<StatBlock
  label="Deployment Frequency"
  value="4x"
  trend={{ value: 300, isPositive: true }}
  description="Increase after implementing CI/CD"
/>
```

### `<DownloadCTA>` - Free Resources Only

```mdx
<DownloadCTA
  title="Sprint Planning Template"
  description="Our tested framework for 45-minute sprint planning"
  fileUrl="/resources/sprint-planning-template.pdf"
  fileSize="245KB"
/>
```

## 6. Persona-Specific Angles

### P1 - Founder

**Focus**: Clarity, scope, runway

- Lead with "How much will this cost/save?"
- Emphasize speed to validation
- Show path to next funding milestone

### P2 - Ops

**Focus**: Friction removal, conversion

- Start with the bottleneck they feel daily
- Quantify time/revenue impact
- Provide measurement frameworks

### P3 - Product

**Focus**: Learning velocity, prioritization

- Address feature vs. tech debt balance
- Emphasize user feedback loops
- Show how to defend roadmap decisions

### P4 - Product-Lead

**Focus**: Delivery risk, unblock plans

- Strategic planning horizons
- Team scaling challenges
- Stakeholder communication templates

### P5 - CTO

**Focus**: Diligence, SLAs, bus factor, pilot rubric

- Lead with risk mitigation
- Emphasize measurable evaluation criteria
- Provide vendor assessment frameworks

## 7. Internal Linking Requirements

Every article must include:

- **2 related articles**: Natural context links to deepen understanding
- **1 tool page**: Actionable next step for the reader
- **Pattern**: Introduce concept → expand with example → link to deeper resource

Example:

```
When teams struggle with [sprint velocity](link-to-article), it's often
a symptom of unclear requirements. Our [Requirements Clarity Scorecard](link-to-tool)
helps diagnose the root cause. For more on this, see our guide to
[backlog grooming best practices](link-to-article).
```

## 8. Compliance & Ethics

### Original Content Only

- Write from Drexus experience and expertise
- Never copy/paraphrase external sources without attribution
- Do not reference Gartner or use their frameworks/terminology

### Conservative Claims

- Under-promise in content, over-deliver in execution
- Make claims that could pass audit
- When in doubt, soften with "typically," "often," or "in our experience"

### Accessibility

- Write at 8th-grade reading level for clarity
- Define technical terms on first use
- Use examples familiar to the target persona

## Quick Reference Checklist

Before publishing any content, verify:

- [ ] Written for specific persona (P1-P5)?
- [ ] Voice is authoritative, concise, friendly?
- [ ] No banned words/phrases used?
- [ ] Claims are measurable and conservative?
- [ ] Ends with useful free resource?
- [ ] Includes 2 article links + 1 tool link?
- [ ] Uses appropriate MDX components?
- [ ] Passes accessibility readability test?

## Example Opening Paragraph

❌ **Wrong**: "Transform your engineering team with our revolutionary approach to 10x productivity
gains!"

✅ **Right**: "Engineering teams lose an average of 8 hours per sprint to context switching. Based
on our work with 50+ teams, we've developed a practical framework that typically reduces this
overhead by 30-40%. Here's exactly how to implement it."

---

_This style guide is a living document. As we learn what resonates with our audience, we'll update
these guidelines. Last updated: [Current Date]_
