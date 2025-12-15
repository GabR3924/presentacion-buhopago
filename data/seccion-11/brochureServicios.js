export const brochureServiciosBuhoPago = {
  titulo: "BuhoPago - Brochure de Servicios",
  subtitulo: "Plataforma de Gestión y Procesamiento de Pagos Digitales para Venezuela",
  version: "1.0",
  fecha: "Diciembre 2025",
  
  // PROPUESTA DE VALOR PRINCIPAL
  propuesta_valor: {
    tagline: "Cobra profesionalmente, crece digitalmente",
    descripcion_corta: "BuhoPago es la plataforma venezolana que convierte tus ventas informales en un negocio digital profesional. Desde un simple link de pago hasta procesamiento automático con débito bancario directo.",
    
    problema_que_resuelve: {
      titulo: "¿Por qué BuhoPago?",
      pain_points: [
        "❌ Dar tu cuenta bancaria en cada venta (inseguro, poco profesional)",
        "❌ Confirmar pagos manualmente revisando transferencias (tedioso, propenso a errores)",
        "❌ Perder ventas por fricción en el checkout (clientes abandonan)",
        "❌ No tener historial ni control de tus cobros",
        "❌ Imposibilidad de automatizar suscripciones o pagos recurrentes"
      ],
      
      solucion: "BuhoPago te da un sistema de cobros profesional en minutos, sin papeleos, sin complicaciones. Tu link personalizado, notificaciones automáticas, y control total de tus ventas."
    },
    
    diferenciadores_clave: [
      "🇻🇪 Diseñado para Venezuela (bolívares, bancos locales, realidad del país)",
      "⚡ Setup en 2 minutos (sin trámites, sin papeleos)",
      "💰 Sin costos fijos (solo pagas cuando vendes)",
      "📱 Mobile-first (optimizado para WhatsApp, Instagram, redes sociales)",
      "🔒 Seguro y confiable (cumplimiento regulatorio, datos protegidos)"
    ]
  },

  // ESTRUCTURA DE FASES
  estructura_fases: {
    titulo: "BuhoPago: Tu Plataforma Evolutiva",
    descripcion: "BuhoPago crece contigo. Empezamos con herramientas de gestión que puedes usar HOY, y evolucionamos a una plataforma completa de procesamiento cuando estés listo para escalar.",
    
    nota_transparencia: "⚠️ IMPORTANTE: BuhoPago opera actualmente en Fase 1 (Gestión de Pagos). La Fase 2 (Procesamiento Completo) estará disponible una vez obtengamos la licencia ITFB de SUDEBAN. Estimado: Q3-Q4 2026.",
    
    fases: [
      {
        fase: "FASE 1: Gestión de Pagos (DISPONIBLE AHORA)",
        estado: "✅ ACTIVA",
        descripcion: "Herramientas SaaS para gestionar y profesionalizar tus cobros digitales",
        target: "Microemprendedores, social sellers, PYMEs que cobran por transferencia/Zelle"
      },
      {
        fase: "FASE 2: Procesamiento Completo (ROADMAP 2026)",
        estado: "🚧 EN DESARROLLO REGULATORIO",
        descripcion: "Plataforma integral con débito automático, domiciliación, y procesamiento bancario directo",
        target: "Negocios establecidos que necesitan automatización total y suscripciones",
        dependencia: "Requiere licencia ITFB de SUDEBAN (proceso en curso)"
      }
    ]
  },

  // FASE 1: SERVICIOS DISPONIBLES AHORA (SaaS - SIN LICENCIA)
  fase_1_gestion_pagos: {
    titulo: "FASE 1: Gestión de Pagos (Disponible Ahora)",
    subtitulo: "Profesionaliza tus cobros sin cambiar tu operación actual",
    estado: "✅ OPERATIVO - Disponible para registro inmediato",
    
    modelo_operativo: {
      titulo: "¿Cómo Funciona?",
      descripcion: "En Fase 1, BuhoPago es tu asistente inteligente de gestión de cobros. Tú sigues recibiendo pagos en TU cuenta bancaria (como siempre), pero ahora con herramientas profesionales que automatizan el proceso.",
      
      flujo_funcionamiento: [
        {
          paso: "1. Te registras en BuhoPago",
          detalle: "Proceso de 2 minutos. Vinculas tu cuenta bancaria venezolana (donde quieres recibir pagos)"
        },
        {
          paso: "2. Creas tu link de pago personalizado",
          detalle: "buhopago.com/tu-negocio - Con tu logo, colores, productos"
        },
        {
          paso: "3. Compartes el link con tus clientes",
          detalle: "Por WhatsApp, Instagram, Facebook, email, donde sea"
        },
        {
          paso: "4. Cliente paga DIRECTAMENTE a tu cuenta",
          detalle: "El link genera los datos de tu cuenta bancaria. Cliente hace transferencia/Zelle directamente a ti."
        },
        {
          paso: "5. BuhoPago detecta y notifica el pago",
          detalle: "Recibes notificación automática por WhatsApp/Email cuando el cliente paga. Actualiza tu dashboard."
        }
      ],
      
      aclaracion_importante: "🔑 TÚ RECIBES EL DINERO DIRECTAMENTE. BuhoPago no toca tus fondos en esta fase. Solo provee herramientas de gestión y tracking."
    },
    
    servicios_incluidos: {
      titulo: "Servicios Incluidos (Fase 1)",
      
      categoria_cobros: {
        nombre: "💳 Herramientas de Cobro",
        servicios: [
          {
            servicio: "Link de Pago Personalizado",
            descripcion: "Tu URL única (buhopago.com/tu-marca) con checkout profesional",
            caracteristicas: [
              "Personalización completa (logo, colores, mensaje de bienvenida)",
              "Responsive (se adapta a móvil, tablet, desktop)",
              "Múltiples métodos de pago (transferencia, Zelle, Binance Pay, PayPal)",
              "Generación automática de datos bancarios del vendedor"
            ]
          },
          {
            servicio: "QR Code para Cobros Presenciales",
            descripcion: "Código QR imprimible o en pantalla para cobrar en tienda física",
            caracteristicas: [
              "Cliente escanea → Ve tu checkout → Paga",
              "Actualizas monto en tiempo real desde tu móvil",
              "Ideal para ferias, eventos, puntos de venta físicos"
            ]
          },
          {
            servicio: "Botones de Pago Embebidos",
            descripcion: "Widgets para insertar en tu sitio web, blog, o tienda online",
            caracteristicas: [
              "Copy-paste en cualquier página HTML",
              "Integración con WooCommerce, Shopify (próximamente)",
              "Personalización de diseño"
            ]
          },
          {
            servicio: "Links por Producto Individual",
            descripcion: "Genera links específicos para cada producto de tu catálogo",
            caracteristicas: [
              "Comparte link directo del producto por WhatsApp",
              "Trackea qué productos se venden más",
              "Facilita marketing de productos específicos"
            ]
          }
        ]
      },
      
      categoria_gestion: {
        nombre: "📊 Panel de Gestión y Analíticas",
        servicios: [
          {
            servicio: "Dashboard Centralizado",
            descripcion: "Vista completa de todas tus ventas y cobros en un solo lugar",
            caracteristicas: [
              "Historial completo de transacciones",
              "Estado de cada pago (pendiente, confirmado, vencido)",
              "Búsqueda y filtros avanzados",
              "Vista por fecha, producto, cliente, monto"
            ]
          },
          {
            servicio: "Catálogo de Productos",
            descripcion: "Administra tu inventario digital con imágenes y precios",
            caracteristicas: [
              "Hasta 100 productos (plan Growth)",
              "Imágenes, descripciones, precios en USD/Bs",
              "Stock disponible (opcional)",
              "Categorización y etiquetas"
            ]
          },
          {
            servicio: "Reportes y Exportaciones",
            descripcion: "Data lista para tu contador o análisis propio",
            caracteristicas: [
              "Exportar a Excel/CSV",
              "Reportes mensuales automáticos",
              "Métricas de conversión (vistas vs pagos)",
              "Top productos vendidos"
            ]
          },
          {
            servicio: "Analíticas de Conversión",
            descripcion: "Entiende qué funciona y qué no en tu proceso de cobro",
            caracteristicas: [
              "Tasa de conversión por producto",
              "Abandonos de checkout (cuántos ven pero no pagan)",
              "Tiempo promedio de pago",
              "Dispositivos más usados (móvil vs desktop)"
            ]
          }
        ]
      },
      
      categoria_automatizacion: {
        nombre: "🔔 Notificaciones y Automatización",
        servicios: [
          {
            servicio: "Notificaciones Automáticas Multi-Canal",
            descripcion: "Entérate al instante cuando te pagan",
            caracteristicas: [
              "WhatsApp Business (notificación inmediata)",
              "Email con detalles del pago",
              "SMS (opcional, plan Pro)",
              "Notificación push en app móvil"
            ]
          },
          {
            servicio: "Recordatorios de Pago Inteligentes",
            descripcion: "Automatiza el seguimiento de pagos pendientes",
            caracteristicas: [
              "Recordatorio 24h antes de vencimiento",
              "Recordatorio al vencer",
              "Recordatorio 3 días después (personalizable)",
              "WhatsApp + Email automático"
            ]
          },
          {
            servicio: "Confirmaciones al Cliente",
            descripcion: "Tus clientes reciben comprobante profesional automático",
            caracteristicas: [
              "Email de confirmación con detalles de compra",
              "Comprobante descargable en PDF",
              "Personalizable con tu marca"
            ]
          }
        ]
      },
      
      categoria_validacion_pagos: {
        nombre: "✅ Validación de Pagos",
        servicios: [
          {
            servicio: "Validación de Pago Móvil Asistida (con IA)",
            descripcion: "Confirma pagos móviles en minutos, no en horas",
            badge: "🆕 NUEVO",
            como_funciona: [
              "1. Cliente paga por pago móvil a TU número (del comercio)",
              "2. Cliente sube screenshot del comprobante en el checkout",
              "3. IA de BuhoPago extrae automáticamente: monto, referencia, hora",
              "4. Sistema valida que coincida con la venta (monto correcto, timing lógico)",
              "5. Tú confirmas con 1 click en tu panel",
              "6. Cliente recibe confirmación automática"
            ],
            caracteristicas: [
              "🤖 OCR/IA extrae datos del comprobante automáticamente",
              "✅ Validación inteligente (detecta montos incorrectos, screenshots falsos)",
              "⚡ Confirmación en 1-3 minutos (vs 10-30 min manual tradicional)",
              "📱 Funciona con todos los bancos venezolanos",
              "🔔 Notificación al comercio cuando hay comprobante pendiente",
              "📊 Historial completo de validaciones"
            ],
            ventaja_competitiva: "Nadie más en el mercado venezolano ofrece validación asistida por IA de pago móvil. Esto te diferencia de links de pago básicos.",
            roadmap: "🚀 Próximamente: Integración API directa con bancos para validación automática sin intervención (Fase 1 avanzada, antes de Fase 2)"
          },
          {
            servicio: "Validación de Transferencias Bancarias",
            descripcion: "Similar a pago móvil, pero para transferencias",
            como_funciona: [
              "Cliente sube comprobante de transferencia",
              "IA extrae: banco origen, monto, referencia, fecha",
              "Comercio confirma o rechaza",
              "Sistema aprende de patrones (reduce fraude)"
            ]
          },
          {
            servicio: "Detección de Fraude Básica",
            descripcion: "IA identifica comprobantes sospechosos",
            caracteristicas: [
              "Detecta screenshots editados (montos modificados)",
              "Identifica comprobantes duplicados (ya usados)",
              "Valida que timestamp sea lógico (no del futuro, ni muy viejo)",
              "Marca alertas para revisión manual"
            ]
          }
        ]
      },
      
      categoria_integraciones: {
        nombre: "🔗 Integraciones y API",
        servicios: [
          {
            servicio: "Integración WhatsApp Business",
            descripcion: "Automatiza tus ventas por WhatsApp",
            caracteristicas: [
              "Envía link de pago automático en respuesta a consultas",
              "Catálogo de productos sincronizado",
              "Respuestas automáticas con estado de pago"
            ]
          },
          {
            servicio: "Webhooks (plan Business)",
            descripcion: "Conecta BuhoPago con tus sistemas propios",
            caracteristicas: [
              "Recibe notificación en tu servidor cuando hay un pago",
              "Integra con CRM, ERP, sistemas contables",
              "Documentación completa de API"
            ]
          },
          {
            servicio: "Zapier / Make (Integromat) - Próximamente",
            descripcion: "Conecta con 3,000+ aplicaciones sin código",
            caracteristicas: [
              "Automatiza flujos: Pago → Envío email → Actualiza hoja Google",
              "No-code automation",
              "Templates pre-diseñados"
            ]
          }
        ]
      },
      
      categoria_soporte: {
        nombre: "💬 Soporte y Acompañamiento",
        servicios: [
          {
            servicio: "Soporte por WhatsApp (Lun-Vie 9am-6pm)",
            descripcion: "Equipo de soporte en español, rápido y amigable",
            caracteristicas: [
              "Respuesta promedio: <2 horas",
              "Soporte técnico + consultoría de uso",
              "Ayuda con configuración inicial"
            ]
          },
          {
            servicio: "Base de Conocimiento y Tutoriales",
            descripcion: "Aprende a usar BuhoPago a tu ritmo",
            caracteristicas: [
              "Videos tutoriales paso a paso",
              "Guías escritas con screenshots",
              "FAQs y casos de uso comunes",
              "Webinars mensuales para usuarios"
            ]
          }
        ]
      }
    },
    
    limitaciones_fase_1: {
      titulo: "⚠️ Qué NO Incluye la Fase 1 (Disponible en Fase 2)",
      descripcion: "En Fase 1, NO procesamos pagos directamente. Los siguientes servicios estarán disponibles cuando obtengamos la licencia ITFB:",
      
      servicios_no_disponibles: [
        "❌ Cuenta concentradora (nosotros NO recibimos el dinero en esta fase)",
        "❌ Débito inmediato bancario (pago con un clic desde la cuenta del cliente)",
        "❌ Domiciliación bancaria (débitos recurrentes automáticos para suscripciones)",
        "❌ Procesamiento de tarjetas de crédito/débito",
        "❌ Split payments para marketplaces"
      ],
      
      servicios_limitados: [
        "⚠️ Validación de Pago Móvil: En Fase 1 es ASISTIDA (requiere screenshot del cliente + confirmación del comercio). En Fase 2 será AUTOMÁTICA (integración directa con bancos, confirmación en <1 min sin intervención)."
      ],
      
      cuando_disponible: "Estos servicios estarán disponibles en Fase 2, estimado Q3-Q4 2026, una vez obtengamos la autorización ITFB de SUDEBAN."
    },
    
    pricing_fase_1: {
      titulo: "Planes y Precios (Fase 1)",
      
      modelo: "Suscripción Mensual (sin costos por transacción)",
      nota: "En Fase 1, cobramos una suscripción mensual fija porque NO procesamos pagos. Tú recibes el 100% de lo que te pagan tus clientes.",
      
      planes: [
        {
          nombre: "STARTER",
          precio_mensual: "USD 10",
          target: "Emprendedores que están comenzando",
          incluye: [
            "1 link de pago personalizado",
            "Hasta 30 productos en catálogo",
            "Notificaciones WhatsApp + Email",
            "Dashboard básico (últimos 3 meses de historial)",
            "QR code para presencial",
            "Soporte por WhatsApp (horario laboral)",
            "1 usuario"
          ],
          ideal_para: "Vendedores por Instagram/WhatsApp con <50 ventas/mes"
        },
        {
          nombre: "GROWTH",
          precio_mensual: "USD 25",
          badge: "⭐ MÁS POPULAR",
          target: "Social sellers establecidos",
          incluye: [
            "Todo de STARTER, más:",
            "Hasta 100 productos en catálogo",
            "Personalización completa de checkout (branding)",
            "Analíticas avanzadas (conversión, abandonos)",
            "Historial ilimitado de transacciones",
            "Exportar data a Excel/CSV",
            "Links por producto individual",
            "Recordatorios automáticos de pago",
            "Soporte prioritario",
            "1 usuario"
          ],
          ideal_para: "Vendedores con 50-200 ventas/mes, base de clientes recurrente"
        },
        {
          nombre: "PRO",
          precio_mensual: "USD 45",
          target: "Profesionales y servicios de alto valor",
          incluye: [
            "Todo de GROWTH, más:",
            "Productos ilimitados en catálogo",
            "Custom domain redirect (tutienda.com → BuhoPago)",
            "Facturas pro-forma personalizadas (sin valor fiscal)",
            "Integración WhatsApp Business API",
            "2 usuarios (dueño + asistente)",
            "Soporte extendido (7am-9pm)",
            "Backup automático de data"
          ],
          ideal_para: "Freelancers, consultores, instructores, productos de alto ticket"
        },
        {
          nombre: "BUSINESS",
          precio_mensual: "USD 75",
          target: "PYMEs con RIF que necesitan facturación",
          incluye: [
            "Todo de PRO, más:",
            "3 usuarios con roles diferenciados",
            "Reportes contables exportables (para contador)",
            "Webhooks y API básica",
            "Dominio personalizado incluido",
            "Soporte Business (8am-8pm + email)",
            "Onboarding personalizado (llamada de configuración)"
          ],
          ideal_para: "Negocios formales con RIF, tiendas con equipo, necesidades de reportería"
        }
      ],
      
      comparativa_costos: {
        titulo: "¿Por Qué Pagar Suscripción vs Usar Transferencias Manuales?",
        
        escenario_sin_buhopago: {
          titulo: "Sin BuhoPago (Método Tradicional)",
          costos_ocultos: [
            "⏱️ 2-3 horas/semana revisando transferencias manualmente (≈ USD 40/mes en tiempo)",
            "📉 5-10% de ventas perdidas por fricción (clientes abandonan al pedir cuenta bancaria)",
            "❌ Falta de control y reportes (no sabes realmente cuánto vendes)",
            "😰 Estrés de confirmar pagos, perseguir clientes, errores de reconciliación"
          ],
          costo_total_estimado: "USD 50-100/mes en costo de oportunidad + tiempo perdido"
        },
        
        escenario_con_buhopago: {
          titulo: "Con BuhoPago",
          beneficios: [
            "✅ Automatización completa (ahorras 2-3 horas/semana)",
            "✅ Más conversión (checkout profesional = menos abandonos)",
            "✅ Control total (sabes exactamente qué vendes y cuándo)",
            "✅ Profesionalismo (tus clientes confían más)"
          ],
          costo: "USD 10-75/mes según plan",
          roi: "Se paga solo con 1-2 ventas adicionales por mes"
        }
      }
    },
    
    casos_uso_fase_1: {
      titulo: "Casos de Uso (Fase 1)",
      
      casos: [
        {
          persona: "María - Vendedora de Ropa por Instagram",
          situacion_antes: "Publica fotos en Instagram, recibe consultas por DM, envía cuenta bancaria por WhatsApp, espera transferencia, confirma manualmente.",
          con_buhopago: "Pone link BuhoPago en bio de Instagram. Cliente ve producto → Click → Paga directo. María recibe notificación automática. Ahorra 10 horas/semana.",
          plan: "GROWTH (USD 25/mes)",
          resultado: "Aumentó ventas 30% por menor fricción. ROI en primera semana."
        },
        {
          persona: "José - Vendedor de Accesorios Tech (Alto Pago Móvil)",
          situacion_antes: "80% de sus clientes pagan por pago móvil. José revisa su banco cada hora, hace captura, busca el pago entre 50 transacciones diarias, le toma 5-10 min por venta confirmar.",
          con_buhopago: "Cliente compra → Paga por pago móvil → Sube screenshot → IA de BuhoPago extrae datos automáticamente → José ve alerta 'Pago validado, confirmar' → 1 click → Listo en 30 segundos.",
          detalle_validacion: "La IA detectó un intento de fraude (screenshot editado con monto alterado) y lo marcó como sospechoso. José evitó entregar producto sin pago real.",
          plan: "GROWTH (USD 25/mes)",
          resultado: "Reduce tiempo de confirmación de 5-10 min a <1 min por venta. 40-50 ventas/día = ahorra 3-4 horas diarias. Evitó 2 fraudes en el primer mes."
        },
        {
          persona: "Carlos - Instructor de Cursos Online",
          situacion_antes: "Envía factura pro-forma por email, cliente pregunta datos, Carlos responde con cuenta, espera confirmación, envía acceso manualmente.",
          con_buhopago: "Link de pago directo por curso. Cliente paga → Recibe confirmación automática → Carlos recibe notificación + acceso al alumno automático (via Zapier).",
          plan: "PRO (USD 45/mes)",
          resultado: "Automatizó 90% del proceso de inscripción. Cobra USD 150/curso, recupera inversión con 1 alumno/mes."
        },
        {
          persona: "Bodega El Progreso - Negocio Familiar con RIF",
          situacion_antes: "Clientes corporativos pagan por transferencia. Dueño revisa banco diariamente, hace Excel manual, contador pide reportes cada mes.",
          con_buhopago: "Links de pago para clientes corporativos. Reporte automático al contador. Conciliación en minutos vs horas.",
          plan: "BUSINESS (USD 75/mes)",
          resultado: "Ahorra 4 horas/semana de reconciliación. Contador feliz con reportes automáticos."
        }
      ]
    }
  },

  // FASE 2: SERVICIOS FUTUROS (CON LICENCIA ITFB)
  fase_2_procesamiento_completo: {
    titulo: "FASE 2: Procesamiento Completo (Roadmap 2026)",
    subtitulo: "Plataforma integral de procesamiento de pagos con cuenta concentradora",
    estado: "🚧 EN DESARROLLO REGULATORIO - Disponible Q3-Q4 2026",
    
    nota_importante: "⚠️ IMPORTANTE: Estos servicios requieren licencia ITFB de SUDEBAN. Actualmente estamos en proceso de obtener la autorización. Estimamos lanzamiento en Q3-Q4 2026.",
    
    diferencias_vs_fase_1: {
      titulo: "¿Qué Cambia en Fase 2?",
      descripcion: "En Fase 2, BuhoPago SE CONVIERTE EN TU PROCESADOR DE PAGOS. Nosotros recibimos el dinero en nuestra cuenta concentradora, retenemos nuestro fee, y te liquidamos el neto automáticamente.",
      
      cambio_clave: "🔑 CAMBIO PRINCIPAL: Ya no das tu cuenta bancaria. Tus clientes pagan a BuhoPago, y nosotros te transferimos automáticamente.",
      
      ventajas: [
        "✅ Débito inmediato (cliente paga con un click desde su banco)",
        "✅ Suscripciones automáticas (domiciliación bancaria)",
        "✅ No dar tu cuenta bancaria nunca más",
        "✅ Liquidación diaria automática",
        "✅ Procesamiento de tarjetas incluido",
        "✅ Mayor seguridad (no expones tus datos)"
      ]
    },
    
    servicios_exclusivos_fase_2: {
      titulo: "Servicios Exclusivos de Fase 2",
      
      categoria_procesamiento: {
        nombre: "💳 Procesamiento de Pagos Directo",
        servicios: [
          {
            servicio: "Débito Inmediato Bancario",
            descripcion: "Cliente paga con un click desde su cuenta bancaria, sin salir de tu checkout",
            como_funciona: [
              "Cliente ingresa a tu link de pago",
              "Selecciona su banco",
              "Se autentica en su banca online",
              "Autoriza el débito con un click",
              "Pago confirmado en <30 segundos"
            ],
            beneficios: [
              "⚡ Conversión 3x mayor vs transferencia manual",
              "🔒 Seguro (cliente nunca da contraseña a ti)",
              "✅ Confirmación instantánea",
              "🏦 Compatible con todos los bancos venezolanos"
            ]
          },
          {
            servicio: "Domiciliación Bancaria (Suscripciones Automáticas)",
            descripcion: "Cobra automáticamente cada mes/semana/día sin intervención del cliente",
            casos_uso: [
              "Suscripciones mensuales (Netflix-style)",
              "Membresías de gimnasio",
              "Cuotas de financiamiento",
              "Servicios recurrentes (hosting, software, etc)"
            ],
            como_funciona: [
              "Cliente autoriza débito recurrente (una sola vez)",
              "BuhoPago cobra automáticamente cada período",
              "Cliente recibe notificación antes del cobro",
              "Tú recibes el dinero sin hacer nada"
            ],
            beneficios: [
              "💰 Revenue predecible y recurrente",
              "⏱️ Cero tiempo en cobros manuales",
              "📈 Menor churn (clientes olvidan cancelar)",
              "🔄 Renovaciones automáticas"
            ]
          },
          {
            servicio: "Procesamiento de Tarjetas de Crédito/Débito",
            descripcion: "Acepta pagos con tarjetas venezolanas e internacionales",
            tipos_tarjetas: [
              "Tarjetas de débito venezolanas",
              "Tarjetas de crédito venezolanas",
              "Visa/Mastercard internacionales (próximamente)"
            ],
            beneficios: [
              "✅ Amplías métodos de pago",
              "🌎 Vendes a venezolanos en el exterior",
              "💳 Cuotas sin intereses (próximamente)"
            ]
          },
          {
            servicio: "Validación Automática de Pago Móvil (Tiempo Real)",
            descripcion: "Integración directa con sistema bancario para confirmar pagos móviles instantáneamente",
            diferencia_vs_fase_1: "En Fase 1, la validación requiere screenshot del cliente + confirmación del comercio. En Fase 2, es 100% automática sin intervención.",
            como_funciona: [
              "Cliente paga por pago móvil a la cuenta de BuhoPago",
              "Sistema consulta automáticamente con el banco vía API",
              "Confirmación en <30 segundos",
              "Comercio recibe notificación automática (sin tener que confirmar nada)",
              "Cliente ve confirmación instantánea en el checkout"
            ],
            beneficios: [
              "⚡ Confirmación en <1 minuto (vs 10-30 min en Fase 1 asistida)",
              "🤖 100% automático (cero intervención del comercio)",
              "🔒 Mayor seguridad (no hay screenshots que puedan ser falsos)",
              "✅ Certeza absoluta (data directo del banco)"
            ]
          }
        ]
      },
      
      categoria_liquidacion: {
        nombre: "💸 Liquidación y Gestión de Fondos",
        servicios: [
          {
            servicio: "Cuenta Concentradora BuhoPago",
            descripcion: "Tus clientes pagan a nuestra cuenta. Nosotros administramos y liquidamos.",
            ventajas: [
              "Nunca das tu cuenta bancaria",
              "Mayor seguridad (tu cuenta personal protegida)",
              "Procesamiento centralizado",
              "Trazabilidad completa"
            ]
          },
          {
            servicio: "Liquidación Automática Programable",
            descripcion: "Configura cómo y cuándo recibes tu dinero",
            opciones: [
              "Diaria (todos los días hábiles)",
              "Semanal (viernes de cada semana)",
              "Quincenal (1 y 15 de cada mes)",
              "Mensual",
              "On-demand (solicitas cuando quieras)"
            ],
            proceso: "Nosotros retenemos nuestro fee (5%) y te transferimos el 95% restante automáticamente"
          },
          {
            servicio: "Split Payments (Marketplaces)",
            descripcion: "Para plataformas con múltiples vendedores",
            caso_uso: "Marketplace vende producto de Vendedor A. Cliente paga USD 100. BuhoPago distribuye automáticamente: USD 70 a Vendedor A, USD 25 a Marketplace, USD 5 a BuhoPago.",
            ideal_para: "Marketplaces, plataformas multi-vendor, dropshipping"
          }
        ]
      },
      
      categoria_avanzada: {
        nombre: "🚀 Funcionalidades Avanzadas",
        servicios: [
          {
            servicio: "Pagos en Cuotas (Buy Now, Pay Later)",
            descripcion: "Ofrece financiamiento sin costo para ti",
            como_funciona: "Cliente compra por USD 300, paga en 3 cuotas de USD 100. BuhoPago te paga los USD 300 de inmediato, asume el riesgo de cobro.",
            beneficios: [
              "Aumenta ticket promedio",
              "Tú recibes todo de inmediato",
              "BuhoPago asume riesgo de no pago"
            ]
          },
          {
            servicio: "Facturación Electrónica SENIAT (Cuando esté disponible)",
            descripcion: "Genera facturas fiscales automáticamente al cobrar",
            para_quien: "PYMEs con RIF que necesitan facturar legalmente",
            status: "Próximamente (depende de apertura de API SENIAT)"
          },
          {
            servicio: "API REST Completa",
            descripcion: "Integra BuhoPago con cualquier sistema",
            capacidades: [
              "Crear cobros programáticamente",
              "Consultar estado de pagos",
              "Webhooks en tiempo real",
              "Gestión de clientes y suscripciones via API"
            ],
            documentacion: "Docs completas con SDKs en Python, Node.js, PHP"
          }
        ]
      }
    },
    
    pricing_fase_2: {
      titulo: "Modelo de Pricing (Fase 2)",
      
      cambio_modelo: "En Fase 2, cambiamos a modelo TRANSACCIONAL (como Stripe, PayPal). Cobramos % del volumen procesado.",
      
      fee_estandar: {
        fee: "5% por transacción exitosa",
        sin_costos_fijos: "USD 0 de cuota mensual para planes B2C",
        nota: "Solo pagas cuando vendes. Si no vendes, no pagas nada."
      },
      
      ejemplo_calculo: {
        titulo: "Ejemplo de Cálculo",
        escenario: "Vendes USD 5,000 en un mes con BuhoPago Fase 2",
        desglose: [
          "Volumen total vendido: USD 5,000",
          "Fee BuhoPago (5%): USD 250",
          "Recibes neto en tu cuenta: USD 4,750",
          "Liquidación automática: Diaria, semanal, o cuando prefieras"
        ]
      },
      
      planes_fase_2: [
        {
          nombre: "STARTER (B2C)",
          fee: "5% por transacción",
          cuota_mensual: "USD 0",
          incluye: "Débito inmediato + Tarjetas + Dashboard básico + Liquidación diaria"
        },
        {
          nombre: "GROWTH (B2C)",
          fee: "5% por transacción",
          cuota_mensual: "USD 0",
          incluye: "Todo de STARTER + Domiciliación + Analíticas + Catálogo ilimitado + Suscripciones"
        },
        {
          nombre: "PRO (B2C)",
          fee: "5% por transacción",
          cuota_mensual: "USD 0",
          incluye: "Todo de GROWTH + Pagos en cuotas + 2 usuarios + Soporte extendido"
        },
        {
          nombre: "BUSINESS (B2B)",
          fee: "5% por transacción",
          cuota_mensual: "USD 0 (fase inicial)",
          incluye: "Todo de PRO + Facturación electrónica + Multi-usuario + API + Webhooks + Reportes contables"
        },
        {
          nombre: "ENTERPRISE (B2B)",
          fee: "5% base (negociable a 3.5-4% según volumen)",
          cuota_mensual: "Custom (USD 150-300 según contrato)",
          incluye: "Todo de BUSINESS + White-label + Multi-sucursal + Split payments + Account manager + SLA 99.5%"
        }
      ]
    },
    
    migracion_fase_1_a_2: {
      titulo: "Migración de Fase 1 a Fase 2",
      descripcion: "Si ya eres cliente de BuhoPago Fase 1, migrar a Fase 2 será automático y sin fricción.",
      
      proceso: [
        "1. Te avisamos cuando Fase 2 esté disponible",
        "2. Decides si quieres migrar (es opcional)",
        "3. Si migras: cambias a fee transaccional (5%), ganas débito inmediato + domiciliación",
        "4. Si prefieres quedarte en Fase 1: puedes seguir con suscripción mensual",
        "5. Puedes cambiar entre fases cuando quieras"
      ],
      
      ventaja: "🎁 EARLY ADOPTER BONUS: Clientes de Fase 1 que migren a Fase 2 en los primeros 3 meses recibirán fee reducido de 4.5% (vs 5% estándar) de por vida."
    }
  },

  // COMPARATIVAS
  comparativas: {
    titulo: "Comparativas",
    
    vs_competencia: {
      titulo: "BuhoPago vs Alternativas Actuales",
      
      tabla: [
        {
          caracteristica: "Setup / Onboarding",
          buhopago: "2 minutos, sin papeleos",
          transferencia_manual: "N/A (das cuenta cada vez)",
          pos_tradicional: "2-4 semanas, trámites bancarios",
          paypal_zelle: "Rápido pero limitado a P2P"
        },
        {
          caracteristica: "Costo para el vendedor",
          buhopago_fase_1: "USD 10-75/mes (suscripción)",
          buhopago_fase_2: "5% por transacción",
          transferencia_manual: "Gratis (pero pierdes tiempo y ventas)",
          pos_tradicional: "8-12% + alquiler POS",
          paypal_zelle: "Gratis (pero informal, no profesional)"
        },
        {
          caracteristica: "Validación de Pago Móvil",
          buhopago_fase_1: "✅ Asistida con IA (1-3 min)",
          buhopago_fase_2: "✅ Automática 100% (<30 seg)",
          transferencia_manual: "❌ Manual total (10-30 min)",
          pos_tradicional: "N/A (no soporta pago móvil)",
          paypal_zelle: "❌ Manual"
        },
        {
          caracteristica: "Automatización",
          buhopago: "✅ Total (notificaciones, reportes, recordatorios)",
          transferencia_manual: "❌ Todo manual",
          pos_tradicional: "⚠️ Parcial",
          paypal_zelle: "❌ Manual"
        },
        {
          caracteristica: "Suscripciones recurrentes",
          buhopago_fase_1: "❌ (disponible Fase 2)",
          buhopago_fase_2: "✅ Domiciliación automática",
          transferencia_manual: "❌ Imposible",
          pos_tradicional: "❌ No soportado",
          paypal: "✅ PayPal Subscriptions (pero limitado en VE)"
        },
        {
          caracteristica: "Reportes y analíticas",
          buhopago: "✅ Dashboard completo + exportaciones",
          transferencia_manual: "❌ Excel manual",
          pos_tradicional: "⚠️ Básicos",
          paypal_zelle: "⚠️ Limitados"
        },
        {
          caracteristica: "Profesionalismo / Marca",
          buhopago: "✅ Checkout personalizado con tu branding",
          transferencia_manual: "❌ Das cuenta bancaria (poco profesional)",
          pos_tradicional: "✅ Profesional",
          paypal_zelle: "⚠️ Limitado"
        },
        {
          caracteristica: "Ideal para",
          buhopago: "Social sellers, PYMEs, servicios online",
          transferencia_manual: "Ventas muy esporádicas",
          pos_tradicional: "Retail grande, tiendas físicas",
          paypal_zelle: "P2P informal"
        }
      ]
    },
    
    fase_1_vs_fase_2_resumen: {
      titulo: "Fase 1 vs Fase 2: Resumen Comparativo",
      
      tabla: [
        {
          aspecto: "¿Quién recibe el dinero?",
          fase_1: "El comercio (en su propia cuenta)",
          fase_2: "BuhoPago (cuenta concentradora) → Liquida al comercio"
        },
        {
          aspecto: "Modelo de pricing",
          fase_1: "Suscripción mensual (USD 10-75)",
          fase_2: "Fee transaccional (5% por venta)"
        },
        {
          aspecto: "Validación Pago Móvil",
          fase_1: "✅ Asistida (IA + confirmación comercio, 1-3 min)",
          fase_2: "✅ Automática 100% (API bancaria, <30 seg)"
        },
        {
          aspecto: "Débito inmediato (1-click)",
          fase_1: "❌ No disponible",
          fase_2: "✅ Sí"
        },
        {
          aspecto: "Domiciliación / Suscripciones",
          fase_1: "❌ No disponible",
          fase_2: "✅ Sí"
        },
        {
          aspecto: "Procesamiento de tarjetas",
          fase_1: "❌ No disponible",
          fase_2: "✅ Sí"
        },
        {
          aspecto: "Dashboard y reportes",
          fase_1: "✅ Sí",
          fase_2: "✅ Sí (más avanzado)"
        },
        {
          aspecto: "Liquidación automática",
          fase_1: "N/A (comercio recibe directo)",
          fase_2: "✅ Diaria/Semanal/Custom"
        },
        {
          aspecto: "Requiere licencia SUDEBAN",
          fase_1: "❌ No",
          fase_2: "✅ Sí (ITFB)"
        },
        {
          aspecto: "Disponibilidad",
          fase_1: "✅ AHORA",
          fase_2: "🚧 Q3-Q4 2026"
        }
      ]
    }
  },

  // ROADMAP Y TIMELINE
  roadmap: {
    titulo: "Roadmap de Producto BuhoPago",
    
    timeline: [
      {
        periodo: "Q4 2025 (Actual)",
        fase: "Fase 1 - Lanzamiento Beta",
        hitos: [
          "✅ Producto Fase 1 completo (SaaS)",
          "✅ Beta con 20-50 primeros clientes",
          "🔄 Iteración según feedback",
          "🔄 Optimización de onboarding"
        ],
        status: "EN CURSO"
      },
      {
        periodo: "Q1 2026",
        fase: "Fase 1 - Escalamiento",
        hitos: [
          "Lanzamiento público Fase 1",
          "Target: 100-300 clientes activos",
          "Lanzamiento de integración WooCommerce",
          "Inicio de partnerships con bancos/PSPs"
        ],
        licencia: "🔄 Solicitud ITFB presentada a SUDEBAN"
      },
      {
        periodo: "Q2 2026",
        fase: "Fase 1 - Consolidación",
        hitos: [
          "Target: 300-500 clientes activos",
          "Lanzamiento integración Zapier",
          "Mejoras en analíticas y reportes",
          "Programa de referidos"
        ],
        licencia: "🔄 Evaluación SUDEBAN en progreso"
      },
      {
        periodo: "Q3 2026",
        fase: "Fase 2 - Preparación",
        hitos: [
          "Target Fase 1: 500-800 clientes",
          "Infraestructura Fase 2 lista (cuenta concentradora, compliance)",
          "Contratos con bancos para débito inmediato",
          "Beta cerrada Fase 2 con clientes selectos"
        ],
        licencia: "✅ Licencia ITFB APROBADA (estimado)"
      },
      {
        periodo: "Q4 2026",
        fase: "Fase 2 - Lanzamiento",
        hitos: [
          "🚀 Lanzamiento público Fase 2",
          "Débito inmediato operativo",
          "Domiciliación bancaria activa",
          "Procesamiento de tarjetas",
          "Migración clientes Fase 1 → Fase 2"
        ],
        licencia: "✅ Operando como ITFB autorizada"
      },
      {
        periodo: "2027+",
        fase: "Escalamiento y Expansión",
        hitos: [
          "Target: 2,000-4,000 clientes activos",
          "Facturación electrónica SENIAT",
          "Pagos internacionales (Visa/Mastercard)",
          "API pública y marketplace de integraciones",
          "Posible expansión regional (Colombia, Ecuador)"
        ]
      }
    ]
  },

  // CALL TO ACTION
  cta: {
    titulo: "¿Listo para Profesionalizar tus Cobros?",
    
    fase_1_disponible: {
      titulo: "Empieza HOY con Fase 1",
      descripcion: "No esperes a Fase 2. Empieza a usar BuhoPago AHORA con nuestras herramientas de gestión y automatiza tus cobros desde hoy.",
      
      pasos: [
        "1. Regístrate en 2 minutos (sin tarjeta de crédito para el trial)",
        "2. Crea tu primer link de pago personalizado",
        "3. Comparte con tus clientes y empieza a cobrar profesionalmente",
        "4. Cuando Fase 2 esté lista, migras automáticamente (opcional)"
      ],
      
      oferta_lanzamiento: "🎁 OFERTA DE LANZAMIENTO: Primeros 100 usuarios obtienen 50% OFF los primeros 3 meses en cualquier plan.",
      
      trial: "✅ Prueba GRATIS 14 días, sin tarjeta de crédito, sin compromiso"
    },
    
    contacto: {
      titulo: "¿Tienes Preguntas?",
      canales: [
        "📱 WhatsApp: +58 412-XXX-XXXX",
        "📧 Email: hola@buhopago.com",
        "🌐 Web: www.buhopago.com",
        "📅 Agenda una demo: calendly.com/buhopago"
      ]
    },
    
    early_access_fase_2: {
      titulo: "Early Access a Fase 2",
      descripcion: "Regístrate ahora en nuestra lista de espera para ser de los primeros en acceder a Fase 2 cuando esté disponible.",
      beneficios: [
        "🎁 Fee reducido de por vida (4.5% vs 5%)",
        "⚡ Acceso prioritario al beta de Fase 2",
        "💬 Influye en el producto (feedback directo al equipo)",
        "📚 Invitación a webinars exclusivos"
      ],
      cta: "Únete a la lista de espera → buhopago.com/fase2"
    }
  },

  // ANEXOS
  anexos: {
    faq: {
      titulo: "Preguntas Frecuentes",
      
      preguntas: [
        {
          q: "¿BuhoPago está regulado?",
          a: "Fase 1 (actual) opera como SaaS y no requiere licencia especial. Fase 2 REQUIERE licencia ITFB de SUDEBAN, la cual estamos en proceso de obtener. No lanzaremos Fase 2 hasta tener la autorización completa."
        },
        {
          q: "¿Cómo funciona la validación de pago móvil en Fase 1?",
          a: "El cliente paga por pago móvil a TU número (del comercio) y sube un screenshot del comprobante. Nuestra IA extrae automáticamente el monto, referencia y hora del comprobante, valida que coincida con la compra, y te notifica. Tú confirmas con 1 click. Todo el proceso toma 1-3 minutos vs 10-30 minutos de forma manual. Además, la IA detecta screenshots falsos o editados."
        },
        {
          q: "¿Es seguro vincular mi cuenta bancaria?",
          a: "En Fase 1, solo usamos tus datos bancarios para generar información de pago (no accedemos a tu cuenta). En Fase 2, trabajaremos con bancos autorizados bajo supervisión SUDEBAN. Toda la data está encriptada."
        },
        {
          q: "¿Puedo usar BuhoPago si no tengo RIF?",
          a: "¡Sí! Fase 1 está diseñada para vendedores informales sin RIF. Planes B2C no requieren registro mercantil. Solo necesitas una cuenta bancaria venezolana a tu nombre."
        },
        {
          q: "¿Qué pasa si un cliente no paga?",
          a: "En Fase 1, el riesgo de no pago es tuyo (cliente paga directo a tu cuenta). BuhoPago no interviene en el cobro. En Fase 2, ofreceremos protección contra fraude y chargebacks."
        },
        {
          q: "¿La IA puede detectar comprobantes falsos?",
          a: "Sí. Nuestro sistema de IA detecta screenshots editados (cuando alguien modifica el monto), comprobantes duplicados (ya usados en otra compra), y timestamps sospechosos. Cualquier alerta se marca para tu revisión manual."
        },
        {
          q: "¿Puedo cancelar cuando quiera?",
          a: "Sí, sin penalización. Cancelas tu suscripción cuando quieras, sin preguntas. No hay contratos de permanencia."
        },
        {
          q: "¿Cuándo estará disponible Fase 2?",
          a: "Estimamos Q3-Q4 2026. Depende de la aprobación de SUDEBAN (proceso que puede tomar 18-24 meses). Mantendremos a nuestros usuarios actualizados."
        },
        {
          q: "¿Trabajan con todos los bancos venezolanos?",
          a: "Fase 1: Sí, aceptamos cuentas de cualquier banco venezolano. Fase 2: Trabajaremos con los principales bancos que aprueben contratos bajo supervisión SUDEBAN."
        }
      ]
    },
    
    glosario: {
      titulo: "Glosario de Términos",
      terminos: [
        {
          termino: "Débito Inmediato",
          definicion: "Pago con un click desde la cuenta bancaria del cliente, sin necesidad de transferencia manual."
        },
        {
          termino: "Domiciliación Bancaria",
          definicion: "Autorización para cobrar automáticamente de forma recurrente (ej: cada mes) sin intervención del cliente."
        },
        {
          termino: "Cuenta Concentradora",
          definicion: "Cuenta bancaria donde BuhoPago recibe todos los pagos de los clientes, para luego liquidar a cada comercio."
        },
        {
          termino: "Liquidación",
          definicion: "Transferencia del dinero neto (después de retener fees) desde BuhoPago a la cuenta del comercio."
        },
        {
          termino: "ITFB",
          definicion: "Institución de Tecnología Financiera del Sector Bancario. Licencia requerida por SUDEBAN para operar como procesador de pagos."
        },
        {
          termino: "Fee Transaccional",
          definicion: "Porcentaje que cobra BuhoPago sobre cada venta (5% en Fase 2)."
        }
      ]
    }
  }
};