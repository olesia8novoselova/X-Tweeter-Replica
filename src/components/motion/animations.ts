export const pageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const pageTransition = {
  duration: 0.3,
  ease: [0.17, 0.67, 0.83, 0.67] as [number, number, number, number],
};

export const titleVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const titleTransition = {
  delay: 0.1,
  duration: 0.4,
  ease: "easeOut" as const,
};

