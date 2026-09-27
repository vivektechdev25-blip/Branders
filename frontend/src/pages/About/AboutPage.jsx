import React from 'react';
import usePageSEO from '../../hooks/usePageSEO.js';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import Button from '../../components/common/Button.jsx';
import AnimatedCounter from '../../components/common/AnimatedCounter.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import IndustriesSection from '../../sections/Industries/IndustriesSection.jsx';
import WhyUsSection from '../../sections/WhyUs/WhyUsSection.jsx';
import { BRAND, STORY_TIMELINE } from '../../constants/index.js';
import { ArrowRight, Award, Target, Rocket, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

export default function AboutPage() {
  usePageSEO(
    'About BRANDERSS — Building Stories Around Brands',
    'Learn how Branderss creates enduring brand stories, bold digital identities, and compounding commercial growth across hospitality, healthcare, and high-growth businesses.'
  );

  return (
    <div className="pt-28 pb-0 bg-[#170A05] text-[#F3E6D2] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-[#35170B]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <Badge variant="brand" className="mb-4">
            About Branderss
          </Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#F3E6D2] tracking-tight leading-[1.08]">
            We Don't Just Do Marketing. <br />
            <span className="brand-heading-gradient">
              We Build Stories Around Brands.
            </span>
          </h1>
          <p className="mt-6 text-lg text-[#D8C0A5]/90 leading-relaxed">
            Branderss was born out of a clear realization: modern markets are flooded with cookie-cutter templates, hollow vanity metrics, and uninspired agency noise. We exist to build bold, memorable brands with real commercial gravity.
          </p>
        </ScrollReveal>

        {/* Narrative Split Showcase: Left Brand Story & Core Philosophy vs Right 2x2 Credibility Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          {/* Left: Core Philosophy & Brand Story (7 Cols) */}
          <ScrollReveal delay={100} className="lg:col-span-7 card-flex p-8 sm:p-12 rounded-3xl border border-[rgba(216,192,165,0.16)] bg-[#281108] h-full justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8C0A5]">
                Core Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F3E6D2] mt-2 mb-6">
                "Make it bold. Make it Branderss."
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#D8C0A5]/90 leading-relaxed">
                <p>
                  At Branderss, our fundamental belief is simple: <strong className="text-[#F3E6D2]">"We just don't do marketing. We create a story around your brand."</strong>
                </p>
                <p>
                  A great brand is never just a logo file, a color swatch, or an Instagram grid. It is an emotional contract between your business and your customer. It is what people say about your hotel, café, clinic, or enterprise when you are not in the room.
                </p>
                <p>
                  Rooted in Lucknow and partnering with ambitious businesses across India, we have helped over <strong>100+ brands</strong> transform from quiet operators into unforgettable market leaders.
                </p>
                <p>
                  Whether crafting boutique hotels, engineering authentic ambiance for luxury bars and lounges, or igniting youth culture for modern café brands, our work is defined by precision, courage, and commercial craft.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(216,192,165,0.14)] card-action flex items-center justify-between">
              <span className="text-xs font-semibold text-[#D8C0A5]">Originating in Lucknow, Scaled Nationally</span>
              <Badge variant="brand">
                <AnimatedCounter value="100+" /> Brands Scaled
              </Badge>
            </div>
          </ScrollReveal>

          {/* Right: 2 x 2 Balanced Equal-Height Highlights (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch h-full">
            <ScrollReveal delay={150} className="card-flex card-hover-lift p-6 rounded-2xl border border-[rgba(216,192,165,0.16)] bg-[#281108] hover:bg-[#35170B] justify-between">
              <div>
                <Award className="w-8 h-8 text-[#C89B5B] mb-3" />
                <h3 className="font-display font-bold text-lg text-[#F3E6D2]">
                  <AnimatedCounter value="100+" /> Brands
                </h3>
                <p className="text-xs sm:text-sm text-[#D8C0A5]/85 mt-2">
                  Proven client track record across diverse, competitive regional markets.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#C89B5B] uppercase tracking-wider card-action mt-4 block">Proven Reach</span>
            </ScrollReveal>

            <ScrollReveal delay={200} className="card-flex card-hover-lift p-6 rounded-2xl border border-[rgba(216,192,165,0.16)] bg-[#281108] hover:bg-[#35170B] justify-between">
              <div>
                <Target className="w-8 h-8 text-[#C89B5B] mb-3" />
                <h3 className="font-display font-bold text-lg text-[#F3E6D2]">Strategy First</h3>
                <p className="text-xs sm:text-sm text-[#D8C0A5]/85 mt-2">
                  Rigorous market logic preceding every visual identity and marketing campaign.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#C89B5B] uppercase tracking-wider card-action mt-4 block">Commercial ROI</span>
            </ScrollReveal>

            <ScrollReveal delay={250} className="card-flex card-hover-lift p-6 rounded-2xl border border-[rgba(216,192,165,0.16)] bg-[#281108] hover:bg-[#35170B] justify-between">
              <div>
                <Rocket className="w-8 h-8 text-[#C89B5B] mb-3" />
                <h3 className="font-display font-bold text-lg text-[#F3E6D2]">Full-Stack Tech</h3>
                <p className="text-xs sm:text-sm text-[#D8C0A5]/85 mt-2">
                  Modern React web applications, WhatsApp automation, and high-converting ad funnels.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#C89B5B] uppercase tracking-wider card-action mt-4 block">Modern MERN</span>
            </ScrollReveal>

            <ScrollReveal delay={300} className="card-flex card-hover-lift p-6 rounded-2xl border border-[rgba(216,192,165,0.16)] bg-[#281108] hover:bg-[#35170B] justify-between">
              <div>
                <ShieldCheck className="w-8 h-8 text-[#C89B5B] mb-3" />
                <h3 className="font-display font-bold text-lg text-[#F3E6D2]">Zero Fake Fluff</h3>
                <p className="text-xs sm:text-sm text-[#D8C0A5]/85 mt-2">
                  Authentic business outcomes, measurable customer inquiries, and tangible footfall.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#C89B5B] uppercase tracking-wider card-action mt-4 block">Authentic Work</span>
            </ScrollReveal>
          </div>
        </div>

        {/* Brand Methodology: The 5-Stage Evolution Framework */}
        <ScrollReveal delay={150} className="p-8 sm:p-12 rounded-3xl border border-[rgba(216,192,165,0.16)] bg-[#281108] mb-24 shadow-2xl">
          <SectionHeader
            badge="The Branderss Methodology"
            title="The 5-Stage Story Evolution"
            highlight="Framework"
            description="How we transform a business from an unformed idea into an unforgettable market leader."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8 items-stretch">
            {STORY_TIMELINE.map((item, idx) => (
              <div
                key={item.step}
                className={`card-flex p-5 sm:p-6 rounded-2xl bg-[#170A05] border border-[rgba(216,192,165,0.14)] justify-between ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-[#C89B5B] tracking-wider">0{idx + 1}</span>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#F3E6D2] mt-1 mb-2">
                    {item.step}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D8C0A5]/85 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* 6. Industries Section: Dedicated Sector Versatility */}
      <IndustriesSection />

      {/* 7. Why Branderss Section: 8 Agency Approach Pillars */}
      <WhyUsSection />

      {/* 8. Final CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <ScrollReveal className="text-center p-8 sm:p-14 rounded-3xl bg-[#281108] border border-[rgba(216,192,165,0.16)] flex flex-col items-center shadow-xl">
          <Badge variant="brand" className="mb-3">
            Start Your Journey
          </Badge>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#F3E6D2]">
            Ready to Build Your Brand Story?
          </h2>
          <p className="text-sm sm:text-base text-[#D8C0A5] mt-3 max-w-xl">
            Let's create something bold, strategic, and enduring together. Speak directly with our leadership team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button to="/contact" size="md" variant="primary" icon={ArrowRight}>
              Start a Conversation
            </Button>
            <Button href={BRAND.phones[0].wa} size="md" variant="secondary" icon={MessageSquare}>
              Chat on WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
