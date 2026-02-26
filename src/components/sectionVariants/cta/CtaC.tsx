import { useModal } from '@/providers/ModalProvider';
import { fadeUp, stagger } from '@/shared/animationVariants';
import { motion } from 'framer-motion';
import posthog from 'posthog-js';

const FLOATING_CARDS = [
  { name: 'Netflix', price: '15.99€', floatDuration: 3.2, floatDelay: 0, position: 'left-0 top-12' },
  { name: 'Spotify', price: '9.99€', floatDuration: 2.8, floatDelay: 0.6, position: 'right-0 top-8' },
  { name: 'Adobe CC', price: '59.99€', floatDuration: 3.6, floatDelay: 1.2, position: 'left-4 bottom-16' },
  { name: 'iCloud+', price: '2.99€', floatDuration: 3.0, floatDelay: 0.4, position: 'right-4 bottom-20' },
  { name: 'ChatGPT', price: '20.00€', floatDuration: 2.6, floatDelay: 0.9, position: 'left-8 top-1/2 -translate-y-1/2' },
  { name: 'YouTube', price: '13.99€', floatDuration: 3.4, floatDelay: 1.5, position: 'right-8 top-1/2 -translate-y-1/2' },
];

const AVATARS = ['#5E00F5', '#FF7966', '#00FAD9', '#A07EFF'];

export default function CtaC() {
  const { openModal } = useModal();

  function handleGetApp() {
    posthog.capture('get_app_clicked', { location: 'cta_section' });
    openModal();
  }

  function handleSeeHow() {
    posthog.capture('see_how_it_works_clicked', { location: 'cta_section' });
  }

  return (
    <section className="relative overflow-hidden bg-background pb-24 pt-4 md:px-12">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {/* Outer wrapper: positions floating cards relative to the center card */}
        <div className="relative mx-auto max-w-xl">
          {/* ── Floating background cards (desktop only) ── */}
          {FLOATING_CARDS.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 180,
                damping: 20,
              }}
              viewport={{ once: true }}
              className={`absolute hidden lg:block ${card.position} -translate-x-full lg:-translate-x-28 pointer-events-none z-10`}
            >
              {/* Inner wrapper handles the continuous float */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: card.floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: card.floatDelay,
                }}
                className="flex items-center gap-2.5 rounded-xl bg-bg-base/95 border border-white/10 px-3.5 py-2.5 backdrop-blur-md shadow-lg"
              >
                <span className="text-sm font-medium text-white/80">
                  {card.name}
                </span>
                <span className="text-white/20">—</span>
                <span className="text-sm font-bold text-white">
                  {card.price}
                </span>
              </motion.div>
            </motion.div>
          ))}

          {/* Right-side floating cards */}
          {FLOATING_CARDS.map((card, i) => (
            <motion.div
              key={`right-${card.name}`}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 180,
                damping: 20,
              }}
              viewport={{ once: true }}
              className={`absolute hidden lg:block ${card.position} translate-x-full lg:translate-x-28 pointer-events-none z-10`}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: card.floatDuration + 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: card.floatDelay + 0.5,
                }}
                className="flex items-center gap-2.5 rounded-xl bg-bg-base/95 border border-white/10 px-3.5 py-2.5 backdrop-blur-md shadow-lg"
              >
                <span className="text-sm font-medium text-white/80">
                  {card.name}
                </span>
                <span className="text-white/20">—</span>
                <span className="text-sm font-bold text-white">
                  {card.price}
                </span>
              </motion.div>
            </motion.div>
          ))}

          {/* ── Main center card ── */}
          <div
            className="relative rounded-[2rem] border border-white/8 overflow-hidden px-8 py-14 text-center"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(94,0,245,0.14) 0%, transparent 55%), linear-gradient(180deg, #1C1C23 0%, #14141A 100%)',
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-brand-purple/60 to-transparent" />

            {/* Social proof pill */}
            <motion.div variants={fadeUp} className="flex justify-center mb-7">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/8 rounded-full px-4 py-2">
                <div className="flex -space-x-2">
                  {AVATARS.map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-bg-deep"
                      style={{ background: color }}
                    />
                  ))}
                </div>
                <span className="text-sm text-white/60">
                  <span className="text-white font-semibold">500+</span> users
                  already track their subs
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-[1.1]"
            >
              Your subscriptions are{' '}
              <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">
                silently draining
              </span>{' '}
              your account.
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 text-white/50 text-base max-w-sm mx-auto leading-relaxed"
            >
              TrackBay gives you a complete picture of every recurring charge —
              so nothing slips through the cracks.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <button
                onClick={handleGetApp}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-brand-orange px-8 py-3.5 text-white font-bold transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-[0_0_32px_var(--orange-glow-lg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:cursor-pointer"
              >
                Get the app free
              </button>
              <a
                href="#how"
                onClick={handleSeeHow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl px-6 py-3.5 text-white/70 font-medium ring-1 ring-white/10 hover:ring-white/25 hover:text-white transition-all duration-300"
              >
                See what they track →
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
