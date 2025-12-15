import Link from 'next/link';
import SectionCard from '@/components/common/SectionCard';
import CitasAPA from '@/components/common/CitasAPA';
import DetalleEtapa from '@/components/seccion-7/DetalleEtapa';
import Transicion from '@/components/seccion-7/Transicion';
import PilaresEstrategicos from '@/components/seccion-7/PilaresEstrategicos';
import Habilitadores from '@/components/seccion-7/Habilitadores';
import Escenarios from '@/components/seccion-7/Escenarios';
import ResumenEjecutivo from '@/components/seccion-7/ResumenEjecutivo';
import { planEvolucionNegocioData } from '@/data/seccion-7/planEvolucion';

export default function Seccion7() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/seccion-6" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Sección anterior
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            🔮 Sección 7: Plan de Evolución
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{planEvolucionNegocioData.titulo}</h2>
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg p-6 text-white">
            <p className="text-lg">
              <strong>🎯 Visión:</strong> {planEvolucionNegocioData.vision}
            </p>
          </div>
        </SectionCard>

        {/* Resumen Ejecutivo Visual */}
        <SectionCard title="📊 Resumen Ejecutivo - Vista Rápida">
          <ResumenEjecutivo resumen={planEvolucionNegocioData.resumen_ejecutivo} />
        </SectionCard>

        {/* Etapas de Evolución */}
        <SectionCard title="🗺️ Etapas de Evolución">
          <DetalleEtapa 
            etapa={planEvolucionNegocioData.etapas.etapa_1}
            numero={1}
            color="green"
          />
          
          <DetalleEtapa 
            etapa={planEvolucionNegocioData.etapas.etapa_2}
            numero={2}
            color="blue"
          />
          
          <DetalleEtapa 
            etapa={planEvolucionNegocioData.etapas.etapa_3}
            numero={3}
            color="purple"
          />
        </SectionCard>

        {/* Transiciones */}
        <SectionCard title="🔄 Transiciones Clave entre Etapas">
          <Transicion transicion={planEvolucionNegocioData.transiciones.transicion_1_2} />
          <Transicion transicion={planEvolucionNegocioData.transiciones.transicion_2_3} />
        </SectionCard>

        {/* Pilares Estratégicos */}
        <SectionCard title="🏛️ Pilares Estratégicos (Constantes en todas las etapas)">
          <PilaresEstrategicos pilares={planEvolucionNegocioData.pilares_estrategicos} />
        </SectionCard>

        {/* Habilitadores */}
        <SectionCard title="💼 Requisitos Habilitantes por Etapa">
          <Habilitadores habilitadores={planEvolucionNegocioData.habilitadores} />
        </SectionCard>

        {/* Escenarios */}
        <SectionCard title="🎲 Escenarios Alternativos (Plan A, B, C)">
          <Escenarios escenarios={planEvolucionNegocioData.escenarios} />
        </SectionCard>

        {/* Referencias */}
        <CitasAPA referencias={planEvolucionNegocioData.referencias} />
      </main>
    </div>
  );
}