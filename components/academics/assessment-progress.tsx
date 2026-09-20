import { ASSESSMENT_SYSTEM } from "@/constants/academics";
import { CheckCircle, HelpCircle, LineChart } from "lucide-react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const AssessmentProgress = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <SectionTitle
          title="Measuring Growth"
          label="Assessment & Progress Tracking"
          className="text-center"
        />
        {/* Assessment Breakdown Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ASSESSMENT_SYSTEM.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-md"
            >
              <div>
                <div className="inline-flex rounded-full bg-secondary-gold/15 px-3 py-1 text-xs font-bold text-secondary-gold">
                  {item.percentage}
                </div>

                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-muted-foreground sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Assessment Philosophy Note */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
              <LineChart className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-foreground sm:text-lg">
                Transparent Termly Diagnostics & Parent Portal
              </h4>
              <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                Parents receive granular evaluation summaries across both
                cognitive subjects and behavioral/affective domains (neatness,
                punctuality, Qur'an recitation retention, and social
                interaction), ensuring no developmental gap goes unnoticed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AssessmentProgress;
