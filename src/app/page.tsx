import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ParticleField } from "@/components/three/ParticleField";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Hackathons } from "@/components/sections/Hackathons";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <LoadingScreen />
      <ParticleField />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Hackathons />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
