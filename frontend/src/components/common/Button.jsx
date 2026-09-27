import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button'
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-full select-none cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8C0A5]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5"
  }[size] || "text-sm px-6 py-2.5 gap-2";

  const variantStyles = {
    // Primary: Warm Cream in dark mode, Deep Brown in light mode
    primary: "btn-variant-primary bg-[#F3E6D2] text-[#170A05] hover:bg-[#D8C0A5] shadow-[0_4px_16px_rgba(23,10,5,0.4)] hover:shadow-[0_6px_22px_rgba(216,192,165,0.3)] hover:-translate-y-0.5 active:translate-y-0 font-bold",
    // Secondary: Main brown surface in dark, warm cream surface in light
    secondary: "btn-variant-secondary bg-[#35170B] text-[#F3E6D2] border border-[#5A2C18] hover:border-[#D8C0A5] hover:bg-[#431D0E] shadow-md hover:-translate-y-0.5",
    // Dark: Deep Brown button with cream text
    dark: "btn-variant-dark bg-[#170A05] text-[#F3E6D2] hover:bg-[#35170B] shadow-[0_4px_20px_rgba(23,10,5,0.25)] hover:shadow-[0_6px_25px_rgba(23,10,5,0.35)] hover:-translate-y-0.5 font-bold",
    // Outline Dark: Transparent with deep brown border
    'outline-dark': "bg-transparent text-[#170A05] border border-[#170A05]/30 hover:border-[#170A05] hover:bg-[#170A05]/5 font-semibold",
    // Outline: Soft beige border with cream text in dark mode
    outline: "btn-variant-outline bg-transparent text-[#F3E6D2] border border-[rgba(243,230,210,0.35)] hover:border-[#F3E6D2] hover:bg-[#F3E6D2]/10 font-semibold",
    // Ghost: Muted text with clear hover state
    ghost: "btn-variant-ghost bg-transparent text-[#D8C0A5] hover:text-[#F3E6D2] hover:bg-[#35170B]/50 font-semibold"
  }[variant] || "";

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 shrink-0" />
      )}
      <span className="whitespace-nowrap">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 shrink-0" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
}
