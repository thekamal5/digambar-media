
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";

const BrandBeyond = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-sans">
            <Helmet>
                <title>Brand & Beyond | Blog & Insights | Digambar Media Nepal</title>
                <meta name="description" content="Explore Brand & Beyond, Digambar Media's journal on branding, storytelling, and digital marketing in Nepal. Insights from Kathmandu's leading creative agency." />
            </Helmet>

            <Navigation />

            <main className="pt-32 pb-20">
                {/* Hero section */}
                <section className="px-6 lg:px-12 mb-20 overflow-hidden">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-primary uppercase mb-6 px-4 py-2 rounded-full bg-primary/5 border border-primary/10"
                            >
                                <Sparkles className="w-4 h-4" />
                                Brand & Beyond
                            </motion.span>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tight leading-[0.85] mb-8">
                                Journal of <br />
                                <span className="text-primary italic">Creative Insight</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                                Thoughts, observations, and deep dives into the world of branding, storytelling, and digital growth in Nepal.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="px-6 lg:px-12 relative z-10">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group flex flex-col h-full bg-card border border-border/50 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                                >
                                    {/* Image container */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-background/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-primary/10">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                            <span className="flex items-center gap-1.5 font-sans">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1.5 font-sans">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                                            <Link to={`/brand-and-beyond/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h2>

                                        <p className="text-muted-foreground mb-8 line-clamp-3 font-light leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-border/50">
                                            <Link
                                                to={`/brand-and-beyond/${post.slug}`}
                                                className="inline-flex items-center gap-2 text-sm font-bold group/btn"
                                            >
                                                Read Article
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter / CTA */}
                <section className="container mx-auto px-6 lg:px-12 mt-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary overflow-hidden rounded-[3rem] p-12 md:p-24 text-center relative"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-white rounded-full blur-[120px]" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-black rounded-full blur-[100px]" />
                        </div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">
                                Insight delivered <br />to your inbox.
                            </h2>
                            <p className="text-white/80 text-lg mb-10">
                                Subscribe to get our latest articles on branding, storytelling, and digital strategy in Nepal.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onClick={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md"
                                />
                                <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-all active:scale-95 shadow-xl shadow-black/10">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BrandBeyond;
