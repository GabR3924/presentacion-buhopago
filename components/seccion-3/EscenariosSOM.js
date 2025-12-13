'use client'; 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function EscenariosSOM({ escenarios }) {
  const data = escenarios.map(esc => ({
    nombre: esc.nombre,
    volumen: parseFloat(esc.volumen_anual.replace(/[^\d.]/g, '')),
    revenue: parseFloat(esc.revenue_asumido.replace(/[^\d.]/g, ''))
  }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        💰 Escenarios de Revenue (SOM)
      </h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value}M USD`} />
          <Legend />
          <Bar dataKey="volumen" fill="#0284c7" name="Volumen Anual (M)" />
          <Bar dataKey="revenue" fill="#38bdf8" name="Revenue (M)" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 space-y-3">
        {escenarios.map((esc, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-500">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-gray-800">{esc.nombre}</h4>
                <p className="text-sm text-gray-600">{esc.nota}</p>
              </div>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                {esc.captura_sam} del SAM
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <p className="text-xs text-gray-600">Volumen Anual</p>
                <p className="text-lg font-bold text-gray-800">{esc.volumen_anual}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Revenue Proyectado</p>
                <p className="text-lg font-bold text-primary-600">{esc.revenue_asumido}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}