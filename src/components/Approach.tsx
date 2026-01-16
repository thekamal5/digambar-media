import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Research & Insight",
    description: "Deep dive into your brand, market, and audience to uncover strategic opportunities.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "Develop a clear roadmap that aligns with your goals and maximizes impact.",
  },
  {
    number: "03",
    title: "Creative Development",
    description: "Craft compelling concepts and visuals that bring your strategy to life.",
  },
  {
    number: "04",
    title: "Production & Execution",
    description: "Execute with precision, delivering high-quality assets across all touchpoints.",
  },
  {
    number: "05",
    title: "Distribution & Impact",
    description: "Launch strategically and measure results to ensure lasting success.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A proven process for impactful results
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Every project follows a strategic framework designed to deliver measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <span className="text-5xl font-bold text-primary/20 mb-4 block">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-primary/20 -translate-x-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
