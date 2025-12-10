import { Hero } from "@/components/home/Hero";
import { ExperienceSection } from "@/components/home/ExperienceSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ExperienceSection />
    </div>
  );
}
