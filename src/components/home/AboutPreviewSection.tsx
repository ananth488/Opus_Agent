import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreviewSection() {
  return (
    <section className="section bg-gray-50 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="absolute w-3/4 aspect-square rounded-full bg-primary-500/10 blur-3xl pointer-events-none"></div>
            <Image
              src="/images/about.webp"
              alt="About Opus Infiniti"
              width={550}
              height={450}
              className="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-xl rounded-2xl"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary-600 mb-2">
              ABOUT US
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Pioneering AI-Powered Enterprise Software Globally
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 font-normal">
              Founded with a mission to deliver resilient, scalable, and intelligent enterprise software, OPUS Infiniti has grown into a trusted technology partner for global enterprises, governments, and educational institutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-normal">
              With 50+ trained experts across 10+ countries, we build cutting-edge ERP systems, data engineering platforms, and domain-specific SaaS tools with artificial intelligence embedded at their core.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn btn-primary rounded-full px-6 py-2.5">
                Discover Our Story
              </Link>
              <Link href="/contact" className="btn btn-outline rounded-full px-6 py-2.5">
                Contact Leadership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

