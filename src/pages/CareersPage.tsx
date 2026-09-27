import React, { useState } from 'react';
import { PageId, JobOpening } from '../types';
import { JOB_OPENINGS } from '../data/mockData';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Send, Award, Users, Heart } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfp: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate, onOpenRfp }) => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applyModalJob, setApplyModalJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNotes, setApplicantNotes] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
  };

  const handleCloseModal = () => {
    setApplyModalJob(null);
    setAppliedSuccess(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setApplicantNotes('');
  };

  return (
    <div className="pt-20 bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">
              Careers at Sigma
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Shape the Clean Energy Transition With Us
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              We are assembling world-class mechanical, electrical, electrochemical, and software engineers to architect the next generation of wind, solar, and battery energy storage infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work at Sigma */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Our Culture & Values
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Where Engineering Ambition Meets Real-World Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Frontline Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work directly with 160m wind turbines, 1500V high-density bifacial solar arrays, and high-rate battery storage installations on a multi-gigawatt scale.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Meritocracy & Acceleration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We promote by demonstrated technical capability, project milestone achievement, and safety excellence rather than traditional corporate tenure.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Zero-Harm Safety Focus</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nothing comes ahead of the safety and physical well-being of our engineers, field technicians, and contractor partners on site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Job Openings */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Open Positions
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Join Our Engineering & Project Delivery Teams
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Explore open opportunities across our headquarters, regional technical hubs, and utility project sites.
            </p>
          </div>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.type} ({job.experience})
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setApplyModalJob(job)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {applyModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Apply: {applyModalJob.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {applyModalJob.department} · {applyModalJob.location}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {appliedSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 font-display">
                    Application Submitted Successfully
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, {applicantName}. Our Talent Acquisition team will review your profile and reach out within 3 business days.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleCloseModal}
                      className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="priya@domain.com"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      LinkedIn / Portfolio URL or Summary *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={applicantNotes}
                      onChange={(e) => setApplicantNotes(e.target.value)}
                      placeholder="Include your LinkedIn profile link, key project highlights, and notice period..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Submit Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
