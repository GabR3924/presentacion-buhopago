export const marcoRegulatorioData = {
  analisis_marco_regulatorio: {
    titulo: "ANÁLISIS DEL MARCO REGULATORIO VENEZOLANO PARA PLATAFORMAS DE PAGOS",
    base_legal_principal: {
      titulo: "BASE LEGAL PRINCIPAL: RESOLUCIÓN 010-25 (SUDEBAN)",
      objeto: "Establece las 'Normas relativas a la administración y supervisión de los Riesgos de Legitimación de Capitales, Financiamiento al Terrorismo y Financiamiento de la Proliferación de Armas de Destrucción Masiva (LC/FT/FPADM)'.",
      ambito_aplicacion: "Instituciones del Sector Bancario (Bancos Universales, Comerciales, de Inversión, Entidades de Ahorro y Préstamo, Sociedades Financieras, Casas de Cambio, Emisores de Tarjetas, etc.)",
      conclusion_clave: "La Resolución NO menciona ni regula específicamente a las empresas fintech o agregadores de pagos. Su aplicación a estos actores es indirecta, a través de las instituciones bancarias con las que se relacionan y bajo el principio de regulación 'basada en la actividad'."
    },
    clasificacion_por_actividad: {
      titulo: "CLASIFICACIÓN POR ACTIVIDAD (¿EN QUÉ CASILLERO REGULATORIO CAIGO?)",
      descripcion: "La obligación de cumplir normativas específicas (como la 010-25) depende de cómo se defina tu actividad ante los ojos del regulador.",
      categorias: [
        {
          id: "a",
          nombre: "Proveedor de Software o Tecnología (Puro)",
          descripcion: "Desarrollas y vendes una API/SaaS. El cliente (ej: un banco) lo implementa en su propio entorno y bajo su responsabilidad regulatoria.",
          nivel_riesgo: "BAJO",
          normativa_aplicable: "Regido por derecho comercial y contratos. Debes cumplir Ley de Protección de Datos.",
          aplicabilidad_modelo: "NO APLICA",
          razon: "Tu plataforma no es un software que vendes; es un servicio operativo que tú gestionas y que toca flujos de dinero."
        },
        {
          id: "b",
          nombre: "Agente o Socio Tecnológico de una Institución Bancaria",
          descripcion: "Operas bajo un contrato de mandato o servicios con un banco. El banco es el responsable final ante SUDEBAN; tú ejecutas una función específica (procesamiento de pagos) como su extensión.",
          nivel_riesgo: "MEDIO-ALTO (Gestionable)",
          normativa_aplicable: "El banco te impondrá sus políticas de cumplimiento (derivadas de la 010-25). Operas bajo su 'paraguas regulatorio'. Debes tener controles internos sólidos.",
          aplicabilidad_modelo: "RUTA MÁS VIABLE",
          razon: "Ya tienes un banco socio. El objetivo es formalizar esta relación con un contrato que te dé estabilidad, a cambio de implementar los controles que ellos exijan."
        },
        {
          id: "c",
          nombre: "Servicio de Transferencias de Dinero o Valores (STDV) - Art. 88",
          descripcion: "Tu actividad principal es facilitar la transferencia de fondos o valores entre terceros usando cuentas propias o de clientes. Eres un intermediario financiero.",
          nivel_riesgo: "ALTÍSIMO",
          normativa_aplicable: "Necesitas LICENCIA/AUTORIZACIÓN EXPLÍCITA de SUDEBAN. Requiere capital regulatorio, programa completo de compliance (Oficial, manuales, auditorías), y te sometes a supervisión directa.",
          aplicabilidad_modelo: "ZONA ROJA / RIESGO PRINCIPAL",
          razon: "Si SUDEBAN interpreta que tu plataforma abierta que procesa pagos para múltiples terceros es un STDV, este es tu casillero. Debes hacer todo lo posible para NO caer aquí sin estar preparado."
        },
        {
          id: "d",
          nombre: "Usuario Final del Sistema Bancario",
          descripcion: "Eres un comercio (ej: una tienda online) que usa las APIs de un banco para cobrar a tus propios clientes. El dinero se mueve para tu propia actividad comercial.",
          nivel_riesgo: "BAJO",
          normativa_aplicable: "Solo debes cumplir los términos de servicio del banco y la Ley de Protección de Datos.",
          aplicabilidad_modelo: "NO APLICA",
          razon: "Tu plataforma no es el usuario final; es la plataforma que le da el servicio a ese usuario final (el comercio)."
        }
      ]
    },
    requisitos_clave_supervision: {
      titulo: "REQUISITOS CLAVE Y NIVEL DE SUPERVISIÓN DE SUDEBAN",
      descripcion: "SUDEBAN supervisa directamente y con máxima intensidad a las entidades bajo su paraguas.",
      entidades: [
        {
          nombre: "Instituciones Bancarias (Bancos, Financieras)",
          nivel_supervision: "DIRECTA Y MÁXIMA. Inspecciones, reportes obligatorios, sanciones.",
          requisitos_clave: [
            "Licencia bancaria.",
            "Capital mínimo.",
            "Cumplimiento integral de la Resolución 010-25 (SIAR, Oficial de Cumplimiento, auditorías).",
            "Gobierno corporativo estricto."
          ]
        },
        {
          nombre: "Servicios de Transferencia (STDV)",
          nivel_supervision: "DIRECTA Y ALTA. Similar a una institución financiera no bancaria.",
          requisitos_clave: [
            "Autorización/Licencia específica de SUDEBAN.",
            "Capital regulatorio (definido por SUDEBAN).",
            "Programa de Compliance contra LC/FT casi bancario.",
            "Límites de transacción y reportes."
          ]
        },
        {
          nombre: "Agentes/Socios de un Banco",
          nivel_supervision: "INDIRECTA, A TRAVÉS DEL BANCO. SUDEBAN supervisa al banco, y el banco supervisa a su agente.",
          requisitos_clave: [
            "Contrato formal con el banco.",
            "Cumplimiento de las políticas de cumplimiento (LC/FT) del banco.",
            "Controles internos (KYC, monitoreo) sujetos a auditoría por el banco."
          ]
        },
        {
          nombre: "Proveedores de Tecnología",
          nivel_supervision: "MÍNIMA O NULA. No son sujetos financieros.",
          requisitos_clave: [
            "Cumplimiento de contratos comerciales.",
            "Ley de Protección de Datos Personales.",
            "Estándares de seguridad informática (buenas prácticas)."
          ]
        }
      ]
    }
  },
  modelo_de_negocio: {
    titulo: "Modelo de Negocio: Plataforma de Pagos Integral",
    descripcion: "Una infraestructura de pagos tecnológica que permite a cualquier negocio en Venezuela recibir pagos electrónicos de forma ágil y segura.",
    funcionamiento: {
      vias_acceso: {
        titulo: "Dos Vías de Acceso:",
        opciones: [
          {
            publico: "Para equipos técnicos",
            solucion: "Ofrecemos APIs para integración directa en aplicaciones, sitios web y sistemas de gestión."
          },
          {
            publico: "Para todos los negocios",
            solucion: "Ofrecemos una plataforma web intuitiva donde, sin necesidad de programación, pueden crear enlaces de pago, botones de cobro y gestionar domiciliaciones en minutos."
          }
        ]
      },
      publico_objetivo: "Empresas registradas (Personas Jurídicas) y profesionales que necesiten recibir pagos digitales de sus clientes.",
      proceso_transaccion: {
        titulo: "Proceso de Transacción (Sin Custodia de Fondos):",
        descripcion: "Flujo claro: Cliente → Cuenta Concentradora → Negocio. No retenemos fondos.",
        pasos: [
          {
            orden: 1,
            descripcion: "Un cliente paga a un negocio usando un enlace, botón o a través de una integración."
          },
          {
            orden: 2,
            descripcion: "El dinero se debita de la cuenta del cliente y se consolida temporalmente en nuestra cuenta concentradora (cuenta empresarial propia en nuestro banco socio)."
          },
          {
            orden: 3,
            descripcion: "Liquidación automática del dinero al negocio en su cuenta bancaria registrada."
          }
        ]
      }
    },
    posicionamiento_regulatorio: {
      titulo: "Posicionamiento Regulatorio: Zona Roja vs. Zona Gris",
      zonas: [
        {
          nombre: "ZONA ROJA: El modelo ideal (pero de alto riesgo)",
          definicion: "Ser clasificado como un Servicio de Transferencia de Dinero (STDV) por SUDEBAN.",
          condiciones: "Si operáramos como una plataforma completamente abierta para cualquier persona (natural o jurídica) sin controles estrictos.",
          consecuencias: "Requeriría una licencia bancaria especial, capital regulatorio alto y una estructura de cumplimiento equivalente a una institución financiera. Esto es inviable para una startup en etapa inicial.",
          color: "red"
        },
        {
          nombre: "ZONA GRIS: Nuestra estrategia de lanzamiento (viable y controlada)",
          definicion: "Operar como un Socio Tecnológico Especializado de nuestro banco socio, bajo un marco de controles acordado.",
          estrategia: {
            titulo: "Nuestro enfoque:",
            puntos: [
              {
                item: "Enfoque B2B Exclusivo",
                descripcion: "La plataforma está disponible solo para empresas registradas (Personas Jurídicas). Verificación mediante RIF obligatorio."
              },
              {
                item: "Onboarding Verificado",
                descripcion: "Acceso inicial por invitación o mediante un proceso de solicitud con validación de datos empresariales básicos."
              },
              {
                item: "Controles Automatizados",
                descripcion: "Límites de transacción iniciales bajos y sistema de monitoreo activo desde el primer pago."
              },
              {
                item: "Alianza Bancaria Formal",
                descripcion: "Operamos bajo un contrato con nuestro banco socio, cumpliendo sus políticas de seguridad y sometiéndonos a sus revisiones, utilizando su infraestructura regulatoria."
              }
            ]
          },
          ventaja: "Nos permite validar el mercado, generar tracción y escalar de manera controlada, construyendo el historial y los sistemas necesarios para un futuro crecimiento regulado, sin asumir inicialmente la carga de una licencia completa.",
          color: "gray"
        }
      ]
    }
  },
  referencias: [
    {
      autores: "SUDEBAN",
      año: 2025,
      titulo: "Resolución 010-25: Normas relativas a la administración y supervisión de los Riesgos de LC/FT/FPADM",
      fuente: "Superintendencia de las Instituciones del Sector Bancario",
      url: "https://www.bancrecer.com.ve/images/pdf/Resolucion_010_25.pdf",
      fecha_acceso: "11 de diciembre de 2025"
    }
  ]
};

