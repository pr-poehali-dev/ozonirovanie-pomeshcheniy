import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FooterSections from "@/components/FooterSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FooterSections />
    </div>
  );
};

export default Index;
