import Link from "next/link";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export default function NotFound() {
  return (
    <>
      <NavMega />
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-navy-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-navy-800 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't
            exist.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-navy-600 text-white font-semibold rounded hover:bg-navy-700 transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-navy-600 text-navy-600 font-semibold rounded hover:bg-navy-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-gray-500 mb-4">Here are some helpful links:</p>
            <div className="flex flex-wrap gap-4 justify-center text-navy-600">
              <Link href="/solutions" className="hover:text-navy-700">
                Solutions
              </Link>
              <Link href="/services" className="hover:text-navy-700">
                Services
              </Link>
              <Link href="/insights" className="hover:text-navy-700">
                Insights
              </Link>
              <Link href="/tools" className="hover:text-navy-700">
                Tools
              </Link>
              <Link href="/case-studies" className="hover:text-navy-700">
                Case Studies
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterMega />
    </>
  );
}
