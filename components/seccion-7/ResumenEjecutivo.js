export default function ResumenEjecutivo({ resumen }) {
  const etapas = [
    { key: 'etapa_1', nombre: 'Etapa 1', icon: '🚀', color: 'green' },
    { key: 'etapa_2', nombre: 'Etapa 2', icon: '📈', color: 'blue' },
    { key: 'etapa_3', nombre: 'Etapa 3', icon: '🌐', color: 'purple' }
  ];

  const getGradient = (color) => {
    const gradients = {
      green: 'from-green-500 to-green-700',
      blue: 'from-blue-500 to-blue-700',
      purple: 'from-purple-500 to-purple-700'
    };
    return gradients[color];
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {etapas.map((etapa) => {
        const data = resumen[etapa.key];
        return (
          <div key={etapa.key} className={`bg-gradient-to-br ${getGradient(etapa.color)} rounded-lg p-6 text-white shadow-xl`}>
            <div className="text-center mb-4">
              <div className="text-5xl mb-2">{etapa.icon}</div>
              <h4 className="text-xl font-bold">{etapa.nombre}</h4>
            </div>

            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-xs opacity-75 mb-1">Producto</p>
                <p className="font-bold">{data.producto}</p>
              </div>

              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-xs opacity-75 mb-1">Mercado</p>
                <p className="font-semibold text-sm">{data.mercado}</p>
              </div>

              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-xs opacity-75 mb-1">Revenue</p>
                <p className="font-semibold text-sm">{data.revenue}</p>
              </div>

              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-xs opacity-75 mb-1">Inversión</p>
                <p className="font-bold text-lg">{data.inversion}</p>
              </div>

              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-xs opacity-75 mb-1">🎯 Salida</p>
                <p className="font-bold text-sm">{data.salida}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}