import { Button } from "@/components/ui/button";
import heroBottle from "@/assets/images/real/2.webp";

const HeroSection = () => {
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
							Fresh in <span className="text-gradient">Every Rush.</span>
						</h1>

						<p
							className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in"
							style={{ animationDelay: "0.2s" }}
						>
							A fresh, light, and natural fruit drink designed for your modern
							lifestyle.
						</p>

						<div
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
							style={{ animationDelay: "0.4s" }}
						>
							<Button variant="hero" size="lg">
								Explore Our Drinks
							</Button>
							<Button variant="heroOutline" size="lg">
								Order Now
							</Button>
						</div>

						{/* Stats */}
						<div
							className="flex gap-8 mt-12 justify-center lg:justify-start animate-fade-in"
							style={{ animationDelay: "0.6s" }}
						>
							<div className="text-center">
								<p className="text-3xl font-bold text-primary">100%</p>
								<p className="text-sm text-muted-foreground">Natural</p>
							</div>
							<div className="text-center">
								<p className="text-3xl font-bold text-secondary">2+</p>
								<p className="text-sm text-muted-foreground">Flavors</p>
							</div>
							<div className="text-center">
								<p className="text-3xl font-bold text-accent">10+</p>
								<p className="text-sm text-muted-foreground">Happy Customers</p>
							</div>
						</div>
					</div>

					{/* Product Image */}
					<div className="order-1 lg:order-2 relative flex justify-center">
						<div className="relative">
							{/* Floating decorative elements */}
							<div className="absolute -top-8 -left-8 w-16 h-16 bg-frush-yellow/30 rounded-full blur-xl animate-float" />
							<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-frush-green/30 rounded-full blur-xl animate-float-delayed" />
							<div className="absolute top-1/2 -left-12 w-12 h-12 bg-frush-red/30 rounded-full blur-xl animate-float-slow" />

							{/* Main bottle image */}
							<img
								src={heroBottle}
								alt="Frush fruit drink bottle with fresh oranges and strawberries"
								className="w-full max-w-md lg:max-w-lg xl:max-w-xl fruit-shadow animate-bounce-gentle"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
