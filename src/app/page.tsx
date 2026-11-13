import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";

// Below-the-fold sections are still server-rendered, but each hydrates in its own chunk so
// the hero becomes interactive without waiting for the whole page.
const Projects = dynamic(() => import("@/components/sections/Projects").then((m) => m.Projects));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => m.Services));
const Process = dynamic(() => import("@/components/sections/Process").then((m) => m.Process));
const Experience = dynamic(() =>
  import("@/components/sections/Experience").then((m) => m.Experience),
);
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => m.Contact));

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Projects />
      <Services />
      <Process />
      <Experience />
      <Contact />
    </>
  );
}
