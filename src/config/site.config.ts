// Site configuration - single source of truth for all personal data
// Update this file to customize your portfolio

export const siteConfig = {
  name: "Anton Sechin",
  role: "Product Designer · UX / UI",
  location: "Montenegro (Bar)",
  email: "sechin.ao@gmail.com",
  telegram: {
    username: "@AntonyS88",
    url: "https://t.me/AntonyS88",
  },
  linkedin: "https://www.linkedin.com/in/anton-sechin-ab7449a3/",
  cvUrl: "/cv.pdf",
  emailSubject: "UX%2FUI%20Design%20Inquiry",
  
  // Avatar images
  avatarPhoto: "/assets/avatar.jpg", // Your photo for hero
  avatar3d: "/assets/avatar-3d.png", // 3D avatar for skills section
  
  // Social links for contacts section
  socials: {
    telegram: "https://t.me/AntonyS88",
    linkedin: "https://www.linkedin.com/in/anton-sechin-ab7449a3/",
    email: "mailto:sechin.ao@gmail.com?subject=UX%2FUI%20Design%20Inquiry",
  },
  
  // SEO
  seo: {
    title: {
      ru: "Антон Сечин — Product Designer · UX / UI",
      en: "Anton Sechin — Product Designer · UX / UI",
    },
    description: {
      ru: "Дизайнер интерфейсов. Создаю понятные и красивые веб и мобильные приложения.",
      en: "Interface designer. Creating clear and beautiful web and mobile applications.",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
