import { motion } from "framer-motion";
import { Lightbulb, Share2, Zap, Video, Film } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy & Identity",
    description: "We craft distinctive brand identities that resonate with your audience and stand the test of time.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social presence that builds communities, drives engagement, and accelerates growth.",
  },
  {
    icon: Zap,
    title: "Creative Campaigns",
    description: "Bold, innovative campaigns that cut through the noise and create meaningful connections.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "From short-form content to brand films, we produce videos that captivate and convert.",
  },
  {
    icon: Film,
    title: "Documentaries & Storytelling",
    description: "Visual narratives that inspire, inform, and leave lasting emotional impact.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
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
          <p className="text-lg text-muted-foreground">
            We combine strategy, creativity, and production expertise to help brands tell their stories with impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
