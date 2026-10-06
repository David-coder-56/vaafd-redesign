import React from 'react';
import { Quote, Sparkles, Calendar, BookOpen, ArrowRight, Heart } from 'lucide-react';
import { TESTIMONIALS, NEWS_ARTICLES } from '../data/vaafdData';

interface StoriesPageProps {
  onOpenDonate: (campaignId?: string) => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({ onOpenDonate }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/received_243067154919694-1024x768.jpeg"
            alt="Stories Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Impact in Action
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white">
            Stories of Resilience & Hope
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Real voices from the Carolyn A. Miller School and our community development programs in Liberia.
          </p>
        </div>
      </section>

      {/* 2. Featured Student Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
            Student & Graduate Spotlight
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Transformed by Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Quote className="w-5 h-5" />
                </div>
                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={t.image}
                  alt="VAAFD school community in Liberia"
                  className="w-14 h-14 rounded-lg object-cover border-2 border-emerald-500 shadow-sm"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base font-heading">{t.name}</h4>
                  <p className="text-xs font-semibold text-emerald-700">{t.role}</p>
                  <p className="text-[11px] text-slate-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Field News & Dispatches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
            Field Updates
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Latest News from Liberia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold shadow-xs">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="text-xs text-slate-400 font-medium">
                    {article.date} • By {article.author}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2">
                <button
                  onClick={() => onOpenDonate()}
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
                >
                  <Heart className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Support Projects Like This</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
