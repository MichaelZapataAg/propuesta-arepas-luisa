export type Feature = {
  id: string;
  badge: string;
  title: string;
  body: string;
  highlights: string[];
  screen: string;
  screenAlt: string;
  align: 'left' | 'right';
};

export const FEATURES: Feature[] = [
  {
    id: 'feat-day',
    badge: 'Sesión diaria',
    title: 'El día empieza al tomar producto. Termina cuadrando.',
    body: 'Al inicio de la jornada el vendedor anota cuánto producto recibió. La app va descontando con cada venta y muestra en vivo cuánto le queda. Al final, devuelve lo que sobró y se detecta el descuadre solo.',
    highlights: [
      'Inventario inicial por sesión',
      'Lo que llevó y lo que vendió, en vivo',
      'Cierre con devolución a empresa y descuadre automático',
    ],
    screen: '/screens/inventory.png',
    screenAlt: 'Pantalla de inventario del día',
    align: 'right',
  },
  {
    id: 'feat-sale',
    badge: 'Nueva venta',
    title: 'Una venta en menos de 15 segundos.',
    body: 'Cliente sugerido (el siguiente de la ruta), productos del catálogo y cantidad editable a mano. La app sólo deja vender lo que se llevó: si pediste 30 arepas y vendes 28, no te deja meter una más por error.',
    highlights: [
      'Inventario tope por producto en cada venta',
      'Cambios y devoluciones inline en el mismo ticket',
      'Efectivo o transferencia · marcar pagado o pendiente',
    ],
    screen: '/screens/new-sale.png',
    screenAlt: 'Pantalla de nueva venta',
    align: 'left',
  },
  {
    id: 'feat-print',
    badge: 'Factura térmica',
    title: 'Bluetooth a la impresora del vendedor. Sin cables ni red.',
    body: 'Imprime el recibo de la venta directo a la impresora térmica del vendedor. Logo de la marca arriba, items, total y método de pago. Múltiples copias de un toque.',
    highlights: [
      'Cliente BLE propio adaptable a otros modelos',
      'Logo bitmap real, no ASCII art',
      'Vista previa idéntica a lo que sale impreso',
    ],
    screen: '/screens/invoice.png',
    screenAlt: 'Vista previa de factura térmica',
    align: 'right',
  },
  {
    id: 'feat-clients',
    badge: 'Ruta de clientes',
    title: 'Tus clientes en el orden de tu ruta diaria.',
    body: 'Drag-and-drop para acomodar la lista igual al recorrido del día. La app sugiere al siguiente cliente al abrir Nueva venta y deja filtrar al instante a quienes te deben plata.',
    highlights: [
      'Orden personalizado con un toque',
      'Botón llamar directo al teléfono del cliente',
      'Filtro de un toque para ver solo quien debe',
    ],
    screen: '/screens/clientes.png',
    screenAlt: 'Lista de clientes con filtro de deuda',
    align: 'left',
  },
  {
    id: 'feat-collect',
    badge: 'Cobros y comprobantes',
    title: 'Te paga la deuda vieja. Le entregas un comprobante impreso.',
    body: 'Cuando un cliente salda lo que debía, "Ya pagó" cierra todas sus facturas pendientes en un solo toque y genera un recibo de pago con la lista de facturas saldadas, total y método. Imprime con la misma impresora térmica.',
    highlights: [
      'Vista previa idéntica al papel térmico',
      'Cobro suma al total del día (no se pierde en lo viejo)',
      'Recibo agrupado por cliente · efectivo o transferencia',
    ],
    screen: '/screens/payment-receipt.png',
    screenAlt: 'Sheet de cobro registrado con preview del recibo',
    align: 'right',
  },
  {
    id: 'feat-resumen',
    badge: 'Resumen',
    title: 'Cuánto vendiste, cuánto te ganaste, qué te quedó debiendo.',
    body: 'Card del día actual prominente. Un toque y ves el detalle: ventas, ganancia, pendiente de cobro, descuadre. Botón "Ver días anteriores" abre el historial sin saturar la vista.',
    highlights: [
      'Ganancia automática (precio - costo)',
      'Pendiente de cobro por cliente',
      'Compartir por WhatsApp con reporte autogenerado',
    ],
    screen: '/screens/day-detail.png',
    screenAlt: 'Detalle del día con totales',
    align: 'left',
  },
];
