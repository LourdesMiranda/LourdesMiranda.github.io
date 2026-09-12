const PROJECTS = [
  {
    title: 'MoodFix',
    url: 'https://moodfix-frontend-m08v.onrender.com/',
    headline: 'De 40 minutos de scroll a una recomendación en 10 segundos',
    sections: [
      {
        label: 'El problema',
        body: 'Netflix no tiene un problema de contenido, tiene un problema de decisión: cuantas más opciones hay, más cuesta elegir. MoodFix nace para acortar ese momento — en vez de un catálogo infinito, hace un par de preguntas sobre cómo te sientes y devuelve tres películas concretas.',
      },
      {
        label: 'Mi contribución',
        body: 'Formé parte de un equipo de 4 personas (bootcamp) y me centré en el frontend: rediseñé la landing con animaciones, añadí persistencia de las acciones del usuario en cada sesión (marcar como vista, guardar para luego, descartar), y memoria de las recomendaciones ya mostradas para no repetirlas. También integré la IA de recomendación (Claude Haiku, de Anthropic) con la API, construí la pantalla de historial y pulí la navegación general.',
      },
      {
        label: 'Reto técnico',
        body: 'Detecté que el despliegue se estaba cobrando en mi tarjeta personal en lugar de repartirse entre el equipo. Investigando la causa, vi que los datos de usuario (cuentas, perfiles, favoritos) compartían archivo SQLite con el catálogo de películas, y ambos necesitaban un disco persistente para sobrevivir a cada despliegue — un disco que solo ofrecen los planes de pago de Render. La solución: separar el catálogo (que se reconstruye solo, no necesita persistir) de los datos de usuario, y migrar estos últimos a Turso, una base de datos gratuita compatible con SQLite. Antes de tocar producción, validé todo el flujo — registro, login y favoritos contra la base real — y simulé un reinicio completo del servidor para confirmar que no se perdía ningún dato. Resultado: la app pasó a funcionar 100% gratis sin perder persistencia.',
      },
    ],
    stack: ['React + Vite', 'Flask (Python)', 'SQLite / Turso', 'Render', 'Claude API (Anthropic)'],
    images: [
      {
        src: '/images/moodfix_hero.png',
        alt: 'Landing de MoodFix',
        title: 'Landing 🎬',
        description: 'Rediseño de la página de entrada con animaciones, pensado para transmitir el problema en segundos.',
      },
      {
        src: '/images/moodfix_steps.png',
        alt: 'Flujo de 3 pasos de MoodFix',
        title: 'Cómo funciona ⚡',
        description: 'El flujo de 3 pasos que reemplaza el scroll infinito: estado de ánimo → recomendación → disfrutar.',
      },
    ],
  },
  {
    title: 'Black Book🔗',
    url: 'https://lourdesmiranda.github.io/black-books/',
    sections: [
      {
        label: 'Proyecto personal',
        body: 'Proyecto personal enfocado en el diseño de una interfaz web oscura y misteriosa para amantes de la lectura y el cine.',
      },
      {
        label: 'Objetivo',
        body: 'Desarrollar una estructura visual clara y atractiva, con diseño responsive, con el fin de practicar maquetación web con HTML, CSS, JavaScript y React.',
      },
    ],
    images: [
      {
        src: '/images/wareframe_fisico.jpeg',
        alt: 'Wireframes físico',
        title: 'Wireframe Físico ✏️',
        description:
          'Un esquema hecho a mano sobre papel cuadriculado con el objetivo de estructurar los bloques principales de contenido del proyecto.',
      },
      {
        src: '/images/wareframe_digital.png',
        alt: 'Wireframes digital',
        title: 'Wireframe Digital 💻',
        description: 'Traslado de Wireframe físico a digital para dar lugar a un layout a través de Figma.',
      },
    ],
  },
];

export default PROJECTS;
