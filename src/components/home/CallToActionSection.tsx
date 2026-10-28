import React from "react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section
      style={{
        backgroundColor: "#0b192c",
        backgroundImage: "linear-gradient(135deg, #07111e 0%, #0c2340 50%, #05162a 100%)",
        color: "#ffffff",
      }}
      className="section bg-dark-section text-white py-20 border-t border-white/10"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-blue-200 mb-8 font-medium">
            Let&apos;s discuss how our solutions can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link className="btn btn-primary btn-lg rounded-full px-8 py-3.5 shadow-lg" href="/contact">
              Schedule a Demo →
            </Link>
            <Link
              className="btn btn-outline btn-lg rounded-full px-8 py-3.5 text-white border-white hover:bg-white hover:text-gray-900"
              href="/contact"
            >
              Get in Touch
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-3">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 text-blue-400">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div className="text-left">
                <p className="text-xs text-blue-200">Call us</p>
                <a href="tel:+919790965960" className="font-semibold text-white hover:text-blue-300">
                  +91 97909 65960
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 text-blue-400">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div className="text-left">
                <p className="text-xs text-blue-200">Email us</p>
                <a href="mailto:reachus@opusinfiniti.com" className="font-semibold text-white hover:text-blue-300">
                  reachus@opusinfiniti.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
