export const modeloEconomicoData = {
  // VARIABLES MACROECONÓMICAS
  variables_macroeconomicas: {
    titulo: "Variables Macroeconómicas",
    variables: {
      pib_base_millones_usd: {
        label: "PIB Base (USD millones)",
        value: 119808000000 ,
        obligatorio: true
      },
      crecimiento_pib_anual_porcentaje: {
        label: "Crecimiento PIB Anual (%)",
        value: 8.7,
        obligatorio: true
      },
      tasa_inflacion_porcentaje: {
        label: "Tasa de Inflación (%)",
        value: 0,
        obligatorio: false
      },
      porcentaje_informalidad: {
        label: "Porcentaje de Informalidad (%)",
        value: 55,
        obligatorio: true
      }
    }
  },

  // DISTRIBUCIÓN SECTORIAL
  distribucion_sectorial: {
    titulo: "Distribución Sectorial",
    variables: {
      sector_primario_porcentaje: {
        label: "Sector Primario (%)",
        value: 15,
        obligatorio: false
      },
      sector_secundario_porcentaje: {
        label: "Sector Secundario (%)",
        value: 25,
        obligatorio: false
      },
      sector_terciario_porcentaje: {
        label: "Sector Terciario (%)",
        value: 60,
        obligatorio: true,
        subsectores: {
          ter_comercio_porcentaje: {
            label: "Comercio (%)",
            value: 35,
            obligatorio: false
          },
          ter_servicios_porcentaje: {
            label: "Servicios (%)",
            value: 30,
            obligatorio: false
          },
          ter_gastronomia_porcentaje: {
            label: "Gastronomía (%)",
            value: 20,
            obligatorio: false
          },
          ter_transporte_privado_porcentaje: {
            label: "Transporte Privado (%)",
            value: 15,
            obligatorio: false
          }
        }
      }
    }
  },

  // VARIABLES DEL MERCADO OBJETIVO
  mercado_objetivo: {
    titulo: "Variables del Mercado Objetivo",
    variables: {
      sector_objetivo: {
        label: "Sector Objetivo",
        value: "terciario",
        obligatorio: true,
        tipo: "select",
        opciones: ["primario", "secundario", "terciario"]
      },
      cobertura_geografica_inicial_porcentaje: {
        label: "Cobertura Geográfica Inicial (%)",
        value: 25,
        obligatorio: true
      },
      crecimiento_cobertura_anual_porcentaje: {
        label: "Crecimiento Cobertura Anual (%)",
        value: 15,
        obligatorio: true
      },
      market_share_inicial_porcentaje: {
        label: "Market Share Inicial (%)",
        value: 0.5,
        obligatorio: true
      },
      proyeccion_market_share: {
        label: "Proyección Market Share (5 años) (%)",
        value: [0.5, 1.2, 2.5, 4.0, 6.0],
        obligatorio: true,
        tipo: "array"
      },
      ticket_promedio_usd: {
        label: "Ticket Promedio (USD)",
        value: 25,
        obligatorio: true
      },
      frecuencia_transaccional_mensual: {
        label: "Frecuencia Transaccional Mensual",
        value: 8,
        obligatorio: true
      },
      adopcion_anual_porcentaje: {
        label: "Adopción Anual (%)",
        value: 30,
        obligatorio: true
      },
      retencion_porcentaje: {
        label: "Retención (%)",
        value: 85,
        obligatorio: true
      },
      churn_porcentaje: {
        label: "Churn (%)",
        value: 15,
        obligatorio: false
      }
    }
  },

  // VARIABLES DE COMISIONES
  comisiones: {
    titulo: "Variables de Comisiones",
    variables: {
      comision_propia_porcentaje: {
        label: "Comisión Propia (%)",
        value: 2.5,
        obligatorio: true
      },
      iva_porcentaje: {
        label: "IVA (%)",
        value: 16,
        obligatorio: false
      },
      comision_banco_porcentaje: {
        label: "Comisión Banco (%)",
        value: 0.8,
        obligatorio: true
      },
      take_rate_neto_porcentaje: {
        label: "Take Rate Neto (%)",
        value: 1.7,
        obligatorio: true
      },
      captura_informal_inicial_porcentaje: {
        label: "Captura Informal Inicial (%)",
        value: 5,
        obligatorio: true
      },
      crecimiento_captura_informal_porcentaje: {
        label: "Crecimiento Captura Informal (%)",
        value: 10,
        obligatorio: true
      },
      costo_por_transaccion_usd: {
        label: "Costo por Transacción (USD)",
        value: 0.15,
        obligatorio: true
      }
    }
  },

  // UNIT ECONOMICS
  unit_economics: {
    titulo: "Unit Economics",
    variables: {
      cpc_costo_adquirir_comercio_usd: {
        label: "CPC - Costo para adquirir un comercio (USD)",
        value: 50,
        obligatorio: true
      },
      cac_costo_total_adquisicion_usd: {
        label: "CAC - Costo total por adquisición (USD)",
        value: 75,
        obligatorio: true
      },
      ltv_lifetime_value_usd: {
        label: "LTV - Lifetime Value (USD)",
        value: 450,
        obligatorio: true
      },
      margen_neto_porcentaje: {
        label: "Margen Neto (%)",
        value: 35,
        obligatorio: true
      }
    }
  }
};

// Función helper para obtener valores por defecto
export const getDefaultValues = () => {
  const defaults = {};
  
  Object.keys(modeloEconomicoData).forEach(categoria => {
    if (modeloEconomicoData[categoria].variables) {
      Object.keys(modeloEconomicoData[categoria].variables).forEach(variable => {
        const varData = modeloEconomicoData[categoria].variables[variable];
        defaults[variable] = varData.value;
        
        // Si tiene subsectores, también agregarlos
        if (varData.subsectores) {
          Object.keys(varData.subsectores).forEach(subsector => {
            defaults[subsector] = varData.subsectores[subsector].value;
          });
        }
      });
    }
  });
  
  return defaults;
};

// Función helper para validar valores obligatorios
export const validateRequiredFields = (values) => {
  const errors = [];
  
  Object.keys(modeloEconomicoData).forEach(categoria => {
    if (modeloEconomicoData[categoria].variables) {
      Object.keys(modeloEconomicoData[categoria].variables).forEach(variable => {
        const varData = modeloEconomicoData[categoria].variables[variable];
        if (varData.obligatorio && !values[variable]) {
          errors.push(`${varData.label} es obligatorio`);
        }
      });
    }
  });
  
  return errors;
};

// Referencias bibliográficas para la sección 2
export const referenciasSeccion2 = [
  {
    autores: "Banco Central de Venezuela",
    año: 2025,
    titulo: "Indicadores económicos y proyecciones macroeconómicas",
    fuente: "BCV",
    url: "https://www.bcv.org.ve",
    fecha_acceso: "11 de diciembre de 2025"
  },
  {
    autores: "Tu Autor Aquí",
    año: 2025,
    titulo: "Tu título aquí",
    fuente: "Tu fuente"
  }
];