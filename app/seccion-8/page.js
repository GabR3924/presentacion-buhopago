import Link from 'next/link';
import SectionCard from '@/components/common/SectionCard';
import CitasAPA from '@/components/common/CitasAPA';
import ActoresCompetitivos from '@/components/seccion-8/ActoresCompetitivos';
import ParticipacionMercado from '@/components/seccion-8/ParticipacionMercado';
import ComparativaFeatures from '@/components/seccion-8/ComparativaFeatures';
import EstrategiasAdquisicion from '@/components/seccion-8/EstrategiasAdquisicion';
import FuncionaNoFunciona from '@/components/seccion-8/FuncionaNoFunciona';
import EspacioLibre from '@/components/seccion-8/EspacioLibre';
import { estudiosCompetenciaMercadoData } from '@/data/seccion-8/competenciaMercado';

export default function Seccion8() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/seccion-7" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Sección anterior
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            🥊 Sección 8: Análisis de Competencia
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
        {/* Título e Introducción */}
        <SectionCard>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {estudiosCompetenciaMercadoData.titulo}
          </h2>
          <h3 className="text-xl font-semibold text-primary-700 mb-3">
            {estudiosCompetenciaMercadoData.introduccion.subtitulo}
          </h3>
        </SectionCard>

        <SectionCard title="🎯 Propósito y Objetivo">
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-900 mb-1">Propósito</p>
              <p className="text-blue-800">{estudiosCompetenciaMercadoData.introduccion.proposito}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="font-semibold text-green-900 mb-1">Objetivo</p>
              <p className="text-green-800">{estudiosCompetenciaMercadoData.introduccion.objetivo}</p>
            </div>
          </div>
        </SectionCard>

        {/* Panorama Competitivo */}
        <SectionCard title={estudiosCompetenciaMercadoData.panorama_competitivo.titulo}>
          <p className="text-gray-700 mb-6">{estudiosCompetenciaMercadoData.panorama_competitivo.descripcion}</p>
          <ActoresCompetitivos actores={estudiosCompetenciaMercadoData.panorama_competitivo.actores} />
        </SectionCard>

        {/* Participación de Mercado */}
        <SectionCard title={estudiosCompetenciaMercadoData.participacion_mercado.titulo}>
          <ParticipacionMercado data={estudiosCompetenciaMercadoData.participacion_mercado} />
        </SectionCard>

        {/* Comparativa de Features */}
        <SectionCard title={estudiosCompetenciaMercadoData.comparativa_features.titulo}>
          <ComparativaFeatures comparativa={estudiosCompetenciaMercadoData.comparativa_features} />
        </SectionCard>

        {/* Estrategias de Adquisición */}
        <SectionCard title={estudiosCompetenciaMercadoData.estrategias_adquisicion.titulo}>
          <EstrategiasAdquisicion estrategias={estudiosCompetenciaMercadoData.estrategias_adquisicion} />
        </SectionCard>

        {/* Qué Funciona y Qué No */}
        <SectionCard title={estudiosCompetenciaMercadoData.funciona_no_funciona.titulo}>
          <FuncionaNoFunciona segmentos={estudiosCompetenciaMercadoData.funciona_no_funciona.segmentos} />
        </SectionCard>

        {/* Espacio Libre */}
        <SectionCard>
          <EspacioLibre espacio={estudiosCompetenciaMercadoData.espacio_libre} />
        </SectionCard>

        {/* Cierre Estratégico */}
        <SectionCard title={estudiosCompetenciaMercadoData.cierre_estrategico.titulo}>
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-6 text-center">
            <p className="text-xl font-bold">
              {estudiosCompetenciaMercadoData.cierre_estrategico.conclusion}
            </p>
          </div>
        </SectionCard>

        {/* Referencias */}
        <CitasAPA referencias={estudiosCompetenciaMercadoData.referencias} />
      </main>
    </div>
  );
}