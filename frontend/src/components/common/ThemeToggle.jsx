import React from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ className = '', size = 'default' }) {
  const { theme, isDark, toggleTheme } = useTheme();

  const isSmall = size === 'small';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? 'Switch to bright mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}
      className={`relative inline-flex items-center rounded-full cursor-pointer transition-all duration-300 select-none p-1 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8C0A5] ${
        isDark
          ? 'bg-[#170A05] border-[rgba(243,230,210,0.18)] hover:border-[rgba(243,230,210,0.35)] shadow-inner'
          : 'bg-[#EFE0CE] border-[rgba(36,16,8,0.18)] hover:border-[rgba(36,16,8,0.35)] shadow-inner'
      } ${isSmall ? 'h-7 w-14' : 'h-8 sm:h-9 w-16 sm:w-[72px]'} ${className}`}
    >
      {/* Sliding Active Indicator Pill */}
      <span
        className={`absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out shadow-sm flex items-center justify-center ${
          isSmall ? 'w-5' : 'w-6 sm:w-7'
        } ${
          isDark
            ? 'left-1 bg-[#35170B] border border-[rgba(243,230,210,0.22)]'
            : 'left-[calc(100%-1.65rem)] sm:left-[calc(100%-1.95rem)] bg-[#FFF9F0] border border-[rgba(36,16,8,0.15)] shadow-[0_2px_8px_rgba(36,16,8,0.12)]'
        }`}
      />

      {/* Moon Icon (Dark Mode side) */}
      <span
        className={`relative z-10 flex-1 flex items-center justify-center transition-colors duration-300 ${
          isDark ? 'text-[#F3E6D2]' : 'text-[#7A5B46] hover:text-[#241008]'
        }`}
      >
        <Moon className={`${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5 sm:w-4 sm:h-4'}`} />
      </span>

      {/* Sun Icon (Bright Mode side) */}
      <span
        className={`relative z-10 flex-1 flex items-center justify-center transition-colors duration-300 ${
          !isDark ? 'text-[#8A4F2A]' : 'text-[#D8C0A5] hover:text-[#F3E6D2]'
        }`}
      >
        <Sun className={`${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5 sm:w-4 sm:h-4'}`} />
      </span>
    </button>
  );
}
