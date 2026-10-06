import React, { useState } from 'react';
import { Search, Heart, Sparkles, Filter, Target, Users } from 'lucide-react';
import { CAMPAIGNS } from '../data/vaafdData';
import { CampaignCard } from '../components/common/CampaignCard';

interface CampaignsPageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenDonate: (campaignId?: string) => void;
}

export const CampaignsPage: React.FC<CampaignsPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Infrastructure', 'Transportation', 'Operations', 'STEM & Technology', 'Expansion'];

  const filteredCampaigns = CAMPAIGNS.filter((campaign) => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || campaign.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCat;
  });

  const totalRaised = CAMPAIGNS.reduce((acc, curr) => acc + curr.raised, 0);
  const totalGoal = CAMPAIGNS.reduce((acc, curr) => acc + curr.goal, 0);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/cames2.jpg"
            alt="Campaigns Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Targeted Giving
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white">
            Active Priority Causes & Campaigns
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Choose a specific project that speaks to you. Every campaign is tracked transparently with regular progress logs and photographic proof.
          </p>
        </div>
      </section>

      {/* 2. Overview Stats Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Campaign Target</div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                ${totalRaised.toLocaleString()} <span className="text-slate-400 text-base font-medium">/ ${totalGoal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenDonate()}
              className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Make a General Donation</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search causes (e.g. Bus, Lab, Roof)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Causes' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Campaigns Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCampaigns.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <p className="text-slate-500 text-base">No campaigns found matching your search term.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                onDonate={(id) => onOpenDonate(id)}
                onViewDetails={(slug) => onNavigate('campaign-detail', slug)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
