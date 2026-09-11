import { images } from "@/assets/images";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import Image from "next/image";

const LEADERS = [
  {
    name: "ALH. ABDULMALIK YUSUF YAHUZA",
    role: "Proprietor1",
    image: images.proprietor,
  },
  {
    name: "ALH. ABDULMALIK YUSUF YAHUZA",
    role: "Proprietor2",
    image: images.proprietor,
  },
  {
    name: "ALH. ABDULMALIK YUSUF YAHUZA",
    role: "Proprietor3",
    image: images.proprietor,
  },
  {
    name: "ALH. ABDULMALIK YUSUF YAHUZA",
    role: "Proprietor4",
    image: images.proprietor,
  },
  {
    name: "ALH. ABDULMALIK YUSUF YAHUZA",
    role: "Proprietor5",
    image: images.proprietor,
  },
  {
    name: "ALH. ABDULMALIK YUSUF YAHUZA",
    role: "Proprietor6",
    image: images.proprietor,
  },
];

const Leadership = () => {
  return (
    <PageSection>
      <SectionTitle
        title="School Leadership"
        label="Meet Our Leadership"
        subtitle="Our school is guided by dedicated leaders committed to creating an environment where every child can learn, grow, and thrive."
        className="text-center mx-auto"
      />

      {/* Leaders */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {LEADERS.map((leader) => (
          <div key={leader.role} className="group">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
              <Image
                src={leader.image}
                alt={leader.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="pt-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-secondary-gold">
                {leader.role}
              </p>

              <h3 className="mt-1 text-xl font-bold text-primary-blue md:text-2xl">
                {leader.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Leadership;
