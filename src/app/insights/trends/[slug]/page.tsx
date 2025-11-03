import React from "react";

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export const dynamic = "force-dynamic";

import { ArticleCTA } from "@/components/insights/ArticleCTA";
import { ReportBadge } from "@/components/insights/ReportBadge";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { PageHeader } from "@/components/ui/PageHeader";
import { getInsightBySlug, getRelatedInsights } from "@/lib/insights";
import { getContentTypeRoute } from "@/lib/insights-schema";

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

  // Compile MDX content with remark-gfm for table support
  const mdxResult = await compileMDX({
    source: trend.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

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

            {/* Article Meta - Hidden for now */}
            {/* <ArticleMeta
              author={trend.author}
              date={formatDate(trend.date)}
              readingTimeMinutes={trend.readingTimeMinutes}
              tags={trend.tags}
            /> */}

            {/* Trend Content */}
            <div className="prose prose-lg max-w-none">{mdxResult.content}</div>

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
