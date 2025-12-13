import SectionCard from '../common/SectionCard';

export default function CategoriaVariables({ titulo, variables, values, onChange }) {
  return (
    <SectionCard title={titulo}>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.keys(variables).map((key) => {
          const variable = variables[key];
          
          // Si tiene subsectores, renderizarlos de forma especial
          if (variable.subsectores) {
            return (
              <div key={key} className="md:col-span-2">
                <div className="mb-3">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {variable.label}
                    {variable.obligatorio && (
                      <span className="text-red-600 ml-1">⭐</span>
                    )}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={values[key] || variable.value}
                    onChange={(e) => onChange(key, parseFloat(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                {/* Subsectores en grid */}
                <div className="ml-6 pl-4 border-l-2 border-gray-300 grid md:grid-cols-2 gap-3">
                  {Object.keys(variable.subsectores).map((subKey) => {
                    const subsector = variable.subsectores[subKey];
                    return (
                      <div key={subKey}>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          ↳ {subsector.label}
                          {subsector.obligatorio && (
                            <span className="text-red-600 ml-1">⭐</span>
                          )}
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={values[subKey] || subsector.value}
                          onChange={(e) => onChange(subKey, parseFloat(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
          
          // Tipo select
          if (variable.tipo === 'select') {
            return (
              <div key={key}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {variable.label}
                  {variable.obligatorio && (
                    <span className="text-red-600 ml-1">⭐</span>
                  )}
                </label>
                <select
                  value={values[key] || variable.value}
                  onChange={(e) => onChange(key, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {variable.opciones.map((opcion) => (
                    <option key={opcion} value={opcion}>
                      {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            );
          }
          
          // Tipo array (proyección 5 años)
          if (variable.tipo === 'array') {
            return (
              <div key={key} className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {variable.label}
                  {variable.obligatorio && (
                    <span className="text-red-600 ml-1">⭐</span>
                  )}
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {(values[key] || variable.value).map((val, idx) => (
                    <div key={idx}>
                      <label className="block text-xs text-gray-600 mb-1">
                        Año {idx + 1}
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={val}
                        onChange={(e) => {
                          const newArray = [...(values[key] || variable.value)];
                          newArray[idx] = parseFloat(e.target.value);
                          onChange(key, newArray);
                        }}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          
          // Input normal
          return (
            <div key={key}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {variable.label}
                {variable.obligatorio && (
                  <span className="text-red-600 ml-1">⭐</span>
                )}
                {!variable.obligatorio && (
                  <span className="text-gray-400 ml-1 text-xs">(opcional)</span>
                )}
              </label>
              <input
                type="number"
                step="0.01"
                value={values[key] || variable.value}
                onChange={(e) => onChange(key, parseFloat(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}