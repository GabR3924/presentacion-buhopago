export const marcoLegalData = {
  titulo: "MARCO LEGAL VENEZOLANO PARA PLATAFFORMAS DE PAGOS - RESOLUCIÓN 001.21",

  norma_principal: {
    referencia: "Resolución N° 001.21 de SUDEBAN",
    fuente: "Gaceta Oficial N° 42.162 del 6 de julio de 2021",
    objeto: "Regular los servicios financieros prestados a través de nuevas tecnologías (Fintech) ofrecidos a las Instituciones del Sector Bancario.",
    estado: "VIGENTE Y DE CUMPLIMIENTO OBLIGATORIO"
  },

  // DEFINICIONES CLAVE SEGÚN LA NORMA
  definiciones_legales: {
    itfb: {
      termino: "Institución de Tecnología Financiera del Sector Bancario (ITFB)",
      definicion: "Toda persona jurídica autorizada por la SUDEBAN para prestar servicios financieros contemplados en esta normativa, a través del uso de nuevas tecnologías, a las Instituciones del Sector Bancario (Art. 3.2).",
      implicacion: "Es la figura legal que debe obtener cualquier plataforma que procese, orqueste o facilite pagos."
    },
    cliente_itfb: {
      termino: "Cliente (para una ITFB)",
      definicion: "Se refiere exclusivamente a las instituciones del sector bancario que contratan productos y/o servicios de las ITFB (Art. 3.13).",
      implicacion: "Para una plataforma de pagos B2B, el cliente legal es el BANCO, no las empresas finales."
    },
    servicios_financieros_regulados: {
      titulo: "Servicios Financieros que requieren autorización (Art. 16)",
      lista: [
        "Plataformas de conexión de FINTECH y de instituciones bancarias (Art. 16.4)",
        "Pasarela de Pago (Art. 3.6)",
        "Billetera Electrónica (Art. 3.7)",
        "Boton de Pago (Art. 3.10)",
        "Apertura de cuenta bancaria a través de nuevas tecnologías (Art. 16.1)"
      ]
    },
    psp: {
      termino: "Proveedor no Bancario de Servicios de Pago (PSP)",
      definicion: "Persona jurídica autorizada por el Banco Central de Venezuela para prestar servicios de pago en moneda nacional (Art. 3.25).",
      relacion: "También debe cumplir con las regulaciones de la 001.21 si opera en el sector bancario (Art. 41)."
    }
  },

  // REQUISITOS DE AUTORIZACIÓN (LO MÁS IMPORTANTE)
  autorizacion_itfb: {
    requisito_absoluto: {
      titulo: "AUTORIZACIÓN PREVIA OBLIGATORIA",
      descripcion: "Para organizarse y operar como ITFB se requiere obtener una autorización emitida por la SUDEBAN, previa opinión vinculante del Órgano Superior del Sistema Financiero Nacional (OSFIN) - (Art. 4).",
      consecuencia: "Operar sin esta autorización es ilegal y constituye infracción sancionable."
    },

    // ESTRUCTURA SOCIETARIA OBLIGATORIA
    requisitos_estructurales: [
      {
        item: "Forma Jurídica",
        requerimiento: "Sociedad Anónima (Art. 5).",
        detalle: "Con acciones de una misma clase, no convertibles al portador."
      },
      {
        item: "Accionistas",
        requerimiento: "Mínimo cinco (5) accionistas (Art. 5.a).",
        detalle: "No pueden estar incurso en las inhabilitaciones del Art. 12."
      },
      {
        item: "Capital",
        requerimiento: "Capital mínimo totalmente pagado en efectivo (Art. 7).",
        detalle: "Monto será fijado por SUDEBAN según el servicio y riesgos."
      },
      {
        item: "Domicilio",
        requerimiento: "Establecido en territorio nacional (Art. 5.c).",
        detalle: "Centro de procesamiento de datos también debe estar en Venezuela (Art. 9)."
      }
    ],

    // DOCUMENTACIÓN EXIGIDA (Resumen del Art. 9)
    documentacion_solicitud: {
      titulo: "Documentación para la solicitud de autorización (Art. 9)",
      secciones: [
        {
          titulo: "De los Accionistas",
          items: [
            "Copia de cédula de identidad y certificado de inscripción RIF.",
            "Reporte histórico del Sistema de Información Central de Riesgo (SIORI) de los últimos 5 años.",
            "Declaración Jurada notariada de no inhabilitación.",
            "Balance personal y certificado de ingresos de los últimos 2 períodos.",
            "Dos referencias bancarias originales."
          ]
        },
        {
          titulo: "De la Sociedad Mercantil",
          items: [
            "Documento constitutivo y estatutos sociales registrados.",
            "Certificado de Inscripción en el RIF vigente.",
            "Título de propiedad o contrato de arrendamiento del local.",
            "Plan de Negocios detallado (servicios, instrumentos de pago, costos, mercados).",
            "Políticas de prevención de LC/FT y seguridad de la información.",
            "Descripción completa de la Plataforma Tecnológica (infraestructura, flujos, seguridad)."
          ]
        }
      ]
    },

    plazo_operacion: {
      titulo: "Plazo para iniciar operaciones",
      descripcion: "Una vez aprobada la autorización, se debe iniciar operaciones dentro de los 120 días hábiles bancarios (Art. 14).",
      prorroga: "Se puede solicitar una única prórroga de 90 días adicionales."
    }
  },

  // SUPERVISIÓN Y OBLIGACIONES POST-AUTORIZACIÓN
  supervision_obligaciones: {
    nivel_supervision: "SUPERVISIÓN DIRECTA por la SUDEBAN (Art. 26)",
    obligaciones_principales: [
      {
        item: "Contratos con Bancos",
        requerimiento: "Deben ser previamente evaluados y aprobados por la SUDEBAN (Art. 32).",
        modelo_minimo: "Deben incluir identificación de partes, obligaciones, plazo, resolución de controversias y protección al cliente (Art. 33)."
      },
      {
        item: "Cumplimiento LC/FT",
        requerimiento: "Programa integral conforme a la Resolución 010-25 y demás normativa (Art. 9, 24).",
        componentes: "Oficial de Cumplimiento, manuales, SIAR, capacitación."
      },
      {
        item: "Auditoría",
        requerimiento: "Estados financieros auditados anualmente por auditor externo independiente inscrito en SUDEBAN (Art. 30)."
      },
      {
        item: "Conservación de Registros",
        requerimiento: "Por un plazo mínimo de diez (10) años (Art. 28).",
        formato: "Originales archivados en formato impreso o electrónico."
      },
      {
        item: "Reportes e Información",
        requerimiento: "Proporcionar a SUDEBAN la información que requiera sobre sus actividades (Art. 25)."
      }
    ]
  },

  // SANCIONES Y PROHIBICIONES
  sanciones: {
    infraccion: "La infracción a estas normas será sancionada conforme al Decreto con Rango, Valor y Fuerza de Ley de Instituciones del Sector Bancario (Art. 42).",
    medidas: "SUDEBAN puede imponer medidas administrativas, multas, suspensión o revocatoria de la autorización.",
    
    prohibicion_absoluta: {
      titulo: "PROHIBICIÓN DE OPERAR SIN AUTORIZACIÓN (Art. 41)",
      texto: "Las otras Instituciones de Tecnología Financiera... debiendo obtener las autorizaciones respectivas para poder operar en el país. Dichos sujetos no podrán divulgar o publicizar sus servicios en el territorio nacional, hasta tanto no obtengan la habilitación correspondiente.",
      interpretacion: "No solo está prohibido operar, sino incluso hacer marketing o promoción de servicios financieros tecnológicos sin la autorización."
    }
  },

  // NORMA COMPLEMENTARIA
  normativa_complementaria: {
    resolucion_010_25: {
      referencia: "Resolución 010-25 de SUDEBAN",
      objeto: "Establece las normas relativas a la administración y supervisión de los Riesgos de Legitimación de Capitales, Financiamiento al Terrorismo y Financiamiento de la Proliferación.",
      aplicabilidad: "Una ITFB autorizada es un Sujeto Obligado y debe cumplir esta normativa en su totalidad."
    }
  },

  // REFERENCIAS BIBLIOGRÁFICAS

  referencias: [
    {
      // REFERENCIA PRINCIPAL Y OBLIGATORIA
      autores: "SUDEBAN",
      año: 2021,
      titulo: "Resolución N° 001.21: Normas que Regulan los Servicios de Tecnología Financiera del Sector Bancario (FINTECH)",
      fuente: "Gaceta Oficial de la República Bolivariana de Venezuela N° 42.162",
      fecha_publicacion: "6 de julio de 2021",
      relevancia: "NORMA ESPECÍFICA Y VINCULANTE. Establece el marco legal para operar como plataforma de pagos en Venezuela.",
      articulos_clave: ["Art. 3 (Definiciones)", "Art. 4 (Autorización)", "Art. 16 (Servicios)", "Art. 41 (Prohibición de operar sin autorización)"]
    },
    {
      autores: "SUDEBAN",
      año: 2025,
      titulo: "Resolución 010-25: Normas relativas a la administración y supervisión de los Riesgos de LC/FT/FPADM",
      fuente: "Superintendencia de las Instituciones del Sector Bancario",
      relevancia: "Norma de cumplimiento complementaria para Sujetos Obligados (una ITFB autorizada lo es)."
    }
  ]
};