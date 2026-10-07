import React from 'react';
import { AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

interface UrgentAlertBannerProps {
  onDonateClick: () => void;
}

export const UrgentAlertBanner: React.FC<UrgentAlertBannerProps> = ({ onDonateClick }) => {
  return (
    <aside aria-label="Urgent Appeal" className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white border-b border-emerald-700/50 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide">
              <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Appeal for Support
              </span>
              <span>
                For VAAFD projects to continue educating & sheltering war-displaced children, we urgently need your support.
              </span>
            </div>
          </div>
          
          <button
            onClick={onDonateClick}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-amber-500/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Donate Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
