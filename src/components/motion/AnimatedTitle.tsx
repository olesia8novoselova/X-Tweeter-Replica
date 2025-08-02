'use client';

import { motion } from 'framer-motion';
import { titleVariants, titleTransition } from './animations';

export function AnimatedTitle({ 
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={titleVariants}
      transition={titleTransition}
      className={`text-3xl font-bold mb-6 ${className}`}
    >
      {children}
    </motion.h1>
  );
}