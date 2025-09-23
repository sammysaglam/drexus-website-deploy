import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";

const newsItems = [
  {
    date: "2024-03-20",
    publication: "TechCrunch",
    title: "Drexus Raises $15M to Revolutionize Enterprise Software Development",
    excerpt:
      "The Zurich-based consultancy is taking a unique approach to solving the developer shortage...",
    url: "https://techcrunch.com/example",
  },
  {
    date: "2024-03-16",
    publication: "Forbes",
    title: "How This Swiss Startup Is Solving Silicon Valley's Biggest Problem",
    excerpt:
      "Drexus's model of embedded teams and knowledge transfer is attracting attention from Fortune 500 companies...",
    url: "https://forbes.com/example",
  },
  {
    date: "2024-02-28",
    publication: "The Information",
    title: "The New Wave of Dev Shops: Why Drexus Is Different",
    excerpt:
      "Unlike traditional consultancies, Drexus takes ownership of outcomes and focuses on building client capabilities...",
    url: "https://theinformation.com/example",
  },
  {
    date: "2024-02-15",
    publication: "VentureBeat",
    title: "Microsoft Partners with Drexus to Accelerate Azure Migrations",
    excerpt: "The partnership will help enterprises modernize their infrastructure faster...",
    url: "https://venturebeat.com/example",
  },
  {
    date: "2024-01-10",
    publication: "Business Insider",
    title: "Inside Drexus: The Company Redefining Software Consulting",
    excerpt:
      "With 100% client retention and zero project failures, Drexus is setting new standards...",
    url: "https://businessinsider.com/example",
  },
  {
    date: "2023-12-05",
    publication: "Wired",
    title: "The Future of Software Development Is Distributed and Collaborative",
    excerpt: "Drexus CEO Thomas Müller on why the traditional agency model is broken...",
    url: "https://wired.com/example",
  },
];

export default function InTheNewsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "In the News", href: "/newsroom/in-the-news" },
  ];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <PageHeader
        title="In the News"
        subtitle="Media coverage and mentions of Drexus"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 text-center mb-12">
              See what leading publications are saying about Drexus and our impact on the software
              development industry.
            </p>

            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <Card
                  key={index}
                  isPressable
                  as="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:shadow-md transition-shadow duration-200"
                >
                  <CardBody className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-navy-600">
                            {item.publication}
                          </span>
                          <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                        </div>

                        <h3 className="text-xl font-semibold text-navy-900 mb-2">{item.title}</h3>

                        <p className="text-gray-600">{item.excerpt}</p>
                      </div>

                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Media Kit CTA */}
            <div className="mt-16 text-center p-8 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Writing About Drexus?</h2>
              <p className="text-gray-600 mb-6">
                Get access to our media kit, executive bios, and high-resolution images.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/newsroom/media-contacts"
                  className="inline-block px-6 py-3 bg-navy-600 text-white font-semibold rounded hover:bg-navy-700 transition-colors"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/newsroom/press-kit"
                  className="inline-block px-6 py-3 border-2 border-navy-600 text-navy-600 font-semibold rounded hover:bg-navy-50 transition-colors"
                >
                  Download Press Kit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
