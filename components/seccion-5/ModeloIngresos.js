export default function ModeloIngresos({ modelo }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h4 className="text-xl font-bold text-gray-800 mb-4">
        💰 Modelo de Ingresos: {modelo.tipo}
      </h4>

      {modelo.opciones && (
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {modelo.opciones.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-lg border-2 p-6 ${
                plan.plan === 'Pro' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-300 bg-white'
              }`}
            >
              <h5 className="text-lg font-bold text-gray-800 mb-2">{plan.plan}</h5>
              {plan.precio && (
                <p className="text-3xl font-bold text-primary-600 mb-3">{plan.precio}</p>
              )}
              {!plan.precio && (
                <p className="text-3xl font-bold text-green-600 mb-3">Gratis</p>
              )}
              
              <ul className="space-y-2 mb-4">
                {plan.caracteristicas.map((car, carIdx) => (
                  <li key={carIdx} className="flex items-start text-sm">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">{car}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong>Objetivo:</strong> {plan.objetivo}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {modelo.estructura && (
        <div className="space-y-3">
          {modelo.estructura.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
              <h5 className="font-bold text-gray-800">{item.componente}</h5>
              <p className="text-2xl font-bold text-primary-600 my-2">{item.valor}</p>
              <p className="text-sm text-gray-600">{item.justificacion}</p>
              {item.caracteristicas && (
                <ul className="mt-2 space-y-1">
                  {item.caracteristicas.map((car, carIdx) => (
                    <li key={carIdx} className="text-sm text-gray-700">• {car}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {modelo.proyeccion && (
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-500 mt-4">
              <p className="font-bold text-green-900">
                📊 Proyección: {modelo.proyeccion}
              </p>
            </div>
          )}
        </div>
      )}

      {modelo.metricas_clave && (
        <div className="mt-4 bg-blue-50 rounded-lg p-4">
          <p className="font-semibold text-blue-900 mb-2">📈 Métricas Clave:</p>
          <div className="flex flex-wrap gap-2">
            {modelo.metricas_clave.map((metrica, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">
                {metrica}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}