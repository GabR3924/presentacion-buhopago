export default function PricingPlanes({ pricing }) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg border-2 border-blue-500 p-6 text-center">
        <p className="text-xl font-bold text-blue-900 mb-2">{pricing.modelo}</p>
        <p className="text-blue-800">{pricing.nota}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricing.planes.map((plan, idx) => (
          <div key={idx} className={`bg-white rounded-lg shadow-xl p-6 border-2 ${
            plan.badge ? 'border-yellow-500' : 'border-gray-300'
          }`}>
            {plan.badge && (
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                {plan.badge}
              </div>
            )}
            
            <h4 className="text-2xl font-bold text-gray-800 mb-2">{plan.nombre}</h4>
            <div className="mb-4">
              <span className="text-4xl font-bold text-primary-700">{plan.precio_mensual}</span>
              <span className="text-gray-600">/mes</span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{plan.target}</p>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Incluye:</p>
              <ul className="space-y-2">
                {plan.incluye.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-gray-600 bg-gray-50 rounded p-3">
              <strong>Ideal para:</strong> {plan.ideal_para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}