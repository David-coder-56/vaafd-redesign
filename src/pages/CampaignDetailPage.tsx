import React, { useState } from 'react';
import {
  Heart,
  Users,
  Calendar,
  Share2,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Lock,
  Layers
} from 'lucide-react';
import { CAMPAIGNS } from '../data/vaafdData';

interface CampaignDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
  onOpenDonate: (campaignId?: string) => void;
  onDonateAmount: (amount: number) => void;
}

export const CampaignDetailPage: React.FC<CampaignDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenDonate,
  onDonateAmount
}) => {
  const campaign = CAMPAIGNS.find((c) => c.slug === slug) || CAMPAIGNS[0];
  const [selectedPreset, setSelectedPreset] = useState<number>(50);
  const [customVal, setCustomVal] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const percentage = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSidebarDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmt = customVal ? parseInt(customVal, 10) : selectedPreset;
    onOpenDonate(campaign.id);
  };

  // Other campaigns
  const otherCampaigns = CAMPAIGNS.filter((c) => c.id !== campaign.id);

  return (
    <div className="space-y-12 pb-20">
      {/* 1. Breadcrumb & Title Section */}
      <section className="bg-slate-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigate('home')} className="hover:text-emerald-400">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('campaigns')} className="hover:text-emerald-400">Campaigns</button>
            <span>/</span>
            <span className="text-emerald-400 font-semibold truncate">{campaign.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              {campaign.category}
            </span>
            {campaign.isUrgent && (
              <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                Urgent Priority
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-heading leading-tight">
            {campaign.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
            {campaign.tagline}
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Image, Story, Updates */}
          <div className="lg:col-span-8 space-y-8">
            {/* Main Featured Photo */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-16/9 bg-slate-100">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Campaign Progress Meter Card (Mobile & Tablet Friendly) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Raised</span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-800 font-heading">
                    ${campaign.raised.toLocaleString()} <span className="text-slate-400 text-lg font-medium">/ ${campaign.goal.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-slate-600">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-emerald-600" /> {campaign.donorsCount} Donors
                  </span>
                  <span>•</span>
                  <span className="text-emerald-700 font-bold">{percentage}% Funded</span>
                </div>
              </div>

              {/* Bar */}
              <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-1000"
                  style={{ width: `${Math.max(6, percentage)}%` }}
                ></div>
              </div>
            </div>

            {/* Impact Metric Chips */}
            <div className="grid grid-cols-3 gap-4">
              {campaign.impactMetrics.map((m, i) => (
                <div key={i} className="bg-emerald-50/80 border border-emerald-200/70 rounded-2xl p-4 text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-900 font-heading">
                    {m.value}
                  </div>
                  <div className="text-xs text-emerald-800 font-medium">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Story & Background */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                About This Cause & Why It Matters
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {campaign.longDescription}
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                Every contribution is directly tracked by our project coordinator in Paynesville. We provide donors with photo reports, supplier receipts, and progress updates so you can see the direct result of your investment in Liberia's youth.
              </p>

              {/* Share & Advocacy */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-medium">
                  Help spread the word across your community:
                </span>
                <button
                  onClick={handleShare}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Link Copied to Clipboard!' : 'Share Campaign Link'}</span>
                </button>
              </div>
            </div>

            {/* Field Updates */}
            {campaign.updates && campaign.updates.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6">
                <h3 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span>Field Updates & Construction Milestones</span>
                </h3>

                <div className="space-y-4">
                  {campaign.updates.map((up, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-emerald-800">{up.title}</span>
                        <span className="text-slate-400 font-medium">{up.date}</span>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {up.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Embedded Donation Sidebar & Other Causes */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Embedded Fast Donation Card */}
            <div className="bg-gradient-to-b from-white to-emerald-50/40 rounded-3xl p-6 sm:p-8 border-2 border-emerald-600 shadow-xl space-y-6">
              <div className="space-y-1 text-center">
                <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider">
                  Direct Allocation
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                  Support {campaign.title}
                </h3>
              </div>

              {/* Presets */}
              <div className="grid grid-cols-3 gap-2">
                {[10, 25, 50, 100, 250, 500].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setSelectedPreset(amt); setCustomVal(''); }}
                    className={`py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      selectedPreset === amt && !customVal
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-sm">$</span>
                <input
                  type="text"
                  placeholder="Or enter custom amount"
                  value={customVal}
                  onChange={(e) => setCustomVal(e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                onClick={() => onOpenDonate(campaign.id)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-slate-950" />
                <span>Donate To This Project Now</span>
              </button>

              <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Tax Deductible Official Non-Profit</span>
              </div>
            </div>

            {/* Recent Gives / Other Causes */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading">
                Other Active Causes
              </h4>
              <div className="space-y-3">
                {otherCampaigns.map((other) => (
                  <div
                    key={other.id}
                    onClick={() => {
                      onNavigate('campaign-detail', other.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3 rounded-2xl hover:bg-slate-50 border border-slate-100 flex items-center gap-3 cursor-pointer group transition-colors"
                  >
                    <img
                      src={other.image}
                      alt={other.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="overflow-hidden flex-1">
                      <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-700 truncate">
                        {other.title}
                      </div>
                      <div className="text-[11px] text-emerald-700 font-semibold">
                        ${other.raised.toLocaleString()} raised of ${other.goal.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
