import { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ProjectDetailsCard,
  PhaseCard,
  TestimonialCard,
  TechStackSection,
  RelatedCaseStudyCard,
} from "@/components/case-studies/CaseStudyClient";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatBlock } from "@/components/ui/StatBlock";
import { getCaseStudyBySlug, getRelatedCaseStudies } from "@/lib/case-studies";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} - [REDACTED] | Case Studies`,
    description: caseStudy.summary,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = getRelatedCaseStudies(caseStudy);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: caseStudy.title, href: `/case-studies/${caseStudy.slug}` },
  ];

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.summary,
    author: {
      "@type": "Organization",
      name: "Drexus",
    },
    publisher: {
      "@type": "Organization",
      name: "Drexus",
      logo: {
        "@type": "ImageObject",
        url: "https://drexus.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://drexus.com/case-studies/${caseStudy.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader title={caseStudy.title} breadcrumbs={breadcrumbs} />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <p className="text-xl text-gray-700 leading-relaxed">{caseStudy.summary}</p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">The Challenge</h2>
                <p className="text-gray-700 mb-6">{caseStudy.challenge.description}</p>
                <ul className="space-y-3">
                  {caseStudy.challenge.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Our Approach</h2>
                <p className="text-gray-700 mb-8">{caseStudy.approach.description}</p>

                <div className="space-y-6">
                  {caseStudy.approach.phases.map((phase, index) => (
                    <PhaseCard key={index} phase={phase} index={index} />
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">The Results</h2>
                <p className="text-gray-700 mb-8">{caseStudy.results.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                  {caseStudy.results.metrics.map((metric, index) => (
                    <div key={index} className="h-full">
                      <StatBlock
                        label={metric.label}
                        value={metric.value}
                        trend={
                          metric.change && metric.change.trim() !== ""
                            ? {
                                value: Math.abs(parseFloat(metric.change.replace(/[%,]/g, ""))),
                                isPositive: !metric.change.startsWith("-"),
                              }
                            : undefined
                        }
                        className="h-full"
                      />
                    </div>
                  ))}
                </div>

                <TestimonialCard testimonial={caseStudy.results.testimonial} />
              </div>

              {/* Technology Stack */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Technology Stack</h2>
                <TechStackSection stack={caseStudy.stack} />
              </div>

              {/* Key Outcomes */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Key Outcomes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ProjectDetailsCard caseStudy={caseStudy} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Related Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCaseStudies.map((study) => (
                <RelatedCaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
