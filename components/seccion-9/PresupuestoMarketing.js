export default function PresupuestoMarketing({ presupuesto }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-4 mb-6">
        {presupuesto.partidas.map((partida, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-500">
            <div className="flex justify-between items-start mb-2">
              <h5 className="font-bold text-gray-800">{partida.concepto}</h5>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-bold">
                ${partida.costo_rango_usd_mes}
              </span>
            </div>
            <p className="text-sm text-gray-600">{partida.justificacion}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg p-6 text-center">
        <p className="text-sm opacity-90 mb-2">Total Mensual</p>
        <p className="text-4xl font-bold mb-2">
          ${presupuesto.total_mensual.rango} {presupuesto.total_mensual.moneda}
        </p>
        <p className="text-sm opacity-90">
          {presupuesto.total_mensual.nota}
        </p>
      </div>
    </div>
  );
}