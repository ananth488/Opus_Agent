import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProductsSection from "@/components/home/ProductsSection";
import Opus3PsSection from "@/components/home/Opus3PsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import TechStackSection from "@/components/home/TechStackSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GlobalPresenceSection from "@/components/home/GlobalPresenceSection";
import GrowthCollaborationSection from "@/components/home/GrowthCollaborationSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import ClientMarquee from "@/components/home/ClientMarquee";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <Opus3PsSection />
      <CaseStudiesSection />
      <AboutPreviewSection />
      <TechStackSection />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <GrowthCollaborationSection />
      <CallToActionSection />
      <ClientMarquee />
    </div>
  );
}
