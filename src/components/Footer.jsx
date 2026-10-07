import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-500 flex items-center justify-center text-white font-bold shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                WEI <span className="text-emerald-400 font-bold">SOLUTIONS</span> LTD
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Nigeria’s trusted human resource advisory, corporate training, and business consulting partner. Empowering public and private sector organizations to unlock sustained productivity.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              Collective Experience: <span className="text-slate-300 font-semibold">Over 20 Years</span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Training Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-left">On-Site Interactive Workshops</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-left">Hands-on E-Learning & Digital</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-left">Skill Gap Assessments</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-left">Team Building Initiatives</button></li>
              <li><button onClick={() => handleNav('impact')} className="hover:text-emerald-400 transition-colors text-left">Gamified Learning Analytics</button></li>
            </ul>
          </div>

          {/* HR & Consulting */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Advisory & Strategy
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-left">Recruitment & Staffing</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-left">Compensation & Benefits</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-left">Performance Management</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-left">Compliance, SOPs & Legal</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-left">Culture Transformation (7 Stages)</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNav('about')} className="hover:text-emerald-400 transition-colors text-left">Who We Are</button></li>
              <li><button onClick={() => handleNav('values')} className="hover:text-emerald-400 transition-colors text-left">Vision, Mission & Values</button></li>
              <li><button onClick={() => handleNav('why-us')} className="hover:text-emerald-400 transition-colors text-left">Why Choose Us</button></li>
              <li><button onClick={() => handleNav('leadership')} className="hover:text-emerald-400 transition-colors text-left">Organizational Structure</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-emerald-400 transition-colors text-left">Book Consultation</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} WEI Solutions Ltd. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
