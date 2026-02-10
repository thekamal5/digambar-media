import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Check, X, Sparkles, ArrowRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PackageFeature {
    name: string;
    included: boolean;
    highlight?: boolean;
}

interface Package {
    name: string;
    tagline: string;
    price: number;
    currency: string;
    period: string;
    features: PackageFeature[];
    recommended?: boolean;
    color: string;
    gradient: string;
}

const packages: Package[] = [
    {
        name: "Kumari",
        tagline: "Fast, simple, and tailored to your essential needs.",
        price: 70000,
        currency: "NPR",
        period: "/month",
        color: "from-blue-500 to-blue-600",
        gradient: "bg-gradient-to-br from-blue-50 to-blue-100/50",
        features: [
            { name: "Content Marketing Strategy", included: true },
            { name: "Social Media Management", included: true },
            { name: "Calendar for Post", included: true },
            { name: "Static Post (Design) - 15", included: true },
            { name: "Reels - 10", included: true },
            { name: "Social Media Audit", included: true },
            { name: "Customer Review Campaign", included: false },
        ],
    },
    {
        name: "Gaurishankar",
        tagline: "Your all-in-one solution for everything you need.",
        price: 95000,
        currency: "NPR",
        period: "/month",
        recommended: true,
        color: "from-teal-500 to-emerald-600",
        gradient: "bg-gradient-to-br from-teal-50 to-emerald-100/50",
        features: [
            { name: "Content Marketing Strategy", included: true },
            { name: "Social Media Management", included: true },
            { name: "Calendar for Post", included: true },
            { name: "Static Post (Design) - 20", included: true, highlight: true },
            { name: "Reels - 18", included: true, highlight: true },
            { name: "Social Media Audit", included: true },
            { name: "Customer Review Campaign", included: true, highlight: true },
        ],
    },
    {
        name: "Paila",
        tagline: "Creative steps forward for growth and success.",
        price: 55000,
        currency: "NPR",
        period: "/month",
        color: "from-purple-500 to-purple-600",
        gradient: "bg-gradient-to-br from-purple-50 to-purple-100/50",
        features: [
            { name: "Content Marketing Strategy", included: true },
            { name: "Social Media Management", included: true },
            { name: "Content Candling", included: true },
            { name: "Static Post (Design) - 10", included: true },
            { name: "Reels - 4", included: true },
            { name: "Social Media Audit", included: false },
            { name: "Customer Review Campaign", included: false },
        ],
    },
];

const AnimatedCounter = ({ value, currency }: { value: number; currency: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, value, {
                duration: 2,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, motionValue, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {currency} <motion.span>{rounded}</motion.span>
        </span>
    );
};

const PricingPackages = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="packages" className="py-16 lg:py-20 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.03, 0.05, 0.03],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                        opacity: [0.03, 0.05, 0.03],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold uppercase tracking-wider">
                            Digambar Digital Packages
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Choose Your Growth Path
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Transparent pricing, powerful results. Select the package that aligns with your brand's ambitions.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="relative group"
                        >
                            {/* Recommended Badge */}
                            {pkg.recommended && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                                >
                                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                                        <Star className="w-4 h-4 fill-current" />
                                        RECOMMENDED
                                    </div>
                                </motion.div>
                            )}

                            {/* Card */}
                            <motion.div
                                animate={{
                                    y: hoveredIndex === index ? -8 : 0,
                                    scale: hoveredIndex === index ? 1.02 : 1,
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className={`relative h-full rounded-3xl overflow-hidden ${pkg.recommended
                                    ? "ring-2 ring-primary/50 shadow-2xl shadow-primary/20"
                                    : "ring-1 ring-border/50"
                                    } bg-card backdrop-blur-xl`}
                            >
                                {/* Gradient overlay on hover */}
                                <motion.div
                                    animate={{
                                        opacity: hoveredIndex === index ? 0.1 : 0,
                                    }}
                                    className={`absolute inset-0 bg-gradient-to-br ${pkg.color} pointer-events-none`}
                                />

                                {/* Content */}
                                <div className="relative p-8 flex flex-col h-full">
                                    {/* Package Name & Tagline */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-foreground mb-2">
                                            {pkg.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {pkg.tagline}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                                                <AnimatedCounter value={pkg.price} currency={pkg.currency} />
                                            </span>
                                            <span className="text-muted-foreground text-lg">
                                                {pkg.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex-1 space-y-4 mb-8">
                                        {pkg.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={feature.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * featureIndex }}
                                                className="flex items-start gap-3 group/feature"
                                            >
                                                <div
                                                    className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${feature.included
                                                        ? `bg-gradient-to-br ${pkg.color}`
                                                        : "bg-muted"
                                                        }`}
                                                >
                                                    {feature.included ? (
                                                        <Check className="w-3 h-3 text-white" />
                                                    ) : (
                                                        <X className="w-3 h-3 text-muted-foreground" />
                                                    )}
                                                </div>
                                                <span
                                                    className={`text-sm ${feature.included
                                                        ? feature.highlight
                                                            ? "text-foreground font-semibold"
                                                            : "text-foreground"
                                                        : "text-muted-foreground line-through"
                                                        } group-hover/feature:translate-x-1 transition-transform`}
                                                >
                                                    {feature.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${pkg.color} shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group/btn`}
                                    >
                                        Get Started
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground mb-4">
                        Need a custom solution? Let's talk about your unique needs.
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                        Contact Us for Custom Packages
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>

                {/* Terms */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-center text-xs text-muted-foreground mt-8"
                >
                    *Terms and conditions apply. All prices are in Nepali Rupees (NPR).
                </motion.p>
            </div>
        </section>
    );
};

export default PricingPackages;
