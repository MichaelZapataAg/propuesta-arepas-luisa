import { ArrowUpRight } from 'lucide-react';

const SOCIAL = [
  { label: 'Portfolio', href: 'https://michaelzapataag.github.io' },
  { label: 'GitHub', href: 'https://github.com/MichaelZapataAg' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michaelzapataag/' },
  { label: 'Sketchfab', href: 'https://sketchfab.com/MichaelZapataAg' },
];

export function Footer() {
  return (
    <footer className="border-t border-(--color-border-soft)/60 bg-(--color-cream-deep)/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 md:px-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md">
          <p className="font-display text-2xl font-semibold text-(--color-ink)">
            Michael Zapata
          </p>
          <p className="mt-2 text-sm leading-relaxed text-(--color-ink-muted)">
            Desarrollador creativo y animador 3D basado en Medellín. Hago apps
            móviles, experiencias web interactivas y animación.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-(--color-border-strong) bg-(--color-paper) px-3 py-1.5 font-mono text-xs text-(--color-ink) transition hover:border-(--color-flag) hover:text-(--color-flag-strong)"
              >
                {s.label}
                <ArrowUpRight
                  size={11}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-(--color-ink-muted) lg:items-end">
          <a
            href="mailto:michael.zapata.ag@gmail.com"
            className="font-mono transition hover:text-(--color-flag-strong)"
          >
            michael.zapata.ag@gmail.com
          </a>
          <a
            href="https://wa.me/573022577219"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono transition hover:text-(--color-flag-strong)"
          >
            +57 302 257 7219
          </a>
          <p className="mt-1 font-mono text-xs text-(--color-ink-subtle)">
            © {new Date().getFullYear()} · Propuesta para Arepas La Luisa
          </p>
        </div>
      </div>
    </footer>
  );
}
