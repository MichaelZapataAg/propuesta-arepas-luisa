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
      'Cada vendedor con su teléfono, sus propios datos, sin necesidad de internet. Instalan la app en N teléfonos y cada uno trabaja por su cuenta. Backup manual semanal por vendedor.',
    totalTime: '3 a 4 semanas',
    whatYouGet: [
      'App para Android y iPhone',
      'Cada vendedor con su perfil propio',
      'Adaptada a la marca (logo, colores y nombre)',
      'Manual de uso simple para los vendedores',
    ],
    plans: [
      {
        id: 'sale',
        name: 'Compra del código',
        upfront: '¡Negociemos!',
        monthly: 'Sin mensualidad',
        bestFor: 'Empresas que quieren ser dueñas de la app',
        includes: [
          'Son dueños de la app y del código',
          '2 a 3 mejoras solicitadas incluidas',
          '1 funcionalidad nueva incluida',
          'Mejoras y features adicionales a tarifa pactada',
        ],
        ipNote:
          'Después de las incluidas, las nuevas mejoras o features se cotizan aparte. Pueden seguir conmigo o contratar a otro dev.',
      },
      {
        id: 'license',
        name: 'Licencia de uso',
        upfront: '$ 10.000.000',
        monthly: '$ 850.000 / mes',
        recommended: true,
        bestFor: '2 a 5 vendedores · entrada baja, todo cuidado',
        includes: [
          'Mejoras y nuevas versiones incluidas',
          'Soporte directo por WhatsApp',
          'Arreglos garantizados sin costo extra',
          'Camino abierto para comprar la app después',
        ],
        ipNote:
          'Pagan por usar la app, no por ser dueños del código. Si más adelante quieren ser dueños, pagan solo el delta hasta llegar al precio de la compra.',
      },
      {
        id: 'hybrid',
        name: 'Híbrido',
        upfront: '$ 17.000.000',
        monthly: '$ 700.000 / mes',
        monthlyNote: '+ pequeñas mejoras y soporte; cambios grandes a tarifa de hora',
        bestFor: 'Quieren ir agregando cosas a su ritmo',
        includes: [
          'Soporte y arreglos incluidos cada mes',
          'Cambios grandes a tarifa de hora pactada',
          'Pago inicial intermedio',
          'Más flexibilidad para evolucionar la app',
        ],
        ipNote:
          'Mismo modelo que la Licencia, pero con mayor control sobre qué se construye y cuándo.',
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Multi-vendedor con dashboard',
    shortLabel: 'Con dashboard',
    tagline: 'Vendedores sincronizan, el dueño ve todo en tiempo real',
    description:
      'Los teléfonos sincronizan ventas, clientes y rutas. La empresa accede a un panel web con ranking de vendedores, qué pasó hoy y reportes de cierre. Cada vendedor sigue trabajando aunque pierda internet.',
    totalTime: '2 a 3 meses',
    whatYouGet: [
      'Sincronización entre todos los vendedores',
      'Dashboard web para el dueño',
      'Ranking, ruta del día y reportes en vivo',
      'Login simple por código vía SMS o correo',
      'Sigue funcionando offline en cada teléfono',
    ],
    plans: [
      {
        id: 'sale',
        name: 'Compra del código',
        upfront: '¡Negociemos!',
        monthly: 'Hosting ~ $ 100.000 / mes',
        bestFor: 'Quieren independencia técnica total',
        includes: [
          'Son dueños de la app, el panel y los datos',
          '2 a 3 mejoras solicitadas incluidas',
          '1 funcionalidad nueva incluida',
          'Mejoras y features adicionales a tarifa pactada',
        ],
        ipNote:
          'Después de las incluidas, las nuevas se cotizan aparte. Hosting es un costo bajo bajo su control. Pueden seguir conmigo o contratar a otro equipo.',
      },
      {
        id: 'license',
        name: 'Licencia de uso',
        upfront: '$ 32.000.000',
        monthly: '$ 2.000.000 / mes',
        monthlyNote: 'Incluye hosting, soporte y mejoras menores cada mes',
        recommended: true,
        bestFor: '5+ vendedores · necesitan reportes',
        includes: [
          'Todo el hosting incluido en el mensual',
          'Soporte garantizado por correo',
          'Mejoras menores incluidas cada mes',
          'Camino abierto para comprar la app después',
        ],
        ipNote:
          'Pagan por usar la plataforma completa. Si después la quieren propia, pagan el delta hasta llegar al precio de la compra.',
      },
      {
        id: 'hybrid',
        name: 'Híbrido',
        upfront: '$ 52.000.000',
        monthly: '$ 1.400.000 / mes',
        monthlyNote: '+ cambios grandes a tarifa de hora pactada',
        bestFor: 'Quieren control fino sobre qué se construye',
        includes: [
          'Soporte y hosting incluidos',
          'Mejoras nuevas a tarifa de hora',
          'Pago inicial intermedio',
          'Mejor para equipos grandes',
        ],
        ipNote:
          'Mismo modelo que la Licencia, pero con tarifa pactada para cambios grandes.',
      },
    ],
  },
];
