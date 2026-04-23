// Shots / Dribbble previews
// Bento layout matches the reference: 6-col × 4-row grid.
// Replace placeholder images with real Dribbble shots when ready.

import placeholder from '@/assets/case-ai-assistants.jpg';
import placeholder2 from '@/assets/case-operations-dashboard.jpg';
import placeholder3 from '@/assets/case-mobile-app.jpg';

export interface Shot {
  id: string;
  image: string;
  title: { ru: string; en: string };
  href: string;
  external?: boolean;
  /** Desktop bento placement on a 6-col × 4-row grid */
  desktop: {
    colStart: number; // 1..6
    colSpan: number;  // 1..6
    rowStart: number; // 1..4
    rowSpan: number;  // 1..4
  };
}

// Reference layout (6 cols × 4 rows):
//
//   ┌─────┬─────┬───────────┐
//   │  1  │  2  │     3     │   row 1
//   ├─────┴──┬──┴────┬──────┤
//   │        │       │      │
//   │   4    │   5   │  6   │   row 2
//   │ (big)  │       ├──────┤
//   │        │       │      │
//   │        ├───┬───┤  8   │   row 3-4
//   │        │ 7 │ 8 │      │
//   └────────┴───┴───┴──────┘
//
// Final mapping below.

export const shots: Shot[] = [
  // Row 1
  {
    id: 'shot-1',
    image: placeholder,
    title: { ru: 'Passive income', en: 'Passive income' },
    href: 'https://dribbble.com/',
    external: true,
    desktop: { colStart: 1, colSpan: 2, rowStart: 1, rowSpan: 1 },
  },
  {
    id: 'shot-2',
    image: placeholder2,
    title: { ru: 'Social Media', en: 'Social Media' },
    href: 'https://dribbble.com/',
    external: true,
    desktop: { colStart: 3, colSpan: 1, rowStart: 1, rowSpan: 1 },
  },
  {
    id: 'shot-3',
    image: placeholder3,
    title: { ru: 'Expanding horizons', en: 'Expanding horizons' },
    href: 'https://dribbble.com/',
    external: true,
    desktop: { colStart: 4, colSpan: 3, rowStart: 1, rowSpan: 1 },
  },
  // Row 2-4 — big hero tile (left)
  {
    id: 'shot-4',
    image: placeholder,
    title: { ru: 'Trust built on consistent results', en: 'Trust built on consistent results' },
    href: 'https://dribbble.com/',
    external: true,
    desktop: { colStart: 1, colSpan: 3, rowStart: 2, rowSpan: 3 },
  },
  // Center — square
  {
    id: 'shot-5',
    image: placeholder2,
    title: { ru: 'Defining the new standard', en: 'Defining the new standard' },
    href: 'https://dribbble.com/',
    external: true,
    desktop: { colStart: 4, colSpan: 2, rowStart: 2, rowSpan: 2 },
  },
  // Top-right small
  {
    id: 'shot-6',
    image: placeholder3,
    title: { ru: 'Campaigns launched', en: 'Campaigns launched' },
    href: 'https://dribbble.com/',
    external: true,
    desktop: { colStart: 6, colSpan: 1, rowStart: 2, rowSpan: 1 },
  },
  // Bottom-mid
  {
    id: 'shot-7',
    image: placeholder,
    title: { ru: 'Organic reach', en: 'Organic reach' },
    href: 'https://dribbble.com/',
    external: true,
    desktop: { colStart: 4, colSpan: 2, rowStart: 4, rowSpan: 1 },
  },
  // Right tall
  {
    id: 'shot-8',
    image: placeholder2,
    title: { ru: 'Audience growth', en: 'Audience growth' },
    href: 'https://dribbble.com/',
    external: true,
    desktop: { colStart: 6, colSpan: 1, rowStart: 3, rowSpan: 2 },
  },
];
