export default function CTASection({ cta }) {
  return (
    <div className="space-y-6">
      {/* Fase 1 Disponible */}
      <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg p-8">
        <h3 className="text-3xl font-bold mb-4">{cta.fase_1_disponible.titulo}</h3>
        <p className="text-xl opacity-90 mb-6">{cta.fase_1_disponible.descripcion}</p>

        <div className="bg-white/20 rounded-lg p-6 mb-6">
          <p className="font-semibold mb-4">Pasos:</p>
          <ol className="space-y-2">
            {cta.fase_1_disponible.pasos.map((paso, idx) => (
              <li key={idx} className="text-lg">{paso}</li>
            ))}
          </ol>
        </div>

        <div className="bg-yellow-400 text-yellow-900 rounded-lg p-4 mb-4">
          <p className="font-bold">{cta.fase_1_disponible.oferta_lanzamiento}</p>
        </div>

        <p className="text-xl font-bold">{cta.fase_1_disponible.trial}</p>
      </div>

      {/* Contacto */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">{cta.contacto.titulo}</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {cta.contacto.canales.map((canal, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-blue-800 font-medium">{canal}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Early Access Fase 2 */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg p-8">
        <h4 className="text-2xl font-bold mb-4">{cta.early_access_fase_2.titulo}</h4>
        <p className="text-lg opacity-90 mb-6">{cta.early_access_fase_2.descripcion}</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {cta.early_access_fase_2.beneficios.map((ben, idx) => (
            <div key={idx} className="bg-white/20 rounded-lg p-3">
              <p className="font-medium">{ben}</p>
            </div>
          ))}
        </div>

        <div className="bg-white text-purple-700 rounded-lg p-4 text-center font-bold text-lg">
          {cta.early_access_fase_2.cta}
        </div>
      </div>
    </div>
  );
}