import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'symbol';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'dark',
  size = 'md',
}) => {
  // Size parameters
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const iconSize = isSm ? 'w-8 h-8' : isLg ? 'w-16 h-16' : 'w-11 h-11';
  const sigmaTextSize = isSm ? 'text-lg' : isLg ? 'text-3xl' : 'text-2xl';
  const greentechTextSize = isSm ? 'text-xs' : isLg ? 'text-base' : 'text-sm';
  const solutionsTextSize = isSm ? 'text-[9px]' : isLg ? 'text-xs' : 'text-[11px]';

  // In dark contexts (dark navigation or dark footer banner):
  // "SIGMA" is white/navy, "GREENTECH" is vibrant green, "SOLUTIONS" is slate-300
  const isDarkCanvas = theme === 'dark';
  const sigmaColor = isDarkCanvas ? 'text-white' : 'text-[#072d4b]';
  const dividerColor = isDarkCanvas ? 'border-slate-600' : 'border-slate-300';
  const solutionsColor = isDarkCanvas ? 'text-slate-300' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Sun & Turbine Icon */}
      <div className={`relative ${iconSize} shrink-0 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#ea580c] via-[#f97316] to-[#fb923c] shadow-sm shadow-orange-500/20`}>
        {/* Stylized White Wind Turbine */}
        <svg
          viewBox="0 0 100 100"
          className="w-[84%] h-[84%] text-white fill-current filter drop-shadow-sm"
          aria-hidden="true"
        >
          {/* Turbine Mast / Tower */}
          <path d="M47.5 50 L46 92 L54 92 L52.5 50 Z" />
          {/* Turbine Center Hub */}
          <circle cx="50" cy="48" r="4.5" />
          {/* Top Blade */}
          <path d="M50 46 C48 30 47 16 50 8 C53 16 52 30 50 46 Z" />
          {/* Bottom Left Blade */}
          <path d="M47 50 C33 58 20 66 14 62 C19 55 31 51 47 50 Z" />
          {/* Bottom Right Blade */}
          <path d="M53 50 C67 58 80 66 86 62 C81 55 69 51 53 50 Z" />
        </svg>
      </div>

      {variant !== 'symbol' && (
        <div className="flex flex-col leading-none">
          {/* SIGMA */}
          <span
            className={`font-display font-extrabold tracking-tight ${sigmaTextSize} ${sigmaColor}`}
            style={{ letterSpacing: '-0.03em' }}
          >
            SIGMA
          </span>

          {/* GREENTECH */}
          <span
            className={`font-display font-bold tracking-wider ${greentechTextSize} text-[#16a34a]`}
            style={{ letterSpacing: '0.12em' }}
          >
            GREENTECH
          </span>

          {/* —— SOLUTIONS —— */}
          {variant === 'full' && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`h-px w-3.5 border-t ${dividerColor}`}></span>
              <span
                className={`font-semibold tracking-[0.24em] ${solutionsTextSize} ${solutionsColor} uppercase`}
              >
                SOLUTIONS
              </span>
              <span className={`h-px w-3.5 border-t ${dividerColor}`}></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
