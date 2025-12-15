export default function PilaresEstrategicos({ pilares }) {
  const icons = ['🛡️', '📱', '📚'];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Object.values(pilares).map((pilar, idx) => (
        <div key={idx} className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border-2 border-primary-300 p-6">
          <div className="text-4xl mb-3 text-center">{icons[idx]}</div>
          <h4 className="text-lg font-bold text-primary-900 mb-4 text-center">
            {pilar.nombre}
          </h4>
          <ul className="space-y-2">
            {pilar.manifestaciones.map((manif, mIdx) => (
              <li key={mIdx} className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span className="text-primary-800 text-sm">{manif}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}