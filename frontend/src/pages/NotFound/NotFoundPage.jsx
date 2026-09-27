import React from 'react';
import usePageSEO from '../../hooks/usePageSEO.js';
import Button from '../../components/common/Button.jsx';
import Badge from '../../components/common/Badge.jsx';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  usePageSEO('404 Page Not Found — BRANDERSS', 'The page you are looking for does not exist.');

  return (
    <div className="min-h-[80vh] pt-32 pb-24 flex items-center justify-center bg-[#170A05] text-[#F3E6D2] relative overflow-hidden text-center px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#35170B]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10 flex flex-col items-center">
        <Badge variant="brand" className="mb-4">404 • Page Not Found</Badge>

        <h1 className="font-display text-7xl sm:text-9xl font-extrabold brand-heading-gradient leading-none">
          404
        </h1>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3E6D2] mt-4">
          Lost in the Noise?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#D8C0A5]/90 max-w-md leading-relaxed">
          The page you're searching for doesn't exist or has moved. Let's get you back to building an unforgettable brand.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button to="/" size="md" variant="primary" icon={Home} iconPosition="left">
            Return to Homepage
          </Button>
          <Button to="/services" size="md" variant="secondary">
            View Our Services
          </Button>
        </div>
      </div>
    </div>
  );
}
