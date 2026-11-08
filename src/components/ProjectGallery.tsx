import React, { useState } from 'react';
import { Building2, MapPin, Calendar, ArrowUpRight, Filter } from 'lucide-react';
import { AdSenseUnit } from './AdSenseUnit';

interface ProjectGalleryProps {
  onOpenQuote: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'remodel'>('all');

  const projects = [
    {
      title: 'Oceanfront Glass Villa',
      category: 'residential',
      location: 'Cannes, France',
      year: '2026',
      budget: '$5.8M',
      image: '/src/assets/images/project_modern_villa_1794103515832.jpg',
      description: 'Cantilevered steel framing with floor-to-ceiling hurricane glass overlooking the Mediterranean.',
    },
    {
      title: 'Metropolitan Commercial Tower',
      category: 'commercial',
      location: 'Chicago, IL',
      year: '2025',
      budget: '$34.0M',
      image: '/src/assets/images/project_commercial_1794103514948.jpg',
      description: '18-story structural steel commercial complex with LEED Platinum energy certification.',
    },
    {
      title: 'Alpine Timber Chalet',
      category: 'residential',
      location: 'Aspen, CO',
      year: '2025',
      budget: '$4.2M',
      image: '/src/assets/images/construction_hero_1794103515733.jpg',
      description: 'Heavy glue-laminated timber beams with radiant heated stone floors and panoramic mountain views.',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-400 mb-2">
              02. Proven Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Construction Masterpieces
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {(['all', 'residential', 'commercial', 'remodel'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition-colors ${
                  filter === tab
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-amber-400 font-mono text-[11px] px-3 py-1 rounded-full border border-slate-700">
                    {project.budget}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" /> {project.location}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" /> {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3 bg-slate-200/70 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Inquire About Similar Build</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Display AdSense unit under Portfolio */}
        <div className="mt-12">
          <AdSenseUnit adSlot="5556667788" adFormat="auto" title="Portfolio Sponsor Ad" />
        </div>
      </div>
    </section>
  );
};
