import React, { useState } from 'react';
import { PageId } from '../types';
import { ASSETS } from '../data/assets';
import {
  METRICS,
  ENERGY_PLATFORM_PILLARS,
  LIFECYCLE_STEPS,
  SECTOR_SOLUTIONS,
  PROJECTS,
} from '../data/mockData';
import { HybridEnergyCalculator } from '../components/HybridEnergyCalculator';
import {
  ArrowRight,
  Wind,
  Sun,
  BatteryCharging,
  Zap,
  CheckCircle,
  Play,
  Pause,
  Layers,
  Cpu,
  Shield,
  ArrowUpRight,
  ChevronRight,
  Globe,
  Sliders,
  TrendingUp,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: (category?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenRfp }) => {
  const [mediaMode, setMediaMode] = useState<'video' | 'image'>('video');
  const [currentVideoClip, setCurrentVideoClip] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [activePlatformTab, setActivePlatformTab] = useState<string>('wind');
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const videoClips = [
    { title: 'Wind Turbines Loop', src: ASSETS.cleanEnergyVideo },
    { title: 'Solar Farm Sunset', src: ASSETS.solarVideo },
  ];

  // Ensure autoplay on mount with catch for browser policies
  React.useEffect(() => {
    if (mediaMode === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback gracefully if strict autoplay prevents it
        setIsVideoPlaying(false);
      });
    }
  }, [mediaMode, currentVideoClip]);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-950">
        {/* Layer 1: Base high-resolution poster image (always present as instant fallback) */}
        <img
          src={ASSETS.hero}
          alt="Sigma Greentech Integrated Clean Energy Platform with Wind Turbines, Solar Panels, and BESS Storage"
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            mediaMode === 'video' ? 'opacity-25 filter brightness-80' : 'opacity-40 filter brightness-90 scale-105'
          }`}
        />

        {/* Layer 2: Automatic Loop-Playing Background Video */}
        {mediaMode === 'video' && (
          <video
            ref={videoRef}
            key={currentVideoClip}
            autoPlay
            loop
            muted
            playsInline
            poster={ASSETS.hero}
            className="absolute inset-0 w-full h-full object-cover opacity-45 filter brightness-75 scale-105 transition-opacity duration-1000 pointer-events-none"
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          >
            <source src={videoClips[currentVideoClip].src} type="video/mp4" />
            <source src={ASSETS.videoLoop} type="video/mp4" />
          </video>
        )}

        {/* Ambient Gradient Scrims for maximum readability & high-contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-transparent pointer-events-none" />

        {/* Floating Top-Right Video / Image Loop Controller */}
        <div className="absolute top-28 right-6 z-20 hidden md:flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-1.5 shadow-xl text-xs">
          <button
            onClick={() => setMediaMode('video')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              mediaMode === 'video'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Video Loop
          </button>
          <button
            onClick={() => setMediaMode('image')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              mediaMode === 'image'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Ultra HD Image
          </button>

          {mediaMode === 'video' && (
            <>
              <span className="w-px h-4 bg-slate-800" />
              <button
                onClick={toggleVideoPlayback}
                className="p-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                title={isVideoPlaying ? 'Pause Background Loop' : 'Play Background Loop'}
              >
                {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>
              <button
                onClick={() => setCurrentVideoClip((prev) => (prev === 0 ? 1 : 0))}
                className="px-2 py-1 text-[11px] text-slate-400 hover:text-slate-200 transition-colors"
                title="Switch scene"
              >
                Next Scene: {currentVideoClip === 0 ? 'Solar' : 'Wind'}
              </button>
            </>
          )}
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CLEAN-TECH STARTUP PLATFORM · BACKED BY 20+ YEARS PARTNER PEDIGREE</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-[1.08] text-balance">
              CLEAN ENERGY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                ENGINEERED FOR
              </span>{' '}
              TOMORROW.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
              Wind · Solar · Storage · Energy Management
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Sigma Greentech Solutions is an agile, next-generation renewable-energy solutions company. While we operate with clean-tech startup velocity and technology-agnostic modern thinking, our project execution is powered by a strategic delivery consortium bringing over 20 years of combined experience delivering multi-GW clean energy and extra-high-voltage grid projects.
            </p>

            {/* Hero CTAs & Video Toggle */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('solutions')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 group"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-all flex items-center gap-2"
              >
                <span>Our Projects</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>

              {/* Ambient Video Mode Toggle */}
              <div className="flex items-center gap-2 sm:ml-auto">
                <button
                  onClick={toggleVideoPlayback}
                  className="px-4 py-3.5 bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white text-xs font-medium rounded-xl border border-slate-800 transition-all flex items-center gap-2"
                  title={isVideoPlaying ? 'Pause ambient video loop' : 'Resume ambient video loop'}
                >
                  {isVideoPlaying ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <Pause className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Video Loop Playing</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                      <span>Play Video Loop</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-md hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {METRICS.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-bold text-2xl lg:text-3xl text-white font-mono tabular-nums">
                    {metric.value}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Metrics block (below hero on small screens) */}
      <section className="sm:hidden bg-slate-950 text-white px-4 py-6 border-b border-slate-800">
        <div className="grid grid-cols-2 gap-4">
          {METRICS.map((metric, i) => (
            <div key={i} className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-display font-bold text-xl text-white font-mono tabular-nums">
                {metric.value}
              </span>
              <div className="text-[11px] font-semibold text-emerald-400 mt-0.5">{metric.label}</div>
              <div className="text-[10px] text-slate-400">{metric.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. OUR ENERGY PLATFORM (Wind | Solar | BESS | Hybrid) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Our Energy Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
              Engineered Clean Energy Systems Designed for Long-Term Performance
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We orchestrate the core building blocks of the renewable transition into integrated, high-availability energy assets.
            </p>
          </div>

          {/* Platform Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENERGY_PLATFORM_PILLARS.map((pillar) => {
              const iconMap: Record<string, React.ReactNode> = {
                wind: <Wind className="w-5 h-5 text-sky-500" />,
                solar: <Sun className="w-5 h-5 text-amber-500" />,
                bess: <BatteryCharging className="w-5 h-5 text-emerald-500" />,
                hybrid: <Zap className="w-5 h-5 text-emerald-600" />,
              };

              return (
                <div
                  key={pillar.id}
                  className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Media Thumbnail */}
                    <div className="h-44 rounded-xl overflow-hidden mb-5 relative">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 p-2 bg-slate-950/80 backdrop-blur-md rounded-lg text-white">
                        {iconMap[pillar.id]}
                      </div>
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/85 backdrop-blur-md rounded-md text-[11px] font-mono text-emerald-400 font-semibold">
                        {pillar.stats}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-emerald-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600 mt-1 mb-2">
                      {pillar.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {pillar.description}
                    </p>

                    <ul className="space-y-1.5 mb-6">
                      {pillar.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onNavigate(pillar.id as PageId)}
                    className="w-full py-2.5 px-4 bg-slate-100 hover:bg-emerald-500 text-slate-800 hover:text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH: ONE ENERGY PLATFORM. MULTIPLE POSSIBILITIES. */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white text-balance">
              One Energy Platform. Multiple Possibilities.
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Renewable energy is no longer only about generating electricity. It is about generating, storing, managing, and delivering energy intelligently.
            </p>
          </div>

          {/* Architectural Flow Diagram: WIND -> SOLAR -> STORAGE -> ENERGY MANAGEMENT */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative group hover:border-sky-500 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center mb-4">
                <Wind className="w-5 h-5" />
              </div>
              <span className="text-xs text-sky-400 font-bold uppercase tracking-wider block">Stage 1</span>
              <h4 className="text-lg font-bold text-white font-display mt-1">WIND</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                High-capacity nighttime & monsoon generation profiles capturing continuous kinetic wind resources.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative group hover:border-amber-500 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Stage 2</span>
              <h4 className="text-lg font-bold text-white font-display mt-1">SOLAR</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Daylight peak photovoltaic generation with bifacial modules and single-axis tracking optimization.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative group hover:border-emerald-500 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center mb-4">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">Stage 3</span>
              <h4 className="text-lg font-bold text-white font-display mt-1">STORAGE (BESS)</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Absorbing surplus generation, smoothing ramp rates, and discharging during evening peak demand windows.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative group hover:border-teal-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-950 text-teal-400 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block">Stage 4</span>
              <h4 className="text-lg font-bold text-white font-display mt-1">ENERGY MANAGEMENT</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                QuantumGrid™ SCADA dispatching multi-megawatt power flows with predictive analytics and grid compliance.
              </p>
            </div>
          </div>

          {/* Interactive Calculator Section embedded */}
          <div className="pt-4">
            <HybridEnergyCalculator
              onRequestProposal={(config) => {
                onOpenRfp(`Hybrid (${config.windMW}MW Wind + ${config.solarMW}MW Solar + ${config.bessMWh}MWh BESS)`);
              }}
            />
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO: END-TO-END CAPABILITIES */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
              Full Lifecycle Delivery from Resource Feasibility to 25-Year Asset Stewardship
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Sigma unites development expertise, turnkey EPC engineering, battery storage integration, and long-term asset operations under a single responsible entity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Renewable Energy Development</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                From micro-siting and LiDAR resource assessment to land acquisition, environmental approvals, evacuation connectivity, and PPA tariff structuring.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Engineering & Project Delivery (EPC)</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Turnkey civil, mechanical, and electrical engineering, high-voltage pooling substations, transmission lines, and rigorous commissioning protocols.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Wind + Solar Hybrid Integration</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Intelligently combining complementary renewable resources to optimize generation utilization factors and minimize shared transmission Capex.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Battery Energy Storage (BESS)</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Utility-scale BESS for energy shifting, peak management, frequency regulation, and grid support, integrating advanced BMS, PCS, and fire safety systems.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Digital Energy Management</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Sigma QuantumGrid™ digital monitoring and Power Plant Controller (PPC) software providing real-time visibility, automated dispatch, and grid compliance.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Asset Operations & O&M</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                24/7 Remote Operations Center, predictive drone thermography, scheduled overhauls, and performance guarantees to sustain 99%+ availability over 25 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS FOR SECTORS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
                Tailored Clean Energy Strategies
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
                Solutions for Every Scale of the Modern Energy Transition
              </h2>
            </div>
            <button
              onClick={() => onNavigate('solutions')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>View All Sector Profiles</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SECTOR_SOLUTIONS.slice(0, 3).map((sol) => (
              <div
                key={sol.id}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    {sol.clientTypes}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-display mb-3">
                    {sol.title}
                  </h3>
                  <div className="space-y-3 text-xs text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-800 block">Energy Challenge:</span>
                      <p className="mt-0.5">{sol.challenge}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 block">Sigma Solution:</span>
                      <p className="mt-0.5">{sol.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700">
                    {sol.benefits.split(',')[0]}
                  </span>
                  <button
                    onClick={() => onOpenRfp(sol.title)}
                    className="p-1.5 text-slate-700 hover:text-emerald-600"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PROJECT LIFECYCLE (1. Identify to 6. Operate) */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              Project Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white text-balance">
              Disciplined Execution Across Every Milestone
            </h2>
            <p className="mt-3 text-base text-slate-400">
              A structured six-stage process guaranteeing on-time grid synchronization, statutory compliance, and long-term asset bankability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIFECYCLE_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/80 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-display font-extrabold text-emerald-400/30 group-hover:text-emerald-400 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800">
                    Stage {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5. OUR STRATEGIC PARTNERS & EXECUTION CONSORTIUM */}
      <section className="py-20 lg:py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                Execution Network & Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white text-balance">
                Our Strategic Partners & Execution Consortium
              </h2>
              <p className="mt-3 text-sm text-slate-400 max-w-2xl leading-relaxed">
                As a next-generation clean-energy solutions startup, Sigma combines technology-agnostic agility and digital energy management with our delivery partners' 20+ years of combined experience executing utility and GW-scale renewable projects.
              </p>
            </div>
            <button
              onClick={() => onNavigate('partners')}
              className="mt-4 md:mt-0 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore Partner Ecosystem</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                22+ Years · 6.2 GW Executed
              </span>
              <h4 className="text-base font-bold text-white font-display">
                Heavy Civil & Substation EPC Consortium
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specialized balance of plant (BoP) civil contractors, turbine foundation piling teams, and 220kV/400kV extra-high-voltage pooling substation specialists with 20+ years of flawless grid synchronization.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-semibold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                20+ Years · 4.8 GW Deployed
              </span>
              <h4 className="text-base font-bold text-white font-display">
                Tier-1 Wind & Solar Technology Alliances
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct manufacturing relationships with leading 3.X–5.X MW wind turbine OEMs and N-type TOPCon bifacial solar manufacturers, giving our projects factory-backed warranties and priority allocation.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-semibold text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                15+ Years · 3.4 GWh Integrated
              </span>
              <h4 className="text-base font-bold text-white font-display">
                Grid-Scale BESS Storage Alliance
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Liquid-cooled containerized LiFePO4 battery storage, bidirectional PCS inverters, and UL 9540A certified thermal management engineered to smooth renewable intermittency and deliver firm dispatchable power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 500 MW PROJECT PIPELINE SHOWCASE */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
                500 MW Project Pipeline
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
                Active Clean Energy Projects Under Development
              </h2>
              <p className="mt-3 text-sm text-slate-600 max-w-2xl leading-relaxed">
                Sigma Greentech Solutions is actively engineering and advancing a 500 MW project pipeline across Wind, Bifacial Solar, Battery Storage, and Hybrid complexes—developed with startup agility and delivered through our 20+ years consortium partners.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="mt-4 md:mt-0 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Explore 500 MW Pipeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md rounded-md text-[11px] font-semibold text-emerald-400">
                      {proj.category}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md rounded-md text-[11px] font-mono font-bold text-white">
                      {proj.capacity.split('(')[0]}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>{proj.location}</span>
                      <span className="font-semibold text-emerald-700">{proj.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-emerald-700 transition-colors">
                      {proj.title}
                    </h3>

                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{proj.status}</span>
                    </div>

                    <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-1.5 text-[11px] text-slate-600">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Projected CO2 Offset:</span>
                        <span className="font-semibold text-slate-900">{proj.co2OffsetPerYear}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Target Offtaker:</span>
                        <span className="font-semibold text-slate-900 truncate max-w-[180px]">{proj.offtaker}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => onNavigate('projects')}
                    className="w-full py-2 bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1"
                  >
                    <span>View Project Pipeline Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY SIGMA & VISION */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                Why Sigma
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white text-balance">
                Built Around the Inevitable Future of Clean Energy
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than treating wind, solar, and storage as separate competing silos, Sigma operates them as one cohesive energy ecosystem engineered to meet round-the-clock commercial realities.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Integrated Renewable Thinking</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Wind, solar, and storage designed together from day zero.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Technology Agnostic</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Solutions selected strictly by site wind resource, solar irradiance, and LCOE economics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Future Ready & SCADA Orchestrated</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Prepared for dynamic grid codes, synthetic inertia, and real-time power market arbitrage.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission Quote Card */}
            <div className="lg:col-span-7 bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                  Our Corporate Vision
                </span>
                <p className="text-xl sm:text-2xl font-bold font-display text-white leading-snug">
                  "To build a cleaner, smarter and more reliable energy future where renewable generation, energy storage, and intelligent management work together to provide dependable clean power at scale."
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
                  Our Mission
                </span>
                <p className="text-base text-slate-300 font-semibold mb-2">
                  Develop · Integrate · Deliver · Sustain
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  To accelerate the adoption of renewable energy through innovative, scalable, and commercially viable wind, solar, and BESS solutions engineered for high performance.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenRfp()}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <span>Request Feasibility Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-colors"
                >
                  Learn About Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
