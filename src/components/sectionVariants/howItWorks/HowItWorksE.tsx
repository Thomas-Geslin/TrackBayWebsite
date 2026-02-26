'use client';

import { motion } from 'framer-motion';
import { Receipt, Layers, BellRing } from 'lucide-react';
import { stagger, item } from '@/shared/animationVariants';
import { fadeUp } from '@/shared/animationVariants';

const STEPS = [
  {
    idx: '01',
    Icon: Receipt,
    title: 'Add your expenses',
    desc: 'List rent, utilities, insurance, and subscriptions in seconds.',
    accentText: 'text-brand-orange',
    accentBg: 'bg-brand-orange/10',
    accentBorder: 'border-brand-orange/20',
    iconColor: 'text-brand-orange',
  },
  {
    idx: '02',
    Icon: Layers,
    title: 'Categorize',
    desc: 'Organize by category and keep a clear view of where your money goes.',
    accentText: 'text-brand-purple-light',
    accentBg: 'bg-brand-purple/10',
    accentBorder: 'border-brand-purple/20',
    iconColor: 'text-brand-purple-light',
  },
  {
    idx: '03',
    Icon: BellRing,
    title: 'Be reminded',
    desc: 'Automatic reminders 2 days before due dates — never miss a payment.',
    accentText: 'text-brand-green',
    accentBg: 'bg-brand-green/10',
    accentBorder: 'border-brand-green/20',
    iconColor: 'text-brand-green',
  },
] as const;

export default function HowItWorksE() {
  return (
    <section id="how" className="relative bg-background py-24">
      {/* Subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-5xl px-4 md:px-12">
        {/* Header */}
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

        {/* Cards grid */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-[2.125rem] left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] border-t border-dashed border-white/10 pointer-events-none"
            aria-hidden
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.idx}
                variants={item}
                className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-7 backdrop-blur-sm"
              >
                {/* Step number + icon row */}
                <div className="flex flex-col gap-3">
                  <span className={`text-xs font-black tabular-nums ${step.accentText} opacity-70`}>
                    {step.idx}
                  </span>

                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border ${step.accentBg} ${step.accentBorder}`}
                  >
                    <step.Icon size={18} className={step.iconColor} strokeWidth={1.75} />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-white text-[1.0625rem] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
