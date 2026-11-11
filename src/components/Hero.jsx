import React, { useState } from 'react';
import { HardHat, ArrowRight, CheckCircle2, Sparkles, Megaphone } from 'lucide-react';
import { triggerVignetteAd } from '../utils/triggerVignetteAd';

export const Hero = ({ onOpenQuote, onExploreServices }) => {
  const [adFeedback, setAdFeedback] = useState(false);

  const handleTriggerAd = () => {
    triggerVignetteAd('12216293');
    setAdFeedback(true);
    setTimeout(() => setAdFeedback(false), 3000);
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Background ambient glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <HardHat className="w-4 h-4 text-amber-400" />
                <span>Apexbuilds Engineering Portal</span>
              </div>

              {/* Home interactive Others Services button */}
              <button
                onClick={handleTriggerAd}
                data-zone="12216293"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-yellow-300 border border-amber-400/40 hover:bg-amber-500/30 transition-all hover:scale-105 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
                <span>Others Services</span>
              </button>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-wrap">
              Building Architecture <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                That Defies Ordinary
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              From high-end residential luxury estates to state-of-the-art commercial complexes, Apexbuilds delivers precision engineering, on-time execution, and unmatched craftsmanship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => { triggerVignetteAd('12216293'); onOpenQuote(); }}
                data-zone="12216293"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl shadow-xl shadow-amber-500/20 transition-all hover:scale-105 flex items-center gap-3 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => { triggerVignetteAd('12216293'); onExploreServices(); }}
                data-zone="12216293"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer"
              >
                Explore Services
              </button>

              {/* Dedicated Others Services button */}
              <button
                onClick={handleTriggerAd}
                data-zone="12216293"
                className="px-6 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-600/30 transition-all hover:scale-105 flex items-center gap-2.5 cursor-pointer"
              >
                <Megaphone className="w-4 h-4 text-slate-950" />
                <span>Others Services</span>
              </button>
            </div>

            {/* Live Feedback Toast when clicked */}
            {adFeedback && (
              <div className="p-3 bg-amber-500/20 border border-amber-400/40 rounded-xl text-xs text-amber-200 flex items-center gap-2 animate-fade-in">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Opening Others Services...</span>
              </div>
            )}

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>10-Year Structural Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-Time Execution Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl blur-lg opacity-30 animate-pulse" />
              <div
                onClick={handleTriggerAd}
                data-zone="12216293"
                title="Click image to view sponsor showcase / ad"
                className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 cursor-pointer group"
              >
                <img
                  src="/src/assets/images/construction_hero_1794103515733.jpg"
                  alt="Modern Construction Site"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-mono mb-1">
                    <span>PROJECT SHOWCASE</span>
                    <span className="flex items-center gap-1 text-[11px] bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Clickable (Triggers Ad)
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    Cape Town Luxury Villa & Terraces
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">Completion: Q3 2026 • Budget: $4.2M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
