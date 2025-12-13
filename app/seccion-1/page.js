import Link from 'next/link';
import ContextoProblema from '@/components/seccion-1/ContextoProblema';
import FlujoActual from '@/components/seccion-1/FlujoActual';
import Painpoints from '@/components/seccion-1/Painpoints';
import Posicionamiento from '@/components/seccion-1/Posicionamiento';
import { contextoProblemaData } from '@/data/seccion-1/contextoProblema';
import CitasAPA from '@/components/common/CitasAPA';
export default function Seccion1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-primary-600 hover:text-primary-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Volver al inicio
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            📊 Sección 1: Contexto del Problema
          </h1>
          <Link href="/seccion-2" className="text-primary-600 hover:text-primary-700 flex items-center">
            Siguiente sección
            <svg className="w-6 h-6 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <ContextoProblema data={contextoProblemaData} />
        <FlujoActual data={contextoProblemaData} />
        <Painpoints data={contextoProblemaData} />
        <Posicionamiento data={contextoProblemaData} />
      </main>
      <CitasAPA referencias={contextoProblemaData.referencias} />
    </div>
  );
}
