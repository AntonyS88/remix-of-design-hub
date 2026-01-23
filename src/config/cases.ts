// Case studies content
// Each case includes full content for the case page
// NOTE: Replace placeholder images with real case screenshots

import caseAI from '@/assets/case-ai-assistants.jpg';
import caseDashboard from '@/assets/case-operations-dashboard.jpg';
import caseMobile from '@/assets/case-mobile-app.jpg';

export interface CaseStudy {
  slug: string;
  coverImage: string;
  tags: string[];
  title: {
    ru: string;
    en: string;
  };
  summary: {
    ru: string;
    en: string;
  };
  content: {
    ru: CaseContent;
    en: CaseContent;
  };
}

export interface CaseContent {
  hero: {
    title: string;
    role: string;
    period: string;
    outcome: string;
  };
  problem: string;
  role: string;
  process: string[];
  solution: string;
  uiDetails: string;
  outcome: string;
  tools: string[];
  gallery: string[]; // Image paths - replace with real screenshots
}

export const cases: CaseStudy[] = [
  {
    slug: "ai-assistants",
    coverImage: caseAI,
    tags: ["Chat UI", "Landing", "Web"],
    title: {
      ru: "AI Assistants",
      en: "AI Assistants",
    },
    summary: {
      ru: "Чат-интерфейс и лендинг для AI-платформы с фокусом на UX диалогов",
      en: "Chat interface and landing page for AI platform with focus on dialogue UX",
    },
    content: {
      ru: {
        hero: {
          title: "AI Assistants — Chat UI + Landing",
          role: "Product Designer",
          period: "2024",
          outcome: "Создан удобный интерфейс чата и конверсионный лендинг",
        },
        problem: "Пользователям сложно взаимодействовать с AI-ассистентами — интерфейсы перегружены, а результаты диалогов теряются. Нужен чистый, понятный чат-интерфейс и лендинг, объясняющий ценность продукта.",
        role: "Провёл UX-исследование, спроектировал user flows для чата, создал UI kit с компонентами сообщений и разработал лендинг с фокусом на конверсию.",
        process: [
          "Анализ конкурентов и интервью с пользователями",
          "User flows и информационная архитектура",
          "Wireframes ключевых экранов",
          "UI дизайн с библиотекой компонентов",
          "Интерактивный прототип в Figma",
          "Подготовка спецификаций для разработки",
        ],
        solution: "Минималистичный чат с историей диалогов, быстрыми командами и умной подсветкой кода. Лендинг с чёткой структурой: hero, features, pricing, CTA.",
        uiDetails: "Адаптивный UI kit: типографика, цветовые токены, компоненты сообщений (user/assistant/system), карточки, кнопки. Тёмная и светлая темы.",
        outcome: "Интерфейс готов к разработке. Лендинг покрывает все сценарии воронки. Документация передана команде разработки.",
        tools: ["Figma", "FigJam", "Photoshop"],
        gallery: [
          caseAI, // Replace with actual screenshots
          caseAI,
          caseAI,
        ],
      },
      en: {
        hero: {
          title: "AI Assistants — Chat UI + Landing",
          role: "Product Designer",
          period: "2024",
          outcome: "Created intuitive chat interface and conversion-focused landing",
        },
        problem: "Users struggle to interact with AI assistants — interfaces are overloaded and dialogue results get lost. Need a clean, intuitive chat interface and landing page explaining product value.",
        role: "Conducted UX research, designed user flows for chat, created UI kit with message components, and developed conversion-focused landing page.",
        process: [
          "Competitor analysis and user interviews",
          "User flows and information architecture",
          "Wireframes of key screens",
          "UI design with component library",
          "Interactive prototype in Figma",
          "Developer handoff specifications",
        ],
        solution: "Minimalist chat with dialogue history, quick commands, and smart code highlighting. Landing with clear structure: hero, features, pricing, CTA.",
        uiDetails: "Adaptive UI kit: typography, color tokens, message components (user/assistant/system), cards, buttons. Dark and light themes.",
        outcome: "Interface ready for development. Landing covers all funnel scenarios. Documentation handed off to dev team.",
        tools: ["Figma", "FigJam", "Photoshop"],
        gallery: [
          caseAI,
          caseAI,
          caseAI,
        ],
      },
    },
  },
  {
    slug: "operations-dashboard",
    coverImage: caseDashboard,
    tags: ["Dashboard", "Monitoring", "B2B"],
    title: {
      ru: "Operations Dashboard",
      en: "Operations Dashboard",
    },
    summary: {
      ru: "Дашборд для мониторинга инцидентов и операций в реальном времени",
      en: "Dashboard for real-time incident monitoring and operations management",
    },
    content: {
      ru: {
        hero: {
          title: "Operations Dashboard — Incidents & Monitoring",
          role: "Product Designer",
          period: "2024",
          outcome: "Спроектирован комплексный дашборд для операционной команды",
        },
        problem: "Операционная команда тратит много времени на переключение между разными инструментами для мониторинга. Нужен единый дашборд с real-time данными и удобным управлением инцидентами.",
        role: "Провёл анализ рабочих процессов команды, спроектировал информационную архитектуру, создал компоненты для визуализации данных и таблиц инцидентов.",
        process: [
          "Интервью с операторами и анализ workflow",
          "Определение ключевых метрик и KPI",
          "Проектирование layout и навигации",
          "Дизайн графиков и таблиц",
          "Состояния: loading, empty, error",
          "Адаптация под разные разрешения",
        ],
        solution: "Дашборд с модульной структурой: виджеты метрик, лента инцидентов, фильтры и поиск. Приоритизация по критичности, быстрые действия.",
        uiDetails: "Компоненты: карточки метрик, графики (line, bar, pie), таблицы с сортировкой, статус-бейджи, модальные окна. Сетка 12 колонок.",
        outcome: "Дизайн покрывает все сценарии работы команды. Уменьшено количество кликов для ключевых действий.",
        tools: ["Figma", "FigJam", "Illustrator"],
        gallery: [
          caseDashboard,
          caseDashboard,
          caseDashboard,
        ],
      },
      en: {
        hero: {
          title: "Operations Dashboard — Incidents & Monitoring",
          role: "Product Designer",
          period: "2024",
          outcome: "Designed comprehensive dashboard for operations team",
        },
        problem: "Operations team spends too much time switching between different monitoring tools. Need a unified dashboard with real-time data and convenient incident management.",
        role: "Analyzed team workflows, designed information architecture, created components for data visualization and incident tables.",
        process: [
          "Operator interviews and workflow analysis",
          "Key metrics and KPI identification",
          "Layout and navigation design",
          "Charts and tables design",
          "States: loading, empty, error",
          "Responsive adaptation",
        ],
        solution: "Dashboard with modular structure: metric widgets, incident feed, filters and search. Priority by severity, quick actions.",
        uiDetails: "Components: metric cards, charts (line, bar, pie), sortable tables, status badges, modals. 12-column grid.",
        outcome: "Design covers all team workflow scenarios. Reduced click count for key actions.",
        tools: ["Figma", "FigJam", "Illustrator"],
        gallery: [
          caseDashboard,
          caseDashboard,
          caseDashboard,
        ],
      },
    },
  },
  {
    slug: "mobile-app-concept",
    coverImage: caseMobile,
    tags: ["Mobile", "iOS", "UI Kit"],
    title: {
      ru: "Mobile App Concept",
      en: "Mobile App Concept",
    },
    summary: {
      ru: "Концепт мобильного приложения с онбордингом, профилем и UI Kit",
      en: "Mobile app concept with onboarding, profile, and UI Kit",
    },
    content: {
      ru: {
        hero: {
          title: "Mobile App Concept — Onboarding, Profile, UI Kit",
          role: "Product Designer",
          period: "2024–2025",
          outcome: "Создан полный UI Kit и ключевые экраны приложения",
        },
        problem: "Нужно спроектировать мобильное приложение с нуля: продумать онбординг, профиль пользователя и создать масштабируемый UI Kit для дальнейшей разработки.",
        role: "Разработал концепцию приложения, спроектировал онбординг flow, экраны профиля и библиотеку компонентов с соблюдением iOS HIG.",
        process: [
          "Исследование целевой аудитории",
          "User journey mapping",
          "Проектирование онбординга (3–4 шага)",
          "Дизайн профиля и настроек",
          "Создание UI Kit с токенами",
          "Прототипирование переходов",
        ],
        solution: "Онбординг с прогрессом и skip-опцией. Профиль с аватаром, статистикой и быстрыми действиями. UI Kit с 50+ компонентами.",
        uiDetails: "Компоненты: кнопки, инпуты, карточки, навигация, модалки. Токены: цвета, типографика, spacing. Auto Layout для адаптивности.",
        outcome: "Готовая дизайн-система для команды. Документация компонентов. Прототип для пользовательского тестирования.",
        tools: ["Figma", "Photoshop", "iOS HIG"],
        gallery: [
          caseMobile,
          caseMobile,
          caseMobile,
        ],
      },
      en: {
        hero: {
          title: "Mobile App Concept — Onboarding, Profile, UI Kit",
          role: "Product Designer",
          period: "2024–2025",
          outcome: "Created complete UI Kit and key app screens",
        },
        problem: "Need to design mobile app from scratch: plan onboarding, user profile, and create scalable UI Kit for further development.",
        role: "Developed app concept, designed onboarding flow, profile screens, and component library following iOS HIG.",
        process: [
          "Target audience research",
          "User journey mapping",
          "Onboarding design (3–4 steps)",
          "Profile and settings design",
          "UI Kit creation with tokens",
          "Transition prototyping",
        ],
        solution: "Onboarding with progress and skip option. Profile with avatar, stats, and quick actions. UI Kit with 50+ components.",
        uiDetails: "Components: buttons, inputs, cards, navigation, modals. Tokens: colors, typography, spacing. Auto Layout for adaptivity.",
        outcome: "Ready design system for the team. Component documentation. Prototype for user testing.",
        tools: ["Figma", "Photoshop", "iOS HIG"],
        gallery: [
          caseMobile,
          caseMobile,
          caseMobile,
        ],
      },
    },
  },
];

export const getCaseBySlug = (slug: string): CaseStudy | undefined => {
  return cases.find(c => c.slug === slug);
};
