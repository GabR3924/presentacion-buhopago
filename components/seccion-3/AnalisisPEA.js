export default function AnalisisPEA({ pea }) {
  return (
    <div className="space-y-6">
      {/* Datos Históricos */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-4">{pea.datos_historicos.titulo}</h4>
        <p className="text-sm text-gray-600 mb-4"><strong>Fuente:</strong> {pea.datos_historicos.fuente}</p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">PEA 2014</p>
            <p className="text-3xl font-bold text-blue-700">{pea.datos_historicos.pea_2014}</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">PEA 2021</p>
            <p className="text-3xl font-bold text-red-700">{pea.datos_historicos.pea_2021}</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Variación</p>
            <p className="text-3xl font-bold text-orange-700">{pea.datos_historicos.variacion}</p>
          </div>
        </div>
        
        <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-500">
          <p className="text-sm text-yellow-900">{pea.datos_historicos.contexto_emigracion}</p>
        </div>
      </div>

      {/* Datos Actuales */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-4">{pea.datos_actuales.titulo}</h4>
        
        <div className="bg-green-50 rounded-lg p-6 border-2 border-green-500 mb-4">
          <p className="text-center text-sm text-gray-600 mb-2">PEA Estimada 2024-2025</p>
          <p className="text-center text-4xl font-bold text-green-700">{pea.datos_actuales.pea_estimada}</p>
          <p className="text-center text-sm text-green-700 mt-2">{pea.datos_actuales.justificacion}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-blue-900 mb-1">Empleo Formal</p>
            <p className="text-2xl font-bold text-blue-700">{pea.datos_actuales.distribucion.empleo_formal}</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
            <p className="text-sm font-semibold text-orange-900 mb-1">Empleo Informal</p>
            <p className="text-2xl font-bold text-orange-700">{pea.datos_actuales.distribucion.empleo_informal}</p>
          </div>
        </div>
      </div>

      {/* PEA Sector Terciario */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-500 p-6">
        <h4 className="text-xl font-bold text-purple-900 mb-4">{pea.pea_sector_terciario.titulo}</h4>
        
        <div className="bg-white rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-600 mb-2"><strong>Fórmula:</strong> {pea.pea_sector_terciario.calculo.formula}</p>
          <p className="text-gray-700 mb-2">
            {pea.pea_sector_terciario.calculo.pea_total} × {pea.pea_sector_terciario.calculo.porcentaje_sector_terciario}
          </p>
          <p className="text-3xl font-bold text-purple-700 text-center mt-3">
            {pea.pea_sector_terciario.calculo.resultado}
          </p>
        </div>

        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <p className="text-sm font-semibold text-orange-900 mb-2">Trabajadores Informales en Sector Terciario</p>
          <p className="text-2xl font-bold text-orange-700 mb-2">
            {pea.pea_sector_terciario.distribucion_informal.trabajadores_informales_terciario}
          </p>
          <p className="text-sm text-orange-800">{pea.pea_sector_terciario.distribucion_informal.nota}</p>
        </div>
      </div>
    </div>
  );
}