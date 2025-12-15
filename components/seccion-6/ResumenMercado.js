export default function ResumenMercado({ resumen }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-white">
        <p className="text-sm opacity-90 mb-2">Oportunidad Total</p>
        <p className="text-2xl font-bold">{resumen.oportunidad_total}</p>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-6 text-white">
        <p className="text-sm opacity-90 mb-2">Comportamiento Clave</p>
        <p className="text-lg font-bold">{resumen.comportamiento_clave}</p>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-6 text-white">
        <p className="text-sm opacity-90 mb-2">Ventana de Oportunidad</p>
        <p className="text-lg font-bold">{resumen.ventana_oportunidad}</p>
      </div>

      <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-6 text-white">
        <p className="text-sm opacity-90 mb-2">💡 Insight Crítico</p>
        <p className="text-lg font-bold">{resumen.insight_critico}</p>
      </div>
    </div>
  );
}