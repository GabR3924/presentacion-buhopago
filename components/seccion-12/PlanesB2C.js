export default function PlanesB2C({ planes }) {
  const getPlanColor = (planName) => {
    if (planName === 'GROWTH') return 'border-yellow-500 bg-yellow-50';
    return 'border-blue-500 bg-blue-50';
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg border-2 border-blue-500 p-4 mb-6">
        <p className="text-blue-900 font-semibold">{planes.nota_importante}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {Object.values(planes).filter(plan => plan.nombre).map((plan, idx) => (
          <div key={idx} className={`rounded-lg border-2 ${getPlanColor(plan.nombre)} p-6 shadow-lg ${plan.destacado ? 'ring-4 ring-yellow-400' : ''}`}>
            {plan.badge && (
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                {plan.badge}
              </div>
            )}

            <h4 className="text-2xl font-bold text-gray-800 mb-2">{plan.nombre}</h4>
            <p className="text-sm text-gray-600 mb-4">{plan.subtitulo}</p>

            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-xs text-gray-600 mb-1">Target Arquetipo</p>
              <p className="text-sm font-semibold text-gray-800">{plan.target_arquetipo}</p>
            </div>

            {/* Perfil Cliente */}
            <div className="bg-white rounded p-4 mb-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Perfil Cliente:</p>
              <p className="text-xs text-gray-600 mb-2">{plan.perfil_cliente.descripcion}</p>
              <p className="text-xs text-gray-500">Ejemplos:</p>
              <ul className="text-xs text-gray-500 space-y-1">
                {plan.perfil_cliente.ejemplos.slice(0, 2).map((ej, i) => (
                  <li key={i}>• {ej}</li>
                ))}
              </ul>
            </div>

            {/* Métricas */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-lg p-4 mb-4">
              <p className="text-xs opacity-90 mb-2">Métricas Esperadas</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="opacity-80">Transacciones/mes</p>
                  <p className="font-bold">{plan.metricas_esperadas.transacciones_mes}</p>
                </div>
                <div>
                  <p className="opacity-80">Ticket Promedio</p>
                  <p className="font-bold">{plan.metricas_esperadas.ticket_promedio}</p>
                </div>
                <div>
                  <p className="opacity-80">Volumen Mensual</p>
                  <p className="font-bold">{plan.metricas_esperadas.volumen_mensual}</p>
                </div>
                <div>
                  <p className="opacity-80">ARPU Neto</p>
                  <p className="font-bold">{plan.metricas_esperadas.arpu_neto_mensual}</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-500">
              <p className="text-2xl font-bold text-green-700 mb-2">{plan.pricing.fee_transaccional}</p>
              <p className="text-xs text-green-800">Cuota mensual: {plan.pricing.cuota_mensual}</p>
            </div>

            {/* Funcionalidades */}
            <div className="bg-white rounded p-4 mb-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Funcionalidades:</p>
              <ul className="space-y-1 text-xs">
                {plan.funcionalidades.slice(0, 8).map((func, i) => (
                  <li key={i} className={func.includes('❌') ? 'text-red-600' : 'text-gray-700'}>
                    {func}
                  </li>
                ))}
              </ul>
            </div>

            {/* LTV */}
            <div className="bg-purple-50 rounded p-3 border-l-4 border-purple-500">
              <p className="text-xs font-semibold text-purple-900">LTV Estimado</p>
              <p className="text-xl font-bold text-purple-700">{plan.ltv_estimado.rango}</p>
              <p className="text-xs text-purple-800">Vida útil: {plan.ltv_estimado.vida_util_promedio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}