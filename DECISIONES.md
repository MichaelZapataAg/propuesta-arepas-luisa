# Propuesta Arepas La Luisa — Notas para Maik

Sitio web propuesto-comercial para que Natalia/su jefa se lo pasen al dueño de la empresa de arepas. Construido todo en sesión autónoma mientras estabas afuera.

## Cómo verla

```bash
cd /Users/maik/Documents/personal/propuesta-arepas-luisa
npm run dev          # localhost en :5173 (o :5174 si está ocupado)
npm run build        # genera /dist estático
```

El dev server lo dejé corriendo en `localhost:5174`. Si querés matarlo: `pkill -f vite`.

## Stack y por qué

| Elección | Razón |
|---|---|
| **Vite + React + TS** | Más rápido para iterar que Astro o Next. Output 100% estático sin server. Subo a Vercel/Netlify y listo. |
| **Tailwind v4** | Usás esta versión en Dimensios. Misma sintaxis. `@theme` para tokens. |
| **Framer Motion** | Para que veas animaciones bonitas (sos animador). `whileInView`, `layoutId` para el toggle, `useScroll` para parallax sutil. |
| **Lucide React** | Iconos consistentes con la app de Natalia. |
| **Playwright** | Solo para tomar screenshots de auditoría. Si querés borrarlo: `npm uninstall playwright`. |

## Branding y paleta

Usé los mismos tokens de la app de Natalia (cream / verde bandera / amarillo mazorca / naranja warm) para que la propuesta se sienta como una extensión de la marca, no algo separado:

```
--color-cream:        #faf6e8   (fondo principal)
--color-flag:         #0e7a2c   (verde acción)
--color-corn:         #ffcd1f   (acento, CTA en hero)
--color-warm:         #c2670d   (énfasis secundario)
```

**Tipografías**: Fraunces (display, serif moderna con curvas — siento que matchea con el branding artesanal de la marca) + Inter (sans, body) + JetBrains Mono (eyebrows, números técnicos).

## Estructura

```
src/
├── App.tsx                      ← orquestador, ensambla todas las secciones
├── index.css                    ← @theme tokens + utilities (.phone-frame, .text-shimmer, animaciones)
├── components/
│   ├── Nav.tsx                  ← sticky top, logo Samsa + menú + CTA
│   ├── Hero.tsx                 ← parallax suave, mockup flotando, badges flotantes "Hoy $36k", "Ganancia $12k"
│   ├── ProblemSolution.tsx      ← 4 problemas + banner verde con la solución
│   ├── Features.tsx             ← 5 features alternados con mockups numerados (01..05)
│   ├── TechCapabilities.tsx     ← 6 pillars técnicos + stack badges
│   ├── Pricing.tsx              ← toggle Sin servidor / Con dashboard, 3 cards cada uno
│   ├── FAQ.tsx                  ← accordion con 8 preguntas
│   ├── CTA.tsx                  ← bloque verde oscuro con email + WhatsApp
│   ├── Footer.tsx
│   ├── Section.tsx              ← wrapper genérico (eyebrow + título + subtítulo, scroll-triggered)
│   └── PhoneMockup.tsx          ← marco de celular reusable, con notch
├── data/
│   ├── features.ts              ← 5 features con copy + screenshot path
│   ├── pricing.ts               ← matriz de planes (2 opciones × 3 modelos = 6 cards)
│   └── faq.ts                   ← 8 preguntas frecuentes
└── ...
public/
├── brand/                       ← logo, app-icon, logo blanco/negro de la factura
└── screens/                     ← 8 capturas reales de la app de Natalia
```

## Decisiones de contenido

### Tono
- Voseo informal pero profesional ("Cuéntenme cuántos vendedores tienen", "Hablemos 30 minutos").
- Énfasis en "**funciona**" — no es una demo, es algo que ya está en la calle hace 3 semanas.
- Sin tech-speak excesivo en lo comercial; el stack se ve solo en la sección Tech para devs/CTOs.

### Pricing — qué decidí
La matriz que ya te había mostrado por chat, pero más visual. Dos opciones (Réplica vs Multi-vendedor con backend) × tres modelos de IP (Venta de código, Licencia, Híbrido). Toggle interactivo con animación `layoutId` en el pill verde. Marco "Licencia" como **Recomendado** en ambas opciones porque:
- Para 2-3 vendedores: pago entrada bajo + mensual razonable mantiene relación a largo plazo.
- Para 5+ vendedores: te asegurás un ingreso recurrente y mejor relación que vender el código.

### FAQ — qué incluí
Las 8 preguntas que mencioné cuando me preguntaste por precio. Más algunas que ya nos habían surgido (qué pasa si Natalia cambia de teléfono, si quieren App Store, integración con contabilidad).

### Screenshots usados (8)
Curé los mejores de las +60 capturas que tenía en `/tmp` desde el desarrollo de la app. Los usé tal cual, sin editar:

- `home-active.png` — hero, día activo con stats verdes
- `home-idle.png` — alternativa idle
- `start-day.png` — sheet de iniciar día (feature #1)
- `new-sale.png` — flujo de venta (feature #2)
- `invoice.png` — preview de factura térmica (feature #3)
- `clientes.png` — lista de clientes (feature #4)
- `day-detail.png` — detalle del día con totales (feature #5)
- `resumen.png` — vista de resumen (no se usa en features pero queda como reserva)

NO usé Android Studio porque ya tenía material suficiente. Si querés re-tomar mejores capturas con un emulador limpio, reemplazá los archivos en `public/screens/` y rebuild.

## Decisiones técnicas que tomé sin consultar

1. **No instalé Astro** aunque Dimensios lo usa. Vite + React es más simple y la propuesta no necesita SSG SEO complejo, es link directo.

2. **Sin TypeScript paths** (no `@/`). Imports relativos `./components/Hero`. Para un proyecto chico es suficiente.

3. **Imágenes sin optimizar más allá de PNG**. Si te importa el peso (pesan ~150 KB cada screenshot), podés correr `pngquant public/screens/*.png` después o convertir a webp con `sharp`. No lo hice por simplicidad.

4. **Tailwind v4 con `@theme` inline** — sin archivo `tailwind.config.ts`. Es el approach nuevo recomendado. Si te confunde porque preferís el config tradicional, decime y lo migro.

5. **Animaciones**: `viewport={{ once: true, amount: 0 }}` para que disparen al primer pixel visible. Eso garantiza que si alguien hace scroll rápido o la pantalla es muy grande, no se queden secciones sin animar. La preferencia del usuario por `prefers-reduced-motion` la respetan los componentes (motion shrinks).

6. **Texto del hero "vende arepas"** con shimmer animado entre verde-bandera y amarillo-mazorca. Animación de 8s. Sutil pero llama el ojo.

7. **Floating badges en hero** ("Hoy $36.000", "Ganancia $12.000") aparecen solo en `md:` y arriba — en mobile el hero ya está cargado de info, no quiero saturar.

8. **CTA**: dos opciones — email a `production@samsa.studio` y WhatsApp con número placeholder `573000000000`. **Tenés que cambiar el número** en `src/components/CTA.tsx:60` antes de mandar la propuesta.

## Lo que quedó pendiente / sugerido

- [ ] **Cambiar número de WhatsApp** en `CTA.tsx:60` (ahora `573000000000`).
- [ ] **Optimizar PNGs** si vas a hostearlo con buen Lighthouse score.
- [ ] **Meta og:image** — si lo subís a un dominio, agregá la etiqueta open-graph en `index.html` con un PNG bonito (ej. screenshot del hero).
- [ ] **Custom domain**: si querés un link bonito tipo `arepas-luisa.samsa.studio`, configurá en Vercel/Netlify.
- [ ] **Galería del logo** — el `LogoFactura.png` lo copié a `public/brand/logo-bw.png` pero no lo usé en ninguna parte. Si querés enseñarlo, agrégalo en algún lado (¿footer?, ¿al lado del CTA como prueba de marca?).
- [ ] **Sección "Sobre Samsa Studio"** — si vas a presentarte como agencia, una línea de credibility (clientes anteriores, años, etc.) le sumaría.
- [ ] **Versión PDF imprimible** — si quieren llevar la propuesta físicamente. Podríamos hacer una versión `print:` con CSS `@media print` o exportar a PDF con Playwright.

## Preguntas para vos cuando vuelvas

1. **¿El número de WhatsApp es tuyo personal o uno comercial de Samsa?** Para ponerlo bien.
2. **¿Querés que el branding de Samsa Studio en Nav + Footer sea más fuerte?** (logo propio, no solo nombre)
3. **¿El nombre comercial del producto es "Arepas La Luisa"?** ¿O debería ser un nombre genérico de la herramienta tipo "RutaVendedor" / "VendoApp" / etc.? Importante si la idea es revender a otras empresas (Modelo SaaS).
4. **Los precios USD vs COP** — los puse en USD. Si pensás que la empresa va a ver el número y asustarse, podés pasarme COP y los reemplazo. Pero personalmente creo que USD se siente más "premium".
5. **¿Querés deploy automático a algún sitio?** Tengo todo listo para `vercel deploy` o `netlify deploy` si querés que quede público en una URL.

## Auditoría visual

Tomé screenshots completos en 3 viewports (desktop 1440, tablet 820, mobile 390). Están en `/tmp/proposal-{viewport}-{section}.png`. Los más importantes:

- `/tmp/proposal-desktop-full.png` — full-page desktop
- `/tmp/proposal-mobile-full.png` — full-page mobile
- `/tmp/proposal-{vp}-{hero|features|tech|pricing|faq|cta}.png` — por sección

Si vas a iterar, podés volver a tomarlos con:
```bash
cd /Users/maik/Documents/personal/propuesta-arepas-luisa
node scripts/screenshot.mjs
```
(Necesita el dev server corriendo en :5174.)

## Performance

- **Build size**: 364 KB JS gzip, 7 KB CSS gzip. Bien para un landing.
- **Imágenes**: 8 screenshots ~150 KB cada uno (1.2 MB total). Optimizables a webp para bajar a ~300 KB.
- **Lighthouse no probado** — si te importa, levantá el preview con `npm run preview` y corré Lighthouse desde Chrome DevTools.

## Despliegue rápido a Vercel (cuando quieras)

```bash
cd /Users/maik/Documents/personal/propuesta-arepas-luisa
npx vercel --prod
```

(Necesita cuenta Vercel; te pide login la primera vez. Sube `dist/` automáticamente y devuelve URL pública en ~30s.)

---

Cualquier cosa que veas mal, decime y la cambio. Las decisiones de copy/precio fueron tomadas en consistencia con la conversación previa por chat.
