"use client";

import { Card, CardBody, Button } from "@heroui/react";

import { Job } from "@/lib/jobs";

export function JobDetailsCard({
  job,
  formattedSalary,
  remoteLabel,
}: {
  job: Job;
  formattedSalary: string;
  remoteLabel: string;
}) {
  return (
    <Card className="sticky top-4">
      <CardBody className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-navy-900 mb-4">Job Details</h3>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm text-gray-600">Location</dt>
              <dd className="font-medium text-navy-800">{job.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Work Style</dt>
              <dd className="font-medium text-navy-800">{remoteLabel}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Type</dt>
              <dd className="font-medium text-navy-800">{job.type}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Level</dt>
              <dd className="font-medium text-navy-800">{job.level}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Salary Range</dt>
              <dd className="font-medium text-navy-800">{formattedSalary}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Posted</dt>
              <dd className="font-medium text-navy-800">
                {new Date(job.posted).toLocaleDateString()}
              </dd>
            </div>
          </dl>
        </div>

        <Button
          color="primary"
          size="lg"
          className="w-full"
          as="a"
          href={`mailto:careers@drexus.com?subject=Application for ${job.title}`}
        >
          Apply Now
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Questions about this role?</p>
          <a
            href="mailto:careers@drexus.com"
            className="text-sm text-navy-600 hover:text-navy-700 font-medium"
          >
            careers@drexus.com
          </a>
        </div>
      </CardBody>
    </Card>
  );
}

export function HiringProcessCard() {
  return (
    <Card className="mt-6">
      <CardBody className="p-6">
        <h3 className="text-lg font-semibold text-navy-900 mb-4">Our Hiring Process</h3>
        <ol className="space-y-3">
          <li className="flex items-start">
            <span className="font-bold text-navy-600 mr-3">1.</span>
            <div>
              <p className="font-medium text-gray-800">Application Review</p>
              <p className="text-sm text-gray-600">We review every application within 48 hours</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-navy-600 mr-3">2.</span>
            <div>
              <p className="font-medium text-gray-800">Phone Screen</p>
              <p className="text-sm text-gray-600">30-minute call with our recruiting team</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-navy-600 mr-3">3.</span>
            <div>
              <p className="font-medium text-gray-800">Technical Interview</p>
              <p className="text-sm text-gray-600">
                Meet your future team and showcase your skills
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-navy-600 mr-3">4.</span>
            <div>
              <p className="font-medium text-gray-800">Culture Fit</p>
              <p className="text-sm text-gray-600">Meet leadership and learn about our culture</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-navy-600 mr-3">5.</span>
            <div>
              <p className="font-medium text-gray-800">Offer</p>
              <p className="text-sm text-gray-600">We make decisions quickly and fairly</p>
            </div>
          </li>
        </ol>
      </CardBody>
    </Card>
  );
}
