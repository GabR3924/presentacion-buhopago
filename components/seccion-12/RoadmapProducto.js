export default function RoadmapProducto({ roadmap }) {
  const getFaseColor = (faseNum) => {
    const colors = {
      0: 'bg-blue-100 border-blue-400 text-blue-800',
      1: 'bg-green-100 border-green-400 text-green-800',
      2: 'bg-yellow-100 border-yellow-400 text-yellow-800',
      3: 'bg-purple-100 border-purple-400 text-purple-800'
    };
    return colors[faseNum] || 'bg-gray-100 border-gray-400 text-gray-800';
  };

  const getFaseBadge = (faseNum) => {
    const badges = {
      0: '🎯 MVP',
      1: '🚀 Fase 1',
      2: '🏢 Fase 2',
      3: '🏆 Fase 3'
    };
    return badges[faseNum] || `Fase ${faseNum}`;
  };

  return (
    <div className="space-y-8">
      {/* Timeline vertical */}
      <div className="relative">
        {/* Línea de tiempo vertical */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>
        
        {Object.entries(roadmap).map(([key, fase], index) => {
          const faseNum = index;
          const esPar = index % 2 === 0;
          
          return (
            <div key={key} className={`relative mb-12 ${esPar ? 'md:pr-1/2 md:pl-16' : 'md:pl-1/2 md:pr-16'}`}>
              {/* Punto en la línea de tiempo */}
              <div className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full border-4 border-white ${getFaseColor(faseNum).replace('bg-', 'bg-').split(' ')[0]}`}></div>
              
              {/* Card de fase */}
              <div className={`ml-12 md:ml-0 rounded-xl border-2 ${getFaseColor(faseNum)} p-6 shadow-lg`}>
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${getFaseColor(faseNum).replace('text-', 'text-').split(' ')[2]}`}>
                      {getFaseBadge(faseNum)}
                    </div>
                    <h4 className="text-xl font-bold">{fase.titulo}</h4>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-3 py-1 bg-white/80 rounded-full text-sm font-semibold">
                      {fase.objetivo}
                    </span>
                  </div>
                </div>
                
                {/* Planes disponibles */}
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Planes disponibles:</p>
                  <div className="flex flex-wrap gap-2">
                    {fase.planes_disponibles.map((plan, i) => (
                      <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-medium">
                        {plan}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Funcionalidades */}
                <div>
                  <p className="text-sm font-semibold mb-2">Funcionalidades:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {fase.funcionalidades_criticas?.map((func, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <p className="text-sm">{func}</p>
                      </div>
                    ))}
                    {fase.funcionalidades_nuevas?.map((func, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 text-xs">+</span>
                        </div>
                        <p className="text-sm">{func}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Resumen horizontal para mobile */}
      <div className="md:hidden bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-primary-200">
        <h5 className="text-lg font-bold mb-4 text-center">Resumen del Roadmap</h5>
        <div className="space-y-4">
          {Object.entries(roadmap).map(([key, fase], index) => (
            <div key={key} className="bg-white rounded-lg p-4 border-l-4 border-primary-500">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${getFaseColor(index).replace('bg-', 'bg-').split(' ')[0]}`}></div>
                <h6 className="font-bold">{fase.titulo}</h6>
              </div>
              <p className="text-sm text-gray-600 mb-2">{fase.objetivo}</p>
              <p className="text-xs text-primary-700 font-medium">
                Planes: {fase.planes_disponibles.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}