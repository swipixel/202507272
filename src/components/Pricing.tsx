import React from 'react';
import { Check, Zap, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, scaleIn, sectionTransition } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Pricing = () => {
  const { ref, isInView } = useScrollAnimation(0.1);
  const { t } = useTranslation(); // Initialize useTranslation

  const plans = [
    {
      name: t("pricing.quick_fix_name"),
      price: "$15",
      duration: "24-48 hours",
      icon: <Zap className="h-8 w-8" />,
      description: t("pricing.quick_fix_description"),
      features: [
        "Bug fixes and error resolution",
        "Basic performance optimization",
        "Mobile responsiveness check",
        "2 rounds of revisions",
        "48-hour delivery",
        "Email support"
      ],
      popular: false,
      cta: t("pricing.quick_fix_cta")
    },
    {
      name: t("pricing.complete_rescue_name"),
      price: "$50",
      duration: "3-5 days",
      icon: <Shield className="h-8 w-8" />,
      description: t("pricing.complete_rescue_description"),
      features: [
        "Everything in Quick Fix",
        "Full security audit & fixes",
        "SEO optimization",
        "Design improvements",
        "Performance optimization",
        "Content migration"
      ],
      popular: true,
      cta: t("pricing.complete_rescue_cta")
    },
    {
      name: t("pricing.full_transformation_name"),
      price: "$75",
      duration: "1-2 weeks",
      icon: <Star className="h-8 w-8" />,
      description: t("pricing.full_transformation_description"),
      features: [
        "Everything in Complete Rescue",
        "Modern design overhaul",
        "Custom functionality",
        "Advanced SEO setup",
        "Analytics implementation",
        "Training & documentation",
        "Priority support"
      ],
      popular: false,
      cta: t("pricing.full_transformation_cta")
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="pricing" 
      className="py-20 bg-gray-950 relative overflow-hidden"
      ref={ref}
      variants={sectionTransition}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-float-reverse"></div>
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
            {t('pricing.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t('pricing.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group micro-card cursor-hover ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105 animate-pulse-ring' : ''
              }`}
              variants={scaleIn}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {t('pricing.popular_tag')}
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white animate-pulse' : 'bg-gray-800/80 text-gray-300 group-hover:bg-gray-700/80'
                }`}>
                  {plan.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{plan.name}</h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white animate-counter">{plan.price}</span>
                  <span className="text-gray-300 ml-2">one-time</span>
                  <div className="text-sm text-gray-400 mt-1">Delivered in {plan.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start hover:text-gray-200 transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <Check className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0 animate-pulse" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button 
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg micro-button cursor-magnetic ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-blue-500/25 animate-pulse-button'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700/50 hover:border-gray-600/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee Section */}
        <motion.div 
          className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white text-center relative overflow-hidden group transition-transform duration-500 micro-lift cursor-hover"
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-bold mb-4 animate-text-glow"
              variants={fadeInUp}
            >
              {t('pricing.guarantee_title')}
            </motion.h3>
            <motion.p 
              className="text-lg mb-6 opacity-90"
              variants={fadeInUp}
            >
            {t('pricing.guarantee_subtitle')}
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-sm opacity-90"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-center hover:scale-105 transition-transform duration-300 micro-magnetic cursor-hover"
                variants={fadeInUp}
              >
                <Shield className="h-4 w-4 mr-2 animate-pulse" />
              {t('pricing.guarantee_money_back')}
              </motion.div>
              <motion.div 
                className="flex items-center hover:scale-105 transition-transform duration-300 micro-magnetic cursor-hover"
                variants={fadeInUp}
              >
                <Zap className="h-4 w-4 mr-2 animate-pulse" />
              Fast delivery
              </motion.div>
              <motion.div 
                className="flex items-center hover:scale-105 transition-transform duration-300 micro-magnetic cursor-hover"
                variants={fadeInUp}
              >
                <Star className="h-4 w-4 mr-2 animate-pulse" />
              Quality guaranteed
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Pricing;
