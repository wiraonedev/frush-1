import { Leaf, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HealthSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Leaf,
      textKey: "health.realFruit",
    },
    {
      icon: Heart,
      textKey: "health.minimalProcessing",
    },
    {
      icon: Sparkles,
      textKey: "health.refreshingTaste",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-frush-green-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              {t("health.title")}{" "}
              <span className="text-primary">{t("health.titleHighlight")}</span>{" "}
              {t("health.titleEnd")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("health.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit) => (
              <div
                key={benefit.textKey}
                className="bg-card rounded-2xl p-6 flex items-center gap-4 hover-lift"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="font-semibold">{t(benefit.textKey)}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-3xl p-8 lg:p-12 text-center">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("health.paragraph")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
