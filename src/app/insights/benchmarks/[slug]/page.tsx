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
  const benchmark = await getInsightBySlug(slug, "benchmark");

  if (!benchmark) {
    return {
      title: "Benchmark Not Found",
    };
  }

  return {
    title: benchmark.title,
    description: benchmark.excerpt,
    openGraph: {
      title: benchmark.title,
      description: benchmark.excerpt,
      type: "article",
      publishedTime: benchmark.date,
      authors: [benchmark.author.name],
      images: [
        {
          url: benchmark.ogImage,
          width: 1200,
          height: 630,
          alt: benchmark.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: benchmark.title,
      description: benchmark.excerpt,
      images: [benchmark.ogImage],
    },
  };
}

export default async function BenchmarkPage({ params }: PageProps) {
  const { slug } = await params;
  const benchmark = await getInsightBySlug(slug, "benchmark");

  if (!benchmark) {
    notFound();
  }

  // Compile MDX content with remark-gfm for table support
  const mdxResult = await compileMDX({
    source: benchmark.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const relatedContent = await getRelatedInsights(benchmark);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Benchmarks", href: "/insights?type=benchmark" },
    { label: benchmark.title, href: `/insights/benchmarks/${benchmark.slug}` },
  ];

  // JSON-LD for Dataset
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: benchmark.title,
    description: benchmark.excerpt,
    datePublished: benchmark.date,
    creator: {
      "@type": "Person",
      name: benchmark.author.name,
      jobTitle: benchmark.author.title,
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
      "@id": `https://drexus.com/insights/benchmarks/${benchmark.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader title={benchmark.title} subtitle={benchmark.excerpt} breadcrumbs={breadcrumbs} />

      <article className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            {/* Benchmark Badge */}
            <div className="mb-8 text-center">
              <ReportBadge type={benchmark.type} />
            </div>

            {/* Article Meta - Hidden for now */}
            {/* <ArticleMeta
              author={benchmark.author}
              date={formatDate(benchmark.date)}
              readingTimeMinutes={benchmark.readingTimeMinutes}
              tags={benchmark.tags}
            /> */}

            {/* Benchmark Content */}
            <div className="prose prose-lg max-w-none">{mdxResult.content}</div>

            {/* Benchmark CTA */}
            <ArticleCTA cta={benchmark.cta} />

            {/* Related Content */}
            {relatedContent.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200 shrink-0">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Related Benchmarks & Insights
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
