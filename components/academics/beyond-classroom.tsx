import { images } from "@/assets/images";
import { BEYOND_CLASSROOM_PROGRAMS } from "@/constants/academics";
import Image from "next/image";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const BeyondClassroom = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <SectionTitle
          title="Co-Curricular Life"
          label="Learning Beyond the Classroom"
          className="text-center"
        />

        {/* Showcase Grid */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left Feature Card with Image */}
          <div className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-border bg-card shadow-md lg:col-span-5 min-h-[340px]">
            <Image
              src={images.event1}
              alt="Students participating in co-curricular activities at Sarah Academy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-blue/95 via-primary-dark-blue/50 to-transparent" />

            <div className="relative z-10 p-6 text-white sm:p-8">
              <span className="inline-block rounded-full bg-secondary-gold px-3 py-1 text-xs font-bold text-primary-dark-blue">
                Active Student Life
              </span>
              <h3 className="mt-3 text-2xl font-bold">
                Clubs, Sports & Creative Competitions
              </h3>
              <p className="mt-2 text-xs leading-5 text-white/80 sm:text-sm">
                From Jet Club science fairs and inter-house athletics to annual
                Qur'an recitation festivals, students find avenues to shine and
                lead.
              </p>
            </div>
          </div>

          {/* Right 4 Co-Curricular Program Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {BEYOND_CLASSROOM_PROGRAMS.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-muted/10 p-6 shadow-xs transition-colors hover:border-primary-blue/40"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-secondary-gold">
                        {program.category}
                      </span>
                    </div>

                    <h4 className="mt-4 text-lg font-bold text-primary-blue">
                      {program.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                      {program.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default BeyondClassroom;
