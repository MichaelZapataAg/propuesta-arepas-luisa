export type FAQItem = {
  q: string;
  a: string;
};

export const FAQ: FAQItem[] = [
  {
    q: '¿Cuántos vendedores tienen ahora? ¿Cuántos tendrán?',
    a: 'Esto define el camino. Si son 2-3 sin necesidad de dashboard, la opción de réplica es perfecta. Si son 5+ y el jefe quiere ver todo en tiempo real, el backend se justifica.',
  },
  {
    q: '¿La impresora térmica de los demás vendedores es la misma?',
    a: 'Si usan el mismo modelo que ya está validado, está cubierto. Si tienen otros modelos hay que probar protocolo en cada uno antes de cotizar — la mayoría sigue ESC/POS estándar y se integran rápido; los modelos con protocolo propietario se cotizan aparte.',
  },
  {
    q: '¿Quieren que el logo y la marca sean los de la empresa?',
    a: 'Re-skin: 1 día. Cambia logo, paleta y nombre, conserva todo lo demás. Si quieren rebrand más profundo (otra fuente, otra estructura visual), 3-5 días.',
  },
  {
    q: '¿Es para uso interno o lo van a publicar en App Store / Play Store?',
    a: 'Uso interno con sideload (mandar APK por WhatsApp): incluido en el precio. Publicar en stores agrega revisión Apple/Google + cuentas developer + fees mensuales. Cotizable aparte.',
  },
  {
    q: '¿Qué pasa con los datos si Natalia cambia de teléfono?',
    a: 'Hoy: backup manual desde Ajustes (export CSV/DB), restaurar en el nuevo. Con el plan multi-vendedor + backend: sync automático, cambias de teléfono y al loguearte ves todo.',
  },
  {
    q: '¿Necesitan integración con su sistema de inventario o contabilidad?',
    a: 'No está incluido. Se cotiza aparte según el sistema. Las exportaciones CSV ya cubren la mayoría de casos (Excel, Google Sheets, contabilidad simple).',
  },
  {
    q: '¿Qué pasa si quieren cambiar algo después de entregar?',
    a: 'Modelo Licencia: incluye bug fixes y updates menores. Features nuevas se cotizan a tarifa de hora extra. Modelo Venta de código: contratan a quien quieran para modificarlo.',
  },
  {
    q: '¿Qué pasa si compran la Licencia y dejan de pagar la mensualidad?',
    a: 'La Licencia es derecho de uso, no propiedad del código. El APK que tienen sigue funcionando, pero el keystore se queda con el equipo: no pueden firmar nuevas versiones (ni propias ni con otro dev) y cuando Android cambie algo crítico — pasa cada 1–2 años — la app se vuelve obsoleta sin posibilidad de parche. Si decide en cualquier momento que quieren ser dueños del código, hacemos upgrade al Modelo A pagando solo el delta entre lo ya pagado y el precio de venta. La licencia es la vía más blanda hacia la compra, no un atajo para quedarse con el código a mitad de precio.',
  },
  {
    q: '¿Y en el modelo Cloud, si dejan de pagar?',
    a: 'Se corta el hosting Supabase y la sincronización entre teléfonos para. La app no muere — vuelve a modo single-user offline en cada celular, igual que la app de Natalia hoy. Pierden el dashboard web y el ranking de vendedores en tiempo real. Los datos de cada teléfono siguen exportables a CSV. Mismo upgrade path al Modelo A si después quieren ser dueños del backend.',
  },
  {
    q: '¿Cuánto tarda desde que firmamos hasta que el primer vendedor lo usa?',
    a: 'Réplica: 3-4 semanas (incluye port iOS y testing). Backend completo: 2-3 meses. Lo de Natalia es la base, no se rehace.',
  },
];
