export default function EmbudoMercado({ tam, sam, som }) {
  const datos = [
    { nivel: 'TAM', valor: tam, porcentaje: 100, color: 'bg-blue-200', label: 'Total Addressable Market' },
    { nivel: 'SAM', valor: sam, porcentaje: (sam/tam * 100).toFixed(1), color: 'bg-blue-400', label: 'Serviceable Available Market' },
    { nivel: 'SOM', valor: som, porcentaje: (som/tam * 100).toFixed(1), color: 'bg-blue-600', label: 'Serviceable Obtainable Market' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
        🎯 Embudo de Mercado: TAM → SAM → SOM
      </h3>
      
      <div className="flex flex-col items-center space-y-4">
        {datos.map((item, idx) => (
          <div key={idx} className="w-full">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-bold text-lg">{item.nivel}</span>
                <span className="text-sm text-gray-600 ml-2">({item.label})</span>
              </div>
              <span className="text-sm font-semibold text-gray-700">{item.porcentaje}%</span>
            </div>
            
            <div 
              className={`${item.color} rounded-lg p-4 transition-all hover:scale-105 cursor-pointer`}
              style={{ width: `${item.porcentaje}%`, minWidth: '60%' }}
            >
              <p className="font-bold text-gray-800 text-center">${item.valor}B</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600 text-center">
          💡 El embudo muestra cómo se refina el mercado total hasta llegar al mercado capturar realista
        </p>
      </div>
    </div>
  );
}