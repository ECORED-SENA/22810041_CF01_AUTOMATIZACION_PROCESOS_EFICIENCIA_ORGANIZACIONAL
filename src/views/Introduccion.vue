<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p Todo proceso de automatización requiere, como punto de partida, una #[b comprensión clara y detallada del proceso que se desea intervenir]. Antes de utilizar una herramienta de automatización, es necesario establecer qué hace el proceso, quién lo ejecuta, con qué información trabaja, qué reglas debe cumplir y cuál es el resultado esperado. Este análisis previo constituye el propósito central del presente componente formativo: la #[b caracterización del proceso informático que se va a automatizar].
          .box___style_1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p.mb-0 El componente inicia con el concepto de #[b requerimiento] y con la identificación de las necesidades de las partes interesadas. Posteriormente, aborda las técnicas para su levantamiento, las características que debe cumplir un requerimiento correctamente formulado y su clasificación en funcionales y no funcionales. Finalmente, presenta los criterios para documentarlos y representarlos gráficamente mediante notaciones estandarizadas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right")
            p.mb-0 Esta versión actualiza los referentes normativos y técnicos empleados en el componente. La especificación de requisitos se fundamenta en la #[b norma ISO/IEC/IEEE 29148:2018], que integra los contenidos anteriormente asociados con el estándar #[b IEEE 830-1998]; los requisitos no funcionales se articulan con el modelo de calidad establecido en la #[b norma ISO/IEC 25010:2023]; y las notaciones gráficas se relacionan con las versiones vigentes de #[b UML] y #[b BPMN], publicadas por el #[b #[i Object Management Group] (OMG)].
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img3.jpg', alt='' style="width: 300px").m-auto
        .col-xl-4.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/intro/img4.svg', alt='' style="width: 70px")
          p.mb-0 Asimismo, se incorporan técnicas y documentos propios de los proyectos de #[b automatización robótica de procesos], con el fin de relacionar la caracterización con las etapas posteriores de diseño y construcción de la solución. De esta manera, el componente establece una base conceptual y metodológica que facilita la transición hacia la construcción del robot, desarrollada en el componente formativo.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
