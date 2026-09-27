import React from 'react';
import usePageSEO from '../../hooks/usePageSEO.js';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import Button from '../../components/common/Button.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import ProcessSection from '../../sections/Process/ProcessSection.jsx';
import { SERVICES, BRAND } from '../../constants/index.js';
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
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  HelpCircle
} from 'lucide-react';

export default function ServicesPage() {
  usePageSEO(
    'BRANDERSS Services — Branding, SEO, SMM, Web & More',
    'Explore the 9 integrated capabilities of Branderss: Brand Strategy, Social Media Marketing, Technical SEO, High-Speed Web Development, Performance Ads, Graphic Design, HRMS, and WhatsApp Automation.'
  );

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
    <div className="pt-28 pb-0 bg-[#170A05] text-[#F3E6D2] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#35170B]/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Badge variant="brand" className="mb-4">
            Services &amp; Capabilities
          </Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#F3E6D2] tracking-tight leading-[1.08]">
            Integrated Solutions. <br />
            <span className="brand-heading-gradient">
              Uncompromising Execution.
            </span>
          </h1>
          <p className="mt-6 text-lg text-[#D8C0A5]/90 leading-relaxed">
            Every capability at Branderss is built to connect seamlessly with the next. We eliminate disconnected agency silos to engineer one cohesive commercial growth engine for your brand.
          </p>
        </ScrollReveal>

        {/* Quick Discipline Jump Anchor Navigation */}
        <ScrollReveal delay={100} className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#241108] text-[#D8C0A5] border border-[#5A2C18] hover:border-[#D8C0A5] hover:text-[#F3E6D2] hover:bg-[#35170B] transition-all cursor-pointer"
            >
              {s.number} • {s.title}
            </a>
          ))}
        </ScrollReveal>

        {/* Services Deep Dive List - Aligned Card Flex with Subdued Hover Lift */}
        <div className="space-y-12 mb-24">
          {SERVICES.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Sparkles;

            return (
              <ScrollReveal
                key={service.id}
                as="div"
                delay={idx * 40}
                className="scroll-mt-28"
              >
                <div
                  id={service.id}
                  className="card-flex card-hover-lift p-6 sm:p-8 lg:p-12 rounded-3xl border border-[rgba(216,192,165,0.16)] relative overflow-hidden bg-[#281108] hover:bg-[#35170B] hover:border-[rgba(216,192,165,0.3)] shadow-xl transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left 4 Cols: Icon, Number, Title, Strategic Benefit */}
                    <div className="lg:col-span-4 card-flex items-start">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#35170B] border border-[#5A2C18] flex items-center justify-center text-[#C89B5B] shadow-inner shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#C89B5B]">
                            {service.number}
                          </span>
                          <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#D8C0A5]/80">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3E6D2]">
                        {service.title}
                      </h2>

                      {/* Client Benefit / Highlight */}
                      <div className="mt-4 p-3.5 rounded-xl bg-[#170A05] border border-[rgba(216,192,165,0.14)] w-full">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#C89B5B] flex items-center gap-1.5 mb-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>Client Value Advantage</span>
                        </p>
                        <p className="text-xs text-[#D8C0A5]/90 font-medium">
                          {service.highlight}
                        </p>
                      </div>
                    </div>

                    {/* Right 8 Cols: Full description, Features checklist, CTA */}
                    <div className="lg:col-span-8 card-body justify-between">
                      <p className="text-sm sm:text-base text-[#D8C0A5]/90 leading-relaxed mb-6">
                        {service.fullDesc}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#F3E6D2] mb-3">
                          What Branderss Delivers &amp; Strategic Scope:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feat) => (
                            <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3E6D2]">
                              <CheckCircle2 className="w-4 h-4 text-[#C89B5B] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="card-action flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-6 border-t border-[rgba(216,192,165,0.14)]">
                        <Button
                          to={`/contact?service=${encodeURIComponent(service.title)}`}
                          size="md"
                          variant="primary"
                          icon={ArrowRight}
                          className="w-full sm:w-auto"
                        >
                          Inquire for {service.title}
                        </Button>
                        <Button
                          href={BRAND.phones[0].wa}
                          size="md"
                          variant="secondary"
                          icon={MessageSquare}
                          className="w-full sm:w-auto"
                        >
                          Discuss on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Distinction Banner: Performance Ads vs Ad Services */}
        <ScrollReveal className="card-flex p-8 sm:p-10 rounded-3xl border border-[rgba(216,192,165,0.16)] bg-[#281108] mb-20 shadow-xl">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#35170B] border border-[#5A2C18] text-[#C89B5B] flex items-center justify-center font-display font-bold text-xl shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="card-body">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3E6D2]">
                How Branderss Differentiates Performance Ads vs. Ad Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-xs sm:text-sm text-[#D8C0A5]/90 leading-relaxed items-stretch">
                <div className="card-flex p-5 rounded-xl bg-[#170A05] border border-[rgba(216,192,165,0.14)]">
                  <h4 className="font-bold text-[#F3E6D2] text-base mb-1">
                    05 • Advertising / Performance Ads
                  </h4>
                  <p className="mt-1">
                    Precision, data-backed conversion funnels. Focuses strictly on direct mathematical ROI, Meta/Google lead generation campaigns, cost-per-lead (CPL) reduction, and measurable revenue attribution.
                  </p>
                </div>
                <div className="card-flex p-5 rounded-xl bg-[#170A05] border border-[rgba(216,192,165,0.14)]">
                  <h4 className="font-bold text-[#F3E6D2] text-base mb-1">
                    09 • Ad Services &amp; Media Planning
                  </h4>
                  <p className="mt-1">
                    Omnichannel media buying and brand-scale placement. Focuses on cross-platform campaign scheduling, brand equity flighting, regional outdoor/digital synchronizations, and competitive share-of-voice dominance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 6-Step Implementation Roadmap Section */}
      <ProcessSection />

      {/* Bottom Strategy Package Consultation CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <ScrollReveal className="text-center p-8 sm:p-12 rounded-3xl bg-[#281108] border border-[rgba(216,192,165,0.16)] flex flex-col items-center shadow-xl">
          <Badge variant="brand" className="mb-3">
            Custom Retainers
          </Badge>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3E6D2]">
            Need a Tailored Multi-Service Growth Package?
          </h2>
          <p className="text-sm text-[#D8C0A5] mt-2 max-w-xl">
            We assemble customized cross-functional packages aligned with your specific growth stage, customer acquisition goals, and marketing budget.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button to="/contact" size="md" variant="primary" icon={ArrowRight}>
              Book a Strategy Consultation
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
