import { Mail, Send, Linkedin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  internal?: boolean;
}

function ContactItem({ icon, label, value, href, external = true, internal = false }: ContactItemProps) {
  const className = cn(
    "flex items-center gap-4 p-4 rounded-2xl",
    "bg-card/60 backdrop-blur-sm",
    "hover:bg-accent/50",
    "transition-all duration-300 group",
    "shadow-sm hover:shadow-md"
  );
  const content = (
    <>
      <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
        <p className="text-sm font-medium text-foreground truncate">{value}</p>
      </div>
    </>
  );

  if (internal) {
    return <Link to={href} className={className}>{content}</Link>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

export function Contacts() {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5 text-primary" strokeWidth={2} />,
      label: t.contacts.email,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}?subject=${siteConfig.emailSubject}`,
      external: false,
    },
    {
      icon: <Linkedin className="w-5 h-5 text-primary" strokeWidth={2} />,
      label: t.contacts.linkedin,
      value: "LinkedIn",
      href: siteConfig.linkedin,
    },
    {
      icon: <Send className="w-5 h-5 text-primary" strokeWidth={2} />,
      label: t.contacts.telegram,
      value: siteConfig.telegram.username,
      href: siteConfig.telegram.url,
    },
    {
      icon: <FileText className="w-5 h-5 text-primary" strokeWidth={2} />,
      label: t.contacts.cv,
      value: t.hero.resume,
      href: `/resume/${lang}`,
      external: false,
      internal: true,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactItems.map((item) => (
            <ContactItem key={item.label} {...item} />
          ))}
        </div>

        <footer className="text-center">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
        </footer>
      </div>
    </section>
  );
}
