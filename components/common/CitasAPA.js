export default function CitasAPA({ referencias }) {
  if (!referencias || referencias.length === 0) {
    return null;
  }

  return (
    <footer className="bg-gray-100 rounded-lg shadow-inner p-8 mt-12 border-t-4 border-primary-500">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        📚 Referencias
      </h3>
      <div className="space-y-3">
        {referencias.map((ref, index) => (
          <div 
            key={index} 
            className="pl-8 -indent-8 text-gray-700 leading-relaxed"
          >
            <span className="text-primary-600 font-semibold mr-2">[{index + 1}]</span>
            {ref.autores && (
              <span className="font-medium">{ref.autores}. </span>
            )}
            {ref.año && (
              <span>({ref.año}). </span>
            )}
            {ref.titulo && (
              <span className="italic">{ref.titulo}. </span>
            )}
            {ref.fuente && (
              <span>{ref.fuente}. </span>
            )}
            {ref.url && (
              <a 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 underline break-all"
              >
                {ref.url}
              </a>
            )}
            {ref.doi && (
              <span className="text-sm text-gray-600"> https://doi.org/{ref.doi}</span>
            )}
            {ref.fecha_acceso && (
              <span className="text-sm text-gray-600"> (Consultado el {ref.fecha_acceso})</span>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-300">
        <p className="text-sm text-gray-500 italic">
          ℹ️ Las referencias siguen el formato APA 7ma edición
        </p>
      </div>
    </footer>
  );
}