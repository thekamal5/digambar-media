import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Hero Banner Image Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/hero-banner.png"
          alt="Digambar Media Hero Banner"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />

        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background/90" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold tracking-[0.2em] text-primary bg-primary/10 rounded-full border border-primary/20 uppercase">
              Strategic Branding & Visual Storytelling
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-[0.9] tracking-tight text-foreground mb-12"
          >
            We Build Brands That <br />
            <span className="text-primary">Speak,</span> Move, and <span className="text-primary">Matter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            As a leading marketing agency Kathmandu, Digambar Media provides comprehensive digital marketing services Nepal, branding services Nepal, and video production services Nepal. We help organizations communicate with clarity, creativity, and purpose through digital strategy Nepal and content creation in Nepal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#work"
              className="group flex items-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-primary-foreground rounded-full hover:bg-primary-light transition-all duration-300"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground border-2 border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              Let's Collaborate
            </Link>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
