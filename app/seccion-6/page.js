import Link from 'next/link';
import SectionCard from '@/components/common/SectionCard';
import CitasAPA from '@/components/common/CitasAPA';
import ResumenMercado from '@/components/seccion-6/ResumenMercado';
import DetalleSegmento from '@/components/seccion-6/DetalleSegmento';
import AnalisisCompetencia from '@/components/seccion-6/AnalisisCompetencia';
import EstrategiaPrecios from '@/components/seccion-6/EstrategiaPrecios';
import GrowthLoop from '@/components/seccion-6/GrowthLoop';
import GestionRiesgos from '@/components/seccion-5/GestionRiesgos';
import InversionEstimada from '@/components/seccion-6/InversionEstimada';
import { estrategiaMercadoData } from '@/data/seccion-6/estrategiaMercado';

export default function Seccion6() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/seccion-5" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Sección anterior
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            📈 Sección 6: Estrategia de Mercado
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
        {/* Título */}
        <SectionCard>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{estrategiaMercadoData.titulo}</h2>
          <p className="text-gray-600">{estrategiaMercadoData.descripcion}</p>
        </SectionCard>

        {/* Resumen de Mercado */}
        <SectionCard title="📊 Resumen Ejecutivo del Mercado">
          <ResumenMercado resumen={estrategiaMercadoData.resumen_mercado} />
        </SectionCard>

        {/* Segmentación Híbrida */}
        <SectionCard title="🎯 Segmentación por Fase">
          <DetalleSegmento 
            segmento={estrategiaMercadoData.segmentacion_hibrida.fase_1_validador}
            fase="Fase 1"
            color="green"
          />
          
          <DetalleSegmento 
            segmento={estrategiaMercadoData.segmentacion_hibrida.fase_2_orquestador}
            fase="Fase 2"
            color="blue"
          />
        </SectionCard>

        {/* Análisis Competitivo */}
        <SectionCard title="🥊 Análisis Competitivo">
          <AnalisisCompetencia analisis={estrategiaMercadoData.analisis_competencia} />
        </SectionCard>

        {/* Estrategia de Precios */}
        <SectionCard title="💰 Estrategia de Pricing">
          <EstrategiaPrecios 
            estrategia={estrategiaMercadoData.estrategia_precios.fase_1_validador}
            fase="Fase 1 - Validador"
          />
          
          <EstrategiaPrecios 
            estrategia={estrategiaMercadoData.estrategia_precios.fase_2_orquestador}
            fase="Fase 2 - Orquestador"
          />
        </SectionCard>

        {/* Growth Loop */}
        <SectionCard title="🔄 Growth Loop - Ruta de Adopción">
          <GrowthLoop loop={estrategiaMercadoData.growth_loop} />
        </SectionCard>

        {/* Riesgos de Mercado */}
        <SectionCard title="⚠️ Riesgos de Mercado">
          <GestionRiesgos riesgos={estrategiaMercadoData.riesgos_mercado} />
        </SectionCard>

        {/* Métricas de Éxito (OKRs) */}
        <SectionCard title="🎯 Métricas de Éxito (OKRs)">
          <div className="space-y-6">
            {Object.entries(estrategiaMercadoData.metricas_exito).map(([key, fase], idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300 p-6">
                <h4 className="text-lg font-bold text-blue-900 mb-2">{fase.objetivo}</h4>
                {fase.condicion && (
                  <div className="bg-red-50 rounded p-3 mb-3 border-l-4 border-red-500">
                    <p className="text-sm text-red-900 font-semibold">⚠️ {fase.condicion}</p>
                  </div>
                )}
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Resultados Clave:</p>
                  <ul className="space-y-2">
                    {fase.resultados_clave.map((resultado, rIdx) => (
                      <li key={rIdx} className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">✓</span>
                        <span className="text-gray-700">{resultado}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Inversión Estimada */}
        <SectionCard title="💵 Inversión Estimada y ROI">
          <InversionEstimada inversion={estrategiaMercadoData.inversion_estimada} />
        </SectionCard>

        {/* Referencias */}
        <CitasAPA referencias={estrategiaMercadoData.referencias} />
      </main>
    </div>
  );
}