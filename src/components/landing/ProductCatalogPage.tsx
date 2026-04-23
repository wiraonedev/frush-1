// ProductCatalogPage.tsx
// Drop-in page that combines all three catalog sections.
// Import individual sections separately from their own files if needed.

import ProductCatalogHero from "./ProductCatalogHero";
import ProductCatalogGrid from "./ProductCatalogGrid";
import ProductCatalogStrip from "./ProductCatalogStrip";

export default function ProductCatalogPage() {
	return (
		<main style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
			{/* Section 1: Interactive hero with rotating featured product */}
			<ProductCatalogHero />

			{/* Section 2: Full product grid with filters */}
			<ProductCatalogGrid />

			{/* Section 3: Dark compare/explore section */}
			{/* <ProductCatalogStrip /> */}
		</main>
	);
}

// Named exports for individual section usage:
export { default as ProductCatalogHero } from "./ProductCatalogHero";
export { default as ProductCatalogGrid } from "./ProductCatalogGrid";
export { default as ProductCatalogStrip } from "./ProductCatalogStrip";
