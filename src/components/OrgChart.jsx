import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Briefcase, Award, ChevronDown, Sparkles } from 'lucide-react';

export default function OrgChart() {
  return (
    <section id="leadership" className="py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300">
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
            <Sparkles className="w-3.5 h-3.5 text-brand-700 dark:text-emerald-400" />
            Executive Governance & Operational Staffing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Organizational Structure & Staffing
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            At WEI Solutions Ltd, we assemble world-class professionals with proven in-country experience and close collaboration with key stakeholders to ensure seamless, real-time project delivery.
          </p>
        </motion.div>

        {/* Tree Org Chart Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-lg shadow-slate-900/5 overflow-x-auto relative"
        >
          <div className="min-w-[800px] flex flex-col items-center">
            
            {/* 1. CEO NODE */}
            <div className="flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }}
                className="w-64 p-4.5 rounded-2xl bg-gradient-to-r from-brand-900 via-brand-800 to-emerald-800 text-white text-center shadow-xl shadow-brand-900/20 border-2 border-brand-500 cursor-default"
              >
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300">Executive Leadership</div>
                <div className="text-2xl font-black tracking-wide mt-1">CEO</div>
                <div className="text-xs text-brand-100/90 mt-0.5 font-medium">Chief Executive Officer</div>
              </motion.div>
              {/* Connector down */}
              <div className="w-0.5 h-10 bg-brand-600"></div>
            </div>

            {/* Horizontal Branch Bar */}
            <div className="w-[640px] h-0.5 bg-brand-500 relative">
              {/* Left drop line to COO */}
              <div className="absolute left-0 top-0 w-0.5 h-10 bg-brand-500"></div>
              {/* Middle drop line to CFO */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-10 bg-brand-500"></div>
              {/* Right drop line to Legal */}
              <div className="absolute right-0 top-0 w-0.5 h-10 bg-brand-500"></div>
            </div>

            {/* 2. C-SUITE & DIRECTORS LEVEL */}
            <div className="w-full flex justify-between pt-10 gap-6">
              
              {/* COO COLUMN */}
              <div className="flex-1 flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="w-52 p-4 rounded-2xl bg-brand-50/90 dark:bg-slate-800 border-2 border-brand-500 text-center shadow-sm"
                >
                  <div className="text-[10px] font-black uppercase tracking-wider text-brand-700 dark:text-emerald-400">Operations Wing</div>
                  <div className="text-lg font-black text-slate-900 dark:text-white">COO</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Chief Operating Officer</div>
                </motion.div>

                {/* Sub-connector line */}
                <div className="w-0.5 h-8 bg-brand-400"></div>
                <div className="w-48 h-0.5 bg-brand-400"></div>

                {/* COO Sub-nodes */}
                <div className="grid grid-cols-2 gap-2.5 mt-4 w-full max-w-[280px]">
                  {[
                    { title: 'Project Director 1', role: 'Lead Delivery' },
                    { title: 'Project Director 2', role: 'Strategic Initiatives' },
                    { title: 'Customer Relationship Manager', role: 'Client Relations' },
                    { title: 'Research Admin', role: 'M&E & Field Diagnostics' },
                  ].map((node, nIdx) => (
                    <motion.div 
                      key={nIdx}
                      whileHover={{ scale: 1.04 }}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-750 border border-slate-200/90 dark:border-slate-700 text-center shadow-xs transition-colors"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white">{node.title}</div>
                      <div className="text-[10px] text-brand-700 dark:text-emerald-400 font-semibold">{node.role}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CFO / LEAD STRATEGIST COLUMN */}
              <div className="flex-1 flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="w-52 p-4 rounded-2xl bg-brand-50/90 dark:bg-slate-800 border-2 border-brand-500 text-center shadow-sm"
                >
                  <div className="text-[10px] font-black uppercase tracking-wider text-brand-700 dark:text-emerald-400">Finance & Strategy</div>
                  <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">CFO / LEAD STRATEGIST</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Lead Strategic Planning</div>
                </motion.div>

                {/* Sub-connector line */}
                <div className="w-0.5 h-8 bg-brand-400"></div>

                {/* CFO Sub-node */}
                <motion.div 
                  whileHover={{ scale: 1.04 }}
                  className="w-full max-w-[200px] p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-750 border border-slate-200/90 dark:border-slate-700 text-center shadow-xs transition-colors"
                >
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Finance & Audit</div>
                  <div className="text-[10px] text-brand-700 dark:text-emerald-400 font-semibold">Controls & Reporting</div>
                </motion.div>
              </div>

              {/* COMMUNICATION AND LEGAL COLUMN */}
              <div className="flex-1 flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="w-52 p-4 rounded-2xl bg-brand-50/90 dark:bg-slate-800 border-2 border-brand-500 text-center shadow-sm"
                >
                  <div className="text-[10px] font-black uppercase tracking-wider text-brand-700 dark:text-emerald-400">Corporate Governance</div>
                  <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">COMMUNICATION & LEGAL</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Statutory Compliance</div>
                </motion.div>

                {/* Sub-connector line */}
                <div className="w-0.5 h-8 bg-brand-400"></div>
                <div className="w-40 h-0.5 bg-brand-400"></div>

                {/* Legal Sub-nodes */}
                <div className="grid grid-cols-2 gap-2.5 mt-4 w-full max-w-[240px]">
                  {[
                    { title: 'Brand Manager', role: 'Identity & PR' },
                    { title: 'Legal Adviser', role: 'Statutory Affairs' },
                  ].map((legal, lIdx) => (
                    <motion.div 
                      key={lIdx}
                      whileHover={{ scale: 1.04 }}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-750 border border-slate-200/90 dark:border-slate-700 text-center shadow-xs transition-colors"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white">{legal.title}</div>
                      <div className="text-[10px] text-brand-700 dark:text-emerald-400 font-semibold">{legal.role}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Note below Org Chart */}
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          Source: Official WEI Solutions Ltd Organizational Hierarchy & Governance Chart (Page 67).
        </div>

      </div>
    </section>
  );
}
