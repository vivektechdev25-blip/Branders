import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo.jsx';
import ThemeToggle from '../common/ThemeToggle.jsx';
import Button from '../common/Button.jsx';
import { BRAND, NAV_LINKS } from '../../constants/index.js';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isLinkActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (href === '/our-work') {
      return location.pathname === '/our-work' || location.pathname === '/portfolio';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#211008]/95 backdrop-blur-xl border-b border-[rgba(243,230,210,0.12)] shadow-[0_12px_36px_rgba(23,10,5,0.85)] py-3'
            : 'bg-[#211008]/90 backdrop-blur-md border-b border-[rgba(243,230,210,0.10)] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: Preserves exact proportions and sharpness with high visibility */}
            <BrandLogo
              size="default"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Desktop Navigation Links (Large Desktop & Laptop) - Framed Container */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#170A05] px-3.5 xl:px-4 py-1.5 rounded-full border border-[rgba(243,230,210,0.12)] shadow-inner">
              {NAV_LINKS.map((link) => {
                const isActive = isLinkActive(link.href);

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3.5 xl:px-4 py-1.5 rounded-full text-[13px] xl:text-[14px] font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#F3E6D2] bg-[#35170B] font-semibold shadow-sm border border-[rgba(243,230,210,0.22)]'
                        : 'text-[#D8C0A5] hover:text-[#F3E6D2] hover:bg-[#35170B]/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop & Tablet Right Contact & Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <ThemeToggle size="default" />

              {/* Quick phone link */}
              <a
                href={`tel:${BRAND.phones[0].raw}`}
                className="flex items-center gap-2 text-xs font-semibold text-[#D8C0A5] hover:text-[#F3E6D2] transition-colors px-3.5 py-1.5 rounded-full bg-[#170A05] border border-[rgba(243,230,210,0.12)] hover:border-[rgba(243,230,210,0.25)] shadow-sm"
                title="Call Branderss"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89B5B]" />
                <span>{BRAND.phones[0].display}</span>
              </a>
            </div>

            {/* Mobile Actions: Theme Toggle & Hamburger Toggle (<lg) */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <ThemeToggle size="small" />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#281108] border border-[rgba(243,230,210,0.14)] text-[#F3E6D2] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D8C0A5] cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay fixed inset-0 z-40 bg-[#170A05]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-between p-6 pt-24 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3 max-w-md w-full mx-auto">
          <div className="flex items-center justify-between px-3 mb-1">
            <span className="text-[11px] font-semibold text-[#D8C0A5] uppercase tracking-widest">
              Navigation
            </span>
            <ThemeToggle size="small" />
          </div>
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl sm:text-2xl font-display font-bold px-4 py-3 rounded-2xl transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#F3E6D2] bg-[#35170B] border border-[rgba(243,230,210,0.22)] shadow-sm'
                    : 'text-[#D8C0A5] hover:text-[#F3E6D2] hover:bg-[#281108]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Drawer Bottom Info */}
        <div className="flex flex-col gap-4 border-t border-[rgba(216,192,165,0.14)] pt-6 max-w-md w-full mx-auto mt-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#D8C0A5]">Direct Inquiry &amp; WhatsApp:</span>
            <div className="flex flex-col gap-1.5 mt-1">
              {BRAND.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={`tel:${phone.raw}`}
                  className="flex items-center gap-2 text-sm font-semibold text-[#F3E6D2] hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C89B5B]" />
                  <span>{phone.display}</span>
                </a>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button size="md" variant="primary" icon={ArrowUpRight} className="w-full justify-center cursor-pointer">
              Start Your Project Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
