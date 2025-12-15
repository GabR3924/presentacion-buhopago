export default function CuentaConcentradora({ cuenta }) {
  return (
    <div className="space-y-6">
      {/* Problema Legal */}
      <div className="bg-red-50 rounded-lg border-2 border-red-500 p-6">
        <h4 className="text-xl font-bold text-red-900 mb-4">
          ⚖️ Problema Legal: {cuenta.problema_legal.clasificacion}
        </h4>
        
        <div className="mb-4">
          <p className="text-sm font-semibold text-red-800 mb-2">Artículos Aplicables:</p>
          <ul className="space-y-1">
            {cuenta.problema_legal.articulos_aplicables.map((art, idx) => (
              <li key={idx} className="text-sm text-red-700">• {art}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-800 mb-2">¿Por qué requiere licencia?</p>
          <ul className="space-y-2">
            {cuenta.problema_legal.por_que_requiere_licencia.map((razon, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-red-600 mr-2">⚠️</span>
                <span className="text-gray-700 text-sm">{razon}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Riesgos Operacionales */}
      <div className="bg-orange-50 rounded-lg border-2 border-orange-500 p-6">
        <h4 className="text-xl font-bold text-orange-900 mb-4">
          {cuenta.riesgos_operacionales.titulo}
        </h4>
        
        <div className="space-y-4">
          {cuenta.riesgos_operacionales.riesgos.map((riesgo, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
              <h5 className="font-bold text-orange-900 mb-2">{riesgo.riesgo}</h5>
              <p className="text-sm text-orange-800 mb-2">{riesgo.descripcion}</p>
              <div className="bg-orange-100 rounded p-3">
                <p className="text-xs font-semibold text-orange-900">Implicación:</p>
                <p className="text-sm text-orange-800">{riesgo.implicacion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}