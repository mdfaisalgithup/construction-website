import React from 'react';
import { Building2, Calculator, Newspaper, PhoneCall, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenQuote: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenQuote,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Building2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight font-extrabold tracking-tight">ApexBuild</span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-amber-600 dark:text-amber-400">Construction Portal</span>
          </div>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </button>
          <button
            onClick={() => onNavigate('calculator')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Calculator className="w-4 h-4 text-amber-500" />
            Cost Estimator
          </button>
          <button
            onClick={() => onNavigate('portfolio')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Portfolio
          </button>
          <button
            onClick={() => onNavigate('blog')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Newspaper className="w-4 h-4 text-amber-500" />
            Articles & Insights
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action + Utilities */}
        <div className="flex items-center gap-4 shrink-0">
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
            onClick={onOpenQuote}
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
