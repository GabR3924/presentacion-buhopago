import Link from 'next/link';
import SectionCard from '@/components/common/SectionCard';
import CitasAPA from '@/components/common/CitasAPA';
import ClasificacionRegulatoria from '@/components/seccion-4/ClasificacionRegulatoria';
import TablaSupervision from '@/components/seccion-4/TablaSupervision';
import FlujoTransaccion from '@/components/seccion-4/FlujoTransaccion';
import ZonasRegulatorias from '@/components/seccion-4/ZonasRegulatorias';
import { marcoRegulatorioData } from '@/data/seccion-4/marcoRegulatorio';

export default function Seccion4() {
  const { analisis_marco_regulatorio, modelo_de_negocio, referencias } = marcoRegulatorioData;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/seccion-3" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Sección anterior
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            ⚖️ Sección 4: Marco Regulatorio y Modelo de Negocio
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
        {/* Título Principal */}
        <SectionCard title={analisis_marco_regulatorio.titulo} />

        {/* Base Legal Principal */}
        <SectionCard title={analisis_marco_regulatorio.base_legal_principal.titulo}>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Objeto:</p>
              <p className="text-gray-700">{analisis_marco_regulatorio.base_legal_principal.objeto}</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Ámbito de Aplicación:</p>
              <p className="text-gray-700">{analisis_marco_regulatorio.base_legal_principal.ambito_aplicacion}</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-sm font-semibold text-yellow-800 mb-1">🔑 Conclusión Clave:</p>
              <p className="text-yellow-900">{analisis_marco_regulatorio.base_legal_principal.conclusion_clave}</p>
            </div>
          </div>
        </SectionCard>

        {/* Clasificación por Actividad */}
        <SectionCard title={analisis_marco_regulatorio.clasificacion_por_actividad.titulo}>
          <p className="text-gray-600 mb-6">{analisis_marco_regulatorio.clasificacion_por_actividad.descripcion}</p>
          <ClasificacionRegulatoria categorias={analisis_marco_regulatorio.clasificacion_por_actividad.categorias} />
        </SectionCard>

        {/* Requisitos y Supervisión */}
        <SectionCard title={analisis_marco_regulatorio.requisitos_clave_supervision.titulo}>
          <p className="text-gray-600 mb-6">{analisis_marco_regulatorio.requisitos_clave_supervision.descripcion}</p>
          <TablaSupervision entidades={analisis_marco_regulatorio.requisitos_clave_supervision.entidades} />
        </SectionCard>

        {/* Modelo de Negocio */}
        <SectionCard title={modelo_de_negocio.titulo}>
          <p className="text-gray-600 mb-6">{modelo_de_negocio.descripcion}</p>

          {/* Vías de Acceso */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{modelo_de_negocio.funcionamiento.vias_acceso.titulo}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {modelo_de_negocio.funcionamiento.vias_acceso.opciones.map((opcion, idx) => (
                <div key={idx} className="bg-primary-50 rounded-lg p-6 border-2 border-primary-300">
                  <h4 className="font-bold text-primary-800 mb-2">👥 {opcion.publico}</h4>
                  <p className="text-gray-700">{opcion.solucion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Público Objetivo */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 mb-6">
            <p className="text-sm font-semibold text-blue-800 mb-1">🎯 Público Objetivo:</p>
            <p className="text-blue-900">{modelo_de_negocio.funcionamiento.publico_objetivo}</p>
          </div>
        </SectionCard>

        {/* Flujo de Transacción */}
        <FlujoTransaccion 
          pasos={modelo_de_negocio.funcionamiento.proceso_transaccion.pasos}
          descripcion={modelo_de_negocio.funcionamiento.proceso_transaccion.descripcion}
        />

        {/* Posicionamiento Regulatorio */}
        <SectionCard title={modelo_de_negocio.posicionamiento_regulatorio.titulo}>
          <ZonasRegulatorias zonas={modelo_de_negocio.posicionamiento_regulatorio.zonas} />
        </SectionCard>

        {/* Referencias */}
        <CitasAPA referencias={referencias} />
      </main>
    </div>
  );
}