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

export default function HowItWorksA() {
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

        <div className="grid gap-4">
          {/* Big top card — Step 1 */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1 min-w-0">
              <span className="text-8xl font-black text-white/[0.04] leading-none select-none block">
                01
              </span>

              <h3 className="text-2xl font-bold text-white mt-1">{steps[0].title}</h3>

              <p className="mt-2 text-white/50 max-w-sm">{steps[0].desc}</p>
            </div>

            <div className="relative w-full md:w-56 flex-shrink-0">
              <div className="absolute inset-0 bg-brand-orange opacity-15 blur-3xl rounded-full" />
              <Image
                src={steps[0].image}
                alt=""
                className="relative w-full"
                style={{ filter: 'drop-shadow(0 20px 40px var(--orange-glow-md))' }}
              />
            </div>

            <div className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 bg-brand-purple opacity-[0.06] rounded-full blur-3xl" />
          </motion.div>

          {/* Two smaller cards — Steps 2 & 3 */}
          <div className="grid md:grid-cols-2 gap-4">
            {([steps[1], steps[2]] as typeof steps[number][]).map((step, i) => (
              <motion.div
                key={step.idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i + 1}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 flex flex-col gap-4"
              >
                <div>
                  <span className="text-7xl font-black text-white/[0.04] leading-none select-none block">
                    {step.idx}
                  </span>

                  <h3 className="text-xl font-bold text-white mt-1">{step.title}</h3>

                  <p className="mt-1 text-white/50 text-sm">{step.desc}</p>
                </div>

                <div className="relative mt-2">
                  <div
                    className="absolute inset-0 blur-3xl opacity-20 rounded-full"
                    style={{ background: step.accent }}
                  />

                  <Image
                    src={step.image}
                    alt=""
                    className="relative w-1/2 mx-auto"
                    style={{ filter: `drop-shadow(0 16px 32px ${step.accent}44)` }}
                  />
                </div>
                
                <div
                  className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-[0.08]"
                  style={{ background: step.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
