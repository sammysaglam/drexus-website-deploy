import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";

const values = [
  {
    title: "Excellence Without Ego",
    description:
      "We strive for the best possible outcomes while staying humble and collaborative. Great ideas can come from anywhere.",
    example: "Every code review is a learning opportunity, not a judgment.",
  },
  {
    title: "Ownership & Accountability",
    description:
      "We take responsibility for our work and its outcomes. When something goes wrong, we fix it first and learn from it second.",
    example: "If a deployment fails at 2 AM, the team that built it responds immediately.",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and so do we. We invest in our people's growth through training, conferences, and experimentation.",
    example: "Every Friday afternoon is reserved for learning and experimentation.",
  },
  {
    title: "Transparent Communication",
    description:
      "We believe in radical transparency. Good news travels fast, bad news travels faster. No surprises.",
    example: "All project metrics are visible to everyone in real-time dashboards.",
  },
  {
    title: "Work-Life Integration",
    description:
      "We work hard but sustainably. Burnout helps no one. We trust our team to manage their time and energy.",
    example: "Flexible hours mean you can attend your kid's recital or hit the gym mid-day.",
  },
  {
    title: "Diversity of Thought",
    description:
      "The best solutions come from diverse perspectives. We actively seek different viewpoints and backgrounds.",
    example: "Our team speaks 15 languages and comes from 20+ countries.",
  },
];

const workStyle = [
  {
    aspect: "Remote-First",
    description:
      "Work from anywhere, collaborate everywhere. Our tools and processes are built for distributed teams.",
  },
  {
    aspect: "Async Communication",
    description:
      "We document everything and communicate asynchronously by default, respecting different time zones and work styles.",
  },
  {
    aspect: "Results Over Hours",
    description:
      "We measure impact, not time in seat. Get your work done when and how you work best.",
  },
  {
    aspect: "Team Rituals",
    description:
      "Weekly demos, monthly retrospectives, and quarterly offsites keep us connected and aligned.",
  },
];

const benefits = [
  "Competitive compensation with equity",
  "Flexible working arrangements",
  "Professional development budget",
  "Conference attendance",
  "Latest tools and equipment",
  "Health and wellness programs",
  "Parental leave policy",
  "Sabbatical opportunities",
];

export default function CulturePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Culture", href: "/culture" },
  ];

  return (
    <>
      <PageHeader
        title="Our Culture"
        subtitle="Building an environment where great people do their best work"
        breadcrumbs={breadcrumbs}
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Culture isn't ping pong tables and free snacks. It's the values we live by, the way we
              work together, and the environment we create for our team to thrive. At Drexus, we've
              built a culture that attracts and retains the best talent in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 mb-4">{value.description}</p>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-sm text-navy-700">
                      <span className="font-semibold">In Practice:</span> {value.example}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Style Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workStyle.map((style, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{["🌍", "💬", "📊", "🤝"][index]}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{style.aspect}</h3>
                <p className="text-gray-600 text-sm">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEI Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Diversity, Equity & Inclusion</h2>
            <p className="text-lg mb-8 text-blue-100">
              We believe diverse teams build better products. Period. We're committed to creating an
              inclusive environment where everyone can do their best work, regardless of background,
              identity, or experience level.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3">Representation</h3>
                <p className="text-blue-100">
                  40% of our team identifies as women or non-binary. 35% are from underrepresented
                  minorities. Leadership reflects this diversity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Equal Opportunity</h3>
                <p className="text-blue-100">
                  Transparent salary bands, blind resume reviews, and structured interviews ensure
                  fair evaluation based on skills alone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Inclusive Environment</h3>
                <p className="text-blue-100">
                  From pronouns in email signatures to flexible religious observances, we create
                  space for everyone to be themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Benefits & Perks</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-navy-700 text-center">
                <span className="font-semibold">Most importantly:</span> We trust you to do great
                work and give you the autonomy and support to make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Life at Drexus</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Team Photo {i}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            From hackathons to hiking trips, we work hard and play harder.
          </p>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            If our culture resonates with you, we'd love to hear from you.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/careers"
              className="inline-block px-8 py-3 bg-navy-600 text-white font-semibold rounded hover:bg-navy-700 transition-colors"
            >
              View Open Positions
            </Link>
            <Link
              href="/leadership"
              className="inline-block px-8 py-3 border-2 border-navy-600 text-navy-600 font-semibold rounded hover:bg-navy-50 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
