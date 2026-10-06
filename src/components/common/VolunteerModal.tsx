import React, { useEffect, useState } from 'react';
import { X, HandHeart, CheckCircle2, Send, Sparkles, Globe, MapPin, Heart } from 'lucide-react';
import { ORG_INFO } from '../../data/vaafdData';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState('teaching');
  const [availability, setAvailability] = useState('monrovia-on-site');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-start sm:items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-y-auto overscroll-contain my-0 sm:my-8">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-300/30 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <HandHeart className="w-3.5 h-3.5" />
            Join Our Global & Local Team
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Become a VAAFD Volunteer
          </h2>
          <p className="text-emerald-100 text-sm mt-1">
            Lend your skills to educate children, empower families, and rebuild communities in Liberia.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Application Received!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you, <span className="font-bold text-slate-900">{fullName}</span>. Our volunteer coordinator in Monrovia will review your profile and reach out to <span className="font-semibold text-emerald-700">{email}</span> within 48 hours.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 text-left max-w-md mx-auto space-y-1">
              <p className="font-bold text-slate-800">Direct Inquiries:</p>
              <p>Email: {ORG_INFO.email}</p>
              <p>Coordinator Phone: {ORG_INFO.phone[0]}</p>
              <p>Location: {ORG_INFO.address}</p>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md cursor-pointer transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Area of interest */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Area of Contribution
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="teaching">📚 Teaching & Academic Tutoring (CAMES School)</option>
                <option value="stem-it">💻 Computer Literacy & STEM Training</option>
                <option value="healthcare">🩺 Healthcare, Nursing & Medical Support</option>
                <option value="vocational">🛠️ Vocational Skills & Trade Training</option>
                <option value="farming">🌱 Sustainable Agriculture & School Farm</option>
                <option value="construction">🏗️ Construction & Campus Renovation</option>
                <option value="fundraising">📢 Global Fundraising & Digital Outreach</option>
              </select>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Availability Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setAvailability('monrovia-on-site')}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
                    availability === 'monrovia-on-site'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>On-Site in Monrovia</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAvailability('remote-virtual')}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
                    availability === 'remote-virtual'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Remote / Virtual</span>
                </button>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name *"
                  required
                  className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address *"
                  required
                  className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone / WhatsApp Number *"
                  required
                  className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City / Country *"
                  required
                  className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                rows={3}
                placeholder="Briefly describe your background, skills, or why you want to support VAAFD..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Application...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Volunteer Application</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
