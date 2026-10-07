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
    <section className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 border border-orange-200">
            Strategic Stakeholder Collaborations
          </div>
        </div>

        {/* Clean Logo Grid with exact names & logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center justify-center max-w-4xl mx-auto">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default"
            >
              <div className="h-20 w-full mb-4 flex items-center justify-center p-2 rounded-2xl bg-slate-50/60 group-hover:bg-white transition-all">
                <img
                  src={partner.logoSrc}
                  alt={partner.alt}
                  className="max-h-16 max-w-full object-contain rounded-lg shadow-2xs group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
