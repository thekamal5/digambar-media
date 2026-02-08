import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Elevate Wellness",
    category: "Brand Identity",
    description: "Complete brand transformation for a premium wellness startup",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    title: "Urban Threads",
    category: "Social Campaign",
    description: "Viral social media campaign reaching 2M+ organic impressions",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    title: "Horizon Films",
    category: "Documentary",
    description: "Award-winning documentary on sustainable architecture",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  },
  {
    title: "Nova Tech",
    category: "Brand Film",
    description: "Brand film showcasing innovation in renewable energy",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Stories that inspire action
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium text-primary-foreground bg-primary px-3 py-1.5 rounded-full">
                    View Case Study
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium text-primary">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
