'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { ServicesSection } from '@/src/components/ServicesSection';
import { CostCalculator } from '@/src/components/CostCalculator';
import { ProjectGallery } from '@/src/components/ProjectGallery';
import { BlogSection } from '@/src/components/BlogSection';
import { Footer } from '@/src/components/Footer';
import { QuoteModal } from '@/src/components/QuoteModal';
import { triggerVignetteAd } from '@/src/utils/triggerVignetteAd';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledEstimate, setPrefilledEstimate] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (estimateText) => {
    setPrefilledEstimate(estimateText);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors selection:bg-amber-500 selection:text-white relative">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenQuote={() => setIsQuoteOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        <Hero
          onOpenQuote={() => setIsQuoteOpen(true)}
          onExploreServices={() => handleNavigate('services')}
        />

        <ServicesSection onOpenQuote={() => setIsQuoteOpen(true)} />

        <CostCalculator onApplyEstimate={handleApplyEstimate} />

        <ProjectGallery onOpenQuote={() => setIsQuoteOpen(true)} />

        <BlogSection />
      </main>

      <Footer />

      {/* Floating Quick Others Services Button */}
      <button
        onClick={() => triggerVignetteAd('12216293')}
        data-zone="12216293"
        title="Others Services"
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 text-xs uppercase tracking-wider transition-all hover:scale-105 cursor-pointer border border-amber-300"
      >
        <Sparkles className="w-4 h-4 text-slate-950 animate-spin" style={{ animationDuration: '4s' }} />
        <span>Others Services</span>
      </button>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => {
          setIsQuoteOpen(false);
          setPrefilledEstimate('');
        }}
        prefilledEstimate={prefilledEstimate}
      />
    </div>
  );
}
