import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS } from '../data/mockData';
import { Search, Filter, ArrowUpRight, Zap, CheckCircle, X, ShieldCheck, MapPin, Calendar, Award } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: (category?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenRfp }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Hybrid', 'Solar', 'Wind', 'BESS', 'Commercial & Industrial'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technology.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">
              Project Portfolio
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Proven Multi-Gigawatt Clean Energy Assets
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our track record across utility-scale hybrid complexes, gigawatt solar parks, ridge wind farms, and high-rate battery energy storage systems engineered for maximum availability.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Segmented Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, location..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center text-slate-500">
              No projects found matching your criteria. Try adjusting the category or search keyword.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image with Tag & Capacity */}
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md rounded-md text-[11px] font-semibold text-emerald-400">
                        {proj.category}
                      </div>
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-950/85 backdrop-blur-md rounded-md text-[11px] font-mono font-bold text-white">
                        {proj.capacity.split('+')[0]}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{proj.location}</span>
                        <span>·</span>
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>COD {proj.year}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-emerald-700 transition-colors">
                        {proj.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Annual CO2 Offset:</span>
                          <span className="font-semibold text-slate-900">{proj.co2OffsetPerYear}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Offtaker:</span>
                          <span className="font-semibold text-slate-900 truncate max-w-[170px]">{proj.offtaker}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="w-full py-2.5 bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>View Engineering Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="relative h-64 shrink-0 overflow-hidden">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/70 hover:bg-slate-900 text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                  {activeModalProject.category} Infrastructure
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                  {activeModalProject.title}
                </h3>
                <div className="text-xs text-slate-300 mt-1">
                  {activeModalProject.location} · Commercial Operation: {activeModalProject.year}
                </div>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1.5">
                  Executive Engineering Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Key Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-[11px] text-slate-500 block">Total Capacity</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{activeModalProject.capacity}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">CO2 Avoided</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-700">{activeModalProject.co2OffsetPerYear}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Energy Reach</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{activeModalProject.homesPowered}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">PPA Counterparty</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">{activeModalProject.offtaker}</span>
                </div>
              </div>

              {/* Technical Architecture Highlights */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Technical Architecture Highlights
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Hardware & Specification:</span>
                  <span className="font-semibold text-white">{activeModalProject.technology}</span>
                </div>
                <button
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onOpenRfp(`Reference Model: ${title}`);
                  }}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition-colors shrink-0 whitespace-nowrap"
                >
                  Request Similar Project RFP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
