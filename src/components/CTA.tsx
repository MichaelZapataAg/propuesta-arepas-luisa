import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.005a9.866 9.866 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(14, 122, 44, 0.18), transparent 60%), var(--color-cream)',
        }}
      />
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[40px] border border-(--color-flag)/40 bg-gradient-to-br from-(--color-flag) via-(--color-flag-strong) to-(--color-ink) p-10 shadow-2xl shadow-(--color-flag)/20 md:p-16"
        >
          {/* Decoración */}
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-(--color-corn)/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-12 h-72 w-72 rounded-full bg-(--color-flag-soft)/20 blur-3xl"
          />

          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-(--color-corn-soft)">
              Siguiente paso
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Hablemos 30 minutos.
              <br />
              <span className="text-(--color-corn)">Sin compromiso.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-balance text-base text-white/80 md:text-lg">
              Cuénteme cuántos vendedores tienen, qué impresoras usan y qué les
              falta hoy. Salgo con una cotización ajustada en menos de 48 h.
            </p>

            <div className="mt-10 flex flex-col flex-wrap items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/573022577219?text=Hola%20Michael%2C%20vi%20la%20propuesta%20de%20Arepas%20La%20Luisa"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-(--color-corn) px-8 py-4 text-base font-semibold text-(--color-ink) shadow-xl shadow-black/20 transition hover:bg-(--color-corn-strong) hover:-translate-y-0.5"
              >
                <WhatsAppIcon size={18} />
                Escribirme por WhatsApp
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="mailto:michael.zapata.ag@gmail.com?subject=Propuesta%20Arepas%20La%20Luisa"
                className="group inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-white/70 transition hover:text-white"
              >
                <Mail size={14} />
                o por correo
              </a>
            </div>

            <p className="mt-12 max-w-md font-mono text-xs leading-relaxed text-white/60">
              Propuesta válida por 30 días. Precios en pesos colombianos. Pagos
              por transferencia bancaria o PSE.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
