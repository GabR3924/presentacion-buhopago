import SectionCard from '../common/SectionCard';
import ListItem from '../common/ListItem';

export default function Posicionamiento({ data }) {
  const { posicionamiento } = data;

  return (
    <SectionCard title={posicionamiento.titulo}>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
          <h3 className="text-lg font-semibold text-red-800 mb-3">
            ❌ No es:
          </h3>
          <ListItem items={posicionamiento.no_es} icon="•" />
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            ✓ Sí es:
          </h3>
          <ListItem items={posicionamiento.si_es} icon="•" />
        </div>
      </div>
      
      <div className="bg-primary-600 text-white rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-2">💡 Mensaje Clave</h3>
        <p className="text-lg">{posicionamiento.mensaje_clave}</p>
      </div>
    </SectionCard>
  );
}
