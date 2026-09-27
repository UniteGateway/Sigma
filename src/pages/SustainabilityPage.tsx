import React, { useState } from 'react';
import { PageId } from '../types';
import { ShieldCheck, Leaf, Trees, Car, Factory, Heart, Award, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate, onOpenRfp }) => {
  const [cleanMWh, setCleanMWh] = useState<number>(25000);

  // Carbon abatement calculations
  // Average grid carbon intensity ~0.82 metric tons CO2 / MWh
  const co2AvoidedTons = Math.round(cleanMWh * 0.82);
  const carsRemoved = Math.round(co2AvoidedTons / 4.6); // ~4.6 tons per passenger car per year
  const treesEquivalent = Math.round(co2AvoidedTons * 45); // ~45 trees equivalent carbon capture

  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">
              Sustainability & ESG Framework
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Decarbonization Engineered with Environmental and Social Integrity
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Clean energy is not merely a commercial endeavor—it is our generational responsibility. Sigma embeds rigorous Environmental, Social, and Governance (ESG) standards across site selection, ecological biodiversity, and local community upliftment.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Carbon Abatement Calculator */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-900/60 shadow-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                Interactive Carbon Abatement Model
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Measure Your Corporate Decarbonization Impact
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Estimate the annual greenhouse gas emissions avoided by switching your industrial facility to Sigma’s integrated clean energy solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Slider Input */}
              <div className="lg:col-span-5 bg-slate-950/70 p-6 rounded-2xl border border-slate-800 space-y-4">
                <label className="flex items-center justify-between text-xs font-semibold text-slate-200">
                  <span>Annual Renewable Offtake</span>
                  <span className="font-mono text-emerald-400 font-bold text-base">
                    {cleanMWh.toLocaleString()} MWh/yr
                  </span>
                </label>
                <input
                  type="range"
                  min={1000}
                  max={200000}
                  step={1000}
                  value={cleanMWh}
                  onChange={(e) => setCleanMWh(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>1,000 MWh</span>
                  <span>100,000 MWh</span>
                  <span>200,000 MWh</span>
                </div>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  Calculated against national grid carbon baseline of 0.82 metric tons CO2-equivalent per MWh.
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-950/50 p-5 rounded-2xl border border-emerald-900/40 space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center mb-3">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] text-slate-400 block">CO2 Avoided</span>
                  <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                    {co2AvoidedTons.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-500 block">Metric Tons/year</span>
                </div>

                <div className="bg-slate-950/50 p-5 rounded-2xl border border-emerald-900/40 space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center mb-3">
                    <Car className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] text-slate-400 block">Equivalent To</span>
                  <span className="text-2xl font-bold font-mono text-sky-400 tabular-nums">
                    {carsRemoved.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-500 block">Cars Off the Road</span>
                </div>

                <div className="bg-slate-950/50 p-5 rounded-2xl border border-emerald-900/40 space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center mb-3">
                    <Trees className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] text-slate-400 block">Equal Carbon Offset</span>
                  <span className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                    {(treesEquivalent / 1000).toFixed(0)}k
                  </span>
                  <span className="text-[10px] text-slate-500 block">Mature Trees Planted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Pillars: Environmental, Social, Governance */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Corporate Governance
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              The Three Pillars of Our ESG Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Environmental Stewardship
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Avian safety radar systems and bird-deterrent blade markings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% waterless robotic panel cleaning in arid regions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Comprehensive recycling covenants for solar modules and LFP cells</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Social Responsibility & Communities
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Over 65% local workforce hiring during EPC construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Rural technical schools providing certified wind technician diplomas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero-Harm workplace safety culture with &gt;12M safe man-hours</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Robust Governance & Compliance
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Audited annually under ISO 9001, ISO 14001, and ISO 45001</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Transparent Scope 1, 2, and 3 emissions auditing for all project SPVs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Strict anti-bribery, ethics hotline, and whistleblower charters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold font-display text-white mb-3">
            Accelerate Your Net Zero Transition
          </h3>
          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
            Our ESG advisory and clean energy project teams work with corporate sustainability leaders to architect guaranteed carbon abatement programs.
          </p>
          <button
            onClick={onOpenRfp}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <span>Consult Our Decarbonization Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
