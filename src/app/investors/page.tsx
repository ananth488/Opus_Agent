import Link from "next/link";
import {
  TrendingUp,
  Users,
  Globe,
  Award,
  DollarSign,
  Cpu,
  CheckCircle2,
  FileText,
  BarChart,
  PieChart,
  ShieldCheck,
  Search,
  Briefcase,
} from "lucide-react";

export const metadata = {
  title: "Investor Resources | OPUS Infiniti - AI-Powered Enterprise Solutions",
  description:
    "Explore investment opportunities in AI-powered enterprise software. 290% average ROI, 12 industries, 100+ implementations. Download investor materials and financial projections.",
};

export default function InvestorsPage() {
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
              Investor Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover investment opportunities in AI-powered enterprise
              solutions with proven ROI across 12 industries
            </p>
            <div className="max-w-4xl mx-auto text-center flex flex-wrap justify-center gap-4">
              <a className="btn btn-primary" href="#highlights">
                View Investment Highlights
              </a>
              <Link
                className="btn btn-outline text-white border-white hover:bg-white/10"
                href="/contact?type=investment"
              >
                Schedule Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="section bg-white py-20" id="highlights">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
              Investment Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strong fundamentals and proven market opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card card-hover group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  Proven ROI
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  290% average ROI across 13 case studies with 3.7 month payback
                  period
                </p>
              </div>
              <div className="text-3xl font-bold text-primary-600 mt-2">
                290%
              </div>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  Market Reach
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  12 industries covered with 100+ successful implementations
                </p>
              </div>
              <div className="text-3xl font-bold text-primary-600 mt-2">
                100+
              </div>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  Global Presence
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  50+ expert team across 10+ countries with local expertise
                </p>
              </div>
              <div className="text-3xl font-bold text-primary-600 mt-2">
                50+
              </div>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  Revenue Scale
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  $70M+ annual impact across all client implementations
                </p>
              </div>
              <div className="text-3xl font-bold text-primary-600 mt-2">
                $70M+
              </div>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  Product Portfolio
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  20+ SaaS products with recurring revenue model
                </p>
              </div>
              <div className="text-3xl font-bold text-primary-600 mt-2">
                20+
              </div>
            </div>

            <div className="card card-hover group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  AI Differentiation
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  ML &amp; NLP capabilities integrated across all products
                </p>
              </div>
              <div className="text-3xl font-bold text-primary-600 mt-2">
                AI-First
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="section bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-dark-900 mb-6">
                Market Opportunity
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-gray-700 font-medium">
                    Enterprise Software Market
                  </span>
                  <span className="text-2xl font-bold text-primary-600">
                    $500B+
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-gray-700 font-medium">
                    AI/ML Market Growth
                  </span>
                  <span className="text-2xl font-bold text-primary-600">
                    38% CAGR
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-gray-700 font-medium">
                    ERP Market Size
                  </span>
                  <span className="text-2xl font-bold text-primary-600">
                    $60B+
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-gray-700 font-medium">Target TAM</span>
                  <span className="text-2xl font-bold text-primary-600">
                    $50B+
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">
                Key Market Drivers
              </h3>
              <ul className="space-y-4">
                {[
                  "Digital transformation acceleration",
                  "AI/ML adoption in enterprises",
                  "Cloud migration trends",
                  "Industry 4.0 initiatives",
                  "Supply chain optimization",
                  "Remote work infrastructure",
                ].map((driver, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{driver}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Metrics */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
              Financial Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strong financial performance and growth trajectory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-2xl border border-primary-100 shadow-sm">
              <div className="text-sm text-gray-600 mb-2">Annual Revenue</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                $15M+
              </div>
              <div className="text-sm text-green-600 font-semibold">
                +45% YoY
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-2xl border border-primary-100 shadow-sm">
              <div className="text-sm text-gray-600 mb-2">
                Recurring Revenue
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                65%
              </div>
              <div className="text-sm text-green-600 font-semibold">
                Increasing
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-2xl border border-primary-100 shadow-sm">
              <div className="text-sm text-gray-600 mb-2">
                Customer Retention
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                92%
              </div>
              <div className="text-sm text-green-600 font-semibold">
                Industry Leading
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-2xl border border-primary-100 shadow-sm">
              <div className="text-sm text-gray-600 mb-2">Gross Margin</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                72%
              </div>
              <div className="text-sm text-green-600 font-semibold">
                Expanding
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Resources Pack */}
      <section className="section bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-900">
              Investor Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive information about OPUS Infiniti and investment
              opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Executive Summary */}
            <div className="card card-hover p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Executive Summary
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                High-level overview of OPUS Infiniti and investment opportunity
              </p>
              <ul className="space-y-3">
                {[
                  "Company mission focused on AI-powered enterprise transformation",
                  "$15M+ annual revenue with 45% year-over-year growth",
                  "20+ SaaS products across 5 industry categories",
                  "Global presence in 10+ countries with local expertise",
                  "Series A funding opportunity with clear growth roadmap",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pitch Deck */}
            <div className="card card-hover p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Pitch Deck
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Comprehensive presentation of business model and growth strategy
              </p>
              <ul className="space-y-3">
                {[
                  "$50B+ total addressable market in enterprise software",
                  "Subscription-based model with 40% software licensing revenue",
                  "Unit economics: 27:1 CLV:CAC ratio with 2.7 month payback",
                  "Clear differentiation: AI-first, multi-ERP, industry-specific solutions",
                  "Exit scenarios from $200M (bear) to $960M (bull case)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Financial Projections */}
            <div className="card card-hover p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Financial Projections
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                5-year financial model with detailed assumptions
              </p>
              <ul className="space-y-3">
                {[
                  "5-year revenue projection: $15M → $85M (41% CAGR)",
                  "85% gross margins maintained throughout projection period",
                  "Path to profitability: 5% → 10%+ EBITDA margin growth",
                  "92% customer retention with 110% net revenue retention",
                  "Conservative assumptions with bull/base/bear case scenarios",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Studies */}
            <div className="card card-hover p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Case Studies
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Detailed case studies showing ROI and customer success
              </p>
              <ul className="space-y-3">
                {[
                  "13 case studies across manufacturing, logistics, healthcare, and education",
                  "290% average ROI with 3.7 month average payback period",
                  "Customer success: 20-35% inventory reduction, +35-40% efficiency gains",
                  "4-6 month implementation timeline with 100% success rate",
                  "Cost savings ranging from $500K to $2M+ annually per client",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Market Analysis */}
            <div className="card card-hover p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">
                Market Analysis
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Industry research and market opportunity assessment
              </p>
              <ul className="space-y-3">
                {[
                  "Enterprise software market: $500B+ with 12-15% CAGR",
                  "AI/ML market growing at 38% CAGR, creating new opportunities",
                  "12 target industries with proven solution fit and demand",
                  "Competitive advantage through emerging market focus and pricing",
                  "MENA, ASEAN, and South Asia markets showing strong growth potential",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team Bios */}
            <div className="card card-hover p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">Team Bios</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Leadership team background and expertise
              </p>
              <ul className="space-y-3">
                {[
                  "Founder & CEO: 25+ years enterprise software, 3 previous exits",
                  "CTO & Co-founder: 20+ years, former major ERP vendor executive",
                  "VP Sales: $500M+ revenue track record, 100+ enterprise accounts",
                  "50+ team members across 10+ countries with deep industry expertise",
                  "Strong succession planning and board oversight for investor confidence",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Invest CTA */}
      <section
        className="section bg-gradient-to-r from-primary-600 to-secondary-600 py-20"
        id="contact"
      >
        <div className="container-custom text-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Ready to Invest?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in transforming enterprise software with AI-powered
              solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=investment"
                className="btn btn-white bg-white text-primary-700 font-bold hover:bg-gray-100 shadow-lg px-8 py-3.5 rounded-full inline-block"
              >
                Schedule Investor Meeting
              </Link>
              <Link
                className="btn btn-outline text-white border-white hover:bg-white/10 px-8 py-3.5 rounded-full inline-block font-semibold"
                href="/case-studies"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

