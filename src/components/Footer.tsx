import React, { useState } from 'react';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';
import { Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRfp }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none"
            >
              <BrandLogo size="lg" theme="dark" variant="full" />
            </button>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sigma Greentech Solutions is an integrated renewable-energy solutions platform developing, delivering, and managing clean-energy projects across Wind, Solar, BESS, and Hybrid power systems.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>Corporate HQ: Sigma Energy Tower, CleanTech Boulevard</div>
              <div>Global Inquiries: <span className="text-slate-200">contact@sigmagreentech.com</span></div>
              <div>Project Hotline: <span className="text-slate-200">+91 (0) 20 4012 8800</span></div>
            </div>
          </div>

          {/* Nav Group 1: Energy Platform */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Energy Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('wind')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Wind Energy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solar')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Solar Energy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bess')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Battery Storage (BESS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hybrid')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Hybrid Energy (RTC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technology')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sigma QuantumGrid™
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Group 2: Solutions & Projects */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Solutions & Delivery
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('partners')}
                  className="hover:text-emerald-400 transition-colors font-medium text-slate-300"
                >
                  Our Partners (20+ Yrs)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Heavy Industries & Steel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Commercial & Industrial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Utilities & Grids
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Projects Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRfp}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Request Feasibility RFP
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Group 3: Company & Insights */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Clean Energy Intelligence
            </h4>
            <p className="text-xs text-slate-400">
              Receive quarterly whitepapers on hybrid grid integration, battery degradation models, and open access regulatory updates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed. You will receive our next quarterly dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate email"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>ISO 9001 Quality</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>ISO 14001 Environment</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>ISO 45001 Safety</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Sigma Greentech Solutions. All rights reserved.</span>
            <span>·</span>
            <span>Powering the Future with Clean Energy</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-slate-400 transition-colors"
            >
              Corporate Governance
            </button>
            <button
              onClick={() => onNavigate('sustainability')}
              className="hover:text-slate-400 transition-colors"
            >
              ESG Charter
            </button>
            <button
              onClick={() => onNavigate('careers')}
              className="hover:text-slate-400 transition-colors"
            >
              Careers
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-400 transition-colors"
            >
              Legal & Privacy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
