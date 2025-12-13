export default function MetricasCard({ titulo, metricas }) {
  return (
    <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg shadow-lg p-6 text-white mb-6">
      <h3 className="text-xl font-bold mb-4">{titulo}</h3>
      <div className="grid grid-cols-2 gap-4">
        {metricas.map((metrica, idx) => (
          <div key={idx} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm opacity-90 mb-1">{metrica.label}</p>
            <p className="text-3xl font-bold">{metrica.valor}</p>
            {metrica.descripcion && (
              <p className="text-xs opacity-75 mt-1">{metrica.descripcion}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}