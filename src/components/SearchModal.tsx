import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Search, X, ArrowRight, Wind, Sun, BatteryCharging, Zap, ShieldCheck, Briefcase } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

interface SearchItem {
  title: string;
  category: string;
  page: PageId;
  snippet: string;
  icon: React.ReactNode;
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    title: 'Wind Energy Solutions & 3.X-5.X MW Turbines',
    category: 'Energy Platform',
    page: 'wind',
    snippet: 'Utility-scale wind farms, low wind speed optimization, micro-siting, and balance of plant EPC.',
    icon: <Wind className="w-4 h-4 text-sky-500" />,
  },
  {
    title: 'Solar Energy & Bifacial Tracker Installations',
    category: 'Energy Platform',
    page: 'solar',
    snippet: 'Utility-scale solar, C&I rooftop arrays, N-type TOPCon bifacial modules, and robotic cleaning.',
    icon: <Sun className="w-4 h-4 text-amber-500" />,
  },
  {
    title: 'Battery Energy Storage Systems (BESS)',
    category: 'Energy Platform',
    page: 'bess',
    snippet: 'Containerized LFP battery storage for peak shaving, grid frequency regulation, and 2h-8h durations.',
    icon: <BatteryCharging className="w-4 h-4 text-emerald-500" />,
  },
  {
    title: 'Hybrid Renewable Energy (Wind + Solar + BESS)',
    category: 'Energy Platform',
    page: 'hybrid',
    snippet: 'Round-the-clock (RTC) clean energy, firm dispatchable renewables, and 60%+ capacity utilization factor.',
    icon: <Zap className="w-4 h-4 text-emerald-600" />,
  },
  {
    title: 'Strategic Partners & Execution Consortium (20+ Years)',
    category: 'Consortium',
    page: 'partners',
    snippet: 'Discover our tier-1 OEM and EPC delivery partners with 20+ years experience and GW-scale execution.',
    icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
  },
  {
    title: 'Industrial & Utility Sector Solutions',
    category: 'Solutions',
    page: 'solutions',
    snippet: 'Tailored clean energy strategies for heavy manufacturing, C&I commercial, data centers, and utilities.',
    icon: <Briefcase className="w-4 h-4 text-indigo-500" />,
  },
  {
    title: '500 MW Project Pipeline Under Development',
    category: 'Pipeline',
    page: 'projects',
    snippet: 'Explore our 500 MW active clean energy pipeline across Wind, Solar, BESS, and Hybrid complexes.',
    icon: <Zap className="w-4 h-4 text-emerald-500" />,
  },
  {
    title: 'Sigma QuantumGrid™ SCADA & Asset Management',
    category: 'Technology',
    page: 'technology',
    snippet: 'IoT edge telematics, AI predictive maintenance, and digital power plant controllers (PPC).',
    icon: <ShieldCheck className="w-4 h-4 text-blue-500" />,
  },
  {
    title: 'Sustainability, ESG & Net Zero Roadmap',
    category: 'Governance',
    page: 'sustainability',
    snippet: 'Carbon abatement calculator, biodiversity conservation, and ESG audit reports.',
    icon: <ShieldCheck className="w-4 h-4 text-green-500" />,
  },
  {
    title: 'Engineering Careers & Open Positions',
    category: 'Careers',
    page: 'careers',
    snippet: 'Join our clean energy mission: engineering, project delivery, BESS commissioning, and SCADA roles.',
    icon: <Briefcase className="w-4 h-4 text-slate-500" />,
  },
  {
    title: 'Contact Engineering & Request RFP',
    category: 'Contact',
    page: 'contact',
    snippet: 'Consult our project team, submit a land parcel proposal, or request a renewable project feasibility study.',
    icon: <Zap className="w-4 h-4 text-orange-500" />,
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.snippet.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Wind, Solar, BESS, Hybrid, Projects, SCADA..."
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-500">
              No matching pages or solutions found for "{query}".
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onNavigate(item.page);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-slate-50 group transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-slate-100 group-hover:bg-white transition-colors shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          · {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.snippet}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer info */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Sigma Greentech Energy Platform</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
