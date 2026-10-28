import React from "react";

const locations = [
  { country: "USA", city: "New York", type: "Office" },
  { country: "Malaysia", city: "Kuala Lumpur", type: "Office" },
  { country: "Saudi Arabia", city: "Riyadh", type: "Partner" },
  { country: "Ghana", city: "Accra", type: "Partner" },
  { country: "Philippines", city: "Manila", type: "Partner" },
  { country: "Brunei", city: "Bandar Seri Begawan", type: "Partner" },
  { country: "Indonesia", city: "Jakarta", type: "Partner" },
  { country: "UK", city: "London", type: "Partner" },
];

export default function GlobalPresenceSection() {
  return (
    <section className="section bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Global Presence
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal">
            Local support in 10+ countries across 4 continents
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="card card-hover bg-white border border-gray-100 p-6 rounded-2xl shadow-xs flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-primary-100 text-primary-600">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-base text-gray-900">{loc.country}</h5>
                  <p className="text-xs text-gray-700 font-medium">{loc.city}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  loc.type === "Office"
                    ? "bg-primary-100 text-primary-700"
                    : "bg-secondary-100 text-secondary-700"
                }`}
              >
                {loc.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

