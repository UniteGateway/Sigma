import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { ASSETS } from '../data/assets';
import { Cpu, Activity, ShieldCheck, Wifi, Database, Terminal, ArrowRight, Zap, RefreshCw } from 'lucide-react';

interface TechnologyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate, onOpenRfp }) => {
  // Live simulated SCADA parameters
  const [gridFrequency, setGridFrequency] = useState(50.02);
  const [activeDispatchMW, setActiveDispatchMW] = useState(742.6);
  const [telemetryTick, setTelemetryTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGridFrequency(+(50 + (Math.random() * 0.08 - 0.04)).toFixed(3));
      setActiveDispatchMW(+(740 + (Math.random() * 6 - 3)).toFixed(1));
      setTelemetryTick((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src={ASSETS.scada}
            alt="Sigma QuantumGrid SCADA control center"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-3">
              Digital Platform · Sigma QuantumGrid™
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Intelligent Energy Management, SCADA & Real-Time Orchestration
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Renewable energy demands split-second digital synchronization. Sigma QuantumGrid™ is our proprietary platform integrating IoT edge sensors, Power Plant Controllers (PPC), and predictive AI models to maximize uptime and monetize every megawatt.
            </p>
          </div>
        </div>
      </section>

      {/* Live SCADA Telemetry Console Visualizer */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Sigma QuantumGrid™ Operations Telemetry (Live Feeds)
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                <span>Sync Cycle: {telemetryTick} · Latency: 14ms</span>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Active Dispatch</span>
                <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                  {activeDispatchMW} MW
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Real-time pooling flow</span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Grid Frequency</span>
                <span className="text-2xl font-bold font-mono text-sky-400 tabular-nums">
                  {gridFrequency} Hz
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Statutory Band: 49.90 - 50.05</span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">BESS Fleet SoC</span>
                <span className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                  84.2%
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Ready for evening peak peak</span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Fleet Availability SLA</span>
                <span className="text-2xl font-bold font-mono text-emerald-300 tabular-nums">
                  99.64%
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Contractual guaranteed</span>
              </div>
            </div>

            {/* Asset Node Architecture Status */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono pt-2">
              <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Wind Turbines: 218 Active</span>
                <span className="text-emerald-400 font-semibold">100% Online</span>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Solar Inverter Blocks: 420</span>
                <span className="text-emerald-400 font-semibold">Optimal Irradiance</span>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">BESS Liquid Chillers: 32 Enclosures</span>
                <span className="text-emerald-400 font-semibold">Thermal Delta &lt; 1.8°C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Modules */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
              Platform Features
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Engineered for Mission-Critical Utility Reliability
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Every software layer is ground-tested for high electromagnetic interference environments, sub-cycle response times, and compliance with IEC 60870-5-104 and DNP3 protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Power Plant Controller (PPC)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sub-second closed-loop regulation coordinating active power (P), reactive power (Q), and power factor at the point of common coupling (PCC) to meet strict grid interconnection codes.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-2">
                <li>· Automated Low-Voltage Ride-Through (LVRT)</li>
                <li>· Primary frequency droop control response &lt;200ms</li>
                <li>· Seamless reactive power compensation (Q at night)</li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Predictive AI Condition Monitoring
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Machine learning models analyzing high-frequency accelerometer vibrations, gearbox oil particle counts, and solar string I-V curve traces to flag mechanical anomalies weeks before failure occurs.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-2">
                <li>· Avoids catastrophic gearbox & bearing failures</li>
                <li>· Automated drone thermography hotspot triage</li>
                <li>· Reduces unscheduled maintenance expenses by up to 34%</li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                IEC 62443 Industrial Cybersecurity
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Air-gapped telemetry conduits, role-based hardware authentication tokens, and end-to-end cryptographic integrity protecting national grid infrastructure from malicious interception.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 pt-2">
                <li>· Hardware Security Module (HSM) encryption</li>
                <li>· Automated compliance audit logging</li>
                <li>· Redundant hot-standby cloud & on-premise failover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold font-display text-white mb-3">
            Integrate Your Assets into Sigma QuantumGrid™
          </h3>
          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
            Schedule a live technical walkthrough of our SCADA and Energy Management platform with our power systems team.
          </p>
          <button
            onClick={onOpenRfp}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <span>Request Digital Platform Demonstration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
