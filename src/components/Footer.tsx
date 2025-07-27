import React from 'react';
import { Code, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, sectionTransition } from '../hooks/useScrollAnimation';
import Logo from '/public/logo.png'

const Footer = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer 
      className="bg-black border-t border-gray-800/50 relative overflow-hidden"
      ref={ref}
      variants={sectionTransition}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-reverse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand */}
          <motion.div className="md:col-span-1" variants={fadeInUp}>
            <div className="flex items-center space-x-2 mb-4">
              {/*<Code className="h-8 w-8 text-blue-400 animate-pulse micro-icon cursor-magnetic" />*/}
              <img src={Logo} alt="logo" className="w-[15%]" />
              <span className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-magnetic">SwiPixel</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional web developer specializing in rescuing broken websites and bringing them back to life.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800/80 border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:scale-110 micro-scale cursor-magnetic">
                <Mail className="h-5 w-5 text-gray-400 hover:text-white micro-icon" />
              </div>
              <div className="w-10 h-10 bg-gray-800/80 border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:scale-110 micro-scale cursor-magnetic">
                <Phone className="h-5 w-5 text-gray-400 hover:text-white micro-icon" />
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 micro-text cursor-hover">Services</h3>
            <motion.ul className="space-y-2" variants={staggerContainer}>
              <motion.li variants={fadeInUp}><a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block micro-text cursor-hover">Website Repair</a></motion.li>
              <motion.li variants={fadeInUp}><a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block micro-text cursor-hover">Performance Optimization</a></motion.li>
              <motion.li variants={fadeInUp}><a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block micro-text cursor-hover">Security Updates</a></motion.li>
              <motion.li variants={fadeInUp}><a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block micro-text cursor-hover">Mobile Optimization</a></motion.li>
              <motion.li variants={fadeInUp}><a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block micro-text cursor-hover">SEO Fixes</a></motion.li>
            </motion.ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 micro-text cursor-hover">Quick Links</h3>
            <motion.ul className="space-y-2" variants={staggerContainer}>
              <motion.li variants={fadeInUp}><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 micro-text cursor-hover">Services</button></motion.li>
              <motion.li variants={fadeInUp}><button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 micro-text cursor-hover">Portfolio</button></motion.li>
              <motion.li variants={fadeInUp}><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 micro-text cursor-hover">Pricing</button></motion.li>
              <motion.li variants={fadeInUp}><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 micro-text cursor-hover">Contact</button></motion.li>
              <motion.li variants={fadeInUp}><a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block micro-text cursor-hover">Privacy Policy</a></motion.li>
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 micro-text cursor-hover">Contact</h3>
            <motion.div className="space-y-3" variants={staggerContainer}>
              <motion.div 
                className="flex items-center text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 micro-magnetic cursor-hover"
                variants={fadeInUp}
              >
                <Mail className="h-4 w-4 mr-3 animate-pulse micro-icon" />
                info@swipixel.com
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 micro-magnetic cursor-hover"
                variants={fadeInUp}
              >
                <Phone className="h-4 w-4 mr-3 animate-pulse micro-icon" />
                +1 555 400 3034
              </motion.div>
              <motion.div 
                className="flex items-start text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 micro-magnetic cursor-hover"
                variants={fadeInUp}
              >
                <MapPin className="h-4 w-4 mr-3 mt-1 animate-pulse micro-icon" />
                Available Worldwide
                <br />Remote Service
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300"
            variants={fadeInUp}
          >
            © 2025 SwiPixel. All rights reserved.
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 animate-bounce-subtle micro-button cursor-magnetic"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;