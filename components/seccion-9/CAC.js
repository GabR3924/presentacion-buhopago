export default function CAC({ cac }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 mb-4">
          <p className="text-sm font-semibold text-blue-900 mb-1">Presupuesto de Marketing Mensual</p>
          <p className="text-3xl font-bold text-blue-700">
            ${cac.presupuesto_marketing_mensual.rango} {cac.presupuesto_marketing_mensual.moneda}
          </p>
          <p className="text-xs text-blue-800 mt-2">{cac.presupuesto_marketing_mensual.descripcion}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">📐 Fórmula</p>
          <p className="text-gray-800 font-mono text-sm bg-white rounded p-3">
            {cac.formula}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300 p-6">
        <h4 className="font-bold text-purple-900 mb-4">💡 Ejemplo de Cálculo</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-purple-800">Presupuesto de Ejemplo:</span>
            <span className="font-bold text-purple-900">
              ${cac.ejemplo_calculo.presupuesto_ejemplo} {cac.ejemplo_calculo.moneda}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-800">Nuevos Clientes Adquiridos:</span>
            <span className="font-bold text-purple-900">{cac.ejemplo_calculo.nuevos_clientes_adquiridos}</span>
          </div>
          <div className="border-t-2 border-purple-300 pt-3">
            <div className="flex justify-between items-center">
              <span className="text-purple-900 font-semibold">CAC Resultante:</span>
              <span className="text-3xl font-bold text-purple-700">
                ${cac.ejemplo_calculo.cac_resultante}
              </span>
            </div>
          </div>
          <p className="text-xs text-purple-700 mt-3">{cac.ejemplo_calculo.descripcion_calculo}</p>
        </div>
      </div>
    </div>
  );
}