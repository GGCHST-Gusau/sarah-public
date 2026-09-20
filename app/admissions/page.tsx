import type { Metadata } from "next";
import AdmissionsHero from "@/components/admissions/admissions-hero";
import AdmissionsOverview from "@/components/admissions/admissions-overview";
import HowAdmissionWorks from "@/components/admissions/how-admission-works";
import WhoCanApply from "@/components/admissions/who-can-apply";
import AdmissionRequirements from "@/components/admissions/admission-requirements";
import ApplicationProcess from "@/components/admissions/application-process";
import AfterYouApply from "@/components/admissions/after-you-apply";
import ImportantInformation from "@/components/admissions/important-information";
import AdmissionsFaq from "@/components/admissions/admissions-faq";
import FinalAdmissionsCta from "@/components/admissions/final-admissions-cta";

export const metadata: Metadata = {
  title: "Admissions | Sarah Academy",
  description:
    "Learn about the admission process, requirements, and educational pathways at Sarah Academy in Gusau, Zamfara State. Apply online through our dedicated portal.",
};

export default function AdmissionsPage() {
  return (
    <>
      <AdmissionsHero />
      <AdmissionsOverview />
      <HowAdmissionWorks />
      <WhoCanApply />
      <AdmissionRequirements />
      <ApplicationProcess />
      <AfterYouApply />
      <ImportantInformation />
      <AdmissionsFaq />
      <FinalAdmissionsCta />
    </>
  );
}
