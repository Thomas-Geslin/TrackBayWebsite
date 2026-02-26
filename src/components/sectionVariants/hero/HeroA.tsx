import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeUp, stagger, zoomInSoft } from '@/shared/animationVariants';
import Mockup from '../../../../public/images/app_preview.png';
import { useModal } from '@/providers/ModalProvider';
import posthog from 'posthog-js';

export default function () {
  const { openModal } = useModal();

  function handleHeroGetApp() {
    posthog.capture('get_app_clicked', { location: 'hero' });
    openModal();
  }

  function handleHeroSeeHow() {
    posthog.capture('see_how_it_works_clicked', { location: 'hero' });
  }

  return (
    <section className="relative overflow-hidden">
      {/* Ambient background layers */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, var(--purple-glow-sm) 0%, transparent 60%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 40% 30% at 75% 60%, var(--orange-glow-sm) 0%, transparent 50%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 55% 35% at 15% 95%, var(--green-glow-sm) 0%, transparent 60%)',
        }}
      />

      {/* Fine grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <motion.div
        className="mx-auto max-w-4xl px-4 py-28 md:py-36 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {/* Badge pill */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/70">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ✦
            </motion.span>
            Your subscriptions, finally under control
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.05]"
        >
          Never be{' '}
          <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">
            surprised
          </span>
          <br />
          by a bill again.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-6 text-lg md:text-xl text-white/50 max-w-xl mx-auto"
        >
          Centralize every fixed expense, get notified before it hits. No bank
          connection. Just clarity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={handleHeroGetApp}
            className="btn-shimmer relative rounded-xl bg-brand-orange px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-[0_0_24px_var(--orange-glow-lg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Get the app
          </button>
          <a
            href="#how"
            onClick={handleHeroSeeHow}
            className="rounded-xl px-6 py-3 font-semibold text-white/80 ring-1 ring-white/15 hover:ring-white/30 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            See how it works ↓
          </a>
        </motion.div>

        {/* Terms notice */}
        <motion.p
          variants={fadeUp}
          custom={4}
          className="mt-6 text-xs text-white/30"
        >
          By using TrackBay you agree to our{' '}
          <Link
            href="/terms"
            className="underline underline-offset-2 hover:text-white/60 transition-colors"
          >
            Terms
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy_policy"
            className="underline underline-offset-2 hover:text-white/60 transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </motion.p>

        {/* Mockup — floating */}
        <motion.div
          variants={zoomInSoft}
          className="mt-16 mx-auto max-w-xs relative"
        >
          {/* Glow behind mockup */}
          <div className="absolute inset-0 bg-brand-purple opacity-20 blur-[60px] rounded-full scale-75 translate-y-8 pointer-events-none" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden"
            style={{ filter: 'drop-shadow(0 0 40px var(--purple-glow))' }}
          >
            <Image
              src={Mockup}
              alt="App preview"
              className="w-full"
              priority
            />
          </motion.div>

          {/* Floating annotation cards */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute -left-12 top-16 bg-bg-base/90 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/80 backdrop-blur-sm shadow-lg hidden sm:block"
          >
            <span className="text-brand-orange font-semibold">Netflix</span> —
            15.99€
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute -right-10 bottom-24 bg-bg-base/90 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/80 backdrop-blur-sm shadow-lg hidden sm:block"
          >
            <span className="text-brand-green font-semibold">Spotify</span> —
            9.99€
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
