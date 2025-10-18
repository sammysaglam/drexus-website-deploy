import jobsData from "../../data/jobs.json";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  remote: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  posted: string;
  status: string;
}

export function getAllJobs(): Job[] {
  return jobsData.jobs as Job[];
}

export function getActiveJobs(): Job[] {
  return jobsData.jobs.filter((job) => job.status === "active") as Job[];
}

export function getJobById(id: string): Job | undefined {
  return jobsData.jobs.find((job) => job.id === id) as Job | undefined;
}

export function getJobsByDepartment(department: string): Job[] {
  return jobsData.jobs.filter(
    (job) => job.department.toLowerCase() === department.toLowerCase()
  ) as Job[];
}

export function getJobsByLevel(level: string): Job[] {
  return jobsData.jobs.filter((job) => job.level.toLowerCase() === level.toLowerCase()) as Job[];
}

export function getJobsByLocation(location: string): Job[] {
  return jobsData.jobs.filter((job) =>
    job.location.toLowerCase().includes(location.toLowerCase())
  ) as Job[];
}

export function getDepartments(): string[] {
  const departments = new Set(jobsData.jobs.map((job) => job.department));
  return Array.from(departments);
}

export function getLocations(): string[] {
  const locations = new Set(jobsData.jobs.map((job) => job.location));
  return Array.from(locations);
}

export function formatSalaryRange(job: Job): string {
  const min = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: job.salary.currency,
    minimumFractionDigits: 0,
  }).format(job.salary.min);

  const max = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: job.salary.currency,
    minimumFractionDigits: 0,
  }).format(job.salary.max);

  return `${min} - ${max}`;
}

export function getJobPostingSchema(job: Job, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: "Drexus",
      value: job.id,
    },
    datePosted: job.posted,
    hiringOrganization: {
      "@type": "Organization",
      name: "Drexus",
      sameAs: `${baseUrl}`,
      logo: `${baseUrl}/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location.split(",")[0],
        addressCountry: job.location.split(",")[1]?.trim() || "",
      },
    },
    employmentType: job.type.toUpperCase().replace("-", "_"),
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: job.salary.currency,
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salary.min,
        maxValue: job.salary.max,
        unitText: "YEAR",
      },
    },
    jobBenefits: job.benefits.join(", "),
    responsibilities: job.responsibilities.join(" "),
    qualifications: job.requirements.join(" "),
    skills: [...job.requirements, ...job.niceToHave].join(", "),
  };
}
