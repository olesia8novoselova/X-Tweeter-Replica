'use client';

import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './animations';

export function AnimatedPage({ 
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Animated Gradient Background */}
      <motion.div 
        className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          background: [
            'linear-gradient(45deg, #000000, #15202b)',
            'linear-gradient(45deg, #15202b, #192734)',
            'linear-gradient(45deg, #192734, #000000)'
        ]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0
        }}
      />

      {/* Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={pageTransition}
        className={`flex justify-center min-h-screen ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}