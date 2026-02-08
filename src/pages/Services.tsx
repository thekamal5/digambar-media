
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
                <title>All Services | Branding, Digital Marketing & Video Production Nepal</title>
                <meta name="description" content="Explore the full-service marketing agency Nepal offerings. From professional video production Nepal to branding services Kathmandu, we build brands that matter." />
                <meta name="keywords" content="digital marketing services nepal, branding services nepal, video production services nepal, marketing agency kathmandu, digital strategy nepal, content creation nepal" />
                <meta property="og:title" content="Our Services | Digambar Media - Marketing & Branding Nepal" />
                <meta property="og:description" content="Comprehensive creative services designed to create clarity, connection, and impact for brands in Nepal." />
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
                            Our Expertise in Nepal
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter leading-[0.9] mb-12"
                        >
                            Impact-Driven <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                                Creative Solutions.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xl md:text-3xl text-muted-foreground max-w-5xl leading-relaxed"
                        >
                            We offer professional branding services Nepal, digital marketing services Nepal, and video production services Nepal—tailored for the unique needs of the Kathmandu market.
                        </motion.p>
                    </div>
                </motion.section>

                {/* 2. INTRO TEXT - Expanded for Word Count */}
                <section className="px-6 lg:px-12 py-20 bg-secondary/5">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8 text-xl text-foreground/80 leading-relaxed"
                        >
                            <h2 className="text-4xl font-bold font-display text-foreground">A Comprehensive Marketing Agency Kathmandu</h2>
                            <p>
                                Digambar Media is recognized as a premier full-service marketing agency Nepal. Our offerings are designed to bridge the gap between creative storytelling and strategic business growth. We understand that in the modern Nepalese business landscape, a siloed approach to marketing doesn't work. That's why we integrate digital strategy Nepal with high-quality content creation in Nepal.
                            </p>
                            <p>
                                Whether you're looking for the best digital marketing agency in Kathmandu to handle your social media or a professional video production company in Nepal for your next corporate documentary, we have the expertise to deliver. Our team of Nepali video makers and digital strategists work in synergy to ensure your brand's voice is heard.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 3. SERVICES LIST - Interactive Cards */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 relative z-10 bg-background/50 backdrop-blur-sm">
                    <div className="container mx-auto">
                        <div className="grid gap-12">
                            {services.map((service, index) => (
                                <Link
                                    key={service.id}
                                    to={`/services/${service.slug}`}
                                    className="group relative block"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                        className="relative bg-card hover:bg-secondary/30 border border-border/50 rounded-[3rem] p-10 md:p-20 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(4,132,132,0.1)] hover:border-primary/30 overflow-hidden"
                                    >
                                        {/* Background Decor */}
                                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none skew-x-12 translate-x-1/2 group-hover:translate-x-[40%] transition-transform duration-1000" />

                                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                                            <div>
                                                <div className="flex items-center gap-8 mb-10">
                                                    <span className="text-7xl md:text-8xl font-display font-bold text-muted-foreground/10 group-hover:text-primary transition-colors duration-500">
                                                        0{index + 1}
                                                    </span>
                                                    <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-12 group-hover:scale-110">
                                                        <service.icon className="w-10 h-10" />
                                                    </div>
                                                </div>

                                                <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 group-hover:translate-x-2 transition-transform duration-500">
                                                    {service.title}
                                                </h2>
                                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl group-hover:text-foreground transition-colors duration-500">
                                                    {service.shortDescription}
                                                </p>

                                                <div className="mt-12 inline-flex items-center gap-4 text-xl font-bold text-primary group/btn">
                                                    <span className="border-b-2 border-primary/30 group-hover/btn:border-primary transition-all">
                                                        View Details
                                                    </span>
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:translate-x-3 transition-transform">
                                                        <ArrowUpRight className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Abstract Visual per card */}
                                            <div className="hidden lg:flex justify-center items-center">
                                                <div className="relative w-80 h-80">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-0 border-[2px] border-dashed border-primary/20 rounded-[4rem]"
                                                    />
                                                    <motion.div
                                                        animate={{ rotate: -360 }}
                                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-8 border border-primary/10 rounded-[3rem]"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <service.icon className="w-32 h-32 text-primary/5 group-hover:text-primary/20 group-hover:scale-125 transition-all duration-700" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. INDUSTRY FOCUS - New Section for SEO and Word Count */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 bg-foreground text-background">
                    <div className="container mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Industry-Specific Solutions</h2>
                            <p className="text-xl text-white/70 max-w-3xl mx-auto">
                                We provide tailored digital marketing services Nepal and video production services Nepal for diverse sectors.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Hospitality Marketing Nepal", desc: "Specialized digital strategies and video content for hotels, resorts, and tourism businesses across Nepal." },
                                { title: "Real Estate Video Production Nepal", desc: "High-end cinematic property tours and branding for real estate developers and agencies in Kathmandu." },
                                { title: "NGO Video Production Nepal", desc: "Impactful documentary-style storytelling for NGOs and non-profits to showcase their work and community impact." },
                                { title: "Tourism Marketing Nepal", desc: "Promoting Nepal's beauty through cinematic videos and targeted digital marketing campaigns globally." },
                                { title: "Startup Branding Nepal", desc: "Helping new businesses in Kathmandu establish a solid foundation through brand strategy and identity design." },
                                { title: "Educational Video Production Nepal", desc: "Creating engaging content for schools, colleges, and training institutions to communicate their vision." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 border border-white/10 rounded-2xl bg-white/5"
                                >
                                    <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. CTA SECTION */}
                <section className="px-6 lg:px-12 py-32 lg:py-48 bg-background">
                    <div className="container mx-auto">
                        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group shadow-2xl">
                            {/* Animated background circles */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-black/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-7xl font-bold font-display text-primary-foreground mb-12">
                                    Looking for Professional Branding Services Nepal?
                                </h2>
                                <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-medium">
                                    Whether you need digital marketing Kathmandu, high-end visuals, or branding services Kathmandu, we are here to help.
                                </p>
                                <Link to="/contact" className="inline-flex items-center bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                                    Let’s Discuss Your Project
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
