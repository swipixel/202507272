import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn } from '../hooks/useScrollAnimation';
import { heroLoadVariants, staggeredLoadVariants } from '../hooks/usePageLoad';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Hero = () => {
  const { ref, isInView } = useScrollAnimation(0.2);
  const { t } = useTranslation(); // Initialize useTranslation

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <AnimatedBackground />
      
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={heroLoadVariants}
        initial="hidden"
        animate="animate"
      >
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-text-glow"
            variants={staggeredLoadVariants}
            initial="initial"
            animate="animate"
          >
            <motion.span 
              className="text-white"
              variants={staggeredLoadVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              {t('hero.title').split(' ')[0]} {t('hero.title').split(' ')[1]}
            </motion.span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient-x"
              variants={staggeredLoadVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              {t('hero.title').split(' ').slice(2).join(' ')}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={staggeredLoadVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.button
            onClick={scrollToContact}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-bounce-subtle group micro-button cursor-magnetic"
            variants={staggeredLoadVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 mt-12 text-sm text-gray-400"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            <motion.div className="flex items-center" variants={fadeInUp}>
              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 animate-pulse" />
              {t('hero.guarantee_72h')}
            </motion.div>
            <motion.div className="flex items-center" variants={fadeInUp}>
              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 animate-pulse" />
              {t('hero.guarantee_satisfaction')}
            </motion.div>
            <motion.div className="flex items-center" variants={fadeInUp}>
              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 animate-pulse" />
              {t('hero.guarantee_experience')}
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <motion.div 
              className="text-center group hover:scale-105 transition-transform duration-300 micro-magnetic cursor-hover"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-counter group-hover:text-blue-300">150+</div>
              <div className="text-gray-400">{t('hero.stats_fixed')}</div>
            </motion.div>
            <motion.div 
              className="text-center group hover:scale-105 transition-transform duration-300 micro-magnetic cursor-hover"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 animate-counter group-hover:text-purple-300">72h</div>
              <div className="text-gray-400">{t('hero.stats_delivery')}</div>
            </motion.div>
            <motion.div 
              className="text-center group hover:scale-105 transition-transform duration-300 micro-magnetic cursor-hover"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 animate-counter group-hover:text-emerald-300">98%</div>
              <div className="text-gray-400">{t('hero.stats_satisfaction')}</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
