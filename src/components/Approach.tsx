import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Research & Insight",
    description: "Deep dive into your brand, market, and audience to uncover strategic opportunities.",
  },
  {
    number: "2",
    title: "Strategy & Planning",
    description: "Develop a clear roadmap that aligns with your goals and maximizes impact.",
  },
  {
    number: "3",
    title: "Creative Development",
    description: "Craft compelling concepts and visuals that bring your strategy to life.",
  },
  {
    number: "4",
    title: "Production & Execution",
    description: "Execute with precision, delivering high-quality assets across all touchpoints.",
  },
  {
    number: "5",
    title: "Distribution & Impact",
    description: "Launch strategically and measure results to ensure lasting success.",
  },
];

const SketchedCircle = ({ delay = 0 }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 text-primary" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
    <motion.path
      d="M20,50 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0" // Simple circle
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1.1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      style={{ strokeDasharray: "none" }} // Removed dash for bolder look
    />
    <motion.path
      d="M18,48 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0" // Second slightly offset circle for messy look
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 0.9, opacity: 0.8 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, delay: delay + 0.2, ease: "easeOut" }}
      className="text-primary/60"
      strokeWidth="3"
    />
  </svg>
);

const SketchedArrow = ({ className = "" }) => (
  <svg className={`overflow-visible ${className}`} width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="4">
    <motion.path
      d="M5,10 Q30,5 55,10"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      strokeLinecap="round"
    />
    <motion.path
      d="M45,5 L55,10 L48,15"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 1.2 }}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Approach = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-secondary/20 text-foreground overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20 relative"
        >
          {/* Decorative doodle */}
          <motion.svg
            className="absolute -left-12 -top-12 w-24 h-24 text-primary rotate-12"
            viewBox="0 0 100 100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.path
              d="M10,50 Q30,20 50,50 T90,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.svg>

          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block flex items-center gap-2">
            Our Approach
            <motion.div
              className="h-1 bg-primary w-12 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
            />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
            A human process for <span className="relative inline-block">
              real
              <motion.svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <motion.path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
              </motion.svg>
            </span> results.
          </h2>
          <p className="text-lg text-muted-foreground lg:text-xl">
            We don't just follow a template. We follow curiosity, strategy, and human connection to craft work that matters.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {/* Connecting Line across the top (desktop) */}
          {/* Connecting Line across the top (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px -z-0">
            <svg className="w-full h-20 overflow-visible" preserveAspectRatio="none">
              <motion.path
                d="M0,10 Q200,30 400,10 T800,10" // Wavy loose line
                fill="none"
                stroke="hsl(var(--primary))"
                strokeOpacity="1"
                strokeWidth="4"
                strokeDasharray="12 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "linear" }}
              />
            </svg>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                <SketchedCircle delay={index * 0.2} />
                <span className="text-4xl font-bold text-foreground font-display z-10 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 relative inline-block">
                {step.title}
                {/* Underline appearing on interactions */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out" />
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                {step.description}
              </p>

              {/* Mobile Arrows */}
              {index < steps.length - 1 && (
                <div className="lg:hidden my-4 text-primary rotate-90">
                  <SketchedArrow />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
