import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Work />
        <Approach />
        <About />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
