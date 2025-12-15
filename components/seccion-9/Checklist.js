export default function Checklist({ checklist }) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-500 p-6">
      <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
        {checklist.titulo}
      </h3>
      
      <div className="space-y-4">
        {checklist.items.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">{item.item}</h4>
                <p className="text-sm text-gray-600">{item.detalle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}