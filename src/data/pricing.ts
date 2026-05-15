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
          'Sin límite de vendedores',
          'Son dueños de la app y del código',
          '2 a 3 mejoras solicitadas incluidas',
          '1 funcionalidad nueva incluida',
        ],
        ipNote:
          'Después de las incluidas, las nuevas mejoras o features se cotizan aparte. Pueden seguir conmigo o contratar a otro dev.',
      },
      {
        id: 'license',
        name: 'Licencia de uso',
        upfront: 'Menos de lo que crees',
        monthly: 'Plan a tu medida',
        monthlyNote: 'Adaptado al tamaño del equipo, sin sorpresas',
        recommended: true,
        bestFor: 'Entrada baja, sin preocuparse del mantenimiento',
        includes: [
          'Sin límite de vendedores',
          '2 actualizaciones incluidas cada mes',
          'Arreglos sin costo extra',
          'Soporte directo por WhatsApp',
        ],
        ipNote:
          'Pagan por usar la app, no por ser dueños del código. Si más adelante quieren ser dueños, pagan solo el delta hasta llegar al precio de la compra.',
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
          'Sin límite de vendedores',
          'Son dueños de la app, el panel y los datos',
          '2 a 3 mejoras solicitadas incluidas',
          '1 funcionalidad nueva incluida',
        ],
        ipNote:
          'Después de las incluidas, las nuevas se cotizan aparte. Hosting es un costo bajo bajo su control. Pueden seguir conmigo o contratar a otro equipo.',
      },
      {
        id: 'license',
        name: 'Licencia de uso',
        upfront: 'Lo justo, no inflado',
        monthly: 'A medida del equipo',
        monthlyNote: 'Incluye hosting, soporte y actualizaciones',
        recommended: true,
        bestFor: 'Sin preocuparse de hosting ni mantenimiento',
        includes: [
          'Sin límite de vendedores',
          '2 actualizaciones incluidas cada mes',
          'Hosting cubierto en el mensual',
          'Soporte garantizado por correo',
        ],
        ipNote:
          'Pagan por usar la plataforma completa. Si después la quieren propia, pagan el delta hasta llegar al precio de la compra.',
      },
    ],
  },
];
