
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GamePanel from "@/components/GamePanel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-midnight">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Packages />
        <GamePanel />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
