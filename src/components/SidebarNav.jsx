import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  ShieldCheck, 
  Compass, 
  GraduationCap, 
  BarChart3, 
  CheckCircle, 
  Network, 
  Mail, 
  ChevronRight
} from 'lucide-react';

export default function SidebarNav({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'Who We Are', icon: ShieldCheck },
    { id: 'values', label: 'Vision, Mission & Values', icon: Compass },
    { id: 'services', label: 'Corporate Services', icon: GraduationCap },
    { id: 'impact', label: 'Training Impact & Stats', icon: BarChart3 },
    { id: 'why-us', label: 'Why Choose Us', icon: CheckCircle },
    { id: 'leadership', label: 'Organizational Structure', icon: Network },
    { id: 'contact', label: 'Consultation Desk', icon: Mail },
  ];

  const handleSelect = (id) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* PIN ATTACHED DIRECTLY TO TOP-LEFT CORNER */}
      <div className="fixed top-0 left-0 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Navigation Menu"
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-br-2xl shadow-xl transition-all duration-300 border-b border-r ${
            isOpen
              ? 'bg-slate-900 text-white border-slate-700'
              : 'bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white border-orange-500/40 hover:border-orange-500 shadow-brand-950/20'
          }`}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            {isOpen ? <X className="w-4 h-4 text-orange-400" /> : <Menu className="w-4 h-4 text-orange-400" />}
          </div>
          {/* Subtle warm orange accent pip */}
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        </motion.button>
      </div>

      {/* OVERLAY BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40"
          />
        )}
      </AnimatePresence>

      {/* SLIDE-OUT DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 240 }}
            className="fixed top-0 left-0 bottom-0 w-72 sm:w-80 bg-white dark:bg-slate-900 z-50 shadow-2xl flex flex-col border-r border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 pt-14 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950 text-white border-b border-white/10 relative">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-emerald-500 to-orange-500 p-0.5 shadow-md">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white font-bold">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-extrabold tracking-tight">
                    WEI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">SOLUTIONS</span>
                  </div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">
                    LTD • Nigeria
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isCurrent = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl flex items-center justify-between transition-all duration-200 ${
                      isCurrent
                        ? 'bg-orange-50/70 dark:bg-slate-800 text-slate-900 dark:text-white font-bold border-l-4 border-orange-500 shadow-xs'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white font-semibold'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isCurrent ? 'bg-gradient-to-tr from-brand-700 to-orange-600 text-white shadow-xs' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm">{item.label}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 ${isCurrent ? 'text-orange-500' : 'text-slate-300 dark:text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Bottom Consultation CTA with warm orange gradient accent */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
              <button
                onClick={() => handleSelect('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-800 via-brand-700 to-orange-600 text-white font-bold text-xs shadow-md hover:brightness-105 transition-all"
              >
                <span>Consultation Desk</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
