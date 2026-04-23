import { useState, useRef, useEffect } from "react";
import { products } from "@/lib/products";

const categories = [
	"All",
	"Green Tea",
	"Coconut Water",
	// "Chilled Fruit Drinks",
];

function useInView(threshold = 0.15) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [inView, setInView] = useState(false);
	useEffect(() => {
		if (!ref.current) return;
		const obs = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) setInView(true);
			},
			{ threshold },
		);
		obs.observe(ref.current);
		return () => obs.disconnect();
	}, [threshold]);
	return { ref, inView };
}

function ProductCard({
	product,
	index,
}: {
	product: (typeof products)[0];
	index: number;
}) {
	const { ref, inView } = useInView();
	const [hovered, setHovered] = useState(false);
	const [added, setAdded] = useState(false);

	const handleAdd = () => {
		setAdded(true);
		setTimeout(() => setAdded(false), 1800);
	};

	return (
		<div
			ref={ref}
			style={{
				opacity: inView ? 1 : 0,
				transform: inView ? "translateY(0)" : "translateY(40px)",
				transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
			}}
		>
			<div
				className="group relative rounded-3xl overflow-hidden cursor-pointer"
				style={{
					backgroundColor: product.bgLight,
					boxShadow: hovered
						? `0 24px 60px ${product.color}33, 0 8px 20px rgba(0,0,0,0.08)`
						: "0 4px 20px rgba(0,0,0,0.06)",
					transform: hovered
						? "translateY(-6px) scale(1.01)"
						: "translateY(0) scale(1)",
					transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
				}}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				{/* Top badge */}
				{product.badges[0] && (
					<div
						className="absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1 rounded-full text-white"
						style={{ backgroundColor: product.color }}
					>
						{product.badges[0]}
					</div>
				)}

				{/* Fruit visual area */}
				<div
					className="relative flex items-center justify-center pt-10 pb-4"
					style={{ minHeight: "200px" }}
				>
					{/* Radial glow */}
					<div
						className="absolute inset-0 opacity-20"
						style={{
							background: `radial-gradient(circle at 50% 60%, ${product.color} 0%, transparent 70%)`,
						}}
					/>
					{/* Decorative ring */}
					<div
						className="absolute w-32 h-32 rounded-full border-2 opacity-20 transition-all duration-500"
						style={{
							borderColor: product.color,
							transform: hovered ? "scale(1.3)" : "scale(1)",
						}}
					/>
					<div
						className="absolute w-20 h-20 rounded-full opacity-10 transition-all duration-500"
						style={{
							backgroundColor: product.color,
							transform: hovered ? "scale(1.5)" : "scale(1)",
						}}
					/>
					<span
						className="relative z-10 text-8xl leading-none select-none flex justify-center items-center h-24 w-full"
						style={{
							filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.15))",
							transform: hovered
								? "scale(1.1) translateY(-4px)"
								: "scale(1) translateY(0)",
							transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
							display: "flex",
						}}
					>
						<img
							src={product.emoji}
							alt={product.name}
							className="w-24 h-24 object-contain"
						/>
						{/* {product.emoji} */}
					</span>
				</div>

				{/* Info */}
				<div className="px-5 pb-5">
					{/* Category */}
					<p
						className="text-xs font-bold uppercase tracking-widest mb-1"
						style={{ color: product.color }}
					>
						{product.category}
					</p>

					{/* Name */}
					<h3
						className="text-2xl font-black mb-1 tracking-tight"
						style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
					>
						{product.name}
					</h3>
					<p className="text-sm text-black/50 italic mb-4">
						"{product.tagline}"
					</p>

					{/* Ingredients */}
					<div className="flex flex-wrap gap-1 mb-4">
						{product.ingredients.map((ing) => (
							<span
								key={ing}
								className="text-xs px-2.5 py-1 rounded-full bg-white/70 text-black/60 font-medium"
							>
								{ing}
							</span>
						))}
					</div>

					{/* Stats */}
					<div className="flex gap-4 mb-5 text-center">
						<div className="flex-1 bg-white/50 rounded-xl py-2">
							<p className="text-sm font-black">{product.cal}</p>
							<p className="text-[10px] text-black/40 font-medium">Calories</p>
						</div>
						<div className="flex-1 bg-white/50 rounded-xl py-2">
							<p className="text-sm font-black">{product.sugar}</p>
							<p className="text-[10px] text-black/40 font-medium">Sugar</p>
						</div>
						<div className="flex-1 bg-white/50 rounded-xl py-2">
							<p className="text-sm font-black">350ml</p>
							<p className="text-[10px] text-black/40 font-medium">Volume</p>
						</div>
					</div>

					{/* Price + CTA */}
					<div className="flex items-center justify-between">
						<div>
							<p className="text-xl font-black">{product.price}</p>
							<p className="text-[10px] text-black/40">per bottle</p>
						</div>
						<button
							onClick={handleAdd}
							className="px-4 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 min-w-[110px]"
							style={{
								backgroundColor: added ? "#4CAF50" : product.color,
								transition: "background-color 0.3s ease, transform 0.15s ease",
							}}
						>
							{added ? "✓ Added!" : "Add to Cart"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function ProductCatalogGrid() {
	const [activeCategory, setActiveCategory] = useState("All");
	const { ref: headerRef, inView: headerInView } = useInView(0.1);

	const filtered =
		activeCategory === "All"
			? products
			: products.filter((p) => p.category === activeCategory);

	return (
		<section className="py-24 bg-white relative overflow-hidden">
			{/* Subtle background pattern */}
			<div
				className="absolute inset-0 opacity-[0.015]"
				style={{
					backgroundImage: `radial-gradient(circle, #4CAF50 1px, transparent 1px)`,
					backgroundSize: "40px 40px",
				}}
			/>

			<div className="container mx-auto px-6 lg:px-12 relative z-10">
				{/* Header */}
				<div
					ref={headerRef}
					className="text-center mb-16"
					style={{
						opacity: headerInView ? 1 : 0,
						transform: headerInView ? "translateY(0)" : "translateY(30px)",
						transition: "opacity 0.7s ease, transform 0.7s ease",
					}}
				>
					<p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4CAF50] mb-4">
						Our Collection
					</p>
					<h2
						className="text-5xl lg:text-7xl font-black tracking-tight mb-6"
						style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
					>
						Pick Your{" "}
						<span
							style={{
								background: "linear-gradient(135deg, #F5A623, #4CAF50)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							Frush
						</span>
					</h2>
					<p className="text-lg text-black/50 max-w-xl mx-auto leading-relaxed">
						<b>FOR NOW,</b> Two carefully crafted drinks. Each one bursting with
						real fruit, zero guilt, and all the freshness you deserve.
					</p>
				</div>

				{/* Filter tabs */}
				<div
					className="flex flex-wrap justify-center gap-3 mb-12"
					style={{
						opacity: headerInView ? 1 : 0,
						transition: "opacity 0.7s ease 0.2s",
					}}
				>
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
							style={
								activeCategory === cat
									? {
											background: "linear-gradient(135deg, #F5A623, #4CAF50)",
											color: "white",
											boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
										}
									: {
											backgroundColor: "#f5f5f5",
											color: "#666",
										}
							}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Product grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filtered.map((product, i) => (
						<ProductCard key={product.id} product={product} index={i} />
					))}
				</div>

				{/* Bottom CTA */}
				{/* <div
          className="text-center mt-20 py-16 rounded-3xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: "radial-gradient(circle at 30% 50%, #F5A623, transparent 60%), radial-gradient(circle at 70% 50%, #4CAF50, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
              Can't decide?
            </p>
            <h3
              className="text-4xl lg:text-5xl font-black text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Try the Frush Bundle
            </h3>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Get all 6 flavors delivered fresh to your door. Save 20% on your first bundle order.
            </p>
            <button
              className="px-10 py-4 rounded-2xl font-bold text-black text-lg hover:scale-105 active:scale-95 transition-all"
              style={{
                background: "linear-gradient(135deg, #F5A623, #F7C948)",
                boxShadow: "0 8px 30px rgba(245,166,35,0.4)",
              }}
            >
              Shop the Bundle — Save 20%
            </button>
          </div>
        </div> */}
			</div>
		</section>
	);
}
