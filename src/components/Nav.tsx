import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { asset } from '../lib/asset';

const NAV_ITEMS = [
  { id: 'features', label: 'Funcionalidades' },
  { id: 'tech', label: 'Tecnología' },
  { id: 'pricing', label: 'Planes' },
  { id: 'faq', label: 'Preguntas' },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-(--color-border-soft)/40 bg-(--color-cream)/85 backdrop-blur-xl"
    >
      <div className="mx-auto grid h-[72px] w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 md:px-10">
        <a
          href="#top"
          className="group flex items-center gap-3 justify-self-start"
        >
          <img
            src={asset('/brand/nav-logo.png')}
            alt="Arepas La Luisa"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-(--color-border-soft) transition-all duration-500 group-hover:rotate-[20deg] group-hover:ring-(--color-flag) group-hover:ring-2"
          />
          <span className="font-display text-base font-semibold leading-none text-(--color-ink) transition-colors group-hover:text-(--color-flag-strong)">
            Arepas La Luisa
          </span>
        </a>
        <nav className="hidden items-center gap-8 justify-self-center md:flex">
          {NAV_ITEMS.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="group relative py-1 text-sm leading-none text-(--color-ink-muted) transition-colors hover:text-(--color-flag-strong)"
            >
              {it.label}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-(--color-flag) transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="group relative inline-flex h-10 items-center justify-self-end gap-1.5 overflow-hidden rounded-full bg-(--color-flag) px-5 text-sm font-semibold leading-none text-white shadow-sm transition-all duration-300 hover:gap-2.5 hover:bg-(--color-flag-strong) hover:shadow-lg hover:shadow-(--color-flag)/30"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />
          <span className="relative">Hablemos</span>
          <ArrowRight
            size={14}
            className="relative transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.header>
  );
}
