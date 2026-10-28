import React from "react";

const stats = [
  {
    count: "50+",
    label: "Trained Experts",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    count: "20+",
    label: "SaaS Products",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    count: "100+",
    label: "Completed Projects",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    count: "10+",
    label: "Global Presence",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    count: "20+",
    label: "Years Experience",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
  },
  {
    count: "24+",
    label: "Mobile Apps",
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="section bg-white border-b border-gray-100 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="card card-hover text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary-100 text-primary-600">
                  {item.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {item.count}
              </div>
              <p className="text-gray-800 text-sm font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

