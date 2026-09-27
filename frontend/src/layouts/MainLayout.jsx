import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import { BRAND } from '../constants/index.js';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function MainLayout() {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top or target hash on route change
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-[#35170B] selection:text-[#F3E6D2] overflow-x-hidden">
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full scroll-progress-bar transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Conversion Bar / WhatsApp Hub */}
      <div className="floating-quick-bar fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-to-top-btn w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D8C0A5]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* WhatsApp Quick Chat */}
        <a
          href={BRAND.phones[0].wa}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-floating-pill group relative flex items-center gap-2 sm:gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-[0_8px_25px_rgba(23,10,5,0.8)] transition-all duration-200 cursor-pointer hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D8C0A5]"
          aria-label="Chat with Branderss on WhatsApp"
        >
          <div className="whatsapp-floating-icon-box w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold shrink-0 transition-all duration-200">
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="whatsapp-floating-subtitle text-[9px] sm:text-[10px] uppercase font-bold tracking-widest leading-none">
              Direct WhatsApp
            </span>
            <span className="whatsapp-floating-title text-xs sm:text-sm font-extrabold leading-tight mt-0.5">
              Chat With Us
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
