import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Compass, Shield, Award, Heart, CheckCircle2, Zap, Sparkles } from 'lucide-react';

export default function VisionMissionValues() {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      letter: 'P',
      name: 'Professionalism',
      description: 'Delivering the highest quality service with ethical rigor, deep domain expertise, and executive competence.',
      icon: Award,
      gradient: 'from-emerald-500 to-green-700'
    },
    {
      letter: 'R',
      name: 'Respect',
      description: 'Fostering inclusive, appreciative partnerships that honor organizational diversity and value every stakeholder.',
      icon: Heart,
      gradient: 'from-rose-500 to-pink-700'
    },
    {
      letter: 'I',
      name: 'Integrity',
      description: 'Maintaining uncompromising transparency, truthfulness, and accountability in every client agreement.',
      icon: Shield,
      gradient: 'from-blue-500 to-indigo-700'
    },
    {
      letter: 'D',
      name: 'Diligence',
      description: 'Demonstrating tireless dedication, thorough execution, and precision from preliminary assessment to delivery.',
      icon: Zap,
      gradient: 'from-amber-500 to-orange-700'
    },
    {
      letter: 'E',
      name: 'Excellence',
      description: 'Striving for distinction and benchmark-setting results that continuously elevate institutional performance.',
      icon: CheckCircle2,
      gradient: 'from-teal-500 to-emerald-700'
    },
  ];

  return (
    <section id="values" className="py-24 bg-slate-50/70 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-100/40 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/40 dark:bg-brand-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-800 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200 dark:border-brand-800/60">
            <Sparkles className="w-3.5 h-3.5 text-brand-700 dark:text-emerald-400" />
            Our Guiding Compass
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Vision, Mission & Core Values
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            The foundational principles that steer our methodologies, client deliverables, and institutional standards.
          </p>
        </motion.div>

        {/* Vision & Mission Interactive Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-300 dark:hover:border-emerald-500 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-brand-100/60 dark:from-brand-900/20 to-transparent rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-700 to-emerald-500 text-white flex items-center justify-center mb-6 shadow-md shadow-brand-700/20 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold tracking-widest uppercase text-brand-600 dark:text-emerald-400 block mb-2">
                Long-Term Horizon
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                OUR VISION
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                "To be a leading provider of innovative and effective training and consulting solutions that enable organizations and individuals to achieve their full potential."
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-500 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-emerald-100/60 dark:from-emerald-900/20 to-transparent rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-700/20 group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold tracking-widest uppercase text-emerald-600 dark:text-teal-400 block mb-2">
                Strategic Mandate
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                OUR MISSION
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                "To empower individuals and organizations through innovative training programs, skill enhancement workshops and strategic project management solutions thereby contributing to sustainable growth and development across various sectors in Nigeria and beyond."
              </p>
            </div>
          </motion.div>

        </div>

        {/* Interactive P.R.I.D.E Core Values Showcase */}
        <motion.div 
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-md relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-brand-600 dark:text-emerald-400">The Acronym of Integrity</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              The P.R.I.D.E Standard
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
              Hover over each pillar to explore how we uphold excellence across all client engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((val, idx) => {
              const Icon = val.icon;
              const isSelected = activeValue === idx;
              return (
                <motion.div
                  key={val.name}
                  onMouseEnter={() => setActiveValue(idx)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-center flex flex-col items-center cursor-pointer relative overflow-hidden ${
                    isSelected 
                      ? 'bg-gradient-to-b from-brand-50/80 to-white dark:from-slate-800 dark:to-slate-800/80 border-brand-400 dark:border-emerald-500 shadow-lg ring-2 ring-brand-500/20' 
                      : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200/70 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-200 dark:hover:border-slate-700'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${val.gradient} text-white flex items-center justify-center font-black text-2xl shadow-md mb-4 transition-transform group-hover:scale-110`}>
                    {val.letter}
                  </div>
                  
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white mb-2">
                    {val.name}
                  </h4>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
