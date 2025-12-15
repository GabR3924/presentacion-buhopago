export const analisisEscenariosLegales = {
  titulo: "ANÁLISIS DE ESCENARIOS LEGALES - BuhoPago",
  subtitulo: "Evaluación de viabilidad legal según Resolución 001.21 de SUDEBAN",
  fecha: "14 de diciembre de 2025",
  
  contexto: {
    situacion_actual: {
      titulo: "Situación Actual de BuhoPago",
      producto_tecnico: {
        estado: "✅ COMPLETO Y FUNCIONAL",
        capacidades_desarrolladas: [
          "Procesamiento de débito inmediato (transferencias bancarias)",
          "Sistema de domiciliación (débitos recurrentes automáticos)",
          "Validación de pago móvil",
          "Procesamiento de pagos con tarjetas de crédito/débito",
          "Cuenta concentradora para recibir fondos",
          "Sistema de liquidación automática (retiene fee, envía neto al comercio)",
          "Panel de administración para comercios",
          "API para integraciones"
        ]
      },
      
      bloqueante_legal: {
        estado: "🚨 BLOQUEANTE CRÍTICO",
        problema: "El modelo operativo actual (cuenta concentradora + procesamiento de pagos) REQUIERE obligatoriamente licencia de ITFB (Institución de Tecnología Financiera del Sector Bancario) según Resolución 001.21 de SUDEBAN.",
        consecuencias: [
          "No se puede operar sin la autorización previa de SUDEBAN (Art. 4 y 41)",
          "No se puede ni siquiera promocionar o publicitar el servicio (Art. 41)",
          "Operar sin licencia es ilegal y sancionable",
          "Cualquier operación actual sin licencia constituye infracción"
        ]
      }
    },
    
    pregunta_critica: "¿Qué podemos hacer AHORA sin licencia mientras la obtenemos, o cómo pivotamos el modelo para operar legalmente desde YA?"
  },

  analisis_resolucion_001_21: {
    titulo: "Análisis Detallado - Resolución 001.21",
    
    servicios_que_requieren_licencia: {
      titulo: "Servicios que REQUIEREN Autorización ITFB (Art. 16)",
      descripcion: "Cualquier prestación de estos servicios a instituciones bancarias requiere autorización previa.",
      
      lista_servicios: [
        {
          servicio: "Plataformas de conexión de FINTECH y de instituciones bancarias (Art. 16.4)",
          definicion_sudeban: "Plataformas tecnológicas que facilitan la conexión entre fintechs y bancos para procesamiento de pagos",
          aplica_a_buhopago: "✅ SÍ",
          detalle: "BuhoPago conecta con bancos para procesar débitos y transferencias",
          implicacion: "REQUIERE LICENCIA"
        },
        {
          servicio: "Pasarela de Pago (Art. 3.6)",
          definicion_sudeban: "Aplicación tecnológica que permite el procesamiento de transacciones de pago entre un comercio y el sistema financiero",
          aplica_a_buhopago: "✅ SÍ",
          detalle: "BuhoPago procesa pagos entre comercios y bancos",
          implicacion: "REQUIERE LICENCIA"
        },
        {
          servicio: "Billetera Electrónica (Art. 3.7)",
          definicion_sudeban: "Aplicación que almacena información de medios de pago y permite realizar transacciones",
          aplica_a_buhopago: "⚠️ PARCIAL",
          detalle: "Si guardamos datos de tarjetas o cuentas bancarias de usuarios finales",
          implicacion: "Si se implementa: REQUIERE LICENCIA"
        },
        {
          servicio: "Botón de Pago (Art. 3.10)",
          definicion_sudeban: "Solución tecnológica que permite iniciar un pago desde un sitio web o app",
          aplica_a_buhopago: "✅ SÍ",
          detalle: "Los links de pago y checkout de BuhoPago califican como 'botón de pago'",
          implicacion: "REQUIERE LICENCIA"
        }
      ],
      
      conclusion_critica: "🚨 BuhoPago en su modelo actual (cuenta concentradora + procesamiento) cae DIRECTAMENTE bajo la definición de Pasarela de Pago y Plataforma de Conexión Fintech-Bancos. REQUIERE LICENCIA ITFB de forma OBLIGATORIA."
    },
    
    cuenta_concentradora_analisis: {
      titulo: "Cuenta Concentradora: El Problema Principal",
      descripcion: "El modelo donde BuhoPago recibe los fondos en una cuenta propia, retiene su fee, y luego liquida al comercio.",
      
      problema_legal: {
        clasificacion: "Este modelo convierte a BuhoPago en un INTERMEDIARIO FINANCIERO",
        articulos_aplicables: [
          "Art. 3.6 - Pasarela de Pago: 'procesa transacciones de pago'",
          "Art. 16.4 - Plataforma de conexión que facilita servicios financieros",
          "Art. 3.25 - Podría caer como PSP (Proveedor no Bancario de Servicios de Pago)"
        ],
        
        por_que_requiere_licencia: [
          "Estás RECIBIENDO fondos de terceros (clientes finales) en tu cuenta",
          "Estás RETENIENDO una porción (tu fee del 5%)",
          "Estás REDISTRIBUYENDO fondos a los comercios",
          "Estás actuando como INTERMEDIARIO en la cadena de pagos",
          "Esto es literalmente lo que hace una pasarela de pagos o un PSP"
        ]
      },
      
      riesgos_operacionales: {
        titulo: "Riesgos Adicionales del Modelo de Cuenta Concentradora",
        riesgos: [
          {
            riesgo: "Riesgo LC/FT (Lavado de Capitales / Financiamiento al Terrorismo)",
            descripcion: "Al manejar fondos de terceros, estás obligado a cumplir con políticas de LC/FT (Res. 010-25)",
            implicacion: "Necesitas Oficial de Cumplimiento, SIAR, políticas, capacitación, etc."
          },
          {
            riesgo: "Riesgo Operacional",
            descripcion: "¿Qué pasa si un comercio reclama que no recibió su dinero? ¿Quién responde?",
            implicacion: "Sin licencia, no tienes marco legal para protegerte ni a tus usuarios"
          },
          {
            riesgo: "Riesgo Bancario",
            descripcion: "Los bancos venezolanos NO pueden trabajar con fintechs sin licencia ITFB",
            implicacion: "Tu cuenta concentradora puede ser cerrada en cualquier momento si el banco se entera de su uso"
          },
          {
            riesgo: "Riesgo de Clausura/Sanción",
            descripcion: "SUDEBAN puede clausurar operaciones y sancionar por operar sin licencia",
            implicacion: "Multas, cierre de cuentas, prohibición de operar, daño reputacional"
          }
        ]
      }
    }
  },

  escenarios: {
    titulo: "Escenarios de Operación Legal para BuhoPago",
    
    escenario_a: {
      nombre: "ESCENARIO A: Operar SIN Licencia ITFB",
      viabilidad: "⚠️ POSIBLE PERO MUY LIMITADO",
      color: "yellow",
      descripcion: "Modelos alternativos que NO requieren autorización SUDEBAN por no actuar como intermediario financiero.",
      
      modelos: [
        {
          nombre: "Modelo 1: SaaS de Gestión de Pagos",
          concepto: "BuhoPago como software de gestión que genera links/códigos, pero los pagos van DIRECTAMENTE del cliente final al comercio, sin pasar por BuhoPago.",
          
          como_funciona: [
            "Comercio se registra y vincula SU cuenta bancaria",
            "BuhoPago genera link con datos de cuenta DEL COMERCIO",
            "Cliente final paga DIRECTAMENTE a cuenta del comercio",
            "BuhoPago recibe notificación y cobra SUSCRIPCIÓN MENSUAL"
          ],
          
          servicios_si: [
            "✅ Generación de links de pago personalizados",
            "✅ QR codes para cobros presenciales",
            "✅ Dashboard para trackear ventas",
            "✅ Recordatorios automáticos de pago",
            "✅ Catálogo de productos",
            "✅ Notificaciones por WhatsApp/Email"
          ],
          
          servicios_no: [
            "❌ Procesamiento de pagos",
            "❌ Cuenta concentradora",
            "❌ Liquidación automática",
            "❌ Retención de fee del flujo",
            "❌ Débito inmediato orquestado",
            "❌ Domiciliación automática"
          ],
          
          pricing: "Suscripción: USD 15-50/mes según plan",
          
          ventajas: [
            "No requiere licencia ITFB",
            "Puedes operar INMEDIATAMENTE",
            "Menor complejidad regulatoria",
            "Menor riesgo operacional"
          ],
          
          desventajas: [
            "ARPU mucho menor (suscripción vs %)",
            "Propuesta de valor menos atractiva",
            "No puedes ofrecer débito inmediato",
            "Difícil justificar fee"
          ],
          
          viabilidad: "⚠️ BAJA - Poco diferenciador"
        },
        {
          nombre: "Modelo 2: Programa de Afiliación con Bancos/PSPs",
          concepto: "BuhoPago como canal de adquisición y frontend, pero procesamiento lo hace un tercero licenciado.",
          
          como_funciona: [
            "Partnership con banco o PSP licenciado",
            "BuhoPago provee interfaz (white label)",
            "Procesador maneja cuenta concentradora",
            "BuhoPago cobra revenue share"
          ],
          
          pricing: "Revenue share: 1-2% del fee total",
          
          ventajas: [
            "No requiere licencia",
            "Puedes ofrecer TODO el producto",
            "Partner maneja compliance",
            "Time-to-market rápido"
          ],
          
          desventajas: [
            "Dependencia total del partner",
            "ARPU reducido (solo fracción)",
            "Menos control del producto",
            "Difícil encontrar partners"
          ],
          
          viabilidad: "⚠️ MEDIA - Si consigues partner correcto"
        }
      ],
      
      conclusion: "Operar sin licencia sacrifica la propuesta de valor core. Los modelos alternativos tienen ARPU mucho menor."
    },
    
    escenario_b: {
      nombre: "ESCENARIO B: Operar CON Licencia ITFB",
      viabilidad: "✅ VIABILIDAD PLENA - PERO COSTOSO Y LENTO",
      color: "green",
      descripcion: "Obtener autorización formal de SUDEBAN como Institución de Tecnología Financiera del Sector Bancario.",
      
      servicios_completos: [
        "✅ TODO: débito inmediato, domiciliación, pago móvil, tarjetas",
        "✅ Cuenta concentradora legal",
        "✅ Procesamiento completo",
        "✅ Fee 5% transaccional",
        "✅ Contratos directos con bancos"
      ],
      
      requisitos: {
        estructurales: [
          {
            requisito: "Sociedad Anónima (S.A.)",
            detalle: "Con acciones nominativas"
          },
          {
            requisito: "Mínimo 5 accionistas",
            detalle: "Ninguno inhabilitado"
          },
          {
            requisito: "Capital Social Mínimo",
            estimacion: "USD 50,000 - 250,000"
          },
          {
            requisito: "Domicilio en Venezuela",
            detalle: "Centro de datos local"
          }
        ],
        
        documentacion: [
          "RIF y cédulas de accionistas",
          "Reporte SIORI (últimos 5 años)",
          "Balance personal y certificados",
          "Plan de Negocios detallado",
          "Manuales LC/FT",
          "Descripción técnica completa"
        ]
      },
      
      costos: {
        items: [
          { item: "Capital social", rango: "50,000 - 250,000" },
          { item: "Honorarios legales", rango: "10,000 - 25,000" },
          { item: "Auditoría externa", rango: "3,000 - 8,000" },
          { item: "Consultoría técnica", rango: "5,000 - 15,000" },
          { item: "Oficial Cumplimiento (18m)", rango: "12,000 - 30,000" },
          { item: "Infraestructura física", rango: "5,000 - 15,000" },
          { item: "Tasas SUDEBAN", rango: "2,000 - 5,000" }
        ],
        total: "USD 87,000 - 348,000",
        tiempo: "18-24 meses"
      },
      
      proceso: [
        {
          fase: "Pre-solicitud",
          tiempo: "0-3 meses",
          costo: "25,000 - 50,000",
          tareas: ["Constituir S.A.", "Capitalizar empresa", "Preparar documentación"]
        },
        {
          fase: "Solicitud Formal",
          tiempo: "3-4 meses",
          costo: "2,000 - 5,000",
          tareas: ["Presentar ante SUDEBAN", "Espera admisión"]
        },
        {
          fase: "Evaluación SUDEBAN",
          tiempo: "5-12 meses",
          costo: "10,000 - 30,000",
          tareas: ["Revisión", "Inspecciones", "Correcciones"]
        },
        {
          fase: "Resolución",
          tiempo: "13-18 meses",
          costo: "5,000",
          tareas: ["Opinión OSFIN", "Publicación"]
        },
        {
          fase: "Inicio Operaciones",
          tiempo: "18-24 meses",
          costo: "20,000 - 50,000",
          tareas: ["Contratos bancos", "Infraestructura"]
        }
      ],
      
      costos_recurrentes: {
        items: [
          { concepto: "Auditoría anual", costo: "5,000 - 12,000" },
          { concepto: "Oficial Cumplimiento", costo: "12,000 - 36,000" },
          { concepto: "Reportes SUDEBAN", costo: "3,000 - 8,000" },
          { concepto: "Consultoría legal", costo: "6,000 - 15,000" },
          { concepto: "Infraestructura", costo: "10,000 - 25,000" },
          { concepto: "Seguros", costo: "5,000 - 15,000" }
        ],
        total_anual: "USD 41,000 - 111,000/año"
      },
      
      ventajas: [
        "Producto completo funcional",
        "Fee transaccional óptimo (5%)",
        "Control total del stack",
        "Diferenciación competitiva"
      ],
      
      desventajas: [
        "Costo inicial MUY alto",
        "Tiempo MUY largo (18-24m)",
        "Costos fijos altos",
        "Riesgo de rechazo"
      ]
    },
    
    escenario_c: {
      nombre: "ESCENARIO C: Modelo Híbrido / Transición",
      viabilidad: "✅ RECOMENDADO - Mejor balance",
      color: "blue",
      descripcion: "Combinar operación limitada AHORA (sin licencia) con preparación para licencia en paralelo.",
      
      estrategia: {
        via_1: {
          nombre: "Vía 1: Lanzamiento Inmediato SaaS (0-6 meses)",
          objetivo: "Generar tracción, validar mercado, algo de revenue",
          
          pasos: [
            {
              nombre: "Lanzar versión 'light' SaaS",
              descripcion: "Links apuntan a cuenta del comercio",
              pricing: "USD 10-30/mes",
              target: "Validar demanda"
            },
            {
              nombre: "Buscar partnership PSP/Banco",
              descripcion: "Negociar white-label",
              timeline: "3-6 meses"
            },
            {
              nombre: "Construir casos de uso",
              descripcion: "Success stories, testimonios",
              objetivo: "Fortalecer aplicación ITFB"
            }
          ],
          
          revenue_esperado: "USD 1,000 - 5,000/mes"
        },
        
        via_2: {
          nombre: "Vía 2: Preparación Licencia ITFB (0-18 meses)",
          objetivo: "Mientras generas tracción, preparas TODO para licencia",
          
          pasos: [
            { paso: "Constituir S.A.", tiempo: "0-2 meses", costo: "2,000 - 5,000" },
            { paso: "Buscar inversionistas", tiempo: "0-6 meses", necesidad: "USD 200K-500K" },
            { paso: "Preparar documentación", tiempo: "3-9 meses", costo: "15,000 - 30,000" },
            { paso: "Solicitud ITFB", tiempo: "9-12 meses", costo: "5,000" },
            { paso: "Evaluación", tiempo: "12-24 meses", costo: "20,000 - 50,000" }
          ]
        },
        
        transicion: {
          titulo: "Transición al Modelo Completo (18-24 meses)",
          descripcion: "Con licencia aprobada, migras clientes del SaaS al modelo completo",
          
          plan: [
            "Ofrecer upgrade a procesamiento completo",
            "Migrar partnership a modelo propio",
            "Lanzar servicios premium",
            "Escalar agresivamente"
          ]
        }
      },
      
      ventajas: [
        "Genera revenue AHORA",
        "Validas product-market fit",
        "Construyes tracción para inversión",
        "Reduces riesgo",
        "Timeline realista"
      ],
      
      desventajas: [
        "Revenue inicial bajo",
        "Complejidad de dos modelos",
        "Riesgo de confusión",
        "Necesitas funding igual"
      ]
    }
  },

  analisis_riesgos: {
    titulo: "Análisis de Riesgos Legales por Escenario",
    
    sin_licencia: {
      titulo: "Riesgos de Operar con Cuenta Concentradora SIN Licencia",
      nivel: "🔴 CRÍTICO - NO RECOMENDADO",
      
      riesgos: [
        {
          riesgo: "Sanción SUDEBAN",
          probabilidad: "ALTA",
          impacto: "CRÍTICO",
          consecuencias: ["Multas", "Cese operaciones", "Clausura cuentas", "Prohibición futura"]
        },
        {
          riesgo: "Cierre de cuenta bancaria",
          probabilidad: "ALTA",
          impacto: "CRÍTICO",
          consecuencias: ["Bancos deben cerrar cuenta", "Fondos retenidos", "Reputación destruida"]
        },
        {
          riesgo: "Responsabilidad LC/FT",
          probabilidad: "MEDIA",
          impacto: "CRÍTICO",
          consecuencias: ["Responsable de lavado", "Sin defensa", "Multas múltiples"]
        }
      ]
    },
    
    modelo_saas: {
      titulo: "Riesgos del Modelo SaaS",
      nivel: "🟡 BAJO-MEDIO - Manejables",
      
      riesgos: [
        {
          riesgo: "Percepción como pasarela encubierta",
          probabilidad: "BAJA",
          mitigacion: "Documentar claramente que NO procesas pagos"
        },
        {
          riesgo: "Baja adopción / revenue insuficiente",
          probabilidad: "MEDIA-ALTA",
          mitigacion: "Propuesta fuerte, pricing competitivo"
        }
      ]
    }
  },

  recomendacion_final: {
    titulo: "RECOMENDACIÓN ESTRATÉGICA FINAL",
    escenario_recomendado: "ESCENARIO C: MODELO HÍBRIDO",
    
    justificacion: [
      "✅ Empiezas YA con modelo legal (SaaS)",
      "✅ Generas tracción para inversión",
      "✅ Preparas licencia en paralelo (18-24m)",
      "✅ Reduces riesgo (validas antes de invertir)",
      "✅ Timeline realista y factible"
    ],
    
    plan_accion: {
      titulo: "Plan de Acción Inmediato (90 días)",
      
      acciones: [
        {
          nombre: "1. PIVOTE: Re-diseñar como SaaS",
          timeline: "Semana 1-4",
          tareas: [
            "Links apuntan a cuenta del comercio",
            "Eliminar cuenta concentradora del MVP",
            "Actualizar onboarding",
            "Implementar pricing suscripción"
          ]
        },
        {
          nombre: "2. LANZAMIENTO SOFT",
          timeline: "Semana 4-8",
          tareas: [
            "Beta con 10-20 comercios",
            "Iterar según feedback",
            "Documentar casos de uso"
          ]
        },
        {
          nombre: "3. BÚSQUEDA PARTNERSHIPS",
          timeline: "Semana 1-12",
          tareas: [
            "Identificar bancos/PSPs",
            "Pitch white-label",
            "Negociar términos"
          ]
        },
        {
          nombre: "4. PREPARACIÓN ITFB",
          timeline: "Semana 1-12",
          tareas: [
            "Contratar abogado",
            "Constituir S.A.",
            "Preparar business plan",
            "Iniciar fundraising"
          ]
        }
      ]
    },
    
    timeline_proyectado: [
      { periodo: "Mes 0-3", objetivo: "50-100 clientes SaaS, USD 500-2K/mes", status: "Preparación inicial" },
      { periodo: "Mes 3-6", objetivo: "100-200 clientes, USD 1.5-5K/mes, Partnership", status: "Documentación" },
      { periodo: "Mes 6-12", objetivo: "200-500 clientes, USD 3-10K/mes", status: "Solicitud ITFB" },
      { periodo: "Mes 12-18", objetivo: "500-1K clientes, USD 7-25K/mes", status: "Evaluación SUDEBAN" },
      { periodo: "Mes 18-24", objetivo: "Licencia aprobada, transición", status: "✅ APROBADA" },
      { periodo: "Mes 24+", objetivo: "Producto completo, escalamiento", status: "Operando ITFB" }
    ]
  },

  notas_finales: [
    "🚨 NO operar con cuenta concentradora sin licencia",
    "⚠️ Modelo SaaS es TEMPORAL, no tiene mismo ARPU",
    "✅ Modelo híbrido es el más realista",
    "💰 Necesitas funding USD 200K-500K para licencia",
    "⏱️ Timeline realista: 18-24 meses",
    "📄 Documenta TODO para fortalecer solicitud"
  ],

  referencias: [
    {
      autores: "SUDEBAN",
      año: 2021,
      titulo: "Resolución Nº 001.21 - Normas relativas a las Instituciones de Tecnología Financiera del Sector Bancario",
      fuente: "Gaceta Oficial N° 42.162 del 6 de julio de 2021"
    },
    {
      autores: "SUDEBAN",
      año: 2025,
      titulo: "Resolución Nº 010-25 - Normas relativas a la Gestión y Control de los Riesgos de Legitimación de Capitales, Financiamiento al Terrorismo y Financiamiento de la Proliferación de Armas de Destrucción Masiva",
      fuente: "Gaceta Oficial"
    }
  ]
};