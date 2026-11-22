// Case copy is kept separate until production screenshots are ready to integrate.
export const workEnglishCopy = {
  ru: {
    title: 'WorkEnglish — практика английского для рабочих ситуаций',
    summary: 'Собственный продукт для короткой практики рабочего английского через реальные ситуации, задания, аудирование и обратную связь.',
    problem: 'Можно знать слова и грамматику, но всё равно долго формулировать мысль на встрече, интервью или презентации. WorkEnglish проверяет гипотезу: короткая практика в рабочих контекстах, активное воспроизведение и разбор ошибок помогают сократить разрыв между «знаю» и «могу использовать».',
    role: 'Развиваю WorkEnglish как собственный продукт: определяю проблему, learning loop, roadmap и границы MVP; проектирую user flows, интерфейсы и дизайн-систему; с помощью AI coding agents довожу решения до работающей beta-версии и проверяю их в продукте.',
    process: [
      'Сформулировал проблему: знания языка не равны способности быстро использовать его в рабочем контексте',
      'Собрал learning loop Diagnose → Learn → Practice → Analyze → Remember → Repeat',
      'Спроектировал Today и короткий Sprint с последовательностью заданий и мгновенной обратной связью',
      'Продумал сохранение активной сессии, выбранного ответа и обратной связи при перезагрузке',
      'Добавил аудирование и Explore-материалы с чтением, переводом и проверкой понимания',
      'Собрал адаптивную компонентную систему для desktop и mobile и проверяю её в живом продукте',
    ],
    solution: 'Today снижает порог входа и предлагает начать короткую сессию без лишнего выбора. Sprint удерживает пользователя в одном задании за раз, а обратная связь сразу связывает ответ, перевод и аудиопример. Explore добавляет чтение и аудирование по темам. Персонализация, повторение, разговорная практика и AI-feedback развиваются отдельными итерациями.',
    outcome: 'Публичная beta уже покрывает основной learning flow на desktop и mobile: короткие занятия, несколько типов заданий, обратная связь, аудирование и Explore. Данные обучения пока хранятся локально; синхронизация между устройствами, голосовая практика и AI-feedback остаются следующими этапами.',
  },
  en: {
    title: 'WorkEnglish — English practice for real work situations',
    summary: 'An independent product for short, focused practice of workplace English through realistic situations, exercises, listening and feedback.',
    problem: 'Learners can know vocabulary and grammar yet still struggle to find the right words in a meeting, interview or presentation. WorkEnglish tests a product hypothesis: short practice in workplace contexts, active recall and error feedback can reduce the gap between knowing English and using it.',
    role: 'I develop WorkEnglish as an independent product: defining the problem, learning loop, roadmap and MVP scope; designing user flows, interfaces and the design system; and using AI coding agents to turn decisions into a working beta that I can test in the product.',
    process: [
      'Framed the core problem: language knowledge does not equal fast retrieval in real work situations',
      'Built the learning loop: Diagnose → Learn → Practice → Analyze → Remember → Repeat',
      'Designed Today and a short Sprint with sequential exercises and immediate feedback',
      'Designed persistence for the active session, selected answer and feedback across reloads',
      'Added listening and Explore content with reading, translation and comprehension practice',
      'Built a responsive component system for desktop and mobile and validate it in the live product',
    ],
    solution: 'Today lowers the barrier to starting with a short session and minimal choice. Sprint keeps attention on one exercise at a time, while feedback connects the answer, translation and audio example in one place. Explore adds reading and listening by topic. Personalisation, review, speaking practice and AI feedback are being developed as separate iterations.',
    outcome: 'The public beta now covers the core learning flow on desktop and mobile: short sessions, multiple exercise types, feedback, listening and Explore content. Learning data is still stored locally; cross-device sync, speaking practice and AI feedback remain the next stages.',
  },
} as const;
