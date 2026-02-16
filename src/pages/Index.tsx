import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingPackages from "@/components/PricingPackages";
import Approach from "@/components/Approach";
import About from "@/components/About";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Full-Service Marketing Agency Nepal | Creative Agency Digambar Media</title>
        <meta name="description" content="Digambar Media is a premier full-service marketing agency in Nepal. We specialize in digital marketing services Nepal, strategic branding Kathmandu, and professional video production." />
        <meta name="keywords" content="full-service marketing agency nepal, creative agency nepal, digital marketing services nepal, branding services nepal, video production services nepal, marketing agency kathmandu, digital marketing kathmandu, video production kathmandu, branding services kathmandu, seo nepal" />
        <meta property="og:title" content="Full-Service Marketing Agency Nepal | Creative Agency Digambar Media" />
        <meta property="og:description" content="Strategic branding, digital marketing, and professional video production services in Kathmandu, Nepal." />
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <PricingPackages />
        <Approach />
        <About />
        <Contact />

      </main>
      <Footer />
    </div>
  );
};

export default Index;
