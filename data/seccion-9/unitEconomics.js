export const resumenEjecutivoData = {
  titulo: "📊UNIT ECONOMICS (Economía por Unidad)",

  unit_economics: {
    titulo: "UNIT ECONOMICS (Economía por Unidad)",
    descripcion:
      "La rentabilidad varía según el comportamiento del microcomerciante digital. Se modela por arquetipos reales del mercado venezolano.",

    arquetipos: [
      {
        nombre: "Alta Frecuencia / Ticket Bajo",
        descripcion: "Reventa diaria, delivery, comercio informal intensivo.",
        transacciones_mes: { rango: "600 - 900" },
        ticket_promedio_usd: { rango: "2.5 - 4" },
        volumen_mensual_usd: { rango: "2,000 - 3,000" },
        arpu_neto_mensual_usd: { rango: "30 - 75" }
      },
      {
        nombre: "Frecuencia Media / Ticket Medio (Core)",
        descripcion: "Social sellers típicos en WhatsApp, Instagram y Facebook.",
        transacciones_mes: { rango: "300 - 600" },
        ticket_promedio_usd: { rango: "10 - 15" },
        volumen_mensual_usd: { rango: "4,000 - 8,000" },
        arpu_neto_mensual_usd: { rango: "70 - 160" }
      },
      {
        nombre: "Baja Frecuencia / Ticket Alto",
        descripcion: "Servicios, productos de mayor valor, ventas menos frecuentes.",
        transacciones_mes: { rango: "50 - 120" },
        ticket_promedio_usd: { rango: "60 - 90" },
        volumen_mensual_usd: { rango: "5,000 - 8,000" },
        arpu_neto_mensual_usd: { rango: "80 - 220" }
      }
    ],

    metricas_globales: [
      {
        nombre: "Comisión Bruta al Cliente",
        valor: { rango: "3% - 5%" },
        descripcion: "Tarifa variable según plan y volumen."
      },
      {
        nombre: "Costo Bancario por Transacción",
        valor: 1.8,
        unidad: "porcentaje",
        descripcion: "Costo fijo asociado a infraestructura bancaria."
      },
      {
        nombre: "Margen Neto por Transacción",
        valor: { rango: "1.2% - 3.2%" },
        descripcion: "Margen real luego de costos bancarios."
      },
      {
        nombre: "ARPU Neto Mensual (Rango Realista)",
        valor: { rango: "30 - 160" },
        moneda: "USD",
        descripcion:
          "Ingreso neto promedio por microcomerciante digital según patrón de uso."
      }
    ],

    supuestos_proyeccion: {
      margen_operativo_final: {
        valor: { rango: "60% - 70%" },
        descripcion:
          "Margen operativo luego de soporte, infraestructura y costos internos."
      },
      tasa_cancelacion_mensual_churn: {
        valor: { rango: "6% - 10%" },
        descripcion:
          "Churn esperado para microcomerciantes digitales en etapa temprana."
      }
    },

    ltv_lifetime_value: {
      nombre: "LTV (Valor de Vida del Cliente)",
      valor: { rango: "250 - 2,300" },
      moneda: "USD",
      descripcion:
        "El LTV varía significativamente según el arquetipo del cliente y su patrón de uso."
    }
  },

  cac: {
    titulo: "CAC (Costo de Adquisición de Cliente)",
    descripcion:
      "Costo estimado para adquirir un microcomerciante digital activo.",
    presupuesto_marketing_mensual: {
      rango: "1,500 - 2,500",
      moneda: "USD"
    },
    cac_estimado: {
      valor: { rango: "35 - 60" },
      moneda: "USD",
      descripcion:
        "Basado en campañas dirigidas a social sellers en Meta y TikTok."
    }
  },

  relacion_ltv_cac_viabilidad: {
    titulo: "RELACIÓN LTV:CAC & VIABILIDAD",
    ratio_ltv_cac: {
      valor: { rango: "5:1 - 35:1" },
      interpretacion:
        "Incluso en escenarios conservadores, el modelo mantiene una relación saludable."
    },
    periodo_recuperacion_cac: {
      valor: { rango: "0.5 - 2.5" },
      unidad: "meses",
      descripcion:
        "El CAC se recupera rápidamente gracias a recurrencia y volumen."
    }
  },

  checklist_estado_actual: {
    titulo: "✅ ¿QUÉ TENEMOS CLARO?",
    items: [
      {
        estado: "completado",
        item: "Modelo basado en comportamiento real",
        detalle:
          "Unit economics segmentado por arquetipos reales del comercio informal digital."
      },
      {
        estado: "completado",
        item: "Mercado masivo validado",
        detalle:
          "Enfoque en microcomerciantes digitales que ya venden y cobran online."
      },
      {
        estado: "completado",
        item: "Modelo escalable",
        detalle:
          "Rentabilidad basada en volumen, retención y upsell progresivo."
      }
    ]
  },

  proximos_pasos_criticos: {
    titulo: "⚠️ PRÓXIMOS PASOS",
    pasos: [
      {
        nombre: "1. Validar pricing por arquetipo",
        accion:
          "Testear planes específicos para cada patrón de uso durante 30-60 días."
      },
      {
        nombre: "2. Construir modelo financiero dinámico",
        accion:
          "Simular crecimiento por cohortes y no por promedio único."
      },
      {
        nombre: "3. Optimizar activación",
        accion:
          "Reducir fricción en el primer pago y reforzar hábito de uso."
      }
    ]
  }
};
