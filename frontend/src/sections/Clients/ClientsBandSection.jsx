import React from 'react';
import AnimatedCounter from '../../components/common/AnimatedCounter.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';

export default function ClientsBandSection() {
  const verifiedClients = [
    'Hotels & Luxury Resorts',
    'Gourmet Cafés & Bistros',
    'Cocktail Bars & Social Lounges',
    'Fine Dining & Hospitality Venues',
    'Bespoke Banquet Halls',
    'Specialty Healthcare Clinics',
    'Modern Retail Showrooms',
    'Corporate Advisory Enterprises'
  ];

  const stats = [
    {
      value: '100+',
      title: 'Client Brands Partnered',
      desc: 'Across Lucknow and growing regionally'
    },
    {
      value: '10+',
      title: 'Industry Verticals',
      desc: 'Hospitality, Banquets, Healthcare, Retail & Corporate'
    },
    {
      value: '100%',
      title: 'Custom Brand Storytelling',
      desc: 'Zero generic templates, tailored execution'
    }
  ];

  return (
    <section className="clients-band-section py-20 bg-[#170A05] border-y border-[rgba(216,192,165,0.14)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D8C0A5] mb-3 inline-block">
            Proven Market Track Record
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F3E6D2] tracking-tight">
            100+ Brands. <span className="brand-heading-gradient">One Bold Approach.</span>
          </h2>
          <p className="mt-4 text-base text-[#D8C0A5]/90 leading-relaxed">
            From Lucknow and beyond, Branderss has worked with 100+ clients across multiple business segments, building distinctive identities that people remember.
          </p>
        </ScrollReveal>

        {/* 3 Uniform Equal-Height Stat Cards with Flex Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((s, idx) => (
            <ScrollReveal
              key={s.title}
              delay={idx * 80}
              className="card-flex card-hover-lift p-6 sm:p-7 rounded-2xl text-center bg-[#281108] border border-[rgba(216,192,165,0.16)] hover:bg-[#35170B] hover:border-[rgba(216,192,165,0.3)] transition-all justify-center"
            >
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#C89B5B] leading-none">
                <AnimatedCounter value={s.value} duration={1400} />
              </p>
              <p className="text-base font-bold text-[#F3E6D2] mt-3">{s.title}</p>
              <p className="text-xs text-[#D8C0A5]/80 mt-1">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Marquee / Trust Badge Ticker */}
        <ScrollReveal delay={200} className="relative overflow-hidden py-4 border-t border-b border-[rgba(216,192,165,0.14)]">
          <div className="flex gap-6 w-max animate-float items-center">
            {verifiedClients.concat(verifiedClients).map((client, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-full bg-[#281108] border border-[rgba(216,192,165,0.16)] text-xs sm:text-sm font-semibold text-[#D8C0A5] hover:text-[#F3E6D2] hover:bg-[#35170B] hover:border-[rgba(216,192,165,0.3)] transition-colors flex items-center gap-2.5 whitespace-nowrap shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5B]" />
                <span>{client}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
