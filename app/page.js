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
