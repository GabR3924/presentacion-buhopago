export const planEvolucionNegocioData = {
  titulo: "PLAN DE EVOLUCIÓN: De Herramienta Simple a Plataforma Financiera",
  vision: "Convertirnos en la infraestructura de pagos predilecta para el ecosistema digital venezolano, comenzando por resolver el dolor más simple y escalando hacia soluciones financieras completas.",
  
  etapas: {
    etapa_1: {
      nombre: "ETAPA ACTUAL: Herramienta de Validación",
      periodo: "Meses 0-12",
      estado_regulatorio: "Fuera del alcance de la Resolución 001.21",
      lema: "El orden en tus cobros",
      
      proposito: {
        estrategico: "Demostrar fit de producto y construir base de usuarios leales",
        comercial: "Resolver el caos diario de validar pagos móviles",
        legal: "Operar sin requerir autorización financiera"
      },
      
      producto_nucleo: {
        nombre: "Validador Inteligente",
        funcionalidades: [
          "Scan de comprobantes Pago Móvil",
          "Alertas automáticas por WhatsApp",
          "Dashboard de pagos recibidos",
          "API de solo lectura para desarrolladores"
        ],
        principio_diseno: "Mobile-first, WhatsApp-native"
      },
      
      metricas_exito: [
        "10,000 usuarios activos mensuales",
        "Tasa de retención > 40% a 90 días",
        "CAC < $3",
        "NPS > 50"
      ],
      
      salida_etapa: "Haber creado una comunidad de 100,000+ vendedores digitales que confían en la plataforma"
    },
    
    etapa_2: {
      nombre: "ETAPA DE CRECIMIENTO: Plataforma de Flujos de Cobro",
      periodo: "Meses 12-24",
      estado_regulatorio: "ITFB autorizada por SUDEBAN",
      condicion: "Haber obtenido autorización bajo Resolución 001.21",
      lema: "Tu negocio cobra automáticamente",
      
      proposito: {
        estrategico: "Monetizar la base existente y captar mercado PYME formal",
        comercial: "Automatizar todo el ciclo de cobranza para negocios",
        legal: "Operar como Institución de Tecnología Financiera regulada"
      },
      
      evolucion_producto: {
        desde: "Validador de pagos ya realizados",
        hacia: "Orquestador completo del flujo de cobro",
        nuevas_funcionalidades: [
          "Generación de enlaces/botones de pago",
          "Checkout embebido para sitios web",
          "Pagos recurrentes (suscripciones)",
          "Conciliación automática con contabilidad",
          "Dashboard multi-usuario empresarial"
        ]
      },
      
      expansion_mercado: {
        segmento_primario: "PYMEs que escalan desde la Etapa 1",
        segmento_secundario: "Empresas establecidas que buscan modernizarse",
        tamano_mercado: "~100,000 empresas (20% de PYMEs que ya venden online)"
      },
      
      metricas_exito: [
        "5,000 empresas clientes",
        "ARPU > $50/mes",
        "Retención anual > 80%",
        "Margen bruto > 70%"
      ],
      
      salida_etapa: "Ser la plataforma de pagos preferida para el e-commerce venezolano"
    },
    
    etapa_3: {
      nombre: "ETAPA DE MADUREZ: Infraestructura Financiera Integral",
      periodo: "Meses 24+",
      estado_regulatorio: "ITFB con autorizaciones ampliadas",
      lema: "La columna vertebral financiera de tu negocio",
      
      proposito: {
        estrategico: "Diversificar revenue streams y crear ecosistema",
        comercial: "Ofrecer suite completa de servicios financieros para negocios digitales",
        legal: "Múltiples autorizaciones para servicios complementarios"
      },
      
      expansion_producto: {
        nucleo: "Plataforma de pagos (base sólida)",
        nuevos_verticales: [
          {
            nombre: "Financiamiento",
            servicio: "Avances de capital basados en historial de ventas",
            oportunidad: "99% de PYMEs no acceden a crédito tradicional"
          },
          {
            nombre: "Gestión de Tesorería",
            servicio: "Cuentas empresariales con rendimiento",
            oportunidad: "Empresas mantienen efectivo improductivo"
          },
          {
            nombre: "Seguros",
            servicio: "Micro-seguros para envíos y transacciones",
            oportunidad: "0% penetración en micro-negocios"
          }
        ]
      },
      
      vision_ecosistema: {
        concepto: "Marketplace financiero para negocios digitales",
        participantes: [
          "Proveedores de servicios (contadores, logisticos)",
          "Inversores (para financiamiento)",
          "Bancos socios (infraestructura)",
          "Plataformas de e-commerce (integración)"
        ],
        valor: "Un solo lugar para todas las necesidades financieras del negocio digital"
      },
      
      metricas_exito: [
        ">20% market share en pagos digitales B2B",
        "LTV por cliente > $5,000",
        ">3 revenue streams diversificados",
        "Valuation > $100M"
      ]
    }
  },
  
  transiciones: {
    transicion_1_2: {
      nombre: "De Herramienta a Plataforma",
      gatillo: "Obtención de autorización como ITFB",
      preparativos: [
        {
          accion: "Desarrollo técnico paralelo",
          tiempo: "Meses 6-18",
          detalle: "Construir plataforma B2B mientras opera Etapa 1"
        },
        {
          accion: "Tramitación regulatoria",
          tiempo: "Meses 1-12",
          detalle: "Proceso de autorización SUDEBAN en paralelo a operaciones"
        },
        {
          accion: "Preparación comercial",
          tiempo: "Mes 9-12",
          detalle: "Identificar early adopters entre usuarios Etapa 1"
        }
      ],
      riesgo_principal: "Retraso en autorización regulatoria",
      mitigacion: "Extender monetización de Etapa 1 y buscar alianzas temporales"
    },
    
    transicion_2_3: {
      nombre: "De Plataforma a Ecosistema",
      gatillo: "Base de 10,000+ empresas activas en plataforma",
      preparativos: [
        {
          accion: "Acumulación de data",
          detalle: "Historial transaccional suficiente para modelos de riesgo"
        },
        {
          accion: "Alianzas estratégicas",
          detalle: "Socios para financiamiento, seguros, otros servicios"
        },
        {
          accion: "Expansión de equipo",
          detalle: "Contratar talento especializado en cada vertical nuevo"
        }
      ],
      riesgo_principal: "Dilución del foco",
      mitigacion: "Lanzar un vertical a la vez, validar antes de escalar"
    }
  },
  
  pilares_estrategicos: {
    pilar_1: {
      nombre: "Confianza como ventaja competitiva",
      manifestaciones: [
        "Transparencia total en comisiones y procesos",
        "Seguridad de datos como feature principal",
        "Soporte humano accesible (WhatsApp, teléfono)",
        "Garantías claras y cumplidas"
      ]
    },
    
    pilar_2: {
      nombre: "Mobile-first para realidad venezolana",
      manifestaciones: [
        "Todas las funcionalidades disponibles desde smartphone",
        "Experiencia optimizada para conexiones 3G/4G",
        "Integración nativa con WhatsApp (canal principal)",
        "Onboarding en <5 minutos"
      ]
    },
    
    pilar_3: {
      nombre: "Educación como driver de adopción",
      manifestaciones: [
        "Contenido educativo en TikTok/IG (formato nativo)",
        "Webinars mensuales para negocios que escalan",
        "Comunidad de usuarios que se ayudan",
        "Documentación clara y en español venezolano"
      ]
    }
  },
  
  habilitadores: {
    etapa_1: {
      capital: "$50,000 - $100,000",
      equipo: ["1 CTO", "1 Growth Marketer", "1 Soporte/CX"],
      infraestructura: ["Servidores cloud", "API Pago Móvil", "Sistema notificaciones"],
      metricas_desbloqueo: ["10,000 usuarios activos", "MRR > $5,000", "CAC < LTV/3"]
    },
    
    etapa_2: {
      capital: "$500,000 - $1,000,000",
      equipo: ["Equipo dev 5 personas", "Ventas B2B", "Legal/Compliance", "Soporte escalado"],
      infraestructura: ["Infraestructura bancaria", "Sistemas de conciliación", "APIs empresariales"],
      metricas_desbloqueo: ["Autorización SUDEBAN", "500 empresas piloto", "MRR > $50,000"]
    },
    
    etapa_3: {
      capital: "$5,000,000+",
      equipo: ["Equipo especializado por vertical", "Gestión de alianzas", "Riesgo y cumplimiento"],
      infraestructura: ["Plataforma multiproducto", "Sistemas de scoring", "Ecosistema de partners"],
      metricas_desbloqueo: ["10,000 empresas activas", "Margen bruto > 60%", "Valuation > $50M"]
    }
  },
  
  escenarios: {
    escenario_optimista: {
      nombre: "Escenario Optimista",
      condicion: "Rápida autorización regulatoria + adopción acelerada",
      resultado: "Compresión de timeline: Etapa 2 en 18 meses, Etapa 3 en 30 meses",
      acciones: "Invertir en crecimiento agresivo, buscar expansión regional"
    },
    
    escenario_base: {
      nombre: "Escenario Base",
      condicion: "Timeline regulatorio normal + crecimiento orgánico",
      resultado: "Etapa 2 en 24 meses, Etapa 3 en 36-48 meses",
      acciones: "Enfoque en rentabilidad y retención, crecimiento sostenible"
    },
    
    escenario_conservador: {
      nombre: "Escenario Conservador",
      condicion: "Retrasos regulatorios + adopción más lenta",
      resultado: "Extender Etapa 1, pivotear a verticales adyacentes no regulados",
      acciones: [
        "Monetizar Etapa 1 con features premium",
        "Desarrollar herramientas para creadores de contenido",
        "Buscar adquisición por player existente"
      ]
    }
  },
  
  resumen_ejecutivo: {
    etapa_1: {
      producto: "Validador de Pagos",
      mercado: "Vendedores Sociales (7M+ personas)",
      revenue: "Suscripciones ($5-20/mes)",
      inversion: "$50k-100k",
      salida: "Product-Market Fit + Comunidad"
    },
    etapa_2: {
      producto: "Plataforma de Cobros",
      mercado: "PYMEs Digitales (100k+ empresas)",
      revenue: "SaaS + % transaccional ($50-200/mes)",
      inversion: "$500k-1M",
      salida: "Liderazgo en pagos B2B"
    },
    etapa_3: {
      producto: "Ecosistema Financiero",
      mercado: "Negocios Digitales (todas las etapas)",
      revenue: "Multiples streams (SaaS, %, comisiones)",
      inversion: "$5M+",
      salida: "Infraestructura crítica del e-commerce venezolano"
    }
  },

  referencias: [
    {
      autores: "Blank, S., & Dorf, B.",
      año: 2012,
      titulo: "The Startup Owner's Manual: The Step-By-Step Guide for Building a Great Company",
      fuente: "K&S Ranch"
    },
    {
      autores: "Ries, E.",
      año: 2011,
      titulo: "The Lean Startup",
      fuente: "Crown Business"
    },
    {
      autores: "Moore, G. A.",
      año: 2014,
      titulo: "Crossing the Chasm: Marketing and Selling Disruptive Products to Mainstream Customers",
      fuente: "HarperBusiness"
    }
  ]
};