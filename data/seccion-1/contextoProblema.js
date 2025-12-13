export const contextoProblemaData = {
  contexto_problema: {
    titulo: "Contexto del problema",
    subsecciones: [
      {
        titulo: "Qué existe hoy en Venezuela",
        contenido: [
          "Bancos tradicionales: Transferencias, POS, APIs de Débito Inmediato.",
          "Pago Móvil (~41% de pagos digitales).",
          "POS / terminales físicas (~51% de pagos digitales).",
          "Métodos híbridos / internacionales: PayPal, CLP, stablecoins.",
          "~74% de transacciones se realizan digitalmente."
        ],
        fuentes: [
          "DataReportal 2025",
          "Debate SIESA 2025",
          "Banco de Venezuela 2025"
        ]
      },
      {
        titulo: "Escenarios que los métodos actuales no cubren bien",
        contenido: [
          {
            metodo: "Pago Móvil",
            limitaciones: [
              "Retrasos interbancarios",
              "Pagos recurrentes no automáticos",
              "Confirmación manual",
              "Comercios pequeños",
              "Historial no centralizado"
            ]
          },
          {
            metodo: "POS / Terminales",
            limitaciones: [
              "Dependencia de infraestructura física",
              "Limitado a tarjetas específicas",
              "Validación manual",
              "Conciliación tardía"
            ]
          },
          {
            metodo: "Biopago",
            limitaciones: [
              "Solo bancos compatibles",
              "Hardware específico",
              "Límites de monto",
              "Integración difícil con e-commerce"
            ]
          }
        ]
      }
    ]
  },
  flujo_actual: {
    titulo: "Flujo de pago móvil actual",
    pasos: [
      "Recibes datos del pago.",
      "Abres la app del banco.",
      "Ingresas datos manualmente.",
      "Confirmas operación.",
      "Tomas captura del comprobante.",
      "Envías captura al receptor o página."
    ]
  },
  painpoints: {
    titulo: "Problemas del flujo actual (Painpoints / Fricciones)",
    problemas: [
      "Múltiples pasos manuales → más tiempo invertido.",
      "Dependencia de validación manual → retrasos y cuellos de botella.",
      "Riesgo de error humano → errores de monto o receptor.",
      "Fragmentación → apps diferentes según banco o comercio.",
      "Tiempo invertido → aunque el pago sea inmediato, todo el proceso lleva minutos."
    ]
  },
  posicionamiento: {
    titulo: "Complemento, no competencia",
    no_es: [
      "No reemplaza Pago Móvil ni POS",
      "No es banco digital"
    ],
    si_es: [
      "Mejora el proceso logístico de cobro",
      "Aplica Débito Inmediato adaptado a online",
      "Optimiza experiencia digital"
    ],
    mensaje_clave: "No competimos con bancos ni métodos existentes. Atendemos la misma audiencia, resolviendo una necesidad puntual: pagos digitales inmediatos y sin fricción."
  },
  referencias: [
    {
      autores: "DataReportal",
      año: 2025,
      titulo: "Digital 2025: Venezuela",
      fuente: "DataReportal Global Digital Insights",
      url: "https://datareportal.com/reports/digital-2025-venezuela",
      fecha_acceso: "11 de diciembre de 2025"
    },
    {
      autores: "Tu Autor Aquí",
      año: 2025,
      titulo: "Tu título aquí",
      fuente: "Tu fuente",
      url: "https://tu-url.com"
    }
  ]
};
