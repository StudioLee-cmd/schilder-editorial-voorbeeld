"use client";

import { useAutoReveal } from "@/hooks/useInView";
import Header from "@/components/Header";
import SectionHero from "@/components/SectionHero";
import SectionIntro from "@/components/SectionIntro";
import SectionShowcase from "@/components/SectionShowcase";
import SectionBanner from "@/components/SectionBanner";
import SectionColumns from "@/components/SectionColumns";
import SectionVision from "@/components/SectionVision";
import SectionCustomize from "@/components/SectionCustomize";
import SectionTeam from "@/components/SectionTeam";
import SectionFaq from "@/components/SectionFaq";
import SectionFooter from "@/components/SectionFooter";

export default function Home() {
  useAutoReveal();

  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionIntro />
        <SectionShowcase />
        <SectionBanner />
        <SectionColumns />
        <SectionVision />
        <SectionCustomize />
        <SectionTeam />
        <SectionFaq />
        <SectionFooter />
      </main>
    </>
  );
}
