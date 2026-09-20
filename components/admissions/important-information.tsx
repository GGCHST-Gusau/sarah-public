import { ADMISSION_CONFIG } from "@/constants/admissions";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle, ShieldCheck } from "lucide-react";

const ImportantInformation = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="IMPORTANT INFORMATION"
            label="Before You Apply"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Review key operational details, verification venues, and office hours
            before initiating your child's online application.
          </p>
        </div>

        {/* 6 Key Information Tiles */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Current Session */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-7">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                <Calendar className="h-5 w-5" />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                Academic Session
              </span>
              <h3 className="mt-1 text-lg font-bold text-foreground">
                {ADMISSION_CONFIG.currentSession}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                Applications are currently being processed for new intake into
                Nursery, Primary, Secondary, and Islamiyya sections.
              </p>
            </div>
            <div className="mt-5 border-t border-border/70 pt-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="h-3.5 w-3.5" />
                Applications Open
              </span>
            </div>
          </div>

          {/* Verification Venue */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-7">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                Verification Venue
              </span>
              <h3 className="mt-1 text-lg font-bold text-foreground">
                Main Campus, Gusau
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                {ADMISSION_CONFIG.verificationLocation}
              </p>
            </div>
            <div className="mt-5 border-t border-border/70 pt-3 text-xs text-muted-foreground">
              Sign in at main security gatehouse
            </div>
          </div>

          {/* Office Hours */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-7">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                <Clock className="h-5 w-5" />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                Admissions Desk Hours
              </span>
              <h3 className="mt-1 text-lg font-bold text-foreground">
                {ADMISSION_CONFIG.officeHours}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                Open for physical document submission, candidate screening, and
                guided campus tours.
              </p>
            </div>
            <div className="mt-5 border-t border-border/70 pt-3 text-xs text-muted-foreground">
              Closed Saturdays, Sundays & Public Holidays
            </div>
          </div>

          {/* Admissions Telephone */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-7">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                <Phone className="h-5 w-5" />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                Admissions Hotline
              </span>
              <h3 className="mt-1 text-lg font-bold text-foreground font-mono">
                {ADMISSION_CONFIG.admissionsPhone}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                Direct phone inquiries regarding placement, entry assessments, and
                school bus routes.
              </p>
            </div>
            <div className="mt-5 border-t border-border/70 pt-3">
              <a
                href={`tel:${ADMISSION_CONFIG.admissionsPhone.replace(/\s+/g, "")}`}
                className="text-xs font-semibold text-primary-blue hover:underline"
              >
                Call Admissions Desk
              </a>
            </div>
          </div>

          {/* Admissions Email */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-7">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                <Mail className="h-5 w-5" />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                Official Inquiries Email
              </span>
              <h3 className="mt-1 text-lg font-bold text-foreground truncate">
                {ADMISSION_CONFIG.admissionsEmail}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                Submit digital verification queries or request admission status
                updates directly via email.
              </p>
            </div>
            <div className="mt-5 border-t border-border/70 pt-3">
              <a
                href={`mailto:${ADMISSION_CONFIG.admissionsEmail}`}
                className="text-xs font-semibold text-primary-blue hover:underline"
              >
                Send Email Inquiry
              </a>
            </div>
          </div>

          {/* Verification Protocol */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-7">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                Verification Protocol
              </span>
              <h3 className="mt-1 text-lg font-bold text-foreground">
                In-Person Validation
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                Bring original copies of certificates and candidate to our
                administrative office to complete the physical verification step.
              </p>
            </div>
            <div className="mt-5 border-t border-border/70 pt-3 text-xs text-muted-foreground">
              Required for all new applicants
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default ImportantInformation;
