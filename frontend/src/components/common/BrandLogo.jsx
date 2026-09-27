import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ className = '', size = 'default', onClick }) {
  // Height classes that give the logo prominence without dominating the page
  const heightClass = {
    small: 'h-8 sm:h-9',
    default: 'h-10 sm:h-11 md:h-12',
    large: 'h-12 sm:h-14 md:h-16'
  }[size] || 'h-10 sm:h-11 md:h-12';

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8C0A5] rounded-lg transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Branderss Home"
    >
      {/* Exact Branderss Logo Asset - Preserving exact proportions, shape and sharpness */}
      <img
        src="/logo-transparent.png"
        alt="Branderss — Make it bold, make it Branderss"
        className={`${heightClass} w-auto object-contain shrink-0 brand-logo-img transition-opacity duration-200 group-hover:opacity-95`}
        loading="eager"
        onError={(e) => {
          e.currentTarget.src = '/logo.png';
        }}
      />
    </Link>
  );
}
