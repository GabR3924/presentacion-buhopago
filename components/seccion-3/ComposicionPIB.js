'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#0284c7', '#38bdf8', '#7dd3fc', '#bae6fd', '#e0f2fe', '#f0f9ff'];

export default function ComposicionPIB({ sectores }) {
  const data = sectores.map(sector => ({
    name: sector.nombre,
    value: parseFloat(sector.participacion_pib)
  }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        📊 Composición del PIB por Sector
      </h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name.split(',')[0]}: ${(percent * 100).toFixed(1)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 grid md:grid-cols-2 gap-3">
        {sectores.map((sector, idx) => (
          <div key={idx} className="bg-gray-50 rounded p-3 border-l-4" style={{ borderColor: COLORS[idx] }}>
            <p className="text-sm font-semibold text-gray-800">{sector.nombre}</p>
            <p className="text-2xl font-bold text-primary-600">{sector.participacion_pib}</p>
          </div>
        ))}
      </div>
    </div>
  );
}