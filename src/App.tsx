import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { usePageLoad, pageLoadVariants } from './hooks/usePageLoad';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function App() {
  const { isLoaded } = usePageLoad();
  const { i18n } = useTranslation(); // Get the i18n instance

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen bg-black"
        variants={pageLoadVariants}
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
      >
        <CustomCursor />
        <PageTransition>
          {/* Language Switcher */}
          <div className="fixed top-4 right-4 z-50 flex space-x-2">
            <button 
              onClick={() => changeLanguage('en')} 
              className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-200 ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('hu')} 
              className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-200 ${i18n.language === 'hu' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              HU
            </button>
          </div>

          <Header />
          <Hero />
          <Services />
          <Portfolio />
          <Pricing />
          <Contact />
          <Footer />
        </PageTransition>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
