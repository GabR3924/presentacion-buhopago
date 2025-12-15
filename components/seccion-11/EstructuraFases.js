export default function EstructuraFases({ estructura }) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg border-2 border-blue-500 p-6">
        <p className="text-blue-900 mb-4">{estructura.descripcion}</p>
        <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-500">
          <p className="text-yellow-900 font-semibold">{estructura.nota_transparencia}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {estructura.fases.map((fase, idx) => (
          <div key={idx} className={`rounded-lg border-2 p-6 ${
            fase.estado.includes('ACTIVA') 
              ? 'bg-green-50 border-green-500' 
              : 'bg-orange-50 border-orange-500'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-gray-800">{fase.fase}</h4>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                fase.estado.includes('ACTIVA')
                  ? 'bg-green-500 text-white'
                  : 'bg-orange-500 text-white'
              }`}>
                {fase.estado}
              </span>
            </div>
            <p className="text-gray-700 mb-3">{fase.descripcion}</p>
            <p className="text-sm text-gray-600">
              <strong>Target:</strong> {fase.target}
            </p>
            {fase.dependencia && (
              <div className="mt-3 bg-white rounded p-3 text-sm text-orange-800">
                ⚠️ {fase.dependencia}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}