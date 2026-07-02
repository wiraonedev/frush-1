import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  "nav.home": { en: "Home", id: "Beranda" },
  "nav.products": { en: "Products", id: "Produk" },
  "nav.about": { en: "About", id: "Tentang" },
  "nav.contact": { en: "Contact", id: "Kontak" },
  "nav.orderNow": { en: "Order Now", id: "Pesan Sekarang" },
  "nav.language": { en: "EN", id: "ID" },

  // Language Popup
  "popup.title": { en: "Welcome to Frush!", id: "Selamat Datang di Frush!" },
  "popup.subtitle": {
    en: "Please choose your preferred language",
    id: "Silakan pilih bahasa yang Anda inginkan",
  },
  "popup.english": { en: "English", id: "English" },
  "popup.indonesian": { en: "Bahasa Indonesia", id: "Bahasa Indonesia" },
  "popup.englishDesc": { en: "Continue in English", id: "Continue in English" },
  "popup.indonesianDesc": {
    en: "Lanjutkan dalam Bahasa Indonesia",
    id: "Lanjutkan dalam Bahasa Indonesia",
  },

  // Hero Section
  "hero.tagline": { en: "Fresh in", id: "Segar di" },
  "hero.taglineHighlight": { en: "Every Rush.", id: "Setiap Saat." },
  "hero.description": {
    en: "A fresh, light, and natural fruit drink designed for your modern lifestyle.",
    id: "Minuman buah segar, ringan, dan alami yang dirancang untuk gaya hidup modern Anda.",
  },
  "hero.explore": { en: "Explore Our Drinks", id: "Jelajahi Minuman Kami" },
  "hero.orderNow": { en: "Order Now", id: "Pesan Sekarang" },
  "hero.natural": { en: "Natural", id: "Alami" },
  "hero.flavors": { en: "Flavors", id: "Varian" },
  "hero.happyCustomers": { en: "Happy Customers", id: "Pelanggan Puas" },

  // Values Section
  "values.title": { en: "Why", id: "Kenapa" },
  "values.titleHighlight": { en: "Frush?", id: "Frush?" },
  "values.subtitle": {
    en: "We believe in bringing you the freshest, most delicious fruit drinks that fit seamlessly into your lifestyle.",
    id: "Kami percaya dalam memberikan minuman buah tersegar dan paling lezat yang cocok untuk gaya hidup Anda.",
  },
  "values.fresh": { en: "Fresh", id: "Segar" },
  "values.freshDesc": {
    en: "Natural taste and refreshing sensation in every sip",
    id: "Rasa alami dan sensasi menyegarkan di setiap tegukan",
  },
  "values.light": { en: "Light", id: "Ringan" },
  "values.lightDesc": {
    en: "Easy to drink anytime, anywhere you go",
    id: "Mudah diminum kapanpun, dimanapun Anda berada",
  },
  "values.natural": { en: "Natural", id: "Alami" },
  "values.naturalDesc": {
    en: "Real fruits, minimal processing, pure goodness",
    id: "Buah asli, proses minimal, kebaikan murni",
  },
  "values.practical": { en: "Practical", id: "Praktis" },
  "values.practicalDesc": {
    en: "Ready to go, perfect for your busy lifestyle",
    id: "Siap pakai, sempurna untuk gaya hidup Anda yang sibuk",
  },

  // Products Section
  "products.title": { en: "Our", id: "Pilihan" },
  "products.titleHighlight": { en: "Refreshing", id: "Menyegarkan" },
  "products.titleEnd": { en: "Choices", id: "Kami" },
  "products.subtitle": {
    en: "Discover our range of delicious fruit drinks, each crafted with care and packed with natural goodness.",
    id: "Temukan rangkaian minuman buah lezat kami, masing-masing dibuat dengan penuh perhatian dan mengandung kebaikan alami.",
  },
  "products.popularFlavors": { en: "Popular Flavors:", id: "Rasa Populer:" },
  "products.greenTeaDesc": {
    en: "Real Coconut Water blended with Strawberry, Lemon & Watermelon — fresh and clean, no basil seeds",
    id: "Air Kelapa Asli dipadukan Strawberry, Lemon & Semangka — segar dan bersih, tanpa biji selasih",
  },
  "products.coconutWaterDesc": {
    en: "Real Coconut Water with Orange Granules, Strawberry & Basil Seeds — refreshing with a chewy twist",
    id: "Air Kelapa Asli dengan Bulir Jeruk, Strawberry & Biji Selasih — segar dengan tekstur yang unik",
  },

  // Freshness Showcase
  "freshness.title": { en: "Real fruits.", id: "Buah asli." },
  "freshness.titleHighlight": { en: "Real freshness.", id: "Kesegaran nyata." },
  "freshness.description": {
    en: "No exaggeration. Every Frush drink is made with carefully selected fresh fruits, ensuring you get the authentic taste and natural goodness in every bottle.",
    id: "Tanpa berlebihan. Setiap minuman Frush dibuat dengan buah segar yang dipilih dengan cermat, memastikan Anda mendapatkan cita rasa asli dan kebaikan alami di setiap botol.",
  },
  "freshness.realFruit": { en: "Real Fruit", id: "Buah Asli" },
  "freshness.artificialColors": {
    en: "Artificial Colors",
    id: "Pewarna Buatan",
  },
  "freshness.sugarContent": { en: "Sugar Content", id: "Kadar Gula" },
  "freshness.low": { en: "Low", id: "Rendah" },
  "freshness.fresh": { en: "Fresh", id: "Segar" },
  "freshness.dailyProduction": {
    en: "Daily Production",
    id: "Produksi Harian",
  },

  // Lifestyle Section
  "lifestyle.title": { en: "Perfect for", id: "Sempurna untuk" },
  "lifestyle.titleHighlight": { en: "Every Moment", id: "Setiap Momen" },
  "lifestyle.subtitle": {
    en: "Whether you're working, exercising, or just chilling with friends, Frush fits right into your lifestyle.",
    id: "Baik saat bekerja, berolahraga, atau santai bersama teman, Frush cocok untuk gaya hidup Anda.",
  },
  "lifestyle.working": { en: "Working & Studying", id: "Kerja & Belajar" },
  "lifestyle.workingDesc": {
    en: "Stay refreshed and focused during long work or study sessions",
    id: "Tetap segar dan fokus selama sesi kerja atau belajar yang panjang",
  },
  "lifestyle.exercise": { en: "Light Exercise", id: "Olahraga Ringan" },
  "lifestyle.exerciseDesc": {
    en: "Perfect hydration companion for your workout routine",
    id: "Teman hidrasi sempurna untuk rutinitas olahraga Anda",
  },
  "lifestyle.hangouts": { en: "Hangouts & Social", id: "Kumpul & Sosial" },
  "lifestyle.hangoutsDesc": {
    en: "Share the freshness with friends at every gathering",
    id: "Bagikan kesegaran bersama teman di setiap kumpul-kumpul",
  },
  "lifestyle.hotWeather": { en: "Hot Weather", id: "Cuaca Panas" },
  "lifestyle.hotWeatherDesc": {
    en: "Beat the heat with our ice-cold refreshing drinks",
    id: "Lawan panas dengan minuman segar dingin kami",
  },

  // Health Section
  "health.title": { en: "Our", id: "Komitmen" },
  "health.titleHighlight": { en: "Natural", id: "Alami" },
  "health.titleEnd": { en: "Commitment", id: "Kami" },
  "health.subtitle": {
    en: "We're committed to bringing you the healthiest, most natural fruit drinks without compromising on taste.",
    id: "Kami berkomitmen menghadirkan minuman buah paling sehat dan alami tanpa mengorbankan rasa.",
  },
  "health.realFruit": { en: "Made with real fruit", id: "Dibuat dengan buah asli" },
  "health.minimalProcessing": {
    en: "Minimal processing",
    id: "Proses minimal",
  },
  "health.refreshingTaste": {
    en: "Refreshing and light taste",
    id: "Rasa menyegarkan dan ringan",
  },
  "health.paragraph": {
    en: "At Frush, we believe that what you drink matters. That's why we use only the finest, freshest fruits sourced from trusted farms. Our drinks are carefully crafted with minimal processing to preserve the natural vitamins, minerals, and flavors that make fresh fruit so special.",
    id: "Di Frush, kami percaya bahwa apa yang Anda minum itu penting. Itulah mengapa kami hanya menggunakan buah-buahan terbaik dan tersegar yang bersumber dari kebun terpercaya. Minuman kami dibuat dengan cermat dan proses minimal untuk menjaga vitamin alami, mineral, dan rasa yang membuat buah segar begitu istimewa.",
  },

  // Tagline Section
  "tagline.description": {
    en: "Experience the perfect blend of nature's finest fruits in every refreshing sip.",
    id: "Rasakan perpaduan sempurna buah-buahan terbaik alam di setiap tegukan menyegarkan.",
  },

  // CTA Section
  "cta.title": { en: "Ready to refresh your day?", id: "Siap menyegarkan harimu?" },
  "cta.subtitle": {
    en: "Join thousands of happy customers who've made Frush their daily refreshment choice.",
    id: "Bergabunglah dengan ribuan pelanggan puas yang telah menjadikan Frush pilihan minuman harian mereka.",
  },
  "cta.orderNow": { en: "Order Frush Now", id: "Pesan Frush Sekarang" },
  "cta.findProducts": { en: "Find Our Products", id: "Temukan Produk Kami" },

  // Footer
  "footer.description": {
    en: "Fresh, light, and natural fruit drinks designed for your modern lifestyle. Experience the refreshing taste of real fruits.",
    id: "Minuman buah segar, ringan, dan alami untuk gaya hidup modern Anda. Rasakan kesegaran buah asli.",
  },
  "footer.products": { en: "Products", id: "Produk" },
  "footer.infusedDrinks": { en: "Infused Drinks", id: "Minuman Infus" },
  "footer.fruitTea": { en: "Fruit Tea", id: "Teh Buah" },
  "footer.chilledDrinks": { en: "Chilled Drinks", id: "Minuman Dingin" },
  "footer.newArrivals": { en: "New Arrivals", id: "Produk Baru" },
  "footer.company": { en: "Company", id: "Perusahaan" },
  "footer.aboutUs": { en: "About Us", id: "Tentang Kami" },
  "footer.ourStory": { en: "Our Story", id: "Cerita Kami" },
  "footer.sustainability": { en: "Sustainability", id: "Keberlanjutan" },
  "footer.careers": { en: "Careers", id: "Karir" },
  "footer.support": { en: "Support", id: "Dukungan" },
  "footer.contactUs": { en: "Contact Us", id: "Hubungi Kami" },
  "footer.faqs": { en: "FAQs", id: "FAQ" },
  "footer.storeLocator": { en: "Store Locator", id: "Lokasi Toko" },
  "footer.deliveryInfo": { en: "Delivery Info", id: "Info Pengiriman" },
  "footer.rights": {
    en: "All rights reserved.",
    id: "Semua hak dilindungi.",
  },
  "footer.privacy": { en: "Privacy Policy", id: "Kebijakan Privasi" },
  "footer.terms": { en: "Terms of Service", id: "Syarat Layanan" },

  // Product Catalog
  "catalog.compareExplore": {
    en: "Compare & Explore",
    id: "Bandingkan & Jelajahi",
  },
  "catalog.findPerfect": { en: "Find Your", id: "Temukan" },
  "catalog.perfect": { en: "Perfect", id: "Minuman" },
  "catalog.match": { en: "Match", id: "Terbaik Anda" },
  "catalog.subtitle": {
    en: "Tap any drink below to explore its flavor profile, ingredients, and why it's made for you.",
    id: "Ketuk minuman di bawah untuk menjelajahi profil rasa, bahan-bahan, dan mengapa dibuat untuk Anda.",
  },
  "catalog.keyIngredients": {
    en: "Key Ingredients",
    id: "Bahan-Bahan Utama",
  },
  "catalog.calories": { en: "Calories", id: "Kalori" },
  "catalog.sugar": { en: "Sugar", id: "Gula" },
  "catalog.volume": { en: "Volume", id: "Volume" },
  "catalog.perBottle": { en: "per bottle", id: "per botol" },
  "catalog.order": { en: "Order", id: "Pesan" },
  "catalog.madeWith": { en: "Made with", id: "Dibuat dengan" },
  "catalog.addToCart": { en: "Order via WhatsApp", id: "Pesan via WhatsApp" },
  "catalog.orderWA": { en: "Order via WA", id: "Pesan via WA" },
  "catalog.perBottleLabel": { en: "Per bottle", id: "Per botol" },
  "catalog.realFruit": { en: "Real Fruit", id: "Buah Asli" },
  "catalog.noConcentrates": { en: "No concentrates", id: "Tanpa konsentrat" },
  "catalog.dailyFresh": { en: "Daily Fresh", id: "Segar Harian" },
  "catalog.productionCycle": { en: "Production cycle", id: "Siklus produksi" },
  "catalog.noAdditives": { en: "No Additives", id: "Tanpa Bahan Tambahan" },
  "catalog.artificialAnything": {
    en: "Artificial anything",
    id: "Tanpa apapun yang buatan",
  },
  "catalog.lowSugar": { en: "Low Sugar", id: "Rendah Gula" },
  "catalog.perServing": { en: "Per serving", id: "Per sajian" },

  // Product names & taglines
  "product.bottleGlassTagline": {
    en: "Refreshing coconut meets tropical fruits",
    id: "Kelapa menyegarkan bertemu buah-buah tropis",
  },
  "product.bottlePlasticTagline": {
    en: "Coconut goodness with a citrus twist",
    id: "Kelapa lezat dengan sentuhan jeruk dan selasih",
  },
  // Legacy keys kept for compatibility
  "product.greenTeaTagline": {
    en: "Refreshing coconut meets tropical fruits",
    id: "Kelapa menyegarkan bertemu buah-buah tropis",
  },
  "product.coconutWaterTagline": {
    en: "Coconut goodness with a citrus twist",
    id: "Kelapa lezat dengan sentuhan jeruk dan selasih",
  },
  "product.primary": { en: "Primary", id: "Utama" },
  "product.secondary": { en: "Secondary", id: "Sekunder" },
  "product.accent": { en: "Accent", id: "Aksen" },
  "product.boost": { en: "Boost", id: "Boost" },

  // Language switcher
  "lang.switch": { en: "Switch to Bahasa Indonesia", id: "Ganti ke English" },
  "lang.current": { en: "EN", id: "ID" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("frush-language", lang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return entry[language] || entry["en"] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
