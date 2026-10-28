import React from "react";

export default function Opus3PsSection() {
  const pData = [
    {
      emoji: "📦",
      title: "Products",
      subtitle: "20+ SaaS products powering enterprise operations",
      color: "border-blue-400 text-blue-300",
      pill: "20+ Solutions",
      items: [
        "Manufacturing ERP with predictive maintenance",
        "Supply Chain platform with route optimization",
        "Health ERP for patient intelligence",
        "Education ERP for student success prediction",
        "CRM with AI-powered customer insights",
        "eCommerce platform with demand forecasting",
      ],
    },
    {
      emoji: "🚀",
      title: "Projects",
      subtitle: "100+ successful implementations across 12 industries",
      color: "border-purple-400 text-purple-300",
      pill: "100+ Implementations",
      items: [
        "Railway asset management systems",
        "Government digital transformation",
        "Healthcare coordination platforms",
        "Educational institution management",
        "Logistics optimization networks",
        "Manufacturing facility automation",
      ],
    },
    {
      emoji: "🌐",
      title: "Platforms",
      subtitle: "Integrated AI-first platforms delivering enterprise value",
      color: "border-orange-400 text-orange-300",
      pill: "Enterprise Grade",
      items: [
        "ML & NLP-powered analytics engine",
        "Real-time data processing infrastructure",
        "Cloud-native scalable architecture",
        "Multi-tenant SaaS platform",
        "API-first integration ecosystem",
        "Enterprise security & compliance",
      ],
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#0b192c",
        backgroundImage: "linear-gradient(135deg, #07111e 0%, #0c2340 50%, #05162a 100%)",
        color: "#ffffff",
      }}
      className="section bg-dark-section text-white py-20"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            The OPUS 3Ps
          </h2>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto font-medium">
            Comprehensive enterprise solutions spanning products, projects, and platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pData.map((p, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#0f233a",
                borderColor: "rgba(255, 255, 255, 0.18)",
              }}
              className="relative group overflow-hidden rounded-2xl border p-8 hover:border-blue-400 transition-all duration-300 flex flex-col shadow-xl"
            >
              <div className="mb-6">
                <div className="text-5xl mb-4">{p.emoji}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{p.title}</h3>
                <p className={`text-sm font-semibold ${p.color}`}>{p.subtitle}</p>
              </div>

              <div className="space-y-3 flex-grow">
                {p.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-white text-sm leading-relaxed font-normal">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/20">
                <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                  {p.pill}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-8 border-t border-white/20">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-1">20+</div>
            <div className="text-sm text-gray-200 font-medium">SaaS Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-1">100+</div>
            <div className="text-sm text-gray-200 font-medium">Implementations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400 mb-1">12</div>
            <div className="text-sm text-gray-200 font-medium">Industries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-1">50+</div>
            <div className="text-sm text-gray-200 font-medium">Expert Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
