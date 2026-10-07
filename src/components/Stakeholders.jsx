import React from 'react';
import { motion } from 'framer-motion';

export default function Stakeholders() {
  const partners = [
    {
      id: 'naseni',
      name: 'NASENI',
      logo: (
        // NASENI Cogwheel & Crest emblem
        <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" stroke="#15803d" strokeWidth="4" strokeDasharray="6 3" />
          <circle cx="50" cy="50" r="34" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2.5" />
          <path d="M50 24L56 36H44L50 24Z" fill="#15803d" />
          <path d="M50 76L44 64H56L50 76Z" fill="#15803d" />
          <path d="M24 50L36 44V56L24 50Z" fill="#15803d" />
          <path d="M76 50L64 56V44L76 50Z" fill="#15803d" />
          <circle cx="50" cy="50" r="14" fill="#15803d" />
          <circle cx="50" cy="50" r="6" fill="#ffffff" />
        </svg>
      )
    },
    {
      id: 'ideas',
      name: 'IDEAS Project',
      logo: (
        // World Bank / IDEAS Skills & Globe emblem
        <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" stroke="#0284c7" strokeWidth="3.5" />
          <ellipse cx="50" cy="50" rx="20" ry="44" stroke="#0284c7" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="6" y1="50" x2="94" y2="50" stroke="#0284c7" strokeWidth="2" />
          <line x1="16" y1="30" x2="84" y2="30" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="16" y1="70" x2="84" y2="70" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="16" fill="#0369a1" />
          <path d="M44 50L48 54L56 44" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'tvet',
      name: 'TVET',
      logo: (
        // Federal Ministry of Education / TVET Technical Crest
        <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="76" height="76" rx="20" stroke="#ea580c" strokeWidth="3.5" fill="#fff7ed" />
          <path d="M50 24L74 37L50 50L26 37L50 24Z" fill="#ea580c" />
          <path d="M34 46V62C34 66 41 72 50 72C59 72 66 66 66 62V46" stroke="#c2410c" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M74 41V57" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 border border-orange-200">
            Strategic Stakeholder Collaborations
          </div>
        </div>

        {/* Clean Logo Grid just like NASENI partner carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center justify-center max-w-4xl mx-auto">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default"
            >
              <div className="mb-5 p-3 rounded-2xl bg-slate-50/80 group-hover:bg-white group-hover:scale-105 transition-all flex items-center justify-center">
                {partner.logo}
              </div>
              <h3 className="text-lg font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
