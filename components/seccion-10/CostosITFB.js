export default function CostosITFB({ costos }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-3 mb-6">
        {costos.items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-800 font-medium">{item.item}</span>
            <span className="text-primary-700 font-bold">
              ${item.rango} USD
            </span>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg p-6 text-center">
        <p className="text-sm opacity-90 mb-2">Total Estimado</p>
        <p className="text-4xl font-bold mb-2">{costos.total}</p>
        <p className="text-sm opacity-90">Tiempo: {costos.tiempo}</p>
      </div>
    </div>
  );
}