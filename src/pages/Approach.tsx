
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useRef } from "react";

const processSteps = [
    {
        number: "01",
        title: "Research & Insight",
        description: "We begin by understanding the brand, audience, context, and challenges. Through **branding research in Nepal** and listening, we uncover insights that shape every strategic decision."
    },
    {
        number: "02",
        title: "Strategy & Direction",
        description: "Based on insights, we develop a clear strategy that defines positioning, messaging, tone, and direction. This **brand strategy foundation** guides social media marketing Nepal, creative campaigns, and content."
    },
    {
        number: "03",
        title: "Creativity & Production",
        description: "We translate strategy into creative outcomes—designing brand identities, crafting campaigns, and implementing a professional **video production workflow in Nepal** that connects emotionally."
    },
    {
        number: "04",
        title: "Delivery & Impact",
        description: "We execute with care and measure impact wherever possible. Our focus is on clarity, consistency, and meaningful engagement for brands in the **Kathmandu market** and beyond."
    }
];

const ApproachPage = () => {
    const processRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: processRef,
        offset: ["start center", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-sans">
            <Helmet>
                <title>Our Approach | Strategic Branding & Digital Marketing Process Nepal</title>
                <meta name="description" content="Discover Digambar Media’s approach to strategic branding and digital marketing in Nepal. Our process blends research, strategy, and creative storytelling in Kathmandu for maximum impact." />
                <meta name="keywords" content="strategic branding process nepal, digital marketing strategy kathmandu, branding agency approach nepal, social media marketing strategy nepal, creative campaign process, video production workflow nepal" />
                <meta property="og:title" content="Our Approach | Strategic Branding & Marketing Process Nepal" />
                <meta property="og:description" content="Discover our strategy-led approach to branding, social media, and video production in Nepal." />
            </Helmet>

            <Navigation />

            <main>
                {/* 1. HERO SECTION */}
                <section className="relative min-h-[70vh] flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20 overflow-hidden">
                    <div className="container mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight mb-8">
                                Our Approach
                            </h1>
                            <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl">
                                Our work is guided by a clear, thoughtful process that blends research, strategy, creativity, and storytelling—helping brands communicate with purpose and impact.
                            </p>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/50 animate-bounce"
                    >
                        <ArrowDown />
                    </motion.div>
                </section>

                {/* 2. INTRODUCTION SECTION */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 bg-secondary/20">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold font-display mb-8"
                        >
                            A Strategy-Led Way of Working
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl leading-loose text-foreground/80"
                        >
                            At Digambar Media, we believe strong communication starts with understanding. Every project begins with research and insight, followed by strategic thinking and creative execution. Our approach ensures that branding, social media marketing, campaigns, and storytelling are not only visually compelling but also purposeful and effective.
                        </motion.p>
                    </div>
                </section>

                {/* 3. OUR PROCESS (CORE SECTION) */}
                <section ref={processRef} className="px-6 lg:px-12 py-20 lg:py-48 bg-background relative overflow-hidden">
                    <div className="container mx-auto relative z-10">
                        <div className="mb-24 text-center">
                            <h2 className="text-5xl md:text-7xl font-bold font-display">How We Work</h2>
                        </div>

                        <div className="relative max-w-5xl mx-auto">
                            {/* Central Connecting Line */}
                            <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-[4px] bg-secondary -translate-x-1/2 rounded-full overflow-hidden">
                                <motion.div
                                    style={{ height: lineHeight }}
                                    className="w-full bg-primary"
                                />
                            </div>

                            <div className="space-y-24 md:space-y-48">
                                {processSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 relative ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                                    >
                                        {/* Step Indicator (Circle) */}
                                        <div className="absolute left-[2rem] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary z-20 flex items-center justify-center font-bold text-lg shadow-xl text-primary">
                                            {step.number}
                                        </div>

                                        {/* Content */}
                                        <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                            <h3 className="text-3xl md:text-5xl font-bold font-display mb-6">{step.title}</h3>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                        <div className="flex-1 hidden md:block" /> {/** Spacer for layout balance */}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. WHY OUR APPROACH WORKS & APPLYING ACROSS SERVICES */}
                <section className="px-6 lg:px-12 py-20 lg:py-32 bg-foreground text-background">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-primary">
                                    Why Our Approach Works
                                </h2>
                                <p className="text-xl leading-relaxed opacity-90">
                                    Our process balances thinking and making. By aligning strategy with creativity, we ensure that every output—from a social media campaign to a long-form documentary—serves a clear purpose and creates real value for brands and communities.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-white">
                                    One Approach, Multiple Services
                                </h2>
                                <p className="text-xl leading-relaxed opacity-90">
                                    This approach guides all our services, including brand strategy and identity, social media marketing, creative campaigns, video production, and documentary storytelling. While each project is unique, our process ensures consistency, quality, and impact across all work.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. CTA SECTION */}
                <section className="px-6 lg:px-12 py-32 bg-background">
                    <div className="container mx-auto text-center max-w-4xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold font-display mb-8"
                        >
                            Let’s Work Together
                        </motion.h2>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            If you’re looking for a branding and storytelling partner that values strategy, creativity, and impact, we’d love to collaborate.
                        </p>
                        <Link to="/#contact" className="inline-flex items-center px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary-dark transition-all hover:scale-105 shadow-xl shadow-primary/20">
                            Start a Conversation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default ApproachPage;
