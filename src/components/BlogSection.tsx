import React, { useState } from 'react';
import { Newspaper, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { AdSenseUnit } from './AdSenseUnit';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const articles = [
    {
      title: 'Top 5 Architectural Trends Shaping Custom Homes in 2026',
      excerpt: 'Explore how sustainable cross-laminated timber, biophilic indoor gardens, and passive solar design are revolutionizing residential architecture.',
      category: 'Architecture',
      readTime: '5 min read',
      date: 'Nov 6, 2026',
      image: '/src/assets/images/blog_renovation_1794103515921.jpg',
      content: `The architecture of 2026 is defined by a deep reconciliation between advanced structural engineering and ecological stewardship. Homeowners are no longer satisfied with standard drywall and cookie-cutter layouts; they demand resilient sanctuaries that breathe with nature.

Cross-laminated timber (CLT) has emerged as the premier structural material for luxury homes. Not only does CLT sequester carbon throughout the life of the building, but its warm exposed wood grain creates an immediate sense of grounded tranquility. Coupled with high-performance triple-pane glazing and decentralized geothermal HVAC systems, modern custom homes achieve net-zero energy consumption effortlessly.

Furthermore, outdoor-indoor continuity is paramount. Operable glass walls span 30 feet without vertical mullions, seamlessly connecting interior culinary spaces with cantilevered travertine patios and infinity pools.`,
    },
    {
      title: 'Navigating Local Zoning Permits & Foundation Engineering',
      excerpt: 'A comprehensive guide for developers and homeowners on fast-tracking municipal permits and soil compaction testing.',
      category: 'Engineering',
      readTime: '8 min read',
      date: 'Oct 29, 2026',
      image: '/src/assets/images/project_commercial_1794103514948.jpg',
      content: `Securing municipal permits often represents the most unpredictable timeline in any construction project. Understanding local zoning codes, setback restrictions, and environmental impact assessments before breaking ground saves months of costly delays.

Before pouring concrete, rigorous geotechnical soil testing is mandatory. Whether dealing with expansive clay soils or high water tables, engineered piers and helical piles ensure zero settling over decades of structural loading.`,
    },
    {
      title: 'Smart Home Automation: Integrating IoT During Framing',
      excerpt: 'Why structured cabling, PoE lighting, and centralized server racks must be planned during the rough-in framing stage.',
      category: 'Smart Home',
      readTime: '6 min read',
      date: 'Oct 15, 2026',
      image: '/src/assets/images/project_modern_villa_1794103515832.jpg',
      content: `Retrofitting smart home automation into a finished house is messy and expensive. The gold standard is planning structured CAT6A cabling, fiber backbones, and PoE (Power over Ethernet) lighting controllers directly into the timber or steel framing stage.

Centralized AV racks and climate zoning ensure absolute reliability without relying on unstable wireless mesh networks.`,
    },
  ];

  return (
    <section id="blog" className="py-20 bg-slate-100 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-400 mb-2">
              03. Expert Insights & Articles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Construction & Remodeling Knowledge Base
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-600 dark:text-slate-400 max-w-md text-sm">
            Read expert analyses on structural engineering, interior design trends, and cost optimization. All articles feature Google AdSense In-Article ad units.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                <span>Read Full Article & View In-Article Ads</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Embedded In-Article AdSense Unit */}
        <div className="mt-12">
          <AdSenseUnit
            adSlot="1122334455"
            adFormat="fluid"
            layoutKey="-fb+5w+4e-db+86"
            title="Google AdSense In-Article Ad Unit"
          />
        </div>

        {/* Article Reading Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-slate-900 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 relative">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 mb-2">
                <span>{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                {selectedArticle.title}
              </h2>

              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>{selectedArticle.content}</p>

                {/* IN-ARTICLE AD INJECTED NATURALLY INSIDE ARTICLE CONTENT */}
                <div className="my-6">
                  <AdSenseUnit
                    adSlot="9988776655"
                    adFormat="fluid"
                    layoutKey="-6t+ed+2i-1n-4v"
                    title="In-Article Native Ad (Publisher pub-9131582476102508)"
                  />
                </div>

                <p>
                  As engineering standards evolve, incorporating these advanced building methodologies ensures enduring structural integrity, aesthetic brilliance, and maximum return on investment for property owners.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-slate-900 dark:bg-slate-800 text-white font-semibold rounded-xl text-xs uppercase tracking-wider"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
