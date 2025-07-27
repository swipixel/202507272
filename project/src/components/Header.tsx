import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLoadVariants } from '../hooks/usePageLoad';
import Logo from '/public/logo.png';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation(); // Initialize useTranslation

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-gray-800/50' : 'bg-transparent'
      }`}
      variants={navLoadVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="logo" className="w-9" />
            <span className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-magnetic">SwiPixel</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-all duration-300 capitalize relative group micro-text cursor-hover"
            >
              {t('header.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-white transition-all duration-300 capitalize relative group micro-text cursor-hover"
            >
              {t('header.portfolio')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-white transition-all duration-300 capitalize relative group micro-text cursor-hover"
            >
              {t('header.pricing')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-all duration-300 capitalize relative group micro-text cursor-hover"
            >
              {t('header.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-pulse-button micro-button cursor-magnetic"
          >
            {t('header.get_quote')}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300 micro-scale cursor-hover"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 py-4 border border-gray-800/50 animate-slide-down">
            <nav className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors duration-300 capitalize text-left hover:translate-x-2 transform micro-text cursor-hover"
              >
                {t('header.services')}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-white transition-colors duration-300 capitalize text-left hover:translate-x-2 transform micro-text cursor-hover"
              >
                {t('header.portfolio')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-white transition-colors duration-300 capitalize text-left hover:translate-x-2 transform micro-text cursor-hover"
              >
                {t('header.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors duration-300 capitalize text-left hover:translate-x-2 transform micro-text cursor-hover"
              >
                {t('header.contact')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mt-4 hover:scale-105 micro-button cursor-magnetic"
              >
                {t('header.get_quote')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
