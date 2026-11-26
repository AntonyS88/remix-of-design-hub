import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cases, getCaseBySlug } from '@/config/cases';
import workEnglishMobile from '@/assets/workenglish-practice-mobile.webp';
import { siteConfig } from '@/config/site.config';
import { Header } from '@/components/Header';
import { GradientBackground } from '@/components/GradientBackground';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BlurFade } from '@/components/magicui/blur-fade';

// Intrinsic sizes reserve space before the case cover has loaded.
const coverSizes: Record<string, readonly [number, number]> = {
  remy: [2160, 1277],
  workenglish: [1607, 730],
  'operations-dashboard': [1024, 768],
  'mobile-app-concept': [2000, 1571],
  'forex-trading-simulator': [1600, 1054],
};

interface LightboxLabels {
  close: string;
  previous: string;
  next: string;
  gallery: string;
  galleryTitle: string;
  goTo: (index: number) => string;
}

interface ImageLightboxProps {
  images: string[];
  captions?: string[];
  currentIndex: number;
  imageAlt: string;
  labels: LightboxLabels;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function ImageLightbox({ images, captions, currentIndex, imageAlt, labels, onClose, onNavigate }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  const navigate = useCallback((direction: -1 | 1) => {
    onNavigate((currentIndexRef.current + direction + images.length) % images.length);
  }, [images.length, onNavigate]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') navigate(-1);
      if (event.key === 'ArrowRight') navigate(1);

      if (event.key === 'Tab' && dialogRef.current) {
        const controls = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled])'));
        const first = controls[0];
        const last = controls[controls.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [navigate, onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={labels.gallery}
      className="motion-opacity fixed inset-0 z-[60] flex items-center justify-center bg-background/95 px-4 py-20"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:right-6 sm:top-6"
        aria-label={labels.close}
      >
        <X className="h-5 w-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          navigate(-1);
        }}
        className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-muted/80 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-6"
        aria-label={labels.previous}
      >
        <ChevronLeft className="h-6 w-6" strokeWidth={2} />
      </button>

      <div className="flex max-h-full max-w-6xl flex-col items-center justify-center px-10 sm:px-16" onClick={(event) => event.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={captions?.[currentIndex] || `${imageAlt} ${currentIndex + 1}`}
          className="max-h-[70vh] max-w-full rounded-xl object-contain"
        />
        {captions?.[currentIndex] && (
          <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            {captions[currentIndex]}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          navigate(1);
        }}
        className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-muted/80 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-6"
        aria-label={labels.next}
      >
        <ChevronRight className="h-6 w-6" strokeWidth={2} />
      </button>

      <div className="absolute bottom-2 left-1/2 flex w-full max-w-lg -translate-x-1/2 flex-wrap items-center justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate(index);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={labels.goTo(index + 1)}
            aria-current={index === currentIndex ? 'true' : undefined}
          ><span aria-hidden="true" className={cn('h-2 rounded-full', index === currentIndex ? 'w-7 bg-primary' : 'w-2 bg-muted-foreground/40')} /></button>
        ))}
      </div>
    </div>
  );
}

function EditorialSection({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <BlurFade><section className="grid gap-5 border-t border-border/70 py-10 sm:py-14 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-3">
        <p className="eyebrow mb-2">{index}</p>
        <h2 className="text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">{title}</h2>
      </div>
      <div className="min-w-0 lg:col-span-8 lg:col-start-5">{children}</div>
    </section></BlurFade>
  );
}


function FullWidthFigure({ children }: { children: ReactNode }) { return <div>{children}</div>; }
function ResponsiveShowcase({ children }: { children: ReactNode }) { return <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">{children}</div>; }
function MobileScreenSequence({ children }: { children: ReactNode }) { return <div className="sm:columns-2 sm:gap-6">{children}</div>; }
function ImagePair({ children }: { children: ReactNode }) { return <div className="grid items-start gap-6 sm:grid-cols-2">{children}</div>; }
function DesignSystemShowcase({ children }: { children: ReactNode }) { return <div>{children}</div>; }

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const caseData = getCaseBySlug(slug || '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  useEffect(() => {
    if (caseData) {
      document.title = `${caseData.title[lang]} — Anton Sechin`;
    }
  }, [caseData, lang]);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  if (!caseData) {
    return (
      <>
        <GradientBackground minimal />
        <Header />
        <main className="flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">404</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.055em] text-foreground sm:text-7xl">Case not found</h1>
            <Link to="/" className="group mt-10 inline-flex items-center gap-2 border-b border-foreground/30 py-1 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
              Back to home
            </Link>
          </div>
        </main>
      </>
    );
  }

  const content = caseData.content[lang];
  const lightboxLabels: LightboxLabels = lang === 'ru'
    ? {
        close: 'Закрыть галерею',
        previous: 'Предыдущее изображение',
        next: 'Следующее изображение',
        gallery: `Галерея проекта ${caseData.title[lang]}`,
        galleryTitle: 'Галерея',
        goTo: (index) => `Перейти к изображению ${index}`,
      }
    : {
        close: 'Close gallery',
        previous: 'Previous image',
        next: 'Next image',
        gallery: `${caseData.title[lang]} project gallery`,
        galleryTitle: 'Gallery',
        goTo: (index) => `Go to image ${index}`,
      };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Layouts are curated per project; image indices refer to the original gallery and lightbox order.
  type Composition = { kind: 'full' | 'responsive' | 'sequence' | 'pair' | 'system'; indices: number[] };
  const compositions: Record<string, Composition[][]> = {
    remy: [[], [{ kind: 'full', indices: [1] }], [{ kind: 'responsive', indices: [0, 3] }], [{ kind: 'sequence', indices: [2] }]],
    workenglish: [[], [{ kind: 'responsive', indices: [3, 2] }], [{ kind: 'full', indices: [0, 1] }], [{ kind: 'full', indices: [4] }]],
    'mobile-app-concept': [[{ kind: 'full', indices: [0, 1] }], [{ kind: 'full', indices: [3] }], [{ kind: 'full', indices: [2] }, { kind: 'pair', indices: [4, 5] }], []],
    'forex-trading-simulator': [[{ kind: 'full', indices: [0, 1] }], [{ kind: 'full', indices: [2, 3] }], [{ kind: 'sequence', indices: [6, 7, 8, 9, 10] }], [{ kind: 'system', indices: [4, 5] }]],
  };
  const imageGroups = compositions[caseData.slug] ?? [[], [], [{ kind: 'full' as const, indices: content.gallery.map((_, index) => index) }], []];
  const figure = (index: number) => {
    const image = content.gallery[index];
    const caption = content.galleryCaptions?.[index];
    return (
      <figure key={`${image}-${index}`} className="mb-8 min-w-0 break-inside-avoid sm:mb-6">
        <button type="button" onClick={() => openLightbox(index)} className="block w-full overflow-hidden rounded-[var(--radius-visual)] bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4" aria-label={caption || lightboxLabels.goTo(index + 1)}>
          <img src={image} alt={caption || `${caseData.title[lang]} — ${index + 1}`} loading="lazy" decoding="async" className="h-auto w-full object-contain" />
        </button>
        {caption && <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>}
      </figure>
    );
  };
  const renderImages = (items: Composition[]) => items.length > 0 && (
    <div className="mt-8">{items.map((item, index) => {
      const Layout = { full: FullWidthFigure, responsive: ResponsiveShowcase, sequence: MobileScreenSequence, pair: ImagePair, system: DesignSystemShowcase }[item.kind];
      return <Layout key={`${item.kind}-${index}`}>{item.indices.map(figure)}</Layout>;
    })}</div>
  );
  const order = ['remy', 'workenglish', 'mobile-app-concept', 'forex-trading-simulator'];
  const position = order.indexOf(caseData.slug);
  const nextCase = position >= 0 ? cases.find((item) => item.slug === order[(position + 1) % order.length]) : undefined;
  const platforms: Record<string, string> = { remy: 'Web / Mobile web', workenglish: 'Web / Mobile web', 'mobile-app-concept': 'Mobile / iOS concept', 'forex-trading-simulator': 'Mobile', 'operations-dashboard': 'Web' };
  const projectType: Record<string, [string, string]> = {
    remy: ['Собственный продукт', 'Independent product'],
    workenglish: ['Публичная бета', 'Public beta'],
    'mobile-app-concept': ['Концепт', 'Concept'],
    'forex-trading-simulator': ['Редизайн', 'Redesign'],
  };

  return (
    <>
      <div aria-hidden={lightboxOpen ? true : undefined}>
        <GradientBackground minimal />
        <Header />

        <main className="min-h-screen pb-20 pt-28 sm:pb-28 sm:pt-32">
        <div className="layout-shell">
          <Link
            to="/#selected-work"
            className="group inline-flex items-center gap-2 rounded-sm py-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
            {t.casePage.back}
          </Link>

          <header className="motion-intro mt-10 grid gap-8 sm:mt-12 lg:grid-cols-12 lg:items-start lg:gap-x-6">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5">
                {caseData.tags.join(' · ')}
              </p>
              <h1 className="max-w-5xl text-[clamp(2.15rem,6.2vw,5.75rem)] font-bold leading-[1.02] tracking-[-0.055em] text-foreground sm:leading-[0.94]">
                {content.hero.title}
              </h1>
            </div>

            <div className="border-t border-border/70 pt-5 lg:col-span-4 lg:col-start-9 lg:mt-7">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-foreground">
                <span>{content.hero.role}</span>
                <span aria-hidden="true" className="text-muted-foreground">·</span>
                <span>{content.hero.period}</span>
              </div>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.hero.outcome}
              </p>
              {caseData.projectUrl && caseData.projectCta && (
                <Button variant="outline" size="lg" className="group mt-6 rounded-full px-6" asChild>
                  <a href={caseData.projectUrl} target="_blank" rel="noopener noreferrer">
                    {caseData.projectCta[lang]}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                  </a>
                </Button>
              )}
            </div>
          </header>

          <figure className={cn("motion-intro motion-intro-later mt-10 overflow-hidden rounded-[var(--radius-visual)] bg-muted sm:mt-14", caseData.slug === 'workenglish' && "aspect-[390/844] sm:aspect-[1607/730]")}>
            <picture>
            {caseData.slug === 'workenglish' && <source media="(max-width: 639px)" srcSet={workEnglishMobile} width={390} height={844} />}
            <img
              src={caseData.coverImage}
              alt={caseData.title[lang]}
              width={coverSizes[caseData.slug]?.[0]}
              height={coverSizes[caseData.slug]?.[1]}
              className="h-auto w-full object-contain"
            />
            </picture>
          </figure>

          <div className="mt-16 sm:mt-20">
            <EditorialSection index="00" title={lang === 'ru' ? 'О проекте' : 'Project overview'}>
              <dl className="mt-8 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
                <div><dt className="text-muted-foreground">{lang === 'ru' ? 'Роль' : 'Role'}</dt><dd className="mt-1 font-semibold">{content.hero.role}</dd></div>
                <div><dt className="text-muted-foreground">{lang === 'ru' ? 'Формат и статус' : 'Type and status'}</dt><dd className="mt-1 font-semibold">{projectType[caseData.slug]?.[lang === 'ru' ? 0 : 1] ?? caseData.tags[0]} · {content.hero.period}</dd></div>
                <div><dt className="text-muted-foreground">{lang === 'ru' ? 'Платформа' : 'Platform'}</dt><dd className="mt-1 font-semibold">{platforms[caseData.slug] ?? 'Web'}</dd></div>
              </dl>
            </EditorialSection>
            <EditorialSection index="01" title={lang === 'ru' ? 'Проблема и гипотеза' : 'Problem & hypothesis'}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{content.problem}</p>
              {renderImages(imageGroups[0])}
            </EditorialSection>

            <EditorialSection index="02" title={t.casePage.role}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{content.role}</p>
            </EditorialSection>

            <EditorialSection index="03" title={lang === 'ru' ? 'Процесс и сценарии' : 'Process & user flows'}>
              <ol className="divide-y divide-border/70 border-y border-border/70">
                {content.process.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 py-4 text-sm leading-relaxed text-muted-foreground sm:grid-cols-[3rem_minmax(0,1fr)] sm:text-base">
                    <span className="font-semibold tabular-nums text-foreground/60">{String(index + 1).padStart(2, '0')}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              {renderImages(imageGroups[1])}
            </EditorialSection>

            <EditorialSection index="04" title={lang === 'ru' ? 'Ключевые решения' : 'Key design decisions'}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{content.solution}</p>
              {renderImages(imageGroups[2])}
            </EditorialSection>

            <EditorialSection index="05" title={caseData.slug === 'workenglish' ? (lang === 'ru' ? 'Интерфейс и адаптивность' : 'Interface & responsiveness') : t.casePage.uiDetails}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{content.uiDetails}</p>
              {renderImages(imageGroups[3])}
            </EditorialSection>

            <EditorialSection index="06" title={t.casePage.outcome}>
              <p className="max-w-3xl text-lg font-medium leading-relaxed text-foreground sm:text-xl">{content.outcome}</p>
              {content.outcomeDetails && (
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {content.outcomeDetails.map((detail) => (
                    <div key={detail.title}>
                      <h3 className="text-sm font-semibold text-foreground">{detail.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </EditorialSection>

            <EditorialSection index="07" title={t.casePage.tools}>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-foreground sm:text-base">
                {content.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-6 after:h-1 after:w-1 after:rounded-full after:bg-muted-foreground/50 last:after:hidden">
                    {tool}
                  </li>
                ))}
              </ul>
            </EditorialSection>

            {nextCase && <nav aria-label={lang === 'ru' ? 'Следующий проект' : 'Next project'} className="border-t border-border/70 py-10">
              <p className="eyebrow mb-3">{lang === 'ru' ? 'Следующий проект' : 'Next project'}</p>
              <Link to={`/case/${nextCase.slug}`} className="inline-flex items-center gap-3 text-2xl font-semibold tracking-tight hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{nextCase.title[lang]} <ArrowUpRight className="h-5 w-5" /></Link>
            </nav>}
            <section className="grid gap-7 border-y border-border/70 py-12 sm:py-16 lg:grid-cols-12 lg:items-end lg:gap-6">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-3">{t.contacts.telegram}</p>
                <h2 className="section-heading text-foreground">{t.casePage.contact}</h2>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
                <Button variant="default" size="lg" className="group rounded-full px-7" asChild>
                  <a href={siteConfig.telegram.url} target="_blank" rel="noopener noreferrer">
                    {t.cta.button}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
        </main>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={content.gallery}
          captions={content.galleryCaptions}
          currentIndex={lightboxIndex}
          imageAlt={caseData.title[lang]}
          labels={lightboxLabels}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
