import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import Button from '../../components/common/Button.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import { SERVICES } from '../../constants/index.js';
import {
  Palette,
  Share2,
  Search,
  Code2,
  Target,
  Sparkles,
  Users,
  MessageSquare,
  Radio,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

export default function HomeServicesOverview() {
  const serviceIcons = {
    branding: Palette,
    'social-media': Share2,
    seo: Search,
    'web-development': Code2,
    'performance-ads': Target,
    'graphic-design': Sparkles,
    hrms: Users,
    hrmx: Users,
    'whatsapp-automation': MessageSquare,
    'ad-services': Radio
  };

  return (
    <section className="py-24 sm:py-32 bg-[#120803] border-t border-[#35170B] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#5A2C18]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#35170B]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeader
              badge="Integrated Capabilities"
              title="End-to-End Solutions for"
              highlight="Modern Brand Dominance"
              description="From distinctive visual identities to high-performance ad funnels, explore our 9 core growth disciplines engineered for commercial impact."
              align="left"
              className="mb-0"
            />

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F3E6D2] hover:text-[#D8C0A5] transition-colors shrink-0 group"
            >
              <span>Explore All 9 Services in Detail</span>
              <ArrowRight className="w-4 h-4 text-[#C89B5B] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 9 Services High-Level Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16">
          {SERVICES.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Sparkles;
            return (
              <ScrollReveal
                key={service.id}
                as="div"
                delay={idx * 50}
                className="card-flex card-hover-lift p-6 sm:p-7 rounded-3xl border border-[rgba(216,192,165,0.14)] bg-[#241108] hover:bg-[#35170B] hover:border-[rgba(216,192,165,0.3)] transition-all duration-200 group justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#35170B] border border-[#5A2C18] flex items-center justify-center text-[#C89B5B] group-hover:scale-105 group-hover:bg-[#F3E6D2] group-hover:text-[#170A05] transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-sm text-[#C89B5B] tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  <Badge variant="muted" size="sm" className="mb-3">
                    {service.category}
                  </Badge>

                  <h3 className="font-display text-xl font-bold text-[#F3E6D2] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D8C0A5]/85 leading-relaxed mt-2.5 mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="card-action pt-4 border-t border-[rgba(216,192,165,0.12)] flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-semibold text-[#D8C0A5] group-hover:text-[#F3E6D2] transition-colors flex items-center gap-1.5"
                  >
                    <span>View Deliverables</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C89B5B]" />
                  </Link>

                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-[11px] font-bold text-[#C89B5B] hover:text-[#F3E6D2] uppercase tracking-wider transition-colors"
                  >
                    Inquire
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner with Deep-Dive CTA */}
        <ScrollReveal delay={200}>
          <div className="services-package-banner p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#281108] via-[#35170B] to-[#281108] border border-[rgba(216,192,165,0.18)] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Badge variant="brand" className="mb-2">Cohesive Growth Ecosystem</Badge>
              <h4 className="font-display text-2xl font-bold text-[#F3E6D2]">
                Looking for a Tailored Multi-Discipline Package?
              </h4>
              <p className="text-xs sm:text-sm text-[#D8C0A5]/90 mt-1 max-w-xl">
                We combine branding, web development, SEO, and performance ads into unified monthly growth sprints tailored to your commercial stage.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button to="/services" size="md" variant="secondary">
                View Full Services Guide
              </Button>
              <Button to="/contact" size="md" variant="primary" icon={ArrowRight}>
                Discuss Your Package
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
