import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/our-approach" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { icon: Facebook, href: "https://www.facebook.com/digambarmedia", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10 lg:py-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          <div className="max-w-xs">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.png" alt="Digambar Media" className="h-20 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/50 text-xs leading-relaxed">
              Strategic branding and digital storytelling for impact-driven brands.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            {footerLinks.navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-widest text-primary-foreground/30">
            © {new Date().getFullYear()} Digambar Media. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {footerLinks.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/40 hover:text-primary transition-colors duration-200"
                aria-label={item.label}
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] uppercase tracking-widest text-primary-foreground/30 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-primary-foreground/30 hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
