import { useState, useRef, useEffect } from "react";
import { products } from "@/lib/products";

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

const features = [
	{ label: "Real Fruit", icon: "🍓", value: "100%", desc: "No concentrates" },
	{ label: "Daily Fresh", icon: "⚡", value: "24hr", desc: "Production cycle" },
	{
		label: "No Additives",
		icon: "🌿",
		value: "Zero",
		desc: "Artificial anything",
	},
	{ label: "Low Sugar", icon: "💚", value: "<10g", desc: "Per serving" },
];

export default function ProductCatalogStrip() {
	const [selected, setSelected] = useState(0);
	const { ref: headerRef, inView: headerInView } = useInView(0.1);
	const { ref: stripRef, inView: stripInView } = useInView(0.1);
	const { ref: featRef, inView: featInView } = useInView(0.1);

	const active = products[selected];

	return (
		<section className="bg-[#0e0e0e] py-24 overflow-hidden relative">
			{/* Subtle green gradient top */}
			<div
				className="absolute top-0 left-0 right-0 h-px"
				style={{
					background:
						"linear-gradient(90deg, transparent, #4CAF50, #F5A623, transparent)",
				}}
			/>

			<div className="container mx-auto px-6 lg:px-12">
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
						Compare & Explore
					</p>
					<h2
						className="text-5xl lg:text-6xl font-black tracking-tight text-white mb-4"
						style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
					>
						Find Your <span style={{ color: "#F5A623" }}>Perfect</span> Match
					</h2>
					<p className="text-white/40 max-w-lg mx-auto">
						Tap any drink below to explore its flavor profile, ingredients, and
						why it's made for you.
					</p>
				</div>

				{/* Horizontal scroll strip */}
				<div
					ref={stripRef}
					className="flex gap-4 overflow-x-auto pb-4 mb-16 scrollbar-none"
					style={{
						opacity: stripInView ? 1 : 0,
						transform: stripInView ? "translateY(0)" : "translateY(20px)",
						transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
						scrollbarWidth: "none",
					}}
				>
					{products.map((p, i) => (
						<button
							key={p.id}
							onClick={() => setSelected(i)}
							className="shrink-0 flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 border"
							style={{
								minWidth: "120px",
								backgroundColor:
									selected === i ? p.color + "22" : "rgba(255,255,255,0.04)",
								borderColor:
									selected === i ? p.color : "rgba(255,255,255,0.08)",
								transform: selected === i ? "scale(1.05)" : "scale(1)",
							}}
						>
							<span className="text-4xl">{p.emoji}</span>
							<span
								className="text-sm font-bold"
								style={{
									color: selected === i ? p.color : "rgba(255,255,255,0.5)",
								}}
							>
								{p.name}
							</span>
							<span
								className="text-xs"
								style={{
									color: selected === i ? p.color : "rgba(255,255,255,0.3)",
								}}
							>
								{p.price}
							</span>
						</button>
					))}
				</div>

				{/* Detail panel */}
				<div
					className="grid lg:grid-cols-2 gap-8 mb-20"
					key={active.id}
					style={{ animation: "fadeSlideIn 0.4s ease" }}
				>
					{/* Left: big visual */}
					<div
						className="relative rounded-3xl overflow-hidden flex items-center justify-center"
						style={{
							background: `radial-gradient(circle at 50% 50%, ${active.color}33, ${active.color}08)`,
							border: `1px solid ${active.color}22`,
							minHeight: "360px",
						}}
					>
						{/* Decorative rings */}
						{[1, 2, 3].map((n) => (
							<div
								key={n}
								className="absolute rounded-full border opacity-10"
								style={{
									width: `${n * 120}px`,
									height: `${n * 120}px`,
									borderColor: active.color,
									animation: `spinSlow ${8 + n * 3}s linear infinite ${n % 2 === 0 ? "reverse" : ""}`,
								}}
							/>
						))}
						<div className="relative z-10 text-center">
							<span
								className="text-[140px] leading-none block"
								style={{
									filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.4))",
									animation: "floatEmoji 3s ease-in-out infinite",
								}}
							>
								{active.emoji}
							</span>
							<p
								className="text-white/40 text-sm italic mt-2"
								style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
							>
								"{active.tagline}"
							</p>
						</div>
					</div>

					{/* Right: details */}
					<div className="flex flex-col justify-center">
						{/* Category + name */}
						<p
							className="text-xs font-bold uppercase tracking-widest mb-2"
							style={{ color: active.color }}
						>
							{active.category}
						</p>
						<h3
							className="text-5xl font-black text-white mb-2 tracking-tight"
							style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
						>
							{active.name}
						</h3>

						{/* Badges */}
						<div className="flex flex-wrap gap-2 mb-6">
							{active.badges.map((b) => (
								<span
									key={b}
									className="text-xs font-semibold px-3 py-1.5 rounded-full"
									style={{
										backgroundColor: active.color + "22",
										color: active.color,
									}}
								>
									{b}
								</span>
							))}
						</div>

						{/* Ingredient bars */}
						<div className="mb-6">
							<p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">
								Key Ingredients
							</p>
							{active.ingredients.map((ing, i) => (
								<div key={ing} className="mb-2">
									<div className="flex justify-between text-sm mb-1">
										<span className="text-white/70 font-medium">{ing}</span>
										<span style={{ color: active.color }} className="font-bold">
											{["Primary", "Secondary", "Accent"][i] || "Boost"}
										</span>
									</div>
									<div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
										<div
											className="h-full rounded-full transition-all duration-1000"
											style={{
												width: `${[85, 60, 40][i] || 30}%`,
												backgroundColor: active.color,
												animation: `growBar 0.8s ease ${i * 0.1}s both`,
											}}
										/>
									</div>
								</div>
							))}
						</div>

						{/* Nutrition */}
						<div className="grid grid-cols-3 gap-3 mb-8">
							{[
								{ label: "Calories", value: active.cal },
								{ label: "Sugar", value: active.sugar },
								{ label: "Volume", value: "350ml" },
							].map(({ label, value }) => (
								<div
									key={label}
									className="text-center py-4 rounded-2xl"
									style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
								>
									<p className="text-xl font-black text-white">{value}</p>
									<p className="text-xs text-white/40 font-medium mt-0.5">
										{label}
									</p>
								</div>
							))}
						</div>

						{/* Price + CTA */}
						<div className="flex items-center gap-4">
							<div>
								<p className="text-3xl font-black text-white">{active.price}</p>
								<p className="text-xs text-white/30">per bottle</p>
							</div>
							<button
								className="flex-1 py-4 rounded-2xl font-bold text-black text-lg transition-all hover:scale-105 active:scale-95 hover:shadow-2xl"
								style={{
									background: `linear-gradient(135deg, ${active.color}, ${active.color}bb)`,
									boxShadow: `0 8px 30px ${active.color}44`,
								}}
							>
								Order {active.name}
							</button>
						</div>
					</div>
				</div>

				{/* Feature tiles */}
				<div ref={featRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
					{features.map((f, i) => (
						<div
							key={f.label}
							className="rounded-2xl p-6 text-center border border-white/8"
							style={{
								backgroundColor: "rgba(255,255,255,0.03)",
								opacity: featInView ? 1 : 0,
								transform: featInView ? "translateY(0)" : "translateY(30px)",
								transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
							}}
						>
							<span className="text-3xl mb-3 block">{f.icon}</span>
							<p className="text-2xl font-black text-white mb-1">{f.value}</p>
							<p className="text-sm font-bold text-white/60">{f.label}</p>
							<p className="text-xs text-white/30 mt-1">{f.desc}</p>
						</div>
					))}
				</div>
			</div>

			<style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatEmoji {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes growBar {
          from { width: 0%; }
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
		</section>
	);
}
