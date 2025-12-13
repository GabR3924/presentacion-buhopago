export default function ListItem({ items, icon = "•" }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-primary-600 font-bold mr-3 mt-1">{icon}</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
