import { motion } from 'framer-motion';
import { fadeUp, stagger, zoomInSoft } from '@/shared/animationVariants';
import Image from 'next/image';
import Mockup from '../../../../public/images/app_preview.png';
import Spending from '../../../../public/images/spending.png';
import Notification from '../../../../public/images/notification.png';

export default function AppScreenshotA() {
  return (
    <section className="relative overflow-hidden md:px-12 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            See TrackBay in action
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-3 text-white/50"
          >
            Everything you need, elegantly presented.
          </motion.p>
        </motion.div>

        {/* 3D perspective screenshot showcase */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="flex items-end justify-center gap-6 md:gap-12"
          style={{ perspective: '1200px' }}
        >
          {/* Left screenshot */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="hidden md:block w-48 opacity-70"
            style={{ transform: 'rotateY(15deg)' }}
          >
            <div className="overflow-hidden shadow-2xl">
              <Image
                src={Spending}
                alt="Spending view"
                className="w-full"
              />
            </div>

            <p className="mt-3 text-center text-xs text-white/40">
              Analytics — trends
            </p>
          </motion.div>

          {/* Center screenshot — hero */}
          <motion.div
            variants={zoomInSoft}
            className="w-56 md:w-72 flex-shrink-0 scale-105"
          >
            <Image
              src={Mockup}
              alt="Home view"
              className="w-full"
              priority
              style={{
                boxShadow:
                  '0 0 80px var(--purple-glow-md), 0 40px 80px rgba(0,0,0,0.5)',
              }}
            />

            <p className="mt-3 text-center text-xs text-white/60 font-medium">
              Home — vue mensuelle
            </p>
          </motion.div>

          {/* Right screenshot */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="hidden md:block w-48 opacity-70"
            style={{ transform: 'rotateY(-15deg)' }}
          >
            <div className="rounded-[2rem] border-2 border-white/10 overflow-hidden shadow-2xl">
              <Image
                src={Notification}
                alt="Notification view"
                className="w-full"
              />
            </div>
            <p className="mt-3 text-center text-xs text-white/40">
              Notification reçue
            </p>
          </motion.div>
        </motion.div>

        {/* Floating annotation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/30 rounded-full px-4 py-1.5 text-xs text-brand-purple-light">
            ✦ 15 subscriptions tracked
          </span>
        </motion.div>
      </div>
    </section>
  );
}
