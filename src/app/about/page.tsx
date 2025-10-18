import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { StatBlock } from "@/components/ui/StatBlock";

const timeline = [
  {
    year: "2020",
    title: "Founded in Zurich",
    description: "Started with a simple mission: help companies build better software faster.",
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Partnered with our first Fortune 500 company, proving our enterprise approach.",
  },
  {
    year: "2022",
    title: "Team Growth",
    description: "Expanded to 25 team members and opened our development center.",
  },
  {
    year: "2023",
    title: "International Expansion",
    description: "Opened London office and started serving clients across Europe.",
  },
  {
    year: "2024",
    title: "Rebrand",
    description: "Accelerate growth and expanded to North America and other countries worldwide.",
  },
];

const principles = [
  {
    title: "Ownership Mindset",
    description:
      "We don't just deliver code; we take ownership of outcomes. Your success is our success.",
    icon: "🎯",
  },
  {
    title: "Transparent Communication",
    description:
      "No surprises. Weekly progress reports, clear timelines, and honest conversations.",
    icon: "💬",
  },
  {
    title: "Technical Excellence",
    description: "We write code that lasts. Clean, documented, tested, and built for the future.",
    icon: "⚡",
  },
  {
    title: "Rapid Iteration",
    description:
      "Ship early, learn fast. We believe in getting working software in users' hands quickly.",
    icon: "🚀",
  },
  {
    title: "Knowledge Transfer",
    description: "We build your team's capabilities while building your product. No black boxes.",
    icon: "📚",
  },
  {
    title: "Pragmatic Innovation",
    description: "We use proven technologies innovatively, not innovation for innovation's sake.",
    icon: "🔧",
  },
];

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <PageHeader
        title="Building the Future of Software Development"
        subtitle="We're on a mission to transform how companies build software"
        breadcrumbs={breadcrumbs}
      />

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We believe every company deserves access to world-class engineering talent and
              practices. Our mission is to democratize software excellence by partnering with
              companies to build products that matter, while developing their internal capabilities
              for long-term success.
            </p>
            <p className="text-lg text-gray-600">
              Since 2020, we've helped over 50 companies ship products faster, scale reliably, and
              build engineering cultures that attract top talent.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatBlock label="Founded" value="2020" description="Started in Zurich" />
            <StatBlock label="Awards won" value="10+" description="Across 3 domains" />
            <StatBlock label="Projects Delivered" value="200+" description="On time, on budget" />
            <StatBlock label="Client Retention" value="100%" description="Every client stays" />
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index}>
                <CardBody className="p-6">
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((event, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20">
                  <div className="text-2xl font-bold text-blue-400">{event.year}</div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-700 pl-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Drexus Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Why Companies Choose Drexus</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">We've Been There</h3>
                  <p className="text-gray-600">
                    Our team has built and scaled products at companies like Google, Amazon, and
                    Stripe. We bring those learnings to every engagement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">We Move Fast</h3>
                  <p className="text-gray-600">
                    Our processes are refined from hundreds of projects. We know what works and can
                    hit the ground running from day one.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">
                    We Build for the Future
                  </h3>
                  <p className="text-gray-600">
                    Every line of code is written with maintenance, scalability, and your future
                    team in mind. No shortcuts, no technical debt.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatBlock label="Average Project ROI" value="420%" description="Within 12 months" />
              <StatBlock label="Time to First Deploy" value="2 weeks" description="From kickoff" />
              <StatBlock label="Code Coverage" value="85%+" description="Average test coverage" />
              <StatBlock label="Client NPS Score" value="72" description="World-class rating" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Ready to Build Something Great?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help accelerate your roadmap.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-navy-600 text-white font-semibold rounded hover:bg-navy-700 transition-colors"
            >
              Start a Conversation
            </Link>
            <Link
              href="/case-studies"
              className="inline-block px-8 py-3 border-2 border-navy-600 text-navy-600 font-semibold rounded hover:bg-navy-50 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
