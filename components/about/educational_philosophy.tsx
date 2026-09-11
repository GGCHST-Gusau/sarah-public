import { BookOpen, Heart, Lightbulb, ShieldCheck } from "lucide-react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const PHILOSOPHY = [
  {
    title: "Academic Growth",
    description:
      "We encourage curiosity, critical thinking, and a love for learning that helps every student reach their academic potential.",
    icon: BookOpen,
  },
  {
    title: "Character Development",
    description:
      "We help students develop discipline, responsibility, confidence, integrity, and respect for others.",
    icon: ShieldCheck,
  },
  {
    title: "Faith & Values",
    description:
      "We nurture sound Islamic values and moral principles that guide students in their decisions and everyday lives.",
    icon: Heart,
  },
  {
    title: "Holistic Development",
    description:
      "We support the development of the whole child through creativity, practical skills, leadership, teamwork, and other experiences.",
    icon: Lightbulb,
  },
];

const EducationalPhilosophy = () => {
  return (
    <PageSection>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Intro */}
        <div>
          <SectionTitle
            title="Our Educational Philosophy"
            label="Education Beyond the Classroom"
          />

          <p className="mt-6 text-base leading-7 md:text-lg">
            We believe education should prepare children not only to perform
            well academically, but also to become confident, responsible,
            principled, and capable individuals.
          </p>
        </div>

        {/* Philosophy */}
        <div className="divide-y divide-muted rounded-2xl border border-muted bg-muted/10 p-6 shadow-lg">
          {PHILOSOPHY.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-5 py-7 first:pt-0 last:pb-0"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-secondary-gold">
                      0{index + 1}
                    </span>

                    <h3 className="text-lg font-bold text-primary-blue md:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm leading-6 md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default EducationalPhilosophy;
