export default function ComparativaFeatures({ comparativa }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-xl font-bold text-gray-800 mb-4">{comparativa.diferencias_clave.titulo}</h4>
      
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Dimensión</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Soluciones Existentes</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nuestra Propuesta</th>
            </tr>
          </thead>
          <tbody>
            {comparativa.diferencias_clave.tabla.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 font-semibold text-gray-800">{row.dimension}</td>
                <td className="px-4 py-3 text-gray-600">
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm">
                    ✗ {row.soluciones_existentes}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                    ✓ {row.propuesta_solucion}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
        <h5 className="font-bold text-purple-900 mb-3">{comparativa.politica_precios.titulo}</h5>
        <div className="mb-3">
          <p className="text-sm font-semibold text-purple-800 mb-2">Observaciones del mercado:</p>
          <ul className="space-y-1">
            {comparativa.politica_precios.observaciones.map((obs, idx) => (
              <li key={idx} className="text-sm text-purple-700">• {obs}</li>
            ))}
          </ul>
        </div>
        <p className="font-semibold text-purple-900">
          💡 {comparativa.politica_precios.conclusion}
        </p>
      </div>
    </div>
  );
}