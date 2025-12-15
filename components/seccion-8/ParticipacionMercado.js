export default function ParticipacionMercado({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
        <p className="font-bold text-blue-900">
          🎯 Hallazgo Principal: {data.hallazgo_principal}
        </p>
      </div>

      <h4 className="font-bold text-gray-800 mb-4">Distribución Actual del Mercado</h4>
      <div className="space-y-3 mb-6">
        {data.distribucion.map((item, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-semibold text-gray-800">{item.actor}</h5>
                <p className="text-sm text-gray-600">{item.caracteristica}</p>
              </div>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold">
                {item.participacion}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 rounded-lg p-4 border-2 border-green-500">
        <p className="font-bold text-green-900 text-center">
          ✨ {data.conclusion}
        </p>
      </div>
    </div>
  );
}