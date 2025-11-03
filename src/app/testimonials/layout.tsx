import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: "Client Testimonials | Drexus",
  description:
    "Hear directly from the leaders we've partnered with. Real feedback from real clients.",
  openGraph: {
    title: "Client Testimonials | Drexus",
    description:
      "Hear directly from the leaders we've partnered with. Real feedback from real clients.",
    type: "website",
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
