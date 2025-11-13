import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import IndustriesSection from "@/components/IndustriesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <IndustriesSection />
      <AdvantagesSection />
      <ContactSection />
      <FAQSection />
      <QuizSection />
      <Footer />
    </div>
  );
};

export default Index;