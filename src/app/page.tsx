import React from 'react';
import {
  HeroSection,
  ProblemSection,
  VisionSection,
  CapabilitiesSection,
  FounderSection,
  CtaSection,
} from '@/sections';

export default function Home() {
  return (
    <div className="w-full pt-16 sm:pt-18 flex flex-col">
      {/* 1. Powerful Minimalist Hero + Distinctive System Architecture Visual */}
      <HeroSection />

      {/* 2. Systemic Problem: Disconnected Tools vs Intelligent Layer */}
      <ProblemSection />

      {/* 3. The Long-Term Vision Thesis */}
      <VisionSection />

      {/* 4. Future Product Direction: Autonomous Systems for Core Business Functions */}
      <CapabilitiesSection />

      {/* 5. Founder & Origin Dossier */}
      <FounderSection />

      {/* 6. Simple, Honest Final CTA */}
      <CtaSection />
    </div>
  );
}
