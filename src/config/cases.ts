// Case studies content
// Each case includes full content for the case page
// NOTE: Replace placeholder images with real case screenshots

import caseDashboard from '@/assets/case-operations-dashboard.jpg';
import remyProductSystem from '@/assets/remy-product-system.jpg';
import remyInboxDesktop from '@/assets/remy-inbox-desktop.png';
import remyInboxMobile from '@/assets/remy-inbox-mobile.png';
import remyOrganizeMobile from '@/assets/remy-organize-mobile.png';
import aiVideoHero from '@/assets/ai-video-hero.webp';
import aiVideoProblem from '@/assets/ai-video-problem.webp';
import aiVideoResearch from '@/assets/ai-video-research.webp';
import aiVideoSolution from '@/assets/ai-video-solution.webp';
import aiVideoAgenticFlow from '@/assets/ai-video-agentic-flow.webp';
import aiVideoDesign from '@/assets/ai-video-design.webp';
import aiVideoOutput from '@/assets/ai-video-output.webp';
import forexHero from '@/assets/forex-hero.webp';
import forexBrief from '@/assets/forex-brief.webp';
import forexJtbd from '@/assets/forex-jtbd.webp';
import forexFlow from '@/assets/forex-flow.webp';
import forexWireframes from '@/assets/forex-wireframes.webp';
import forexVisualSystem from '@/assets/forex-visual-system.webp';
import forexComponents from '@/assets/forex-components.webp';
import forexMainFlow from '@/assets/forex-main-flow.webp';
import forexTradeClose from '@/assets/forex-trade-close.webp';
import forexProfileMenu from '@/assets/forex-profile-menu.webp';
import forexHistory from '@/assets/forex-history.webp';
import forexLearningNews from '@/assets/forex-learning-news.webp';

export interface CaseStudy {
  slug: string;
  coverImage: string;
  coverAspect?: string;
  tags: string[];
  title: {
    ru: string;
    en: string;
  };
  summary: {
    ru: string;
    en: string;
  };
  /** Desktop bento placement on a 6-col grid */
  bento?: {
    colSpan: 1 | 2 | 3 | 4 | 5 | 6;
    rowSpan: 1 | 2;
    aspect?: string; // e.g. 'aspect-[16/10]', defaults to 'aspect-[16/10]'
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
  galleryCaptions?: string[];
  galleryLayout?: 'stack' | 'screens';
}

export const cases: CaseStudy[] = [
  {
    slug: "remy",
    coverImage: remyProductSystem,
    coverAspect: 'aspect-[3/2]',
    tags: ["Product Design", "AI", "Responsive"],
    bento: { colSpan: 4, rowSpan: 2, aspect: 'aspect-[3/2]' },
    title: {
      ru: "Remy — менеджер фокуса и задач",
      en: "Remy — Focus & Task Manager",
    },
    summary: {
      ru: "Персональный продукт, который превращает хаотичный список дел в ясный следующий шаг",
      en: "A personal product that turns a chaotic task list into one clear next step",
    },
    content: {
      ru: {
        hero: {
          title: "Remy — спокойная система фокуса и задач",
          role: "Product Designer & Product Builder",
          period: "2026 · в разработке",
          outcome: "Рабочая продуктовая основа для цикла: собрать → разобрать → сфокусироваться → завершить",
        },
        problem: "Обычные task-менеджеры быстро превращаются в бесконечный backlog. Пользователю приходится одновременно помнить дела, расставлять приоритеты и решать, за что взяться сейчас. Это увеличивает когнитивную нагрузку и создаёт чувство вины вместо ощущения прогресса.",
        role: "Я формирую продуктовую модель Remy, информационную архитектуру и UX/UI, проектирую адаптивную компонентную систему и проверяю решения прямо в работающем продукте. Проект развиваю самостоятельно: от гипотезы и прототипа до реализации и технической валидации.",
        process: [
          "Сформулировал основную задачу продукта: снизить перегрузку и помочь начать действие",
          "Собрал core loop Capture → Inbox → Organize → Focus → Do → Complete → Review",
          "Разделил быстрый сбор мыслей и осознанный выбор задач на экраны Inbox и Focus",
          "Спроектировал поля, приоритеты, следующий шаг, сроки и ограниченный список фокуса",
          "Собрал responsive UI для desktop и mobile с общими компонентами и состояниями",
          "Проверил ready, empty, loading, success, error и disabled states в локальном прототипе",
        ],
        solution: "Remy строится вокруг двух простых режимов. Inbox принимает всё, что пришло в голову, и помогает превратить запись в понятную задачу: уточнить контекст, проект, срок, длительность и следующий шаг. Focus оставляет перед пользователем одну текущую задачу и короткую реалистичную очередь, чтобы не конкурировать за внимание.",
        uiDetails: "Интерфейс использует спокойную тёмную основу, синий action-color и компактную иерархию без декоративного шума. Одинаковые паттерны работают на desktop и mobile: быстрый Capture, task row, приоритет, Organize, Add to Focus, Complete и обратная связь с возможностью Undo.",
        outcome: "Собран и проверен рабочий core flow управления задачами. Реализована персональная персистентность задач и валидация основных CRUD-сценариев в development-среде. Remy остаётся активным собственным продуктом: production authentication и дальнейшие продуктовые итерации ещё в работе.",
        tools: ["React", "TypeScript", "Tailwind CSS", "tRPC"],
        gallery: [
          remyInboxDesktop,
          remyInboxMobile,
          remyOrganizeMobile,
        ],
        galleryCaptions: [
          "Desktop Inbox: быстрый Capture, очередь задач и раскрытый режим Organize в одном рабочем контексте.",
          "Mobile Inbox сохраняет ту же иерархию и выносит главное действие Capture в нижнюю навигацию.",
          "Раскрытая задача на mobile: контекст, срок, длительность и следующий шаг редактируются без отдельного экрана.",
        ],
        galleryLayout: 'screens',
      },
      en: {
        hero: {
          title: "Remy — a calm focus and task system",
          role: "Product Designer & Product Builder",
          period: "2026 · in progress",
          outcome: "A working product foundation for capture → organize → focus → complete",
        },
        problem: "Traditional task managers quickly become endless backlogs. People have to remember tasks, prioritize them, and decide what to do next at the same time. The result is more cognitive load and guilt instead of visible progress.",
        role: "I shape Remy's product model, information architecture, and UX/UI, build the responsive component system, and validate decisions inside the working product. I am developing it independently from hypothesis and prototype through implementation and technical validation.",
        process: [
          "Defined the core product job: reduce overload and help people start",
          "Mapped the Capture → Inbox → Organize → Focus → Do → Complete → Review loop",
          "Separated frictionless capture from deliberate task selection across Inbox and Focus",
          "Designed task context, priority, next action, due date, duration, and a limited Focus list",
          "Built a responsive desktop and mobile UI from shared components",
          "Validated ready, empty, loading, success, error, and disabled states in a local prototype",
        ],
        solution: "Remy is built around two simple modes. Inbox captures anything and helps turn it into an actionable task by clarifying context, project, due date, duration, and the next step. Focus presents one current task and a short realistic queue, so priorities do not compete for attention.",
        uiDetails: "The interface uses a calm dark foundation, a blue action color, and a compact hierarchy without decorative noise. The same patterns work on desktop and mobile: quick Capture, task rows, priority, Organize, Add to Focus, Complete, and undoable feedback.",
        outcome: "The core task-management flow is implemented and validated. Per-user task persistence and the main CRUD scenarios work in the development environment. Remy remains an active independent product: production authentication and further product iterations are still in progress.",
        tools: ["React", "TypeScript", "Tailwind CSS", "tRPC"],
        gallery: [
          remyInboxDesktop,
          remyInboxMobile,
          remyOrganizeMobile,
        ],
        galleryCaptions: [
          "Desktop Inbox combines quick Capture, the task queue, and an expanded Organize state in one working context.",
          "Mobile Inbox keeps the same hierarchy and places the primary Capture action in the bottom navigation.",
          "Expanded mobile task: context, due date, duration, and the next step are editable without a separate page.",
        ],
        galleryLayout: 'screens',
      },
    },
  },
  {
    slug: "operations-dashboard",
    coverImage: caseDashboard,
    tags: ["Dashboard", "Monitoring", "B2B"],
    bento: { colSpan: 2, rowSpan: 1, aspect: 'aspect-[4/3]' },
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
    coverImage: aiVideoHero,
    tags: ["Product Design", "Mobile", "AI"],
    bento: { colSpan: 2, rowSpan: 1, aspect: 'aspect-[4/3]' },
    title: {
      ru: "AI-видеоредактор",
      en: "AI Video Editor",
    },
    summary: {
      ru: "Agentic UX-концепт: AI сам собирает ролик, пользователь только подтверждает",
      en: "Agentic UX concept: AI assembles the video, the user simply approves",
    },
    content: {
      ru: {
        hero: {
          title: "Мобильный видеоредактор — агентный UX",
          role: "Product Designer",
          period: "2026",
          outcome: "Концепт мобильного видеоредактора, который превращает монтаж в короткий сценарий подтверждения",
        },
        problem: "Обычные видеоредакторы перекладывают на пользователя импорт, выбор стиля, музыки и монтаж. Даже короткий ролик требует времени, навыков и множества решений.",
        role: "Сформулировал продуктовую гипотезу, исследовал AI-first паттерны, спроектировал agentic flow и ключевые мобильные экраны.",
        process: [
          "Разбор проблем традиционного монтажа",
          "Исследование AI-first и voice-first сценариев",
          "Гипотеза проактивного агента",
          "Проектирование потока open → approve → share",
          "UI-концепт ключевых состояний",
          "Проверка ясности и когнитивной нагрузки",
        ],
        solution: "Агент заранее анализирует галерею, выбирает лучшие кадры, предлагает готовый вариант и ждёт одного подтверждения. Пользователь может уточнить результат голосом и сразу поделиться роликом.",
        uiDetails: "Тёмный mobile UI с одним фиолетовым акцентом, крупными CTA и сфокусированными состояниями агента. Интерфейс оставляет пользователю контроль без сложного таймлайна.",
        outcome: "Сценарий сокращён до трёх действий: открыть, подтвердить и поделиться — без лишних решений и ручной сборки ролика.",
        tools: ["Figma", "FigJam", "AI prototyping", "iOS HIG"],
        gallery: [
          aiVideoProblem,
          aiVideoResearch,
          aiVideoSolution,
          aiVideoAgenticFlow,
          aiVideoDesign,
          aiVideoOutput,
        ],
        galleryCaptions: [
          "Традиционный монтаж требует слишком много решений.",
          "Исследование подтвердило потенциал проактивного AI-сценария.",
          "Агент берёт инициативу, пользователь подтверждает результат.",
          "Пять шагов от анализа галереи до публикации.",
          "Voice-first интерфейс помогает быстро уточнить выбор.",
          "AI выбирает лучшие кадры, собирает ролик и готовит его к публикации.",
        ],
      },
      en: {
        hero: {
          title: "Mobile Video Editor — Agentic UX",
          role: "Product Designer",
          period: "2026",
          outcome: "A mobile video editor concept that turns editing into a short approval flow",
        },
        problem: "Traditional video editors make users import clips, choose a style and music, and assemble the edit. Even a short reel demands time, skill, and too many decisions.",
        role: "Defined the product hypothesis, researched AI-first patterns, designed the agentic flow, and created the key mobile screens.",
        process: [
          "Mapped the friction in traditional editing",
          "Researched AI-first and voice-first patterns",
          "Formed the proactive-agent hypothesis",
          "Designed the open → approve → share flow",
          "Created the key interface states",
          "Checked clarity and cognitive load",
        ],
        solution: "The agent analyzes the gallery in advance, selects the best shots, suggests a ready-made edit, and waits for one approval. The user can refine it by voice and share immediately.",
        uiDetails: "A dark mobile UI with one purple accent, clear CTAs, and focused agent states. The experience preserves user control without exposing a complex timeline.",
        outcome: "The journey is reduced to three actions: open, approve, and share — with no unnecessary decisions or manual assembly.",
        tools: ["Figma", "FigJam", "AI prototyping", "iOS HIG"],
        gallery: [
          aiVideoProblem,
          aiVideoResearch,
          aiVideoSolution,
          aiVideoAgenticFlow,
          aiVideoDesign,
          aiVideoOutput,
        ],
        galleryCaptions: [
          "Traditional editing asks users to make too many decisions.",
          "Research revealed an opportunity for a proactive AI flow.",
          "The agent takes initiative; the user approves the result.",
          "Five steps take the experience from analysis to publishing.",
          "A voice-first interface makes refinement fast and direct.",
          "AI selects the best shots, assembles the reel, and prepares it to share.",
        ],
      },
    },
  },
  {
    slug: "forex-trading-simulator",
    coverImage: forexHero,
    coverAspect: 'aspect-[800/527]',
    tags: ["Product Design", "Mobile", "Fintech"],
    bento: { colSpan: 2, rowSpan: 1, aspect: 'aspect-[4/3]' },
    title: {
      ru: "Forex-симулятор",
      en: "Forex Trading Simulator",
    },
    summary: {
      ru: "Редизайн мобильного симулятора для понятной и безопасной практики трейдинга",
      en: "A mobile simulator redesign for clear, risk-free trading practice",
    },
    content: {
      ru: {
        hero: {
          title: "Симулятор Forex-трейдинга",
          role: "Product Designer",
          period: "2024",
          outcome: "Редизайн мобильного приложения для практики трейдинга без риска реальных денег",
        },
        problem: "Симулятор сохранял ключевые торговые функции, но перегруженный интерфейс усложнял навигацию, настройку сделки и чтение графика. Обучение, новости и история операций воспринимались как разрозненные части продукта.",
        role: "Провёл UX-аудит, сформулировал JTBD, пересобрал архитектуру и основные сценарии, подготовил wireframes, визуальную систему и интерактивный прототип.",
        process: [
          "Аудит текущего интерфейса и функций",
          "Формулировка JTBD и пользовательских задач",
          "Пересборка архитектуры продукта",
          "Wireframes ключевых экранов",
          "Дизайн-система и UI-компоненты",
          "Прототипирование торгового сценария",
        ],
        solution: "Основной сценарий построен вокруг графика и быстрых Buy/Sell-действий. Настройки сделки вынесены в понятный bottom sheet, цели прибыли и закрытие позиции собраны в последовательный поток, а история, обучение и новости получили отдельные ясные разделы.",
        uiDetails: "Тёмная mobile-система использует голубой как основной акцент, зелёный и красный — только для торговых состояний. Повторяемые карточки, элементы графика, навигация и контролы помогают поддерживать визуальную последовательность.",
        outcome: "Сценарий торговли стал последовательнее: пользователь быстрее понимает состояние рынка, настраивает сделку, контролирует результат и может перейти к обучению без риска реальных средств.",
        tools: ["Figma", "FigJam", "Prototyping", "iOS HIG"],
        gallery: [
          forexBrief,
          forexJtbd,
          forexFlow,
          forexWireframes,
          forexVisualSystem,
          forexComponents,
          forexMainFlow,
          forexTradeClose,
          forexProfileMenu,
          forexHistory,
          forexLearningNews,
        ],
        galleryCaptions: [
          "Задача редизайна и принятые продуктовые решения.",
          "JTBD связывает цели пользователей с безопасной практикой.",
          "Архитектура объединяет торговлю, историю, обучение и новости.",
          "Wireframes фиксируют структуру до визуального слоя.",
          "Единая типографика, цвета и набор иконок.",
          "Переиспользуемые карточки, контролы и состояния сделки.",
          "Основной путь: выбрать актив, настроить и открыть сделку.",
          "Цели прибыли и закрытие позиции в одном сценарии.",
          "Меню и профиль дают быстрый доступ к данным пользователя.",
          "История показывает результат и детали каждой операции.",
          "Обучение и новости поддерживают практику внутри продукта.",
        ],
      },
      en: {
        hero: {
          title: "Forex Trading Simulator",
          role: "Product Designer",
          period: "2024",
          outcome: "A mobile app redesign for practicing trading without risking real money",
        },
        problem: "The simulator preserved its core trading features, but a crowded interface made navigation, trade setup, and chart reading difficult. Learning, news, and transaction history felt like disconnected parts of the product.",
        role: "Audited the experience, defined the JTBD, rebuilt the information architecture and core journeys, then created wireframes, a visual system, and an interactive prototype.",
        process: [
          "Audited the existing interface and features",
          "Defined the JTBD and user needs",
          "Rebuilt the product architecture",
          "Created wireframes for key screens",
          "Designed the UI system and components",
          "Prototyped the core trading journey",
        ],
        solution: "The main journey is centered on the chart and quick Buy/Sell actions. Trade settings move into a clear bottom sheet, profit targets and position closing form one continuous flow, and history, learning, and news have distinct, focused destinations.",
        uiDetails: "The dark mobile system uses cyan as its primary accent, with green and red reserved for trading states. Reusable cards, chart elements, navigation, and controls keep the product visually consistent.",
        outcome: "The trading journey is more coherent: users can read the market state, configure a trade, review the result, and move into learning without risking real funds.",
        tools: ["Figma", "FigJam", "Prototyping", "iOS HIG"],
        gallery: [
          forexBrief,
          forexJtbd,
          forexFlow,
          forexWireframes,
          forexVisualSystem,
          forexComponents,
          forexMainFlow,
          forexTradeClose,
          forexProfileMenu,
          forexHistory,
          forexLearningNews,
        ],
        galleryCaptions: [
          "The redesign brief and the resulting product decisions.",
          "JTBD connects user goals with safe trading practice.",
          "The architecture unifies trading, history, learning, and news.",
          "Wireframes establish the structure before visual design.",
          "A consistent type, color, and icon system.",
          "Reusable cards, controls, and trade states.",
          "Core flow: select an asset, configure, and open a trade.",
          "Profit targets and position closing in one journey.",
          "Menu and profile provide quick access to user data.",
          "History reveals the result and details of every trade.",
          "Learning and news support practice inside the product.",
        ],
      },
    },
  },
];

export const getCaseBySlug = (slug: string): CaseStudy | undefined => {
  return cases.find(c => c.slug === slug);
};
