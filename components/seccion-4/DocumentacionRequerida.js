export default function DocumentacionRequerida({ documentacion }) {
  return (
    <div className="space-y-6">
      {documentacion.secciones.map((seccion, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
            <h4 className="text-lg font-bold text-white">{seccion.titulo}</h4>
          </div>
          
          <div className="p-6">
            <ul className="space-y-3">
              {seccion.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                    {itemIdx + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}