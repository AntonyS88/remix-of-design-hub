// Internationalization content
// All translatable strings organized by section

export type Language = 'ru' | 'en';

// Define a more flexible type for i18n content
export interface I18nContent {
  nav: {
    work: string;
    capabilities: string;
    resume: string;
    contact: string;
  };
  hero: {
    role: string;
    bio: string;
    viewWork: string;
    resume: string;
    locationStatus: string;
  };
  capabilities: {
    title: string;
    items: ReadonlyArray<{ title: string; description: string }>;
  };
  howIWork: {
    title: string;
    steps: ReadonlyArray<string>;
  };
  skills: {
    title: string;
    summary: string;
    items: Record<string, { title: string; description: string }>;
  };
  cases: {
    title: string;
    viewCase: string;
  };
  shots: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
  contact: {
    title: string;
    description: string;
  };
  contacts: {
    title: string;
    email: string;
    telegram: string;
    linkedin: string;
    dribbble: string;
    behance: string;
    cv: string;
    location: string;
  };
  casePage: {
    back: string;
    problem: string;
    role: string;
    process: string;
    solution: string;
    uiDetails: string;
    outcome: string;
    tools: string;
    contact: string;
  };
  footer: {
    copyright: string;
  };
}

export const i18n = {
  ru: {
    nav: {
      work: "Проекты",
      capabilities: "Навыки",
      resume: "Резюме",
      contact: "Контакты",
    },
    hero: {
      role: "Product Designer · AI Product Builder",
      bio: "Проектирую цифровые продукты от формулировки проблемы до UX, дизайн-системы и работающего прототипа. Использую AI-инструменты и coding agents, чтобы быстрее проверять решения и доводить их до реализации.",
      viewWork: "Смотреть проекты",
      resume: "Резюме",
      locationStatus: "Черногория · Открыт к удалённой работе",
    },
    capabilities: {
      title: "Что я делаю",
      items: [
        {
          title: "Продуктовое мышление",
          description: "Формулирую проблему, гипотезы и продуктовые сценарии, определяю приоритеты и границы MVP.",
        },
        {
          title: "UX и взаимодействие",
          description: "Проектирую информационную архитектуру, user flows, состояния и edge cases; упрощаю сложные сценарии до понятных действий.",
        },
        {
          title: "UI и дизайн-системы",
          description: "Создаю и внедряю дизайн-системы: компоненты, токены, переменные, адаптивные интерфейсы и правила для разработки.",
        },
        {
          title: "AI Product Building",
          description: "Использую AI и coding agents для прототипирования, реализации, QA и быстрых итераций — проверяю дизайн не только в макете, но и в работающем продукте.",
        },
      ],
    },
    howIWork: {
      title: "Как я работаю",
      steps: ["Проблема и контекст", "Гипотеза и сценарии", "Система и прототип", "Сборка, проверка, итерации"],
    },
    skills: {
      title: "Навыки",
      summary: "Веду проекты от UX-исследования до передачи в разработку. Работаю с вебом и мобильными приложениями.",
      items: {
        ux: {
          title: "UX",
          description: "User flows, IA, сценарии",
        },
        prototyping: {
          title: "Прототипы",
          description: "Интерактивные прототипы, Smart Animate",
        },
        ui: {
          title: "UI Design",
          description: "Чистый UI, иерархия, сетки",
        },
        uiKit: {
          title: "UI Kit",
          description: "Варианты, состояния, библиотеки",
        },
        guidelines: {
          title: "Guidelines",
          description: "iOS HIG, Material Design",
        },
        responsive: {
          title: "Responsive",
          description: "Mobile / Tablet / Desktop",
        },
        handoff: {
          title: "Handoff",
          description: "Спеки, состояния, ассеты",
        },
        tools: {
          title: "Инструменты",
          description: "Figma, Photoshop, Illustrator",
        },
        motion: {
          title: "Motion",
          description: "Микро-анимации, переходы",
        },
        product: {
          title: "Product",
          description: "Проблема → гипотезы → итерации",
        },
      },
    },
    cases: {
      title: "Избранные проекты",
      viewCase: "Смотреть кейс",
    },
    shots: {
      title: "Шоты",
      subtitle: "Визуальные эксперименты и UI-этюды",
    },
    cta: {
      title: "Есть проект?",
      subtitle: "Давай обсудим!",
      description: "Открыт для новых проектов и интересных задач",
      button: "Написать в Telegram",
    },
    contact: {
      title: "Давайте создавать полезные продукты.",
      description: "Открыт к позициям Product Designer в командах, создающих SaaS, AI и цифровые продукты. Особенно интересны 0→1 задачи, где можно пройти путь от проблемы до работающего решения.",
    },
    contacts: {
      title: "Контакты",
      email: "Электронная почта",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      dribbble: "Dribbble",
      behance: "Behance",
      cv: "Резюме",
      location: "Локация",
    },
    casePage: {
      back: "Назад",
      problem: "Проблема и цель",
      role: "Моя роль",
      process: "Процесс",
      solution: "Решение",
      uiDetails: "Интерфейсная система",
      outcome: "Результат",
      tools: "Инструменты",
      contact: "Связаться со мной",
    },
    footer: {
      copyright: "© {year} Anton Sechin",
    },
  },
  en: {
    nav: {
      work: "Work",
      capabilities: "Capabilities",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      role: "Product Designer · AI Product Builder",
      bio: "I design digital products from problem framing to UX, design systems, and working prototypes. I use AI tools and coding agents to test decisions faster and turn them into working products.",
      viewWork: "View my work",
      resume: "Resume",
      locationStatus: "Montenegro · Open to remote",
    },
    capabilities: {
      title: "Capabilities",
      items: [
        {
          title: "Product Thinking",
          description: "I frame problems, hypotheses and product flows, then define priorities and MVP scope.",
        },
        {
          title: "UX & Interaction",
          description: "I design information architecture, user flows, states and edge cases, turning complex journeys into clear actions.",
        },
        {
          title: "UI & Design Systems",
          description: "I design and implement systems with reusable components, tokens, variables, responsive behavior and clear rules for development.",
        },
        {
          title: "AI Product Building",
          description: "I use AI tools and coding agents for prototyping, implementation, QA and fast iteration — validating design decisions in working products.",
        },
      ],
    },
    howIWork: {
      title: "How I work",
      steps: ["Problem & Context", "Hypothesis & Flows", "System & Prototype", "Build, Test & Iterate"],
    },
    skills: {
      title: "Skills",
      summary: "I handle projects from UX research to developer handoff. Working with web and mobile applications.",
      items: {
        ux: {
          title: "UX",
          description: "User flows, IA, scenarios",
        },
        prototyping: {
          title: "Prototyping",
          description: "Interactive prototypes, Smart Animate",
        },
        ui: {
          title: "UI Design",
          description: "Clean UI, hierarchy, grids",
        },
        uiKit: {
          title: "UI Kit",
          description: "Variants, states, libraries",
        },
        guidelines: {
          title: "Guidelines",
          description: "iOS HIG, Material Design",
        },
        responsive: {
          title: "Responsive",
          description: "Mobile / Tablet / Desktop",
        },
        handoff: {
          title: "Handoff",
          description: "Specs, states, assets",
        },
        tools: {
          title: "Tools",
          description: "Figma, Photoshop, Illustrator",
        },
        motion: {
          title: "Motion",
          description: "Micro-animations, transitions",
        },
        product: {
          title: "Product",
          description: "Problem → hypotheses → iterations",
        },
      },
    },
    cases: {
      title: "Selected Work",
      viewCase: "View case",
    },
    shots: {
      title: "Shots",
      subtitle: "Visual experiments & UI studies",
    },
    cta: {
      title: "Have a project?",
      subtitle: "Let's talk!",
      description: "Open for new projects and interesting challenges",
      button: "Message on Telegram",
    },
    contact: {
      title: "Let's build something useful.",
      description: "I'm open to Product Designer roles in teams building SaaS, AI and digital products, especially 0→1 work that connects product problems with working solutions.",
    },
    contacts: {
      title: "Contacts",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      dribbble: "Dribbble",
      behance: "Behance",
      cv: "Resume",
      location: "Location",
    },
    casePage: {
      back: "Back",
      problem: "Problem & Goal",
      role: "My Role",
      process: "Process",
      solution: "Solution",
      uiDetails: "Interface System",
      outcome: "Outcome",
      tools: "Tools",
      contact: "Get in touch",
    },
    footer: {
      copyright: "© {year} Anton Sechin",
    },
  },
} as const satisfies Record<Language, I18nContent>;
