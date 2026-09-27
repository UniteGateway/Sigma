import React, { useState } from 'react';
import { Zap, Sun, Wind, BatteryCharging, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HybridEnergyCalculatorProps {
  onRequestProposal?: (config: { windMW: number; solarMW: number; bessMWh: number; sector: string }) => void;
}

export const HybridEnergyCalculator: React.FC<HybridEnergyCalculatorProps> = ({ onRequestProposal }) => {
  const [loadMW, setLoadMW] = useState<number>(50);
  const [windShare, setWindShare] = useState<number>(45);
  const [solarShare, setSolarShare] = useState<number>(45);
  const [bessDurationHours, setBessDurationHours] = useState<number>(4);
  const [sector, setSector] = useState<string>('Heavy Industry / Metallurgy');

  // Computed values
  const windCapacityMW = Math.round(loadMW * (windShare / 100) * 1.8);
  const solarCapacityMWp = Math.round(loadMW * (solarShare / 100) * 1.6);
  const bessCapacityMW = Math.round(loadMW * 0.5);
  const bessCapacityMWh = bessCapacityMW * bessDurationHours;

  // Real-world hybrid modeling algorithms
  // Standalone solar CUF ~ 24%, Standalone wind CUF ~ 35%
  // Co-located hybrid + BESS RTC factor
  const baseRTC = Math.min(88, Math.round(
    (windShare * 0.42) + (solarShare * 0.28) + (bessDurationHours * 5.2)
  ));
  const effectiveCUF = Math.min(72, Math.round(32 + (windShare * 0.22) + (bessDurationHours * 2.8)));
  const annualMWh = Math.round(loadMW * 8760 * (baseRTC / 100));
  const co2AvoidedTons = Math.round(annualMWh * 0.82); // 0.82 metric tons CO2 / MWh grid baseline
  const estimatedSavings = Math.round(annualMWh * 18); // ~$18-25 USD / MWh tariff difference

  // 24-Hour simulation data points
  // Hour 0 to 23
  const hours = Array.from({ length: 24 }, (_, i) => i);

  // Solar bell curve peaked at 12:00
  const getSolarOutput = (h: number) => {
    if (h < 6 || h > 18) return 0;
    const peak = solarCapacityMWp;
    const normalized = Math.sin(((h - 6) / 12) * Math.PI);
    return Math.round(peak * normalized);
  };

  // Wind pattern typically stronger in late afternoon and night
  const getWindOutput = (h: number) => {
    const base = windCapacityMW * 0.45;
    const variation = Math.sin((h / 24) * 2 * Math.PI + 3.5) * (windCapacityMW * 0.25);
    return Math.max(5, Math.round(base + variation));
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-2xl mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2 tracking-wide uppercase">
          <Zap className="w-3.5 h-3.5" />
          <span>Interactive Hybrid Architecture Simulator</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white">
          Model Your Round-the-Clock (RTC) Renewable Transition
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          Test real-world complementary generation curves. Combine Wind, Solar, and BESS to discover how Sigma turns intermittent power into dispatchable, high-CUF green energy.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6 bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80">
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span>Facility Load Demand</span>
              <span className="font-mono text-emerald-400 font-bold text-sm">{loadMW} MW Continuous</span>
            </label>
            <input
              type="range"
              min={10}
              max={250}
              step={5}
              value={loadMW}
              onChange={(e) => setLoadMW(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>10 MW</span>
              <span>100 MW</span>
              <span>250 MW</span>
            </div>
          </div>

          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-sky-400" />
                <span>Wind Generation Share</span>
              </span>
              <span className="font-mono text-sky-400 font-bold text-sm">{windShare}% ({windCapacityMW} MW)</span>
            </label>
            <input
              type="range"
              min={10}
              max={80}
              step={5}
              value={windShare}
              onChange={(e) => setWindShare(Number(e.target.value))}
              className="w-full accent-sky-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Solar Generation Share</span>
              </span>
              <span className="font-mono text-amber-400 font-bold text-sm">{solarShare}% ({solarCapacityMWp} MWp)</span>
            </label>
            <input
              type="range"
              min={10}
              max={80}
              step={5}
              value={solarShare}
              onChange={(e) => setSolarShare(Number(e.target.value))}
              className="w-full accent-amber-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                <span>BESS Duration & Sizing</span>
              </span>
              <span className="font-mono text-emerald-400 font-bold text-sm">{bessCapacityMWh} MWh ({bessDurationHours}h)</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[2, 4, 6, 8].map((hours) => (
                <button
                  key={hours}
                  type="button"
                  onClick={() => setBessDurationHours(hours)}
                  className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                    bessDurationHours === hours
                      ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {hours} Hours
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Industrial / Sector Application
            </label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 outline-none focus:border-emerald-500"
            >
              <option value="Heavy Industry / Metallurgy">Heavy Industry / Metallurgy (Baseload)</option>
              <option value="Chemicals & Fertilizers">Chemicals & Refining (Continuous Process)</option>
              <option value="Hyperscale AI & Data Centers">Hyperscale AI & Data Centers (Zero Downtime)</option>
              <option value="Automotive & Component Hubs">Automotive & Precision Manufacturing</option>
              <option value="State Grid & Discom Offtake">Utility & State Discom Power Offtake</option>
            </select>
          </div>
        </div>

        {/* Output & 24h Graph Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Key Output Scoreboard */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">RTC Reliability</span>
              <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                {baseRTC}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Round-the-clock match</span>
            </div>

            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Hybrid CUF Factor</span>
              <span className="text-2xl font-bold font-mono text-sky-400 tabular-nums">
                {effectiveCUF}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">vs 24% solo solar</span>
            </div>

            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Annual Green Power</span>
              <span className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                {(annualMWh / 1000).toFixed(0)}k
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">MWh Generated</span>
            </div>

            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Annual CO2 Saved</span>
              <span className="text-2xl font-bold font-mono text-emerald-300 tabular-nums">
                {(co2AvoidedTons / 1000).toFixed(0)}k
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Metric Tons</span>
            </div>
          </div>

          {/* Interactive 24-Hour Dispatch Profile Visualization */}
          <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-semibold text-slate-300">24-Hour Generation & Storage Profile</span>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Solar
                </span>
                <span className="flex items-center gap-1.5 text-sky-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" /> Wind
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" /> BESS Discharge
                </span>
              </div>
            </div>

            {/* Visualizer Bar Chart */}
            <div className="h-44 flex items-end gap-1.5 pt-4 pb-2 border-b border-slate-800">
              {hours.map((h) => {
                const solar = getSolarOutput(h);
                const wind = getWindOutput(h);
                // BESS discharges when solar drops (18:00-22:00 or morning 05:00-08:00)
                const isBessDischarge = (h >= 18 && h <= 22) || (h >= 5 && h <= 7);
                const bess = isBessDischarge ? bessCapacityMW * 0.7 : 0;
                const total = solar + wind + bess;
                const maxScale = (solarCapacityMWp + windCapacityMW + bessCapacityMW) * 0.8 || 1;
                const heightPct = Math.min(100, Math.max(12, Math.round((total / maxScale) * 100)));

                return (
                  <div key={h} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                    {/* Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute -top-12 bg-slate-800 text-[10px] text-white py-1 px-2 rounded shadow-lg whitespace-nowrap z-20 transition-opacity">
                      {h}:00 - Total: {Math.round(total)} MW (S:{solar} W:{wind} B:{Math.round(bess)})
                    </div>

                    <div
                      style={{ height: `${heightPct}%` }}
                      className="w-full rounded-t-sm flex flex-col justify-end overflow-hidden transition-all duration-300"
                    >
                      {/* BESS chunk */}
                      {bess > 0 && <div className="bg-emerald-400 w-full" style={{ height: '35%' }} />}
                      {/* Solar chunk */}
                      {solar > 0 && <div className="bg-amber-400 w-full" style={{ height: '40%' }} />}
                      {/* Wind chunk */}
                      <div className="bg-sky-400 w-full flex-1" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between text-[10px] text-slate-500 pt-2 font-mono">
              <span>00:00 (Night Wind)</span>
              <span>06:00 (Sunrise)</span>
              <span>12:00 (Peak Solar)</span>
              <span>18:00 (Sunset / BESS)</span>
              <span>23:00</span>
            </div>
          </div>

          {/* Action Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-sky-950/40 border border-emerald-900/50">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Simulated setup saves ~${(estimatedSavings / 1000000).toFixed(2)}M in annual power costs.</span>
            </div>
            <button
              onClick={() => onRequestProposal?.({ windMW: windCapacityMW, solarMW: solarCapacityMWp, bessMWh: bessCapacityMWh, sector })}
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>Get Detailed Feasibility Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
