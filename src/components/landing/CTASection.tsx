import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  const phoneNumber = "6288987135615";
  const waMessageGeneral = encodeURIComponent(
    "Halo Admin, saya ingin memesan minuman Frush. Mohon informasi produk, harga, dan cara pemesanannya. Terima kasih!"
  );
  const waLinkGeneral = `https://wa.me/${phoneNumber}?text=${waMessageGeneral}`;

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
            <a
              href={waLinkGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all hover:scale-105 active:scale-95"
            >
              💬 {t("cta.orderNow")}
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 active:scale-95"
            >
              {t("cta.findProducts")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
