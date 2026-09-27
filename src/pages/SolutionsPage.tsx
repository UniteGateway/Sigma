import React from 'react';
import { PageId } from '../types';
import { SECTOR_SOLUTIONS } from '../data/mockData';
import { Factory, Building2, Landmark, Plane, Coins, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: (category?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenRfp }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'heavy-industries': <Factory className="w-6 h-6 text-emerald-600" />,
    'ci-commercial': <Building2 className="w-6 h-6 text-sky-600" />,
    'utilities': <Landmark className="w-6 h-6 text-amber-600" />,
    'infrastructure': <Plane className="w-6 h-6 text-indigo-600" />,
    'investors': <Coins className="w-6 h-6 text-teal-600" />,
  };

  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">
              Sector Solutions
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Tailored Clean Energy Architecture for Every Industry Sector
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Every energy consumer faces distinct operational profiles, tariff structures, and regulatory mandates. Sigma engineers bespoke clean-energy solutions across wind, solar, and battery storage to maximize economic savings and eliminate carbon footprints.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Sector Solutions Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SECTOR_SOLUTIONS.map((sol, index) => (
            <div
              key={sol.id}
              className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-200">
                    {iconMap[sol.id]}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block">
                      Sector {index + 1} · {sol.clientTypes}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-slate-900">
                      {sol.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-800 block mb-1">
                      The Energy Challenge
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sol.challenge}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-emerald-700 block mb-1">
                      Sigma Integrated Solution
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sol.solution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Key Value: {sol.benefits}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                <button
                  onClick={() => onOpenRfp(`Sector Solution: ${sol.title}`)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Solution Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Delivery Models (EPC / BOOT / Group Captive / Opex) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Commercial Delivery Models
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Flexible Contracting & Financing Frameworks
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Choose the financial model that aligns with your capital allocation, balance sheet strategy, and risk preference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Model 1</span>
              <h4 className="text-base font-bold text-slate-900 font-display">Turnkey EPC</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Client-owned capital asset. Sigma handles engineering, procurement, construction, and commissioning on a fixed-price, fixed-date turnkey contract with liquidated damages protection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Model 2</span>
              <h4 className="text-base font-bold text-slate-900 font-display">Group Captive PPA</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Client holds 26% equity in a dedicated Special Purpose Vehicle (SPV) and consumes 51%+ generated power, waiving cross-subsidy and additional surcharges for maximum tariff savings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Model 3</span>
              <h4 className="text-base font-bold text-slate-900 font-display">BOOT (Build-Own-Operate-Transfer)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sigma finances, builds, and operates the clean energy plant over a 15–25 year concession period, with ownership transferring to the client at the end of the term.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Model 4</span>
              <h4 className="text-base font-bold text-slate-900 font-display">Asset Management & O&M</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Long-term operational contracts for existing renewable and BESS assets, providing 24/7 SCADA monitoring, component overhauls, and guaranteed availability SLAs (&gt;99.5%).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold font-display text-white mb-3">
            Ready to Structure Your Clean Energy Strategy?
          </h3>
          <p className="text-xs text-slate-300 mb-6 leading-relaxed">
            Our power purchase agreement (PPA) and grid engineering specialists will evaluate your load duration curve and formulate a customized feasibility brief.
          </p>
          <button
            onClick={() => onOpenRfp()}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <span>Initiate Free Feasibility Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
