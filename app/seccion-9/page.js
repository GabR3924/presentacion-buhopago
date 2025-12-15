import Link from "next/link";
import SectionCard from "@/components/common/SectionCard";
import CitasAPA from "@/components/common/CitasAPA";
import UnitEconomics from "@/components/seccion-9/UnitEconomics";
import CAC from "@/components/seccion-9/CAC";
import RelacionLTVCAC from "@/components/seccion-9/RelacionLTVCAC";
import PresupuestoMarketing from "@/components/seccion-9/PresupuestoMarketing";
import Checklist from "@/components/seccion-9/Checklist";
import ProximosPasos from "@/components/seccion-9/ProximosPasos";
import { resumenEjecutivoData } from "@/data/seccion-9/resumenEjecutivo";

export default function Seccion9() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/seccion-8"
            className="text-primary-600 hover:text-primary-700 flex items-center"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Sección anterior
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            💰 Sección 9: Unit Economics
          </h1>
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 flex items-center"
          >
            Volver al inicio
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {/* Título */}
        <SectionCard>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {resumenEjecutivoData.titulo}
          </h2>
        </SectionCard>

        {/* Unit Economics */}
        <SectionCard title={`1. ${resumenEjecutivoData.unit_economics.titulo}`}>
          <p className="text-gray-600 mb-6">
            {resumenEjecutivoData.unit_economics.descripcion}
          </p>
          <UnitEconomics unitEconomics={resumenEjecutivoData.unit_economics} />
        </SectionCard>

        {/* CAC */}
        <SectionCard title={`2. ${resumenEjecutivoData.cac.titulo}`}>
          <p className="text-gray-600 mb-6">
            {resumenEjecutivoData.cac.descripcion}
          </p>
          <CAC cac={resumenEjecutivoData.cac} />
        </SectionCard>

        {/* Relación LTV:CAC */}
        <SectionCard
          title={`3. ${resumenEjecutivoData.relacion_ltv_cac_viabilidad.titulo}`}
        >
          <RelacionLTVCAC
            relacion={resumenEjecutivoData.relacion_ltv_cac_viabilidad}
          />
        </SectionCard>

        {/* Presupuesto de Marketing */}
        <SectionCard
          title={`4. ${resumenEjecutivoData.presupuesto_marketing_optimizado.titulo}`}
        >
          <p className="text-gray-600 mb-6">
            {resumenEjecutivoData.presupuesto_marketing_optimizado.descripcion}
          </p>
          <PresupuestoMarketing
            presupuesto={resumenEjecutivoData.presupuesto_marketing_optimizado}
          />
        </SectionCard>

        {/* Checklist */}
        <SectionCard>
          <Checklist checklist={resumenEjecutivoData.checklist_estado_actual} />
        </SectionCard>

        {/* Próximos Pasos */}
        <SectionCard>
          <ProximosPasos
            proximosPasos={resumenEjecutivoData.proximos_pasos_criticos}
          />
        </SectionCard>

        {/* Referencias */}
        <CitasAPA referencias={resumenEjecutivoData.referencias} />
      </main>
    </div>
  );
}
