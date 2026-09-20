import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";
import { GraduationCap, Users, Building2, ArrowRight } from "lucide-react";

const INQUIRY_PATHWAYS = [
  {
    title: "Prospective Families",
    badge: "Admissions",
    description:
      "Looking for a strong academic and moral foundation for your child? Learn about admission requirements, class placement, and tour bookings.",
    action: "Inquire About Admissions",
    targetId: "send-message",
    icon: GraduationCap,
  },
  {
    title: "Current Enrolled Families",
    badge: "Parent Liaison",
    description:
      "Need assistance with student academic records, PTA discussions, transport schedules, or fee receipt verification?",
    action: "Contact Parent Desk",
    targetId: "send-message",
    icon: Users,
  },
  {
    title: "Community & Partners",
    badge: "Administration",
    description:
      "Collaborations, inter-school competitions, educational initiatives, alumni correspondence, or vendor inquiries.",
    action: "General Inquiry",
    targetId: "send-message",
    icon: Building2,
  },
];

const GetInTouch = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Get In Touch"
            label="How Can We Help You Today?"
            className="text-center"
          />
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            At Sarah Academy, we prioritize prompt, friendly, and transparent
            communication. Choose your primary area of interest below so we can
            connect you directly with the right department.
          </p>
        </div>

        {/* 3 Inquiry Pathways */}
        <div className="grid gap-6 md:grid-cols-3">
          {INQUIRY_PATHWAYS.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <div
                key={pathway.title}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/50 hover:shadow-lg sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-secondary-gold/15 px-3 py-1 text-xs font-semibold text-secondary-gold">
                      {pathway.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary-blue transition-colors">
                    {pathway.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                    {pathway.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/70 pt-4">
                  <a
                    href={`#${pathway.targetId}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-blue transition-colors hover:text-primary-dark-blue hover:gap-2"
                  >
                    <span>{pathway.action}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default GetInTouch;
