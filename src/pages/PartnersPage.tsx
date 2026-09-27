import React from 'react';
import { PageId } from '../types';
import { PARTNERS_CONSORTIUM } from '../data/mockData';
import { ShieldCheck, Award, Layers, Zap, Cpu, Building2, CheckCircle2, ArrowRight, Handshake, TrendingUp } from 'lucide-react';

interface PartnersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: (category?: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate, onOpenRfp }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'EPC & Civil Infrastructure': <Building2 className="w-6 h-6 text-emerald-600" />,
    'Tier-1 Technology & OEM': <Zap className="w-6 h-6 text-sky-600" />,
    'BESS & Electrochemical Storage': <Layers className="w-6 h-6 text-teal-600" />,
    'Grid SCADA & Power Systems': <Cpu className="w-6 h-6 text-indigo-600" />,
    'Bankability & Technical Audit': <ShieldCheck className="w-6 h-6 text-amber-600" />,
  };

  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
              <Handshake className="w-4 h-4" />
              <span>Our Strategic Partners & Execution Consortium</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Startup Agility Powered by 20+ Years of GW-Scale Partner Experience
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Sigma Greentech Solutions is a modern clean-energy solutions startup engineered for the new energy era. While our platform brings agile, digital, and technology-agnostic innovation, our execution is powered by a strategic consortium of tier-1 partners with over 20 years of combined experience delivering multi-GW clean-energy infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRfp('Partner Consortium Engagement')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Partner With Our Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                View Partner Track Record
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Partnership Model Explainer */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                The Sigma Platform Model
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                Why Our Startup + Veteran Partner Synergy Delivers Superior Value
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional legacy corporations move slowly, burdened by rigid proprietary equipment and high overheads. Standalone startups often lack execution muscle. Sigma solves this by fusing clean-tech startup innovation and customer-first agility with the deep balance-sheet strength, specialized civil equipment, and 20+ years track record of seasoned delivery giants.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-bold font-mono text-emerald-600 tabular-nums">20+</span>
                <span className="text-xs font-bold text-slate-900 block mt-1">Years Experience</span>
                <p className="text-[11px] text-slate-500 mt-1">Combined partner execution pedigree in utility infrastructure.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-bold font-mono text-sky-600 tabular-nums">Multi-GW</span>
                <span className="text-xs font-bold text-slate-900 block mt-1">Scale Delivered</span>
                <p className="text-[11px] text-slate-500 mt-1">Proven commissioning experience across wind, solar & substations.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-bold font-mono text-teal-600 tabular-nums">100%</span>
                <span className="text-xs font-bold text-slate-900 block mt-1">Tech Agnostic</span>
                <p className="text-[11px] text-slate-500 mt-1">We select the best hardware for your site, not our factory quotas.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-bold font-mono text-indigo-600 tabular-nums">Zero</span>
                <span className="text-xs font-bold text-slate-900 block mt-1">Bureaucracy</span>
                <p className="text-[11px] text-slate-500 mt-1">Rapid feasibility, transparent billing, and dedicated attention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Consortium Deep-Dive Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Our Consortium Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
              The Strategic Network Powering Every Sigma Project
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Every megawatt we engineer is backed by contractually bonded, long-standing partners who are leaders in their respective engineering fields.
            </p>
          </div>

          <div className="space-y-8">
            {PARTNERS_CONSORTIUM.map((partner, index) => (
              <div
                key={partner.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      {iconMap[partner.category]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {partner.category}
                        </span>
                        <span className="text-xs text-slate-400">·</span>
                        <span className="text-xs font-semibold text-slate-600">
                          {partner.experienceYears} Combined Experience
                        </span>
                        <span className="text-xs text-slate-400">·</span>
                        <span className="text-xs font-mono font-semibold text-slate-900">
                          {partner.gwTrackRecord}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">
                        {partner.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {partner.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Execution Scope & Delivery Responsibilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {partner.scope.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                  <button
                    onClick={() => onOpenRfp(`Consortium Scope: ${partner.name}`)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Consortium Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold font-display text-white mb-3">
            Interested in Joining the Sigma Execution Network?
          </h3>
          <p className="text-xs text-slate-300 mb-6 leading-relaxed">
            We are constantly evaluating Tier-1 technology suppliers, regional civil subcontractors, and specialist engineering practices for our expanding hybrid clean energy pipeline.
          </p>
          <button
            onClick={() => onOpenRfp('Strategic Partner Application')}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <span>Submit Partner Qualification Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
