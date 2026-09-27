import React from 'react';
import { PageId } from '../types';
import { ASSETS } from '../data/assets';
import { Wind, Gauge, ShieldCheck, Activity, CheckCircle, ArrowRight, Zap, Layers } from 'lucide-react';

interface WindPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: (category?: string) => void;
}

export const WindPage: React.FC<WindPageProps> = ({ onNavigate, onOpenRfp }) => {
  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ASSETS.wind}
            alt="Utility scale wind turbine generator"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
              <Wind className="w-4 h-4" />
              <span>Energy Platform · Wind Energy Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Utility-Scale Wind Power Engineered for Maximum Generation
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Harnessing wind resources through utility-scale wind projects, wind farms, and integrated hybrid solutions. We deploy high-efficiency 3.X MW to 5.X MW class turbine platforms specifically optimized for low and medium wind regimes to ensure long-term, high-capacity generation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRfp('Utility-Scale Wind Energy')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Request Wind Resource Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                View Wind Installations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wind Turbine Tech Specs Bento Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-2">
              Technology Architecture
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Next-Generation 3.X MW – 5.X MW Wind Turbine Systems
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Engineered with extended rotor swept areas and hybrid concrete-steel towers reaching hub heights up to 160 meters, maximizing capacity factor even in Class III low-wind regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Low-Wind Optimization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Large rotor diameters (156m to 175m) paired with advanced aero-elastic trailing-edge serrations deliver lower cut-in speeds (3.0 m/s) and exceptional low-wind energy capture.
              </p>
              <div className="pt-2 text-xs font-mono font-semibold text-sky-700">
                +18% higher annual energy yield
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Hybrid Tower Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modular hybrid steel-concrete tower designs reaching 140m to 160m hub heights to tap into smoother, stronger upper-altitude wind streams with lower turbulence intensity.
              </p>
              <div className="pt-2 text-xs font-mono font-semibold text-sky-700">
                140m – 160m hub height options
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Continuous Drivetrain Monitoring</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct-drive and advanced geared drivetrains equipped with multi-axis vibration sensors, optical blade load sensing, and automatic temperature regulation.
              </p>
              <div className="pt-2 text-xs font-mono font-semibold text-sky-700">
                Predictive AI diagnostics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wind Project Lifecycle Delivery */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Full-Stack Scope
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              End-to-End Wind Farm Delivery & Operations
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              From the first meteorological mast to 25-year comprehensive operation and maintenance contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-lg font-bold text-slate-900 font-display">
                01. Wind Resource Assessment & Siting
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bankable high-resolution meteorological wind campaigns using ground-based LiDAR and calibrated 120m met masts. Complex terrain CFD wake loss modeling ensures optimal turbine spacing and minimal wake turbulence.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WAsP, WindPRO, and OpenFOAM micro-siting validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>P50, P75, and P90 generation certainty reports for project lenders</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-lg font-bold text-slate-900 font-display">
                02. Turnkey EPC & Civil/Electrical BoP
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized heavy crane logistics, specialized turbine foundation piling, 33kV internal underground reticulation, and construction of dedicated 220kV/400kV pooling substations with transmission lines.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Complete civil access roads, crane pads, and foundation pours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Turnkey substation GIS/AIS and high-voltage grid synchronization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-lg font-bold text-slate-900 font-display">
                03. Grid-Code & Frequency Control
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern full-converter wind turbines providing low-voltage ride-through (LVRT), high-voltage ride-through (HVRT), and dynamic reactive power compensation (STATCOM) to fulfill rigorous transmission grid codes.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Instantaneous synthetic inertia contribution during grid disturbances</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Power plant controller (PPC) active power curtailment control</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-lg font-bold text-slate-900 font-display">
                04. 25-Year Lifecycle Asset Stewardship
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive operations and maintenance contracts backed by contractual machine availability guarantees (&gt;99.5%). 24/7 remote monitoring, aerodynamic pitch optimization, and predictive oil health sampling.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Central SCADA control with automated technician dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Spare parts warehousing & major crane component insurance pools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wind Case Study */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-semibold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded border border-sky-800">
                Featured Wind Benchmark
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Western Ghats 350 MW Ridge Wind Farm
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Built across complex highland topography, this 350 MW wind farm utilizes 97 custom 3.6 MW low-wind turbines with 140m hybrid steel towers. Generating over 1.1 billion kWh of clean power annually for industrial consumers and the regional grid.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-400 block">Annual Output</span>
                  <span className="text-lg font-bold font-mono text-emerald-400">1,120 GWh</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Availability</span>
                  <span className="text-lg font-bold font-mono text-sky-400">99.7%</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">CO2 Offset</span>
                  <span className="text-lg font-bold font-mono text-white">680k Tons/yr</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
              <button
                onClick={() => onOpenRfp('Western Ghats 350 MW Wind Farm Model')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Request Wind Farm Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
