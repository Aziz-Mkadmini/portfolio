import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { SocialProof } from "@/components/sections/SocialProof";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Experience />
      <SocialProof />
      <Contact />
      <FinalCTA />
    </>
  );
}
