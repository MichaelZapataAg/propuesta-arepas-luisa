import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section } from './Section';
import { FAQ as FAQ_DATA } from '../data/faq';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      eyebrow="Preguntas"
      title="Lo que normalmente preguntan"
      subtitle="Si la respuesta no está aquí, escríbeme y la agrego."
    >
      <div className="mx-auto max-w-3xl divide-y divide-(--color-border-soft)/70 border-y border-(--color-border-soft)/70">
        {FAQ_DATA.map((item, i) => {
          const open = openIdx === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left transition"
              >
                <h3 className="font-display text-lg font-semibold leading-snug text-(--color-ink) transition-colors group-hover:text-(--color-flag-strong) md:text-xl">
                  {item.q}
                </h3>
                <span
                  className={`mt-1 grid h-8 w-8 flex-none place-items-center rounded-full border border-(--color-border-strong) bg-(--color-paper) transition-transform ${
                    open ? 'rotate-45' : ''
                  }`}
                >
                  <Plus size={16} className="text-(--color-ink)" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-12 text-(--color-ink-muted) md:text-lg">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
