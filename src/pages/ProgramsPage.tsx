import React, { useState } from 'react';
import {
  GraduationCap,
  HeartHandshake,
  Activity,
  Droplets,
  Briefcase,
  Sprout,
  Heart,
  CheckCircle2,
  MapPin,
  Users,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PROGRAMS } from '../data/vaafdData';

interface ProgramsPageProps {
  onOpenDonate: (campaignId?: string) => void;
  onOpenVolunteer: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 7 Pillars' },
    { id: 'education', label: 'Education' },
    { id: 'orphan-care', label: 'Orphan Care' },
    { id: 'health', label: 'Health & Medical' },
    { id: 'water', label: 'Clean Water' },
    { id: 'vocational', label: 'Vocational Training' },
    { id: 'agriculture', label: 'Food Security' },
  ];

  const filteredPrograms = activeCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === activeCategory);

  const getProgramIcon = (category: string) => {
    switch (category) {
      case 'education': return <GraduationCap className="w-6 h-6 text-emerald-700" />;
      case 'orphan-care': return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      case 'health': return <Activity className="w-6 h-6 text-red-600" />;
      case 'water': return <Droplets className="w-6 h-6 text-sky-600" />;
      case 'vocational': return <Briefcase className="w-6 h-6 text-amber-600" />;
      case 'agriculture': return <Sprout className="w-6 h-6 text-emerald-600" />;
      default: return <GraduationCap className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/IMG-20230321-WA0002.jpg"
            alt="Programs Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Holistic Impact
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white">
            Our 7 Development Pillars
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Sustainable community transformation requires a multi-faceted approach. Explore how we educate, shelter, heal, and empower families across Liberia.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-2 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Detailed Programs List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredPrograms.map((program, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image side */}
                <div className={`lg:col-span-5 relative min-h-[280px] lg:min-h-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-md">
                    {getProgramIcon(program.category)}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl text-white text-xs flex justify-between items-center">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {program.location}
                    </span>
                    <span className="font-bold text-amber-300">{program.stats}</span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                        {program.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Target: {program.beneficiaries}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                      {program.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {program.fullDesc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Deliverables & Activities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {program.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenDonate()}
                      className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
                      <span>Sponsor This Program</span>
                    </button>
                    <button
                      onClick={onOpenVolunteer}
                      className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-all cursor-pointer"
                    >
                      Volunteer for this Pillar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
