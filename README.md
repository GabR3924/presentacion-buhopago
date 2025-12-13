# 🦉 Presentación BuhoPago

Sistema de presentación modular para BuhoPago, construido con Next.js 14 y Tailwind CSS.

## 🚀 Características

- ✅ Next.js 14 con App Router
- ✅ JavaScript (sin TypeScript)
- ✅ Tailwind CSS para estilos
- ✅ Arquitectura modular y escalable
- ✅ Separación clara de datos y componentes
- ✅ Sistema de navegación intuitivo

## 📁 Estructura del Proyecto

```
presentacion-buhopago/
├── app/                          # Páginas y rutas (App Router)
│   ├── page.js                   # Página principal (índice)
│   ├── layout.js                 # Layout principal
│   ├── globals.css               # Estilos globales
│   ├── seccion-1/               # Ruta para sección 1
│   │   └── page.js
│   └── seccion-2/               # Ruta para sección 2
│       └── page.js
├── components/                   # Componentes React
│   ├── common/                   # Componentes reutilizables
│   │   ├── SectionCard.js
│   │   └── ListItem.js
│   ├── seccion-1/               # Componentes específicos de sección 1
│   │   ├── ContextoProblema.js
│   │   ├── FlujoActual.js
│   │   ├── Painpoints.js
│   │   └── Posicionamiento.js
│   └── seccion-2/               # Componentes específicos de sección 2
│       ├── CategoriaVariables.js
│       └── ModeloEconomico.js
├── data/                         # Datos estructurados
│   ├── seccion-1/
│   │   └── contextoProblema.js
│   └── seccion-2/
│       └── modeloEconomico.js
└── utils/                        # Utilidades y helpers
```

## 🎯 Secciones

### Sección 1: Contexto del Problema
- **Contexto**: Situación actual del mercado de pagos en Venezuela
- **Flujo Actual**: Proceso de pago móvil actual paso a paso
- **Painpoints**: Problemas y fricciones del flujo actual
- **Posicionamiento**: Propuesta de valor de BuhoPago

### Sección 2: Modelo Económico
Modelo económico dinámico con las siguientes categorías:

1. **Variables Macroeconómicas** ⭐
   - PIB Base (USD millones)
   - Crecimiento PIB Anual (%)
   - Tasa de Inflación (%)
   - Porcentaje de Informalidad (%)

2. **Distribución Sectorial**
   - Sector Primario, Secundario, Terciario
   - Subsectores del Terciario (Comercio, Servicios, etc.)

3. **Variables del Mercado Objetivo** ⭐
   - Cobertura geográfica
   - Market share
   - Ticket promedio
   - Frecuencia transaccional
   - Adopción y retención

4. **Variables de Comisiones** ⭐
   - Comisión propia
   - Comisión banco
   - Take rate neto
   - Costos por transacción

5. **Unit Economics** ⭐
   - CPC (Costo por comercio)
   - CAC (Costo de adquisición)
   - LTV (Lifetime Value)
   - Margen neto

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 💻 Uso

1. **Página Principal** (`/`): Muestra el índice con acceso a todas las secciones
2. **Sección 1** (`/seccion-1`): Visualiza el contexto del problema
3. **Sección 2** (`/seccion-2`): Interactúa con el modelo económico dinámico

## 🎨 Personalización

### Agregar una Nueva Sección

1. **Crear carpeta de datos**:
```bash
mkdir -p data/seccion-3
```

2. **Crear archivo de datos**:
```javascript
// data/seccion-3/misDatos.js
export const misDatos = {
  // Tu estructura de datos aquí
};
```

3. **Crear componentes**:
```bash
mkdir -p components/seccion-3
```

4. **Crear página**:
```bash
mkdir -p app/seccion-3
# Crear app/seccion-3/page.js
```

5. **Agregar link en página principal** (app/page.js)

### Modificar Valores por Defecto

Edita los valores en `data/seccion-2/modeloEconomico.js`:

```javascript
pib_base_millones_usd: {
  label: "PIB Base (USD millones)",
  value: 50000,  // ← Cambiar aquí
  obligatorio: true
}
```

## 🎯 Características del Modelo Económico

- ✅ Valores por defecto predefinidos
- ✅ Campos obligatorios marcados con ⭐
- ✅ Validación de inputs
- ✅ Subsectores anidados
- ✅ Arrays para proyecciones multi-año
- ✅ Selectores para opciones predefinidas
- ✅ Botón para restaurar valores por defecto
- ✅ Visualización de valores actuales en tiempo real

## 📝 Notas Técnicas

- **Next.js 14**: Usando App Router (no Pages Router)
- **Sin TypeScript**: Todo el código está en JavaScript
- **Tailwind CSS**: Clases utilitarias configuradas
- **Path Aliases**: Usa `@/` para importar desde la raíz
- **Client Components**: Marcados con `'use client'` donde se necesita interactividad

## 🔄 Próximos Pasos

- [ ] Agregar más secciones según necesidad
- [ ] Implementar gráficos para visualizar datos del modelo económico
- [ ] Agregar exportación de datos (PDF/JSON)
- [ ] Implementar cálculos automáticos basados en los inputs
- [ ] Agregar modo de presentación (fullscreen, navegación con teclado)

## 📄 Licencia

Proyecto privado - BuhoPago

---

Desarrollado con ❤️ para BuhoPago
