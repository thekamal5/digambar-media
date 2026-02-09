import { motion } from "framer-motion";
import {
    PenTool,
    Smartphone,
    Lightbulb,
    Video,
    Globe,
    Clapperboard,
    Handshake,
    Heart,
    ThumbsUp,
    Sparkles
} from "lucide-react";

const AnimatedApproachHero = () => {
    const iconColor = "hsl(var(--primary))";
    const mutedColor = "hsl(var(--muted-foreground))";
    const strokeColor = "hsl(var(--primary) / 0.2)";

    return (
        <div className="relative w-full aspect-[4/1] md:h-[350px] mt-12 overflow-visible">
            <svg
                viewBox="0 0 1200 300"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Animated Connecting Lines */}
                <motion.path
                    d="M0,150 Q150,50 300,150 T600,150 T900,150 T1200,150"
                    stroke={strokeColor}
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="12 6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                />
                <motion.path
                    d="M0,180 Q250,280 500,180 T1000,180 T1500,180"
                    stroke={strokeColor}
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 8, ease: "linear", repeat: Infinity, delay: 1 }}
                />

                {/* Icon 1: Pen Tool */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{ x: 100, y: 120 }}
                >
                    <motion.circle
                        r="45"
                        fill="hsl(var(--primary) / 0.05)"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <foreignObject x="-20" y="-20" width="40" height="40">
                        <div className="flex items-center justify-center w-full h-full">
                            <PenTool size={32} color={iconColor} strokeWidth={2.5} />
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Icon 2: Social Media Smartphone */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={{ x: 300, y: 160 }}
                >
                    <motion.circle
                        r="50"
                        fill="hsl(var(--primary) / 0.05)"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                    <foreignObject x="-40" y="-40" width="80" height="80">
                        <div className="relative flex items-center justify-center w-full h-full px-4">
                            <Smartphone size={40} color={iconColor} strokeWidth={2} />
                            <motion.div
                                className="absolute top-2 right-4"
                                animate={{ y: [-2, 2, -2], opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Heart size={16} fill={iconColor} color={iconColor} />
                            </motion.div>
                            <motion.div
                                className="absolute bottom-4 right-0"
                                animate={{ x: [0, 3, 0], opacity: [0.5, 0.9, 0.5] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                            >
                                <ThumbsUp size={14} fill={iconColor} color={iconColor} />
                            </motion.div>
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Icon 3: Idea Lightbulb */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    style={{ x: 500, y: 100 }}
                >
                    <motion.circle
                        r="55"
                        fill="hsl(var(--primary) / 0.1)"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <foreignObject x="-30" y="-30" width="60" height="60">
                        <div className="relative flex items-center justify-center w-full h-full">
                            <Lightbulb size={45} color={iconColor} strokeWidth={2} />
                            <motion.div
                                className="absolute -top-4 -left-2"
                                animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Sparkles size={24} color={iconColor} />
                            </motion.div>
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Icon 4: Video Production */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    style={{ x: 700, y: 190 }}
                >
                    <motion.circle
                        r="45"
                        fill="hsl(var(--primary) / 0.05)"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
                    />
                    <foreignObject x="-25" y="-25" width="50" height="50">
                        <div className="flex items-center justify-center w-full h-full">
                            <Video size={40} color={iconColor} strokeWidth={2} />
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Icon 5: Global Distribution */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    style={{ x: 920, y: 120 }}
                >
                    <motion.circle
                        r="65"
                        fill="hsl(var(--primary) / 0.05)"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    <foreignObject x="-40" y="-40" width="80" height="80">
                        <div className="relative flex items-center justify-center w-full h-full">
                            <Globe size={50} color={mutedColor} className="opacity-30" strokeWidth={1} />
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                animate={{ rotate: [0, -5, 0], scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Clapperboard size={38} color={iconColor} strokeWidth={2} />
                            </motion.div>
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Icon 6: Partnership */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    style={{ x: 1100, y: 160 }}
                >
                    <motion.rect
                        x="-60"
                        y="-40"
                        width="120"
                        height="80"
                        rx="24"
                        fill="hsl(var(--primary) / 0.08)"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <foreignObject x="-30" y="-30" width="60" height="60">
                        <div className="flex items-center justify-center w-full h-full">
                            <Handshake size={45} color={iconColor} strokeWidth={2} />
                        </div>
                    </foreignObject>
                </motion.g>
            </svg>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
    );
};

export default AnimatedApproachHero;
