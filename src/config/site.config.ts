// Site configuration - single source of truth for all personal data
// Update this file to customize your portfolio

export const siteConfig = {
  name: "Anton Sechin",
  role: "Product Designer · AI Product Builder",
  location: "Montenegro (Bar)",
  email: "sechin.ao@gmail.com",
  telegram: {
    username: "@AntonyS88",
    url: "https://t.me/AntonyS88",
  },
  linkedin: "https://www.linkedin.com/in/anton-sechin-ab7449a3/",
  dribbble: "https://dribbble.com/Sechin",
  behance: "https://www.behance.net/DesignerAntonSechin/projects",
  cvUrl: "/cv.pdf",
  emailSubject: "Product%20Design%20Inquiry",
  
  // Avatar images
  avatarPhoto: "/assets/avatar.jpg", // Your photo for hero
  avatar3d: "/assets/avatar-3d.webp", // 3D avatar for skills section
  
  // Social links for contacts section
  socials: {
    telegram: "https://t.me/AntonyS88",
    linkedin: "https://www.linkedin.com/in/anton-sechin-ab7449a3/",
    dribbble: "https://dribbble.com/Sechin",
    behance: "https://www.behance.net/DesignerAntonSechin/projects",
    email: "mailto:sechin.ao@gmail.com?subject=Product%20Design%20Inquiry",
  },
  
  // SEO
  seo: {
    title: {
      ru: "Антон Сечин — Product Designer · AI Product Builder",
      en: "Anton Sechin — Product Designer · AI Product Builder",
    },
    description: {
      ru: "Product Designer и AI Product Builder. Работаю от формулировки проблемы и UX-сценариев до дизайн-системы, работающего прототипа и проверки решений в продукте.",
      en: "Product Designer and AI Product Builder working from problem framing and UX flows to design systems, working prototypes and product validation.",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
