# 🚀 GUÍA RÁPIDA DE INICIO - BuhoPago Presentación

## 📦 Instalación y Ejecución

```bash
# 1. Navegar al directorio del proyecto
cd presentacion-buhopago

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

## 🎯 URLs Disponibles

- **Página Principal**: `http://localhost:3000`
- **Sección 1 (Contexto)**: `http://localhost:3000/seccion-1`
- **Sección 2 (Modelo Económico)**: `http://localhost:3000/seccion-2`

## 📂 Archivos Clave para Editar

### Datos de la Sección 1
📄 `data/seccion-1/contextoProblema.js`
- Modifica el contenido, painpoints, flujo, etc.

### Datos de la Sección 2 (Modelo Económico)
📄 `data/seccion-2/modeloEconomico.js`
- Cambia valores por defecto
- Ajusta rangos y opciones
- Modifica campos obligatorios

### Estilos Generales
📄 `app/globals.css`
- Personaliza colores
- Ajusta clases de Tailwind

### Configuración de Colores
📄 `tailwind.config.js`
- Modifica la paleta de colores "primary"

## 🎨 Colores Actuales

```javascript
primary: {
  50: '#f0f9ff',   // Muy claro
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',  // Color principal
  600: '#0284c7',  // Color de énfasis
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',  // Muy oscuro
}
```

## ✅ Checklist de Personalización

- [ ] Cambiar valores por defecto del modelo económico
- [ ] Actualizar datos del contexto del problema
- [ ] Ajustar colores en tailwind.config.js
- [ ] Personalizar logo/branding en páginas
- [ ] Agregar más secciones según necesidad

## 🔧 Agregar Nueva Sección (Ejemplo: Sección 3)

### Paso 1: Crear estructura de datos
```bash
# Crear carpeta
mkdir -p data/seccion-3

# Crear archivo de datos
touch data/seccion-3/misDatos.js
```

### Paso 2: Crear componentes
```bash
# Crear carpeta de componentes
mkdir -p components/seccion-3

# Crear componente principal
touch components/seccion-3/MiComponente.js
```

### Paso 3: Crear página
```bash
# Crear carpeta de ruta
mkdir -p app/seccion-3

# Crear página
touch app/seccion-3/page.js
```

### Paso 4: Agregar link en página principal
Editar `app/page.js` y agregar card para la nueva sección.

## 📊 Estructura de Datos

### Formato para datos estáticos (Sección 1)
```javascript
export const misDatos = {
  seccion: {
    titulo: "Mi Título",
    contenido: [
      "Punto 1",
      "Punto 2",
      "Punto 3"
    ]
  }
};
```

### Formato para modelo económico (Sección 2)
```javascript
export const modeloDatos = {
  categoria: {
    titulo: "Mi Categoría",
    variables: {
      mi_variable: {
        label: "Etiqueta visible",
        value: 100,              // Valor por defecto
        obligatorio: true,       // true = ⭐, false = opcional
        tipo: "number"          // number, select, array
      }
    }
  }
};
```

## 🎯 Características Especiales

### Variables Obligatorias
Marca con `obligatorio: true` y aparecerá el ⭐ en la UI

### Arrays (Proyecciones)
```javascript
proyeccion_market_share: {
  label: "Proyección Market Share (5 años)",
  value: [0.5, 1.2, 2.5, 4.0, 6.0],
  tipo: "array"
}
```

### Selectores
```javascript
sector_objetivo: {
  label: "Sector Objetivo",
  value: "terciario",
  tipo: "select",
  opciones: ["primario", "secundario", "terciario"]
}
```

### Subsectores Anidados
```javascript
sector_terciario: {
  label: "Sector Terciario (%)",
  value: 60,
  subsectores: {
    ter_comercio: {
      label: "Comercio (%)",
      value: 35
    }
  }
}
```

## 🐛 Solución de Problemas

### Error: Module not found
```bash
# Limpiar caché y reinstalar
rm -rf node_modules .next
npm install
```

### Error: Port already in use
```bash
# Usar otro puerto
npm run dev -- -p 3001
```

### Error de compilación de Tailwind
```bash
# Verificar que postcss.config.js existe
# Verificar que tailwind.config.js está bien formado
```

## 📱 Responsive Design

El proyecto está optimizado para:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🚀 Deploy a Producción

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build manual
```bash
npm run build
npm start
```

## 💡 Tips

1. **Usa los componentes comunes** (`components/common/`) para mantener consistencia
2. **Separa la lógica de los datos** - mantén los datos en `data/` y los componentes en `components/`
3. **Sigue la convención de nombres** - usa kebab-case para rutas, PascalCase para componentes
4. **Documenta cambios importantes** - actualiza el README cuando agregues secciones

## 📞 Soporte

Para más información, consulta:
- README.md principal
- Documentación de Next.js: https://nextjs.org/docs
- Documentación de Tailwind: https://tailwindcss.com/docs

---

¡Listo para presentar! 🦉
