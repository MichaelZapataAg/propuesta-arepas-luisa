import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  contained?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  contained = true,
}: Props) {
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section id={id} className={`relative py-16 md:py-20 lg:py-24 ${className}`}>
      <div className={contained ? 'mx-auto w-full max-w-7xl px-6 md:px-10' : ''}>
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mb-10 max-w-3xl md:mb-12"
          >
            {eyebrow && (
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="font-mono text-xs uppercase tracking-[0.2em] text-(--color-flag-strong)"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mt-3 text-balance text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="mt-5 max-w-2xl text-balance text-lg text-(--color-ink-muted) md:text-xl"
              >
                {subtitle}
              </motion.div>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
