
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";

const BlogDetail = () => {
    const { slug } = useParams();
    const post = blogs.find(b => b.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link to="/brand-and-beyond" className="text-primary hover:underline">Return to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-sans">
            <Helmet>
                <title>{post.title} | Brand & Beyond | Digambar Media</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <Navigation />

            <main className="pt-32 pb-20">
                <article className="container mx-auto px-6 lg:px-12 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/brand-and-beyond"
                            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-12"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Insights
                        </Link>

                        <div className="flex items-center gap-4 mb-6 text-xs font-bold uppercase tracking-widest text-primary">
                            <span className="bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-8">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 mb-12 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>

                        <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-16 shadow-2xl">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light mb-12 italic">
                                {post.excerpt}
                            </p>

                            <div className="text-lg leading-relaxed space-y-8">
                                <p>
                                    As the digital landscape in Nepal continues to evolve, the way brands communicate must also shift. It's no longer enough to simply be present; you must be resonant. This is where the intersection of strategy and storytelling becomes critical.
                                </p>

                                <h2 className="text-3xl font-bold font-display mt-12 mb-6">Building Narrative Depth</h2>
                                <p>
                                    Many brands in Kathmandu fall into the trap of transactional communication. They talk about what they sell, but rarely about why it matters. In "Brand & Beyond," we explore the layers beneath the surface—the values, the culture, and the human connections that transform a corporate entity into a living brand.
                                </p>

                                <blockquote>
                                    "A brand is not what you tell people it is. It's what they tell each other it is."
                                </blockquote>

                                <h2 className="text-3xl font-bold font-display mt-12 mb-6">The Future of Media in Nepal</h2>
                                <p>
                                    Looking ahead to 2026, we see a massive trend toward hyper-local, high-production value content. Video production is no longer an optional luxury; it's the primary language of the internet. Our approach at Digambar Media has always been to prioritize high-impact visual storytelling that speaks specifically to the Nepalese context.
                                </p>
                            </div>
                        </div>

                        {/* Social Share / Footer of Article */}
                        <div className="mt-20 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                                    <Sparkles className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold">Digambar Editorial Team</p>
                                    <p className="text-xs text-muted-foreground">Perspectives on Branding & Strategy</p>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-primary/20"
                            >
                                Let's Discuss This Topic
                            </Link>
                        </div>
                    </motion.div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetail;
