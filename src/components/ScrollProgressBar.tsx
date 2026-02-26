'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="hidden sm:block fixed right-0 top-0 w-[5px] h-full z-50 bg-bg-deep">
      <motion.div
        className="w-full origin-top"
        style={{
          scaleY,
          height: '100%',
          background: 'linear-gradient(to bottom, var(--purple-light), var(--purple))',
          boxShadow: '0 0 8px var(--purple-glow)',
        }}
      />
    </div>
  );
}
