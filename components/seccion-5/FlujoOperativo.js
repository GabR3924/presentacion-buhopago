export default function FlujoOperativo({ mecanismo }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h4 className="text-xl font-bold text-gray-800 mb-2">{mecanismo.titulo}</h4>
      <p className="text-gray-600 mb-6 italic">"{mecanismo.principio}"</p>

      <div className="space-y-3 mb-6">
        {mecanismo.flujo.map((paso, idx) => (
          <div key={idx} className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
              {idx + 1}
            </div>
            <div className="flex-grow bg-gray-50 rounded-lg p-4 border-l-4 border-primary-300">
              <p className="text-gray-700">{paso}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
          <h5 className="font-bold text-blue-900 mb-2">🖥️ Rol de la Plataforma</h5>
          <p className="text-blue-800">{mecanismo.roles.plataforma}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
          <h5 className="font-bold text-green-900 mb-2">🏦 Rol del Banco</h5>
          <p className="text-green-800">{mecanismo.roles.banco}</p>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-500">
        <p className="font-bold text-purple-900">
          💡 Ventaja: {mecanismo.ventaja}
        </p>
      </div>
    </div>
  );
}