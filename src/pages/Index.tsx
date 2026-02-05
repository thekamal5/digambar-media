import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Digambar Media | Creative Agency & Digital Marketing Nepal</title>
        <meta name="description" content="Digambar Media is a leading creative agency in Nepal specializing in strategic branding, digital marketing, and professional video production in Kathmandu." />
        <meta name="keywords" content="digital marketing nepal, branding services nepal, video production nepal, creative agency kathmandu, social media marketing nepal, seo services nepal, digital marketing kathmandu, branding services kathmandu" />
        <meta property="og:title" content="Digambar Media | Creative Agency & Digital Marketing Nepal" />
        <meta property="og:description" content="Strategic branding, digital marketing, and professional video production services in Kathmandu, Nepal." />
      </Helmet>
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
