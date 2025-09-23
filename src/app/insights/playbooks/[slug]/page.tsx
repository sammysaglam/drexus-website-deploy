import React from "react";

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamic = "force-dynamic";

import { ArticleCTA } from "@/components/insights/ArticleCTA";
import { ArticleMeta } from "@/components/insights/ArticleMeta";
import { PlaybookOverview } from "@/components/insights/PlaybookOverview";
import { ReportBadge } from "@/components/insights/ReportBadge";
import { TagChips } from "@/components/insights/TagChips";
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
  const playbook = await getInsightBySlug(slug, "playbook");

  if (!playbook) {
    return {
      title: "Playbook Not Found",
    };
  }

  return {
    title: playbook.title,
    description: playbook.excerpt,
    openGraph: {
      title: playbook.title,
      description: playbook.excerpt,
      type: "article",
      publishedTime: playbook.date,
      authors: [playbook.author.name],
      images: [
        {
          url: playbook.ogImage,
          width: 1200,
          height: 630,
          alt: playbook.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: playbook.title,
      description: playbook.excerpt,
      images: [playbook.ogImage],
    },
  };
}

export default async function PlaybookPage({ params }: PageProps) {
  const { slug } = await params;
  const playbook = await getInsightBySlug(slug, "playbook");

  if (!playbook) {
    notFound();
  }

  const relatedContent = await getRelatedInsights(playbook);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Playbooks", href: "/insights?type=playbook" },
    { label: playbook.title, href: `/insights/playbooks/${playbook.slug}` },
  ];

  // JSON-LD for HowTo
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: playbook.title,
    description: playbook.excerpt,
    image: playbook.ogImage,
    datePublished: playbook.date,
    author: {
      "@type": "Person",
      name: playbook.author.name,
      jobTitle: playbook.author.title,
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
      "@id": `https://drexus.com/insights/playbooks/${playbook.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader title={playbook.title} subtitle={playbook.excerpt} breadcrumbs={breadcrumbs} />

      <article className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            {/* Playbook Badge */}
            <div className="mb-8 text-center">
              <ReportBadge type={playbook.type} />
            </div>

            {/* Playbook Overview Card */}
            <PlaybookOverview readingTimeMinutes={playbook.readingTimeMinutes} tags={playbook.tags}>
              <p>{playbook.excerpt}</p>
              <div className="mt-2 text-sm text-gray-600">For: {playbook.persona.join(", ")}</div>
            </PlaybookOverview>

            {/* Author Info */}
            <ArticleMeta
              author={playbook.author}
              date={formatDate(playbook.date)}
              readingTimeMinutes={playbook.readingTimeMinutes}
              tags={[]}
            />

            {/* Playbook Content */}
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={playbook.content} components={mdxComponents} />
            </div>

            {/* Playbook CTA */}
            <ArticleCTA cta={playbook.cta} />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Topics</h4>
              <TagChips tags={playbook.tags} />
            </div>

            {/* Related Content */}
            {relatedContent.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Related Resources
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
