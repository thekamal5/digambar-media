import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Brand Strategy", href: "#services" },
    { label: "Social Media", href: "#services" },
    { label: "Video Production", href: "#services" },
    { label: "Documentaries", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/digambarmedia" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-8">
              <img src="/logo.png" alt="Digambar Media" className="h-24 w-auto object-contain brightness-0 invert" />
            </a>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Strategic branding, social media, and visual storytelling for impact-driven brands.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Follow Us</h4>
            <ul className="space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Digambar Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
