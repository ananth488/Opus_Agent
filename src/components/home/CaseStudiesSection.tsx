import React from "react";
import Link from "next/link";

const caseStudies = [
  {
    tier: "Tier 1",
    industry: "Manufacturing & ERP",
    badgeColor: "bg-primary-100 text-primary-700",
    title: "Predictive Maintenance & Quality AI Transform Production",
    client: "Kualities Manufacturing",
    challenge:
      "Kualities faced 40% unplanned downtime, costly quality defects, and reactive maintenance practices costing $120,000 monthly.",
    solution:
      "Implemented OPUS Manufacturing ERP with ML-powered predictive maintenance (94% accuracy) and NLP quality reports.",
    metric1: "40% → 12%",
    metric1Label: "Downtime Reduction",
    metric2: "$2.1M",
    metric2Label: "Annual Savings",
    slug: "/case-studies/kualities-manufacturing",
  },
  {
    tier: "Tier 1",
    industry: "Supply Chain & Logistics",
    badgeColor: "bg-secondary-100 text-secondary-700",
    title: "Real-Time Logistics Intelligence Through AI-Powered Route Optimization",
    client: "Cargo Management",
    challenge:
      "Cargo Management handled 500+ daily shipments with 35% route inefficiency, 4.2-hour average delivery times and high fuel costs.",
    solution:
      "Deployed OPUS Supply Chain with ML route optimization (92% accuracy) and NLP dynamic shipment tracking.",
    metric1: "4.2h → 2.7h",
    metric1Label: "Delivery Time (-35%)",
    metric2: "25% ($1.2M)",
    metric2Label: "Fuel Cost Saved",
    slug: "/case-studies/cargo-management-logistics",
  },
  {
    tier: "Tier 1",
    industry: "Healthcare & Medical Tourism",
    badgeColor: "bg-accent-100 text-accent-700",
    title: "Patient Intelligence Platform Transforms Healthcare Outcomes",
    client: "Medical Tourism Hospital",
    challenge:
      "Hospital managed 5,000+ international patients annually with manual patient-specialist matching and slower scheduling.",
    solution:
      "Implemented OPUS Health ERP with ML patient matching (94% accuracy) and NLP multi-language medical processing.",
    metric1: "82% → 91%",
    metric1Label: "Treatment Success",
    metric2: "+58%",
    metric2Label: "Patient Satisfaction",
    slug: "/case-studies/medical-tourism-healthcare",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="section py-20 bg-white" id="case-studies">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            AI-Powered Success Stories
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal">
            13 industry-leading case studies showcasing ML &amp; NLP transformations with 290% average ROI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="card card-hover group bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${study.badgeColor}`}
                  >
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Client:</strong> {study.client}
                  </p>
                </div>

                <div className="mb-6 space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge</h4>
                    <p className="line-clamp-2 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
                    <p className="line-clamp-2 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Results
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary-50 p-3 rounded-xl text-center">
                      <div className="text-sm font-bold text-primary-600">
                        {study.metric1}
                      </div>
                      <div className="text-xs text-gray-700 font-medium">{study.metric1Label}</div>
                    </div>
                    <div className="bg-primary-50 p-3 rounded-xl text-center">
                      <div className="text-sm font-bold text-primary-600">
                        {study.metric2}
                      </div>
                      <div className="text-xs text-gray-700 font-medium">{study.metric2Label}</div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all pt-2"
                href={study.slug}
              >
                Read Full Case Study →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link className="btn btn-outline rounded-full px-8 py-3" href="/case-studies">
            View All Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}

