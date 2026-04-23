// Shots / Dribbble previews
// Replace placeholder images with real Dribbble shots when ready.
// Each shot supports an external link (Dribbble) or internal route.

import placeholder from '@/assets/case-ai-assistants.jpg';
import placeholder2 from '@/assets/case-operations-dashboard.jpg';
import placeholder3 from '@/assets/case-mobile-app.jpg';

export interface Shot {
  id: string;
  image: string;
  title: { ru: string; en: string };
  href: string;        // Dribbble shot URL or internal route
  external?: boolean;  // open in new tab
  // Bento layout: column / row span on desktop (lg)
  span?: {
    col?: 1 | 2 | 3;
    row?: 1 | 2;
  };
}

// 8 shots with varied bento sizes.
// Designed for a 4-column grid on lg, 2-column on md, 1 on mobile.
export const shots: Shot[] = [
  {
    id: 'shot-1',
    image: placeholder,
    title: { ru: 'Dashboard exploration', en: 'Dashboard exploration' },
    href: 'https://dribbble.com/',
    external: true,
    span: { col: 2, row: 2 }, // hero tile
  },
  {
    id: 'shot-2',
    image: placeholder2,
    title: { ru: 'Mobile onboarding', en: 'Mobile onboarding' },
    href: 'https://dribbble.com/',
    external: true,
    span: { col: 1, row: 1 },
  },
  {
    id: 'shot-3',
    image: placeholder3,
    title: { ru: 'Chat UI concept', en: 'Chat UI concept' },
    href: 'https://dribbble.com/',
    external: true,
    span: { col: 1, row: 1 },
  },
  {
    id: 'shot-4',
    image: placeholder,
    title: { ru: 'Pricing card', en: 'Pricing card' },
    href: 'https://dribbble.com/',
    external: true,
    span: { col: 2, row: 1 },
  },
  {
    id: 'shot-5',
    image: placeholder2,
    title: { ru: 'Analytics widget', en: 'Analytics widget' },
    href: 'https://dribbble.com/',
    external: true,
    span: { col: 1, row: 1 },
  },
  {
    id: 'shot-6',
    image: placeholder3,
    title: { ru: 'Profile screen', en: 'Profile screen' },
    href: 'https://dribbble.com/',
    external: true,
    span: { col: 1, row: 1 },
  },
  {
    id: 'shot-7',
    image: placeholder,
    title: { ru: 'Landing hero', en: 'Landing hero' },
    href: 'https://dribbble.com/',
    external: true,
    span: { col: 2, row: 1 },
  },
  {
    id: 'shot-8',
    image: placeholder2,
    title: { ru: 'Icon set', en: 'Icon set' },
    href: 'https://dribbble.com/',
    external: true,
    span: { col: 2, row: 1 },
  },
];
