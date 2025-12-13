'use client';

export default function ClasificacionRegulatoria({ categorias }) {
  const getRiesgoColor = (nivel) => {
    if (nivel.includes('BAJO')) return 'bg-green-100 border-green-500 text-green-800';
    if (nivel.includes('MEDIO')) return 'bg-yellow-100 border-yellow-500 text-yellow-800';
    if (nivel.includes('ALTÍSIMO') || nivel.includes('ROJA')) return 'bg-red-100 border-red-500 text-red-800';
    return 'bg-gray-100 border-gray-500 text-gray-800';
  };

  const getAplicabilidadBadge = (aplicabilidad) => {
    if (aplicabilidad.includes('VIABLE')) return 'bg-green-500 text-white';
    if (aplicabilidad.includes('ROJA') || aplicabilidad.includes('RIESGO')) return 'bg-red-500 text-white';
    return 'bg-gray-400 text-white';
  };

  return (
    <div className="space-y-4">
      {categorias.map((cat, idx) => (
        <div 
          key={idx} 
          className={`rounded-lg border-l-4 p-6 ${getRiesgoColor(cat.nivel_riesgo)}`}
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="text-lg font-bold mb-1">
                {cat.id.toUpperCase()}. {cat.nombre}
              </h4>
              <p className="text-sm opacity-90">{cat.descripcion}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getAplicabilidadBadge(cat.aplicabilidad_modelo)}`}>
              {cat.aplicabilidad_modelo}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-xs font-semibold uppercase opacity-75 mb-1">Nivel de Riesgo</p>
              <p className="font-bold">{cat.nivel_riesgo}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase opacity-75 mb-1">Normativa Aplicable</p>
              <p className="text-sm">{cat.normativa_aplicable}</p>
            </div>
          </div>    

          <div className="mt-4 pt-4 border-t border-current opacity-50">
            <p className="text-sm">
              <strong>Razón:</strong> {cat.razon}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}