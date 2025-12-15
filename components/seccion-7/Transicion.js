export default function Transicion({ transicion }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-l-4 border-orange-500">
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        🔄 {transicion.nombre}
      </h3>
      
      <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-500">
        <p className="font-semibold text-green-900">
          ✨ Gatillo: {transicion.gatillo}
        </p>
      </div>

      <h4 className="font-bold text-gray-800 mb-3">Preparativos</h4>
      <div className="space-y-3 mb-4">
        {transicion.preparativos.map((prep, idx) => (
          <div key={idx} className="bg-blue-50 rounded-lg p-4">
            <h5 className="font-semibold text-blue-900">{prep.accion}</h5>
            {prep.tiempo && (
              <p className="text-sm text-blue-700 mt-1">⏰ {prep.tiempo}</p>
            )}
            <p className="text-sm text-blue-800 mt-2">{prep.detalle}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
          <p className="text-sm font-semibold text-red-800 mb-1">⚠️ Riesgo Principal</p>
          <p className="text-red-900">{transicion.riesgo_principal}</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
          <p className="text-sm font-semibold text-green-800 mb-1">🛡️ Mitigación</p>
          <p className="text-green-900">{transicion.mitigacion}</p>
        </div>
      </div>
    </div>
  );
}