import { Mail, Send, Linkedin, FileText, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function ContactItem({ icon, label, value, href, external = true }: ContactItemProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "flex items-center gap-4 p-4 rounded-2xl",
        "bg-card/60 backdrop-blur-sm",
        "hover:bg-accent/50",
        "transition-all duration-300 group",
        "shadow-sm hover:shadow-md"
      )}
    >
      <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
        <p className="text-sm font-medium text-foreground truncate">{value}</p>
      </div>
    </a>
  );
}

export function Contacts() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-primary" strokeWidth={2} />,
      label: t.contacts.email,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      icon: <Send className="w-6 h-6 text-primary" strokeWidth={2} />,
      label: t.contacts.telegram,
      value: siteConfig.telegram.username,
      href: siteConfig.telegram.url,
    },
    {
      icon: <Linkedin className="w-6 h-6 text-primary" strokeWidth={2} />,
      label: t.contacts.linkedin,
      value: "LinkedIn",
      href: siteConfig.linkedin,
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" strokeWidth={2} />,
      label: t.contacts.cv,
      value: "CV.pdf",
      href: siteConfig.cvUrl,
    },
  ];

  return (
    <section id="contacts" className="py-20 sm:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          {t.contacts.title}
        </h2>

        {/* Contact Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {contactItems.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
          <MapPin className="w-6 h-6" strokeWidth={2} />
          <span className="text-sm">{siteConfig.location}</span>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
        </footer>
      </div>
    </section>
  );
}
