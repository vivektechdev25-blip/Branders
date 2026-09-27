import { useState, useEffect } from 'react';

/**
 * useActiveSection hook
 * Determines the currently active section in the viewport using IntersectionObserver.
 * Accurately tracks #home, #about, #services, #our-work, and #contact.
 */
export default function useActiveSection(sectionIds = ['home', 'about', 'services', 'our-work', 'contact']) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Check if section elements exist on current page
    const existingElements = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((item) => item.el !== null);

    if (existingElements.length === 0) return;

    // Track intersection ratios of visible sections
    const visibleSections = new Map();

    const updateActiveFromMap = () => {
      // Top of page edge case: always activate home
      if (window.scrollY < 120) {
        setActiveSection(sectionIds[0]);
        return;
      }

      // Bottom of page edge case: activate last section (contact)
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 80) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Find the visible section with highest intersection ratio or closest to top
      let bestId = null;
      let highestRatio = 0;

      visibleSections.forEach((ratio, id) => {
        if (ratio > highestRatio) {
          highestRatio = ratio;
          bestId = id;
        }
      });

      if (bestId) {
        setActiveSection(bestId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        });

        updateActiveFromMap();
      },
      {
        // Strategic viewport zone: section occupying upper-center of screen is active
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
      }
    );

    existingElements.forEach(({ el }) => observer.observe(el));

    // Handle scroll for instant edge-case response (top & bottom)
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection(sectionIds[0]);
      } else {
        const scrollBottom = window.innerHeight + window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        if (scrollBottom >= docHeight - 80) {
          setActiveSection(sectionIds[sectionIds.length - 1]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
