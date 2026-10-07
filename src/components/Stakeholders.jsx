import React from 'react';
import { motion } from 'framer-motion';

export default function Stakeholders() {
  const partners = [
    {
      id: 'naseni',
      name: 'NASENI',
      logoSrc: '/naseni-logo.png',
      alt: 'NASENI Official Logo'
    },
    {
      id: 'world-bank',
      name: 'World Bank; IDEAS Project',
      logoSrc: '/world-bank-logo.png',
      alt: 'World Bank Group Logo'
    },
    {
      id: 'fme',
      name: 'Federal Ministry Of Education; TVET',
      logoSrc: '/fme-logo.png',
      alt: 'Federal Ministry Of Education Logo'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 text-xs font-bold uppercase tracking-wider mb-2 border border-orange-200 dark:border-orange-800/80">
            Strategic Stakeholder Collaborations
          </div>
        </div>

        {/* Clean Logo Grid with exact names & logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center justify-center max-w-4xl mx-auto">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-400/80 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default"
            >
              <div className="h-20 w-full mb-4 flex items-center justify-center p-2 rounded-2xl bg-slate-50/60 dark:bg-white/95 group-hover:bg-white transition-all">
                <img
                  src={partner.logoSrc}
                  alt={partner.alt}
                  className="max-h-16 max-w-full object-contain rounded-lg shadow-2xs group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
