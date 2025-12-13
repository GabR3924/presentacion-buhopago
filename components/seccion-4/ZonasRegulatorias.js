export default function ZonasRegulatorias({ zonas }) {
  return (
    <div className="space-y-6">
      {zonas.map((zona, idx) => {
        const isRoja = zona.color === 'red';
        const bgColor = isRoja ? 'bg-red-50' : 'bg-gray-50';
        const borderColor = isRoja ? 'border-red-500' : 'border-gray-500';
        const titleColor = isRoja ? 'text-red-800' : 'text-gray-800';
        
        return (
          <div key={idx} className={`${bgColor} rounded-lg border-2 ${borderColor} p-6`}>
            <h4 className={`text-xl font-bold ${titleColor} mb-3`}>
              {zona.nombre}
            </h4>
            
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-1">Definición:</p>
              <p className="text-gray-700">{zona.definicion}</p>
            </div>

            {zona.condiciones && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 mb-1">Condiciones:</p>
                <p className="text-gray-700">{zona.condiciones}</p>
              </div>
            )}

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-1">
                {zona.estrategia ? 'Estrategia:' : 'Consecuencias:'}
              </p>
              {zona.estrategia ? (
                <div>
                  <p className="text-gray-700 mb-3">{zona.estrategia.titulo}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {zona.estrategia.puntos.map((punto, pIdx) => (
                      <div key={pIdx} className="bg-white rounded-lg p-4 border-l-4 border-primary-500">
                        <h5 className="font-bold text-gray-800 mb-1">{punto.item}</h5>
                        <p className="text-sm text-gray-600">{punto.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-700">{zona.consecuencias}</p>
              )}
            </div>

            {zona.ventaja && (
              <div className={`mt-4 pt-4 border-t ${isRoja ? 'border-red-300' : 'border-gray-300'}`}>
                <p className="text-sm font-semibold text-gray-600 mb-1">Ventaja:</p>
                <p className="text-gray-700 font-medium">{zona.ventaja}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}