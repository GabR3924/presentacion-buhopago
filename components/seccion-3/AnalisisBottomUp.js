export default function AnalisisBottomUp({ bottomUp }) {
  return (
    <div className="space-y-6">
      {/* TAM Número de Negocios */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">
          {bottomUp.tam_numero_negocios.titulo}
        </h4>

        {/* PYMEs Formales */}
        <div className="bg-blue-50 rounded-lg border-2 border-blue-500 p-6 mb-6">
          <h5 className="text-xl font-bold text-blue-900 mb-3">PYMEs Formales</h5>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-4xl font-bold text-blue-700 mb-2">
                {bottomUp.tam_numero_negocios.pymes_formales.cantidad}
              </p>
              <p className="text-sm text-blue-800">{bottomUp.tam_numero_negocios.pymes_formales.caracteristicas}</p>
            </div>
            <div>
              <p className="text-sm text-blue-800 mb-1">Volumen Total Estimado</p>
              <p className="text-2xl font-bold text-blue-700">{bottomUp.tam_numero_negocios.pymes_formales.volumen_total_estimado}</p>
            </div>
          </div>
        </div>

        {/* Microemprendedores Informales */}
        <div className="bg-orange-50 rounded-lg border-2 border-orange-500 p-6">
          <h5 className="text-xl font-bold text-orange-900 mb-4">
            {bottomUp.tam_numero_negocios.microemprendedores_informales.titulo}
          </h5>
          
          <div className="space-y-4">
            {/* Paso 1 */}
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 mb-2">Paso 1: Base de Trabajadores</p>
              <p className="text-gray-700">{bottomUp.tam_numero_negocios.microemprendedores_informales.paso_1_trabajadores_informales_terciario.base}</p>
            </div>

            {/* Paso 2 - Filtros */}
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 mb-2">Paso 2: Aplicación de Filtros</p>
              <p className="text-sm text-gray-600 mb-3">
                {bottomUp.tam_numero_negocios.microemprendedores_informales.paso_2_filtros_aplicados.descripcion}
              </p>
              <ul className="space-y-2 mb-3">
                {bottomUp.tam_numero_negocios.microemprendedores_informales.paso_2_filtros_aplicados.filtros.map((filtro, idx) => (
                  <li key={idx} className="text-sm text-gray-700">{filtro}</li>
                ))}
              </ul>
              <div className="bg-yellow-50 rounded p-3 border-l-4 border-yellow-500">
                <p className="text-sm text-yellow-900">
                  <strong>Porcentaje de Filtro:</strong> {bottomUp.tam_numero_negocios.microemprendedores_informales.paso_2_filtros_aplicados.porcentaje_filtro_conservador}
                </p>
                <p className="text-xs text-yellow-800 mt-2">
                  {bottomUp.tam_numero_negocios.microemprendedores_informales.paso_2_filtros_aplicados.nota_metodologica}
                </p>
              </div>
            </div>

            {/* Paso 3 - Resultado */}
            <div className="bg-green-50 rounded p-4 border-2 border-green-500">
              <p className="font-semibold text-green-900 mb-2">Paso 3: Resultado Final</p>
              <p className="text-sm text-green-800 mb-3">{bottomUp.tam_numero_negocios.microemprendedores_informales.paso_3_resultado.calculo}</p>
              <p className="text-3xl font-bold text-green-700 text-center mb-2">
                {bottomUp.tam_numero_negocios.microemprendedores_informales.paso_3_resultado.microemprendedores_digitales_potenciales}
              </p>
              <p className="text-center text-sm text-green-800">vendedores digitales potenciales</p>
            </div>
          </div>
        </div>

        {/* Resumen TAM */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg p-6 mt-6">
          <h5 className="text-xl font-bold mb-4">{bottomUp.tam_numero_negocios.resumen_tam_negocios.titulo}</h5>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/20 rounded p-4 text-center">
              <p className="text-sm opacity-90 mb-1">PYMEs Formales</p>
              <p className="text-2xl font-bold">{bottomUp.tam_numero_negocios.resumen_tam_negocios.pymes_formales}</p>
            </div>
            <div className="bg-white/20 rounded p-4 text-center">
              <p className="text-sm opacity-90 mb-1">Microemprendedores</p>
              <p className="text-2xl font-bold">{bottomUp.tam_numero_negocios.resumen_tam_negocios.microemprendedores_informales}</p>
            </div>
            <div className="bg-white/20 rounded p-4 text-center">
              <p className="text-sm opacity-90 mb-1">Total Addressable</p>
              <p className="text-2xl font-bold">{bottomUp.tam_numero_negocios.resumen_tam_negocios.total_negocios_addressables}</p>
            </div>
          </div>
          <div className="bg-white/20 rounded p-4 text-center">
            <p className="text-sm opacity-90 mb-1">Volumen Económico Total</p>
            <p className="text-3xl font-bold">{bottomUp.tam_numero_negocios.resumen_tam_negocios.volumen_economico_total}</p>
          </div>
        </div>
      </div>

      {/* SAM */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">{bottomUp.sam_numero_negocios.titulo}</h4>
        <p className="text-gray-600 mb-4">{bottomUp.sam_numero_negocios.descripcion}</p>

        <div className="bg-blue-50 rounded p-4 mb-4">
          <p className="font-semibold text-gray-800 mb-2">Criterios SAM:</p>
          <ul className="space-y-2">
            {bottomUp.sam_numero_negocios.criterios_sam.map((criterio, idx) => (
              <li key={idx} className="text-sm text-gray-700">✓ {criterio}</li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg border-2 border-green-500 p-6">
          <p className="text-4xl font-bold text-green-700 text-center mb-2">
            {bottomUp.sam_numero_negocios.calculo_sam.sam_negocios}
          </p>
          <p className="text-center text-gray-700">negocios addressables (SAM)</p>
          <p className="text-center text-xl font-bold text-green-700 mt-4">
            {bottomUp.sam_numero_negocios.calculo_sam.volumen_economico_sam}
          </p>
        </div>
      </div>

      {/* SOM */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">{bottomUp.som_numero_negocios.titulo}</h4>
        <p className="text-gray-600 mb-4">{bottomUp.som_numero_negocios.descripcion}</p>

        <div className="space-y-4 mb-6">
          {bottomUp.som_numero_negocios.escenarios_som.map((esc, idx) => (
            <div key={idx} className="border-2 border-gray-300 rounded-lg p-6">
              <h5 className="text-xl font-bold text-gray-800 mb-4">{esc.nombre}</h5>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-xs text-gray-600">Captura SAM</p>
                  <p className="text-2xl font-bold text-blue-700">{esc.captura_sam}</p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-xs text-gray-600">Clientes</p>
                  <p className="text-lg font-bold text-green-700">{esc.numero_clientes}</p>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-xs text-gray-600">Volumen Anual</p>
                  <p className="text-lg font-bold text-purple-700">{esc.volumen_total_anual}</p>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-xs text-gray-600">Revenue (5%)</p>
                  <p className="text-lg font-bold text-orange-700">{esc.revenue_5_fee}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 bg-gray-50 rounded p-3">{esc.contexto}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-6">
          <h5 className="text-lg font-bold mb-3">{bottomUp.som_numero_negocios.recomendacion_planning.escenario_base_recomendado}</h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm opacity-90">Clientes Target (5 años)</p>
              <p className="text-2xl font-bold">{bottomUp.som_numero_negocios.recomendacion_planning.clientes_target_5_anos}</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Revenue Proyectado</p>
              <p className="text-2xl font-bold">{bottomUp.som_numero_negocios.recomendacion_planning.revenue_proyectado_ano_5}</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Año</p>
              <p className="text-2xl font-bold">Año 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}