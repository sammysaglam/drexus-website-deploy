"use client";

import { useState, useMemo } from "react";

import { Card, CardBody, Chip, Select, SelectItem, Input } from "@heroui/react";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { getActiveJobs, getDepartments, getLocations, formatSalaryRange } from "@/lib/jobs";

interface SelectOption {
  key: string;
  label: string;
}

export default function CareersPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/careers" },
  ];

  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const jobs = getActiveJobs();
  const departments = getDepartments();
  const locations = getLocations();

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (departmentFilter !== "all" && job.department !== departmentFilter) return false;
      if (locationFilter !== "all" && job.location !== locationFilter) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          job.title.toLowerCase().includes(query) ||
          job.summary.toLowerCase().includes(query) ||
          job.department.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [jobs, departmentFilter, locationFilter, searchQuery]);

  const getRemoteLabel = (remote: string) => {
    const labels: Record<string, string> = {
      Full: "Fully Remote",
      Hybrid: "Hybrid",
      None: "On-site",
    };
    return labels[remote] || remote;
  };

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      Junior: "success",
      "Mid-Senior": "primary",
      Senior: "secondary",
    };
    return colors[level] || "default";
  };

  return (
    <>
      <PageHeader
        title="Join Our Team"
        subtitle="Build your career while building the future"
        breadcrumbs={breadcrumbs}
      />

      {/* Why Join Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                Work on projects that matter for companies that are changing the world.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Growth</h3>
              <p className="text-gray-600">
                Learn from the best, work with cutting-edge tech, and accelerate your career.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Culture</h3>
              <p className="text-gray-600">
                Join a team that values excellence, autonomy, and work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Department"
              selectedKeys={[departmentFilter]}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              size="sm"
              items={[
                { key: "all", label: "All Departments" },
                ...departments.map((dept) => ({ key: dept, label: dept })),
              ]}
            >
              {(item: SelectOption) => <SelectItem key={item.key}>{item.label}</SelectItem>}
            </Select>

            <Select
              label="Location"
              selectedKeys={[locationFilter]}
              onChange={(e) => setLocationFilter(e.target.value)}
              size="sm"
              items={[
                { key: "all", label: "All Locations" },
                ...locations.map((loc) => ({ key: loc, label: loc })),
              ]}
            >
              {(item: SelectOption) => <SelectItem key={item.key}>{item.label}</SelectItem>}
            </Select>

            <Input
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="sm"
              startContent={
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">
            Open Positions ({filteredJobs.length})
          </h2>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions found matching your criteria.</p>
              <button
                onClick={() => {
                  setDepartmentFilter("all");
                  setLocationFilter("all");
                  setSearchQuery("");
                }}
                className="mt-4 text-navy-600 hover:text-navy-700 font-medium"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  isPressable
                  as={Link}
                  href={`/careers/${job.id}`}
                  className="hover:shadow-md transition-shadow duration-200"
                >
                  <CardBody className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-navy-900">{job.title}</h3>
                          <Chip
                            size="sm"
                            color={
                              getLevelColor(job.level) as
                                | "success"
                                | "primary"
                                | "secondary"
                                | "default"
                            }
                            variant="flat"
                          >
                            {job.level}
                          </Chip>
                        </div>

                        <p className="text-gray-600 mb-3">{job.summary}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                              />
                            </svg>
                            {getRemoteLabel(job.remote)}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-semibold text-navy-900">
                          {formatSalaryRange(job)}
                        </p>
                        <p className="text-sm text-gray-500">{job.type}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Reminder */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Drexus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Compensation</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Competitive salaries</li>
                <li>• Equity participation</li>
                <li>• Performance bonuses</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Learning budget</li>
                <li>• Conference attendance</li>
                <li>• Mentorship program</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Flexibility</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Remote options</li>
                <li>• Flexible hours</li>
                <li>• Unlimited PTO*</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Wellness</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Health insurance</li>
                <li>• Mental health support</li>
                <li>• Fitness stipend</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-blue-200 mt-8 text-center">
            *Unlimited PTO with a 20-day minimum requirement
          </p>
        </div>
      </section>
    </>
  );
}
