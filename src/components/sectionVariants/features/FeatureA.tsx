import { fadeUp, item, stagger } from '@/shared/animationVariants';
import { motion } from 'framer-motion';
import { BarChart3, Bell, Shield } from 'lucide-react';

type FeatureIcon = 'bar' | 'bell' | 'shield';

function Feature({
  icon,
  title,
  desc,
  accentColor,
}: {
  icon: FeatureIcon;
  title: string;
  desc: string;
  accentColor: { bg: string; text: string; border: string; glow: string };
}) {
  const IconMap = { bar: BarChart3, bell: Bell, shield: Shield };
  const Icon = IconMap[icon];

  return (
    <motion.div
      variants={item}
      className="w-full hover:cursor-default group"
    >
      <div
        style={{ '--glow-color': accentColor.glow } as React.CSSProperties}
        className={[
          'relative rounded-2xl p-6',
          'bg-gradient-to-b from-white/[0.07] to-white/[0.02]',
          'border border-white/10',
          'transition-all duration-300',
          `${accentColor.border} hover:shadow-[0_0_30px_var(--glow-color)]`,
        ].join(' ')}
      >
        {/* Icon container */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${accentColor.bg}`}
        >
          <Icon
            size={20}
            className={accentColor.text}
            strokeWidth={2}
          />
        </div>

        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function FeatureA() {
  return (
    <section
      id="features"
      className="relative overflow-hidden md:px-12"
    >
      {/* Top separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <motion.div
        className="mx-auto max-w-6xl px-4 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Everything in one place
          </h2>
          <p className="mt-3 text-white/50">
            No complexity. No bank connection. Just your subscriptions,
            organized.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            icon="bar"
            title="One clear monthly total"
            desc="See all your fixed expenses in one place — rent, bills, insurance, subscriptions."
            accentColor={{
              bg: 'bg-brand-orange/15',
              text: 'text-brand-orange',
              border: 'hover:border-brand-orange/50',
              glow: 'rgba(255,121,102,0.25)',
            }}
          />

          <Feature
            icon="bell"
            title="Smart reminders"
            desc="Get notified before due dates so you never miss a payment again."
            accentColor={{
              bg: 'bg-brand-purple/15',
              text: 'text-brand-purple-light',
              border: 'hover:border-brand-purple/50',
              glow: 'rgba(94,0,245,0.30)',
            }}
          />

          <Feature
            icon="shield"
            title="Private by design"
            desc="No bank connection required. Just email & name. Data stays under your control."
            accentColor={{
              bg: 'bg-teal-500/15',
              text: 'text-teal-400',
              border: 'hover:border-brand-green/50',
              glow: 'rgba(0,250,217,0.20)',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
