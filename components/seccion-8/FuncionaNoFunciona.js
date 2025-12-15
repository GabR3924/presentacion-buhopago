export default function FuncionaNoFunciona({ segmentos }) {
  return (
    <div className="space-y-6">
      {segmentos.map((seg, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary-500">
          <h4 className="text-xl font-bold text-gray-800 mb-4">
            👥 {seg.segmento}
          </h4>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h5 className="font-bold text-green-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✓</span>
                Qué Funciona
              </h5>
              <ul className="space-y-2">
                {seg.funciona.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-green-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h5 className="font-bold text-red-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✗</span>
                Qué No Funciona
              </h5>
              <ul className="space-y-2">
                {seg.no_funciona.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {seg.nota && (
            <div className="bg-yellow-50 rounded p-3 border-l-4 border-yellow-500">
              <p className="text-sm text-yellow-900">
                📌 <strong>Nota:</strong> {seg.nota}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}