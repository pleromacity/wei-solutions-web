import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe2, GraduationCap, ExternalLink } from 'lucide-react';

export default function Stakeholders() {
  const partners = [
    {
      id: 'naseni',
      name: 'NASENI',
      fullTitle: 'National Agency for Science and Engineering Infrastructure',
      scope: 'Statutory Technical Partner',
      description: 'Collaborating on high-level capacity building, industrial engineering upskilling, and institutional workforce transformation initiatives across Nigeria.',
      badge: 'Federal Agency',
      icon: Building2,
      color: 'from-brand-800 to-emerald-700',
      accent: 'border-emerald-500/40'
    },
    {
      id: 'worldbank-ideas',
      name: 'World Bank (IDEAS Project)',
      fullTitle: 'Innovation Development and Effectiveness in the Acquisition of Skills',
      scope: 'International Development Partner',
      description: 'Strengthening youth employability, institutional capacity, and quality skill acquisition in formal and informal apprenticeship frameworks.',
      badge: 'Multilateral Initiative',
      icon: Globe2,
      color: 'from-blue-700 to-indigo-800',
      accent: 'border-blue-500/40'
    },
    {
      id: 'fme-tvet',
      name: 'Federal Ministry of Education',
      fullTitle: 'Technical and Vocational Education and Training (TVET)',
      scope: 'Federal Education & Skills Division',
      description: 'Designing competency-based curricula, standard operating frameworks, and vocational skill assessments for sustainable workforce productivity.',
      badge: 'Federal Ministry',
      icon: GraduationCap,
      color: 'from-orange-700 to-amber-700',
      accent: 'border-orange-500/40'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3 border border-orange-200">
            Trusted Strategic Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Strategic Stakeholder Collaborations
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            WEI Solutions Ltd maintains active collaborative capability with leading national and multilateral institutions to deliver measurable, grounded impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.id}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`bg-white rounded-3xl p-8 border ${partner.accent} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${partner.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {partner.badge}
                    </span>
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block mb-1">
                    {partner.scope}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    {partner.name}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mb-4 pb-3 border-b border-slate-100 leading-snug">
                    {partner.fullTitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-700">
                  <span>Collaborative Delivery</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
