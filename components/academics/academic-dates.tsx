import { NIGERIAN_ACADEMIC_TERMS } from "@/constants/academics";
import { CalendarDays, Clock, Info } from "lucide-react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const AcademicDates = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <SectionTitle
          title="Academic Calendar"
          label="Important Academic Dates & Session Milestones"
          className="text-center"
        />

        {/* 3 Terms Layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          {NIGERIAN_ACADEMIC_TERMS.map((termInfo) => (
            <div
              key={termInfo.term}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-md"
            >
              <div>
                {/* Term Header */}
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <span className="rounded-full bg-secondary-gold/15 px-3 py-1 text-xs font-semibold text-secondary-gold">
                    {termInfo.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <Clock className="h-3.5 w-3.5 text-primary-blue" />
                    {termInfo.period}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-primary-blue">
                  {termInfo.term}
                </h3>

                {/* Milestones List */}
                <div className="mt-5 space-y-3.5">
                  {termInfo.milestones.map((milestone) => (
                    <div
                      key={milestone.event}
                      className="flex items-start gap-3 text-xs sm:text-sm"
                    >
                      <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-secondary-gold" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground">
                          {milestone.event}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {milestone.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice & Disclaimer Box */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-start gap-3.5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-secondary-gold" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-foreground">
                Calendar Schedule Notice
              </h4>
              <p className="text-xs leading-5 text-muted-foreground sm:text-sm">
                Specific dates are aligned with the Nigerian Ministry of
                Education and may be adjusted in line with official directives
                and public holidays. Official termly circulars, examination
                timetables, and event updates are distributed via the parent
                portal and school bulletins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AcademicDates;
