import React, { useState } from 'react';
import { PageId } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Building2, Globe2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Clean Energy Project Consultation (EPC/PPA)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">
              Contact & Inquiries
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Connect With Our Clean Energy Project Team
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you are evaluating a utility-scale hybrid project, exploring an industrial Open Access PPA, offering land parcels for renewable development, or seeking investor relations details, our engineers are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Office Locations */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                Project Consultation & RFP Submission
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Fill in your parameters and a dedicated renewable systems engineer will respond within 24 business hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-display">
                    Thank You, {formData.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry regarding <span className="font-semibold text-emerald-700">{formData.inquiryType}</span> has been routed to our project delivery group. We look forward to partnering with {formData.company}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        inquiryType: 'Clean Energy Project Consultation (EPC/PPA)',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
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
                        placeholder="Rajesh Varma"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
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
                        placeholder="rajesh@company.com"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Industrial Power Corp"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none bg-white"
                    >
                      <option value="Clean Energy Project Consultation (EPC/PPA)">Clean Energy Project Consultation (EPC/PPA)</option>
                      <option value="Hybrid (Wind + Solar + BESS) Sizing">Hybrid (Wind + Solar + BESS) Sizing</option>
                      <option value="Commercial & Industrial Open Access PPA">Commercial & Industrial Open Access PPA</option>
                      <option value="Utility-Scale BESS Energy Storage">Utility-Scale BESS Energy Storage</option>
                      <option value="Landowner Partnership (Land Leasing)">Landowner Partnership (Land Leasing)</option>
                      <option value="Investor & Financial Partnership">Investor & Financial Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Project Parameters & Scope
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your facility's current connected load, location, tariff, or land coordinates..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Commercial confidentiality protected</span>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Transmit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Global Offices Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                  Corporate Headquarters
                </span>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Sigma Energy Tower
                </h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Level 14, CleanTech Innovation Park, Pune - 411006, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>+91 (0) 20 4012 8800</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>contact@sigmagreentech.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                  Engineering & SCADA Control Hub
                </span>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Bengaluru Technology Center
                </h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Outer Ring Road Tech Zone, Bengaluru - 560103, Karnataka, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>+91 (0) 80 4915 2200</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                  Landowner & Resource Siting Desk
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Do you own land parcels (&gt;100 acres) in high-wind or high-solar irradiation zones in Gujarat, Rajasthan, Maharashtra, Karnataka, or Tamil Nadu? We offer guaranteed long-term lease returns.
                </p>
                <div className="text-xs font-semibold text-amber-700">
                  land@sigmagreentech.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
