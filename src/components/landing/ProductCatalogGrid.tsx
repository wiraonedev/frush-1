import { useState, useRef, useEffect } from "react";
import { products } from "@/lib/products";
import { useLanguage } from "@/contexts/LanguageContext";

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
	const { t } = useLanguage();

	const phoneNumber = "6288987135615";
	const waMessage = encodeURIComponent(
		`Halo Admin, saya ingin memesan *${product.name}* (${product.volume}). Mohon informasi ketersediaan dan cara pemesanannya. Terima kasih!`
	);
	const waLink = `https://wa.me/${phoneNumber}?text=${waMessage}`;

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
					<div
						className="absolute inset-0 opacity-20"
						style={{
							background: `radial-gradient(circle at 50% 60%, ${product.color} 0%, transparent 70%)`,
						}}
					/>
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
						className="relative z-10 leading-none select-none flex justify-center items-center h-24 w-full"
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
					</span>
				</div>

				{/* Info */}
				<div className="px-5 pb-5">
					<p
						className="text-xs font-bold uppercase tracking-widest mb-1"
						style={{ color: product.color }}
					>
						{product.category}
					</p>
					<h3
						className="text-2xl font-black mb-1 tracking-tight"
						style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
					>
						{product.name}
					</h3>
					<p className="text-sm text-black/50 italic mb-4">
						"{product.tagline}"
					</p>

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
							<p className="text-[10px] text-black/40 font-medium">{t("catalog.calories")}</p>
						</div>
						<div className="flex-1 bg-white/50 rounded-xl py-2">
							<p className="text-sm font-black">{product.sugar}</p>
							<p className="text-[10px] text-black/40 font-medium">{t("catalog.sugar")}</p>
						</div>
						<div className="flex-1 bg-white/50 rounded-xl py-2">
							<p className="text-sm font-black">{product.volume}</p>
							<p className="text-[10px] text-black/40 font-medium">{t("catalog.volume")}</p>
						</div>
					</div>

					{/* Price + CTA */}
					<div className="flex items-center justify-between">
						<div>
							<p className="text-xl font-black">{product.price}</p>
							<p className="text-[10px] text-black/40">{t("catalog.perBottle")}</p>
						</div>
						<a
							href={waLink}
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 min-w-[110px] text-center"
							style={{
								backgroundColor: product.color,
								transition: "transform 0.15s ease",
							}}
						>
							💬 {t("catalog.orderWA")}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

// Category filter is always in English internally; displayed labels come from translations
const CATEGORY_ALL = "All";

export default function ProductCatalogGrid() {
	const [activeCategory, setActiveCategory] = useState(CATEGORY_ALL);
	const { ref: headerRef, inView: headerInView } = useInView(0.1);
	const { t, language } = useLanguage();

	const categories = [CATEGORY_ALL, "Coconut Water"];

	const getCategoryLabel = (cat: string) => {
		if (cat === CATEGORY_ALL) return language === "id" ? "Semua" : "All";
		return cat;
	};

	const filtered =
		activeCategory === CATEGORY_ALL
			? products
			: products.filter((p) => p.category === activeCategory);

	const isId = language === "id";

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
						{isId ? "Koleksi Kami" : "Our Collection"}
					</p>
					<h2
						className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6"
						style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
					>
						{isId ? "Pilih " : "Pick Your "}
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
						{isId ? (
							<><b>UNTUK SAAT INI,</b> Dua minuman yang dibuat dengan cermat. Masing-masing penuh buah asli, tanpa rasa bersalah, dan semua kesegaran yang Anda butuhkan.</>
						) : (
							<><b>FOR NOW,</b> Two carefully crafted drinks. Each one bursting with real fruit, zero guilt, and all the freshness you deserve.</>
						)}
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
							{getCategoryLabel(cat)}
						</button>
					))}
				</div>

				{/* Product grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filtered.map((product, i) => (
						<ProductCard key={product.id} product={product} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
