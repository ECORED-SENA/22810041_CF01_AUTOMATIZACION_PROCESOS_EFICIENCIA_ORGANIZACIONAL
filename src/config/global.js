export default {
  global: {
    Name: 'Requerimientos del proceso de automatización',
    Description:
      'El componente formativo explica cómo identificar, documentar, gestionar y validar requerimientos para proyectos de <i>software</i> y automatización. Aborda control de cambios, técnicas de levantamiento, restricciones, criterios de automatización, trazabilidad y requisitos funcionales y no funcionales. Además, presenta documentación como PDD y SDD, notaciones UML, procesos organizacionales, diagramas de flujo y BPMN para caracterizar procesos actuales y propuestos adecuadamente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Requerimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Control de cambios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas para el levantamiento de requerimientos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Restricciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Criterios de idoneidad del proceso para automatizar',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características de los requerimientos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructura de los requerimientos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Trazabilidad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Tipos de requerimientos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Documentación de requerimientos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Notaciones de requerimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Procesos organizacionales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modelado de procesos',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/22810041_CF01_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'AS-IS',
      significado:
        'representación del proceso tal como se ejecuta actualmente, antes de cualquier intervención.',
    },
    {
      termino: 'BPMN',
      significado:
        '<i>Business Process Model and Notation</i>. Notación estándar para el modelado de procesos de negocio, publicada por el <i>Object Management Group</i>.',
    },
    {
      termino: 'Caso de uso',
      significado:
        'descripción de la interacción entre un actor y el sistema para alcanzar un objetivo.',
    },
    {
      termino: 'Diagrama',
      significado: 'representación gráfica de uno o varios procesos.',
    },
    {
      termino: 'Documentación',
      significado: 'registro material de los hechos y de las especificaciones.',
    },
    {
      termino: 'Excepción',
      significado:
        'situación que se aparta del flujo normal del proceso y exige un tratamiento definido.',
    },
    {
      termino: 'Levantamiento de requerimientos',
      significado:
        'identificación y documentación de los requerimientos a partir de usuarios, clientes o interesados.',
    },
    {
      termino: 'Línea base',
      significado:
        'conjunto de requisitos aprobados en un momento determinado, frente al cual se controla todo cambio posterior.',
    },
    {
      termino: 'Minería de procesos',
      significado:
        'técnica que reconstruye el flujo real de un proceso a partir de los registros de eventos de los sistemas de información.',
    },
    {
      termino: 'PDD',
      significado:
        'documento de definición del proceso. Describe paso a paso el proceso que será automatizado.',
    },
    {
      termino: 'Procesos',
      significado: 'conjunto de fases sucesivas de un hecho.',
    },
    {
      termino: 'Regla de negocio',
      significado:
        'condición o política de la organización que el proceso debe cumplir en todos los casos.',
    },
    {
      termino: 'Requisito funcional',
      significado:
        'declaración de un servicio que el sistema debe prestar o de un comportamiento que debe exhibir.',
    },
    {
      termino: 'Requisito no funcional',
      significado:
        'condición sobre la manera en que el sistema debe comportarse, expresada en términos de calidad: desempeño, fiabilidad, seguridad, entre otras.',
    },
    {
      termino: 'RPA',
      significado:
        'automatización robótica de procesos. Tecnología con la que se construyen robots de <i>software</i> que reproducen las acciones de una persona sobre las aplicaciones.',
    },
    {
      termino: 'SDD',
      significado:
        'documento de diseño de la solución. Describe la arquitectura y los componentes del robot que se va a construir.',
    },
    {
      termino: '<i>Stakeholder</i>',
      significado:
        'grupo de personas interesadas que deben influir en la aplicación.',
    },
    {
      termino: 'TO-BE',
      significado:
        'representación del proceso propuesto, una vez incorporada la automatización.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'documentación de la vida de cada requerimiento, desde su formulación original hasta el documento final y su verificación.',
    },
    {
      termino: 'UML',
      significado:
        'lenguaje de Modelado Unificado. Notación gráfica estándar para especificar y documentar sistemas de <i>software</i>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aiteco Consultores. (2024). Qué es un diagrama de flujo de proceso o flujograma. ',
      link: 'https://www.aiteco.com/diagrama-de-flujo',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial No. 48.587.',
      link: '',
    },
    {
      referencia:
        'International Institute of Business Analysis. (2015). A guide to the business analysis body of knowledge (BABOK guide) (3.ª ed.). IIBA.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (1985). ISO 5807:1985. Information processing—Documentation symbols and conventions for data, program and system flowcharts.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2013). ISO/IEC 19510:2013. Information technology—Object Management Group Business Process Model and Notation.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). ISO/IEC/IEEE 29148:2018. Systems and <i>softwar</i> engineering—Life cycle processes—Requirements engineering. ',
      link: 'https://www.iso.org/standard/72089.html',
    },
    {
      referencia:
        'International Organization for Standardization. (2023). ISO/IEC 25010:2023. Systems and <i>software</i> engineering—Systems and <i>software</i> Quality Requirements and Evaluation (SQuaRE)—Product quality model. ',
      link: 'https://www.iso.org/standard/78176.html',
    },
    {
      referencia:
        'Lucidchart. (2024). Tutorial de diagramas de casos de uso UML. ',
      link: '',
    },
    {
      referencia: 'Lucidchart. (2024). Tutorial de diagramas de despliegue. ',
      link: '',
    },
    {
      referencia:
        'Object Management Group. (2013). Business Process Model and Notation (BPMN), version 2.0.2. ',
      link: 'https://www.omg.org/spec/BPMN/2.0.2/',
    },
    {
      referencia:
        'Object Management Group. (2017). Unified Modeling Language (UML), version 2.5.1. ',
      link: 'https://www.omg.org/spec/UML/2.5.1/',
    },
    {
      referencia:
        'Sommerville, I. (2016). Software engineering (10.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'UiPath. (2026). Process understanding and documentation. UiPath Documentation. ',
      link: 'https://docs.uipath.com',
    },
    {
      referencia:
        'Van der Aalst, W. M. P. (2016). Process mining: Data science in action (2.ª ed.). Springer.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luis Eyder Ortiz Collazos',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial – Regional Cauca',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta temática',
          centro:
            'Centro de Teleinformática y Producción Industrial – Regional Cauca',
        },
        {
          nombre: 'Yoli Alexandra Guevara',
          cargo: 'Experta temática',
          centro:
            'Centro de Teleinformática y Producción Industrial – Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
