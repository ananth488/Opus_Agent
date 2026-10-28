import React from "react";
import Image from "next/image";

export default function ClientMarquee() {
  const clientLogos = Array.from({ length: 64 }, (_, i) => `/images/our-clients/logo${i + 1}.jpg`);

  return (
    <section
      style={{
        backgroundColor: "#0b192c",
        backgroundImage: "linear-gradient(135deg, #07111e 0%, #0c2340 50%, #05162a 100%)",
        color: "#ffffff",
      }}
      className="section bg-dark-section text-white py-16 overflow-hidden"
    >
      <div className="container-custom mb-12 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Clients</h2>
        <p className="text-lg md:text-xl text-blue-200 font-medium">
          Trusted by Global Industry Leaders across 100+ implementations
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0b192c] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0b192c] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll flex gap-8 items-center">
          {clientLogos.concat(clientLogos).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-28 w-52 bg-white/10 border border-white/20 rounded-2xl p-4 shrink-0 hover:bg-white/20 transition-all shadow-md"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={150}
                height={80}
                className="max-h-20 w-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
