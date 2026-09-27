import React from 'react';
import Badge from './Badge.jsx';

export default function SectionHeader({
  badge,
  badgeVariant = 'brand',
  title,
  highlight,
  description,
  align = 'center',
  theme = 'dark', // 'dark' | 'light'
  className = ''
}) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }[align] || 'text-center items-center mx-auto';

  const isLight = theme === 'light';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 lg:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <Badge variant={isLight ? 'brand' : badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}

      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
          isLight ? 'text-[#170A05]' : 'text-[#F3E6D2]'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="brand-heading-gradient">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
            isLight ? 'text-[#35170B]' : 'text-[#D8C0A5]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
