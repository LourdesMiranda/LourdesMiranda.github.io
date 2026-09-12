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
        label: 'Objetivo',
        body: 'Construir en equipo (4 personas, bootcamp) un producto completo de principio a fin: un motor determinista filtra un catálogo local (datos de TMDB) por compatibilidad con el perfil del usuario, y un modelo de IA (Claude Haiku, de Anthropic) elige la mejor opción de esa shortlist y genera una razón personalizada.',
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
      {
        src: '/images/moodfix_question.png',
        alt: 'Pantalla de preguntas de MoodFix',
        title: 'Pregúntame 🎯',
        description: 'El cuestionario real: 5 pasos rápidos para perfilar el estado de ánimo antes de buscar en el catálogo.',
      },
      {
        src: '/images/moodfix_result.png',
        alt: 'Recomendación de MoodFix con razón generada por IA',
        title: 'Recomendación con IA ✨',
        description: 'El resultado final: el motor determinista filtra el catálogo y Claude Haiku elige la mejor opción y explica por qué.',
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
