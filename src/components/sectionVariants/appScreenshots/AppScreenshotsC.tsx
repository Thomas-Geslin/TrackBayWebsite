'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Bell, TrendingDown } from 'lucide-react';
import { fadeUp, stagger, zoomInSoft } from '@/shared/animationVariants';
import Mockup from '../../../../public/images/app_preview.png';

function FloatingCard({
  className,
  delay,
  floatAmplitude = 6,
  floatDuration = 4,
  borderClass = 'border-white/10',
  children,
}: {
  className: string;
  delay: number;
  floatAmplitude?: number;
  floatDuration?: number;
  borderClass?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -floatAmplitude, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.8,
        }}
        className={`bg-bg-base/85 backdrop-blur-md border ${borderClass} rounded-2xl px-4 py-3 shadow-2xl`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function AppScreenshotsC() {
  return (
    <section className="relative overflow-hidden md:px-12 py-20">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 65%, var(--purple-glow-sm) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            See TrackBay in action
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-3 text-white/50">
            Everything you need, elegantly presented.
          </motion.p>
        </motion.div>

        {/* Phone + orbiting cards */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: 540, height: 520 }}
        >
          {/* Large ambient glow blob behind phone */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: 300,
              height: 300,
              background: 'var(--purple-glow)',
              borderRadius: '50%',
              filter: 'blur(90px)',
              opacity: 0.45,
            }}
          />

          {/* Central phone */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={zoomInSoft}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 md:w-56"
            style={{ filter: 'drop-shadow(0 0 50px var(--purple-glow))' }}
          >
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src={Mockup}
                alt="TrackBay home screen"
                className="w-full"
                priority
              />
            </motion.div>
          </motion.div>

          {/* ── Netflix card — top left ─────────────────── */}
          <FloatingCard
            className="absolute top-10 left-0 z-20 hidden sm:block"
            delay={0.35}
            floatAmplitude={5}
            floatDuration={4.2}
          >
            <div className="flex items-center gap-3 min-w-[148px]">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-orange text-xs font-bold">N</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Netflix</p>
                <p className="text-[11px] text-white/40">15.99€ / month</p>
              </div>
            </div>
          </FloatingCard>

          {/* ── Monthly total — top right ───────────────── */}
          <FloatingCard
            className="absolute top-6 right-0 z-20 hidden sm:block"
            delay={0.55}
            floatAmplitude={7}
            floatDuration={5}
          >
            <div className="flex items-center gap-3 min-w-[136px]">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <span className="text-white/50 text-sm font-semibold">€</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">127.97€</p>
                <p className="text-[11px] text-white/40">total this month</p>
              </div>
            </div>
          </FloatingCard>

          {/* ── Spotify — bottom left ──────────────────── */}
          <FloatingCard
            className="absolute bottom-20 left-0 z-20 hidden sm:block"
            delay={0.75}
            floatAmplitude={6}
            floatDuration={4.8}
            borderClass="border-brand-green/20"
          >
            <div className="flex items-center gap-3 min-w-[148px]">
              <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-green text-xs font-bold">S</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Spotify</p>
                <p className="text-[11px] text-white/40">9.99€ / month</p>
              </div>
            </div>
          </FloatingCard>

          {/* ── Renewal notification — bottom right ────── */}
          <FloatingCard
            className="absolute bottom-28 right-0 z-20 hidden sm:block"
            delay={0.95}
            floatAmplitude={5}
            floatDuration={3.8}
            borderClass="border-brand-purple/25"
          >
            <div className="flex items-start gap-2.5 max-w-[158px]">
              <div className="mt-0.5 w-7 h-7 rounded-lg bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                <Bell size={12} className="text-brand-purple-light" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Renewal in 2 days</p>
                <p className="text-[11px] text-white/40">Spotify · 9.99€</p>
              </div>
            </div>
          </FloatingCard>

          {/* ── Savings pill — bottom center ───────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="flex items-center gap-2 bg-bg-surface/75 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 shadow-xl whitespace-nowrap"
            >
              <TrendingDown size={13} className="text-brand-green" />
              <span className="text-xs text-white/65">
                Saved{' '}
                <span className="text-brand-green font-semibold">€48</span> vs
                last month
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
