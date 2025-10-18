import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { getAllInsights } from "@/lib/insights";
import { getContentTypeRoute, ContentType } from "@/lib/insights-schema";

interface ChangelogItem {
  date: string;
  items: Array<{
    title: string;
    slug: string;
    type: ContentType;
    author: string;
  }>;
}

export const metadata = {
  title: "Content Changelog | Insights",
  description: "Track recent updates and additions to our insights library",
};

export default async function ChangelogPage() {
  const allInsights = await getAllInsights();

  // Sort by date (newest first)
  const sortedInsights = allInsights.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Group by date
  const changelogByDate: Record<string, ChangelogItem["items"]> = {};

  sortedInsights.forEach((insight) => {
    const date = insight.date;
    if (!changelogByDate[date]) {
      changelogByDate[date] = [];
    }
    changelogByDate[date].push({
      title: insight.title,
      slug: insight.slug,
      type: insight.type,
      author: insight.author.name,
    });
  });

  const changelog: ChangelogItem[] = Object.entries(changelogByDate)
    .map(([date, items]) => ({ date, items }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Changelog", href: "/insights/changelog" },
  ];

  function formatDate(dateString: string): string {
    const date = new Date(dateString + "T00:00:00"); // Ensure consistent timezone
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();

    return `${month} ${day}, ${year}`;
  }

  function getTypeColor(type: string): string {
    switch (type) {
      case "article":
        return "text-blue-600";
      case "special-report":
        return "text-purple-600";
      case "trend":
        return "text-green-600";
      case "benchmark":
        return "text-orange-600";
      case "playbook":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  }

  function getTypeBadge(type: string): string {
    switch (type) {
      case "article":
        return "Article";
      case "special-report":
        return "Special Report";
      case "trend":
        return "Trend";
      case "benchmark":
        return "Benchmark";
      case "playbook":
        return "Playbook";
      default:
        return type;
    }
  }

  return (
    <>
      <PageHeader
        title="Content Changelog"
        subtitle="Track recent updates and additions to our insights library"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              This page tracks all published content in our insights library, organized by
              publication date. Use this to stay up-to-date with our latest research and analysis.
            </p>

            {changelog.length === 0 ? (
              <p className="text-gray-500 italic">No content published yet.</p>
            ) : (
              <div className="space-y-12">
                {changelog.map(({ date, items }) => (
                  <div key={date}>
                    <h2 className="text-2xl font-semibold text-navy-900 mb-4 pb-2 border-b border-gray-200">
                      {formatDate(date)}
                    </h2>
                    <ul className="space-y-3">
                      {items.map((item, index) => (
                        <li key={`${item.slug}-${index}`} className="flex items-start">
                          <span
                            className={`inline-block mt-1 mr-3 text-xs font-semibold uppercase ${getTypeColor(
                              item.type
                            )}`}
                          >
                            {getTypeBadge(item.type)}
                          </span>
                          <div className="flex-1">
                            <Link
                              href={`/insights/${getContentTypeRoute(item.type)}/${item.slug}`}
                              className="text-navy-800 hover:text-navy-900 font-medium hover:underline"
                            >
                              {item.title}
                            </Link>
                            <span className="text-gray-500 text-sm ml-2">by {item.author}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-16 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">For Content Contributors</h3>
              <p className="text-gray-600 mb-4">
                This changelog is automatically generated from published MDX files. To add new
                content:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Create your MDX file in the appropriate content folder</li>
                <li>Ensure frontmatter includes all required fields</li>
                <li>Follow the editorial style guide for tone and formatting</li>
                <li>Include required internal links (2 insights + 1 tool)</li>
                <li>Your content will appear here once published</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
