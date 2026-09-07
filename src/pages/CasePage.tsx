import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { getCaseBySlug } from '@/config/cases';
import { siteConfig } from '@/config/site.config';
import { Header } from '@/components/Header';
import { GradientBackground } from '@/components/GradientBackground';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

  const navigate = useCallback((direction: -1 | 1) => {
    onNavigate((currentIndex + direction + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 px-4 py-20"
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

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate(index);
            }}
            className={cn(
              'h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4',
              index === currentIndex ? 'w-7 bg-primary' : 'w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70'
            )}
            aria-label={labels.goTo(index + 1)}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function EditorialSection({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-border/70 py-10 sm:py-12 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-4">
        <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-muted-foreground">{index}</p>
        <h2 className="text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">{title}</h2>
      </div>
      <div className="min-w-0 lg:col-span-7 lg:col-start-6">{children}</div>
    </section>
  );
}

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const caseData = getCaseBySlug(slug || '');

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

  return (
    <>
      <div aria-hidden={lightboxOpen ? true : undefined}>
        <GradientBackground minimal />
        <Header />

        <main className="min-h-screen px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
        <div className="container mx-auto max-w-7xl">
          <Link
            to="/#selected-work"
            className="group inline-flex items-center gap-2 rounded-sm py-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
            {t.casePage.back}
          </Link>

          <header className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-x-6">
            <div className="lg:col-span-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {caseData.tags.join(' · ')}
              </p>
              <h1 className="max-w-5xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {content.hero.title}
              </h1>
            </div>

            <div className="border-t border-border/70 pt-5 lg:col-span-4 lg:self-end">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-foreground">
                <span>{content.hero.role}</span>
                <span aria-hidden="true" className="text-muted-foreground">·</span>
                <span>{content.hero.period}</span>
              </div>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.hero.outcome}
              </p>
            </div>
          </header>

          <figure className="mt-12 overflow-hidden rounded-xl bg-muted sm:mt-16">
            <img
              src={caseData.coverImage}
              alt={caseData.title[lang]}
              className="aspect-[16/9] w-full object-cover"
            />
          </figure>

          <div className="mt-16 sm:mt-24">
            <EditorialSection index="01" title={t.casePage.problem}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{content.problem}</p>
            </EditorialSection>

            <EditorialSection index="02" title={t.casePage.role}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{content.role}</p>
            </EditorialSection>

            <EditorialSection index="03" title={t.casePage.process}>
              <ol className="divide-y divide-border/70 border-y border-border/70">
                {content.process.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 py-4 text-sm leading-relaxed text-muted-foreground sm:grid-cols-[3rem_minmax(0,1fr)] sm:text-base">
                    <span className="font-semibold tabular-nums text-foreground/60">{String(index + 1).padStart(2, '0')}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </EditorialSection>

            <EditorialSection index="04" title={t.casePage.solution}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{content.solution}</p>
            </EditorialSection>

            <section className="border-t border-border/70 py-10 sm:py-16" aria-label={lightboxLabels.gallery}>
              <div className="mb-7 flex items-end justify-between gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{lightboxLabels.galleryTitle}</p>
                <span className="text-xs font-semibold tabular-nums tracking-[0.16em] text-muted-foreground" aria-hidden="true">
                  01—{String(content.gallery.length).padStart(2, '0')}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                {content.gallery.map((image, index) => {
                  const caption = content.galleryCaptions?.[index];

                  return (
                    <figure
                      key={`${image}-${index}`}
                      className={cn((index === 0 || content.galleryCaptions) && 'sm:col-span-2')}
                    >
                      <button
                        type="button"
                        onClick={() => openLightbox(index)}
                        className="group block w-full overflow-hidden rounded-xl bg-muted text-left ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                        aria-label={caption || lightboxLabels.goTo(index + 1)}
                      >
                        <img
                          src={image}
                          alt={caption || `${caseData.title[lang]} — ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className={cn(
                            'w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]',
                            caption ? 'h-auto object-contain' : index === 0 ? 'aspect-[16/9] object-cover' : 'aspect-[4/3] object-cover'
                          )}
                        />
                      </button>
                      {caption && (
                        <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                          {caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                })}
              </div>
            </section>

            <EditorialSection index="05" title={t.casePage.uiDetails}>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{content.uiDetails}</p>
            </EditorialSection>

            <EditorialSection index="06" title={t.casePage.outcome}>
              <p className="max-w-3xl text-lg font-medium leading-relaxed text-foreground sm:text-xl">{content.outcome}</p>
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

            <section className="grid gap-7 border-y border-border/70 py-12 sm:py-16 lg:grid-cols-12 lg:items-end lg:gap-6">
              <div className="lg:col-span-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t.contacts.telegram}</p>
                <h2 className="text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl">{t.casePage.contact}</h2>
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
