import { CalendarDays } from "lucide-react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const TIMELINE_ITEMS = [
  {
    label: "Our Beginning",
    title: "Where It All Started",
    description:
      "Add the school's founding story, establishment year, and the vision that inspired its creation.",
    side: "left",
    showIcon: true,
  },
  {
    label: "Growth & Development",
    title: "Growing Our Community",
    description:
      "Add important milestones, expansion of school sections, achievements, facilities, or other major developments.",
    side: "right",
    showIcon: false,
  },
  {
    label: "Today & Beyond",
    title: "Looking to the Future",
    description:
      "Share where the school is today and its aspirations for the future.",
    side: "left",
    showIcon: false,
  },
] as const;

const Hstory = () => {
  return (
    <PageSection>
      <SectionTitle
        title="Our Story"
        label="Our Journey"
        className="text-center"
      />
      <p className="mx-auto max-w-3xl text-center text-base leading-7 md:text-lg">
        From our beginnings to where we are today, our journey has been shaped
        by a commitment to meaningful education and the development of young
        people.
      </p>

      {/* Timeline */}
      <div className="mx-auto w-full max-w-4xl">
        <div className="relative space-y-12 before:absolute before:left-3.75 before:top-2 before:h-[calc(100%-8px)] before:w-px before:bg-muted-foreground md:before:left-1/2">
          {TIMELINE_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative md:grid md:grid-cols-2 md:gap-12"
            >
              {item.side === "right" && <div className="hidden md:block" />}

              <div
                className={
                  item.side === "left"
                    ? "pl-10 md:pr-12 md:pl-0 md:text-right"
                    : "pl-10 md:pl-12"
                }
              >
                <span className="text-sm font-semibold text-secondary-gold">
                  {item.showIcon && (
                    <CalendarDays className="mr-1 inline-block h-4 w-4" />
                  )}
                  {item.label}
                </span>

                <h3 className="mt-2 text-xl font-bold text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 md:text-base">
                  {item.description}
                </p>
              </div>

              {item.side === "left" && <div className="hidden md:block" />}

              <div className="absolute left-2.25 top-1 h-3 w-3 rounded-full bg-primary-blue ring-4 ring-secondary-gold md:left-[calc(50%-6px)]" />
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default Hstory;
