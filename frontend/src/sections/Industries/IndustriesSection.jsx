import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import Button from '../../components/common/Button.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { INDUSTRIES } from '../../constants/index.js';
import { Building2, Utensils, Coffee, Hotel, HeartPulse, ShoppingBag, Briefcase, Store, Rocket, Sparkles, Check } from 'lucide-react';

export default function IndustriesSection() {
  const [activeIndustryId, setActiveIndustryId] = useState(INDUSTRIES[0].id);

  const icons = {
    'hospitality-hotels': Hotel,
    'banquets': Building2,
    'restaurants': Utensils,
    'cafes': Coffee,
    'healthcare': HeartPulse,
    'retail': ShoppingBag,
    'corporate': Briefcase,
    'local': Store,
    'services': Briefcase,
    'growing-brands': Rocket
  };

  const activeIndustry = INDUSTRIES.find((ind) => ind.id === activeIndustryId) || INDUSTRIES[0];
  const ActiveIcon = icons[activeIndustry.id] || Sparkles;

  return (
    <section id="industries" className="py-24 sm:py-32 bg-[#170A05] text-[#F3E6D2] border-t border-[rgba(216,192,165,0.14)] relative overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#35170B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="Diverse Industry Versatility"
            title="Tailored Storytelling Across"
            highlight="Every High-Growth Sector"
            description="From luxury resorts and banquet halls to healthcare bodies and emerging corporate enterprises, our brand frameworks scale seamlessly across sectors."
          />
        </ScrollReveal>

        {/* Industry Pill Selector with Consistent Heights */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
            {INDUSTRIES.map((ind) => {
              const Icon = icons[ind.id] || Sparkles;
              const isActive = ind.id === activeIndustryId;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F3E6D2] text-[#170A05] shadow-lg scale-105 font-bold'
                      : 'bg-[#281108] text-[#D8C0A5] border border-[rgba(216,192,165,0.16)] hover:bg-[#35170B] hover:text-[#F3E6D2]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#170A05]' : 'text-[#C89B5B]'}`} />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Industry Showcase Card - Standardized Card Flex */}
        <ScrollReveal delay={200} className="card-flex p-5 sm:p-8 lg:p-12 rounded-3xl border border-[rgba(216,192,165,0.16)] bg-[#281108] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 card-flex items-start text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#35170B] border border-[#5A2C18] text-[#C89B5B] flex items-center justify-center shrink-0">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="brand">{activeIndustry.tag}</Badge>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F3E6D2] mt-1">
                    {activeIndustry.name}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#D8C0A5]/90 leading-relaxed mt-2 max-w-2xl">
                {activeIndustry.description}
              </p>

              {/* Strategic Deliverables List */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {activeIndustry.points.map((pt) => (
                  <span
                    key={pt}
                    className="inline-flex items-center gap-2 bg-[#35170B] text-[#F3E6D2] px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium border border-[#5A2C18]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#C89B5B]" />
                    <span>{pt}</span>
                  </span>
                ))}
              </div>

              <div className="mt-8 card-action">
                <Button to={`/contact?industry=${encodeURIComponent(activeIndustry.name)}`} size="md" variant="primary">
                  Scale Your {activeIndustry.name} Brand
                </Button>
              </div>
            </div>

            {/* Right Visual Accent Graphic */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-full max-w-xs aspect-square rounded-3xl bg-[#170A05] border border-[rgba(216,192,165,0.16)] p-6 card-flex items-center justify-center text-center relative group card-hover-lift shadow-sm">
                <div className="w-20 h-20 rounded-2xl bg-[#281108] border border-[rgba(216,192,165,0.16)] flex items-center justify-center text-[#C89B5B] mb-4 group-hover:scale-105 transition-transform shrink-0">
                  <ActiveIcon className="w-10 h-10" />
                </div>
                <h4 className="font-display font-bold text-[#F3E6D2] text-lg">
                  {activeIndustry.tag} Dominance
                </h4>
                <p className="text-xs text-[#D8C0A5]/80 mt-2">
                  Proven creative positioning and high-conversion client acquisition.
                </p>
                <div className="mt-4 text-[11px] font-bold text-[#C89B5B] uppercase tracking-wider card-action">
                  Branderss Blueprint
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
