'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

import Mockup from '../../public/images/app_preview.png';
import Spending from '../../public/images/spending.png';
import Notification from '../../public/images/notification.png';

/* ---------- Animation settings ---------- */
const easeInOut = [0.4, 0, 0.2, 1] as const; // slow → fast → slow
const DURATION = 2; // seconds

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: easeInOut, delay: i * 0.15 },
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
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION, ease: easeInOut },
  },
};

const stagger: Variants = {
  show: { transition: { staggerChildren: 0.08 } },
};

/* ---------- Page ---------- */
export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          className="mx-auto max-w-6xl px-4 py-24 md:py-28 flex items-center justify-between"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div
            className="w-[50%]"
            variants={fadeRight}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Track your monthly expenses{' '}
              <span className="text-[#FF7966]">before they hit</span>.
            </h1>
            <p className="mt-4 text-lg text-white">
              Centralize rent, bills & subscriptions and get reminded before
              each due date. No bank connection. Private by design.
            </p>

            <motion.div
              id="download"
              className="mt-16 flex items-center gap-4"
              variants={fadeUp}
              custom={1}
            >
              <a
                href="#"
                className="rounded-md bg-[#FFA699] px-5 py-3 text-white font-semibold hover:opacity-90 duration-500 hover:bg-[#FF7966]"
              >
                Get the app
              </a>
              <a
                href="#how"
                className="rounded-md border border-white/30 px-5 py-3 font-semibold hover:border-white/70 duration-500"
              >
                See how it works
              </a>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-white"
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
            className="w-[35%]"
            variants={zoomInSoft}
          >
            <Image
              src={Mockup}
              alt="App preview"
              className="w-full"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="bg-black/[0.1]">
        <motion.div
          className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-3 gap-8"
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
      <section id="how">
        <motion.div
          className="mx-auto max-w-6xl px-4 py-32 grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <Step
            idx="1"
            title="Add your expenses"
            desc="List rent, utilities, insurance, and subscriptions."
            image={Mockup}
            delayIndex={0}
          />

          <motion.div
            variants={fadeUp}
            custom={1}
            className="md:translate-y-6"
          >
            <Step
              idx="2"
              title="Categorize"
              desc="Easily manage, and sort your expenses. To keep track of your money."
              image={Spending}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-10 md:mt-20"
          >
            <Step
              idx="3"
              title="Be reminded"
              desc="Get a reminder 2 days before one of your expense is due."
              image={Notification}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black/[0.1]">
        <motion.div
          className="mx-auto max-w-6xl px-4 py-80 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold"
            variants={fadeUp}
          >
            Ready to take control of your monthly expenses?
          </motion.h2>
          <motion.p
            className="mt-3 text-white"
            variants={fadeUp}
            custom={1}
          >
            Join thousands of users who get notified before due dates — no bank
            connection needed.
          </motion.p>
          <motion.div
            className="mt-16"
            variants={fadeUp}
            custom={2}
          >
            <a
              href="#"
              className="rounded-md bg-[#FFA699] px-6 py-3 text-white font-semibold hover:bg-[#FF7966] duration-300"
            >
              Get the app
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

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
  return (
    <motion.div
      className="rounded-2xl border border-black/10 p-6 odd:bg-[#ff7966] even:bg-[#4E4E61]"
      variants={fadeUp}
      custom={i}
    >
      <h3 className="font-bold text-2xl">{title}.</h3>
      <p className="mt-12 text-black">{desc}</p>
    </motion.div>
  );
}

function Step({
  idx,
  title,
  desc,
  image,
  delayIndex = 0,
}: {
  idx: string;
  title: string;
  desc: string;
  image: any;
  delayIndex?: number;
}) {
  return (
    <motion.div
      className="p-6 rounded-lg mb-16 items-center"
      variants={fadeUp}
      custom={delayIndex}
    >
      <div className="flex items-start gap-8 mb-8">
        <div
          className="h-9 w-9 shrink-0 rounded-full grid place-items-center text-white font-bold"
          style={{ background: '#ff7966' }}
        >
          {idx}
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-white/50">{desc}</p>
        </div>
      </div>

      <motion.div variants={zoomInSoft}>
        <Image
          src={image}
          alt=""
          className="w-[50%] m-auto"
        />
      </motion.div>
    </motion.div>
  );
}
