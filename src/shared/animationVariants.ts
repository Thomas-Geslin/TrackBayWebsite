import { Variants } from 'framer-motion';

const easeInOut = [0.4, 0, 0.2, 1] as const;
const DURATION = 0.7;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: easeInOut, delay: i * 0.15 },
  }),
};

export const zoomInSoft: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION, ease: easeInOut },
  },
};

export const stagger: Variants = {
  hidden: { opacity: 1 },
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(2px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 260, damping: 26 },
  },
};
