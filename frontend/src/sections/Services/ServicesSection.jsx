import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import Button from '../../components/common/Button.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { SERVICES } from '../../constants/index.js';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#120803] border-t border-[#35170B] relative scroll-mt-24 sm:scroll-mt-28">
      {/* Background warm glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#5A2C18]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="Integrated Capabilities"
            title="Engineered for"
            highlight="Unfair Digital Advantage"
            description="Every capability we offer works cohesively to build your market authority, turn strangers into high-paying customers, and multiply revenue."
          />
        </ScrollReveal>

        {/* Master-Detail Interactive Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Numbered Service Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {SERVICES.map((service, idx) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <ScrollReveal
                  key={service.id}
                  as="div"
                  delay={idx * 50}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`card-flex p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#35170B] border-[#F3E6D2] border-l-4 border-l-[#C89B5B] shadow-[0_10px_30px_rgba(23,10,5,0.85)] translate-x-1 sm:translate-x-2'
                      : 'bg-[#241108] border-[rgba(243,230,210,0.12)] hover:border-[rgba(243,230,210,0.28)] hover:bg-[#2C1309] hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
                      {/* Fixed-width number for vertical alignment */}
                      <span
                        className={`font-display text-xl sm:text-2xl font-bold transition-colors w-8 sm:w-9 shrink-0 ${
                          isSelected ? 'text-[#F3E6D2]' : 'text-[#C89B5B]'
                        }`}
                      >
                        {service.number}
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3
                            className={`font-display text-lg sm:text-xl font-bold transition-colors ${
                              isSelected ? 'text-white' : 'text-[#F3E6D2]'
                            }`}
                          >
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#D8C0A5]/90 line-clamp-1 sm:line-clamp-2 mt-1 leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wider text-[#D8C0A5]/70">
                        {service.category}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#F3E6D2] text-[#170A05]'
                            : 'bg-[#170A05] text-[#D8C0A5] group-hover:bg-[#F3E6D2] group-hover:text-[#170A05]'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Service Preview Card */}
          <ScrollReveal delay={150} className="lg:col-span-5 sticky top-28">
            <div className="services-preview-card card-flex p-6 sm:p-8 rounded-3xl border border-[rgba(216,192,165,0.16)] relative overflow-hidden shadow-2xl bg-gradient-to-b from-[#281108] to-[#170A05]">
              {/* Top Accent Pill */}
              <div className="flex items-center justify-between gap-2 mb-6 pb-6 border-b border-[rgba(216,192,165,0.14)]">
                <Badge variant="brand">Service {selectedService.number}</Badge>
                <span className="text-xs font-semibold text-[#D8C0A5]">
                  {selectedService.category}
                </span>
              </div>

              {/* Title & Headline */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F3E6D2]">
                {selectedService.title}
              </h3>
              <p className="mt-3 text-sm text-[#D8C0A5]/90 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Deliverables / Features Checklist */}
              <div className="mt-6 pt-6 border-t border-[rgba(216,192,165,0.14)]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3E6D2] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C89B5B]" />
                  <span>Key Deliverables &amp; Scope:</span>
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {selectedService.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3E6D2]">
                      <CheckCircle2 className="w-4 h-4 text-[#C89B5B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategic Highlight Banner */}
              <div className="mt-6 p-3.5 rounded-xl bg-[#35170B] border border-[#5A2C18] text-xs text-[#F3E6D2] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5B]" />
                <span>{selectedService.highlight}</span>
              </div>

              {/* Aligned CTA at bottom */}
              <div className="mt-8 pt-6 border-t border-[rgba(216,192,165,0.14)] card-action">
                <Button to={`/contact?service=${encodeURIComponent(selectedService.title)}`} size="md" variant="primary" icon={ArrowUpRight} className="w-full">
                  Inquire for {selectedService.title}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Banner on Ad Services vs Performance Ads */}
        <ScrollReveal delay={200}>
          <div className="mt-16 p-6 rounded-2xl bg-[#241108] border border-[#5A2C18] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#35170B] border border-[#5A2C18] text-[#F3E6D2] flex items-center justify-center font-bold shrink-0">
                i
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#F3E6D2]">
                  Understanding Performance Ads vs. Ad Services
                </h4>
                <p className="text-xs text-[#D8C0A5]/90 mt-1 max-w-2xl">
                  <strong>Performance Ads (05)</strong> focus mathematically on direct conversions, lead funnels, and ROAS. <strong>Ad Services (08)</strong> manage cross-platform media planning, regional brand outreach, awareness flights, and multi-channel media buys.
                </p>
              </div>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold text-[#F3E6D2] hover:text-[#D8C0A5] hover:underline shrink-0"
            >
              Learn more in Services Guide →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
