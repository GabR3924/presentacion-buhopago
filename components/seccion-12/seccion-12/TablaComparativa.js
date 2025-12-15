export default function TablaComparativa({ comparativa }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Característica</th>
            <th className="px-4 py-3 text-center font-semibold text-blue-700">STARTER</th>
            <th className="px-4 py-3 text-center font-semibold text-blue-700">GROWTH</th>
            <th className="px-4 py-3 text-center font-semibold text-blue-700">PRO</th>
            <th className="px-4 py-3 text-center font-semibold text-green-700">BUSINESS</th>
            <th className="px-4 py-3 text-center font-semibold text-purple-700">ENTERPRISE</th>
          </tr>
        </thead>
        <tbody>
          {comparativa.tabla_comparativa.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 font-medium text-gray-800">{row.caracteristica}</td>
              <td className="px-4 py-3 text-center text-gray-700">{row.starter_b2c}</td>
              <td className="px-4 py-3 text-center text-gray-700">{row.growth_b2c}</td>
              <td className="px-4 py-3 text-center text-gray-700">{row.pro_b2c}</td>
              <td className="px-4 py-3 text-center text-gray-700">{row.business_b2b}</td>
              <td className="px-4 py-3 text-center text-gray-700">{row.enterprise_b2b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}