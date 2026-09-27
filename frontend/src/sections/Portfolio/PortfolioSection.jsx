import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import Badge from '../../components/common/Badge.jsx';
import Button from '../../components/common/Button.jsx';
import ScrollReveal from '../../components/common/ScrollReveal.jsx';
import AnimatedCounter from '../../components/common/AnimatedCounter.jsx';
import { PORTFOLIO_PROJECTS } from '../../constants/index.js';
import { ArrowUpRight, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'All Sectors', value: 'all' },
    { label: 'Hotels', value: 'hotel' },
    { label: 'Cafés', value: 'cafe' },
    { label: 'Bars & Lounges', value: 'bar' },
    { label: 'Hospitality', value: 'hospitality' },
    { label: 'And Many More', value: 'many-more' }
  ];

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categoryFilter === filter || p.id === filter);

  return (
    <section id="our-work" className="py-24 sm:py-32 bg-[#170A05] border-t border-[#35170B] relative scroll-mt-24 sm:scroll-mt-28">
      {/* Anchor alias support for #portfolio */}
      <span id="portfolio" className="absolute -top-28 block pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader
              badge="Selected Verticals & Sectors"
              title="Sectors Shaped by"
              highlight="Branderss"
              description="From hotels and specialty cafés to vibrant bars, fine hospitality, and beyond — explore how Branderss scales distinctive brand experiences."
              align="left"
              className="mb-0"
            />

            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F3E6D2] hover:text-[#D8C0A5] transition-colors shrink-0"
            >
              <span>View Full Sector Archive</span>
              <ArrowUpRight className="w-4 h-4 text-[#D8C0A5]" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={100} className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setFilter(cat.value)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                filter === cat.value
                  ? 'bg-[#F3E6D2] text-[#170A05] font-bold shadow-md'
                  : 'bg-[#241108] text-[#D8C0A5] border border-[#5A2C18] hover:border-[#D8C0A5] hover:text-[#F3E6D2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Standardized Equal Height Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Verified Case Studies with Strict Alignment & Real Imagery */}
          {filteredProjects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              as="div"
              delay={idx * 70}
              className="card-flex card-hover-lift rounded-3xl border border-[rgba(216,192,165,0.16)] overflow-hidden group bg-[#281108] hover:bg-[#35170B] hover:border-[rgba(216,192,165,0.35)] shadow-xl"
            >
              {/* Card Image Banner with Subtle Zoom Hover */}
              <div className="card-image aspect-[16/10] w-full relative overflow-hidden bg-[#170A05]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1C0E07]">
                    <Sparkles className="w-10 h-10 text-[#C89B5B]" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#281108] via-transparent to-black/40 pointer-events-none" />
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="brand" size="sm">{project.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 z-10 bg-[#170A05]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-[rgba(216,192,165,0.2)] text-[11px] font-semibold text-[#F3E6D2] flex items-center gap-1 shadow-sm">
                  <MapPin className="w-3 h-3 text-[#C89B5B]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Body & Deliverables with Flex Layout */}
              <div className="card-body p-6 sm:p-7">
                <h3 className="font-display text-2xl font-bold text-[#F3E6D2] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#C89B5B] font-semibold mt-1 mb-4">
                  {project.stats}
                </p>

                <p className="text-xs sm:text-sm text-[#D8C0A5] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F3E6D2] block">
                    Branderss Scope of Work:
                  </span>
                  {project.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#D8C0A5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C89B5B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Footer: Aligned Across All Cards */}
                <div className="card-action pt-4 border-t border-[rgba(216,192,165,0.14)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#D8C0A5]">Branderss Showcase</span>
                  <div className="w-8 h-8 rounded-full bg-[#35170B] border border-[#5A2C18] flex items-center justify-center text-[#F3E6D2] group-hover:bg-[#F3E6D2] group-hover:text-[#170A05] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Transparent Upcoming Showcase Placeholder Card (Equal Dimensions) */}
          <ScrollReveal
            as="div"
            delay={filteredProjects.length * 70}
            className="card-flex card-hover-lift rounded-3xl border border-dashed border-[rgba(216,192,165,0.25)] p-7 bg-[#281108]/60 text-center"
          >
            <div className="w-full flex justify-between items-center mb-6">
              <Badge variant="muted" size="sm">Case Study Archive</Badge>
              <span className="text-[11px] text-[#C89B5B] font-semibold">
                <AnimatedCounter value="100+" /> Brands
              </span>
            </div>

            <div className="card-body justify-center items-center py-6">
              <div className="w-14 h-14 rounded-2xl bg-[#35170B] border border-[#5A2C18] flex items-center justify-center text-[#C89B5B] mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-[#C89B5B]" />
              </div>
              <h4 className="font-display font-bold text-[#F3E6D2] text-xl">
                Your Brand Here Next
              </h4>
              <p className="text-xs sm:text-sm text-[#D8C0A5] mt-2 max-w-xs leading-relaxed mx-auto">
                We're actively onboarding forward-thinking brands across hospitality, healthcare, retail, and corporate sectors.
              </p>
            </div>

            <div className="card-action w-full pt-4">
              <Button to="/contact" size="sm" variant="secondary" className="w-full">
                Begin Your Story
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
