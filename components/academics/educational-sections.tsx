import { ACADEMIC_DIVISIONS } from "@/constants/academics";
import { CheckCircle2, Clock, Users } from "lucide-react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const EducationalSections = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Section Header */}
        <SectionTitle
          title="Our Educational Sections"
          label="A Complete Educational Journey"
          className="text-center"
        />

        {/* 4 Divisions Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
          {ACADEMIC_DIVISIONS.map((division) => {
            const Icon = division.icon;
            return (
              <div
                key={division.id}
                id={division.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-lg lg:p-8"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-blue to-secondary-gold origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                <div>
                  {/* Division Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-secondary-gold/15 px-3 py-1 text-xs font-semibold text-secondary-gold">
                      {division.ageGroup}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-foreground">
                    {division.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-secondary-gold sm:text-sm">
                    {division.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
                    {division.summary}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 border-t border-border/70 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary-blue">
                      Curriculum Highlights
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {division.curriculumHighlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-xs text-foreground/90 sm:text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary-gold" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Meta */}
                <div className="mt-8 flex items-center gap-2 border-t border-border/70 pt-4 text-xs font-medium text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-primary-blue" />
                  <span>{division.schedule}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default EducationalSections;
