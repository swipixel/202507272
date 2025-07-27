import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1, once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once });

  return { ref, isInView };
};

// Animation variants
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing curve
    }
  }
};

export const fadeIn = {
  hidden: { 
    opacity: 0,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -50,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 50,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0 }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Enhanced section transition variants
export const sectionTransition = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};