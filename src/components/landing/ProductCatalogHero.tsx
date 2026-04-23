import { useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";

export default function ProductCatalogHero() {
	const [activeIdx, setActiveIdx] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const rotate = (dir: 1 | -1) => {
		if (isAnimating) return;
		setIsAnimating(true);
		setTimeout(() => {
			setActiveIdx((prev) => (prev + dir + products.length) % products.length);
			setIsAnimating(false);
		}, 300);
	};

	useEffect(() => {
		intervalRef.current = setInterval(() => rotate(1), 4000);
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [isAnimating]);

	const active = products[activeIdx];

	return (
		<section
			className="relative min-h-screen overflow-hidden flex flex-col"
			style={{
				backgroundColor: active.bgLight,
				transition: "background-color 0.6s ease",
			}}
		>
			{/* Noise texture overlay */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03] z-10"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Blobs */}
			<div
				className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-700"
				style={{ backgroundColor: active.color }}
			/>
			<div
				className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-20 transition-all duration-700"
				style={{ backgroundColor: active.color }}
			/>

			{/* Nav bar */}
			{/* <nav className="relative z-20 flex items-center justify-between px-8 lg:px-16 py-6">
        <div className="flex items-center gap-2">
          <span className="font-black text-2xl tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Frush
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-black/8 text-black/60">Catalog</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
          <a href="#" className="hover:text-black transition-colors">All Drinks</a>
          <a href="#" className="hover:text-black transition-colors">Infused</a>
          <a href="#" className="hover:text-black transition-colors">Fruit Tea</a>
          <a href="#" className="hover:text-black transition-colors">Chilled</a>
        </div>
        <button
          className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all hover:scale-105 active:scale-95"
          style={{ backgroundColor: active.color, transition: "background-color 0.6s ease" }}
        >
          Order Now
        </button>
      </nav> */}

			{/* Hero content */}
			<div className="relative z-20 flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 px-8 lg:px-16 pb-12">
				{/* Left: Product info */}
				<div className="flex-1 max-w-lg">
					{/* Category pill */}
					<div
						className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
						style={{
							backgroundColor: active.color + "22",
							color: active.color,
							transition: "all 0.6s ease",
						}}
					>
						<span
							className="w-1.5 h-1.5 rounded-full"
							style={{ backgroundColor: active.color }}
						/>
						{active.category}
					</div>

					{/* Name */}
					<h1
						className="text-6xl lg:text-8xl font-black leading-[0.9] mb-4 tracking-tight"
						style={{
							fontFamily: "'Playfair Display', Georgia, serif",
							opacity: isAnimating ? 0 : 1,
							transform: isAnimating ? "translateY(20px)" : "translateY(0)",
							transition: "opacity 0.3s ease, transform 0.3s ease",
						}}
					>
						{active.name}
					</h1>
					<p
						className="text-xl text-black/50 mb-8 italic"
						style={{
							fontFamily: "'Playfair Display', Georgia, serif",
							opacity: isAnimating ? 0 : 1,
							transition: "opacity 0.3s ease 0.05s",
						}}
					>
						"{active.tagline}"
					</p>

					{/* Badges */}
					<div className="flex flex-wrap gap-2 mb-8">
						{active.badges.map((b) => (
							<span
								key={b}
								className="text-xs font-semibold px-3 py-1.5 rounded-full border"
								style={{
									borderColor: active.color + "44",
									color: active.color,
									backgroundColor: active.color + "11",
								}}
							>
								{b}
							</span>
						))}
					</div>

					{/* Ingredients */}
					<div className="flex items-center gap-3 mb-10">
						<span className="text-xs font-bold uppercase tracking-widest text-black/40">
							Made with
						</span>
						{active.ingredients.map((ing) => (
							<span
								key={ing}
								className="text-sm font-medium text-black/70 bg-white/60 px-3 py-1 rounded-full backdrop-blur-sm"
							>
								{ing}
							</span>
						))}
					</div>

					{/* Stats row */}
					<div className="flex items-center gap-6 mb-10">
						<div>
							<p className="text-2xl font-black">{active.cal}</p>
							<p className="text-xs text-black/40 font-medium">Per bottle</p>
						</div>
						<div className="w-px h-10 bg-black/10" />
						<div>
							<p className="text-2xl font-black">{active.sugar}</p>
							<p className="text-xs text-black/40 font-medium">Sugar</p>
						</div>
						<div className="w-px h-10 bg-black/10" />
						<div>
							<p className="text-2xl font-black">350ml</p>
							<p className="text-xs text-black/40 font-medium">Volume</p>
						</div>
					</div>

					{/* CTA */}
					<div className="flex items-center gap-4">
						<button
							className="flex-1 max-w-[200px] py-4 rounded-2xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
							style={{
								backgroundColor: active.color,
								transition: "background-color 0.6s ease",
							}}
						>
							Add to Cart
						</button>
						<div className="text-right">
							<p className="text-3xl font-black">{active.price}</p>
							<p className="text-xs text-black/40">per bottle</p>
						</div>
					</div>
				</div>

				{/* Right: Bottle visual */}
				<div className="flex-1 flex flex-col items-center justify-center max-w-md relative">
					{/* Glow behind bottle */}
					<div
						className="absolute w-64 h-64 rounded-full blur-3xl opacity-40 transition-all duration-700"
						style={{ backgroundColor: active.color }}
					/>

					<div
						className="relative z-10 flex justify-center items-center w-full max-w-[180px] lg:max-w-[220px] select-none"
						style={{
							filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.15))",
							opacity: isAnimating ? 0 : 1,
							transform: isAnimating ? "scale(0.85)" : "scale(1)",
							transition: "opacity 0.3s ease, transform 0.3s ease",
							animation: "floatBottle 3s ease-in-out infinite",
						}}
					>
						{/* {active.emoji} */}
						<img src={active.emoji} alt={active.name} className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] object-contain drop-shadow-xl" />
					</div>

					{/* Dot indicators */}
					<div className="flex items-center gap-2 mt-8 z-10">
						{products.map((_, i) => (
							<button
								key={i}
								onClick={() => {
									setIsAnimating(true);
									setTimeout(() => {
										setActiveIdx(i);
										setIsAnimating(false);
									}, 300);
								}}
								className="transition-all duration-300"
								style={{
									width: i === activeIdx ? "28px" : "8px",
									height: "8px",
									borderRadius: "999px",
									backgroundColor:
										i === activeIdx ? active.color : active.color + "33",
								}}
							/>
						))}
					</div>

					{/* Nav arrows */}
					<div className="flex gap-3 mt-6 z-10">
						<button
							onClick={() => rotate(-1)}
							className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-white transition-all hover:scale-110 active:scale-95 shadow-sm"
						>
							←
						</button>
						<button
							onClick={() => rotate(1)}
							className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-white transition-all hover:scale-110 active:scale-95 shadow-sm"
						>
							→
						</button>
					</div>
				</div>
			</div>

			<style>{`
        @keyframes floatBottle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
      `}</style>
		</section>
	);
}
