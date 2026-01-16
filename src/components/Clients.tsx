import { motion } from "framer-motion";

const clients = [
  "Innovate Corp",
  "Horizon Labs",
  "Urban Studio",
  "NextGen Media",
  "Bloom Ventures",
  "Apex Industries",
  "Vista Group",
  "Prime Solutions",
];

const Clients = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Brands we've partnered with
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-8 bg-card rounded-xl shadow-card hover:shadow-hover transition-shadow duration-300"
            >
              <span className="text-lg font-semibold text-muted-foreground/70 hover:text-foreground transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
