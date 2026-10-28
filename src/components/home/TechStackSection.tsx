import React from "react";
import Image from "next/image";

const techStack = [
  { name: "Microsoft Stack", category: "Backend", icon: "/images/t-icon-01.webp" },
  { name: "MVC Architecture", category: "Architecture", icon: "/images/t-icon-02.webp" },
  { name: "Next.JS", category: "Frontend", icon: "/images/t-icon-03.webp" },
  { name: "React", category: "Frontend", icon: "/images/t-icon-04.webp" },
  { name: "Angular", category: "Frontend", icon: "/images/t-icon-05.webp" },
  { name: "Python", category: "Backend", icon: "/images/t-icon-06.webp" },
  { name: "Node.JS", category: "Backend", icon: "/images/t-icon-07.webp" },
  { name: "PostgreSQL", category: "Database", icon: "/images/t-icon-08.webp" },
  { name: "MongoDB", category: "Database", icon: "/images/t-icon-09.webp" },
  { name: "Oracle", category: "Database", icon: "/images/t-icon-10.webp" },
  { name: "PowerBI", category: "Analytics", icon: "/images/t-icon-11.webp" },
  { name: "AWS", category: "Cloud", icon: "/images/t-icon-12.webp" },
  { name: "Azure", category: "Cloud", icon: "/images/t-icon-13.webp" },
  { name: "GCP", category: "Cloud", icon: "/images/t-icon-14.webp" },
  { name: "Docker", category: "DevOps", icon: "/images/t-icon-15.webp" },
  { name: "Kubernetes", category: "DevOps", icon: "/images/t-icon-16.webp" },
];

export default function TechStackSection() {
  return (
    <section className="section bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal">
            Built with industry-leading technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="card text-center p-4 rounded-xl border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all bg-white"
            >
              <div className="flex justify-center items-center mb-3 h-14">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="text-xs font-bold text-gray-900 mb-0.5">{tech.name}</div>
              <div className="text-[11px] text-gray-700 font-medium">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

