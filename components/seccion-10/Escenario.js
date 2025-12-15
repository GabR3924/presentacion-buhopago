export default function Escenario({ escenario, color = 'blue' }) {
  const colorClasses = {
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-900', badge: 'bg-yellow-500' },
    green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-900', badge: 'bg-green-500' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-900', badge: 'bg-blue-500' }
  };

  const colors = colorClasses[color];

  return (
    <div className={`${colors.bg} rounded-lg border-2 ${colors.border} p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>{escenario.nombre}</h3>
          <p className="text-gray-700">{escenario.descripcion}</p>
        </div>
        <span className={`${colors.badge} text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap`}>
          {escenario.viabilidad}
        </span>
      </div>

      {/* Modelos (Escenario A) */}
      {escenario.modelos && (
        <div className="space-y-6 mt-6">
          {escenario.modelos.map((modelo, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-800 mb-3">{modelo.nombre}</h4>
              <p className="text-gray-700 mb-4">{modelo.concepto}</p>

              {modelo.como_funciona && (
                <div className="mb-4">
                  <p className="font-semibold text-gray-800 mb-2">Cómo Funciona:</p>
                  <ul className="space-y-1">
                    {modelo.como_funciona.map((paso, pIdx) => (
                      <li key={pIdx} className="text-sm text-gray-700">• {paso}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {modelo.servicios_si && (
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 mb-2">Servicios que SÍ puedes ofrecer:</p>
                    <ul className="space-y-1">
                      {modelo.servicios_si.map((serv, sIdx) => (
                        <li key={sIdx} className="text-sm text-green-800">{serv}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {modelo.servicios_no && (
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                    <p className="font-semibold text-red-900 mb-2">Servicios que NO puedes ofrecer:</p>
                    <ul className="space-y-1">
                      {modelo.servicios_no.map((serv, sIdx) => (
                        <li key={sIdx} className="text-sm text-red-800">{serv}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {modelo.pricing && (
                <div className="bg-purple-50 rounded p-3 mb-4">
                  <p className="text-sm"><strong>Pricing:</strong> {modelo.pricing}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-green-700 mb-2">✅ Ventajas:</p>
                  <ul className="space-y-1">
                    {modelo.ventajas.map((vent, vIdx) => (
                      <li key={vIdx} className="text-xs text-green-700">{vent}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-700 mb-2">❌ Desventajas:</p>
                  <ul className="space-y-1">
                    {modelo.desventajas.map((desv, dIdx) => (
                      <li key={dIdx} className="text-xs text-red-700">{desv}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-gray-100 rounded p-3">
                <p className="text-sm font-bold text-gray-800">
                  Viabilidad: {modelo.viabilidad}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Servicios Completos (Escenario B) */}
      {escenario.servicios_completos && (
        <div className="bg-white rounded-lg p-6 mb-6">
          <h4 className="font-bold text-gray-800 mb-3">Servicios que puedes ofrecer:</h4>
          <ul className="space-y-2">
            {escenario.servicios_completos.map((serv, idx) => (
              <li key={idx} className="text-gray-700">{serv}</li>
            ))}
          </ul>
        </div>
      )}

      {escenario.conclusion && (
        <div className="bg-white rounded-lg p-4 mt-6 border-l-4 border-gray-500">
          <p className="text-gray-800 font-semibold">{escenario.conclusion}</p>
        </div>
      )}
    </div>
  );
}