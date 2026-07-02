import bottleGlass from "@/assets/images/new/botol_kaca.png";
import bottlePlastic from "@/assets/images/new/botol_plastik.png";
import WhatsAppButton from "@/components/ui/cta-button";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
	const { t } = useLanguage();

	return (
		<section
			id="home"
			className="min-h-screen flex items-center pt-20 gradient-hero overflow-hidden"
		>
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
					{/* Text Content */}
					<div className="text-center lg:text-left order-2 lg:order-1">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in">
							{t("hero.tagline")}{" "}
							<span className="text-gradient">{t("hero.taglineHighlight")}</span>
						</h1>

						<p
							className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in"
							style={{ animationDelay: "0.2s" }}
						>
							{t("hero.description")}
						</p>

						<div
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
							style={{ animationDelay: "0.4s" }}
						>
							<Button variant="hero" size="lg">
								{t("hero.explore")}
							</Button>
							<WhatsAppButton
								className={buttonVariants({
									variant: "heroOutline",
									size: "lg",
								})}
							>
								{t("hero.orderNow")}
							</WhatsAppButton>
						</div>

						{/* Stats */}
						<div
							className="flex gap-8 mt-12 justify-center lg:justify-start animate-fade-in"
							style={{ animationDelay: "0.6s" }}
						>
							<div className="text-center">
								<p className="text-3xl font-bold text-primary">100%</p>
								<p className="text-sm text-muted-foreground">{t("hero.natural")}</p>
							</div>
							<div className="text-center">
								<p className="text-3xl font-bold text-secondary">2+</p>
								<p className="text-sm text-muted-foreground">{t("hero.flavors")}</p>
							</div>
							<div className="text-center">
								<p className="text-3xl font-bold text-accent">10+</p>
								<p className="text-sm text-muted-foreground">{t("hero.happyCustomers")}</p>
							</div>
						</div>
					</div>

				{/* Product Images */}
				<div className="order-1 lg:order-2 relative flex justify-center items-end gap-4 sm:gap-6">
					{/* Decorative blobs */}
					<div className="absolute -top-8 -left-8 w-16 h-16 bg-frush-yellow/30 rounded-full blur-xl animate-float" />
					<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-frush-green/30 rounded-full blur-xl animate-float-delayed" />
					<div className="absolute top-1/2 -left-12 w-12 h-12 bg-frush-red/30 rounded-full blur-xl animate-float-slow" />

					{/* Botol Kaca (bigger, glass) */}
					<div className="relative flex flex-col items-center animate-bounce-gentle" style={{ animationDelay: "0s" }}>
						<img
							src={bottleGlass}
							alt="FRUSH Botol Kaca 350ml - Air Kelapa Strawberry Lemon Semangka"
							className="w-36 sm:w-44 lg:w-52 xl:w-60 fruit-shadow object-contain"
						/>
						<div className="mt-2 text-center">
							<p className="text-xs font-bold text-foreground/70">Botol Kaca</p>
							<p className="text-xs font-black text-primary">350ml · Rp20.000</p>
						</div>
					</div>

					{/* Botol Plastik (smaller) */}
					<div className="relative flex flex-col items-center animate-bounce-gentle" style={{ animationDelay: "0.4s" }}>
						<img
							src={bottlePlastic}
							alt="FRUSH Botol Plastik 250ml - Air Kelapa Bulir Jeruk Strawberry Biji Selasih"
							className="w-28 sm:w-36 lg:w-44 xl:w-52 fruit-shadow object-contain"
						/>
						<div className="mt-2 text-center">
							<p className="text-xs font-bold text-foreground/70">Botol Plastik</p>
							<p className="text-xs font-black text-accent">250ml · Rp15.000</p>
						</div>
					</div>
				</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
