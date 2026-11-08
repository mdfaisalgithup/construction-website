import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, Layers, ArrowRight, Check } from 'lucide-react';
import { AdSenseUnit } from './AdSenseUnit';

interface CostCalculatorProps {
  onApplyEstimate: (estimateDetails: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'remodel' | 'structural'>('residential');
  const [squareFeet, setSquareFeet] = useState<number>(2500);
  const [qualityTier, setQualityTier] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // Pricing multipliers per sq ft
  const baseRates = {
    residential: { standard: 180, premium: 260, luxury: 390 },
    commercial: { standard: 210, premium: 310, luxury: 450 },
    remodel: { standard: 120, premium: 180, luxury: 270 },
    structural: { standard: 150, premium: 220, luxury: 320 },
  };

  const rate = baseRates[projectType][qualityTier];
  const estimatedTotal = squareFeet * rate;
  const materialCost = Math.round(estimatedTotal * 0.52);
  const laborCost = Math.round(estimatedTotal * 0.38);
  const permitCost = Math.round(estimatedTotal * 0.10);

  const estimatedWeeks = Math.max(6, Math.round(squareFeet / 180));

  const typeLabels = {
    residential: 'Custom Residential Home',
    commercial: 'Commercial Office Fit-Out',
    remodel: 'Kitchen & Bath Remodel',
    structural: 'Structural & Foundation Repair',
  };

  const handleApply = () => {
    const details = `${typeLabels[projectType]} (${squareFeet} sq ft, ${qualityTier.toUpperCase()} tier) - Est. Total: $${estimatedTotal.toLocaleString()}`;
    onApplyEstimate(details);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-100 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Estimator Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Instant Construction Cost Calculator
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm">
            Calculate accurate preliminary budgets for your construction or remodeling project based on current material indices and labor averages.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            {/* Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(['residential', 'commercial', 'remodel', 'structural'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                      projectType === type
                        ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    {typeLabels[type]}
                  </button>
                ))}
              </div>
            </div>

            {/* Square Footage Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  2. Area Size (Square Feet)
                </label>
                <span className="font-mono text-base font-bold text-amber-600 dark:text-amber-400">
                  {squareFeet.toLocaleString()} sq. ft.
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={squareFeet}
                onChange={(e) => setSquareFeet(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>500 sq ft</span>
                <span>5,000 sq ft</span>
                <span>10,000 sq ft</span>
              </div>
            </div>

            {/* Quality Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                3. Material & Finish Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['standard', 'premium', 'luxury'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setQualityTier(tier)}
                    className={`p-3 rounded-xl border text-center text-xs font-semibold capitalize transition-all ${
                      qualityTier === tier
                        ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl shadow-xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-amber-400">
                <span>ESTIMATE SUMMARY</span>
                <span>INDEX v2026.4</span>
              </div>

              <div className="py-6">
                <span className="text-xs text-slate-400 uppercase tracking-widest">Estimated Total Budget</span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white mt-1 tracking-tight font-mono">
                  ${estimatedTotal.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Approx. <span className="text-amber-400 font-semibold">${rate}/sq.ft</span> based on {qualityTier} specs.
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 py-4 border-t border-slate-800 text-sm">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" /> Materials (52%)
                  </span>
                  <span className="font-mono font-semibold">${materialCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-400" /> Direct Labor (38%)
                  </span>
                  <span className="font-mono font-semibold">${laborCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" /> Permits & Engineering (10%)
                  </span>
                  <span className="font-mono font-semibold">${permitCost.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-slate-300">Estimated Timeline:</span>
                <span className="font-mono font-bold text-amber-400">{estimatedWeeks} Weeks (~{Math.round(estimatedWeeks / 4)} months)</span>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Request Quote With This Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Display AdSense unit under Calculator */}
        <div className="mt-12">
          <AdSenseUnit adSlot="9876543210" adFormat="auto" title="Sponsored Sponsor" />
        </div>
      </div>
    </section>
  );
};
