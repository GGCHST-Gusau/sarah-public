import { AFTER_YOU_APPLY_STEPS } from "@/constants/admissions";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const AfterYouApply = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="AFTER YOU APPLY"
            label="What Happens Next?"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Submitting your application online initiates our admission pipeline.
            Here is the verification and review path that leads to your child's
            official admission decision.
          </p>
        </div>

        {/* Vertical Timeline Process */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="relative space-y-6 before:absolute before:left-5 before:top-3 before:h-[calc(100%-24px)] before:w-0.5 before:bg-primary-blue/30 sm:before:left-6">
            {AFTER_YOU_APPLY_STEPS.map((step) => (
              <div key={step.number} className="relative flex items-start gap-4 sm:gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-blue bg-card font-mono text-xs font-bold text-primary-blue shadow-xs sm:h-12 sm:w-12 sm:text-sm">
                  {step.number}
                </div>

                <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-xs transition-colors hover:border-primary-blue/40 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-foreground sm:text-lg">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-secondary-gold/15 px-2.5 py-0.5 text-[11px] font-semibold text-secondary-gold">
                      {step.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Crucial Note */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-6">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <h4 className="text-sm font-bold text-foreground">
                Important Verification Notice
              </h4>
              <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                Submitting an online application is the first step and does not
                automatically guarantee admission. Physical verification of original
                birth documents, previous school records, and candidate interaction
                at our Gusau campus are mandatory before an official admission offer
                is granted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AfterYouApply;
