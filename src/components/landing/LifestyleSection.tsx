import { Briefcase, Dumbbell, Users, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LifestyleSection = () => {
  const { t } = useLanguage();

  const useCases = [
    {
      icon: Briefcase,
      titleKey: "lifestyle.working",
      descKey: "lifestyle.workingDesc",
      image: "🎓",
    },
    {
      icon: Dumbbell,
      titleKey: "lifestyle.exercise",
      descKey: "lifestyle.exerciseDesc",
      image: "💪",
    },
    {
      icon: Users,
      titleKey: "lifestyle.hangouts",
      descKey: "lifestyle.hangoutsDesc",
      image: "🎉",
    },
    {
      icon: Sun,
      titleKey: "lifestyle.hotWeather",
      descKey: "lifestyle.hotWeatherDesc",
      image: "☀️",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            {t("lifestyle.title")}{" "}
            <span className="text-gradient">{t("lifestyle.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("lifestyle.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.titleKey}
              className="group bg-card rounded-3xl p-6 border border-border hover-lift cursor-pointer text-center"
            >
              <div className="text-5xl mb-4">{useCase.image}</div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t(useCase.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(useCase.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
