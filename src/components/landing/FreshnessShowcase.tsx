import variant1 from "@/assets/images/real/4.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const FreshnessShowcase = () => {
	const { t } = useLanguage();

	return (
		<section className="py-20 lg:py-32 bg-frush-yellow-light relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-64 h-64 bg-frush-green/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-frush-yellow/20 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Image */}
					<div className="flex justify-center">
						<img
							src={variant1}
							alt="Fresh fruits composition - oranges, strawberries, lemons, and mint"
							className="w-full max-w-lg animate-float-slow"
						/>
					</div>

					{/* Content */}
					<div className="text-center lg:text-left">
						<h2 className="text-3xl lg:text-5xl font-bold mb-6">
							{t("freshness.title")}{" "}
							<span className="text-gradient">{t("freshness.titleHighlight")}</span>
						</h2>
						<p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
							{t("freshness.description")}
						</p>

						<div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
							<div className="bg-card rounded-2xl p-4 text-center shadow-sm">
								<p className="text-2xl font-bold text-accent">100%</p>
								<p className="text-sm text-muted-foreground">{t("freshness.realFruit")}</p>
							</div>
							<div className="bg-card rounded-2xl p-4 text-center shadow-sm">
								<p className="text-2xl font-bold text-primary">0</p>
								<p className="text-sm text-muted-foreground">
									{t("freshness.artificialColors")}
								</p>
							</div>
							<div className="bg-card rounded-2xl p-4 text-center shadow-sm">
								<p className="text-2xl font-bold text-secondary">{t("freshness.low")}</p>
								<p className="text-sm text-muted-foreground">{t("freshness.sugarContent")}</p>
							</div>
							<div className="bg-card rounded-2xl p-4 text-center shadow-sm">
								<p className="text-2xl font-bold text-accent">{t("freshness.fresh")}</p>
								<p className="text-sm text-muted-foreground">
									{t("freshness.dailyProduction")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FreshnessShowcase;
