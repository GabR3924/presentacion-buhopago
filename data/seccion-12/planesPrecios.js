export const planesPrecios = {
  titulo: "Planes de Pricing BuhoPago - B2C vs B2B con Arquetipos Transaccionales",
  descripcion: "Estrategia de pricing diferenciada por tipo de entidad legal y patrón de uso, optimizada para capturar valor según comportamiento transaccional real del mercado venezolano.",
  
  fecha_actualizacion: "14 de diciembre de 2025",
  
  // FILOSOFÍA DE PRICING
  filosofia_pricing: {
    titulo: "Filosofía y Principios de Pricing",
    principios: [
      {
        nombre: "Fee único del 5% como base",
        justificacion: "Simplifica comunicación, evita confusión en mercado informal, y mantiene márgenes saludables (5% fee - 1.8% costo bancario = 3.2% margen neto)"
      },
      {
        nombre: "Diferenciación por VALOR, no por fee",
        justificacion: "B2C y B2B pagan el mismo 5%, pero reciben funcionalidades diferentes según sus necesidades operativas"
      },
      {
        nombre: "Sin cuota mensual en fase inicial",
        justificacion: "Elimina barrera de entrada en mercado informal venezolano. Modelo 100% basado en uso (transaction-based revenue)"
      },
      {
        nombre: "Upsell progresivo por volumen",
        justificacion: "A futuro: clientes de alto volumen pueden negociar fees custom (ej: 3.5-4%) manteniendo rentabilidad por escala"
      }
    ],
    
    decision_estrategica_clave: "En Venezuela, la SIMPLICIDAD del fee único (5%) es más valiosa que la optimización de revenue por tier. El mercado informal prioriza transparencia sobre sofisticación de pricing.",
    
    roadmap_futuro: {
      fase_1_actual: "Fee único 5% para todos, diferenciación por funcionalidades B2C/B2B",
      fase_2_6_12_meses: "Introducir tier 'Pro' con fee 4% para clientes >USD 10K/mes + cuota mensual USD 20",
      fase_3_12_24_meses: "Custom pricing para enterprise (>USD 50K/mes) con fees negociados 3-3.5%"
    }
  },

  // SEGMENTACIÓN B2C vs B2B
  segmentacion_principal: {
    titulo: "Segmentación B2C vs B2B",
    
    b2c_personas_naturales: {
      titulo: "B2C - Personas Naturales (Vendedores Informales y Emprendedores)",
      descripcion: "Individuos sin RIF ni registro mercantil que venden productos/servicios de forma recurrente, principalmente por redes sociales.",
      
      caracteristicas: [
        "Sin RIF ni registro mercantil",
        "Venden por WhatsApp, Instagram, Facebook, TikTok",
        "Cobran en efectivo, Zelle P2P, transferencias directas",
        "No requieren facturación formal",
        "Alta sensibilidad a fricción en onboarding",
        "Buscan profesionalizar cobros sin formalizar negocio"
      ],
      
      tamanio_mercado: {
        estimacion_negocios: "435,000 - 840,000 microemprendedores digitales",
        fuente: "Análisis bottom-up desde PEA sector terciario informal",
        porcentaje_tam: "≈81-89% del TAM en número de negocios"
      },
      
      pain_points: [
        "Dar datos bancarios en cada venta (inseguro, tedioso)",
        "Confirmar pagos manualmente (revisión de transferencias)",
        "Pérdida de ventas por fricción en checkout",
        "Falta de registro/historial de ventas",
        "Dificultad para escalar operación sin sistema"
      ],
      
      propuesta_valor: "Link de pago profesional en 2 minutos, sin papeleos, cobra y recibe notificación automática. Tu tienda digital sin necesidad de formalizar."
    },
    
    b2b_pymes_formales: {
      titulo: "B2B - PYMEs Formales (Empresas con RIF)",
      descripcion: "Pequeñas y medianas empresas con registro mercantil, RIF, y operaciones formales que requieren facturación y contabilidad.",
      
      caracteristicas: [
        "Tienen RIF y registro mercantil",
        "Requieren facturación electrónica",
        "Necesitan reportes contables y reconciliación",
        "Mayor volumen transaccional",
        "Procesos de KYC/compliance más rigurosos",
        "Posibles integraciones con sistemas existentes (WooCommerce, inventarios)"
      ],
      
      tamanio_mercado: {
        estimacion_negocios: "100,000 PYMEs registradas",
        fuente: "Dato registros comerciales Venezuela",
        porcentaje_tam: "≈11-19% del TAM en número de negocios"
      },
      
      pain_points: [
        "Costos elevados de POS tradicionales",
        "Reconciliación manual de pagos dispersos",
        "Falta de integración con sistemas contables",
        "Reportes fiscales complejos",
        "Dificultad para aceptar pagos online en web/tienda física"
      ],
      
      propuesta_valor: "Plataforma de pagos completa con facturación automática, reportes contables, y posibilidad de integrar con tu sistema. Todo en bolívares y dólares."
    }
  },

  // PLANES DE PRICING DETALLADOS
  planes_pricing: {
    titulo: "Planes de Pricing por Segmento",
    
    // ==================== B2C PLANS ====================
    b2c_planes: {
      titulo: "Planes B2C - Personas Naturales",
      nota_importante: "Todos los planes B2C tienen el MISMO fee (5%), la diferencia es ASPIRACIONAL: mostramos al usuario en qué arquetipo encaja según su patrón de uso, pero técnicamente todos pagan igual.",
      
      plan_starter_b2c: {
        nombre: "STARTER",
        subtitulo: "Para vendedores que están comenzando o tienen ventas esporádicas",
        target_arquetipo: "Alta Frecuencia / Ticket Bajo",
        
        perfil_cliente: {
          descripcion: "Revendedores de productos de bajo valor, delivery, comercio minorista intensivo (ej: ventas de ropa, accesorios, snacks, productos importados)",
          ejemplos: [
            "Revendedor de ropa por Instagram (vende 20-30 prendas/día a USD 3-5)",
            "Delivery de comida casera (15-20 pedidos/día a USD 2-4)",
            "Vendedor de productos de limpieza en ferias"
          ]
        },
        
        metricas_esperadas: {
          transacciones_mes: "600 - 900 transacciones",
          ticket_promedio: "USD 2.5 - 4",
          volumen_mensual: "USD 2,000 - 3,000",
          arpu_bruto_mensual: "USD 100 - 150 (5% fee)",
          costo_bancario: "USD 36 - 54 (1.8%)",
          arpu_neto_mensual: "USD 64 - 96"
        },
        
        pricing: {
          fee_transaccional: "5% por transacción exitosa",
          cuota_mensual: "USD 0 (sin costo fijo)",
          fee_setup: "USD 0",
          comision_retiro: "USD 0 (liquidación automática a cuenta)",
          minimo_por_transaccion: "USD 0 (sin mínimos)"
        },
        
        funcionalidades: [
          "✅ Link de pago personalizado (buhopago.com/tu-nombre)",
          "✅ Notificaciones automáticas por WhatsApp/Email al cobrar",
          "✅ Panel básico con historial de ventas",
          "✅ Liquidación diaria a tu cuenta bancaria",
          "✅ Acepta bolívares (conversión automática desde USD)",
          "✅ QR code para cobros presenciales",
          "✅ Soporte por WhatsApp 9am-6pm",
          "❌ Facturación electrónica",
          "❌ Reportes contables",
          "❌ API/Integraciones",
          "❌ Multi-usuario"
        ],
        
        limitaciones: {
          usuarios: "1 usuario (solo el dueño)",
          cuentas_bancarias: "1 cuenta de liquidación",
          personalizacion_checkout: "Básica (logo + colores)",
          retencion_datos: "3 meses de historial transaccional"
        },
        
        ltv_estimado: {
          rango: "USD 250 - 800",
          vida_util_promedio: "4-8 meses",
          razon_churn: "Alta rotación en microemprendedores de ticket bajo, muchos abandonan o escalan a volumen mayor"
        }
      },
      
      plan_growth_b2c: {
        nombre: "GROWTH",
        subtitulo: "Para social sellers establecidos con ventas recurrentes",
        target_arquetipo: "Frecuencia Media / Ticket Medio (CORE)",
        destacado: true,
        badge: "⭐ MÁS POPULAR",
        
        perfil_cliente: {
          descripcion: "Social sellers típicos que venden por WhatsApp, Instagram y Facebook con base de clientes recurrente (ej: maquillaje, ropa, tecnología, servicios digitales)",
          ejemplos: [
            "Vendedora de maquillaje por Instagram (50 ventas/semana a USD 12-18)",
            "Tienda de accesorios tech en Facebook (productos de USD 10-25)",
            "Community manager freelance (3-5 clientes a USD 150-250/mes)"
          ]
        },
        
        metricas_esperadas: {
          transacciones_mes: "300 - 600 transacciones",
          ticket_promedio: "USD 10 - 15",
          volumen_mensual: "USD 4,000 - 8,000",
          arpu_bruto_mensual: "USD 200 - 400 (5% fee)",
          costo_bancario: "USD 72 - 144 (1.8%)",
          arpu_neto_mensual: "USD 128 - 256"
        },
        
        pricing: {
          fee_transaccional: "5% por transacción exitosa",
          cuota_mensual: "USD 0 (sin costo fijo)",
          fee_setup: "USD 0",
          comision_retiro: "USD 0 (liquidación automática)",
          minimo_por_transaccion: "USD 0"
        },
        
        funcionalidades: [
          "✅ Todo lo de STARTER, más:",
          "✅ Checkout personalizable (branding completo)",
          "✅ Catálogo de productos (hasta 100 productos)",
          "✅ Link de pago por producto individual",
          "✅ Notificaciones avanzadas (SMS + WhatsApp + Email)",
          "✅ Panel analítico con métricas de conversión",
          "✅ Historial ilimitado de transacciones",
          "✅ Exportar data a Excel/CSV",
          "✅ Recordatorios de pago automático",
          "✅ Soporte prioritario por WhatsApp",
          "❌ Facturación electrónica",
          "❌ API/Integraciones empresariales",
          "❌ Multi-usuario con roles"
        ],
        
        limitaciones: {
          usuarios: "1 usuario",
          cuentas_bancarias: "2 cuentas de liquidación (para diversificar)",
          productos_catalogo: "Hasta 100 productos",
          personalizacion_checkout: "Completa (logo, colores, términos)",
          retencion_datos: "Ilimitada"
        },
        
        ltv_estimado: {
          rango: "USD 1,200 - 2,300",
          vida_util_promedio: "10-18 meses",
          razon_retencion: "Base de clientes recurrente, modelo de negocio sostenible, menor churn"
        }
      },
      
      plan_pro_b2c: {
        nombre: "PRO",
        subtitulo: "Para emprendedores de alto ticket o servicios especializados",
        target_arquetipo: "Baja Frecuencia / Ticket Alto",
        
        perfil_cliente: {
          descripcion: "Vendedores de productos/servicios de mayor valor con menor frecuencia (ej: equipos tech, cursos, servicios profesionales, productos importados premium)",
          ejemplos: [
            "Vendedor de laptops/iPhones (5-10 ventas/mes a USD 600-900)",
            "Instructor de cursos online (20-30 alumnos/mes a USD 80-120)",
            "Diseñador gráfico freelance (8-12 proyectos/mes a USD 200-400)"
          ]
        },
        
        metricas_esperadas: {
          transacciones_mes: "50 - 120 transacciones",
          ticket_promedio: "USD 60 - 90",
          volumen_mensual: "USD 5,000 - 8,000",
          arpu_bruto_mensual: "USD 250 - 400 (5% fee)",
          costo_bancario: "USD 90 - 144 (1.8%)",
          arpu_neto_mensual: "USD 160 - 256"
        },
        
        pricing: {
          fee_transaccional: "5% por transacción exitosa",
          cuota_mensual: "USD 0 (sin costo fijo)",
          fee_setup: "USD 0",
          comision_retiro: "USD 0",
          minimo_por_transaccion: "USD 0"
        },
        
        funcionalidades: [
          "✅ Todo lo de GROWTH, más:",
          "✅ Pagos recurrentes/suscripciones (para cursos, membresías)",
          "✅ Pagos en cuotas (financiamiento interno 2-3 pagos)",
          "✅ Facturas pro-forma personalizadas (sin valor fiscal)",
          "✅ WhatsApp Business API integration (respuestas automáticas)",
          "✅ Recordatorios de pago inteligentes",
          "✅ Custom domain (tutienda.com redirect)",
          "✅ Analíticas avanzadas (retención, LTV, conversión)",
          "✅ Soporte prioritario 7am-9pm",
          "❌ Facturación fiscal electrónica",
          "❌ Multi-usuario empresarial"
        ],
        
        limitaciones: {
          usuarios: "2 usuarios (dueño + asistente)",
          cuentas_bancarias: "3 cuentas de liquidación",
          productos_catalogo: "Ilimitado",
          personalizacion_checkout: "Premium (custom CSS)",
          retencion_datos: "Ilimitada + backup mensual"
        },
        
        ltv_estimado: {
          rango: "USD 1,800 - 2,800",
          vida_util_promedio: "12-20 meses",
          razon_retencion: "Alto valor transaccional, clientes profesionales, menor sensibilidad a precio"
        }
      }
    },
    
    // ==================== B2B PLANS ====================
    b2b_planes: {
      titulo: "Planes B2B - PYMEs Formales (con RIF)",
      nota_importante: "Planes B2B tienen fee del 5% + funcionalidades empresariales obligatorias. La diferenciación es por tamaño de operación y necesidades de compliance.",
      
      plan_business_b2b: {
        nombre: "BUSINESS",
        subtitulo: "Para PYMEs pequeñas con necesidades básicas de facturación",
        target_arquetipo: "PYMEs con facturación <USD 10K/mes",
        
        perfil_cliente: {
          descripcion: "Pequeños negocios formales con RIF que necesitan facturación electrónica y reportes básicos (ej: bodegas, restaurantes, tiendas físicas pequeñas)",
          ejemplos: [
            "Bodega familiar con RIF (ventas diarias de abarrotes)",
            "Restaurante pequeño (20-30 comandas/día)",
            "Tienda de ropa física con e-commerce básico"
          ]
        },
        
        metricas_esperadas: {
          transacciones_mes: "200 - 500 transacciones",
          ticket_promedio: "USD 15 - 30",
          volumen_mensual: "USD 4,000 - 10,000",
          arpu_bruto_mensual: "USD 200 - 500 (5% fee)",
          costo_bancario: "USD 72 - 180 (1.8%)",
          arpu_neto_mensual: "USD 128 - 320"
        },
        
        pricing: {
          fee_transaccional: "5% por transacción exitosa",
          cuota_mensual: "USD 0 (fase inicial, puede cambiar a USD 15-25 en fase 2)",
          fee_setup: "USD 0",
          fee_onboarding: "KYC más riguroso (validación RIF, documentos legales)",
          comision_retiro: "USD 0"
        },
        
        funcionalidades_exclusivas_b2b: [
          "✅ Facturación electrónica SENIAT (en desarrollo - integración futura)",
          "✅ Reportes contables exportables (formato para contador)",
          "✅ Conciliación bancaria automática",
          "✅ Multi-usuario con roles (cajero, admin, contador)",
          "✅ POS virtual para tienda física (tablet/móvil)",
          "✅ Integración WooCommerce/Shopify (próximamente)",
          "✅ Liquidación programada (diaria, semanal, quincenal)",
          "✅ Soporte dedicado con account manager"
        ],
        
        funcionalidades_completas: [
          "✅ Todo lo de plan GROWTH B2C, más:",
          "✅ Facturación electrónica (próximamente)",
          "✅ 3 usuarios con roles diferenciados",
          "✅ Reportes fiscales mensuales",
          "✅ Conciliación bancaria",
          "✅ API básica para integraciones",
          "✅ Webhook notifications",
          "✅ Dominio personalizado incluido",
          "✅ Soporte Business 8am-8pm + email"
        ],
        
        limitaciones: {
          usuarios: "3 usuarios con roles",
          cuentas_bancarias: "3 cuentas corporativas",
          volumen_maximo_recomendado: "USD 15K/mes (luego upgrade a Enterprise)",
          personalizacion: "Branding completo + términos personalizados"
        },
        
        ltv_estimado: {
          rango: "USD 2,500 - 5,000",
          vida_util_promedio: "18-36 meses",
          razon_retencion: "Negocios formales con operación sostenida, baja rotación, alto switching cost"
        }
      },
      
      plan_enterprise_b2b: {
        nombre: "ENTERPRISE",
        subtitulo: "Para PYMEs grandes con alto volumen y necesidades avanzadas",
        target_arquetipo: "PYMEs con facturación >USD 15K/mes",
        badge: "🏢 PREMIUM",
        
        perfil_cliente: {
          descripcion: "Empresas establecidas con operaciones complejas, múltiples sucursales, o alto volumen transaccional (ej: cadenas retail, marketplaces, distribuidoras)",
          ejemplos: [
            "Cadena de farmacias con 3-5 sucursales",
            "Marketplace local con vendedores terceros",
            "Distribuidora mayorista B2B"
          ]
        },
        
        metricas_esperadas: {
          transacciones_mes: "800 - 2,000+ transacciones",
          ticket_promedio: "USD 30 - 80",
          volumen_mensual: "USD 20,000 - 100,000+",
          arpu_bruto_mensual: "USD 1,000 - 5,000 (5% fee base, negociable)",
          costo_bancario: "USD 360 - 1,800 (1.8%)",
          arpu_neto_mensual: "USD 640 - 3,200"
        },
        
        pricing: {
          fee_transaccional: "5% base (negociable a 3.5-4% según volumen)",
          cuota_mensual: "USD 0 en fase inicial, o USD 150-300 con fee reducido",
          modelo_custom: "Pricing personalizado para clientes >USD 50K/mes",
          fee_setup: "USD 0",
          fee_onboarding: "KYC enterprise + due diligence completo"
        },
        
        funcionalidades_exclusivas_enterprise: [
          "✅ API completa con documentación (webhooks, REST API)",
          "✅ Cuenta de soporte dedicada (account manager + tech support)",
          "✅ SLA garantizado (99.5% uptime)",
          "✅ Integraciones custom (ERP, CRM, sistemas propietarios)",
          "✅ Multi-sucursal con consolidación de reportes",
          "✅ White-label parcial (checkout con tu branding 100%)",
          "✅ Facturación masiva automatizada",
          "✅ Split payments (para marketplaces con vendedores terceros)",
          "✅ Conciliación en tiempo real",
          "✅ Reportes personalizados bajo demanda"
        ],
        
        funcionalidades_completas: [
          "✅ Todo lo de BUSINESS, más:",
          "✅ Usuarios ilimitados con permisos granulares",
          "✅ API REST completa",
          "✅ Webhooks en tiempo real",
          "✅ Multi-sucursal/multi-tienda",
          "✅ Split payments (marketplaces)",
          "✅ Facturación masiva",
          "✅ White-label checkout",
          "✅ Account manager dedicado",
          "✅ SLA 99.5% uptime",
          "✅ Soporte 24/7 prioritario"
        ],
        
        limitaciones: {
          usuarios: "Ilimitados",
          cuentas_bancarias: "Ilimitadas",
          volumen: "Sin límite",
          personalizacion: "Full white-label disponible"
        },
        
        ltv_estimado: {
          rango: "USD 15,000 - 60,000+",
          vida_util_promedio: "36-60+ meses",
          razon_retencion: "Alto switching cost, integración profunda en operaciones, contratos anuales"
        }
      }
    }
  },

  // COMPARATIVA RÁPIDA
  comparativa_planes: {
    titulo: "Comparativa Rápida de Planes",
    
    tabla_comparativa: [
      {
        caracteristica: "Fee por transacción",
        starter_b2c: "5%",
        growth_b2c: "5%",
        pro_b2c: "5%",
        business_b2b: "5%",
        enterprise_b2b: "5% (negociable)"
      },
      {
        caracteristica: "Cuota mensual",
        starter_b2c: "USD 0",
        growth_b2c: "USD 0",
        pro_b2c: "USD 0",
        business_b2b: "USD 0",
        enterprise_b2b: "Custom"
      },
      {
        caracteristica: "Link de pago",
        starter_b2c: "✅",
        growth_b2c: "✅",
        pro_b2c: "✅",
        business_b2b: "✅",
        enterprise_b2b: "✅"
      },
      {
        caracteristica: "Facturación electrónica",
        starter_b2c: "❌",
        growth_b2c: "❌",
        pro_b2c: "❌",
        business_b2b: "✅",
        enterprise_b2b: "✅"
      },
      {
        caracteristica: "Multi-usuario",
        starter_b2c: "❌ (1)",
        growth_b2c: "❌ (1)",
        pro_b2c: "✅ (2)",
        business_b2b: "✅ (3)",
        enterprise_b2b: "✅ (∞)"
      },
      {
        caracteristica: "API/Integraciones",
        starter_b2c: "❌",
        growth_b2c: "❌",
        pro_b2c: "❌",
        business_b2b: "✅ Básica",
        enterprise_b2b: "✅ Completa"
      },
      {
        caracteristica: "Soporte",
        starter_b2c: "WhatsApp",
        growth_b2c: "WhatsApp Priority",
        pro_b2c: "WhatsApp + Email",
        business_b2b: "Dedicado",
        enterprise_b2b: "24/7 + Manager"
      },
      {
        caracteristica: "Target volumen/mes",
        starter_b2c: "USD 2-3K",
        growth_b2c: "USD 4-8K",
        pro_b2c: "USD 5-8K",
        business_b2b: "USD 4-15K",
        enterprise_b2b: "USD 20K+"
      }
    ]
  },

  // ANÁLISIS ESTRATÉGICO
  analisis_estrategico: {
    titulo: "Análisis Estratégico de Pricing",
    
    distribucion_esperada_clientes: {
      titulo: "Distribución Esperada de Clientes por Plan (Proyección 3-5 años)",
      total_clientes_som: "2,400 - 4,240 clientes activos",
      
      distribucion: [
        {
          plan: "STARTER (B2C)",
          porcentaje_clientes: "25-30%",
          numero_clientes: "600 - 1,270",
          arpu_mensual: "USD 64 - 96",
          revenue_mensual_plan: "USD 38K - 122K",
          revenue_anual_plan: "USD 460K - 1.46M"
        },
        {
          plan: "GROWTH (B2C)",
          porcentaje_clientes: "40-45%",
          numero_clientes: "960 - 1,910",
          arpu_mensual: "USD 128 - 256",
          revenue_mensual_plan: "USD 123K - 489K",
          revenue_anual_plan: "USD 1.47M - 5.87M",
          nota: "⭐ Plan core que genera la mayor parte del revenue"
        },
        {
          plan: "PRO (B2C)",
          porcentaje_clientes: "15-20%",
          numero_clientes: "360 - 848",
          arpu_mensual: "USD 160 - 256",
          revenue_mensual_plan: "USD 58K - 217K",
          revenue_anual_plan: "USD 691K - 2.6M"
        },
        {
          plan: "BUSINESS (B2B)",
          porcentaje_clientes: "10-12%",
          numero_clientes: "240 - 509",
          arpu_mensual: "USD 128 - 320",
          revenue_mensual_plan: "USD 31K - 163K",
          revenue_anual_plan: "USD 368K - 1.95M"
        },
        {
          plan: "ENTERPRISE (B2B)",
          porcentaje_clientes: "2-3%",
          numero_clientes: "48 - 127",
          arpu_mensual: "USD 640 - 3,200",
          revenue_mensual_plan: "USD 31K - 406K",
          revenue_anual_plan: "USD 369K - 4.88M",
          nota: "Pocos clientes pero alto ARPU, requiere soporte dedicado"
        }
      ],
      
      revenue_total_proyectado: {
        escenario_conservador: "USD 2.3M - 3.5M/año",
        escenario_moderado: "USD 4.2M - 7.4M/año",
        escenario_agresivo: "USD 8M - 15M/año",
        nota: "Alineado con proyección SOM bottom-up"
      }
    },
    
    recomendaciones_go_to_market: {
      titulo: "Recomendaciones de Go-to-Market por Segmento",
      
      fase_1_0_6_meses: {
        titulo: "Fase 1: Validación Product-Market Fit (Meses 0-6)",
        enfoque_prioritario: "B2C - Plan GROWTH",
        justificacion: "Mayor volumen de mercado (435K-840K potenciales), menor fricción onboarding, validación rápida",
        canales: [
          "Meta Ads (Instagram/Facebook) targeting social sellers",
          "Influencer marketing en comunidades de emprendedores",
          "WhatsApp Business communities",
          "Referidos incentivados (cashback en fee)"
        ],
        target_clientes: "100-300 clientes B2C activos",
        objetivo: "Validar propuesta de valor, optimizar onboarding, refinar producto"
      },
      
      fase_2_6_12_meses: {
        titulo: "Fase 2: Escalamiento B2C + Introducción B2B (Meses 6-12)",
        enfoque_prioritario: "B2C (todos los planes) + B2B Business",
        justificacion: "Con PMF validado en B2C, expandir a PYMEs que tienen mayor LTV y menos churn",
        canales: [
          "Seguir con Meta Ads + TikTok Ads",
          "Partnerships con cámaras de comercio / gremios",
          "Sales directo para B2B (outbound a PYMEs con RIF)",
          "Content marketing (blog, webinars sobre facturación)"
        ],
        target_clientes: "500-1,000 clientes (80% B2C, 20% B2B)",
        objetivo: "Escalar B2C mientras construyes pipeline B2B"
      },
      
      fase_3_12_24_meses: {
        titulo: "Fase 3: Diversificación y Enterprise (Meses 12-24)",
        enfoque_prioritario: "Mix balanceado B2C/B2B + primeros clientes Enterprise",
        justificacion: "Revenue diversificado, menor dependencia de microemprendedores de alto churn",
        canales: [
          "Performance marketing maduro (CAC optimizado)",
          "Enterprise sales team para grandes cuentas",
          "Partnerships con ERPs / software contable",
          "White-label para marketplaces"
        ],
        target_clientes: "2,000-4,000 clientes (mix según distribución esperada)",
        objetivo: "Alcanzar SOM proyectado con revenue predecible"
      }
    },
    
    riesgos_mitigacion: {
      titulo: "Riesgos y Estrategias de Mitigación",
      
      riesgos: [
        {
          riesgo: "Churn alto en plan STARTER (clientes de bajo volumen)",
          impacto: "Alto - base de clientes rotatoria",
          mitigacion: [
            "Reducir CAC para STARTER (marketing orgánico, referidos)",
            "Upsell agresivo a GROWTH cuando superen USD 3K/mes",
            "No sobre-invertir en soporte para STARTER"
          ]
        },
        {
          riesgo: "Fee del 5% percibido como alto vs. Zelle P2P (0%)",
          impacto: "Medio - sensibilidad a precio en segmento informal",
          mitigacion: [
            "Enfatizar valor: tiempo ahorrado, profesionalización, seguridad",
            "Comparar con POS tradicionales (8-12% en Venezuela)",
            "Ofrecer onboarding gratuito sin fricción"
          ]
        },
        {
          riesgo: "Complejidad de facturación electrónica B2B (integración SENIAT)",
          impacto: "Alto - bloqueante para adopción B2B",
          mitigacion: [
            "Fase 1: ofrecer reportes contables sin factura fiscal automática",
            "Roadmap claro para integración SENIAT (6-12 meses)",
            "Partnership con software contable existente mientras tanto"
          ]
        },
        {
          riesgo: "Clientes Enterprise esperan fees más bajos (<3%)",
          impacto: "Medio - menor margin en clientes de alto volumen",
          mitigacion: [
            "Pricing custom case-by-case (3.5-4% para >USD 50K/mes)",
            "Compensar con cuota mensual (USD 200-500/mes)",
            "Enfatizar valor del servicio dedicado + integraciones"
          ]
        }
      ]
    }
  },

  // ROADMAP DE PRODUCTO SEGÚN PRICING
  roadmap_producto: {
    titulo: "Roadmap de Producto Alineado a Planes de Pricing",
    
    mvp_mes_0_3: {
      titulo: "MVP (Mes 0-3): Lanzamiento con STARTER + GROWTH B2C",
      funcionalidades_criticas: [
        "Link de pago personalizado",
        "Notificaciones WhatsApp/Email",
        "Panel básico de historial",
        "Liquidación automática diaria",
        "QR code para presencial",
        "Checkout responsive mobile-first"
      ],
      planes_disponibles: ["STARTER B2C", "GROWTH B2C"],
      objetivo: "Validar PMF con microemprendedores, iterar rápido"
    },
    
    fase_1_mes_3_6: {
      titulo: "Fase 1 (Mes 3-6): Agregar PRO B2C + Preparación B2B",
      funcionalidades_nuevas: [
        "Pagos recurrentes / suscripciones",
        "Catálogo de productos avanzado",
        "Analíticas de conversión",
        "Custom domain redirect",
        "KYC empresarial (preparación B2B)"
      ],
      planes_disponibles: ["STARTER", "GROWTH", "PRO B2C"],
      objetivo: "Capturar emprendedores de ticket alto, sentar bases B2B"
    },
    
    fase_2_mes_6_12: {
      titulo: "Fase 2 (Mes 6-12): Lanzamiento B2B BUSINESS",
      funcionalidades_nuevas: [
        "Multi-usuario con roles",
        "Reportes contables exportables",
        "API básica + webhooks",
        "Integración WooCommerce (plugin)",
        "POS virtual para tiendas físicas",
        "Facturación pro-forma (sin valor fiscal aún)"
      ],
      planes_disponibles: ["Todos los B2C + BUSINESS B2B"],
      objetivo: "Capturar PYMEs formales, diversificar revenue"
    },
    
    fase_3_mes_12_24: {
      titulo: "Fase 3 (Mes 12-24): Lanzamiento ENTERPRISE + Madurez",
      funcionalidades_nuevas: [
        "Facturación electrónica SENIAT (integración oficial)",
        "API completa REST + GraphQL",
        "Multi-sucursal / multi-tienda",
        "Split payments para marketplaces",
        "White-label checkout",
        "SLA garantizado + soporte 24/7"
      ],
      planes_disponibles: ["Full suite: 5 planes operativos"],
      objetivo: "Producto maduro enterprise-ready, capturar grandes cuentas"
    }
  },

  notas_finales: {
    titulo: "Notas Finales y Decisiones Pendientes",
    
    decisiones_producto: [
      "✅ Fee único 5% confirmado para fase inicial (simplicidad > optimización)",
      "✅ Sin cuota mensual en fase 1-2 (elimina barrera entrada)",
      "⚠️ Evaluar introducir tier PRO con cuota + fee reducido en mes 6-12",
      "⚠️ Definir pricing custom para Enterprise según demanda (mes 12+)"
    ],
    
    decisiones_go_to_market: [
      "✅ Fase 1 enfocada 100% en B2C (validación rápida)",
      "✅ Introducir B2B en mes 6-9 (post product-market fit)",
      "⚠️ Evaluar partnerships con ERPs locales para acelerar B2B",
      "⚠️ Considerar programa de afiliados/referidos en mes 3-6"
    ],
    
    metricas_trackear: [
      "ARPU real vs proyectado por plan",
      "Distribución de clientes por plan (¿coincide con proyección?)",
      "Churn rate por plan (STARTER esperado >15%/mes, GROWTH 6-10%/mes)",
      "CAC por plan (B2C debe ser <USD 40, B2B puede ser <USD 150)",
      "Tiempo promedio de activación (onboarding) por plan",
      "% de clientes que upgradean de plan (upsell rate)"
    ]
  }
};