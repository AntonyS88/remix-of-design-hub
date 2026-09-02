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
      role: "Product Designer · AI-продукты & SaaS",
      bio: "Проектирую цифровые продукты от ранней идеи до понятного работающего решения — соединяя продуктовое мышление, UX, UI-системы и разработку с помощью AI.",
      viewWork: "Смотреть проекты",
      resume: "Резюме",
      locationStatus: "Черногория · Открыт к удалённой работе",
    },
    capabilities: {
      title: "Что я делаю",
      items: [
        {
          title: "Продуктовое мышление",
          description: "Формулирование проблем, гипотезы, продуктовые сценарии и приоритизация.",
        },
        {
          title: "UX и взаимодействие",
          description: "Информационная архитектура, user flows, прототипы и сложные сценарии взаимодействия.",
        },
        {
          title: "UI и дизайн-системы",
          description: "Визуальные системы, компоненты, variables, адаптивные интерфейсы и передача в разработку.",
        },
        {
          title: "Создание продуктов с помощью AI",
          description: "Использование AI-инструментов и coding agents для быстрого перехода от дизайн-решений к работающему продукту.",
        },
      ],
    },
    howIWork: {
      title: "Как я работаю",
      steps: ["Проблема", "Исследование", "Гипотеза", "UX", "UI-система", "Прототип", "Реализация", "Проверка и итерации"],
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
      description: "Открыт к предложениям на позиции Product Designer и AI Product Designer.",
    },
    contacts: {
      title: "Контакты",
      email: "Электронная почта",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      cv: "Резюме",
      location: "Локация",
    },
    casePage: {
      back: "Назад",
      problem: "Проблема и цель",
      role: "Моя роль",
      process: "Процесс",
      solution: "Решение",
      uiDetails: "UI детали",
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
      role: "Product Designer · AI Products & SaaS",
      bio: "I design digital products from early ideas to clear, working experiences — combining product thinking, UX, UI systems and AI-assisted development.",
      viewWork: "View my work",
      resume: "Resume",
      locationStatus: "Montenegro · Open to remote",
    },
    capabilities: {
      title: "Capabilities",
      items: [
        {
          title: "Product Thinking",
          description: "Problem framing, hypotheses, product flows and prioritization.",
        },
        {
          title: "UX & Interaction",
          description: "Information architecture, user flows, prototypes and complex interaction scenarios.",
        },
        {
          title: "UI & Design Systems",
          description: "Visual systems, components, variables, responsive interfaces and developer handoff.",
        },
        {
          title: "AI-assisted Product Building",
          description: "Using AI tools and coding agents to move faster from design decisions to working products.",
        },
      ],
    },
    howIWork: {
      title: "How I work",
      steps: ["Problem", "Research", "Hypothesis", "UX", "UI System", "Prototype", "Build", "Test & Iterate"],
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
      description: "I'm open to Product Designer and AI Product Designer opportunities.",
    },
    contacts: {
      title: "Contacts",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      cv: "Resume",
      location: "Location",
    },
    casePage: {
      back: "Back",
      problem: "Problem & Goal",
      role: "My Role",
      process: "Process",
      solution: "Solution",
      uiDetails: "UI Details",
      outcome: "Outcome",
      tools: "Tools",
      contact: "Get in touch",
    },
    footer: {
      copyright: "© {year} Anton Sechin",
    },
  },
} as const satisfies Record<Language, I18nContent>;
