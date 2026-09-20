import { images } from "@/assets/images";
import Image from "next/image";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Camera, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "Annual Speech & Prize Giving Day",
    date: "Past Session Highlight",
    category: "Academic Honors",
    image: images.about_hero,
    description:
      "Celebrating outstanding scholars across all divisions who achieved top academic positions and demonstrated exemplary moral character.",
  },
  {
    title: "Inter-House Athletics & Track Finals",
    date: "Sports Highlight",
    category: "Athletics",
    image: images.event2,
    description:
      "A thrilling display of student sportsmanship, endurance, and cheer, bringing parents, teachers, and student houses together.",
  },
  {
    title: "Tahfiz Commemoration & Qur'an Recitation Night",
    date: "Spiritual Milestone",
    category: "Tahfiz",
    image: images.event3,
    description:
      "Honoring young reciters who completed comprehensive portions of the Holy Qur'an with authentic Tajweed and reverent discipline.",
  },
  {
    title: "Student Science & Practical Invention Expo",
    date: "STEM Highlight",
    category: "Innovation",
    image: images.why_us,
    description:
      "Junior Engineers and Technicians presenting working solar and electrical circuits, biological models, and computer coding projects.",
  },
];

const PastHighlights = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="School Memories"
            label="Past Event Highlights & Celebrations"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            A visual reflection of the memorable milestones, athletic victories,
            spiritual gatherings, and creative exhibitions that define life at
            Sarah Academy.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-lg"
            >
              <div>
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-primary-dark-blue/80 px-2.5 py-0.5 text-xs font-semibold text-secondary-gold backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.date}
                  </span>
                  <h4 className="mt-1 text-base font-bold text-foreground group-hover:text-primary-blue transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default PastHighlights;
