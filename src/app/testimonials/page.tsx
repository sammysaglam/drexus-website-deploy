"use client";

import { useState, useMemo } from "react";

import { Card, CardBody, Select, SelectItem } from "@heroui/react";

import { PageHeader } from "@/components/ui/PageHeader";
import {
  getAllTestimonials,
  roleLabels,
  industries,
  useCases,
  Testimonial,
} from "@/lib/testimonials";

interface SelectOption {
  key?: string;
  value?: string;
  label: string;
}

export default function TestimonialsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Testimonials", href: "/testimonials" },
  ];

  const [roleFilter, setRoleFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [useCaseFilter, setUseCaseFilter] = useState("all");

  const allTestimonials = getAllTestimonials();

  const filteredTestimonials = useMemo(() => {
    return allTestimonials.filter((testimonial) => {
      if (roleFilter !== "all" && testimonial.role !== roleFilter) return false;
      if (industryFilter !== "all" && testimonial.industry !== industryFilter) return false;
      if (useCaseFilter !== "all" && testimonial.useCase !== useCaseFilter) return false;
      return true;
    });
  }, [allTestimonials, roleFilter, industryFilter, useCaseFilter]);

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <Card className="h-full">
      <CardBody className="p-6 flex flex-col h-full">
        <blockquote className="mb-6 flex-grow">
          <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
        </blockquote>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            {/* <Avatar src={testimonial.author.avatar} name={testimonial.author.name} size="md" /> */}
            <div>
              <p className="font-semibold text-navy-800">{testimonial.author.name}</p>
              <p className="text-sm text-gray-600">
                {testimonial.author.title}, {testimonial.author.company}
              </p>
            </div>
          </div>

          {testimonial.metrics && (
            <div className="text-right">
              {testimonial.metrics.timeline && (
                <p className="text-sm text-gray-500">{testimonial.metrics.timeline}</p>
              )}
              {testimonial.metrics.outcome && (
                <p className="text-sm font-semibold text-green-600">
                  {testimonial.metrics.outcome}
                </p>
              )}
            </div>
          )}
        </div>

        {testimonial.author.linkedin && (
          <a
            href={testimonial.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mt-4"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Verify on LinkedIn
          </a>
        )}
      </CardBody>
    </Card>
  );

  return (
    <>
      <PageHeader
        title="Client Testimonials"
        subtitle="Hear directly from the leaders we've partnered with"
        breadcrumbs={breadcrumbs}
      />

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Filter by Role"
              selectedKeys={[roleFilter]}
              onChange={(e) => setRoleFilter(e.target.value)}
              size="sm"
              items={[
                { key: "all", label: "All Roles" },
                ...Object.entries(roleLabels).map(([value, label]) => ({ key: value, label })),
              ]}
            >
              {(item: SelectOption) => <SelectItem key={item.key!}>{item.label}</SelectItem>}
            </Select>

            <Select
              label="Filter by Industry"
              selectedKeys={[industryFilter]}
              onChange={(e) => setIndustryFilter(e.target.value)}
              size="sm"
              items={industries}
            >
              {(item: SelectOption) => <SelectItem key={item.value!}>{item.label}</SelectItem>}
            </Select>

            <Select
              label="Filter by Use Case"
              selectedKeys={[useCaseFilter]}
              onChange={(e) => setUseCaseFilter(e.target.value)}
              size="sm"
              items={useCases}
            >
              {(item: SelectOption) => <SelectItem key={item.value!}>{item.label}</SelectItem>}
            </Select>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredTestimonials.length} of {allTestimonials.length} testimonials
            </p>
            {(roleFilter !== "all" || industryFilter !== "all" || useCaseFilter !== "all") && (
              <button
                onClick={() => {
                  setRoleFilter("all");
                  setIndustryFilter("all");
                  setUseCaseFilter("all");
                }}
                className="text-sm text-navy-600 hover:text-navy-700 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Featured Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTestimonials
              .filter((t) => t.featured)
              .map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">All Client Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials
              .filter((t) => !t.featured)
              .map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No testimonials found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="bg-navy-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-navy-900 mb-4 text-center">
              Why Our Clients Trust Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-navy-800">100%</div>
                <p className="text-sm text-navy-600">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-800">0</div>
                <p className="text-sm text-navy-600">Project Failures</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-800">85%</div>
                <p className="text-sm text-navy-600">Repeat Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-800">4.9/5</div>
                <p className="text-sm text-navy-600">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
