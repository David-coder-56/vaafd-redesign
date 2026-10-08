import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, ArrowRight, ShieldCheck, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { ORG_INFO, CAMPAIGNS } from '../../data/vaafdData';

interface FooterProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenDonate: (campaignId?: string) => void;
  onOpenVolunteer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDonate,
  onOpenVolunteer
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Newsletter & Pre-footer banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-400 border border-emerald-700/40 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Stay Connected
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Join the Educational Crusade in Liberia
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                Get monthly field updates, student progress stories, and transparent reports on how your donations are transforming lives.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-emerald-900/50 border border-emerald-500/40 rounded-2xl p-4 text-emerald-200">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm">Thank you for subscribing!</p>
                    <p className="text-xs text-emerald-300">You will receive our next monthly update directly in your inbox.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all duration-200 shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Org Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo_1.jpg"
                alt="Vision Awake Africa For Development logo"
                className="h-12 w-36 object-contain"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              {ORG_INFO.mission}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Registered Non-Profit NGO in Liberia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  About Our History & Mission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  7 Pillars of Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('stories')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Student & Field Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('get-involved')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Get Involved & Partnerships
                </button>
              </li>
              <li>
                <button onClick={onOpenVolunteer} className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer">
                  Volunteer Application
                </button>
              </li>
            </ul>
          </div>

          {/* Active Campaigns */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Active Campaigns
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {CAMPAIGNS.slice(0, 4).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      onNavigate('campaign-detail', c.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-emerald-400 transition-colors text-left truncate max-w-[200px] cursor-pointer block"
                  >
                    {c.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('campaigns')}
                  className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 text-xs pt-1 cursor-pointer"
                >
                  View all causes <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Contact & Headquarters
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>{ORG_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href={`tel:${ORG_INFO.phone[0]}`} className="hover:text-emerald-400">{ORG_INFO.phone[0]}</a>
                  <a href={`tel:${ORG_INFO.phone[1]}`} className="hover:text-emerald-400">{ORG_INFO.phone[1]}</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${ORG_INFO.email}`} className="hover:text-emerald-400 text-xs truncate">
                  {ORG_INFO.email}
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenDonate()}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Support a Liberian Child</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Vision Awake Africa For Development (VAAFD). All rights reserved.
          </p>
          <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-6">
            <span>
              Built by{' '}
              <a
                href="https://cyber-hybrid.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Cyber Hybrid
              </a>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Carolyn A. Miller School (CAMES)</span>
            <span className="hidden sm:inline">•</span>
            <span>Non-Profit Community Haven</span>
            <span className="hidden sm:inline">•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300">
              Privacy & Transparency
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
