import React from 'react';
import Button from '../../components/common/Button.jsx';
import Badge from '../../components/common/Badge.jsx';
import BrandStoryEcosystem from '../../components/hero/BrandStoryEcosystem.jsx';
import AnimatedCounter from '../../components/common/AnimatedCounter.jsx';
import { ArrowRight, TrendingUp, ShieldCheck, Layers } from 'lucide-react';

export default function HeroSection() {
  const statCards = [
    {
      icon: TrendingUp,
      value: '100+',
      label: 'Growing Brands',
      sub: 'Lucknow & Beyond'
    },
    {
      icon: Layers,
      value: '10+ Sectors',
      label: 'Hospitality to B2B',
      sub: 'Diverse Verticals'
    },
    {
      icon: ShieldCheck,
      value: 'Strategy First',
      label: 'Commercial Impact',
      sub: 'Zero Template Fluff'
    }
  ];

  return (
    <section id="home" className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-[#170A05] scroll-mt-24 sm:scroll-mt-28">
      {/* Background subtle warm radial glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[#5A2C18]/25 blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] rounded-full bg-[#35170B]/40 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Brand Label */}
            <div className="hero-animate-badge mb-5">
              <Badge variant="brand">
                <span className="font-bold text-[#F3E6D2]">BRANDERSS</span> • 100+ Brands Scaled Across Lucknow &amp; Beyond
              </Badge>
            </div>

            {/* Controlled Hero Headline with Pristine Typography */}
            <h1 className="hero-animate-heading font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3E6D2] leading-[1.1] sm:leading-[1.12]">
              Make it bold. <br />
              <span className="hero-headline-gradient">
                Make it Branderss.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="hero-animate-desc mt-5 text-base sm:text-lg lg:text-xl text-[#D8C0A5]/90 max-w-2xl leading-relaxed">
              We just don't do marketing. We create stories around your brand that command attention, build deep authority, and drive sustainable digital growth.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-animate-cta mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button to="/contact" size="lg" variant="primary" icon={ArrowRight} className="w-full sm:w-auto">
                Start a Project
              </Button>
              <Button to="/our-work" size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore Our Work
              </Button>
            </div>

            {/* Standardized Aligned Trust Cards Grid with Subtle Hover */}
            <div className="hero-animate-stats mt-9 pt-7 border-t border-[rgba(243,230,210,0.12)] w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {statCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.value}
                    className="card-flex p-4 rounded-2xl bg-[#281108] border border-[rgba(243,230,210,0.12)] hover:bg-[#35170B] hover:border-[rgba(243,230,210,0.25)] hover:-translate-y-1 transition-all duration-200 shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#35170B] border border-[#5A2C18] flex items-center justify-center text-[#C89B5B] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <p className="font-display font-bold text-[#F3E6D2] text-lg leading-tight truncate">
                          <AnimatedCounter value={card.value} duration={1300} />
                        </p>
                        <p className="text-xs font-semibold text-[#D8C0A5] truncate mt-0.5">
                          {card.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Purpose-Built Brand Story Ecosystem Visual */}
          <div className="lg:col-span-5 relative w-full">
            <BrandStoryEcosystem />
          </div>
        </div>
      </div>
    </section>
  );
}
