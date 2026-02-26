import { useModal } from '@/providers/ModalProvider';
import { fadeUp, stagger } from '@/shared/animationVariants';
import { motion } from 'framer-motion';
import posthog from 'posthog-js';

export default function CtaA() {
  const { openModal } = useModal();

  function handleCtaGetApp() {
    posthog.capture('get_app_clicked', { location: 'cta_section' });
    openModal();
  }

  function handleCtaSeeHow() {
    posthog.capture('see_how_it_works_clicked', { location: 'cta_section' });
  }

  return (
    <section className="relative md:px-12 overflow-hidden bg-background pb-24 pt-4">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {/* Glow card */}
        <div
          className="relative mx-auto max-w-2xl rounded-[2rem] border border-brand-purple/30 overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(94,0,245,0.15) 0%, transparent 60%), #14141A',
          }}
        >
          {/* Halo blur behind */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-brand-purple opacity-20 blur-[80px] pointer-events-none rounded-full" />

          <div className="relative px-8 py-12 text-center">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-white"
            >
              Take control of your{' '}
              <span className="bg-gradient-to-r from-brand-purple to-brand-orange bg-clip-text text-transparent">
                subscriptions
              </span>{' '}
              today.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-white/50"
            >
              Join 500+ users who never miss a payment date.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={handleCtaGetApp}
                className="btn-shimmer inline-flex items-center justify-center rounded-xl bg-brand-orange px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-[0_0_24px_var(--orange-glow-lg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:cursor-pointer"
              >
                Get the app
              </button>

              <a
                href="#how"
                onClick={handleCtaSeeHow}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white/80 font-medium ring-1 ring-white/15 hover:ring-white/30 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                See how it works
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
