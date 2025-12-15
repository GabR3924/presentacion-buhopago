import Link from 'next/link';
import SectionCard from '@/components/common/SectionCard';
import PropuestaValor from '@/components/seccion-11/PropuestaValor';
import EstructuraFases from '@/components/seccion-11/EstructuraFases';
import ServiciosFase1 from '@/components/seccion-11/ServiciosFase1';
import PricingPlanes from '@/components/seccion-11/PricingPlanes';
import CasosUso from '@/components/seccion-11/CasosUso';
import Comparativas from '@/components/seccion-11/Comparativas';
import FAQ from '@/components/seccion-11/FAQ';
import CTASection from '@/components/seccion-11/CTASection';
import { brochureServiciosBuhoPago } from '@/data/seccion-11/brochureServicios';

export default function Seccion11() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/seccion-10" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Sección anterior
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            📱 Sección 11: Brochure de Servicios
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
        <SectionCard>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            {brochureServiciosBuhoPago.titulo}
          </h2>
          <p className="text-2xl text-primary-700 mb-3">
            {brochureServiciosBuhoPago.subtitulo}
          </p>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>Versión: {brochureServiciosBuhoPago.version}</span>
            <span>•</span>
            <span>{brochureServiciosBuhoPago.fecha}</span>
          </div>
        </SectionCard>

        {/* Propuesta de Valor */}
        <SectionCard title="💎 Propuesta de Valor">
          <PropuestaValor propuesta={brochureServiciosBuhoPago.propuesta_valor} />
        </SectionCard>

        {/* Estructura de Fases */}
        <SectionCard title="🗺️ Estructura de Fases - Tu Plataforma Evolutiva">
          <EstructuraFases estructura={brochureServiciosBuhoPago.estructura_fases} />
        </SectionCard>

        {/* Fase 1: Gestión de Pagos */}
        <SectionCard>
          <ServiciosFase1 fase1={brochureServiciosBuhoPago.fase_1_gestion_pagos} />
        </SectionCard>

        {/* Limitaciones Fase 1 */}
        <SectionCard title={brochureServiciosBuhoPago.fase_1_gestion_pagos.limitaciones_fase_1.titulo}>
          <div className="bg-orange-50 rounded-lg border-2 border-orange-500 p-6">
            <p className="text-orange-900 mb-4">
              {brochureServiciosBuhoPago.fase_1_gestion_pagos.limitaciones_fase_1.descripcion}
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">Servicios NO disponibles:</p>
                <ul className="space-y-2">
                  {brochureServiciosBuhoPago.fase_1_gestion_pagos.limitaciones_fase_1.servicios_no_disponibles.map((serv, idx) => (
                    <li key={idx} className="text-gray-700">{serv}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">Servicios limitados:</p>
                <ul className="space-y-2">
                  {brochureServiciosBuhoPago.fase_1_gestion_pagos.limitaciones_fase_1.servicios_limitados.map((serv, idx) => (
                    <li key={idx} className="text-gray-700">{serv}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded p-4">
                <p className="text-blue-900 font-semibold">
                  📅 {brochureServiciosBuhoPago.fase_1_gestion_pagos.limitaciones_fase_1.cuando_disponible}
                </p>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Pricing Fase 1 */}
        <SectionCard title={brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1.titulo}>
          <PricingPlanes pricing={brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1} />
        </SectionCard>

        {/* Comparativa de Costos */}
        <SectionCard title={brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1.comparativa_costos.titulo}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg border-2 border-red-500 p-6">
              <h4 className="text-xl font-bold text-red-900 mb-4">
                {brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1.comparativa_costos.escenario_sin_buhopago.titulo}
              </h4>
              <ul className="space-y-3 mb-4">
                {brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1.comparativa_costos.escenario_sin_buhopago.costos_ocultos.map((costo, idx) => (
                  <li key={idx} className="text-red-800">{costo}</li>
                ))}
              </ul>
              <p className="text-lg font-bold text-red-900">
                {brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1.comparativa_costos.escenario_sin_buhopago.costo_total_estimado}
              </p>
            </div>

            <div className="bg-green-50 rounded-lg border-2 border-green-500 p-6">
              <h4 className="text-xl font-bold text-green-900 mb-4">
                {brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1.comparativa_costos.escenario_con_buhopago.titulo}
              </h4>
              <ul className="space-y-3 mb-4">
                {brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1.comparativa_costos.escenario_con_buhopago.beneficios.map((ben, idx) => (
                  <li key={idx} className="text-green-800">{ben}</li>
                ))}
              </ul>
              <p className="text-lg font-bold text-green-900 mb-2">
                {brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1.comparativa_costos.escenario_con_buhopago.costo}
              </p>
              <p className="text-sm text-green-800">
                ROI: {brochureServiciosBuhoPago.fase_1_gestion_pagos.pricing_fase_1.comparativa_costos.escenario_con_buhopago.roi}
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Casos de Uso */}
        <SectionCard title={brochureServiciosBuhoPago.fase_1_gestion_pagos.casos_uso_fase_1.titulo}>
          <CasosUso casos={brochureServiciosBuhoPago.fase_1_gestion_pagos.casos_uso_fase_1} />
        </SectionCard>

        {/* Fase 2: Procesamiento Completo */}
        <SectionCard>
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg p-8 mb-6">
            <h3 className="text-3xl font-bold mb-2">{brochureServiciosBuhoPago.fase_2_procesamiento_completo.titulo}</h3>
            <p className="text-xl opacity-90 mb-4">{brochureServiciosBuhoPago.fase_2_procesamiento_completo.subtitulo}</p>
            <span className="px-4 py-2 bg-white text-purple-700 rounded-full font-bold">
              {brochureServiciosBuhoPago.fase_2_procesamiento_completo.estado}
            </span>
          </div>

          <div className="bg-yellow-50 rounded-lg border-2 border-yellow-500 p-6 mb-6">
            <p className="text-yellow-900 font-semibold">
              {brochureServiciosBuhoPago.fase_2_procesamiento_completo.nota_importante}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              {brochureServiciosBuhoPago.fase_2_procesamiento_completo.diferencias_vs_fase_1.titulo}
            </h4>
            <p className="text-gray-700 mb-4">
              {brochureServiciosBuhoPago.fase_2_procesamiento_completo.diferencias_vs_fase_1.descripcion}
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 border-l-4 border-blue-500">
              <p className="text-blue-900 font-bold">
                {brochureServiciosBuhoPago.fase_2_procesamiento_completo.diferencias_vs_fase_1.cambio_clave}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {brochureServiciosBuhoPago.fase_2_procesamiento_completo.diferencias_vs_fase_1.ventajas.map((vent, idx) => (
                <div key={idx} className="bg-green-50 rounded p-3">
                  <p className="text-green-800">{vent}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        {/* Comparativas */}
        <SectionCard title="⚖️ Comparativa: BuhoPago vs Alternativas">
          <Comparativas comparativa={brochureServiciosBuhoPago.comparativas.vs_competencia} />
        </SectionCard>

        {/* Fase 1 vs Fase 2 */}
        <SectionCard title="🔄 Fase 1 vs Fase 2: Resumen Comparativo">
          <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Aspecto</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">Fase 1</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-purple-700">Fase 2</th>
                </tr>
              </thead>
              <tbody>
                {brochureServiciosBuhoPago.comparativas.fase_1_vs_fase_2_resumen.tabla.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-800 text-sm">{row.aspecto}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.fase_1}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.fase_2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Roadmap */}
        <SectionCard title="🗓️ Roadmap de Producto">
          <div className="space-y-4">
            {brochureServiciosBuhoPago.roadmap.timeline.map((periodo, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{periodo.periodo}</h4>
                    <p className="text-primary-700 font-semibold">{periodo.fase}</p>
                  </div>
                  {periodo.status && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                      {periodo.status}
                    </span>
                  )}
                </div>

                <ul className="space-y-2 mb-3">
                  {periodo.hitos.map((hito, hIdx) => (
                    <li key={hIdx} className="text-gray-700">• {hito}</li>
                  ))}
                </ul>

                {periodo.licencia && (
                  <div className="bg-yellow-50 rounded p-3 border-l-4 border-yellow-500">
                    <p className="text-sm text-yellow-900">
                      <strong>Licencia:</strong> {periodo.licencia}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionCard>

        {/* FAQ */}
        <SectionCard title={brochureServiciosBuhoPago.anexos.faq.titulo}>
          <FAQ faq={brochureServiciosBuhoPago.anexos.faq} />
        </SectionCard>

        {/* Glosario */}
        <SectionCard title={brochureServiciosBuhoPago.anexos.glosario.titulo}>
          <div className="grid md:grid-cols-2 gap-4">
            {brochureServiciosBuhoPago.anexos.glosario.terminos.map((termino, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
                <h5 className="font-bold text-gray-800 mb-2">{termino.termino}</h5>
                <p className="text-sm text-gray-700">{termino.definicion}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Call to Action */}
        <SectionCard title={brochureServiciosBuhoPago.cta.titulo}>
          <CTASection cta={brochureServiciosBuhoPago.cta} />
        </SectionCard>
      </main>
    </div>
  );
}