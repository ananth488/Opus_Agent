"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-img1 pt-32 pb-16 min-h-[90vh]">
      <div className="relative z-10 container-custom w-full mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center">
          <div className="w-full text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-600 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                AI-First Enterprise Solutions | 290% Average ROI
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-primary-600 mb-4 leading-tight">
              AI-Powered Enterprise Solutions
              <span className="text-primary-600 block mt-2">
                Transform Operations with ML &amp; NLP
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              13 Industry-Leading Case Studies | 290% Average ROI | 12 Domains | 50+ Experts
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 py-4 border-y border-gray-200">
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600">13</div>
                <div className="text-sm text-gray-700 font-medium mt-1">Case Studies</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-secondary-600">290%</div>
                <div className="text-sm text-gray-700 font-medium mt-1">Avg ROI</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent-500">12</div>
                <div className="text-sm text-gray-700 font-medium mt-1">Industries</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-600">$70M+</div>
                <div className="text-sm text-gray-700 font-medium mt-1">Annual Impact</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
              <Link className="btn btn-primary rounded-full btn-md group" href="/case-studies">
                Explore Case Studies
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  height="1em"
                  width="1em"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link className="btn btn-outline rounded-full btn-md" href="/contact#GetStarted">
                Request Demo
              </Link>
              <Link href="/about" className="btn btn-ghost rounded-full btn-md group">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                  height="1em"
                  width="1em"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Watch Overview
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-800 mb-3 font-semibold">
                AI Capabilities : Machine Learning + Natural Language Processing
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm">
                <div className="text-gray-800 font-semibold">Predictive Analytics</div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="text-gray-800 font-semibold">Optimization</div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="text-gray-800 font-semibold">Automation</div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="text-gray-800 font-semibold">Intelligence</div>
              </div>
            </div>
          </div>

          <div className="relative w-full flex items-center justify-center">
            <div className="absolute w-3/4 aspect-square rounded-full bg-primary-500/20 blur-3xl pointer-events-none"></div>
            <Image
              src="/images/AI-PoweredEnterprise.webp"
              alt="AI-powered enterprise solutions"
              width={650}
              height={550}
              className="relative z-10 w-full max-w-xl h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

