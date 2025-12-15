export default function Sanciones({ sanciones }) {
  return (
    <div className="space-y-6">
      {/* Infracción General */}
      <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-900 mb-2">⚠️ Infracciones</h4>
        <p className="text-orange-800 mb-3">{sanciones.infraccion}</p>
        <p className="text-sm text-orange-700">
          <strong>Medidas aplicables:</strong> {sanciones.medidas}
        </p>
      </div>

      {/* Prohibición Absoluta */}
      <div className="bg-red-50 rounded-lg p-6 border-2 border-red-500">
        <div className="flex items-start mb-4">
          <span className="text-4xl mr-3">🚫</span>
          <div>
            <h4 className="text-xl font-bold text-red-900 mb-2">
              {sanciones.prohibicion_absoluta.titulo}
            </h4>
            <div className="bg-white rounded p-4 mb-3 border border-red-200">
              <p className="text-sm text-gray-700 italic">
                '{sanciones.prohibicion_absoluta.texto}'
              </p>
            </div>
            <div className="bg-red-100 rounded p-4">
              <p className="text-sm font-semibold text-red-900 mb-1">📌 Interpretación:</p>
              <p className="text-red-800">{sanciones.prohibicion_absoluta.interpretacion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}