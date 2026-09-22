import AboutHero from "@/app/components/about/AboutHero";
import MissionVisionValues from "@/app/components/about/MissionVisionValues";
import AboutJourney from "@/app/components/about/AboutJourney";
import AboutTeam from "@/app/components/about/AboutTeam";

// AboutPage: Combines all sections to form the complete About Us page for Circle One
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5]">
      <AboutHero />
      <MissionVisionValues />
      <AboutJourney />
      <AboutTeam />
    </main>
  );
}