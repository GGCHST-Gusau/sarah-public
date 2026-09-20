import { ACADEMIC_RESOURCES } from "@/constants/resources";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { BookOpen, CheckCircle, FileText, GraduationCap } from "lucide-react";

const AcademicResources = () => {
  return (
    <PageSection id="academic-resources" className="bg-muted/30">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Learning Materials"
            label="Academic Curricula, Past Questions & Guides"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Supporting academic excellence with verified schemes of work, revision
            materials for national examinations, and approved curriculum booklists.
          </p>
        </div>

        {/* 4 Academic Pillars */}
        <div className="grid gap-6 md:grid-cols-2">
          {ACADEMIC_RESOURCES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary-blue/50 hover:shadow-md sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold text-primary-blue">
                    {item.division}
                  </span>
                  <GraduationCap className="h-5 w-5 text-secondary-gold" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs leading-6 text-muted-foreground sm:text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                <span className="text-xs font-medium text-muted-foreground">
                  NERDC & WAEC Aligned
                </span>
                <a
                  href="#downloads"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-blue hover:text-primary-dark-blue"
                >
                  <span>Request / Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Exam Readiness Information Strip */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h4 className="text-base font-bold text-foreground sm:text-lg">
            National Examination Support Center (BECE, WAEC, NECO & JAMB)
          </h4>
          <p className="mt-1 text-xs leading-6 text-muted-foreground sm:text-sm max-w-3xl">
            Students entering exam classes (Basic 6, JSS 3, and SSS 3) receive
            dedicated revision packages including 5-year past question analyses,
            formula sheets, and marking scheme workshops delivered by certified
            examiners.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              National Common Entrance (NCEE)
            </span>
            <span className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              BECE (Junior WAEC)
            </span>
            <span className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              WASSCE / WAEC
            </span>
            <span className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              NECO SSCE
            </span>
            <span className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              UTME (JAMB)
            </span>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AcademicResources;
