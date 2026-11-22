// Case studies content
// Each case includes full content for the case page
// NOTE: Replace placeholder images with real case screenshots

import caseDashboard from '@/assets/case-operations-dashboard.jpg';
import { workEnglishCopy } from '@/config/workenglish-copy';
import workEnglishCover from '@/assets/workenglish-cover.webp';
import workEnglishExplore from '@/assets/workenglish-explore.webp';
import workEnglishReader from '@/assets/workenglish-reader-desktop.webp';
import workEnglishListening from '@/assets/workenglish-listening.webp';
import workEnglishFeedback from '@/assets/workenglish-feedback.webp';
import workEnglishPracticeMobile from '@/assets/workenglish-practice-mobile.webp';
import remyFocusDesktop from '@/assets/remy-focus-desktop.webp';
import remyInboxDesktop from '@/assets/remy-inbox-desktop.webp';
import remyFocusMobile from '@/assets/remy-focus-mobile.webp';
import remyTaskMobile from '@/assets/remy-task-mobile.webp';
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
  projectUrl?: string;
  projectCta?: { ru: string; en: string };
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
  outcomeDetails?: { title: string; description: string }[];
  tools: string[];
  gallery: string[]; // Image paths - replace with real screenshots
  galleryCaptions?: string[];
  galleryLayout?: 'stack' | 'screens';
}

export const cases: CaseStudy[] = [
  {
    slug: 'workenglish',
    coverImage: workEnglishCover,
    coverAspect: 'aspect-[1607/730]',
    tags: ['Product Design', 'EdTech', 'Responsive'],
    projectUrl: 'https://workenglish.workenglish.workers.dev/',
    projectCta: { ru: 'Открыть WorkEnglish', en: 'Open WorkEnglish' },
    title: { ru: 'WorkEnglish — английский для работы', en: 'WorkEnglish — English for work' },
    summary: { ru: workEnglishCopy.ru.summary, en: workEnglishCopy.en.summary },
    content: {
      ru: {
        hero: { title: workEnglishCopy.ru.title, role: 'Product Designer', period: '2026 · в разработке', outcome: 'Публичная beta для короткой практики рабочего английского: Sprint-задания, обратная связь, аудирование и Explore.' },
        problem: workEnglishCopy.ru.problem,
        role: workEnglishCopy.ru.role,
        process: [...workEnglishCopy.ru.process],
        solution: workEnglishCopy.ru.solution,
        uiDetails: 'Адаптивный интерфейс делает короткую практику доступной на компьютере и телефоне. Общие компоненты, понятная иерархия и последовательные действия помогают сосредоточиться на задании.',
        outcome: workEnglishCopy.ru.outcome,
        outcomeDetails: [
          { title: 'Работает сейчас', description: 'Today, Sprint, задания с обратной связью, аудирование и Explore. Учебный прогресс хранится локально в браузере.' },
          { title: 'Следующие итерации', description: 'Дальнейшее развитие повторения и персонализации; синхронизация между устройствами, AI-обратная связь и разговорная практика остаются планами.' },
        ],
        tools: ['Product Design', 'UX', 'Design System', 'AI coding agents'],
        gallery: [workEnglishListening, workEnglishFeedback, workEnglishPracticeMobile, workEnglishExplore, workEnglishReader],
        galleryCaptions: ['Аудирование связывает распознавание рабочей фразы с выбором ответа и управлением скоростью.', 'Обратная связь сразу показывает ответ, перевод и возможность прослушать пример.', 'Мобильный Sprint удерживает одну задачу и выбранный ответ в фокусе.', 'Explore помогает выбрать материал по интересующей теме и уровню.', 'Чтение объединяет профессиональный контекст, перевод и прослушивание.'],
        galleryLayout: 'screens',
      },
      en: {
        hero: { title: workEnglishCopy.en.title, role: 'Product Designer', period: '2026 · in progress', outcome: 'A public beta for focused workplace English practice with Sprint exercises, feedback, listening and Explore.' },
        problem: workEnglishCopy.en.problem,
        role: workEnglishCopy.en.role,
        process: [...workEnglishCopy.en.process],
        solution: workEnglishCopy.en.solution,
        uiDetails: 'A responsive interface makes short practice sessions accessible on desktop and mobile. Shared components, clear hierarchy and sequential actions keep attention on the task.',
        outcome: workEnglishCopy.en.outcome,
        outcomeDetails: [
          { title: 'Currently working', description: 'Today, Sprint, feedback exercises, listening and Explore are live. Learning progress is stored locally in the browser.' },
          { title: 'Next product iterations', description: 'Further improvements to review and personalisation; cross-device sync, AI feedback and speaking practice remain planned.' },
        ],
        tools: ['Product Design', 'UX', 'Design System', 'AI coding agents'],
        gallery: [workEnglishListening, workEnglishFeedback, workEnglishPracticeMobile, workEnglishExplore, workEnglishReader],
        galleryCaptions: ['Listening combines recognition of a work phrase with answer choices and playback speed controls.', 'Feedback makes the answer, translation and audio example immediately available.', 'The mobile Sprint keeps one task and the selected answer in focus.', 'Explore helps learners choose material by topic and level.', 'Reading brings work-related content, translations and listening together.'],
        galleryLayout: 'screens',
      },
    },
  },
  {
    slug: "remy",
    coverImage: remyFocusDesktop,
    coverAspect: 'aspect-[3/2]',
    tags: ["Product Design", "Productivity", "Responsive"],
    projectUrl: "https://remy-focus-task-app.onrender.com/",
    projectCta: { ru: "Открыть Remy", en: "Open Remy" },
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
          role: "Product Designer",
          period: "2026 · в разработке",
          outcome: "Рабочий адаптивный прототип ключевого цикла: Capture → Organize → Focus → Complete",
        },
        problem: "Обычные task-менеджеры легко превращаются в длинный backlog: пользователь одновременно должен помнить дела, расставлять приоритеты и каждый раз решать, что делать дальше. Проблема Remy — не хранение задач само по себе, а снижение когнитивной нагрузки между «записал» и «начал делать».",
        role: "Развиваю Remy как собственный продукт: формулирую проблему и продуктовую модель, проектирую информационную архитектуру, UX/UI и дизайн-систему, а с помощью AI coding agents довожу решения до рабочего прототипа и проверяю их в продукте.",
        process: [
          "Сформулировал основную задачу продукта: уменьшить перегрузку между фиксацией задачи и началом действия",
          "Собрал core loop Capture → Organize → Focus → Do → Complete → Review",
          "Оставил в быстром Capture только название, а детали раскрыл постепенно через Organize",
          "Ограничил Focus тремя задачами и выделил одну текущую задачу с одним главным действием",
          "Спроектировал AI-подсказки для следующего шага и декомпозиции: Remy предлагает, пользователь подтверждает",
          "Собрал адаптивную компонентную систему для desktop и mobile и проверяю ключевые состояния в рабочем прототипе",
        ],
        solution: "Remy превращает длинный список дел в спокойный управляемый поток. Capture быстро сохраняет мысль, Inbox помогает добавить структуру только при необходимости, а Focus намеренно ограничивает день тремя задачами. В режиме выполнения остаются одна текущая задача, понятный следующий шаг и необязательный таймер; Review завершает цикл без давления и чувства вины.",
        uiDetails: "Интерфейс использует нейтральную палитру и один синий акцент. В каждом контексте выделено одно главное действие, второстепенные настройки раскрываются постепенно, а desktop и mobile сохраняют общую иерархию Capture, Organize, Focus и Complete.",
        outcome: "Собран рабочий адаптивный прототип ключевого цикла Remy — от быстрого Capture до Focus и завершения задачи. Основные сценарии и состояния реализованы и проверяются в рабочем прототипе. Remy продолжает развиваться: улучшается сохранение данных, авторизация и подготовка продукта к production.",
        tools: ["React", "TypeScript", "Tailwind CSS", "tRPC"],
        gallery: [
          remyFocusDesktop,
          remyInboxDesktop,
          remyFocusMobile,
          remyTaskMobile,
        ],
        galleryCaptions: [
          "Desktop Focus намеренно ограничивает день тремя задачами и показывает одно главное действие.",
          "Capture-first Inbox хранит всё записанное и предлагает добавить структуру только тогда, когда она помогает.",
          "Mobile сохраняет приоритет текущей задачи, короткую очередь и быстрый доступ к Capture.",
          "Organize раскрывает контекст постепенно, а AI предлагает следующий шаг только с подтверждением пользователя.",
        ],
        galleryLayout: 'screens',
      },
      en: {
        hero: {
          title: "Remy — a calm focus and task system",
          role: "Product Designer",
          period: "2026 · in progress",
          outcome: "A working responsive prototype of the core Capture → Organize → Focus → Complete loop",
        },
        problem: "Traditional task managers easily become long backlogs: people have to remember tasks, prioritize them, and repeatedly decide what to do next. Remy focuses on the gap between capturing a task and actually starting it, reducing the cognitive load around choosing the next action.",
        role: "I develop Remy as an independent product: framing the problem and product model, designing the information architecture, UX/UI and design system, then using AI coding agents to turn decisions into a working prototype and test them in the product.",
        process: [
          "Defined the core product job: reduce the overload between capturing a task and starting it",
          "Mapped the Capture → Organize → Focus → Do → Complete → Review loop",
          "Kept quick Capture to a title and progressively disclosed details through Organize",
          "Limited Focus to three tasks and emphasized one current task with one primary action",
          "Designed AI suggestions for the next step and task breakdown: Remy proposes, the user confirms",
          "Built a responsive component system for desktop and mobile and continue testing key states in the working prototype",
        ],
        solution: "Remy turns a long task list into a calm, manageable flow. Capture saves a thought quickly, Inbox adds structure only when it helps, and Focus intentionally limits the day to three tasks. Do keeps one current task, a clear next action, and an optional timer in view; Review closes the loop without pressure or guilt.",
        uiDetails: "The interface uses a neutral palette with one blue accent. Each context emphasizes one primary action, secondary settings are progressively disclosed, and desktop and mobile preserve the same Capture, Organize, Focus, and Complete hierarchy.",
        outcome: "A working responsive prototype now covers Remy's core loop from quick Capture to Focus and task completion. The main journeys and states are implemented and checked in the working prototype. Remy remains in active development, with persistence, authentication and production readiness continuing to improve.",
        tools: ["React", "TypeScript", "Tailwind CSS", "tRPC"],
        gallery: [
          remyFocusDesktop,
          remyInboxDesktop,
          remyFocusMobile,
          remyTaskMobile,
        ],
        galleryCaptions: [
          "Desktop Focus intentionally limits the day to three tasks and presents one primary action.",
          "The capture-first Inbox stores everything and adds structure only when it helps.",
          "Mobile preserves the current task, a short queue, and fast access to Capture.",
          "Organize reveals context progressively, while AI suggests the next step only after user confirmation.",
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
      ru: "B2B-дашборд, который объединяет мониторинг, инциденты и приоритетные действия в одном рабочем пространстве",
      en: "A B2B dashboard that brings monitoring, incidents and priority actions into one operational workspace",
    },
    content: {
      ru: {
        hero: {
          title: "Operations Dashboard — Incidents & Monitoring",
          role: "Product Designer",
          period: "2024",
          outcome: "Концепт единого рабочего пространства для мониторинга метрик и управления инцидентами",
        },
        problem: "Когда мониторинг, статусы и инциденты распределены по разным инструментам, оператору сложнее быстро понять, что требует внимания. Задача — собрать ключевую информацию и действия в одном интерфейсе с понятной приоритизацией.",
        role: "Разобрал операционный workflow, определил информационную иерархию, спроектировал навигацию, таблицы инцидентов, визуализацию метрик и системные состояния интерфейса.",
        process: [
          "Разбор задач мониторинга и incident-management workflow",
          "Определение приоритетных метрик, статусов и уровней критичности",
          "Проектирование layout и навигации",
          "Дизайн графиков и таблиц",
          "Состояния: loading, empty, error",
          "Адаптация под разные разрешения",
        ],
        solution: "Модульная структура объединяет метрики, инциденты, фильтры и поиск. Критичность и статусы помогают расставить приоритеты, а повторяемые паттерны действий уменьшают переключение между контекстами.",
        uiDetails: "Компоненты: карточки метрик, графики (line, bar, pie), таблицы с сортировкой, статус-бейджи, модальные окна. Сетка 12 колонок.",
        outcome: "Собран системный responsive-концепт, в котором мониторинг, приоритизация и работа с инцидентами образуют один последовательный операционный сценарий.",
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
          outcome: "A unified workspace concept for monitoring key metrics and managing incidents",
        },
        problem: "When monitoring, statuses and incidents are spread across different tools, it becomes harder to see what needs attention first. The goal was to bring key information and actions into one interface with clear prioritisation.",
        role: "Mapped the operational workflow, defined the information hierarchy, and designed navigation, incident tables, metric visualisation and system states.",
        process: [
          "Mapped monitoring tasks and the incident-management workflow",
          "Defined priority metrics, statuses and severity levels",
          "Layout and navigation design",
          "Charts and tables design",
          "States: loading, empty, error",
          "Responsive adaptation",
        ],
        solution: "A modular structure combines metrics, incidents, filters and search. Severity and status support prioritisation, while repeatable action patterns reduce context switching.",
        uiDetails: "Components: metric cards, charts (line, bar, pie), sortable tables, status badges, modals. 12-column grid.",
        outcome: "The result is a responsive system concept where monitoring, prioritisation and incident handling form one coherent operational workflow.",
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
      ru: "Agentic UX-концепт мобильного видеоредактора: AI готовит ролик, а пользователь контролирует результат через короткий сценарий подтверждения и уточнения",
      en: "An agentic mobile video editor concept where AI prepares the edit and the user controls the result through a short approve-and-refine flow",
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
        role: "Сформулировал продуктовую гипотезу, проанализировал AI-first и voice-first паттерны, спроектировал agentic flow и ключевые mobile-состояния, сохраняя баланс между автоматизацией и контролем пользователя.",
        process: [
          "Разобрал, где традиционный монтаж перегружает пользователя решениями",
          "Сравнил AI-first и voice-first паттерны для сокращения ручных шагов",
          "Гипотеза проактивного агента",
          "Проектирование потока open → approve → share",
          "UI-концепт ключевых состояний",
          "Проверил иерархию, ясность действий и контроль пользователя в ключевых состояниях",
        ],
        solution: "Агент заранее анализирует галерею, выбирает лучшие кадры, предлагает готовый вариант и ждёт одного подтверждения. Пользователь может уточнить результат голосом и сразу поделиться роликом.",
        uiDetails: "Тёмный mobile UI с одним фиолетовым акцентом, крупными CTA и сфокусированными состояниями агента. Интерфейс оставляет пользователю контроль без сложного таймлайна.",
        outcome: "Сформирован целостный agentic-концепт: подготовительная работа переносится на AI, а пользователю остаются контроль результата, уточнение и публикация без сложного таймлайна.",
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
          "Разбор AI-first паттернов помог сформулировать модель проактивного агента.",
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
        role: "Defined the product hypothesis, analysed AI-first and voice-first patterns, designed the agentic flow and key mobile states, and balanced automation with user control.",
        process: [
          "Mapped where traditional editing overloads users with decisions",
          "Compared AI-first and voice-first patterns for removing manual steps",
          "Formed the proactive-agent hypothesis",
          "Designed the open → approve → share flow",
          "Created the key interface states",
          "Checked hierarchy, action clarity and user control across key states",
        ],
        solution: "The agent analyzes the gallery in advance, selects the best shots, suggests a ready-made edit, and waits for one approval. The user can refine it by voice and share immediately.",
        uiDetails: "A dark mobile UI with one purple accent, clear CTAs, and focused agent states. The experience preserves user control without exposing a complex timeline.",
        outcome: "The result is a coherent agentic concept: AI takes on the preparation work while the user keeps control over the result, refinement and publishing without a complex timeline.",
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
          "AI-first pattern analysis helped shape the proactive-agent model.",
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
      ru: "Редизайн мобильного trading-симулятора: более ясный торговый flow, меньше визуального шума и обучение внутри продукта",
      en: "A mobile trading-simulator redesign with a clearer core flow, less visual noise and learning integrated into the product",
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
        outcome: "Собран последовательный end-to-end flow: от выбора актива и настройки сделки до контроля позиции, истории и обучения. Решения закреплены в интерактивном прототипе и переиспользуемой UI-системе.",
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
        outcome: "The redesign connects the end-to-end journey from asset selection and trade setup to position control, history and learning, supported by an interactive prototype and reusable UI system.",
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
