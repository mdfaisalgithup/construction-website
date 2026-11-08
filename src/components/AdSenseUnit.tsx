import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Info, Eye, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AdSenseUnitProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  layoutKey?: string;
  className?: string;
  title?: string;
}

const mockAdContent: Record<string, { brand: string; tag: string; headline: string; cta: string; bg: string }> = {
  '1234567890': {
    brand: 'CAT Heavy Equipment',
    tag: 'Industrial Fleet 2026',
    headline: 'Next-Gen Electric Hydraulic Excavators & Cranes',
    cta: 'Explore Fleet',
    bg: 'from-amber-600/10 via-amber-500/5 to-transparent',
  },
  '9876543210': {
    brand: 'Autodesk Revit & BIM',
    tag: 'Architectural Software',
    headline: 'Real-Time 3D Structural Analysis & Building Automation',
    cta: 'Start Free Trial',
    bg: 'from-blue-600/10 via-indigo-500/5 to-transparent',
  },
  '1122334455': {
    brand: 'DeWalt Construction Pro',
    tag: 'Professional Power Tools',
    headline: '20V MAX XR Brushless Concrete & Framing Nailers',
    cta: 'View Pro Deals',
    bg: 'from-yellow-500/15 via-amber-500/5 to-transparent',
  },
  '9988776655': {
    brand: 'Velux Architectural Skylights',
    tag: 'Sustainable Living',
    headline: 'Solar-Powered Venting Skylights with Smart Rain Sensors',
    cta: 'Request Catalog',
    bg: 'from-emerald-600/10 via-teal-500/5 to-transparent',
  },
};

export const AdSenseUnit: React.FC<AdSenseUnitProps> = ({
  adSlot,
  adFormat = 'auto',
  layoutKey,
  className = '',
  title = 'Sponsored Advertisement',
}) => {
  const publisherId = 'pub-9131582476102508';
  const [showInspector, setShowInspector] = useState(false);
  const [copied, setCopied] = useState(false);
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.warn('AdSense script push note:', err);
    }
  }, [adSlot]);

  const isInArticle = adFormat === 'fluid' || Boolean(layoutKey);
  const adInfo = mockAdContent[adSlot] || {
    brand: 'BuildPro Building Supplies',
    tag: 'Commercial Grade Materials',
    headline: 'High-Performance Insulated Concrete Forms & Steel Framing',
    cta: 'Get Wholesale Rates',
    bg: 'from-amber-600/10 to-transparent',
  };

  const handleCopyCode = () => {
    const snippet = `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-${publisherId}" data-ad-slot="${adSlot}" data-ad-format="${adFormat}"${layoutKey ? ` data-ad-layout-key="${layoutKey}"` : ''} data-full-width-responsive="true"></ins>`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`my-8 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm transition-colors ${className}`}>
      {/* Header bar with metadata & Inspector Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100 dark:border-slate-800 text-[11px] font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-semibold text-slate-800 dark:text-slate-200">{title}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 font-semibold border border-amber-500/20">
            {isInArticle ? 'In-Article Ad' : 'Display Ad'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block font-mono text-[10px] bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded text-slate-600 dark:text-slate-300">
            ca-{publisherId}
          </span>
          <button
            onClick={() => setShowInspector(!showInspector)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors text-[10px] font-semibold lowercase"
          >
            <Eye className="w-3 h-3 text-amber-500" />
            <span>{showInspector ? 'hide specs' : 'inspect slot'}</span>
          </button>
        </div>
      </div>

      {/* Code / Slot Inspector Panel */}
      {showInspector && (
        <div className="mb-4 p-3 bg-slate-950 text-slate-300 rounded-xl font-mono text-[11px] space-y-2 border border-slate-800 animate-fade-in">
          <div className="flex items-center justify-between text-amber-400 font-bold border-b border-slate-800 pb-1.5">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              AdSense Unit Configuration
            </span>
            <button
              onClick={handleCopyCode}
              className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-[10px] font-sans flex items-center gap-1"
            >
              {copied ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : null}
              {copied ? 'Copied HTML!' : 'Copy <ins> Code'}
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-400 text-[10px]">
            <div><span className="text-slate-500">Client:</span> ca-{publisherId}</div>
            <div><span className="text-slate-500">Slot:</span> {adSlot}</div>
            <div><span className="text-slate-500">Format:</span> {adFormat}</div>
            <div><span className="text-slate-500">LayoutKey:</span> {layoutKey || 'N/A'}</div>
          </div>
        </div>
      )}

      {/* Main Ad Area */}
      <div className="min-h-[120px] rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 overflow-hidden relative group">
        {/* Actual Google AdSense Ins Tag */}
        <ins
          ref={insRef}
          className="adsbygoogle block w-full text-center"
          style={{ display: 'block', minHeight: '120px' }}
          data-ad-client={`ca-${publisherId}`}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
          data-full-width-responsive="true"
        />

        {/* High-Fidelity Ad Content Preview Overlay (Renders when preview environment replaces empty AdSense frames) */}
        <div className={`absolute inset-0 bg-gradient-to-r ${adInfo.bg} bg-white dark:bg-slate-950 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto border border-amber-500/10`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-950/50 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 font-bold text-lg">
              Ad
            </div>
            <div className="space-y-0.5 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {adInfo.brand}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">· {adInfo.tag}</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                {adInfo.headline}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Google AdSense Partner • ca-{publisherId}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold rounded-xl shadow-sm transition-all hover:scale-105 flex items-center gap-1.5">
              <span>{adInfo.cta}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
