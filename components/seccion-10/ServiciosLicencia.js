export default function ServiciosLicencia({ servicios }) {
  return (
    <div className="space-y-4">
      {servicios.lista_servicios.map((servicio, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
          <h4 className="text-lg font-bold text-gray-800 mb-3">{servicio.servicio}</h4>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded p-3">
              <p className="text-xs font-semibold text-gray-600 mb-1">Definición SUDEBAN</p>
              <p className="text-sm text-gray-700">{servicio.definicion_sudeban}</p>
            </div>
            
            <div className="bg-gray-50 rounded p-3">
              <p className="text-xs font-semibold text-gray-600 mb-1">Detalle</p>
              <p className="text-sm text-gray-700">{servicio.detalle}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold text-gray-700">Aplica a BuhoPago: </span>
              <span className={`font-bold ${
                servicio.aplica_a_buhopago.includes('SÍ') ? 'text-red-600' : 'text-yellow-600'
              }`}>
                {servicio.aplica_a_buhopago}
              </span>
            </div>
            <div className="px-4 py-2 bg-red-100 text-red-800 rounded-full font-bold text-sm">
              {servicio.implicacion}
            </div>
          </div>
        </div>
      ))}

      <div className="bg-red-100 rounded-lg border-2 border-red-500 p-6">
        <p className="font-bold text-red-900 text-center">
          {servicios.conclusion_critica}
        </p>
      </div>
    </div>
  );
}