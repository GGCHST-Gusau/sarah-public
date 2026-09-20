import type { Metadata } from "next";
import ResourcesHero from "@/components/resources/resources-hero";
import QuickAccess from "@/components/resources/quick-access";
import ParentResources from "@/components/resources/parent-resources";
import StudentResources from "@/components/resources/student-resources";
import AcademicResources from "@/components/resources/academic-resources";
import SchoolDocuments from "@/components/resources/school-documents";
import SchoolCalendarView from "@/components/resources/school-calendar-view";
import UsefulLinks from "@/components/resources/useful-links";
import NeedHelp from "@/components/resources/need-help";

export const metadata: Metadata = {
  title: "Resources & Portals | Sarah Academy",
  description:
    "Official school resources repository for Sarah Academy. Access student handbooks, 2026/2027 academic calendar, step-by-step how-to guides, past questions, and parent portal.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <QuickAccess />
      <ParentResources />
      <StudentResources />
      <AcademicResources />
      <SchoolDocuments />
      <SchoolCalendarView />
      <UsefulLinks />
      <NeedHelp />
    </>
  );
}
