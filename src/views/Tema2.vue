<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Restricciones
      p Las #[b restricciones] son condiciones necesarias para gestionar el funcionamiento de una aplicación de manera controlada, efectiva y funcional, de modo que los procesos y las tareas se ejecuten adecuadamente. Estas condiciones pueden relacionarse, por ejemplo, con los permisos de acceso de los usuarios al sistema: aunque diferentes usuarios puedan operar la aplicación, no todos cuentan con los mismos derechos. Además de los operadores, pueden existir usuarios con permisos de administrador que disponen de mayores facultades para gestionar la aplicación.
      p.mb-5 Sin embargo, las restricciones no se limitan al acceso. En un proyecto de automatización se presentan, al menos, cuatro tipos que condicionan el diseño de la solución antes de iniciar la construcción del flujo:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="De negocio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 De negocio
              p.mb-0 Establecen condiciones derivadas de las reglas y características propias del proceso. Por ejemplo, el proceso solo puede ejecutarse dentro del horario de operación de la entidad.
        .py-3.py-md-4(titulo="Técnicas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Técnicas
              p.mb-0 Determinan las condiciones impuestas por las aplicaciones, plataformas o tecnologías involucradas. Por ejemplo, la aplicación de origen no expone servicios y obliga a trabajar sobre la interfaz gráfica.
        .py-3.py-md-4(titulo="De seguridad y acceso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 De seguridad y acceso
              p.mb-0 Definen las condiciones para proteger el acceso a los sistemas y recursos. Por ejemplo, el robot opera con una identidad propia y con los permisos mínimos necesarios; además, las credenciales no se escriben dentro del flujo.
        .py-3.py-md-4(titulo="Legales y de tratamiento de datos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Legales y de tratamiento de datos
              p.mb-0 Establecen las obligaciones normativas aplicables al proceso y a la información tratada. Por ejemplo, si el proceso utiliza datos personales, debe cumplir la Ley 1581 de 2012 y el régimen de protección de datos personales aplicable en Colombia.
      p.mb-0 Identificar estas restricciones desde la caracterización del proceso permite establecer las condiciones dentro de las cuales deberá diseñarse y operar la solución de automatización.
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Criterios de idoneidad del proceso para automatizar
      p No todo proceso debe automatizarse. Una parte del trabajo de caracterización consiste precisamente en sustentar esta decisión. Antes de especificar la solución, conviene evaluar el proceso mediante criterios objetivos: cuanto mayor sea su cumplimiento, mayor será la probabilidad de que la automatización entregue el resultado esperado.
      p.mb-5 Los principales criterios de idoneidad permiten analizar las condiciones operativas, técnicas y de negocio del proceso:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Volumen y frecuencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considera el número de ejecuciones por período y el tiempo dedicado a cada una. Una señal de alerta se presenta cuando el proceso se ejecuta pocas veces al año, debido a que su automatización podría aportar un beneficio limitado.
            .row(titulo="Estabilidad de las reglas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina si las reglas de negocio están documentadas y permanecen relativamente estables. Existe una señal de alerta cuando cada caso se resuelve según el criterio particular de quien lo atiende.
            .row(titulo="Estructura de la información").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Evalúa si los datos de entrada se encuentran en formato digital y estructurado. Una señal de alerta se presenta cuando la información llega, por ejemplo, en documentos escaneados sin un formato constante.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img5.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img6.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Tasa de excepciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece la proporción de casos que se apartan del flujo normal. Si más de la tercera parte de los casos requiere intervención manual, la conveniencia de automatizar el proceso debe analizarse con especial cuidado.
            .row(titulo="Estabilidad de las aplicaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina si las pantallas y los sistemas involucrados permanecen estables. Una aplicación de origen que se actualiza sin previo aviso constituye una señal de alerta para la sostenibilidad de la automatización.
            .row(titulo="Impacto medible").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer si existe un beneficio cuantificable en términos de tiempo, costo, calidad o riesgo. Cuando no es posible estimar el ahorro o el error que se evita, resulta más difícil sustentar la conveniencia de automatizar.
      p.mb-0 La aplicación conjunta de estos criterios permite sustentar la decisión de automatizar y reconocer, antes del desarrollo, aquellos factores que pueden afectar la viabilidad y sostenibilidad de la solución.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Características de los requerimientos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2(data-aos="fade-right")
            p.mb-0 Los requerimientos deben cumplir determinadas características y criterios de calidad. Los nueve criterios de redacción planteados previamente siguen siendo válidos; sin embargo, la #[b norma ISO/IEC/IEEE 29148:2018] distingue entre las características que debe cumplir cada requisito de manera individual y aquellas aplicables al conjunto de requisitos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img7.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/intro/img4.svg', alt='' style="width: 70px")
          p.mb-0 Esta formulación permite contar con una referencia auditable e incorpora dos criterios adicionales: que el requisito sea apropiado para el nivel en el que se redacta y que se ajuste a la plantilla acordada. Las características de un requisito individual son las siguientes:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Necesario
                  p.mb-0.text-center Si se omite, el sistema deja de satisfacer una necesidad y ningún otro requisito lo reemplaza. Este criterio corresponde al denominado #[b necesario] en la formulación anterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Apropiado
                  p.mb-0.text-center Su nivel de detalle corresponde al nivel del documento en el que se redacta. Este criterio no estaba contemplado de manera explícita en la formulación anterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text No ambiguo
                  p.mb-0.text-center Admite una sola interpretación por parte de todas las personas involucradas. Se relaciona con los criterios #[b claro] y #[b único] de la formulación anterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Completo
                  p.mb-0.text-center Se comprende por sí solo, sin requerir información adicional para establecer aquello que exige. Corresponde al criterio #[b completo] de la formulación anterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Singular
                  p.mb-0.text-center Enuncia una sola capacidad y evita integrar dos o más exigencias independientes en una misma frase. Se relaciona con el criterio #[b único] de la formulación anterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Factible
                  p.mb-0.text-center Puede realizarse dentro de las restricciones de tiempo, costo y recursos disponibles. Corresponde al criterio denominado #[b viable] en la formulación anterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Verificable
                  p.mb-0.text-center Puede comprobarse mediante inspección, análisis, demostración o prueba. Corresponde al criterio #[b verificable] de la formulación anterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Correcto
                  p.mb-0.text-center Representa fielmente la necesidad de la cual proviene. Este criterio no estaba contemplado de manera explícita en la formulación anterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Conforme
                  p.mb-0.text-center Se ajusta a la plantilla y al estilo de redacción acordados para documentar los requisitos. Este criterio no estaba contemplado de manera explícita en la formulación anterior.
      p Por su parte, el #[b conjunto de requisitos] debe ser completo, es decir, cubrir todas las necesidades acordadas; consistente, de manera que ningún requisito contradiga a otro; factible como conjunto; comprensible para quienes deben utilizarlo, y susceptible de ser validado por las partes interesadas. Los criterios de independencia y no redundancia de la formulación anterior quedan comprendidos dentro de la consistencia y la singularidad.
      p.mb-5 Para evaluar la calidad del conjunto de requisitos, es necesario considerar cinco características que permiten determinar si el documento responde adecuadamente a las necesidades definidas:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img18.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Completo
              p.mb-0.text-center Cubre todas las necesidades acordadas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img19.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Consistente
              p.mb-0.text-center Ningún requisito contradice a otro.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img20.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Factible
              p.mb-0.text-center El conjunto es realizable, no solo cada requisito por separado.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img21.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Comprensible
              p.mb-0.text-center Es entendible para quien debe usarlo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img22.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Validable
              p.mb-0.text-center Las partes interesadas pueden confirmarlo como suyo.
          p.mb-0 Estas características proporcionan criterios para revisar la calidad de los requerimientos antes de aprobarlos e incorporarlos a la especificación.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Estructura de los requerimientos
      p Los requisitos pueden organizarse según su origen y sus características. Esta estructura parte de las #[b necesidades de las partes interesadas] y avanza hacia los requisitos del sistema y los requisitos de sus componentes.
      p.mb-5 El nivel de detalle depende de las características del proyecto y del análisis realizado. En determinados casos, puede resultar necesario precisar con mayor profundidad algunos requerimientos desde el nivel de las necesidades, con el propósito de conservar una relación clara entre aquello que solicita la parte interesada y lo que posteriormente deberá desarrollar el sistema.
      .bg___color_1
        .px-5 
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Niveles de requisitos y su relación
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nivel
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Consideración
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Necesidades de las partes interesadas
                      td.ajuste-border-tabla.texto-left Qué necesita el negocio y qué esperan los usuarios, en su propio lenguaje, antes de decidir la solución.
                      td.texto-left Es la base. Se recoge en el levantamiento.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Requisitos del sistema
                      td.ajuste-border-tabla.texto-left Qué debe hacer el sistema completo, incluidos los elementos que no son #[i software]: las personas, los equipos y los procedimientos.
                      td.texto-left Traduce la necesidad a capacidades del sistema.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Requisitos de los componentes
                      td.ajuste-border-tabla.texto-left Qué debe cumplir cada pieza que se construye: el #[i software], el robot o la interfaz.
                      td.texto-left Es el nivel más detallado. Lo escribe quien va a construir.
          p.mb-0 Cada nivel se deriva del anterior y responde ante él. El nivel de detalle de cada capa lo decide el analista de negocio. En algunos casos conviene precisar más las necesidades, sin adelantar decisiones sobre esta organización facilita la relación entre las necesidades iniciales, las capacidades esperadas del sistema y los componentes encargados de satisfacerlas.
          Separador
          #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.4 Trazabilidad
          p.mb-3 La #[b trazabilidad] corresponde a la documentación de la vida de cada requerimiento y permite conocer su historial desde la formulación original hasta su incorporación en el documento final. Para conseguirla, cada paso debe documentarse de manera rigurosa.
          .row.justify-content-center.align-items-center.mb-3
            .col-xl.mb-4.mb-lg-0
              .box___style_1(data-aos="zoom-in").mb-3
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t2/img23.jpg', alt='' style="width: 400px").m-auto
                  .col-xl.fit___box_container
                    p.mb-0 Los requerimientos y las necesidades pueden surgir de diferentes fuentes, como el cliente, el responsable del proyecto y los usuarios. Debido a que cada parte interesada puede comprenderlos de manera distinta, es necesario precisarlos antes de planear y ejecutar el proyecto. La trazabilidad permite relacionar cada característica implementada con las personas o grupos que solicitaron su generación y facilita el análisis durante las diferentes fases del proyecto.
              p.mb-0 El instrumento utilizado para registrar estas relaciones es la #[b matriz de trazabilidad], que debe permitir el seguimiento en dos sentidos: hacia atrás, para determinar de qué necesidad proviene cada requisito, y hacia adelante, para establecer en qué elemento de la solución se implementa y mediante qué criterio de aceptación se comprueba. En un proyecto de automatización, esta matriz cumple una función adicional, puesto que permite estimar el impacto cuando cambia la aplicación de origen. Un ejemplo de esta relación se presenta a continuación:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img24.png', alt='' style="width: 350px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img25.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="N-01. Se pierde tiempo consultando manualmente el precio de las divisas.").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 #[b RF-01.] El sistema debe consultar el valor del dólar y del euro en la fuente definida. La solución se relaciona con la secuencia de consulta en el flujo principal. Como criterio de aceptación, la consulta debe ejecutarse y devolver un valor numérico para cada divisa.
            .row(titulo="N-02. No existe un registro histórico confiable.").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 #[b RF-02.] El sistema debe registrar fecha, divisa y valor sin sobrescribir los registros anteriores. Este requisito se implementa mediante la actividad de escritura en el archivo de control. Como criterio de aceptación, al ejecutar el proceso dos veces, el archivo debe conservar ambos registros.
            .row(titulo="N-03. Los errores de la consulta no quedan documentados.").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 #[b RNF-01.] El sistema debe registrar en bitácora el resultado de cada ejecución. Este requisito se relaciona con el bloque de manejo de excepciones y los mensajes de registro. Como criterio de aceptación, ante una falla provocada, la bitácora debe contener la excepción y la hora.
      p.mb-0 De esta manera, la matriz permite mantener la relación entre la necesidad, el requisito, el elemento de la solución y el criterio mediante el cual se comprobará su cumplimiento.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Tipos de requerimientos
      p.mb-5 Los requerimientos pueden clasificarse de acuerdo con aquello que establecen sobre el sistema. Una distinción fundamental corresponde a los #[b requerimientos funcionales] y los #[b requerimientos no funcionales], los cuales cumplen propósitos diferentes dentro de la especificación.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img26.png" style="max-width: 60px").m-auto
        .col
          h3 Requerimientos funcionales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right")
            p.mb-0 Los #[b requerimientos funcionales] son declaraciones de los servicios que prestará el sistema y de la forma en que responde ante determinadas funciones. Pueden describir la interacción con otros sistemas, los tipos de respuestas automáticas y los procesos predefinidos. En algunos casos, establecen de manera precisa aquello que el sistema no debe hacer; por lo tanto, también pueden formularse como una declaración negativa.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img27.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/intro/img4.svg', alt='' style="width: 70px")
          p.mb-0 Estos requerimientos establecen las funciones que tendrá el sistema o la aplicación, incluidas aquellas que se relacionan directamente con los usuarios, las pantallas que permiten utilizarla, los menús, los botones y las demás funcionalidades que facilitan la interacción.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img28.png', alt='' style="width: 500px").m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img29.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Uno de los principales problemas se presenta cuando existen especificaciones inexactas o incoherentes. Si el analista incorpora suposiciones como si fueran conocimientos compartidos por todas las personas involucradas, puede introducir riesgos para el sistema. Por esta razón, es necesario redactar los requisitos con precisión y definir explícitamente aquello que pueda generar diferentes interpretaciones.
          p.mb-0 El analista es responsable de la documentación y debe procurar que no existan vacíos de comprensión. Para ello, puede apoyarse en las #[b historias de usuario], de manera que el equipo mantenga una comprensión compartida de los requisitos, los objetivos y su implementación.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img26.png" style="max-width: 60px").m-auto
        .col
          h3 Requerimientos no funcionales
      p Los #[b requerimientos no funcionales] no describen una función específica del sistema, sino las condiciones relacionadas con la manera en que este se comporta. Aspectos como el tiempo de respuesta pueden medirse y condiciones como la disponibilidad pueden auditarse; por esta razón, estos requisitos deben redactarse mediante criterios verificables.
      p.mb-5 La #[b norma ISO/IEC 25010:2023] organiza estos requisitos mediante nueve características del modelo de calidad del producto, lo que facilita su formulación de manera verificable:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Adecuación funcional
                  p.mb-0 Exige que las funciones cubran las necesidades declaradas y entreguen resultados correctos. Por ejemplo: el valor registrado debe coincidir con el publicado por la fuente en la fecha de la consulta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Eficiencia de desempeño
                  p.mb-0 Establece un uso razonable del tiempo y de los recursos. Por ejemplo: cada ejecución del proceso debe completarse en menos de tres minutos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Compatibilidad
                  p.mb-0 Considera la coexistencia y la interoperabilidad con otros sistemas. Por ejemplo: el archivo generado debe poder abrirse en la hoja de cálculo institucional sin conversión previa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Capacidad de interacción
                  p.mb-0 Establece condiciones para que las personas usuarias puedan operar el sistema con facilidad. Por ejemplo: el mensaje de error debe indicar la causa y la acción sugerida, sin códigos internos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fiabilidad
                  p.mb-0 Comprende la disponibilidad, la tolerancia a fallos y la capacidad de recuperación. Por ejemplo: el proceso debe ejecutarse los días hábiles y reintentar dos veces ante una falla de conexión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seguridad
                  p.mb-0 Comprende condiciones relacionadas con la confidencialidad, la integridad y la trazabilidad de la información. Por ejemplo: las credenciales deben almacenarse en el repositorio seguro y no dentro del flujo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantenibilidad
                  p.mb-0 Establece condiciones para facilitar la modificación y corrección de la solución. Por ejemplo: cada flujo debe estar documentado y las rutas deben leerse desde un archivo de configuración.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Flexibilidad
                  p.mb-0 Considera la adaptación a distintos entornos y la capacidad de crecimiento. Por ejemplo: el proceso debe operar sin cambios en los equipos que utilicen el sistema operativo institucional vigente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protección (#[i safety])
                  p.mb-0 Busca evitar estados que puedan causar daño a personas, bienes o al entorno. Por ejemplo: ante un dato fuera de rango, el proceso debe detenerse y notificar la situación, en lugar de registrar el valor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img38.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 En los proyectos de automatización también resulta útil separar los requisitos según el elemento al cual se refieren:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Requisitos del proceso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img39.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Requisitos del proceso
              p.mb-0 Describen qué debe hacer el robot durante la ejecución del proceso y permiten precisar las actividades que forman parte de la automatización.
        .py-3.py-md-4(titulo="Requisitos del robot")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img40.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Requisitos del robot
              p.mb-0 Definen cómo debe ejecutarse la automatización, por ejemplo, si funciona de manera atendida o desatendida, con qué identidad opera y en qué horario debe hacerlo.
        .py-3.py-md-4(titulo="Requisitos de infraestructura")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img41.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Requisitos de infraestructura
              p.mb-0 Establecen las condiciones del entorno tecnológico que necesita la solución para operar adecuadamente.
      p Esta separación evita que las exigencias relacionadas con la operación o la infraestructura se documenten como si correspondieran a funciones propias del proceso.
      p.mb-5 Para comprender esta clasificación, es importante distinguir entre los requerimientos que describen #[b qué debe hacer el sistema] y aquellos que establecen #[b cómo debe comportarse durante su operación].
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img42.png", alt="" style="width: 270px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Requerimientos funcionales").ajuste-cajaAcordion.ajuste-vineta
              p Qué servicios presta el sistema y cómo reacciona.
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Las funciones que ejecuta y las respuestas que entrega. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | La interacción con otros sistemas y los procesos predefinidos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Las pantallas, los menús y los botones con los que se opera. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | También lo que el sistema no debe hacer.
            .row(titulo="Requerimientos no funcionales").ajuste-cajaAcordion.ajuste-vineta
              p Cómo se comporta. Modelo de calidad ISO/IEC 25010:2023.
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Adecuación funcional 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Eficiencia de desempeño 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Compatibilidad 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Capacidad de interacción 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fiabilidad 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Seguridad 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mantenibilidad 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Flexibilidad 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Protección (#[i safety])
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Documentación de requerimientos
      p.mb-3 El #[b documento de requerimientos] es el instrumento en el que se describen las características y los requisitos de un #[i software], programa, conjunto de programas o productos. Su contenido se expresa en lenguaje natural y evita términos técnicos innecesarios, con el propósito de facilitar la comprensión entre las partes involucradas.
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img43.jpg', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 La #[i especificación de requisitos] es el resultado del levantamiento de información realizado junto con el cliente o usuario y constituye un medio de comunicación preciso y claro entre quienes desarrollan el #[i software] y quienes lo utilizarán. De esta manera, permite documentar de forma organizada aquello que debe cumplir la solución y proporciona una referencia para su posterior verificación.
          p.mb-0 La versión anterior del componente incluía una plantilla basada en el estándar #[b IEEE 830-1998]. Esta referencia debe actualizarse, debido a que dicho estándar fue retirado y sus contenidos quedaron incorporados en la #[b norma ISO/IEC/IEEE 29148:2018]. La norma vigente conserva elementos de la estructura anterior, como la introducción, la descripción general y los requisitos específicos, pero organiza la documentación en tres especificaciones, de acuerdo con sus destinatarios y con el nivel de requisitos que describen. Estas especificaciones se diferencian de la siguiente manera:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img44.png', alt='' style="width: 350px").m-auto
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Especificación de requisitos de las partes interesadas (StRS)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img45.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Especificación de requisitos de las partes interesadas (StRS)
              p.mb-0 Describe las necesidades del negocio y de los usuarios en su propio lenguaje, antes de decidir la solución que permitirá atenderlas.
        .py-3.py-md-4(titulo="Especificación de requisitos del sistema (SyRS)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img46.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Especificación de requisitos del sistema (SyRS)
              p.mb-0 Describe los requisitos correspondientes al sistema completo, incluidos aquellos elementos que no forman parte del #[i software].
        .py-3.py-md-4(titulo="Especificación de requisitos del <i>software</i> (SRS)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img47.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Especificación de requisitos del #[i software] (SRS)
              p.mb-0 Establece los requisitos que debe cumplir específicamente el #[i software] que se va a construir.
      p.mb-5 Esta organización permite mantener la correspondencia entre las necesidades de las partes interesadas, los requisitos del sistema completo y aquellos que deberá satisfacer específicamente el #[i software].
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img26.png" style="max-width: 60px").m-auto
        .col
          h3 Estructura de la especificación de requisitos del #[i software]
      p.mb-5 A continuación, se presenta un pódcast que explica la estructura de la especificación de requisitos del #[i software] (SRS), sus principales secciones y la manera en que estas permiten organizar, documentar y verificar sistemáticamente los requisitos de un proyecto de #[i software].
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img48.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Especificación de requisitos del <i>software</i> (SRS)"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img49.jpg" style="max-width: 510px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img26.png" style="max-width: 60px").m-auto
        .col
          h3 Documentos complementarios en proyectos de automatización
      p.mb-5 En un proyecto de #[b automatización robótica de procesos], la especificación de requisitos se complementa con dos documentos de uso frecuente en la industria: el #[b documento de definición del proceso (PDD)] y el #[b documento de diseño de la solución (SDD)]. Su conocimiento resulta relevante porque cada uno documenta una etapa diferente del proyecto y sirve como insumo para las actividades posteriores. Las características de estos documentos son las siguientes:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .tarjeta--boton.p-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img50.svg', alt="" style="max-width: 90px").m-auto
                h3.text-center Documento de definición del proceso (PDD)
                p.mb-0.text-center Es elaborado por el analista junto con la persona que ejecuta el proceso. Documenta el proceso tal como se realiza actualmente, paso a paso, e incluye capturas de pantalla, entradas, reglas de negocio, excepciones conocidas y volumen de ejecuciones.
            .col-lg-4.col-md-9(data-aos="zoom-in")
              .tarjeta--boton.p-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img51.svg', alt="" style="max-width: 90px").m-auto
                h3.text-center Documento de diseño de la solución (SDD)
                p.mb-0.text-center Es elaborado por quien desarrolla la automatización. Describe la arquitectura del robot, los flujos que lo componen, las variables y los argumentos, el manejo de excepciones y los recursos necesarios para su ejecución.
          p La relación entre ambos documentos es directa: el #[b PDD] describe el estado actual del proceso y constituye un insumo para su caracterización; el #[b SDD] describe la solución de automatización y sirve como insumo para la construcción, que corresponde al componente formativo siguiente.
          p.mb-5 El proceso de documentación de una automatización se desarrolla de manera secuencial, desde la especificación de los requisitos hasta la construcción de la solución, como se presenta a continuación:
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso  1. Especificación de requisitos
                    p.mb-0 De acuerdo con la #[b ISO/IEC/IEEE 29148:2018], se identifican y documentan los diferentes niveles de requisitos: #[b StRS], requisitos de las partes interesadas; #[b SyRS], requisitos del sistema; y #[b SRS], requisitos del #[i software]. Esta especificación sustenta la definición del proceso.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img52.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img53.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso  2. PDD – Documento de definición del proceso
                    p.mb-0 #[b Lo elabora:] el analista, con quien ejecuta el proceso. Describe el proceso tal como se ejecuta actualmente: pasos, capturas, entradas, reglas de negocio, excepciones conocidas y volumen. Es el insumo para el diseño de la solución.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso  3. SDD – Documento de diseño de la solución
                    p.mb-0 #[b Lo elabora:] quien desarrolla la automatización. Describe la arquitectura del robot, sus flujos, variables y argumentos, el manejo de excepciones y los recursos que requiere. Es el insumo para la construcción de la automatización.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img54.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img55.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso  4. Construcción de la automatización
                    p.mb-0 Se desarrolla a partir del SDD y corresponde al componente formativo siguiente.

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/Especificacion_Requisitos_Software.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
