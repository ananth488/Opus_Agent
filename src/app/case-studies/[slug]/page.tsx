import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/data/caseStudies";
import { Metadata } from "next";

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((cs) => cs.id === slug);
  if (!study) return { title: "Case Study Not Found | OPUS Infiniti" };

  return {
    title: `${study.title} | OPUS Infiniti Case Study`,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const studyIndex = caseStudiesData.findIndex((cs) => cs.id === slug);
  if (studyIndex === -1) notFound();

  const study = caseStudiesData[studyIndex];
  const nextStudy = caseStudiesData[(studyIndex + 1) % caseStudiesData.length];

  return (
    <div className="w-full bg-white">
      {/* Header Banner */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden bg-dark-section bg-[#0b192c] bg-gradient-to-br from-[#07111e] via-[#0c2340] to-[#05162a] pt-32 pb-16 text-white">
        <div className="container-custom relative z-10 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-gray-300 mb-6 text-sm">
              <Link className="hover:text-white transition-colors" href="/case-studies">
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-white line-clamp-1">{study.title}</span>
            </div>

            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/50 text-primary-300 text-xs font-semibold">
                {study.tier}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {study.title}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-200 pt-4 border-t border-white/20">
              <div>
                <div className="text-xs text-gray-300 mb-1 font-medium">Client</div>
                <div className="font-semibold text-white text-base">{study.client}</div>
              </div>
              <div>
                <div className="text-xs text-gray-300 mb-1 font-medium">Industry</div>
                <div className="font-semibold text-white text-base">{study.industry}</div>
              </div>
              <div>
                <div className="text-xs text-gray-300 mb-1 font-medium">ROI (Year 1)</div>
                <div className="font-semibold text-primary-400 text-base">{study.roi}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="section py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Cols: Main Narrative */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  The Challenge
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  AI Solution Architecture
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {study.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                  Business Impact
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {study.results.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-2xl border border-primary-200"
                    >
                      <div className="text-xl md:text-2xl font-bold text-primary-600 mb-2">
                        {res.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-700 font-medium">
                        {res.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {study.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-xs md:text-sm font-semibold border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl border-l-4 border-primary-600">
                <div className="mb-4">
                  <p className="text-base md:text-lg text-gray-800 italic leading-relaxed">
                    &quot;{study.testimonial.quote}&quot;
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{study.testimonial.author}</div>
                  <div className="text-sm text-gray-600">{study.testimonial.position}</div>
                </div>
              </div>
            </div>

            {/* Right Col: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-200">
                  <h3 className="text-base font-bold text-gray-900 mb-4">
                    Key Metrics At A Glance
                  </h3>
                  <div className="space-y-4">
                    {study.results.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-3">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-primary-600 shrink-0 mt-0.5"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <div>
                          <div className="font-bold text-primary-600 text-sm">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600">{metric.metric}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-2">Interested in Similar Results?</h3>
                  <p className="text-xs text-white/90 mb-5 leading-relaxed">
                    Discover how OPUS can transform your operations with AI-powered enterprise software.
                  </p>
                  <Link
                    className="block text-center py-2.5 px-4 rounded-xl bg-white text-primary-700 font-semibold text-sm hover:bg-gray-100 transition-colors shadow-sm"
                    href="/contact"
                  >
                    Request Demo →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study Navigation */}
      <section className="section bg-gray-50 border-t border-gray-200 py-12">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors"
              href="/case-studies"
            >
              ← Back to All Case Studies
            </Link>

            <Link
              className="inline-flex items-center gap-2 p-4 rounded-xl bg-white border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all text-right"
              href={`/case-studies/${nextStudy.id}`}
            >
              <div>
                <div className="text-xs text-gray-500">Next Case Study</div>
                <div className="font-bold text-gray-900 text-sm line-clamp-1">
                  {nextStudy.title}
                </div>
              </div>
              <span className="text-primary-600 font-bold text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

