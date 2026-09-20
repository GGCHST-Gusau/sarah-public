import { ADMISSION_CONFIG } from "@/constants/admissions";
import { ArrowRight, PhoneCall } from "lucide-react";
import PageSection from "../shared/page-section";

const FinalAdmissionsCta = () => {
  return (
    <PageSection>
      <div className="relative overflow-hidden rounded-3xl bg-primary-dark-blue px-6 py-16 text-center md:px-12 md:py-20 shadow-xl">
        {/* Decorative elements matching existing CTA */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-blue/25 blur-xl" />
        <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-secondary-gold/15 blur-xl" />

        <div className="relative mx-auto max-w-3xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary-gold sm:text-sm">
            READY TO BEGIN?
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Start Your Child’s Admission Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 md:text-lg">
            Take the first step toward joining our school community. Review the
            admission process and begin your application through our dedicated
            admissions portal.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={ADMISSION_CONFIG.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary-gold px-7 py-3.5 text-sm font-bold text-primary-dark-blue shadow-md transition-all hover:bg-yellow-400 hover:gap-3"
            >
              <span>Start Your Application</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={ADMISSION_CONFIG.contactPath}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4 text-secondary-gold" />
              <span>Contact Admissions</span>
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default FinalAdmissionsCta;
