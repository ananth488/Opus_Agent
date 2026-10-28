"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { FAQ_DATA, FAQCategory } from "@/data/faqs";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return FAQ_DATA;
    }
    const q = searchQuery.toLowerCase();
    return FAQ_DATA.map((cat) => {
      const filtered = cat.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
      );
      return {
        ...cat,
        questions: filtered,
      };
    }).filter((cat) => cat.questions.length > 0);
  }, [searchQuery]);

  const totalQuestions = useMemo(() => {
    return filteredCategories.reduce((sum, c) => sum + c.questions.length, 0);
  }, [filteredCategories]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden bg-dark-section bg-[#0b192c] bg-gradient-to-br from-[#07111e] via-[#0c2340] to-[#05162a] pt-20 pb-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container-custom w-full">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/80 border border-white/20 mb-5">
              Help Center
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg text-gray-100 font-medium mb-8">
              61 answers across 6 topics — find everything you need to know about
              Opus Infiniti.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions…"
                className="w-full pl-12 pr-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white/20 transition-all text-base backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="section bg-gray-50 py-16">
        <div className="container-custom max-w-4xl mx-auto">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
              <p className="text-2xl text-gray-500 mb-2">No questions found</p>
              <p className="text-gray-400 mb-6">
                No answers matched your query &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="btn btn-primary"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredCategories.map((category) => (
                <div key={category.id} className="space-y-6">
                  {/* Category Header Card */}
                  <div
                    className={`bg-gradient-to-r ${category.gradient} rounded-2xl p-6 text-white flex items-center gap-4 shadow-sm`}
                  >
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-white/80 text-sm mt-0.5">
                        {category.questions.length} questions answered
                      </p>
                    </div>
                  </div>

                  {/* Accordion List */}
                  <div className="space-y-3">
                    {category.questions.map((item) => {
                      const isOpen = !!openItems[item.id];
                      return (
                        <div
                          key={item.id}
                          className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-primary-300 transition-colors duration-200 shadow-sm"
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span className="font-semibold text-dark-900 text-base leading-snug group-hover:text-primary-700 transition-colors">
                              {item.question}
                            </span>
                            <span
                              className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary-50 text-primary-600 transition-transform duration-300 ${
                                isOpen ? "rotate-180 bg-primary-100" : ""
                              }`}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </span>
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-6 pt-2 text-gray-800 border-t border-gray-100 bg-gray-50/50 leading-relaxed text-sm md:text-base font-normal">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="container-custom text-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is ready to help. Reach out and we&apos;ll get back to you
              quickly.
            </p>
            <Link
              href="/contact"
              className="btn btn-white bg-white text-primary-700 font-bold hover:bg-gray-100 shadow-lg px-8 py-3 rounded-full inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

