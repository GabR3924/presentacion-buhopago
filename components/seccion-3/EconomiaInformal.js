export default function EconomiaInformal({ informal }) {
  return (
    <div className="space-y-6">
      {/* Descripción */}
      <div className="bg-blue-50 rounded-lg border-2 border-blue-500 p-6">
        <p className="text-blue-900 mb-3">{informal.descripcion}</p>
        <p className="text-blue-800 font-semibold">{informal.contexto_estructura}</p>
      </div>

      {/* Datos Oficiales */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Datos Oficiales</h4>
        <div className="space-y-3">
          <div className="bg-gray-50 rounded p-4">
            <p className="text-gray-700">{informal.datos_oficiales.dato_empleo}</p>
          </div>
          <div className="bg-gray-50 rounded p-4">
            <p className="text-gray-700">{informal.datos_oficiales.dato_iesa}</p>
          </div>
          <div className="bg-gray-50 rounded p-4">
            <p className="text-gray-700">
              <strong>Tasa de Informalidad 2021:</strong> {informal.datos_oficiales.tasa_informalidad_2021}
            </p>
          </div>
          <div className="bg-gray-50 rounded p-4">
            <p className="text-gray-700">
              <strong>Proyección 2025:</strong> {informal.datos_oficiales.proyeccion_2025}
            </p>
          </div>
        </div>
      </div>

      {/* Actividades Comunes */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Actividades Comunes</h4>
        <ul className="space-y-2">
          {informal.actividades_comunes.map((act, idx) => (
            <li key={idx} className="flex items-start bg-gray-50 rounded p-3">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">{act}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Volumen Económico Informal */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border-2 border-orange-500 p-6">
        <h4 className="text-2xl font-bold text-orange-900 mb-4">
          {informal.impacto_volumen_tam.titulo}
        </h4>
        <p className="text-orange-800 mb-6">{informal.impacto_volumen_tam.descripcion}</p>

        <div className="space-y-4">
          {informal.impacto_volumen_tam.escenarios.map((esc, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
              <h5 className="text-lg font-bold text-gray-800 mb-2">{esc.nombre}</h5>
              <div className="grid md:grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-sm text-gray-600">Porcentaje</p>
                  <p className="text-2xl font-bold text-primary-700">{esc.porcentaje}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Volumen USD</p>
                  <p className="text-2xl font-bold text-primary-700">{esc.volumen_usd}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Cálculo</p>
                  <p className="text-sm text-gray-700">{esc.calculo}</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded p-3 border-l-4 border-blue-500">
                <p className="text-sm text-blue-900"><strong>Insight:</strong> {esc.insight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-2 border-green-500 mt-6">
          <p className="text-lg font-bold text-green-900">{informal.impacto_volumen_tam.conclusion_clave}</p>
        </div>
      </div>

      {/* Implicaciones */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-4">{informal.implicacion_para_modelo.titulo}</h4>
        <ul className="space-y-3 mb-6">
          {informal.implicacion_para_modelo.puntos_clave.map((punto, idx) => (
            <li key={idx} className="bg-primary-50 rounded p-4 border-l-4 border-primary-500">
              <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: punto }} />
            </li>
          ))}
        </ul>
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-6">
          <p className="font-bold" dangerouslySetInnerHTML={{ __html: informal.implicacion_para_modelo.frase_resumen_slide }} />
        </div>
      </div>
    </div>
  );
}