export default function EspacioLibre({ espacio }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-500 p-8">
      <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
        🎯 {espacio.titulo}
      </h3>
      
      <p className="text-purple-800 mb-6 text-center text-lg">{espacio.descripcion}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {espacio.caracteristicas.map((car, idx) => (
          <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center">
              <span className="text-3xl mr-3">✨</span>
              <p className="font-semibold text-purple-900">{car}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-6 text-center">
        <p className="text-lg italic">"{espacio.cita_estrategica}"</p>
      </div>
    </div>
  );
}