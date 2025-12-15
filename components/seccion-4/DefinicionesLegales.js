export default function DefinicionesLegales({ definiciones }) {
  return (
    <div className="space-y-4">
      {Object.values(definiciones).map((def, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md border-l-4 border-primary-500 p-6">
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            {def.termino || def.titulo}
          </h4>
          
          {def.definicion && (
            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-gray-600">Definición: </span>
              {def.definicion}
            </p>
          )}

          {def.lista && (
            <div className="mb-3">
              <p className="font-semibold text-gray-600 mb-2">Servicios incluidos:</p>
              <ul className="space-y-1">
                {def.lista.map((item, listaIdx) => (
                  <li key={listaIdx} className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {def.implicacion && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-sm">
                <span className="font-semibold text-primary-700">💡 Implicación: </span>
                <span className="text-gray-700">{def.implicacion}</span>
              </p>
            </div>
          )}

          {def.relacion && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-sm">
                <span className="font-semibold text-primary-700">🔗 Relación: </span>
                <span className="text-gray-700">{def.relacion}</span>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}