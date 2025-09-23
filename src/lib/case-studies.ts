import caseStudiesData from "../../data/case-studies.json";

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  logo: string;
  summary: string;
  featured: boolean;
  challenge: {
    description: string;
    keyPoints: string[];
  };
  approach: {
    description: string;
    phases: Array<{
      name: string;
      activities: string[];
    }>;
  };
  results: {
    description: string;
    metrics: Array<{
      label: string;
      value: string;
      change: string;
    }>;
    testimonial: {
      quote: string;
      author: string;
      title: string;
      company: string;
    };
  };
  stack: {
    [key: string]: string[] | undefined;
  };
  timeline: string;
  teamSize: string;
  services: string[];
  outcomes: string[];
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudiesData.caseStudies as CaseStudy[];
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.caseStudies.find((study) => study.slug === slug) as CaseStudy | undefined;
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudiesData.caseStudies.filter((study) => study.featured) as CaseStudy[];
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudiesData.caseStudies.filter(
    (study) => study.industry.toLowerCase() === industry.toLowerCase()
  ) as CaseStudy[];
}

export function getCaseStudiesByService(service: string): CaseStudy[] {
  return caseStudiesData.caseStudies.filter((study) =>
    study.services.some((s) => s.toLowerCase().includes(service.toLowerCase()))
  ) as CaseStudy[];
}

export function getRelatedCaseStudies(currentStudy: CaseStudy, limit: number = 2): CaseStudy[] {
  return caseStudiesData.caseStudies
    .filter((study) => {
      if (study.id === currentStudy.id) return false;

      // Score based on shared attributes
      let score = 0;

      // Same industry
      if (study.industry === currentStudy.industry) score += 3;

      // Shared services
      const sharedServices = study.services.filter((s) => currentStudy.services.includes(s));
      score += sharedServices.length;

      return score > 0;
    })
    .sort((a, b) => {
      // Sort by relevance
      const scoreA =
        (a.industry === currentStudy.industry ? 3 : 0) +
        a.services.filter((s) => currentStudy.services.includes(s)).length;
      const scoreB =
        (b.industry === currentStudy.industry ? 3 : 0) +
        b.services.filter((s) => currentStudy.services.includes(s)).length;

      return scoreB - scoreA;
    })
    .slice(0, limit) as CaseStudy[];
}
