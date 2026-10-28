import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About OPUS Infiniti | Enterprise Software Company",
  description:
    "Learn about OPUS Infiniti - a global software development company with 50+ experts, 20+ SaaS products, and proven expertise in ERP, HRMS, AI, and IoT solutions.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-dark-section bg-[#0b192c] bg-gradient-to-br from-[#07111e] via-[#0c2340] to-[#05162a] pt-36 pb-20 text-white">
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              About OPUS Infiniti
              <span className="text-blue-300 block mt-2">
                Pioneering AI-Powered Enterprise Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
              A global software development company transforming businesses through innovative AI, ML, and enterprise solutions across 12 industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-10 border border-primary-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-primary-600 text-white">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h2 className="text-3xl font-display font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower enterprises globally with cutting-edge AI-powered software solutions that drive digital transformation, operational excellence, and sustainable growth across all industries.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-10 border border-secondary-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-secondary-600 text-white">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h2 className="text-3xl font-display font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the world&apos;s leading provider of AI-integrated enterprise software, recognized for innovation, reliability, and transformative impact on global business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card card-hover text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4 text-primary-600">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pioneering AI and ML solutions that transform enterprise operations
              </p>
            </div>

            <div className="card card-hover text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4 text-primary-600">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delivering world-class quality in every product and service
              </p>
            </div>

            <div className="card card-hover text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4 text-primary-600">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building strong partnerships with clients and stakeholders
              </p>
            </div>

            <div className="card card-hover text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4 text-primary-600">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enabling sustainable business growth for our customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="section bg-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              By The Numbers
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our impact across the globe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Expert Team Members</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-400 mb-2">20+</div>
              <div className="text-gray-300 text-sm">SaaS Products</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-400 mb-2">100+</div>
              <div className="text-gray-300 text-sm">Implementations</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-400 mb-2">12</div>
              <div className="text-gray-300 text-sm">Industries Served</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm">Countries</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-400 mb-2">290%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-900 to-secondary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let&apos;s discuss how our solutions can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link className="btn btn-primary btn-lg rounded-full px-8 py-3.5" href="/contact">
                Get in Touch →
              </Link>
              <Link className="btn btn-outline btn-lg rounded-full px-8 py-3.5 text-white border-white hover:bg-white hover:text-gray-900" href="/solutions/products">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
