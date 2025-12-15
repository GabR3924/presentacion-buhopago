export default function AnalisisCompetencia({ analisis }) {
  return (
    <div className="space-y-4 mb-6">
      {Object.values(analisis).filter(cat => cat.nombre).map((categoria, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
          <h4 className="text-lg font-bold text-gray-800 mb-3">{categoria.nombre}</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Ejemplos:</p>
              <div className="flex flex-wrap gap-2">
                {categoria.ejemplos.map((ejemplo, eIdx) => (
                  <span key={eIdx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {ejemplo}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-green-700 mb-1">✓ Nuestra Ventaja:</p>
              <p className="text-sm text-gray-700 mb-3">{categoria.ventaja_nuestra}</p>
              
              <p className="text-sm font-semibold text-red-700 mb-1">✗ Su Debilidad:</p>
              <p className="text-sm text-gray-700">{categoria.debilidad_competencia}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-6 text-center">
        <h4 className="text-xl font-bold mb-2">🎯 Posicionamiento Único</h4>
        <p className="text-lg">{analisis.posicionamiento_unico}</p>
      </div>
    </div>
  );
}