import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { getCaseBySlug } from '@/config/cases';
import { siteConfig } from '@/config/site.config';
import { Header } from '@/components/Header';
import { GradientBackground } from '@/components/GradientBackground';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function ImageLightbox({ 
  images, 
  currentIndex, 
  onClose, 
  onNavigate 
}: { 
  images: string[]; 
  currentIndex: number; 
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  return (
    <div 
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="max-w-5xl max-h-[80vh] px-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(index);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const caseData = getCaseBySlug(slug || '');

  if (!caseData) {
    return (
      <>
        <GradientBackground />
        <Header />
        <main className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case not found</h1>
            <Link to="/" className="text-primary hover:underline">
              ← Back to home
            </Link>
          </div>
        </main>
      </>
    );
  }

  const content = caseData.content[lang];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <GradientBackground />
      <Header />
      
      <main className="min-h-screen pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.casePage.back}
          </Link>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseData.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {content.hero.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span>{content.hero.role}</span>
              <span>•</span>
              <span>{content.hero.period}</span>
            </div>
            <p className="text-lg text-foreground/80">
              {content.hero.outcome}
            </p>
          </header>

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden bg-muted mb-12">
            <img
              src={caseData.coverImage}
              alt={caseData.title[lang]}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Problem */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{t.casePage.problem}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.problem}</p>
            </section>

            {/* Role */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{t.casePage.role}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.role}</p>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{t.casePage.process}</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                {content.process.map((step, index) => (
                  <li key={index} className="leading-relaxed">{step}</li>
                ))}
              </ol>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{t.casePage.solution}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.solution}</p>
            </section>

            {/* Gallery */}
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="aspect-video rounded-xl overflow-hidden bg-muted hover:ring-2 ring-primary/50 transition-all"
                  >
                    <img
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </section>

            {/* UI Details */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{t.casePage.uiDetails}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.uiDetails}</p>
            </section>

            {/* Outcome */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{t.casePage.outcome}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.outcome}</p>
            </section>

            {/* Tools */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">{t.casePage.tools}</h2>
              <div className="flex flex-wrap gap-2">
                {content.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-muted text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="pt-8 border-t border-border">
              <div className="glass-card rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold mb-4">{t.casePage.contact}</h3>
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-full px-8 cta-glow group"
                  asChild
                >
                  <a href={siteConfig.telegram.url} target="_blank" rel="noopener noreferrer">
                    {t.cta.button}
                    <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={content.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
