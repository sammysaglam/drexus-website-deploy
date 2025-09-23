"use client";

import { Card, CardBody, Button } from "@heroui/react";

import { PageHeader } from "@/components/ui/PageHeader";

const logos = [
  {
    name: "Primary Logo",
    description: "Use on light backgrounds",
    preview: "/brand/logo-primary.svg",
    downloads: [
      { format: "SVG", url: "/brand/downloads/drexus-logo-primary.svg" },
      { format: "PNG", url: "/brand/downloads/drexus-logo-primary.png" },
      { format: "EPS", url: "/brand/downloads/drexus-logo-primary.eps" },
    ],
  },
  {
    name: "Logo Dark",
    description: "Use on dark backgrounds",
    preview: "/brand/logo-dark.svg",
    downloads: [
      { format: "SVG", url: "/brand/downloads/drexus-logo-dark.svg" },
      { format: "PNG", url: "/brand/downloads/drexus-logo-dark.png" },
      { format: "EPS", url: "/brand/downloads/drexus-logo-dark.eps" },
    ],
  },
  {
    name: "Logo Mark",
    description: "Icon only, for small spaces",
    preview: "/brand/logo-mark.svg",
    downloads: [
      { format: "SVG", url: "/brand/downloads/drexus-mark.svg" },
      { format: "PNG", url: "/brand/downloads/drexus-mark.png" },
      { format: "ICO", url: "/brand/downloads/drexus-mark.ico" },
    ],
  },
];

const colors = [
  { name: "Navy 900", hex: "#0F172A", rgb: "15, 23, 42", usage: "Primary brand color" },
  { name: "Navy 600", hex: "#475569", rgb: "71, 85, 105", usage: "Secondary text" },
  { name: "Blue 600", hex: "#2563EB", rgb: "37, 99, 235", usage: "Links and CTAs" },
  { name: "Blue 100", hex: "#DBEAFE", rgb: "219, 234, 254", usage: "Light accents" },
  { name: "Gray 600", hex: "#4B5563", rgb: "75, 85, 99", usage: "Body text" },
  { name: "Green 600", hex: "#059669", rgb: "5, 150, 105", usage: "Success states" },
];

const typography = [
  {
    name: "Display",
    font: "Merriweather",
    weight: "700",
    size: "48-64px",
    usage: "Hero headlines",
  },
  {
    name: "Heading 1",
    font: "Merriweather",
    weight: "700",
    size: "36-48px",
    usage: "Page titles",
  },
  {
    name: "Heading 2",
    font: "Inter",
    weight: "600",
    size: "24-32px",
    usage: "Section headers",
  },
  {
    name: "Body",
    font: "Inter",
    weight: "400",
    size: "16-18px",
    usage: "Paragraphs",
  },
];

const guidelines = [
  {
    title: "Clear Space",
    description:
      "Always maintain a clear space around the logo equal to the height of the 'D' in Drexus.",
  },
  {
    title: "Minimum Size",
    description:
      "The logo should never be displayed smaller than 120px wide for digital or 30mm for print.",
  },
  {
    title: "Backgrounds",
    description: "Use the primary logo on light backgrounds and the dark logo on dark backgrounds.",
  },
  {
    title: "Don'ts",
    items: [
      "Don't stretch or distort the logo",
      "Don't change the logo colors",
      "Don't add effects or shadows",
      "Don't place on busy backgrounds",
    ],
  },
];

export default function BrandKitPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Brand Kit", href: "/brand-kit" },
  ];

  return (
    <>
      <PageHeader
        title="Brand Kit"
        subtitle="Official Drexus brand assets and usage guidelines"
        breadcrumbs={breadcrumbs}
      />

      {/* Download All */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Need all assets? Download our complete brand package.
            </p>
            <Button
              color="primary"
              size="lg"
              as="a"
              href="/brand/downloads/drexus-brand-kit.zip"
              download
            >
              Download Complete Brand Kit (15MB)
            </Button>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Logos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {logos.map((logo, index) => (
              <Card key={index}>
                <CardBody className="p-6">
                  <div className="aspect-video bg-gray-100 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-400">{logo.name}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{logo.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{logo.description}</p>
                  <div className="flex gap-2">
                    {logo.downloads.map((download, idx) => (
                      <Button
                        key={idx}
                        size="sm"
                        variant="bordered"
                        as="a"
                        href={download.url}
                        download
                      >
                        {download.format}
                      </Button>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color, index) => (
              <Card key={index}>
                <CardBody className="p-0">
                  <div className="h-24" style={{ backgroundColor: color.hex }} />
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-900">{color.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{color.usage}</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <p>HEX: {color.hex}</p>
                      <p>RGB: {color.rgb}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Typography</h2>
          <div className="space-y-6">
            {typography.map((type, index) => (
              <Card key={index}>
                <CardBody className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900">{type.name}</h3>
                      <p className="text-gray-600">
                        {type.font} {type.weight} • {type.size}
                      </p>
                      <p className="text-sm text-gray-500">{type.usage}</p>
                    </div>
                    <div
                      className="mt-4 md:mt-0"
                      style={{
                        fontFamily: type.font === "Merriweather" ? "serif" : "sans-serif",
                        fontWeight: type.weight,
                        fontSize: type.size.split("-")[0],
                      }}
                    >
                      Sample Text
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <Button
              variant="bordered"
              as="a"
              href="https://fonts.google.com/specimen/Merriweather"
              target="_blank"
            >
              Download Merriweather
            </Button>
            <Button
              variant="bordered"
              as="a"
              href="https://fonts.google.com/specimen/Inter"
              target="_blank"
            >
              Download Inter
            </Button>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((guideline, index) => (
              <Card key={index}>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{guideline.title}</h3>
                  <p className="text-gray-600">{guideline.description}</p>
                  {guideline.items && (
                    <ul className="mt-4 space-y-2">
                      {guideline.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-600 mr-2">✗</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Templates & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Presentation Template", type: "PPTX", size: "2.3MB" },
              { name: "Email Signature", type: "HTML", size: "15KB" },
              { name: "Business Card", type: "AI", size: "450KB" },
              { name: "Social Media Kit", type: "ZIP", size: "5.2MB" },
            ].map((template, index) => (
              <Card key={index} isPressable>
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📄</span>
                  </div>
                  <h3 className="font-semibold text-navy-900">{template.name}</h3>
                  <p className="text-sm text-gray-500">
                    {template.type} • {template.size}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Brand?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our brand team for guidance or custom assets.
          </p>
          <a
            href="mailto:brand@drexus.com"
            className="inline-block px-8 py-3 bg-white text-navy-900 font-semibold rounded hover:bg-gray-100 transition-colors"
          >
            brand@drexus.com
          </a>
        </div>
      </section>
    </>
  );
}
