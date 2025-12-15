export default function EstrategiasAdquisicion({ estrategias }) {
  return (
    <div>
      <div className="space-y-4 mb-6">
        {estrategias.estrategias_observadas.map((est, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <h4 className="text-lg font-bold text-gray-800 mb-3">{est.tipo}</h4>
            
            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-600 mb-2">Acciones:</p>
              <ul className="space-y-1">
                {est.acciones.map((accion, aIdx) => (
                  <li key={aIdx} className="text-gray-700 text-sm">• {accion}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded p-3">
              <p className="text-sm">
                <strong className="text-gray-700">Resultado:</strong> 
                <span className="text-gray-600 ml-2">{est.resultado}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-red-50 rounded-lg p-6 border-2 border-red-500 mb-4">
        <h4 className="font-bold text-red-900 mb-3">⚠️ Resultado General del Mercado</h4>
        <ul className="space-y-2 mb-4">
          {estrategias.resultado_general.conclusiones.map((con, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-red-600 mr-2">✗</span>
              <span className="text-red-800">{con}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
        <p className="font-bold text-blue-900">
          💡 Insight Final: {estrategias.resultado_general.insight_final}
        </p>
      </div>
    </div>
  );
}