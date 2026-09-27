import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedCounter component
 * Smoothly animates numbers from 0 to target value once the element enters the viewport.
 * Automatically preserves suffixes and prefixes (e.g. "100+", "10+", "100%", "10+ Sectors").
 */
export default function AnimatedCounter({
  value,
  duration = 1400,
  delay = 0,
  className = '',
  prefix: manualPrefix,
  suffix: manualSuffix
}) {
  const containerRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const hasAnimatedRef = useRef(false);

  // Parse numeric target, prefix, and suffix
  const rawString = String(value ?? '');
  const match = rawString.match(/^([^\d]*)(\d+)(.*)$/);

  const prefix = manualPrefix !== undefined ? manualPrefix : (match ? match[1] : '');
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = manualSuffix !== undefined ? manualSuffix : (match ? match[3] : '');

  useEffect(() => {
    // If no numeric target or already animated, return
    if (!match || hasAnimatedRef.current) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(target);
      hasAnimatedRef.current = true;
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    let rafId = null;
    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          timeoutId = setTimeout(() => {
            setHasStarted(true);
            const startTime = performance.now();

            const step = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Premium easeOutCubic curve
              const easeOutProgress = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(target * easeOutProgress);

              setDisplayValue(current);

              if (progress < 1) {
                rafId = requestAnimationFrame(step);
              } else {
                setDisplayValue(target);
              }
            };

            rafId = requestAnimationFrame(step);
          }, delay);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, duration, delay]);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span
      ref={containerRef}
      className={`tabular-nums inline-block transition-opacity duration-300 ${className} ${
        hasStarted ? 'opacity-100' : 'opacity-90'
      }`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
