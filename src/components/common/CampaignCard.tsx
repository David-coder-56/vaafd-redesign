import React from 'react';
import { Heart, Users, ArrowRight, Sparkles, Target } from 'lucide-react';
import { Campaign } from '../../types';

interface CampaignCardProps {
  campaign: Campaign;
  onDonate: (campaignId: string) => void;
  onViewDetails: (slug: string) => void;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({
  campaign,
  onDonate,
  onViewDetails
}) => {
  const percentage = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image Banner */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            {campaign.category}
          </span>
          {campaign.isUrgent && (
            <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              Urgent
            </span>
          )}
        </div>

        {/* Donors count floating badge */}
        <div className="absolute bottom-3 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
          <Users className="w-3.5 h-3.5 text-emerald-400" />
          <span>{campaign.donorsCount} Donors</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2">
          <h3
            onClick={() => onViewDetails(campaign.slug)}
            className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading cursor-pointer leading-snug"
          >
            {campaign.title}
          </h3>
          <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
            {campaign.description}
          </p>
        </div>

        {/* Progress Bar & Stats */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="flex justify-between items-baseline text-xs">
            <span className="text-slate-500 font-medium">Raised: <strong className="text-emerald-700 font-bold text-sm">${campaign.raised.toLocaleString()}</strong></span>
            <span className="text-slate-500 font-medium">Goal: <strong className="text-slate-800">${campaign.goal.toLocaleString()}</strong></span>
          </div>

          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-1000 ease-out relative"
              style={{ width: `${Math.max(6, percentage)}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
            <span className="font-bold text-emerald-700">{percentage}% Funded</span>
            <span>Needs ${(campaign.goal - campaign.raised).toLocaleString()} more</span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            onClick={() => onViewDetails(campaign.slug)}
            className="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onDonate(campaign.id)}
            className="py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transform active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Donate</span>
          </button>
        </div>
      </div>
    </div>
  );
};
