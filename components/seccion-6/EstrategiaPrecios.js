export default function EstrategiaPrecios({ estrategia, fase }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h4 className="text-xl font-bold text-gray-800 mb-2">
        💰 Pricing - {fase}
      </h4>
      <p className="text-gray-600 mb-4"><strong>Modelo:</strong> {estrategia.modelo}</p>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {estrategia.planes.map((plan, idx) => (
          <div 
            key={idx}
            className={`rounded-lg border-2 p-6 ${
              plan.nombre === 'Pro' || plan.nombre === 'Business'
                ? 'border-primary-500 bg-primary-50 transform scale-105'
                : 'border-gray-300 bg-white'
            }`}
          >
            <h5 className="text-xl font-bold text-gray-800 mb-2">{plan.nombre}</h5>
            
            {plan.precio && (
              <p className="text-3xl font-bold text-primary-600 mb-3">{plan.precio}</p>
            )}
            {!plan.precio && plan.nombre === 'Gratis' && (
              <p className="text-3xl font-bold text-green-600 mb-3">Gratis</p>
            )}
            {plan.precio === 'Custom' && (
              <p className="text-2xl font-bold text-purple-600 mb-3">A medida</p>
            )}

            {plan.limite && (
              <p className="text-sm text-gray-600 mb-3">{plan.limite}</p>
            )}
            {plan.limites && (
              <p className="text-sm text-gray-600 mb-3">{plan.limites}</p>
            )}

            {plan.caracteristicas && (
              <ul className="space-y-2 mb-4">
                {plan.caracteristicas.map((car, carIdx) => (
                  <li key={carIdx} className="flex items-start text-sm">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">{car}</span>
                  </li>
                ))}
              </ul>
            )}

            {plan.caracteristica_viral && (
              <div className="bg-yellow-50 rounded p-3 mb-3">
                <p className="text-xs text-yellow-800">
                  🚀 Viral: {plan.caracteristica_viral}
                </p>
              </div>
            )}

            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                <strong>Objetivo:</strong> {plan.objetivo}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
        <p className="text-sm font-semibold text-blue-900">
          💡 Lógica: {estrategia.logica}
        </p>
      </div>
    </div>
  );
}