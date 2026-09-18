import Hero from "@/app/components/home/Hero";
import FeatureStrip from "@/app/components/home/FeatureStrip";
import StatsSection from "@/app/components/home/StatsSection";
import Products from "@/app/components/home/Products";
import CTASection from "@/app/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      <div className="flex-grow">
        <Hero />
        <FeatureStrip />
        <Products/>
        <StatsSection />
        <CTASection/>
      </div>
    </main>
  );
}