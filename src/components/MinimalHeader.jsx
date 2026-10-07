import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function MinimalHeader({ activePage, setActivePage }) {
  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-3 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand logo placed with padding from the top-left pin */}
        <div className="flex items-center gap-3 pl-14 sm:pl-20">
          <button 
            onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-700 via-emerald-600 to-orange-500 p-0.5 shadow-xs">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-brand-700 font-bold group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4 text-brand-700" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
                WEI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-orange-600 font-black">SOLUTIONS</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold -mt-1 hidden sm:inline-block">
                Advisory • Training • Strategy
              </span>
            </div>
          </button>
        </div>

        {/* Right consultation button with subtle orange trim */}
        <div className="flex items-center gap-2 sm:gap-3">
          {activePage !== 'contact' && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-brand-700 via-brand-700 to-orange-600 hover:from-brand-800 hover:to-orange-700 text-white text-xs font-bold shadow-sm transition-all"
            >
              <span>Consult Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          )}
        </div>

      </div>
    </header>
  );
}
