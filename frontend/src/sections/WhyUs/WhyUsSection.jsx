import React from 'react';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { WHY_US_PILLARS } from '../../constants/index.js';
import { Compass, Sparkles, Building2, BarChart3, Cpu, Target, ShieldCheck } from 'lucide-react';

export default function WhyUsSection() {
  const icons = [
    Compass,
    Sparkles,
    Building2,
    BarChart3,
    Cpu,
    Target,
    ShieldCheck
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#170A05] border-t border-[rgba(216,192,165,0.14)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="Why Branderss"
            title="We create stories,"
            highlight="not just campaigns."
            description="Most agencies churn out generic posts that blend into the feed. We build enduring brand assets anchored in commercial strategy and unforgettable craft."
          />
        </ScrollReveal>

        {/* 7 Pillars Grid - Standardized Card Flex with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {WHY_US_PILLARS.map((pillar, i) => {
            const Icon = icons[i] || Sparkles;
            return (
              <ScrollReveal
                key={pillar.title}
                as="div"
                delay={i * 60}
                className="card-flex card-hover-lift p-6 sm:p-8 rounded-3xl border border-[rgba(216,192,165,0.16)] bg-[#281108] hover:bg-[#35170B] hover:border-[rgba(216,192,165,0.3)] transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#35170B] border border-[#5A2C18] text-[#C89B5B] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-bold text-sm text-[#C89B5B]">
                    0{i + 1}
                  </span>
                </div>

                <div className="card-body">
                  <h3 className="font-display text-xl font-bold text-[#F3E6D2] group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#D8C0A5] leading-relaxed card-action">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}

          {/* 8th Card: Bold Brand Commitment */}
          <ScrollReveal
            as="div"
            delay={WHY_US_PILLARS.length * 60}
            className="whyus-commitment-card card-flex card-hover-lift p-6 sm:p-8 rounded-3xl border border-[rgba(216,192,165,0.25)] bg-gradient-to-br from-[#35170B] via-[#281108] to-[#170A05] justify-between"
          >
            <div>
              <Badge variant="cream" className="mb-4">Our Commitment</Badge>
              <h3 className="font-display text-2xl font-extrabold text-[#F3E6D2] leading-tight">
                Make it bold.<br />Make it Branderss.
              </h3>
              <p className="text-xs sm:text-sm text-[#D8C0A5] mt-3 leading-relaxed">
                No compromise on quality. Every client engagement is treated as our flagship showcase.
              </p>
            </div>
            <div className="mt-6 text-xs font-bold text-[#F3E6D2] flex items-center gap-2 card-action">
              <span className="w-2 h-2 rounded-full bg-[#C89B5B] animate-ping" />
              <span>Partner With Us Today</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
