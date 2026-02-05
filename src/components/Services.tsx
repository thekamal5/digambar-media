import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, Share2, Lightbulb, Video, Film, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Brand Strategy & Identity",
    slug: "brand-strategy-identity",
    description: "We craft distinctive brand identities that resonate with your audience and stand the test of time.",
    gradient: "from-amber-400 to-orange-500",
    shadowColor: "shadow-amber-500/30",
    delay: 0,
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Strategic social presence that builds communities, drives engagement, and accelerates growth.",
    gradient: "from-sky-400 to-blue-500",
    shadowColor: "shadow-sky-500/30",
    delay: 0.1,
  },
  {
    icon: Lightbulb,
    title: "Creative Campaigns",
    slug: "creative-campaigns",
    description: "Bold, innovative campaigns that cut through the noise and create meaningful connections.",
    gradient: "from-violet-400 to-purple-500",
    shadowColor: "shadow-violet-500/30",
    delay: 0.2,
  },
  {
    icon: Video,
    title: "Video Production",
    slug: "video-production",
    description: "From short-form content to brand films, we produce videos that captivate and convert.",
    gradient: "from-rose-400 to-pink-500",
    shadowColor: "shadow-rose-500/30",
    delay: 0.3,
  },
  {
    icon: Film,
    title: "Documentaries & Storytelling",
    slug: "documentaries-storytelling",
    description: "Visual narratives that inspire, inform, and leave lasting emotional impact.",
    gradient: "from-emerald-400 to-teal-500",
    shadowColor: "shadow-emerald-500/30",
    delay: 0.4,
  },
];

const FloatingParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/40"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      x: [0, x],
      y: [0, y],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />
);

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Strategic services for brands that aim higher
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We combine strategy, creativity, and production expertise to help brands tell their stories with impact.
          </p>
          <Link to="/services" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
            View All Services <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={service.title} to={`/services/${service.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: service.delay }}
                className="group relative p-8 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 h-full"
              >
                {/* Animated icon container */}
                <div className="relative w-16 h-16 mb-6">
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 blur-xl group-hover:opacity-60 transition-opacity duration-500`}
                  />

                  {/* Rotating ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-dashed opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    style={{ borderColor: 'currentColor' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Icon background with gradient */}
                  <motion.div
                    className={`relative w-full h-full flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg ${service.shadowColor}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FloatingParticle delay={0} x={-15} y={-20} />
                      <FloatingParticle delay={0.2} x={20} y={-15} />
                      <FloatingParticle delay={0.4} x={15} y={20} />
                      <FloatingParticle delay={0.6} x={-20} y={15} />
                    </div>

                    {/* Icon with pulse animation */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <service.icon className="w-7 h-7 text-white drop-shadow-md" />
                    </motion.div>
                  </motion.div>

                  {/* Orbiting dot */}
                  <motion.div
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100`}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 -28px',
                      marginLeft: '-4px',
                      marginTop: '-4px'
                    }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-bl-[60px] rounded-tr-2xl transition-opacity duration-500`} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
