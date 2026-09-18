import POSHero from "@/app/components/products/pos/poshero";
import POSHighlights from "@/app/components/products/pos/posHighlights";
import POSFeatures from "@/app/components/products/pos/posFeatures";
import POSShowcase from "@/app/components/products/pos/posShowcase";

export default function POSSystemsPage() {
  return (
    <>
      <POSHero />
      <POSHighlights />
      <POSFeatures />
      <POSShowcase />
    </>
  );
}