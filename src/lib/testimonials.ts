import testimonialsData from "../../data/testimonials.json";

export interface Testimonial {
  id: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
    linkedin?: string;
  };
  quote: string;
  role: "founder" | "cto" | "product" | "product-lead" | "ops" | "executive";
  industry: string;
  useCase: string;
  featured: boolean;
  metrics?: {
    timeline?: string;
    outcome?: string;
  };
}

export function getAllTestimonials(): Testimonial[] {
  return testimonialsData.testimonials as Testimonial[];
}

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonialsData.testimonials.filter((t) => t.featured) as Testimonial[];
}

export function getTestimonialsByRole(role: string): Testimonial[] {
  return testimonialsData.testimonials.filter((t) => t.role === role) as Testimonial[];
}

export function getTestimonialsByIndustry(industry: string): Testimonial[] {
  return testimonialsData.testimonials.filter(
    (t) => t.industry.toLowerCase() === industry.toLowerCase()
  ) as Testimonial[];
}

export function getTestimonialsByUseCase(useCase: string): Testimonial[] {
  return testimonialsData.testimonials.filter(
    (t) => t.useCase.toLowerCase() === useCase.toLowerCase()
  ) as Testimonial[];
}

export const roleLabels: Record<string, string> = {
  founder: "Founders",
  cto: "CTOs",
  product: "Product Managers",
  "product-lead": "Product Leaders",
  ops: "Operations",
  executive: "Executives",
};

export const industries = [
  { value: "all", label: "All Industries" },
  { value: "fintech", label: "FinTech" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "saas", label: "SaaS" },
  { value: "healthcare", label: "Healthcare" },
  { value: "technology", label: "Technology" },
  { value: "retail", label: "Retail" },
  { value: "education", label: "Education" },
  { value: "ai-ml", label: "AI/ML" },
  { value: "logistics", label: "Logistics" },
];

export const useCases = [
  { value: "all", label: "All Use Cases" },
  { value: "mvp-development", label: "MVP Development" },
  { value: "conversion-optimization", label: "Conversion Optimization" },
  { value: "platform-modernization", label: "Platform Modernization" },
  { value: "product-strategy", label: "Product Strategy" },
  { value: "compliance", label: "Compliance" },
  { value: "technical-debt", label: "Technical Debt" },
  { value: "experimentation", label: "Experimentation" },
  { value: "startup-advisory", label: "Startup Advisory" },
  { value: "project-management", label: "Project Management" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "vendor-selection", label: "Vendor Selection" },
  { value: "performance", label: "Performance" },
];
