<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Requerimientos y notaciones del proceso de automatización',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los conceptos de requerimientos, técnicas de levantamiento, características y tipos de requerimientos, notaciones UML y modelado de procesos, abordados en el componente formativo Requerimientos del proceso de automatización.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'Según el componente formativo, ¿qué son los requerimientos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las especificaciones de diseño que indican cómo debe construirse el producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las condiciones o capacidades que debe tener un sistema, producto o servicio para satisfacer una necesidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El cronograma de actividades que debe cumplir el equipo de desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El presupuesto asignado al proyecto informático.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Durante la ejecución de un proyecto aparecen necesidades que no se habían previsto. ¿Qué se recomienda frente a esta situación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Rechazar toda solicitud nueva hasta terminar el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir desde el principio la forma de gestionar los cambios e incluir cláusulas contractuales claras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Documentar los cambios únicamente al finalizar el desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar los requerimientos iniciales por los nuevos, sin dejar registro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'En la técnica de observación para el levantamiento de requerimientos, ¿qué caracteriza a la observación pasiva?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El observador conversa con los usuarios mientras ejecutan el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El observador solo toma notas y no interfiere en el desempeño de las operaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El observador aplica un cuestionario con preguntas abiertas y cerradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El observador dirige una mesa de trabajo con un facilitador y un transcriptor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Un requerimiento cuya implementación puede comprobarse y cuyo resultado de prueba es correcto o incorrecto cumple con la característica de ser:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Singular.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Necesario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conforme.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'La aplicación para pedir un taxi debe operar las 24 horas del día durante todo el año. Este enunciado corresponde a un requerimiento:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Funcional, porque describe una acción visible para el usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No funcional, porque se refiere a la disponibilidad del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Funcional, porque hace parte de la interfaz de captura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No funcional, porque describe el menú de la aplicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el propósito de la trazabilidad de los requerimientos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documentar la vida de cada requerimiento, desde su formulación original hasta el documento final.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Asignar el presupuesto correspondiente a cada fase del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir el lenguaje de programación con el que se construirá la aplicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar el número de usuarios que pueden acceder al sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Dentro de los diagramas UML, el diagrama de casos de uso se clasifica como un diagrama de:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estructura, porque modela las clases, los atributos y sus relaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comportamiento, porque describe lo que hace el sistema desde un punto de vista externo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Estructura, porque representa el despliegue de los componentes del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comportamiento, porque organiza los elementos del modelo en paquetes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'En el modelado de procesos, ¿a qué categoría de información corresponde todo aquello que pasa a través de un proceso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Insumos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Facilitadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'En un diagrama de flujo, ¿qué representa el símbolo de decisión?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El inicio y el final de un proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La lectura de datos en la entrada y la impresión de datos en la salida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El análisis de una situación con base en los valores verdadero y falso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El orden de ejecución de las operaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuáles son los principales elementos del modelo BPMN?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clases, atributos y operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eventos, actividades y compuertas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Insumos, resultados y guías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actores, escenarios y estados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué técnica de levantamiento es apropiada para recopilar información de muchas personas en poco tiempo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis directo del entorno laboral y operativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encuestas o cuestionarios dirigidos a los participantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Entrevistas individuales realizadas con los usuarios clave.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mesas de trabajo desarrolladas entre diferentes áreas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué elemento representa el conjunto de requisitos aprobados en un momento determinado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Matriz utilizada para documentar toda la trazabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documento empleado para diseñar toda la solución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Línea base utilizada para controlar cambios posteriores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modelo gráfico utilizado para representar los procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué característica permite comprobar un requisito mediante una prueba, inspección o análisis?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Completo, porque contiene toda la información necesaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Singular, porque establece solamente una capacidad requerida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Factible, porque puede realizarse con recursos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verificable, porque permite comprobar objetivamente su cumplimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué técnica utiliza registros de eventos de los sistemas para reconstruir el flujo real?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Minería de procesos basada en registros de eventos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Minería de tareas basada en acciones del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Captura asistida basada en grabaciones del proceso completo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Prototipado basado en modelos preliminares del proceso esperado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué tipo de requerimiento establece los servicios que debe prestar un sistema?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Requerimiento de seguridad asociado con protección de información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Requerimiento funcional asociado con servicios del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Requerimiento legal asociado con normas de obligatorio cumplimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Requerimiento técnico asociado con plataformas y aplicaciones utilizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué instrumento permite realizar el seguimiento de los requerimientos hacia atrás y hacia adelante?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documento de diseño utilizado para construir la automatización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Diagrama de actividades utilizado para representar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Matriz de trazabilidad utilizada para relacionar los requisitos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Documento de procesos utilizado para registrar las actividades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué documento describe el proceso tal como se realiza actualmente, paso a paso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documento SRS para especificar requisitos propios del <i>software</i>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Documento SDD para describir la arquitectura del robot desarrollado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Documento SyRS para especificar requisitos generales del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Documento PDD para describir detalladamente el proceso actual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué representa el modelo AS-IS dentro de la caracterización de un proceso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El proceso tal como se ejecuta actualmente en operación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El proceso futuro después de implementar completamente la automatización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El diseño técnico utilizado para construir posteriormente el robot.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El conjunto final de requisitos aprobados para la solución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué elementos de BPMN permiten diferenciar las actividades realizadas por personas y robots?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Objetos de flujo empleados para representar eventos y actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Carriles empleados para asignar actividades según cada responsable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Artefactos empleados para agregar información complementaria al modelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Compuertas empleadas para controlar divergencias dentro del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito principal de los requerimientos en un proyecto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Satisfacer las expectativas de clientes y partes interesadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Definir exclusivamente el diseño visual de la aplicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer únicamente las herramientas usadas en el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar exclusivamente los costos finales del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
