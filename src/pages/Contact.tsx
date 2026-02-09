
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import AnimatedContactGraphic from "@/components/AnimatedContactGraphic";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-sans">
            <Helmet>
                <title>Contact Us | Digambar Media Marketing Agency Kathmandu</title>
                <meta name="description" content="Get in touch with Digambar Media, the best digital marketing agency in Kathmandu. Let's discuss your branding, digital marketing, or video production project in Nepal." />
            </Helmet>

            <Navigation />

            <main className="pt-24 lg:pt-32">
                {/* HERO SECTION */}
                <section className="px-6 lg:px-12 py-12 lg:py-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-[1fr,1fr] gap-12 items-center">
                            <div className="max-w-4xl">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="inline-block text-sm font-bold tracking-widest text-primary uppercase mb-6"
                                >
                                    Contact Us
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    className="text-6xl md:text-7xl lg:text-9xl font-bold font-display tracking-tight leading-[0.9] mb-8"
                                >
                                    Let’s start <br />
                                    <span className="text-primary italic">something.</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                                >
                                    Whether you have a specific project in mind or just want to say hello, we’re all ears. Let’s collaborate to build something that truly matters.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="hidden lg:block relative"
                            >
                                <AnimatedContactGraphic />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* MAIN CONTENT */}
                <div className="bg-secondary/10">
                    <ContactSection />
                </div>

                {/* ADDITIONAL INFO / FAQ / MAP AREA */}
                <section className="px-6 lg:px-12 py-20 lg:py-32">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-3 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-bold font-display">Visit Us</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our creative studio is located in the heart of Lokanthali. Feel free to drop by for a cup of coffee and a conversation.
                                </p>
                                <div className="flex items-center gap-2 text-primary font-bold group cursor-pointer">
                                    View on Google Maps <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-bold font-display">New Business</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    For project inquiries, partnerships, or RFP invitations, please email us directly or fill the form.
                                </p>
                                <a href="mailto:info.digambar@gmail.com" className="block text-xl font-medium hover:text-primary transition-colors">
                                    info.digambar@gmail.com
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-bold font-display">Careers</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We’re always looking for talented individuals to join our growing team. Send your portfolio and resume.
                                </p>
                                <a href="mailto:info.digambar@gmail.com" className="block text-xl font-medium hover:text-primary transition-colors">
                                    info.digambar@gmail.com
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
