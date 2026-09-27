import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component
 * Progressively reveals elements with a subtle upward fade when entering the viewport.
 * Operates once (triggerOnce: true) and respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  as: Component = 'div',
  threshold = 0.15,
  direction = 'up', // 'up' | 'none'
  distance = 28
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const transformStyle = isVisible
    ? 'translate3d(0, 0, 0)'
    : direction === 'up'
    ? `translate3d(0, ${distance}px, 0)`
    : 'none';

  return (
    <Component
      ref={ref}
      className={`will-change-[opacity,transform] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: transformStyle,
        transition: `opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </Component>
  );
}
