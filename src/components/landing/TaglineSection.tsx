import { useLanguage } from "@/contexts/LanguageContext";

const TaglineSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-frush-yellow/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-frush-red/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6">
            <span className="text-primary">Fruit.</span>{" "}
            <span className="text-secondary">Fresh.</span>{" "}
            <span className="text-gradient">Frush.</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto">
            {t("tagline.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
