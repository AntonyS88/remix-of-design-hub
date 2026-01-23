import { 
  Lightbulb, 
  Layers, 
  Palette, 
  Component, 
  BookOpen, 
  Smartphone, 
  Package, 
  Wrench,
  Sparkles,
  Target
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import avatar3d from '@/assets/avatar-3d.png';
import { cn } from '@/lib/utils';

const skillIcons = {
  ux: Lightbulb,
  prototyping: Layers,
  ui: Palette,
  uiKit: Component,
  guidelines: BookOpen,
  responsive: Smartphone,
  handoff: Package,
  tools: Wrench,
  motion: Sparkles,
  product: Target,
};

const skillKeys = Object.keys(skillIcons) as (keyof typeof skillIcons)[];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 sm:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
          {t.skills.title}
        </h2>

        {/* RPG Layout */}
        <div className="relative">
          {/* Center Avatar */}
          <div className="flex justify-center mb-12 lg:mb-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10">
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-primary/20 via-accent to-primary/10 p-1 animate-pulse-soft">
                <div className="w-full h-full rounded-full overflow-hidden bg-card border-2 border-primary/20">
                  <img
                    src={avatar3d}
                    alt="3D Avatar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl -z-10" />
            </div>
          </div>

          {/* Skills Grid - Radial on desktop, grid on mobile/tablet */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {skillKeys.map((key, index) => {
              const Icon = skillIcons[key];
              const skill = t.skills.items[key];
              
              // Position classes for desktop radial layout
              const positionClasses = [
                'lg:col-start-1 lg:row-start-1',
                'lg:col-start-2 lg:row-start-1',
                'lg:col-start-4 lg:row-start-1',
                'lg:col-start-5 lg:row-start-1',
                'lg:col-start-1 lg:row-start-2',
                'lg:col-start-5 lg:row-start-2',
                'lg:col-start-1 lg:row-start-3',
                'lg:col-start-2 lg:row-start-3',
                'lg:col-start-4 lg:row-start-3',
                'lg:col-start-5 lg:row-start-3',
              ];

              return (
                <div
                  key={key}
                  className={cn(
                    "skill-slot flex flex-col items-center text-center p-4 sm:p-5",
                    positionClasses[index],
                    index === 4 || index === 5 ? 'lg:row-start-2' : ''
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto text-sm sm:text-base">
          {t.skills.summary}
        </p>
      </div>
    </section>
  );
}
