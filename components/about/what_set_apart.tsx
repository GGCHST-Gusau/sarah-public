const DIFFERENCES = [
  {
    number: "01",
    title: "Integrated Education",
    description:
      "We bring academic education and Islamic learning together to support the development of knowledgeable and morally grounded students.",
  },
  {
    number: "02",
    title: "Child-Centred Learning",
    description:
      "We recognise that every child is unique and create opportunities for students to develop their abilities, confidence, and interests.",
  },
  {
    number: "03",
    title: "Strong Character Formation",
    description:
      "Beyond academic achievement, we intentionally nurture discipline, integrity, responsibility, respect, and good character.",
  },
  {
    number: "04",
    title: "Supportive Community",
    description:
      "We value strong relationships between students, teachers, parents, and the wider school community.",
  },
  {
    number: "05",
    title: "Future-Focused Education",
    description:
      "We prepare students with the knowledge, skills, confidence, and values they need to navigate a changing world.",
  },
];
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const WhatSetApart = () => {
  return (
    <PageSection>
      <div className="relative flex items-center justify-between gap-6 max-lg:flex-col-reverse xl:gap-24">
        {/* Image */}
        <div className="relative w-full max-w-150 shrink-0">
          <div className="aspect-4/5 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/about/what-sets-us-apart.jpg"
              alt="Students learning and participating at our school"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-2xl bg-secondary-gold/20 md:block" />
        </div>

        {/* Content */}
        <div className="w-full">
          <SectionTitle
            title="What Sets Us Apart"
            label="An Environment Built for Growth"
          />

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Our approach combines learning, character, faith, and personal
            development to give students a stronger foundation for the future.
          </p>

          <div className="mt-10 divide-y divide-gray-200">
            {DIFFERENCES.map((item) => (
              <div key={item.number} className="flex gap-5 py-5 first:pt-0">
                <span className="w-8 shrink-0 text-sm font-bold text-secondary-gold">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-primary-dark-blue">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-gray-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default WhatSetApart;
