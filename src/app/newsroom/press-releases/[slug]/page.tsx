import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  MediaContactsCard,
  ResourcesCard,
  ShareCard,
} from "@/components/newsroom/PressReleaseClient";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  getPressReleaseBySlug,
  formatPressReleaseDate,
  getPressReleaseSchema,
} from "@/lib/press-releases";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pressRelease = getPressReleaseBySlug(slug);

  if (!pressRelease) {
    return {
      title: "Press Release Not Found",
    };
  }

  return {
    title: `${pressRelease.title} | Press Release`,
    description: pressRelease.summary,
    openGraph: {
      title: pressRelease.title,
      description: pressRelease.summary,
      type: "article",
      publishedTime: pressRelease.date,
    },
  };
}

export default async function PressReleaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pressRelease = getPressReleaseBySlug(slug);

  if (!pressRelease) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Press Releases", href: "/newsroom" },
    { label: pressRelease.title, href: `/newsroom/press-releases/${pressRelease.slug}` },
  ];

  // Generate structured data
  const jsonLd = getPressReleaseSchema(pressRelease, "https://drexus.com");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Press Release"
        subtitle={formatPressReleaseDate(pressRelease.date)}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h1 className="text-3xl font-bold text-navy-900 mb-3">{pressRelease.title}</h1>
                <h2 className="text-xl text-gray-600 mb-6">{pressRelease.subtitle}</h2>

                <div className="text-sm text-gray-500 mb-8">
                  <p>
                    {pressRelease.location} — {formatPressReleaseDate(pressRelease.date)}
                  </p>
                </div>

                {pressRelease.body.map((section, index) => {
                  switch (section.type) {
                    case "paragraph":
                      return (
                        <p key={index} className="mb-4 text-gray-700">
                          {section.content}
                        </p>
                      );
                    case "heading":
                      return (
                        <h3 key={index} className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
                          {section.content}
                        </h3>
                      );
                    case "quote":
                      return (
                        <blockquote key={index} className="border-l-4 border-navy-200 pl-6 my-6">
                          <p className="text-lg italic text-gray-700 mb-2">"{section.content}"</p>
                          <footer className="text-sm text-gray-600">
                            — {section.author}, {section.title}
                          </footer>
                        </blockquote>
                      );
                    case "list":
                      return (
                        <ul key={index} className="list-disc list-inside mb-4 space-y-2">
                          {section.items?.map((item, idx) => (
                            <li key={idx} className="text-gray-700">
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    default:
                      return null;
                  }
                })}

                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">About Drexus</h3>
                  <p className="text-gray-700">{pressRelease.boilerplate}</p>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <MediaContactsCard contacts={pressRelease.contacts} />

              {/* Resources */}
              {pressRelease.resources && pressRelease.resources.length > 0 && (
                <ResourcesCard resources={pressRelease.resources} />
              )}

              <ShareCard slug={pressRelease.slug} title={pressRelease.title} />
            </div>
          </div>
        </div>
      </section>

      {/* More Press Releases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">More Press Releases</h2>
          <div className="text-center">
            <Link
              href="/newsroom"
              className="inline-block px-8 py-3 bg-navy-600 text-white font-semibold rounded hover:bg-navy-700 transition-colors"
            >
              View All Press Releases
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
