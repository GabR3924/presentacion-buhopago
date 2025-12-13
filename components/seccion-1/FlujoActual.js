import SectionCard from '../common/SectionCard';

export default function FlujoActual({ data }) {
  const { flujo_actual } = data;

  return (
    <SectionCard title={flujo_actual.titulo}>
      <div className="flex flex-col space-y-3">
        {flujo_actual.pasos.map((paso, index) => (
          <div key={index} className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
              {index + 1}
            </div>
            <div className="flex-grow bg-gray-50 rounded-lg p-4 border-l-4 border-primary-300">
              <p className="text-gray-700">{paso}</p>
            </div>
            {index < flujo_actual.pasos.length - 1 && (
              <div className="flex-shrink-0 ml-4">
                <svg 
                  className="w-6 h-6 text-primary-400" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
