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

function App() {
  const { isLoaded } = usePageLoad();

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