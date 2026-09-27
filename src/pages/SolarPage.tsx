import React from 'react';
import { PageId } from '../types';
import { ASSETS } from '../data/assets';
import { Sun, ShieldCheck, Zap, Compass, CheckCircle, ArrowRight, BarChart3, Droplets } from 'lucide-react';

interface SolarPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: (category?: string) => void;
}

export const SolarPage: React.FC<SolarPageProps> = ({ onNavigate, onOpenRfp }) => {
  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ASSETS.solar}
            alt="Utility scale solar photovoltaic tracker park"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              <Sun className="w-4 h-4" />
              <span>Energy Platform · Solar Energy Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              High-Yield Solar Photovoltaic Systems Built for Maximum LCOE Efficiency
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Developing and delivering utility-scale, commercial & industrial (C&I), and distributed solar solutions with a focus on efficient generation and dependable project performance. We combine N-Type TOPCon bifacial modules with terrain-adaptive single-axis trackers to maximize solar harvest.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRfp('Solar Photovoltaic (Utility & C&I)')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Request Solar Project Feasibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                View Solar Installations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Tech Innovations Bento Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              Engineering Advantages
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              State-of-the-Art Solar Photovoltaic Engineering
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Our solar engineering integrates Tier-1 high-density cell architectures, smart astronomical tracker algorithms, and zero-water robotic cleaning systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Bifacial N-Type TOPCon Modules</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dual-glass bifacial modules capturing direct sunlight and ground albedo reflection with up to 80% bifaciality factor, delivering ultra-low degradation (&lt;0.4% annually) over 30 years.
              </p>
              <div className="pt-2 text-xs font-mono font-semibold text-amber-700">
                22.8%+ Module Efficiency
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Smart Single-Axis Astronomical Trackers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Self-powered, independent-row tracking systems using 3D astronomical algorithms with true 3D backtracking that dynamically adjusts tilt on undulating terrains to eliminate inter-row shading.
              </p>
              <div className="pt-2 text-xs font-mono font-semibold text-amber-700">
                +22% to 25% Yield Over Fixed Tilt
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Waterless Robotic Cleaning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated night-crawling robotic wipers eliminating dust and soiling without consuming scarce groundwater resources in desert regions, preserving peak generation capability year-round.
              </p>
              <div className="pt-2 text-xs font-mono font-semibold text-amber-700">
                100% Water Conservation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Models: Utility-Scale vs Commercial & Industrial (C&I) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Delivery Models
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Utility Solar Parks & Commercial Open Access Solutions
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Tailored contracting structures aligned with client financing and balance sheet objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                Utility-Scale Solar Parks (100 MW to 1 GW+)
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Large-Scale Central Generating Assets
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Turnkey development and EPC for state transmission utilities, national grids, and institutional renewable funds. We handle continuous thousands-of-acres land banking, civil grading, high-voltage pooling substations up to 400kV, and dedicated transmission lines.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>1500V DC central string inverter blocks with SCADA monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Strict environmental, geotechnical, and drainage engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>25-year comprehensive performance and availability warranties</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-mono font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">
                Commercial & Industrial (C&I)
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Open Access & Group Captive Power
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct clean power supply to energy-intensive corporate facilities (manufacturing plants, auto hubs, chemicals, data centers). We deliver solar electricity via inter-state and intra-state open access grids, cutting commercial energy tariffs by up to 40% vs state utility rates.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Zero Capex Opex / RESCO models with long-term fixed tariffs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Group Captive 26% equity structure for full cross-subsidy surcharge waiver</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Seamless bilateral billing and monthly energy banking management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solar Park Benchmark */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800">
                Featured Solar Benchmark
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Thar Mega Horizon 600 MWp Solar Park
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineered for extreme desert environments with ambient summer temperatures exceeding 48°C. Features 1.1 million bifacial TOPCon modules mounted on AI-driven single-axis trackers with fully automated waterless robotic cleaning.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-400 block">Annual Output</span>
                  <span className="text-lg font-bold font-mono text-amber-400">1,240 GWh</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Water Conserved</span>
                  <span className="text-lg font-bold font-mono text-sky-400">120M Liters/yr</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">CO2 Abated</span>
                  <span className="text-lg font-bold font-mono text-white">890k Tons/yr</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
              <button
                onClick={() => onOpenRfp('Thar 600 MWp Solar Park Technical Model')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Request Solar EPC Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
