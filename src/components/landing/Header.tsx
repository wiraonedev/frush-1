import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { nameKey: "nav.home", href: "#home" },
    { nameKey: "nav.products", href: "#products" },
    { nameKey: "nav.about", href: "#about" },
    { nameKey: "nav.contact", href: "#contact" },
  ];

  const toggleLanguage = () => {
    const next: Language = language === "en" ? "id" : "en";
    setLanguage(next);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl lg:text-3xl font-bold text-gradient">
              Frush
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.nameKey}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {t(link.nameKey)}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Language switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              title={t("lang.switch")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.4rem 0.75rem",
                borderRadius: "999px",
                border: "1.5px solid rgba(245,166,35,0.35)",
                background: "linear-gradient(135deg, rgba(245,166,35,0.08), rgba(232,68,90,0.08))",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "0.78rem",
                color: "#F5A623",
                transition: "all 0.2s ease",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(135deg, rgba(245,166,35,0.18), rgba(232,68,90,0.18))";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#F5A623";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(135deg, rgba(245,166,35,0.08), rgba(232,68,90,0.08))";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,166,35,0.35)";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              }}
            >
              <Globe className="w-3.5 h-3.5" />
              {language === "en" ? "🇬🇧 EN" : "🇮🇩 ID"}
            </button>
            <Button variant="hero" size="default">
              {t("nav.orderNow")}
            </Button>
          </div>

          {/* Mobile right side: lang + menu */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                padding: "0.35rem 0.6rem",
                borderRadius: "999px",
                border: "1.5px solid rgba(245,166,35,0.35)",
                background: "linear-gradient(135deg, rgba(245,166,35,0.08), rgba(232,68,90,0.08))",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "0.72rem",
                color: "#F5A623",
                transition: "all 0.2s ease",
              }}
            >
              {language === "en" ? "🇬🇧" : "🇮🇩"}
              <span>{language === "en" ? "EN" : "ID"}</span>
            </button>
            {/* Mobile Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.nameKey}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.nameKey)}
                </a>
              ))}
              <Button variant="hero" size="default" className="mt-2">
                {t("nav.orderNow")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
