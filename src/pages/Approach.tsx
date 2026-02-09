
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useRef } from "react";
import AnimatedApproachHero from "@/components/AnimatedApproachHero";

const processSteps = [
    {
        number: "01",
        title: "Research & Insight",
        description: "We begin by understanding the brand, audience, context, and challenges. Through branding research in Nepal and listening, we uncover insights that shape every strategic decision."
    },
    {
        number: "02",
        title: "Strategy & Direction",
        description: "Based on insights, we develop a clear strategy that defines positioning, messaging, tone, and direction. This brand strategy foundation guides social media marketing Nepal, creative campaigns, and content."
    },
    {
        number: "03",
        title: "Creativity & Production",
        description: "We translate strategy into creative outcomes—designing brand identities, crafting campaigns, and implementing a professional video production workflow in Nepal that connects emotionally."
    },
    {
        number: "04",
        title: "Delivery & Impact",
        description: "We execute with care and measure impact wherever possible. Our focus is on clarity, consistency, and meaningful engagement for brands in the Kathmandu market and beyond."
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
                <title>Our Approach | Strategic Branding & Digital Strategy Nepal</title>
                <meta name="description" content="Discover Digambar Media’s approach to strategic branding and digital strategy in Nepal. Our process blends marketing and video production Nepal with high-impact content creation." />
                <meta name="keywords" content="digital strategy nepal, content creation nepal, video branding nepal, marketing and video production nepal, strategic branding process nepal, branding agency approach nepal" />
                <meta property="og:title" content="Our Approach | Strategic Branding & Digital Strategy Nepal" />
                <meta property="og:description" content="Discover our strategy-led approach to branding, social media, and video production in Nepal." />
            </Helmet>

            <Navigation />

            <main>
                {/* 1. HERO SECTION */}
                <section className="relative min-h-[80vh] flex flex-col justify-center px-6 lg:px-12 pt-20 pb-12 overflow-hidden">
                    <div className="container mx-auto relative z-10">
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold font-display tracking-tight mb-8 leading-[0.9]">
                                    Our <br />
                                    <span className="text-primary italic">Approach</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                                    Our work is guided by a clear, thoughtful digital strategy Nepal that blends research, creativity, and storytelling—helping brands communicate with purpose and impact.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="hidden lg:block relative"
                            >
                                <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-10" />
                                <div className="p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl shadow-2xl">
                                    <p className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                                        Visual Storytelling Process
                                    </p>
                                    <h3 className="text-2xl font-bold mb-4">Crafting Connection</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        We bridge the gap between abstract strategy and emotional visual narrative through a highly refined technical workflow.
                                    </p>
                                    <div className="flex gap-4">
                                        <div className="flex-1 bg-secondary/50 p-4 rounded-xl text-center">
                                            <div className="text-2xl font-bold text-primary">100%</div>
                                            <div className="text-[10px] uppercase font-bold opacity-60">Custom Strategy</div>
                                        </div>
                                        <div className="flex-1 bg-secondary/50 p-4 rounded-xl text-center">
                                            <div className="text-2xl font-bold text-primary">HD</div>
                                            <div className="text-[10px] uppercase font-bold opacity-60">Production</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="mt-16 md:mt-24"
                        >
                            <AnimatedApproachHero />
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
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold font-display"
                            >
                                A Strategy-Led Way of Working in Nepal
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6 text-xl leading-relaxed text-foreground/80"
                            >
                                <p>
                                    At Digambar Media, we believe strong communication starts with understanding the unique Kathmandu market. Every project begins with research and insight, followed by digital strategy Nepal and creative execution.
                                </p>
                                <p>
                                    Our approach ensures that content creation Nepal, social media marketing, and storytelling are not only visually compelling but also purposeful. We specialize in video branding Nepal, ensuring your visual narrative aligns perfectly with your brand's core values.
                                </p>
                                <p>
                                    As a premier provider of marketing and video production Nepal, we bridge the gap between abstract ideas and tangible results. We don't just create; we curate experiences that resonate with the Nepalese audience.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. OUR PROCESS (CORE SECTION) */}
                <section ref={processRef} className="px-6 lg:px-12 py-20 lg:py-48 bg-background relative overflow-hidden">
                    <div className="container mx-auto relative z-10">
                        <div className="mb-24 text-center">
                            <h2 className="text-5xl md:text-7xl font-bold font-display">How We Work</h2>
                            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
                                Our documented marketing and video production Nepal workflow ensures transparency and excellence at every stage.
                            </p>
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
                                        <div className="flex-1 hidden md:block" /> {/* Spacer for layout balance */}
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
                                <p className="text-xl leading-relaxed opacity-90 mb-6">
                                    Our process balances thinking and making. By aligning digital strategy Nepal with high-end creativity, we ensure that every output—from a social media campaign to a long-form documentary—serves a clear purpose and creates real value for brands in Nepal.
                                </p>
                                <p className="text-lg opacity-80 leading-relaxed">
                                    Integration is key. We combine content creation Nepal with data-driven insights to maximize reach and engagement. Our approach is not just about looking good; it's about performing well in the competitive digital landscape of Kathmandu.
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
                                <p className="text-xl leading-relaxed opacity-90 mb-6">
                                    This methodology guides all our offerings, including brand strategy, social media marketing, and marketing and video production Nepal. While each project is unique, our process ensures consistency, quality, and impact.
                                </p>
                                <p className="text-lg opacity-80 leading-relaxed">
                                    By applying a rigorous digital strategy Nepal across all touchpoints, we help brands build a cohesive presence. Whether it's video branding Nepal or identity design, the strategy remains the foundation of everything we build.
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
                            Ready for a Strategic Partnership?
                        </motion.h2>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            If you’re looking for a partner in marketing and video production Nepal that values deep strategy and high-impact storytelling, let's connect.
                        </p>
                        <Link to="/contact" className="inline-flex items-center px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary-dark transition-all hover:scale-105 shadow-xl shadow-primary/20">
                            Start Your Strategy Session
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
