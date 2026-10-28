"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/domain", label: "Domains" },
    { href: "/solutions/products", label: "Products" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/partners", label: "Partners" },
    { href: "/investors", label: "Investors" },
    { href: "/our-clientele", label: "Our Clientele" },
    { href: "/faq", label: "FAQs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary-500/20 shadow-xs">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link
            className="flex items-center gap-2 font-display font-bold text-2xl text-gray-900 hover:text-primary-600 transition-colors"
            href="/"
          >
            <div className="relative h-12 w-48">
              <Image
                src="/logo.webp"
                alt="Opus Infiniti Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`px-2 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive
                        ? "text-primary-600 font-semibold"
                        : "text-gray-900 hover:text-primary-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              className="px-5 py-2 text-sm font-semibold text-gray-800 bg-white/80 border border-primary-600 rounded-full hover:bg-primary-50 hover:shadow-md transition-all"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              href="/contact#GetStarted"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-primary-600 text-white hover:bg-primary-700 hover:shadow-md transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-black transition-colors focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-primary-500/20 px-6 py-6 shadow-xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    isActive ? "text-primary-600 font-semibold" : "text-gray-800 hover:text-primary-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-center px-6 py-2.5 text-sm font-semibold text-gray-800 border border-primary-600 rounded-full hover:bg-primary-50"
              >
                Contact
              </Link>
              <Link
                href="/contact#GetStarted"
                onClick={() => setIsOpen(false)}
                className="text-center px-6 py-2.5 text-sm font-semibold rounded-full bg-primary-600 text-white hover:bg-primary-700 shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
