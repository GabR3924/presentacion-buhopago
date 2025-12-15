export default function RelacionLTVCAC({ relacion }) {
  return (
    <div className="space-y-6">
      {/* Ratio LTV:CAC */}
      <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg p-8 text-center shadow-xl">
        <p className="text-lg mb-2 opacity-90">Ratio LTV:CAC</p>
        <p className="text-7xl font-bold mb-4">{relacion.ratio_ltv_cac.valor}</p>
        <p className="text-sm opacity-90 mb-3">
          Cálculo: {relacion.ratio_ltv_cac.calculo}
        </p>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">{relacion.ratio_ltv_cac.interpretacion}</p>
        </div>
      </div>

      {/* Período de Recuperación */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-500">
        <h4 className="font-bold text-gray-800 mb-4 text-center">
          ⚡ Período de Recuperación del CAC
        </h4>
        
        <div className="text-center mb-4">
          <p className="text-5xl font-bold text-blue-600 mb-2">
            {relacion.periodo_recuperacion_cac.valor} meses
          </p>
          <p className="text-2xl font-semibold text-blue-500">
            {relacion.periodo_recuperacion_cac.equivalente_dias}
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-sm font-mono text-blue-800 text-center">
            {relacion.periodo_recuperacion_cac.formula}
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
          <p className="text-sm text-green-900">
            💡 {relacion.periodo_recuperacion_cac.interpretacion}
          </p>
        </div>
      </div>
    </div>
  );
}