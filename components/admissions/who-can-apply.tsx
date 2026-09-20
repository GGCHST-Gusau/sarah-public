import { WHO_CAN_APPLY_SECTIONS } from "@/constants/admissions";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const WhoCanApply = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="WHO CAN APPLY"
            label="Find the Right Place for Your Child"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            We welcome applications across four distinct educational sections,
            each designed to nurture students at their specific stage of
            intellectual, personal, and spiritual growth.
          </p>
        </div>

        {/* 4 Sections Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {WHO_CAN_APPLY_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-md sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                      {section.tagline}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-foreground group-hover:text-primary-blue transition-colors">
                    {section.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-foreground/90 sm:text-base">
                    {section.description}
                  </p>

                  <div className="mt-5 border-t border-border/70 pt-4">
                    <p className="text-xs leading-5 text-muted-foreground sm:text-sm">
                      <span className="font-semibold text-foreground">Focus:</span>{" "}
                      {section.curriculum}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default WhoCanApply;
