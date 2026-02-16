
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Target, ShieldCheck, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedAboutHero from "@/components/AnimatedAboutHero";
import { stats } from "@/data/stats";

const values = [
    {
        icon: Target,
        title: "Strategy Before Design",
        description: "Strong ideas come from understanding and insight through thorough brand strategy Nepal and research.",
    },
    {
        icon: Lightbulb,
        title: "Stories with Purpose",
        description: "Storytelling should inform, inspire, and create meaning, specially in documentary filmmaking Nepal.",
    },
    {
        icon: Zap,
        title: "Clarity & Consistency",
        description: "Brands growth encourages trust when communication is clear, coherent, and aligned with digital strategy Nepal.",
    },
    {
        icon: ShieldCheck,
        title: "Responsible Creativity",
        description: "Creativity should respect people, context, and culture, maintaining professional video production Nepal standards.",
    },
];

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-sans">
            <Helmet>
                <title>About Digambar Media | Creative Agency Nepal & Marketing Kathmandu</title>
                <meta name="description" content="Learn about Digambar Media, a premier creative agency Nepal and marketing agency Kathmandu specializing in strategic branding and digital marketing Nepal." />
                <meta name="keywords" content="creative agency nepal, marketing agency kathmandu, nepal creative agency, professional video production nepal, marketing and branding nepal, digital marketing services nepal" />
                <meta property="og:title" content="About Digambar Media | Creative Agency Nepal & Marketing Kathmandu" />
                <meta property="og:description" content="Learn about Digambar Media, a strategic branding and digital marketing agency in Kathmandu specializing in impact-driven storytelling." />
            </Helmet>

            <Navigation />

            <main>
                {/* HERO SECTION */}
                <section className="relative min-h-[85vh] flex flex-col justify-center px-6 lg:px-12 pt-24 pb-20 overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute top-[-20%] right-[-20%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[150px] -z-10" />
                    <div className="absolute bottom-[-20%] left-[-20%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] -z-10" />

                    <div className="container mx-auto relative z-10">
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-display tracking-tight mb-8 leading-[0.85]">
                                    About <br />
                                    <span className="text-primary tracking-tight">Digambar</span>
                                </h1>
                                <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                                    A strategy-led Creative Agency Nepal and marketing agency Kathmandu, helping organizations communicate with <span className="text-foreground font-medium underline decoration-primary/30 decoration-4 underline-offset-4">purpose</span> and <span className="text-foreground font-medium underline decoration-primary/30 decoration-4 underline-offset-4">clarity</span>.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="hidden lg:block"
                            >
                                <AnimatedAboutHero />
                            </motion.div>
                        </div>
                    </div>

                    {/* Quick Stats Banner */}
                    <div className="container mx-auto mt-24">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="relative group p-6 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm"
                                >
                                    <div className="text-3xl md:text-5xl font-bold font-display text-primary mb-2 group-hover:translate-x-2 transition-transform">{stat.value}</div>
                                    <div className="text-xs uppercase font-bold tracking-widest text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO WE ARE */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 bg-secondary/20">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-12 gap-16 items-start">
                            {/* Image on the left (spanning 4 columns) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="lg:col-span-4 relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group"
                            >
                                <img
                                    src="/team-digambar.png"
                                    alt="Digambar Media Team"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                            </motion.div>

                            {/* Title and Content on the right (spanning 8 columns) */}
                            <div className="lg:col-span-8">
                                <motion.h2
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl md:text-5xl font-bold font-display mb-12"
                                >
                                    Who We Are
                                </motion.h2>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-6 text-xl leading-relaxed text-foreground/80 font-light"
                                >
                                    <p>
                                        Digambar Media is a strategic branding and digital marketing agency in Nepal working at the intersection of strategy, creativity, and storytelling. As a Nepal creative agency, we collaborate with organizations, initiatives, and brands to shape meaningful communication across digital platforms in Kathmandu and beyond.
                                    </p>
                                    <p>
                                        Our work as a full-service marketing agency Nepal spans brand strategy and identity, social media marketing Kathmandu, creative campaigns, professional video production Nepal, and documentary storytelling—designed to connect with people and create lasting impact.
                                    </p>
                                    <p>
                                        We pride ourselves on being Nepali video makers who understand the local context while delivering world-class video branding Nepal and content creation in Nepal. Whether you need branding services Kathmandu or digital marketing Kathmandu, our team of experts is dedicated to your success.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* WHY WE EXIST */}
                <section className="px-6 lg:px-12 py-20 lg:py-32">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold font-display mb-8"
                        >
                            Why We Exist
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl leading-relaxed text-muted-foreground space-y-8"
                        >
                            <p>
                                In a world filled with noise, we believe clarity matters. Digambar Media exists to help brands find their voice, tell their stories responsibly, and communicate with intention. We provide professional branding services in Nepal that value insight over assumption, purpose over trends, and impact over volume.
                            </p>
                            <p className="text-lg md:text-xl text-foreground/70">
                                As a leading marketing agency Kathmandu, we saw a need for a more thoughtful approach to digital marketing services Nepal. Our existence is defined by our commitment to helping local and international brands navigate the complex Nepal marketing and branding landscape with strategy at the core.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* WHAT WE BELIEVE IN (VALUES) */}
                <section className="px-6 lg:px-12 py-24 lg:py-48 bg-foreground text-background relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px]" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[150px]" />
                    </div>

                    <div className="container mx-auto relative z-10">
                        <div className="max-w-3xl mb-16 lg:mb-24">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-primary font-bold tracking-widest uppercase mb-6 block"
                            >
                                Core Foundations
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-bold font-display mb-8"
                            >
                                What We Believe In
                            </motion.h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -12, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                                    className="p-10 border border-white/5 rounded-[2rem] bg-white/5 transition-all duration-500 group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <v.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">{v.title}</h3>
                                    <p className="text-white/50 leading-relaxed text-lg group-hover:text-white/80 transition-colors">{v.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR WAY OF WORKING */}
                <section className="px-6 lg:px-12 py-20 lg:py-48 relative overflow-hidden">
                    <div className="container mx-auto max-w-4xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold font-display mb-8"
                        >
                            Our Way of Working
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <p className="text-xl leading-relaxed text-muted-foreground">
                                Our process is simple but intentional. We listen, research, and think deeply before creating. Whether developing a brand strategy Nepal, planning a social media marketing Nepal strategy, producing a high-quality video marketing Nepal asset, or crafting a documentary, our approach ensures every output serves a clear purpose.
                            </p>
                            <p className="text-lg text-foreground/70 leading-relaxed">
                                We believe in the power of digital strategy Nepal to transform businesses. By combining marketing and video production Nepal under one roof, we provide seamless execution for organizations in Kathmandu. Our focus on content creation Nepal ensures your brand message is consistent across all channels.
                            </p>
                            <Link to="/our-approach" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline group">
                                Discover Our Strategy in Nepal
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* WHAT MAKES US DIFFERENT */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 bg-secondary/10">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">What Makes Us Different</h2>
                                <div className="space-y-6 text-xl leading-relaxed text-foreground/80">
                                    <p>
                                        We are not just a service provider—we are a thinking partner. Our work is rooted in strategy, guided by creativity, and strengthened by storytelling. By combining branding services Nepal with digital marketing Kathmandu expertise and visual narratives, we help brands communicate with depth and authenticity.
                                    </p>
                                    <p>
                                        Our cross-category expertise in marketing and video production Nepal allows us to see connections others miss. We aren't just one of many marketing agencies Kathmandu; we are a dedicated Nepal creative agency focused on long-term impact and clear results.
                                    </p>
                                    <p>
                                        From NGO video production Nepal to hospitality marketing Nepal, we tailor our approach to your industry's specific needs, ensuring your brand stands out in the Kathmandu digital landscape.
                                    </p>
                                </div>
                            </motion.div>
                            <div className="order-1 lg:order-2 flex justify-center">
                                <div className="relative w-64 h-64 md:w-96 md:h-96">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                                    />
                                    <div className="absolute inset-8 border border-primary/10 rounded-full flex items-center justify-center p-12 text-center text-primary font-display font-bold text-2xl">
                                        Creative <br /> Agency <br /> Nepal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COLLABORATION & CLIENTS */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 bg-background">
                    <div className="container mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-display mb-8"
                        >
                            Who We Work With
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto"
                        >
                            We work with organizations, initiatives, and brands that value thoughtful communication and meaningful engagement. Our collaborations span development, social impact, creative industries, and purpose-driven enterprises in Nepal.
                        </motion.p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                "Hospitality & Tourism",
                                "Real Estate Nepal",
                                "Non-Profit & NGO",
                                "Educational Institutions",
                                "Fashion & Retail",
                                "Tech Startups Nepal",
                                "Finance & Banking",
                                "Cultural Initiatives"
                            ].map((item, i) => (
                                <div key={i} className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                                    <span className="text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="px-6 lg:px-12 py-32 bg-primary">
                    <div className="container mx-auto text-center max-w-4xl text-white">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold font-display mb-8"
                        >
                            Let’s Build Something Meaningful in Nepal
                        </motion.h2>
                        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
                            If you’re looking for a best digital marketing agency in Kathmandu and a storytelling partner that values strategy, we’d love to work together.
                        </p>
                        <Link to="/contact" className="inline-flex items-center px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                            Get in Touch Today
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
