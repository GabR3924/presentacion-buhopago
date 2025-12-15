import Link from 'next/link';
import SectionCard from '@/components/common/SectionCard';
import CitasAPA from '@/components/common/CitasAPA';
import TimelineFases from '@/components/seccion-5/TimelineFases';
import DetalleFase from '@/components/seccion-5/DetalleFase';
import ModeloIngresos from '@/components/seccion-5/ModeloIngresos';
import FlujoOperativo from '@/components/seccion-5/FlujoOperativo';
import GestionRiesgos from '@/components/seccion-5/GestionRiesgos';
import { modeloNegocioData } from '@/data/seccion-5/modeloNegocio';

export default function Seccion5() {
  const { hoja_de_ruta, ventajas_competitivas, gestion_riesgos, metricas_clave } = modeloNegocioData;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/seccion-4" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Sección anterior
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            🚀 Sección 5: Modelo de Negocio por Fases
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
        {/* Título y Visión */}
        <SectionCard>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{modeloNegocioData.titulo}</h2>
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg p-6 text-white">
            <p className="text-lg">
              <strong>🎯 Visión:</strong> {modeloNegocioData.vision}
            </p>
          </div>
        </SectionCard>

        {/* Timeline */}
        <TimelineFases />

        {/* Fase 1 */}
        <DetalleFase fase={hoja_de_ruta.fase_1} numero={1} color="green" />
        
        {hoja_de_ruta.fase_1.modelo_ingresos && (
          <ModeloIngresos modelo={hoja_de_ruta.fase_1.modelo_ingresos} />
        )}

        {hoja_de_ruta.fase_1.estrategia_marketing && (
          <SectionCard title="📢 Estrategia de Marketing - Fase 1">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border-2 border-purple-300">
              <p className="font-bold text-purple-900 mb-3">
                Enfoque: {hoja_de_ruta.fase_1.estrategia_marketing.enfoque}
              </p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-purple-800 mb-2">Canales:</p>
                <div className="flex flex-wrap gap-2">
                  {hoja_de_ruta.fase_1.estrategia_marketing.canales.map((canal, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">
                      {canal}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded p-4 mb-3">
                <p className="text-sm font-semibold text-gray-600 mb-1">💬 Mensaje Clave:</p>
                <p className="text-gray-800 italic">'{hoja_de_ruta.fase_1.estrategia_marketing.mensaje_clave}'</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-purple-800 mb-2">KPIs:</p>
                <div className="flex flex-wrap gap-2">
                  {hoja_de_ruta.fase_1.estrategia_marketing.kpi.map((kpi, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-purple-800 rounded-lg text-sm font-semibold">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>
        )}

        {/* Fase 2 */}
        <DetalleFase fase={hoja_de_ruta.fase_2} numero={2} color="blue" />

        {hoja_de_ruta.fase_2.mecanismo_operativo && (
          <FlujoOperativo mecanismo={hoja_de_ruta.fase_2.mecanismo_operativo} />
        )}

        {hoja_de_ruta.fase_2.modelo_ingresos && (
          <ModeloIngresos modelo={hoja_de_ruta.fase_2.modelo_ingresos} />
        )}

        {hoja_de_ruta.fase_2.estrategia_comercial && (
          <SectionCard title="💼 Estrategia Comercial - Fase 2">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-300">
              <p className="font-bold text-blue-900 mb-3">
                Enfoque: {hoja_de_ruta.fase_2.estrategia_comercial.enfoque}
              </p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-blue-800 mb-2">Canales:</p>
                <ul className="space-y-1">
                  {hoja_de_ruta.fase_2.estrategia_comercial.canales.map((canal, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-blue-900">{canal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded p-4 mb-3">
                <p className="text-sm font-semibold text-gray-600 mb-1">💬 Mensaje Clave:</p>
                <p className="text-gray-800 italic">'{hoja_de_ruta.fase_2.estrategia_comercial.mensaje_clave}'</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-blue-800 mb-2">KPIs:</p>
                <div className="flex flex-wrap gap-2">
                  {hoja_de_ruta.fase_2.estrategia_comercial.kpi.map((kpi, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-blue-800 rounded-lg text-sm font-semibold">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>
        )}

        {/* Fase 3 */}
        <DetalleFase fase={hoja_de_ruta.fase_3} numero={3} color="purple" />

        {/* Ventajas Competitivas */}
        <SectionCard title="⚡ Ventajas Competitivas">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-3">Fase 1</h4>
              <ul className="space-y-2">
                {ventajas_competitivas.fase_1.map((ventaja, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-green-800">{ventaja}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900 mb-3">Fase 2</h4>
              <ul className="space-y-2">
                {ventajas_competitivas.fase_2.map((ventaja, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-blue-800">{ventaja}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* Gestión de Riesgos */}
        <SectionCard title="⚠️ Gestión de Riesgos">
          <GestionRiesgos riesgos={gestion_riesgos} />
        </SectionCard>

        {/* Métricas Clave */}
        <SectionCard title="📊 Métricas de Tracción">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Corto Plazo (6 meses)</h4>
              <ul className="space-y-2">
                {metricas_clave.corto_plazo_6m.map((metrica, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{metrica}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Medio Plazo (18 meses)</h4>
              <ul className="space-y-2">
                {metricas_clave.medio_plazo_18m.map((metrica, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{metrica}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* Referencias */}
        <CitasAPA referencias={modeloNegocioData.referencias} />
      </main>
    </div>
  );
}