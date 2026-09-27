import React, { useState } from 'react';
import usePageSEO from '../../hooks/usePageSEO.js';
import Badge from '../../components/common/Badge.jsx';
import Button from '../../components/common/Button.jsx';
import AnimatedCounter from '../../components/common/AnimatedCounter.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { PORTFOLIO_PROJECTS, BRAND } from '../../constants/index.js';
import { ArrowUpRight, MapPin, CheckCircle2, Utensils, Sparkles, MessageSquare } from 'lucide-react';

export default function PortfolioPage() {
  usePageSEO(
    'BRANDERSS — Our Work & Brand Portfolio',
    'Explore authentic brand stories shaped by Branderss across hotels, cafés, bars, hospitality, and 100+ growing businesses across Lucknow and beyond.'
  );

  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'All Sectors', value: 'all' },
    { label: 'Hotels', value: 'hotel' },
    { label: 'Cafés', value: 'cafe' },
    { label: 'Bars & Lounges', value: 'bar' },
    { label: 'Hospitality', value: 'hospitality' },
    { label: 'And Many More', value: 'many-more' }
  ];

  const filtered = filter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categoryFilter === filter || p.id === filter);

  return (
    <div className="pt-28 pb-24 bg-[#170A05] text-[#F3E6D2] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#35170B]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="brand" className="mb-4">
            Sector Showcase &amp; Capabilities
          </Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#F3E6D2] tracking-tight leading-[1.08]">
            Sectors Shaped by <br />
            <span className="brand-heading-gradient">
              Branderss
            </span>
          </h1>
          <p className="mt-6 text-lg text-[#D8C0A5] leading-relaxed">
            From luxury boutique hotels and lively urban cafés to cocktail bars, fine dining hospitality, and multi-sector enterprises, explore how Branderss builds authentic brand identities that endure.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={100} className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setFilter(cat.value)}
              className={`text-xs sm:text-sm px-5 py-2.5 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
                filter === cat.value
                  ? 'bg-[#F3E6D2] text-[#170A05] shadow-lg scale-105 font-bold'
                  : 'bg-[#241108] text-[#D8C0A5] border border-[#5A2C18] hover:border-[#D8C0A5] hover:text-[#F3E6D2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Featured Projects Grid with Equal Height Card Alignment */}
        <div className="space-y-12 mb-24">
          {filtered.map((proj, idx) => (
            <ScrollReveal
              key={proj.id}
              as="div"
              delay={idx * 80}
              className="card-flex card-hover-lift rounded-3xl border border-[rgba(216,192,165,0.16)] overflow-hidden p-6 sm:p-8 lg:p-12 bg-[#281108] hover:bg-[#35170B] hover:border-[rgba(216,192,165,0.35)] transition-all duration-200 shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Visual / Project Image Column with Controlled Scale on Hover */}
                <div className="lg:col-span-5 card-image rounded-2xl bg-[#170A05] border border-[rgba(216,192,165,0.14)] aspect-video lg:aspect-square relative overflow-hidden group">
                  {proj.image ? (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-20 h-20 rounded-3xl bg-[#35170B] border border-[#5A2C18] flex items-center justify-center text-[#C89B5B] mb-4">
                        <Utensils className="w-10 h-10" />
                      </div>
                      <h3 className="font-display font-extrabold text-2xl text-[#F3E6D2]">
                        {proj.title}
                      </h3>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="brand" size="sm">{proj.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-[#F3E6D2]">
                    <span className="font-semibold text-[#C89B5B]">{proj.stats}</span>
                    <span className="flex items-center gap-1 bg-[#170A05]/80 px-2.5 py-1 rounded-full border border-[rgba(216,192,165,0.2)]">
                      <MapPin className="w-3 h-3 text-[#C89B5B]" />
                      <span>{proj.location}</span>
                    </span>
                  </div>
                </div>

                {/* Narrative Details Column */}
                <div className="lg:col-span-7 card-body justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="brand">{proj.category}</Badge>
                      <span className="text-xs text-[#C89B5B] font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Branderss Specialized Sector</span>
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3E6D2] mb-3">
                      {proj.title} — Strategic Growth Story
                    </h2>

                    <p className="text-sm sm:text-base text-[#D8C0A5] leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3E6D2] mb-3">
                        Branderss Scope of Work:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {proj.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2 text-xs sm:text-sm text-[#F3E6D2]">
                            <CheckCircle2 className="w-4 h-4 text-[#C89B5B] shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="card-action pt-6 border-t border-[rgba(216,192,165,0.14)] flex flex-wrap items-center gap-4">
                    <Button
                      to={`/contact?service=${encodeURIComponent(proj.title)}`}
                      size="md"
                      variant="primary"
                    >
                      Inquire for Your {proj.category} Brand
                    </Button>
                    <Button
                      href={BRAND.phones[0].wa}
                      size="md"
                      variant="secondary"
                      icon={MessageSquare}
                    >
                      Discuss on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 100+ Brands Credibility Box */}
        <ScrollReveal delay={150} className="card-flex card-hover-lift p-8 sm:p-12 rounded-3xl border border-[#5A2C18] text-center max-w-4xl mx-auto bg-[#241108]">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D8C0A5] mb-2 block">
            Extensive Local &amp; Regional Reach
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#F3E6D2]">
            <AnimatedCounter value="100+" /> Brands Across Lucknow &amp; Growing
          </h2>
          <p className="text-sm text-[#D8C0A5]/90 mt-3 max-w-2xl mx-auto leading-relaxed">
            Our portfolio extends across luxury hotels, grand banquet venues, medical clinics, boutique retail, and service corporations. We are expanding our digital archive with new case studies regularly.
          </p>

          <div className="card-action mt-8 flex justify-center gap-4 flex-wrap">
            <Button to="/contact" size="md" variant="primary">
              Discuss Your Brand Ambition
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
