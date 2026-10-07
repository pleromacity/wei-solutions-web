import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Building, Briefcase, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      
      {/* Decorative background grid subtle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Dark Slate & Emerald Glassmorphism Card */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900 p-8 sm:p-10 text-white shadow-2xl shadow-slate-900/20 overflow-hidden border border-white/10 group">
              
              {/* Radial ambient glow */}
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                Company Profile
              </div>

              <h3 className="text-3xl font-black tracking-tight mb-4 text-white">
                WHO WE ARE
              </h3>

              <p className="text-brand-100/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                WEI Solutions Ltd is a leading provider of high-quality training and Human Resource Advisory services that empowers individuals and organizations to reach their maximum potentials.
              </p>

              <div className="space-y-4 pt-6 border-t border-white/10">
                
                <motion.div 
                  whileHover={{ x: 6 }} 
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-brand-500/20 text-emerald-400 mt-0.5 border border-brand-500/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      20+ Years Collective Experience
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 opacity-60" />
                    </h4>
                    <p className="text-xs text-brand-200/80 mt-0.5">Hands-on expertise across Human Resources, Capacity Building & Business Administration.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 6 }} 
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-brand-500/20 text-emerald-400 mt-0.5 border border-brand-500/30">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      Public & Private Sector Footprint
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 opacity-60" />
                    </h4>
                    <p className="text-xs text-brand-200/80 mt-0.5">Proven track record delivering exceptional professionalism across Nigerian agencies & corporations.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 6 }} 
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-brand-500/20 text-emerald-400 mt-0.5 border border-brand-500/30">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      End-to-End Implementation
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 opacity-60" />
                    </h4>
                    <p className="text-xs text-brand-200/80 mt-0.5">Recruitment, strategic outsourcing, customized training, and management advisory.</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative with Staggered Entrance */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold tracking-wider uppercase border border-brand-200/60">
              About WEI Solutions Ltd
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Collaborating to Build and Sustain <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-emerald-600">Organizational Capability</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                With a seasoned team of professional consultants spanning management advisory, Human Resource advisory, and business development consulting, we deliver measurable value and exceptional professionalism in Nigeria.
              </p>
              <p>
                Our team of certified trainers, industry specialists, and subject matter experts is dedicated to providing expert guidance and practical assistance—helping our clients improve overall performance, increase productivity, and achieve strategic milestones.
              </p>
              <p>
                Our core focus as a company is to collaborate with clients to help them build and sustain organizational capability so they can seamlessly deliver on strategic business objectives.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div 
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-brand-400 hover:shadow-md transition-all"
              >
                <div className="text-brand-700 font-bold text-sm mb-1.5 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Hands-On In-Country Presence
                </div>
                <div className="text-xs text-slate-600 leading-normal">
                  Close collaboration with statutory and strategic technical agencies (including partners like NASENI) to guarantee grounded impact.
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-brand-400 hover:shadow-md transition-all"
              >
                <div className="text-brand-700 font-bold text-sm mb-1.5 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Sustainable Growth Trajectory
                </div>
                <div className="text-xs text-slate-600 leading-normal">
                  Developing enduring systems and continuous feedback loops that reinforce performance long after training concludes.
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
