import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type MouseEvent } from 'react';
import { FileWarning, NotebookPen, Wifi, Calculator, ArrowRight } from 'lucide-react';
import { Section } from './Section';

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ['7deg', '-7deg']), {
    damping: 20,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ['-7deg', '7deg']), {
    damping: 20,
    stiffness: 200,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || reduce) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const problems = [
  {
    icon: NotebookPen,
    title: 'Cuaderno y memoria',
    body: 'Apuntes a lápiz, ventas que se olvidan, devoluciones que nadie cuadra al final de la semana.',
  },
  {
    icon: Calculator,
    title: 'Cuentas mal hechas',
    body: 'Multiplicar precio por cantidad, sumar varias líneas, restar devoluciones. Un cero de más y la factura sale mal o el cliente paga menos.',
  },
  {
    icon: Wifi,
    title: 'Apps que piden internet',
    body: 'En el barrio, en la moto, en la tienda del fondo: el 4G falla. Las apps SaaS se traban.',
  },
  {
    icon: FileWarning,
    title: 'Facturas a mano',
    body: 'Sin factura impresa el cliente desconfía. Con talonario el vendedor pierde 2 minutos por venta.',
  },
];

export function ProblemSolution() {
  const reduce = useReducedMotion();
  return (
    <Section
      eyebrow="El problema · La solución"
      title={
        <>
          Vender en la calle es{' '}
          <span className="italic text-(--color-warm-strong)">caos</span>.
          <br />
          Hicimos una herramienta que se{' '}
          <span className="italic text-(--color-flag-strong)">adapta a eso</span>.
        </>
      }
      subtitle="Natalia ya está usando la app en su ruta diaria. Estos son los problemas reales que estábamos resolviendo."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : i * 0.08,
                ease: 'easeOut',
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <TiltCard className="group relative overflow-hidden rounded-3xl border border-(--color-border-soft) bg-(--color-paper) p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-(--color-flag)/5">
                <div
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-(--color-clay-soft) text-(--color-clay)"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3
                  className="font-display text-xl font-semibold text-(--color-ink)"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-(--color-ink-muted)"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {p.body}
                </p>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 grid items-center gap-10 rounded-[36px] border border-(--color-flag)/30 bg-gradient-to-br from-(--color-flag-soft) via-(--color-cream) to-(--color-corn-soft)/60 p-8 md:p-12 lg:grid-cols-[auto_1fr] lg:gap-14"
      >
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-3xl bg-(--color-flag) shadow-lg shadow-(--color-flag)/30">
            <ArrowRight size={28} className="text-(--color-corn)" strokeWidth={2.4} />
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--color-flag-strong)">
            Lo que hicimos
          </p>
          <h3 className="mt-3 text-balance font-display text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
            Una app Android nativa que el vendedor abre, registra una venta en
            12 segundos, imprime la factura y sigue caminando.
          </h3>
          <p className="mt-4 max-w-2xl text-(--color-ink-muted) md:text-lg">
            Sin login, sin servidor, sin cuotas mensuales obligatorias. Todo
            vive en el celular del vendedor. Backup manual semanal.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
