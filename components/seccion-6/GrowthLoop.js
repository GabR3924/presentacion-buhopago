export default function GrowthLoop({ loop }) {
  const pasos = [
    { key: 'paso_1_adquisicion', nombre: 'Adquisición', icon: '📢', color: 'blue' },
    { key: 'paso_2_activacion', nombre: 'Activación', icon: '⚡', color: 'green' },
    { key: 'paso_3_retencion', nombre: 'Retención', icon: '🔄', color: 'purple' },
    { key: 'paso_4_referencia', nombre: 'Referencia', icon: '🤝', color: 'orange' },
    { key: 'paso_5_upgrade', nombre: 'Upgrade', icon: '⬆️', color: 'red' }
  ];

  const getColorClass = (color) => {
    const colors = {
      blue: 'border-blue-500 bg-blue-50',
      green: 'border-green-500 bg-green-50',
      purple: 'border-purple-500 bg-purple-50',
      orange: 'border-orange-500 bg-orange-50',
      red: 'border-red-500 bg-red-50'
    };
    return colors[color];
  };

  return (
    <div className="space-y-4">
      {pasos.map((paso, idx) => {
        const data = loop[paso.key];
        return (
          <div key={idx} className={`rounded-lg border-l-4 p-6 ${getColorClass(paso.color)}`}>
            <h4 className="text-lg font-bold text-gray-800 mb-3">
              {paso.icon} {idx + 1}. {paso.nombre}
            </h4>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-600">Método:</p>
                <p className="text-gray-800">{data.metodo}</p>
              </div>

              {data.contenido && (
                <div>
                  <p className="text-sm font-semibold text-gray-600">Contenido:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {data.contenido.map((item, cIdx) => (
                      <span key={cIdx} className="px-3 py-1 bg-white rounded-lg text-sm text-gray-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {data.flujo && (
                <div>
                  <p className="text-sm font-semibold text-gray-600">Flujo:</p>
                  <p className="text-gray-800 text-sm">{data.flujo}</p>
                </div>
              )}

              {data.tacticas && (
                <div>
                  <p className="text-sm font-semibold text-gray-600">Tácticas:</p>
                  <ul className="space-y-1 mt-1">
                    {data.tacticas.map((tactica, tIdx) => (
                      <li key={tIdx} className="text-sm text-gray-700">• {tactica}</li>
                    ))}
                  </ul>
                </div>
              )}

              {data.mecanismo && (
                <div>
                  <p className="text-sm font-semibold text-gray-600">Mecanismo:</p>
                  <p className="text-gray-800 text-sm">{data.mecanismo}</p>
                </div>
              )}

              {data.triggers && (
                <div>
                  <p className="text-sm font-semibold text-gray-600">Triggers:</p>
                  <ul className="space-y-1 mt-1">
                    {data.triggers.map((trigger, trIdx) => (
                      <li key={trIdx} className="text-sm text-gray-700">• {trigger}</li>
                    ))}
                  </ul>
                </div>
              )}

              {data.oferta && (
                <div className="bg-white rounded p-3">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Oferta:</p>
                  <p className="text-gray-800 text-sm">{data.oferta}</p>
                </div>
              )}

              <div className="pt-3 border-t border-gray-300">
                <p className="text-xs font-semibold text-gray-600 mb-1">📊 Métricas:</p>
                <div className="flex flex-wrap gap-2">
                  {data.metricas.map((metrica, mIdx) => (
                    <span key={mIdx} className="px-2 py-1 bg-white rounded text-xs font-semibold text-gray-700">
                      {metrica}
                    </span>
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