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

export default function HowItWorksD() {
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            How it works
          </h2>

          <p className="mt-3 text-white/50">Three simple steps to full clarity.</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center">
          {/* Left: steps 1 & 2 */}
          <div className="flex flex-col gap-4 md:items-end">
            {([steps[0], steps[1]] as typeof steps[number][]).map((step, i) => (
              <motion.div
                key={step.idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                custom={i}
                onMouseEnter={() => setActive(i)}
                className={[
                  'md:text-right p-5 rounded-2xl border transition-all duration-300 cursor-default w-full md:max-w-xs',
                  active === i ? 'border-white/[0.12] bg-white/[0.04]' : 'border-transparent',
                ].join(' ')}
              >
                <span
                  className={`text-xs font-black transition-colors ${active === i ? 'text-brand-orange' : 'text-white/25'}`}
                >
                  {step.idx}
                </span>

                <h3
                  className={`text-base font-semibold mt-0.5 transition-colors ${active === i ? 'text-white' : 'text-white/45'}`}
                >
                  {step.title}
                </h3>

                <p className="mt-1 text-sm text-white/35 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center: animated phone */}
          <div className="relative hidden md:flex items-center justify-center w-60 flex-shrink-0">
            <div className="absolute inset-0 bg-brand-purple opacity-15 blur-[60px] rounded-full pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full"
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

          {/* Right: step 3 */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              onMouseEnter={() => setActive(2)}
              className={[
                'p-5 rounded-2xl border transition-all duration-300 cursor-default w-full md:max-w-xs',
                active === 2 ? 'border-white/[0.12] bg-white/[0.04]' : 'border-transparent',
              ].join(' ')}
            >
              <span
                className={`text-xs font-black transition-colors ${active === 2 ? 'text-brand-orange' : 'text-white/25'}`}
              >
                {steps[2].idx}
              </span>

              <h3
                className={`text-base font-semibold mt-0.5 transition-colors ${active === 2 ? 'text-white' : 'text-white/45'}`}
              >
                {steps[2].title}
              </h3>
              
              <p className="mt-1 text-sm text-white/35 leading-relaxed">{steps[2].desc}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
