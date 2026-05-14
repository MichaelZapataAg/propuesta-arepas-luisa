import { motion, AnimatePresence, useReducedMotion, type PanInfo } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';
import { PhoneMockup } from './PhoneMockup';
import { FEATURES } from '../data/features';

export function Features() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const total = FEATURES.length;

  const goNext = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const goPrev = useCallback(
    () => setActive((a) => (a - 1 + total) % total),
    [total],
  );

  // Teclado: ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -60 || velocity < -300) goNext();
    else if (offset > 60 || velocity > 300) goPrev();
  };

  const feat = FEATURES[active];

  return (
    <Section
      id="features"
      eyebrow="Funcionalidades"
      title={<>Seis flujos. Cero fricción.</>}
      subtitle="Cada flujo está pensado en cómo se vende en la calle, no en cómo se ve un dashboard."
    >
      <div className="relative">
        {/* Botones laterales — desktop */}
        <button
          type="button"
          aria-label="Flujo anterior"
          onClick={goPrev}
          className="group absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-(--color-border-strong) bg-(--color-paper) text-(--color-ink) shadow-lg transition hover:-translate-x-[60%] hover:border-(--color-flag) hover:text-(--color-flag-strong) active:scale-95 lg:grid"
        >
          <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          type="button"
          aria-label="Siguiente flujo"
          onClick={goNext}
          className="group absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-(--color-border-strong) bg-(--color-paper) text-(--color-ink) shadow-lg transition hover:translate-x-[60%] hover:border-(--color-flag) hover:text-(--color-flag-strong) active:scale-95 lg:grid"
        >
          <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Card del slide actual */}
        <div className="relative overflow-hidden rounded-[36px] border border-(--color-border-soft) bg-(--color-paper)/60 px-5 py-10 backdrop-blur md:px-12 md:py-16 lg:px-20">
          <AnimatePresence mode="wait" custom={active}>
            <motion.div
              key={feat.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              drag={reduce ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
              className="grid cursor-grab items-center gap-10 active:cursor-grabbing md:gap-14 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20"
            >
              {/* Phone */}
              <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px]">
                {/* Glow detrás */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-8 rounded-[60px] blur-3xl"
                  style={{
                    background:
                      active % 2 === 0
                        ? 'radial-gradient(closest-side, rgba(255, 205, 31, 0.7), transparent)'
                        : 'radial-gradient(closest-side, rgba(14, 122, 44, 0.5), transparent)',
                  }}
                  initial={{ opacity: 0.85, scale: 0.95 }}
                  animate={
                    reduce
                      ? { opacity: 0.85, scale: 1 }
                      : { opacity: [0.85, 1, 0.85], scale: [1, 1.04, 1] }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <PhoneMockup src={feat.screen} alt={feat.screenAlt} />
                {/* Número en esquina */}
                <div className="absolute -left-3 -top-3 grid h-12 w-12 place-items-center rounded-2xl border border-(--color-border-soft) bg-(--color-paper) shadow-md md:-left-4 md:-top-4 md:h-14 md:w-14">
                  <span className="font-display text-xl font-semibold text-(--color-flag-strong) md:text-2xl">
                    {String(active + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Texto */}
              <div className="select-text">
                <span className="inline-block rounded-full bg-(--color-flag-soft) px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-(--color-flag-strong)">
                  {feat.badge}
                </span>
                <h3 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                  {feat.title}
                </h3>
                <p className="mt-5 max-w-lg text-(--color-ink-muted) md:text-lg">
                  {feat.body}
                </p>
                <ul className="mt-7 space-y-3">
                  {feat.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-(--color-ink) md:text-base"
                    >
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-(--color-flag) text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles inferiores: dots + contador + botones mobile */}
        <div className="mt-8 flex items-center justify-between gap-4">
          {/* Mobile prev */}
          <button
            type="button"
            aria-label="Flujo anterior"
            onClick={goPrev}
            className="grid h-11 w-11 place-items-center rounded-full border border-(--color-border-strong) bg-(--color-paper) text-(--color-ink) transition active:scale-95 lg:hidden"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex flex-1 items-center justify-center gap-2">
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                type="button"
                aria-label={`Ir al flujo ${i + 1}: ${f.badge}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className="group relative grid h-9 place-items-center px-1"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    i === active
                      ? 'w-8 bg-(--color-flag)'
                      : 'w-2 bg-(--color-border-strong) group-hover:bg-(--color-ink-subtle)'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile next */}
          <button
            type="button"
            aria-label="Siguiente flujo"
            onClick={goNext}
            className="grid h-11 w-11 place-items-center rounded-full border border-(--color-border-strong) bg-(--color-paper) text-(--color-ink) transition active:scale-95 lg:hidden"
          >
            <ChevronRight size={18} />
          </button>

          {/* Contador desktop */}
          <p className="hidden font-mono text-xs uppercase tracking-widest text-(--color-ink-subtle) lg:block">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
        </div>
      </div>
    </Section>
  );
}
