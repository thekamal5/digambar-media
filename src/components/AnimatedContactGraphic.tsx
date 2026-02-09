import { motion } from "framer-motion";
import {
    Laptop,
    Handshake,
    Mail,
    MessageSquare,
    MapPin,
    Calendar,
    Smartphone,
    Coffee,
    Leaf,
    Star,
    Heart
} from "lucide-react";

const AnimatedContactGraphic = () => {
    const primaryColor = "hsl(var(--primary))";
    const mutedColor = "hsl(var(--muted-foreground))";
    const strokeColor = "hsl(var(--primary) / 0.2)";

    return (
        <div className="relative w-full aspect-[16/9] md:h-[400px] overflow-visible">
            <svg
                viewBox="0 0 1000 500"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Decorative Wavy Lines */}
                <motion.path
                    d="M100,250 Q300,100 500,250 T900,250"
                    stroke={strokeColor}
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path
                    d="M50,300 Q250,450 450,300 T850,300"
                    stroke={strokeColor}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                />

                {/* Central Handshake - Partnership */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ x: 500, y: 350 }}
                >
                    <motion.circle
                        r="80"
                        fill="hsl(var(--primary) / 0.05)"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <foreignObject x="-50" y="-50" width="100" height="100">
                        <div className="flex items-center justify-center w-full h-full">
                            <Handshake size={80} color={primaryColor} strokeWidth={1.5} />
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Email Envelope - Central Left */}
                <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ x: 480, y: 220 }}
                >
                    <motion.rect
                        width="120"
                        height="90"
                        x="-60"
                        y="-45"
                        rx="12"
                        fill="hsl(var(--background))"
                        stroke={primaryColor}
                        strokeWidth="2"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <foreignObject x="-30" y="-30" width="60" height="60">
                        <div className="flex items-center justify-center w-full h-full">
                            <Mail size={40} color={primaryColor} />
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Person 1: Working on Laptop - Far Left */}
                <motion.g
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ x: 200, y: 200 }}
                >
                    <motion.circle
                        r="60"
                        fill="hsl(var(--secondary))"
                        className="opacity-50"
                    />
                    <foreignObject x="-40" y="-40" width="80" height="80">
                        <div className="relative flex items-center justify-center w-full h-full">
                            <Laptop size={50} color={primaryColor} />
                            <motion.div
                                className="absolute -top-10 -right-4"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <MessageSquare size={24} color={primaryColor} fill="hsl(var(--primary) / 0.1)" />
                            </motion.div>
                        </div>
                    </foreignObject>
                    {/* Coffee Cup below person */}
                    <motion.g style={{ x: 50, y: 80 }}>
                        <foreignObject x="-20" y="-20" width="40" height="40">
                            <Coffee size={24} color={mutedColor} />
                        </foreignObject>
                    </motion.g>
                </motion.g>

                {/* Person 2: Mobile/Contact - Far Right */}
                <motion.g
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    style={{ x: 800, y: 200 }}
                >
                    <motion.circle
                        r="60"
                        fill="hsl(var(--secondary))"
                        className="opacity-50"
                    />
                    <foreignObject x="-40" y="-40" width="80" height="80">
                        <div className="relative flex items-center justify-center w-full h-full">
                            <Smartphone size={50} color={primaryColor} />
                            <motion.div
                                className="absolute -top-8 -left-4"
                                animate={{ y: [-3, 3, -3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Heart size={20} fill={primaryColor} color={primaryColor} />
                            </motion.div>
                        </div>
                    </foreignObject>
                    {/* Plant next to person */}
                    <motion.g style={{ x: 60, y: 60 }}>
                        <foreignObject x="-20" y="-20" width="40" height="40">
                            <Leaf size={30} color={primaryColor} className="opacity-60" />
                        </foreignObject>
                    </motion.g>
                </motion.g>

                {/* Location Pin - Upper Middle */}
                <motion.g
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    style={{ x: 450, y: 100 }}
                >
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <foreignObject x="-25" y="-25" width="50" height="50">
                            <MapPin size={45} color={primaryColor} fill="hsl(var(--primary) / 0.1)" />
                        </foreignObject>
                    </motion.div>
                </motion.g>

                {/* Calendar - Upper Right */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    style={{ x: 600, y: 120 }}
                >
                    <foreignObject x="-30" y="-30" width="60" height="60">
                        <div className="relative">
                            <Calendar size={45} color={mutedColor} strokeWidth={1.5} />
                            <motion.div
                                className="absolute bottom-0 right-0 bg-primary rounded-full p-1"
                                animate={{ scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </motion.div>
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Background Decorative Stars/Circles */}
                {[...Array(6)].map((_, i) => (
                    <motion.g
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5 }}
                        style={{
                            x: 100 + Math.random() * 800,
                            y: 50 + Math.random() * 400
                        }}
                    >
                        <foreignObject x="-10" y="-10" width="20" height="20">
                            <Star size={12} color={primaryColor} fill={primaryColor} className="opacity-20" />
                        </foreignObject>
                    </motion.g>
                ))}
            </svg>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] -z-10" />
        </div>
    );
};

export default AnimatedContactGraphic;
