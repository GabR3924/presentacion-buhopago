export default function FlujoTransaccion({ pasos, descripcion }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">🔄 Proceso de Transacción</h3>
      <p className="text-gray-600 mb-6">{descripcion}</p>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {pasos.map((paso, idx) => (
          <div key={idx} className="flex-1 w-full">
            <div className="relative">
              <div className="bg-primary-600 text-white rounded-lg p-6 text-center h-full">
                <div className="text-3xl font-bold mb-2">{paso.orden}</div>
                <p className="text-sm">{paso.descripcion}</p>
              </div>
              
              {idx < pasos.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <svg className="w-16 h-8 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            
            {idx < pasos.length - 1 && (
              <div className="md:hidden flex justify-center my-2">
                <svg className="w-8 h-16 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}