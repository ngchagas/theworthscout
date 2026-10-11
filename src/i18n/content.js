export const locales = ['en', 'es-us', 'pt-br'];

export const shell = {
  en: {
    htmlLang: 'en-US', tagline: 'Independent Guides & Product Reviews', navLabel: 'Main navigation', languageLabel: 'Language',
    pets: 'Pets', about: 'About', standards: 'Our Standards', contact: 'Contact',
    footer: 'Independent Guides & Product Reviews', affiliate: 'Affiliate Disclosure', privacy: 'Privacy', editorial: 'Editorial Policy',
  },
  'es-us': {
    htmlLang: 'es-US', tagline: 'Guías independientes y reseñas de productos', navLabel: 'Navegación principal', languageLabel: 'Idioma',
    pets: 'Mascotas', about: 'Nosotros', standards: 'Nuestros criterios', contact: 'Contacto',
    footer: 'Guías independientes y reseñas de productos', affiliate: 'Divulgación de afiliados', privacy: 'Privacidad', editorial: 'Política editorial',
  },
  'pt-br': {
    htmlLang: 'pt-BR', tagline: 'Guias independentes e avaliações de produtos', navLabel: 'Navegação principal', languageLabel: 'Idioma',
    pets: 'Pets', about: 'Sobre', standards: 'Nossos critérios', contact: 'Contato',
    footer: 'Guias independentes e avaliações de produtos', affiliate: 'Divulgação de afiliados', privacy: 'Privacidade', editorial: 'Política editorial',
  },
};

export const localizedPages = {
  'es-us': {
    home: {
      title: 'TheWorthScout | Guías independientes y reseñas de productos',
      description: 'Guías de compra y reseñas independientes para ayudarte a tomar decisiones más informadas.',
      eyebrow: 'Guías independientes y reseñas de productos', headline: 'Mejor investigación.\nDecisiones con más confianza.',
      lead: 'Guías de compra cuidadosas e investigación clara de productos para ayudarte a entender tus opciones antes de gastar.',
      cta: 'Explorar guías para mascotas →', coverage: 'Explora nuestro contenido', picks: 'Encuentra tu próxima buena elección.',
      cards: [
        { symbol: '🐾', title: 'Mascotas', text: 'Recursos de entrenamiento, artículos esenciales y guías prácticas para quienes viven con mascotas.', link: 'Explorar Mascotas →', href: '/es-us/pets/' },
        { symbol: '⌁', title: 'Tecnología', text: 'Próximamente. Software y herramientas analizados desde una perspectiva práctica.' },
        { symbol: '⌂', title: 'Hogar', text: 'Próximamente. Productos útiles y comparaciones cuidadosas para la vida diaria.' },
      ],
      approach: 'Nuestro enfoque', approachTitle: 'Información clara, sin exageraciones.',
      approachText: 'Explicamos características, limitaciones y diferencias en un lenguaje sencillo. Distinguimos las pruebas directas de la investigación basada en información pública y divulgamos las relaciones de afiliación.',
      standardsLink: 'Lee nuestros criterios editoriales →',
    },
    about: {
      title: 'Nosotros | TheWorthScout', eyebrow: 'Acerca de TheWorthScout', heading: 'Investigación antes de recomendar.',
      paragraphs: [
        'TheWorthScout es un proyecto editorial independiente que ayuda a los lectores a tomar decisiones de compra más informadas. Comenzamos con guías relacionadas con mascotas y podremos ampliar a otras categorías.',
        'Nuestro objetivo es hacer que la información de productos sea más fácil de entender, incluidas sus limitaciones y diferencias. No afirmamos haber probado un producto directamente si eso no ocurrió.',
        'Podemos recibir comisiones por compras realizadas mediante enlaces de afiliados. Esas relaciones no deben determinar nuestras conclusiones editoriales.',
      ],
    },
    affiliate: {
      title: 'Divulgación de afiliados | TheWorthScout', eyebrow: 'Transparencia', heading: 'Divulgación de afiliados',
      paragraphs: [
        'TheWorthScout puede participar en programas de afiliados. Si haces clic en un enlace de afiliado y realizas una compra válida, podemos recibir una comisión sin costo adicional para ti.',
        'Una relación comercial no garantiza una reseña positiva ni una recomendación. Nuestro objetivo es ofrecer información útil e investigada de forma independiente.',
        'Cuando una página incluya enlaces de afiliados, identificaremos claramente su naturaleza comercial cerca de las recomendaciones correspondientes.',
      ],
    },
    contact: {
      title: 'Contacto | TheWorthScout', eyebrow: 'Ponte en contacto', heading: 'Contacto', intro: '¿Tienes una corrección, una pregunta o comentarios sobre nuestras guías?',
      notice: 'Nuestro canal público de contacto está en preparación. Publicaremos una dirección verificada antes de aceptar propuestas comerciales o iniciar campañas publicitarias.',
    },
    editorial: {
      title: 'Política editorial | TheWorthScout', eyebrow: 'Nuestros criterios', heading: 'Política editorial',
      sections: [
        ['Investigación y fuentes', 'Buscamos utilizar documentación de productos, fuentes confiables e información verificable. Indicamos cuándo una guía se basa en investigación documental y no en pruebas directas.'],
        ['Exactitud y actualizaciones', 'Las funciones, los precios y la disponibilidad pueden cambiar. Los lectores deben verificar los detalles importantes con el proveedor antes de comprar. Corregimos los errores materiales cuando los identificamos.'],
        ['Independencia frente a afiliados', 'Algunos enlaces pueden generarnos una comisión. Evaluamos los productos por sus méritos y divulgamos claramente las relaciones comerciales.'],
        ['Reseñas y puntuaciones', 'No publicamos experiencias inventadas, pruebas fabricadas ni puntuaciones sin fundamento.'],
      ],
    },
    privacy: {
      title: 'Política de privacidad | TheWorthScout', eyebrow: 'Privacidad', heading: 'Política de privacidad', updated: 'Última actualización: 10 de octubre de 2026.',
      notice: 'Acción requerida por el propietario: este es un esquema inicial. Antes de activar analítica, píxeles publicitarios, formularios o seguimiento de afiliados, debe actualizarse para describir los servicios realmente utilizados y recibir una revisión legal adecuada.',
      sections: [
        ['Información y alojamiento', 'El proveedor de alojamiento puede procesar información técnica de las solicitudes, como direcciones IP y datos del navegador, para entregar y proteger el sitio.'],
        ['Cookies y servicios de terceros', 'Los futuros servicios de analítica y afiliación pueden utilizar cookies o tecnologías similares. Añadiremos los detalles antes de activar esos servicios.'],
        ['Contacto', 'Para consultas de privacidad, utiliza el método que se publicará en nuestra página de Contacto.'],
      ],
    },
    pets: {
      title: 'Guías para mascotas | TheWorthScout', description: 'Investigación independiente y guías prácticas para quienes viven con mascotas.', eyebrow: 'TheWorthScout / Mascotas',
      heading: 'Buenas decisiones para las mascotas que amas.', lead: 'Explora temas prácticos, enfoques de entrenamiento y las preguntas que conviene hacer antes de elegir un producto o programa.', research: 'Lo que estamos investigando',
      cards: [
        { symbol: '🐕', title: 'Entrenamiento de cachorros', text: 'Cómo evaluar métodos, cursos y expectativas realistas.', link: 'Ver plantilla de reseña →', href: '/es-us/pets/puppy-training/' },
        { symbol: '🦴', title: 'Artículos esenciales', text: 'Qué considerar al comparar productos cotidianos para mascotas.' },
        { symbol: '📖', title: 'Guías de compra', text: 'Las guías independientes están en desarrollo. Publicamos únicamente después de la investigación y revisión editorial.' },
      ],
    },
    review: {
      title: 'Reseñas de programas de entrenamiento para cachorros | TheWorthScout', description: 'Plantilla transparente para comparar programas de entrenamiento de cachorros en Estados Unidos.',
      breadcrumb: 'Entrenamiento de cachorros', eyebrow: 'Guía de entrenamiento', heading: 'Mejores programas de entrenamiento para cachorros: qué comparar antes de comprar',
      lead: 'Un marco práctico para comparar el método, el acceso al instructor, la estructura de las lecciones, el valor y la adecuación para tu cachorro.',
      disclosure: 'Divulgación comercial:', disclosureText: 'Algunas posiciones pueden ser patrocinadas y algunos enlaces pueden generarnos una comisión. El pago no garantiza una recomendación positiva. Todo patrocinio o enlace de afiliado debe identificarse claramente antes de publicar.',
      quick: 'Selecciones rápidas', comparison: 'Comparación de programas', reviews: 'Plantilla de reseña detallada', methodology: 'Cómo evaluamos los programas', guide: 'Cómo elegir un programa', faq: 'Preguntas frecuentes',
      placeholder: 'Sustituye todos los campos entre corchetes solamente después de investigar el programa y documentar cada afirmación.',
      criteria: [['25%', 'Método de entrenamiento'], ['20%', 'Plan de estudios'], ['20%', 'Instrucción y soporte'], ['15%', 'Facilidad de uso'], ['10%', 'Valor'], ['10%', 'Políticas']],
      checklist: 'Antes de publicar', checklistItems: ['Sustituye todos los campos entre corchetes.', 'Verifica precios, renovaciones, cancelaciones y reembolsos.', 'Documenta toda afirmación de desempeño.', 'Identifica contenido patrocinado y enlaces de afiliados.', 'Nunca publiques pruebas, testimonios o puntuaciones inventadas.'],
    },
  },
  'pt-br': {
    home: {
      title: 'TheWorthScout | Guias independentes e avaliações de produtos',
      description: 'Guias de compra e avaliações independentes para ajudar você a tomar decisões mais informadas.',
      eyebrow: 'Guias independentes e avaliações de produtos', headline: 'Pesquisa melhor.\nEscolhas mais seguras.',
      lead: 'Guias de compra cuidadosos e pesquisas claras sobre produtos para ajudar você a entender suas opções antes de gastar.',
      cta: 'Explorar guias para pets →', coverage: 'Explore nosso conteúdo', picks: 'Encontre sua próxima boa escolha.',
      cards: [
        { symbol: '🐾', title: 'Pets', text: 'Recursos de treinamento, itens essenciais e guias práticos para tutores.', link: 'Explorar Pets →', href: '/pt-br/pets/' },
        { symbol: '⌁', title: 'Tecnologia', text: 'Em breve. Softwares e ferramentas avaliados sob uma perspectiva prática.' },
        { symbol: '⌂', title: 'Casa', text: 'Em breve. Produtos úteis e comparações cuidadosas para o dia a dia.' },
      ],
      approach: 'Nossa abordagem', approachTitle: 'Informação clara, sem exageros.',
      approachText: 'Explicamos recursos, limitações e diferenças em linguagem simples. Separamos testes diretos de pesquisas baseadas em informações públicas e divulgamos relações de afiliados.',
      standardsLink: 'Leia nossos critérios editoriais →',
    },
    about: {
      title: 'Sobre | TheWorthScout', eyebrow: 'Sobre o TheWorthScout', heading: 'Pesquisa antes das recomendações.',
      paragraphs: [
        'O TheWorthScout é um projeto editorial independente que ajuda leitores a tomar decisões de compra mais informadas. Estamos começando com guias relacionados a pets e podemos expandir para outras categorias.',
        'Nosso objetivo é tornar as informações sobre produtos mais fáceis de entender, incluindo limitações e diferenças importantes. Não afirmamos ter realizado testes diretos quando isso não aconteceu.',
        'Podemos receber comissões por compras qualificadas feitas por links de afiliados. Essas relações não devem determinar nossas conclusões editoriais.',
      ],
    },
    affiliate: {
      title: 'Divulgação de afiliados | TheWorthScout', eyebrow: 'Transparência', heading: 'Divulgação de afiliados',
      paragraphs: [
        'O TheWorthScout pode participar de programas de afiliados. Se você clicar em um link de afiliado e fizer uma compra qualificada, podemos receber uma comissão sem custo adicional para você.',
        'Uma relação comercial não garante uma avaliação positiva nem uma recomendação. Nosso objetivo é oferecer informações úteis e pesquisadas de forma independente.',
        'Quando houver links de afiliados, identificaremos claramente sua natureza comercial perto das recomendações correspondentes.',
      ],
    },
    contact: {
      title: 'Contato | TheWorthScout', eyebrow: 'Fale conosco', heading: 'Contato', intro: 'Tem uma correção, pergunta ou comentário sobre nossos guias?',
      notice: 'Nosso canal público de contato está sendo preparado. Publicaremos um endereço verificado antes de aceitar propostas comerciais ou iniciar campanhas publicitárias.',
    },
    editorial: {
      title: 'Política editorial | TheWorthScout', eyebrow: 'Nossos critérios', heading: 'Política editorial',
      sections: [
        ['Pesquisa e fontes', 'Buscamos usar documentação de produtos, fontes confiáveis e informações verificáveis. Indicamos quando um guia se baseia em pesquisa documental, e não em testes diretos.'],
        ['Precisão e atualizações', 'Recursos, preços e disponibilidade podem mudar. Os leitores devem confirmar informações importantes com o fornecedor antes da compra. Corrigimos erros relevantes quando identificados.'],
        ['Independência editorial', 'Alguns links podem gerar comissão. Avaliamos os produtos por seus méritos e divulgamos claramente as relações comerciais.'],
        ['Avaliações e notas', 'Não publicamos experiências inventadas, testes fabricados ou notas sem fundamento.'],
      ],
    },
    privacy: {
      title: 'Política de privacidade | TheWorthScout', eyebrow: 'Privacidade', heading: 'Política de privacidade', updated: 'Última atualização: 10 de outubro de 2026.',
      notice: 'Ação necessária do proprietário: este é um modelo inicial. Antes de ativar análises, pixels de publicidade, formulários ou rastreamento de afiliados, ele deve ser atualizado para descrever os serviços realmente utilizados e passar por uma revisão jurídica adequada.',
      sections: [
        ['Informações e hospedagem', 'O provedor de hospedagem pode processar informações técnicas das solicitações, como endereços IP e dados do navegador, para entregar e proteger o site.'],
        ['Cookies e serviços de terceiros', 'Futuros serviços de análise e afiliados podem usar cookies ou tecnologias semelhantes. Adicionaremos os detalhes antes de ativar esses serviços.'],
        ['Contato', 'Para dúvidas sobre privacidade, utilize o método que será publicado em nossa página de Contato.'],
      ],
    },
    pets: {
      title: 'Guias para pets | TheWorthScout', description: 'Pesquisa independente e guias práticos para tutores de pets.', eyebrow: 'TheWorthScout / Pets',
      heading: 'Boas escolhas para os pets que você ama.', lead: 'Explore temas práticos, abordagens de treinamento e as perguntas que vale fazer antes de escolher um produto ou programa.', research: 'O que estamos pesquisando',
      cards: [
        { symbol: '🐕', title: 'Treinamento de filhotes', text: 'Como avaliar métodos, cursos e expectativas realistas.', link: 'Ver modelo de avaliação →', href: '/pt-br/pets/puppy-training/' },
        { symbol: '🦴', title: 'Itens essenciais', text: 'O que considerar ao comparar produtos cotidianos para pets.' },
        { symbol: '📖', title: 'Guias de compra', text: 'Os guias independentes estão em desenvolvimento. Publicamos somente após pesquisa e revisão editorial.' },
      ],
    },
    review: {
      title: 'Avaliações de programas de treinamento para filhotes | TheWorthScout', description: 'Modelo transparente para comparar programas de treinamento de filhotes nos Estados Unidos.',
      breadcrumb: 'Treinamento de filhotes', eyebrow: 'Guia de treinamento', heading: 'Melhores programas de treinamento para filhotes: o que comparar antes de comprar',
      lead: 'Uma estrutura prática para comparar método, acesso ao instrutor, organização das aulas, custo-benefício e adequação ao seu filhote.',
      disclosure: 'Divulgação comercial:', disclosureText: 'Algumas posições podem ser patrocinadas e alguns links podem gerar comissão. O pagamento não garante uma recomendação positiva. Todo patrocínio ou link de afiliado deve ser identificado claramente antes da publicação.',
      quick: 'Escolhas rápidas', comparison: 'Comparação de programas', reviews: 'Modelo de avaliação detalhada', methodology: 'Como avaliamos os programas', guide: 'Como escolher um programa', faq: 'Perguntas frequentes',
      placeholder: 'Substitua todos os campos entre colchetes somente depois de pesquisar o programa e documentar cada afirmação.',
      criteria: [['25%', 'Método de treinamento'], ['20%', 'Conteúdo do curso'], ['20%', 'Instrução e suporte'], ['15%', 'Facilidade de uso'], ['10%', 'Custo-benefício'], ['10%', 'Políticas']],
      checklist: 'Antes de publicar', checklistItems: ['Substitua todos os campos entre colchetes.', 'Verifique preços, renovações, cancelamentos e reembolsos.', 'Documente toda afirmação de desempenho.', 'Identifique conteúdo patrocinado e links de afiliados.', 'Nunca publique testes, depoimentos ou notas inventadas.'],
    },
  },
};

export const localizedRoutes = [
  { path: undefined, key: 'home' },
  { path: 'about', key: 'about' },
  { path: 'affiliate-disclosure', key: 'affiliate' },
  { path: 'contact', key: 'contact' },
  { path: 'editorial-policy', key: 'editorial' },
  { path: 'privacy-policy', key: 'privacy' },
  { path: 'pets', key: 'pets' },
  { path: 'pets/puppy-training', key: 'review' },
];
