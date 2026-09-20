import { STUDENT_DEVELOPMENT_AREAS } from "@/constants/academics";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const StudentDevelopment = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <SectionTitle
          title="Holistic Growth"
          label="How We Develop the Whole Student"
          className="text-center"
        />

        {/* 4 Developmental Pillars */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STUDENT_DEVELOPMENT_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold text-secondary-gold">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-primary-blue">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 h-1 w-8 rounded-full bg-secondary-gold/40 transition-all duration-300 group-hover:w-16 group-hover:bg-primary-blue" />
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default StudentDevelopment;
