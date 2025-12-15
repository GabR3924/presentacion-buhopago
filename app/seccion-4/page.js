import Link from 'next/link';
import SectionCard from '@/components/common/SectionCard';
import CitasAPA from '@/components/common/CitasAPA';
import DefinicionesLegales from '@/components/seccion-4/DefinicionesLegales';
import RequisitosEstructurales from '@/components/seccion-4/RequisitosEstructurales';
import DocumentacionRequerida from '@/components/seccion-4/DocumentacionRequerida';
import Sanciones from '@/components/seccion-4/Sanciones';
import { marcoLegalData } from '@/data/seccion-4/marcoRegulatorio';

export default function Seccion4() {
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
            ⚖️ Sección 4: Marco Legal - Resolución 001.21
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
        <SectionCard>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{marcoLegalData.titulo}</h2>
        </SectionCard>

        {/* Norma Principal */}
        <SectionCard title="📜 Norma Principal">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">Referencia</p>
              <p className="text-lg font-bold text-primary-700">{marcoLegalData.norma_principal.referencia}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">Fuente</p>
              <p className="text-gray-800">{marcoLegalData.norma_principal.fuente}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600 mb-1">Objeto</p>
            <p className="text-gray-700">{marcoLegalData.norma_principal.objeto}</p>
          </div>

          <div className="mt-4 bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
            <p className="text-sm font-semibold text-green-800 mb-1">Estado</p>
            <p className="text-green-900 font-bold">{marcoLegalData.norma_principal.estado}</p>
          </div>
        </SectionCard>

        {/* Definiciones Legales */}
        <SectionCard title="📖 Definiciones Legales Clave">
          <DefinicionesLegales definiciones={marcoLegalData.definiciones_legales} />
        </SectionCard>

        {/* Autorización ITFB */}
        <SectionCard title="🔐 Requisitos de Autorización como ITFB">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-500 mb-6">
            <h3 className="text-xl font-bold text-red-900 mb-2">
              {marcoLegalData.autorizacion_itfb.requisito_absoluto.titulo}
            </h3>
            <p className="text-red-800 mb-3">
              {marcoLegalData.autorizacion_itfb.requisito_absoluto.descripcion}
            </p>
            <div className="bg-red-100 rounded p-4">
              <p className="text-sm font-semibold text-red-900">
                ⚠️ Consecuencia: {marcoLegalData.autorizacion_itfb.requisito_absoluto.consecuencia}
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-4">Requisitos Estructurales</h3>
          <RequisitosEstructurales requisitos={marcoLegalData.autorizacion_itfb.requisitos_estructurales} />
        </SectionCard>

        {/* Documentación Requerida */}
        <SectionCard title={marcoLegalData.autorizacion_itfb.documentacion_solicitud.titulo}>
          <DocumentacionRequerida documentacion={marcoLegalData.autorizacion_itfb.documentacion_solicitud} />
          
          {/* Plazo de Operación */}
          <div className="mt-6 bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-900 mb-2">
              ⏰ {marcoLegalData.autorizacion_itfb.plazo_operacion.titulo}
            </h4>
            <p className="text-yellow-800 mb-2">{marcoLegalData.autorizacion_itfb.plazo_operacion.descripcion}</p>
            <p className="text-sm text-yellow-700">
              <strong>Prórroga:</strong> {marcoLegalData.autorizacion_itfb.plazo_operacion.prorroga}
            </p>
          </div>
        </SectionCard>

        {/* Supervisión y Obligaciones */}
        <SectionCard title="👁️ Supervisión y Obligaciones Post-Autorización">
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 mb-6">
            <p className="font-bold text-blue-900">{marcoLegalData.supervision_obligaciones.nivel_supervision}</p>
          </div>

          <div className="space-y-4">
            {marcoLegalData.supervision_obligaciones.obligaciones_principales.map((obl, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-3">{obl.item}</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">Requerimiento</p>
                    <p className="text-gray-700">{obl.requerimiento}</p>
                  </div>
                  {obl.modelo_minimo && (
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 uppercase">Modelo Mínimo</p>
                      <p className="text-sm text-gray-700">{obl.modelo_minimo}</p>
                    </div>
                  )}
                  {obl.componentes && (
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 uppercase">Componentes</p>
                      <p className="text-sm text-gray-700">{obl.componentes}</p>
                    </div>
                  )}
                  {obl.formato && (
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 uppercase">Formato</p>
                      <p className="text-sm text-gray-700">{obl.formato}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Sanciones */}
        <SectionCard title="⚠️ Sanciones y Prohibiciones">
          <Sanciones sanciones={marcoLegalData.sanciones} />
        </SectionCard>

        {/* Normativa Complementaria */}
        <SectionCard title="📚 Normativa Complementaria">
          <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
            <h4 className="font-bold text-primary-900 mb-2">
              {marcoLegalData.normativa_complementaria.resolucion_010_25.referencia}
            </h4>
            <p className="text-primary-800 mb-3">
              <strong>Objeto:</strong> {marcoLegalData.normativa_complementaria.resolucion_010_25.objeto}
            </p>
            <p className="text-sm text-primary-700">
              <strong>Aplicabilidad:</strong> {marcoLegalData.normativa_complementaria.resolucion_010_25.aplicabilidad}
            </p>
          </div>
        </SectionCard>

        {/* Referencias */}
        <CitasAPA referencias={marcoLegalData.referencias} />
      </main>
    </div>
  );
}