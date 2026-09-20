import { HELP_DESKS } from "@/constants/resources";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Clock, Mail, Phone, HeadphonesIcon } from "lucide-react";

const NeedHelp = () => {
  return (
    <PageSection id="help">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Assistance & Enquiries"
            label="Need Help Finding a Resource or Accessing a Portal?"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Our administrative and technical support teams are readily available
            to assist parents, guardians, and students with any portal access,
            document requests, or registration assistance.
          </p>
        </div>

        {/* 4 Help Desks */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HELP_DESKS.map((desk) => {
            const Icon = desk.icon;
            return (
              <div
                key={desk.title}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-md"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg">
                    {desk.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {desk.description}
                  </p>
                </div>

                <div className="mt-6 space-y-2 border-t border-border/70 pt-4 text-xs">
                  <a
                    href={`mailto:${desk.contact}`}
                    className="flex items-center gap-2 text-primary-blue hover:underline"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{desk.contact}</span>
                  </a>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-secondary-gold" />
                    <span>{desk.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground/80">
                    <Clock className="h-3.5 w-3.5 shrink-0" />
                    <span>{desk.hours}</span>
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

export default NeedHelp;
