import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Hackathons } from "@/components/sections/Hackathons";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <LoadingScreen />
      
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Hackathons />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
