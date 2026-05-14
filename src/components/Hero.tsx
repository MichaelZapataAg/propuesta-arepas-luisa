import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
  useInView,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

function StaggerWords({
  children,
  delay = 0,
  className = '',
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = children.split(' ');
  return (
    <span className={`inline ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pt-[0.05em] pb-[0.28em]"
        >
          <motion.span
            className="inline-block"
            initial={reduce ? { opacity: 0 } : { y: '100%', opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.005a9.866 9.866 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return isDesktop;
}

export function Hero() {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const { scrollY } = useScroll();
  const enableParallax = isDesktop && !reduce;
  const y = useTransform(scrollY, [0, 400], [0, enableParallax ? -60 : 0]);
  const opacity = useTransform(scrollY, [0, 400], [1, enableParallax ? 0.4 : 1]);

  return (
    <section id="top" className="relative pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-44">
      {/* Fondo: granos sutiles + halo */}
      <div className="absolute inset-0 bg-grain opacity-60" aria-hidden />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-(--color-corn)/40 blur-3xl"
        initial={{ opacity: 0.7, scale: 1 }}
        animate={reduce ? undefined : { scale: [1, 1.05, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[480px] w-[480px] rounded-full bg-(--color-flag-soft) blur-3xl"
        initial={{ opacity: 0.85, scale: 1 }}
        animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.24em] text-(--color-flag-strong)"
          >
            Propuesta de software · 2026
          </motion.p>

          <h1 className="mt-5 text-5xl leading-[0.95] md:text-6xl lg:text-7xl xl:text-[88px]">
            <StaggerWords delay={0.1}>La app que ya</StaggerWords>{' '}
            <StaggerWords delay={0.35} className="text-shimmer">vende arepas</StaggerWords>{' '}
            <StaggerWords delay={0.6}>todos los días.</StaggerWords>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="mt-7 max-w-xl text-balance text-lg text-(--color-ink-muted) md:text-xl"
          >
            Hecha para Natalia, vendedora de Arepas La Luisa. Funciona sin
            internet, imprime facturas térmicas por Bluetooth y ya está en la
            calle. <strong className="text-(--color-ink)">Funciona.</strong>{' '}
            Ahora la queremos llevar a más vendedores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/573022577219?text=Hola%20Michael%2C%20vi%20la%20propuesta%20de%20Arepas%20La%20Luisa"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-(--color-flag) px-7 py-4 text-base font-semibold text-white shadow-xl shadow-(--color-flag)/30 transition hover:bg-(--color-flag-strong) hover:shadow-2xl hover:shadow-(--color-flag)/40 hover:-translate-y-0.5"
            >
              <WhatsAppIcon size={18} />
              Hablemos por WhatsApp
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-(--color-ink-muted) transition hover:text-(--color-flag-strong)"
            >
              Ver la app primero
              <ArrowDown size={14} />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-(--color-border-soft)/60 pt-8"
          >
            <Stat value={100} suffix="%" label="Sin internet" />
            <Stat value={58} suffix="mm" label="Térmica BLE" />
            <Stat value={0} label="Servidores" />
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-8 rounded-[60px] bg-gradient-to-br from-(--color-corn)/55 via-transparent to-(--color-flag)/45 blur-2xl"
            initial={{ opacity: 0.85, scale: 1 }}
            animate={
              reduce
                ? undefined
                : { opacity: [0.85, 1, 0.85], scale: [1, 1.04, 1] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <PhoneMockup
            src="/screens/home-active.png"
            alt="Pantalla de inicio con día activo"
            className={`animate-float`}
          />
          {/* Badge flotante */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute -left-6 top-12 hidden rounded-2xl border border-(--color-border-soft) bg-(--color-paper) px-4 py-3 shadow-xl md:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-(--color-ink-subtle)">
              Hoy
            </p>
            <p className="font-display text-2xl font-semibold text-(--color-flag-strong)">
              $ 36.000
            </p>
            <p className="font-mono text-[10px] text-(--color-ink-muted)">
              vendido · 2 ventas
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute -right-4 bottom-24 hidden rounded-2xl border border-(--color-border-soft) bg-(--color-paper) px-4 py-3 shadow-xl md:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-(--color-ink-subtle)">
              Ganancia
            </p>
            <p className="font-display text-2xl font-semibold text-(--color-warm-strong)">
              $ 12.000
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stat({
  value,
  suffix = '',
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      motionValue.set(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, value, motionValue, reduce]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [spring]);

  return (
    <div>
      <dt className="font-display text-3xl font-semibold text-(--color-flag-strong) tabular-nums">
        <span ref={ref}>0</span>
        {suffix}
      </dt>
      <dd className="mt-1 font-mono text-[11px] uppercase tracking-widest text-(--color-ink-muted)">
        {label}
      </dd>
    </div>
  );
}
