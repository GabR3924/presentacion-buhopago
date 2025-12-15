export default function TimelineProyectado({ timeline }) {
  return (
    <div className="space-y-4">
      {timeline.map((hito, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-lg font-bold text-gray-800">{hito.periodo}</h4>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
              {hito.status}
            </span>
          </div>

          <div className="space-y-2">
            <div className="bg-green-50 rounded p-3">
              <p className="text-xs font-semibold text-green-800 mb-1">Objetivo:</p>
              <p className="text-sm text-green-700">{hito.objetivo}</p>
            </div>

            {hito.status !== '✅ APROBADA' && (
              <div className="bg-purple-50 rounded p-3">
                <p className="text-xs font-semibold text-purple-800 mb-1">Status Licencia:</p>
                <p className="text-sm text-purple-700">{hito.status}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}