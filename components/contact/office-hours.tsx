import { OFFICE_HOURS } from "@/constants/contact-page";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Calendar, Clock, AlertCircle } from "lucide-react";

const OfficeHours = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Working Hours"
            label="Administrative & Departmental Timetable"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Our offices operate during official school hours to assist families.
            We recommend scheduling appointments in advance for administrative or
            leadership consultations.
          </p>
        </div>

        {/* 4 Office Hours Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OFFICE_HOURS.map((item) => (
            <div
              key={item.department}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-secondary-gold">
                  <Calendar className="h-4 w-4" />
                  <span>{item.days}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {item.department}
                </h3>

                <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary-blue/10 px-3 py-1 text-sm font-bold text-primary-blue">
                  <Clock className="h-4 w-4" />
                  <span>{item.hours}</span>
                </div>

                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Advice Box */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary-gold" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-foreground">
                Appointments with Principal & Department Heads
              </h4>
              <p className="text-xs leading-5 text-muted-foreground sm:text-sm">
                To ensure adequate attention, meetings with the School Principal,
                Vice-Principals, or Tahfiz Director are conducted by appointment.
                Please contact the front desk via phone (+234 813 662 5135) or
                submit a request through our online message form at least 24 hours
                in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default OfficeHours;
