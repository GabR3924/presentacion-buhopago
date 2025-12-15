export default function CasosUso({ casos }) {
  return (
    <div className="space-y-6">
      {casos.casos.map((caso, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-start mb-4">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-3xl">👤</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">{caso.persona}</h4>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {caso.plan}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-xs font-semibold text-red-800 mb-1">❌ Antes:</p>
              <p className="text-sm text-red-700">{caso.situacion_antes}</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-xs font-semibold text-green-800 mb-1">✅ Con BuhoPago:</p>
              <p className="text-sm text-green-700">{caso.con_buhopago}</p>
              {caso.detalle_validacion && (
                <p className="text-sm text-green-700 mt-2 italic">{caso.detalle_validacion}</p>
              )}
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-xs font-semibold text-blue-800 mb-1">📈 Resultado:</p>
              <p className="text-sm text-blue-700 font-medium">{caso.resultado}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}