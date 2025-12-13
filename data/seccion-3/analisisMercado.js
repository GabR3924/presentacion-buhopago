export const analisisMercadoData = {
  analisis_tam_pib: {
    titulo: "Análisis del TAM y Composición del PIB Venezolano (2024–2025)",
    pib_total: {
      anio: "2024",
      valor_usd: "119.808 mil millones",
      fuente: "IMF + World Bank compilado en StatBase",
      nota: "Sirve como base macroeconómica para estimar el tamaño total del mercado."
    },
    proyeccion_2025: {
      anio: "2025",
      tasa_crecimiento: "+8.7%",
      periodo_referencia: "Q3 2025 (interanual)",
      fuente: "TradingEconomics (cita a BCV)",
      pib_proyectado_usd: "130.235 mil millones",
      calculo: "119.808 × 1.087 = 130.235"
    },
    composicion_por_sector: {
      titulo: "Composición del PIB por Sector (Referencia UNdata / ReportLinker)",
      fuente: "UNdata / ReportLinker",
      descripcion: "División estandarizada del PIB por actividad económica.",
      sectores: [
        {
          nombre: "Minería, Manufactura y Utilidades",
          participacion_pib: "30.64%"
        },
        {
          nombre: "Servicios (finanzas, profesionales, educación, salud, estatal, etc.)",
          participacion_pib: "27.48%"
        },
        {
          nombre: "Comercio, Retail, Restaurantes y Hoteles",
          participacion_pib: "22.1%"
        },
        {
          nombre: "Construcción",
          participacion_pib: "8.52%"
        },
        {
          nombre: "Transporte, Almacenamiento y Comunicaciones",
          participacion_pib: "5.68%"
        },
        {
          nombre: "Agricultura, Caza, Silvicultura y Pesca",
          participacion_pib: "5.58%"
        }
      ]
    },
    mercado_terciario_relevante: {
      titulo: "Mercado Terciario (Mercado Relevante para Pagos/Fintech)",
      descripcion: "Sector que incluye actividades donde operan pagos, fintech, software de servicios, retail, logística, restaurantes y hoteles.",
      componentes: [
        {
          sector: "Servicios",
          participacion: "27.48%"
        },
        {
          sector: "Comercio, Retail, Restaurantes y Hoteles",
          participacion: "22.1%"
        },
        {
          sector: "Transporte, Almacenamiento y Comunicaciones",
          participacion: "5.68%"
        }
      ],
      total_sector_terciario: "55.26% del PIB"
    },
    tam_dolares: {
      titulo: "TAM en Dólares del Sector Terciario",
      base_2024: {
        pib_2024: "USD 119.808 mil millones",
        porcentaje_terciario: "55.26%",
        tam_2024: "~ USD 66.2 mil millones",
        calculo: "119.808 × 0.5526 = 66.2"
      },
      base_2025: {
        pib_2025_proyectado: "USD 130.235 mil millones",
        porcentaje_terciario: "55.26%",
        tam_2025_proyectado: "~ USD 71.9 mil millones",
        calculo: "130.235 × 0.5526 = 71.9"
      },
      resultado_final: "🎯 TAM (mercado terciario Venezuela 2025) ≈ USD 71.9B"
    }
  },
  analisis_mercado: {
    sam: {
      titulo: "SAM (Serviceable Available Market)",
      descripcion: "Parte del TAM que realmente podría usar la solución, filtrada por categoría funcional.",
      sectores_encajan: [
        {
          sector: "Comercio minorista",
          participacion_pib: "22.1%",
          razon: "Principal segmento para pagos digitales"
        },
        {
          sector: "Servicios",
          participacion_pib: "27.48%",
          razon: "Incluye finanzas, profesionales, educación, salud"
        },
        {
          sector: "Transporte (solo privado)",
          participacion_pib: "Fracción del 5.68%",
          razon: "Tomamos una fracción del sector transporte"
        }
      ],
      calculo_sam: {
        sectores_considerados: "Comercio minorista (22.1%) + Servicios (27.48%)",
        total_porcentaje_pib: "49.58%",
        tam_base_2025: "USD 71.9 mil millones",
        formula: "SAM = 71.9M × 49.58%",
        resultado: "≈ 35.7 mil millones USD"
      }
    },
    som: {
      titulo: "SOM (Serviceable Obtainable Market)",
      descripcion: "Mercado que realmente se puede capturar en los próximos 3-5 años, considerando país, adopción y competencia.",
      contexto: "Para una fintech nueva en Venezuela con enfoque en comercios pequeños e informales",
      rango_realista: "0.3% – 1% del SAM",
      calculo_base: {
        porcentaje_asumido: "0.5%",
        sam_base: "USD 35.7 mil millones",
        formula: "SOM = 35.7M × 0.5%",
        resultado: "≈ 178.5 millones USD en volumen transado anual"
      },
      escenarios: [
        {
          nombre: "Ultra conservador",
          captura_sam: "0.1%",
          volumen_anual: "USD 35.7 millones",
          revenue_asumido: "USD 1.7 millones",
          nota: "Asumiendo fee del 5% sobre el volumen"
        },
        {
          nombre: "Moderado",
          captura_sam: "0.5%",
          volumen_anual: "USD 178.5 millones",
          revenue_asumido: "USD 8.9 millones",
          nota: "Asumiendo fee del 5% sobre el volumen"
        },
        {
          nombre: "Agresivo",
          captura_sam: "1%",
          volumen_anual: "USD 357 millones",
          revenue_asumido: "USD 17.8 millones",
          nota: "Asumiendo fee del 5% sobre el volumen"
        }
      ],
      supuesto_fee: "5% sobre el volumen transaccional"
    }
  },
  referencias: [
    {
      autores: "International Monetary Fund (IMF)",
      año: 2024,
      titulo: "World Economic Outlook Database",
      fuente: "IMF",
      url: "https://www.imf.org/external/datamapper/NGDP_RPCH@WEO/OEMDC/ADVEC/WEOWORLD",
      fecha_acceso: "11 de diciembre de 2025"
    },
    {
      autores: "World Bank",
      año: 2024,
      titulo: "Venezuela Economic Indicators",
      fuente: "World Bank Open Data",
      url: "https://data.worldbank.org/country/venezuela",
      fecha_acceso: "11 de diciembre de 2025"
    },
    {
      autores: "Report linker",
      año: 2025,
      titulo: "Venezuela GDP Composition by Sector",
      fuente: "reportlinker.com",
      url: "https://www.reportlinker.com/dataset/3bd8a9edb7700d5cbf1cb6adf86dd847863feb45#:~:text=In%202023%2C%20Venezuela%27s%20GDP%20composition,and%20Hotels%20account%20for%2022.1%25.",
      fecha_acceso: "11 de diciembre de 2025"
    },
    {
      autores: "Statbase | World Statistics & Datasets",
      año: 2024,
      titulo: "GDP (IMF data) | Venezuela",
      fuente: "GDP (IMF data) | Venezuela",
      url: "https://statbase.org/data/ven-gdp-imf-data/?utm_source=chatgpt.com",
      fecha_acceso: "11 de diciembre de 2025"
    },
    {
      autores: "Ministerio del Poder Popular de Comercio Nacional",
      año: 2024,
      titulo: "National Accounts Main Aggregates Database",
      fuente: "United Nations Statistics Division",
      url: "https://mincomercionacional.gob.ve/?p=24165",
      fecha_acceso: "11 de diciembre de 2025"
    }
  ]
};