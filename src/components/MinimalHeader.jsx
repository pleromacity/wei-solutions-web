import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function MinimalHeader({ activePage, setActivePage }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <header className="sticky top-0 z-30 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand logo placed with padding from the top-left pin */}
        <div className="flex items-center gap-3 pl-14 sm:pl-20">
          <button 
            onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-700 via-emerald-600 to-orange-500 p-0.5 shadow-xs">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center text-brand-700 dark:text-emerald-400 font-bold group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4 text-brand-700 dark:text-emerald-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-emerald-400 transition-colors">
                WEI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-orange-600 dark:from-brand-400 dark:to-orange-400 font-black">SOLUTIONS</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-400 font-bold -mt-1 hidden sm:inline-block">
                Advisory • Training • Strategy
              </span>
            </div>
          </button>
        </div>

        {/* Right side: Theme Toggle + Consultation button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light / Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 transition-all shadow-xs"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </motion.button>

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
