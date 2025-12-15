export default function PlanAccion({ plan }) {
  return (
    <div className="space-y-4">
      {plan.acciones.map((accion, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-bold text-gray-800">{accion.nombre}</h4>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold">
              {accion.timeline}
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">Tareas:</p>
            <ul className="space-y-2">
              {accion.tareas.map((tarea, tIdx) => (
                <li key={tIdx} className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">{tarea}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}