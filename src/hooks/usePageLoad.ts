import { useState, useEffect } from 'react';

export const usePageLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Simulate initial load completion
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Mark initial load as complete after animations
    const initialLoadTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(initialLoadTimer);
    };
  }, []);

  return { isLoaded, isInitialLoad };
};

// Enhanced animation variants for page load
export const pageLoadVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const heroLoadVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const navLoadVariants = {
  initial: {
    opacity: 0,
    y: -20,
    backdropFilter: 'blur(0px)'
  },
  animate: {
    opacity: 1,
    y: 0,
    backdropFilter: 'blur(12px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.1
    }
  }
};

export const staggeredLoadVariants = {
  initial: {
    opacity: 0,
    y: 25
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};