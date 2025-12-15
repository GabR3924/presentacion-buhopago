export default function DetalleSegmento({ segmento, fase, color = "blue" }) {
  const colorClasses = {
    green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-800', badge: 'bg-green-500' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-800', badge: 'bg-blue-500' }
  };

  const colors = colorClasses[color];

  return (
    <div className={`${colors.bg} rounded-lg border-2 ${colors.border} p-6 mb-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>{segmento.nombre}</h3>
          <p className="text-lg font-semibold text-gray-700">{segmento.tamano}</p>
          {segmento.filtro_realista && (
            <p className="text-sm text-gray-600 mt-1">Filtro realista: {segmento.filtro_realista}</p>
          )}
        </div>
        <span className={`${colors.badge} text-white px-4 py-2 rounded-full text-sm font-bold`}>
          {fase}
        </span>
      </div>

      <p className="text-gray-700 mb-4">{segmento.descripcion}</p>

      {/* Perfil Típico */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <h4 className="font-bold text-gray-800 mb-3">👤 Perfil Típico</h4>
        <ul className="space-y-2">
          {segmento.perfil_tipico.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Comportamiento de Pago */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <h4 className="font-bold text-gray-800 mb-3">💳 Comportamiento de Pago</h4>
        <div className="space-y-2">
          <p><strong>Principal:</strong> {segmento.comportamiento_pago.metodo_principal || segmento.comportamiento_pago.metodo_actual}</p>
          {segmento.comportamiento_pago.metodo_secundario && (
            <p><strong>Secundario:</strong> {segmento.comportamiento_pago.metodo_secundario}</p>
          )}
          <p><strong>Dolor:</strong> {segmento.comportamiento_pago.dolor_actual || segmento.comportamiento_pago.dolor_critico}</p>
          {segmento.comportamiento_pago.brecha && (
            <p><strong>Brecha:</strong> {segmento.comportamiento_pago.brecha}</p>
          )}
        </div>
      </div>

      {/* Propuesta de Valor */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4 mb-4">
        <h4 className="font-bold mb-2">💡 Propuesta de Valor</h4>
        <p className="text-lg">{segmento.propuesta_valor}</p>
      </div>

      {/* Canales de Adquisición */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <h4 className="font-bold text-gray-800 mb-3">📢 Canales de Adquisición</h4>
        <div className="space-y-3">
          {segmento.canales_adquisicion.map((canal, idx) => (
            <div key={idx} className="border-l-4 border-primary-500 pl-4">
              <h5 className="font-semibold text-gray-800">{canal.canal}</h5>
              <p className="text-sm text-gray-600">{canal.razon}</p>
              <p className="text-sm italic text-primary-700 mt-1">"{canal.mensaje}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Objetivo */}
      <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
        <p className="font-bold text-yellow-900">
          🎯 Objetivo: {segmento.objetivo_6m || segmento.objetivo_18m}
        </p>
      </div>
    </div>
  );
}