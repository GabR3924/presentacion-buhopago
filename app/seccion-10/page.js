import Link from 'next/link';
import SectionCard from '@/components/common/SectionCard';
import CitasAPA from '@/components/common/CitasAPA';
import SituacionActual from '@/components/seccion-10/SituacionActual';
import ServiciosLicencia from '@/components/seccion-10/ServiciosLicencia';
import CuentaConcentradora from '@/components/seccion-10/CuentaConcentradora';
import Escenario from '@/components/seccion-10/Escenario';
import CostosITFB from '@/components/seccion-10/CostosITFB';
import ProcesoITFB from '@/components/seccion-10/ProcesoITFB';
import EstrategiaHibrida from '@/components/seccion-10/EstrategiaHibrida';
import PlanAccion from '@/components/seccion-10/PlanAccion';
import TimelineProyectado from '@/components/seccion-10/TimelineProyectado';
import { analisisEscenariosLegales } from '@/data/seccion-10/escenariosLegales';

export default function Seccion10() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/seccion-9" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Sección anterior
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            ⚖️ Sección 10: Escenarios Legales
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
        {/* Título y Subtítulo */}
        <SectionCard>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {analisisEscenariosLegales.titulo}
          </h2>
          <p className="text-xl text-primary-700 mb-2">
            {analisisEscenariosLegales.subtitulo}
          </p>
          <p className="text-sm text-gray-600">{analisisEscenariosLegales.fecha}</p>
        </SectionCard>

        {/* Contexto - Situación Actual */}
        <SectionCard title="📌 Contexto: Situación Actual de BuhoPago">
          <SituacionActual situacion={analisisEscenariosLegales.contexto.situacion_actual} />
          
          <div className="mt-6 bg-orange-50 rounded-lg border-2 border-orange-500 p-6 text-center">
            <p className="text-xl font-bold text-orange-900">
              ❓ {analisisEscenariosLegales.contexto.pregunta_critica}
            </p>
          </div>
        </SectionCard>

        {/* Análisis Resolución 001.21 */}
        <SectionCard title="📜 Análisis Detallado - Resolución 001.21 de SUDEBAN">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {analisisEscenariosLegales.analisis_resolucion_001_21.servicios_que_requieren_licencia.titulo}
            </h3>
            <p className="text-gray-700 mb-6">
              {analisisEscenariosLegales.analisis_resolucion_001_21.servicios_que_requieren_licencia.descripcion}
            </p>
            <ServiciosLicencia 
              servicios={analisisEscenariosLegales.analisis_resolucion_001_21.servicios_que_requieren_licencia} 
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {analisisEscenariosLegales.analisis_resolucion_001_21.cuenta_concentradora_analisis.titulo}
            </h3>
            <p className="text-gray-700 mb-6">
              {analisisEscenariosLegales.analisis_resolucion_001_21.cuenta_concentradora_analisis.descripcion}
            </p>
            <CuentaConcentradora 
              cuenta={analisisEscenariosLegales.analisis_resolucion_001_21.cuenta_concentradora_analisis} 
            />
          </div>
        </SectionCard>

        {/* Escenarios */}
        <SectionCard title="🎭 Escenarios de Operación Legal para BuhoPago">
          
          {/* Escenario A */}
          <div className="mb-8">
            <Escenario 
              escenario={analisisEscenariosLegales.escenarios.escenario_a}
              color="yellow"
            />
          </div>

          {/* Escenario B */}
          <div className="mb-8">
            <Escenario 
              escenario={analisisEscenariosLegales.escenarios.escenario_b}
              color="green"
            />

            {/* Requisitos y Costos ITFB */}
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  📋 Requisitos Estructurales para Licencia ITFB
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {analisisEscenariosLegales.escenarios.escenario_b.requisitos.estructurales.map((req, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h5 className="font-bold text-gray-800 mb-1">{req.requisito}</h5>
                      <p className="text-sm text-gray-600">{req.detalle}</p>
                      {req.estimacion && (
                        <p className="text-xs text-blue-700 mt-2">
                          <strong>Estimación:</strong> {req.estimacion}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  💰 Costos Estimados para Obtener Licencia ITFB
                </h4>
                <CostosITFB costos={analisisEscenariosLegales.escenarios.escenario_b.costos} />
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  📅 Proceso de Autorización ITFB (Paso a Paso)
                </h4>
                <ProcesoITFB proceso={analisisEscenariosLegales.escenarios.escenario_b.proceso} />
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  💼 Obligaciones Operativas Post-Licencia (Costos Recurrentes)
                </h4>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="space-y-3 mb-6">
                    {analisisEscenariosLegales.escenarios.escenario_b.costos_recurrentes.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-800">{item.concepto}</span>
                        <span className="text-red-700 font-bold">${item.costo}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-100 rounded-lg p-4 text-center border-2 border-red-500">
                    <p className="text-sm text-red-800 mb-1">Costo Operativo Anual Mínimo</p>
                    <p className="text-2xl font-bold text-red-900">
                      {analisisEscenariosLegales.escenarios.escenario_b.costos_recurrentes.total_anual}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Escenario C - RECOMENDADO */}
          <div className="mb-8">
            <Escenario 
              escenario={analisisEscenariosLegales.escenarios.escenario_c}
              color="blue"
            />

            {/* Estrategia Híbrida Detallada */}
            <div className="mt-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                🔄 Estrategia de Dos Vías Simultáneas
              </h4>
              <EstrategiaHibrida 
                estrategia={analisisEscenariosLegales.escenarios.escenario_c.estrategia} 
              />

              {/* Transición */}
              <div className="mt-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-500 p-6">
                <h5 className="text-xl font-bold text-purple-900 mb-3">
                  {analisisEscenariosLegales.escenarios.escenario_c.estrategia.transicion.titulo}
                </h5>
                <p className="text-purple-800 mb-4">
                  {analisisEscenariosLegales.escenarios.escenario_c.estrategia.transicion.descripcion}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-900 mb-2">Plan de Migración:</p>
                  <ul className="space-y-2">
                    {analisisEscenariosLegales.escenarios.escenario_c.estrategia.transicion.plan.map((paso, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span className="text-purple-800">{paso}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Análisis de Riesgos */}
        <SectionCard title="⚠️ Análisis de Riesgos Legales por Escenario">
          <div className="space-y-6">
            {/* Riesgos Sin Licencia */}
            <div className="bg-red-50 rounded-lg border-2 border-red-500 p-6">
              <h4 className="text-xl font-bold text-red-900 mb-2">
                {analisisEscenariosLegales.analisis_riesgos.sin_licencia.titulo}
              </h4>
              <p className="text-lg font-semibold text-red-800 mb-4">
                {analisisEscenariosLegales.analisis_riesgos.sin_licencia.nivel}
              </p>

              <div className="space-y-4">
                {analisisEscenariosLegales.analisis_riesgos.sin_licencia.riesgos.map((riesgo, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-gray-800 mb-2">{riesgo.riesgo}</h5>
                    <div className="grid md:grid-cols-2 gap-2 mb-3">
                      <p className="text-sm">
                        <strong className="text-orange-700">Probabilidad:</strong> {riesgo.probabilidad}
                      </p>
                      <p className="text-sm">
                        <strong className="text-red-700">Impacto:</strong> {riesgo.impacto}
                      </p>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-800 mb-1">Consecuencias:</p>
                      <ul className="space-y-1">
                        {riesgo.consecuencias.map((cons, cIdx) => (
                          <li key={cIdx} className="text-xs text-red-700">• {cons}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Riesgos Modelo SaaS */}
            <div className="bg-yellow-50 rounded-lg border-2 border-yellow-500 p-6">
              <h4 className="text-xl font-bold text-yellow-900 mb-2">
                {analisisEscenariosLegales.analisis_riesgos.modelo_saas.titulo}
              </h4>
              <p className="text-lg font-semibold text-yellow-800 mb-4">
                {analisisEscenariosLegales.analisis_riesgos.modelo_saas.nivel}
              </p>

              <div className="space-y-3">
                {analisisEscenariosLegales.analisis_riesgos.modelo_saas.riesgos.map((riesgo, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4">
                    <h5 className="font-bold text-gray-800 mb-2">{riesgo.riesgo}</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Probabilidad:</strong> {riesgo.probabilidad}
                    </p>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-800 mb-1">Mitigación:</p>
                      <p className="text-sm text-green-700">{riesgo.mitigacion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Recomendación Final */}
        <SectionCard>
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg p-8 mb-6">
            <h3 className="text-3xl font-bold mb-4 text-center">
              {analisisEscenariosLegales.recomendacion_final.titulo}
            </h3>
            <div className="text-center mb-6">
              <p className="text-2xl font-bold">
                {analisisEscenariosLegales.recomendacion_final.escenario_recomendado}
              </p>
            </div>
            <div className="bg-white/20 rounded-lg p-6">
              <p className="text-lg font-semibold mb-3">Justificación:</p>
              <ul className="space-y-2">
                {analisisEscenariosLegales.recomendacion_final.justificacion.map((just, idx) => (
                  <li key={idx} className="text-lg">{just}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plan de Acción */}
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              {analisisEscenariosLegales.recomendacion_final.plan_accion.titulo}
            </h4>
            <PlanAccion plan={analisisEscenariosLegales.recomendacion_final.plan_accion} />
          </div>

          {/* Timeline Proyectado */}
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              📈 Timeline Proyectado (Modelo Híbrido)
            </h4>
            <TimelineProyectado timeline={analisisEscenariosLegales.recomendacion_final.timeline_proyectado} />
          </div>
        </SectionCard>

        {/* Notas Finales */}
        <SectionCard title="⚠️ Notas Críticas">
          <div className="bg-red-50 rounded-lg border-2 border-red-500 p-6">
            <ul className="space-y-3">
              {analisisEscenariosLegales.notas_finales.map((nota, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-2xl mr-3">{nota.slice(0, 2)}</span>
                  <span className="text-gray-800 font-medium">{nota.slice(3)}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionCard>

        {/* Referencias */}
        <CitasAPA referencias={analisisEscenariosLegales.referencias} />
      </main>
    </div>
  );
}