import { useModal } from '@/providers/ModalProvider';
import { fadeUp, stagger } from '@/shared/animationVariants';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import posthog from 'posthog-js';
import { useEffect, useRef } from 'react';

const SUBSCRIPTIONS = [
  { name: 'Netflix', price: '15.99€' },
  { name: 'Spotify', price: '9.99€' },
  { name: 'Adobe CC', price: '59.99€' },
  { name: 'iCloud+', price: '2.99€' },
  { name: 'YouTube', price: '13.99€' },
  { name: 'ChatGPT', price: '20.00€' },
];

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 2.5, ease: 'easeOut' });
    return controls.stop;
  }, [inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function CtaB() {
  const { openModal } = useModal();

  function handleGetApp() {
    posthog.capture('get_app_clicked', { location: 'cta_section' });
    openModal();
  }

  return (
    <section className="relative overflow-hidden bg-background pb-28 pt-12 md:px-12">
      {/* Warm ambient glow on the left */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(255,80,50,0.07) 0%, transparent 65%)',
        }}
      />

      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ── Left: Pain framing ── */}
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-5"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange/70 border border-brand-orange/20 bg-brand-orange/5 rounded-full px-3 py-1">
                Did you know?
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-[1.1]"
            >
              The average person wastes{' '}
              <span className="text-brand-orange">
                <AnimatedCounter target={312} />€
              </span>{' '}
              a year on forgotten subscriptions.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 text-white/50 text-base leading-relaxed"
            >
              That gym you haven't visited since January. The design tool trial
              you forgot to cancel. The streaming service everyone shares — but
              you still pay for alone.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-3 text-white/30 text-sm"
            >
              TrackBay puts every charge on your radar so nothing slips through.
            </motion.p>
          </div>

          {/* ── Right: Card grid + CTA ── */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="space-y-4"
          >
            {/* Subscription cards */}
            <div className="grid grid-cols-2 gap-2">
              {SUBSCRIPTIONS.map((sub, i) => (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between rounded-xl bg-bg-base border border-white/[0.06] px-3 py-2.5"
                >
                  <span className="text-sm text-white/70 font-medium">
                    {sub.name}
                  </span>
                  <span className="text-sm font-semibold text-white/90">
                    {sub.price}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Monthly total row */}
            <div className="flex items-center justify-between border-t border-white/8 pt-4 px-1">
              <span className="text-sm text-white/40">Monthly total</span>
              <span className="text-lg font-bold text-white">122.95€</span>
            </div>

            {/* CTA button */}
            <button
              onClick={handleGetApp}
              className="btn-shimmer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-4 text-white font-bold text-base transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-[0_0_36px_var(--orange-glow-lg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:cursor-pointer"
            >
              Stop losing money →
            </button>

            <p className="text-center text-xs text-white/25">
              Free · No bank connection required
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
