import React from 'react';
import type { Course } from './types';
import { 
    LightbulbIcon, TargetIcon, FolderIcon, GlobeIcon, SearchIcon, PaletteIcon, 
    BoltIcon, CheckCircleIcon, StarIcon, RocketIcon 
} from './components/icons';

export const KEYWORDS: string[] = [
    'IA', 
    'IA Generativa', 
    'Inteligencia Artificial', 
    'Prompting', 
    'ChatGPT', 
    'Gemini', 
    'Perplexity AI',
    'Perplexity',
    'Gamma', 
    'ahorrar tiempo', 
    'crear', 
    'oportunidades', 
    'herramientas', 
    'proyectos', 
    'organizar', 
    'productividad', 
    'investigar', 
    'fuentes', 
    'presentaciones', 
    'diseño', 
    'instrucciones', 
    'respuestas', 
    'automatizar',
    'eficiencia', 
    'seguridad', 
    'habilidades digitales', 
    'tiempo', 
    'innovación',
    'crecimiento', 
    'impacto', 
    'confianza', 
    'claridad', 
    'práctica', 
    'método',
    'datos',
    'visual',
    'interactiva',
    'profesional'
];

export const COURSES: Course[] = [
  {
    id: 1,
    // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
    icon: React.createElement(LightbulbIcon),
    title: "Introducción a la IA Generativa",
    preview: "¿Quieres aprovechar la IA pero no sabes por dónde empezar? En este curso verás cómo aplicarla en tu vida real para ahorrar tiempo, crear con más facilidad y abrir nuevas oportunidades.",
    content: {
      whatIsIt: {
        title: "¿Qué es?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(LightbulbIcon),
        text: "Es la puerta de entrada a un mundo donde la tecnología ya no solo analiza, sino que crea contigo. La IA Generativa puede escribir, diseñar, programar y hasta proponer ideas nuevas. Este curso está pensado para que la entiendas de manera simple y descubras cómo aplicarla en tu día a día.",
      },
      whatFor: {
        title: "¿Para qué sirve?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(TargetIcon),
        text: "¿Alguna vez has sentido que pierdes horas en tareas repetitivas? ¿O que te falta tiempo para lo realmente importante? La IA Generativa es ese “compañero invisible” que te ayuda a resolver más rápido, liberar tu agenda y darle espacio a lo que realmente importa: pensar y crear.",
      },
      howItHelps: {
        title: "¿Cómo te ayudará en tu trabajo o día a día?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(BoltIcon),
        text: "Imagina redactar un informe en minutos, preparar una presentación visual sin estrés o automatizar esas tareas que siempre te quitan tiempo. Eso es lo que vas a aprender: a convertir la IA en un apoyo real que te dé más claridad, eficiencia y hasta un impulso creativo.",
      },
      benefits: {
        title: "Beneficios principales",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(CheckCircleIcon),
        list: [
          "Ahorrarás tiempo en lo que hoy te frena o desgasta.",
          "Aprenderás a usar herramientas que ya están cambiando empresas y profesiones.",
          "Tendrás ejemplos claros para aplicar de inmediato en tu trabajo o proyectos personales.",
          "Entenderás los riesgos para usar la IA con criterio y seguridad.",
          "Ganarás confianza en un mundo que cada vez pide más habilidades digitales.",
        ],
      },
      whyChoose: {
        title: "¿Por qué elegir este curso y no otro?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(StarIcon),
        text: "Porque no es teoría complicada ni promesas vacías: aquí verás la IA desde una perspectiva humana y práctica, para que realmente te ayude a crecer. Es el curso que te habla en tu idioma, con ejemplos reales, y te acompaña a dar el paso que estabas posponiendo.",
      },
      cta: {
        title: "Da el Paso Hoy",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(RocketIcon),
        text: `✨ Descubre todo lo que la IA puede hacer por ti
¿Quieres aprovechar la IA pero no sabes por dónde empezar? En este curso verás cómo aplicarla en tu vida real para ahorrar tiempo, crear con más facilidad y abrir nuevas oportunidades.`,
      },
    },
    relatedCourseIds: [2, 3],
  },
  {
    id: 2,
    // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
    icon: React.createElement(TargetIcon),
    title: "Cómo Dar Instrucciones a la IA: Prompting",
    preview: "Si la IA no te da lo que esperas, el problema no eres tú: es cómo se lo pides. Aquí aprenderás un método práctico para dar instrucciones claras y obtener respuestas útiles desde el primer intento.",
    content: {
      whatIsIt: {
        title: "¿Qué es?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(LightbulbIcon),
        text: "Este curso te enseña a dejar de \"pedirle cosas al azar\" a la IA y empezar a conducirla con claridad y precisión. Aprenderás un método práctico que te guía paso a paso para que cada instrucción se convierta en un resultado útil y de calidad.",
      },
      whatFor: {
        title: "¿Para qué sirve?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(TargetIcon),
        text: "Sirve para que la IA realmente te entienda y te dé exactamente lo que necesitas. Con este método lograrás respuestas más claras y útiles, ahorrarás tiempo en tareas repetitivas y mejorarás tu comunicación profesional.",
      },
      howItHelps: {
        title: "¿Cómo te ayudará en tu trabajo o día a día?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(BoltIcon),
        text: "Piensa en todas esas veces que la IA te dio una respuesta vaga o poco práctica. Con este curso aprenderás a explicarte de la forma correcta para obtener correos mejor redactados, reuniones mejor organizadas, mensajes de ventas más efectivos y reportes claros. La diferencia está en cómo lo pides, y aquí aprenderás a hacerlo bien.",
      },
      benefits: {
        title: "Beneficios principales",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(CheckCircleIcon),
        list: [
          "Aprender a \"hablar con la IA\" para que entienda lo que realmente necesitas.",
          "Obtener resultados precisos y prácticos sin perder tiempo en correcciones.",
          "Aplicar un método fácil de seguir en marketing, ventas, RH y operaciones.",
          "Ahorrar horas de trabajo gracias a instrucciones más claras y efectivas.",
          "Contar con un plan de acción de 7 días para empezar a aplicarlo de inmediato.",
        ],
      },
      whyChoose: {
        title: "¿Por qué elegir este curso?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(StarIcon),
        text: "Porque no se queda en la teoría: te da un método probado y ejemplos listos para usar, que te servirán en tu trabajo desde el primer día. Aprenderás a hacer que la IA deje de ser impredecible y se convierta en tu herramienta de confianza.",
      },
      cta: {
        title: "Transforma cómo Trabajas",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(RocketIcon),
        text: `🎯 No es magia, es saber pedirlo bien
Si la IA no te da lo que esperas, el problema no eres tú: es cómo se lo pides. Aquí aprenderás un método práctico para dar instrucciones claras y obtener respuestas útiles desde el primer intento.`,
      },
    },
    relatedCourseIds: [1, 3],
  },
  {
    id: 3,
    // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
    icon: React.createElement(FolderIcon),
    title: "Guía de la Interfaz de ChatGPT",
    preview: "Deja de usarlo \"a medias\". Aprende a sacarle todo el jugo a ChatGPT para organizar ideas, redactar mejor, preparar proyectos y simplificar tus tareas del día a día.",
    content: {
      whatIsIt: {
        title: "¿Qué es?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(LightbulbIcon),
        text: "Es un curso pensado para quienes empiezan desde cero y quieren descubrir el verdadero potencial de ChatGPT como un taller digital versátil y poderoso. No necesitas conocimientos previos, solo curiosidad y ganas de aprender a usar una de las herramientas más influyentes de nuestro tiempo.",
      },
      whatFor: {
        title: "¿Para qué sirve?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(TargetIcon),
        text: "Sirve para que conviertas a ChatGPT en tu herramienta de trabajo y organización personal. Aprenderás a moverte por su interfaz como si fuera tu nuevo espacio de productividad: organizado, creativo y práctico. Conocerás cada función y cómo aprovecharla para ahorrar tiempo, mejorar tu comunicación y tener más claridad en tus proyectos.",
      },
      howItHelps: {
        title: "¿Cómo te ayudará en tu trabajo o día a día?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(BoltIcon),
        text: "Imagina tener una plataforma donde guardas tus ideas, organizas proyectos, analizas documentos, preparas presentaciones, redactas textos y hasta trabajas en pizarras digitales con otros. Este curso te enseña paso a paso cómo usar ChatGPT para hacer todo eso de manera sencilla y útil.",
      },
      benefits: {
        title: "Beneficios principales",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(CheckCircleIcon),
        list: [
          "Entenderás la interfaz de ChatGPT como tu nuevo espacio de productividad.",
          "Aprenderás a organizar chats, proyectos y archivos de forma profesional.",
          "Descubrirás herramientas como Modo Voz, búsqueda web o Canvas que multiplican tus posibilidades.",
          "Conocerás funciones de seguridad y personalización para usar la IA con confianza.",
          "Ahorrarás horas de trabajo integrando resultados directamente en tus flujos.",
        ],
      },
      whyChoose: {
        title: "¿Por qué elegir este curso?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(StarIcon),
        text: "Porque no es solo un tutorial: es una guía práctica y clara que convierte a ChatGPT en una herramienta real para tu día a día. Te llevarás la confianza de saber qué es cada cosa, cómo usarla y cómo aplicarla en tu vida real desde el primer día.",
      },
      cta: {
        title: "Simplifica tu Vida",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(RocketIcon),
        text: `📂 Convierte a ChatGPT en tu espacio de trabajo
Deja de usarlo “a medias”. Aprende a sacarle todo el jugo a ChatGPT para organizar ideas, redactar mejor, preparar proyectos y simplificar tus tareas del día a día.`,
      },
    },
    relatedCourseIds: [2, 6],
  },
  {
    id: 4,
    // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
    icon: React.createElement(GlobeIcon),
    title: "Guía de la Interfaz de Gemini",
    preview: "¿Usas Gmail, Drive o Calendar? Con Gemini puedes integrarlo todo en un mismo espacio, junto con IA para texto, imágenes y voz. Aprende a usarlo como tu centro de operaciones diario.",
    content: {
      whatIsIt: {
        title: "¿Qué es?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(LightbulbIcon),
        text: "Es un curso diseñado para que descubras todo el potencial de Gemini, la plataforma de Google que combina texto, imágenes, voz y documentos en un solo lugar. Aquí aprenderás, paso a paso, cómo sacarle provecho para trabajar de forma más ágil, organizada y creativa.",
      },
      whatFor: {
        title: "¿Para qué sirve?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(TargetIcon),
        text: "Sirve para que integres la inteligencia artificial directamente en tu día a día. Con Gemini podrás conectar tu Gmail, Drive, Calendar o Maps, y así tener información, organización y creatividad trabajando juntas.",
      },
      howItHelps: {
        title: "¿Cómo te ayudará en tu trabajo o día a día?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(BoltIcon),
        text: "Imagina revisar un correo y obtener un resumen automático, convertir una respuesta en un documento listo en Google Docs o planear una ruta con Google Maps sin salir de la herramienta. Este curso te enseña a usar Gemini como tu centro de operaciones digital, donde puedes crear, analizar y resolver sin perder tiempo.",
      },
      benefits: {
        title: "Beneficios principales",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(CheckCircleIcon),
        list: [
          "Aprender a moverte con facilidad por la interfaz de Gemini.",
          "Usar sus funciones multimodales para combinar texto, imágenes, voz y archivos.",
          "Descubrir los Gems, asistentes especializados listos para tareas específicas.",
          "Conectar tus apps de Google (Gmail, Drive, Calendar, YouTube) para trabajar sin interrupciones.",
          "Aprovechar herramientas de personalización y privacidad para adaptar Gemini a ti.",
        ],
      },
      whyChoose: {
        title: "¿Por qué elegir este curso?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(StarIcon),
        text: "Porque no solo te explica botones: te muestra cómo Gemini puede convertirse en tu plataforma de trabajo y creatividad diaria, con ejemplos claros que aterrizan su uso en tu vida real.",
      },
      cta: {
        title: "Unifica tu Mundo Digital",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(RocketIcon),
        text: `🌐 Todo tu mundo digital en un solo lugar
¿Usas Gmail, Drive o Calendar? Con Gemini puedes integrarlo todo en un mismo espacio, junto con IA para texto, imágenes y voz. Aprende a usarlo como tu centro de operaciones diario.`,
      },
    },
    relatedCourseIds: [5, 1],
  },
  {
    id: 5,
    // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
    icon: React.createElement(SearchIcon),
    title: "Guía de la Interfaz de Perplexity AI",
    preview: "¿Cansado de no saber si lo que lees en internet es real? Con Perplexity obtendrás respuestas resumidas, verificadas y con fuentes directas para que investigues con confianza.",
    content: {
      whatIsIt: {
        title: "¿Qué es?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(LightbulbIcon),
        text: "Este curso te introduce a Perplexity AI, la herramienta de búsqueda avanzada que combina inteligencia artificial con fuentes verificables en tiempo real. Está diseñado para que entiendas su interfaz desde cero y aprendas a aprovecharla como un motor de investigación confiable y práctico.",
      },
      whatFor: {
        title: "¿Para qué sirve?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(TargetIcon),
        text: "Sirve para que dejes atrás la incertidumbre de no saber si lo que lees en internet es verdadero. Con Perplexity tendrás respuestas claras, resumidas y siempre con los enlaces a la fuente original, lo que te permite investigar con seguridad y basar tus decisiones en datos comprobables.",
      },
      howItHelps: {
        title: "¿Cómo te ayudará en tu trabajo o día a día?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(BoltIcon),
        text: "Imagina preparar un informe con información actualizada y respaldada, investigar un tema sin abrir 20 pestañas, o validar un dato en segundos con un clic. Este curso te enseña a usar Perplexity como tu aliado para trabajar con información real, organizada y lista para compartir.",
      },
      benefits: {
        title: "Beneficios principales",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(CheckCircleIcon),
        list: [
          "Aprender a navegar y organizar tus búsquedas de manera profesional.",
          "Usar Espacios para centralizar proyectos e investigaciones.",
          "Analizar documentos propios y reforzarlos con datos de la web.",
          "Acceder a resultados con fuentes citadas y verificables que dan confianza.",
          "Exportar información lista para usar en reportes, presentaciones o estudios.",
        ],
      },
      whyChoose: {
        title: "¿Por qué elegir este curso?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(StarIcon),
        text: "Porque mientras otras IA priorizan velocidad o creatividad, Perplexity pone la confianza en primer lugar. Este curso te mostrará cómo usarlo para que cada búsqueda se convierta en un resultado confiable, verificable y útil para tu trabajo.",
      },
      cta: {
        title: "Investiga con Certeza",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(RocketIcon),
        text: `🔎 La información que buscas, clara y confiable
¿Cansado de no saber si lo que lees en internet es real? Con Perplexity obtendrás respuestas resumidas, verificadas y con fuentes directas para que investigues con confianza.`,
      },
    },
    relatedCourseIds: [4, 2],
  },
  {
    id: 6,
    // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
    icon: React.createElement(PaletteIcon),
    title: "Crea Presentaciones de Alto Impacto con Gamma",
    preview: "Olvídate de pasar horas frente a diapositivas. Con Gamma transformarás un borrador en una presentación profesional, visual e interactiva que sorprende y convence.",
    content: {
      whatIsIt: {
        title: "¿Qué es?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(LightbulbIcon),
        text: "Este curso te enseña a usar Gamma App, la herramienta que convierte tus ideas en presentaciones profesionales en minutos gracias a la inteligencia artificial. No necesitas ser diseñador: con unos cuantos clics tendrás presentaciones claras, atractivas y listas para compartir.",
      },
      whatFor: {
        title: "¿Para qué sirve?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(TargetIcon),
        text: "Sirve para que nunca más pierdas horas frente a una diapositiva en blanco. Con Gamma podrás transformar un texto, datos o un borrador en una presentación visualmente impecable, con gráficos, imágenes, videos y hasta encuestas interactivas.",
      },
      howItHelps: {
        title: "¿Cómo te ayudará en tu trabajo o día a día?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(BoltIcon),
        text: "Imagina preparar una propuesta comercial en minutos, mostrar resultados de forma clara a tu equipo o diseñar una guía de formación que atrape a los nuevos colaboradores. Gamma te quita el trabajo pesado de diseño para que te concentres en lo importante: tu mensaje y tus ideas.",
      },
      benefits: {
        title: "Beneficios principales",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(CheckCircleIcon),
        list: [
          "Crear presentaciones profesionales en minutos, sin necesidad de experiencia en diseño.",
          "Ahorrar tiempo y esfuerzo en tareas de preparación visual.",
          "Personalizar fácilmente colores, estilos, imágenes y textos.",
          "Añadir elementos interactivos como videos, formularios y gráficos dinámicos.",
          "Compartir con un enlace o exportar en PDF y PowerPoint, sin complicaciones.",
        ],
      },
      whyChoose: {
        title: "¿Por qué elegir este curso?",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(StarIcon),
        text: "Porque no solo aprenderás a usar Gamma: descubrirás cómo convertirlo en tu asistente de diseño personal, capaz de transformar ideas simples en presentaciones que sorprenden, convencen y generan impacto.",
      },
      cta: {
        title: "Haz que Cada Idea Brille",
        // FIX: Replaced JSX syntax with React.createElement to fix TypeScript errors in a .ts file.
        icon: React.createElement(RocketIcon),
        text: `🎨 Presentaciones que impresionan sin perder tiempo
Olvídate de pasar horas frente a diapositivas. Con Gamma transformarás un borrador en una presentación profesional, visual e interactiva que sorprende y convence.`,
      },
    },
    relatedCourseIds: [3, 1],
  },
];