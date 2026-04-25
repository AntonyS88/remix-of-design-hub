# Anton Sechin — UX/UI Designer Portfolio

A premium, minimalist portfolio website built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Bilingual Support**: Full RU/EN language switching with persistent selection
- **Animated Gradient Background**: Subtle, premium animated background
- **RPG-Style Skills Section**: Avatar-centered skill layout with hover effects
- **Case Studies**: Full case pages with lightbox gallery
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **SEO Ready**: Meta tags, OpenGraph, semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/           # Images (avatar, case covers)
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Portfolio.tsx
│   ├── CTA.tsx
│   ├── Contacts.tsx
│   └── ...
├── config/          # Configuration files
│   ├── site.config.ts   # Personal info (name, email, links)
│   ├── i18n.ts         # Translations (RU/EN)
│   └── cases.ts        # Case study content
├── hooks/
│   └── useLanguage.tsx # i18n hook
├── pages/
│   ├── Index.tsx       # Homepage
│   └── CasePage.tsx    # Case detail page
└── index.css          # Design system tokens
```

## 🎨 Customization

### 1. Update Personal Info

Edit `src/config/site.config.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  telegram: {
    username: "@yourusername",
    url: "https://t.me/yourusername",
  },
  linkedin: "https://linkedin.com/in/yourprofile",
  cvUrl: "/cv.pdf", // Place CV in public/cv.pdf
  // ...
};
```

### 2. Update Translations

Edit `src/config/i18n.ts` to customize all text content in both languages.

### 3. Update Case Studies

Edit `src/config/cases.ts`:

1. Replace placeholder images in `src/assets/`
2. Update case content (title, summary, full content)
3. Add real screenshots to the gallery arrays

### 4. Update Avatar

Replace these files:
- `src/assets/avatar.jpg` — Your photo for hero section
- `src/assets/avatar-3d.png` — 3D avatar for skills section (optional)

### 5. Design Tokens

Customize colors in `src/index.css`:

```css
:root {
  --primary: 258 70% 55%;  /* Violet accent */
  /* ... other tokens */
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Import project in Vercel
3. Deploy!

### Netlify

1. Push code to GitHub/GitLab
2. Import in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📋 Checklist Before Deploy

- [ ] Replace `src/assets/avatar.jpg` with your photo
- [ ] Update `src/config/site.config.ts` with your info
- [ ] Update LinkedIn URL
- [ ] Add `public/cv.pdf` (your CV)
- [ ] Replace case cover images with real screenshots
- [ ] Update case study content with real projects
- [ ] Add `public/og-image.png` for social sharing

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router
- **Animations**: CSS animations + Framer Motion
- **Build**: Vite

---

Built with React + TypeScript.
