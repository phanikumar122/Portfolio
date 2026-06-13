import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Hackathons } from "@/components/sections/Hackathons";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <AnimatedBackground />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
