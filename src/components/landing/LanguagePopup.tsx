import { useState, useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguagePopup = () => {
  const { setLanguage } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("frush-language");
    if (!saved) {
      // Small delay for a smooth entrance
      const timer = setTimeout(() => setVisible(true), 200);
      return () => clearTimeout(timer);
    } else {
      setLanguage(saved as Language);
    }
  }, []);

  const choose = (lang: Language) => {
    setClosing(true);
    setTimeout(() => {
      setLanguage(lang);
      setVisible(false);
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className="language-popup-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        animation: closing
          ? "popupFadeOut 0.4s ease forwards"
          : "popupFadeIn 0.5s ease forwards",
      }}
    >
      <div
        style={{
          background: "linear-gradient(145deg, #ffffff, #fffdf5)",
          borderRadius: "2rem",
          padding: "clamp(2rem, 5vw, 3rem) clamp(1.5rem, 5vw, 3rem)",
          maxWidth: "480px",
          width: "100%",
          boxShadow:
            "0 40px 120px rgba(0,0,0,0.3), 0 0 0 1px rgba(245,166,35,0.15)",
          animation: closing
            ? "cardSlideOut 0.4s ease forwards"
            : "cardSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,166,35,0.2), transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,68,90,0.15), transparent)",
            pointerEvents: "none",
          }}
        />

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem", position: "relative" }}>
          <span
            style={{
              fontSize: "clamp(2rem, 6vw, 2.8rem)",
              fontWeight: 900,
              background: "linear-gradient(135deg, #F5A623 0%, #E8445A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              display: "block",
            }}
          >
            Frush
          </span>
          <div
            style={{
              width: "40px",
              height: "3px",
              background: "linear-gradient(135deg, #F5A623, #E8445A)",
              borderRadius: "2px",
              margin: "0.5rem auto 0",
            }}
          />
        </div>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "2rem", position: "relative" }}>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            Welcome to Frush!
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
              lineHeight: 1.5,
            }}
          >
            Please choose your preferred language
            <br />
            <span style={{ color: "#999" }}>
              Silakan pilih bahasa yang Anda inginkan
            </span>
          </p>
        </div>

        {/* Language Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* English */}
          <button
            onClick={() => choose("en")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 1.25rem",
              background: "linear-gradient(135deg, #F5A62308, #F5A62316)",
              border: "2px solid rgba(245,166,35,0.3)",
              borderRadius: "1rem",
              cursor: "pointer",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              width: "100%",
              textAlign: "left",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "linear-gradient(135deg, #F5A62318, #F5A62330)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "#F5A623";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 8px 24px rgba(245,166,35,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "linear-gradient(135deg, #F5A62308, #F5A62316)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(245,166,35,0.3)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>🇬🇧</span>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#1a1a1a",
                  marginBottom: "0.2rem",
                }}
              >
                English
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#888",
                }}
              >
                Continue in English
              </p>
            </div>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #F5A623, #E8445A)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "white", fontSize: "0.75rem" }}>→</span>
            </div>
          </button>

          {/* Indonesian */}
          <button
            onClick={() => choose("id")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 1.25rem",
              background: "linear-gradient(135deg, #E8445A08, #E8445A16)",
              border: "2px solid rgba(232,68,90,0.3)",
              borderRadius: "1rem",
              cursor: "pointer",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              width: "100%",
              textAlign: "left",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "linear-gradient(135deg, #E8445A18, #E8445A30)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "#E8445A";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 8px 24px rgba(232,68,90,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "linear-gradient(135deg, #E8445A08, #E8445A16)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(232,68,90,0.3)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>🇮🇩</span>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#1a1a1a",
                  marginBottom: "0.2rem",
                }}
              >
                Bahasa Indonesia
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#888",
                }}
              >
                Lanjutkan dalam Bahasa Indonesia
              </p>
            </div>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #E8445A, #F5A623)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "white", fontSize: "0.75rem" }}>→</span>
            </div>
          </button>
        </div>

        {/* Emoji decoration */}
        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            opacity: 0.5,
            fontSize: "1.4rem",
            letterSpacing: "0.3rem",
          }}
        >
          🍓 🍋 🍈
        </div>
      </div>

      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popupFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes cardSlideIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes cardSlideOut {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to { opacity: 0; transform: scale(0.9) translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default LanguagePopup;
