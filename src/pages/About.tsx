
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Target, ShieldCheck, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const values = [
    {
        icon: Target,
        title: "Strategy Before Design",
        description: "Strong ideas come from understanding and insight.",
    },
    {
        icon: Lightbulb,
        title: "Stories with Purpose",
        description: "Storytelling should inform, inspire, and create meaning.",
    },
    {
        icon: Zap,
        title: "Clarity & Consistency",
        description: "Brands grow encourages trust when communication is clear and coherent.",
    },
    {
        icon: ShieldCheck,
        title: "Responsible Creativity",
        description: "Creativity should respect people, context, and culture.",
    },
];

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-sans">
            <Helmet>
                <title>About Digambar Media | Strategic Branding & Digital Marketing Nepal</title>
                <meta name="description" content="Learn about Digambar Media, a strategic branding and digital marketing agency in Kathmandu. We specialize in creative storytelling, video production, and SEO services in Nepal." />
                <meta name="keywords" content="about branding agency, digital marketing agency nepal, creative storytelling agency kathmandu, video production company nepal, seo experts nepal, branding services nepal, marketing agency kathmandu" />
                <meta property="og:title" content="About Digambar Media | Strategic Branding & Digital Marketing Nepal" />
                <meta property="og:description" content="Learn about Digambar Media, a strategic branding and digital marketing agency in Kathmandu specializing in impact-driven storytelling." />
            </Helmet>

            <Navigation />

            <main>
                {/* HERO SECTION */}
                <section className="relative min-h-[70vh] flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -z-10" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[100px] -z-10" />

                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight mb-8">
                                About <br />
                                <span className="text-primary">Digambar Media</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl">
                                We are a strategic branding and storytelling agency helping organizations communicate with clarity, creativity, and purpose.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* WHO WE ARE */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 bg-secondary/20">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold font-display"
                            >
                                Who We Are
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6 text-xl leading-relaxed text-foreground/80"
                            >
                                <p>
                                    Digambar Media is a **strategic branding and digital marketing agency in Nepal** working at the intersection of strategy, creativity, and storytelling. We collaborate with organizations, initiatives, and brands to shape meaningful communication across digital platforms in Kathmandu and beyond.
                                </p>
                                <p>
                                    As a full-service marketing agency in Nepal, our work spans brand strategy and identity, social media marketing Kathmandu, creative campaigns, video production services Nepal, and documentary storytelling—designed to connect with people and create lasting impact.
                                </p>
                            </motion.div>
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
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl leading-relaxed text-muted-foreground"
                        >
                            In a world filled with noise, we believe clarity matters. Digambar Media exists to help brands find their voice, tell their stories responsibly, and communicate with intention. We value insight over assumption, purpose over trends, and impact over volume.
                        </motion.p>
                    </div>
                </section>

                {/* WHAT WE BELIEVE IN (VALUES) */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 bg-foreground text-background">
                    <div className="container mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold font-display mb-16 text-center"
                        >
                            What We Believe In
                        </motion.h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <v.icon className="w-10 h-10 text-primary mb-6" />
                                    <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                                    <p className="text-white/60 leading-relaxed">{v.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR WAY OF WORKING */}
                <section className="px-6 lg:px-12 py-20 lg:py-48 relative overflow-hidden">
                    {/* Animated Lines/Shapes could go here */}
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
                                Our process is simple but intentional. We listen, research, and think deeply before creating. Whether developing a brand identity, planning a social media strategy, producing a video, or crafting a documentary, our approach ensures every output serves a clear purpose.
                            </p>
                            <Link to="/our-approach" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline group">
                                Discover Our Full Approach
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
                                <p className="text-xl leading-relaxed text-foreground/80">
                                    We are not just a service provider—we are a thinking partner. Our work is rooted in strategy, guided by creativity, and strengthened by storytelling. By combining **branding services Nepal** with digital marketing expertise and visual narratives, we help brands communicate with depth and authenticity in the competitive Kathmandu market.
                                </p>
                            </motion.div>
                            <div className="order-1 lg:order-2 flex justify-center">
                                <div className="relative w-64 h-64 md:w-96 md:h-96">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                                    />
                                    <div className="absolute inset-8 border border-primary/10 rounded-full flex items-center justify-center p-12 text-center text-primary font-display font-bold text-2xl">
                                        Strategic <br /> Storytelling
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
                            We work with organizations, initiatives, and brands that value thoughtful communication and meaningful engagement. Our collaborations span development, social impact, creative industries, and purpose-driven enterprises.
                        </motion.p>

                        {/* Logo Grid/Text-based List */}
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            {["Development", "Social Impact", "Creative Industries", "Purpose-Driven Enterprises"].map((item, i) => (
                                <span key={i} className="text-2xl md:text-3xl font-display font-medium border-b-2 border-primary/20 pb-2">{item}</span>
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
                            Let’s Build Something Meaningful
                        </motion.h2>
                        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
                            If you’re looking for a branding and storytelling partner that values strategy, creativity, and impact, we’d love to work together.
                        </p>
                        <Link to="/#contact" className="inline-flex items-center px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                            Get in Touch
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
