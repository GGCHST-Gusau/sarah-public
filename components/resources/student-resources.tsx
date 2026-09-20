import { STUDENT_RESOURCES } from "@/constants/resources";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { ArrowRight, BookMarked, ShieldCheck } from "lucide-react";

const StudentResources = () => {
  return (
    <PageSection id="student-resources">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Student Hub"
            label="Essential Guides & Daily Tools for Students"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Tools, schedules, code of conduct, and spiritual logs designed to help
            every Sarah Academy student thrive in academic performance and upright
            character.
          </p>
        </div>

        {/* 4 Student Resource Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STUDENT_RESOURCES.map((res) => {
            const Icon = res.icon;
            return (
              <div
                key={res.title}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-secondary-gold">
                      {res.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary-blue transition-colors">
                    {res.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                    {res.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/70 pt-4">
                  <a
                    href="#downloads"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-blue transition-colors hover:text-primary-dark-blue hover:gap-2"
                  >
                    <span>Access Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Student Honour Code Callout */}
        <div className="relative overflow-hidden rounded-2xl border border-primary-blue/30 bg-gradient-to-br from-primary-dark-blue to-primary-blue p-6 text-white md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary-gold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold">The Sarah Academy Student Pledge</h4>
                <p className="text-xs leading-5 text-white/80 sm:text-sm max-w-2xl">
                  "I promise to pursue knowledge with diligence, speak the truth
                  with courage, treat everyone with dignity, and embody sound
                  Islamic character in all my actions."
                </p>
              </div>
            </div>
            <a
              href="#downloads"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary-gold px-5 py-2.5 text-xs font-bold text-primary-dark-blue transition-colors hover:bg-yellow-400 shrink-0 sm:text-sm"
            >
              <BookMarked className="h-4 w-4" />
              <span>Full Code of Conduct</span>
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default StudentResources;
