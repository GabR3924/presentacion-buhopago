'use client';
import { useState, useMemo } from 'react';
import CategoriaVariables from './CategoriaVariables';
import GraficaProyeccion from './GraficaProyeccion';
import GraficaDona from './GraficaDona';
import GraficaBarras from './GraficaBarras';
import MetricasCard from './MetricasCard';
import { modeloEconomicoData, getDefaultValues } from '@/data/seccion-2/modeloEconomico';

export default function ModeloEconomico() {
  const [values, setValues] = useState(getDefaultValues());

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleReset = () => {
    setValues(getDefaultValues());
  };

  // Datos calculados para gráficas
  const dataProyeccion = useMemo(() => {
    const proyeccion = values.proyeccion_market_share || [0.5, 1.2, 2.5, 4.0, 6.0];
    return proyeccion.map((valor, idx) => ({
      año: `Año ${idx + 1}`,
      valor: valor
    }));
  }, [values.proyeccion_market_share]);

  const dataDistribucionSectorial = useMemo(() => [
    { nombre: 'Primario', valor: values.sector_primario_porcentaje || 15 },
    { nombre: 'Secundario', valor: values.sector_secundario_porcentaje || 25 },
    { nombre: 'Terciario', valor: values.sector_terciario_porcentaje || 60 }
  ], [values.sector_primario_porcentaje, values.sector_secundario_porcentaje, values.sector_terciario_porcentaje]);

  const dataComisiones = useMemo(() => [
    { nombre: 'Comisión Propia', valor: values.comision_propia_porcentaje || 2.5 },
    { nombre: 'Comisión Banco', valor: values.comision_banco_porcentaje || 0.8 },
    { nombre: 'Take Rate Neto', valor: values.take_rate_neto_porcentaje || 1.7 }
  ], [values.comision_propia_porcentaje, values.comision_banco_porcentaje, values.take_rate_neto_porcentaje]);

  const metricasClave = useMemo(() => [
    {
      label: 'LTV / CAC Ratio',
      valor: ((values.ltv_lifetime_value_usd || 450) / (values.cac_costo_total_adquisicion_usd || 75)).toFixed(2),
      descripcion: values.ltv_lifetime_value_usd / values.cac_costo_total_adquisicion_usd > 3 ? '✅ Saludable' : '⚠️ Revisar'
    },
    {
      label: 'Margen Neto',
      valor: `${values.margen_neto_porcentaje || 35}%`,
      descripcion: 'Del ingreso total'
    },
    {
      label: 'Market Share Año 5',
      valor: `${(values.proyeccion_market_share || [0.5, 1.2, 2.5, 4.0, 6.0])[4]}%`,
      descripcion: 'Proyección final'
    },
    {
      label: 'Retención',
      valor: `${values.retencion_porcentaje || 85}%`,
      descripcion: values.retencion_porcentaje > 80 ? '✅ Excelente' : '⚠️ Mejorar'
    }
  ], [values]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Modelo Económico Dinámico
          </h1>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            Restaurar Valores por Defecto
          </button>
        </div>
        <p className="text-gray-600">
          Ajusta los parámetros del modelo económico. Los campos marcados con 
          <span className="text-red-600 font-bold"> ⭐</span> son obligatorios.
        </p>
      </div>

      {/* Métricas Clave */}
      <MetricasCard titulo="📊 Métricas Clave del Negocio" metricas={metricasClave} />

      {/* Visualizaciones */}
      <div className="grid lg:grid-cols-2 gap-6">
        <GraficaProyeccion 
          data={dataProyeccion} 
          titulo="📈 Proyección Market Share (5 años)" 
        />
        <GraficaDona 
          data={dataDistribucionSectorial} 
          titulo="🎯 Distribución Sectorial" 
        />
      </div>

      <GraficaBarras 
        data={dataComisiones} 
        titulo="💰 Estructura de Comisiones (%)" 
        dataKey="valor"
        color="#0ea5e9"
      />

      {/* Formularios de Variables */}
      <CategoriaVariables
        titulo={modeloEconomicoData.variables_macroeconomicas.titulo}
        variables={modeloEconomicoData.variables_macroeconomicas.variables}
        values={values}
        onChange={handleChange}
      />

      <CategoriaVariables
        titulo={modeloEconomicoData.distribucion_sectorial.titulo}
        variables={modeloEconomicoData.distribucion_sectorial.variables}
        values={values}
        onChange={handleChange}
      />

      <CategoriaVariables
        titulo={modeloEconomicoData.mercado_objetivo.titulo}
        variables={modeloEconomicoData.mercado_objetivo.variables}
        values={values}
        onChange={handleChange}
      />

      <CategoriaVariables
        titulo={modeloEconomicoData.comisiones.titulo}
        variables={modeloEconomicoData.comisiones.variables}
        values={values}
        onChange={handleChange}
      />

      <CategoriaVariables
        titulo={modeloEconomicoData.unit_economics.titulo}
        variables={modeloEconomicoData.unit_economics.variables}
        values={values}
        onChange={handleChange}
      />
    </div>
  );
}