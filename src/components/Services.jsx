import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Laptop, 
  Search, 
  Network,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('training');

  const tabs = [
    { id: 'training', label: '1. Training Solutions', icon: GraduationCap },
    { id: 'hr', label: '2. HR Management & Advisory', icon: Users },
    { id: 'strategy', label: '3. Corporate Strategy & Culture', icon: TrendingUp },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-800 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200 dark:border-brand-800/60">
            <Sparkles className="w-3.5 h-3.5 text-brand-700 dark:text-emerald-400" />
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Corporate Services
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Tailored solutions designed to resolve institutional bottlenecks, develop competencies, and elevate performance.
          </p>
        </motion.div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-700 to-emerald-700 text-white shadow-brand-800/25 shadow-lg'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-600 dark:text-emerald-400'}`} />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'training' && (
            <motion.div
              key="training"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-md">
                <div className="max-w-3xl mb-10">
                  <span className="text-xs font-black uppercase tracking-widest text-brand-600 dark:text-emerald-400">Section 1.3.1</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Experiential Training & Capacity Building Solutions
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                    Whether for public or private organizations, from Leadership & Management to Human Resource and Technical fields, WEI unlocks the genuine potential of your workforce through customized formats.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Users,
                      title: 'On-Site Trainings',
                      desc: 'Intimate, interactive space that fosters relationship building. Real-life settings, in-person team building, role-play scenarios, and lunch/coffee break networking.',
                      color: 'from-brand-600 to-emerald-600',
                      bg: 'bg-brand-50 dark:bg-emerald-950/40'
                    },
                    {
                      icon: Laptop,
                      title: 'Hands-on & Digital E-Learning',
                      desc: 'E-learning platforms for executives, managers and leaders with engaging content, motion graphics, interactive digital modules, and virtual assessments.',
                      color: 'from-blue-600 to-cyan-600',
                      bg: 'bg-blue-50 dark:bg-blue-950/40'
                    },
                    {
                      icon: Search,
                      title: 'Assessment Services',
                      desc: 'Data-informed diagnostics derived from surveys, questionnaires, and interviews to identify skill gaps, evaluate high-potential candidates, and quantify training ROI.',
                      color: 'from-amber-600 to-orange-600',
                      bg: 'bg-amber-50 dark:bg-amber-950/40'
                    },
                    {
                      icon: Network,
                      title: 'Team Building Programs',
                      desc: 'Tailored collaborative activities designed to foster trust, communication, problem-solving, and a cohesive work culture that boosts morale and retention.',
                      color: 'from-purple-600 to-indigo-600',
                      bg: 'bg-purple-50 dark:bg-purple-950/40'
                    }
                  ].map((srv, i) => {
                    const Icon = srv.icon;
                    return (
                      <motion.div
                        key={i}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="bg-slate-50/70 dark:bg-slate-850 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/80 hover:border-brand-300 dark:hover:border-emerald-500 hover:shadow-lg transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${srv.color} text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-700 dark:group-hover:text-emerald-400 transition-colors">
                            {srv.title}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {srv.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Real-life image banner for Capacity Building */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
                    alt="Strategic Workforce Collaboration Workshop" 
                    className="w-full h-44 sm:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent flex items-center p-6 sm:p-8">
                    <div className="max-w-md text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/80">Interactive Methodology</span>
                      <h4 className="text-lg sm:text-xl font-extrabold mt-2">Transforming Theory Into Grounded Workplace Results</h4>
                      <p className="text-xs text-slate-300 mt-1">From executive roundtables to frontline technical simulations across Nigeria.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'hr' && (
            <motion.div
              key="hr"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-md">
                <div className="max-w-3xl mb-10">
                  <span className="text-xs font-black uppercase tracking-widest text-brand-600 dark:text-emerald-400">Section 1.3.2</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Human Resource Management & Advisory Services
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                    End-to-end HR advisory ensuring full legal compliance, competitive compensation frameworks, high staff retention, and seamless performance tracking.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      num: '01',
                      title: 'Recruitment & Staffing',
                      items: [
                        'Talent Acquisition: Sourcing & rigorous selection processes.',
                        'Workforce Planning: Headcount optimization and job profiles.'
                      ]
                    },
                    {
                      num: '02',
                      title: 'Compensation & Benefits',
                      items: [
                        'Salary Structure: Competitive, market-tested compensation bands.',
                        'Benefits Management: Healthcare, retirement packages & incentives.'
                      ]
                    },
                    {
                      num: '03',
                      title: 'Employee Relations',
                      items: [
                        'Strategies to improve staff morale, satisfaction & retention.',
                        'Advisory on welfare packages and team cohesion bonding.'
                      ]
                    },
                    {
                      num: '04',
                      title: 'Performance Management',
                      items: [
                        'Standardized, objective appraisals aligned with targets.',
                        '360-degree feedback loops & personalized development plans.'
                      ]
                    },
                    {
                      num: '05',
                      title: 'Compliance & Legal',
                      items: [
                        'Policy development aligned with statutory labor requirements.',
                        'Standard Operating Procedures (SOPs) and job descriptions.'
                      ]
                    },
                    {
                      num: '06',
                      title: 'HR Technology & Analytics',
                      items: [
                        'Data Analytics: Deep insights into performance trends.',
                        'Strategic HR reporting to guide executive decision-making.'
                      ]
                    }
                  ].map((hrItem, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-brand-300 dark:hover:border-emerald-500 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-950/80 text-brand-800 dark:text-emerald-400 font-extrabold text-xs flex items-center justify-center">
                          {hrItem.num}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">{hrItem.title}</h4>
                      </div>
                      <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2.5">
                        {hrItem.items.map((sub, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'strategy' && (
            <motion.div
              key="strategy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-md">
                <div className="max-w-3xl mb-10">
                  <span className="text-xs font-black uppercase tracking-widest text-brand-600 dark:text-emerald-400">Strategic Transformation</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Corporate Strategy & Culture Transformation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                    Sustainable success hinges on articulating clear business vision and cultivating an agile, aligned organizational culture.
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-50 to-emerald-50 dark:from-slate-800 dark:to-emerald-950/40 border border-brand-200/80 dark:border-slate-700 mb-10">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Corporate Strategy Consulting</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    We guide organizations through honest self-evaluation, strategic visioning, objective setting, resource allocation, and trade-off prioritization to capture optimal market share and achieve substantial competitive advantage.
                  </p>
                </div>

                {/* 7-Step Roadmap with Interactive Motion */}
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-800 dark:text-emerald-400 mb-6 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-600 dark:bg-emerald-400"></span>
                    The WEI 7-Stage Culture Transformation Roadmap:
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                      { step: '01', title: 'Comprehensive Assessment', desc: 'Thorough evaluation of current culture to pinpoint strengths, challenges, and cultural dynamics.' },
                      { step: '02', title: 'Tailored Vision & Strategy', desc: 'Collaborating with leadership to craft a compelling, aspirational roadmap.' },
                      { step: '03', title: 'Leadership Engagement', desc: 'Guiding leaders to model and champion core cultural values across the entire organization.' },
                      { step: '04', title: 'Strategic Communication & Training', desc: 'Equipping employees with knowledge and skills to embrace and drive cultural changes.' },
                      { step: '05', title: 'Behavioural Change Initiatives', desc: 'Targeted initiatives and revised appraisal systems to reinforce desired behaviours.' },
                      { step: '06', title: 'Integration & Reinforcement', desc: 'Weaving new cultural norms into daily operations, policies, and workflows.' },
                      { step: '07', title: 'Continuous Monitoring & Evaluation', desc: 'Iterative metrics and feedback to make data-driven adjustments and ensure permanence.' },
                    ].map((stage, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -4 }}
                        className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-400 dark:hover:border-emerald-500 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black text-brand-600 dark:text-emerald-400">STAGE {stage.step}</span>
                          <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-brand-500 transition-colors"></span>
                        </div>
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{stage.title}</h5>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{stage.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
