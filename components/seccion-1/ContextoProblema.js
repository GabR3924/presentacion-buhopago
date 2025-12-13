import SectionCard from '../common/SectionCard';
import ListItem from '../common/ListItem';

export default function ContextoProblema({ data }) {
  const { contexto_problema } = data;

  return (
    <SectionCard title={contexto_problema.titulo}>
      {contexto_problema.subsecciones.map((subseccion, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            {subseccion.titulo}
          </h3>
          
          {Array.isArray(subseccion.contenido) && 
           typeof subseccion.contenido[0] === 'string' ? (
            // Contenido simple (lista de strings)
            <>
              <ListItem items={subseccion.contenido} icon="✓" />
              {subseccion.fuentes && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Fuentes:</p>
                  <div className="flex flex-wrap gap-2">
                    {subseccion.fuentes.map((fuente, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs"
                      >
                        {fuente}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            // Contenido complejo (métodos con limitaciones)
            <div className="space-y-4">
              {subseccion.contenido.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-400"
                >
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {item.metodo}
                  </h4>
                  <ListItem items={item.limitaciones} icon="⚠" />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </SectionCard>
  );
}