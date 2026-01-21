import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Artistic header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
            <div className="lg:w-1/2">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block"
              >
                About Us
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]"
              >
                We are{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">storytellers</span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <motion.path
                      d="M2 8 Q50 2 100 8 Q150 14 198 6"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
                ,<br />
                strategists &{" "}
                <span className="text-primary">makers</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2 text-lg text-muted-foreground lg:text-xl lg:leading-relaxed"
            >
              We believe in the power of stories to move people, shift perspectives, and drive action.
            </motion.p>
          </div>
        </motion.div>

        {/* Creative grid layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative aspect-[4/3] lg:aspect-[16/12] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Digambar Media team collaborating"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              
              {/* Floating quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 lg:right-auto lg:max-w-sm"
              >
                <p className="text-white text-lg lg:text-xl font-medium leading-relaxed">
                  "Every brand has a story worth telling. We help you tell it beautifully."
                </p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full -z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right column with stacked content */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Philosophy card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-3xl shadow-card"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-primary-foreground text-xl font-bold"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ✦
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground pt-2">Our Philosophy</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                From brand strategy to documentary filmmaking, we bring a holistic perspective to every project, ensuring your message resonates across all touchpoints.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "50+", label: "Projects", color: "from-amber-400 to-orange-500" },
                { value: "8", label: "Years", color: "from-sky-400 to-blue-500" },
                { value: "30+", label: "Clients", color: "from-emerald-400 to-teal-500" },
                { value: "∞", label: "Ideas", color: "from-violet-400 to-purple-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative bg-card p-6 rounded-2xl shadow-card group overflow-hidden"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  <span className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Creative process snippet */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative bg-foreground text-primary-foreground p-8 rounded-3xl overflow-hidden"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 border border-primary-foreground rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32 border border-primary-foreground rounded-full"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              <div className="relative">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  What Drives Us
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  Digambar Media partners with ambitious brands to create meaningful connections through compelling narratives and impactful design.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 overflow-hidden"
        >
          <motion.p
            animate={{ x: [0, -200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[120px] lg:text-[200px] font-bold text-foreground whitespace-nowrap select-none"
          >
            {/* STRATEGY • CREATIVITY • IMPACT • STORIES • */}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
