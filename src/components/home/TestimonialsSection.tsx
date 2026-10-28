import React from "react";

const testimonials = [
  {
    quote:
      "The eDCA system has transformed our air traffic management capabilities. We now have real-time visibility and significantly improved operational efficiency.",
    author: "Director General",
    organization: "Ministry of Defense, Malaysia",
  },
  {
    quote:
      "emsPlus has streamlined our operations across all departments. The system is intuitive and has significantly improved our administrative efficiency.",
    author: "Secretary General",
    organization: "Ministry of Religious Affairs, Brunei",
  },
  {
    quote:
      "The integrated system has given us unprecedented visibility into our assets and finances. The mobile apps have been particularly valuable for field operations.",
    author: "Chief Operations Officer",
    organization: "Southern Railway, India",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="card card-hover bg-white border border-gray-100 p-8 rounded-2xl shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 gap-1 mb-4 text-base">
                  {"★★★★★"}
                </div>
                <p className="text-gray-800 mb-6 italic text-sm leading-relaxed font-normal">
                  &quot;{test.quote}&quot;
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900 text-sm">{test.author}</p>
                <p className="text-xs text-gray-700 font-medium">{test.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

