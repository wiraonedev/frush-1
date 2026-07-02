import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 gradient-sunset relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary-foreground/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-primary-foreground/20 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-primary-foreground/20 rounded-full" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center text-primary-foreground">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg lg:text-xl mb-10 opacity-90 max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              {t("cta.orderNow")}
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              {t("cta.findProducts")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
