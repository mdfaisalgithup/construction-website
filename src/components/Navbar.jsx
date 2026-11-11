import React from 'react';
import { Building2, Calculator, Newspaper, PhoneCall, Moon, Sun, Sparkles, Home as HomeIcon } from 'lucide-react';
import { triggerVignetteAd } from '../utils/triggerVignetteAd';

export const Navbar = ({
  darkMode,
  setDarkMode,
  onOpenQuote,
  onNavigate,
}) => {
  const handleHomeClick = (e) => {
    e.preventDefault();
    triggerVignetteAd('12216293');
    onNavigate('hero');
  };

  const handleAdButtonClick = () => {
    triggerVignetteAd('12216293');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={handleHomeClick}
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group"
          title="Apexbuilds Home (Click to trigger ad)"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Building2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight font-extrabold tracking-tight">Apexbuilds</span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-amber-600 dark:text-amber-400">Construction Portal</span>
          </div>
        </a>

        {/* Zone 2: clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={handleHomeClick}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white"
            data-zone="12216293"
          >
            <HomeIcon className="w-4 h-4 text-amber-500" />
            Home
          </button>
          <button
            onClick={() => { triggerVignetteAd('12216293'); onNavigate('services'); }}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            data-zone="12216293"
          >
            Services
          </button>
          <button
            onClick={() => { triggerVignetteAd('12216293'); onNavigate('calculator'); }}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            data-zone="12216293"
          >
            <Calculator className="w-4 h-4 text-amber-500" />
            Cost Estimator
          </button>
          <button
            onClick={() => { triggerVignetteAd('12216293'); onNavigate('portfolio'); }}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            data-zone="12216293"
          >
            Portfolio
          </button>
          <button
            onClick={() => { triggerVignetteAd('12216293'); onNavigate('blog'); }}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            data-zone="12216293"
          >
            <Newspaper className="w-4 h-4 text-amber-500" />
            Articles & Insights
          </button>
          <button
            onClick={() => { triggerVignetteAd('12216293'); onNavigate('contact'); }}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            data-zone="12216293"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action + Utilities */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Ad Trigger Button renamed to Others Services */}
          <button
            onClick={handleAdButtonClick}
            data-zone="12216293"
            title="Others Services"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>Others Services</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => { triggerVignetteAd('12216293'); onOpenQuote(); }}
            data-zone="12216293"
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-lg shadow-amber-600/25 transition-all hover:scale-105 whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Get Free Quote</span>
          </button>
        </div>
      </div>
    </header>
  );
};
