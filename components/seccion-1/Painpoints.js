import SectionCard from '../common/SectionCard';
import ListItem from '../common/ListItem';

export default function Painpoints({ data }) {
  const { painpoints } = data;

  return (
    <SectionCard title={painpoints.titulo}>
      <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
        <ListItem items={painpoints.problemas} icon="❌" />
      </div>
    </SectionCard>
  );
}
