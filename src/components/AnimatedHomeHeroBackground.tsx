import { motion } from "framer-motion";

const AnimatedHomeHeroBackground = () => {
    const primaryColor = "hsl(var(--primary))";
    const strokeColor = "hsl(var(--primary) / 0.1)";

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <svg
                viewBox="0 0 1600 900"
                className="w-full h-full object-cover"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Background Fluid Shapes */}
                <motion.path
                    d="M0,450 Q400,100 800,450 T1600,450"
                    stroke={strokeColor}
                    strokeWidth="100"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-10"
                    animate={{ d: ["M0,450 Q400,100 800,450 T1600,450", "M0,450 Q400,800 800,450 T1600,450", "M0,450 Q400,100 800,450 T1600,450"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Character 1: THE VISIONARY (Video / Storytelling) */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: 250, y: 300 }}
                    transition={{ duration: 1.5 }}
                >
                    {/* Hand-drawn Camera Body 'Character' */}
                    <motion.rect
                        width="120" height="80" x="-60" y="-40" rx="10"
                        fill="none" stroke={primaryColor} strokeWidth="3"
                        animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.circle
                        r="30" cx="0" cy="0"
                        fill="none" stroke={primaryColor} strokeWidth="3"
                        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                    />
                    <path d="M-60,-20 L-80,-30 L-80,30 L-60,20 Z" fill={primaryColor} className="opacity-20" />
                    <foreignObject x="-40" y="50" width="80" height="20">
                        <div className="text-[10px] text-center font-bold tracking-widest text-primary uppercase">Cinema</div>
                    </foreignObject>
                </motion.g>

                {/* Character 2: THE STRATEGIST (Planning / Insight) */}
                <motion.g
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, x: 800, y: 700 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                >
                    {/* Compass-like Insight Vector */}
                    <motion.circle
                        r="70" fill="none" stroke={primaryColor} strokeWidth="2" strokeDasharray="10 5"
                        animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M0,-50 L10,0 L0,50 L-10,0 Z"
                        fill={primaryColor}
                        animate={{ rotate: [-45, 45, -45] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                    <foreignObject x="-40" y="80" width="80" height="20">
                        <div className="text-[10px] text-center font-bold tracking-widest text-primary uppercase">Insight</div>
                    </foreignObject>
                </motion.g>

                {/* Character 3: THE CREATIVE (Design / Branding) */}
                <motion.g
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1, x: 1300, y: 250 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                >
                    {/* Pen & Palette Vector Character */}
                    <motion.path
                        d="M-50,0 Q-50,-50 0,-50 T50,0 T0,50 T-50,0"
                        fill="hsl(var(--primary) / 0.05)" stroke={primaryColor} strokeWidth="2"
                    />
                    <motion.rect
                        width="10" height="100" x="-5" y="-50" rx="5"
                        fill={primaryColor}
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ originX: 0, originY: 0 }}
                    />
                    <foreignObject x="-40" y="60" width="80" height="20">
                        <div className="text-[10px] text-center font-bold tracking-widest text-primary uppercase">Creative</div>
                    </foreignObject>
                </motion.g>

                {/* Character 4: THE ACCELERATOR (Marketing / Growth) */}
                <motion.g
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 1200, y: 600 }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                >
                    {/* Upward Growth Bar Graph Character */}
                    <motion.rect width="20" height="40" x="-35" y="0" fill={primaryColor} className="opacity-30" animate={{ height: [40, 60, 40] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.rect width="20" height="70" x="-10" y="-30" fill={primaryColor} className="opacity-60" animate={{ height: [70, 90, 70] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
                    <motion.rect width="20" height="100" x="15" y="-60" fill={primaryColor} animate={{ height: [100, 120, 100] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
                    <foreignObject x="-40" y="60" width="80" height="20">
                        <div className="text-[10px] text-center font-bold tracking-widest text-primary uppercase">Growth</div>
                    </foreignObject>
                </motion.g>

                {/* Central Identity Hub */}
                <motion.g animate={{ x: 800, y: 350 }}>
                    <motion.circle
                        r="150" fill="none" stroke={primaryColor} strokeWidth="1" strokeDasharray="50 20"
                        className="opacity-20"
                        animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                        r="50" fill="hsl(var(--primary) / 0.05)" stroke={primaryColor} strokeWidth="4"
                        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}
                    />
                </motion.g>

                {/* Flowing Data Particles connecting everything */}
                {[...Array(20)].map((_, i) => (
                    <motion.circle
                        key={i}
                        r="2"
                        fill={primaryColor}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            cx: [Math.random() * 1600, Math.random() * 1600],
                            cy: [Math.random() * 900, Math.random() * 900]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </svg>

            {/* High-End Depth Blurs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] animate-pulse" />

            {/* Subtle Gradient Fog for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
    );
};

export default AnimatedHomeHeroBackground;
