export default function ServiciosFase1({ fase1 }) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg p-8">
        <h3 className="text-3xl font-bold mb-2">{fase1.titulo}</h3>
        <p className="text-xl opacity-90 mb-3">{fase1.subtitulo}</p>
        <span className="px-4 py-2 bg-white text-green-700 rounded-full font-bold">
          {fase1.estado}
        </span>
      </div>

      {/* Modelo Operativo */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">
          {fase1.modelo_operativo.titulo}
        </h4>
        <p className="text-gray-700 mb-6">{fase1.modelo_operativo.descripcion}</p>

        <div className="space-y-4 mb-6">
          {fase1.modelo_operativo.flujo_funcionamiento.map((paso, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h5 className="font-bold text-blue-900 mb-2">{paso.paso}</h5>
              <p className="text-blue-800 text-sm">{paso.detalle}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-100 rounded-lg p-6 border-2 border-green-500 text-center">
          <p className="text-lg font-bold text-green-900">
            {fase1.modelo_operativo.aclaracion_importante}
          </p>
        </div>
      </div>

      {/* Servicios por Categoría */}
      <div className="space-y-6">
        {Object.values(fase1.servicios_incluidos).filter(cat => cat.servicios).map((categoria, catIdx) => (
          <div key={catIdx} className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">{categoria.nombre}</h4>
            
            <div className="space-y-6">
              {categoria.servicios.map((servicio, servIdx) => (
                <div key={servIdx} className="border-l-4 border-primary-500 pl-6 py-4">
                  <div className="flex items-start justify-between mb-3">
                    <h5 className="text-xl font-bold text-gray-800">{servicio.servicio}</h5>
                    {servicio.badge && (
                      <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
                        {servicio.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 mb-4">{servicio.descripcion}</p>

                  {servicio.caracteristicas && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Características:</p>
                      <ul className="space-y-1">
                        {servicio.caracteristicas.map((car, carIdx) => (
                          <li key={carIdx} className="text-sm text-gray-700">• {car}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {servicio.como_funciona && (
                    <div className="bg-blue-50 rounded-lg p-4 mt-4">
                      <p className="text-sm font-semibold text-blue-900 mb-2">Cómo Funciona:</p>
                      <ol className="space-y-2">
                        {servicio.como_funciona.map((paso, pIdx) => (
                          <li key={pIdx} className="text-sm text-blue-800">{paso}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {servicio.ventaja_competitiva && (
                    <div className="bg-yellow-50 rounded-lg p-4 mt-4 border-l-4 border-yellow-500">
                      <p className="text-sm font-semibold text-yellow-900 mb-1">💡 Ventaja Competitiva:</p>
                      <p className="text-sm text-yellow-800">{servicio.ventaja_competitiva}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}