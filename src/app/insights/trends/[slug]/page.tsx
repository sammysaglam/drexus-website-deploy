import React from "react";

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamic = "force-dynamic";

import { ArticleCTA } from "@/components/insights/ArticleCTA";
import { ArticleMeta } from "@/components/insights/ArticleMeta";
import { ReportBadge } from "@/components/insights/ReportBadge";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { PageHeader } from "@/components/ui/PageHeader";
import { getInsightBySlug, getRelatedInsights, formatDate } from "@/lib/insights";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trend = await getInsightBySlug(slug, "trend");

  if (!trend) {
    return {
      title: "Trend Not Found",
    };
  }

  return {
    title: trend.title,
    description: trend.excerpt,
    openGraph: {
      title: trend.title,
      description: trend.excerpt,
      type: "article",
      publishedTime: trend.date,
      authors: [trend.author.name],
      images: [
        {
          url: trend.ogImage,
          width: 1200,
          height: 630,
          alt: trend.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: trend.title,
      description: trend.excerpt,
      images: [trend.ogImage],
    },
  };
}

export default async function TrendPage({ params }: PageProps) {
  const { slug } = await params;
  const trend = await getInsightBySlug(slug, "trend");

  if (!trend) {
    notFound();
  }

  const relatedContent = await getRelatedInsights(trend);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Trends", href: "/insights?type=trend" },
    { label: trend.title, href: `/insights/trends/${trend.slug}` },
  ];

  // JSON-LD for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: trend.title,
    description: trend.excerpt,
    image: trend.ogImage,
    datePublished: trend.date,
    author: {
      "@type": "Person",
      name: trend.author.name,
      jobTitle: trend.author.title,
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
      "@id": `https://drexus.com/insights/trends/${trend.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader title={trend.title} subtitle={trend.excerpt} breadcrumbs={breadcrumbs} />

      <article className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            {/* Trend Badge */}
            <div className="mb-8 text-center">
              <ReportBadge type={trend.type} />
            </div>

            {/* Article Meta */}
            <ArticleMeta
              author={trend.author}
              date={formatDate(trend.date)}
              readingTimeMinutes={trend.readingTimeMinutes}
              tags={trend.tags}
            />

            {/* Trend Content */}
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={trend.content} components={mdxComponents} />
            </div>

            {/* Trend CTA */}
            <ArticleCTA cta={trend.cta} />

            {/* Related Content */}
            {relatedContent.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Related Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedContent.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/insights/${related.type === "special-report" ? "special-reports" : related.type}/${related.slug}`}
                      className="group"
                    >
                      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <p className="text-sm text-blue-600 mb-2">
                          {related.type === "special-report" ? "Special Report" : related.type}
                        </p>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-600">
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
