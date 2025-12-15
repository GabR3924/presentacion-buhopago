export default function TimelineFases() {
  const fases = [
    { nombre: 'Fase 1', tiempo: '0-6 meses', color: 'bg-green-500', icon: '🚀' },
    { nombre: 'Fase 2', tiempo: '6-18 meses', color: 'bg-blue-500', icon: '🏢' },
    { nombre: 'Fase 3', tiempo: '24+ meses', color: 'bg-purple-500', icon: '🌐' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🗺️ Hoja de Ruta Estratégica
      </h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {fases.map((fase, idx) => (
          <div key={idx} className="flex-1 w-full">
            <div className="relative">
              <div className={`${fase.color} text-white rounded-lg p-6 text-center`}>
                <div className="text-4xl mb-2">{fase.icon}</div>
                <h4 className="text-xl font-bold mb-1">{fase.nombre}</h4>
                <p className="text-sm opacity-90">{fase.tiempo}</p>
              </div>
              
              {idx < fases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
                  <svg className="w-24 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}