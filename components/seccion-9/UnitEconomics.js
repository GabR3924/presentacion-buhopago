export default function UnitEconomics({ unitEconomics }) {
  return (
    <div className="space-y-6">
      {/* Métricas Principales */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {unitEconomics.metricas.map((metrica, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-300">
            <h5 className="text-sm font-semibold text-blue-900 mb-2">{metrica.nombre}</h5>
            <div className="flex items-baseline mb-2">
              <span className="text-4xl font-bold text-blue-700">
                {metrica.moneda && '$'}{metrica.valor}{metrica.unidad === 'porcentaje' && '%'}
              </span>
              {metrica.moneda && (
                <span className="text-sm text-blue-600 ml-2">{metrica.moneda}</span>
              )}
            </div>
            <p className="text-xs text-blue-800">{metrica.descripcion}</p>
            {metrica.formula && (
              <p className="text-xs text-blue-600 mt-2 font-mono bg-white rounded p-2">
                {metrica.formula}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Supuestos de Proyección */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
        <h4 className="font-bold text-gray-800 mb-4">📐 Supuestos de Proyección</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-purple-900 mb-2">Margen Operativo Final</p>
            <p className="text-3xl font-bold text-purple-700 mb-1">
              ${unitEconomics.supuestos_proyeccion.margen_operativo_final.valor_calculado}
            </p>
            <p className="text-xs text-purple-800">
              {unitEconomics.supuestos_proyeccion.margen_operativo_final.valor}% del ARPU Neto
            </p>
            <p className="text-xs text-purple-700 mt-2">
              {unitEconomics.supuestos_proyeccion.margen_operativo_final.descripcion}
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-orange-900 mb-2">Tasa de Cancelación (Churn)</p>
            <p className="text-3xl font-bold text-orange-700 mb-1">
              {unitEconomics.supuestos_proyeccion.tasa_cancelacion_mensual_churn.valor}%
            </p>
            <p className="text-xs text-orange-800">mensual</p>
          </div>
        </div>
      </div>

      {/* LTV */}
      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg p-6 text-center shadow-xl">
        <p className="text-sm opacity-90 mb-2">{unitEconomics.ltv_lifetime_value.nombre}</p>
        <p className="text-5xl font-bold mb-2">
          ${unitEconomics.ltv_lifetime_value.valor.toLocaleString()}
        </p>
        <p className="text-sm opacity-90 mb-3">{unitEconomics.ltv_lifetime_value.descripcion}</p>
        <p className="text-xs opacity-75 font-mono bg-white/10 rounded p-2 inline-block">
          {unitEconomics.ltv_lifetime_value.formula}
        </p>
      </div>
    </div>
  );
}