export const estudiosCompetenciaMercadoData = {
  titulo: "Estudios de Competencia y Mercado",
  
  introduccion: {
    subtitulo: "¿Quién está ganando ya? ¿Dónde está el espacio libre?",
    proposito: "Este análisis permite identificar qué actores están capturando valor actualmente, qué enfoques han fallado y dónde existe un espacio claro para una solución enfocada en pagos inmediatos, simples y accesibles para personas naturales y PYMES.",
    objetivo: "Evitar errores ya cometidos por otros actores y posicionar la solución en un nicho desatendido pero con demanda real."
  },

  panorama_competitivo: {
    titulo: "Panorama Competitivo Real: ¿Quién está ganando ya?",
    descripcion: "El mercado venezolano de pagos digitales se encuentra fragmentado entre:",
    actores: [
      {
        categoria: "Bancos y Pago Móvil",
        caracteristicas: [
          "Dominan el volumen transaccional.",
          "Tienen adopción masiva por obligatoriedad.",
          "No ofrecen una experiencia moderna ni herramientas flexibles."
        ],
        conclusion: "Son infraestructura, no producto."
      },
      {
        categoria: "Wallets y soluciones locales (Ej. Vippo)",
        caracteristicas: [
          "Enfocado principalmente en comercios medianos y grandes.",
          "Adopción institucional más que orgánica.",
          "UX poco optimizada y alto nivel de fricción para el usuario final.",
          "Bajo engagement en canales digitales y escasa viralidad."
        ],
        conclusion: "Tiene presencia, pero no liderazgo de mercado ni top-of-mind."
      },
      {
        categoria: "Empresas grandes con desarrollos internos (Ej. Yummy, Ridery, Cashea)",
        caracteristicas: [
          "Han desarrollado soluciones de pago propias para uso interno.",
          "Cuentan con equipos técnicos, acuerdos bancarios y capital.",
          "Estas soluciones **no están disponibles como producto para terceros**."
        ],
        conclusion: "Validan la necesidad, pero no resuelven el mercado general."
      },
      {
        categoria: "Iniciativas emergentes / ecosistema (Ej. Wayú, Venflow)",
        caracteristicas: [
          "Proyectos en etapa temprana o de planeación.",
          "Enfocados en digitalización operativa o infraestructura financiera.",
          "Sin productos de pago en producción ni adopción comprobable."
        ],
        conclusion: "No compiten directamente hoy."
      }
    ]
  },

  participacion_mercado: {
    titulo: "Participación de Mercado de Soluciones Existentes",
    hallazgo_principal: "No existe una solución dominante en el segmento de: pagos inmediatos, vía link o WhatsApp, orientados a personas naturales y PYMES.",
    distribucion: [
      {
        actor: "Bancos / Pago Móvil",
        participacion: "Alto volumen",
        caracteristica: "Baja experiencia de usuario."
      },
      {
        actor: "Wallets locales",
        participacion: "Adopción limitada."
      },
      {
        actor: "Soluciones internas de empresas",
        participacion: "Cerradas, no escalables."
      },
      {
        actor: "Cripto / P2P",
        participacion: "Alternativa informal, no mainstream."
      }
    ],
    conclusion: "No existe un 'Stripe local' para el día a día."
  },

  comparativa_features: {
    titulo: "Comparativa de Features y Enfoque",
    diferencias_clave: {
      titulo: "Diferencias clave observadas",
      tabla: [
        {
          dimension: "Foco",
          soluciones_existentes: "Institucional / corporativo",
          propuesta_solucion: "Usuario final y PYMES"
        },
        {
          dimension: "Experiencia de Usuario (UX)",
          soluciones_existentes: "Fricción alta",
          propuesta_solucion: "Simplicidad extrema"
        },
        {
          dimension: "Canales Principales",
          soluciones_existentes: "Apps bancarias, POS físicos",
          propuesta_solucion: "Links, WhatsApp, QR"
        },
        {
          dimension: "Proceso de Onboarding",
          soluciones_existentes: "Largo y obligatorio",
          propuesta_solucion: "Mínimo / progresivo"
        },
        {
          dimension: "Velocidad de Transacción",
          soluciones_existentes: "Lenta",
          propuesta_solucion: "Inmediata"
        },
        {
          dimension: "Accesibilidad",
          soluciones_existentes: "Limitada",
          propuesta_solucion: "Abierta"
        }
      ]
    },
    politica_precios: {
      titulo: "Política de Precios",
      observaciones: [
        "Bancos y POS: comisiones poco transparentes.",
        "Wallets locales: fees variables y poca claridad.",
        "Soluciones internas: costos técnicos altos."
      ],
      conclusion: "La propuesta apunta a costos predecibles y transparencia."
    }
  },

  estrategias_adquisicion: {
    titulo: "Estrategias de Adquisición Usadas por Otros",
    estrategias_observadas: [
      {
        tipo: "Ventas B2B tradicionales (Ej. Vippo)",
        acciones: ["Ventas directas.", "Alianzas con empresas grandes."],
        resultado: "Crecimiento lento y poco orgánico."
      },
      {
        tipo: "Distribución a través de Bancos",
        acciones: ["Inclusión por defecto en canales bancarios."],
        resultado: "Uso por obligación, no por preferencia."
      },
      {
        tipo: "Usuarios cautivos (Empresas grandes)",
        acciones: ["Incentivos para uso interno dentro de la compañía."],
        resultado: "Estrategia no replicable para terceros."
      }
    ],
    resultado_general: {
      conclusiones: [
        "Baja viralidad.",
        "Poco crecimiento bottom-up (de abajo hacia arriba).",
        "Escasa adopción por recomendación."
      ],
      insight_final: "No existen estrategias exitosas de adquisición masiva enfocadas en pagos inmediatos para personas naturales y PYMES."
    }
  },

  funciona_no_funciona: {
    titulo: "Qué Funciona y Qué No, por Segmento",
    segmentos: [
      {
        segmento: "Personas naturales / freelancers",
        funciona: [
          "Links de pago.",
          "Enfoque 'WhatsApp-first'.",
          "Cero registro para pagar.",
          "Confirmación inmediata de la operación."
        ],
        no_funciona: [
          "Formularios largos de registro.",
          "Descarga obligatoria de apps.",
          "Solicitud de datos innecesarios."
        ]
      },
      {
        segmento: "PYMES / Comercios pequeños",
        funciona: [
          "Un método simple para cobrar.",
          "QR o link reutilizable.",
          "Reportes básicos de gestión.",
          "Soporte humano accesible."
        ],
        no_funciona: [
          "POS físicos costosos.",
          "Contratos largos y complejos.",
          "Estructuras de comisiones confusas."
        ]
      },
      {
        segmento: "Comercios digitales / ecommerce pequeño",
        funciona: [
          "Botones de pago listos para integrar.",
          "APIs simples y documentadas.",
          "Conciliación automática de pagos."
        ],
        no_funciona: [
          "Integraciones rígidas y complejas.",
          "Falta de documentación clara.",
          "Soporte técnico lento."
        ]
      },
      {
        segmento: "Empresas grandes",
        funciona: [
          "Domiciliación bancaria (pagos recurrentes).",
          "Acuerdos de Nivel de Servicio (SLAs).",
          "Estabilidad y robustez."
        ],
        no_funciona: [
          "Productos en versión beta.",
          "Iteración rápida que comprometa estabilidad."
        ],
        nota: "No es el segmento inicial objetivo de la solución propuesta."
      }
    ]
  },

  espacio_libre: {
    titulo: "¿Dónde está el espacio libre?",
    descripcion: "El espacio libre se encuentra en la intersección de:",
    caracteristicas: [
      "Pagos inmediatos.",
      "Experiencia de usuario simple e intuitiva.",
      "Distribución social (WhatsApp / links).",
      "Enfoque centrado en personas naturales y PYMES.",
      "Sin necesidad de desarrollos internos complejos ni negociaciones bancarias extensas."
    ],
    cita_estrategica: "Hoy, las mejores experiencias de pago existen solo dentro de empresas que pudieron construirlas internamente. La propuesta nace para que esa experiencia deje de ser un privilegio y se convierta en un estándar."
  },

  cierre_estrategico: {
    titulo: "Cierre Estratégico",
    conclusion: "La ausencia de competencia directa fuerte no indica falta de mercado, sino falta de enfoque en el usuario final. La propuesta aprende de las limitaciones de las soluciones existentes y se posiciona como una capa de experiencia moderna sobre la infraestructura financiera actual."
  },

  referencias: [
    {
      autores: "Porter, M. E.",
      año: 2008,
      titulo: "The Five Competitive Forces That Shape Strategy",
      fuente: "Harvard Business Review"
    },
    {
      autores: "Christensen, C. M.",
      año: 1997,
      titulo: "The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail",
      fuente: "Harvard Business School Press"
    },
    {
      autores: "Kim, W. C., & Mauborgne, R.",
      año: 2005,
      titulo: "Blue Ocean Strategy: How to Create Uncontested Market Space and Make Competition Irrelevant",
      fuente: "Harvard Business School Press"
    }
  ]
};