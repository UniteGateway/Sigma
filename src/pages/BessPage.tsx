import React from 'react';
import { PageId } from '../types';
import { ASSETS } from '../data/assets';
import { BatteryCharging, ShieldCheck, Zap, Activity, Cpu, Flame, CheckCircle, ArrowRight, Gauge } from 'lucide-react';

interface BessPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: (category?: string) => void;
}

export const BessPage: React.FC<BessPageProps> = ({ onNavigate, onOpenRfp }) => {
  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ASSETS.bess}
            alt="Utility scale Battery Energy Storage System (BESS) facility"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
              <BatteryCharging className="w-4 h-4" />
              <span>Energy Platform · Battery Energy Storage Systems (BESS)</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Grid-Scale Energy Storage Engineered for Flexibility and Reliability
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Battery Energy Storage Systems designed to store renewable energy, manage intermittency, support peak demand, and enable flexible, dependable power delivery. Modern BESS architectures integrate battery management, power conversion, energy-management, and SCADA systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRfp('Battery Energy Storage System (BESS)')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Request BESS Sizing & Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                View Storage Deployments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Layer Architecture of Modern BESS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              System Integration
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              The Four Pillars of Sigma's BESS Architecture
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Rather than assembling disparate third-party modules, we deliver fully synchronized, containerized energy storage systems engineered for maximum round-trip efficiency (RTE) and lifetime thermal balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Layer 1</span>
              <h3 className="text-base font-bold text-slate-900 font-display">Battery Chemistry & Enclosure</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prismatic Lithium Iron Phosphate (LiFePO4 / LFP) cells housed in IP55 outdoor enclosures. Direct liquid cooling maintains cell-to-cell thermal delta below 2.5°C.
              </p>
              <div className="pt-2 text-[11px] font-mono font-semibold text-slate-700">
                6,000+ Cycle Life @ 80% DoD
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">Layer 2</span>
              <h3 className="text-base font-bold text-slate-900 font-display">Battery Management (BMS)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Three-tier digital BMS tracking cell voltages, temperatures, insulation resistance, and state-of-health (SoH) in real time with millisecond fault isolation.
              </p>
              <div className="pt-2 text-[11px] font-mono font-semibold text-slate-700">
                Millisecond Safety Isolation
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Layer 3</span>
              <h3 className="text-base font-bold text-slate-900 font-display">Power Conversion (PCS)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bidirectional 1500V DC four-quadrant inverters providing ultra-fast &lt;20ms four-quadrant response, active and reactive power dispatch, and black start capability.
              </p>
              <div className="pt-2 text-[11px] font-mono font-semibold text-slate-700">
                98.8% Peak Inverter Efficiency
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">Layer 4</span>
              <h3 className="text-base font-bold text-slate-900 font-display">Energy Management & SCADA</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Autonomous state-of-charge (SoC) management algorithms, peak shaving triggers, ancillary market dispatch, and seamless integration with national load dispatch centers.
              </p>
              <div className="pt-2 text-[11px] font-mono font-semibold text-slate-700">
                Automated Market Optimization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Support Applications & Durations */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Grid & Commercial Applications
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Versatile Storage Durations for Every Operational Need
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Configured in 2-hour, 4-hour, and 8-hour modular configurations tailored to specific revenue streams and grid code duties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                2-Hour Duration (Fast Response)
              </span>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                Frequency Regulation & Ramp Control
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed for transmission utilities and renewable developers to eliminate curtailment, smooth steep solar duck curve ramps, and provide primary frequency containment reserves (FCR).
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sub-second &lt;20ms inertia response</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Voltage stabilization and VAR support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-mono font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                4-Hour Duration (Firm Shifting)
              </span>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                Peak Shaving & Evening Arbitrage
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The gold standard for hybrid clean energy projects. Absorbs excess mid-day solar generation and discharges during expensive 4-hour evening industrial peak tariff windows.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Displaces fossil peaking plants</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>High capacity utilization for C&I off-takers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                8-Hour Duration (Long Duration)
              </span>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                Deep RTC & Microgrid Resilience
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enables true 24/7 Round-the-Clock renewable power delivery for heavy continuous industrial consumers, islanded microgrids, and remote critical infrastructure without diesel backup.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Seamless microgrid black-start capability</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Multi-day contingency ride-through</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Safety & Standards Compliance */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">
                Safety Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                Zero-Propagation Multi-Barrier Fire Safety
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Safety is non-negotiable. Every Sigma BESS installation is engineered and independently certified to global life-safety and thermal containment standards.
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>UL 9540A unit-level and installation-level thermal runaway certification</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>NFPA 855 compliant deflagration venting and physical separation clearances</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Internal gas detection (CO / H2) + clean-agent aerosol suppression</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Flame className="w-4 h-4" />
                <span>Thermal Runaway Containment Matrix</span>
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                Multi-Stage Incident Prevention
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                From micro-level cell separators and individual cell fuse disconnects to container-level flood barriers, our battery packs are engineered so an isolated thermal event cannot propagate to adjacent cells or racks.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Target Response Time:</span>
                <span className="font-mono font-bold text-emerald-400">&lt; 15 milliseconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured BESS Benchmark */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                Featured BESS Benchmark
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                MetroGrid 100 MW / 400 MWh Utility BESS Substation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tamil Nadu’s largest utility-scale standalone battery storage facility providing primary frequency control, voltage stabilization, and 4-hour evening peak shaving to the regional transmission corridor.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-400 block">Total Energy</span>
                  <span className="text-lg font-bold font-mono text-emerald-400">400 MWh</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Response Time</span>
                  <span className="text-lg font-bold font-mono text-sky-400">&lt; 20 ms</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Homes Supported</span>
                  <span className="text-lg font-bold font-mono text-white">240,000</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
              <button
                onClick={() => onOpenRfp('MetroGrid 100 MW / 400 MWh BESS Model')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Request BESS Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
