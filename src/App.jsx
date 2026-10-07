import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SidebarNav from './components/SidebarNav';
import MinimalHeader from './components/MinimalHeader';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import VisionMissionValues from './components/VisionMissionValues';
import TrainingImpact from './components/TrainingImpact';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import OrgChart from './components/OrgChart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowRight, Sparkles, Building2, ShieldCheck, Compass, GraduationCap, BarChart3, CheckCircle, Network, Mail } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('home');

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.25, ease: 'easeIn' } }
  };

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-brand-500 selection:text-white relative">
      
      {/* 1. EXPANDABLE SIDE NAVIGATION BUTTON & SLIDE-OUT DRAWER (Mobile, Pad & Laptop compatible) */}
      <SidebarNav activePage={activePage} setActivePage={handleNavigate} />

      {/* 2. SLIM STICKY HEADER */}
      <MinimalHeader activePage={activePage} setActivePage={handleNavigate} />

      {/* 3. DYNAMIC FULL PAGE CONTENT */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* HOME PAGE: Hero + Interactive Portal Cards to all sections */}
          {activePage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Hero onNavigate={handleNavigate} />
              
              {/* Quick Jump Portal Grid */}
              <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-600 block mb-1">
                      Interactive Portal Directory
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      Explore WEI Solutions Ltd
                    </h2>
                    <p className="text-slate-500 text-sm mt-2">
                      Click any division below or expand the navigation button at the top-left to enter each dedicated section.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        id: 'about',
                        title: 'Who We Are',
                        desc: 'Discover our background, 20+ years collective experience and nationwide footprint in Nigeria.',
                        icon: ShieldCheck,
                        gradient: 'from-brand-600 to-emerald-600'
                      },
                      {
                        id: 'values',
                        title: 'Vision, Mission & Values',
                        desc: 'Explore our long-term vision, core mission and the acclaimed P.R.I.D.E standard of excellence.',
                        icon: Compass,
                        gradient: 'from-emerald-600 to-teal-600'
                      },
                      {
                        id: 'services',
                        title: 'Corporate Services',
                        desc: 'Experiential on-site training, HR advisory, compensation structuring, and 7-stage culture roadmaps.',
                        icon: GraduationCap,
                        gradient: 'from-blue-600 to-indigo-600'
                      },
                      {
                        id: 'impact',
                        title: 'Training Impact & Stats',
                        desc: 'Empirical research metrics (41%, 83%, 34%, 41%) proving the superiority of gamified learning.',
                        icon: BarChart3,
                        gradient: 'from-amber-600 to-orange-600'
                      },
                      {
                        id: 'why-us',
                        title: 'Why Choose Us',
                        desc: 'Specialized consultants, integrated evaluation reporting, and 100% adaptable corporate solutions.',
                        icon: CheckCircle,
                        gradient: 'from-teal-600 to-cyan-600'
                      },
                      {
                        id: 'leadership',
                        title: 'Organizational Structure',
                        desc: 'Review our executive governance hierarchy, C-suite, project directors, and specialized units.',
                        icon: Network,
                        gradient: 'from-purple-600 to-pink-600'
                      },
                      {
                        id: 'contact',
                        title: 'Book Advisory Consultation',
                        desc: 'Submit your institutional capacity or HR requirements directly to our consultation desk.',
                        icon: Mail,
                        gradient: 'from-brand-700 to-slate-900'
                      },
                    ].map((card) => {
                      const Icon = card.icon;
                      return (
                        <motion.button
                          key={card.id}
                          onClick={() => handleNavigate(card.id)}
                          whileHover={{ y: -6, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="text-left bg-slate-50/70 hover:bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-brand-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                        >
                          <div>
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${card.gradient} text-white flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform`}>
                              <Icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                              {card.title}
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {card.desc}
                            </p>
                          </div>

                          <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-brand-700">
                            <span>Open Dedicated Page</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* DEDICATED PAGE: Who We Are */}
          {activePage === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-6"
            >
              <AboutUs />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Vision, Mission & Values */}
          {activePage === 'values' && (
            <motion.div
              key="values"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-6"
            >
              <VisionMissionValues />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Corporate Services */}
          {activePage === 'services' && (
            <motion.div
              key="services"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-6"
            >
              <Services />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Training Impact & Stats */}
          {activePage === 'impact' && (
            <motion.div
              key="impact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-6"
            >
              <TrainingImpact />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Why Choose Us */}
          {activePage === 'why-us' && (
            <motion.div
              key="why-us"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-6"
            >
              <WhyChooseUs />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Leadership & Org Structure */}
          {activePage === 'leadership' && (
            <motion.div
              key="leadership"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-6"
            >
              <OrgChart />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Contact & Consultation */}
          {activePage === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-6"
            >
              <Contact />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 4. FOOTER */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
