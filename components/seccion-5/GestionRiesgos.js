export default function GestionRiesgos({ riesgos }) {
  const getNivelColor = (nivel) => {
    if (nivel === 'CRÍTICO') return { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-800', badge: 'bg-red-500' };
    if (nivel === 'ALTO') return { bg: 'bg-orange-100', border: 'border-orange-500', text: 'text-orange-800', badge: 'bg-orange-500' };
    if (nivel === 'MEDIO') return { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-800', badge: 'bg-yellow-500' };
    return { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800', badge: 'bg-green-500' };
  };

  return (
    <div className="space-y-4">
      {Object.values(riesgos).map((riesgo, idx) => {
        const colors = getNivelColor(riesgo.nivel);
        
        return (
          <div key={idx} className={`${colors.bg} rounded-lg border-2 ${colors.border} p-6`}>
            <div className="flex items-start justify-between mb-3">
              <h4 className={`text-lg font-bold ${colors.text}`}>{riesgo.nombre}</h4>
              <span className={`${colors.badge} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                {riesgo.nivel}
              </span>
            </div>

            <div className="bg-white rounded-lg p-4 mb-3">
              <p className="text-sm font-semibold text-gray-600 mb-1">🛡️ Mitigación:</p>
              <p className="text-gray-800">{riesgo.mitigacion}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}