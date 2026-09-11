import { SCHOOL_SECTIONS } from "@/constants/sections";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const Sections = () => {
  return (
    <PageSection className="bg-primary-dark-blue">
      <SectionTitle
        title="Our School"
        label="One School. Four Pathways. One Purpose."
        className="text-center text-white"
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {SCHOOL_SECTIONS.map((section) => (
          <div
            key={section.title}
            className="relative group overflow-hidden flex flex-col gap-4 items-center py-10 px-6 lg:py-16 lg:px-8 bg-white text-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1  transition-a;; duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary-blue origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            <section.icon
              className="bg-linear-to-br text-white from-primary-dark-blue to-primary-blue p-4 rounded-2xl"
              size={64}
            />

            <h3 className="text-2xl font-medium text-primary-blue">
              {section.title}
            </h3>
            <p className="text-lg text-center ">{section.description}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Sections;
