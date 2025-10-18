# Content Briefs Overview

This directory contains structured briefs for creating high-quality content that aligns with
Drexus's editorial standards.

## Using the Briefs

The `briefs.json` file contains 10 content briefs, each designed to:

- Target specific personas with relevant problems
- Provide clear value propositions
- End with actionable free tools/resources
- Follow our editorial voice and tone guidelines

## Brief Structure

Each brief includes:

- **title**: The headline that captures the outcome/benefit
- **slug**: URL-friendly identifier for the content
- **persona**: Target audience(s) from P1-P5
- **type**: Content type (article, playbook, benchmark)
- **primaryCTA**: The main free resource offered
- **promise**: One-line value proposition
- **outline**: Key sections to cover
- **tags**: For categorization and SEO

## Creating Content from Briefs

1. **Select a brief** that matches your expertise area
2. **Review the editorial style guide** (`editorial-style.md`)
3. **Follow the outline** but add your specific experience/data
4. **Use appropriate MDX components** as outlined in the style guide
5. **Include internal links** (2 articles + 1 tool minimum)
6. **End with the specified CTA** - always a free, useful resource

## Brief Distribution by Persona

- **P1 (Founder)**: 4 briefs - Focus on scope, speed, cost
- **P2 (Ops)**: 4 briefs - Focus on metrics, conversion, efficiency
- **P3 (Product)**: 5 briefs - Focus on velocity, planning, quality
- **P4 (Product-Lead)**: 4 briefs - Focus on strategy, risk, scale
- **P5 (CTO)**: 4 briefs - Focus on technical evaluation, reliability

## Content Types

- **Articles** (7): How-to guides with specific techniques
- **Playbooks** (2): Step-by-step processes teams can implement
- **Benchmarks** (1): Data-driven performance standards

## Priority Order

Based on persona needs and search volume, prioritize:

1. MVP Scope 1-Pager (P1, P3)
2. Conversion Triage (P2, P3)
3. Vendor Diligence (P5, P4)
4. Two-Week Pilot (P5, P4)
5. 4-Experiments/Month (P3, P4)

## Quality Checklist

Before publishing content based on these briefs:

- [ ] Matches the promise stated in the brief
- [ ] Follows outline structure (can expand but don't skip)
- [ ] Includes specific metrics/examples from experience
- [ ] Uses appropriate MDX components
- [ ] Links to related content (2 articles + 1 tool)
- [ ] Ends with the specified free resource
- [ ] Passes editorial style guide requirements

## Example Usage

```bash
# To create content from a brief:
1. Copy the brief details
2. Create new MDX file: content/insights/[type]/[slug].mdx
3. Add proper frontmatter (see editorial-style.md)
4. Write content following the outline
5. Test locally before committing
```

Remember: These briefs are starting points. Add your unique expertise and real-world examples to
make each piece genuinely valuable for the target persona.
