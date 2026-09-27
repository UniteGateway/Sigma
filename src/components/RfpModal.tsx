import React, { useState } from 'react';
import { X, CheckCircle, Send, ArrowRight, ShieldCheck } from 'lucide-react';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const RfpModal: React.FC<RfpModalProps> = ({ isOpen, onClose, defaultCategory = 'Hybrid' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: defaultCategory,
    targetCapacity: '50 MW',
    stateOrRegion: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90 shrink-0 sticky top-0 z-20">
          <div className="pr-4">
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Request Project Proposal / Feasibility Study
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Connect with our utility and industrial clean energy engineering team.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close proposal form"
            className="p-2 text-slate-600 hover:text-slate-950 bg-slate-200/80 hover:bg-slate-300 rounded-full transition-all shrink-0 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <X className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>

        {/* Form or Success State */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display">
                Proposal Request Received
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A senior Sigma project engineer will review your <span className="font-semibold text-emerald-700">{formData.projectType}</span> project inquiry ({formData.targetCapacity}) and reach out within 24 business hours with initial grid modeling parameters.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Industrial Works"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Technology Architecture *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all bg-white"
                  >
                    <option value="Hybrid (Wind + Solar + BESS)">Hybrid (Wind + Solar + BESS)</option>
                    <option value="Utility-Scale Wind Energy">Utility-Scale Wind Energy</option>
                    <option value="Solar Photovoltaic (Utility & C&I)">Solar Photovoltaic (Utility & C&I)</option>
                    <option value="Battery Energy Storage System (BESS)">Battery Energy Storage System (BESS)</option>
                    <option value="Commercial & Industrial Open Access PPA">C&I Open Access PPA</option>
                    <option value="Landowner Project Partnership">Landowner Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Expected Capacity
                  </label>
                  <select
                    value={formData.targetCapacity}
                    onChange={(e) => setFormData({ ...formData, targetCapacity: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all bg-white"
                  >
                    <option value="10 MW - 25 MW">10 MW – 25 MW (Industrial)</option>
                    <option value="25 MW - 50 MW">25 MW – 50 MW</option>
                    <option value="50 MW - 100 MW">50 MW – 100 MW</option>
                    <option value="100 MW - 300 MW">100 MW – 300 MW (Utility)</option>
                    <option value="300 MW+ Mega Hybrid">300 MW+ Mega Hybrid</option>
                    <option value="BESS 50 MWh - 200 MWh">BESS 50 MWh – 200 MWh</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Site Location / Region
                </label>
                <input
                  type="text"
                  value={formData.stateOrRegion}
                  onChange={(e) => setFormData({ ...formData, stateOrRegion: e.target.value })}
                  placeholder="e.g. Gujarat / Rajasthan / Karnataka / Global"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Project Objectives & Scope Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Details regarding your current tariff, grid substation proximity, or land availability..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict NDA & Confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Processing...'
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
