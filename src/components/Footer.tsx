import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

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
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      {/* Top Bar - Brand Primary Color (Teal) */}
      <div className="bg-primary py-4 lg:py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex flex-wrap justify-center items-center gap-x-6 lg:gap-x-12 gap-y-3">
            {footerLinks.navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white font-medium hover:text-white/80 transition-colors duration-200 text-sm md:text-base uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Bar - Dark Teal Background */}
      <div className="bg-[#123e3e] text-white/80 py-8 lg:py-10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-3 mb-8">
            <p className="text-xs md:text-sm lg:text-base leading-relaxed">
              Copyright © {new Date().getFullYear()} Digambar Media Pvt. Ltd. All Rights Reserved.
              <span className="mx-2 hidden md:inline">•</span>
              <span className="block md:inline">Nepal</span>
            </p>
            <p className="text-[10px] md:text-xs lg:text-sm opacity-60">
              www.digambarmedia.com is Designed, Developed & Managed by Digambar Media Pvt. Ltd.
            </p>
          </div>

          {/* Social Icons - Boxed Style per Image */}
          <div className="flex justify-center items-center gap-3 md:gap-4">
            {footerLinks.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-11 md:h-11 border border-white/20 rounded flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
