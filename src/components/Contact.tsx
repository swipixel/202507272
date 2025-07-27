import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, slideInLeft, slideInRight, sectionTransition } from '../hooks/useScrollAnimation';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Contact = () => {
  const { ref, isInView } = useScrollAnimation(0.1);
  const { t } = useTranslation(); // Initialize useTranslation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send('service_0ci3lso', 'template_jt990vv', formData, 'Z1zeQ6FUiUnDPYQqP')
  .then(result => {
    console.log('Email sent:', result.text);
    alert('Email sent!');
  })
  .catch(error => {
    console.log('Email error:', error.text);
    alert('Failed to send email');
  });

    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <motion.section 
        id="contact" 
        className="py-20 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <Send className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 animate-text-glow">{t('contact.message_sent_title')}</h2>
              <p className="text-lg text-white/90 mb-6">
                {t('contact.message_sent_text')}
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 micro-button cursor-magnetic"
              >
                {t('contact.send_another_message')}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-black relative overflow-hidden"
      ref={ref}
      variants={sectionTransition}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float-diagonal"></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-float-reverse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-1"
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <motion.h3 
                className="text-2xl font-bold text-white mb-6 animate-text-glow"
                variants={fadeInUp}
              >
                {t('contact.lets_talk')}
              </motion.h3>
              
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-start hover:scale-105 transition-transform duration-300 group micro-magnetic cursor-hover"
                  variants={fadeInUp}
                >
                  <Clock className="h-6 w-6 text-blue-400 mr-4 mt-1 animate-pulse group-hover:text-blue-300 micro-icon" />
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300 micro-text">{t('contact.response_time')}</h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 micro-text">Usually within 2 hours</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start hover:scale-105 transition-transform duration-300 group micro-magnetic cursor-hover"
                  variants={fadeInUp}
                >
                  <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1 animate-pulse group-hover:text-blue-300 micro-icon" />
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300 micro-text">{t('contact.email')}</h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 micro-text">info@swipixel.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start hover:scale-105 transition-transform duration-300 group micro-magnetic cursor-hover"
                  variants={fadeInUp}
                >
                  <Phone className="h-6 w-6 text-blue-400 mr-4 mt-1 animate-pulse group-hover:text-blue-300 micro-icon" />
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300 micro-text">{t('contact.emergency_line')}</h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 micro-text">+1 555 400 3034</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 micro-text">For urgent fixes only</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl relative overflow-hidden group hover:scale-105 transition-transform duration-300 micro-lift cursor-hover"
                variants={fadeInUp}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h4 className="text-white font-semibold mb-2 animate-text-glow">{t('contact.need_urgent_help')}</h4>
                  <p className="text-white/90 text-sm mb-4">
                    {t('contact.urgent_help_description')}
                  </p>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-bounce-subtle micro-button cursor-magnetic">
                    {t('contact.call_now')}
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <label className="block text-white font-semibold mb-2">{t('contact.form_name_label')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-gray-700/80 micro-hover cursor-hover"
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-white font-semibold mb-2">{t('contact.form_email_label')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-gray-700/80 micro-hover cursor-hover"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <label className="block text-white font-semibold mb-2">{t('contact.website_url')}</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-gray-700/80 micro-hover cursor-hover"
                    placeholder="https://yourwebsite.com"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-white font-semibold mb-2">{t('contact.service_needed')}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-gray-700/80 micro-hover cursor-hover"
                  >
                    <option value="">{t('contact.select_service')}</option>
                    <option value="quick-fix">{t('contact.quick_fix_option')}</option>
                    <option value="complete-rescue">{t('contact.complete_rescue_option')}</option>
                    <option value="full-transformation">{t('contact.full_transformation_option')}</option>
                    <option value="consultation">{t('contact.free_consultation_option')}</option>
                  </select>
                </motion.div>
              </motion.div>

              <motion.div className="mb-6" variants={fadeInUp}>
                <label className="block text-white font-semibold mb-2">{t('contact.urgency_level')}</label>
                <div className="flex gap-4">
                  {['normal', 'urgent', 'emergency'].map((level) => (
                    <label key={level} className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer micro-scale cursor-hover">
                      <input
                        type="radio"
                        name="urgency"
                        value={level}
                        checked={formData.urgency === level}
                        onChange={handleChange}
                        className="mr-2 text-blue-500"
                      />
                      <span className="text-white capitalize hover:text-blue-300 transition-colors duration-300 micro-text">{level}</span>
                    </label>
                  ))}
                </div>
              </motion.div>

              <motion.div className="mb-8" variants={fadeInUp}>
                <label className="block text-white font-semibold mb-2">{t('contact.form_message_label')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800/80 border border-gray-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-gray-700/80 resize-none micro-hover cursor-hover"
                  placeholder={t('contact.message_placeholder')}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center micro-button cursor-magnetic"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t('contact.form_sending')}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2 ml-5" />
                    {t('contact.form_submit_button')}
                  </>
                )}
              </motion.button>

              <motion.p 
                className="text-gray-400 text-sm mt-4 text-center"
                variants={fadeInUp}
              >
                I'll respond within 2 hours with a detailed assessment and timeline.
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
