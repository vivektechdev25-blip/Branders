import React, { useState, useRef } from 'react';
import { Compass, Sparkles, Palette, Users, TrendingUp } from 'lucide-react';

export default function BrandStoryEcosystem() {
  const [activeNode, setActiveNode] = useState(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // subtle max 6px shift
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setActiveNode(null);
  };

  const strategicNodes = [
    {
      id: 'strategy',
      number: '01',
      title: 'Strategy',
      sub: 'Market Positioning',
      desc: 'Unfair commercial advantages & category leadership.',
      icon: Compass,
      position: 'top-7 right-6 sm:top-10 sm:right-10',
      tooltipClass: 'top-full mt-2.5 right-0'
    },
    {
      id: 'identity',
      number: '02',
      title: 'Identity',
      sub: 'Visual Authority',
      desc: 'Distinctive visual codes, typography & prestige marks.',
      icon: Palette,
      position: 'top-28 left-4 sm:top-32 sm:left-6',
      tooltipClass: 'top-full mt-2.5 left-0'
    },
    {
      id: 'story',
      number: '03',
      title: 'Story',
      sub: 'Emotional Narrative',
      desc: 'Stories that turn casual diners and buyers into lifelong advocates.',
      icon: Sparkles,
      position: 'top-6 left-8 sm:top-8 sm:left-12',
      tooltipClass: 'top-full mt-2.5 left-0'
    },
    {
      id: 'audience',
      number: '04',
      title: 'Audience',
      sub: 'High-Value Conversion',
      desc: 'Precision acquisition across Meta, Google & local discovery.',
      icon: Users,
      position: 'bottom-24 right-4 sm:bottom-28 sm:right-8',
      tooltipClass: 'bottom-full mb-2.5 right-0'
    },
    {
      id: 'growth',
      number: '05',
      title: 'Growth',
      sub: '100+ Brands Scaled',
      desc: 'Predictable digital revenue and footfall expansion.',
      icon: TrendingUp,
      position: 'bottom-20 left-6 sm:bottom-24 sm:left-10',
      tooltipClass: 'bottom-full mb-2.5 left-0'
    }
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="brand-ecosystem-card relative w-full h-[440px] sm:h-[480px] lg:h-[520px] rounded-3xl bg-gradient-to-b from-[#241108] via-[#1D0C06] to-[#170A05] border border-[rgba(243,230,210,0.14)] shadow-2xl overflow-hidden flex items-center justify-center select-none"
      style={{
        transform: `perspective(1000px) rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg)`,
        transition: 'transform 200ms ease-out'
      }}
    >
      {/* Ambient background warm glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(90,44,24,0.35),transparent_65%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C89B5B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Elegant Architectural Concentric Orbits (SVG) */}
      <svg
        className="brand-ecosystem-svg absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Guide Orbit */}
        <circle
          cx="260"
          cy="260"
          r="210"
          className="brand-ecosystem-orbit"
          stroke="rgba(216, 192, 165, 0.12)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {/* Middle Strategy Orbit */}
        <circle
          cx="260"
          cy="260"
          r="150"
          className="brand-ecosystem-orbit"
          stroke="rgba(216, 192, 165, 0.16)"
          strokeWidth="1"
        />
        {/* Inner Core Orbit with Accent Gold Arc */}
        <circle
          cx="260"
          cy="260"
          r="95"
          className="brand-ecosystem-orbit"
          stroke="rgba(200, 155, 91, 0.28)"
          strokeWidth="1.2"
          strokeDasharray="8 12"
        />
        {/* Subtle Crosshair Axis */}
        <line x1="260" y1="40" x2="260" y2="480" className="brand-ecosystem-orbit" stroke="rgba(216, 192, 165, 0.05)" strokeWidth="1" />
        <line x1="40" y1="260" x2="480" y2="260" className="brand-ecosystem-orbit" stroke="rgba(216, 192, 165, 0.05)" strokeWidth="1" />
      </svg>

      {/* Central Brand Core Medallion */}
      <div className="brand-ecosystem-medallion relative z-10 flex flex-col items-center justify-center p-6 rounded-full bg-gradient-to-b from-[#35170B] via-[#241108] to-[#170A05] border-2 border-[rgba(243,230,210,0.22)] shadow-[0_0_50px_rgba(23,10,5,0.9),0_0_25px_rgba(200,155,91,0.2)] w-44 h-44 sm:w-48 sm:h-48 text-center transition-all duration-300 group hover:border-[#F3E6D2] hover:scale-105">
        {/* Subtle spinning outer ring accent */}
        <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#C89B5B]/30 animate-spin" style={{ animationDuration: '35s' }} />

        {/* Branderss Monogram Symbol */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#170A05] border border-[rgba(243,230,210,0.2)] flex items-center justify-center text-[#F3E6D2] shadow-inner mb-2 brand-monogram">
          <span className="font-display font-black text-2xl sm:text-3xl brand-heading-gradient">
            B
          </span>
        </div>

        <p className="font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase text-[#F3E6D2]">
          BRANDERSS
        </p>
        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#C89B5B] mt-0.5">
          Story Ecosystem
        </span>

        {/* Live status badge */}
        <div className="brand-ecosystem-status mt-1.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#170A05] border border-[rgba(243,230,210,0.2)] text-[9px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C89B5B] animate-pulse" />
          <span className="font-semibold text-[#F3E6D2] tracking-wide">Core Active</span>
        </div>
      </div>

      {/* Floating Strategic Brand Nodes */}
      {strategicNodes.map((node) => {
        const Icon = node.icon;
        const isHovered = activeNode === node.id;
        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
            className={`group/node absolute transition-all duration-300 cursor-pointer ${node.position} ${
              isHovered ? 'z-40' : 'z-20 hover:z-40'
            }`}
          >
            <div
              className={`brand-ecosystem-node flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border backdrop-blur-md shadow-lg transition-all duration-200 group-hover/node:scale-105 ${
                isHovered
                  ? 'brand-ecosystem-node-active bg-[#35170B] border-[#F3E6D2] scale-105 shadow-[0_8px_25px_rgba(23,10,5,0.85)]'
                  : 'bg-[#241108]/90 border-[rgba(243,230,210,0.14)] hover:border-[rgba(243,230,210,0.3)] hover:bg-[#281108]'
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-xs shrink-0 transition-colors ${
                  isHovered ? 'bg-[#F3E6D2] text-[#170A05]' : 'bg-[#170A05] text-[#C89B5B] border border-[#5A2C18]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-bold text-[#C89B5B]">{node.number}</span>
                  <p className="font-display font-bold text-xs sm:text-sm text-[#F3E6D2] leading-none">
                    {node.title}
                  </p>
                </div>
                <span className="text-[10px] text-[#D8C0A5] font-medium leading-none mt-1 hidden sm:inline">
                  {node.sub}
                </span>
              </div>
            </div>

            {/* Hover & Active Tooltip Details */}
            <div
              className={`brand-ecosystem-tooltip absolute ${node.tooltipClass} w-52 p-3 rounded-2xl border shadow-2xl z-50 pointer-events-none transition-all duration-200 ${
                isHovered
                  ? 'opacity-100 visible scale-100'
                  : 'opacity-0 invisible scale-95 group-hover/node:opacity-100 group-hover/node:visible group-hover/node:scale-100'
              }`}
            >
              <p className="brand-ecosystem-tooltip-title font-semibold mb-1 text-xs">
                {node.title} Focus
              </p>
              <p className="brand-ecosystem-tooltip-desc text-[11px] leading-snug">
                {node.desc}
              </p>
            </div>
          </div>
        );
      })}

      {/* Bottom Editorial Pill (Verticals) */}
      <div className="brand-ecosystem-footer-bar absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-4 py-2 rounded-full bg-[#241008] border border-[rgba(243,230,210,0.22)] shadow-md backdrop-blur-md">
        <span className="brand-ecosystem-footer-text truncate text-xs font-semibold text-[#F3E6D2]">
          Hospitality <span className="accent-dot mx-1">•</span> Cafés <span className="accent-dot mx-1">•</span> Banquets <span className="accent-dot mx-1">•</span> B2B
        </span>
        <span className="brand-ecosystem-footer-accent text-xs font-bold text-[#E4D1B8] shrink-0 ml-2">
          Lucknow &amp; Beyond
        </span>
      </div>
    </div>
  );
}
