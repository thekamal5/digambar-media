
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, Minus } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { useRef } from "react";

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans">
            <Helmet>
                <title>{service.title} | Digambar Media - Creative Agency</title>
                <meta name="description" content={service.hero.subtext} />
                <meta property="og:title" content={`${service.title} | Digambar Media`} />
                <meta property="og:description" content={service.hero.subtext} />
                <meta name="keywords" content={`branding, ${service.title.toLowerCase()}, creative agency, digital marketing, video production`} />
            </Helmet>

            <Navigation />

            <main className="relative">
                {/* 1. HERO SECTION - High Impact */}
                <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 pt-32 overflow-hidden">
                    {/* Abstract Background Elements */}
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 -z-10" />

                    <div className="container mx-auto relative z-10">
                        <Link to="/services" className="inline-flex items-center text-sm font-semibold tracking-wider text-muted-foreground hover:text-primary mb-12 transition-colors uppercase group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to All Services
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold font-display tracking-tighter leading-[0.9] mb-8 text-foreground">
                                {service.hero.title}
                                <span className="text-primary block text-4xl md:text-6xl lg:text-7xl mt-2 tracking-normal font-serif italic opacity-80">
                                    Reimagine Possible.
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-2xl border-l-2 border-primary/30 pl-8 mt-12"
                        >
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                                {service.hero.subtext}
                            </p>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/50"
                    >
                        Scroll to Explore
                        <div className="w-12 h-px bg-current" />
                    </motion.div>
                </section>

                {/* 2. OVERVIEW - Sticky Layout */}
                <section className="px-6 lg:px-12 py-24 bg-card border-y border-border/50 relative overflow-hidden">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                style={{ y }}
                                className="relative z-10"
                            >
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">
                                    The Essence
                                </span>
                                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                                    Why it matters <br className="hidden lg:block" />
                                    <span className="text-muted-foreground">for your brand.</span>
                                </h2>
                                <div className="h-2 w-24 bg-primary rounded-full mb-8" />
                            </motion.div>

                            <div className="prose prose-lg prose-invert text-foreground/80 leading-loose text-lg md:text-xl">
                                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:leading-[0.8]">
                                    {service.whatIs}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CAPABILITIES - Bento/Grid Style */}
                <section className="px-6 lg:px-12 py-32 bg-background">
                    <div className="container mx-auto">
                        <div className="mb-20 max-w-3xl">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                                Capabilities
                            </span>
                            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
                                What We Deliver
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.whatWeDo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group p-8 rounded-[2rem] bg-secondary/30 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-500 min-h-[240px] flex flex-col justify-between cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">
                                        {item}
                                    </h3>
                                    <div className="w-full h-px bg-border group-hover:bg-primary/30 transition-colors mt-6" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. PROCESS - Dark Mode Contrast */}
                <section className="px-6 lg:px-12 py-32 bg-foreground text-background overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

                    <div className="container mx-auto relative z-10">
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-24 text-center">
                            Our Process
                        </h2>

                        <div className="relative">
                            {/* Desktop Connection Line */}
                            <div className="hidden lg:block absolute top-[2rem] left-0 w-full h-[2px] bg-white/20">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                            </div>

                            <div className="grid md:grid-cols-5 gap-12 text-center">
                                {service.howWeWork.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: index * 0.2 }}
                                        className="relative group"
                                    >
                                        <div className="w-16 h-16 mx-auto bg-background text-foreground rounded-full flex items-center justify-center font-bold text-lg mb-8 relative z-10 group-hover:scale-110 transition-transform border-[4px] border-foreground">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {step}
                                        </h3>
                                        <div className="w-1 h-8 bg-white/10 mx-auto mt-4 group-hover:h-12 group-hover:bg-primary transition-all duration-300" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. IMPACT & CTA - Large Scale */}
                <section className="px-6 lg:px-12 py-32 lg:py-48">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-24 items-end">
                            <div>
                                <h2 className="text-4xl font-bold font-display mb-12 uppercase tracking-wide">
                                    The Impact
                                </h2>
                                <div className="space-y-8">
                                    {service.outcomes.map((outcome, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-4 border-b border-border pb-8 group"
                                        >
                                            <Minus className="w-6 h-6 text-primary mt-1 group-hover:w-12 transition-all" />
                                            <span className="text-2xl md:text-3xl font-medium">{outcome}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-primary/5 rounded-[3rem] p-12 lg:p-16 text-center lg:text-left relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-700 origin-center blur-3xl opacity-50" />

                                <h3 className="text-3xl md:text-5xl font-bold font-display mb-8 relative z-10">
                                    {service.cta}
                                </h3>
                                <Link
                                    to="/#contact"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary-dark hover:gap-6 transition-all relative z-10"
                                >
                                    Start Project
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. EXPLORE MORE - Horizontal Scroll/Grid */}
                <section className="border-t border-border overflow-hidden">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                        {services
                            .filter(s => s.slug !== slug)
                            .slice(0, 3)
                            .map((s, i) => (
                                <Link
                                    key={s.id}
                                    to={`/services/${s.slug}`}
                                    className="group relative p-12 md:p-16 hover:bg-muted/30 transition-colors block h-full flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
                                            Next Service
                                        </span>
                                        <h3 className="text-3xl font-bold font-display mb-4 group-hover:text-primary transition-colors">
                                            {s.title}
                                        </h3>
                                    </div>
                                    <div className="mt-12 flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                                            <s.icon className="w-5 h-5" />
                                        </div>
                                        <ArrowRight className="w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all font-bold text-primary" />
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
