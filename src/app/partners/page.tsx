import Link from "next/link";
import {
  Globe,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Shield,
  Layers,
  BarChart3,
  BookOpen,
  DollarSign,
  Headphones,
} from "lucide-react";

export const metadata = {
  title: "Partner Program | OPUS Infiniti - Join Our Ecosystem",
  description:
    "Join OPUS partner program. Technology, Implementation, and Reseller partnerships. 50+ partners, 45% average revenue growth, comprehensive support and resources.",
};

export default function PartnersPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-dark-section bg-[#0b192c] bg-gradient-to-br from-[#07111e] via-[#0c2340] to-[#05162a] pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Partner Program
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of 50+ partners driving AI-powered
              transformation across 12 industries
            </p>
            <div className="max-w-4xl mx-auto text-center flex flex-wrap justify-center gap-4">
              <a className="btn btn-primary" href="#benefits">
                Explore Benefits
              </a>
              <Link
                className="btn btn-outline text-white border-white hover:bg-white/10"
                href="/contact?type=partnership"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="section bg-white py-20" id="benefits">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
              Partnership Tiers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the partnership level that fits your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Technology Partner */}
            <div className="card card-hover group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-2">
                  Technology Partner
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Integrate with OPUS platform
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "API access to all products",
                    "Technical support team",
                    "Co-marketing opportunities",
                    "Revenue sharing model",
                    "Quarterly business reviews",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a className="btn btn-primary w-full text-center" href="#apply">
                Learn More
              </a>
            </div>

            {/* Implementation Partner (Highlighted) */}
            <div className="card card-hover group p-8 bg-white rounded-2xl border-2 border-primary-500 shadow-xl ring-2 ring-primary-500/20 md:-translate-y-2 flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                Most Popular
              </div>

              <div>
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-2">
                  Implementation Partner
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Deploy OPUS solutions
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Implementation training",
                    "Dedicated partner manager",
                    "Co-branded marketing",
                    "Deal registration program",
                    "Priority support",
                    "Certification program",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a className="btn btn-primary w-full text-center" href="#apply">
                Learn More
              </a>
            </div>

            {/* Reseller Partner */}
            <div className="card card-hover group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-2">
                  Reseller Partner
                </h3>
                <p className="text-gray-600 mb-6 text-sm">Sell OPUS products</p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Competitive margins",
                    "Sales enablement",
                    "Marketing development funds",
                    "Lead sharing program",
                    "Partner portal access",
                    "Annual partner summit",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a className="btn btn-primary w-full text-center" href="#apply">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With OPUS */}
      <section className="section bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
              Why Partner With OPUS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access to proven AI-powered solutions and growing market demand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Revenue Growth
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Average partner revenue growth of 45% YoY through OPUS
                partnerships
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Market Leadership
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Position yourself as an AI-powered solutions provider in your
                market
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Dedicated Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Partner success team available to support your growth and
                implementation
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Proven ROI
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                290% average ROI across 13 case studies demonstrates customer
                value
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access to 50+ team members across 10+ countries for support
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Comprehensive Training
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Certification programs and ongoing training to keep your team
                updated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Success Stories */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
              Partner Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our partners are growing their business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card card-hover p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-800">
                  Implementation Partner
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                &quot;Partnering with OPUS increased our service offerings and
                revenue by 60% in the first year.&quot;
              </p>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="font-semibold text-dark-900 text-lg">
                  Rajesh Kumar
                </p>
                <p className="text-sm text-gray-500">
                  CEO, TechConsult Asia
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-primary-600">
                    60% Revenue Growth
                  </p>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-primary-600">
                    25+ Implementations
                  </p>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-primary-600">
                    12 Industries
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-hover p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-800">
                  Reseller Partner
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                &quot;The partner program support and marketing resources helped us
                establish market leadership.&quot;
              </p>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="font-semibold text-dark-900 text-lg">Sarah Chen</p>
                <p className="text-sm text-gray-500">
                  VP Sales, Digital Solutions Inc
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-primary-600">
                    45% YoY Growth
                  </p>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-primary-600">
                    50+ Customers
                  </p>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-primary-600">
                    8 Countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Resources */}
      <section className="section bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
              Partner Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed as an OPUS partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Partner Portal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access to marketing materials, sales tools, and partner
                documentation
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Certification Program
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive training and certification for your team
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Sales Enablement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sales decks, case studies, and ROI calculators
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Marketing Development Funds
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Co-marketing budget for joint campaigns and events
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Technical Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated technical support team for your implementations
              </p>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Partner Community
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Network with other partners and share best practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
              How to Apply
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple process to join our partner ecosystem
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                desc: "Fill out our partner application form with your company details and partnership interests",
              },
              {
                step: "2",
                title: "Initial Review",
                desc: "Our partner team reviews your application and assesses fit with OPUS ecosystem",
              },
              {
                step: "3",
                title: "Discovery Call",
                desc: "Schedule a call with our partner manager to discuss opportunities and requirements",
              },
              {
                step: "4",
                title: "Agreement & Onboarding",
                desc: "Sign partnership agreement and begin onboarding with training and resources",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-gray-50/50 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-600 text-white font-bold text-lg shadow-sm">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-dark-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section
        className="section bg-gradient-to-r from-primary-600 to-secondary-600 py-20"
        id="apply"
      >
        <div className="container-custom text-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Ready to Grow Together?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join 50+ partners transforming enterprises with AI-powered
              solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=partnership"
                className="btn btn-white bg-white text-primary-700 font-bold hover:bg-gray-100 shadow-lg px-8 py-3.5 rounded-full inline-block"
              >
                Apply Now
              </Link>
              <Link
                className="btn btn-outline text-white border-white hover:bg-white/10 px-8 py-3.5 rounded-full inline-block font-semibold"
                href="/domain"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

