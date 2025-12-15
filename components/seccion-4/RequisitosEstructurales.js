export default function RequisitosEstructurales({ requisitos }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {requisitos.map((req, idx) => (
        <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-300">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-lg font-bold text-blue-900">{req.item}</h4>
            <span className="text-3xl">📋</span>
          </div>
          
          <div className="space-y-2">
            <div>
              <p className="text-xs font-semibold text-blue-700 uppercase">Requerimiento</p>
              <p className="text-blue-900 font-medium">{req.requerimiento}</p>
            </div>
            
            <div className="pt-2 border-t border-blue-300">
              <p className="text-xs font-semibold text-blue-700 uppercase mb-1">Detalle</p>
              <p className="text-sm text-blue-800">{req.detalle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}