import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';
import { Search, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenRfp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenRfp,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformsDropdownOpen, setPlatformsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setPlatformsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPlatformActive = ['wind', 'solar', 'bess', 'hybrid'].includes(currentPage);
  const isCompanyActive = ['about', 'partners', 'sustainability', 'careers'].includes(currentPage);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element brand mark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
          >
            <BrandLogo size="md" theme="dark" variant="full" />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'home'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </button>

            {/* Energy Platform Dropdown (Wind, Solar, BESS, Hybrid) */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformsDropdownOpen(true)}
              onMouseLeave={() => setPlatformsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors whitespace-nowrap ${
                  isPlatformActive
                    ? 'text-emerald-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Energy Platform</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${platformsDropdownOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {platformsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-in fade-in duration-150">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 space-y-1">
                    <button
                      onClick={() => handleNavClick('wind')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        currentPage === 'wind' ? 'bg-emerald-950/60 text-emerald-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">Wind Energy</div>
                        <div className="text-[11px] text-slate-400">Utility-scale & low-wind tech</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('solar')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        currentPage === 'solar' ? 'bg-emerald-950/60 text-emerald-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">Solar Energy</div>
                        <div className="text-[11px] text-slate-400">Bifacial trackers & C&I arrays</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('bess')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        currentPage === 'bess' ? 'bg-emerald-950/60 text-emerald-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">BESS (Storage)</div>
                        <div className="text-[11px] text-slate-400">Battery energy storage systems</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('hybrid')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        currentPage === 'hybrid' ? 'bg-emerald-950/60 text-emerald-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-emerald-400">Hybrid Renewable Energy</div>
                        <div className="text-[11px] text-slate-400">Wind + Solar + BESS 24/7 RTC</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('solutions')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'solutions'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Solutions
            </button>

            <button
              onClick={() => handleNavClick('projects')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'projects'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              500 MW Pipeline
            </button>

            <button
              onClick={() => handleNavClick('technology')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'technology'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Technology & SCADA
            </button>

            {/* Company Dropdown (About, Sustainability, Careers) */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors whitespace-nowrap ${
                  isCompanyActive
                    ? 'text-emerald-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {companyDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-52 animate-in fade-in duration-150">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 space-y-1">
                    <button
                      onClick={() => handleNavClick('about')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        currentPage === 'about' ? 'bg-emerald-950/60 text-emerald-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      About Sigma
                    </button>
                    <button
                      onClick={() => handleNavClick('partners')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        currentPage === 'partners' ? 'bg-emerald-950/60 text-emerald-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Our Partners</span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-800">20+ Yrs</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('sustainability')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        currentPage === 'sustainability' ? 'bg-emerald-950/60 text-emerald-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      Sustainability & ESG
                    </button>
                    <button
                      onClick={() => handleNavClick('careers')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        currentPage === 'careers' ? 'bg-emerald-950/60 text-emerald-300' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      Careers & Culture
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'contact'
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            {/* Search shortcut button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors flex items-center gap-1.5"
              title="Search website (Cmd+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline text-xs text-slate-400 font-mono">⌘K</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenRfp}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-sm shadow-emerald-500/20 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Request Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-3 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'home' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'about' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('partners')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'partners' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Our Partners (20+ Yrs)
            </button>
            <button
              onClick={() => handleNavClick('wind')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'wind' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Wind Energy
            </button>
            <button
              onClick={() => handleNavClick('solar')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'solar' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Solar Energy
            </button>
            <button
              onClick={() => handleNavClick('bess')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'bess' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              BESS Storage
            </button>
            <button
              onClick={() => handleNavClick('hybrid')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'hybrid' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Hybrid Energy
            </button>
            <button
              onClick={() => handleNavClick('solutions')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'solutions' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Solutions
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'projects' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              500 MW Pipeline
            </button>
            <button
              onClick={() => handleNavClick('technology')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'technology' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Technology & SCADA
            </button>
            <button
              onClick={() => handleNavClick('sustainability')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'sustainability' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Sustainability
            </button>
            <button
              onClick={() => handleNavClick('careers')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'careers' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`p-2.5 rounded-lg text-left ${currentPage === 'contact' ? 'bg-emerald-950 text-emerald-300 font-semibold' : 'text-slate-300 hover:bg-slate-900'}`}
            >
              Contact Us
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <button
              onClick={onOpenRfp}
              className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 rounded-lg"
            >
              Request Project Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
