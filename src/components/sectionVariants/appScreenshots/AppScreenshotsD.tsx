'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { BarChart3, Bell, Home } from 'lucide-react';
import { fadeUp, stagger } from '@/shared/animationVariants';
import Mockup from '../../../../public/images/app_preview.jpg';
import Spending from '../../../../public/images/spending.jpg';
import Notification from '../../../../public/images/notification.jpg';
import { useTranslations } from 'next-intl';

type Tab = {
  id: string;
  label: string;
  alt: string;
  Icon: React.ElementType;
  title: string;
  description: string;
  image: StaticImageData;
  tag: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  glowColor: string;
  dotColor: string;
};

const contentVariants = {
  initial: (dir: number) => ({ opacity: 0, x: dir * 16 }),
  animate: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -16 }),
};

export default function AppScreenshotsD() {
  const t = useTranslations('AppScreenshots');
  const [activeIndex, setActiveIndex] = useState(0);

  const TABS: Tab[] = [
    {
      id: 'home',
      label: t('tab1Label'),
      alt: t('tab1Alt'),
      Icon: Home,
      title: t('tab1Title'),
      description: t('tab1Desc'),
      image: Mockup,
      tag: t('tab1Tag'),
      accentText: 'text-brand-purple-light',
      accentBg: 'bg-brand-purple/15',
      accentBorder: 'border-brand-purple/40',
      glowColor: 'rgba(94, 0, 245, 0.15)',
      dotColor: 'var(--purple-light)',
    },
    {
      id: 'analytics',
      label: t('tab2Label'),
      alt: t('tab2Alt'),
      Icon: BarChart3,
      title: t('tab2Title'),
      description: t('tab2Desc'),
      image: Spending,
      tag: t('tab2Tag'),
      accentText: 'text-brand-orange',
      accentBg: 'bg-brand-orange/15',
      accentBorder: 'border-brand-orange/40',
      glowColor: 'rgba(255, 121, 102, 0.12)',
      dotColor: 'var(--orange)',
    },
    {
      id: 'alerts',
      label: t('tab3Label'),
      alt: t('tab3Alt'),
      Icon: Bell,
      title: t('tab3Title'),
      description: t('tab3Desc'),
      image: Notification,
      tag: t('tab3Tag'),
      accentText: 'text-brand-green',
      accentBg: 'bg-brand-green/10',
      accentBorder: 'border-brand-green/30',
      glowColor: 'rgba(0, 250, 217, 0.1)',
      dotColor: 'var(--green)',
    },
  ];
  const directionRef = useRef(1);
  const current = TABS[activeIndex];

  const handleTabChange = (i: number) => {
    directionRef.current = i > activeIndex ? 1 : -1;
    setActiveIndex(i);
  };

  return (
    <section className="relative overflow-hidden md:px-12 py-20">
      {/* Ambient glow — crossfades between tabs */}
      {TABS.map((tab) => (
        <motion.div
          key={tab.id}
          className="pointer-events-none absolute inset-0 -z-10"
          animate={{ opacity: tab.id === current.id ? 1 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            background: `radial-gradient(ellipse 60% 55% at 25% 60%, ${tab.glowColor} 0%, transparent 65%)`,
          }}
        />
      ))}

      {/* Fine grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

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
            {t('title')}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-3 text-white/50"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Main layout */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-16"
        >
          {/* ── Left: Phone ────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="relative w-52 md:w-60 flex-shrink-0"
          >
            {/* Color glow blob that transitions with active tab */}
            <motion.div
              animate={{ background: current.glowColor }}
              transition={{ duration: 0.7 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
              style={{ width: 220, height: 220, filter: 'blur(65px)' }}
            />

            {/* Phone image — all pre-rendered, opacity-switched to avoid decode stall */}
            <div className="relative overflow-hidden rounded-[2.1rem]">
              {TABS.map((tab) => (
                <motion.div
                  key={tab.id}
                  animate={{
                    opacity: tab.id === current.id ? 1 : 0,
                    scale: tab.id === current.id ? 1 : 0.96,
                    y: tab.id === current.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className={
                    tab.id === current.id ? 'relative' : 'absolute inset-0'
                  }
                  style={{
                    pointerEvents: tab.id === current.id ? 'auto' : 'none',
                  }}
                >
                  <Image
                    src={tab.image}
                    alt={tab.alt}
                    className="w-full"
                    sizes="(max-width: 768px) 208px, 240px"
                    priority={tab.id === 'home'}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Tab selector + content ──────────────────────── */}
          <div className="flex-1 w-full max-w-md">
            {/* Tab buttons */}
            <motion.div
              variants={fadeUp}
              className="flex gap-2 mb-10 flex-wrap justify-center md:justify-start"
            >
              {TABS.map((tab, i) => {
                const isActive = i === activeIndex;

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(i)}
                    className={[
                      'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border hover:cursor-pointer',
                      isActive
                        ? `${tab.accentBg} ${tab.accentText} ${tab.accentBorder}`
                        : 'text-white/40 border-transparent hover:text-white/70 hover:border-white/10 hover:bg-white/5',
                    ].join(' ')}
                  >
                    <tab.Icon size={14} />
                    {tab.label}
                  </button>
                );
              })}
            </motion.div>

            {/* Animated tab content */}
            <motion.div
              variants={fadeUp}
              className="min-h-[190px]"
            >
              <AnimatePresence
                mode="wait"
                custom={directionRef.current}
              >
                <motion.div
                  key={current.id}
                  custom={directionRef.current}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="text-center md:text-left"
                >
                  {/* Feature tag pill */}
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium mb-5 border ${current.accentBg} ${current.accentText} ${current.accentBorder}`}
                  >
                    ✦ {current.tag}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-white/50 leading-relaxed text-sm md:text-base">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Step indicators — always rendered, never animated out */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mt-8 justify-center md:justify-start"
            >
              {TABS.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => handleTabChange(i)}
                  className="h-1.5 rounded-full hover:cursor-pointer"
                  style={{
                    width: i === activeIndex ? 24 : 6,
                    background:
                      i === activeIndex
                        ? tab.dotColor
                        : 'rgba(255,255,255,0.2)',
                    transition: 'width 0.6s ease, background 0.6s ease',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
