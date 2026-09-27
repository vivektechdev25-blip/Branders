import React from 'react';

export default function Badge({
  children,
  variant = 'brand',
  size = 'md',
  dot = true,
  className = ''
}) {
  const variantStyles = {
    // Brand: Deep brown with soft cream border and ivory text
    brand: 'badge-variant-brand bg-[#35170B] text-[#F3E6D2] border-[rgba(243,230,210,0.22)]',
    // Accent: Warm cream with deep brown text
    cream: 'badge-variant-cream bg-[#F3E6D2] text-[#170A05] border-[#D8C0A5]',
    // Beige / Soft: High-contrast brown capsule with cream text
    beige: 'badge-variant-beige bg-[#35170B] text-[#F3E6D2] border-[rgba(216,192,165,0.3)]',
    // Muted / Secondary: Crisp elevated surface with cream text
    muted: 'badge-variant-muted bg-[#35170B] text-[#F3E6D2] border-[rgba(243,230,210,0.2)]'
  }[variant] || 'badge-variant-brand bg-[#35170B] text-[#F3E6D2] border-[rgba(243,230,210,0.22)]';

  const dotColors = {
    brand: 'bg-[#D8C0A5] shadow-[0_0_8px_#D8C0A5]',
    cream: 'bg-[#170A05]',
    beige: 'bg-[#C89B5B]',
    muted: 'bg-[#C89B5B]'
  }[variant] || 'bg-[#D8C0A5]';

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3.5 py-1'
  }[size] || 'text-xs px-3.5 py-1';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full font-semibold border tracking-wide uppercase ${variantStyles} ${sizeStyles} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors}`} />}
      <span>{children}</span>
    </span>
  );
}
