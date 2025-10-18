import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars | Drexus",
  description:
    "Join our free webinars to get actionable insights on product development, technical strategy, and growth optimization. Expert insights from our team.",
  openGraph: {
    title: "Webinars | Drexus",
    description:
      "Join our free webinars to get actionable insights on product development, technical strategy, and growth optimization. Expert insights from our team.",
    type: "website",
  },
};

export default function WebinarsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
