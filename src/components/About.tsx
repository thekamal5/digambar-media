import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We are storytellers, strategists, and makers
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Digambar Media is a strategic branding and visual storytelling agency. We partner with ambitious brands to create meaningful connections through compelling narratives and impactful design.
              </p>
              <p className="leading-relaxed">
                We believe in the power of stories to move people, shift perspectives, and drive action. Our approach combines strategic thinking with creative excellence, delivering work that's not just beautiful—but effective.
              </p>
              <p className="leading-relaxed">
                From brand strategy to documentary filmmaking, we bring a holistic perspective to every project, ensuring your message resonates across all touchpoints.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <span className="text-3xl md:text-4xl font-bold text-primary">50+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-primary">8</span>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-primary">30+</span>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Digambar Media team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
