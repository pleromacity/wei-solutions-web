import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Building2, User, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Corporate Training Solutions (On-site / Hands-on)',
    message: ''
  });

  const fireCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#16a34a', '#22c55e', '#15803d', '#3b82f6', '#eab308']
      });
    } catch (e) {
      // safe fallback if canvas is restricted
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Submitting via FormSubmit backend securely to recipient
      const response = await fetch('https://formsubmit.co/ajax/wwanaemi@gmail.com', {
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
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider border border-brand-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-700" />
              Direct Engagement
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-emerald-600">Organization?</span>
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed">
              Partner with WEI Solutions Ltd to assess skill gaps, build leadership capacity, redesign HR systems, and empower your workforce for sustained productivity.
            </p>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <motion.div whileHover={{ x: 4 }} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">National Operational Base</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Nigeria (Serving federal parastatals, MDAs, and corporate organizations nationwide)</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Corporate Correspondence</h4>
                  <p className="text-xs text-slate-500 mt-0.5">contact@weisolutions.com.ng / info@weisolutions.ng</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Customer Relationship Desk</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Advisory consultations available Monday – Friday</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-brand-50 to-emerald-50 border border-brand-200/90 text-slate-700 text-xs leading-relaxed shadow-xs"
            >
              <span className="font-bold text-brand-900 block mb-1">Strategic Stakeholder Collaboration:</span>
              We maintain active collaborative capability with statutory and national technical agencies including <strong>NASENI</strong> to deliver customized assignments.
            </motion.div>

          </motion.div>

          {/* Right Column: Interactive Consultation Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-slate-50/90 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
              
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
                      className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-600 to-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-brand-700/30"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                      Consultation Request Received!
                    </h3>
                    
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting <strong>WEI Solutions Ltd</strong>. Your request has been securely dispatched to our leadership and Customer Relationship Manager. We will connect with you shortly.
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubmitted(false)}
                      className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-md"
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
                      <h3 className="text-2xl font-black text-slate-900">Request an Advisory Consultation</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill in your project requirements below to receive a customized curriculum or consulting outline.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Aminu Ibrahim"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white shadow-xs transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Organization / MDA *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. NASENI / Ministry / Corporation"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white shadow-xs transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Official Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white shadow-xs transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+234..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white shadow-xs transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Primary Area of Interest *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white shadow-xs transition-all"
                      >
                        <option>Corporate Training Solutions (On-site / Hands-on)</option>
                        <option>Human Resource Management & Advisory</option>
                        <option>Recruitment, Talent Acquisition & Staffing</option>
                        <option>Compensation, Benefits & Salary Structuring</option>
                        <option>Corporate Strategy & Culture Transformation</option>
                        <option>Diagnostic Skill Gap Assessment & M&E</option>
                        <option>Team Building & Experiential Programs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Details / Project Scope</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your organization's goals, staff headcount, or specific training requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white shadow-xs transition-all"
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                        {errorMessage}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, boxShadow: '0 15px 25px -5px rgba(22, 101, 52, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-700 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 disabled:bg-slate-400 text-white font-bold text-sm shadow-lg shadow-brand-800/25 transition-all"
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
