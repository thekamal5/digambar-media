import { motion } from "framer-motion";

const chakraColors = [
    { color: "#FF3333", label: "Root" },         // Vibrant Red
    { color: "#FF9933", label: "Sacral" },       // Vibrant Orange
    { color: "#FFFF33", label: "Solar Plexus" }, // Vibrant Yellow
    { color: "#33FF33", label: "Heart" },        // Vibrant Green
    { color: "#33CCFF", label: "Throat" },       // Sky Blue 
    { color: "#6600FF", label: "Third Eye" },    // Deep Indigo
    { color: "#CC33FF", label: "Crown" },        // Deep Violet
];

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
            <div className="relative flex items-center justify-center">
                {/* Central Static Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <img
                        src="loader-logo.png"
                        alt="Loading..."
                        className="w-32 h-32 md:w-48 md:h-48 object-contain"
                    />
                </motion.div>

                {/* Chakra Dots */}
                {chakraColors.map((chakra, index) => {
                    // Calculate initial positions in a circle around the center
                    const angle = (index / chakraColors.length) * Math.PI * 2;
                    const radius = 120; // Distance from center
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={chakra.label}
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{
                                x: [x - 10, x + 10, x - 5, x + 5, x - 10], // Floating motion
                                y: [y + 10, y - 15, y + 5, y - 5, y + 10], // Rising and falling
                                opacity: [0.6, 1, 0.6],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 2, // Varied speeds for natural feel
                                repeat: Infinity,
                                delay: index * 0.2,
                                ease: "easeInOut",
                            }}
                            className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full blur-[2px] shadow-lg"
                            style={{
                                backgroundColor: chakra.color,
                                boxShadow: `0 0 15px ${chakra.color}, 0 0 30px ${chakra.color}44`,
                            }}
                        />
                    );
                })}

                {/* Background Glow */}
                <div className="absolute inset-x-[-150px] inset-y-[-150px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            </div>
        </motion.div>
    );
};

export default Loader;
