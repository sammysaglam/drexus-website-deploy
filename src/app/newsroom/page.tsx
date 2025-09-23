"use client";

import { useState, useMemo } from "react";

import { Card, CardBody, Chip, Select, SelectItem } from "@heroui/react";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { getAllPressReleases, formatPressReleaseDate } from "@/lib/press-releases";

interface SelectOption {
  value: string;
  label: string;
}

const categories = [
  { value: "all", label: "All Categories" },
  { value: "funding", label: "Funding" },
  { value: "partnership", label: "Partnerships" },
  { value: "company", label: "Company News" },
  { value: "expansion", label: "Expansion" },
];

const years = [
  { value: "all", label: "All Years" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
];

export default function NewsroomPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Newsroom", href: "/newsroom" },
  ];

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  const pressReleases = getAllPressReleases();

  const filteredReleases = useMemo(() => {
    return pressReleases.filter((pr) => {
      if (categoryFilter !== "all" && pr.category !== categoryFilter) return false;
      if (yearFilter !== "all" && new Date(pr.date).getFullYear().toString() !== yearFilter)
        return false;
      return true;
    });
  }, [pressReleases, categoryFilter, yearFilter]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      funding: "success",
      partnership: "primary",
      company: "secondary",
      expansion: "warning",
    };
    return colors[category] || "default";
  };

  return (
    <>
      <PageHeader
        title="Newsroom"
        subtitle="Latest news and announcements from Drexus"
        breadcrumbs={breadcrumbs}
      />

      {/* Quick Links */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/newsroom/press-kit"
              className="inline-flex items-center gap-2 px-6 py-2 border border-navy-600 text-navy-600 rounded hover:bg-navy-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
              Press Kit
            </Link>
            <Link
              href="/newsroom/media-contacts"
              className="inline-flex items-center gap-2 px-6 py-2 border border-navy-600 text-navy-600 rounded hover:bg-navy-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Media Contacts
            </Link>
            <Link
              href="/newsroom/in-the-news"
              className="inline-flex items-center gap-2 px-6 py-2 border border-navy-600 text-navy-600 rounded hover:bg-navy-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              In the News
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-4 max-w-md">
            <Select
              label="Category"
              selectedKeys={[categoryFilter]}
              onChange={(e) => setCategoryFilter(e.target.value)}
              size="sm"
              items={categories}
            >
              {(item: SelectOption) => <SelectItem key={item.value}>{item.label}</SelectItem>}
            </Select>

            <Select
              label="Year"
              selectedKeys={[yearFilter]}
              onChange={(e) => setYearFilter(e.target.value)}
              size="sm"
              items={years}
            >
              {(item: SelectOption) => <SelectItem key={item.value}>{item.label}</SelectItem>}
            </Select>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Press Releases</h2>

          {filteredReleases.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No press releases found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredReleases.map((pr) => (
                <Card
                  key={pr.id}
                  isPressable
                  as={Link}
                  href={`/newsroom/press-releases/${pr.slug}`}
                  className="hover:shadow-md transition-shadow duration-200"
                >
                  <CardBody className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Chip
                            size="sm"
                            color={
                              getCategoryColor(pr.category) as
                                | "success"
                                | "primary"
                                | "secondary"
                                | "warning"
                                | "default"
                            }
                            variant="flat"
                          >
                            {pr.category}
                          </Chip>
                          {pr.featured && (
                            <Chip size="sm" color="warning" variant="dot">
                              Featured
                            </Chip>
                          )}
                        </div>

                        <h3 className="text-xl font-semibold text-navy-900 mb-2">{pr.title}</h3>
                        <p className="text-gray-600 mb-3">{pr.subtitle}</p>
                        <p className="text-gray-700">{pr.summary}</p>

                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                          <span>{formatPressReleaseDate(pr.date)}</span>
                          <span>•</span>
                          <span>{pr.location}</span>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <span className="text-navy-600 font-medium">Read More →</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card isPressable as={Link} href="/brand-kit">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Brand Assets</h3>
                <p className="text-gray-600 text-sm">Logos, colors, and brand guidelines</p>
              </CardBody>
            </Card>

            <Card isPressable as={Link} href="/newsroom/fact-sheet">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Fact Sheet</h3>
                <p className="text-gray-600 text-sm">Company overview and key statistics</p>
              </CardBody>
            </Card>

            <Card isPressable as={Link} href="/leadership">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Executive Bios</h3>
                <p className="text-gray-600 text-sm">Leadership team profiles and photos</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
