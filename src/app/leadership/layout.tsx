import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: "Leadership | Drexus",
  description:
    "Meet the leadership team driving Drexus forward. Experienced leaders from Google, Amazon, Stripe, and more.",
  openGraph: {
    title: "Leadership | Drexus",
    description:
      "Meet the leadership team driving Drexus forward. Experienced leaders from Google, Amazon, Stripe, and more.",
    type: "website",
  },
};

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
