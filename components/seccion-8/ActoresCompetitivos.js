export default function ActoresCompetitivos({ actores }) {
  return (
    <div className="space-y-4">
      {actores.map((actor, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
          <h4 className="text-lg font-bold text-gray-800 mb-3">{actor.categoria}</h4>
          
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-600 mb-2">Características:</p>
            <ul className="space-y-2">
              {actor.caracteristicas.map((car, cIdx) => (
                <li key={cIdx} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{car}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
            <p className="font-semibold text-yellow-900">
              💡 Conclusión: {actor.conclusion}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}