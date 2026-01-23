// Internationalization content
// All translatable strings organized by section

export type Language = 'ru' | 'en';

// Define a more flexible type for i18n content
export interface I18nContent {
  nav: {
    skills: string;
    cases: string;
    contacts: string;
    emailMe: string;
  };
  hero: {
    greeting: string;
    bio: string;
    openCv: string;
    messageTelegram: string;
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
  cta: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
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
      skills: "Навыки",
      cases: "Кейсы",
      contacts: "Контакты",
      emailMe: "Написать на почту",
    },
    hero: {
      greeting: "Привет!",
      bio: "Я работаю с 2021 года. Делаю понятные интерфейсы для веба и мобильных приложений — от UX-логики до чистого UI и передачи в разработку.",
      openCv: "Открыть CV",
      messageTelegram: "Написать в Telegram",
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
      title: "Кейсы",
      viewCase: "Смотреть кейс",
    },
    cta: {
      title: "Есть проект?",
      subtitle: "Давай обсудим!",
      description: "Открыт для новых проектов и интересных задач",
      button: "Написать в Telegram",
    },
    contacts: {
      title: "Контакты",
      email: "Электронная почта",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      cv: "Скачать CV",
      location: "Локация",
    },
    casePage: {
      back: "← Назад",
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
      skills: "Skills",
      cases: "Cases",
      contacts: "Contacts",
      emailMe: "Email me",
    },
    hero: {
      greeting: "Hi!",
      bio: "I've been working since 2021. I design clear, user-friendly web and mobile interfaces — from UX logic to polished UI and developer handoff.",
      openCv: "Open CV",
      messageTelegram: "Message on Telegram",
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
      title: "Cases",
      viewCase: "View case",
    },
    cta: {
      title: "Have a project?",
      subtitle: "Let's talk!",
      description: "Open for new projects and interesting challenges",
      button: "Message on Telegram",
    },
    contacts: {
      title: "Contacts",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      cv: "Download CV",
      location: "Location",
    },
    casePage: {
      back: "← Back",
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
