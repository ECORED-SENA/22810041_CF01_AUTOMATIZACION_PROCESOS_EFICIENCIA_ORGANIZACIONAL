<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Notaciones de requerimientos
      p.mb-3 La #[b notación textual de los requerimientos] es necesaria para facilitar la comunicación entre clientes, usuarios y partes interesadas, quienes deben interpretar adecuadamente la información representada mediante recursos gráficos. Como complemento, la notación gráfica permite describir la estructura y el comportamiento del sistema mediante modelos estandarizados.
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t3/img1.jpg', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 Una de las notaciones gráficas empleadas en la especificación de requerimientos es #[b UML (Lenguaje de Modelado Unificado)], especialmente mediante los diagramas de casos de uso, actividades, máquina de estados y secuencia, que permiten representar diferentes aspectos relacionados con el funcionamiento y la interacción del sistema.
          p.mb-0 UML es una especificación del #[b #[i Object Management Group] (OMG)] y su versión formal vigente corresponde a #[b UML 2.5.1], publicada en diciembre de 2017. La equivalencia con la norma ISO/IEC 19505 corresponde a una versión anterior de la especificación; por esta razón, al citar UML se debe indicar la versión del OMG. UML 2.5.1 define catorce tipos de diagramas, clasificados en #[b diagramas de estructura] y #[b diagramas de comportamiento]. Los diagramas de estructura representan los elementos que conforman el sistema y las relaciones existentes entre ellos:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img2.png', alt='' style="width: 300px").m-auto
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de clases
                  p.mb-0 Representa la estructura del sistema mediante sus clases, atributos, operaciones y relaciones entre objetos.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 1.
                    span Diagrama de clases UML del sistema de gestión de vuelos y reservas
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img3.svg', alt='Diagrama de clases UML de un sistema de gestión de vuelos y reservas, compuesto por clases con sus atributos y operaciones, conectadas mediante relaciones que representan la estructura y organización de los objetos que intervienen en el sistema. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de estructura compuesta
                  p.mb-0 Representa el interior de un clasificador estructurado y permite definir sus elementos internos, interfaces y relaciones.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 2.
                    span Diagrama de componentes de la arquitectura de #[i hardware] de un computador
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img4.svg', alt='Diagrama de estructura compuesta relacionado con la arquitectura de hardware de un computador, integrado por elementos internos, interfaces y conexiones que representan la organización y las relaciones entre las partes que conforman la estructura. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de componentes
                  p.mb-0 Representa las relaciones entre los componentes individuales del sistema, incluidas las organizaciones y dependencias entre componentes y artefactos.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 3.
                    span Elementos de un diagrama de componentes UML
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img5.svg', alt='Diagrama de componentes UML con diferentes componentes de un sistema, sus interfaces, dependencias y conexiones, organizados para representar las relaciones existentes entre componentes y artefactos de la solución. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de despliegue
                  p.mb-0 Representa la distribución física de los artefactos sobre los nodos de ejecución que conforman la infraestructura del sistema.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 4.
                    span Diagrama de despliegue de una arquitectura cliente-servidor
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img6.svg', alt='Diagrama de componentes UML con diferentes componentes de un sistema, sus interfaces, dependencias y conexiones, organizados para representar las relaciones existentes entre componentes y artefactos de la solución. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de objetos
                  p.mb-0 Representa una instancia concreta de un diagrama de clases en un momento determinado.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 5.
                    span Diagrama de objetos UML de estudiantes y cursos
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img7.svg', alt='Diagrama de objetos UML con instancias concretas relacionadas con estudiantes y cursos, conectadas mediante vínculos que representan las relaciones existentes entre los objetos en un momento determinado. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de paquetes
                  p.mb-0 Representa la organización y disposición de los elementos del modelo agrupados en paquetes.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 6.
                    span Diagrama de paquetes UML del área de matemáticas
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img8.svg', alt='Diagrama de paquetes UML del área de matemáticas, con diferentes elementos del modelo agrupados en paquetes y conexiones que representan la organización y las relaciones existentes entre dichas agrupaciones. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de perfil
                  p.mb-0 Representa extensiones del metamodelo mediante estereotipos que permiten adaptar UML a un dominio particular.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 7.
                    span Diagrama de perfil UML para un dominio
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img9.svg', alt='Diagrama de perfil UML compuesto por elementos y estereotipos utilizados para extender el metamodelo y adaptar la representación UML a las características y necesidades de un dominio específico. ').m-auto
      p.mb-5 El #[b diagrama de perfil] no se incluía en la versión anterior del componente y se incorpora para completar la clasificación establecida en la especificación vigente. Por otra parte, los diagramas de comportamiento representan las acciones, interacciones y cambios que ocurren durante el funcionamiento del sistema:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de casos de uso
                  p.mb-0 Describe lo que hace el sistema desde un punto de vista externo y plantea los escenarios que se producen cuando un actor interactúa con este.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 8.
                    span Diagrama de casos de uso del sistema de banca en línea
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img10.svg', alt='Diagrama de casos de uso UML de un sistema de banca en línea, compuesto por actores y funcionalidades del sistema conectados mediante relaciones que representan las diferentes formas de interacción de los usuarios con los servicios disponibles. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de actividades
                  p.mb-0 Representa el flujo de acciones y decisiones que se desarrolla en el sistema modelado.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 9.
                    span Diagrama de actividades del proceso de venta de zapatos
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img11.svg', alt='Diagrama de actividades UML del proceso de venta de zapatos, organizado mediante acciones, decisiones y conexiones que representan la secuencia del proceso y las diferentes rutas que pueden seguirse durante su ejecución. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de máquina de estados
                  p.mb-0 Representa las transiciones entre los diferentes estados por los que pasa un objeto.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 10.
                    span Diagrama de estados del proceso de gestión de pedidos
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img12.svg', alt='Diagrama de máquina de estados UML aplicado a la gestión de pedidos, compuesto por diferentes estados y transiciones que representan los cambios por los que pasa un pedido durante el desarrollo del proceso. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de secuencia
                  p.mb-0 Representa el flujo de mensajes entre los participantes y su orden a lo largo del tiempo.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 11.
                    span Diagrama de secuencia de interacción entre usuario, sistema y base de datos
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img13.svg', alt='Diagrama de secuencia UML con usuario, sistema y base de datos como participantes, relacionados mediante mensajes organizados cronológicamente para representar el orden de las interacciones durante la ejecución de una operación. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de comunicación
                  p.mb-0 Representa las interacciones entre participantes y las organiza de acuerdo con los enlaces existentes entre ellos.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 12.
                    span Diagrama de comunicación entre usuario, interfaz, controlador y base de datos
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img14.svg', alt='Diagrama de comunicación UML compuesto por usuario, interfaz, controlador y base de datos, conectados mediante enlaces y mensajes que representan las interacciones y el intercambio de información entre los participantes del sistema. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de tiempos
                  p.mb-0 Representa el cambio de estado de los participantes a lo largo de una línea de tiempo.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 13.
                    span Diagrama de tiempos de los estados de los participantes
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img15.svg', alt='Diagrama de tiempos UML con diferentes participantes y sus cambios de estado distribuidos sobre una línea temporal, que permite relacionar el comportamiento de cada participante con los momentos en que ocurren las transiciones. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diagrama de visión general de interacción
                  p.mb-0 Integra varias interacciones dentro de un flujo de control para representar comportamientos de mayor complejidad.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 14.
                    span Comparación entre diagramas de secuencia y comunicación UML
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t3/img16.svg', alt='Diagrama comparativo entre las representaciones UML de secuencia y comunicación, con participantes e intercambio de mensajes organizados de dos maneras diferentes para representar las interacciones que ocurren dentro de un sistema. ').m-auto
      p La versión anterior agrupaba bajo un mismo nombre los diagramas de interacción y de secuencia. En la especificación vigente, #[b interacción] corresponde a una categoría que comprende cuatro diagramas: secuencia, comunicación, tiempos y visión general de interacción.
      .bg___color_1
        .px-5 
          p.mb-5 Para la caracterización de un proceso que se va a automatizar, tres de estos diagramas resultan especialmente relevantes. El #[b diagrama de casos de uso] permite delimitar el alcance e identificar quién interactúa con el sistema y con qué propósito; el #[b diagrama de actividades] representa el flujo del proceso y sus decisiones; y el #[b diagrama de secuencia] resulta pertinente cuando la automatización debe coordinar varias aplicaciones y el orden de los mensajes es determinante.
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Clasificación de los diagramas UML 2.5.1 en diagramas de estructura y de comportamiento.
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Diagramas de estructura
                      th.texto-left Diagramas de comportamiento
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diagrama de clases
                      td.texto-left Diagrama de casos de uso
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diagrama de estructura compuesta
                      td.texto-left Diagrama de actividades
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diagrama de componentes
                      td.texto-left Diagrama de máquina de estados
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diagrama de despliegue
                      td.texto-left Diagrama de secuencia
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diagrama de objetos
                      td.texto-left Diagrama de comunicación
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diagrama de paquetes
                      td.texto-left Diagrama de tiempos
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diagrama de perfil
                      td.texto-left Diagrama de visión general de interacción
          p Los diagramas de estructura muestran cómo está construido el sistema, mientras que los diagramas de comportamiento representan qué hace. Dentro de estos últimos, los diagramas de secuencia, comunicación, tiempos y visión general de interacción pertenecen a la categoría de #[b diagramas de interacción].
      p.mb-5 Esta clasificación permite seleccionar el tipo de diagrama de acuerdo con el aspecto del sistema o del proceso que se requiera representar.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 15.
            span Diagrama de casos de uso del proceso de consulta y registro de divisas, con el actor, el sistema y las funcionalidades requeridas.
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img17.svg', alt='Diagrama de casos de uso del proceso de consulta y registro de divisas, compuesto por un actor principal que obtiene el valor del sistema, un actor secundario correspondiente al sistema externo y funcionalidades representadas mediante óvalos dentro del límite del sistema. ').m-auto
      p El actor principal es quien obtiene el valor del sistema; el actor secundario es el sistema externo del que depende. Los óvalos son las funcionalidades requeridas, no los pasos del flujo.
      p.mb-0 El diagrama de casos de uso facilita la delimitación del alcance funcional y establece la relación entre los actores y las funcionalidades requeridas.
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Procesos organizacionales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right")
            p.mb-0 Los #[b procesos organizacionales] corresponden al conjunto de actividades y pasos que se desarrollan dentro de una organización, con la participación de sus integrantes, para alcanzar las metas y los objetivos propuestos. Las organizaciones se encuentran expuestas a cambios permanentes y, del mismo modo, el avance tecnológico las impulsa a adoptar nuevas herramientas de gestión y a capacitar a sus colaboradores para utilizarlas eficientemente como parte de sus estrategias de sostenibilidad y adaptación.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img18.jpg', alt='' style="width: 300px").m-auto
        .col-xl-4.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/intro/img4.svg', alt='' style="width: 70px")
          p.mb-0 En un mapa de procesos se distinguen comúnmente tres grupos: #[b estratégicos, misionales u operativos y de apoyo]. Reconocer esta clasificación resulta útil para la automatización, debido a que el tipo de proceso contribuye a establecer los criterios de priorización. 
      p.mb-5 Los procesos de apoyo, por ejemplo, pueden constituir candidatos relevantes cuando presentan un volumen elevado de operaciones y reglas estables. Las características de cada grupo se describen a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Procesos estratégicos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Procesos estratégicos
              p.mb-0 Orientan y definen la dirección de la organización. Comprenden, por ejemplo, la planeación institucional y la gestión de la calidad.
        .py-3.py-md-4(titulo="Procesos misionales u operativos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Procesos misionales u operativos
              p.mb-0 Generan el producto o servicio que recibe el cliente y se relacionan directamente con el cumplimiento de la misión organizacional. Incluyen, por ejemplo, la prestación del servicio, la producción y la atención al usuario.
        .py-3.py-md-4(titulo="Procesos de apoyo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Procesos de apoyo
              p.mb-0 Proveen los recursos y servicios que necesitan los demás procesos para funcionar. Entre ellos se encuentran la gestión documental, el talento humano, la contratación y la tesorería.
      p.mb-5 Esta clasificación permite ubicar cada proceso dentro de la organización y aporta criterios para determinar su importancia y su posible prioridad dentro de una iniciativa de automatización.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 16.
            span Mapa de procesos de una organización con los procesos estratégicos, misionales y de apoyo.
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img22.svg', alt='Mapa de procesos de una organización estructurado en procesos estratégicos, misionales u operativos y de apoyo, organizados según su función en la dirección institucional, la generación de productos o servicios y el suministro de recursos necesarios para el funcionamiento de los demás procesos. ').m-auto
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Modelado de procesos
      p El #[b modelado de procesos] tiene como propósito facilitar el análisis y la optimización de los procesos. Descomponer un proceso en sus diferentes partes permite estudiarlo con mayor precisión, reconocer las posibilidades de cada actividad y establecer un punto de partida para identificar obstáculos, ineficiencias y oportunidades de mejora.
      p.mb-5 Para caracterizar un proceso mediante el modelado. Se deben considerar cuatro categorías de información: #[b insumos], #[b resultados], #[b facilitadores] y #[b guías]. Esta forma de describir el proceso corresponde a la lógica de la #[b notación IDEF0], en la que una actividad se caracteriza mediante sus entradas, salidas, mecanismos y controles. La relación entre estas categorías y un proceso de automatización se presenta a continuación:
      .bg___carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img23.png', alt="" ).m-auto
                  h4.text-center Insumos
                  .box___card_sinbordes_p
                    p.mb-0.text-center Corresponden a aquello que ingresa al proceso y es objeto de transformación. En la caracterización de una automatización, incluyen los datos y documentos que recibe el robot.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img24.png', alt="" ).m-auto
                  h4.text-center Resultados
                  .box___card_sinbordes_p
                    p.mb-0.text-center Corresponden a los productos obtenidos mediante la transformación de los insumos. Pueden materializarse, por ejemplo, en un archivo, un registro o una notificación generada por el proceso.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img25.png', alt="" ).m-auto
                  h4.text-center Facilitadores
                  .box___card_sinbordes_p
                    p.mb-0.text-center Son los recursos utilizados para transformar los insumos en resultados. En una automatización pueden incluirse las aplicaciones, las credenciales y los equipos que necesita el proceso para ejecutarse.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img26.png', alt="" ).m-auto
                  h4.text-center Guías
                  .box___card_sinbordes_p
                    p.mb-0.text-center Comprenden la información, las normas, los conocimientos y los documentos que establecen cuándo, cómo y por qué se ejecuta un proceso. Incluyen las reglas de negocio, las políticas internas y la normativa aplicable.
      p.mb-5 Reconocer estas categorías permite caracterizar de manera estructurada los elementos que intervienen en el proceso antes de definir la solución de automatización.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img26.png" style="max-width: 60px").m-auto
        .col
          h3 Técnicas de modelado de procesos
      p.mb-5 A continuación, se presenta un video que explica las principales técnicas utilizadas para describir y analizar un proceso, facilitando la identificación de sus actividades, relaciones y oportunidades de mejora y optimización.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/SAFHGsCB-10" title="Descripción y análisis de procesos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Descripción y análisis de procesos
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img26.png" style="max-width: 60px").m-auto
        .col
          h3 Diagrama de flujo
      p El #[b diagrama de flujo] representa un proceso, sistema o algoritmo informático mediante símbolos y conexiones. Se emplea para documentar, estudiar, mejorar, planificar y comunicar procesos que pueden presentar diferentes niveles de complejidad.
      p.mb-5 En estos diagramas se utilizan rectángulos, óvalos, rombos y otros símbolos para identificar los distintos tipos de pasos, junto con flechas conectoras que establecen el orden y la secuencia del flujo. Los símbolos se encuentran normalizados en la #[b norma ISO 5807:1985], cuya aplicación contribuye a mantener criterios consistentes de diagramación. Los principales símbolos utilizados son los siguientes:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Símbolos utilizados en los diagramas de flujo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Símbolo
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Figura
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inicio / Final
                      td.ajuste-border-tabla.texto-left Representa el punto en el que comienza o termina un proceso.
                      td.texto-left Óvalo o rectángulo con bordes redondeados
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t3/img27.svg" style="max-width: 120px").m-auto
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Línea de flujo
                      td.ajuste-border-tabla.texto-left Indica el orden de ejecución de las operaciones; las flechas señalan cuál es la siguiente actividad o instrucción.
                      td.texto-left Flecha
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t3/img28.svg" style="max-width: 120px").m-auto
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Entrada / Salida
                      td.ajuste-border-tabla.texto-left Representa la entrada de datos al proceso o la generación de información como resultado.
                      td.texto-left Paralelogramo
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t3/img29.svg" style="max-width: 120px").m-auto
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proceso
                      td.ajuste-border-tabla.texto-left Representa una operación o actividad ejecutada dentro del flujo.
                      td.texto-left Rectángulo
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t3/img30.svg" style="max-width: 120px").m-auto
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Decisión
                      td.ajuste-border-tabla.texto-left Representa el análisis de una condición que conduce a diferentes rutas de acuerdo con su resultado, por ejemplo, verdadero o falso.
                      td.texto-left Rombo
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t3/img31.svg" style="max-width: 120px").m-auto
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Documento
                      td.ajuste-border-tabla.texto-left Representa un documento generado o consultado durante la ejecución del proceso.
                      td.texto-left Rectángulo con borde inferior ondulado
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t3/img32.svg" style="max-width: 120px").m-auto
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Subproceso
                      td.ajuste-border-tabla.texto-left Representa un conjunto de pasos cuyo desarrollo detallado se encuentra contenido en otro flujo o diagrama.
                      td.texto-left Rectángulo con líneas verticales laterales
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t3/img33.svg" style="max-width: 120px").m-auto
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Conector
                      td.ajuste-border-tabla.texto-left Indica la continuación del flujo en otro punto del mismo diagrama o en otra página.
                      td.texto-left Círculo o conector fuera de página
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t3/img34.svg" style="max-width: 120px").m-auto
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img35.png', alt='' style="width: 500px").m-auto
            .col-xl
              .row.mb-3
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t2/img29.svg', alt='' style="width: 80px").m-auto
                .col-xl
                  p.mb-0 Los símbolos de #[b documento], #[b subproceso] y #[b conector] se incorporan debido a su uso frecuente en el levantamiento de procesos administrativos y a su inclusión en la norma citada.
              p.mb-0 Los diagramas empleados para representar procesos pueden recibir denominaciones más especializadas de acuerdo con su propósito. Entre ellas se encuentran los #[b mapas de procesos], los #[b diagramas de flujo de procesos], los #[b diagramas de flujo funcionales], los #[b mapas de procesos de negocio] y los modelos elaborados mediante #[b BPMN]. El mapa de procesos representa gráficamente el conjunto relacionado de procesos de una organización; el diagrama de flujo funcional permite establecer el movimiento entre unidades de trabajo; y los mapas de procesos de negocio describen las actividades que una empresa debe ejecutar para completar un proceso.
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 17.
            span Ejemplo aplicado al proceso de consulta y registro de divisas.
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img36.svg', alt='Diagrama de flujo aplicado al proceso de consulta y registro de divisas, compuesto por símbolos de inicio y final, actividades, decisiones, entradas y salidas conectadas mediante flechas que establecen el orden y las diferentes rutas de ejecución del proceso. ').m-auto
      p.mb-5 El uso coherente de estos símbolos facilita la documentación del flujo y proporciona una base común para analizar las actividades que posteriormente pueden formar parte de una automatización.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img26.png" style="max-width: 60px").m-auto
        .col
          h3 Modelo BPMN
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p #[b BPMN] es un estándar internacional utilizado para modelar procesos mediante una notación gráfica que describe la lógica de los pasos de un proceso de negocio. Su versión formal vigente es #[b BPMN 2.0.2], publicada por el #[b #[i Object Management Group (OMG)]] y adoptada también como #[b norma ISO/IEC 19510]. Desde la versión 2.0, la sigla BPMN corresponde a #[i Business Process Model and Notation]. Esta denominación reemplaza la expresión #[i Business Process Modeling Notation] utilizada anteriormente.
          .box___style_1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t3/img37.jpg', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 Los principales elementos de BPMN incluyen los #[b eventos], las #[b actividades] y las #[b compuertas]. Los eventos representan algo que sucede durante el proceso; las actividades corresponden al trabajo que se realiza y pueden ser simples o compuestas; y las compuertas controlan los puntos de divergencia y convergencia del flujo.
          p.mb-0 A estos elementos se suman los #[b objetos de conexión], los #[b elementos de agrupación] y los #[b artefactos], necesarios para representar procesos con mayor nivel de detalle. Los elementos de agrupación resultan especialmente relevantes para la automatización, porque los carriles permiten diferenciar explícitamente las actividades ejecutadas por una persona de aquellas asignadas al robot. Las principales categorías de BPMN se organizan de la siguiente manera:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img38.png', alt='' style="width: 350px").m-auto
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img39.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img40.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Objetos de flujo
                  p.mb-0.text-center Incluyen eventos, actividades y compuertas. Permiten describir qué sucede, qué se realiza y cómo se toman las decisiones dentro del proceso.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img41.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Objetos de conexión
                  p.mb-0.text-center Comprenden el flujo de secuencia, el flujo de mensaje y la asociación. Establecen el orden de las actividades, la comunicación entre participantes y los vínculos con otros elementos del modelo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img42.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Elementos de agrupación
                  p.mb-0.text-center Incluyen piscinas (#[i pools]) y carriles (#[i lanes]). Delimitan los participantes del proceso y permiten asignar cada actividad al responsable correspondiente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img43.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Artefactos
                  p.mb-0.text-center Incluyen objetos de datos, grupos y anotaciones. Aportan información complementaria al modelo sin modificar el flujo del proceso.
      p En la caracterización de un proceso destinado a la automatización, resulta pertinente elaborar dos modelos. El primero representa el #[b proceso actual (AS-IS)], es decir, la manera en que se ejecuta actualmente, incluidos sus reprocesos y tiempos de espera. El segundo representa el #[b proceso propuesto (TO-BE)] e incorpora las actividades que asumirá el robot, ubicadas en el carril correspondiente.
      p.mb-5 La diferencia entre los modelos #[b AS-IS y TO-BE] permite delimitar el alcance de la automatización y constituye un insumo para sustentar el beneficio esperado de la solución.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 18.
            span Modelo BPMN del proceso actual (AS-IS) y del proceso propuesto (TO-BE), con el carril correspondiente al robot de automatización.
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img44.svg', alt='Diagrama BPMN comparativo del proceso de automatización en sus estados actual y propuesto, organizado en modelos AS-IS y TO-BE, con actividades, eventos, decisiones y carriles que permiten diferenciar las tareas realizadas por una persona de aquellas asignadas al robot de automatización. ').m-auto
      p.mb-0 La comparación entre ambos modelos permite documentar las transformaciones propuestas y establecer con claridad qué actividades permanecerán bajo responsabilidad humana y cuáles formarán parte de la automatización.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
