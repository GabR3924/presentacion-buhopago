export default function EstrategiaHibrida({ estrategia }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Vía 1 */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-500 p-6">
        <h4 className="text-xl font-bold text-green-900 mb-3">{estrategia.via_1.nombre}</h4>
        <p className="text-green-800 mb-4">{estrategia.via_1.objetivo}</p>

        <div className="space-y-4">
          {estrategia.via_1.pasos.map((paso, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
              <h5 className="font-bold text-gray-800 mb-2">{paso.nombre}</h5>
              <p className="text-sm text-gray-700 mb-2">{paso.descripcion}</p>
              {paso.pricing && (
                <p className="text-xs text-gray-600"><strong>Pricing:</strong> {paso.pricing}</p>
              )}
              {paso.timeline && (
                <p className="text-xs text-gray-600"><strong>Timeline:</strong> {paso.timeline}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 bg-green-200 rounded p-4">
          <p className="text-sm font-bold text-green-900">
            Revenue Esperado: {estrategia.via_1.revenue_esperado}
          </p>
        </div>
      </div>

      {/* Vía 2 */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-500 p-6">
        <h4 className="text-xl font-bold text-blue-900 mb-3">{estrategia.via_2.nombre}</h4>
        <p className="text-blue-800 mb-4">{estrategia.via_2.objetivo}</p>

        <div className="space-y-3">
          {estrategia.via_2.pasos.map((paso, idx) => (
            <div key={idx} className="bg-white rounded-lg p-3 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-gray-800 text-sm">{paso.paso}</p>
                  <p className="text-xs text-gray-600">{paso.tiempo}</p>
                </div>
                {paso.costo && (
                  <span className="text-xs font-bold text-blue-700">${paso.costo}</span>
                )}
                {paso.necesidad && (
                  <span className="text-xs font-bold text-blue-700">{paso.necesidad}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}