export const modeloNegocioData = {
  titulo: "Modelo de Negocio: Plataforma de Pagos Híbrida por Fases",
  
  vision: "Ser la infraestructura de pagos tecnológica preferida en Venezuela, comenzando como un validador universal y evolucionando a orquestador B2B regulado.",
  
  hoja_de_ruta: {
    titulo: "Estrategia de Implementación por Fases",
    
    fase_1: {
      nombre: "FASE 1 - MVP: El Validador Universal",
      tiempo: "Inicio Inmediato (0-6 meses)",
      estado_legal: "PROVEEDOR DE SOFTWARE - Sin requerir autorización SUDEBAN",
      
      publico_objetivo: {
        primario: "Personas Naturales",
        secundario: "Freelancers, Microempresas, Emprendedores",
        tamano_mercado: "Amplio (toda persona que reciba pagos vía Pago Móvil)"
      },
      
      servicio: {
        nombre: "Validación Inteligente de Pagos",
        descripcion: "Software que automatiza la verificación, registro y conciliación de comprobantes de pagos móviles ya realizados.",
        caracteristicas: [
          "Consulta y validación de comprobantes Pago Móvil",
          "Dashboard de pagos recibidos",
          "Alertas automáticas por WhatsApp/Email",
          "API de solo-lectura para desarrolladores",
          "Generación de reportes básicos"
        ],
        aclaracion_legal: "NO inicia pagos, NO instruye transferencias, NO custodia fondos. Solo verifica operaciones ya realizadas."
      },
      
      modelo_ingresos: {
        tipo: "SaaS (Software como Servicio)",
        opciones: [
          {
            plan: "Gratis",
            caracteristicas: ["Hasta 10 validaciones/mes", "Dashboard básico"],
            objetivo: "Adquisición masiva"
          },
          {
            plan: "Pro",
            precio: "USD 5-10/mes",
            caracteristicas: ["Validaciones ilimitadas", "Alertas WhatsApp", "API básica"],
            objetivo: "Monetización base"
          },
          {
            plan: "Business",
            precio: "USD 20-50/mes",
            caracteristicas: ["API completa", "Conciliación avanzada", "Soporte prioritario"],
            objetivo: "Microempresas"
          }
        ],
        metricas_clave: ["CAC < USD 5", "LTV > USD 50", "Churn < 5% mensual"]
      },
      
      estrategia_marketing: {
        enfoque: "Viralidad WhatsApp-First",
        canales: ["WhatsApp Business", "Redes Sociales", "Referidos", "Content Marketing"],
        mensaje_clave: "¿Cansado de revisar comprobantes de Pago Móvil uno por uno? Automatízalo.",
        kpi: ["10,000 usuarios en 6 meses", "5% conversión a pago"]
      },
      
      objetivo_fase: "Validar demanda, construir base de usuarios, generar cash flow inicial (USD 5k-10k/mes)."
    },
    
    fase_2: {
      nombre: "FASE 2 - Plataforma B2B: El Orquestador Regulado",
      tiempo: "Mediano Plazo (6-18 meses, POST-AUTORIZACIÓN)",
      estado_legal: "ITFB AUTORIZADA por SUDEBAN (Res. 001.21)",
      pre_requisito: "Haber obtenido la autorización de SUDEBAN como ITFB",
      
      publico_objetivo: {
        primario: "Personas Jurídicas (Empresas Registradas)",
        segmentos: ["E-commerce", "Servicios Profesionales", "Retail", "SaaS Venezolanos"],
        tamano_mercado: "Mediano (10,000+ empresas potenciales)"
      },
      
      servicio: {
        nombre: "Plataforma de Orquestación de Pagos B2B",
        descripcion: "Infraestructura tecnológica que conecta negocios con la banca para recibir pagos automatizados.",
        caracteristicas: [
          "Enlaces de pago personalizables",
          "API completa para integración",
          "Checkout embebido",
          "Pagos recurrentes (suscripciones)",
          "Conciliación automática con contabilidad",
          "Dashboard empresarial con múltiples usuarios"
        ]
      },
      
      mecanismo_operativo: {
        titulo: "Cómo funciona la Orquestación (Modelo Defendible)",
        principio: "La plataforma genera instrucciones, el banco ejecuta los movimientos de fondos.",
        flujo: [
          "1. Comercio integra botón/enlace/API en su sitio",
          "2. Cliente final paga (via Pago Móvil, transferencia)",
          "3. Plataforma VALIDA el pago en tiempo real",
          "4. Plataforma genera INSTRUCCIÓN AUTOMATIZADA al banco socio",
          "5. BANCO ejecuta liquidación a cuenta del comercio (<24h)",
          "6. Plataforma confirma a ambas partes y registra la transacción"
        ],
        roles: {
          plataforma: "Tecnología + Validación + Instrucción + Experiencia UX",
          banco: "Custodia + Ejecución + Responsabilidad Financiera + Cumplimiento"
        },
        ventaja: "Cada parte hace lo que mejor hace, con responsabilidades claras."
      },
      
      modelo_ingresos: {
        tipo: "Fee por Transacción + SaaS",
        estructura: [
          {
            componente: "Fee de Procesamiento",
            valor: "1.5% - 2.5% por transacción exitosa",
            justificacion: "Por el servicio de orquestación, validación y tecnología"
          },
          {
            componente: "Suscripción Mensual",
            valor: "USD 29 - USD 99/mes según volumen",
            caracteristicas: ["Soporte prioritario", "Múltiples usuarios", "API avanzada"]
          }
        ],
        proyeccion: "USD 50k-100k/mes con 500-1,000 empresas activas"
      },
      
      estrategia_comercial: {
        enfoque: "Ventas Directas B2B + Alianzas",
        canales: [
          "Sales Team dedicado",
          "Alianzas con bancos (que son clientes legales)",
          "Partnership con contadores y software de gestión",
          "Referidos de Fase 1 (microempresas que escalaron)"
        ],
        mensaje_clave: "La única plataforma de pagos tecnológica autorizada por SUDEBAN. Seguridad legal + mejor experiencia.",
        kpi: ["CAC B2B < USD 200", "Ticket promedio > USD 100/mes", "Retención > 90% anual"]
      },
      
      objetivo_fase: "Dominar el mercado B2B de pagos digitales, generar ingresos recurrentes escalables, establecer alianza bancaria estratégica."
    },
    
    fase_3: {
      nombre: "FASE 3 - Plataforma Abierta",
      tiempo: "Largo Plazo (24+ meses)",
      estado_legal: "ITFB con autorización ampliada o PSP del BCV",
      descripcion: "Infraestructura completa de pagos con posible manejo directo de fondos para casos específicos.",
      nota: "VISIÓN futura, sujeta a evolución regulatoria y de mercado."
    }
  },

  ventajas_competitivas: {
    fase_1: [
      "CERO fricción regulatoria (puedes lanzar hoy)",
      "Modelo viral (WhatsApp-first)",
      "Simpleza extrema (resuelve dolor real)"
    ],
    fase_2: [
      "Respaldo legal único (ITFB autorizada)",
      "Modelo híbrido probado (de Fase 1)",
      "Tecnología ya desarrollada y probada",
      "Relación bancaria formalizada"
    ]
  },

  gestion_riesgos: {
    riesgo_1: {
      nombre: "Regulatorio - Operar Fase 2 sin autorización",
      nivel: "CRÍTICO",
      mitigacion: "NO lanzar Fase 2 comercialmente hasta tener autorización escrita de SUDEBAN. Fase 1 es completamente segura."
    },
    riesgo_2: {
      nombre: "Operacional - Dependencia de banco socio",
      nivel: "ALTO",
      mitigacion: "Negociar contrato de 3+ años con banco, buscar cláusulas de rendimiento mínimas, desarrollar capacidad multi-banco a futuro."
    },
    riesgo_3: {
      nombre: "Mercado - Adopción lenta B2B",
      nivel: "MEDIO",
      mitigacion: "Usar Fase 1 como embudo (convertir microempresas que crecen), ofrecer periodo de prueba extendido, fuerte enfoque en educación."
    }
  },

  metricas_clave: {
    corto_plazo_6m: [
      "10,000 usuarios Fase 1",
      "5% tasa conversión a pago",
      "USD 10k MRR (Fase 1)",
      "Expediente de autorización ITFB presentado"
    ],
    medio_plazo_18m: [
      "Autorización SUDEBAN obtenida",
      "100 empresas piloto Fase 2",
      "USD 50k MRR (combinado)",
      "Alianza con 1-2 bancos"
    ]
  },

  referencias: [
    {
      autores: "Osterwalder, A., & Pigneur, Y.",
      año: 2010,
      titulo: "Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers",
      fuente: "John Wiley & Sons"
    },
    {
      autores: "Ries, E.",
      año: 2011,
      titulo: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
      fuente: "Crown Business"
    },
    {
      autores: "Maurya, A.",
      año: 2012,
      titulo: "Running Lean: Iterate from Plan A to a Plan That Works",
      fuente: "O'Reilly Media"
    }
  ]
};