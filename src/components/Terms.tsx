import { motion } from 'framer-motion';
import {
  CalendarClock,
  CreditCard,
  ShieldCheck,
  FileSignature,
  RotateCcw,
  Clock,
} from 'lucide-react';
import { Section } from './Section';

const TERMS = [
  {
    icon: CreditCard,
    title: 'Forma de pago',
    body: 'Transferencia bancaria, Nequi o PSE. Sin IVA — soy independiente, no responsable de IVA. Factura electrónica si la empresa la necesita.',
  },
  {
    icon: CalendarClock,
    title: 'Pago — Compra del código',
    body: 'Anticipo del 50% para arrancar el desarrollo. El otro 50% se paga cuando se entrega la app, el repositorio y el material técnico.',
  },
  {
    icon: CalendarClock,
    title: 'Pago — Licencia de uso',
    body: 'Anticipo del 50% del inicial para arrancar. El otro 50% al entregar la app. La mensualidad empieza el mes siguiente al go-live, facturada el día 1.',
  },
  {
    icon: Clock,
    title: 'Validez de la propuesta',
    body: 'Las cifras y condiciones aquí descritas son válidas por 30 días corridos desde la fecha de envío. Después renegociamos.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía sobre bugs',
    body: 'Cubrimos sin costo cualquier bug que se reporte dentro de los 30 días posteriores a la entrega final. Pasado ese periodo aplica el modelo contratado.',
  },
  {
    icon: RotateCcw,
    title: 'Cambios de alcance',
    body: 'Cambios pequeños se acomodan en el camino. Cambios grandes (features no acordadas) se cotizan aparte antes de empezar a construirse.',
  },
];

export function Terms() {
  return (
    <Section
      id="terms"
      eyebrow="Letra clara"
      title={
        <>
          Términos y forma de pago.{' '}
          <span className="italic text-(--color-flag-strong)">Sin letra chica.</span>
        </>
      }
      subtitle="Todo lo que necesitan saber antes de firmar. Si algo no encaja, lo conversamos y lo ajustamos antes."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TERMS.map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: 'easeOut',
              }}
              whileHover={{
                y: -4,
                transition: { type: 'spring', stiffness: 280, damping: 22 },
              }}
              className="group relative flex h-full flex-col rounded-2xl border border-(--color-border-soft) bg-(--color-paper) p-5 transition-shadow duration-300 hover:border-(--color-flag)/40 hover:shadow-lg hover:shadow-(--color-flag)/5"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-(--color-flag-soft) text-(--color-flag-strong) transition-transform group-hover:scale-110">
                <Icon size={18} strokeWidth={2} />
              </div>
              <h3 className="font-display text-base font-semibold leading-snug text-(--color-ink)">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-(--color-ink-muted)">
                {t.body}
              </p>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex items-start gap-3 rounded-2xl border border-(--color-border-soft)/60 bg-(--color-cream-deep)/40 p-5 md:items-center md:p-6"
      >
        <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-(--color-corn) text-(--color-ink)">
          <FileSignature size={18} strokeWidth={2.2} />
        </div>
        <p className="text-sm leading-relaxed text-(--color-ink) md:text-base">
          Firmamos un acuerdo simple de una sola página antes de arrancar.
          Define el alcance acordado, el cronograma de pagos y los entregables.
          Te lo mando para que lo revises con calma.
        </p>
      </motion.div>
    </Section>
  );
}
