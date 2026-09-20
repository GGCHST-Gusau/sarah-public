"use client";

import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageSection from "../shared/page-section";

export default function Cta() {
  const pathname = usePathname();

  // Avoid duplicating the CTA on admissions/apply pages where FinalAdmissionsCta is explicitly rendered
  if (
    pathname === "/admissions" ||
    pathname === "/apply" ||
    pathname === "/apply-now"
  ) {
    return null;
  }

  return (
    <PageSection>
      <div className="relative overflow-hidden rounded-3xl bg-primary-dark-blue px-6 py-16 text-center md:px-12 md:py-20">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-blue/20" />
        <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-secondary-gold/10" />

        <div className="relative mx-auto max-w-3xl">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-gold">
            Start Their Journey
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Give Your Child a Stronger Start
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Give your child an environment where they can learn with confidence,
            grow in character, strengthen their values, and prepare for a
            successful future.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-gold px-6 py-3.5 text-sm font-semibold text-primary-dark-blue transition hover:opacity-90"
            >
              Apply for Admission
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
