export default function MetricasTAM({ pib2024, pib2025, tam2024, tam2025 }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg p-6 text-white">
        <p className="text-sm opacity-90 mb-2">PIB 2024</p>
        <p className="text-3xl font-bold">${pib2024}B</p>
        <p className="text-xs opacity-75 mt-2">Base macroeconómica</p>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-lg p-6 text-white">
        <p className="text-sm opacity-90 mb-2">PIB 2025</p>
        <p className="text-3xl font-bold">${pib2025}B</p>
        <p className="text-xs opacity-75 mt-2">+8.7% crecimiento</p>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-lg p-6 text-white">
        <p className="text-sm opacity-90 mb-2">TAM 2024</p>
        <p className="text-3xl font-bold">${tam2024}B</p>
        <p className="text-xs opacity-75 mt-2">Sector terciario</p>
      </div>

      <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-lg p-6 text-white">
        <p className="text-sm opacity-90 mb-2">TAM 2025</p>
        <p className="text-3xl font-bold">${tam2025}B</p>
        <p className="text-xs opacity-75 mt-2">🎯 Mercado objetivo</p>
      </div>
    </div>
  );
}