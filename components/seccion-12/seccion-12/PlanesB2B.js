export default function PlanesB2B({ planes }) {
  return (
    <div className="space-y-6">
      <div className="bg-orange-50 rounded-lg border-2 border-orange-500 p-4 mb-6">
        <p className="text-orange-900 font-semibold">{planes.nota_importante}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {Object.values(planes).filter(plan => plan.nombre).map((plan, idx) => (
          <div key={idx} className="bg-white rounded-lg border-2 border-gray-300 p-6 shadow-lg">
            {plan.badge && (
              <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                {plan.badge}
              </div>
            )}

            <h4 className="text-2xl font-bold text-gray-800 mb-2">{plan.nombre}</h4>
            <p className="text-sm text-gray-600 mb-4">{plan.subtitulo}</p>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-xs text-gray-600 mb-1">Target</p>
              <p className="text-sm font-semibold text-gray-800">{plan.target_arquetipo}</p>
            </div>

            {/* Perfil Cliente */}
            <div className="bg-blue-50 rounded p-4 mb-4 border-l-4 border-blue-500">
              <p className="text-xs font-semibold text-gray-700 mb-2">Perfil Cliente:</p>
              <p className="text-xs text-gray-600 mb-2">{plan.perfil_cliente.descripcion}</p>
              <p className="text-xs text-gray-500">Ejemplos:</p>
              <ul className="text-xs text-gray-500 space-y-1">
                {plan.perfil_cliente.ejemplos.map((ej, i) => (
                  <li key={i}>• {ej}</li>
                ))}
              </ul>
            </div>

            {/* Métricas */}
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg p-4 mb-4">
              <p className="text-xs opacity-90 mb-2">Métricas Esperadas</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs opacity-80">Volumen Mensual</p>
                  <p className="text-lg font-bold">{plan.metricas_esperadas.volumen_mensual}</p>
                </div>
                <div>
                  <p className="text-xs opacity-80">ARPU Neto Mensual</p>
                  <p className="text-lg font-bold">{plan.metricas_esperadas.arpu_neto_mensual}</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-2 border-green-500">
              <p className="text-xl font-bold text-green-700 mb-2">{plan.pricing.fee_transaccional}</p>
              <p className="text-sm text-green-800">{plan.pricing.cuota_mensual}</p>
              {plan.pricing.modelo_custom && (
                <p className="text-xs text-green-700 mt-2">💡 {plan.pricing.modelo_custom}</p>
              )}
            </div>

            {/* Funcionalidades Exclusivas B2B */}
            <div className="bg-purple-50 rounded p-4 mb-4 border-l-4 border-purple-500">
              <p className="text-xs font-semibold text-purple-900 mb-2">🏢 Exclusivas B2B:</p>
              <ul className="space-y-1 text-xs text-purple-800">
                {plan.funcionalidades_exclusivas_b2b?.slice(0, 6).map((func, i) => (
                  <li key={i}>{func}</li>
                )) || plan.funcionalidades_exclusivas_enterprise?.slice(0, 6).map((func, i) => (
                  <li key={i}>{func}</li>
                ))}
              </ul>
            </div>

            {/* LTV */}
            <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-500">
              <p className="text-xs font-semibold text-yellow-900">LTV Estimado</p>
              <p className="text-2xl font-bold text-yellow-700">{plan.ltv_estimado.rango}</p>
              <p className="text-xs text-yellow-800 mt-1">Vida útil: {plan.ltv_estimado.vida_util_promedio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}