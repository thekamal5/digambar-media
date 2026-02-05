import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/our-approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkHref = (href: string) => {
    if (href.startsWith("/")) return href; // Internal page link
    if (location.pathname === "/" && href.startsWith("#")) return href; // Ancestor link on home
    return `/${href}`; // Ancestor link from other pages
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Digambar Media" className="h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={getLinkHref(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href={getLinkHref("#contact")}
              className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary-light transition-colors duration-200"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={getLinkHref(link.href)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <a
                href={getLinkHref("#contact")}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-5 py-3 text-center text-sm font-medium bg-primary text-primary-foreground rounded-full"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
