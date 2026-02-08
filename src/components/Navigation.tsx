import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/our-approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
        : "py-6 bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-[60]">
            <img
              src="/logo.png"
              alt="Digambar Media"
              className={`h-16 lg:h-20 w-auto object-contain transition-all duration-500 ${isScrolled ? "scale-90" : "scale-100"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="bg-secondary/50 backdrop-blur-md border border-border/40 rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href === "/#work" && location.pathname === "/" && location.hash === "#work");
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="ml-4 group flex items-center gap-2 px-6 py-3 text-sm font-bold bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
            >
              Start a Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-full transition-colors relative z-[60] ${isMobileMenuOpen ? "bg-primary text-white" : "bg-secondary text-foreground"
              }`}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 md:hidden bg-background flex flex-col pt-32 pb-12 px-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold font-display hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    {link.label}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 p-5 text-lg font-bold bg-primary text-primary-foreground rounded-2xl shadow-xl shadow-primary/20"
              >
                Start a Project
                <ArrowRight size={20} />
              </Link>
              <div className="mt-8 pt-8 border-t border-border flex justify-between text-sm text-muted-foreground">
                <span>© 2026 Digambar Media</span>
                <span>Kathmandu, Nepal</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
