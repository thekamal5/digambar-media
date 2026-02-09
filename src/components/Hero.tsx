import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedHomeHeroBackground from "./AnimatedHomeHeroBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatedHomeHeroBackground />
        {/* Animated Overlay Blobs for Depth */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply opacity-50 will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/40 rounded-full blur-[100px] mix-blend-multiply opacity-40 will-change-transform"
        />

        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-5 md:px-12 pt-28 md:pt-32 pb-16 md:pb-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2 text-[10px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] text-primary bg-primary/5 rounded-full border border-primary/20 uppercase backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Strategic Branding & Visual Storytelling
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-foreground mb-8"
          >
            We Build Brands <br className="hidden lg:block" /> That <span className="text-primary italic font-serif opacity-90">Speak,</span> <br className="lg:hidden" /> Move, & <span className="text-primary tracking-tighter">Matter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A premier marketing agency in Nepal, helping organizations communicate with clarity, creativity, and purpose through digital strategy and high-impact content.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6"
          >
            <Link
              to="/services"
              className="group flex items-center gap-3 px-8 py-4 text-base lg:text-lg font-bold bg-primary text-primary-foreground rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-2xl shadow-primary/30 hover:-translate-y-1 active:scale-95"
            >
              Our Expertise
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 text-base lg:text-lg font-bold text-foreground bg-secondary/50 backdrop-blur-md border border-border/50 rounded-2xl hover:bg-secondary transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              Let's Collaborate
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Play size={14} className="text-primary fill-primary ml-0.5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-t from-primary to-transparent"
      />
    </section>
  );
};

export default Hero;
