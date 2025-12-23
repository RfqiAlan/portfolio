import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { TechArsenal } from "@/components/sections/TechArsenal";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <TechArsenal />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}
