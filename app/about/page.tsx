import AboutHero from "@/components/about/about_hero";
import AboutAbout from "@/components/about/about_about";
import History from "@/components/about/history";
import MissionVision from "@/components/about/mission_vision";
import Values from "@/components/about/values";
import EducationalPhilosophy from "@/components/about/educational_philosophy";
import Leadership from "@/components/about/leadership";
import WhatSetApart from "@/components/about/what_set_apart";

export default function Home() {
  return (
    <>
      <AboutHero />
      <AboutAbout />
      <History />
      <MissionVision />
      <Values />
      <EducationalPhilosophy />
      <Leadership />
      {/* <WhatSetApart /> */}
    </>
  );
}
