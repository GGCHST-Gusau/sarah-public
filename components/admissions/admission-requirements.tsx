import { ADMISSION_REQUIREMENTS } from "@/constants/admissions";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { CheckCircle2, Info } from "lucide-react";

const AdmissionRequirements = () => {
  return (
    <PageSection className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="REQUIREMENTS"
            label="What You’ll Need"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Having the necessary information and supporting credentials ready
            will make the online application swift and seamless. Please review the
            checklist below.
          </p>
        </div>

        {/* 3 Requirements Groups */}
        <div className="grid gap-6 lg:grid-cols-3">
          {ADMISSION_REQUIREMENTS.map((group) => (
            <div
              key={group.group}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8"
            >
              <div>
                <h3 className="text-xl font-bold text-primary-blue">
                  {group.group}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                  {group.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-border/70 pt-5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs text-foreground/90 sm:text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Important Note */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-start gap-3.5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-secondary-gold" />
            <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
              <strong className="text-foreground">Please Note:</strong> Additional
              documents or academic placement diagnostics may be required
              depending on the specific programme or class level being applied for.
              Official physical verification of documents is conducted at the
              school before final admission confirmation.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AdmissionRequirements;
