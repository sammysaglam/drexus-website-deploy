import React from "react";

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export const dynamic = "force-dynamic";

import { ArticleCTA } from "@/components/insights/ArticleCTA";
import { ReportBadge } from "@/components/insights/ReportBadge";
import { TagChips } from "@/components/insights/TagChips";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { PageHeader } from "@/components/ui/PageHeader";
import { getInsightBySlug, getRelatedInsights, formatDate } from "@/lib/insights";
import { getContentTypeRoute } from "@/lib/insights-schema";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const report = await getInsightBySlug(slug, "special-report");

  if (!report) {
    return {
      title: "Report Not Found",
    };
  }

  return {
    title: report.title,
    description: report.excerpt,
    openGraph: {
      title: report.title,
      description: report.excerpt,
      type: "article",
      publishedTime: report.date,
      authors: [report.author.name],
      images: [
        {
          url: report.ogImage,
          width: 1200,
          height: 630,
          alt: report.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: report.title,
      description: report.excerpt,
      images: [report.ogImage],
    },
  };
}

export default async function SpecialReportPage({ params }: PageProps) {
  const { slug } = await params;
  const report = await getInsightBySlug(slug, "special-report");

  if (!report) {
    notFound();
  }

  // Compile MDX content with remark-gfm for table support
  const mdxResult = await compileMDX({
    source: report.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const relatedContent = await getRelatedInsights(report, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Special Reports", href: "/insights?type=special-report" },
    { label: report.title, href: `/insights/special-reports/${report.slug}` },
  ];

  // JSON-LD for Report
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: report.title,
    description: report.excerpt,
    image: report.ogImage,
    datePublished: report.date,
    author: {
      "@type": "Person",
      name: report.author.name,
      jobTitle: report.author.title,
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
      "@id": `https://drexus.com/insights/special-reports/${report.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader title={report.title} subtitle={report.excerpt} breadcrumbs={breadcrumbs} />

      {/* Hero Section for Special Reports */}
      <section className="py-12 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto text-center">
            <ReportBadge type={report.type} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{report.title}</h1>
            <p className="text-xl text-blue-100 mb-8">{report.excerpt}</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <span>{formatDate(report.date)}</span>
              <span>•</span>
              <span>{report.readingTimeMinutes} min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            {/* Author Card - Hidden for now */}
            {/* <AuthorCard author={report.author} /> */}

            {/* Report Content */}
            <div className="prose prose-lg max-w-none">{mdxResult.content}</div>

            {/* Report CTA */}
            <ArticleCTA cta={report.cta} />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Topics Covered</h4>
              <TagChips tags={report.tags} />
            </div>

            {/* Related Content */}
            {relatedContent.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Further Reading
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedContent.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/insights/${getContentTypeRoute(related.type)}/${related.slug}`}
                      className="group h-full"
                    >
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow h-full flex flex-col">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2 w-fit">
                          {related.type === "special-report"
                            ? "Special Report"
                            : related.type.charAt(0).toUpperCase() + related.type.slice(1)}
                        </span>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 flex-grow">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-auto">
                          {related.readingTimeMinutes} min read
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
