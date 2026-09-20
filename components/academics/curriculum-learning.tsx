import { CURRICULUM_PILLARS } from "@/constants/academics";
import { BookOpen, Check, Layers, ShieldCheck } from "lucide-react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const CurriculumLearning = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <SectionTitle
          title="Curriculum & Learning"
          label="Rigorous Academics Harmonised with Islamic Scholarship"
          className="text-center"
        />

        {/* 4 Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8">
          {CURRICULUM_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8"
            >
              <div>
                <div className="inline-block rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold text-primary-blue">
                  {pillar.badge}
                </div>

                <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                  {pillar.description}
                </p>

                <div className="mt-6 border-t border-border pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                    Key Subject Areas
                  </span>
                  <div className="mt-3 grid gap-2 sm:grid-cols-1">
                    {pillar.subjects.map((subj) => (
                      <div
                        key={subj}
                        className="flex items-center gap-2 text-xs font-medium text-foreground/90 sm:text-sm"
                      >
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-blue/15 text-primary-blue">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span>{subj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Curriculum Synergy Box */}
        <div className="relative overflow-hidden rounded-2xl border border-secondary-gold/30 bg-gradient-to-br from-primary-dark-blue to-primary-blue p-6 text-white md:p-10">
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-gold">
                <ShieldCheck className="h-4 w-4" />
                The Sarah Academy Advantage
              </div>
              <h3 className="text-2xl font-bold md:text-3xl">
                Two Wings, One Goal: Academic & Moral Distinction
              </h3>
              <p className="text-sm leading-6 text-white/80 md:text-base">
                We believe that modern academic excellence and authentic Islamic
                character do not conflict—they reinforce each other. Our
                balanced daily routine ensures neither Western academic rigor
                nor spiritual scholarship is compromised.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0">
              <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xs">
                <div className="text-xl font-bold text-secondary-gold md:text-2xl">
                  WAEC / NECO
                </div>
                <div className="mt-1 text-xs text-white/75">
                  National Exam Readiness
                </div>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xs">
                <div className="text-xl font-bold text-secondary-gold md:text-2xl">
                  Tahfiz & Tajweed
                </div>
                <div className="mt-1 text-xs text-white/75">
                  Spiritual Grounding
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default CurriculumLearning;
