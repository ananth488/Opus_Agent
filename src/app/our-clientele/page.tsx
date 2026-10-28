import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { CLIENTELE_DATA } from "@/data/clientele";

export const metadata = {
  title: "Our Clientele | Opus Infiniti",
  description:
    "Trusted by businesses across the globe. Explore the companies that rely on Opus Infiniti for ERP, CRM, HRMS, and managed IT services.",
};

export default function OurClientelePage() {
  return (
    <main className="overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 bg-dark-section bg-[#0b192c] bg-gradient-to-br from-[#07111e] via-[#0c2340] to-[#05162a]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/20">
              <Globe className="h-4 w-4" />
              Trusted by businesses across the globe
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-display font-bold leading-tight text-white">
              Our Clientele
            </h1>

            <p className="mt-5 max-w-3xl text-lg md:text-xl text-gray-200 leading-relaxed">
              Companies of every size rely on Opus Infiniti for ERP, CRM, HRMS,
              mobile apps, and managed IT services. Here is a look at who we
              work with.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/15">
                <div className="text-3xl font-bold text-white">11</div>
                <div className="text-sm text-gray-200">Countries</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/15">
                <div className="text-3xl font-bold text-white">64+</div>
                <div className="text-sm text-gray-200">Clients Featured</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/15">
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-gray-200">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Groups Showcase */}
      <section className="section py-16">
        <div className="container-custom space-y-16">
          {CLIENTELE_DATA.map((group) => (
            <section
              key={group.id}
              id={group.id}
              className="scroll-mt-28"
              aria-labelledby={`${group.id}-title`}
            >
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-4">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    {/* Flag */}
                    <div className="relative w-10 h-7 rounded border border-gray-200 overflow-hidden shadow-sm flex-shrink-0">
                      <Image
                        src={group.flag}
                        alt={`${group.country} flag`}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h4
                        id={`${group.id}-title`}
                        className="text-xl md:text-3xl font-display font-bold text-dark-900"
                      >
                        {group.country}
                      </h4>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {group.region}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-auto rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold text-primary-700">
                  {group.clients.length}{" "}
                  {group.clients.length === 1 ? "Client" : "Clients"}
                </div>
              </div>

              {/* Client Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.clients.map((client) => (
                  <article
                    key={client.id}
                    className="card card-hover text-center group flex h-full flex-col p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-primary-400 transition-all"
                  >
                    <div className="relative w-full h-24 mb-4 flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <h6 className="text-base font-bold text-dark-900 group-hover:text-primary-600 transition-colors mb-1">
                      {client.name}
                    </h6>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-3">
                      {client.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Join Clientele CTA */}
      <section className="section bg-white py-16 border-t border-gray-200">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark-900">
            Want to Join Our Clientele?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
            Talk to our team and find out how Opus Infiniti can transform your
            business operations.
          </p>
          <Link
            className="btn btn-primary mt-8 inline-block px-8 py-3.5 rounded-full font-semibold shadow-lg"
            href="/contact#GetStarted"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}

