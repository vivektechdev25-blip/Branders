import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { STORY_TIMELINE } from '../../constants/index.js';
import { Compass, Palette, Sparkles, Cpu, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutStorySection() {
  const [activeStep, setActiveStep] = useState(2); // Default to STORY

  const pillars = [
    { title: 'Strategy', icon: Compass, desc: 'Deep commercial positioning and unfair advantages.' },
    { title: 'Branding', icon: Palette, desc: 'Cohesive visual identity that commands immediate respect.' },
    { title: 'Creative', icon: Sparkles, desc: 'Arresting visuals, narratives, and cinematic copy.' },
    { title: 'Digital & Web', icon: Cpu, desc: 'High-speed web experiences and modern digital touchpoints.' },
    { title: 'Performance', icon: Target, desc: 'Precision campaigns that generate real revenue and walk-ins.' }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#170A05] border-t border-[#35170B] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#35170B]/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="The Branderss Philosophy"
            title="We just don't do marketing."
            highlight="We create stories around your brand."
            description="In an era of fleeting social noise and cookie-cutter templates, ordinary campaigns get forgotten. Branderss builds unforgettable brand stories backed by robust commercial strategy and modern digital execution."
          />
        </ScrollReveal>

        {/* 5 Core Pillars Grid - Standardized Equal Height Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                delay={idx * 70}
                className="card-flex card-hover-lift p-5 sm:p-6 rounded-2xl bg-[#281108] border border-[rgba(216,192,165,0.16)] hover:bg-[#35170B] hover:border-[rgba(216,192,165,0.3)] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#35170B] border border-[#5A2C18] flex items-center justify-center text-[#C89B5B] group-hover:scale-105 transition-transform mb-4 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-[#F3E6D2] text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="card-action text-xs sm:text-sm text-[#D8C0A5]/85 leading-relaxed">
                  {pillar.desc}
                </p>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Interactive Story Progression Timeline (IDEA -> IDENTITY -> STORY -> AUDIENCE -> GROWTH) */}
        <ScrollReveal delay={150} className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#281108] border border-[rgba(216,192,165,0.16)] relative overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[rgba(216,192,165,0.14)]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8C0A5]">
                The Story Engine
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F3E6D2] mt-1">
                How We Engineer Brand Dominance
              </h3>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F3E6D2] hover:text-[#D8C0A5] transition-colors"
            >
              <span>Explore our full method</span>
              <ArrowRight className="w-4 h-4 text-[#C89B5B]" />
            </Link>
          </div>

          {/* Stepper Tabs: Spacious Cards with Visible Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 mb-8">
            {STORY_TIMELINE.map((item, idx) => (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`card-flex p-3.5 sm:p-5 lg:p-6 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                  idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                } ${
                  activeStep === idx
                    ? 'bg-[#35170B] border-[#F3E6D2] text-[#F3E6D2] shadow-[0_4px_20px_rgba(243,230,210,0.15)] scale-[1.01]'
                    : 'bg-[#170A05] border-[rgba(216,192,165,0.14)] text-[#D8C0A5]/80 hover:text-[#F3E6D2] hover:bg-[#35170B]/50 hover:border-[rgba(216,192,165,0.25)]'
                }`}
              >
                <span className="text-xs font-bold text-[#C89B5B] tracking-wider">0{idx + 1}</span>
                <span className="font-display font-bold text-base sm:text-lg lg:text-xl text-[#F3E6D2] mt-1.5">
                  {item.step}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Display Card */}
          <div className="bg-[#170A05] p-6 sm:p-8 rounded-2xl border border-[rgba(216,192,165,0.14)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#35170B] text-[#C89B5B] border border-[#5A2C18] font-display font-bold text-xl flex items-center justify-center shrink-0">
                0{activeStep + 1}
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-display font-bold text-[#F3E6D2]">
                  Step 0{activeStep + 1}: {STORY_TIMELINE[activeStep].step}
                </h4>
                <p className="mt-2 text-[#D8C0A5] text-sm sm:text-base leading-relaxed max-w-2xl">
                  {STORY_TIMELINE[activeStep].text}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Badge variant="brand">Proven Framework</Badge>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
