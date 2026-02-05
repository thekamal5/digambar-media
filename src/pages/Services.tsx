
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { useRef } from "react";

const Services = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans">
            <Helmet>
                <title>Our Services | Digambar Media - Strategic Branding & Digital Marketing</title>
                <meta name="description" content="Comprehensive creative services including Brand Strategy, Social Media Marketing, Campaign Creation, and Video Production. We build brands that resonate." />
                <meta name="keywords" content="branding services, digital marketing agency, video production, social media strategy, creative campaigns" />
                <meta property="og:title" content="Our Services | Digambar Media" />
                <meta property="og:description" content="Comprehensive creative services designed to create clarity, connection, and impact." />
            </Helmet>

            <Navigation />

            <main>
                {/* 1. HERO SECTION - Massive & Bold */}
                <motion.section
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="relative min-h-[80vh] flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20 overflow-hidden"
                >
                    {/* Background Gradients */}
                    <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[150px] -z-10" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-secondary/30 rounded-full blur-[100px] -z-10" />

                    <div className="container mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-primary uppercase mb-8 border border-primary/20 px-4 py-2 rounded-full bg-primary/5"
                        >
                            <Sparkles className="w-4 h-4" />
                            Our Expertise
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter leading-[0.9] mb-12"
                        >
                            We build brands <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                                that resonate.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xl md:text-3xl text-muted-foreground max-w-4xl leading-relaxed"
                        >
                            Strategic branding, social media marketing, creative campaigns, and storytelling—designed to create clarity, connection, and impact.
                        </motion.p>
                    </div>
                </motion.section>

                {/* 2. SERVICES LIST - Interactive Cards */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 relative z-10 bg-background/50 backdrop-blur-sm">
                    <div className="container mx-auto">
                        <div className="grid gap-8">
                            {services.map((service, index) => (
                                <Link
                                    key={service.id}
                                    to={`/services/${service.slug}`}
                                    className="group relative block"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="relative bg-card hover:bg-muted/40 border border-border/50 rounded-[2.5rem] p-8 md:p-16 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 overflow-hidden"
                                    >
                                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                                            <div>
                                                <div className="flex items-center gap-6 mb-8">
                                                    <span className="text-6xl font-display font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                                                        0{index + 1}
                                                    </span>
                                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                        <service.icon className="w-8 h-8" />
                                                    </div>
                                                </div>

                                                <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 group-hover:text-primary transition-colors">
                                                    {service.title}
                                                </h2>
                                                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl group-hover:text-foreground transition-colors">
                                                    {service.shortDescription}
                                                </p>

                                                <div className="mt-12 inline-flex items-center text-lg font-bold text-primary">
                                                    Explore Service
                                                    <span className="ml-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Abstract Visual per card */}
                                            <div className="hidden lg:flex justify-end items-center">
                                                <div className="relative w-64 h-64 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                                                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <service.icon className="w-32 h-32 text-muted-foreground/10 group-hover:text-primary/10 transition-colors duration-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. APPROACH TEASER - Minimal & Clean */}
                <section className="px-6 lg:px-12 py-32 bg-foreground text-background relative overflow-hidden">
                    {/* Noise Texture */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

                    <div className="container mx-auto relative z-10 text-center">
                        <span className="text-sm font-bold tracking-widest uppercase mb-6 block text-white/50">
                            Our Process
                        </span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-20">
                            Simple steps. <span className="text-primary italic">Complex impact.</span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 relative">
                            {/* Connecting Line */}
                            <div className="hidden md:block absolute top-[20%] left-0 w-full h-px bg-white/10" />

                            {[
                                { title: "Research", step: "01" },
                                { title: "Strategy", step: "02" },
                                { title: "Creation", step: "03" },
                                { title: "Delivery", step: "04" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="relative"
                                >
                                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-8 relative z-10 ring-4 ring-foreground" />
                                    <span className="text-6xl font-bold text-white/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {item.step}
                                    </span>
                                    <h3 className="text-2xl font-bold relative z-10">{item.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. CTA SECTION */}
                <section className="px-6 lg:px-12 py-32 lg:py-48 bg-background">
                    <div className="container mx-auto">
                        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
                            {/* Animated background circles */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-black/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-7xl font-bold font-display text-primary-foreground mb-12">
                                    Ready to start?
                                </h2>
                                <Link to="/#contact" className="inline-flex items-center bg-background text-foreground px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                                    Let's Work Together
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Services;
