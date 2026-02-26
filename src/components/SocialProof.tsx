'use client';

import { fadeUp } from '@/shared/animationVariants';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function SocialProof() {
  const t = useTranslations('SocialProof');
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      custom={0}
      className="bg-white/[0.03] border-y border-white/5 py-5"
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">⭐ 4.8 / 5</span>
            <span className="text-white/50 text-sm">{t('ratingLabel')}</span>
          </div>

          <div className="w-px h-6 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">{t('usersCount')}</span>
            <span className="text-white/50 text-sm">{t('usersLabel')}</span>
          </div>

          <div className="w-px h-6 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">{t('platforms')}</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
