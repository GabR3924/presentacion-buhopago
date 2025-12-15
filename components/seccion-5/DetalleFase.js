export default function DetalleFase({ fase, numero, color = "blue" }) {
  const colorClasses = {
    green: {
      bg: 'bg-green-50',
      border: 'border-green-500',
      text: 'text-green-800',
      badge: 'bg-green-500'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      text: 'text-blue-800',
      badge: 'bg-blue-500'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-500',
      text: 'text-purple-800',
      badge: 'bg-purple-500'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`${colors.bg} rounded-lg border-2 ${colors.border} p-6 mb-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>{fase.nombre}</h3>
          <p className="text-sm font-semibold text-gray-600">{fase.tiempo}</p>
        </div>
        <span className={`${colors.badge} text-white px-4 py-2 rounded-full text-sm font-bold`}>
          Fase {numero}
        </span>
      </div>

      {fase.estado_legal && (
        <div className="mb-4 bg-white rounded-lg p-4 border-l-4 border-yellow-500">
          <p className="text-sm font-semibold text-gray-700">
            ⚖️ Estado Legal: <span className="text-yellow-800">{fase.estado_legal}</span>
          </p>
        </div>
      )}

      {fase.pre_requisito && (
        <div className="mb-4 bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
          <p className="text-sm font-semibold text-red-800">
            ⚠️ Pre-requisito: {fase.pre_requisito}
          </p>
        </div>
      )}

      {fase.publico_objetivo && (
        <div className="mb-4">
          <h4 className={`font-bold ${colors.text} mb-2`}>🎯 Público Objetivo</h4>
          <div className="bg-white rounded-lg p-4">
            <p><strong>Primario:</strong> {fase.publico_objetivo.primario}</p>
            {fase.publico_objetivo.secundario && (
              <p className="mt-1"><strong>Secundario:</strong> {fase.publico_objetivo.secundario}</p>
            )}
            {fase.publico_objetivo.segmentos && (
              <p className="mt-1"><strong>Segmentos:</strong> {fase.publico_objetivo.segmentos.join(', ')}</p>
            )}
            <p className="mt-1"><strong>Tamaño:</strong> {fase.publico_objetivo.tamano_mercado}</p>
          </div>
        </div>
      )}

      {fase.servicio && (
        <div className="mb-4">
          <h4 className={`font-bold ${colors.text} mb-2`}>💡 Servicio</h4>
          <div className="bg-white rounded-lg p-4">
            <p className="font-bold text-gray-800 mb-1">{fase.servicio.nombre}</p>
            <p className="text-gray-700 mb-3">{fase.servicio.descripcion}</p>
            
            {fase.servicio.caracteristicas && (
              <>
                <p className="font-semibold text-gray-700 mb-2">Características:</p>
                <ul className="space-y-1">
                  {fase.servicio.caracteristicas.map((car, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">{car}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {fase.servicio.aclaracion_legal && (
              <div className="mt-3 pt-3 border-t border-gray-200 bg-yellow-50 rounded p-3">
                <p className="text-sm font-semibold text-yellow-900">
                  ⚖️ {fase.servicio.aclaracion_legal}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {fase.objetivo_fase && (
        <div className="bg-white rounded-lg p-4 border-l-4 border-primary-500">
          <p className="font-semibold text-gray-700">
            🎯 Objetivo: <span className="text-gray-800">{fase.objetivo_fase}</span>
          </p>
        </div>
      )}

      {fase.descripcion && (
        <div className="bg-white rounded-lg p-4">
          <p className="text-gray-700">{fase.descripcion}</p>
          {fase.nota && (
            <p className="text-sm text-gray-600 mt-2 italic">📌 {fase.nota}</p>
          )}
        </div>
      )}
    </div>
  );
}