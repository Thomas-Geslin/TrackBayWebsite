'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
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

export default function HowItWorksB() {
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

        <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Connecting dashed line (desktop only) */}
          <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px border-t border-dashed border-white/15 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              className="flex flex-col items-center text-center gap-5 relative z-10"
            >
              {/* Number bubble */}
              <div
                className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full border border-white/15 bg-background"
                style={{ boxShadow: `0 0 24px ${step.accent}55` }}
              >
                <span className="bg-gradient-to-br from-brand-orange to-brand-purple bg-clip-text text-transparent font-black text-sm">
                  {step.idx}
                </span>
              </div>

              {/* Screenshot */}
              <div className="relative w-full max-w-[160px]">
                <div
                  className="absolute inset-0 blur-2xl opacity-20 rounded-full"
                  style={{ background: step.accent }}
                />
                <Image
                  src={step.image}
                  alt=""
                  className="relative w-full rounded-2xl ring-1 ring-white/10 shadow-2xl"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                
                <p className="mt-1 text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
