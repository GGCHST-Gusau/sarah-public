import { HOW_IT_WORKS_STEPS } from "@/constants/admissions";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const HowAdmissionWorks = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="HOW IT WORKS"
            label="Your Journey to Admission"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            From your first choice of programme to your child's official
            enrollment, here is how the admission sequence unfolds step by step.
          </p>
        </div>

        {/* Editorial Vertical Numbered Timeline */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="relative space-y-8 before:absolute before:left-6 before:top-4 before:h-[calc(100%-32px)] before:w-0.5 before:bg-gradient-to-b before:from-primary-blue before:via-secondary-gold before:to-primary-blue md:space-y-12 md:before:left-8">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex items-start gap-5 sm:gap-8"
              >
                {/* Number Badge */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-primary-blue bg-card font-mono text-sm font-bold text-primary-blue shadow-md md:h-16 md:w-16 md:text-base">
                  {step.number}
                </div>

                {/* Content Block */}
                <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-xs transition-colors hover:border-primary-blue/40 sm:p-7">
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-foreground/90 sm:text-base">
                    {step.description}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default HowAdmissionWorks;
