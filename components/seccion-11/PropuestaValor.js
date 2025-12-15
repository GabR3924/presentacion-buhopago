export default function PropuestaValor({ propuesta }) {
  return (
    <div className="space-y-6">
      {/* Tagline */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-8 text-center">
        <h3 className="text-4xl font-bold mb-4">{propuesta.tagline}</h3>
        <p className="text-xl opacity-90">{propuesta.descripcion_corta}</p>
      </div>

      {/* Problema que Resuelve */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">
          {propuesta.problema_que_resuelve.titulo}
        </h4>
        
        <div className="bg-red-50 rounded-lg p-6 mb-6 border-l-4 border-red-500">
          <p className="text-sm font-semibold text-red-900 mb-3">Problemas Actuales:</p>
          <ul className="space-y-2">
            {propuesta.problema_que_resuelve.pain_points.map((pain, idx) => (
              <li key={idx} className="text-red-800">{pain}</li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
          <p className="text-sm font-semibold text-green-900 mb-2">✅ Solución:</p>
          <p className="text-green-800">{propuesta.problema_que_resuelve.solucion}</p>
        </div>
      </div>

      {/* Diferenciadores Clave */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Diferenciadores Clave</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {propuesta.diferenciadores_clave.map((diff, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-blue-800 font-medium">{diff}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}