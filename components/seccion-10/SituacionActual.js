export default function SituacionActual({ situacion }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Producto Técnico */}
      <div className="bg-green-50 rounded-lg border-2 border-green-500 p-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">✅</span>
          <h4 className="text-xl font-bold text-green-900">
            {situacion.producto_tecnico.estado}
          </h4>
        </div>
        <p className="text-sm font-semibold text-green-800 mb-3">Capacidades Desarrolladas:</p>
        <ul className="space-y-2">
          {situacion.producto_tecnico.capacidades_desarrolladas.map((cap, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-green-800 text-sm">{cap}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bloqueante Legal */}
      <div className="bg-red-50 rounded-lg border-2 border-red-500 p-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">🚨</span>
          <h4 className="text-xl font-bold text-red-900">
            {situacion.bloqueante_legal.estado}
          </h4>
        </div>
        <p className="text-sm font-bold text-red-900 mb-3">{situacion.bloqueante_legal.problema}</p>
        <p className="text-xs font-semibold text-red-800 mb-2">Consecuencias:</p>
        <ul className="space-y-2">
          {situacion.bloqueante_legal.consecuencias.map((cons, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-red-600 mr-2">⚠️</span>
              <span className="text-red-800 text-sm">{cons}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}