export const estrategiaMercadoData = {
  titulo: "ESTRATEGIA DE MERCADO - Modelo Híbrido Viable",
  descripcion: "Plan de ataque basado en datos reales de adopción digital y comportamiento de pagos en Venezuela, alineado con el marco regulatorio.",

  resumen_mercado: {
    oportunidad_total: "Mercado digital de 17.6M usuarios (61.6% penetración)",
    comportamiento_clave: "98% transacciones ya son digitales, 41% comercios usan social selling",
    ventana_oportunidad: "99% PYMEs quieren digitalizarse pero no saben cómo",
    insight_critico: "El venezolano ya está digitalizado, pero las herramientas locales no cumplen"
  },

  segmentacion_hibrida: {
    fase_1_validador: {
      nombre: "Segmento Alpha: Social Sellers Digitales",
      tamano: "~7.2M personas (41% de 17.6M usuarios)",
      descripcion: "Personas que ya venden por WhatsApp/Instagram/Facebook. Su dolor: el caos de confirmar pagos manualmente.",
      
      perfil_tipico: [
        "Vende productos físicos (moda, tecnología, hogar)",
        "Recibe pagos por Pago Móvil (34% adopción)",
        "Usa smartphone (>73% penetración)",
        "Edad 18-44 años (población más conectada)",
        "Activo en TikTok/Instagram (86% usuarios en redes)"
      ],
      
      comportamiento_pago: {
        metodo_principal: "Pago Móvil (34%)",
        metodo_secundario: "Transferencias bancarias (41%)",
        dolor_actual: "Validar comprobantes uno por uno, perder ventas por desconfianza"
      },
      
      propuesta_valor: "Deja de perder ventas por desconfianza. Valida pagos en segundos, automáticamente.",
      
      canales_adquisicion: [
        {
          canal: "TikTok Ads",
          razon: "16.6M usuarios, 83.8% adultos, contenido educativo viral",
          mensaje: "¿Cansado de revisar comprobantes? Automatízalo."
        },
        {
          canal: "Instagram Reels",
          razon: "9.8M usuarios, alta engagement visual",
          mensaje: "Vendes por IG? Esta herramienta es para ti."
        },
        {
          canal: "Grupos WhatsApp de Emprendedores",
          razon: "Penetración casi total en el segmento",
          mensaje: "Herramienta exclusiva para vendedores digitales"
        }
      ],
      
      objetivo_6m: "50,000 usuarios activos, CAC < $2, viralidad orgánica > 30%"
    },

    fase_2_orquestador: {
      nombre: "Segmento Beta: PYMEs Digitalizantes",
      tamano: "99% de PYMEs (~500,000 empresas)",
      filtro_realista: "PYMEs que YA venden online (20% del total = ~100,000)",
      
      perfil_tipico: [
        "Factura > $1,000/mes",
        "Tiene presencia en redes pero quiere tienda propia",
        "Usa efectivo digital (stablecoins 47% pequeños pagos)",
        "Sufre con conciliación manual",
        "Quiere crecer pero no tiene herramientas"
      ],
      
      comportamiento_pago: {
        metodo_actual: "Mezcla: Pago Móvil + stablecoins + transferencias",
        dolor_critico: "No puede escalar por falta de automatización",
        brecha: "Quiere parecerse a Mercado Libre pero no sabe cómo"
      },
      
      propuesta_valor: "Convierte tu negocio social en una tienda profesional. Cobra automáticamente, concilia en un click.",
      
      canales_adquisicion: [
        {
          canal: "LinkedIn Ads + Outreach",
          razon: "6.4M usuarios profesionales, targeting B2B preciso",
          mensaje: "Digitaliza tu negocio como los grandes, sin licencia bancaria."
        },
        {
          canal: "Upgrade desde Fase 1",
          razon: "Conversión natural de micro a PYME",
          mensaje: "Ya usas el validador? Ahora escala con el orquestador."
        },
        {
          canal: "Alianzas con Contadores",
          razon: "Ellos ven el dolor de conciliación diariamente",
          mensaje: "Solución turnkey para clientes que quieren orden"
        }
      ],
      
      objetivo_18m: "5,000 empresas activas, ARPU > $50/mes, retención > 80%"
    }
  },

  analisis_competencia: {
    categoria_1: {
      nombre: "Validadores Manuales (Competencia Indirecta)",
      ejemplos: ["WhatsApp manual", "Excel", "Notas de voz"],
      ventaja_nuestra: "Automatización 10x más rápida, cero errores",
      debilidad_competencia: "No escalan, propenso a fraudes"
    },
    
    categoria_2: {
      nombre: "Plataformas Internacionales",
      ejemplos: ["Mercado Libre", "PayPal (limitado)", "Binance P2P (478k visitas/mes)"],
      ventaja_nuestra: "Enfocado 100% en realidad venezolana, Pago Móvil nativo",
      debilidad_competencia: "No entienden el social selling local"
    },
    
    categoria_3: {
      nombre: "Bancos Tradicionales",
      ejemplos: ["BanescoPago", "Pago Móvil Banco de Venezuela"],
      ventaja_nuestra: "Experiencia UX móvil-first, integración cross-banco",
      debilidad_competencia: "Apps lentas, no pensadas para emprendedores"
    },
    
    posicionamiento_unico: "La única plataforma que entiende al venezolano digital: del social selling al negocio profesional."
  },

  estrategia_precios: {
    fase_1_validador: {
      modelo: "Freemium con viralidad incorporada",
      planes: [
        {
          nombre: "Gratis",
          limite: "50 validaciones/mes",
          caracteristica_viral: "Marca de agua 'Validado con [tu marca]' en comprobantes",
          objetivo: "Adquisición masiva"
        },
        {
          nombre: "Pro",
          precio: "$4.99/mes",
          limite: "Validaciones ilimitadas",
          caracteristicas: ["Sin marca de agua", "API básica", "Alertas WhatsApp"],
          objetivo: "Monetización base (3-5% conversión esperada)"
        },
        {
          nombre: "Equipo",
          precio: "$19.99/mes",
          caracteristicas: ["Múltiples usuarios", "Dashboard empresarial", "Soporte prioritario"],
          objetivo: "Captar microempresas que escalan"
        }
      ],
      logica: "El free alimenta el growth loop, el Pro monetiza, el Team prepara para Fase 2"
    },
    // EN analisis_marco_regulatorio.clasificacion_por_actividad.fases
// {
//   id: "fase1",
//   nombre: "FASE 1: ORQUESTADOR TECNOLÓGICO B2B (MVP)",
//   servicio: "Plataforma que valida pagos recibidos en cuenta concentradora bancaria y genera instrucciones automatizadas para su distribución.",
//   caracteristicas_clave: [
//     "NO es titular de cuentas bancarias",
//     "NO custodia fondos (el banco sí)",
//     "Solo valida y genera instrucciones de distribución",
//     "Accede a datos via SFTP/API del banco (solo lectura/validación)",
//     "El banco ejecuta materialmente las transferencias"
//   ],
//   publico_objetivo: "Bancos e instituciones financieras que requieren automatizar validación y distribución de pagos masivos.",
//   modelo_negocio: "Licencia SaaS o fee por transacción validada.",
//   encaje_legal: "PROVEEDOR DE TECNOLOGÍA PARA INSTITUCIONES BANCARIAS",
//   requisitos_legales: [
//     "Contrato de servicios tecnológicos con el banco",
//     "Acuerdo de nivel de servicio (SLA)",
//     "Cumplimiento de estándares de seguridad y disponibilidad",
//     "Protección de datos personales (acceso limitado a información)"
//   ],
//   nivel_riesgo: "BAJO-MODERADO (depende del contrato con el banco)",
//   objetivo: "Validar tecnología y modelo operativo con un banco socio, generando ingresos y data para Fase 2."
// }
    
    fase_2_orquestador: {
      modelo: "SaaS + % transaccional (solo post-autorización)",
      planes: [
        {
          nombre: "Starter",
          precio: "$29/mes + 1.5% por transacción",
          limites: "Hasta $5,000/mes en ventas",
          caracteristicas: ["Checkout básico", "Conciliación automática", "Soporte email"]
        },
        {
          nombre: "Business",
          precio: "$99/mes + 1.2% por transacción",
          limites: "Hasta $20,000/mes en ventas",
          caracteristicas: ["API completa", "Pagos recurrentes", "Soporte WhatsApp priority"]
        },
        {
          nombre: "Enterprise",
          precio: "Custom",
          caracteristicas: ["Multi-banco", "White-label", "SLA 99.9%", "Integración contable"],
          objetivo: "Grandes retailers locales"
        }
      ],
      logica: "Competir con el 3.2% efectivo que hoy pagan, ofreciendo 10x mejor experiencia"
    }
  },

  growth_loop: {
    paso_1_adquisicion: {
      metodo: "Contenido educativo en TikTok/Instagram",
      contenido: ["Cómo validar pagos rápido", "Errores que cuestan ventas", "Casos de éxito"],
      metricas: ["CAC: $1-3", "CTR: >5%", "Conversión free: 15%"]
    },
    
    paso_2_activacion: {
      metodo: "Onboarding WhatsApp-first",
      flujo: "1. Registro con celular → 2. Valida primer pago en <2min → 3. Invita a 3 amigos",
      metricas: ["Time-to-value: <5min", "Activation rate: >40%"]
    },
    
    paso_3_retencion: {
      metodo: "Notificaciones útiles + educación continua",
      tacticas: [
        "Recordatorio semanal: 'Tus ventas esta semana'",
        "Tips mensual: 'Cómo aumentar conversiones'",
        "Alertas en tiempo real de pagos"
      ],
      metricas: ["Retención D30: >50%", "Retención D90: >25%"]
    },
    
    paso_4_referencia: {
      metodo: "Programa de referidos con doble beneficio",
      mecanismo: "Ambos ganan 1 mes gratis por referido que se activa",
      metricas: ["K-factor: >0.3", "% orgánico: >30%"]
    },
    
    paso_5_upgrade: {
      metodo: "Detección automática de readiness para Fase 2",
      triggers: [
        ">100 validaciones/mes",
        "Usa API básica",
        "Pide funciones empresariales"
      ],
      oferta: "Upgrade asistido a Orquestador (cuando esté disponible legalmente)",
      metricas: ["Conversión a beta: 5-10% de power users"]
    }
  },

  riesgos_mercado: {
    riesgo_1: {
      nombre: "Adopción más lenta de lo esperado",
      probabilidad: "Media",
      impacto: "Alto",
      mitigacion: "Foco ultra-nicho primero (ej: vendedores de ropa en Instagram), luego expandir"
    },
    
    riesgo_2: {
      nombre: "Cripto como competidor directo",
      probabilidad: "Alta (47% pagos pequeños en stablecoins)",
      impacto: "Medio",
      mitigacion: "Integrar USDT/USDC como método de validación (no custodia), competir en UX no en método"
    },
    
    riesgo_3: {
      nombre: "Copia por jugadores grandes",
      probabilidad: "Baja (inicialmente)",
      impacto: "Alto",
      mitigacion: "Construir comunidad fiel primero, ventaja de data local, velocidad de iteración"
    },
    
    riesgo_4: {
      nombre: "Desconfianza en pagos digitales (según EY)",
      probabilidad: "Alta",
      impacto: "Medio",
      mitigacion: "Transparencia total, social proof masivo, garantía de seguridad"
    }
  },

  metricas_exito: {
    fase_1_mvp_0_6m: {
      objetivo: "Producto encaja en mercado",
      resultados_clave: [
        "10,000 usuarios registrados",
        "1,000 usuarios activos semanales",
        "CAC < $3",
        "NPS > 40",
        "20% conversión free-to-paid"
      ]
    },
    
    fase_1_escala_6_12m: {
      objetivo: "Dominar social selling",
      resultados_clave: [
        "100,000 usuarios registrados",
        "10,000 paying users",
        "MRR > $50,000",
        "Virality k-factor > 0.5",
        "Presentar expediente autorización ITFB"
      ]
    },
    
    fase_2_lanzamiento_12_18m: {
      condicion: "SOLO si obtenemos autorización SUDEBAN",
      objetivo: "Captar PYMEs profesionales",
      resultados_clave: [
        "1,000 empresas en beta",
        "ARPU > $50",
        "MRR > $100,000",
        "Retención anual > 80%",
        "Alianza con 1-2 bancos"
      ]
    }
  },

  inversion_estimada: {
    fase_1_validador: {
      desarrollo: "$20,000-30,000 (MVP completo)",
      marketing_6m: "$10,000 (CAC $3 * 3,333 usuarios)",
      equipo_6m: "$15,000 (1 dev, 1 growth)",
      total_fase_1: "$45,000-55,000"
    },
    
    fase_2_orquestador: {
      desarrollo: "$50,000-80,000 (plataforma B2B robusta)",
      legal_autorizacion: "$10,000-20,000 (asesoría, trámites)",
      expansion_12m: "$50,000 (ventas B2B, soporte)",
      total_fase_2: "$110,000-150,000",
      nota: "Financiable con revenue de Fase 1 + ronda seed"
    },
    
    roi_proyectado: {
      año_1: "Breakeven con 10,000 usuarios Pro ($50k MRR)",
      año_2: "10x ROI si captamos 5,000 empresas B2B ($250k MRR)",
      valuation_potencial: "$5-10M con 100,000 usuarios + 10,000 empresas"
    }
  },

  referencias: [
    {
      autores: "DataReportal",
      año: 2025,
      titulo: "Digital 2025: Venezuela",
      fuente: "DataReportal Global Digital Insights",
      url: "https://datareportal.com/reports/digital-2025-venezuela",
      fecha_acceso: "12 de diciembre de 2025"
    },
    {
      autores: "EY",
      año: 2024,
      titulo: "Global FinTech Adoption Index",
      fuente: "Ernst & Young Global Limited"
    },
    {
      autores: "Ellis, S.",
      año: 2017,
      titulo: "Hacking Growth: How Today's Fastest-Growing Companies Drive Breakout Success",
      fuente: "Currency"
    }
  ]
};