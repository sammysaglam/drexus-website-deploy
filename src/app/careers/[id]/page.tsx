import { Metadata } from "next";
import { notFound } from "next/navigation";

import { JobDetailsCard, HiringProcessCard } from "@/components/careers/JobDetailClient";
import { PageHeader } from "@/components/ui/PageHeader";
import { getJobById, formatSalaryRange, getJobPostingSchema } from "@/lib/jobs";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} | Careers`,
    description: job.summary,
    openGraph: {
      title: job.title,
      description: job.summary,
      type: "website",
    },
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/careers" },
    { label: job.title, href: `/careers/${job.id}` },
  ];

  // Generate JobPosting structured data
  const jsonLd = getJobPostingSchema(job, "https://drexus.com");

  const getRemoteLabel = (remote: string) => {
    const labels: Record<string, string> = {
      Full: "Fully Remote",
      Hybrid: "Hybrid",
      None: "On-site",
    };
    return labels[remote] || remote;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader title={job.title} subtitle={job.department} breadcrumbs={breadcrumbs} />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <p className="text-xl text-gray-700 mb-4">{job.summary}</p>
                <p className="text-gray-600">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">What You'll Do</h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">What We're Looking For</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-navy-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              {job.niceToHave.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Nice to Have</h2>
                  <ul className="space-y-2">
                    {job.niceToHave.map((nice, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">+</span>
                        <span className="text-gray-700">{nice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Benefits & Perks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <JobDetailsCard
                job={job}
                formattedSalary={formatSalaryRange(job)}
                remoteLabel={getRemoteLabel(job.remote)}
              />

              <HiringProcessCard />
            </div>
          </div>
        </div>
      </section>

      {/* Equal Opportunity Statement */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Equal Opportunity Employer</h2>
            <p className="text-gray-600">
              Drexus is an equal opportunity employer committed to building a diverse and inclusive
              team. We do not discriminate on the basis of race, religion, color, national origin,
              gender, sexual orientation, age, marital status, veteran status, or disability status.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
