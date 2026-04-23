import product1 from "@/assets/images/real/1.webp";
import product2 from "@/assets/images/real/2.webp";
import product3 from "@/assets/images/real/3.webp";

const products = [
	{
		name: "Green Tea",
		description: "Real Green Tea blended with natural fruit essences",
		flavors: ["Strawberry Semangka Lemon"],
		color: "bg-frush-yellow",
	},
	{
		name: "Coconut Water",
		description: "Real Coconut Water blended with natural fruit essences",
		flavors: ["Strawberry Semangka Lemon"],
		color: "bg-frush-red",
	},
];

const ProductsSection = () => {
	return (
		<section id="products" className="py-20 lg:py-32 bg-background">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl lg:text-5xl font-bold mb-4">
						Our <span className="text-gradient">Refreshing</span> Choices
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Discover our range of delicious fruit drinks, each crafted with care
						and packed with natural goodness.
					</p>
				</div>

				{/* Product Image */}
				<div className="flex flex-row">
					<div className="flex justify-center mb-16">
						<img
							src={product1}
							alt="Frush product lineup - three colorful fruit drink bottles"
							className="w-full max-w-2xl fruit-shadow"
						/>
					</div>
					<div className="flex justify-center mb-16">
						<img
							src={product2}
							alt="Frush product lineup - three colorful fruit drink bottles"
							className="w-full max-w-2xl fruit-shadow"
						/>
					</div>
					<div className="flex justify-center mb-16">
						<img
							src={product3}
							alt="Frush product lineup - three colorful fruit drink bottles"
							className="w-full max-w-2xl fruit-shadow"
						/>
					</div>
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
								{product.description}
							</p>

							<div className="space-y-2">
								<p className="text-sm font-semibold text-foreground">
									Popular Flavors:
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
