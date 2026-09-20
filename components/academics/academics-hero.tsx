import { images } from "@/assets/images";
import Image from "next/image";
import PageSection from "../shared/page-section";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";

const AcademicsHero = () => {
  const { about_img, about_img2, about_img3, about_img4 } = images;

  return (
    <PageSection className="bg-primary-dark-blue">
      <div className="flex items-center justify-between gap-8 py-8 text-white max-lg:flex-col xl:gap-14">
        {/* Content */}
        <div className="flex flex-col gap-5 md:gap-8 xl:w-1/2">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-xs">
            <Sparkles className="h-4 w-4 text-secondary-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary-gold sm:text-sm">
              Academics at Sarah Academy
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Learning That Builds More Than Knowledge
          </h1>

          <p className="max-w-xl leading-7 text-white/80 md:text-lg">
            Our academic programmes are designed to help every student build
            strong foundations, discover their abilities, think critically, and
            develop the knowledge, skills, and character they need to succeed in
            school and beyond.
          </p>

          {/* Quick Academic Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-xs">
              <span className="block text-2xl font-bold text-secondary-gold">
                4
              </span>
              <span className="text-xs text-white/75 sm:text-sm">
                Educational Pathways
              </span>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-xs">
              <span className="block text-2xl font-bold text-secondary-gold">
                100%
              </span>
              <span className="text-xs text-white/75 sm:text-sm">
                Dual Curriculum Harmony
              </span>
            </div>
            <div className="col-span-2 rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-xs sm:col-span-1">
              <span className="block text-2xl font-bold text-secondary-gold">
                NERDC
              </span>
              <span className="text-xs text-white/75 sm:text-sm">
                Aligned Standards
              </span>
            </div>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="relative w-full lg:max-w-150 lg:w-2/5 xl:w-1/2 shrink-0">
          <div className="absolute top-1/2 left-1/2 -z-10 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-gold/25 blur-[140px]" />
          <div className="absolute top-0 right-0 -z-10 size-48 rounded-full bg-primary-blue/30 blur-[120px]" />

          <div className="grid aspect-[1.08] grid-cols-2 gap-3">
            {[
              {
                src: about_img,
                className: "rounded-tl-[80px]",
                label: "Early Years",
              },
              {
                src: about_img2,
                className: "rounded-tr-[24px]",
                label: "Primary School",
              },
              {
                src: about_img3,
                className: "rounded-bl-[24px]",
                label: "Secondary School",
              },
              {
                src: about_img4,
                className: "rounded-br-[80px]",
                label: "Tahfiz & Islamiyya",
              },
            ].map(({ src, className, label }, index) => (
              <div
                key={label}
                className={`group relative overflow-hidden shadow-lg ${className}`}
              >
                <Image
                  src={src}
                  alt={label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark-blue/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white sm:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AcademicsHero;
