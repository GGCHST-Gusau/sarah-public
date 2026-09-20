import { images } from "@/assets/images";
import { LEARNING_APPROACH_PILLARS } from "@/constants/academics";
import Image from "next/image";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const LearningApproach = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10 lg:gap-16">
        {/* Header */}
        <SectionTitle
          title="Our Approach to Learning"
          label="A Learning Experience Designed Around Every Child"
          className="text-center"
        />

        {/* Content & Pillars */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Image with Decorative Accent */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="aspect-4/5 overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src={images.about_about}
                alt="Sarah Academy students engaging in active classroom learning"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Ambient decorative backdrop */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-28 w-28 rounded-3xl bg-secondary-gold/20 blur-xl" />
            <div className="absolute -top-4 -right-4 -z-10 h-28 w-28 rounded-3xl bg-primary-blue/15 blur-xl" />
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {LEARNING_APPROACH_PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/10 p-6 shadow-xs transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold text-secondary-gold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary-blue">
                    {pillar.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default LearningApproach;
