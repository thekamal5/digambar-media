import { motion } from "framer-motion";
import {
    Compass,
    Mountain,
    Sparkle,
    Trophy,
    Eye,
    Zap,
    Layout,
    Layers,
    Circle
} from "lucide-react";

const AnimatedAboutHero = () => {
    const primaryColor = "hsl(var(--primary))";
    const strokeColor = "hsl(var(--primary) / 0.15)";

    return (
        <div className="relative w-full aspect-video md:h-[450px] overflow-visible">
            <svg
                viewBox="0 0 1000 500"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Background Layer: Mountain Shape representing Nepal/Growth */}
                <motion.path
                    d="M100,400 L300,100 L500,300 L700,50 L900,400 Z"
                    fill="hsl(var(--primary) / 0.02)"
                    stroke={strokeColor}
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                />

                {/* Orbiting Elements */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    style={{ x: 500, y: 250 }}
                >
                    <circle r="220" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="10 10" />

                    {/* Floating Service Nodes on Orbit */}
                    {[0, 90, 180, 270].map((angle, i) => (
                        <motion.g
                            key={i}
                            style={{
                                x: 220 * Math.cos((angle * Math.PI) / 180),
                                y: 220 * Math.sin((angle * Math.PI) / 180),
                            }}
                        >
                            <motion.circle
                                r="40"
                                fill="hsl(var(--background))"
                                stroke={primaryColor}
                                strokeWidth="2"
                                whileHover={{ scale: 1.2, strokeWidth: 3 }}
                            />
                            <foreignObject x="-20" y="-20" width="40" height="40">
                                <div className="flex items-center justify-center w-full h-full">
                                    {i === 0 && <Compass size={24} color={primaryColor} />}
                                    {i === 1 && <Eye size={24} color={primaryColor} />}
                                    {i === 2 && <Zap size={24} color={primaryColor} />}
                                    {i === 3 && <Layout size={24} color={primaryColor} />}
                                </div>
                            </foreignObject>
                        </motion.g>
                    ))}
                </motion.g>

                {/* Central Core: Shaping the Brand */}
                <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    style={{ x: 500, y: 250 }}
                >
                    <motion.circle
                        r="100"
                        fill="hsl(var(--primary) / 0.05)"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                    <motion.path
                        d="M-50,0 Q0,-80 50,0 T0,80 T-50,0"
                        fill="none"
                        stroke={primaryColor}
                        strokeWidth="4"
                        strokeLinecap="round"
                        animate={{
                            rotate: [0, 90, 180, 270, 360],
                            scale: [1, 0.9, 1.1, 0.9, 1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    <foreignObject x="-30" y="-30" width="60" height="60">
                        <div className="flex items-center justify-center w-full h-full text-primary">
                            <Layers size={40} />
                        </div>
                    </foreignObject>
                </motion.g>

                {/* Floating Particles/Ideas */}
                {[...Array(8)].map((_, i) => (
                    <motion.circle
                        key={i}
                        r={Math.random() * 4 + 2}
                        fill={primaryColor}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            x: [Math.random() * 1000, Math.random() * 1000],
                            y: [Math.random() * 500, Math.random() * 500]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Feature Icons */}
                <motion.g
                    style={{ x: 850, y: 150 }}
                    animate={{ y: [150, 130, 150] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <foreignObject x="-30" y="-30" width="60" height="60">
                        <div className="flex flex-col items-center">
                            <Trophy size={32} color={primaryColor} className="mb-2" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Impact</span>
                        </div>
                    </foreignObject>
                </motion.g>

                <motion.g
                    style={{ x: 150, y: 100 }}
                    animate={{ y: [100, 120, 100] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                    <foreignObject x="-30" y="-30" width="60" height="60">
                        <div className="flex flex-col items-center">
                            <Sparkle size={32} color={primaryColor} className="mb-2" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Vision</span>
                        </div>
                    </foreignObject>
                </motion.g>
            </svg>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full -z-10 animate-pulse" />
        </div>
    );
};

export default AnimatedAboutHero;
