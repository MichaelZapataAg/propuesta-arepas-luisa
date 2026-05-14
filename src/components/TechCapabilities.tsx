import { motion } from 'framer-motion';
import { Bluetooth, Database, Smartphone, ShieldCheck, Zap, Code2 } from 'lucide-react';
import { Section } from './Section';
import type { MouseEvent } from 'react';

function handleSpotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

const PILLARS = [
  {
    icon: Database,
    title: 'Offline-first',
    body: 'Toda la base de datos vive en el celular (SQLite). El vendedor no depende del 4G ni del wifi. Backup manual exportable a archivo.',
  },
  {
    icon: Bluetooth,
    title: 'Bluetooth térmico nativo',
    body: 'Cliente BLE propio: descubre la impresora, abre canal y manda el bitmap del recibo. Cuando llegue otra impresora, se adapta el protocolo en horas, no en semanas.',
  },
  {
    icon: Smartphone,
    title: 'React Native + Expo',
    body: 'Un solo código que corre en Android e iOS. Build firmada de producción, sin Play Store ni revisión.',
  },
  {
    icon: ShieldCheck,
    title: 'Sin servidor, sin cuotas',
    body: 'No hay backend que pagar mensualmente. Cada celular tiene sus datos. Si la empresa quiere sync, se agrega después.',
  },
  {
    icon: Zap,
    title: 'Updates como WhatsApp',
    body: 'Misma firma de keystore en cada versión: Android lo trata como actualización, sin perder datos. Mandas el APK y listo.',
  },
  {
    icon: Code2,
    title: 'Stack moderno y mantenible',
    body: 'TypeScript estricto, drizzle-orm con migraciones reales, react-query, react-hook-form, framer-motion. Cualquier dev senior lo recoge.',
  },
];

const STACK = [
  'React Native',
  'Expo SDK 54',
  'TypeScript',
  'SQLite + drizzle',
  'react-native-ble-plx',
  'react-query',
  'Reanimated',
  'EAS Build',
];

export function TechCapabilities() {
  return (
    <Section
      id="tech"
      eyebrow="Bajo el capó"
      title={
        <>
          La parte que no se ve también está{' '}
          <span className="italic text-(--color-flag-strong)">muy bien hecha</span>.
        </>
      }
      subtitle="Lo que tienen otras apps copy-paste de templates ya está. Lo que pocas tienen también."
      className="bg-paper"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              whileHover={{
                y: -6,
                transition: { type: 'spring', stiffness: 280, damping: 22 },
              }}
              onMouseMove={handleSpotlight}
              className="group relative overflow-hidden rounded-3xl border border-(--color-border-soft) bg-(--color-paper) p-7 transition-[border-color,box-shadow] duration-300 hover:border-(--color-flag)/40 hover:shadow-2xl hover:shadow-(--color-flag)/10"
            >
              {/* Spotlight de hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(14, 122, 44, 0.08), transparent 60%)',
                }}
              />
              <motion.div
                className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-flag) text-(--color-corn)"
                whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <Icon size={22} strokeWidth={2} />
              </motion.div>
              <h3 className="relative font-display text-xl font-semibold leading-snug text-(--color-ink) transition-colors group-hover:text-(--color-flag-strong)">
                {p.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-(--color-ink-muted)">
                {p.body}
              </p>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 rounded-3xl border border-(--color-border-soft)/60 bg-(--color-cream-deep)/50 p-8 md:p-10"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--color-ink-subtle)">
          Stack
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {STACK.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4 + i * 0.04,
                type: 'spring',
                stiffness: 300,
                damping: 18,
              }}
              whileHover={{
                y: -3,
                scale: 1.08,
                transition: { type: 'spring', stiffness: 400, damping: 14 },
              }}
              className="cursor-default rounded-full border border-(--color-border-strong) bg-(--color-paper) px-3.5 py-1.5 font-mono text-xs text-(--color-ink) transition-colors hover:border-(--color-flag) hover:bg-(--color-flag-soft) hover:text-(--color-flag-strong)"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
