'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { ServicesSection } from '@/src/components/ServicesSection';
import { CostCalculator } from '@/src/components/CostCalculator';
import { ProjectGallery } from '@/src/components/ProjectGallery';
import { BlogSection } from '@/src/components/BlogSection';
import { Footer } from '@/src/components/Footer';
import { QuoteModal } from '@/src/components/QuoteModal';

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors selection:bg-amber-500 selection:text-white">
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
