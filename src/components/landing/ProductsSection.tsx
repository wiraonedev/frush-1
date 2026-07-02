import bottleGlass from "@/assets/images/new/botol_kaca.png";
import bottlePlastic from "@/assets/images/new/botol_plastik.png";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductsSection = () => {
	const { t } = useLanguage();

	const products = [
		{
			name: "FRUSH Botol Kaca",
			descKey: "products.greenTeaDesc",
			flavors: ["Strawberry", "Lemon", "Semangka"],
			color: "bg-frush-red",
			image: bottleGlass,
		},
		{
			name: "FRUSH Botol Plastik",
			descKey: "products.coconutWaterDesc",
			flavors: ["Bulir Jeruk", "Strawberry", "Biji Selasih"],
			color: "bg-frush-yellow",
			image: bottlePlastic,
		},
	];

	return (
		<section id="products" className="py-20 lg:py-32 bg-background">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl lg:text-5xl font-bold mb-4">
						{t("products.title")}{" "}
						<span className="text-gradient">{t("products.titleHighlight")}</span>{" "}
						{t("products.titleEnd")}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t("products.subtitle")}
					</p>
				</div>

				{/* Product Image */}
				<div className="flex flex-row justify-center gap-8 mb-16">
					{products.map((product) => (
						<div key={product.name} className="flex justify-center">
							<img
								src={product.image}
								alt={`${product.name} - botol minuman Frush`}
								className="w-full max-w-xs fruit-shadow"
							/>
						</div>
					))}
				</div>

				{/* Product Cards */}
				<div className="grid md:grid-cols-2 gap-6 lg:gap-8">
					{products.map((product, index) => (
						<div
							key={product.name}
							className="bg-card rounded-3xl p-6 lg:p-8 border border-border hover-lift group cursor-pointer relative overflow-hidden"
						>
							{/* Accent bar */}
							<div
								className={`absolute top-0 left-0 right-0 h-1 ${product.color}`}
							/>

							<h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
								{product.name}
							</h3>
							<p className="text-muted-foreground mb-6">
								{t(product.descKey)}
							</p>

							<div className="space-y-2">
								<p className="text-sm font-semibold text-foreground">
									{t("products.popularFlavors")}
								</p>
								<div className="flex flex-wrap gap-2">
									{product.flavors.map((flavor) => (
										<span
											key={flavor}
											className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
										>
											{flavor}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsSection;
