<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Requerimientos
      p.mb-3 Los #[b requerimientos] son las peticiones o solicitudes que se consideran necesarias o importantes para satisfacer una o varias necesidades ante un problema o la mejora de un proceso. Es decir, corresponden a las condiciones o capacidades que deben tener los sistemas, productos o servicios para satisfacer un contrato, un estándar u otras especificaciones o documentos establecidos formalmente.
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img1.jpg', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 Los requerimientos no indican el diseño que debe tener el producto; establecen las funciones y los contenidos que se espera que tenga, así como la manera en que los usuarios interactúan con él. Además, pueden variar con el tiempo, puesto que, con la puesta en marcha del producto, se podrán generar nuevos requerimientos, diferentes o complementarios a los iniciales.
          p.mb-0 Su propósito principal es asegurar la satisfacción de las expectativas de los clientes y de las partes interesadas (#[i stakeholders]), internas y externas, mediante la relación eficiente entre lo que esperan los clientes y usuarios y lo que el grupo del proyecto va a desarrollar. Los requerimientos se adaptan a todo tipo de proyectos, garantizan el óptimo funcionamiento de los procesos y sirven de referencia para el aseguramiento y el control de los cambios que puedan presentarse durante el proyecto. La #[b norma ISO/IEC/IEEE 29148:2018] precisa esta idea mediante tres niveles que conviene diferenciar, debido a que cada uno se redacta y se valida de manera distinta:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img2.png', alt='' style="width: 300px").m-auto
      .bg___carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img3.png', alt="" ).m-auto
                  h4.text-center Necesidad de la parte interesada
                  .box___card_sinbordes_p
                    p.mb-0.text-center Expresa una carencia o expectativa en el lenguaje de quien la manifiesta. En el proceso de consulta de divisas, por ejemplo, la persona encargada pierde tiempo consultando y copiando manualmente el precio del dólar y del euro.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img4.png', alt="" ).m-auto
                  h4.text-center Requisito
                  .box___card_sinbordes_p
                    p.mb-0.text-center Corresponde a la traducción formal de la necesidad en un enunciado único, verificable y trazable. Por ejemplo: el sistema debe registrar diariamente el valor del dólar y del euro en el archivo de control, con la fecha de la consulta.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img5.png', alt="" ).m-auto
                  h4.text-center Especificación
                  .box___card_sinbordes_p
                    p.mb-0.text-center Reúne y organiza el conjunto de requisitos acordados y aprobados. En este caso, corresponde al documento de requerimientos del proceso, que contiene requisitos funcionales, no funcionales, reglas de negocio y criterios de aceptación.
      p.mb-0 Esta diferenciación permite establecer la trazabilidad desde la necesidad expresada por la parte interesada hasta los requisitos formalizados y su correspondiente especificación. Todo requisito debe poder relacionarse con la necesidad que lo originó, y toda necesidad debe estar cubierta por al menos un requisito.
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Control de cambios
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 Durante la ejecución del proyecto pueden surgir situaciones en las que se identifican nuevas necesidades que no habían sido contempladas inicialmente, pero que resulta necesario incorporar a la aplicación. Estos cambios imprevistos pueden generar nuevos requerimientos e, incluso, modificaciones en aquellos que ya se encuentran documentados.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img6.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/intro/img4.svg', alt='' style="width: 70px")
          p.mb-0 Por esta razón, desde el inicio se debe definir la forma en que se gestionarán los cambios, debido a que pueden ocasionar retrocesos en el desarrollo y afectar la planeación. Asimismo, se deben incluir cláusulas contractuales claras para que las partes que intervienen conozcan las condiciones aplicables y se reduzca la necesidad de rehacer aquello que ya se ha desarrollado. Para que el control de cambios funcione en la práctica, se requieren dos elementos fundamentales:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Línea base
                  p.mb-0 Corresponde al conjunto de requisitos aprobados en un momento determinado. Constituye el punto de referencia a partir del cual cada cambio posterior se registra y se numera para mantener el control sobre la evolución de los requerimientos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Análisis de impacto
                  p.mb-0 Permite determinar, antes de aceptar una solicitud, qué otros requisitos resultan afectados, cuánto esfuerzo adicional implica el cambio y qué riesgos introduce. Esta evaluación sustenta la decisión sobre la conveniencia de incorporar la modificación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 En los proyectos de automatización, el análisis de impacto tiene una consecuencia concreta: un cambio en la pantalla o en el reporte de origen puede dejar inservible el robot construido. Por lo tanto, la solicitud debe evaluarse también en relación con los #[b selectores] y las #[b fuentes de datos] que utiliza el robot. Para mantener la trazabilidad y sustentar las decisiones, una solicitud de cambio debe registrar, como mínimo, los siguientes elementos:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Identificador y fecha
                  p.mb-0.text-center Permiten ordenar las solicitudes y reconstruir la historia del requisito a lo largo del proyecto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Origen
                  p.mb-0.text-center Identifica quién solicita el cambio y bajo qué autoridad se presenta la solicitud.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Descripción y justificación
                  p.mb-0.text-center Explican qué se solicita y por qué el cambio resulta necesario dentro del proyecto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Requisitos afectados
                  p.mb-0.text-center Enlazan la solicitud con la línea base mediante la matriz de trazabilidad y permiten identificar los requisitos que deberán modificarse.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Impacto en alcance, tiempo y costo
                  p.mb-0.text-center Sustenta la decisión de aprobar, aplazar o rechazar la solicitud, de acuerdo con sus efectos sobre el proyecto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Decisión y responsable
                  p.mb-0.text-center Cierra formalmente la solicitud y deja constancia de la decisión adoptada y de la persona que la autorizó.
      p.mb-0 El registro sistemático de estos elementos permite gestionar los cambios de manera controlada y conservar la trazabilidad entre las necesidades, los requisitos aprobados y las modificaciones efectuadas durante el proyecto.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Técnicas para el levantamiento de requerimientos
      p Una etapa fundamental para la creación de un sistema dentro de un proyecto informático es la #[b identificación y documentación de los requerimientos] desde el inicio. Este proceso permite plantear ideas y prevenir errores que podrían presentarse durante el desarrollo, contribuyendo así a reducir el riesgo de fracaso del proyecto.
      p.mb-5 El #[b levantamiento de requerimientos], también denominado recopilación de requerimientos, hace referencia a la identificación y documentación de las necesidades del sistema a partir de la información proporcionada por usuarios, clientes o partes interesadas. Para llevarlo a cabo se pueden aplicar diferentes técnicas, cuya elección depende de las características del proceso y de la información disponible.
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Análisis de documentación
                  p.mb-0 Permite obtener información sobre requerimientos funcionales y no funcionales a partir de documentos ya elaborados, como manuales, procedimientos, formatos y reportes. Conviene emplearlo cuando los expertos del proceso no están disponibles o ya no forman parte de la empresa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Análisis directo del entorno de trabajo
                  p.mb-0 Permite analizar el entorno en el que los usuarios desarrollan sus actividades. Puede realizarse de forma pasiva, mediante la toma de notas sin interferir en el proceso, o de forma activa, mediante la conversación con el usuario mientras ejecuta sus tareas. Resulta pertinente para documentar la situación actual del proceso de negocio tal como ocurre.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Entrevistas
                  p.mb-0 Se realizan con las partes interesadas directas o los usuarios clave. Integran preguntas cerradas para confirmar y validar información y preguntas abiertas para identificar información faltante. Son apropiadas cuando se requiere profundidad y establecer el nivel de importancia de cada requerimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Encuestas o cuestionarios
                  p.mb-0 Constituyen instrumentos con un propósito y una audiencia definidos, fechas precisas y preguntas claras, y pueden combinar preguntas abiertas y cerradas. Son pertinentes cuando se necesita recopilar información de muchas personas en poco tiempo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mesas de trabajo (#[i workshops])
                  p.mb-0 Corresponden a sesiones con tareas predefinidas y participantes preseleccionados, en las que intervienen un facilitador y un transcriptor. Sus resultados se analizan mediante diagramas o flujogramas. Se emplean cuando se requiere alcanzar acuerdos entre varias áreas acerca de un mismo proceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Lluvia de ideas
                  p.mb-0 Consiste en una sesión estructurada y limitada en el tiempo, con reglas de participación y criterios para evaluar y puntuar las ideas, sin permitir críticas durante su formulación. Resulta pertinente en etapas tempranas, cuando el alcance todavía no está definido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Historias de usuario
                  p.mb-0 Se construyen a partir de conversaciones con los usuarios y, preferiblemente, son redactadas por ellos. Indican el rol, la funcionalidad y el resultado esperado. Son apropiadas cuando el desarrollo se organiza de forma iterativa y se requiere priorizar de acuerdo con el valor aportado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img22.png', alt='' style="max-width: 500px").m-auto
      p Estas técnicas permiten recopilar información desde diferentes perspectivas y seleccionar la estrategia más adecuada según la disponibilidad de las partes interesadas, el nivel de profundidad requerido y las características del proyecto.
      p.mb-5 A las técnicas anteriores, todas vigentes, se suman actualmente otras especialmente pertinentes cuando el propósito del levantamiento es #[b automatizar]. Entre ellas se encuentran la minería de procesos (#[i process mining]), la minería de tareas (#[i task mining]), la captura asistida del proceso y el prototipado. Estas técnicas aportan evidencia sobre la ejecución del proceso y complementan la información recopilada mediante documentos y personas.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img23.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Minería de procesos (<i>process mining</i>)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Utiliza como fuente de evidencia los registros de eventos de los sistemas de información. Permite reconstruir el flujo real, cuantificar variantes y frecuencias, identificar cuellos de botella y priorizar qué procesos o actividades conviene automatizar.
            .row(titulo="Minería de tareas (<i>task mining</i>)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se basa en el registro de la interacción de la persona con las aplicaciones de su equipo. Permite medir el tiempo empleado en cada paso e identificar las tareas repetitivas que presentan mayor volumen.
            .row(titulo="Captura asistida del proceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Emplea la grabación guiada de una ejecución completa del proceso. Las herramientas de automatización robótica pueden registrar las acciones realizadas y generar un borrador inicial del documento de definición del proceso con capturas de pantalla y acciones.
            .row(titulo="Prototipado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Utiliza una maqueta o un flujo de ejemplo presentado al usuario. Su propósito es validar el resultado esperado antes de construir la automatización completa y facilitar la identificación temprana de ajustes necesarios.
      p En conjunto, estas técnicas permiten obtener evidencia sobre el proceso tal como ocurre en la práctica y no únicamente sobre la manera en que se considera que ocurre. De esta forma, el levantamiento de requerimientos para proyectos de automatización puede sustentarse en información procedente de las personas, los documentos y los registros de los sistemas.
      p.mb-5 El levantamiento de requisitos puede apoyarse en diferentes fuentes de información, cada una de las cuales aporta evidencias complementarias para comprender el proceso:
      .row.justify-content-center.mb-0
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img24.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Las personas
            p.mb-0.text-center #[b La evidencia está en lo que dicen y en lo que hacen. Lo que dicen]: entrevistas, encuestas o cuestionarios, mesas de trabajo (#[i workshops]), lluvia de ideas e historias de usuario. Lo que hacen: observación y prototipado. #[b Aportan el porqué, las excepciones y las prioridades]. Describen el proceso como se cree que ocurre.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t1/img25.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Los documentos
            p.mb-0.text-center #[b La evidencia está en lo que ya está escrito. Análisis de documentación]: manuales, procedimientos, formatos, reportes y normativa interna. #[b Aporta la regla escrita y el vocabulario]. Puede estar desactualizado frente a la práctica real.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img26.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Los registros de los sistemas
            p.mb-0.text-center #[b La evidencia está en la huella que dejan las máquinas]. Minería de procesos, minería de tareas y captura asistida del proceso. #[b Aportan el proceso real, medido y con sus variantes]. No explican por qué el proceso es como es.

</template>

<script>
export default {
  name: 'Tema1',
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
