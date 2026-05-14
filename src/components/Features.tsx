import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Section } from './Section';
import { PhoneMockup } from './PhoneMockup';
import { FEATURES } from '../data/features';

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Funcionalidades"
      title={
        <>
          Seis flujos. Cero fricción.
        </>
      }
      subtitle="Cada flujo está pensado en cómo se vende en la calle, no en cómo se ve un dashboard."
    >
      <div className="space-y-28 md:space-y-36 lg:space-y-44">
        {FEATURES.map((feat, i) => (
          <FeatureRow key={feat.id} feat={feat} idx={i} />
        ))}
      </div>
    </Section>
  );
}

function FeatureRow({ feat, idx }: { feat: (typeof FEATURES)[number]; idx: number }) {
  const reduce = useReducedMotion();
  const isLeft = feat.align === 'left';
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -80]);
  const phoneRotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : isLeft ? [3, -3] : [-3, 3],
  );

  const phoneAnim = {
    hidden: { opacity: 0, scale: 0.92, y: reduce ? 0 : 40 },
    show: { opacity: 1, scale: 1, y: 0 },
  };
  const textAnim = {
    hidden: { opacity: 0, x: reduce ? 0 : isLeft ? 40 : -40 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={rowRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      transition={{ staggerChildren: 0.15 }}
      className={`grid items-center gap-12 lg:gap-20 ${
        isLeft ? 'lg:grid-cols-[1fr_minmax(0,420px)]' : 'lg:grid-cols-[minmax(0,420px)_1fr]'
      }`}
    >
      {/* Mockup celular */}
      <div
        className={`relative mx-auto w-full max-w-[300px] md:max-w-[340px] ${
          isLeft ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {/* Glow detrás — visible desde el inicio, con pulse sutil */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-8 rounded-[60px] blur-3xl"
          style={{
            background:
              idx % 2 === 0
                ? 'radial-gradient(closest-side, rgba(255, 205, 31, 0.7), transparent)'
                : 'radial-gradient(closest-side, rgba(14, 122, 44, 0.5), transparent)',
          }}
          initial={{ opacity: 0.85, scale: 1 }}
          animate={
            reduce
              ? undefined
              : { opacity: [0.85, 1, 0.85], scale: [1, 1.05, 1] }
          }
          transition={{
            duration: 7 + idx * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: idx * 0.4,
          }}
        />
        <motion.div
          variants={phoneAnim}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: phoneY, rotate: phoneRotate }}
        >
          <PhoneMockup src={feat.screen} alt={feat.screenAlt} />
        </motion.div>
        {/* Número en esquina */}
        <div className="absolute -left-4 -top-4 grid h-14 w-14 place-items-center rounded-2xl border border-(--color-border-soft) bg-(--color-paper) shadow-md">
          <span className="font-display text-2xl font-semibold text-(--color-flag-strong)">
            {String(idx + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Texto */}
      <motion.div
        variants={textAnim}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        className={isLeft ? 'lg:order-1' : 'lg:order-2'}
      >
        <span className="inline-block rounded-full bg-(--color-flag-soft) px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-(--color-flag-strong)">
          {feat.badge}
        </span>
        <h3 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
          {feat.title}
        </h3>
        <p className="mt-5 max-w-lg text-(--color-ink-muted) md:text-lg">
          {feat.body}
        </p>
        <ul className="mt-8 space-y-3">
          {feat.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm text-(--color-ink) md:text-base">
              <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-(--color-flag) text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              {h}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
