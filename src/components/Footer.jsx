import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">ApexBuild</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Leading the industry in precision architectural engineering, custom residential construction, and commercial developments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home Portal</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Capabilities</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Cost Estimator</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-amber-400 transition-colors">Articles & Insights</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Expertise</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Custom Residential</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Commercial High-Rise</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Structural Engineering</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Sustainable Solar</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">BIM 3D Modeling</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Headquarters</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span>750 Lexington Avenue, Suite 1400, New York, NY</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+1 (800) 555-APEX</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>contact@apexbuildportal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 ApexBuild Construction Portal. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
