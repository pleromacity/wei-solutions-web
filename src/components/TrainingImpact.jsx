import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Brain, TrendingUp, Sparkles, CheckCircle2, Trophy, Flame } from 'lucide-react';

export default function TrainingImpact() {
  const stats = [
    {
      percentage: '41%',
      label: 'Boring Training Hinders Learning',
      description: 'Of employees express that conventional, monotonous training formats act as an impediment rather than a catalyst.',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-gradient-to-b from-amber-50/80 to-white',
      borderColor: 'border-amber-200/80',
      ringColor: '#f59e0b',
      icon: Flame
    },
    {
      percentage: '83%',
      label: 'Motivated by Gamified Training',
      description: 'Of corporate professionals report significantly higher engagement and enthusiasm when training incorporates gamification.',
      color: 'from-brand-600 to-emerald-500',
      bgColor: 'bg-gradient-to-b from-emerald-50/80 to-white',
      borderColor: 'border-emerald-200/80',
      ringColor: '#10b981',
      icon: Gamepad2
    },
    {
      percentage: '34%',
      label: 'Improved Knowledge Retention',
      description: 'Direct improvement recorded in conceptual understanding, on-the-job retention, and real-time skill acquisition.',
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-gradient-to-b from-blue-50/80 to-white',
      borderColor: 'border-blue-200/80',
      ringColor: '#3b82f6',
      icon: Brain
    },
    {
      percentage: '41%',
      label: 'Productivity Surge',
      description: 'Observed boost in operational workforce productivity following structured, interactive, and gamified learning features.',
      color: 'from-indigo-600 to-brand-600',
      bgColor: 'bg-gradient-to-b from-indigo-50/80 to-white',
      borderColor: 'border-indigo-200/80',
      ringColor: '#6366f1',
      icon: TrendingUp
    },
  ];

  const outcomes = [
    'Engage participants, cultivate healthy competition and active learning',
    'Enhance cross-functional teamwork and break institutional silos',
    'Increase creativity, critical thinking & real-time problem-solving skills',
    'Achieve a lifetime improvement in workforce performance',
    'Simplify difficult concepts and eliminate cognitive information overload',
    'Perfect on-the-job application through immersive role-play scenarios'
  ];

  return (
    <section id="impact" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300">
      
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-50/60 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-800 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200 dark:border-brand-800/60">
            <Trophy className="w-3.5 h-3.5 text-brand-700 dark:text-emerald-400" />
            Empirical Curriculum Design
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Science of Engagement & Gamified Training
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            According to industry data cited in our curriculum methodology, adult learners achieve dramatically superior results when education incorporates gamified, interactive, and experiential techniques.
          </p>
        </motion.div>

        {/* 4 Animated Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-7 rounded-3xl border ${stat.borderColor} dark:border-slate-700/80 ${stat.bgColor} dark:bg-slate-900 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-xs text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Industry Metric</span>
                </div>

                <div>
                  <div className={`text-4xl sm:text-5xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-br ${stat.color}`}>
                    {stat.percentage}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proven Methodology Outcomes Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-white/10"
        >
          {/* Shimmer light background */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Tangible Outcomes of WEI Experiential Programs
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
              Transforming How Your Workforce Absorbs & Applies Knowledge
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              We design short- and long-term training solutions that bridge skill deficits through creative simulations, hands-on modules, and continuous post-session feedback.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomes.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
