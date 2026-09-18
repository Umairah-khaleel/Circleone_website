import ProductsHero from "@/app/components/products/ProductsHero";
import ProductGrid from "@/app/components/products/ProductGrid";
import WhyProducts from "@/app/components/products/WhyProducts";
import CustomSolutionCTA from "@/app/components/products/CustomSolutionCTA";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductGrid />
      <WhyProducts />
      <CustomSolutionCTA />
    </>
  );
}