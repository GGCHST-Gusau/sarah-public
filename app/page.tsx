import Contact from "@/components/home/contact";
import Events from "@/components/home/events";
import Hero from "@/components/home/hero";
import Intro from "@/components/home/intro";
import LatestNews from "@/components/home/latest-news";
import Sections from "@/components/home/sections";
import WhyUs from "@/components/home/why-us";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Intro />
      <Sections />
      <WhyUs />
      <LatestNews />
      <Events />
      <Contact />
    </div>
  );
}
