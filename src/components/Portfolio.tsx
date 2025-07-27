import React, { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
  sectionTransition,
} from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const { ref, isInView } = useScrollAnimation(0.1);
  const { t } = useTranslation(); // Initialize useTranslation

  const projects = [
    {
      title: "E-commerce Site Revival",
      category: "Performance & Functionality",
      description:
        "Rescued a broken e-commerce site with 3-second load times and 40% cart abandonment. Reduced load time to 0.8s and increased conversions by 65%.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: [
        "65% increase in conversions",
        "0.8s load time",
        "40% reduced bounce rate",
      ],
    },
    {
      title: "Restaurant Website Modernization",
      category: "Design & Mobile",
      description:
        "Transformed an outdated restaurant website into a modern, mobile-first experience with online ordering integration.",
      image:
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["WordPress", "CSS3", "JavaScript", "PHP"],
      results: ["Mobile traffic +120%", "Online orders +200%", "User engagement +85%"],
    },
    {
      title: "Corporate Site Security Fix",
      category: "Security & SEO",
      description:
        "Fixed critical security vulnerabilities and implemented SEO best practices for a corporate website, recovering from Google penalties.",
      image:
        "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Laravel", "MySQL", "Redis", "Cloudflare"],
      results: ["100% security score", "SEO ranking +300%", "Page speed +90%"],
    },
    {
      title: "SaaS Platform Optimization",
      category: "Performance & UX",
      description:
        "Optimized a slow SaaS platform, fixing database queries and implementing modern UI/UX patterns to improve user retention.",
      image:
        "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "PostgreSQL", "Docker", "AWS"],
      results: ["5x faster queries", "User retention +45%", "Support tickets -60%"],
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <motion.section
      id="portfolio"
      className="py-20 bg-black relative overflow-hidden"
      ref={ref}
      variants={sectionTransition}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-diagonal"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4" variants={fadeInUp}>
            {t('portfolio.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 micro-card cursor-hover"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <motion.div
                className="relative h-64 lg:h-96 overflow-hidden group micro-image"
                variants={slideInLeft}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProject}
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
              </motion.div>

              {/* Project Details */}
              <motion.div className="p-8 lg:p-12 flex flex-col justify-center" variants={slideInRight}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`project-${activeProject}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {projects[activeProject].category}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 animate-text-glow">
                      {projects[activeProject].title}
                    </h3>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {projects[activeProject].description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-800/80 border border-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700/80 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {projects[activeProject].results.map((result, index) => (
                          <div
                            key={index}
                            className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                          >
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex justify-between items-center mt-8"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <motion.button
              onClick={prevProject}
              className="flex items-center text-white hover:text-blue-400 transition-all duration-300 group micro-text cursor-hover"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              {t('portfolio.previous')}
            </motion.button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 micro-scale cursor-hover ${
                    index === activeProject
                      ? 'bg-blue-500 animate-pulse'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextProject}
              className="flex items-center text-white hover:text-blue-400 transition-all duration-300 group micro-text cursor-hover"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('portfolio.next')}
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
