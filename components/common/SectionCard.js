export default function SectionCard({ title, children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 mb-6 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary-500 pb-2">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
