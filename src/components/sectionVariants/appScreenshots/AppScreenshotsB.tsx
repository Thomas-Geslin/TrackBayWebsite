'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Receipt, Layers, BellRing } from 'lucide-react';
import { stagger, item, fadeUp } from '@/shared/animationVariants';
import Mockup from '../../../../public/images/app_preview.png';
import Spending from '../../../../public/images/spending.png';
import Notification from '../../../../public/images/notification.png';

const STEPS = [
  {
    idx: '01',
    Icon: Receipt,
    title: 'Add your expenses',
    desc: 'List rent, utilities, insurance, and subscriptions in seconds.',
    image: Mockup,
    accentText: 'text-brand-orange',
    accentBg: 'bg-brand-orange/10',
    accentBorder: 'border-brand-orange/20',
    glowColor: 'rgba(255, 121, 102, 0.18)',
  },
  {
    idx: '02',
    Icon: Layers,
    title: 'Categorize',
    desc: 'Organize by category and keep a clear view of where your money goes.',
    image: Spending,
    accentText: 'text-brand-purple-light',
    accentBg: 'bg-brand-purple/10',
    accentBorder: 'border-brand-purple/20',
    glowColor: 'rgba(94, 0, 245, 0.28)',
  },
  {
    idx: '03',
    Icon: BellRing,
    title: 'Be reminded',
    desc: 'Automatic reminders 2 days before due dates — never miss a payment.',
    image: Notification,
    accentText: 'text-brand-green',
    accentBg: 'bg-brand-green/10',
    accentBorder: 'border-brand-green/20',
    glowColor: 'rgba(0, 250, 217, 0.12)',
  },
] as const;

export default function AppScreenshotsB() {
  return (
    <section id="how" className="relative overflow-hidden bg-background py-24">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(94, 0, 245, 0.10) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 md:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            How TrackBay works
          </h2>
          <p className="mt-3 text-white/50">
            Three steps from setup to full control.
          </p>
        </motion.div>

        {/* Step cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.idx}
              variants={item}
              className="flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden"
            >
              {/* Phone area */}
              <div className="relative flex items-end justify-center px-10 pt-10 min-h-[300px]">
                {/* Per-step glow */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none rounded-full"
                  style={{
                    width: 200,
                    height: 200,
                    background: step.glowColor,
                    filter: 'blur(65px)',
                  }}
                />
                <Image
                  src={step.image}
                  alt={step.title}
                  className="relative w-36 md:w-40"
                  style={{ filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.45))' }}
                />
              </div>

              {/* Step info */}
              <div className="px-6 py-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-black tabular-nums ${step.accentText} opacity-60`}>
                    {step.idx}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border ${step.accentBg} ${step.accentBorder}`}
                  >
                    <step.Icon size={15} className={step.accentText} strokeWidth={1.75} />
                  </div>
                </div>

                <h3 className="font-semibold text-white text-base leading-snug mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
