import React from 'react';
import Button from '../../components/common/Button.jsx';
import Badge from '../../components/common/Badge.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import AnimatedCounter from '../../components/common/AnimatedCounter.jsx';
import { BRAND } from '../../constants/index.js';
import { ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="cta-section-wrapper py-24 sm:py-32 bg-[#170A05] text-[#F3E6D2] border-t border-[rgba(216,192,165,0.14)] relative overflow-hidden">
      {/* Background subtle warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#35170B]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal className="cta-card-wrapper card-flex p-6 sm:p-12 lg:p-16 rounded-3xl sm:rounded-[2.5rem] border border-[rgba(216,192,165,0.18)] shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#281108] to-[#170A05]">
          <div className="flex justify-center mb-6">
            <Badge variant="brand">
              Transform Your Brand Presence
            </Badge>
          </div>

          <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold text-[#F3E6D2] tracking-tight leading-[1.1] uppercase">
            READY TO BUILD SOMETHING <br className="hidden sm:inline" />
            <span className="brand-heading-gradient">
              PEOPLE REMEMBER?
            </span>
          </h2>

          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-base sm:text-2xl font-bold text-[#F3E6D2] italic">
              "Let's turn your brand into a story worth talking about."
            </p>
            <p className="mt-2 text-xs sm:text-base text-[#D8C0A5] leading-relaxed">
              Partner with Branderss for high-impact branding, high-conversion web platforms, and predictable digital revenue growth.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Button to="/contact" size="lg" variant="primary" icon={ArrowRight} className="w-full sm:w-auto">
              Start a Conversation
            </Button>
            <Button href={BRAND.phones[0].wa} size="lg" variant="secondary" icon={MessageSquare} className="w-full sm:w-auto">
              Chat on WhatsApp
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-[rgba(216,192,165,0.16)] flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#D8C0A5]">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C89B5B]" />
              <span>Direct: {BRAND.phones[0].display}</span>
            </span>
            <span className="text-[#C89B5B]">•</span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B5B]" />
              <span>
                <AnimatedCounter value="100+" /> Brands Scaled Across Lucknow &amp; Beyond
              </span>
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
