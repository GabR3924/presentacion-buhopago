export default function ProximosPasos({ proximosPasos }) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border-2 border-orange-500 p-6">
      <h3 className="text-2xl font-bold text-orange-900 mb-3 text-center">
        {proximosPasos.titulo}
      </h3>
      <p className="text-orange-800 mb-6 text-center">{proximosPasos.descripcion}</p>
      
      <div className="space-y-6">
        {proximosPasos.pasos.map((paso, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-orange-900 mb-3">{paso.nombre}</h4>
            
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-900 mb-1">Definición</p>
                <p className="text-blue-800">{paso.definicion}</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <p className="text-sm font-semibold text-purple-900 mb-1">Propósito</p>
                <p className="text-purple-800">{paso.proposito}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-sm font-semibold text-green-900 mb-1">🎯 Acción</p>
                <p className="text-green-800">{paso.accion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}