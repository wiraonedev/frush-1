import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ValuesSection from "@/components/landing/ValuesSection";
import ProductsSection from "@/components/landing/ProductsSection";
import FreshnessShowcase from "@/components/landing/FreshnessShowcase";
import LifestyleSection from "@/components/landing/LifestyleSection";
import HealthSection from "@/components/landing/HealthSection";
import TaglineSection from "@/components/landing/TaglineSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import ProductCatalogPage from "@/components/landing/ProductCatalogPage";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <HeroSection />
        <ValuesSection />
        <ProductsSection />
        <FreshnessShowcase />
        <ProductCatalogPage />
        <LifestyleSection />
        <HealthSection />
        <TaglineSection />
        <CTASection />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
