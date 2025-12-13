export default function TablaSupervision({ entidades }) {
  const getNivelColor = (nivel) => {
    if (nivel.includes('MÁXIMA')) return 'bg-red-100 text-red-800';
    if (nivel.includes('ALTA')) return 'bg-orange-100 text-orange-800';
    if (nivel.includes('INDIRECTA')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="space-y-4">
      {entidades.map((entidad, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h4 className="text-lg font-bold text-gray-800">{entidad.nombre}</h4>
            <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${getNivelColor(entidad.nivel_supervision)}`}>
              {entidad.nivel_supervision}
            </span>
          </div>
          
          <div className="p-6">
            <h5 className="text-sm font-semibold text-gray-600 mb-3">Requisitos Clave:</h5>
            <ul className="space-y-2">
              {entidad.requisitos_clave.map((req, reqIdx) => (
                <li key={reqIdx} className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}