import Link from 'next/link';
import SectionCard from '@/components/common/SectionCard';
import CitasAPA from '@/components/common/CitasAPA';
import EmbudoMercado from '@/components/seccion-3/EmbudoMercado';
import ComposicionPIB from '@/components/seccion-3/ComposicionPIB';
import EscenariosSOM from '@/components/seccion-3/EscenariosSOM';
import MetricasTAM from '@/components/seccion-3/MetricasTAM';
import { analisisMercadoData } from '@/data/seccion-3/analisisMercado';

export default function Seccion3() {
  const { analisis_tam_pib, analisis_mercado, referencias } = analisisMercadoData;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/seccion-2" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Sección anterior
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            🎯 Sección 3: Análisis de Mercado (TAM/SAM/SOM)
          </h1>
          <Link href="/" className="text-primary-600 hover:text-primary-700 flex items-center">
            Volver al inicio
            <svg className="w-6 h-6 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <SectionCard title={analisis_tam_pib.titulo}>
          <p className="text-gray-600 mb-4">{analisis_tam_pib.pib_total.nota}</p>
          
          <MetricasTAM 
            pib2024="119.8"
            pib2025="130.2"
            tam2024="66.2"
            tam2025="71.9"
          />
        </SectionCard>

        {/* Composición del PIB */}
        <ComposicionPIB sectores={analisis_tam_pib.composicion_por_sector.sectores} />

        {/* Sector Terciario Relevante */}
        <SectionCard title={analisis_tam_pib.mercado_terciario_relevante.titulo}>
          <p className="text-gray-600 mb-4">
            {analisis_tam_pib.mercado_terciario_relevante.descripcion}
          </p>
          
          <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-300 mb-4">
            <div className="grid md:grid-cols-3 gap-4">
              {analisis_tam_pib.mercado_terciario_relevante.componentes.map((comp, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-sm text-gray-600 mb-1">{comp.sector}</p>
                  <p className="text-3xl font-bold text-primary-600">{comp.participacion}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">Total Sector Terciario</p>
              <p className="text-4xl font-bold text-primary-700">
                {analisis_tam_pib.mercado_terciario_relevante.total_sector_terciario}
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 text-center">
            <p className="text-2xl font-bold text-green-800">
              {analisis_tam_pib.tam_dolares.resultado_final}
            </p>
          </div>
        </SectionCard>

        {/* Embudo TAM/SAM/SOM */}
        <EmbudoMercado 
          tam={71.9}
          sam={35.7}
          som={0.179}
        />

        {/* SAM */}
        <SectionCard title={analisis_mercado.sam.titulo}>
          <p className="text-gray-600 mb-4">{analisis_mercado.sam.descripcion}</p>
          
          <div className="space-y-3 mb-6">
            {analisis_mercado.sam.sectores_encajan.map((sector, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-800">{sector.sector}</h4>
                    <p className="text-sm text-gray-600">{sector.razon}</p>
                  </div>
                  <span className="text-xl font-bold text-primary-600">
                    {sector.participacion_pib}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
            <h4 className="font-bold text-gray-800 mb-3">📐 Cálculo del SAM</h4>
            <p className="text-gray-700 mb-2">{analisis_mercado.sam.calculo_sam.sectores_considerados}</p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Fórmula:</strong> {analisis_mercado.sam.calculo_sam.formula}
            </p>
            <p className="text-3xl font-bold text-blue-700 text-center mt-4">
              SAM = {analisis_mercado.sam.calculo_sam.resultado}
            </p>
          </div>
        </SectionCard>

        {/* SOM y Escenarios */}
        <SectionCard title={analisis_mercado.som.titulo}>
          <p className="text-gray-600 mb-2">{analisis_mercado.som.descripcion}</p>
          <p className="text-sm text-gray-500 mb-4">
            <strong>Contexto:</strong> {analisis_mercado.som.contexto}
          </p>
          
          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Rango realista:</strong> {analisis_mercado.som.rango_realista}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Fee asumido:</strong> {analisis_mercado.som.supuesto_fee}
            </p>
          </div>
        </SectionCard>

        <EscenariosSOM escenarios={analisis_mercado.som.escenarios} />

        {/* Referencias */}
        <CitasAPA referencias={referencias} />
      </main>
    </div>
  );
}