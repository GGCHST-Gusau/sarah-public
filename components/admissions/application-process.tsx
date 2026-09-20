import { ADMISSION_CONFIG, APPLICATION_PROCESS_STEPS } from "@/constants/admissions";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { ArrowRight, CheckCircle2, Laptop, LogIn } from "lucide-react";

const ApplicationProcess = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="ONLINE APPLICATION"
            label="Ready to Apply?"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Applications are completed through our dedicated admissions portal.
            You can begin the process online and provide the information required
            for your child’s admission.
          </p>
        </div>

        {/* Highlighted Portal Steps Box */}
        <div className="overflow-hidden rounded-3xl border border-secondary-gold/40 bg-gradient-to-br from-primary-dark-blue to-primary-blue p-6 text-white shadow-xl sm:p-10 md:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Steps list */}
            <div className="space-y-4 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-secondary-gold backdrop-blur-xs">
                5-Step Online Workflow
              </span>

              <h3 className="text-2xl font-bold sm:text-3xl">
                Start, Save & Complete Online
              </h3>

              <div className="mt-6 space-y-3.5">
                {APPLICATION_PROCESS_STEPS.map((s) => (
                  <div key={s.step} className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-gold text-xs font-bold text-primary-dark-blue">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {s.title}
                      </h4>
                      <p className="text-xs text-white/75 sm:text-sm">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Card */}
            <div className="flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xs lg:col-span-5 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-gold/20 text-secondary-gold">
                <Laptop className="h-6 w-6" />
              </div>

              <h4 className="text-xl font-bold text-white">
                Dedicated Admissions Portal
              </h4>

              <p className="text-xs leading-5 text-white/80 sm:text-sm">
                Access our secure, mobile-friendly admission portal to register as a
                parent, register one or multiple children, and submit your application.
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={ADMISSION_CONFIG.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary-gold py-3 px-5 text-xs font-bold text-primary-dark-blue transition-colors hover:bg-yellow-400 sm:text-sm"
                >
                  <span>Go to Application Portal</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={ADMISSION_CONFIG.portalSignInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 py-3 px-5 text-xs font-semibold text-white transition-colors hover:bg-white/10 sm:text-sm"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Already Started? Sign In</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default ApplicationProcess;
