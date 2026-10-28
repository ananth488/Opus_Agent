import React from "react";
import Link from "next/link";
import Image from "next/image";

const flagshipProducts = [
  {
    name: "OPUS Data Migration (ETL Tool)",
    category: "Enterprise data migration & ETL platform",
    description:
      "Enterprise-grade data migration platform with 18+ connectors, zero-downtime migrations, 99.99% accuracy, and real-time monitoring.",
    logo: "/images/logos/opuslogo1.webp",
    features: [
      "18+ Database Connectors (PostgreSQL, MySQL, Oracle, SAP, Snowflake)",
      "Zero-Downtime Migrations with Hot Cutover",
      "99.99% Data Accuracy with Reconciliation Engine",
      "Visual Drag-and-Drop Pipeline Designer",
    ],
    tags: ["Node.js", "React", "TypeScript"],
    demoUrl: "https://etl.opusinfiniti.com/",
    learnMoreUrl: "/products/opusdata-etl",
  },
  {
    name: "OPUS Portfolio Management",
    category: "Investment portfolio management platform",
    description:
      "Enterprise-grade portfolio management system for managing multi-billion investment portfolios across Fixed Deposits, Bonds, and Equities.",
    logo: "/images/logos/opuslogo3.webp",
    features: [
      "Real-Time Investment Dashboard with 7 KPI Cards",
      "Multi-Asset Management (Fixed Deposits, Bonds, Equities)",
      "Full Lifecycle Tracking (Create, Rollover, Withdraw)",
      "Enterprise RBAC Security & Approval Thresholds",
    ],
    tags: ["NestJS", "TypeScript", "React"],
    demoUrl: "https://insure.opusinfiniti.com/landing",
    learnMoreUrl: "/products/reliance-pms",
  },
  {
    name: "emsPLUS-Premium",
    category: "International school management platform",
    description:
      "Comprehensive K-12 management system with multiple curriculum support, grading, school bus tracking, and administrative workflows.",
    logo: "/images/logos/opuslogo11.webp",
    features: [
      "Multi-curriculum support (Cambridge, IB, CBSE)",
      "Gradebook and automated report card generation",
      "Admissions, enrollment, and registration workflow",
      "School bus tracking with real-time ETA alerts",
    ],
    tags: ["Angular", "Python", "PostgreSQL"],
    demoUrl: "https://www.emsonlineplus.com/",
    learnMoreUrl: "/products/emsplus-premium",
  },
];

export default function ProductsSection() {
  return (
    <section className="section bg-gray-50 py-20" id="products">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Flagship Products
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal">
            Enterprise-grade solutions trusted by thousands of organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flagshipProducts.map((prod, idx) => (
            <div
              key={idx}
              className="card card-hover group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
              
              <div>
                <div className="mb-4">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-primary-50 p-2">
                    <Image
                      src={prod.logo}
                      alt={prod.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {prod.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-semibold">
                    {prod.category}
                  </p>
                </div>

                <p className="text-gray-700 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {prod.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800">
                    {prod.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {prod.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={prod.demoUrl}
                    className="flex-1 text-center py-2 text-sm font-semibold text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Live Demo ↗
                  </a>
                  <Link
                    href={prod.learnMoreUrl}
                    className="flex-1 text-center py-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link className="btn btn-outline rounded-full px-8 py-3" href="/solutions/products">
            View All 23+ Products
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="ml-2 w-4 h-4 inline">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

