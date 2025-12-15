export default function Escenarios({ escenarios }) {
  const getColorClass = (key) => {
    const colors = {
      escenario_optimista: 'border-green-500 bg-green-50',
      escenario_base: 'border-blue-500 bg-blue-50',
      escenario_conservador: 'border-orange-500 bg-orange-50'
    };
    return colors[key] || 'border-gray-500 bg-gray-50';
  };

  return (
    <div className="space-y-4">
      {Object.entries(escenarios).map(([key, escenario]) => (
        <div key={key} className={`rounded-lg border-2 p-6 ${getColorClass(key)}`}>
          <h4 className="text-xl font-bold text-gray-800 mb-3">{escenario.nombre}</h4>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-600 mb-1">Condición</p>
              <p className="text-sm text-gray-800">{escenario.condicion}</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-600 mb-1">Resultado</p>
              <p className="text-sm text-gray-800">{escenario.resultado}</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-600 mb-1">Acciones</p>
              {typeof escenario.acciones === 'string' ? (
                <p className="text-sm text-gray-800">{escenario.acciones}</p>
              ) : (
                <ul className="space-y-1">
                  {escenario.acciones.map((accion, idx) => (
                    <li key={idx} className="text-sm text-gray-800">• {accion}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}