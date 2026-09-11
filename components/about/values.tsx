import {
  Award,
  Heart,
  Handshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const VALUES = [
  {
    title: "Excellence",
    description:
      "We encourage every student to pursue their best in learning, character, and personal development.",
    icon: Award,
  },
  {
    title: "Integrity",
    description:
      "We promote honesty, trustworthiness, and doing what is right even when no one is watching.",
    icon: ShieldCheck,
  },
  {
    title: "Discipline",
    description:
      "We develop self-discipline, responsibility, and respect for rules that help students succeed.",
    icon: Sparkles,
  },
  {
    title: "Respect",
    description:
      "We value every individual and encourage kindness, dignity, understanding, and mutual respect.",
    icon: Heart,
  },
  {
    title: "Faith & Values",
    description:
      "We nurture strong moral and Islamic values that guide students in their daily lives.",
    icon: Handshake,
  },
  {
    title: "Community",
    description:
      "We work together with students, parents, teachers, and the wider community to support every child.",
    icon: Users,
  },
];

const Values = () => {
  return (
    <PageSection>
      <SectionTitle
        title="Our Core Values"
        label="The Values We Live By"
        className="text-center"
      />
      <p className="mx-auto max-w-3xl text-center text-base leading-7 md:text-lg">
        We believe great education develops not only capable minds, but also
        responsible, respectful, and principled individuals.
      </p>

      {/* Values */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((value) => {
          const Icon = value.icon;

          return (
            <div
              key={value.title}
              className="flex gap-4 rounded-lg bg-muted/10 p-6 shadow-lg"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-blue">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-6 md:text-base">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </PageSection>
  );
};

export default Values;
