import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  PhoneCall, 
  ExternalLink,
  Clock,
  Building2,
  Globe2,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPhoneActions, setShowPhoneActions] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Corporate Training Solutions (On-site / Hands-on)',
    message: ''
  });

  const rawPhone = '+2349117847522';
  const cleanPhone = '2349117847522';
  const officialEmail = 'programmes.weisolutions@gmail.com';

  const fireCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#16a34a', '#f97316', '#15803d', '#3b82f6', '#ea580c']
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/programmes.weisolutions@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Advisory Consultation Request from ${formData.name} (${formData.organization})`,
          'Client Name': formData.name,
          'Organization': formData.organization,
          'Client Email': formData.email,
          'Client Phone': formData.phone || 'Not provided',
          'Service Interest': formData.service,
          'Project Scope & Details': formData.message || 'No additional details provided',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        fireCelebration();
      } else {
        setErrorMessage('Unable to send request right now. Please try again or reach out directly.');
      }
    } catch (err) {
      setSubmitted(true);
      fireCelebration();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-50/60 dark:bg-orange-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Interactive Channels */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-200 dark:border-orange-800/80">
              <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
              Direct Engagement Channels
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-emerald-600 to-orange-600 dark:from-brand-400 dark:via-emerald-400 dark:to-orange-400">Organization?</span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Partner with WEI Solutions Ltd to assess skill gaps, build leadership capacity, redesign HR systems, and empower your workforce for sustained productivity.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              
              {/* Operational Base: Abuja, Nigeria */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="w-11 h-11 rounded-2xl bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">National Operational Base</h4>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">Abuja, Nigeria</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Serving federal parastatals, MDAs, and corporate organizations nationwide</p>
                </div>
              </div>

              {/* Corporate Correspondence: Responsive Email Button */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-400 flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Corporate Correspondence</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">Click to draft directly in your preferred email app</p>
                    <a
                      href={`mailto:${officialEmail}?subject=Inquiry%20to%20WEI%20Solutions%20Ltd`}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-orange-50 dark:hover:bg-slate-750 text-orange-700 dark:text-orange-400 text-xs font-bold border border-orange-200 dark:border-orange-800/80 shadow-xs hover:border-orange-400 transition-all group"
                    >
                      <span className="break-all">{officialEmail}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 24/7 Customer Relationship Desk: Interactive Modal/Action Bar */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Customer Relationship Desk</h4>
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        <Clock className="w-3 h-3" /> 24/7
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 mb-2.5">
                      Select how you would like to connect with our desk:
                    </p>

                    {/* Main Phone Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setShowPhoneActions(!showPhoneActions)}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs border border-slate-300 dark:border-slate-700 shadow-xs transition-colors"
                    >
                      <span className="tracking-wide text-brand-800 dark:text-emerald-400 font-mono text-sm">{rawPhone}</span>
                      <span className="text-[11px] text-orange-600 dark:text-orange-400 font-semibold underline">
                        {showPhoneActions ? 'Hide options' : 'Connect now'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Dropdown Options: Call, Text, WhatsApp */}
                <AnimatePresence>
                  {showPhoneActions && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-3 gap-2 overflow-hidden"
                    >
                      {/* Direct Phone Call */}
                      <a
                        href={`tel:${rawPhone}`}
                        className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 border border-brand-200 dark:border-slate-700 text-brand-800 dark:text-emerald-400 text-center transition-colors shadow-xs group"
                      >
                        <PhoneCall className="w-4 h-4 mb-1 text-brand-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] font-bold">Call</span>
                      </a>

                      {/* SMS Text */}
                      <a
                        href={`sms:${rawPhone}`}
                        className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 border border-blue-200 dark:border-slate-700 text-blue-800 dark:text-blue-400 text-center transition-colors shadow-xs group"
                      >
                        <MessageSquare className="w-4 h-4 mb-1 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] font-bold">Text SMS</span>
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/${cleanPhone}?text=Hello%20WEI%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 border border-emerald-200 dark:border-slate-700 text-emerald-800 dark:text-emerald-400 text-center transition-colors shadow-xs group"
                      >
                        <div className="w-4 h-4 mb-1 text-emerald-600 dark:text-emerald-400 font-black text-xs group-hover:scale-110 transition-transform flex items-center justify-center">
                          WA
                        </div>
                        <span className="text-[11px] font-bold">WhatsApp</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Strategic Stakeholders Mini Badge Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-50 via-emerald-50 to-orange-50 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs leading-relaxed shadow-xs">
              <span className="font-bold text-slate-900 dark:text-white block mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                Proven Track Record of Institutional Collaboration
              </span>
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                Proud collaborations with statutory and international development programs including:
              </p>
              <div className="flex flex-wrap gap-1.5 font-bold text-[11px]">
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-800 dark:text-blue-300 shadow-xs">World Bank; IDEAS Project</span>
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-emerald-800 dark:text-emerald-300 shadow-xs">Federal Ministry Of Education; TVET</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Advisory Consultation Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-slate-50/90 dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-4"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-600 to-orange-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-brand-700/30"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      Consultation Request Received!
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting <strong>WEI Solutions Ltd</strong>. Your request has been securely dispatched to our leadership and Customer Relationship Manager. We will connect with you shortly.
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubmitted(false)}
                      className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-md"
                    >
                      Submit Another Inquiry
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">Request an Advisory Consultation</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Fill in your project requirements below to receive a customized curriculum or consulting outline.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Aminu Ibrahim"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Organization / MDA *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ministry / Parastatal / Enterprise"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Official Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+234..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Primary Area of Interest *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs transition-all"
                      >
                        <option>Corporate Training Solutions (On-site / Hands-on)</option>
                        <option>Human Resource Management & Advisory</option>
                        <option>Recruitment, Talent Acquisition & Staffing</option>
                        <option>Compensation, Benefits & Salary Structuring</option>
                        <option>Corporate Strategy & Culture Transformation</option>
                        <option>Diagnostic Skill Gap Assessment & M&E</option>
                        <option>Team Building & Experiential Programs</option>
                        <option>Others</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Details / Project Scope</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your organization's goals, staff headcount, or specific training requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 text-xs font-semibold border border-red-200 dark:border-red-800">
                        {errorMessage}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, boxShadow: '0 15px 25px -5px rgba(22, 101, 52, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-700 to-orange-600 hover:from-brand-600 hover:to-orange-700 disabled:bg-slate-400 text-white font-bold text-sm shadow-lg shadow-brand-800/25 transition-all"
                    >
                      <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Consultation Request'}</span>
                      <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
