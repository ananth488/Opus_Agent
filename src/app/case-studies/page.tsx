"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { caseStudiesData } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTier, setSelectedTier] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const industries = useMemo(() => {
    const set = new Set(caseStudiesData.map((c) => c.industry));
    return Array.from(set);
  }, []);

  const filteredStudies = useMemo(() => {
    return caseStudiesData.filter((item) => {
      const matchSearch =
        searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.challenge.toLowerCase().includes(searchTerm.toLowerCase());

      const matchTier =
        selectedTier === "all" ||
        item.tier.toLowerCase().includes(selectedTier.toLowerCase());

      const matchIndustry =
        selectedIndustry === "all" || item.industry === selectedIndustry;

      return matchSearch && matchTier && matchIndustry;
    });
  }, [searchTerm, selectedTier, selectedIndustry]);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Banner */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 bg-dark-section bg-[#0b192c] bg-gradient-to-br from-[#07111e] via-[#0c2340] to-[#05162a] text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/90 border border-white/20 mb-4">
              Proven Transformations
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              AI-Powered Case Studies
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-medium">
              13 industry-leading implementations showcasing ML &amp; NLP transformations with 290% average ROI
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white border-b border-gray-200 py-8 shadow-xs">
        <div className="container-custom">
          <div className="space-y-6">
            <div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search case studies by title, client, or industry..."
                className="w-full px-6 py-3.5 rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 text-sm shadow-xs"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  Filter by Tier
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "All Tiers", val: "all" },
                    { label: "Tier 1 (Hero)", val: "tier 1" },
                    { label: "Tier 2 (Strong)", val: "tier 2" },
                    { label: "Tier 3 (Supporting)", val: "tier 3" },
                  ].map((t) => (
                    <button
                      key={t.val}
                      onClick={() => setSelectedTier(t.val)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                        selectedTier === t.val
                          ? "bg-primary-600 text-white shadow-xs"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  Filter by Industry
                </h3>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-primary-500 text-sm text-gray-800 bg-white"
                >
                  <option value="all">All Industries ({caseStudiesData.length})</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-xs font-medium text-gray-500">
              Showing {filteredStudies.length} of {caseStudiesData.length} case studies
            </div>
          </div>
        </div>
      </section>

      {/* Case studies list */}
      <section className="section py-16">
        <div className="container-custom">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">No case studies found</h3>
              <p className="text-gray-500 text-sm mb-6">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTier("all");
                  setSelectedIndustry("all");
                }}
                className="btn btn-primary rounded-full px-6 py-2 text-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <article
                  key={study.id}
                  className="card card-hover group bg-white border border-gray-100 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
                          {study.tier}
                        </span>
                        <span className="text-xs font-semibold text-gray-700">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {study.title}
                      </h3>
                      <p className="text-xs text-gray-800">
                        <strong className="text-gray-900">Client:</strong> {study.client}
                      </p>
                    </div>

                    <div className="mb-6 space-y-3">
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Challenge
                        </h4>
                        <p className="text-xs text-gray-700 line-clamp-2 leading-relaxed font-normal">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Solution
                        </h4>
                        <p className="text-xs text-gray-700 line-clamp-2 leading-relaxed font-normal">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Key Results
                      </h4>
                      <div className="space-y-2">
                        {study.results.slice(0, 2).map((r, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 shrink-0"></div>
                            <div>
                              <div className="font-bold text-primary-600 text-xs">
                                {r.value}
                              </div>
                              <div className="text-[11px] text-gray-700 font-medium">{r.metric}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all pt-4 border-t border-gray-100"
                  >
                    Read Full Case Study →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-gradient-to-br from-primary-900 to-secondary-900 text-white py-20 text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-8">
            See how OPUS AI-powered solutions can deliver 290% average ROI for your enterprise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link className="btn btn-primary rounded-full px-8 py-3.5" href="/contact">
              Request a Demo →
            </Link>
            <Link className="btn btn-outline rounded-full px-8 py-3.5 text-white border-white hover:bg-white hover:text-gray-900" href="/contact">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

