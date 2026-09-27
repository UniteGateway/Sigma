import React from 'react';
import { PageId } from '../types';
import { LEADERSHIP } from '../data/mockData';
import { ASSETS } from '../data/assets';
import { ShieldCheck, Target, Compass, Award, CheckCircle, ArrowRight, Zap, Globe, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenRfp }) => {
  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={ASSETS.scada}
            alt="Sigma Greentech engineering center"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">
              About Sigma Greentech Solutions · Clean-Tech Startup Platform
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Pioneering the Integrated Renewable Energy Platform
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Sigma Greentech Solutions is a modern, agile clean-energy startup company designed for the 2026+ market reality. We move beyond legacy OEM single-technology silos to engineer, build, and operate unified clean-power systems integrating Wind + Solar + BESS. While we bring the agility, modern digital thinking, and technology-agnostic mindset of an agile startup, our execution is powered by strategic delivery partners bringing over 20 years of combined experience delivering multi-GW utility projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('partners')}
                className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Our Strategic Partners & Consortium</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Core */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                  Our Vision
                </span>
                <h3 className="text-2xl font-bold font-display text-white mb-4">
                  To build a cleaner, smarter, and more reliable energy future.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We envision an energy ecosystem where renewable generation, energy storage, and intelligent digital management work together seamlessly to provide round-the-clock clean power at scale, displacing fossil baseload while delivering economic value.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
                Guiding corporate strategy through 2030 and beyond.
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
                  Our Mission
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                  Develop · Integrate · Deliver · Sustain
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  To accelerate the global adoption of renewable power through innovative, scalable, and commercially viable Wind, Solar, and BESS solutions engineered for long-term operational resilience.
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Deliver bankable clean energy assets with high capacity factors</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Eliminate intermittency bottlenecks through modular BESS storage</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Empower heavy industry with cost-effective Open Access PPAs</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
                Action-oriented engineering discipline.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategic Shift: Legacy OEM vs. Sigma Integrated Platform */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Industry Evolution
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Why the World Needs Integrated Clean Energy Platforms
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              The renewable landscape has fundamentally shifted. Standalone solar suffers from mid-day curtailment; standalone wind faces seasonal and hourly variability. Sigma integrates all modalities into a synchronized power plant.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-8 bg-slate-50/50">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-2">
                  The Legacy Model (Siloed OEMs)
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-4 font-display">
                  Fragmented Single-Technology Contracts
                </h4>
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Separate wind turbine and solar inverter contracts with finger-pointing during tripping.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Duplicate evacuation lines and double transmission pooling Capex.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>No battery storage co-location leading to curtailment during grid peak hours.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>CUF capped at 22-35%, requiring expensive thermal backup for industrial baseload.</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-emerald-50/30">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">
                  The Sigma Integrated Platform
                </span>
                <h4 className="text-lg font-bold text-emerald-950 mb-4 font-display">
                  Unified Wind + Solar + BESS + Digital EMS
                </h4>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Single-point turnkey accountability from land acquisition to 25-year performance SLA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Shared 220kV / 400kV evacuation infrastructure cutting grid Capex by up to 28%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Integrated containerized LFP BESS for firm RTC dispatch and ancillary grid support.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Achieves 60-70%+ Capacity Utilization Factors, meeting true continuous industrial demand.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Leadership Team
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Senior Energy Infrastructure Pioneers
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Our executive board brings together decades of hands-on delivery experience across gigawatt-scale wind farms, solar EPC, electrochemical storage, and grid automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((leader, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 font-display font-bold text-xl flex items-center justify-center mb-4">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    {leader.name}
                  </h4>
                  <span className="text-xs font-semibold text-emerald-700 block mt-0.5">
                    {leader.role}
                  </span>
                  <span className="text-[11px] text-slate-400 block mb-3">
                    {leader.department}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
            Partner With Sigma for Your Decarbonization Journey
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
            Whether you are an energy-intensive industrial corporation, a utility procuring firm RTC green power, or an institutional investor, we deliver bankable clean energy solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenRfp}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
            >
              Consult Our Project Engineers
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-colors"
            >
              Explore Our Project Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
