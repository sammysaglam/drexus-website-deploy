"use client";

import { Card, CardBody, Avatar, Button } from "@heroui/react";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { getAllLeaders } from "@/lib/leadership";

export default function LeadershipPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/leadership" },
  ];

  const leaders = getAllLeaders();

  return (
    <>
      <PageHeader
        title="Our Leadership Team"
        subtitle="Meet the people driving Drexus forward"
        breadcrumbs={breadcrumbs}
      />

      {/* Leadership Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <Card key={leader.id} className="h-full">
                <CardBody className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar src={leader.photo} name={leader.name} className="w-32 h-32 mb-4" />
                    <h3 className="text-xl font-semibold text-navy-900 mb-1">{leader.name}</h3>
                    <p className="text-navy-600 font-medium mb-4">{leader.title}</p>

                    <p className="text-gray-600 mb-4 line-clamp-4">{leader.bio}</p>

                    <div className="mt-auto space-y-3 w-full">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Expertise</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {leader.expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">{leader.education}</p>
                      </div>

                      <Button
                        as="a"
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="bordered"
                        size="sm"
                        className="w-full"
                        startContent={
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        }
                      >
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Advisory Board</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              We're fortunate to have guidance from industry leaders who've built and scaled some of
              the world's most successful technology companies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardBody className="p-6">
                  <h4 className="font-semibold text-navy-900">Dr. Rachel Green</h4>
                  <p className="text-sm text-gray-600 mb-2">Former CTO, Spotify</p>
                  <p className="text-xs text-gray-500">Technology Strategy</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="p-6">
                  <h4 className="font-semibold text-navy-900">James Wilson</h4>
                  <p className="text-sm text-gray-600 mb-2">Founder, TechStars Zurich</p>
                  <p className="text-xs text-gray-500">Startup Ecosystem</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="p-6">
                  <h4 className="font-semibold text-navy-900">Lisa Chen</h4>
                  <p className="text-sm text-gray-600 mb-2">Partner, Sequoia Capital</p>
                  <p className="text-xs text-gray-500">Growth Strategy</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Leadership Team</h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for exceptional leaders to help shape the future of Drexus.
          </p>
          <Link
            href="/careers"
            className="inline-block px-8 py-3 bg-white text-navy-900 font-semibold rounded hover:bg-gray-100 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </>
  );
}
