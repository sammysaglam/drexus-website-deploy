"use client";

import { Card, CardBody, Chip, Button } from "@heroui/react";
import Link from "next/link";

import { CaseStudy } from "@/lib/case-studies";

export function ProjectDetailsCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card className="sticky top-4">
      <CardBody className="p-6">
        <h3 className="text-lg font-semibold text-navy-900 mb-4">Project Details</h3>
        <dl className="space-y-3">
          <div>
            <dt className="text-sm text-gray-600">Client</dt>
            <dd className="font-semibold text-navy-800">{caseStudy.client}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Industry</dt>
            <dd className="font-semibold text-navy-800">{caseStudy.industry}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Timeline</dt>
            <dd className="font-semibold text-navy-800">{caseStudy.timeline}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Team Size</dt>
            <dd className="font-semibold text-navy-800">{caseStudy.teamSize}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Services</dt>
            <dd className="space-y-1">
              {caseStudy.services.map((service, index) => (
                <Chip key={index} size="sm" variant="flat" className="mr-2 mb-1">
                  {service}
                </Chip>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-6 space-y-3">
          <Button as={Link} href="/contact" color="primary" className="w-full">
            Discuss Your Project
          </Button>
          <Button
            as={Link}
            href="/tools/vendor-diligence-scorecard"
            variant="bordered"
            className="w-full"
          >
            Download Vendor Scorecard
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export function PhaseCard({
  phase,
  index: _index,
}: {
  phase: { name: string; activities: string[] };
  index: number;
}) {
  return (
    <Card className="border">
      <CardBody className="p-6">
        <h3 className="text-lg font-semibold text-navy-800 mb-3">{phase.name}</h3>
        <ul className="space-y-2">
          {phase.activities.map((activity: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">{activity}</span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

export function TestimonialCard({
  testimonial,
}: {
  testimonial: { quote: string; author: string; title: string; company: string };
}) {
  return (
    <Card className="bg-navy-50 border-navy-200">
      <CardBody className="p-8">
        <blockquote className="text-lg">
          <p className="text-navy-800 mb-4">"{testimonial.quote}"</p>
          <footer className="text-sm text-navy-600">
            <strong>{testimonial.author}</strong>
            <br />
            {testimonial.title}, {testimonial.company}
          </footer>
        </blockquote>
      </CardBody>
    </Card>
  );
}

export function TechStackSection({ stack }: { stack: { [key: string]: string[] | undefined } }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(stack).map(([category, technologies]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-navy-800 mb-3 capitalize">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((tech: string, index: number) => (
              <Chip key={index} size="sm" variant="flat">
                {tech}
              </Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function RelatedCaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card
      isPressable
      as={Link}
      href={`/case-studies/${study.slug}`}
      className="hover:shadow-md transition-shadow duration-200"
    >
      <CardBody className="p-6">
        <Chip size="sm" variant="flat" className="mb-3">
          {study.industry}
        </Chip>
        <h3 className="text-xl font-semibold text-navy-900 mb-2">{study.title}</h3>
        <p className="text-gray-600 mb-4">{study.summary}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{study.timeline}</span>
          <span className="text-navy-600 font-medium">Read More →</span>
        </div>
      </CardBody>
    </Card>
  );
}
