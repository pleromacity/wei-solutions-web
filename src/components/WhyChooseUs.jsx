import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, FileCheck, Sliders, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Qualified & Experienced Professionals',
      subtitle: 'Industry-Tested Experts',
      description: 'We deploy highly dedicated specialized trainers and consultants with current, hands-on industry experience who not only meet, but exceed expectations to elevate your workforce competencies.',
      gradient: 'from-emerald-600 via-brand-600 to-green-700',
      badge: 'Certified Practitioners'
    },
    {
      icon: FileCheck,
      title: 'Integrated Reporting System',
      subtitle: 'Data-Backed M&E Quality Control',
      description: 'An advanced, structured evaluation system designed to collect comprehensive feedback on courses and instructors—guaranteeing measurable delivery quality, return on investment, and tangible organizational growth.',
      gradient: 'from-brand-700 via-emerald-700 to-teal-800',
      badge: 'Real-Time Evaluation'
    },
    {
      icon: Sliders,
      title: 'We Customize Every Solution',
      subtitle: '100% Adaptable & Flexible',
      description: 'No generic, off-the-shelf templates. We analyze your specific organizational pain points to offer fully customized solutions tailored to achieve unique learning goals and address acute training gaps.',
      gradient: 'from-teal-600 via-emerald-600 to-brand-700',
      badge: 'Bespoke Curricula'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-700" />
            Competitive Differentiator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            WHY CHOOSE US
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Three fundamental pillars that set WEI Solutions Ltd apart in delivering high-impact, measurable corporate results.
          </p>
        </motion.div>

        {/* 3 Pillars Grid with Motion Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-slate-50/80 hover:bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-brand-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle corner shimmer */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-brand-100/50 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${pillar.gradient} text-white flex items-center justify-center shadow-lg shadow-brand-900/15 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="inline-block px-2.5 py-1 rounded-full bg-brand-100/70 text-brand-800 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                    {pillar.badge}
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-brand-800 transition-colors leading-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-brand-700">
                  <span>Guaranteed Standards</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
