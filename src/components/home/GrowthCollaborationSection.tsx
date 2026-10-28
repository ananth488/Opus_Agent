import React from "react";
import Link from "next/link";

export default function GrowthCollaborationSection() {
  return (
    <section
      style={{
        backgroundColor: "#0b192c",
        backgroundImage: "linear-gradient(135deg, #07111e 0%, #0c2340 50%, #05162a 100%)",
        color: "#ffffff",
      }}
      className="section bg-dark-section text-white py-20"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Growth &amp; Collaboration
          </h2>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto font-medium">
            Join us in our journey to transform enterprise software globally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div
            style={{
              backgroundColor: "#0f233a",
              borderColor: "rgba(255, 255, 255, 0.18)",
            }}
            className="rounded-xl p-6 border shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-600/30 text-blue-300">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Recurring Revenue Model</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-normal">
                  Predictable cash flows with 20+ SaaS products generating consistent subscription revenue.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#0f233a",
              borderColor: "rgba(255, 255, 255, 0.18)",
            }}
            className="rounded-xl p-6 border shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-600/30 text-blue-300">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Scalable Solutions</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-normal">
                  High operational leverage and continuous margin improvement as customer base expands.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#0f233a",
              borderColor: "rgba(255, 255, 255, 0.18)",
            }}
            className="rounded-xl p-6 border shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-600/30 text-blue-300">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Market Diversification</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-normal">
                  Active footprint across 10+ countries significantly mitigates geographic risk.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#0f233a",
              borderColor: "rgba(255, 255, 255, 0.18)",
            }}
            className="rounded-xl p-6 border shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-600/30 text-blue-300">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation Pipeline</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-normal">
                  Continuous R&amp;D breakthroughs in applied Artificial Intelligence, RPA, and IoT sensors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#0f233a",
            borderColor: "rgba(255, 255, 255, 0.18)",
          }}
          className="rounded-2xl p-8 border mb-12 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Investment Opportunities</h3>
          <p className="text-blue-200 text-sm mb-6 max-w-2xl font-medium">
            We invite angel investors, venture capital, and private equity to participate in our upside potential and global scaling journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              style={{
                backgroundColor: "#07111e",
                borderColor: "rgba(255, 255, 255, 0.15)",
              }}
              className="p-5 rounded-xl border"
            >
              <h4 className="font-semibold text-white mb-2 text-base">Angel Investors</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Early-stage investment opportunities with high growth potential and strategic involvement.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#07111e",
                borderColor: "rgba(255, 255, 255, 0.15)",
              }}
              className="p-5 rounded-xl border"
            >
              <h4 className="font-semibold text-white mb-2 text-base">Venture Capital</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Series funding for scaling operations, marketing acceleration, and market expansion.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#07111e",
                borderColor: "rgba(255, 255, 255, 0.15)",
              }}
              className="p-5 rounded-xl border"
            >
              <h4 className="font-semibold text-white mb-2 text-base">Private Equity</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Strategic partnerships for accelerated international expansion and asset acquisitions.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link className="btn btn-primary rounded-full px-8 py-3.5 text-base shadow-lg hover:shadow-xl transition-all" href="/investors">
            View Investor Resources →
          </Link>
        </div>
      </div>
    </section>
  );
}
