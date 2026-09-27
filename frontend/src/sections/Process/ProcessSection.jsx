import React from 'react';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { PROCESS_STEPS } from '../../constants/index.js';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#170A05] border-t border-[rgba(216,192,165,0.14)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="The Branderss Roadmap"
            title="From Concept to"
            highlight="Market Leadership"
            description="Our 6-step strategic methodology ensures flawless brand execution, predictable customer acquisition, and compounding brand equity."
          />
        </ScrollReveal>

        {/* 6-Step Journey Grid - Standardized Card Flex with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal
              key={step.number}
              as="div"
              delay={idx * 70}
              className="card-flex card-hover-lift p-7 sm:p-8 rounded-3xl border border-[rgba(216,192,165,0.16)] bg-[#281108] hover:bg-[#35170B] hover:border-[rgba(216,192,165,0.3)] transition-all duration-200 group"
            >
              {/* Step indicator bar */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[rgba(216,192,165,0.14)]">
                <span className="font-display text-3xl font-extrabold text-[#C89B5B]">
                  {step.number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D8C0A5]">
                  Phase {idx + 1}
                </span>
              </div>

              <div className="card-body">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3E6D2] group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#D8C0A5] mt-1 mb-4">
                  {step.tagline}
                </p>

                <p className="card-action text-xs sm:text-sm text-[#D8C0A5] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
