import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { asset } from '../lib/asset';

const NAV_ITEMS = [
  { id: 'features', label: 'Funcionalidades' },
  { id: 'tech', label: 'Tecnología' },
  { id: 'pricing', label: 'Planes' },
  { id: 'faq', label: 'Preguntas' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-(--color-border-soft)/40 bg-(--color-cream)/85 backdrop-blur-xl"
    >
      <div className="mx-auto grid h-[64px] w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 md:h-[72px] md:grid-cols-[1fr_auto_1fr] md:gap-6 md:px-10">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 justify-self-start md:gap-3"
        >
          <img
            src={asset('/brand/nav-logo.png')}
            alt="Arepas La Luisa"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-(--color-border-soft) transition-all duration-500 group-hover:rotate-[20deg] group-hover:ring-(--color-flag) group-hover:ring-2 md:h-10 md:w-10"
          />
          <span className="font-display text-sm font-semibold leading-none text-(--color-ink) transition-colors group-hover:text-(--color-flag-strong) md:text-base">
            Arepas La Luisa
          </span>
        </a>

        {/* Desktop menu */}
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

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href="#cta"
            className="group relative hidden h-10 items-center gap-1.5 overflow-hidden rounded-full bg-(--color-flag) px-5 text-sm font-semibold leading-none text-white shadow-sm transition-all duration-300 hover:gap-2.5 hover:bg-(--color-flag-strong) hover:shadow-lg hover:shadow-(--color-flag)/30 md:inline-flex"
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

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-(--color-border-strong) bg-(--color-paper) text-(--color-ink) transition active:scale-95 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid place-items-center"
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid place-items-center"
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-(--color-border-soft)/60 bg-(--color-cream)/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {NAV_ITEMS.map((it, i) => (
                <motion.a
                  key={it.id}
                  href={`#${it.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3, ease: 'easeOut' }}
                  className="rounded-2xl px-4 py-3 font-display text-lg font-semibold text-(--color-ink) transition-colors active:bg-(--color-flag-soft)"
                >
                  {it.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + NAV_ITEMS.length * 0.05, duration: 0.3 }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-(--color-flag) px-5 py-3.5 text-sm font-semibold text-white shadow-md"
              >
                Hablemos
                <ArrowRight size={14} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
