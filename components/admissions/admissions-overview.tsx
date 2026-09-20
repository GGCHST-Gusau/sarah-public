import { ADMISSION_STAGES } from "@/constants/admissions";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const AdmissionsOverview = () => {
  return (
    <PageSection id="overview">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="ADMISSIONS"
            label="A Simple Path to Admission"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            We have designed our admission experience to be clear, supportive,
            and straightforward. Review the information below to understand each
            stage before proceeding to our dedicated admissions portal.
          </p>
        </div>

        {/* 3 Clear Stages - Clean Editorial Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {ADMISSION_STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-md sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue transition-colors group-hover:bg-primary-blue group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-secondary-gold">
                      {stage.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-foreground transition-colors group-hover:text-primary-blue">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 h-1 w-12 rounded-full bg-secondary-gold/30 transition-all duration-300 group-hover:w-20 group-hover:bg-primary-blue" />
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default AdmissionsOverview;
