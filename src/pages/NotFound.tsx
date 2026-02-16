import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold font-display text-primary/20 leading-none">404</h1>
          <div className="mt-[-2rem] mb-8">
            <h2 className="text-3xl font-bold font-display">Lost in Space?</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              The page you are looking for at <code className="bg-secondary px-2 py-0.5 rounded text-primary">{location.pathname}</code> doesn't exist.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-foreground font-bold rounded-2xl hover:bg-secondary-dark transition-all"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

