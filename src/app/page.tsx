'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

import Mockup from '../../public/images/app_preview.png';
import Spending from '../../public/images/spending.png';
import Notification from '../../public/images/notification.png';
import { useModal } from '@/providers/ModalProvider';
import posthog from 'posthog-js';

/* ---------- Animation settings ---------- */
const easeInOut = [0.4, 0, 0.2, 1] as const;
const DURATION = 2;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: easeInOut, delay: i * 0.3 },
  }),
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION, ease: easeInOut },
  },
};

const zoomInSoft: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION, ease: easeInOut },
  },
};

const stagger: Variants = {
  hidden: { opacity: 1 },
  show: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(2px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 260, damping: 26 },
  },
};

/* ---------- Feature accents ---------- */
const accents = [
  {
    ring: 'ring-1 ring-orange-200/50 dark:ring-orange-300/20',
    glow: 'shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_-10px_rgba(255,140,80,0.45)]',
    gradient: 'from-orange-400/20 via-orange-300/10 to-transparent',
    badge: 'bg-gradient-to-r from-orange-500 to-rose-500',
  },
  {
    ring: 'ring-1 ring-indigo-200/50 dark:ring-indigo-300/20',
    glow: 'shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.45)]',
    gradient: 'from-indigo-400/20 via-indigo-300/10 to-transparent',
    badge: 'bg-gradient-to-r from-indigo-500 to-cyan-500',
  },
  {
    ring: 'ring-1 ring-teal-200/50 dark:ring-teal-300/20',
    glow: 'shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.45)]',
    gradient: 'from-teal-400/20 via-teal-300/10 to-transparent',
    badge: 'bg-gradient-to-r from-teal-500 to-emerald-500',
  },
] as const;

/* ---------- Subcomponents ---------- */
function Feature({
  title,
  desc,
  i,
}: {
  title: string;
  desc: string;
  i: number;
}) {
  const a = accents[i % accents.length];

  return (
    <motion.div
      variants={item}
      className="w-full hover:cursor-default"
    >
      <div
        className={[
          'group relative rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur',
          'border border-black/5 dark:border-white/10',
          a.ring,
          'transition-all duration-300',
          'hover:-translate-y-0.5 active:translate-y-0',
          a.glow,
          'focus-within:-translate-y-0.5',
        ].join(' ')}
      >
        {/* top gradient sheen */}
        <div
          className={[
            'pointer-events-none absolute inset-x-0 -top-px h-20 rounded-t-2xl bg-gradient-to-b',
            a.gradient,
          ].join(' ')}
        />

        {/* colorful badge line */}
        <div className="px-6 pt-6">
          <span
            className={[
              'inline-block h-1.5 w-12 rounded-full opacity-90',
              'bg-gradient-to-r',
              a.badge,
            ].join(' ')}
          />
        </div>

        <div className="p-6 pt-4">
          <h3 className="text-balance text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const rowStagger: Variants = {
  hidden: { opacity: 1 },
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

function StepRow({
  idx,
  title,
  desc,
  image,
  reverse = false,
}: {
  idx: string;
  title: string;
  desc: string;
  image: StaticImageData | string;
  reverse?: boolean;
}) {
  return (
    /* CHILD: each row controls its own viewport trigger */
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} // each row animates when ~25% visible
      variants={rowStagger} // local stagger within the row
      className={[
        'grid items-center gap-10 md:gap-14',
        reverse ? 'md:grid-cols-[1fr_1.1fr]' : 'md:grid-cols-[1.1fr_1fr]',
        'md:grid-cols-2',
      ].join(' ')}
    >
      {/* Text */}
      <motion.div
        variants={fadeUp}
        className={reverse ? 'md:order-2' : ''}
      >
        <div className="flex items-center gap-3">
          <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-[#FF7966] text-white text-sm font-bold">
            {idx}
          </span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <h3 className="mt-4 text-2xl md:text-[28px] font-semibold tracking-tight text-neutral-100">
          {title}
        </h3>
        <p className="mt-2 text-white/70">{desc}</p>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={zoomInSoft}
        className={reverse ? 'md:order-1' : ''}
      >
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={image}
              alt=""
              priority={idx === '1'}
              width={250}
              className={reverse ? 'md:ml-auto' : ''}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- Page ---------- */
export default function HomePage() {
  const { openModal } = useModal();

  function handleHeroGetApp() {
    posthog.capture('get_app_clicked', { location: 'hero' });
    openModal();
  }

  function handleHeroSeeHow() {
    posthog.capture('see_how_it_works_clicked', { location: 'hero' });
  }

  function handleCtaGetApp() {
    posthog.capture('get_app_clicked', { location: 'cta_section' });
    openModal();
  }

  function handleCtaSeeHow() {
    posthog.capture('see_how_it_works_clicked', { location: 'cta_section' });
  }

  return (
    <main className="mt-12">
      {/* HERO */}
      <section className="relative overflow-hidden md:px-12">
        <motion.div
          className="mx-auto max-w-6xl px-4 py-24 md:py-28 flex items-center justify-between gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div
            className="w-full md:w-1/2"
            variants={fadeRight}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-neutral-100">
              Track your monthly expenses{' '}
              <span className="bg-gradient-to-r from-[#FF7966] to-[#FFA699] bg-clip-text text-transparent">
                before they hit
              </span>
              .
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Centralize rent, bills & subscriptions and get reminded before
              each due date. No bank connection. Private by design.
            </p>

            <motion.div
              id="download"
              className="mt-10 flex flex-wrap items-center gap-4"
              variants={fadeUp}
              custom={1}
            >
              <button
                onClick={handleHeroGetApp}
                className="rounded-xl bg-[#FFA699] px-5 py-3 text-white font-semibold transition-colors duration-300 hover:bg-[#FF7966] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Get the app
              </button>
              <a
                href="#how"
                onClick={handleHeroSeeHow}
                className="rounded-xl border border-white/25 px-5 py-3 font-semibold text-white/90 transition-all hover:border-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                See how it works
              </a>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-white/70"
              variants={fadeUp}
              custom={2}
            >
              By using TrackBay you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-2 hover:opacity-80"
              >
                Terms
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy_policy"
                className="underline underline-offset-2 hover:opacity-80"
              >
                Privacy Policy
              </Link>
              .
            </motion.p>
          </motion.div>

          {/* Mockup */}
          <motion.div
            className="hidden md:block md:w-5/12"
            variants={zoomInSoft}
          >
            <Image
              src={Mockup}
              alt="App preview"
              className="w-[80%]"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES – polished cards */}
      <section className="relative overflow-hidden md:px-12 bg-black/10">
        <motion.div
          className="mx-auto max-w-6xl px-4 py-20 grid gap-6 sm:gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <Feature
            title="One clear monthly total"
            desc="See all your fixed expenses in one place — rent, bills, insurance, subscriptions."
            i={0}
          />
          <Feature
            title="Smart reminders"
            desc="Get notified before due dates so you never miss a payment again."
            i={1}
          />
          <Feature
            title="Private by design"
            desc="No bank connection required. Just email & name. Data stays under your control."
            i={2}
          />
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="relative"
      >
        {/* subtle grid texture */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* PARENT: no whileInView here */}
        <div className="mx-auto md:px-12 max-w-6xl px-4 py-28 space-y-28">
          <StepRow
            idx="1"
            title="Add your expenses"
            desc="List rent, utilities, insurance, and subscriptions in seconds."
            image={Mockup}
          />

          <StepRow
            idx="2"
            title="Categorize"
            desc="Organize by category and keep a clear view of where your money goes."
            image={Spending}
            reverse
          />

          <StepRow
            idx="3"
            title="Be reminded"
            desc="Automatic reminders 2 days before due dates — never miss a payment."
            image={Notification}
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative md:px-12 overflow-hidden bg-black/10">
        <motion.div
          className="mx-auto max-w-6xl px-4 py-16 lg:py-40"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {/* translucent band */}
          <div className="mx-auto max-w-3xl rounded-3xl bg-white/5 backdrop-blur p-8 sm:p-12 text-center ring-1 ring-white/10">
            <motion.h2
              className="text-balance text-3xl md:text-4xl font-extrabold text-neutral-100"
              variants={fadeUp}
            >
              Ready to take control of your monthly expenses?
            </motion.h2>

            <motion.p
              className="mt-3 text-white/80"
              variants={fadeUp}
              custom={1}
            >
              Join thousands who get notified before due dates — no bank
              connection needed.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              variants={fadeUp}
              custom={2}
            >
              <button
                onClick={handleCtaGetApp}
                className="inline-flex items-center justify-center rounded-xl bg-[#FFA699] px-6 py-3 text-white font-semibold transition-colors duration-300 hover:bg-[#FF7966] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:cursor-pointer"
              >
                Get the app
              </button>

              <a
                href="#how"
                onClick={handleCtaSeeHow}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white/90 font-medium ring-1 ring-white/15 hover:ring-white/25 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                See how it works
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
