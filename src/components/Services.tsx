import React from 'react';
import { Wrench, Zap, Shield, Smartphone, Search, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn, sectionTransition } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Website Repair",
      description: "Fix broken functionality, resolve errors, and restore your website to full working order."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Speed up slow websites with advanced optimization techniques and modern best practices."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Responsiveness",
      description: "Make your website look perfect on all devices with responsive design updates."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Updates",
      description: "Patch vulnerabilities, update outdated code, and implement security best practices."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Improve search rankings with technical SEO fixes and optimization strategies."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design Modernization",
      description: "Update outdated designs with modern aesthetics and improved user experience."
    }
  ];

  return (
    <motion.section 
      id="services" 
      className="py-20 bg-gray-950 relative overflow-hidden"
      ref={ref}
      variants={sectionTransition}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-float-reverse"></div>
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
            What I Fix & Improve
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            From broken functionality to outdated designs, I specialize in bringing websites back to life 
            and making them better than ever.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group micro-card cursor-hover"
              variants={scaleIn}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
            >
              <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110 transform micro-icon">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 micro-text">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 micro-text">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden group transition-transform duration-500 micro-lift cursor-hover"
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 animate-text-glow">Emergency Website Fixes</h3>
              <p className="text-lg mb-6 opacity-90">
              Website completely down? Need an urgent fix? I offer 24-hour emergency repair services.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounce-subtle micro-button cursor-magnetic"
              >
                Get Emergency Help
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;