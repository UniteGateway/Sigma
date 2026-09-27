import React from 'react';
import { PageId } from '../types';
import { ASSETS } from '../data/assets';
import { HybridEnergyCalculator } from '../components/HybridEnergyCalculator';
import { Zap, Wind, Sun, BatteryCharging, CheckCircle, ArrowRight, TrendingUp, Cpu, Layers } from 'lucide-react';

interface HybridPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: (category?: string) => void;
}

export const HybridPage: React.FC<HybridPageProps> = ({ onNavigate, onOpenRfp }) => {
  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ASSETS.hero}
            alt="Integrated hybrid renewable energy park with wind, solar, and BESS storage"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
              <Zap className="w-4 h-4" />
              <span>Energy Platform · Hybrid Renewable Energy</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Combining Wind + Solar + BESS into Firm Dispatchable Power
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Combining wind + solar + BESS to optimize renewable generation profiles, improve utilization, and create more dependable clean-energy systems. We turn intermittent green resources into predictable, round-the-clock (RTC) power that rivals thermal baseload.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRfp('Hybrid (Wind + Solar + BESS)')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Request Hybrid Plant Feasibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                View Hybrid Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hybrid: Complementary Diurnal Profiles */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              The Complementary Advantage
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Why Wind + Solar + BESS Outperforms Standalone Assets
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Solar generates exclusively during daylight hours, often causing midday grid congestion. Wind generates strongest during night, early mornings, and seasonal monsoons. When co-located with containerized battery storage, they form a self-balancing power plant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">65%+ Capacity Utilization Factor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standalone solar tops out around 22–25% CUF, and wind at 32–38%. A synchronized hybrid project achieves 60% to 75%+ CUF, providing dependable round-the-clock power.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Shared Grid Evacuation Infrastructure</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sharing high-voltage 220kV or 400kV pooling substations and transmission corridors reduces balance of system (BOS) capital costs by 20% to 28% per installed megawatt.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Firm Dispatchable Power (FDRE)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guaranteed peak-hour availability contracts. The integrated BESS buffers excess energy during peak generation and injects power during evening demand spikes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Simulator Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              Live Architecture Simulator
            </span>
            <h2 className="text-3xl font-extrabold font-display text-white">
              Simulate Your Hybrid Resource Sizing
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Adjust load, wind, solar, and battery duration parameters to test 24-hour generation curve smoothing.
            </p>
          </div>

          <HybridEnergyCalculator
            onRequestProposal={(config) => {
              onOpenRfp(`Hybrid (${config.windMW}MW Wind + ${config.solarMW}MW Solar + ${config.bessMWh}MWh BESS)`);
            }}
          />
        </div>
      </section>

      {/* Featured Hybrid Landmark */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                Landmark Hybrid Installation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Kutch 920 MW Integrated Renewable Complex
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                480 MW Wind + 320 MWp Solar + 120 MW / 240 MWh BESS. Delivering continuous round-the-clock clean electricity to national grid substations with unified Sigma QuantumGrid™ SCADA dispatch.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-400 block">CUF Delivered</span>
                  <span className="text-lg font-bold font-mono text-emerald-400">62.4%</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">CO2 Abated</span>
                  <span className="text-lg font-bold font-mono text-sky-400">1.42M Tons/yr</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Grid Voltage</span>
                  <span className="text-lg font-bold font-mono text-white">400 kV GIS</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <button
                onClick={() => onOpenRfp('Kutch Mega Hybrid Reference Model')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Request Case Study Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
