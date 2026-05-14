import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Section } from './Section';
import { OPTIONS } from '../data/pricing';

export function Pricing() {
  const [optionId, setOptionId] = useState<'replica' | 'cloud'>('replica');
  const option = OPTIONS.find((o) => o.id === optionId)!;

  return (
    <Section
      id="pricing"
      eyebrow="Planes y precios"
      title={
        <>
          Dos caminos. Tres formas de pagar.{' '}
          <span className="italic text-(--color-flag-strong)">Sin sorpresas.</span>
        </>
      }
      subtitle="Cifras orientativas en pesos colombianos, pensadas para realidades de Medellín. Todo abierto a conversar y ajustar al alcance real."
    >
      {/* Toggle */}
      <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="inline-flex rounded-full border border-(--color-border-strong) bg-(--color-paper) p-1.5 shadow-sm">
          {OPTIONS.map((o) => (
            <button
              key={o.id}
              onClick={() => setOptionId(o.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                optionId === o.id
                  ? 'text-white'
                  : 'text-(--color-ink-muted) hover:text-(--color-ink)'
              }`}
            >
              {optionId === o.id && (
                <motion.div
                  layoutId="pricing-pill"
                  className="absolute inset-0 rounded-full bg-(--color-flag)"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{o.shortLabel}</span>
            </button>
          ))}
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-(--color-ink-subtle)">
          Tiempo estimado · {option.totalTime}
        </p>
      </div>

      {/* Encabezado de la opción */}
      <AnimatePresence mode="wait">
        <motion.div
          key={option.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="mb-12 grid gap-8 rounded-3xl border border-(--color-border-soft) bg-(--color-cream-deep)/40 p-7 md:grid-cols-[1fr_auto] md:gap-12 md:p-10"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--color-flag-strong)">
              {option.label}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              {option.tagline}
            </h3>
            <p className="mt-4 max-w-2xl text-(--color-ink-muted) md:text-lg">
              {option.description}
            </p>
          </div>
          <div className="rounded-2xl border border-(--color-border-soft) bg-(--color-paper) p-5 md:min-w-[260px]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-(--color-ink-subtle)">
              Trabajo incluido
            </p>
            <ul className="mt-3 space-y-2 text-sm text-(--color-ink)">
              {option.whatYouGet.map((w) => (
                <li key={w} className="flex items-start gap-2">
                  <Check size={14} className="mt-1 flex-none text-(--color-flag-strong)" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Cards de planes */}
      <div className="grid gap-5 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {option.plans.map((p, i) => (
            <motion.article
              key={`${option.id}-${p.id}`}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 250, damping: 22 },
              }}
              className={`group relative flex flex-col rounded-3xl border bg-(--color-paper) p-7 transition-shadow duration-300 ${
                p.recommended
                  ? 'border-(--color-flag) shadow-xl shadow-(--color-flag)/15 ring-2 ring-(--color-flag)/20 hover:shadow-2xl hover:shadow-(--color-flag)/25'
                  : 'border-(--color-border-soft) hover:border-(--color-flag)/40 hover:shadow-xl hover:shadow-(--color-flag)/10'
              }`}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-(--color-flag) px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-white shadow-md">
                  <Sparkles size={10} /> Recomendado
                </span>
              )}
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--color-ink-subtle)">
                Modelo {p.id === 'sale' ? 'A' : p.id === 'license' ? 'B' : 'C'}
              </p>
              <h4 className="mt-1 font-display text-2xl font-semibold leading-tight">
                {p.name}
              </h4>
              <p className="mt-1 text-sm text-(--color-ink-muted)">{p.bestFor}</p>

              <div className="my-6 space-y-2 border-y border-(--color-border-soft) py-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-(--color-ink-subtle)">
                    Pago inicial
                  </p>
                  <p className="font-display text-2xl font-semibold text-(--color-ink)">
                    {p.upfront}
                  </p>
                </div>
                <div className="pt-2">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-(--color-ink-subtle)">
                    Mensualidad
                  </p>
                  <p className="font-display text-lg font-semibold text-(--color-warm-strong)">
                    {p.monthly}
                  </p>
                  {p.monthlyNote && (
                    <p className="mt-1 text-xs text-(--color-ink-muted)">
                      {p.monthlyNote}
                    </p>
                  )}
                </div>
              </div>

              <ul className="mb-6 space-y-2.5">
                {p.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm text-(--color-ink)">
                    <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-(--color-flag-soft) text-(--color-flag-strong)">
                      <Check size={10} strokeWidth={3} />
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>

              <p className="mt-auto rounded-xl bg-(--color-cream-deep)/60 px-3 py-3 font-mono text-[11px] leading-relaxed text-(--color-ink-muted)">
                <span className="font-semibold uppercase tracking-widest text-(--color-warm-strong)">
                  IP ·{' '}
                </span>
                {p.ipNote}
              </p>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <p className="mt-10 text-center text-sm text-(--color-ink-subtle)">
        ¿No encaja exactamente en ningún plan? <span className="font-semibold text-(--color-flag-strong)">¡Negociemos!</span>{' '}
        Las cifras son orientativas, el alcance real lo afinamos juntos.
      </p>
    </Section>
  );
}
