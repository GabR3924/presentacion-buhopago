export default function DistribucionClientes({ distribucion }) {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 rounded-lg border-2 border-blue-500 p-6 text-center mb-6">
        <p className="text-sm text-blue-800 mb-2">Total Clientes SOM Proyectado</p>
        <p className="text-4xl font-bold text-blue-900">{distribucion.total_clientes_som}</p>
      </div>

      <div className="space-y-4">
        {distribucion.distribucion.map((plan, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h5 className="text-xl font-bold text-gray-800">{plan.plan}</h5>
                {plan.nota && (
                  <p className="text-sm text-primary-700">{plan.nota}</p>
                )}
              </div>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-bold">
                {plan.porcentaje_clientes}
              </span>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded p-3">
                <p className="text-xs text-gray-600">Clientes</p>
                <p className="text-lg font-bold text-blue-700">{plan.numero_clientes}</p>
              </div>
              <div className="bg-green-50 rounded p-3">
                <p className="text-xs text-gray-600">ARPU Mensual</p>
                <p className="text-lg font-bold text-green-700">{plan.arpu_mensual}</p>
              </div>
              <div className="bg-purple-50 rounded p-3">
                <p className="text-xs text-gray-600">Revenue Mensual</p>
                <p className="text-lg font-bold text-purple-700">{plan.revenue_mensual_plan}</p>
              </div>
              <div className="bg-orange-50 rounded p-3">
                <p className="text-xs text-gray-600">Revenue Anual</p>
                <p className="text-lg font-bold text-orange-700">{plan.revenue_anual_plan}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-6">
        <h5 className="text-xl font-bold mb-4">Revenue Total Proyectado</h5>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/20 rounded p-4">
            <p className="text-sm opacity-90">Conservador</p>
            <p className="text-2xl font-bold">{distribucion.revenue_total_proyectado.escenario_conservador}</p>
          </div>
          <div className="bg-white/30 rounded p-4">
            <p className="text-sm opacity-90">Moderado ⭐</p>
            <p className="text-2xl font-bold">{distribucion.revenue_total_proyectado.escenario_moderado}</p>
          </div>
          <div className="bg-white/20 rounded p-4">
            <p className="text-sm opacity-90">Agresivo</p>
            <p className="text-2xl font-bold">{distribucion.revenue_total_proyectado.escenario_agresivo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}