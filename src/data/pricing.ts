export type Plan = {
  id: 'sale' | 'license' | 'hybrid';
  name: string;
  upfront: string;
  monthly: string;
  monthlyNote?: string;
  recommended?: boolean;
  bestFor: string;
  includes: string[];
  ipNote: string;
};

export type Option = {
  id: 'replica' | 'cloud';
  label: string;
  shortLabel: string;
  tagline: string;
  description: string;
  totalTime: string;
  whatYouGet: string[];
  plans: Plan[];
};

export const OPTIONS: Option[] = [
  {
    id: 'replica',
    label: 'Réplica para varios vendedores',
    shortLabel: 'Sin servidor',
    tagline: 'La app de Natalia, multiplicada',
    description:
      'Cada vendedor con su teléfono, datos independientes, sin sync. La empresa instala el APK / IPA en N teléfonos. Backup CSV manual por vendedor.',
    totalTime: '3 a 4 semanas',
    whatYouGet: [
      'Port a iOS + testing impresora',
      'Modo multi-perfil (cada celular distingue su vendedor)',
      'Firma corporativa Apple si se quiere',
      'Manual PDF de uso para los vendedores',
    ],
    plans: [
      {
        id: 'sale',
        name: 'Venta de código',
        upfront: '$ 32.000.000 – 56.000.000',
        monthly: 'Sin mensualidad',
        bestFor: 'Empresas que prefieren ser dueñas de todo',
        includes: [
          'Repositorio Git completo',
          'Keystore y cuenta Apple a su nombre',
          'Documentación técnica',
          'Sin compromiso de soporte',
        ],
        ipNote: 'Pierden acceso a updates futuros del producto base',
      },
      {
        id: 'license',
        name: 'Licencia de uso',
        upfront: '$ 12.000.000 – 20.000.000',
        monthly: '$ 1.000.000 – 1.600.000 / mes',
        recommended: true,
        bestFor: '2 a 5 vendedores · pago entrada bajo',
        includes: [
          'Updates incluidas en el mensual',
          'Soporte por WhatsApp / email',
          'Bug fixes garantizados',
          'Upgrade a Modelo A pagando solo el delta',
        ],
        ipNote: 'Derecho de uso, no propiedad del código. Keystore queda con el equipo. Si después quieren ser dueños del código, pagan el delta hasta el precio del Modelo A.',
      },
      {
        id: 'hybrid',
        name: 'Híbrido',
        upfront: '$ 20.000.000 – 32.000.000',
        monthly: '$ 600.000 – 1.000.000 / mes',
        monthlyNote: '+ horas extra a $ 120.000 – 200.000 / h',
        bestFor: 'Quieren features nuevas a medida',
        includes: [
          'Soporte mensual incluido',
          'Features nuevas se cotizan por hora',
          'Pago inicial intermedio',
          'Más flexibilidad operativa',
        ],
        ipNote: 'Mismo modelo que B, pero con más control de roadmap',
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Multi-vendedor con backend',
    shortLabel: 'Con dashboard',
    tagline: 'Vendedores sincronizan, jefe ve todo en tiempo real',
    description:
      'Los teléfonos sincronizan ventas, clientes y sesiones a la nube. La empresa accede a un panel web con ranking de vendedores, ruta del día por persona, ventas en tiempo real y reportes de cierre.',
    totalTime: '2 a 3 meses',
    whatYouGet: [
      'Backend (Supabase + Postgres + RLS por empresa)',
      'Auth con magic link / SMS · Roles vendedor / admin',
      'Sync offline ↔ online con resolución de conflictos',
      'Dashboard admin web (Next.js)',
      'Port iOS + QA + deploy',
    ],
    plans: [
      {
        id: 'sale',
        name: 'Venta de código',
        upfront: '$ 100.000.000 – 160.000.000',
        monthly: 'Hosting Supabase ~ $ 100.000 / mes',
        bestFor: 'Quieren independencia técnica total',
        includes: [
          'Repositorio + infraestructura',
          'Acceso completo al backend',
          'Sin compromiso de soporte',
          'Hosting lo paga la empresa',
        ],
        ipNote: 'Si quieren features nuevas contratan a otro equipo',
      },
      {
        id: 'license',
        name: 'Licencia de uso',
        upfront: '$ 40.000.000 – 60.000.000',
        monthly: '$ 2.400.000 – 4.000.000 / mes',
        monthlyNote: 'Incluye hosting + soporte + 4–8 h/mes de features',
        recommended: true,
        bestFor: '5+ vendedores · necesitan reportería',
        includes: [
          'Hosting Supabase incluido',
          'Soporte SLA por correo',
          '4–8 h mensuales de features',
          'Upgrade a Modelo A pagando solo el delta',
        ],
        ipNote: 'Derecho de uso, no propiedad del código ni del backend. Si dejan de pagar, pierden el sync (la app vuelve a modo single-user offline). Upgrade a Modelo A pagando el delta.',
      },
      {
        id: 'hybrid',
        name: 'Híbrido',
        upfront: '$ 60.000.000 – 88.000.000',
        monthly: '$ 1.200.000 – 2.000.000 / mes',
        monthlyNote: '+ horas extra a $ 160.000 – 240.000 / h',
        bestFor: 'Quieren control fino del roadmap',
        includes: [
          'Soporte básico fijo',
          'Hosting incluido',
          'Features nuevas se cotizan',
          'Mejor para empresas grandes',
        ],
        ipNote: 'Mismo modelo que B, con tarifa de hora extra',
      },
    ],
  },
];
