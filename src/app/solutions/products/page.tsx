"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  ArrowRight,
  Shield,
  BookOpen,
  Users,
  Utensils,
  Building,
  Smartphone,
  Globe,
} from "lucide-react";
import { PRODUCTS_DATA, Product } from "@/data/products";

const SOLUTION_FILTERS = [
  {
    id: "all",
    label: "All Solutions",
    desc: "View all 30 enterprise products",
    icon: Filter,
  },
  {
    id: "extended-enterprise",
    label: "Extended Enterprise Products",
    desc: "Enterprise security, logistics, portfolio and integration tools",
    icon: Shield,
  },
  {
    id: "education",
    label: "Education",
    desc: "Systems for tuition centers, international schools, and universities",
    icon: BookOpen,
  },
  {
    id: "hrms",
    label: "HRMS",
    desc: "Statutory payroll & HR compliance engines (Malaysia, Singapore, Africa)",
    icon: Users,
  },
  {
    id: "hospitality",
    label: "Hospitality",
    desc: "Point of sale, hotel systems, and retail hub management",
    icon: Utensils,
  },
  {
    id: "enterprise",
    label: "Enterprise",
    desc: "HMS, security management systems, and supply chain services",
    icon: Building,
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    desc: "On-demand driver, shopping mall, ordering, and restaurant apps",
    icon: Smartphone,
  },
  {
    id: "community-portal",
    label: "Community Portals",
    desc: "Social networking, alumni, and transparency portals",
    icon: Globe,
  },
];

export default function SolutionsProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        activeFilter === "all" || product.category === activeFilter;
      const matchesSearch =
        !searchQuery.trim() ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-primary-900 to-secondary-900 pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Solutions &amp; Products
              <span className="text-gradient block mt-2">
                Find the Right Product for Your Needs
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse our comprehensive product catalog organized by technology
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="section bg-white py-16">
        <div className="container-custom">
          {/* Search Input */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, tag, or description..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-800 shadow-sm"
              />
            </div>
          </div>

          <div id="FilterSolution"></div>

          {/* Filter by Solution Category Buttons */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-bold text-dark-900">
                Filter by Solution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SOLUTION_FILTERS.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left flex items-start gap-3 cursor-pointer ${
                      isActive
                        ? "border-primary-600 bg-primary-50/50 shadow-sm"
                        : "border-gray-200 hover:border-primary-300 bg-white"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 mt-1 ${
                        isActive ? "text-primary-600" : "text-gray-500"
                      }`}
                    />
                    <div>
                      <h3
                        className={`font-bold text-sm ${
                          isActive ? "text-primary-900" : "text-dark-900"
                        }`}
                      >
                        {filter.label}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        {filter.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count Badge */}
          <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-bold text-primary-600">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>

            {(activeFilter !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="text-xs font-semibold text-primary-600 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <p className="text-xl text-gray-600 mb-2">No products found</p>
              <p className="text-sm text-gray-400 mb-4">
                Try a different search keyword or category filter.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.slug}
                  className="card card-hover group relative overflow-hidden p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-primary-400 transition-all"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>

                  <div>
                    <div className="mb-4">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 p-2">
                        <Image
                          src={product.logo}
                          alt={`${product.name} logo`}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-primary-600 font-semibold">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {product.desc}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-1.5">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                        {product.category}
                      </span>
                      {product.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-600 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all text-sm"
                      href={product.href}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-secondary-600 py-16 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Need a Custom Enterprise Solution?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our engineering team can tailor any of our 20+ SaaS platforms or
            build bespoke software to fit your exact specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-white bg-white text-primary-700 font-bold hover:bg-gray-100 px-8 py-3.5 rounded-full shadow-lg"
            >
              Request a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="btn btn-outline text-white border-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

