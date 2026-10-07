import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Users2, Building2, Sparkles, ChevronRight } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-brand-50/70 via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      
      {/* Dynamic Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-brand-300/30 via-emerald-200/25 to-teal-100/30 dark:from-emerald-900/20 dark:via-brand-900/20 dark:to-teal-900/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow -z-10" />
      <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-gradient-to-br from-emerald-200/30 to-brand-100/20 dark:from-emerald-900/20 dark:to-transparent rounded-full blur-3xl pointer-events-none animate-float -z-10" />
      <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-brand-100/40 dark:bg-emerald-950/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle grid pattern background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Animated Pill Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-brand-200/80 dark:border-slate-700 text-brand-900 dark:text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm hover:border-brand-400 dark:hover:border-emerald-500 transition-colors">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600 dark:bg-emerald-400"></span>
              </span>
              <span>Empowering Organizations & Talent Nationwide</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]"
          >
            Unlocking Potential Through{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-600 dark:from-brand-400 dark:via-emerald-400 dark:to-teal-300">
                Experiential Training
              </span>
              {/* Highlight stroke underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-400/60 dark:text-emerald-500/40 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}
            & Strategic HR Advisory
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
          >
            WEI Solutions Ltd delivers high-impact corporate training, organizational culture transformation, and Human Resource consulting backed by over <strong>20 years</strong> of collective expertise.
          </motion.p>

          {/* Call to Actions with Motion Hover */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3"
          >
            <motion.button
              onClick={() => onNavigate && onNavigate('contact')}
              whileHover={{ scale: 1.04, boxShadow: '0 20px 25px -5px rgba(22, 101, 52, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-brand-700 via-brand-700 to-emerald-600 text-white font-bold text-base shadow-lg shadow-brand-700/25 transition-all group"
            >
              <span>Consult With Our Experts</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => onNavigate && onNavigate('services')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-base border border-slate-200/90 dark:border-slate-700 shadow-sm backdrop-blur-md transition-all group"
            >
              <span>Explore All Offerings</span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-400 group-hover:translate-x-0.5 group-hover:text-brand-600 dark:group-hover:text-emerald-400 transition-all" />
            </motion.button>
          </motion.div>

          {/* Key Trust Signals Bar */}
          <motion.div 
            variants={itemVariants}
            className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
          >
            {[
              { icon: Award, stat: '20+ Years', label: 'Collective Experience', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/40' },
              { icon: Building2, stat: 'Public & Private', label: 'Sector Footprint', color: 'text-brand-600 dark:text-emerald-400', bg: 'bg-brand-50 dark:bg-emerald-950/40' },
              { icon: Users2, stat: '100% Tailored', label: 'Client Curricula', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/40' },
              { icon: CheckCircle2, stat: 'Integrated', label: 'M&E Quality Control', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/40' }
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200/60 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-emerald-500 transition-all flex items-center gap-3.5 group"
                >
                  <div className={`p-3 rounded-xl ${badge.bg} ${badge.color} group-hover:scale-110 transition-transform shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">{badge.stat}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{badge.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
