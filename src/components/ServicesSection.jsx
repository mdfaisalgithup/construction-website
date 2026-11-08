import React from 'react';
import { Home, Building, Compass, SunMedium, Wrench, Shield, ArrowUpRight } from 'lucide-react';

export const ServicesSection = ({ onOpenQuote }) => {
  const services = [
    {
      icon: <Home className="w-6 h-6 text-amber-500" />,
      title: "Custom Residential Building",
      description: "Bespoke luxury homes built from foundation to roof with premium sustainable materials and exquisite interior finishes.",
      tag: "Residential",
    },
    {
      icon: <Building className="w-6 h-6 text-amber-500" />,
      title: "Commercial & Retail Remodeling",
      description: "Modern office fit-outs, retail storefronts, and multi-story corporate structures engineered for peak productivity.",
      tag: "Commercial",
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-500" />,
      title: "Architectural Design & 3D BIM",
      description: "State-of-the-art building information modeling, blueprint drafting, and photorealistic 3D visualization before ground breaks.",
      tag: "Engineering",
    },
    {
      icon: <SunMedium className="w-6 h-6 text-amber-500" />,
      title: "Sustainable & Net-Zero Energy",
      description: "Solar integration, high-efficiency geothermal HVAC, and smart home automation for eco-conscious living.",
      tag: "Eco-Friendly",
    },
    {
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      title: "Structural Retrofitting & Repair",
      description: "Earthquake hardening, foundation stabilization, waterproofing, and heavy-duty structural load upgrades.",
      tag: "Structural",
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-500" />,
      title: "Turnkey Project Management",
      description: "End-to-end permit navigation, budget control, subcontractor coordination, and rigorous quality assurance inspections.",
      tag: "Management",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-400 mb-2">
              01. Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Engineering Excellence Across Every Sector
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-600 dark:text-slate-400 max-w-md text-sm">
            We deploy advanced project methodologies and elite craftspeople to deliver superior building solutions on time and within budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-950/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Consult with specialist</span>
                <button
                  onClick={onOpenQuote}
                  className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
