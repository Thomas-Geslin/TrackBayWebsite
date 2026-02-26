import { fadeUp, stagger } from '@/shared/animationVariants';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
  {
    q: 'Est-ce que TrackBay accède à mon compte bancaire ?',
    a: 'Non, jamais. Vous entrez vos abonnements manuellement. Pas de connexion bancaire, pas de données financières partagées.',
  },
  {
    q: "L'app est-elle gratuite ?",
    a: 'Oui, TrackBay est gratuit.',
  },
  {
    q: 'Disponible sur iOS et Android ?',
    a: "Oui, disponible sur l'App Store et Google Play.",
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: 'Vos données sont chiffrées et stockées de façon sécurisée. Nous ne les vendons jamais.',
  },
  {
    q: 'Comment fonctionnent les rappels ?',
    a: 'Vous recevez une notification push 2 jours avant chaque date de prélèvement configurée.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex justify-between items-center text-left gap-4 group focus:outline-none hover:cursor-pointer"
      >
        <span className="font-medium text-white/80 group-hover:text-white transition-colors duration-150">
          {q}
        </span>
        <span className="flex-shrink-0 text-white/40 group-hover:text-white/70 transition-colors duration-150">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-white/60 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqA() {
  return (
    <section className="relative md:px-12 py-24 bg-background">
      <div className="mx-auto max-w-2xl px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Everything you need to know
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-3 text-white/50"
          >
            Questions fréquentes sur TrackBay.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {faqItems.map((faq) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
