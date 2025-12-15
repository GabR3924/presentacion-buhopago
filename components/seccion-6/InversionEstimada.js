export default function InversionEstimada({ inversion }) {
  return (
    <div className="space-y-6">
      {/* Fase 1 */}
      <div className="bg-green-50 rounded-lg border-2 border-green-500 p-6">
        <h4 className="text-xl font-bold text-green-900 mb-4">💰 Fase 1 - Validador</h4>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">Desarrollo</p>
            <p className="text-2xl font-bold text-green-700">{inversion.fase_1_validador.desarrollo}</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">Marketing (6m)</p>
            <p className="text-2xl font-bold text-green-700">{inversion.fase_1_validador.marketing_6m}</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">Equipo (6m)</p>
            <p className="text-2xl font-bold text-green-700">{inversion.fase_1_validador.equipo_6m}</p>
          </div>
        </div>
        <div className="bg-green-100 rounded-lg p-4">
          <p className="font-bold text-green-900 text-lg">
            Total Fase 1: {inversion.fase_1_validador.total_fase_1}
          </p>
        </div>
      </div>

      {/* Fase 2 */}
      <div className="bg-blue-50 rounded-lg border-2 border-blue-500 p-6">
        <h4 className="text-xl font-bold text-blue-900 mb-4">💰 Fase 2 - Orquestador</h4>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">Desarrollo</p>
            <p className="text-2xl font-bold text-blue-700">{inversion.fase_2_orquestador.desarrollo}</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">Legal/Autorización</p>
            <p className="text-2xl font-bold text-blue-700">{inversion.fase_2_orquestador.legal_autorizacion}</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">Expansión (12m)</p>
            <p className="text-2xl font-bold text-blue-700">{inversion.fase_2_orquestador.expansion_12m}</p>
          </div>
        </div>
        <div className="bg-blue-100 rounded-lg p-4 mb-3">
          <p className="font-bold text-blue-900 text-lg">
            Total Fase 2: {inversion.fase_2_orquestador.total_fase_2}
          </p>
        </div>
        <div className="bg-yellow-50 rounded p-3 border-l-4 border-yellow-500">
          <p className="text-sm text-yellow-900">
            📌 {inversion.fase_2_orquestador.nota}
          </p>
        </div>
      </div>

      {/* ROI Proyectado */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-6">
        <h4 className="text-2xl font-bold mb-4">📈 ROI Proyectado</h4>
        <div className="space-y-3">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm opacity-90">Año 1</p>
            <p className="text-lg font-bold">{inversion.roi_proyectado.año_1}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm opacity-90">Año 2</p>
            <p className="text-lg font-bold">{inversion.roi_proyectado.año_2}</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-sm opacity-90">Valuation Potencial</p>
            <p className="text-2xl font-bold">{inversion.roi_proyectado.valuation_potencial}</p>
          </div>
        </div>
      </div>
    </div>
  );
}