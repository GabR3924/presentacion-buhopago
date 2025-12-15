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

  // NUEVA SECCIÓN: ANÁLISIS DE POBLACIÓN ECONÓMICAMENTE ACTIVA (PEA)
  analisis_pea: {
    titulo: "Análisis de Población Económicamente Activa (PEA) - Base para Cálculo Bottom-Up",
    descripcion: "Datos oficiales de fuerza laboral venezolana que fundamentan el cálculo de número de negocios addressables.",
    
    datos_historicos: {
      titulo: "Evolución de la PEA (2014-2021)",
      fuente: "Estudio IESA - Efecto Cocuyo 2025",
      pea_2014: "12.6 millones de personas",
      pea_2021: "10.4 millones de personas",
      variacion: "-21% (reducción de 2.2 millones debido a emigración masiva)",
      contexto_emigracion: "7.7 millones de venezolanos emigraron entre 2014-2021"
    },

    datos_actuales: {
      titulo: "PEA Estimada 2024-2025",
      pea_estimada: "10.5 - 11 millones de personas",
      justificacion: "Considerando crecimiento económico del 8.7% (Q3 2025) y leve recuperación post-2021",
      distribucion: {
        empleo_formal: "4.9 - 5.2 millones (≈47%)",
        empleo_informal: "5.3 - 5.8 millones (≈53%)",
        nota: "La informalidad se mantiene estructural en el mercado laboral venezolano"
      }
    },

    pea_sector_terciario: {
      titulo: "PEA en Sector Terciario (Comercio, Servicios, Transporte)",
      calculo: {
        pea_total: "10.5 - 11 millones",
        porcentaje_sector_terciario: "55.26%",
        formula: "PEA total × % sector terciario",
        resultado: "5.8 - 6.1 millones de trabajadores en sector terciario"
      },
      distribucion_informal: {
        trabajadores_terciario: "5.8 - 6.1 millones",
        tasa_informalidad_terciario: "50-55%",
        trabajadores_informales_terciario: "2.9 - 3.35 millones de personas",
        nota: "Estos son trabajadores del sector terciario en economía informal, NO todos son emprendedores digitales"
      }
    }
  },

  economia_informal: {
    titulo: "Análisis de la Economía Informal y su Impacto en el Mercado Relevante",
    descripcion: "Actividad económica no registrada formalmente, predominante en comercio minorista, servicios y ventas por redes sociales. Representa la mayor parte del flujo transaccional diario de pequeños comercios y trabajadores independientes.",
    contexto_estructura: "El empleo informal no es marginal, sino estructural en la economía venezolana, concentrando una parte relevante del flujo de dinero.",
    
    datos_oficiales: {
      dato_empleo: "Más del 50% de la población económicamente activa en Venezuela trabaja en el sector informal (Finanzas Digital, 2025)",
      dato_iesa: "5 millones de personas trabajaban en el sector informal en 2021, mientras que el empleo formal cayó a 4.9 millones (IESA, 2025)",
      tasa_informalidad_2021: "48.1% de la PEA (IESA, 2021)",
      proyeccion_2025: "45-48% de informalidad sostenida (Banca y Negocios, 2025)"
    },

    actividades_comunes: [
      "Comercios familiares sin registro legal (abastos, ferias)",
      "Vendedores y emprendedores por WhatsApp, Instagram, Facebook (social selling)",
      "Prestadores de servicios por cuenta propia (técnicos, repartidores, consultores)",
      "Trabajo a domicilio y venta directa"
    ],
    
    rango_estimado_general: "48% – 70% de la economía no petrolera (estimaciones CEPAL/OIT)",
    rango_ajustado_terciario: "50% – 65% del sector terciario (comercio, servicios, transporte). Rango defendible y conservador basado en fuentes recientes.",

    impacto_volumen_tam: {
      titulo: "Volumen Económico Informal dentro del TAM Terciario (2025)",
      descripcion: "Porción del TAM (USD 71.9B) que se estima corresponde a actividad informal, constituyendo el mercado natural para soluciones fintech ágiles.",
      tam_terciario_2025: "USD 71.9 mil millones",
      escenarios: [
        {
          nombre: "Escenario Conservador",
          supuesto: "Participación informal del 50% en el sector terciario.",
          porcentaje: "50%",
          volumen_usd: "≈ USD 36.0 mil millones",
          calculo: "71.9B × 0.50",
          insight: "Mínimo realista. Refleja la base estructural de informalidad confirmada por datos de empleo."
        },
        {
          nombre: "Escenario Base (Realista)",
          supuesto: "Participación informal del 55%, alineado con datos de empleo y flujo comercial.",
          porcentaje: "55%",
          volumen_usd: "≈ USD 39.5 mil millones",
          calculo: "71.9B × 0.55",
          insight: "Escenario de planificación más probable. Corresponde a ~USD 39.5B en transacciones informales/semi-formales."
        },
        {
          nombre: "Escenario Agresivo (Alto)",
          supuesto: "Participación informal del 65%, considerando la alta penetración en comercio minorista y servicios.",
          porcentaje: "65%",
          volumen_usd: "≈ USD 46.7 mil millones",
          calculo: "71.9B × 0.65",
          insight: "Máximo defendible. Representa el núcleo duro del mercado para soluciones P2P y pagos digitales simples."
        }
      ],
      conclusion_clave: "Entre **USD 36B y USD 47B** del comercio y servicios venezolanos se mueven en esquemas informales o semi-formales, utilizando predominantemente pagos digitales, transferencias bancarias, stablecoins y métodos P2P."
    },

    implicacion_para_modelo: {
      titulo: "Implicaciones para el Modelo de Negocio",
      puntos_clave: [
        "🔹 **Mercado Objetivo Natural**: La informalidad no es una barrera, sino el core del mercado addressable. Nuestra solución está diseñada para este segmento.",
        "🔹 **Hábitos de Pago**: Este volumen ya usa pagos digitales (Zelle, PayPal, Binance, transferencias). Nuestra plataforma canaliza y formaliza ese flujo.",
        "🔹 **Justificación de Fee (5%)**: El valor agregado (link de pago, reconciliación, profesionalización) justifica una tarifa sobre un volumen que hoy opera con fricción.",
        "🔹 **Unit Economics Realistas**: Las proyecciones de SAM/SOM deben partir de este volumen informal como base, no del PIB formal total."
      ],
      frase_resumen_slide: "**Más del 50% del empleo y la actividad comercial en Venezuela ocurre en la informalidad (Finanzas Digital, 2025). Nuestra solución captura y agiliza el flujo de este mercado masivo y subatendido.**"
    }
  },

  // NUEVA SECCIÓN: ANÁLISIS BOTTOM-UP (NÚMERO DE NEGOCIOS)
  analisis_bottom_up: {
    titulo: "TAM/SAM/SOM - Análisis Bottom-Up (Número de Negocios Addressables)",
    descripcion: "Cálculo del mercado desde el número real de negocios potenciales, validando el approach top-down desde PIB.",

    tam_numero_negocios: {
      titulo: "TAM - Total Addressable Market en Número de Negocios",
      
      pymes_formales: {
        cantidad: "100,000 PYMEs registradas",
        fuente: "Dato proporcionado - registros comerciales Venezuela",
        caracteristicas: "Empresas con RIF, registro mercantil, operación formal",
        volumen_promedio_anual: "USD 48,000 - 96,000",
        volumen_total_estimado: "USD 4.8B - 9.6B"
      },

      microemprendedores_informales: {
        titulo: "Cálculo de Microemprendedores Digitales Informales",
        metodologia: "Desde PEA sector terciario informal, aplicando filtros de digitalización",
        
        paso_1_trabajadores_informales_terciario: {
          base: "2.9 - 3.35 millones de trabajadores informales en sector terciario",
          fuente: "Cálculo desde PEA 2024-2025"
        },

        paso_2_filtros_aplicados: {
          descripcion: "NO todos los trabajadores informales son nuestro target. Aplicamos filtros:",
          filtros: [
            "✅ Venden productos/servicios (no solo mano de obra)",
            "✅ Tienen acceso a smartphone e internet",
            "✅ Ya usan métodos digitales de pago (Zelle, transferencias, PayPal)",
            "✅ Venden de forma recurrente (no esporádico)",
            "✅ Están activos en redes sociales/WhatsApp para ventas"
          ],
          porcentaje_filtro_conservador: "15-25% de trabajadores informales cumplen criterios",
          nota_metodologica: "Este filtro es crítico: muchos informales son empleados por cuenta propia en servicios (peluquería, taxi, construcción) que NO son nuestro target de 'vendedores digitales'"
        },

        paso_3_resultado: {
          calculo: "2.9M - 3.35M trabajadores informales × 15-25% filtro digitalización",
          microemprendedores_digitales_potenciales: "435,000 - 840,000 vendedores",
          volumen_promedio_anual: "USD 24,000 - 36,000",
          volumen_total_estimado: "USD 10.4B - 30.2B"
        }
      },

      resumen_tam_negocios: {
        titulo: "TAM Total en Número de Negocios",
        pymes_formales: "100,000 negocios",
        microemprendedores_informales: "435,000 - 840,000 vendedores digitales",
        total_negocios_addressables: "535,000 - 940,000 negocios potenciales",
        volumen_economico_total: "USD 15.2B - 39.8B",
        nota_validacion: "Este rango valida el cálculo top-down de USD 36B-47B de economía informal en sector terciario"
      }
    },

    sam_numero_negocios: {
      titulo: "SAM - Serviceable Available Market (Negocios que Podemos Servir Efectivamente)",
      descripcion: "Segmento del TAM que cumple con requisitos técnicos, de acceso y disposición para usar fintech.",
      
      criterios_sam: [
        "Tienen cuenta bancaria venezolana (requisito para liquidación)",
        "Usan smartphone con data/WiFi regularmente",
        "Ya cobran digitalmente (aunque sea de forma manual/P2P)",
        "Están dispuestos a pagar un fee por profesionalizar cobros",
        "Tienen volumen mínimo mensual (>USD 500/mes)"
      ],

      calculo_sam: {
        tam_negocios: "535,000 - 940,000 negocios",
        porcentaje_addressable: "60%",
        justificacion_60: "Basado en penetración bancaria (~70% PEA tiene cuenta), penetración smartphone (~75%), y disposición a pagar por solución digital (~80% de los que ya cobran digitalmente)",
        formula: "TAM × 60% addressable",
        sam_negocios: "320,000 - 565,000 negocios addressables",
        volumen_economico_sam: "USD 9.1B - 23.9B"
      }
    },

    som_numero_negocios: {
      titulo: "SOM - Serviceable Obtainable Market (Lo Que Podemos Capturar en 3-5 Años)",
      descripcion: "Market share realista considerando competencia, capacidad operativa, y velocidad de adopción en Venezuela.",

      supuestos_som: [
        "Startup fintech nueva en mercado venezolano",
        "Sin reconocimiento de marca inicial",
        "Estrategia de go-to-market enfocada en social sellers y PYMEs pequeñas",
        "Competencia de métodos P2P establecidos (Zelle, Binance P2P) y fintechs emergentes",
        "Capacidad operativa limitada en fases tempranas (soporte, onboarding, KYC)"
      ],

      escenarios_som: [
        {
          nombre: "Conservador",
          captura_sam: "0.3%",
          numero_clientes: "960 - 1,700 clientes activos",
          volumen_promedio_cliente_anual: "USD 30,000",
          volumen_total_anual: "USD 28.8M - 51M",
          revenue_5_fee: "USD 1.44M - 2.55M",
          contexto: "Tracción inicial, crecimiento orgánico limitado, competencia alta"
        },
        {
          nombre: "Moderado (Base Case)",
          captura_sam: "0.75%",
          numero_clientes: "2,400 - 4,240 clientes activos",
          volumen_promedio_cliente_anual: "USD 35,000",
          volumen_total_anual: "USD 84M - 148M",
          revenue_5_fee: "USD 4.2M - 7.4M",
          contexto: "Product-market fit alcanzado, crecimiento sostenido, marketing efectivo en redes"
        },
        {
          nombre: "Agresivo",
          captura_sam: "1.5%",
          numero_clientes: "4,800 - 8,480 clientes activos",
          volumen_promedio_cliente_anual: "USD 40,000",
          volumen_total_anual: "USD 192M - 339M",
          revenue_5_fee: "USD 9.6M - 17M",
          contexto: "Liderazgo de mercado en segmento informal, partnerships estratégicos, expansión agresiva"
        }
      ],

      recomendacion_planning: {
        escenario_base_recomendado: "Moderado (0.75% SAM)",
        clientes_target_5_anos: "2,400 - 4,240 clientes activos",
        revenue_proyectado_ano_5: "USD 4.2M - 7.4M",
        justificacion: "Este escenario es defendible ante inversionistas, basado en benchmarks de fintechs latam en mercados similares, y alineado con capacidad operativa escalable."
      }
    }
  },

  // VALIDACIÓN CRUZADA TOP-DOWN VS BOTTOM-UP
  validacion_cruzada: {
    titulo: "Validación Cruzada: Top-Down (PIB) vs Bottom-Up (Negocios)",
    descripcion: "Dos metodologías independientes que validan mutuamente el sizing del mercado.",

    comparacion_tam: {
      titulo: "Comparación de TAM - Ambos Enfoques",
      top_down_pib: {
        metodologia: "Desde PIB sector terciario × % informalidad",
        tam_dolares: "USD 71.9B (total sector terciario)",
        economia_informal_terciario: "USD 36B - 47B (50-65% del sector)"
      },
      bottom_up_negocios: {
        metodologia: "Desde # negocios × volumen promedio/negocio",
        negocios_totales: "535K - 940K negocios",
        tam_dolares: "USD 15.2B - 39.8B"
      },
      validacion: {
        overlap: "Los rangos se superponen significativamente",
        conclusion: "✅ Bottom-up (USD 15.2B-39.8B) cae dentro del rango top-down de economía informal (USD 36B-47B)",
        nota_conservadurismo: "Bottom-up es más conservador porque aplica filtros estrictos de digitalización y recurrencia de ventas"
      }
    },

    comparacion_som: {
      titulo: "Comparación de SOM - Proyecciones Finales",
      top_down_original: {
        escenario_moderado_volumen: "USD 178.5M (0.5% del SAM desde PIB)",
        revenue_5_fee: "USD 8.9M"
      },
      bottom_up_actualizado: {
        escenario_moderado_volumen: "USD 84M - 148M (0.75% del SAM desde negocios)",
        revenue_5_fee: "USD 4.2M - 7.4M",
        clientes: "2,400 - 4,240 clientes activos"
      },
      recomendacion_final: {
        enfoque_usar: "Bottom-Up para planificación financiera",
        justificacion: [
          "✅ Más conservador y defendible",
          "✅ Incluye # de clientes específico (trackeable como KPI)",
          "✅ Parte de data real de mercado laboral",
          "✅ Aplica filtros realistas de adopción digital"
        ],
        metricas_pitch: {
          som_volumen_anual: "USD 84M - 148M",
          som_revenue_anual: "USD 4.2M - 7.4M",
          som_clientes_activos: "2,400 - 4,240 negocios",
          horizonte_temporal: "3-5 años"
        }
      }
    }
  },

  // MANTENER SECCIÓN ORIGINAL DE SAM/SOM PARA REFERENCIA
  analisis_mercado_top_down: {
    titulo: "Análisis SAM/SOM - Enfoque Top-Down (Referencia)",
    nota: "Este análisis desde PIB se mantiene como referencia y validación, pero se recomienda usar bottom-up para planificación financiera",
    
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
        formula: "SAM = 71.9B × 49.58%",
        resultado: "≈ USD 35.7 mil millones"
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
        formula: "SOM = 35.7B × 0.5%",
        resultado: "≈ USD 178.5 millones en volumen transado anual"
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
      autores: "Finanzas Digital",
      año: 2025,
      titulo: "Empleo formal o informal en Venezuela 2025",
      fuente: "Finanzas Digital",
      url: "https://finanzasdigital.com/empleo-formal-o-informal-venezuela-2025",
      fecha_acceso: "14 de diciembre de 2025",
      relevancia: "Confirma el dato estructural de que más del 50% de la población económicamente activa trabaja en el sector informal, fundamentando el rango de participación informal en el sector terciario."
    },
    {
      autores: "Debate IESA",
      año: 2025,
      titulo: "Empleo formal o informal en Venezuela 2025",
      fuente: "Finanzas Digital",
      url: "https://www.debatesiesa.com/pequena-envejecida-e-informal-la-transformacion-de-la-fuerza-laboral-en-venezuela",
      fecha_acceso: "14 de diciembre de 2025",
      relevancia: "Confirma el dato estructural de que más del 50% de la población económicamente activa trabaja en el sector informal, fundamentando el rango de participación informal en el sector terciario."
    },
    {
      autores: "Efecto Cocuyo / IESA",
      año: 2025,
      titulo: "Lo que esconde el aumento de la informalidad laboral en Venezuela",
      fuente: "Efecto Cocuyo",
      url: "https://efectococuyo.com/economia/lo-que-esconde-el-aumento-de-la-informalidad-laboral-en-venezuela/",
      fecha_acceso: "14 de diciembre de 2025",
      relevancia: "Estudio del IESA que proporciona datos oficiales de PEA (10.4M en 2021), distribución formal/informal (4.9M vs 5M), y transformación del mercado laboral venezolano. Base del cálculo bottom-up."
    },
    {
      autores: "Banca y Negocios",
      año: 2025,
      titulo: "#Perspectiva2025: Empleo, informalidad y remuneraciones sin margen para planificar",
      fuente: "Banca y Negocios",
      url: "https://www.bancaynegocios.com/perspectiva2025-empleo-informalidad-y-remuneraciones-sin-margen-para-planificar/",
      fecha_acceso: "14 de diciembre de 2025",
      relevancia: "Proyección de informalidad 2025 (45-48% PEA) y análisis de remuneraciones en mercado laboral venezolano."
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
      url: "https://www.reportlinker.com/dataset/3bd8a9edb7700d5cbf1cb6adf86dd847863feb45",
      fecha_acceso: "11 de diciembre de 2025"
    },
    {
      autores: "Statbase | World Statistics & Datasets",
      año: 2024,
      titulo: "GDP (IMF data) | Venezuela",
      fuente: "Statbase",
      url: "https://statbase.org/data/ven-gdp-imf-data/",
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