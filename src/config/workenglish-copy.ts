// Case copy is kept separate until production screenshots are ready to integrate.
export const workEnglishCopy = {
  ru: {
    title: 'WorkEnglish — практика английского для рабочих ситуаций',
    summary: 'Собственный продукт для короткой практики английского, нужного в работе.',
    problem: 'Знание слов и правил не всегда помогает быстро сформулировать мысль на встрече или интервью. WorkEnglish исследует гипотезу: короткая практика в рабочих контекстах и повторение сложных тем могут помочь переходить от знания к использованию языка.',
    role: 'Развиваю WorkEnglish как собственный продукт: определяю концепцию, учебный сценарий, roadmap и состав MVP, проектирую пользовательские сценарии, интерфейсы и дизайн-систему и организую реализацию с помощью AI coding agents. Проверяю решения в работающем продукте и уточняю их по мере развития.',
    process: [
      'Определил продуктовую гипотезу: практиковать язык в ситуациях, близких к реальной работе',
      'Сформировал направление обучения: Diagnose → Learn → Practice → Analyze → Remember → Repeat',
      'Спроектировал Today и короткий Sprint с последовательностью заданий и обратной связью',
      'Предусмотрел сохранение активной практики, ответа и обратной связи при перезагрузке',
      'Добавил практику аудирования и чтение материалов Explore с переводами и упражнениями',
      'Развиваю адаптивный интерфейс и общую систему компонентов для мобильных устройств и компьютеров',
    ],
    solution: 'Today предлагает короткую сессию, а Sprint объединяет задания и обратную связь в последовательный сценарий. Раздел Explore позволяет читать материалы по интересующим темам, слушать текст и проверять понимание. Работа с повторением и персонализацией развивается постепенно; разговорная практика и AI-обратная связь остаются будущими направлениями.',
    outcome: 'WorkEnglish доступен в браузере как публичная beta-версия и продолжает активно развиваться. В нём доступны короткая практика, несколько типов заданий, обратная связь, аудирование и материалы Explore. Данные обучения хранятся локально; синхронизация между устройствами, голосовая практика и AI-feedback запланированы на будущие итерации.',
  },
  en: {
    title: 'WorkEnglish — English practice for real work situations',
    summary: 'An independent product for short, focused practice of English used at work.',
    problem: 'Knowing vocabulary and grammar does not always make it easy to find the right words in a meeting or interview. WorkEnglish explores a product hypothesis: short practice in workplace contexts and review of difficult topics can help learners move from knowing English to using it.',
    role: 'I develop WorkEnglish as an independent product, defining its concept, learning journey, roadmap and MVP scope, designing user flows, interfaces and the design system, and coordinating implementation with AI coding agents. I test decisions in the working product and refine them as it evolves.',
    process: [
      'Defined a product hypothesis around practicing language in realistic work situations',
      'Shaped the learning direction: Diagnose → Learn → Practice → Analyze → Remember → Repeat',
      'Designed Today and a short Sprint with a sequence of exercises and feedback',
      'Planned for an active session, draft and feedback to survive a reload',
      'Introduced listening practice and Explore reading with translations and exercises',
      'Continue developing the responsive interface and shared component system for mobile and desktop',
    ],
    solution: 'Today offers a short session, while Sprint brings exercises and feedback into a focused sequence. Explore lets learners read about topics of interest, listen to the text and check comprehension. Review and personalisation continue to evolve; speaking practice and AI feedback are future directions.',
    outcome: 'WorkEnglish is available in the browser as a public beta and remains in active development. It includes short practice sessions, multiple exercise types, feedback, listening and Explore content. Learning data is stored locally; cross-device sync, voice practice and AI feedback are planned for future iterations.',
  },
} as const;
