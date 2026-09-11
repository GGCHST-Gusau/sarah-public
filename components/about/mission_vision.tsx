import { Eye, Target } from "lucide-react";
import PageSection from "../shared/page-section";
import SectionTitle from "../shared/section-title";

const MissionVision = () => {
  return (
    <PageSection>
      <SectionTitle
        title="Our Purpose"
        label="What Guides Us"
        className="text-center"
      />
      <p className="mx-auto max-w-3xl text-center leading-7 md:text-lg">
        Everything we do is guided by a clear purpose: to provide meaningful
        education that prepares children for life.
      </p>

      {/* Mission & Vision */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Mission */}
        <div className="rounded-2xl bg-primary-dark-blue text-white p-6 shadow-lg md:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-secondary-gold">
            <Target className="h-6 w-6" />
          </div>

          <h3 className="mt-7 text-2xl font-bold">Our Mission</h3>

          <p className="mt-4 leading-7 md:text-lg">
            To provide quality education in a supportive environment that
            develops academic excellence, strong character, practical skills,
            and sound values.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-2xl border border-secondary-gold/20 bg-secondary-gold/90 text-white p-6 shadow-lg md:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200/40 text-primary-blue">
            <Eye className="h-6 w-6" />
          </div>

          <h3 className="mt-7 text-2xl font-bold">Our Vision</h3>

          <p className="mt-4 leading-7 md:text-lg">
            To become a leading institution that nurtures knowledgeable,
            confident, responsible, and morally grounded individuals prepared to
            make a positive impact in society.
          </p>
        </div>
      </div>
    </PageSection>
  );
};

export default MissionVision;
