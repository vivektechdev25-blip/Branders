import React from 'react';
import usePageSEO from '../../hooks/usePageSEO.js';
import HeroSection from '../../sections/Hero/HeroSection.jsx';
import ClientsBandSection from '../../sections/Clients/ClientsBandSection.jsx';
import AboutStorySection from '../../sections/About/AboutStorySection.jsx';
import HomeServicesOverview from '../../sections/Services/HomeServicesOverview.jsx';
import PortfolioSection from '../../sections/Portfolio/PortfolioSection.jsx';
import CTASection from '../../sections/CTA/CTASection.jsx';

export default function HomePage() {
  usePageSEO(
    'BRANDERSS — Make It Bold. Make It Branderss.',
    "We just don't do marketing. We create stories around your brand that command attention, build deep authority, and drive sustainable digital growth."
  );

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero with 3D/Interactive Brand Ecosystem & Stat Highlights */}
      <HeroSection />

      {/* 2. Verified Brand Highlights & Industry Band */}
      <ClientsBandSection />

      {/* 3. Short Brand Introduction & 5-Stage Story Philosophy Preview */}
      <AboutStorySection />

      {/* 4. High-Level Services Overview (9 Disciplines) */}
      <HomeServicesOverview />

      {/* 5. Selected Verticals Preview (Hotel, Cafe, Bar, Hospitality, and Many More) */}
      <PortfolioSection />

      {/* 6. Final Conversion CTA */}
      <CTASection />
    </div>
  );
}
