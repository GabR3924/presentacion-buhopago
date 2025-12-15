export default function Comparativas({ comparativa }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Característica</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-primary-700">BuhoPago Fase 1</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">BuhoPago Fase 2</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Transferencia Manual</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">POS Tradicional</th>
          </tr>
        </thead>
        <tbody>
          {comparativa.tabla.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 font-semibold text-gray-800 text-sm">{row.caracteristica}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.buhopago_fase_1 || row.buhopago}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.buhopago_fase_2 || row.buhopago}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.transferencia_manual}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{row.pos_tradicional}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}