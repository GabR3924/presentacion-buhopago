export default function ProcesoITFB({ proceso }) {
  return (
    <div className="space-y-4">
      {proceso.map((fase, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-lg font-bold text-gray-800">{fase.fase}</h4>
              <p className="text-sm text-gray-600">Tiempo: {fase.tiempo}</p>
            </div>
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-bold">
              ${fase.costo}
            </span>
          </div>

          <div className="bg-gray-50 rounded p-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">Tareas principales:</p>
            <ul className="space-y-1">
              {fase.tareas.map((tarea, tIdx) => (
                <li key={tIdx} className="text-sm text-gray-700">• {tarea}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}