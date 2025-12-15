export default function ValidacionCruzada({ validacion }) {
  return (
    <div className="space-y-6">
      {/* Comparación TAM */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">
          {validacion.comparacion_tam.titulo}
        </h4>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Top-Down */}
          <div className="bg-blue-50 rounded-lg border-2 border-blue-500 p-6">
            <h5 className="text-xl font-bold text-blue-900 mb-3">📊 Top-Down (desde PIB)</h5>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Metodología:</strong> {validacion.comparacion_tam.top_down_pib.metodologia}
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-xs text-gray-600">TAM Total (Sector Terciario)</p>
                <p className="text-2xl font-bold text-blue-700">{validacion.comparacion_tam.top_down_pib.tam_dolares}</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-xs text-gray-600">Economía Informal Terciario</p>
                <p className="text-xl font-bold text-blue-700">{validacion.comparacion_tam.top_down_pib.economia_informal_terciario}</p>
              </div>
            </div>
          </div>

          {/* Bottom-Up */}
          <div className="bg-green-50 rounded-lg border-2 border-green-500 p-6">
            <h5 className="text-xl font-bold text-green-900 mb-3">🏢 Bottom-Up (desde Negocios)</h5>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Metodología:</strong> {validacion.comparacion_tam.bottom_up_negocios.metodologia}
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-xs text-gray-600">Negocios Totales</p>
                <p className="text-2xl font-bold text-green-700">{validacion.comparacion_tam.bottom_up_negocios.negocios_totales}</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-xs text-gray-600">TAM en Dólares</p>
                <p className="text-xl font-bold text-green-700">{validacion.comparacion_tam.bottom_up_negocios.tam_dolares}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Validación */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-500 p-6">
          <h5 className="text-lg font-bold text-purple-900 mb-3">✅ Validación</h5>
          <p className="text-purple-800 mb-2"><strong>Overlap:</strong> {validacion.comparacion_tam.validacion.overlap}</p>
          <p className="text-lg font-bold text-purple-900 mb-3">{validacion.comparacion_tam.validacion.conclusion}</p>
          <p className="text-sm text-purple-700">{validacion.comparacion_tam.validacion.nota_conservadurismo}</p>
        </div>
      </div>

      {/* Comparación SOM */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">
          {validacion.comparacion_som.titulo}
        </h4>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Top-Down Original */}
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-500">
            <h5 className="text-lg font-bold text-gray-800 mb-3">Top-Down Original</h5>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <strong>Volumen (Moderado):</strong> {validacion.comparacion_som.top_down_original.escenario_moderado_volumen}
              </p>
              <p className="text-xl font-bold text-gray-800">
                Revenue: {validacion.comparacion_som.top_down_original.revenue_5_fee}
              </p>
            </div>
          </div>

          {/* Bottom-Up Actualizado */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
            <h5 className="text-lg font-bold text-green-800 mb-3">Bottom-Up Actualizado ⭐</h5>
            <div className="space-y-2">
              <p className="text-sm text-green-700">
                <strong>Volumen (Moderado):</strong> {validacion.comparacion_som.bottom_up_actualizado.escenario_moderado_volumen}
              </p>
              <p className="text-xl font-bold text-green-800 mb-2">
                Revenue: {validacion.comparacion_som.bottom_up_actualizado.revenue_5_fee}
              </p>
              <p className="text-sm text-green-700">
                <strong>Clientes:</strong> {validacion.comparacion_som.bottom_up_actualizado.clientes}
              </p>
            </div>
          </div>
        </div>

        {/* Recomendación Final */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-6">
          <h5 className="text-xl font-bold mb-4">{validacion.comparacion_som.recomendacion_final.enfoque_usar}</h5>
          
          <div className="mb-4">
            <p className="text-sm opacity-90 mb-2">Justificación:</p>
            <ul className="space-y-1">
              {validacion.comparacion_som.recomendacion_final.justificacion.map((just, idx) => (
                <li key={idx} className="text-sm">{just}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-lg font-bold mb-3">Métricas para Pitch:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs opacity-90">SOM Volumen Anual</p>
                <p className="text-xl font-bold">{validacion.comparacion_som.recomendacion_final.metricas_pitch.som_volumen_anual}</p>
              </div>
              <div>
                <p className="text-xs opacity-90">SOM Revenue Anual</p>
                <p className="text-xl font-bold">{validacion.comparacion_som.recomendacion_final.metricas_pitch.som_revenue_anual}</p>
              </div>
              <div>
                <p className="text-xs opacity-90">Clientes Activos</p>
                <p className="text-xl font-bold">{validacion.comparacion_som.recomendacion_final.metricas_pitch.som_clientes_activos}</p>
              </div>
            </div>
            <p className="text-center text-sm opacity-90 mt-3">
              Horizonte: {validacion.comparacion_som.recomendacion_final.metricas_pitch.horizonte_temporal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}