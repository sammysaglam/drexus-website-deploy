# Content Writing Quick Start Guide

## Before You Write

1. **Pick Your Persona**: Who exactly are you writing for?
   - P1 (Founder) → Focus on cost/runway
   - P2 (Ops) → Focus on metrics/conversion
   - P3 (Product) → Focus on velocity/features
   - P4 (Product-Lead) → Focus on strategy/risk
   - P5 (CTO) → Focus on technical evaluation

2. **Choose Your Angle**: What specific problem are you solving?

## Writing Template

### Title

`[Outcome] + [Timeframe] + [Method]` Example: "Reduce Sprint Planning to 45 Minutes with Async Prep"

### Opening (2-3 sentences)

1. Problem statement with specific metric
2. Our experience/observation
3. What this guide provides

Example: "Sprint planning meetings average 3 hours and still leave teams confused about priorities.
After facilitating 200+ sprints, we've found that 80% of this time is wasted on discussions that
could happen async. This guide shows you exactly how to cut planning time by 70% while improving
clarity."

### Body Structure

1. **Why This Matters** (1-2 paragraphs)
   - Specific pain points
   - Cost of inaction

2. **Our Approach** (numbered steps)
   - Concrete, actionable steps
   - Include examples
   - Add screenshots/diagrams where helpful

3. **Common Pitfalls** (`<DoDont>` component)
   - 3-5 dos and don'ts

4. **Measuring Success** (`<Checklist>` component)
   - 3-5 observable outcomes

### Closing

1. One-sentence summary
2. Link to related articles (2)
3. Free tool/resource CTA (1)

## MDX Component Cheat Sheet

```mdx
// For definitions

<Callout type="info" title="Term">
  Definition here
</Callout>

// For key metrics

<StatBlock label="Metric Name" value="23%" trend={{ value: 15, isPositive: true }} />

// For action items

<Checklist
  title="Next Steps"
  items={[
    { text: "First item", checked: true },
    { text: "Second item", checked: false },
  ]}
/>

// For guidance

<DoDont dos={["Good practice 1", "Good practice 2"]} donts={["Bad practice 1", "Bad practice 2"]} />

// For resources

<DownloadCTA title="Resource Name" description="What they'll get" fileUrl="/path/to/file" />
```

## Self-Edit Checklist

- [ ] Can I remove 25% of the words without losing meaning?
- [ ] Did I use active voice in 90%+ of sentences?
- [ ] Are all claims backed by specific examples?
- [ ] Does every section provide actionable value?
- [ ] Did I link to 2 articles + 1 tool?
- [ ] Is my CTA genuinely useful (not salesy)?

## Example Article Opener Comparison

❌ **Too Vague/Hypey**: "In today's fast-paced world, engineering teams need to be more agile than
ever. Our revolutionary methodology will transform how you work."

✅ **Specific/Valuable**: "The average engineering team spends 12 hours per week in meetings, with
sprint planning consuming 3+ hours alone. We've helped 50+ teams cut this to 45 minutes while
actually improving sprint outcomes. Here's the exact playbook."

## Remember

- You're writing to a peer who's smart but busy
- Every sentence should provide value or build trust
- When in doubt, be more specific
- End with something immediately useful

---

_For full guidelines, see [editorial-style.md](./editorial-style.md)_
