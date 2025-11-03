import React from "react";

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export const dynamic = "force-dynamic";

import { ArticleCTA } from "@/components/insights/ArticleCTA";
import { PlaybookOverview } from "@/components/insights/PlaybookOverview";
import { ReportBadge } from "@/components/insights/ReportBadge";
import { TagChips } from "@/components/insights/TagChips";
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

  // Compile MDX content with remark-gfm for table support
  const mdxResult = await compileMDX({
    source: playbook.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

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

            {/* Author Info - Hidden for now */}
            {/* <ArticleMeta
              author={playbook.author}
              date={formatDate(playbook.date)}
              readingTimeMinutes={playbook.readingTimeMinutes}
              tags={[]}
            /> */}

            {/* Playbook Content */}
            <div className="prose prose-lg max-w-none">{mdxResult.content}</div>

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
