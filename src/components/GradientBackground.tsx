interface GradientBackgroundProps {
  minimal?: boolean;
}

export function GradientBackground({ minimal = false }: GradientBackgroundProps) {
  return <div className={minimal ? "gradient-bg gradient-bg-minimal" : "gradient-bg"} aria-hidden="true" />;
}
