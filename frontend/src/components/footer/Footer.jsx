import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo.jsx';
import AnimatedCounter from '../common/AnimatedCounter.jsx';
import { BRAND, SERVICES } from '../../constants/index.js';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#170A05] border-t border-[rgba(216,192,165,0.16)] pt-16 sm:pt-20 pb-12 text-[#D8C0A5] relative overflow-hidden">
      {/* Background subtle warm glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5A2C18]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[rgba(216,192,165,0.14)]">
          {/* Brand Info Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <BrandLogo size="large" />
            <p className="text-sm font-semibold text-[#F3E6D2] italic mt-1">
              "{BRAND.tagline}"
            </p>
            <p className="text-sm text-[#D8C0A5]/90 max-w-sm leading-relaxed">
              {BRAND.message} We combine commercial strategy, distinctive branding, high-conversion web development, and performance advertising to make your brand impossible to ignore.
            </p>

            <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#F3E6D2] bg-[#281108] w-fit px-3.5 py-1.5 rounded-full border border-[rgba(216,192,165,0.16)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5B]" />
              <span>
                <AnimatedCounter value={BRAND.stats.clients} /> Brands Partnered Across {BRAND.stats.locationFocus}
              </span>
            </div>
          </div>

          {/* Core Services Column (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-[#F3E6D2] font-display font-bold text-sm uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-[#F3E6D2] transition-colors flex items-center gap-1 group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C89B5B]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-[#D8C0A5] font-semibold text-xs mt-1 inline-flex items-center gap-1 hover:underline hover:text-[#F3E6D2]">
                  View All 9 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-[#F3E6D2] font-display font-bold text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#F3E6D2] transition-colors">
                  About Branderss
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#F3E6D2] transition-colors">
                  Our Work &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F3E6D2] transition-colors">
                  All Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F3E6D2] transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link to="/services#process" className="hover:text-[#F3E6D2] transition-colors">
                  Our 6-Step Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details Column (Spacious 4 cols - No email line breaks) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-[#F3E6D2] font-display font-bold text-sm uppercase tracking-wider">
              Direct Contact &amp; Inquiries
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              {/* Phone Numbers */}
              {BRAND.phones.map((phone) => (
                <li key={phone.raw}>
                  <a
                    href={`tel:${phone.raw}`}
                    className="flex items-center gap-2.5 hover:text-[#F3E6D2] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C89B5B] shrink-0" />
                    <span className="font-medium">{phone.display}</span>
                  </a>
                </li>
              ))}

              {/* WhatsApp direct links */}
              <li>
                <a
                  href={BRAND.phones[0].wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#D8C0A5] hover:text-[#F3E6D2] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 text-[#C89B5B]" />
                  <span>Chat on WhatsApp (Direct)</span>
                </a>
              </li>

              {/* Email Address - Clean wrapping prevented by ample width */}
              <li className="pt-0.5">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2.5 text-[#D8C0A5] hover:text-[#F3E6D2] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C89B5B] shrink-0" />
                  <span className="font-medium tracking-tight select-all">{BRAND.email}</span>
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-2.5 pt-1 text-xs text-[#D8C0A5]">
                <MapPin className="w-4 h-4 text-[#C89B5B] shrink-0 mt-0.5" />
                <span>{BRAND.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C0A5]">
          <p>© {currentYear} Branderss. All rights reserved. Make it bold, make it Branderss.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#F3E6D2] transition-colors">
              Privacy &amp; Terms
            </Link>
            <span className="text-[#C89B5B]">•</span>
            <a href={`tel:${BRAND.phones[0].raw}`} className="text-[#F3E6D2] hover:underline font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5B]" />
              Call Now: {BRAND.phones[0].display}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
