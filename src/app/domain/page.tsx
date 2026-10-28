import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Layers } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/products";

export const metadata: Metadata = {
  title: "Domain Products | Opus Infiniti",
  description:
    "Explore Opus Infiniti products grouped by business domain and category.",
};

const DOMAIN_SECTIONS = [
  {
    id: "extended-enterprise",
    title: "Extended Enterprise Products",
    description:
      "ERP, logistics, portfolio, tax, sales, data migration, and cashflow platforms for large business operations.",
  },
  {
    id: "education",
    title: "Education",
    description:
      "Student, school, tuition, and university management products for education institutions.",
  },
  {
    id: "hrms",
    title: "HRMS",
    description:
      "Country-specific HR, payroll, and statutory compliance products.",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description:
      "Restaurant, hotel, retail POS, booking, and order management products.",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description:
      "Hospital, security, procurement, and supply chain platforms for enterprise teams.",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description:
      "Customer-facing and operations mobile applications across taxi, shopping, services, and restaurants.",
  },
  {
    id: "community-portal",
    title: "Community Portals",
    description:
      "Community, alumni, social networking, and civic transparency portals.",
  },
];

export default function DomainPage() {
  return (
    <div className="w-full bg-gray-50">
      {/* Header banner */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-dark-900 via-primary-900 to-secondary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/20">
              <Layers className="h-4 w-4" />
              Domain wise product catalog
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-display font-bold leading-tight text-white">
              Products by Domain
            </h1>
            <p className="mt-5 max-w-3xl text-lg md:text-xl text-gray-200">
              Browse all OPUS products grouped by category. Every domain is shown
              as its own section, so visitors can scan the full catalog without
              switching tabs.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-white/10 p-5 ring-1 ring-white/15">
                <div className="text-3xl font-bold text-white">7</div>
                <div className="text-sm text-gray-200">Domains</div>
              </div>
              <div className="rounded-xl bg-white/10 p-5 ring-1 ring-white/15">
                <div className="text-3xl font-bold text-white">30</div>
                <div className="text-sm text-gray-200">Products</div>
              </div>
              <div className="rounded-xl bg-white/10 p-5 ring-1 ring-white/15">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-200">Proprietary IP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Sections */}
      <main className="container-custom py-16 space-y-16">
        {DOMAIN_SECTIONS.map((domain) => {
          const productsInDomain = PRODUCTS_DATA.filter(
            (p) => p.category === domain.id
          );

          return (
            <section
              key={domain.id}
              id={domain.id}
              className="scroll-mt-28 bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-900">
                    {domain.title}
                  </h2>
                  <p className="text-gray-600 mt-1 max-w-2xl text-sm md:text-base">
                    {domain.description}
                  </p>
                </div>
                <span className="self-start md:self-auto px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
                  {productsInDomain.length} products
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsInDomain.map((product) => (
                  <article
                    key={product.slug}
                    className="card card-hover group p-6 rounded-xl border border-gray-200 bg-white flex flex-col justify-between hover:border-primary-400 transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2 flex-shrink-0">
                          <Image
                            src={product.logo}
                            alt={product.name}
                            width={44}
                            height={44}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-dark-900 text-base leading-snug group-hover:text-primary-600 transition-colors">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                        {product.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {product.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        Explore product
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Looking for something tailored?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Tell us about your industry requirements. Our solutions team can
            customize or assemble specialized platforms for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-white bg-white text-primary-700 font-bold hover:bg-gray-100 px-8 py-3.5 rounded-full shadow-lg"
            >
              Contact Solutions Team
            </Link>
            <Link
              href="/case-studies"
              className="btn btn-outline text-white border-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
