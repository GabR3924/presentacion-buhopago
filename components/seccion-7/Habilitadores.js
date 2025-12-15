export default function Habilitadores({ habilitadores }) {
  const etapas = [
    { key: 'etapa_1', nombre: 'Etapa 1', color: 'green' },
    { key: 'etapa_2', nombre: 'Etapa 2', color: 'blue' },
    { key: 'etapa_3', nombre: 'Etapa 3', color: 'purple' }
  ];

  const getColorClass = (color) => {
    const colors = {
      green: 'bg-green-50 border-green-500',
      blue: 'bg-blue-50 border-blue-500',
      purple: 'bg-purple-50 border-purple-500'
    };
    return colors[color];
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {etapas.map((etapa) => {
        const data = habilitadores[etapa.key];
        return (
          <div key={etapa.key} className={`rounded-lg border-2 p-6 ${getColorClass(etapa.color)}`}>
            <h4 className="text-lg font-bold text-gray-800 mb-4">{etapa.nombre}</h4>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">💰 Capital</p>
                <p className="text-xl font-bold text-primary-700">{data.capital}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">👥 Equipo</p>
                <div className="space-y-1">
                  {data.equipo.map((persona, idx) => (
                    <p key={idx} className="text-sm text-gray-700">• {persona}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">🏗️ Infraestructura</p>
                <div className="space-y-1">
                  {data.infraestructura.map((infra, idx) => (
                    <p key={idx} className="text-sm text-gray-700">• {infra}</p>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-300">
                <p className="text-sm font-semibold text-gray-700 mb-2">🎯 Métricas Desbloqueo</p>
                <div className="space-y-1">
                  {data.metricas_desbloqueo.map((metrica, idx) => (
                    <p key={idx} className="text-xs text-gray-700 bg-white rounded p-2">
                      ✓ {metrica}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}