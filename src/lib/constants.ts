import type { RoleValue, CompanySizeValue, IndustryValue } from "./analytics";

export interface RoleOption {
  key: string;
  value: RoleValue;
  label: string;
}

export interface CompanySizeOption {
  key: string;
  value: CompanySizeValue;
  label: string;
}

export interface IndustryOption {
  key: string;
  value: IndustryValue;
  label: string;
}

// Role options used across multiple forms and tools
export const ROLE_OPTIONS: RoleOption[] = [
  { key: "ceo-founder", value: "CEO/Founder", label: "CEO/Founder" },
  { key: "cto", value: "CTO", label: "CTO" },
  { key: "vp-engineering", value: "VP Engineering", label: "VP Engineering" },
  { key: "engineering-manager", value: "Engineering Manager", label: "Engineering Manager" },
  { key: "senior-engineer", value: "Senior Engineer", label: "Senior Engineer" },
  { key: "engineer", value: "Engineer", label: "Engineer" },
  { key: "product-manager", value: "Product Manager", label: "Product Manager" },
  { key: "project-manager", value: "Project Manager", label: "Project Manager" },
  { key: "scrum-master", value: "Scrum Master", label: "Scrum Master" },
  { key: "devops", value: "DevOps Engineer", label: "DevOps Engineer" },
  { key: "data-scientist", value: "Data Scientist", label: "Data Scientist" },
  { key: "analyst", value: "Business Analyst", label: "Business Analyst" },
  { key: "consultant", value: "Consultant", label: "Consultant" },
  { key: "other", value: "Other", label: "Other" },
];

// Company size options
export const COMPANY_SIZE_OPTIONS: CompanySizeOption[] = [
  { key: "startup", value: "1-10 employees", label: "Startup (1-10 employees)" },
  { key: "small", value: "11-50 employees", label: "Small (11-50 employees)" },
  { key: "medium", value: "51-200 employees", label: "Medium (51-200 employees)" },
  { key: "large", value: "201-1000 employees", label: "Large (201-1000 employees)" },
  { key: "enterprise", value: "1000+ employees", label: "Enterprise (1000+ employees)" },
];

// Industry options
export const INDUSTRY_OPTIONS: IndustryOption[] = [
  { key: "technology", value: "Technology", label: "Technology" },
  { key: "healthcare", value: "Healthcare", label: "Healthcare" },
  { key: "finance", value: "Finance", label: "Finance" },
  { key: "ecommerce", value: "E-commerce", label: "E-commerce" },
  { key: "education", value: "Education", label: "Education" },
  { key: "manufacturing", value: "Manufacturing", label: "Manufacturing" },
  { key: "retail", value: "Retail", label: "Retail" },
  { key: "saas", value: "SaaS", label: "SaaS" },
  { key: "consulting", value: "Consulting", label: "Consulting" },
  { key: "media", value: "Media & Entertainment", label: "Media & Entertainment" },
  { key: "real-estate", value: "Real Estate", label: "Real Estate" },
  { key: "logistics", value: "Logistics & Transportation", label: "Logistics & Transportation" },
  { key: "energy", value: "Energy & Utilities", label: "Energy & Utilities" },
  { key: "government", value: "Government", label: "Government" },
  { key: "nonprofit", value: "Non-profit", label: "Non-profit" },
  { key: "professional-services", value: "Professional Services", label: "Professional Services" },
  { key: "other", value: "Other", label: "Other" },
];

// Simplified role options for specific use cases (like compare-your-process page)
export const SIMPLE_ROLE_OPTIONS = [
  "Founder",
  "Ops/Operations",
  "Product Manager",
  "Product Lead",
  "CTO/Engineering",
  "Other",
];

// Simple company size options
export const SIMPLE_COMPANY_SIZE_OPTIONS = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees",
];
