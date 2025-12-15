export default function DetalleEtapa({ etapa, numero, color = "blue" }) {
  const colorClasses = {
    green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-800', badge: 'bg-green-500' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-800', badge: 'bg-blue-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-800', badge: 'bg-purple-500' }
  };

  const colors = colorClasses[color];

  return (
    <div className={`${colors.bg} rounded-lg border-2 ${colors.border} p-6 mb-6`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>{etapa.nombre}</h3>
          <p className="text-lg font-semibold text-gray-700">{etapa.periodo}</p>
          <p className="text-sm italic text-gray-600 mt-1">"{etapa.lema}"</p>
        </div>
        <span className={`${colors.badge} text-white px-4 py-2 rounded-full text-sm font-bold`}>
          Etapa {numero}
        </span>
      </div>

      {/* Estado Regulatorio */}
      <div className="bg-yellow-50 rounded-lg p-4 mb-4 border-l-4 border-yellow-500">
        <p className="text-sm font-semibold text-yellow-900">
          ⚖️ Estado Regulatorio: {etapa.estado_regulatorio}
        </p>
        {etapa.condicion && (
          <p className="text-sm text-yellow-800 mt-1">
            ⚠️ Condición: {etapa.condicion}
          </p>
        )}
      </div>

      {/* Propósito */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <h4 className="font-bold text-gray-800 mb-3">🎯 Propósito</h4>
        <div className="space-y-2">
          <p><strong>Estratégico:</strong> {etapa.proposito.estrategico}</p>
          <p><strong>Comercial:</strong> {etapa.proposito.comercial}</p>
          <p><strong>Legal:</strong> {etapa.proposito.legal}</p>
        </div>
      </div>

      {/* Producto Núcleo */}
      {etapa.producto_nucleo && (
        <div className="bg-white rounded-lg p-4 mb-4">
          <h4 className="font-bold text-gray-800 mb-3">💡 Producto Núcleo</h4>
          <p className="font-semibold text-primary-700 mb-2">{etapa.producto_nucleo.nombre}</p>
          <ul className="space-y-2 mb-3">
            {etapa.producto_nucleo.funcionalidades.map((func, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">{func}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600">
            <strong>Principio:</strong> {etapa.producto_nucleo.principio_diseno}
          </p>
        </div>
      )}

      {/* Evolución de Producto */}
      {etapa.evolucion_producto && (
        <div className="bg-white rounded-lg p-4 mb-4">
          <h4 className="font-bold text-gray-800 mb-3">🔄 Evolución del Producto</h4>
          <div className="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded">
            <div className="text-center flex-1">
              <p className="text-sm text-gray-600 mb-1">Desde</p>
              <p className="font-semibold text-gray-800">{etapa.evolucion_producto.desde}</p>
            </div>
            <svg className="w-8 h-8 text-primary-500 mx-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <div className="text-center flex-1">
              <p className="text-sm text-gray-600 mb-1">Hacia</p>
              <p className="font-semibold text-gray-800">{etapa.evolucion_producto.hacia}</p>
            </div>
          </div>
          <p className="font-semibold text-gray-700 mb-2">Nuevas Funcionalidades:</p>
          <ul className="space-y-2">
            {etapa.evolucion_producto.nuevas_funcionalidades.map((func, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-600 mr-2">+</span>
                <span className="text-gray-700">{func}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Expansión de Producto (Etapa 3) */}
      {etapa.expansion_producto && (
        <div className="bg-white rounded-lg p-4 mb-4">
          <h4 className="font-bold text-gray-800 mb-3">🚀 Expansión del Producto</h4>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Núcleo:</strong> {etapa.expansion_producto.nucleo}
          </p>
          <p className="font-semibold text-gray-700 mb-2">Nuevos Verticales:</p>
          <div className="space-y-3">
            {etapa.expansion_producto.nuevos_verticales.map((vertical, idx) => (
              <div key={idx} className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded">
                <h5 className="font-bold text-purple-900">{vertical.nombre}</h5>
                <p className="text-sm text-purple-800 mb-1">{vertical.servicio}</p>
                <p className="text-xs text-purple-700">
                  💡 Oportunidad: {vertical.oportunidad}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Visión Ecosistema */}
      {etapa.vision_ecosistema && (
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 mb-4 border-2 border-purple-400">
          <h4 className="font-bold text-purple-900 mb-2">🌐 Visión de Ecosistema</h4>
          <p className="text-purple-900 mb-3">{etapa.vision_ecosistema.concepto}</p>
          <p className="text-sm font-semibold text-purple-800 mb-2">Participantes:</p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {etapa.vision_ecosistema.participantes.map((part, idx) => (
              <div key={idx} className="bg-white rounded p-2 text-sm text-purple-800">
                • {part}
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold text-purple-900">
            ✨ Valor: {etapa.vision_ecosistema.valor}
          </p>
        </div>
      )}

      {/* Expansión de Mercado */}
      {etapa.expansion_mercado && (
        <div className="bg-white rounded-lg p-4 mb-4">
          <h4 className="font-bold text-gray-800 mb-3">🎯 Expansión de Mercado</h4>
          <div className="space-y-2">
            <p><strong>Primario:</strong> {etapa.expansion_mercado.segmento_primario}</p>
            <p><strong>Secundario:</strong> {etapa.expansion_mercado.segmento_secundario}</p>
            <p><strong>Tamaño:</strong> {etapa.expansion_mercado.tamano_mercado}</p>
          </div>
        </div>
      )}

      {/* Métricas de Éxito */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <h4 className="font-bold text-gray-800 mb-3">📊 Métricas de Éxito</h4>
        <div className="grid md:grid-cols-2 gap-2">
          {etapa.metricas_exito.map((metrica, idx) => (
            <div key={idx} className="flex items-center bg-gray-50 rounded p-3">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span className="text-gray-700 text-sm">{metrica}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Salida de Etapa */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4">
        <p className="font-bold text-lg">
          🎯 Salida de Etapa: {etapa.salida_etapa}
        </p>
      </div>
    </div>
  );
}