import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0b192c",
        backgroundImage: "linear-gradient(135deg, #07111e 0%, #0c2340 50%, #05162a 100%)",
        color: "#ffffff",
      }}
      className="bg-dark-section border-t border-white/10 text-gray-300"
    >
      <div className="container-custom pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <Link
              className="flex items-center gap-2 font-display font-bold text-2xl text-white mb-4 hover:text-primary-400 transition-colors"
              href="/"
            >
              <div className="relative h-12 w-48">
                <Image
                  src="/logo.webp"
                  alt="Opus Infiniti Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-6 font-medium">
              AI-powered enterprise solutions transforming businesses across 12 industries.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/opus-infiniti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://x.com/opusinfiniti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100071594207736#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/partners"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/investors"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/our-clientele"
                >
                  Our Clientele
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/contact"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/case-studies"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/domain"
                >
                  Domains
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/faq"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/products/opusdata-etl"
                >
                  OPUS Data Migration (ETL)
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/products/reliance-pms"
                >
                  Reliance PMS
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/products/emsplus-premium"
                >
                  emsPLUS-Premium
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  href="/solutions/products"
                >
                  All SaaS Products
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-primary-500/20">
          <div className="flex items-start gap-3">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-primary-400 shrink-0 mt-1"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div>
              <div className="text-sm text-gray-300 font-medium">Email</div>
              <a
                href="mailto:reachus@opusinfiniti.com"
                className="text-white hover:text-primary-400 transition-colors text-sm"
              >
                reachus@opusinfiniti.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-primary-400 shrink-0 mt-1"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div>
              <div className="text-sm text-gray-300 font-medium">Phone</div>
              <a
                href="tel:+919790965960"
                className="text-white hover:text-primary-400 transition-colors text-sm"
              >
                +91 97909 65960
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-primary-400 shrink-0 mt-1"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <div className="text-sm text-gray-300 font-medium">Location</div>
              <p className="text-white text-sm">
                #259, No:G-1, Door No 4/608, V.O.C Street, Kottivakkam, Perungudi, OMR, Chennai 600 041.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-500/20 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm" suppressHydrationWarning>
              © 2026 OPUS Infiniti. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                className="text-gray-300 hover:text-white transition-colors text-sm"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-gray-300 hover:text-white transition-colors text-sm"
                href="/terms-of-service"
              >
                Terms of Service
              </Link>
              <Link
                className="text-gray-300 hover:text-white transition-colors text-sm"
                href="/cookie-policy"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
