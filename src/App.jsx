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
import Stakeholders from './components/Stakeholders';
import Footer from './components/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } }
  };

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-orange-500 selection:text-white relative">
      
      {/* 1. PIN ATTACHED DIRECTLY TO TOP-LEFT CORNER */}
      <SidebarNav activePage={activePage} setActivePage={handleNavigate} />

      {/* 2. MINIMAL SLIM HEADER */}
      <MinimalHeader activePage={activePage} setActivePage={handleNavigate} />

      {/* 3. DYNAMIC FULL PAGE CONTENT */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* HOME PAGE: Hero + Strategic Stakeholder Collaborations Showcase (NO duplicate links) */}
          {activePage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Hero onNavigate={handleNavigate} />
              
              {/* Strategic Collaborations Showcase: NASENI, World Bank, Federal Ministry of Education */}
              <Stakeholders />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Who We Are */}
          {activePage === 'about' && (
            <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-6">
              <AboutUs />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Vision, Mission & Values */}
          {activePage === 'values' && (
            <motion.div key="values" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-6">
              <VisionMissionValues />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Corporate Services */}
          {activePage === 'services' && (
            <motion.div key="services" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-6">
              <Services />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Training Impact & Stats */}
          {activePage === 'impact' && (
            <motion.div key="impact" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-6">
              <TrainingImpact />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Why Choose Us */}
          {activePage === 'why-us' && (
            <motion.div key="why-us" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-6">
              <WhyChooseUs />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Leadership & Org Structure */}
          {activePage === 'leadership' && (
            <motion.div key="leadership" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-6">
              <OrgChart />
            </motion.div>
          )}

          {/* DEDICATED PAGE: Contact & Consultation */}
          {activePage === 'contact' && (
            <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-6">
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
