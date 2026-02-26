'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { steps } from './steps';

const easeInOut = [0.4, 0, 0.2, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeInOut, delay: i * 0.15 },
  }),
};

export default function HowItWorksC() {
  const [active, setActive] = useState(0);

  return (
    <section id="how" className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-12 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            How it works
          </h2>

          <p className="mt-3 text-white/50">Three simple steps to full clarity.</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 items-center">
          {/* Left: tab list */}
          <div className="flex flex-col gap-2">
            {steps.map((step, i) => (
              <button
                key={step.idx}
                onClick={() => setActive(i)}
                className={[
                  'text-left rounded-2xl px-5 py-4 border transition-all duration-300 focus:outline-none cursor-pointer',
                  active === i
                    ? 'bg-white/[0.06] border-white/15 shadow-[0_0_30px_rgba(94,0,245,0.07)]'
                    : 'border-transparent hover:bg-white/[0.03]',
                ].join(' ')}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-black tabular-nums transition-colors ${active === i ? 'text-brand-orange' : 'text-white/25'}`}
                  >
                    {step.idx}
                  </span>

                  <div
                    className={`w-px h-4 transition-colors ${active === i ? 'bg-brand-purple/50' : 'bg-white/10'}`}
                  />
                  
                  <span
                    className={`font-semibold text-sm transition-colors ${active === i ? 'text-white' : 'text-white/40'}`}
                  >
                    {step.title}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-2 text-sm text-white/50 pl-10 overflow-hidden leading-relaxed"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Right: animated screenshot */}
          <div className="relative flex items-center justify-center min-h-[300px]">
            <div className="absolute inset-0 bg-brand-purple opacity-10 blur-[70px] rounded-full pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full max-w-[260px] mx-auto"
              >
                <Image
                  src={steps[active].image}
                  alt=""
                  className="w-full rounded-3xl ring-1 ring-white/10"
                  style={{ filter: 'drop-shadow(0 0 50px var(--purple-glow))' }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
