import type { Metadata } from "next";
import AcademicsHero from "@/components/academics/academics-hero";
import LearningApproach from "@/components/academics/learning-approach";
import EducationalSections from "@/components/academics/educational-sections";
import CurriculumLearning from "@/components/academics/curriculum-learning";
import StudentDevelopment from "@/components/academics/student-development";
import BeyondClassroom from "@/components/academics/beyond-classroom";
import AssessmentProgress from "@/components/academics/assessment-progress";
import AcademicSupport from "@/components/academics/academic-support";
import AcademicDates from "@/components/academics/academic-dates";

export const metadata: Metadata = {
  title: "Academics | Sarah Academy",
  description:
    "Discover the academic pathways at Sarah Academy: Nursery, Primary, Secondary, and Tahfiz & Islamiyya. Blending Nigerian NERDC curriculum excellence with authentic Islamic values.",
};

export default function AcademicsPage() {
  return (
    <>
      <AcademicsHero />
      <LearningApproach />
      <EducationalSections />
      <CurriculumLearning />
      <StudentDevelopment />
      <BeyondClassroom />
      <AssessmentProgress />
      <AcademicSupport />
      <AcademicDates />
    </>
  );
}
