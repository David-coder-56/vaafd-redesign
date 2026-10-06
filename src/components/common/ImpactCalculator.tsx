import React, { useState } from 'react';
import { Sparkles, Heart, BookOpen, Utensils, Shield, Cpu, ArrowRight } from 'lucide-react';

interface ImpactCalculatorProps {
  onDonateAmount: (amount: number) => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ onDonateAmount }) => {
  const [sliderValue, setSliderValue] = useState<number>(50);

  // Derived metrics based on amount
  const mealsCount = Math.floor(sliderValue * 2);
  const textbooksCount = Math.floor(sliderValue / 15);
  const schoolDaysTuition = Math.floor(sliderValue * 1.2);
  const healthChecks = Math.floor(sliderValue / 25);

  const presets = [15, 30, 50, 100, 250, 500];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800/40 shadow-2xl relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Live Impact Calculator
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
            See Exactly What Your Generosity Builds
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            100% of public donations directly fund programs for children and families in Liberia. Drag the slider to see your real-world footprint.
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm uppercase tracking-wider text-slate-300 font-bold">
              Your Contribution
            </span>
            <div className="flex items-center gap-2">
              <span className="text-4xl sm:text-5xl font-black text-amber-400 font-heading">
                ${sliderValue}
              </span>
              <span className="text-xs uppercase text-slate-400 font-semibold bg-white/10 px-2 py-1 rounded-md">
                USD
              </span>
            </div>
          </div>

          {/* Range Slider */}
          <div>
            <input
              type="range"
              min="10"
              max="500"
              step="5"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          {/* Quick preset chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs text-slate-400 mr-2">Quick Presets:</span>
            {presets.map((amt) => (
              <button
                key={amt}
                onClick={() => setSliderValue(amt)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  sliderValue === amt
                    ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
        </div>

        {/* Calculated Impact Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <Utensils className="w-5 h-5" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {mealsCount}+
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Nutritious School Lunches
            </span>
          </div>

          <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {textbooksCount > 0 ? textbooksCount : 1}
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Curriculum Textbooks & Kits
            </span>
          </div>

          <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {schoolDaysTuition}
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Days of Tuition-Free Education
            </span>
          </div>

          <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {healthChecks > 0 ? healthChecks : 1}
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Student Medical Checkups
            </span>
          </div>
        </div>

        {/* CTA Action */}
        <div className="text-center pt-2">
          <button
            onClick={() => onDonateAmount(sliderValue)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base sm:text-lg shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-slate-950" />
            <span>Donate ${sliderValue} & Make This Impact Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
