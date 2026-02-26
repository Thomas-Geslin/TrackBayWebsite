'use client';

import { useModal } from '@/providers/ModalProvider';
import { fadeUp, stagger } from '@/shared/animationVariants';
import { motion } from 'framer-motion';
import posthog from 'posthog-js';

const STATS = [
  { value: '500+', label: 'active users' },
  { value: '8', label: 'avg. subs tracked' },
  { value: '0€', label: 'bank connection' },
];

export default function CtaD() {
  const { openModal } = useModal();

  function handleGetApp() {
    posthog.capture('get_app_clicked', { location: 'cta_section' });
    openModal();
  }

  return (
    <section className="relative overflow-hidden bg-background pb-24 pt-4 md:px-12">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Center purple bloom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 60%, rgba(94,0,245,0.08) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="mx-auto max-w-4xl px-4 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="text-brand-orange/60 text-xs font-semibold uppercase tracking-widest mb-6"
        >
          Quick question
        </motion.p>

        {/* Bold challenge headline */}
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.05]"
        >
          Can you name every subscription{' '}
          <span className="relative inline-block">
            you&apos;re paying for
            {/* Animated underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-orange to-brand-purple origin-left rounded-full"
            />
          </span>{' '}
          right now?
        </motion.h2>

        {/* Punchline */}
        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-6 text-xl text-white/35 font-light"
        >
          Most people can&apos;t.{' '}
          <span className="text-white/70 font-medium">TrackBay can.</span>
        </motion.p>

        {/* Single prominent CTA */}
        <motion.div variants={fadeUp} custom={3} className="mt-12">
          <button
            onClick={handleGetApp}
            className="btn-shimmer group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-orange px-10 py-5 text-white font-bold text-xl transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-[0_0_56px_var(--orange-glow-lg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:cursor-pointer"
          >
            Find out what I&apos;m missing
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              →
            </motion.span>
          </button>

          <p className="mt-4 text-xs text-white/25">
            No credit card · No bank access · Just clarity
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="mt-16 flex items-center justify-center gap-10 md:gap-16"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              {i > 0 && (
                <div className="hidden md:block absolute -translate-x-6 h-8 w-px bg-white/8" />
              )}
              <span className="text-2xl font-black text-white">{stat.value}</span>
              <span className="text-xs text-white/30">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
