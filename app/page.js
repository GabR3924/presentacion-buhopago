"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-primary-600">
            🦉 BuhoPago - Presentación
          </h1>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Sección 1 - Contexto del Problema */}
          <Link href="/seccion-1">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">📊</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 1: Contexto del Problema
              </h2>
              <p className="text-gray-600 mb-4">
                Análisis del mercado actual de pagos en Venezuela, flujos
                existentes, painpoints y posicionamiento de BuhoPago.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                  Contexto
                </span>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                  Flujo Actual
                </span>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                  Painpoints
                </span>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                  Posicionamiento
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Sección 2 - Modelo Económico */}
          <Link href="/seccion-2">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">💰</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 2: Modelo Económico
              </h2>
              <p className="text-gray-600 mb-4">
                Modelo económico dinámico con variables macroeconómicas,
                distribución sectorial, mercado objetivo, comisiones y unit
                economics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Variables Macro
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Mercado Objetivo
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Comisiones
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Unit Economics
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Sección 3 - Análisis de Mercado */}
          <Link href="/seccion-3">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 3: Análisis de Mercado
              </h2>
              <p className="text-gray-600 mb-4">
                Análisis completo del TAM, SAM y SOM del mercado venezolano con
                proyecciones y escenarios de captura de mercado.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  TAM/SAM/SOM
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Composición PIB
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Escenarios
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Proyecciones
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Sección 4 - Marco Regulatorio */}
          <Link href="/seccion-4">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">⚖️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 4: Marco Regulatorio
              </h2>
              <p className="text-gray-600 mb-4">
                Análisis completo del marco regulatorio venezolano para
                plataformas de pagos y modelo de negocio con estrategia de
                cumplimiento normativo.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  SUDEBAN
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  Clasificación
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  Modelo Negocio
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  Estrategia
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Sección 5 - Modelo de Negocio */}
          <Link href="/seccion-5">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 5: Modelo de Negocio
              </h2>
              <p className="text-gray-600 mb-4">
                Estrategia de implementación por fases: desde MVP validador
                hasta plataforma B2B regulada, con modelo de ingresos y gestión
                de riesgos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Fase 1: MVP
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Fase 2: B2B
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Fase 3: Futuro
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                  Riesgos
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Sección 6 - Estrategia de Mercado */}
          <Link href="/seccion-6">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">📈</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 6: Estrategia de Mercado
              </h2>
              <p className="text-gray-600 mb-4">
                Plan de ataque basado en datos reales: segmentación,
                competencia, pricing, growth loop y proyecciones de inversión
                con ROI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  Segmentación
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  Competencia
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  Pricing
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  Growth Loop
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Sección 7 - Plan de Evolución */}
          <Link href="/seccion-7">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">🔮</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 7: Plan de Evolución
              </h2>
              <p className="text-gray-600 mb-4">
                Roadmap de evolución desde herramienta simple hasta plataforma
                financiera integral: 3 etapas, transiciones, pilares
                estratégicos y escenarios.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                  3 Etapas
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                  Transiciones
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                  Habilitadores
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                  Escenarios
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Sección 8 - Análisis de Competencia */}
          <Link href="/seccion-8">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">🥊</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 8: Análisis de Competencia
              </h2>
              <p className="text-gray-600 mb-4">
                Estudio completo del panorama competitivo: actores del mercado,
                estrategias de adquisición, qué funciona/no funciona por
                segmento y espacio libre.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  Competidores
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  Features
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  Segmentos
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  Oportunidad
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>
          {/* Sección 9 - Unit Economics */}
          <Link href="/seccion-9">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">💰</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 9: Unit Economics
              </h2>
              <p className="text-gray-600 mb-4">
                Métricas financieras clave: Unit Economics, CAC, LTV, ratio
                LTV:CAC (47:1), presupuesto de marketing optimizado y próximos
                pasos críticos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  Unit Economics
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  LTV: $2,347
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  CAC: $50
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  Ratio 47:1
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>
          {/* Sección 10 - Escenarios Legales */}
          <Link href="/seccion-10">
            <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-6xl mb-4">⚖️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Sección 10: Escenarios Legales
              </h2>
              <p className="text-gray-600 mb-4">
                Análisis exhaustivo de viabilidad legal según Resolución 001.21
                SUDEBAN: 3 escenarios operativos, requisitos de licencia ITFB,
                costos, riesgos y estrategia híbrida recomendada.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  Resolución 001.21
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  Licencia ITFB
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  3 Escenarios
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  Modelo Híbrido
                </span>
              </div>
              <div className="flex items-center text-primary-600 font-semibold">
                Ver sección
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>
          {/* Sección 11 - Brochure de Servicios */}
<Link href="/seccion-11">
  <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-500">
    <div className="text-6xl mb-4">📱</div>
    <h2 className="text-2xl font-bold text-gray-800 mb-3">
      Sección 11: Brochure de Servicios
    </h2>
    <p className="text-gray-600 mb-4">
      Catálogo completo de servicios BuhoPago: Fase 1 (disponible ahora), Fase 2 (roadmap),
      planes, pricing, casos de uso, comparativas y FAQ.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
        2 Fases
      </span>
      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
        4 Planes
      </span>
      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
        Casos de Uso
      </span>
      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
        Roadmap
      </span>
    </div>
    <div className="flex items-center text-primary-600 font-semibold">
      Ver sección
      <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
  </div>
</Link>
        </div>

        {/* Indicador de más secciones */}
        <div className="max-w-6xl mx-auto mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600 text-lg">
              📌{" "}
              <span className="font-semibold">
                Estructura modular lista para expansión.
              </span>
              <br />
              Puedes agregar más secciones fácilmente siguiendo la misma
              estructura.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>🦉 BuhoPago - Sistema de Presentación Modular</p>
        </div>
      </footer>
    </div>
  );
}
