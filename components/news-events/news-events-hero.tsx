import { images } from "@/assets/images";
import Image from "next/image";
import PageSection from "../shared/page-section";
import { Bell, Calendar, Newspaper, Sparkles } from "lucide-react";

const NewsEventsHero = () => {
  const { news_1, news_2, event1, event2 } = images;

  return (
    <PageSection className="bg-primary-dark-blue">
      <div className="flex items-center justify-between gap-8 py-8 text-white max-lg:flex-col xl:gap-14">
        {/* Content */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-xs">
            <Sparkles className="h-4 w-4 text-secondary-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary-gold sm:text-sm">
              News & Happenings • Sarah Academy
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-xl">
            Stay Connected With Our School Community
          </h1>

          <p className="text-white/80 md:text-lg">
            Keep up with the latest news, achievements, announcements, events,
            and memorable moments from across our school community.
          </p>
        </div>
      </div>
    </PageSection>
  );
};

export default NewsEventsHero;
