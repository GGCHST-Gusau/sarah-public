import { images } from "@/assets/images";
import { ADMISSION_CONFIG } from "@/constants/admissions";
import Image from "next/image";
import PageSection from "../shared/page-section";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";

const AdmissionsHero = () => {
  return (
    <PageSection className="relative overflow-hidden bg-primary-dark-blue text-white py-32 md:py-40">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-primary-blue/25 blur-[140px]" />
      <div className="absolute top-1/3 right-10 -z-10 h-72 w-72 rounded-full bg-secondary-gold/20 blur-[130px]" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Copy & Actions */}
        <div className="flex flex-col gap-5 md:gap-7 lg:col-span-7">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-xs">
            <Sparkles className="h-4 w-4 text-secondary-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary-gold sm:text-sm">
              ADMISSIONS
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Give Your Child a Stronger Start
          </h1>

          <p className="max-w-xl text-base leading-7 text-white/80 md:text-lg">
            Begin your child’s journey with us. Learn about our admission
            process, requirements, and what to expect before submitting an
            application.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4 text-secondary-gold" />
              <span>Contact Admissions</span>
            </a>
          </div>

          {/* Quick status pill */}
          <div className="flex items-center gap-3 pt-4 text-xs text-white/70">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Applications open for {ADMISSION_CONFIG.currentSession}</span>
          </div>
        </div>

        {/* Right Column: Featured Image with Decorative Accent */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="aspect-4/3 overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <Image
              src={images.about_about}
              alt="Students participating in classroom learning at Sarah Academy"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          {/* Decorative frame accents */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-3xl bg-secondary-gold/25 blur-xl" />
          <div className="absolute -top-4 -left-4 -z-10 h-28 w-28 rounded-3xl bg-primary-blue/25 blur-xl" />
        </div>
      </div>
    </PageSection>
  );
};

export default AdmissionsHero;
